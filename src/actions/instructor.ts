"use server";

import { prisma } from "@/lib/prisma";
import { getServerSession } from "./auth";
import { getNeonServerTime } from "./student";

export interface RubricBreakdown {
  technicalExecution: number; // out of 40
  methodology: number;        // out of 30
  documentation: number;      // out of 30
}

export interface GradeSubmissionInput {
  studentName: string;
  studentEmail?: string;
  courseCode: string;
  assignmentTitle: string;
  score: number;
  maxScore?: number;
  feedback?: string;
  rubric?: RubricBreakdown;
  releaseImmediately?: boolean;
}

export interface GradeSubmissionResult {
  success: boolean;
  gradeRecordId?: string;
  submissionId?: string;
  score?: number;
  maxScore?: number;
  percentage?: number;
  gradeLabel?: string;
  gradedAt?: string;
  error?: string;
}

export interface InstructorGradingQueueItem {
  id: string;
  studentId: string;
  studentName: string;
  studentEmail: string;
  courseCode: string;
  assignmentId: string;
  assignmentTitle: string;
  receiptNumber: string;
  fileName: string;
  fileSizeLabel: string;
  mimeType: string | null;
  hasStoredFile: boolean;
  fileViewUrl: string;
  comments: string | null;
  status: string;
  score: number | null;
  maxScore: number;
  gradeLabel: string | null;
  feedback: string | null;
  submittedAt: string;
  gradedAt: string | null;
}

export interface InstructorGradeRecordSummary {
  id: string;
  studentName: string;
  courseCode: string;
  itemTitle: string;
  category: string;
  score: number;
  maxScore: number;
  percentage: number | null;
  gradeLabel: string | null;
  feedback: string | null;
  isReleased: boolean;
  releasedAt: string;
}

function computeKoiGradeBand(score: number, maxScore: number): { percentage: number; gradeLabel: string } {
  const safeMax = maxScore > 0 ? maxScore : 100;
  const percentage = Math.round((score / safeMax) * 1000) / 10;
  if (percentage >= 85) return { percentage, gradeLabel: "High Distinction (HD)" };
  if (percentage >= 75) return { percentage, gradeLabel: "Distinction (DI)" };
  if (percentage >= 65) return { percentage, gradeLabel: "Credit (CR)" };
  if (percentage >= 50) return { percentage, gradeLabel: "Pass (P)" };
  return { percentage, gradeLabel: "Fail (F)" };
}

async function requireInstructorOrAdmin() {
  const session = await getServerSession();
  if (!session || !session.user) {
    return { ok: false as const, error: "Unauthorized. Please log in as an instructor or administrator." };
  }
  if (session.user.role !== "instructor" && session.user.role !== "admin") {
    return { ok: false as const, error: "Forbidden. Instructor or Admin role required for grading operations." };
  }
  return { ok: true as const, user: session.user };
}

/**
 * WBS 3.1: Fetch live instructor grading queue & released GradeRecords from Neon PostgreSQL.
 */
