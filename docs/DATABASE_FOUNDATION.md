# EduFlex LMS — Phase 1: Prisma & Neon Database Foundation

**Status:** Phase 1 Complete (Schema, Client Generation & Environment Template Only — No Database Connection or Migration Executed)

---

## 1. Overview & Architecture

EduFlex uses **Prisma 6** (`@prisma/client` / `prisma`) targeting **Neon Serverless PostgreSQL**.
Phase 1 establishes the normalized relational schema in [`prisma/schema.prisma`](../prisma/schema.prisma), environment variable templates in [`.env.example`](../.env.example), Prisma CLI scripts in [`package.json`](../package.json), and the singleton client in [`lib/prisma.ts`](../lib/prisma.ts) without altering existing frontend demo behavior.

---

## 2. Schema Models & Key Constraints

The schema defines **17 models** and **13 enums** across 10 domain areas:

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

## 4. Security Decisions Enforced in Schema

1. **Password Hashes Only (`User.passwordHash`)**:
   - Plaintext passwords are never stored. `User.passwordHash` stores an Argon2id or bcrypt hash.
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

---

## 5. Environment Setup

Copy [`.env.example`](../.env.example) to `.env.local` (or `.env`) when ready to connect to a development Neon branch in Phase 2:

- `DATABASE_URL`: Neon pooled connection string (`-pooler` hostname with `?sslmode=require&pgbouncer=true&connect_timeout=15`).
- `DIRECT_URL`: Neon direct (non-pooled) connection string required by Prisma CLI for migrations.
- `AUTH_SECRET`: 32+ byte random secret for signing cookies/tokens.

---

## 6. Validation Results (Offline)

- `npm run prisma:format`: Formatted [`prisma/schema.prisma`](../prisma/schema.prisma) cleanly.
- `npm run prisma:validate`: Validated schema offline (`The schema at prisma\schema.prisma is valid`).
- `npm run prisma:generate`: Generated Prisma Client (`v6.19.3`) to `node_modules/@prisma/client`.
- `npm run typecheck`: Passed (`tsc --noEmit`, 0 errors).
- `npm run build`: Passed (Next.js 16.3.4 production build, 0 errors).
- `npx playwright test --project=chromium`: 49 / 49 E2E tests passed.

---

## 7. What Remains for Phase 2+

- **Phase 2**: Configure a development Neon branch `.env`, run the initial migration (`npm run db:migrate:dev`), and implement an idempotent `prisma/seed.ts` script.
- **Phase 3**: Implement server-side authentication endpoints (`/api/auth/*`), password hashing, `HttpOnly` session cookies, and route middleware.
- **Phase 4–5**: Implement API routes for Student, Instructor, and Admin portals and progressively connect the UI stores while keeping offline/demo fallbacks intact.
