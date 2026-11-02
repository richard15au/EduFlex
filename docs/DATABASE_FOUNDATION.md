# EduFlex LMS — Prisma & Neon Database Foundation

**Status:** Phase 4B Complete (Initial Migration Applied to Neon Development Branch; Idempotent Seed Script Implemented in [`prisma/seed.ts`](../prisma/seed.ts) & Password Hash Verifier in [`lib/password.ts`](../lib/password.ts) — Seed Not Yet Executed Against Neon)

---

## 1. Overview & Architecture

EduFlex uses **Prisma 6** (`@prisma/client` / `prisma`) targeting **Neon Serverless PostgreSQL**.
- **Phase 1–3E** established the 20-model, 14-enum relational schema in [`prisma/schema.prisma`](../prisma/schema.prisma), environment templates in [`.env.example`](../.env.example), Prisma CLI scripts in [`package.json`](../package.json), the singleton client in [`lib/prisma.ts`](../lib/prisma.ts), and deployed the initial migration [`prisma/migrations/20261024091848_init_eduflex_schema/migration.sql`](../prisma/migrations/20261024091848_init_eduflex_schema/migration.sql) to the Neon `development` branch (`neondb` database).
- **Phase 4B** adds the standard-library `node:crypto` `scrypt` password hashing/verification module in [`lib/password.ts`](../lib/password.ts) and the repeatable, development-only seed script in [`prisma/seed.ts`](../prisma/seed.ts) with an explicit environment and endpoint safety guard.

---

## 2. Schema Models & Key Constraints

The schema defines **20 models** and **14 enums** across 10 domain areas:

| Domain | Models | Key Constraints, Indexes & Deletion Behavior |
| --- | --- | --- |
| **1. Users & Sessions** | `User`, `Session` | `User.email @unique`, `User.externalId @unique`; `Session.tokenHash @unique`; `Session -> User (onDelete: Cascade)`; indexed on `(role, status)` and `(userId, expiresAt)`. |
| **2. Approval Requests** | `ApprovalRequest` | `referenceCode @unique` (`"PA-001"`); `requester -> User (onDelete: Cascade)`, `reviewedBy -> User (onDelete: SetNull)`, `course -> Course (onDelete: SetNull)`; indexed on `(status, submittedAt)`. |
| **3. Courses & Enrollments** | `Course`, `Enrollment` | `Course.code @unique` (`"ICT301"`), `Course.modulesJson Json?`; `Enrollment @@unique([studentId, courseId, semester])`; `Course.instructor -> User (onDelete: SetNull)`; `Enrollment -> User/Course (onDelete: Cascade)`. |
| **4. Assignments & Submissions** | `Assignment`, `AssignmentSubmission` | `Assignment.slug @unique` (`"ict301-a1"`); `AssignmentSubmission.receiptNumber @unique` (`"#EDF-2026-9418"`); `@@unique([assignmentId, studentId, attemptNumber])` + `@@index([assignmentId, studentId, isLatest])` to support multi-attempt resubmissions. |
| **5. Quizzes, Questions & Attempts** | `Quiz`, `QuizQuestion`, `QuizAttempt`, `QuizAttemptAnswer` | `QuizQuestion @@unique([quizId, questionNumber])`; `QuizAttempt @@unique([quizId, studentId, attemptNumber])`; `QuizAttemptAnswer @@unique([attemptId, questionId])`. |
| **6. Grades** | `GradeRecord` | Links `studentId` and `courseId` (`onDelete: Cascade`) with optional foreign keys to `assignmentId`, `quizId`, and `awardedById` (`onDelete: SetNull`). Enforces `@@unique([studentId, assignmentId])` and `@@unique([studentId, quizId])` (PostgreSQL `NULLS DISTINCT`) for idempotent gradebook upserts. Indexed on `(studentId, courseId)` and `(courseId, isReleased)`. |
| **7. Learning Materials** | `LearningMaterial` | Stores file metadata (`fileName`, `fileSizeLabel`, `fileSizeBytes`, `mimeType`) and object storage references (`storageKey`, `externalUrl`). Indexed on `(courseId, category, isPublished)`. |
| **8. Announcements** | `Announcement`, `AnnouncementRead` | Optional `courseId` (`null` for institution-wide notices); per-user read tracking via `AnnouncementRead @@unique([announcementId, userId])`. |
| **9. Messaging** | `Conversation`, `ConversationParticipant`, `Message` | `Conversation.externalCode @unique` (`"conv-1"` for idempotent seeding); `ConversationParticipant @@unique([conversationId, userId])` tracks `unreadCount` and `lastReadAt`; `Message` indexed on `(conversationId, createdAt)`. |
| **10. Calendar & Settings** | `CalendarEvent`, `SystemSetting` | `CalendarEvent.externalCode @unique` (`"cal-1"` for idempotent seeding); indexed on `(eventDate, category)` and `(courseId, eventDate)`; singleton `SystemSetting` keyed by `@id @default("default")`. |

