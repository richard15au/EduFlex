import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  ListObjectsV2Command,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { mkdir, readFile, readdir, stat, writeFile } from "fs/promises";
import path from "path";
import crypto from "crypto";

export type StorageProvider = "cloudflare-r2" | "neon-object-storage" | "local-fallback";
export type BackupProvider = "cloudflare-r2" | "local-r2-mirror";

export interface StorageConfigStatus {
  primaryProvider: StorageProvider;
  primaryBucket: string;
  primaryEndpointConfigured: boolean;
  r2BackupProvider: BackupProvider;
  r2Bucket: string;
  r2Configured: boolean;
}

export interface StoredObjectResult {
  provider: StorageProvider;
  storageKey: string;
  sizeBytes: number;
  sha256: string;
  etag?: string;
}

export interface BackupUploadResult {
  provider: BackupProvider;
  backupKey: string;
  sizeBytes: number;
  sha256: string;
  etag?: string;
}

export interface StorageObjectSummary {
  key: string;
  sizeBytes: number;
  lastModified: string;
  provider: StorageProvider | BackupProvider;
}

const LOCAL_PRIMARY_DIR = path.join(process.cwd(), "storage", "submissions");
const LOCAL_R2_BACKUP_DIR = path.join(process.cwd(), "storage", "backups", "r2-local");

function getPrimaryS3Config() {
  const r2AccountId = process.env.R2_ACCOUNT_ID?.trim();
  const r2Endpoint =
    process.env.R2_ENDPOINT?.trim() ||
    (r2AccountId ? `https://${r2AccountId}.r2.cloudflarestorage.com` : undefined);

  const explicitEndpoint =
    process.env.NEON_OBJECT_STORAGE_ENDPOINT?.trim() ||
    process.env.AWS_ENDPOINT_URL_S3?.trim();
  const endpoint = explicitEndpoint || r2Endpoint;

  const bucket =
    process.env.R2_OBJECTS_BUCKET?.trim() ||
    process.env.NEON_OBJECT_STORAGE_BUCKET?.trim() ||
    process.env.AWS_S3_BUCKET?.trim() ||
    "eduflex-objects";
  const accessKeyId =
    process.env.NEON_OBJECT_STORAGE_ACCESS_KEY_ID?.trim() ||
    process.env.AWS_ACCESS_KEY_ID?.trim() ||
    process.env.R2_ACCESS_KEY_ID?.trim();
  const secretAccessKey =
    process.env.NEON_OBJECT_STORAGE_SECRET_ACCESS_KEY?.trim() ||
    process.env.AWS_SECRET_ACCESS_KEY?.trim() ||
    process.env.R2_SECRET_ACCESS_KEY?.trim();
  const region =
    process.env.NEON_OBJECT_STORAGE_REGION?.trim() ||
    process.env.AWS_REGION?.trim() ||
    "auto";

  const configured = Boolean(endpoint && accessKeyId && secretAccessKey && bucket);
  const provider: StorageProvider = !configured
    ? "local-fallback"
    : endpoint?.includes("r2.cloudflarestorage.com") || (!explicitEndpoint && Boolean(r2Endpoint))
      ? "cloudflare-r2"
      : "neon-object-storage";

  return { configured, provider, endpoint, bucket, accessKeyId, secretAccessKey, region };
}

function getR2Config() {
  const accountId = process.env.R2_ACCOUNT_ID?.trim();
  const endpoint =
    process.env.R2_ENDPOINT?.trim() ||
    (accountId ? `https://${accountId}.r2.cloudflarestorage.com` : undefined);
  const bucket = process.env.R2_BACKUP_BUCKET?.trim() || process.env.R2_BUCKET_NAME?.trim() || "eduflex-dr-backups";
  const accessKeyId = process.env.R2_ACCESS_KEY_ID?.trim();
  const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY?.trim();

  const configured = Boolean(endpoint && accessKeyId && secretAccessKey && bucket);
  return { configured, endpoint, bucket, accessKeyId, secretAccessKey };
}

function createS3Client(endpoint: string, region: string, accessKeyId: string, secretAccessKey: string): S3Client {
  return new S3Client({
    region,
    endpoint,
    forcePathStyle: true,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });
}

