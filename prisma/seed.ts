import { createHmac, scryptSync, timingSafeEqual } from "node:crypto";
import {
  AccountStatus,
  AnnouncementAudience,
  ApprovalStatus,
  ApprovalType,
  AssignmentType,
  CalendarCategory,
  CourseStatus,
  EnrollmentStatus,
  MaterialCategory,
  MaterialFormat,
  PrismaClient,
  PublishStatus,
  QuizAttemptStatus,
  SubmissionStatus,
  UserRole,
} from "@prisma/client";

// ─── 1. Mandatory Development-Only Safety Guard ───────────────────────────────

const ALLOWED_DEV_NEON_HOSTS = new Set([
  "ep-blue-shadow-a73crclr-pooler.ap-southeast-2.aws.neon.tech",
  "ep-blue-shadow-a73crclr.ap-southeast-2.aws.neon.tech",
]);
const EXPECTED_DATABASE_PATH = "/neondb";

function assertSafeDevelopmentSeedEnvironment(): { host: string; dbName: string } {
  const nodeEnv = (process.env.NODE_ENV ?? "development").trim().toLowerCase();
  if (nodeEnv === "production") {
    throw new Error(
      "[SEED BLOCKED] Refusing to execute seed script when NODE_ENV is 'production'."
    );
  }

  if (process.env.EDUFLEX_ALLOW_DEV_SEED !== "true") {
    throw new Error(
      "[SEED BLOCKED] Missing explicit opt-in environment variable. Set EDUFLEX_ALLOW_DEV_SEED=true to authorize seeding the development database."
    );
  }

  const rawDatabaseUrl = process.env.DATABASE_URL?.trim();
  if (!rawDatabaseUrl) {
    throw new Error(
      "[SEED BLOCKED] DATABASE_URL is not set. Configure .env.local before running the development seed."
    );
  }

  let parsedUrl: URL;
  try {
    parsedUrl = new URL(rawDatabaseUrl);
  } catch {
    throw new Error(
      "[SEED BLOCKED] DATABASE_URL could not be parsed as a valid URL."
    );
  }

  if (parsedUrl.protocol !== "postgresql:" && parsedUrl.protocol !== "postgres:") {
    throw new Error(
      `[SEED BLOCKED] Unexpected database protocol '${parsedUrl.protocol}'. Expected postgresql:.`
    );
  }

  if (!ALLOWED_DEV_NEON_HOSTS.has(parsedUrl.hostname)) {
    throw new Error(
      `[SEED BLOCKED] Unrecognized database host '${parsedUrl.hostname}'. Seeding is restricted exclusively to the confirmed EduFlex Neon development branch.`
    );
  }

  if (parsedUrl.pathname !== EXPECTED_DATABASE_PATH) {
    throw new Error(
      `[SEED BLOCKED] Unexpected database path '${parsedUrl.pathname}'. Expected '${EXPECTED_DATABASE_PATH}'.`
    );
  }

  return {
    host: parsedUrl.hostname,
    dbName: parsedUrl.pathname.slice(1),
  };
}

// ─── 2. Deterministic Standard-Library Password Hashing (`node:crypto`) ───────

const SCRYPT_ALGO = "scrypt";
const SCRYPT_N = 16384;
const SCRYPT_R = 8;
const SCRYPT_P = 1;
const SCRYPT_KEYLEN = 64;
const SEED_SALT_NAMESPACE = "eduflex-dev-seed-salt-v1";

function deriveSeedSaltHex(email: string): string {
  return createHmac("sha256", SEED_SALT_NAMESPACE)
    .update(email.trim().toLowerCase())
    .digest("hex")
    .slice(0, 32);
}

function hashSeedPassword(plainPassword: string, email: string): string {
  const saltHex = deriveSeedSaltHex(email);
  const saltBuffer = Buffer.from(saltHex, "hex");
  const derivedKey = scryptSync(plainPassword, saltBuffer, SCRYPT_KEYLEN, {
    N: SCRYPT_N,
    r: SCRYPT_R,
    p: SCRYPT_P,
  });
  return `${SCRYPT_ALGO}$${SCRYPT_N}$${SCRYPT_R}$${SCRYPT_P}$${saltHex}$${derivedKey.toString("hex")}`;
}

function verifySeedPassword(plainPassword: string, storedHash: string): boolean {
  const parts = storedHash.split("$");
  if (parts.length !== 6) return false;
  const [algo, nStr, rStr, pStr, saltHex, expectedKeyHex] = parts;
  if (algo !== SCRYPT_ALGO) return false;
  const N = Number.parseInt(nStr, 10);
  const r = Number.parseInt(rStr, 10);
  const p = Number.parseInt(pStr, 10);
  const saltBuffer = Buffer.from(saltHex, "hex");
  const expectedBuffer = Buffer.from(expectedKeyHex, "hex");
  const actualBuffer = scryptSync(plainPassword, saltBuffer, expectedBuffer.length, { N, r, p });
  return actualBuffer.length === expectedBuffer.length && timingSafeEqual(actualBuffer, expectedBuffer);
}

