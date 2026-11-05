# GitHub Copilot Agent Project Instructions — EduFlex

These instructions apply exclusively to the **EduFlex** workspace.

## Autonomous Workflow & Pre-Approved Scope

Copilot Agent is authorized to work autonomously on routine, low-risk, and reversible local development tasks within this project without requiring repetitive user approval prompts for each step:

1. **Project Source Code Inspection & Editing**:
   - Inspecting existing codebase files (`src/`, `app/`, `lib/`, `tests/`, etc.).
   - Modifying and bug-fixing existing components, styles, and page layouts.
   - Creating new UI components and mock data handlers required for functionality.

2. **Automated Testing & Quality Verification**:
   - Running Playwright test suites (`npx playwright test`, `npm run test:e2e`).
   - Running TypeScript typechecking (`npm run typecheck`, `npx tsc --noEmit`).
   - Running production build checks (`npm run build`).
   - Adding and updating test specs in `tests/`.

3. **Routine Git Inspection**:
   - Checking working tree status (`git status`, `git diff`, `git log`).

## Explicit Security Boundaries & Forbidden Autonomous Actions

The following high-risk or consequential operations **MUST NEVER** be executed autonomously. They require explicit, separate user authorization:

1. **Remote Repository Actions**:
   - `git push`, `git fetch`, `git pull` from remote repositories.
   - Publishing packages or artifacts to external registries.

2. **Destructive File Operations**:
   - Deleting repository configuration files, database migrations, or core project assets without explicit instruction.
   - Force-deleting branches (`git branch -D`) or resetting git history (`git reset --hard`).

3. **Secrets & Production Credentials**:
   - Accessing, writing, or exposing `.env*` production credentials, API tokens, or secrets.
   - Sending code or data to external unauthorized third-party endpoints.

4. **Production Deployments & Database Modifications**:
   - Running production database migrations or dropping databases.
   - Triggering production cloud deployments or hosting promotions.

## Coding & Architectural Conventions

- **Next.js 16 + React 19 + Tailwind CSS**: Follow App Router and React 19 patterns.
- **Client Components**: All interactive pages (`LegacyApp.tsx`, `InstructorDashboard.tsx`, `AdminDashboard.tsx`) must declare `"use client";`.
- **Role Guards**: All role-restricted views (`/student`, `/instructor`, `/admin`) must be wrapped with `<ProtectedRoute role="...">`.
- **Accessibility**: Include ARIA labels, semantic roles, keyboard navigation (`tabIndex`, `onKeyDown`), and support for `prefers-reduced-motion`.
- **Marquee / Carousel Tickers**: Maintain smooth, legible animation speeds (40–60s cycle), pause on `:hover` and `:focus-within`, and provide static alternatives under `prefers-reduced-motion`.

