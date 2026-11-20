"use server";

import { prisma } from "@/lib/prisma";
import { getServerSession } from "./auth";
import { getNeonServerTime } from "./student";
import type { QuizAttemptStatus } from "@prisma/client";

export interface SanitizedQuizQuestion {
  id: string;
  questionNumber: number;
  prompt: string;
  codeSnippet: string | null;
  options: string[];
  points: number;
}

export interface StartQuizResult {
  success: boolean;
  attemptId?: string;
  quizId?: string;
  quizTitle?: string;
  timeLimitMins?: number;
  timeRemainingSecs?: number;
  startedAt?: string;
  questions?: SanitizedQuizQuestion[];
  error?: string;
}

export interface QuizQuestionReviewItem {
  id: string;
  questionNumber: number;
  prompt: string;
  codeSnippet: string | null;
  options: string[];
  selectedIndex: number;
  correctIndex: number;
  isCorrect: boolean;
  pointsAwarded: number;
  pointsPossible: number;
  explanation: string;
}

export interface SubmitQuizResult {
  success: boolean;
  attemptId?: string;
  score?: number;
  maxScore?: number;
  percentage?: number;
  gradeLabel?: string;
  gradeCode?: "HD" | "DI" | "CR" | "P" | "F";
  feedback?: string;
  timeSpentSecs?: number;
  submittedAt?: string;
  review?: QuizQuestionReviewItem[];
  error?: string;
}

// ── Default Capstone Project 2 Question Bank ──────────────────────────────────
const DEFAULT_ICT302_QUESTIONS = [
  {
    questionNumber: 1,
    prompt: "In a pure Next.js Server Components architecture, how should sensitive database queries be executed securely?",
    codeSnippet: "export async function getDashboardData() {\n  // Architecture evaluation\n}",
    options: [
      "Inside React useEffect hooks via client-side fetch calls to public endpoints",
      "Directly inside Server Components and Server Actions utilizing connection poolers with zero client-side exposure",
      "Through unauthenticated GraphQL endpoints rendered directly in DOM attributes",
      "By baking database credentials into process.env exposed with NEXT_PUBLIC_ prefixes",
    ],
    correctIndex: 1,
    explanation: "Server Components and Server Actions execute strictly on the server node, keeping database credentials and queries completely isolated from the client bundle.",
    points: 1,
  },
  {
    questionNumber: 2,
    prompt: "What is the primary benefit of deploying Neon serverless connection poolers for high-concurrency educational applications?",
    codeSnippet: null,
    options: [
      "It completely eliminates the need for database indexing",
      "It multiplexes thousands of ephemeral serverless connections over a small pool of warm Postgres connections",
      "It converts relational tables into NoSQL document collections automatically",
      "It forces all SQL queries to execute synchronously on the client device",
    ],
    correctIndex: 1,
    explanation: "Neon PgBouncer connection pooling prevents serverless functions from overwhelming PostgreSQL max_connections limits during concurrent quiz and assignment submissions.",
    points: 1,
  },
  {
    questionNumber: 3,
    prompt: "According to WCAG 2.1 AA accessibility standards, what is the minimum required color contrast ratio for normal text?",
    codeSnippet: null,
    options: [
      "2.5:1",
      "3.0:1",
      "4.5:1",
      "7.0:1",
    ],
    correctIndex: 2,
    explanation: "WCAG 2.1 AA requires a contrast ratio of at least 4.5:1 for normal body text and 3:1 for large text (18pt or 14pt bold).",
    points: 1,
  },
  {
    questionNumber: 4,
    prompt: "When implementing the Playwright automated E2E test suite for submission verification, which strategy best avoids flaky test runs?",
    codeSnippet: "await expect(page.locator('#receipt-badge')).toBeVisible();",
    options: [
      "Using hardcoded page.waitForTimeout(5000) sleeps before every assertion",
      "Relying on web-first auto-retrying assertions like expect(locator).toBeVisible() and awaiting network idle states",
      "Running all browser tests concurrently without isolating user test fixtures",
      "Disabling TypeScript strict mode across test specifications",
    ],
    correctIndex: 1,
    explanation: "Playwright web-first assertions automatically retry assertions until a timeout is reached, eliminating timing jitter and arbitrary sleep statements.",
    points: 1,
  },
  {
    questionNumber: 5,
    prompt: "Under KOI Subject Guidelines Section 2.8, what percentage score band qualifies for a High Distinction (HD) grade?",
    codeSnippet: null,
    options: [
      "75% – 84%",
      "80% – 89%",
      "85% – 100%",
      "90% – 100%",
    ],
    correctIndex: 2,
    explanation: "High Distinction (HD) corresponds to 85% – 100%, Distinction (DI) to 75% – 84%, Credit (CR) to 65% – 74%, and Pass (P) to 50% – 64%.",
    points: 1,
  },
];