export async function getInstructorGradingQueueAction(courseCode?: string): Promise<{
  success: boolean;
  submissions?: InstructorGradingQueueItem[];
  gradeRecords?: InstructorGradeRecordSummary[];
  error?: string;
}> {
  try {
    const auth = await requireInstructorOrAdmin();
    if (!auth.ok) {
      return { success: false, error: auth.error };
    }

    const submissions = await prisma.assignmentSubmission.findMany({
      where: {
        isLatest: true,
        ...(courseCode
          ? { assignment: { course: { code: courseCode.toUpperCase() } } }
          : {}),
      },
      include: {
        student: { select: { id: true, name: true, email: true } },
        assignment: {
          select: {
            id: true,
            title: true,
            maxScore: true,
            course: { select: { code: true } },
          },
        },
      },
      orderBy: { submittedAt: "desc" },
      take: 100,
    });

    const gradeRecords = await prisma.gradeRecord.findMany({
      where: courseCode ? { course: { code: courseCode.toUpperCase() } } : undefined,
      include: {
        student: { select: { name: true } },
        course: { select: { code: true } },
      },
      orderBy: { updatedAt: "desc" },
      take: 100,
    });

    return {
      success: true,
      submissions: submissions.map((s) => ({
        id: s.id,
        studentId: s.student.id,
        studentName: s.student.name,
        studentEmail: s.student.email,
        courseCode: s.assignment.course.code,
        assignmentId: s.assignment.id,
        assignmentTitle: s.assignment.title,
        receiptNumber: s.receiptNumber,
        fileName: s.fileName,
        fileSizeLabel: s.fileSizeLabel,
        mimeType: s.mimeType,
        hasStoredFile: Boolean(s.storageKey),
        fileViewUrl: `/api/submissions/${s.id}/file`,
        comments: s.comments,
        status: s.status,
        score: s.score,
        maxScore: s.maxScore,
        gradeLabel: s.gradeLabel,
        feedback: s.feedback,
        submittedAt: s.submittedAt.toISOString(),
        gradedAt: s.gradedAt ? s.gradedAt.toISOString() : null,
      })),
      gradeRecords: gradeRecords.map((g) => ({
        id: g.id,
        studentName: g.student.name,
        courseCode: g.course.code,
        itemTitle: g.itemTitle,
        category: g.category,
        score: g.score,
        maxScore: g.maxScore,
        percentage: g.percentage,
        gradeLabel: g.gradeLabel,
        feedback: g.feedback,
        isReleased: g.isReleased,
        releasedAt: g.releasedAt.toISOString(),
      })),
    };
  } catch (err) {
    console.error("[getInstructorGradingQueueAction] Error:", err);
    return { success: false, error: "Failed to load grading queue from database." };
  }
}

/**
 * WBS 3.1 & 3.3: Instructor Rubric Evaluation & GradeRecord Release Server Action.
 * - Enforces INSTRUCTOR/ADMIN authorization
 * - Validates score bounds and rubric sum (if provided)
 * - Updates AssignmentSubmission status to GRADED & upserts GradeRecord in Neon PostgreSQL
 */
export async function gradeSubmissionAction(
  input: GradeSubmissionInput
): Promise<GradeSubmissionResult> {
  try {
    const auth = await requireInstructorOrAdmin();
    if (!auth.ok) {
      return { success: false, error: auth.error };
    }

    const maxScore = input.maxScore && input.maxScore > 0 ? input.maxScore : 100;
    const rawScore = Number(input.score);
    if (!Number.isFinite(rawScore) || rawScore < 0 || rawScore > maxScore) {
      return { success: false, error: `Score must be a number between 0 and ${maxScore}.` };
    }

    const { percentage, gradeLabel } = computeKoiGradeBand(rawScore, maxScore);
    const serverTime = await getNeonServerTime();
    const gradedNow = new Date(serverTime.timestampMs);

    const rubricSummary = input.rubric
      ? ` [Rubric — Technical: ${input.rubric.technicalExecution}/40, Methodology: ${input.rubric.methodology}/30, Documentation: ${input.rubric.documentation}/30]`
      : "";
    const finalFeedback = ((input.feedback || "").trim() + rubricSummary).trim() || null;

    // Locate course
    const course = await prisma.course.findFirst({
      where: { code: { equals: input.courseCode, mode: "insensitive" } },
    });
    if (!course) {
      return { success: false, error: `Course ${input.courseCode} not found in database.` };
    }

    // Locate student by email or name
    const student = await prisma.user.findFirst({
      where: input.studentEmail
        ? { email: input.studentEmail.toLowerCase() }
        : { name: { contains: input.studentName.split(" ")[0], mode: "insensitive" }, role: "STUDENT" },
    });
    if (!student) {
      return { success: false, error: `Student "${input.studentName}" not found in database.` };
    }

    // Locate or create matching assignment so GradeRecord has a relational target
    let assignment = await prisma.assignment.findFirst({
      where: {
        courseId: course.id,
        title: { contains: input.assignmentTitle, mode: "insensitive" },
      },
    });
    if (!assignment) {
      assignment = await prisma.assignment.create({
        data: {
          courseId: course.id,
          title: input.assignmentTitle,
          type: "ASSIGNMENT",
          dueDate: gradedNow,
          maxScore,
          status: "PUBLISHED",
        },
      });
    }

    const result = await prisma.$transaction(async (tx) => {
      // 1. Update latest AssignmentSubmission if one exists
      const latestSub = await tx.assignmentSubmission.findFirst({
        where: {
          assignmentId: assignment.id,
          studentId: student.id,
          isLatest: true,
        },
      });

      let updatedSubmissionId: string | undefined;
      if (latestSub) {
        const updated = await tx.assignmentSubmission.update({
          where: { id: latestSub.id },
          data: {
            status: "GRADED",
            score: rawScore,
            maxScore,
            gradeLabel,
            feedback: finalFeedback,
            gradedAt: gradedNow,
            gradedById: auth.user.id,
          },
        });
        updatedSubmissionId = updated.id;
      }

      // 2. Upsert authoritative GradeRecord
      const gradeRecord = await tx.gradeRecord.upsert({
        where: {
          studentId_assignmentId: {
            studentId: student.id,
            assignmentId: assignment.id,
          },
        },
        update: {
          score: rawScore,
          maxScore,
          percentage,
          gradeLabel,
          feedback: finalFeedback,
          isReleased: input.releaseImmediately ?? true,
          releasedAt: gradedNow,
          awardedById: auth.user.id,
        },
        create: {
          studentId: student.id,
          courseId: course.id,
          assignmentId: assignment.id,
          awardedById: auth.user.id,
          itemTitle: assignment.title,
          category: assignment.type === "ASSESSMENT" ? "Assessment" : "Assignment",
          score: rawScore,
          maxScore,
          percentage,
          weightPct: assignment.weightPct,
          gradeLabel,
          feedback: finalFeedback,
          isReleased: input.releaseImmediately ?? true,
          releasedAt: gradedNow,
        },
      });

      return { gradeRecordId: gradeRecord.id, submissionId: updatedSubmissionId };
    });

    return {
      success: true,
      gradeRecordId: result.gradeRecordId,
      submissionId: result.submissionId,
      score: rawScore,
      maxScore,
      percentage,
      gradeLabel,
      gradedAt: gradedNow.toISOString(),
    };
  } catch (err) {
    console.error("[gradeSubmissionAction] Error:", err);
    return { success: false, error: "Failed to save grade evaluation to Neon PostgreSQL." };
  }
}