---

## 3. Frontend-to-Database Mapping Decisions

1. **Dual Identifiers (`id` + `externalId` / `slug` / `code` / `referenceCode` / `externalCode`)**:
   - Every table uses a collision-resistant `@id @default(cuid())` primary key while preserving human-readable unique identifiers used by the existing UI and seed data (`User.externalId` for `"2003988"` / `"STU-20262001"`, `Course.code` for `"ICT301"`, `Assignment.slug` for `"ict301-a1"`, `Quiz.slug` for `"q1"`, `ApprovalRequest.referenceCode` for `"PA-001"`, `Enrollment.referenceCode` for `"ENR-001"`, `Conversation.externalCode` for `"conv-1"`, and `CalendarEvent.externalCode` for `"cal-1"`).
2. **Multiple Submission Attempts / Resubmissions & Single Released Gradebook Row**:
   - The Student Portal (`AssignmentDetailsView` in [`src/LegacyApp.tsx`](../src/LegacyApp.tsx)) allows students to resubmit revisions (`"Resubmit Assignment (Upload Revision)"`). Rather than restricting a student to a single row per assignment, `AssignmentSubmission` models `attemptNumber Int @default(1)` and `isLatest Boolean @default(true)` with `@@unique([assignmentId, studentId, attemptNumber])`.
   - Meanwhile, `GradeRecord` represents the canonical released gradebook row per student per assessment (`@@unique([studentId, assignmentId])` and `@@unique([studentId, quizId])`), matching [`gradeStudentSubmission`](../src/assignmentData.ts) which updates or creates a single grade entry per student/assignment while allowing standalone grade rows where `assignmentId` and `quizId` are `null`.
3. **Structured Assignment Briefs (`instructionsJson`) & Course Weekly Modules (`modulesJson`)**:
   - Detailed assignment briefs (overview, numbered implementation tasks, 4-category marking rubric, and starter file descriptors) are stored in `Assignment.instructionsJson` alongside relational columns (`dueDate`, `maxScore`, `weightPct`, `acceptedFormats`).
   - Structured weekly course module/syllabus outlines used by `CourseOverviewPage` and `InstructorDashboard` are stored in `Course.modulesJson`.

---

## 4. Security Decisions Enforced in Schema & Seed

1. **Password Hashes Only (`User.passwordHash`)**:
   - Plaintext passwords are never stored. `User.passwordHash` stores a `node:crypto` `scrypt` digest in the self-describing format `scrypt$16384$8$1$<saltHex>$<derivedKeyHex>`, verified in constant time via `timingSafeEqual` in [`lib/password.ts`](../lib/password.ts).
2. **Authoritative Role Column (`User.role`)**:
   - Portal and API authorization is governed strictly by `User.role` (`STUDENT`, `INSTRUCTOR`, `ADMIN`) and `User.status` (`ACTIVE`). Email addresses or domains (`@richacademy.en-rich.me`) never confer elevated privileges.
3. **Hashed Session Tokens (`Session.tokenHash`)**:
   - Database-backed sessions store only the SHA-256 hex digest (`tokenHash @unique`) of the opaque session token rather than the raw token string.
4. **Explicit Academic Integrity Acceptance (`AssignmentSubmission.integrityAccepted` & `integrityAcceptedAt`)**:
   - `integrityAccepted` is a required `Boolean` with **no** permissive `@default(true)` default, paired with a required `integrityAcceptedAt DateTime` timestamp.
5. **Server-Only Quiz Answer Keys (`QuizQuestion.correctIndex` & `explanation`)**:
   - `correctIndex` and `explanation` live on `QuizQuestion` for server-side grading and must be omitted via Prisma `select` projections in student API responses until `QuizAttempt.status == SUBMITTED`.
6. **No Binary Blobs in PostgreSQL**:
   - `AssignmentSubmission` and `LearningMaterial` store metadata and object-storage references (`storageKey`, `storageUrl` / `externalUrl`, `checksumSha256`) rather than `BYTEA` columns.
7. **Development-Only Seed Safety Guard (`prisma/seed.ts`)**:
   - [`prisma/seed.ts`](../prisma/seed.ts) refuses to execute before instantiating `PrismaClient` unless:
     1. `process.env.NODE_ENV !== "production"`
     2. `process.env.EDUFLEX_ALLOW_DEV_SEED === "true"`
     3. `DATABASE_URL` parses to the confirmed Neon development endpoint (`ep-blue-shadow-a73crclr-pooler.ap-southeast-2.aws.neon.tech` or `ep-blue-shadow-a73crclr.ap-southeast-2.aws.neon.tech`) and database `/neondb`.

