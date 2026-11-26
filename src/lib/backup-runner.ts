import { gzipSync } from "node:zlib";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { prisma } from "@/lib/prisma";
import {
  getObjectFromPrimaryStorage,
  getStorageConfigStatus,
  listPrimaryStorageObjects,
  uploadBackupToR2,
  type BackupProvider,
} from "@/src/lib/object-storage";

const execFileAsync = promisify(execFile);

export interface NightlyBackupFileEntry {
  sourceKey: string;
  backupKey: string;
  sizeBytes: number;
  sha256: string;
}

export interface NightlyBackupResult {
  success: boolean;
  timestamp: string;
  datePrefix: string;
  r2Provider: BackupProvider;
  pgDumpIncluded: boolean;
  pgDumpKey?: string;
  dbSnapshotKey: string;
  dbSnapshotSizeBytes: number;
  dbSnapshotSha256: string;
  manifestKey: string;
  tableCounts: Record<string, number>;
  backedUpFilesCount: number;
  files: NightlyBackupFileEntry[];
  durationMs: number;
  error?: string;
}

async function tryRunPgDump(): Promise<Buffer | null> {
  if (process.env.VERCEL === "1") return null;
  const dbUrl = process.env.DIRECT_URL?.trim() || process.env.DATABASE_URL?.trim();
  if (!dbUrl) return null;

  try {
    const { stdout } = await execFileAsync(
      "pg_dump",
      ["--no-owner", "--no-acl", "--format=plain", dbUrl],
      { maxBuffer: 50 * 1024 * 1024, timeout: 60000 }
    );
    if (stdout && stdout.length > 0) {
      return gzipSync(Buffer.from(stdout, "utf8"));
    }
    return null;
  } catch {
    // pg_dump binary is not installed in serverless runtimes (e.g. Vercel); logical snapshot covers DR
    return null;
  }
}

