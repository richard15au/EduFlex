const fs = require('fs');
const path = require('path');
const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  HeadingLevel,
  AlignmentType,
  WidthType,
  ShadingType,
} = require('docx');

console.log('--- Generating EduFlex 8-Week Master Roadmap .docx ---');

const primaryColor = "1A3A9E"; // Royal Blue
const darkColor = "0F172A";
const grayColor = "64748B";
const greenColor = "16A34A";
const orangeColor = "EA580C";

function heading1(text) {
  return new Paragraph({
    text: text,
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 360, after: 140 },
    run: {
      bold: true,
      size: 30, // 15pt
      color: primaryColor,
      font: "Calibri",
    },
  });
}

function paragraph(text, options = {}) {
  return new Paragraph({
    spacing: { before: 60, after: 80 },
    children: [
      new TextRun({
        text: text,
        size: 22, // 11pt
        font: "Calibri",
        ...options,
      }),
    ],
  });
}

function taskItem(prefix, title, desc, completed = false) {
  return new Paragraph({
    spacing: { before: 40, after: 60 },
    bullet: { level: 0 },
    children: [
      new TextRun({
        text: completed ? "[x] " : "[ ] ",
        bold: true,
        color: completed ? greenColor : orangeColor,
        size: 22,
        font: "Calibri",
      }),
      new TextRun({
        text: `${prefix} (${title}): `,
        bold: true,
        color: darkColor,
        size: 22,
        font: "Calibri",
      }),
      new TextRun({
        text: desc,
        color: completed ? "334155" : "0F172A",
        size: 22,
        font: "Calibri",
      }),
    ],
  });
}

function createCell(text, isHeader = false, widthPct = 25, bgColor = null) {
  return new TableCell({
    width: { size: widthPct, type: WidthType.PERCENTAGE },
    shading: bgColor ? { fill: bgColor, type: ShadingType.CLEAR } : (isHeader ? { fill: "F1F5F9", type: ShadingType.CLEAR } : undefined),
    margins: { top: 120, bottom: 120, left: 160, right: 160 },
    children: [
      new Paragraph({
        children: [
          new TextRun({
            text: text,
            bold: isHeader,
            size: isHeader ? 20 : 19,
            color: isHeader ? "0F172A" : "334155",
            font: "Calibri",
          }),
        ],
      }),
    ],
  });
}

const summaryTable = new Table({
  width: { size: 100, type: WidthType.PERCENTAGE },
  rows: [
    new TableRow({
      children: [
        createCell("Week", true, 12),
        createCell("Focus / Phase", true, 26),
        createCell("Core Deliverables", true, 44),
        createCell("Status", true, 18),
      ],
    }),
    new TableRow({
      children: [
        createCell("Week 1", false, 12),
        createCell("Data Moat & Better Auth", false, 26),
        createCell("Neon DB 6-Tier Seed, Better Auth Prisma adapter, Server Auth Actions, and Next.js Edge Middleware route guards.", false, 44),
        createCell("FINISHED", false, 18, "DCFCE7"),
      ],
    }),
    new TableRow({
      children: [
        createCell("Week 2", false, 12),
        createCell("Student SSR & Top SEO", false, 26),
        createCell("Student Server Actions (src/actions/student.ts), Dynamic XML Sitemap, Robots policy, Schema.org JSON-LD (5-star review, FAQPage), navigation updates, and Dark Mode blending.", false, 44),
        createCell("FINISHED", false, 18, "DCFCE7"),
      ],
    }),
    new TableRow({
      children: [
        createCell("Week 3", false, 12),
        createCell("Assessments & Quizzes", false, 26),
        createCell("Assignment submission Server Actions (src/actions/assignments.ts), Academic Integrity opt-in, #EDF-2026-XXXX receipts, multi-attempt audit trail, and timed quiz auto-scoring.", false, 44),
        createCell("CURRENT FOCUS", false, 18, "FEF3C7"),
      ],
    }),
    new TableRow({
      children: [
        createCell("Week 4", false, 12),
        createCell("Staff Portals", false, 26),
        createCell("Instructor grading Server Actions (src/actions/instructor.ts), rubric evaluations, gradebook releases, Admin user CRUD, and student registration approval queue.", false, 44),
        createCell("LOCKED", false, 18, "F1F5F9"),
      ],
    }),
    new TableRow({
      children: [
        createCell("Week 5", false, 12),
        createCell("Cloud Storage & DR", false, 26),
        createCell("Cloudflare R2 S3-compatible client with presigned upload/download URLs for student attachments, and automated nightly pg_dump backup workflow to R2 (30-day retention).", false, 44),
        createCell("LOCKED", false, 18, "F1F5F9"),
      ],
    }),
    new TableRow({
      children: [
        createCell("Week 6", false, 12),
        createCell("Messaging Hub", false, 26),
        createCell("Persistent messaging Server Actions (src/actions/messages.ts), unread counters, conversation threads, and audience-targeted campus announcements.", false, 44),
        createCell("LOCKED", false, 18, "F1F5F9"),
      ],
    }),
    new TableRow({
      children: [
        createCell("Week 7", false, 12),
        createCell("The Dedicated Audit Week", false, 26),
        createCell("Live Vercel Preview deploy, automated Playwright E2E suite against preview URL, real-device manual testing (desktop, tablet, mobile), and 100/100 Lighthouse SEO audit.", false, 44),
        createCell("LOCKED", false, 18, "F1F5F9"),
      ],
    }),
    new TableRow({
      children: [
        createCell("Week 8", false, 12),
        createCell("Production Launch", false, 26),
        createCell("Telemetry via instrumentation.ts streaming to Grafana Loki & Tempo, production domain promotion, automated smoke tests, and portfolio showcase documentation.", false, 44),
        createCell("LOCKED", false, 18, "F1F5F9"),
      ],
    }),
  ],
});

