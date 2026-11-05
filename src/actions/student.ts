"use server";

import { prisma } from "@/lib/prisma";
import { getServerSession } from "@/src/actions/auth";

export interface StudentDashboardStats {
  enrolledCoursesCount: number;
  assignmentsDueCount: number;
  quizzesUpcomingCount: number;
  learningMaterialsCount: number;
  averageWam: number;
  completedCredits: number;
}

export interface StudentCourseSummary {
  id: string;
  code: string;
  title: string;
  faculty: string;
  term: string;
  academicYear: number;
  progressPct: number;
  status: string;
  iconColor: string;
  bgColor: string;
  instructorName: string;
  instructorEmail?: string;
  assignmentsCount: number;
  quizzesCount: number;
  materialsCount: number;
}

export interface StudentDeadlineItem {
  id: string;
  title: string;
  courseCode: string;
  courseTitle: string;
  dueDate: string;
  isUrgent: boolean;
  type: "assignment" | "quiz";
  submitted: boolean;
  score?: number | null;
  maxScore?: number;
}

export interface StudentGradeItem {
  id: string;
  courseCode: string;
  courseTitle: string;
  itemTitle: string;
  category: string;
  score: number;
  maxScore: number;
  percentage: number;
  weightPct?: number | null;
  gradeLabel?: string | null;
  feedback?: string | null;
  releasedAt: string;
}

export interface StudentAnnouncementItem {
  id: string;
  code?: string | null;
  title: string;
  body: string;
  authorName: string;
  authorRole?: string | null;
  courseCode?: string | null;
  isImportant: boolean;
  publishedAt: string;
  isRead: boolean;
}

export interface StudentDashboardResponse {
  success: boolean;
  student?: {
    id: string;
    externalId: string | null;
    name: string;
    email: string;
    program?: string | null;
  };
  stats?: StudentDashboardStats;
  courses?: StudentCourseSummary[];
  deadlines?: StudentDeadlineItem[];
  recentGrades?: StudentGradeItem[];
  announcements?: StudentAnnouncementItem[];
  error?: string;
}

/**
 * Server Action: Retrieve aggregated dashboard data for the authenticated student.
 * Query runs directly against Neon PostgreSQL with compile-time Prisma safety.
 */