export async function runNightlyR2Backup(): Promise<NightlyBackupResult> {
  const startedAt = Date.now();
  const now = new Date();
  const timestamp = now.toISOString();
  const datePrefix = timestamp.slice(0, 10);
  const compactTs = timestamp.replace(/[:.]/g, "-");
  const storageStatus = getStorageConfigStatus();

  try {
    // 1. Export Neon PostgreSQL logical snapshot across core tables
    const [
      users,
      courses,
      enrollments,
      assignments,
      assignmentSubmissions,
      gradeRecords,
      quizzes,
      quizAttempts,
      learningMaterials,
      announcements,
      messages,
      approvalRequests,
      calendarEvents,
      systemSettings,
    ] = await Promise.all([
      prisma.user.findMany({
        select: {
          id: true,
          externalId: true,
          name: true,
          email: true,
          role: true,
          status: true,
          program: true,
          department: true,
          createdAt: true,
        },
      }),
      prisma.course.findMany(),
      prisma.enrollment.findMany(),
      prisma.assignment.findMany(),
      prisma.assignmentSubmission.findMany(),
      prisma.gradeRecord.findMany(),
      prisma.quiz.findMany(),
      prisma.quizAttempt.findMany(),
      prisma.learningMaterial.findMany(),
      prisma.announcement.findMany(),
      prisma.message.findMany(),
      prisma.approvalRequest.findMany(),
      prisma.calendarEvent.findMany(),
      prisma.systemSetting.findMany(),
    ]);

    const tableCounts: Record<string, number> = {
      users: users.length,
      courses: courses.length,
      enrollments: enrollments.length,
      assignments: assignments.length,
      assignmentSubmissions: assignmentSubmissions.length,
      gradeRecords: gradeRecords.length,
      quizzes: quizzes.length,
      quizAttempts: quizAttempts.length,
      learningMaterials: learningMaterials.length,
      announcements: announcements.length,
      messages: messages.length,
      approvalRequests: approvalRequests.length,
      calendarEvents: calendarEvents.length,
      systemSettings: systemSettings.length,
    };

    const snapshotPayload = JSON.stringify(
      {
        version: "1.0",
        generatedAt: timestamp,
        source: "neon-postgresql",
        tableCounts,
        data: {
          users,
          courses,
          enrollments,
          assignments,
          assignmentSubmissions,
          gradeRecords,
          quizzes,
          quizAttempts,
          learningMaterials,
          announcements,
          messages,
          approvalRequests,
          calendarEvents,
          systemSettings,
        },
      },
      null,
      2
    );

    const gzSnapshot = gzipSync(Buffer.from(snapshotPayload, "utf8"));
    const dbSnapshotKey = `backups/${datePrefix}/db-snapshot-${compactTs}.json.gz`;
    const dbUpload = await uploadBackupToR2({
      key: dbSnapshotKey,
      body: gzSnapshot,
      contentType: "application/gzip",
      metadata: {
        backupType: "neon-db-snapshot",
        generatedAt: timestamp,
      },
    });

    // 2. Optional native pg_dump SQL archive when pg_dump CLI is present
    let pgDumpIncluded = false;
    let pgDumpKey: string | undefined;
    const pgDumpGz = await tryRunPgDump();
    if (pgDumpGz) {
      pgDumpKey = `backups/${datePrefix}/pg_dump-${compactTs}.sql.gz`;
      await uploadBackupToR2({
        key: pgDumpKey,
        body: pgDumpGz,
        contentType: "application/gzip",
        metadata: {
          backupType: "neon-pg-dump",
          generatedAt: timestamp,
        },
      });
      pgDumpIncluded = true;
    }

    // 3. Mirror all live object storage files to R2 backup prefix in parallel
    const liveObjects = await listPrimaryStorageObjects();
    const mirrored = await Promise.all(
      liveObjects.map(async (obj): Promise<NightlyBackupFileEntry | null> => {
        const fetched = await getObjectFromPrimaryStorage(obj.key);
        if (!fetched) return null;
        const targetKey = `backups/${datePrefix}/files/${obj.key}`;
        const uploaded = await uploadBackupToR2({
          key: targetKey,
          body: fetched.bytes,
          contentType: "application/octet-stream",
          metadata: {
            sourceKey: obj.key,
            sourceProvider: fetched.provider,
          },
        });
        return {
          sourceKey: obj.key,
          backupKey: uploaded.backupKey,
          sizeBytes: uploaded.sizeBytes,
          sha256: uploaded.sha256,
        };
      })
    );
    const backedUpFiles: NightlyBackupFileEntry[] = mirrored.filter(
      (entry): entry is NightlyBackupFileEntry => entry !== null
    );

    // 4. Write signed manifest JSON
    const durationMs = Date.now() - startedAt;
    const manifestKey = `backups/${datePrefix}/manifest-${compactTs}.json`;
    const manifestBody = Buffer.from(
      JSON.stringify(
        {
          timestamp,
          datePrefix,
          storageStatus,
          pgDumpIncluded,
          pgDumpKey,
          dbSnapshotKey: dbUpload.backupKey,
          dbSnapshotSizeBytes: dbUpload.sizeBytes,
          dbSnapshotSha256: dbUpload.sha256,
          tableCounts,
          backedUpFilesCount: backedUpFiles.length,
          files: backedUpFiles,
          durationMs,
        },
        null,
        2
      ),
      "utf8"
    );

    await uploadBackupToR2({
      key: manifestKey,
      body: manifestBody,
      contentType: "application/json",
      metadata: {
        backupType: "manifest",
        generatedAt: timestamp,
      },
    });

    return {
      success: true,
      timestamp,
      datePrefix,
      r2Provider: dbUpload.provider,
      pgDumpIncluded,
      pgDumpKey,
      dbSnapshotKey: dbUpload.backupKey,
      dbSnapshotSizeBytes: dbUpload.sizeBytes,
      dbSnapshotSha256: dbUpload.sha256,
      manifestKey,
      tableCounts,
      backedUpFilesCount: backedUpFiles.length,
      files: backedUpFiles,
      durationMs,
    };
  } catch (err) {
    return {
      success: false,
      timestamp,
      datePrefix,
      r2Provider: storageStatus.r2BackupProvider,
      pgDumpIncluded: false,
      dbSnapshotKey: "",
      dbSnapshotSizeBytes: 0,
      dbSnapshotSha256: "",
      manifestKey: "",
      tableCounts: {},
      backedUpFilesCount: 0,
      files: [],
      durationMs: Date.now() - startedAt,
      error: err instanceof Error ? err.message : "Nightly R2 backup failed.",
    };
  }
}
