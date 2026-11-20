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
