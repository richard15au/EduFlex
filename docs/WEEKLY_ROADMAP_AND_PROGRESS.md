# EduFlex LMS — 8-Week Master Roadmap & Progress Documentation

**Document Status:** Weeks 1 & 2 Completed & Verified · Week 3 Unlocked & Active · Live on GitHub (`main` @ commit `63eccff`)  
**Architecture:** The Modern Code-First TypeScript Serverless Stack (Next.js 16 + React 19 + Tailwind v4 + Neon PostgreSQL + Better Auth)  
**Security & Identity Model:** Strict API-less internally (Pure SSR + Server Actions directly to Neon PostgreSQL)  

---

## 🏛️ Institutional Identity & Role Naming Rules

User account provisioning is strictly governed by institutional identity policies:
* **Admin-Controlled Provisioning:** Regular visitors cannot self-elevate to Instructor or Admin roles. Only an Administrator can provision accounts directly via the Admin Portal (`/admin` -> User Management).
* **Strict Email Naming Conventions:**

| Role | Email Format Convention | Concrete Institutional Examples |
| :--- | :--- | :--- |
| **Student** | **`[studentNumber]@[domain]`** | `2003988@richacademy.richv.win`<br>`2003988@eduflex.edu` |
| **Instructor** | **`[firstname].[lastname]@[domain]`** | `anita.humagain@richacademy.richv.win`<br>`anita.humagain@eduflex.edu` |
| **Administrator** | **`a.[firstname].[lastname]@[domain]`** | `a.rojit.munankarmi@richacademy.richv.win`<br>`a.rojit.munankarmi@eduflex.edu` |

* **Self-Registration Constraint:** Any public student self-registration creates a `STUDENT` account with status `PENDING`, queued in Admin `ApprovalRequest` for review before full portal access.

---

## 🚦 Strict Milestone Status Tracker

| Week | Phase / Domain | Deliverable Summary | Gating Condition | Status |
| :---: | :--- | :--- | :--- | :---: |
| **W1** | **Data Moat & Better Auth** | **Neon DB 6-Tier Seed + Better Auth + Next.js Middleware Edge Protection** | All 7 tasks complete & verified | 🟢 **100% COMPLETED** |
| **W2** | **Student SSR, Actions & Top SEO** | **Student Server Actions + High-Intent SEO Engine + Navigation Refinements + Dark Mode Blending** | All 7 tasks complete & verified | 🟢 **100% COMPLETED** |
| **W3** | **Academic Assessments & Quizzes** | **Assignment Submissions + Receipt Generation + Timed Quiz Auto-Scoring Engine** | Unlocked (W2 passed) | ⏳ **CURRENT FOCUS** |
| **W4** | Staff Portals | Instructor Grading Actions + Admin User Management & Registration Approvals | Locked until W3 verified | 🔒 Locked |
| **W5** | Cloud Storage & Disaster Recovery | Cloudflare R2 Presigned Uploads + Nightly `pg_dump` Automated DR Workflow | Locked until W4 verified | 🔒 Locked |
| **W6** | Communication Hub | Real-Time Messaging Threads + Audience-Targeted Campus Announcements | Locked until W5 verified | 🔒 Locked |
| **W7** | **The Dedicated Audit Week** | **Vercel Preview Deploy + Automated Cloud Audit + Real-Device Manual Testing** | Locked until W6 verified | 🔒 Locked |
| **W8** | Observability & Production Launch | Grafana Cloud (Loki & Tempo) Telemetry + Custom Domain Go-Live | Locked until W7 verified | 🔒 Locked |

---

## 🟢 COMPLETED WORK IN FULL DETAIL

### 🔹 Week 1: Data Moat & Better Auth Identity Layer — ✅ 100% COMPLETED

* **Objective:** Establish the production database on Neon Serverless PostgreSQL, seed realistic academic records, configure Better Auth with Prisma adapter, and enforce edge authentication boundaries.
* **Completed Deliverables:**
  1. **Neon PostgreSQL Database Seed (`prisma/seed.ts`)**:
     - Verified live SSL connection to Neon development branch.
     - Seeded 6-tier relational dataset: 26 institutional users, 9 accredited courses, 18 student enrollments, 13 assignments, and 6 quizzes with questions and rubrics.
  2. **Better Auth Installation & Schema Sync (`lib/auth.ts`, `prisma/schema.prisma`)**:
     - Installed `better-auth ^1.7.17`.
     - Added `Account` and `Verification` models, compatible `User` and `Session` relations, and synchronized schema to Neon (`npx prisma db push`).
     - Configured server-side Better Auth client utilizing Prisma adapter with email/password authentication.
  3. **Server Authentication Actions (`src/actions/auth.ts`)**:
     - Implemented `loginAction`, `registerStudentAction`, `logoutAction`, and `getCurrentUserAction`.
     - Set secure, HTTP-only, SameSite session cookies.
     - Enforced password verification using `node:crypto` `scrypt` hashing with constant-time equality checks.
  4. **Next.js Edge Middleware Protection (`middleware.ts`)**:
     - Implemented route protection intercepting unauthorized navigation to `/student`, `/instructor`, and `/admin`.
     - Validates active sessions and user roles server-side prior to page rendering.
  5. **Verification & Audit Gate**:
     - `tsc --noEmit`: 0 errors.
     - Playwright session & auth tests: 49/49 passed.