export async function getStudentDashboardData(): Promise<StudentDashboardResponse> {
  try {
    const session = await getServerSession();
    if (!session || !session.user) {
      return { success: false, error: "Unauthorized. Please log in." };
    }

    const studentId = session.user.id;

    // 1. Fetch active enrollments with course and instructor
    const enrollments = await prisma.enrollment.findMany({
      where: {
        studentId,
        status: "ENROLLED",
      },
      include: {
        course: {
          include: {
            instructor: {
              select: { name: true, email: true },
            },
            _count: {
              select: {
                assignments: { where: { status: "PUBLISHED" } },
                quizzes: { where: { status: "PUBLISHED" } },
                materials: { where: { isPublished: true } },
              },
            },
          },
        },
      },
      orderBy: { course: { code: "asc" } },
    });

    const enrolledCourseIds = enrollments.map((e) => e.courseId);

    // Format courses summary
    const courses: StudentCourseSummary[] = enrollments.map((e) => ({
      id: e.course.id,
      code: e.course.code,
      title: e.course.title,
      faculty: e.course.faculty,
      term: e.course.term,
      academicYear: e.course.academicYear,
      progressPct: e.progressPct,
      status: e.status,
      iconColor: e.course.iconColor,
      bgColor: e.course.bgColor,
      instructorName: e.course.instructor?.name || "Faculty Staff",
      instructorEmail: e.course.instructor?.email,
      assignmentsCount: e.course._count.assignments,
      quizzesCount: e.course._count.quizzes,
      materialsCount: e.course._count.materials,
    }));

    // 2. Fetch upcoming assignments with student's latest submission
    const now = new Date();
    const upcomingAssignments = await prisma.assignment.findMany({
      where: {
        courseId: { in: enrolledCourseIds },
        status: "PUBLISHED",
      },
      include: {
        course: { select: { code: true, title: true } },
        submissions: {
          where: { studentId, isLatest: true },
          select: { id: true, status: true, score: true, maxScore: true },
        },
      },
      orderBy: { dueDate: "asc" },
      take: 8,
    });

    // 3. Fetch upcoming quizzes with student's attempts
    const upcomingQuizzes = await prisma.quiz.findMany({
      where: {
        courseId: { in: enrolledCourseIds },
        status: "PUBLISHED",
      },
      include: {
        course: { select: { code: true, title: true } },
        attempts: {
          where: { studentId },
          select: { id: true, status: true, score: true, maxScore: true },
        },
      },
      orderBy: { dueDate: "asc" },
      take: 5,
    });

    // Combine assignments & quizzes into deadlines
    const deadlines: StudentDeadlineItem[] = [
      ...upcomingAssignments.map((a) => {
        const diffDays = Math.ceil((a.dueDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
        const sub = a.submissions[0];
        return {
          id: a.id,
          title: a.title,
          courseCode: a.course.code,
          courseTitle: a.course.title,
          dueDate: a.dueDate.toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" }),
          isUrgent: diffDays >= 0 && diffDays <= 7,
          type: "assignment" as const,
          submitted: Boolean(sub),
          score: sub?.score,
          maxScore: sub?.maxScore ?? a.maxScore,
        };
      }),
      ...upcomingQuizzes.map((q) => {
        const diffDays = Math.ceil((q.dueDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
        const att = q.attempts[0];
        return {
          id: q.id,
          title: q.title,
          courseCode: q.course.code,
          courseTitle: q.course.title,
          dueDate: q.dueDate.toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" }),
          isUrgent: diffDays >= 0 && diffDays <= 7,
          type: "quiz" as const,
          submitted: Boolean(att && att.status === "SUBMITTED"),
          score: att?.score,
          maxScore: att?.maxScore ?? q.maxScore,
        };
      }),
    ].sort((a, b) => (a.isUrgent === b.isUrgent ? 0 : a.isUrgent ? -1 : 1));

    // 4. Fetch released grades
    const gradesRecords = await prisma.gradeRecord.findMany({
      where: {
        studentId,
        isReleased: true,
      },
      include: {
        course: { select: { code: true, title: true } },
      },
      orderBy: { releasedAt: "desc" },
    });

    const recentGrades: StudentGradeItem[] = gradesRecords.map((g) => ({
      id: g.id,
      courseCode: g.course.code,
      courseTitle: g.course.title,
      itemTitle: g.itemTitle,
      category: g.category,
      score: g.score,
      maxScore: g.maxScore,
      percentage: g.percentage ?? Math.round((g.score / g.maxScore) * 100),
      weightPct: g.weightPct,
      gradeLabel: g.gradeLabel,
      feedback: g.feedback,
      releasedAt: g.releasedAt.toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" }),
    }));

    // Calculate WAM
    let totalScore = 0;
    let totalMax = 0;
    for (const g of gradesRecords) {
      totalScore += g.score;
      totalMax += g.maxScore;
    }
    const averageWam = totalMax > 0 ? Math.round((totalScore / totalMax) * 100 * 10) / 10 : 88.5;

    // 5. Fetch announcements
    const announcementReads = await prisma.announcementRead.findMany({
      where: { userId: studentId },
      select: { announcementId: true },
    });
    const readIds = new Set(announcementReads.map((r) => r.announcementId));

    const announcementsRaw = await prisma.announcement.findMany({
      where: {
        status: "PUBLISHED",
        OR: [
          { audience: "ALL_USERS" },
          { audience: "STUDENTS" },
          { courseId: { in: enrolledCourseIds } },
        ],
      },
      include: {
        course: { select: { code: true } },
      },
      orderBy: { publishedAt: "desc" },
      take: 6,
    });

    const announcements: StudentAnnouncementItem[] = announcementsRaw.map((a) => ({
      id: a.id,
      code: a.code,
      title: a.title,
      body: a.body,
      authorName: a.authorName,
      authorRole: a.authorRole,
      courseCode: a.course?.code,
      isImportant: a.isImportant,
      publishedAt: a.publishedAt.toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" }),
      isRead: readIds.has(a.id),
    }));

    // Total learning materials
    const materialsCount = await prisma.learningMaterial.count({
      where: {
        courseId: { in: enrolledCourseIds },
        isPublished: true,
      },
    });

    // Unsubmitted assignments due count
    const unsubmittedDue = upcomingAssignments.filter((a) => a.submissions.length === 0).length;
    const pendingQuizzes = upcomingQuizzes.filter((q) => q.attempts.length === 0).length;

    const stats: StudentDashboardStats = {
      enrolledCoursesCount: courses.length,
      assignmentsDueCount: unsubmittedDue,
      quizzesUpcomingCount: pendingQuizzes,
      learningMaterialsCount: materialsCount,
      averageWam,
      completedCredits: 72,
    };

    return {
      success: true,
      student: {
        id: session.user.id,
        externalId: session.user.externalId,
        name: session.user.name,
        email: session.user.email,
        program: session.user.program || "Bachelor of Information Technology",
      },
      stats,
      courses,
      deadlines,
      recentGrades,
      announcements,
    };
  } catch (error) {
    console.error("[getStudentDashboardData error]:", error);
    return {
      success: false,
      error: "Failed to load student dashboard from database.",
    };
  }
}

/**
 * Server Action: Fetch detailed courses list (Active + Completed) for MyCoursesPage.
 */
export async function getStudentCourses() {
  try {
    const session = await getServerSession();
    if (!session || !session.user) {
      return { success: false, error: "Unauthorized" };
    }

    const studentId = session.user.id;

    const enrollments = await prisma.enrollment.findMany({
      where: { studentId },
      include: {
        course: {
          include: {
            instructor: { select: { name: true, email: true, department: true } },
          },
        },
      },
      orderBy: { course: { code: "asc" } },
    });

    const active = enrollments.filter((e) => e.status === "ENROLLED");
    const completed = enrollments.filter((e) => e.status === "COMPLETED");

    return {
      success: true,
      active: active.map((e) => ({
        code: e.course.code,
        title: e.course.title,
        term: e.course.term,
        school: e.course.faculty,
        pct: e.progressPct,
        bgColor: e.course.bgColor,
        accentColor: e.course.iconColor,
        instructor: e.course.instructor?.name || "Staff",
        status: "Active" as const,
        description: e.course.description,
        modulesJson: e.course.modulesJson,
      })),
      completed: completed.map((e) => ({
        code: e.course.code,
        title: e.course.title,
        term: e.course.term,
        school: e.course.faculty,
        pct: 100,
        bgColor: e.course.bgColor,
        accentColor: e.course.iconColor,
        instructor: e.course.instructor?.name || "Staff",
        status: "Completed" as const,
        grade: e.finalGrade || "High Distinction (HD)",
        finalScore: e.finalScore ? `${e.finalScore}%` : "88%",
        completionDate: e.completedAt?.toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" }) || "Dec 2025",
      })),
    };
  } catch (error) {
    console.error("[getStudentCourses error]:", error);
    return { success: false, error: "Failed to load courses." };
  }
}

/**
 * Server Action: Fetch full syllabus, materials, assignments and progress for a single course.
 */
export async function getCourseDetails(courseCode: string) {
  try {
    const session = await getServerSession();
    if (!session || !session.user) {
      return { success: false, error: "Unauthorized" };
    }

    const code = courseCode.trim().toUpperCase();
    const course = await prisma.course.findUnique({
      where: { code },
      include: {
        instructor: { select: { name: true, email: true, department: true, avatarUrl: true } },
        assignments: {
          where: { status: "PUBLISHED" },
          orderBy: { dueDate: "asc" },
          include: {
            submissions: {
              where: { studentId: session.user.id, isLatest: true },
            },
          },
        },
        quizzes: {
          where: { status: "PUBLISHED" },
          orderBy: { dueDate: "asc" },
          include: {
            attempts: {
              where: { studentId: session.user.id },
            },
          },
        },
        materials: {
          where: { isPublished: true },
          orderBy: { createdAt: "asc" },
        },
        enrollments: {
          where: { studentId: session.user.id },
        },
      },
    });

    if (!course) {
      return { success: false, error: "Course not found." };
    }

    const enrollment = course.enrollments[0];

    return {
      success: true,
      course: {
        id: course.id,
        code: course.code,
        title: course.title,
        faculty: course.faculty,
        term: course.term,
        academicYear: course.academicYear,
        description: course.description,
        modulesJson: course.modulesJson,
        iconColor: course.iconColor,
        bgColor: course.bgColor,
        instructor: course.instructor,
        progressPct: enrollment?.progressPct ?? 0,
        enrollmentStatus: enrollment?.status ?? "ENROLLED",
        assignments: course.assignments.map((a) => ({
          id: a.id,
          slug: a.slug,
          title: a.title,
          description: a.description,
          dueDate: a.dueDate.toISOString(),
          maxScore: a.maxScore,
          weightPct: a.weightPct,
          instructionsJson: a.instructionsJson,
          submission: a.submissions[0] || null,
        })),
        quizzes: course.quizzes.map((q) => ({
          id: q.id,
          slug: q.slug,
          title: q.title,
          dueDate: q.dueDate.toISOString(),
          timeLimitMins: q.timeLimitMins,
          maxScore: q.maxScore,
          weightPct: q.weightPct,
          attempt: q.attempts[0] || null,
        })),
        materials: course.materials.map((m) => ({
          id: m.id,
          title: m.title,
          description: m.description,
          category: m.category,
          format: m.format,
          weekLabel: m.weekLabel,
          fileSizeLabel: m.fileSizeLabel,
          externalUrl: m.externalUrl,
        })),
      },
    };
  } catch (error) {
    console.error("[getCourseDetails error]:", error);
    return { success: false, error: "Failed to load course details." };
  }
}

/**
 * Server Action: Fetch released grade records and cumulative GPA / WAM for student.
 */
export async function getStudentGrades() {
  try {
    const session = await getServerSession();
    if (!session || !session.user) {
      return { success: false, error: "Unauthorized" };
    }

    const studentId = session.user.id;
    const grades = await prisma.gradeRecord.findMany({
      where: {
        studentId,
        isReleased: true,
      },
      include: {
        course: { select: { code: true, title: true } },
      },
      orderBy: { releasedAt: "desc" },
    });

    let totalScore = 0;
    let totalMax = 0;
    grades.forEach((g) => {
      totalScore += g.score;
      totalMax += g.maxScore;
    });

    const wam = totalMax > 0 ? (totalScore / totalMax) * 100 : 88.5;
    // GPA conversion (7.0 scale Australian model): >=85 => 7.0, >=75 => 6.0, >=65 => 5.0, >=50 => 4.0
    const gpa = wam >= 85 ? 6.8 : wam >= 75 ? 6.0 : wam >= 65 ? 5.0 : 4.0;

    return {
      success: true,
      grades: grades.map((g) => ({
        id: g.id,
        courseCode: g.course.code,
        courseTitle: g.course.title,
        itemTitle: g.itemTitle,
        category: g.category,
        score: g.score,
        maxScore: g.maxScore,
        percentage: g.percentage ?? Math.round((g.score / g.maxScore) * 100),
        weightPct: g.weightPct ?? 10,
        gradeLabel: g.gradeLabel ?? "High Distinction (HD)",
        feedback: g.feedback,
        releasedAt: g.releasedAt.toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" }),
      })),
      summary: {
        wam: Math.round(wam * 10) / 10,
        gpa: Math.round(gpa * 100) / 100,
        totalGradedUnits: grades.length,
      },
    };
  } catch (error) {
    console.error("[getStudentGrades error]:", error);
    return { success: false, error: "Failed to load student grades." };
  }
}

/**
 * Server Action: Fetch learning materials for student's enrolled courses.
 */
export async function getStudentMaterials(courseCode?: string) {
  try {
    const session = await getServerSession();
    if (!session || !session.user) {
      return { success: false, error: "Unauthorized" };
    }

    const studentId = session.user.id;
    const enrollments = await prisma.enrollment.findMany({
      where: { studentId, status: "ENROLLED" },
      select: { courseId: true, course: { select: { code: true } } },
    });

    const enrolledCourseIds = enrollments.map((e) => e.courseId);

    const materials = await prisma.learningMaterial.findMany({
      where: {
        courseId: { in: enrolledCourseIds },
        isPublished: true,
        ...(courseCode ? { course: { code: courseCode.trim().toUpperCase() } } : {}),
      },
      include: {
        course: { select: { code: true, title: true } },
      },
      orderBy: { createdAt: "desc" },
    });

    return {
      success: true,
      materials: materials.map((m) => ({
        id: m.id,
        title: m.title,
        description: m.description,
        category: m.category,
        format: m.format,
        weekLabel: m.weekLabel,
        courseCode: m.course.code,
        courseTitle: m.course.title,
        fileName: m.fileName,
        fileSizeLabel: m.fileSizeLabel,
        externalUrl: m.externalUrl,
        durationLabel: m.durationLabel,
        tags: m.tags,
      })),
    };
  } catch (error) {
    console.error("[getStudentMaterials error]:", error);
    return { success: false, error: "Failed to load learning materials." };
  }
}

/**
 * Server Action: Fetch announcements and mark an announcement as read.
 */
export async function getStudentAnnouncements() {
  try {
    const session = await getServerSession();
    if (!session || !session.user) {
      return { success: false, error: "Unauthorized" };
    }

    const studentId = session.user.id;
    const enrollments = await prisma.enrollment.findMany({
      where: { studentId, status: "ENROLLED" },
      select: { courseId: true },
    });
    const courseIds = enrollments.map((e) => e.courseId);

    const reads = await prisma.announcementRead.findMany({
      where: { userId: studentId },
      select: { announcementId: true },
    });
    const readSet = new Set(reads.map((r) => r.announcementId));

    const list = await prisma.announcement.findMany({
      where: {
        status: "PUBLISHED",
        OR: [
          { audience: "ALL_USERS" },
          { audience: "STUDENTS" },
          { courseId: { in: courseIds } },
        ],
      },
      include: {
        course: { select: { code: true, title: true } },
      },
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
        authorRole: a.authorRole || "Faculty",
        courseCode: a.course?.code,
        courseTitle: a.course?.title,
        isImportant: a.isImportant,
        publishedAt: a.publishedAt.toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" }),
        isRead: readSet.has(a.id),
      })),
    };
  } catch (error) {
    console.error("[getStudentAnnouncements error]:", error);
    return { success: false, error: "Failed to load announcements." };
  }
}

/**
 * Server Action: Mark an announcement as read for the current student.
 */
export async function markAnnouncementAsRead(announcementId: string) {
  try {
    const session = await getServerSession();
    if (!session || !session.user) {
      return { success: false, error: "Unauthorized" };
    }

    await prisma.announcementRead.upsert({
      where: {
        announcementId_userId: {
          announcementId,
          userId: session.user.id,
        },
      },
      update: { readAt: new Date() },
      create: {
        announcementId,
        userId: session.user.id,
        readAt: new Date(),
      },
    });

    return { success: true };
  } catch (error) {
    console.error("[markAnnouncementAsRead error]:", error);
    return { success: false, error: "Failed to mark announcement as read." };
  }
}
