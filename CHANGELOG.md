# Changelog

All notable changes to the EduFlex codebase are documented in this file.

## [0.4.1] - 2026-10-24

### Changed
- **Phase 3A: Prisma Schema & CLI Refinements ([`prisma/schema.prisma`](file:///c:/Users/Richard/Documents/Eduflex/EduFlex/prisma/schema.prisma), [`package.json`](file:///c:/Users/Richard/Documents/Eduflex/EduFlex/package.json), [`docs/DATABASE_FOUNDATION.md`](file:///c:/Users/Richard/Documents/Eduflex/EduFlex/docs/DATABASE_FOUNDATION.md))**:
  - Updated Prisma CLI scripts in `package.json` to load `.env.local` automatically via Node 24's `--env-file-if-exists=.env.local` flag without duplicating secrets into `.env`.
  - Added composite uniqueness constraints `@@unique([studentId, assignmentId])` and `@@unique([studentId, quizId])` to `GradeRecord` for idempotent gradebook upserts while preserving standalone grade items (`NULL` assignment/quiz IDs) and multi-attempt histories in `AssignmentSubmission` and `QuizAttempt`.
  - Added `modulesJson Json?` to `Course` to store structured weekly syllabus/module breakdowns.
  - Added optional unique `externalCode String? @unique` fields to `Conversation` and `CalendarEvent` for idempotent seed upserts.

## [0.4.0] - 2026-10-24

### Added
- **Phase 1: Prisma & Neon Database Foundation ([`prisma/schema.prisma`](file:///c:/Users/Richard/Documents/Eduflex/EduFlex/prisma/schema.prisma), [`.env.example`](file:///c:/Users/Richard/Documents/Eduflex/EduFlex/.env.example), [`docs/DATABASE_FOUNDATION.md`](file:///c:/Users/Richard/Documents/Eduflex/EduFlex/docs/DATABASE_FOUNDATION.md))**:
  - Replaced stub `prisma/schema.prisma` with a normalized 17-model, 13-enum PostgreSQL schema covering `User`, `Session`, `ApprovalRequest`, `Course`, `Enrollment`, `Assignment`, `AssignmentSubmission`, `Quiz`, `QuizQuestion`, `QuizAttempt`, `QuizAttemptAnswer`, `GradeRecord`, `LearningMaterial`, `Announcement`, `AnnouncementRead`, `Conversation`, `ConversationParticipant`, `Message`, `CalendarEvent`, and `SystemSetting`.
  - Enforced schema-level security invariants: password hashes only (`passwordHash`), hashed opaque session tokens (`tokenHash`), explicit academic integrity acceptance without permissive defaults (`integrityAccepted` + `integrityAcceptedAt`), multi-attempt assignment resubmission tracking (`attemptNumber`, `isLatest`), and externalized file storage metadata.
  - Added `.env.example` with placeholder environment variable names (`DATABASE_URL`, `DIRECT_URL`, `AUTH_SECRET`, `SESSION_COOKIE_NAME`, `SESSION_TTL_MINUTES`) and updated [`.gitignore`](file:///c:/Users/Richard/Documents/Eduflex/EduFlex/.gitignore) with `!.env.example`.
  - Added Prisma CLI scripts (`prisma:validate`, `prisma:generate`, `prisma:format`, `db:migrate:dev`, `db:migrate:deploy`, `db:studio`) to [`package.json`](file:///c:/Users/Richard/Documents/Eduflex/EduFlex/package.json) and configured development error/warning logging in [`lib/prisma.ts`](file:///c:/Users/Richard/Documents/Eduflex/EduFlex/lib/prisma.ts).

## [0.3.0] - 2026-10-24

### Added
- **Institutional Identity Conventions & Seed Accounts ([`src/auth.ts`](file:///c:/Users/Richard/Documents/Eduflex/EduFlex/src/auth.ts))**:
  - Added canonical role normalization (`normalizeRole`) supporting `"student"`, `"instructor"`, and `"admin"` / `"administrator"`.
  - Added planned `@richacademy.en-rich.me` institutional demo accounts (`2003988@richacademy.en-rich.me`, `anita.humagain@richacademy.en-rich.me`, `a.rojit.munankarmi@richacademy.en-rich.me`) alongside existing `@eduflex.edu` accounts.
  - Protected authoritative seed account roles in `getAccounts()`, `registerUser()`, and `getSessionUser()` so self-registration on `/register` cannot overwrite or downgrade Instructor or Admin privileges in `localStorage`.
  - Added case-insensitive email matching on login while strictly enforcing authorization via the account's trusted `role` property rather than email format alone.
- **Expanded Authentication & Portal Audit Playwright Suite ([`tests/auth/sessions.spec.ts`](file:///c:/Users/Richard/Documents/Eduflex/EduFlex/tests/auth/sessions.spec.ts), [`tests/student/features.spec.ts`](file:///c:/Users/Richard/Documents/Eduflex/EduFlex/tests/student/features.spec.ts))**:
  - Added E2E verification for `@richacademy.en-rich.me` Student, Instructor, and Admin login, session persistence across page reload, and logout.
  - Added E2E verification proving email patterns alone never grant elevated privileges and self-registration cannot overwrite seed Instructor/Admin roles.
  - Updated Student assignment and quiz E2E tests to verify genuine form validation (file requirement + explicit Academic Integrity checkbox opt-in) and interactive quiz option selection and confirmation modal submission.

### Changed
- **Academic Assessment & Approval Integrity ([`src/LegacyApp.tsx`](file:///c:/Users/Richard/Documents/Eduflex/EduFlex/src/LegacyApp.tsx), [`src/AdminUserManagement.tsx`](file:///c:/Users/Richard/Documents/Eduflex/EduFlex/src/AdminUserManagement.tsx), [`src/AdminDashboard.tsx`](file:///c:/Users/Richard/Documents/Eduflex/EduFlex/src/AdminDashboard.tsx))**:
  - Removed artificial 1-click assessment fabrication buttons (`Auto-Submit Deliverable (Auto-Accepted)`, `Auto-Answer All`, `Auto-Complete Quiz`) from `AssignmentDetailsView` and `QuizAttemptView`.
  - Restored mandatory file attachment and explicit Academic Integrity Declaration checkbox validation (`integrityAccepted` defaults to `false`) before assignment submission.
  - Clarified administrator-only approval labels and toast messages in `AdminDashboard` and `AdminUserManagement`.

## [0.2.0] - 2026-10-13

### Added
- **Multi-Portal Route Guards (`src/ProtectedRoute.tsx`)**:
  - Client-side role-based routing protection wrapping `/student`, `/instructor`, and `/admin`.
  - Unauthenticated access redirects automatically to `/login`.
  - Authenticated cross-role navigation is rejected and routed to the user's assigned portal.
- **Admin Bulk Approvals**:
  - Implemented `handleApproveAllPending` in `src/AdminUserManagement.tsx` and `src/AdminDashboard.tsx`.
  - Added "Accept & Approve All" header button to bulk-approve all pending registrations in one action.
- **Interactive Instructor Features (`src/InstructorDashboard.tsx`)**:
  - Converted static quizzes to reactive state with "New Quiz" creation modal, "Edit Quiz", and "View Details".
  - Converted learning materials to reactive state with "Upload Material" modal, preview modal, and download notifications.
  - Converted announcements to reactive state with full Create, View, Edit, and Delete lifecycle.
  - Connected conversation search and live message dispatching to active threads with quick-reply chips.
  - Added Instructor Notice ticker banner to `DashboardHome`.
- **Student Portal Interactive Modals (`src/LegacyApp.tsx`)**:
  - Added interactive course materials preview and video player modals.
- **Carousel & Announcement Ticker Enhancements (`src/index.css`)**:
  - Slowed down horizontal marquee animation from 18s to **52s** for comfortable, smooth readability.
  - Added hardware-accelerated rendering (`will-change: transform`).
  - Added pause-on-hover and pause-on-focus (`.marquee-container:hover .marquee-text`, `:focus-within`).
  - Added accessibility override for `@media (prefers-reduced-motion: reduce)` displaying static text without motion.
  - Unified ticker banners across all three portals (Student Announcements, Instructor Notice, Admin Notice).
- **Project-Level Copilot Autonomy Configuration**:
  - Updated `.vscode/settings.json` with workspace-scoped `chat.tools.terminal.autoApprove` for routine verification commands (`npx playwright`, `npm test`, `npm run typecheck`, `npm run build`, `git status`, `git diff`, etc.).
  - Created `.github/copilot-instructions.md` setting pre-approved routine tasks and strict security boundaries prohibiting destructive changes, credential exposure, external pushes, and database resets.
- **Mobile View & Responsive Drawer Navigation**:
  - Implemented mobile navigation drawer across Student, Instructor, and Admin portals.
  - Added slide-out sidebar overlay with smooth CSS transition (`-translate-x-full md:translate-x-0`), backdrop blur overlay, and accessible close button.
  - Dynamic viewport detection resets fixed layout margins on screens `<768px` (`effectiveSidebarW = isMobile ? 0 : sidebarW`).
  - Added mobile hamburger menu button to all three portal headers.
  - Refactored header containers to prevent horizontal overflow on small phones (`min-w-0`, compact search padding, username text hidden on small screens).
  - Global overflow-x containment in `src/index.css` (`html, body, #root { overflow-x: hidden; max-width: 100vw; }`).
- **Automated Test Suites (`tests/`)**:
  - `tests/admin/admin.spec.ts`: End-to-end testing for admin sidebar navigation, user CRUD, bulk accept, course filtering, and system settings.
  - `tests/instructor/instructor.spec.ts`: End-to-end testing for instructor navigation, quiz creation, material upload/preview, announcements CRUD, messaging, and grading.
  - `tests/student/features.spec.ts`: End-to-end testing for assignment form validation and submission, quiz attempts, material previews, calendar modals, and settings.
  - `tests/shared/carousel-notifications.spec.ts`: Verification of 52s duration, pause-on-hover/focus, reduced-motion compliance, and mobile responsive containment.
  - `tests/shared/mobile-view.spec.ts`: Verification of 375px mobile viewports, zero horizontal overflow (`scrollWidth <= clientWidth`), hamburger menu trigger, drawer open/close, navigation, and backdrop tap dismiss.

### Fixed
- Fixed strict-mode locator collisions in Playwright tests between sidebar and top header buttons.
- Fixed unauthenticated access allowing direct URL navigation into `/admin` without credentials.
- Fixed static arrays preventing instructor quiz, announcement, and material additions from persisting in UI state.
- Fixed search filter input collision in Admin user management between header search bar and table search bar.
- Fixed mobile horizontal page overflow caused by desktop `marginLeft: 224px` and `min-w-[240px]` search elements on screens `<768px`.