---

### 🔹 Week 2: Student Portal SSR, Course Actions & Top SEO Foundation — ✅ 100% COMPLETED

* **Objective:** Replace simulated client state with live Server Actions querying Neon PostgreSQL, establish Google Page #1 Technical SEO architecture, implement navigation improvements, and resolve dark mode color blending across all student pages while keeping light mode 100% intact.
* **Completed Deliverables:**
  1. **Student Server Actions (`src/actions/student.ts`)**:
     - `getStudentDashboardData()`: Fetches enrolled courses, progress percentages, active assignments, and upcoming deadlines directly from Neon.
     - `getStudentCoursesAction()`: Retrieves active and completed courses with instructor details, faculty affiliations, and grades.
     - `getStudentAssignmentsAction()`: Retrieves coursework grouped by unit code and deadline.
  2. **Technical SEO Engine (`app/sitemap.ts`, `app/robots.ts`, `app/layout.tsx`)**:
     - **Dynamic XML Sitemap:** Automatically discovers and indexes public courses and marketing pages with daily frequency and 1.0 priority.
     - **Robots Policy:** Allows search crawlers on all public pages while strictly blocking private application portals (`/student`, `/instructor`, `/admin`).
     - **Schema.org Structured Data (JSON-LD):**
       - `SoftwareApplication`: 5.0 rating aggregate review snippet.
       - `FAQPage`: Expandable question-and-answer rich snippets in Google search results.
       - `Course`: Structured higher education course catalog schema.
  3. **High-Intent Landing Page Optimization (`src/PublicPages.tsx`)**:
     - Optimized H1/H2 headlines for target high-traffic queries: *"Best Course Management Tools for Higher Education"*, *"Top Learning Management System for Universities"*.
     - Refined messaging to "lightning-fast, lightweight" (removed "serverless" and fake review badges per user instruction).
     - Restricted public actions to "Log in to Portal" / "Access University Portal →" (removed self-serve registration).
  4. **Portal Navigation & Layout Refinements (`src/LegacyApp.tsx`, `src/InstructorDashboard.tsx`)**:
     - Moved Light/Dark Theme toggle (☀️ / 🌙) to top header immediately before the Calendar icon.
     - Replaced generic role label with student ID: **`2003988`** below student name.
     - Removed non-admin "Settings" from student and instructor sidebars (reserved strictly for system administrators).
     - Added connected "Student Portal" placeholder (`ProviderPortalPage`) for future external education provider SSO linking.
     - Fixed sidebar bottom Logout button overlap with Next.js development indicator badge via elevated padding (`pt-4 pb-12 md:pb-8`).
  5. **Dark Mode Color Blending (`src/index.css`, `src/LegacyApp.tsx`)**:
     - **My Courses Page:** Outer container adapted to `dark:bg-[#0f172a] dark:border-gray-800`; sticky headers adapted to `dark:bg-[#162038]/95 dark:text-gray-200`; course cards adapted to dark navy `dark:bg-[#131b2e]` with crisp off-white titles (`#f1f5f9`).
     - **Assignments Page:** Section subheaders ("ASSIGNMENTS", "ASSESSMENTS") updated from washed-out light bars to dark slate (`dark:bg-[#0f172a]`) and dark violet (`dark:bg-purple-950/40`) with crisp high-contrast text (`dark:text-gray-200`, `dark:text-purple-200`).
     - **Day (Light) Mode Guarantee:** All changes applied using Tailwind `dark:` variants and `.dark` scoped selectors; **Day Mode remains 100% untouched and identical to before**.
  6. **Verification & Audit Gate**:
     - TypeScript check: 0 errors found.
     - Playwright E2E Suite: 162+ tests passing across Chromium, Firefox, and WebKit.
     - Git Status: Committed (`63eccff`) and pushed to GitHub `main` branch.

---

## ⏳ ACTIVE WEEK: DETAILED EXECUTION PLAN

### 🔹 Week 3: Academic Assessments & Timed Quiz Engine — ⏳ CURRENT FOCUS

