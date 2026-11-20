# 📅 EduFlex LMS — 12-Week Master Roadmap (With Every Task)

---

### 🔹 Week 1: Data Moat & Better Auth Identity Layer — 🟢 FINISHED
- [x] **Task 1.1 (Database Seed):** Connect to Neon Serverless PostgreSQL and execute 6-tier seed script (`prisma/seed.ts`): 26 users, 9 courses, 18 enrollments, 13 assignments, 6 quizzes.
- [x] **Task 1.2 (Package Installation):** Install `better-auth ^1.7.17` into project dependencies.
- [x] **Task 1.3 (Schema Synchronization):** Add `Account` and `Verification` models with `User`/`Session` relations to `prisma/schema.prisma` and sync to Neon.
- [x] **Task 1.4 (Auth Configuration):** Configure server-side Better Auth instance in `lib/auth.ts` with Prisma adapter.
- [x] **Task 1.5 (Server Auth Actions):** Build `src/actions/auth.ts` (`loginAction`, `registerStudentAction`, `logoutAction`) with `node:crypto` `scrypt` password hashing and HTTP-only cookies.
- [x] **Task 1.6 (Edge Protection):** Implement Next.js edge route guard in `middleware.ts` to intercept unauthorized route requests before rendering.
- [x] **Task 1.7 (Audit Gate):** Pass TypeScript checks and full Playwright auth test suite (49/49 tests passed).

---

### 🔹 Week 2: Student Portal SSR, Course Actions & Top SEO — 🟢 FINISHED
- [x] **Task 2.1 (Student Server Actions):** Build `src/actions/student.ts` querying courses, enrollments, assignments, and deadlines directly from Neon.
- [x] **Task 2.2 (Dynamic Sitemap):** Build dynamic XML sitemap (`app/sitemap.ts`) auto-indexing public courses and pages with daily frequency and 1.0 priority.
- [x] **Task 2.3 (Crawler Policy):** Implement `app/robots.ts` allowing public indexing while blocking private portals (`/student`, `/instructor`, `/admin`).
- [x] **Task 2.4 (Schema.org JSON-LD):** Inject rich snippets in `app/layout.tsx` (`SoftwareApplication` 5.0 star rating, `FAQPage` accordions, and `Course` carousel).
- [x] **Task 2.5 (High-Intent SEO Copy):** Optimize landing page (`src/PublicPages.tsx`) with targeted keyword clusters ("Best Course Management Tools for Higher Education") and "lightning-fast, lightweight" messaging.
- [x] **Task 2.6 (Navigation & Portal Refinements):** Place theme toggle beside the calendar, display student ID (`2003988`), add external Student Portal placeholder, and remove non-admin Settings.
- [x] **Task 2.7 (Dark Mode Blending & Audit Gate):** Fix dark mode color clashes on My Courses and Assignments pages while keeping Day (Light) Mode 100% untouched. Pass 162/162 Playwright tests with 0 TypeScript errors.

---

### 🔹 Week 3: Academic Assessments & Timed Quiz Engine — ⏳ CURRENT FOCUS
- [ ] **Task 3.1 (Assignment Submissions):** Build `src/actions/assignments.ts` with mandatory Academic Integrity checkbox opt-in and `#EDF-2026-XXXX` receipt generation.
- [ ] **Task 3.2 (Resubmission Trail):** Implement multi-attempt submissions with revision history audit trail and `isLatest` flag toggling.
- [ ] **Task 3.3 (Timed Quiz Engine):** Build `src/actions/quizzes.ts` (`QuizAttempt` & `QuizAttemptAnswer`) with server-tracked countdown timers and auto-scoring.
- [ ] **Task 3.4 (Answer Key Protection):** Secure question answer keys (`correctIndex`) server-side until after submission.
- [ ] **Task 3.5 (Audit Gate):** Write and pass end-to-end Playwright test suite for submissions and quizzes across Chromium, Firefox, and WebKit.

---

### 🔹 Week 4: Staff Portals (Instructor Grading & Admin Operations) — 🔒 LOCKED
- [ ] **Task 4.1 (Instructor Grading Actions):** Build `src/actions/instructor.ts` to view submissions, enter rubric evaluations, and release marks to `GradeRecord`.
- [ ] **Task 4.2 (Admin User CRUD):** Build `src/actions/admin.ts` enforcing institutional email conventions (`[studentNumber]@...`, `firstname.lastname@...`, `a.firstname.lastname@...`).
- [ ] **Task 4.3 (Registration Approvals):** Build approval queue workflows (`ApprovalRequest` -> approve/reject student registrations).
- [ ] **Task 4.4 (Staff UI Wiring):** Wire `InstructorDashboard.tsx` and `AdminDashboard.tsx` to Server Actions.
- [ ] **Task 4.5 (Audit Gate):** Pass full Admin and Instructor Playwright test suites.

---

### 🔹 Week 5: Cloudflare R2 Storage & Disaster Recovery — 🔒 LOCKED
- [ ] **Task 5.1 (R2 Client Setup):** Configure Cloudflare R2 S3-compatible client with presigned upload and download URLs.
- [ ] **Task 5.2 (Direct R2 Uploads):** Wire student assignment attachments and instructor learning material PDFs directly to R2.
- [ ] **Task 5.3 (Upload Validation):** Enforce server-side file size limits and MIME type whitelisting.
- [ ] **Task 5.4 (Nightly DR Backup):** Implement `.github/workflows/nightly-db-backup.yml` for automated nightly `pg_dump` backups compressed into R2 (30-day lifecycle retention).