// ─── 3. Group Members (Exactly 5 Users) ────────────────────────────────────────

interface SeedUserSpec {
  externalId: string;
  name: string;
  email: string;
  plainPassword: string;
  role: UserRole;
  status: AccountStatus;
  program?: string;
  department?: string;
  phone?: string;
  bio?: string;
  joinedAt: Date;
  lastActiveAt?: Date;
}

const SEED_USERS: SeedUserSpec[] = [
  // 1. Yusuf Rana Magar (Student)
  {
    externalId: "20027782",
    name: "Yusuf Rana Magar",
    email: "20027782@eduflex.en-rich.me",
    plainPassword: "student123",
    role: UserRole.STUDENT,
    status: AccountStatus.ACTIVE,
    program: "Bachelor of Information Technology",
    phone: "+61 411 234 567",
    bio: "Final-year Bachelor of Information Technology student specializing in cloud engineering and web platforms.",
    joinedAt: new Date("2025-02-15T09:00:00.000Z"),
    lastActiveAt: new Date("2026-09-07T10:30:00.000Z"),
  },
  // 2. Richard Vitug (Student)
  {
    externalId: "20030988",
    name: "Richard Vitug",
    email: "20030988@eduflex.en-rich.me",
    plainPassword: "student123",
    role: UserRole.STUDENT,
    status: AccountStatus.ACTIVE,
    program: "Bachelor of Information Technology",
    phone: "+61 412 345 678",
    bio: "Final-year Bachelor of Information Technology student specializing in full-stack Next.js systems and database engineering.",
    joinedAt: new Date("2025-02-15T09:00:00.000Z"),
    lastActiveAt: new Date("2026-09-07T11:45:00.000Z"),
  },
  // 3. Sadia Binte Mahmud (Student)
  {
    externalId: "20035294",
    name: "Sadia Binte Mahmud",
    email: "20035294@eduflex.en-rich.me",
    plainPassword: "student123",
    role: UserRole.STUDENT,
    status: AccountStatus.ACTIVE,
    program: "Bachelor of Information Technology",
    phone: "+61 413 456 789",
    bio: "Final-year Bachelor of Information Technology student specializing in UI/UX architecture and QA engineering.",
    joinedAt: new Date("2025-02-15T09:00:00.000Z"),
    lastActiveAt: new Date("2026-09-07T11:15:00.000Z"),
  },
  // 4. Anita Humagain (Instructor / Coordinator)
  {
    externalId: "20033316",
    name: "Anita Humagain",
    email: "anita.humagain@eduflex.en-rich.me",
    plainPassword: "instructor123",
    role: UserRole.INSTRUCTOR,
    status: AccountStatus.ACTIVE,
    department: "School of ICT",
    phone: "+61 423 456 789",
    bio: "Senior Lecturer & Unit Coordinator for Capstone IT Projects (ICT301 & ICT302) in the School of ICT.",
    joinedAt: new Date("2024-07-01T09:00:00.000Z"),
    lastActiveAt: new Date("2026-09-07T11:30:00.000Z"),
  },
  // 5. Rojit Munankarmi (Administrator)
  {
    externalId: "20024439",
    name: "Rojit Munankarmi",
    email: "a.rojit.munankarmi@eduflex.en-rich.me",
    plainPassword: "admin123",
    role: UserRole.ADMIN,
    status: AccountStatus.ACTIVE,
    department: "University Administration",
    phone: "+61 2 9000 1234",
    bio: "Platform Administrator & Academic Registrar Officer for EduFlex LMS.",
    joinedAt: new Date("2024-01-10T09:00:00.000Z"),
    lastActiveAt: new Date("2026-09-07T12:00:00.000Z"),
  },
];