* **Focus:** Build assignment submission Server Actions directly to Neon PostgreSQL, generate immutable submission receipts, manage multi-attempt revision histories, and create the timed quiz auto-scoring engine.
* **Detailed Tasks:**
  - [ ] **Task 3.1 (Assignment Submissions Action)**:
    - File: `src/actions/assignments.ts`
    - Functions: `submitAssignmentAction(assignmentId, formData)`
    - Enforces mandatory Academic Integrity Declaration boolean opt-in.
    - Generates unique `#EDF-2026-XXXX` receipt number with ISO timestamp stored in Neon `AssignmentSubmission` table.
  - [ ] **Task 3.2 (Multi-Attempt Revision Trail)**:
    - Support multiple attempts per assignment (`attemptNumber`).
    - Query and update `isLatest: false` on previous submissions when a new revision is uploaded.
    - Preserve student's full audit trail while ensuring instructor gradebook views default to the latest submission.
  - [ ] **Task 3.3 (Timed Quiz Attempt Engine)**:
    - File: `src/actions/quizzes.ts`
    - Functions: `startQuizAttemptAction(quizId)`, `submitQuizAnswerAction(attemptId, questionId, selectedIndex)`, `finishQuizAttemptAction(attemptId)`
    - Tracks countdown timer server-side (`startedAt`, `timeLimitMinutes`, `completedAt`).
    - Computes score and percentage automatically based on question weights.
  - [ ] **Task 3.4 (Answer Key Protection)**:
    - Ensure `correctIndex` and model answers are never returned in public attempt payloads.
    - Reveal correct answers and explanatory feedback strictly after attempt submission.
  - [ ] **Task 3.5 (Neon Server Time & Live Portal Date/Clock Sync)**:
    - Query official database timestamp (`SELECT NOW()`) from Neon PostgreSQL and synchronize the portal header date/clock (replacing hardcoded `"Monday, 7 September 2026"`), assignment deadlines, and quiz timers with Neon's live server time.
  - [ ] **Task 3.6 (Week 3 Audit Gate)**:
    - Pass TypeScript compilation (`npm run typecheck`).
    - Write and pass Playwright tests in `tests/student/assessments.spec.ts` covering submission, revision, and quiz attempt workflows across all 3 major browser engines.

---

## 🔒 UPCOMING WEEKS (STRICTLY SEQUENTIAL)

### 🔹 Week 4: Staff Portals (Instructor Grading & Admin Operations) *(LOCKED 🔒)*
* **Focus:** Faculty grading workflows and administrator user lifecycle controls.
* **Deliverables:**
  - `src/actions/instructor.ts`: View student submissions, grade by rubric, release marks to `GradeRecord`.
  - `src/actions/admin.ts`: User CRUD enforcing institutional email formats (`[studentNumber]@...`, `firstname.lastname@...`, `a.firstname.lastname@...`).
  - Student registration approval queue (`ApprovalRequest` -> approve/reject).
  - Integration with `InstructorDashboard.tsx` and `AdminDashboard.tsx`.

### 🔹 Week 5: Cloudflare R2 Storage & Disaster Recovery *(LOCKED 🔒)*
* **Focus:** Cloud object storage for large assignment attachments and automated database backup pipeline.
* **Deliverables:**
  - Cloudflare R2 S3-compatible client with presigned PUT/GET URLs.
  - Direct client-to-R2 file uploads for submissions and course syllabus PDFs.
  - Nightly automated `pg_dump` GitHub Actions workflow uploading compressed encrypted backups to R2 (30-day lifecycle retention).

### 🔹 Week 6: Messaging Hub & Communication Engine *(LOCKED 🔒)*
* **Focus:** Direct messaging between students and faculty + campus-wide announcements.
* **Deliverables:**
  - `src/actions/messages.ts`: Conversation threads, real-time message posting, unread counters.
  - `src/actions/announcements.ts`: Publish announcements with targeted recipient scoping (`ALL_USERS`, `STUDENTS_ONLY`, `COURSE_SPECIFIC`).

### 🔹 Week 7: Vercel Deploy & THE DEDICATED AUDIT WEEK *(LOCKED 🔒)*
* **Focus:** Live cloud preview deployment and comprehensive multi-device verification.
* **Deliverables:**
  - Deploy to Vercel Preview environment (`https://eduflex-preview.vercel.app`).
  - Execute automated Playwright E2E suite against live cloud deployment.
  - Conduct real-device manual testing on desktop, tablet, and mobile browsers.
  - Verify 100/100 Lighthouse SEO and WCAG 2.1 AA accessibility conformance.

### 🔹 Week 8: Observability, Production Launch & Portfolio Showcase *(LOCKED 🔒)*
* **Focus:** Telemetry streaming, custom domain go-live, and executive showcase.
* **Deliverables:**
  - Configure root `instrumentation.ts` streaming to Grafana Loki (logs) and Grafana Tempo (traces).
  - Promote to production domain (`https://eduflex.edu`).
  - Automated smoke test suite verification.
  - Update master portfolio documentation and architecture diagrams.