function getKoiGradeDetails(percentage: number): { code: "HD" | "DI" | "CR" | "P" | "F"; label: string } {
  if (percentage >= 85) return { code: "HD", label: "High Distinction (HD)" };
  if (percentage >= 75) return { code: "DI", label: "Distinction (DI)" };
  if (percentage >= 65) return { code: "CR", label: "Credit (CR)" };
  if (percentage >= 50) return { code: "P", label: "Pass (P)" };
  return { code: "F", label: "Fail (F)" };
}

/**
 * Task 3.4 & 3.6: Start or Resume Timed Quiz Attempt
 * - Anchors start time to authoritative Neon DB timestamp
 * - CRITICAL SECURITY (Task 3.6): Sanitizes questions so correctIndex & explanation are NEVER sent to client
 */
export async function startQuizAttemptAction(
  quizSlugOrIdOrInput: string | { quizSlugOrId: string; courseCode?: string; title?: string }
): Promise<StartQuizResult> {
  try {
    const session = await getServerSession();
    if (!session || !session.user) {
      return { success: false, error: "Unauthorized. Please log in as a student to begin quiz." };
    }

    const quizSlugOrId =
      typeof quizSlugOrIdOrInput === "string"
        ? quizSlugOrIdOrInput
        : quizSlugOrIdOrInput.quizSlugOrId;

    const studentId = session.user.id;
    const serverTime = await getNeonServerTime();
    const dbNow = new Date(serverTime.timestampMs);

    // 1. Locate or create Quiz in Neon PostgreSQL
    let quiz = await prisma.quiz.findFirst({
      where: {
        OR: [
          { slug: quizSlugOrId },
          { id: quizSlugOrId },
        ],
      },
      include: {
        questions: { orderBy: { questionNumber: "asc" } },
        course: { select: { code: true, title: true } },
      },
    });

    if (!quiz) {
      // Find active course (ICT302)
      const course = await prisma.course.findFirst({
        where: { code: "ICT302" },
      });

      if (!course) {
        return { success: false, error: "Course ICT302 not found." };
      }

      quiz = await prisma.quiz.create({
        data: {
          slug: quizSlugOrId,
          courseId: course.id,
          title: "Sprint 1 Knowledge Check: Architecture & Verification",
          description: "Technical assessment evaluating Next.js Server Actions, Neon PostgreSQL connection pooling, and WCAG accessibility standards.",
          dueDate: new Date(dbNow.getTime() + 7 * 24 * 60 * 60 * 1000),
          timeLimitMins: 30,
          attemptsAllowed: 2,
          maxScore: 5,
          weightPct: 5,
          status: "PUBLISHED",
          questions: {
            create: DEFAULT_ICT302_QUESTIONS.map((q) => ({
              questionNumber: q.questionNumber,
              prompt: q.prompt,
              codeSnippet: q.codeSnippet,
              optionsJson: q.options,
              correctIndex: q.correctIndex,
              explanation: q.explanation,
              points: q.points,
            })),
          },
        },
        include: {
          questions: { orderBy: { questionNumber: "asc" } },
          course: { select: { code: true, title: true } },
        },
      });
    }

    // 2. Check for active IN_PROGRESS attempt or previous attempts
    let activeAttempt = await prisma.quizAttempt.findFirst({
      where: {
        quizId: quiz.id,
        studentId,
        status: "IN_PROGRESS",
      },
    });

    if (!activeAttempt) {
      const completedAttemptsCount = await prisma.quizAttempt.count({
        where: {
          quizId: quiz.id,
          studentId,
          status: "SUBMITTED",
        },
      });

      if (completedAttemptsCount >= quiz.attemptsAllowed) {
        return {
          success: false,
          error: `Maximum attempts reached (${completedAttemptsCount}/${quiz.attemptsAllowed}). You cannot re-take this quiz.`,
        };
      }

      activeAttempt = await prisma.quizAttempt.create({
        data: {
          quizId: quiz.id,
          studentId,
          attemptNumber: completedAttemptsCount + 1,
          status: "IN_PROGRESS",
          maxScore: quiz.maxScore,
          startedAt: dbNow,
        },
      });
    }

    // 3. Task 3.4 & 3.5: Compute remaining seconds based on Neon DB timestamp
    const elapsedSecs = Math.floor((dbNow.getTime() - activeAttempt.startedAt.getTime()) / 1000);
    const totalSecs = quiz.timeLimitMins * 60;
    const timeRemainingSecs = Math.max(0, totalSecs - elapsedSecs);

    // 4. Task 3.6: SERVER-SIDE ANSWER KEY PROTECTION
    // Strip correctIndex and explanation from questions before sending to client
    const sanitizedQuestions: SanitizedQuizQuestion[] = quiz.questions.map((q) => {
      let optionsList: string[] = [];
      if (Array.isArray(q.optionsJson)) {
        optionsList = q.optionsJson as string[];
      } else {
        optionsList = ["Option A", "Option B", "Option C", "Option D"];
      }

      return {
        id: q.id,
        questionNumber: q.questionNumber,
        prompt: q.prompt,
        codeSnippet: q.codeSnippet,
        options: optionsList,
        points: q.points,
      };
    });

    return {
      success: true,
      attemptId: activeAttempt.id,
      quizId: quiz.id,
      quizTitle: quiz.title,
      timeLimitMins: quiz.timeLimitMins,
      timeRemainingSecs,
      startedAt: activeAttempt.startedAt.toISOString(),
      questions: sanitizedQuestions,
    };
  } catch (error: any) {
    console.error("[startQuizAttemptAction Error]:", error);
    return { success: false, error: error.message || "Failed to start quiz attempt." };
  }
}