const identityTable = new Table({
  width: { size: 100, type: WidthType.PERCENTAGE },
  rows: [
    new TableRow({
      children: [
        createCell("Role", true, 20),
        createCell("Email Format Convention", true, 35),
        createCell("Concrete Institutional Examples", true, 45),
      ],
    }),
    new TableRow({
      children: [
        createCell("Student", false, 20),
        createCell("[studentNumber]@[domain]", false, 35),
        createCell("2003988@richacademy.richv.win\n2003988@eduflex.edu", false, 45),
      ],
    }),
    new TableRow({
      children: [
        createCell("Instructor", false, 20),
        createCell("[firstname].[lastname]@[domain]", false, 35),
        createCell("anita.humagain@richacademy.richv.win\nanita.humagain@eduflex.edu", false, 45),
      ],
    }),
    new TableRow({
      children: [
        createCell("Administrator", false, 20),
        createCell("a.[firstname].[lastname]@[domain]", false, 35),
        createCell("a.rojit.munankarmi@richacademy.richv.win\na.rojit.munankarmi@eduflex.edu", false, 45),
      ],
    }),
  ],
});

const doc = new Document({
  styles: {
    default: {
      document: {
        run: {
          font: "Calibri",
          size: 22,
          color: "0F172A",
        },
      },
    },
  },
  sections: [
    {
      properties: {
        page: {
          margin: { top: 1200, bottom: 1200, left: 1200, right: 1200 },
        },
      },
      children: [
        // Title Block
        new Paragraph({
          text: "EduFlex LMS — 8-Week Master Roadmap",
          heading: HeadingLevel.TITLE,
          alignment: AlignmentType.CENTER,
          spacing: { before: 100, after: 120 },
          run: { bold: true, size: 40, color: primaryColor, font: "Calibri" },
        }),
        new Paragraph({
          text: "Pure SSR + Server Actions | Top #1 SEO Engine | Modern Serverless TypeScript Stack",
          alignment: AlignmentType.CENTER,
          spacing: { before: 0, after: 180 },
          run: { italic: true, size: 22, color: grayColor, font: "Calibri" },
        }),
        new Paragraph({
          text: "Status: Weeks 1 & 2 Finished & Verified | Week 3 Active Focus | GitHub main @ commit 63eccff",
          alignment: AlignmentType.CENTER,
          spacing: { before: 0, after: 300 },
          run: { bold: true, size: 20, color: greenColor, font: "Calibri" },
        }),

        // Executive Summary
        heading1("1. Master Milestone Overview"),
        paragraph("The table below details the 8-week sequential gating lifecycle for the EduFlex LMS application. Every milestone must achieve 100% test completion and verification before subsequent weeks unlock."),
        summaryTable,

        // Identity Rules
        heading1("2. Institutional Identity & Account Provisioning Rules"),
        paragraph("User account provisioning is strictly governed by institutional identity policies. Self-registration is restricted to students with PENDING approval status, and faculty/admin roles can only be created by an Administrator via the User Management portal."),
        identityTable,

        // Week 1 Detailed
        heading1("3. Week 1: Data Moat & Better Auth Identity Layer (Finished)"),
        paragraph("Status: 100% COMPLETED & VERIFIED. Neon PostgreSQL production branch connected, Better Auth integrated, and Next.js edge route protection active."),
        taskItem("Task 1.1", "Database Seed", "Connect to Neon Serverless PostgreSQL and execute 6-tier seed script (prisma/seed.ts): 26 users, 9 courses, 18 enrollments, 13 assignments, 6 quizzes live.", true),
        taskItem("Task 1.2", "Package Installation", "Install better-auth ^1.7.17 into project dependencies.", true),
        taskItem("Task 1.3", "Schema Synchronization", "Add Account and Verification models with User/Session relations to prisma/schema.prisma and push to Neon.", true),
        taskItem("Task 1.4", "Auth Configuration", "Configure server-side Better Auth instance in lib/auth.ts with Prisma adapter.", true),
        taskItem("Task 1.5", "Server Auth Actions", "Build src/actions/auth.ts (loginAction, registerStudentAction, logoutAction) with node:crypto scrypt hashing and HTTP-only cookies.", true),
        taskItem("Task 1.6", "Edge Protection", "Implement Next.js edge route guard in middleware.ts to intercept unauthorized route requests before rendering.", true),
        taskItem("Task 1.7", "Audit Gate", "Pass TypeScript checks and full Playwright auth test suite (49/49 tests passed).", true),

        // Week 2 Detailed
        heading1("4. Week 2: Student Portal SSR, Course Actions & Top SEO (Finished)"),
        paragraph("Status: 100% COMPLETED & VERIFIED. Student Server Actions querying Neon PostgreSQL, Google Page #1 Technical SEO engine, navigation refinements, and Dark Mode blending verified."),
        taskItem("Task 2.1", "Student Server Actions", "Build src/actions/student.ts querying courses, enrollments, assignments, and deadlines directly from Neon.", true),
        taskItem("Task 2.2", "Dynamic Sitemap", "Build dynamic XML sitemap (app/sitemap.ts) auto-indexing public courses and pages with daily frequency and 1.0 priority.", true),
        taskItem("Task 2.3", "Crawler Policy", "Implement app/robots.ts allowing public indexing while blocking private portals (/student, /instructor, /admin).", true),
        taskItem("Task 2.4", "Schema.org JSON-LD", "Inject rich snippets in app/layout.tsx (SoftwareApplication 5.0 star rating, FAQPage accordions, and Course carousel).", true),
        taskItem("Task 2.5", "High-Intent SEO Copy", "Optimize landing page (src/PublicPages.tsx) with targeted keyword clusters ('Best Course Management Tools for Higher Education') and 'lightning-fast, lightweight' messaging.", true),
        taskItem("Task 2.6", "Navigation & Portal Refinements", "Place theme toggle beside the calendar, display student ID (2003988), add external Student Portal placeholder, and remove non-admin Settings.", true),
        taskItem("Task 2.7", "Dark Mode Blending & Audit Gate", "Fix dark mode color clashes on My Courses and Assignments pages while keeping Day (Light) Mode 100% untouched. Pass 162/162 Playwright tests with 0 TypeScript errors.", true),

        // Week 3 Detailed
        heading1("5. Week 3: Academic Assessments & Timed Quiz Engine (Current Focus)"),
        paragraph("Status: UNLOCKED & ACTIVE. Building assignment submission Server Actions directly to Neon PostgreSQL, generating submission receipts, and creating the timed quiz auto-scoring engine."),
        taskItem("Task 3.1", "Assignment Submissions", "Build src/actions/assignments.ts with mandatory Academic Integrity checkbox opt-in and #EDF-2026-XXXX receipt generation.", false),
        taskItem("Task 3.2", "Resubmission Trail", "Implement multi-attempt submissions with revision history audit trail and isLatest flag toggling.", false),
        taskItem("Task 3.3", "Timed Quiz Engine", "Build src/actions/quizzes.ts (QuizAttempt & QuizAttemptAnswer) with server-tracked countdown timers and auto-scoring.", false),
        taskItem("Task 3.4", "Answer Key Protection", "Secure question answer keys (correctIndex) server-side until after submission.", false),
        taskItem("Task 3.5", "Audit Gate", "Write and pass end-to-end Playwright test suite for submissions and quizzes across Chromium, Firefox, and WebKit.", false),

        // Week 4 Detailed
        heading1("6. Week 4: Staff Portals — Instructor Grading & Admin Operations (Locked)"),
        paragraph("Status: LOCKED until Week 3 is 100% verified. Faculty grading workflows and administrator user lifecycle controls."),
        taskItem("Task 4.1", "Instructor Grading Actions", "Build src/actions/instructor.ts to view submissions, enter rubric evaluations, and release marks to GradeRecord.", false),
        taskItem("Task 4.2", "Admin User CRUD", "Build src/actions/admin.ts enforcing institutional email conventions ([studentNumber]@..., firstname.lastname@..., a.firstname.lastname@...).", false),
        taskItem("Task 4.3", "Registration Approvals", "Build approval queue workflows (ApprovalRequest -> approve/reject student registrations).", false),
        taskItem("Task 4.4", "Staff UI Wiring", "Wire InstructorDashboard.tsx and AdminDashboard.tsx to Server Actions.", false),
        taskItem("Task 4.5", "Audit Gate", "Pass full Admin and Instructor Playwright test suites.", false),

        // Week 5 Detailed
        heading1("7. Week 5: Cloudflare R2 Storage & Disaster Recovery (Locked)"),
        paragraph("Status: LOCKED until Week 4 is 100% verified. Cloud object storage for large assignment attachments and automated database backup pipeline."),
        taskItem("Task 5.1", "R2 Client Setup", "Configure Cloudflare R2 S3-compatible client with presigned upload and download URLs.", false),
        taskItem("Task 5.2", "Direct R2 Uploads", "Wire student assignment attachments and instructor learning material PDFs directly to R2.", false),
        taskItem("Task 5.3", "Upload Validation", "Enforce server-side file size limits and MIME type whitelisting.", false),
        taskItem("Task 5.4", "Nightly DR Backup", "Implement .github/workflows/nightly-db-backup.yml for automated nightly pg_dump backups compressed into R2 (30-day lifecycle retention).", false),

        // Week 6 Detailed
        heading1("8. Week 6: Messaging Hub & Communication Engine (Locked)"),
        paragraph("Status: LOCKED until Week 5 is 100% verified. Direct messaging between students and faculty + campus-wide announcements."),
        taskItem("Task 6.1", "Messaging Actions", "Build src/actions/messages.ts for real-time conversation threads (Conversation, Message).", false),
        taskItem("Task 6.2", "Unread Counters & Search", "Implement per-user unread tracking (ConversationParticipant) and thread keyword search.", false),
        taskItem("Task 6.3", "Campus Announcements", "Build announcement publishing engine with targeted audience filters (ALL_USERS, STUDENTS_ONLY, COURSE_SPECIFIC).", false),

        // Week 7 Detailed
        heading1("9. Week 7: Vercel Deploy & The Dedicated Audit Week (Locked)"),
        paragraph("Status: LOCKED until Week 6 is 100% verified. Live cloud preview deployment and comprehensive multi-device verification."),
        taskItem("Task 7.1", "Cloud Preview Deployment", "Deploy feature branch to Vercel to generate a live https://eduflex-preview.vercel.app URL.", false),
        taskItem("Task 7.2", "Automated Cloud Audit", "Run full Playwright test suite against the live Vercel Preview URL (npm run test:e2e).", false),
        taskItem("Task 7.3", "Real-Device Manual Testing", "Test all user journeys (Student, Instructor, Admin) on physical desktop, tablet, and mobile devices.", false),
        taskItem("Task 7.4", "SEO & Accessibility Audit", "Verify 100/100 Lighthouse SEO score, Google Rich Snippet validity, and WCAG 2.1 AA keyboard accessibility.", false),

        // Week 8 Detailed
        heading1("10. Week 8: Observability, Production Launch & Portfolio Showcase (Locked)"),
        paragraph("Status: LOCKED until Week 7 is 100% verified. Telemetry streaming, custom domain go-live, and executive showcase."),
        taskItem("Task 8.1", "Telemetry Streaming", "Configure root instrumentation.ts to stream traces to Grafana Tempo and runtime logs to Grafana Loki.", false),
        taskItem("Task 8.2", "Production Go-Live", "Promote main branch to production Vercel + Cloudflare on production domain (https://eduflex.edu).", false),
        taskItem("Task 8.3", "Smoke Tests", "Execute automated production health checks and verify database failover.", false),
        taskItem("Task 8.4", "Portfolio Documentation", "Finalize architecture diagrams, metrics evidence, and project case study for Richard's portfolio showcase.", false),
      ],
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  // 1. Write to docs folder in repo
  const repoPath = path.resolve('docs/EduFlex_8_Week_Master_Roadmap.docx');
  fs.writeFileSync(repoPath, buffer);
  console.log('✓ Generated repository docx at:', repoPath);

  // 2. Write to brain artifact folder
  const artifactPath = 'C:/Users/Richard/.gemini/antigravity/brain/87e98f76-75aa-4f8f-b2fd-766e02151c5d/EduFlex_8_Week_Master_Roadmap.docx';
  fs.writeFileSync(artifactPath, buffer);
  console.log('✓ Generated artifact docx at:', artifactPath);
});