export function getStorageConfigStatus(): StorageConfigStatus {
  const primary = getPrimaryS3Config();
  const r2 = getR2Config();
  return {
    primaryProvider: primary.provider,
    primaryBucket: primary.bucket,
    primaryEndpointConfigured: primary.configured,
    r2BackupProvider: r2.configured ? "cloudflare-r2" : "local-r2-mirror",
    r2Bucket: r2.bucket,
    r2Configured: r2.configured,
  };
}

export async function uploadObjectToPrimaryStorage(params: {
  key: string;
  body: Buffer;
  contentType: string;
  metadata?: Record<string, string>;
}): Promise<StoredObjectResult> {
  const safeKey = path.basename(params.key);
  const sha256 = crypto.createHash("sha256").update(params.body).digest("hex");
  const primary = getPrimaryS3Config();

  if (primary.configured && primary.endpoint && primary.accessKeyId && primary.secretAccessKey) {
    const client = createS3Client(
      primary.endpoint,
      primary.region,
      primary.accessKeyId,
      primary.secretAccessKey
    );
    const result = await client.send(
      new PutObjectCommand({
        Bucket: primary.bucket,
        Key: safeKey,
        Body: params.body,
        ContentType: params.contentType,
        Metadata: { ...params.metadata, sha256 },
      })
    );
    return {
      provider: primary.provider,
      storageKey: safeKey,
      sizeBytes: params.body.byteLength,
      sha256,
      etag: result.ETag,
    };
  }

  // Local fallback for dev/CI when Neon Object Storage env vars are unset
  await mkdir(LOCAL_PRIMARY_DIR, { recursive: true });
  await writeFile(path.join(LOCAL_PRIMARY_DIR, safeKey), params.body);

  return {
    provider: "local-fallback",
    storageKey: safeKey,
    sizeBytes: params.body.byteLength,
    sha256,
  };
}

export async function getObjectFromPrimaryStorage(key: string): Promise<{
  bytes: Buffer;
  provider: StorageProvider;
} | null> {
  const safeKey = path.basename(key);
  const primary = getPrimaryS3Config();

  if (primary.configured && primary.endpoint && primary.accessKeyId && primary.secretAccessKey) {
    try {
      const client = createS3Client(
        primary.endpoint,
        primary.region,
        primary.accessKeyId,
        primary.secretAccessKey
      );
      const res = await client.send(
        new GetObjectCommand({
          Bucket: primary.bucket,
          Key: safeKey,
        })
      );
      if (res.Body) {
        const byteArray = await res.Body.transformToByteArray();
        return { bytes: Buffer.from(byteArray), provider: primary.provider };
      }
    } catch {
      // Fall through to local fallback
    }
  }

  try {
    const bytes = await readFile(path.join(LOCAL_PRIMARY_DIR, safeKey));
    return { bytes, provider: "local-fallback" };
  } catch {
    return null;
  }
}

export async function getPresignedDownloadUrl(key: string, expiresInSeconds = 300): Promise<string | null> {
  const safeKey = path.basename(key);
  const primary = getPrimaryS3Config();
  if (!primary.configured || !primary.endpoint || !primary.accessKeyId || !primary.secretAccessKey) {
    return null;
  }

  const client = createS3Client(
    primary.endpoint,
    primary.region,
    primary.accessKeyId,
    primary.secretAccessKey
  );
  return getSignedUrl(
    client,
    new GetObjectCommand({ Bucket: primary.bucket, Key: safeKey }),
    { expiresIn: expiresInSeconds }
  );
}