/**
 * Task 3.4 & 3.6: Submit Timed Quiz Attempt & Auto-Score
 * - Evaluates answers against server-only correctIndex
 * - Auto-scores points, percentage, and KOI grade band
 * - Unlocks answers and explanations only after completion
 */
export async function submitQuizAttemptAction(
  attemptId: string,
  answers: { questionId: string; selectedIndex: number }[]
): Promise<SubmitQuizResult> {
  try {
    const session = await getServerSession();
    if (!session || !session.user) {
      return { success: false, error: "Unauthorized. Please log in." };
    }

    const studentId = session.user.id;
    const serverTime = await getNeonServerTime();
    const dbNow = new Date(serverTime.timestampMs);

    const attempt = await prisma.quizAttempt.findUnique({
      where: { id: attemptId },
      include: {
        quiz: {
          include: {
            questions: { orderBy: { questionNumber: "asc" } },
            course: true,
          },
        },
      },
    });

    if (!attempt || attempt.studentId !== studentId) {
      return { success: false, error: "Quiz attempt not found or unauthorized." };
    }

    if (attempt.status === "SUBMITTED") {
      return { success: false, error: "This quiz attempt has already been submitted and finalized." };
    }

    const questions = attempt.quiz.questions;
    const answerMap = new Map(answers.map((a) => [a.questionId, a.selectedIndex]));

    let totalPointsAwarded = 0;
    let totalPossiblePoints = 0;
    const reviewItems: QuizQuestionReviewItem[] = [];

    // Auto-grade each question against authoritative server-only correctIndex
    for (const q of questions) {
      totalPossiblePoints += q.points;
      const studentPick = answerMap.get(q.id) ?? -1;
      const isCorrect = studentPick === q.correctIndex;
      const pointsAwarded = isCorrect ? q.points : 0;
      totalPointsAwarded += pointsAwarded;

      // Upsert student answer in Neon PostgreSQL
      await prisma.quizAttemptAnswer.upsert({
        where: {
          attemptId_questionId: {
            attemptId: attempt.id,
            questionId: q.id,
          },
        },
        update: {
          selectedIndex: studentPick,
          isCorrect,
          pointsAwarded,
        },
        create: {
          attemptId: attempt.id,
          questionId: q.id,
          selectedIndex: studentPick,
          isCorrect,
          pointsAwarded,
        },
      });

      let optionsList: string[] = [];
      if (Array.isArray(q.optionsJson)) {
        optionsList = q.optionsJson as string[];
      }

      reviewItems.push({
        id: q.id,
        questionNumber: q.questionNumber,
        prompt: q.prompt,
        codeSnippet: q.codeSnippet,
        options: optionsList,
        selectedIndex: studentPick,
        correctIndex: q.correctIndex, // Now unlocked for post-submission review
        isCorrect,
        pointsAwarded,
        pointsPossible: q.points,
        explanation: q.explanation || "Demonstrated mastery of unit learning outcome.",
      });
    }

    const percentage = totalPossiblePoints > 0
      ? Math.round((totalPointsAwarded / totalPossiblePoints) * 100 * 10) / 10
      : 0;

    const gradeDetails = getKoiGradeDetails(percentage);
    const timeSpentSecs = Math.max(1, Math.floor((dbNow.getTime() - attempt.startedAt.getTime()) / 1000));

    const feedbackMessage = percentage >= 85
      ? "Outstanding analytical comprehension. Perfect technical execution across all architectural principles."
      : percentage >= 75
      ? "Strong performance. Solid grasp of full-stack Server Actions and connection pooling."
      : percentage >= 50
      ? "Satisfactory completion meeting core learning outcomes."
      : "Further review of architecture specifications and testing guidelines recommended.";

    // Update QuizAttempt to SUBMITTED
    await prisma.quizAttempt.update({
      where: { id: attempt.id },
      data: {
        status: "SUBMITTED",
        score: totalPointsAwarded,
        percentage,
        feedback: `${gradeDetails.label} — ${feedbackMessage}`,
        timeSpentSecs,
        submittedAt: dbNow,
      },
    });

    // Record into GradeRecord in Neon
    await prisma.gradeRecord.create({
      data: {
        studentId,
        courseId: attempt.quiz.courseId,
        quizId: attempt.quiz.id,
        itemTitle: attempt.quiz.title,
        category: "Quiz",
        score: totalPointsAwarded,
        maxScore: totalPossiblePoints,
        percentage,
        gradeLabel: gradeDetails.label,
        feedback: feedbackMessage,
        isReleased: true,
        releasedAt: dbNow,
      },
    }).catch(() => {});

    return {
      success: true,
      attemptId: attempt.id,
      score: totalPointsAwarded,
      maxScore: totalPossiblePoints,
      percentage,
      gradeLabel: gradeDetails.label,
      gradeCode: gradeDetails.code,
      feedback: feedbackMessage,
      timeSpentSecs,
      submittedAt: dbNow.toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }) + " at " + dbNow.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }) + " AEST",
      review: reviewItems,
    };
  } catch (error: any) {
    console.error("[submitQuizAttemptAction Error]:", error);
    return { success: false, error: error.message || "Failed to submit quiz attempt." };
  }
}