// Helper to construct weekly curriculum modules
function buildModulesJson(courseCode: string, courseTitle: string) {
  return [
    {
      weekNumber: 1,
      title: `${courseCode} Project Initiation & Orientation`,
      summary: "Introduction to capstone deliverables, repository configuration, and milestone definitions.",
      items: [
        { title: `${courseCode} Course Syllabus & Project Charter Template`, type: "resource" },
        { title: "Team Roles & Development Stack Setup", type: "lecture" },
      ],
    },
    {
      weekNumber: 2,
      title: "System Requirements & Architectural Specification",
      summary: "Capturing functional requirements, database entity models, and Server Actions architecture.",
      items: [
        { title: "Next.js SSR & Neon PostgreSQL Integration Guide", type: "resource" },
        { title: "Architecture Blueprint Review", type: "lab" },
      ],
    },
    {
      weekNumber: 3,
      title: "Sprint Implementation & Verification",
      summary: "Iterative feature delivery, automated testing with Playwright, and peer code reviews.",
      items: [
        { title: "Assessment 1 Submission Brief", type: "assignment" },
        { title: "Knowledge Review Quiz", type: "quiz" },
      ],
    },
    {
      weekNumber: 4,
      title: "Capstone Defense & Final System Demonstration",
      summary: "System hardening, performance profiling (sub-1s LCP), accessibility audit, and live defense.",
      items: [
        { title: "Final System Defense Rubric", type: "resource" },
        { title: "Executive Showcase & Handover", type: "presentation" },
      ],
    },
  ];
}

// ─── 4. Main Seed Execution ───────────────────────────────────────────────────