---

## 5. Development Seed Architecture (`prisma/seed.ts`)

The seed script uses deterministic `upsert` operations ordered across 6 dependency tiers so repeated runs update existing records in place without creating duplicates:

1. **Tier 1 (`SystemSetting`, `User`)**:
   - Upserts singleton `SystemSetting` (`id: "default"`).
   - Upserts the 3 authoritative institutional accounts first (`2003988@richacademy.en-rich.me`, `anita.humagain@richacademy.en-rich.me`, `a.rojit.munankarmi@richacademy.en-rich.me`), followed by the 3 legacy `@eduflex.edu` demo accounts, 13 Admin roster accounts (`STU-20262001`–`STU-20262008`, `INS-20260012`, `INS-20260034`–`INS-20260037`), 5 pending approval requesters (`PA-001`–`PA-005`), and 2 system service accounts.
2. **Tier 2 (`Course`, `ApprovalRequest`, `Enrollment`)**:
   - Upserts 9 courses (`ICT301`, `ICT272`, `ICT126`, `ICT350`, `ICT410`, `ICT220`, `ICT180`, `ICT101`, `ICT102`) with structured `modulesJson`.
   - Upserts `PA-001`–`PA-005` approval requests and 18 student enrollments (keyed by `studentId_courseId_semester` and `referenceCode`).
3. **Tier 3 (`Assignment`, `Quiz`, `LearningMaterial`, `Announcement`, `CalendarEvent`)**:
   - Upserts 13 assignments/assessments with structured `instructionsJson`, 6 quizzes (`q1`–`q6`), 13 learning materials, 5 announcements (`ANN-001`–`ANN-005`), and 16 calendar events (`ce-1`–`ce-16`).
4. **Tier 4 (`QuizQuestion`, `AssignmentSubmission`, `QuizAttempt`, `AnnouncementRead`)**:
   - Upserts 30 quiz questions (`q1` and `q2`), 3 graded assignment submissions (`#EDF-2026-8192`, `#EDF-2026-9418`, `#EDF-2026-5321`) with explicit `integrityAccepted: true`, 2 completed quiz attempts (`q2` and `q4`), and 2 announcement read receipts.
5. **Tier 5 (`QuizAttemptAnswer`, `GradeRecord`, `Conversation`)**:
   - Upserts 15 quiz attempt answers for `q2`, 5 released gradebook rows (`GradeRecord`), and 5 admin conversations (`conv-1`–`conv-5`).
6. **Tier 6 (`ConversationParticipant`, `Message`)**:
   - Upserts 10 conversation participants and 11 messages.
   - Always disconnects Prisma in a `finally` block (`await prisma.$disconnect()`).

---

## 6. Environment Setup

Copy [`.env.example`](../.env.example) to `.env.local` for local development:

- `DATABASE_URL`: Neon pooled connection string (`-pooler` hostname with `?sslmode=require&pgbouncer=true&connect_timeout=15`).
- `DIRECT_URL`: Neon direct (non-pooled) connection string required by Prisma CLI for migrations.
- `AUTH_SECRET`: 32+ byte random secret for signing cookies/tokens.
- `EDUFLEX_ALLOW_DEV_SEED`: Keep `"false"` by default; set to `"true"` only when explicitly invoking `npm run db:seed`.

---

## 7. Validation Results (Offline)

- `npm run prisma:validate`: Validated schema offline (`The schema at prisma\schema.prisma is valid`).
- `npm run typecheck`: Passed (`tsc --noEmit`, 0 errors).
- `npm run build`: Passed (Next.js production build, 0 errors).
- `npm run db:seed` (without `EDUFLEX_ALLOW_DEV_SEED=true`): Verified safety guard immediately blocks execution before instantiating `PrismaClient`.

---

## 8. What Remains for Phase 4C+

- **Phase 4C**: Execute `npm run db:seed` against the approved Neon development branch (`neondb`) with `EDUFLEX_ALLOW_DEV_SEED=true` and verify row counts and idempotency across repeated runs.
- **Phase 5**: Implement server-side authentication endpoints (`/api/auth/*`) using [`lib/password.ts`](../lib/password.ts), `HttpOnly` session cookies, and route middleware.
- **Phase 6**: Implement API routes for Student, Instructor, and Admin portals and progressively connect the UI stores while keeping offline/demo fallbacks intact.
