import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  AccountStatus,
  AssignmentType,
  CourseStatus,
  EnrollmentStatus,
  PublishStatus,
  UserRole,
} from "@prisma/client";
import { createHmac, scryptSync } from "node:crypto";

function hashPassword(plain: string, email: string): string {
  const salt = createHmac("sha256", "eduflex-dev-seed-salt-v1")
    .update(email.trim().toLowerCase())
    .digest("hex")
    .slice(0, 32);
  const saltBuf = Buffer.from(salt, "hex");
  const derivedKey = scryptSync(plain, saltBuf, 64, { N: 16384, r: 8, p: 1 });
  return `scrypt$16384$8$1$${salt}$${derivedKey.toString("hex")}`;
}

export async function GET() {
  return handleSeed();
}

export async function POST() {
  return handleSeed();
}

async function handleSeed() {
  try {
    // 1. Clean out legacy/extraneous courses if present (anything not ICT301 or ICT302)
    const extraCourses = await prisma.course.findMany({
      where: {
        code: { notIn: ["ICT301", "ICT302"] },
      },
      select: { id: true, code: true },
    });

    if (extraCourses.length > 0) {
      const extraIds = extraCourses.map((c) => c.id);
      await prisma.assignmentSubmission.deleteMany({ where: { assignment: { courseId: { in: extraIds } } } });
      await prisma.gradeRecord.deleteMany({ where: { courseId: { in: extraIds } } });
      await prisma.learningMaterial.deleteMany({ where: { courseId: { in: extraIds } } });
      await prisma.quizAttempt.deleteMany({ where: { quiz: { courseId: { in: extraIds } } } });
      await prisma.quiz.deleteMany({ where: { courseId: { in: extraIds } } });
      await prisma.assignment.deleteMany({ where: { courseId: { in: extraIds } } });
      await prisma.enrollment.deleteMany({ where: { courseId: { in: extraIds } } });
      await prisma.calendarEvent.deleteMany({ where: { courseId: { in: extraIds } } });
      await prisma.course.deleteMany({ where: { id: { in: extraIds } } });
    }

    // Clean up any legacy T1 2026 enrollments for ICT301 to ensure clean migration to T2 2026
    await prisma.enrollment.deleteMany({
      where: {
        course: { code: "ICT301" },
        semester: { in: ["T1 2026", "T126"] },
      },
    }).catch(() => {});

    // 2. Upsert the authoritative 5 group members
    const usersSpec = [
      {
        externalId: "20027782",
        name: "Yusuf Rana Magar",
        email: "20027782@eduflex.richv.win",
        password: "student123",
        role: UserRole.STUDENT,
        program: "Bachelor of Information Technology",
        phone: "+61 411 234 567",
      },
      {
        externalId: "20030988",
        name: "Richard Vitug",
        email: "20030988@eduflex.richv.win",
        password: "student123",
        role: UserRole.STUDENT,
        program: "Bachelor of Information Technology",
        phone: "+61 412 345 678",
      },
      {
        externalId: "20035294",
        name: "Sadia Binte Mahmud",
        email: "20035294@eduflex.richv.win",
        password: "student123",
        role: UserRole.STUDENT,
        program: "Bachelor of Information Technology",
        phone: "+61 413 456 789",
      },
      {
        externalId: "20033316",
        name: "Anita Humagain",
        email: "anita.humagain@eduflex.richv.win",
        password: "instructor123",
        role: UserRole.INSTRUCTOR,
        department: "School of ICT",
        phone: "+61 423 456 789",
      },
      {
        externalId: "20024439",
        name: "Rojit Munankarmi",
        email: "a.rojit.munankarmi@eduflex.richv.win",
        password: "admin123",
        role: UserRole.ADMIN,
        department: "University Administration",
        phone: "+61 2 9000 1234",
      },
    ];

    const seededUsers: Record<string, any> = {};

    for (const u of usersSpec) {
      const passwordHash = hashPassword(u.password, u.email);
      const user = await prisma.user.upsert({
        where: { email: u.email },
        update: {
          name: u.name,
          externalId: u.externalId,
          passwordHash,
          role: u.role,
          status: AccountStatus.ACTIVE,
          program: u.program,
          department: u.department,
          phone: u.phone,
        },
        create: {
          name: u.name,
          email: u.email,
          externalId: u.externalId,
          passwordHash,
          role: u.role,
          status: AccountStatus.ACTIVE,
          program: u.program,
          department: u.department,
          phone: u.phone,
        },
      });
      seededUsers[u.externalId] = user;
    }

    const anita = seededUsers["20033316"];
    const yusuf = seededUsers["20027782"];
    const richard = seededUsers["20030988"];
    const sadia = seededUsers["20035294"];

    // 3. Upsert Strictly 2 Courses: ICT301 (Completed) & ICT302 (Active)
    const ict301 = await prisma.course.upsert({
      where: { code: "ICT301" },
      update: {
        title: "Information Technology Project 1",
        faculty: "School of ICT",
        term: "T2 2026",
        academicYear: 2026,
        description: "Capstone systems development and project management course for final year IT students (Part 1 - Architecture & Scope Baseline).",
        iconColor: "#2563eb",
        bgColor: "#eff6ff",
        status: CourseStatus.ACTIVE,
        instructorId: anita.id,
      },
      create: {
        code: "ICT301",
        title: "Information Technology Project 1",
        faculty: "School of ICT",
        term: "T2 2026",
        academicYear: 2026,
        description: "Capstone systems development and project management course for final year IT students (Part 1 - Architecture & Scope Baseline).",
        iconColor: "#2563eb",
        bgColor: "#eff6ff",
        status: CourseStatus.ACTIVE,
        instructorId: anita.id,
      },
    });

    const ict302 = await prisma.course.upsert({
      where: { code: "ICT302" },
      update: {
        title: "Information Technology Project 2",
        faculty: "School of ICT",
        term: "T3 2026",
        academicYear: 2026,
        description: "Capstone systems implementation, agile delivery, full-stack verification, and final presentation (Part 2 - Stage 2 Implementation).",
        iconColor: "#0e9f6e",
        bgColor: "#ecfdf5",
        status: CourseStatus.ACTIVE,
        instructorId: anita.id,
      },
      create: {
        code: "ICT302",
        title: "Information Technology Project 2",
        faculty: "School of ICT",
        term: "T3 2026",
        academicYear: 2026,
        description: "Capstone systems implementation, agile delivery, full-stack verification, and final presentation (Part 2 - Stage 2 Implementation).",
        iconColor: "#0e9f6e",
        bgColor: "#ecfdf5",
        status: CourseStatus.ACTIVE,
        instructorId: anita.id,
      },
    });

    // 4. Enrollments for Students
    const studentList = [yusuf, richard, sadia];

    for (const student of studentList) {
      // ICT301 — Completed with High Distinction
      await prisma.enrollment.upsert({
        where: {
          studentId_courseId_semester: {
            studentId: student.id,
            courseId: ict301.id,
            semester: "T2 2026",
          },
        },
        update: {
          status: EnrollmentStatus.COMPLETED,
          progressPct: 100,
          finalScore: 88,
          finalGrade: "HD",
        },
        create: {
          studentId: student.id,
          courseId: ict301.id,
          semester: "T2 2026",
          status: EnrollmentStatus.COMPLETED,
          progressPct: 100,
          finalScore: 88,
          finalGrade: "HD",
        },
      });

      // ICT302 — Currently Enrolled / Active in Trimester 3
      await prisma.enrollment.upsert({
        where: {
          studentId_courseId_semester: {
            studentId: student.id,
            courseId: ict302.id,
            semester: "T3 2026",
          },
        },
        update: {
          status: EnrollmentStatus.ENROLLED,
          progressPct: 45,
        },
        create: {
          studentId: student.id,
          courseId: ict302.id,
          semester: "T3 2026",
          status: EnrollmentStatus.ENROLLED,
          progressPct: 45,
        },
      });
    }

    // 5. Assessments on ICT302 based on KOI BIT Subject Outline Section 2.8
    await prisma.assignment.upsert({
      where: { id: "ict302-ass1" },
      update: {
        title: "Assessment 1: Weekly Progress Report (Weeks 2–11)",
        description: "Continuous weekly progress tracking across Weeks 2 to 11 evaluating technical implementation and group dynamics (20% total).",
        type: AssignmentType.ASSESSMENT,
        status: PublishStatus.PUBLISHED,
        weightPct: 20,
        maxScore: 100,
        dueDate: new Date("2026-10-12T23:59:59.000Z"),
      },
      create: {
        id: "ict302-ass1",
        courseId: ict302.id,
        title: "Assessment 1: Weekly Progress Report (Weeks 2–11)",
        description: "Continuous weekly progress tracking across Weeks 2 to 11 evaluating technical implementation and group dynamics (20% total).",
        type: AssignmentType.ASSESSMENT,
        status: PublishStatus.PUBLISHED,
        weightPct: 20,
        maxScore: 100,
        dueDate: new Date("2026-10-12T23:59:59.000Z"),
      },
    });

    await prisma.assignment.upsert({
      where: { id: "ict302-ass2" },
      update: {
        title: "Assessment 2: Final Report and Group Activity Log",
        description: "Major deliverable comprising Final Report (40% — 25 to 30 pages) and Group Activity Log (10% — 12 meeting minutes appendix).",
        type: AssignmentType.ASSESSMENT,
        status: PublishStatus.PUBLISHED,
        weightPct: 50,
        maxScore: 100,
        dueDate: new Date("2026-10-19T23:59:59.000Z"),
      },
      create: {
        id: "ict302-ass2",
        courseId: ict302.id,
        title: "Assessment 2: Final Report and Group Activity Log",
        description: "Major deliverable comprising Final Report (40% — 25 to 30 pages) and Group Activity Log (10% — 12 meeting minutes appendix).",
        type: AssignmentType.ASSESSMENT,
        status: PublishStatus.PUBLISHED,
        weightPct: 50,
        maxScore: 100,
        dueDate: new Date("2026-10-19T23:59:59.000Z"),
      },
    });

    await prisma.assignment.upsert({
      where: { id: "ict302-ass3" },
      update: {
        title: "Assessment 3: Presentation and Demonstration",
        description: "Final capstone defense (20 minutes) comprising In-Class Presentation (20%) and Live Demonstration (10%).",
        type: AssignmentType.ASSESSMENT,
        status: PublishStatus.PUBLISHED,
        weightPct: 30,
        maxScore: 100,
        dueDate: new Date("2026-10-28T23:59:59.000Z"),
      },
      create: {
        id: "ict302-ass3",
        courseId: ict302.id,
        title: "Assessment 3: Presentation and Demonstration",
        description: "Final capstone defense (20 minutes) comprising In-Class Presentation (20%) and Live Demonstration (10%).",
        type: AssignmentType.ASSESSMENT,
        status: PublishStatus.PUBLISHED,
        weightPct: 30,
        maxScore: 100,
        dueDate: new Date("2026-10-28T23:59:59.000Z"),
      },
    });

    return NextResponse.json({
      success: true,
      message: "EduFlex database successfully synchronized and seeded.",
      roster: [
        "20027782 - Yusuf Rana Magar (Student)",
        "20030988 - Richard Vitug (Student)",
        "20035294 - Sadia Binte Mahmud (Student)",
        "20033316 - Anita Humagain (Instructor)",
        "20024439 - Rojit Munankarmi (Admin)",
      ],
      courses: [
        "ICT301 - Information Technology Project 1 (Completed, T2 2026)",
        "ICT302 - Information Technology Project 2 (Active/Enrolled, T3 2026)",
      ],
      assessments: [
        "Assessment 1: Weekly Progress Report (Weeks 2–11) [20%]",
        "Assessment 2: Final Report and Group Activity Log [50%]",
        "Assessment 3: Presentation and Demonstration [30%]",
      ],
    });
  } catch (error: any) {
    console.error("[API Seed Error]:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to seed database" },
      { status: 500 }
    );
  }
}