async function main(): Promise<void> {
  const target = assertSafeDevelopmentSeedEnvironment();
  console.log(`[EduFlex Seed] Safety guard passed. Target host: ${target.host} (database: ${target.dbName})`);

  // Self-test password hashing before database write
  const sampleDigest = hashSeedPassword("student123", "20030988@eduflex.en-rich.me");
  if (!verifySeedPassword("student123", sampleDigest) || verifySeedPassword("wrongpass", sampleDigest)) {
    throw new Error("[SEED ABORTED] Password hashing/verification self-check failed.");
  }

  const prisma = new PrismaClient();

  try {
    // Ensure Neon database serverless connection is established
    for (let attempt = 1; attempt <= 6; attempt++) {
      try {
        await prisma.$connect();
        break;
      } catch (err) {
        if (attempt === 6) throw err;
        console.log(`[EduFlex Seed] Waiting for Neon serverless pooler (attempt ${attempt}/6)...`);
        await new Promise((resolve) => setTimeout(resolve, 2500));
      }
    }

    console.log("[EduFlex Seed] Cleaning existing database records to establish clean 5-member roster...");

    // ── Clean up tables in reverse foreign key order ──────────────────────────
    await prisma.quizAttemptAnswer.deleteMany({});
    await prisma.quizAttempt.deleteMany({});
    await prisma.quizQuestion.deleteMany({});
    await prisma.quiz.deleteMany({});
    await prisma.assignmentSubmission.deleteMany({});
    await prisma.gradeRecord.deleteMany({});
    await prisma.assignment.deleteMany({});
    await prisma.learningMaterial.deleteMany({});
    await prisma.announcementRead.deleteMany({});
    await prisma.announcement.deleteMany({});
    await prisma.message.deleteMany({});
    await prisma.conversationParticipant.deleteMany({});
    await prisma.conversation.deleteMany({});
    await prisma.calendarEvent.deleteMany({});
    await prisma.approvalRequest.deleteMany({});
    await prisma.enrollment.deleteMany({});
    await prisma.course.deleteMany({});
    await prisma.session.deleteMany({});
    await prisma.account.deleteMany({});
    await prisma.verification.deleteMany({});
    await prisma.user.deleteMany({});

    console.log("✓ Existing database tables cleared successfully.");

    // ── Tier 1: System Settings ───────────────────────────────────────────────
    await prisma.systemSetting.upsert({
      where: { id: "default" },
      update: {
        institutionName: "EduFlex University",
        institutionEmail: "admin@eduflex.en-rich.me",
        contactNumber: "+61 2 9000 1234",
        timezone: "UTC+10:00 (Sydney / AEST)",
        academicYear: "2026",
        currentSemester: "Trimester 3, 2026",
        semesterStartDate: new Date("2026-09-01T00:00:00.000Z"),
        semesterEndDate: new Date("2026-11-30T23:59:59.000Z"),
        enrollmentPeriod: "Sep 1 – Sep 14, 2026",
        emailNotifications: true,
        studentNotifications: true,
        instructorNotifications: true,
        systemAlerts: true,
        passwordPolicy: "Strong (Min 8 chars, mixed case, symbols)",
        sessionTimeoutMins: 60,
        twoFactorAuth: false,
        loginSecurity: true,
        language: "English (US)",
        dateFormat: "MMM D, YYYY",
        theme: "Light Mode",
      },
      create: {
        id: "default",
        institutionName: "EduFlex University",
        institutionEmail: "admin@eduflex.en-rich.me",
        contactNumber: "+61 2 9000 1234",
        timezone: "UTC+10:00 (Sydney / AEST)",
        academicYear: "2026",
        currentSemester: "Trimester 3, 2026",
        semesterStartDate: new Date("2026-09-01T00:00:00.000Z"),
        semesterEndDate: new Date("2026-11-30T23:59:59.000Z"),
        enrollmentPeriod: "Sep 1 – Sep 14, 2026",
        emailNotifications: true,
        studentNotifications: true,
        instructorNotifications: true,
        systemAlerts: true,
        passwordPolicy: "Strong (Min 8 chars, mixed case, symbols)",
        sessionTimeoutMins: 60,
        twoFactorAuth: false,
        loginSecurity: true,
        language: "English (US)",
        dateFormat: "MMM D, YYYY",
        theme: "Light Mode",
      },
    });
    console.log("✓ System settings seeded.");

    // ── Tier 2: The 5 Group Members ───────────────────────────────────────────
    const usersMap = new Map<string, { id: string; email: string; name: string; externalId: string | null }>();

    for (const spec of SEED_USERS) {
      const normalizedEmail = spec.email.trim().toLowerCase();
      const passwordHash = hashSeedPassword(spec.plainPassword, normalizedEmail);

      const user = await prisma.user.create({
        data: {
          externalId: spec.externalId,
          name: spec.name,
          email: normalizedEmail,
          passwordHash,
          role: spec.role,
          status: spec.status,
          program: spec.program ?? null,
          department: spec.department ?? null,
          phone: spec.phone ?? null,
          bio: spec.bio ?? null,
          joinedAt: spec.joinedAt,
          lastActiveAt: spec.lastActiveAt ?? null,
        },
      });
      usersMap.set(normalizedEmail, user);
      console.log(`  + User: ${user.name} (${spec.role}) -> ${user.email}`);
    }

    const yusuf = usersMap.get("20027782@eduflex.en-rich.me")!;
    const richard = usersMap.get("20030988@eduflex.en-rich.me")!;
    const sadia = usersMap.get("20035294@eduflex.en-rich.me")!;
    const anita = usersMap.get("anita.humagain@eduflex.en-rich.me")!;
    const rojit = usersMap.get("a.rojit.munankarmi@eduflex.en-rich.me")!;

    // ── Tier 3: The 2 Subjects (ICT301 & ICT302) ──────────────────────────────
    console.log("[EduFlex Seed] Seeding the 2 authoritative subjects (ICT301 & ICT302)...");

    // ICT301: Completed subject
    const ict301 = await prisma.course.create({
      data: {
        code: "ICT301",
        title: "Information Technology Project 1",
        faculty: "School of ICT",
        term: "T2 2026",
        academicYear: 2026,
        description: "Capstone project initiation, architecture formulation, and requirements analysis (Part 1).",
        iconColor: "#16a34a",
        bgColor: "#f0fdf4",
        capacity: 50,
        status: CourseStatus.ACTIVE,
        instructorId: anita.id,
        modulesJson: buildModulesJson("ICT301", "Information Technology Project 1"),
      },
    });

    // ICT302: Active / Current subject in Trimester 3
    const ict302 = await prisma.course.create({
      data: {
        code: "ICT302",
        title: "Information Technology Project 2",
        faculty: "School of ICT",
        term: "T3 2026",
        academicYear: 2026,
        description: "Capstone systems implementation, agile delivery, full-stack verification, and final presentation (Part 2).",
        iconColor: "#2563eb",
        bgColor: "#eff6ff",
        capacity: 50,
        status: CourseStatus.ACTIVE,
        instructorId: anita.id,
        modulesJson: buildModulesJson("ICT302", "Information Technology Project 2"),
      },
    });

    console.log(`  + Course: ICT301 (Completed) -> Instructor: ${anita.name}`);
    console.log(`  + Course: ICT302 (Active)    -> Instructor: ${anita.name}`);

    // ── Tier 4: Student Enrollments ───────────────────────────────────────────
    console.log("[EduFlex Seed] Enrolling students in ICT301 (Completed) and ICT302 (Active)...");

    const students = [yusuf, richard, sadia];

    for (const stu of students) {
      // Completed enrollment for ICT301 (100% complete with HD grade)
      await prisma.enrollment.create({
        data: {
          referenceCode: `ENR-${stu.externalId}-ICT301`,
          studentId: stu.id,
          courseId: ict301.id,
          semester: "T2 2026",
          status: EnrollmentStatus.COMPLETED,
          progressPct: 100,
          finalGrade: "HD",
          finalScore: 88.0,
          enrolledAt: new Date("2026-02-15T09:00:00.000Z"),
          completedAt: new Date("2026-06-25T17:00:00.000Z"),
        },
      });

      // Active enrollment for ICT302 (45% progress in Trimester 3)
      await prisma.enrollment.create({
        data: {
          referenceCode: `ENR-${stu.externalId}-ICT302`,
          studentId: stu.id,
          courseId: ict302.id,
          semester: "T3 2026",
          status: EnrollmentStatus.ENROLLED,
          progressPct: 45,
          enrolledAt: new Date("2026-08-15T09:00:00.000Z"),
        },
      });
      console.log(`  + Enrolled ${stu.name}: ICT301 (COMPLETED, 100%) | ICT302 (ENROLLED, 45%)`);
    }

    // ── Tier 5: Assignments & Submissions ─────────────────────────────────────
    console.log("[EduFlex Seed] Seeding assignments and student submissions...");

    // ICT301 Assignments (Completed)
    const ict301A1 = await prisma.assignment.create({
      data: {
        slug: "ict301-a1",
        courseId: ict301.id,
        title: "Milestone 1: Project Proposal & Scope Charter",
        type: AssignmentType.ASSIGNMENT,
        description: "Comprehensive project proposal detailing project scope, team roles, and 12-week Gantt schedule.",
        maxScore: 100,
        weightPct: 30,
        dueDate: new Date("2026-03-25T23:59:59.000Z"),
        status: PublishStatus.PUBLISHED,
      },
    });

    const ict301A2 = await prisma.assignment.create({
      data: {
        slug: "ict301-a2",
        courseId: ict301.id,
        title: "Milestone 2: System Architecture & Requirements Specification",
        type: AssignmentType.ASSIGNMENT,
        description: "Preliminary architecture design diagrams, database schema models, and UI wireframe deliverables.",
        maxScore: 100,
        weightPct: 30,
        dueDate: new Date("2026-05-15T23:59:59.000Z"),
        status: PublishStatus.PUBLISHED,
      },
    });

    const ict301A3 = await prisma.assignment.create({
      data: {
        slug: "ict301-a3",
        courseId: ict301.id,
        title: "Milestone 3: Project 1 Final Defense & Report",
        type: AssignmentType.ASSESSMENT,
        description: "Final architectural presentation, risk management matrix, and Project 1 defense.",
        maxScore: 100,
        weightPct: 40,
        dueDate: new Date("2026-06-20T23:59:59.000Z"),
        status: PublishStatus.PUBLISHED,
      },
    });

    // Submissions & Grades for ICT301
    for (const stu of students) {
      await prisma.assignmentSubmission.create({
        data: {
          assignmentId: ict301A1.id,
          studentId: stu.id,
          receiptNumber: `#EDF-2026-3011-${stu.externalId}`,
          attemptNumber: 1,
          isLatest: true,
          status: SubmissionStatus.GRADED,
          submittedAt: new Date("2026-03-24T18:30:00.000Z"),
          fileName: `ICT301_Milestone1_${stu.name.replace(/\s+/g, "_")}.pdf`,
          fileSizeLabel: "2.4 MB",
          integrityAccepted: true,
          integrityAcceptedAt: new Date("2026-03-24T18:30:00.000Z"),
          score: 95,
          maxScore: 100,
          gradeLabel: "HD",
          gradedAt: new Date("2026-03-29T14:00:00.000Z"),
          gradedById: anita.id,
          feedback: "Outstanding project scope definition and clear work breakdown structure.",
        },
      });

      await prisma.gradeRecord.create({
        data: {
          studentId: stu.id,
          courseId: ict301.id,
          assignmentId: ict301A1.id,
          awardedById: anita.id,
          itemTitle: "Milestone 1: Project Proposal & Scope Charter",
          category: "Assignment",
          score: 95,
          maxScore: 100,
          percentage: 95.0,
          weightPct: 30,
          gradeLabel: "HD",
          feedback: "Outstanding proposal.",
          releasedAt: new Date("2026-03-29T14:00:00.000Z"),
        },
      });

      await prisma.assignmentSubmission.create({
        data: {
          assignmentId: ict301A2.id,
          studentId: stu.id,
          receiptNumber: `#EDF-2026-3012-${stu.externalId}`,
          attemptNumber: 1,
          isLatest: true,
          status: SubmissionStatus.GRADED,
          submittedAt: new Date("2026-05-14T20:00:00.000Z"),
          fileName: `ICT301_Architecture_${stu.name.replace(/\s+/g, "_")}.pdf`,
          fileSizeLabel: "3.8 MB",
          integrityAccepted: true,
          integrityAcceptedAt: new Date("2026-05-14T20:00:00.000Z"),
          score: 90,
          maxScore: 100,
          gradeLabel: "HD",
          gradedAt: new Date("2026-05-20T10:00:00.000Z"),
          gradedById: anita.id,
          feedback: "Robust database schema design and well-justified serverless architecture choices.",
        },
      });

      await prisma.gradeRecord.create({
        data: {
          studentId: stu.id,
          courseId: ict301.id,
          assignmentId: ict301A2.id,
          awardedById: anita.id,
          itemTitle: "Milestone 2: System Architecture & Requirements Specification",
          category: "Assignment",
          score: 90,
          maxScore: 100,
          percentage: 90.0,
          weightPct: 30,
          gradeLabel: "HD",
          feedback: "Robust architecture.",
          releasedAt: new Date("2026-05-20T10:00:00.000Z"),
        },
      });

      await prisma.assignmentSubmission.create({
        data: {
          assignmentId: ict301A3.id,
          studentId: stu.id,
          receiptNumber: `#EDF-2026-3013-${stu.externalId}`,
          attemptNumber: 1,
          isLatest: true,
          status: SubmissionStatus.GRADED,
          submittedAt: new Date("2026-06-19T21:15:00.000Z"),
          fileName: `ICT301_Final_Defense_${stu.name.replace(/\s+/g, "_")}.pdf`,
          fileSizeLabel: "4.5 MB",
          integrityAccepted: true,
          integrityAcceptedAt: new Date("2026-06-19T21:15:00.000Z"),
          score: 92,
          maxScore: 100,
          gradeLabel: "HD",
          gradedAt: new Date("2026-06-25T16:00:00.000Z"),
          gradedById: anita.id,
          feedback: "Excellent technical defense and thorough preparation for Project 2 implementation.",
        },
      });

      await prisma.gradeRecord.create({
        data: {
          studentId: stu.id,
          courseId: ict301.id,
          assignmentId: ict301A3.id,
          awardedById: anita.id,
          itemTitle: "Milestone 3: Project 1 Final Defense & Report",
          category: "Assessment",
          score: 92,
          maxScore: 100,
          percentage: 92.0,
          weightPct: 40,
          gradeLabel: "HD",
          feedback: "Excellent technical defense.",
          releasedAt: new Date("2026-06-25T16:00:00.000Z"),
        },
      });
    }

    // ICT302 Assessments (KOI Subject Outline: 20%, 50%, 30%)
    const ict302A1 = await prisma.assignment.create({
      data: {
        slug: "ict302-a1",
        courseId: ict302.id,
        title: "Assessment 1: Weekly Progress Report (Weeks 2–11)",
        type: AssignmentType.ASSIGNMENT,
        description: "Continuous weekly progress tracking across Weeks 2 to 11 evaluating technical implementation, literature review, and group dynamics (20% total).",
        maxScore: 100,
        weightPct: 20,
        dueDate: new Date("2026-10-12T23:59:59.000Z"),
        status: PublishStatus.PUBLISHED,
      },
    });

    const ict302A2 = await prisma.assignment.create({
      data: {
        slug: "ict302-a2",
        courseId: ict302.id,
        title: "Assessment 2: Final Report and Group Activity Log",
        type: AssignmentType.ASSIGNMENT,
        description: "Major deliverable comprising Final Report (40% — 25 to 30 pages covering structure, implementation, 8+ test plans, evaluation, results) and Group Activity Log (10% — 12 meeting minutes appendix, roles, and interaction).",
        maxScore: 100,
        weightPct: 50,
        dueDate: new Date("2026-10-19T23:59:59.000Z"),
        status: PublishStatus.PUBLISHED,
      },
    });

    const ict302A3 = await prisma.assignment.create({
      data: {
        slug: "ict302-a3",
        courseId: ict302.id,
        title: "Assessment 3: Presentation and Demonstration",
        type: AssignmentType.ASSESSMENT,
        description: "Final capstone defense (20 minutes) comprising In-Class Presentation (20% — visual appeal, content, dynamics, individual delivery) and Live Demonstration (10% — functional system execution).",
        maxScore: 100,
        weightPct: 30,
        dueDate: new Date("2026-10-28T23:59:59.000Z"),
        status: PublishStatus.PUBLISHED,
      },
    });

    // Submissions and grades for ICT302 Assessment 1
    for (const stu of students) {
      await prisma.assignmentSubmission.create({
        data: {
          assignmentId: ict302A1.id,
          studentId: stu.id,
          receiptNumber: `#EDF-2026-3021-${stu.externalId}`,
          attemptNumber: 1,
          isLatest: true,
          status: SubmissionStatus.GRADED,
          submittedAt: new Date("2026-10-10T16:30:00.000Z"),
          fileName: `ICT302_Assessment1_${stu.name.replace(/\s+/g, "_")}.pdf`,
          fileSizeLabel: "3.4 MB",
          integrityAccepted: true,
          integrityAcceptedAt: new Date("2026-10-10T16:30:00.000Z"),
          score: stu.id === richard.id ? 88 : stu.id === yusuf.id ? 86 : 89,
          maxScore: 100,
          gradeLabel: "DI",
          gradedAt: new Date("2026-10-13T11:00:00.000Z"),
          gradedById: anita.id,
          feedback: "Outstanding continuous progress tracking across Weeks 2 through 11.",
        },
      });

      await prisma.gradeRecord.create({
        data: {
          studentId: stu.id,
          courseId: ict302.id,
          assignmentId: ict302A1.id,
          awardedById: anita.id,
          itemTitle: "Assessment 1: Weekly Progress Report (Weeks 2–11)",
          category: "Assignment",
          score: stu.id === richard.id ? 88 : stu.id === yusuf.id ? 86 : 89,
          maxScore: 100,
          percentage: stu.id === richard.id ? 88.0 : stu.id === yusuf.id ? 86.0 : 89.0,
          weightPct: 20,
          gradeLabel: "DI",
          feedback: "Outstanding progress tracking. Distinction (DI) awarded.",
          releasedAt: new Date("2026-10-13T11:00:00.000Z"),
        },
      });
    }

    // Richard has also submitted Assessment 2
    await prisma.assignmentSubmission.create({
      data: {
        assignmentId: ict302A2.id,
        studentId: richard.id,
        receiptNumber: `#EDF-2026-3022-${richard.externalId}`,
        attemptNumber: 1,
        isLatest: true,
        status: SubmissionStatus.SUBMITTED,
        submittedAt: new Date("2026-10-18T20:45:00.000Z"),
        fileName: "ICT302_FinalReport_GroupActivityLog_TeamEduFlex.pdf",
        fileSizeLabel: "6.8 MB",
        integrityAccepted: true,
        integrityAcceptedAt: new Date("2026-10-18T20:45:00.000Z"),
        score: null,
        maxScore: 100,
      },
    });

    // ── Tier 6: Quizzes ───────────────────────────────────────────────────────
    console.log("[EduFlex Seed] Seeding quizzes for ICT302...");

    const quiz = await prisma.quiz.create({
      data: {
        slug: "ict302-q1",
        courseId: ict302.id,
        title: "Sprint 1 Knowledge Check: Serverless Architecture & Next.js SSR",
        description: "10-question timed assessment covering Next.js Server Components, Server Actions, and Neon connection pooling.",
        timeLimitMins: 20,
        maxScore: 100,
        dueDate: new Date("2026-09-22T23:59:59.000Z"),
        status: PublishStatus.PUBLISHED,
      },
    });

    // Sample question
    await prisma.quizQuestion.create({
      data: {
        quizId: quiz.id,
        questionNumber: 1,
        prompt: "Why does EduFlex LMS use pure Server Actions instead of internal client-side REST API route handlers?",
        optionsJson: [
          "To eliminate unnecessary HTTP serialization overhead, prevent exposing internal endpoints, and run direct type-safe Prisma queries on the server.",
          "Because Next.js does not support API route handlers.",
          "To allow client browsers to execute direct SQL queries.",
          "Because REST APIs cannot return JSON.",
        ],
        correctIndex: 0,
        points: 10,
        explanation: "Server Actions provide end-to-end TypeScript safety and direct database execution without exposing attackable API endpoints.",
      },
    });

    // ── Tier 7: Learning Materials ─────────────────────────────────────────────
    console.log("[EduFlex Seed] Seeding course materials...");

    await prisma.learningMaterial.create({
      data: {
        courseId: ict301.id,
        title: "ICT301 Final Project Report Template & Guidelines",
        category: MaterialCategory.COURSE_MATERIAL,
        format: MaterialFormat.PDF,
        fileName: "ICT301_Final_Report_Template.pdf",
        fileSizeLabel: "1.4 MB",
        externalUrl: "/materials/ICT301_Final_Report_Template.pdf",
        isPublished: true,
      },
    });

    await prisma.learningMaterial.create({
      data: {
        courseId: ict302.id,
        title: "ICT302 Capstone Project Brief & Agile Milestone Rubric",
        category: MaterialCategory.COURSE_MATERIAL,
        format: MaterialFormat.PDF,
        fileName: "ICT302_Project_Brief_Rubric.pdf",
        fileSizeLabel: "2.1 MB",
        externalUrl: "/materials/ICT302_Project_Brief_Rubric.pdf",
        isPublished: true,
      },
    });

    await prisma.learningMaterial.create({
      data: {
        courseId: ict302.id,
        title: "Next.js SSR & Neon PostgreSQL Architectural Specification",
        category: MaterialCategory.ADDITIONAL_RESOURCE,
        format: MaterialFormat.PDF,
        fileName: "Nextjs_Neon_Architecture_Spec.pdf",
        fileSizeLabel: "3.5 MB",
        externalUrl: "/materials/Nextjs_Neon_Architecture_Spec.pdf",
        isPublished: true,
      },
    });

    // ── Tier 8: Announcements ─────────────────────────────────────────────────
    console.log("[EduFlex Seed] Seeding announcements...");

    await prisma.announcement.create({
      data: {
        code: "ANN-302-01",
        title: "Welcome to ICT302 — Information Technology Project 2 Kickoff",
        body: "Welcome to Trimester 3, 2026! We will build upon our ICT301 architecture to deliver production-ready software solutions. Please check the Sprint 1 deliverables due next week.",
        audience: AnnouncementAudience.COURSE_ONLY,
        authorId: anita.id,
        authorName: anita.name,
        authorRole: "Instructor & Unit Coordinator",
        courseId: ict302.id,
        isImportant: true,
        publishedAt: new Date("2026-09-01T09:00:00.000Z"),
      },
    });

    await prisma.announcement.create({
      data: {
        code: "ANN-ADM-01",
        title: "Official Domain Migration to eduflex.en-rich.me",
        body: "EduFlex LMS has successfully migrated to its new authoritative domain: eduflex.en-rich.me. All student and staff credentials remain active under the new domain.",
        audience: AnnouncementAudience.ALL_USERS,
        authorId: rojit.id,
        authorName: rojit.name,
        authorRole: "Platform Administrator",
        isImportant: false,
        publishedAt: new Date("2026-09-02T10:00:00.000Z"),
      },
    });

    // ── Tier 9: Messaging & Conversations ─────────────────────────────────────
    console.log("[EduFlex Seed] Seeding group communications...");

    const conv = await prisma.conversation.create({
      data: {
        externalCode: "conv-ict302-team",
        title: "ICT302 Capstone Project Team (Yusuf, Richard, Sadia)",
        courseId: ict302.id,
      },
    });

    // Add all 4 participants (Anita, Yusuf, Richard, Sadia)
    for (const u of [anita, yusuf, richard, sadia]) {
      await prisma.conversationParticipant.create({
        data: {
          conversationId: conv.id,
          userId: u.id,
          lastReadAt: new Date("2026-09-07T11:00:00.000Z"),
        },
      });
    }

    await prisma.message.create({
      data: {
        conversationId: conv.id,
        senderId: anita.id,
        body: "Welcome team! Your ICT301 foundation was excellent. Let's make sure Sprint 1 deliverables for ICT302 are submitted on time.",
        createdAt: new Date("2026-09-02T14:00:00.000Z"),
      },
    });

    await prisma.message.create({
      data: {
        conversationId: conv.id,
        senderId: richard.id,
        body: "Thank you Anita! We have finalized our Next.js Server Actions and Better Auth integration and will demo them shortly.",
        createdAt: new Date("2026-09-02T15:30:00.000Z"),
      },
    });

    // ── Tier 10: Approval Requests ────────────────────────────────────────────
    await prisma.approvalRequest.create({
      data: {
        referenceCode: "PA-001",
        requesterId: richard.id,
        type: ApprovalType.COURSE_OVERRIDE,
        actionLabel: "Advanced Lab Access – ICT302",
        requestedRole: UserRole.STUDENT,
        courseId: ict302.id,
        status: ApprovalStatus.APPROVED,
        submittedAt: new Date("2026-09-01T08:30:00.000Z"),
        reviewedAt: new Date("2026-09-01T09:15:00.000Z"),
        reviewedById: rojit.id,
      },
    });

    // ── Tier 11: Calendar Events ──────────────────────────────────────────────
    await prisma.calendarEvent.create({
      data: {
        externalCode: "cal-ict302-s1",
        title: "Assessment 1 Due — ICT302",
        courseId: ict302.id,
        category: CalendarCategory.ASSESSMENT,
        eventDate: new Date("2026-09-18T23:59:59.000Z"),
        color: "#ea580c",
        createdById: anita.id,
      },
    });

    console.log("\n========================================================");
    console.log("  EDUFLEX DATABASE SEED COMPLETE (CLEAN 5-MEMBER ROSTER)");
    console.log("========================================================");
    console.log("  Domain: eduflex.en-rich.me");
    console.log("  Users: 5 Group Members (3 Students, 1 Instructor, 1 Admin)");
    console.log("  Courses: 2 Subjects (ICT301 Completed, ICT302 Active)");
    console.log("========================================================\n");
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error("[EduFlex Seed Error]:", e);
  process.exit(1);
});