---

### 🔹 Week 6: Messaging Hub & Communication Engine — 🔒 LOCKED
- [ ] **Task 6.1 (Messaging Actions):** Build `src/actions/messages.ts` for real-time conversation threads (`Conversation`, `Message`).
- [ ] **Task 6.2 (Unread Counters & Search):** Implement per-user unread tracking (`ConversationParticipant`) and thread keyword search.
- [ ] **Task 6.3 (Campus Announcements):** Build announcement publishing engine with targeted audience filters (`ALL_USERS`, `STUDENTS_ONLY`, `COURSE_SPECIFIC`).

---

### 🔹 Week 7: Vercel Deploy & Consolidated Cloud Audit — 🔒 LOCKED
- [ ] **Task 7.1 (Cloud Preview Deployment):** Deploy feature branch to Vercel to generate a live `https://eduflex-preview.vercel.app` URL.
- [ ] **Task 7.2 (Automated Cloud Audit):** Run full Playwright test suite against the live Vercel Preview URL (`npm run test:e2e`).
- [ ] **Task 7.3 (Real-Device Manual Testing):** Test all user journeys (Student, Instructor, Admin) on physical desktop, tablet, and mobile devices.
- [ ] **Task 7.4 (SEO & Accessibility Audit):** Verify 100/100 Lighthouse SEO score, Google Rich Snippet validity, and WCAG 2.1 AA keyboard accessibility.

---

### 🔹 Week 8: Observability & Production Go-Live — 🔒 LOCKED
- [ ] **Task 8.1 (Telemetry Streaming):** Configure root `instrumentation.ts` to stream traces to Grafana Tempo and runtime logs to Grafana Loki.
- [ ] **Task 8.2 (Production Go-Live):** Promote `main` branch to production Vercel + Cloudflare on production domain (`https://eduflex.edu`).
- [ ] **Task 8.3 (Smoke Tests):** Execute automated production health checks and verify database failover.
- [ ] **Task 8.4 (Portfolio Documentation):** Finalize architecture diagrams, metrics evidence, and project case study for Richard's portfolio showcase.

---

### 🔹 Week 9: Testing, Debugging & Test Documentation — 🔒 LOCKED
- [ ] **Task 9.1 (Full Regression Testing):** Execute automated Playwright E2E test runs across Chromium, Firefox, WebKit, and mobile viewports.
- [ ] **Task 9.2 (Quiz & Submission Concurrency):** Run simulated concurrent quiz submissions and assignment uploads to stress-test Neon connection pool.
- [ ] **Task 9.3 (Edge Route Guard Testing):** Test all edge middleware boundary conditions, malicious URL parameters, expired session cookies, and tampering.
- [ ] **Task 9.4 (Test Documentation & Defect Log):** Author comprehensive Test Execution Matrix, QA sign-off checklists, and categorized defect tracking log (P0/P1/P2).

---

### 🔹 Week 10: Deep Debugging, Security Hardening & Technical Documentation — 🔒 LOCKED
- [ ] **Task 10.1 (Authentication & Session Hardening):** Verify token rotation, password scrypt salting, brute-force protection, and session revocation.
- [ ] **Task 10.2 (Data Security & Injection Auditing):** Audit all Server Actions for SQL injection, CSRF protection, input sanitation, and academic integrity bypasses.
- [ ] **Task 10.3 (Disaster Recovery Simulation):** Execute a mock database recovery drill restoring Neon from the automated R2 `pg_dump` backup.
- [ ] **Task 10.4 (Technical Architecture Documentation):** Document API-less Server Actions specifications, Prisma database entity relationship models, and Disaster Recovery runbook.

---

### 🔹 Week 11: Performance Polish, User Guides & Staging Freeze — 🔒 LOCKED
- [ ] **Task 11.1 (Core Web Vitals Optimization):** Measure and optimize LCP (<1.0s), CLS (0.00), and INP (<50ms) across all portal pages.
- [ ] **Task 11.2 (WCAG 2.1 AA Accessibility Certification):** Audit contrast ratios, ARIA landmarks, screen reader announcements, and keyboard tab orders.
- [ ] **Task 11.3 (User & Administrator Documentation):** Compile complete Student User Manual, Instructor Grading Guide, and Administrator Operations Handbook.
- [ ] **Task 11.4 (Presentation Dry-Run & Staging Freeze):** Complete end-to-end dry-run walkthrough of all presentation demo scenarios and freeze staging codebase.

---

### 🔹 Week 12: Final Presentation, Live Demonstration & Project Defense — 🔒 LOCKED
- [ ] **Task 12.1 (Presentation Deck & Visuals):** Assemble high-impact presentation slides covering problem space, architecture, SEO moat, and business metrics.
- [ ] **Task 12.2 (Live System Demonstration):** Rehearse and deliver live walkthrough of Student, Instructor, and Administrator workflows in production environment.
- [ ] **Task 12.3 (Technical Defense):** Defend technical architecture choices (Server Components, API-less Server Actions, Better Auth, Neon PostgreSQL, Cloudflare edge).
- [ ] **Task 12.4 (Project Sign-off & Delivery):** Deliver complete documentation package, executive report, GitHub repository, and live demo access to stakeholders.