export async function listPrimaryStorageObjects(prefix?: string): Promise<StorageObjectSummary[]> {
  const primary = getPrimaryS3Config();
  if (primary.configured && primary.endpoint && primary.accessKeyId && primary.secretAccessKey) {
    const client = createS3Client(
      primary.endpoint,
      primary.region,
      primary.accessKeyId,
      primary.secretAccessKey
    );
    const res = await client.send(
      new ListObjectsV2Command({
        Bucket: primary.bucket,
        Prefix: prefix,
        MaxKeys: 200,
      })
    );
    return (res.Contents ?? [])
      .filter((item) => item.Key)
      .map((item) => ({
        key: item.Key!,
        sizeBytes: item.Size ?? 0,
        lastModified: (item.LastModified ?? new Date()).toISOString(),
        provider: primary.provider,
      }));
  }

  try {
    await mkdir(LOCAL_PRIMARY_DIR, { recursive: true });
    const entries = await readdir(LOCAL_PRIMARY_DIR);
    const summaries: StorageObjectSummary[] = [];
    for (const entry of entries) {
      if (prefix && !entry.startsWith(prefix)) continue;
      const fullPath = path.join(LOCAL_PRIMARY_DIR, entry);
      const info = await stat(fullPath);
      if (info.isFile()) {
        summaries.push({
          key: entry,
          sizeBytes: info.size,
          lastModified: info.mtime.toISOString(),
          provider: "local-fallback",
        });
      }
    }
    return summaries.sort((a, b) => b.lastModified.localeCompare(a.lastModified));
  } catch {
    return [];
  }
}

export async function uploadBackupToR2(params: {
  key: string;
  body: Buffer;
  contentType: string;
  metadata?: Record<string, string>;
}): Promise<BackupUploadResult> {
  const normalizedKey = params.key.replace(/^\/+/, "").replace(/\.\./g, "");
  const sha256 = crypto.createHash("sha256").update(params.body).digest("hex");
  const r2 = getR2Config();

  if (r2.configured && r2.endpoint && r2.accessKeyId && r2.secretAccessKey) {
    const client = createS3Client(r2.endpoint, "auto", r2.accessKeyId, r2.secretAccessKey);
    const res = await client.send(
      new PutObjectCommand({
        Bucket: r2.bucket,
        Key: normalizedKey,
        Body: params.body,
        ContentType: params.contentType,
        Metadata: { ...params.metadata, sha256 },
      })
    );
    return {
      provider: "cloudflare-r2",
      backupKey: normalizedKey,
      sizeBytes: params.body.byteLength,
      sha256,
      etag: res.ETag,
    };
  }

  // Local R2 mirror fallback so backup verification works without cloud secrets
  const destPath = path.join(LOCAL_R2_BACKUP_DIR, normalizedKey);
  await mkdir(path.dirname(destPath), { recursive: true });
  await writeFile(destPath, params.body);

  return {
    provider: "local-r2-mirror",
    backupKey: normalizedKey,
    sizeBytes: params.body.byteLength,
    sha256,
  };
}

async function walkLocalDir(dir: string, rootDir: string): Promise<StorageObjectSummary[]> {
  const results: StorageObjectSummary[] = [];
  let entries: string[] = [];
  try {
    entries = await readdir(dir);
  } catch {
    return results;
  }

  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    const info = await stat(fullPath);
    if (info.isDirectory()) {
      results.push(...(await walkLocalDir(fullPath, rootDir)));
    } else if (info.isFile()) {
      results.push({
        key: path.relative(rootDir, fullPath).replace(/\\/g, "/"),
        sizeBytes: info.size,
        lastModified: info.mtime.toISOString(),
        provider: "local-r2-mirror",
      });
    }
  }
  return results;
}

export async function listR2Backups(prefix = "backups/"): Promise<StorageObjectSummary[]> {
  const r2 = getR2Config();
  if (r2.configured && r2.endpoint && r2.accessKeyId && r2.secretAccessKey) {
    const client = createS3Client(r2.endpoint, "auto", r2.accessKeyId, r2.secretAccessKey);
    const res = await client.send(
      new ListObjectsV2Command({
        Bucket: r2.bucket,
        Prefix: prefix,
        MaxKeys: 200,
      })
    );
    return (res.Contents ?? [])
      .filter((item) => item.Key)
      .map((item) => ({
        key: item.Key!,
        sizeBytes: item.Size ?? 0,
        lastModified: (item.LastModified ?? new Date()).toISOString(),
        provider: "cloudflare-r2",
      }));
  }

  const allLocal = await walkLocalDir(LOCAL_R2_BACKUP_DIR, LOCAL_R2_BACKUP_DIR);
  return allLocal
    .filter((item) => item.key.startsWith(prefix))
    .sort((a, b) => b.lastModified.localeCompare(a.lastModified));
}