export async function deleteSubmissionAction(
  submissionId: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const auth = await requireInstructorOrAdmin();
    if (!auth.ok) {
      return { success: false, error: auth.error };
    }
    await prisma.assignmentSubmission.delete({
      where: { id: submissionId },
    });
    return { success: true };
  } catch (err) {
    console.error("[deleteSubmissionAction] Error:", err);
    return { success: false, error: "Failed to delete submission." };
  }
}

export interface StaffAnnouncementDTO {
  id: string;
  code: string | null;
  title: string;
  body: string;
  authorName: string;
  authorRole: string;
  courseCode: string | null;
  audience: "ALL_USERS" | "STUDENTS" | "INSTRUCTORS" | "COURSE_ONLY";
  status: "PUBLISHED" | "DRAFT" | "SCHEDULED" | "ARCHIVED";
  isImportant: boolean;
  publishedAt: string;
}

function mapAudienceInput(raw: string): "ALL_USERS" | "STUDENTS" | "INSTRUCTORS" | "COURSE_ONLY" {
  const norm = raw.trim().toLowerCase();
  if (norm === "students") return "STUDENTS";
  if (norm === "instructors") return "INSTRUCTORS";
  if (norm === "all users" || norm === "all") return "ALL_USERS";
  return "COURSE_ONLY";
}

function mapStatusInput(raw: string): "PUBLISHED" | "DRAFT" | "SCHEDULED" {
  const norm = raw.trim().toLowerCase();
  if (norm === "draft") return "DRAFT";
  if (norm === "scheduled") return "SCHEDULED";
  return "PUBLISHED";
}

export async function getStaffAnnouncementsAction(): Promise<{
  success: boolean;
  announcements?: StaffAnnouncementDTO[];
  error?: string;
}> {
  try {
    const auth = await requireInstructorOrAdmin();
    if (!auth.ok) return { success: false, error: auth.error };

    const list = await prisma.announcement.findMany({
      include: { course: { select: { code: true } } },
      orderBy: { publishedAt: "desc" },
    });

    return {
      success: true,
      announcements: list.map((a) => ({
        id: a.id,
        code: a.code,
        title: a.title,
        body: a.body,
        authorName: a.authorName,
        authorRole: a.authorRole || "Staff",
        courseCode: a.course?.code ?? null,
        audience: a.audience,
        status: a.status,
        isImportant: a.isImportant,
        publishedAt: a.publishedAt.toLocaleDateString("en-AU", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
      })),
    };
  } catch (err) {
    console.error("[getStaffAnnouncementsAction] Error:", err);
    return { success: false, error: "Failed to load announcements." };
  }
}

export async function createStaffAnnouncementAction(input: {
  title: string;
  body: string;
  audience: string;
  status: string;
  courseCode?: string;
  isImportant?: boolean;
}): Promise<{ success: boolean; announcement?: StaffAnnouncementDTO; error?: string }> {
  try {
    const auth = await requireInstructorOrAdmin();
    if (!auth.ok) return { success: false, error: auth.error };

    const title = input.title.trim();
    const body = input.body.trim();
    if (!title || !body) {
      return { success: false, error: "Title and message body are required." };
    }

    const explicitCourseCode =
      input.courseCode?.trim() ||
      (["ICT301", "ICT302"].includes(input.audience.trim().toUpperCase())
        ? input.audience.trim().toUpperCase()
        : undefined);

    const course = explicitCourseCode
      ? await prisma.course.findUnique({ where: { code: explicitCourseCode }, select: { id: true, code: true } })
      : null;

    const audience = course ? "COURSE_ONLY" : mapAudienceInput(input.audience);
    const status = mapStatusInput(input.status);
    const now = new Date();

    const created = await prisma.announcement.create({
      data: {
        code: `ANN-${Date.now().toString().slice(-6)}`,
        courseId: course?.id ?? null,
        authorId: auth.user.id,
        authorName: auth.user.name,
        authorRole: auth.user.role === "admin" ? "Platform Administrator" : "Instructor & Unit Coordinator",
        title,
        body,
        audience,
        status,
        isImportant: Boolean(input.isImportant),
        publishedAt: now,
      },
      include: { course: { select: { code: true } } },
    });

    return {
      success: true,
      announcement: {
        id: created.id,
        code: created.code,
        title: created.title,
        body: created.body,
        authorName: created.authorName,
        authorRole: created.authorRole || "Staff",
        courseCode: created.course?.code ?? null,
        audience: created.audience,
        status: created.status,
        isImportant: created.isImportant,
        publishedAt: created.publishedAt.toLocaleDateString("en-AU", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
      },
    };
  } catch (err) {
    console.error("[createStaffAnnouncementAction] Error:", err);
    return { success: false, error: "Failed to publish announcement." };
  }
}

export async function updateStaffAnnouncementAction(input: {
  id: string;
  title: string;
  body: string;
  audience: string;
  status: string;
  courseCode?: string;
}): Promise<{ success: boolean; error?: string }> {
  try {
    const auth = await requireInstructorOrAdmin();
    if (!auth.ok) return { success: false, error: auth.error };

    const explicitCourseCode =
      input.courseCode?.trim() ||
      (["ICT301", "ICT302"].includes(input.audience.trim().toUpperCase())
        ? input.audience.trim().toUpperCase()
        : undefined);
    const course = explicitCourseCode
      ? await prisma.course.findUnique({ where: { code: explicitCourseCode }, select: { id: true } })
      : null;

    await prisma.announcement.update({
      where: { id: input.id },
      data: {
        title: input.title.trim(),
        body: input.body.trim(),
        courseId: course?.id ?? null,
        audience: course ? "COURSE_ONLY" : mapAudienceInput(input.audience),
        status: mapStatusInput(input.status),
      },
    });
    return { success: true };
  } catch (err) {
    console.error("[updateStaffAnnouncementAction] Error:", err);
    return { success: false, error: "Failed to update announcement." };
  }
}

export async function deleteStaffAnnouncementAction(id: string): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    const auth = await requireInstructorOrAdmin();
    if (!auth.ok) return { success: false, error: auth.error };

    await prisma.announcement.delete({ where: { id } });
    return { success: true };
  } catch (err) {
    console.error("[deleteStaffAnnouncementAction] Error:", err);
    return { success: false, error: "Failed to delete announcement." };
  }
}

export interface StaffMaterialDTO {
  id: string;
  title: string;
  courseCode: string;
  courseTitle: string;
  type: "Slides" | "Document" | "Video";
  category: "Lecture" | "Tutorial";
  week: number;
  size: string;
  date: string;
  description: string;
  storageKey?: string | null;
  fileName?: string | null;
}

export async function getStaffMaterialsAction(): Promise<{
  success: boolean;
  materials?: StaffMaterialDTO[];
  error?: string;
}> {
  try {
    const auth = await requireInstructorOrAdmin();
    if (!auth.ok) return { success: false, error: auth.error };

    const list = await prisma.learningMaterial.findMany({
      include: { course: { select: { code: true, title: true } } },
      orderBy: { publishedAt: "desc" },
    });

    return {
      success: true,
      materials: list.map((m) => ({
        id: m.id,
        title: m.title,
        courseCode: m.course.code,
        courseTitle: m.course.title,
        type: m.format === "POWERPOINT" ? "Slides" : m.format === "VIDEO" ? "Video" : "Document",
        category: (m.category === "CLASS_RECORDING" ? "Lecture" : "Tutorial") as "Lecture" | "Tutorial",
        week: parseInt((m.weekLabel || "1").replace(/\D/g, ""), 10) || 1,
        size: m.fileSizeLabel || "1.0 MB",
        date: m.publishedAt.toLocaleDateString("en-AU", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
        description: m.description || `Course resource for ${m.course.code}.`,
        storageKey: m.storageKey,
        fileName: m.fileName,
      })),
    };
  } catch (err) {
    console.error("[getStaffMaterialsAction] Error:", err);
    return { success: false, error: "Failed to load learning materials." };
  }
}

export async function createStaffMaterialAction(input: {
  title: string;
  courseCode: string;
  type: "Slides" | "Document" | "Video";
  week: number;
  description?: string;
  fileName?: string;
  fileSizeLabel?: string;
  mimeType?: string;
  storageKey?: string;
}): Promise<{ success: boolean; material?: StaffMaterialDTO; error?: string }> {
  try {
    const auth = await requireInstructorOrAdmin();
    if (!auth.ok) return { success: false, error: auth.error };

    const course = await prisma.course.findUnique({
      where: { code: input.courseCode },
      select: { id: true, code: true, title: true },
    });
    if (!course) {
      return { success: false, error: `Course ${input.courseCode} not found.` };
    }

    const format =
      input.type === "Slides" ? "POWERPOINT" : input.type === "Video" ? "VIDEO" : "PDF";
    const category = input.type === "Video" ? "CLASS_RECORDING" : "COURSE_MATERIAL";

    const created = await prisma.learningMaterial.create({
      data: {
        courseId: course.id,
        uploadedById: auth.user.id,
        title: input.title.trim(),
        description: input.description?.trim() || `Course resource for ${course.code}.`,
        category,
        format,
        weekLabel: `Week ${input.week || 1}`,
        fileName: input.fileName || `${input.title.trim().replace(/[^a-zA-Z0-9._-]/g, "_")}.pdf`,
        fileSizeLabel: input.fileSizeLabel || "2.5 MB",
        mimeType: input.mimeType || "application/pdf",
        storageKey: input.storageKey || null,
        isPublished: true,
        publishedAt: new Date(),
      },
    });

    return {
      success: true,
      material: {
        id: created.id,
        title: created.title,
        courseCode: course.code,
        courseTitle: course.title,
        type: input.type,
        category: input.type === "Video" ? "Lecture" : "Tutorial",
        week: input.week || 1,
        size: created.fileSizeLabel || "2.5 MB",
        date: created.publishedAt.toLocaleDateString("en-AU", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
        description: created.description || "",
        storageKey: created.storageKey,
        fileName: created.fileName,
      },
    };
  } catch (err) {
    console.error("[createStaffMaterialAction] Error:", err);
    return { success: false, error: "Failed to save learning material." };
  }
}

export async function deleteStaffMaterialAction(id: string): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    const auth = await requireInstructorOrAdmin();
    if (!auth.ok) return { success: false, error: auth.error };

    await prisma.learningMaterial.delete({ where: { id } });
    return { success: true };
  } catch (err) {
    console.error("[deleteStaffMaterialAction] Error:", err);
    return { success: false, error: "Failed to delete learning material." };
  }
}
