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

console.log('--- Generating EduFlex 12-Week Master Roadmap .docx ---');

const primaryColor = "1A3A9E"; // Royal Blue
const darkColor = "0F172A";
const grayColor = "64748B";
const greenColor = "16A34A";
const orangeColor = "EA580C";
const purpleColor = "7E22CE";
const goldColor = "B45309";

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

function taskItem(prefix, title, desc, status = "locked") {
  let mark = "[ ] ";
  let markColor = "64748B";
  if (status === "done") {
    mark = "[x] ";
    markColor = greenColor;
  } else if (status === "current") {
    mark = "[*] ";
    markColor = orangeColor;
  } else if (status === "testing") {
    mark = "[~] ";
    markColor = purpleColor;
  } else if (status === "presentation") {
    mark = "[★] ";
    markColor = goldColor;
  }

  return new Paragraph({
    spacing: { before: 40, after: 60 },
    bullet: { level: 0 },
    children: [
      new TextRun({
        text: mark,
        bold: true,
        color: markColor,
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
        color: status === "done" ? "334155" : "0F172A",
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
        createCell("Phase / Focus", true, 26),
        createCell("Deliverables & Core Milestones", true, 44),
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
    new TableRow({
      children: [
        createCell("Week 9", false, 12),
        createCell("Testing, Debugging & Test Docs", false, 26),
        createCell("End-to-end regression testing across Chromium, Firefox, and WebKit; quiz submission concurrency stress tests; test execution matrix and defect tracking documentation.", false, 44),
        createCell("TESTING", false, 18, "F3E8FF"),
      ],
    }),
    new TableRow({
      children: [
        createCell("Week 10", false, 12),
        createCell("Debugging, Security & Tech Docs", false, 26),
        createCell("Deep debugging, session edge-case handling, CSRF/XSS red-teaming, DR mock drill, technical architecture documentation, and Server Action specification manuals.", false, 44),
        createCell("DEBUGGING", false, 18, "F3E8FF"),
      ],
    }),
    new TableRow({
      children: [
        createCell("Week 11", false, 12),
        createCell("Polish, User Docs & Staging Freeze", false, 26),
        createCell("Core Web Vitals (sub-1s LCP), WCAG 2.1 AA accessibility audit, User Manuals (Student, Instructor, Admin guides), and full presentation dry-run simulation.", false, 44),
        createCell("DOCUMENTATION", false, 18, "F3E8FF"),
      ],
    }),
    new TableRow({
      children: [
        createCell("Week 12", false, 12),
        createCell("Final Presentation & Defense", false, 26),
        createCell("Final presentation delivery, live system demonstration (Student, Instructor, Admin portals), technical architecture defense, and project sign-off.", false, 44),
        createCell("PRESENTATION", false, 18, "FEF9C3"),
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
          text: "EduFlex LMS — 12-Week Master Roadmap",
          heading: HeadingLevel.TITLE,
          alignment: AlignmentType.CENTER,
          spacing: { before: 100, after: 120 },
          run: { bold: true, size: 40, color: primaryColor, font: "Calibri" },
        }),
        new Paragraph({
          text: "Weeks 1–8: Full Feature Build | Weeks 9–11: Intensive Testing & Debugging | Week 12: Final Presentation",
          alignment: AlignmentType.CENTER,
          spacing: { before: 0, after: 180 },
          run: { italic: true, size: 22, color: grayColor, font: "Calibri" },
        }),
        new Paragraph({
          text: "Current Status: Weeks 1 & 2 Finished | Week 3 Active Focus | GitHub main @ commit 63eccff",
          alignment: AlignmentType.CENTER,
          spacing: { before: 0, after: 300 },
          run: { bold: true, size: 20, color: greenColor, font: "Calibri" },
        }),

        heading1("1. 12-Week Master Timeline Overview"),
        paragraph("The complete 12-week schedule maps out the initial 8-week core feature development, followed by a dedicated 3-week comprehensive testing and debugging period (Weeks 9–11), culminating in the final project presentation and defense in Week 12."),
        summaryTable,

        heading1("2. Weeks 1–8: Core System Architecture & Portals"),
        paragraph("The initial 8 weeks build the complete production foundation using Pure SSR + Server Actions directly to Neon PostgreSQL."),
        taskItem("Week 1", "Data Moat & Better Auth", "Neon DB 6-tier seed, Better Auth Prisma adapter, Server Auth Actions, and Next.js Edge Middleware route guards.", "done"),
        taskItem("Week 2", "Student Portal SSR & Top SEO", "Student Server Actions, XML Sitemap, Robots policy, Schema.org JSON-LD (5-star snippet, FAQPage), navigation updates, and Dark Mode blending.", "done"),
        taskItem("Week 3", "Assessments & Quizzes", "Assignment submission Server Actions, Academic Integrity opt-in, #EDF-2026-XXXX receipts, multi-attempt revision audit trail, and timed quiz auto-scoring.", "current"),
        taskItem("Week 4", "Staff Portals", "Instructor grading actions, rubric evaluations, gradebook releases, Admin user CRUD, and student registration approval queue.", "locked"),
        taskItem("Week 5", "Cloudflare R2 Storage & DR", "Cloudflare R2 S3-compatible client with presigned upload/download URLs, and automated nightly pg_dump backup workflow (30-day retention).", "locked"),
        taskItem("Week 6", "Messaging Hub", "Persistent messaging Server Actions, unread counters, conversation threads, and audience-targeted campus announcements.", "locked"),
        taskItem("Week 7", "The Dedicated Audit Week", "Live preview deployment on Vercel, automated Playwright E2E suite against preview URL, real-device manual testing, and 100/100 Lighthouse SEO audit.", "locked"),
        taskItem("Week 8", "Production Launch", "Telemetry via instrumentation.ts streaming to Grafana Loki & Tempo, production domain promotion, smoke tests, and portfolio showcase documentation.", "locked"),

        heading1("3. Weeks 9–11: Intensive Testing, Debugging & Documentation Phase"),
        paragraph("A dedicated 3-week sprint focusing on end-to-end quality assurance, deep bug resolution, edge-case hardening, and creating comprehensive project documentation prior to the final presentation."),
        taskItem("Week 9", "Testing, Debugging & Test Documentation", "Execute full Playwright test suite across Chromium, Firefox, and WebKit; simulate concurrent student quiz submissions; test PostgreSQL connection pooling under load.", "testing"),
        taskItem("Task 9.1", "Cross-Browser & Concurrency Testing", "Verify UI, layouts, and animations on Desktop Chrome, Firefox, Safari (WebKit), iOS Safari, and Android Chrome under high load.", "testing"),
        taskItem("Task 9.2", "Test Documentation & Defect Log", "Author comprehensive Test Execution Matrix, QA sign-off checklists, and categorized defect tracking log (P0/P1/P2).", "testing"),

        taskItem("Week 10", "Deep Debugging, Security Hardening & Technical Documentation", "Resolve edge cases, session timeouts, token invalidations, CSRF/XSS red-teaming, and author full technical system manuals.", "testing"),
        taskItem("Task 10.1", "Deep Bug Fixes & Edge Case Resolution", "Test multi-tab logouts, expired cookies, role privilege escalation attempts, race conditions, and error boundary fallbacks.", "testing"),
        taskItem("Task 10.2", "Technical & Architectural Documentation", "Document API-less Server Actions specifications, Prisma database entity relationship models, and Disaster Recovery runbooks.", "testing"),

        taskItem("Week 11", "Performance Tuning, User Guides & Staging Freeze", "Final polish of micro-interactions, dark/light theme switching, sub-1.0s LCP optimization, accessibility compliance (WCAG 2.1 AA), user manuals, and dry-run rehearsal.", "testing"),
        taskItem("Task 11.1", "Core Web Vitals & Polish", "Audit sub-second LCP, zero CLS, smooth 60fps animations, and responsive layout polish across mobile and tablet.", "testing"),
        taskItem("Task 11.2", "User & Administrator Documentation", "Compile complete Student User Manual, Instructor Grading Guide, and Administrator Operations Handbook.", "testing"),
        taskItem("Task 11.3", "Full Presentation Rehearsal & Code Freeze", "Simulate end-to-end user journeys (Student -> Instructor -> Admin) to verify demo reliability and freeze staging codebase.", "testing"),

        heading1("4. Week 12: Final Presentation & Project Showcase"),
        paragraph("The culmination of the 12-week project cycle, presenting the finished EduFlex LMS platform to university stakeholders and evaluators."),
        taskItem("Week 12", "Final Presentation & Live Demonstration", "Deliver high-impact project defense, live walkthrough of Student, Instructor, and Admin portals, and technical architecture review.", "presentation"),
        taskItem("Task 12.1", "Slide Deck & Demo Script", "Prepare structured demonstration highlighting problem statement, modern serverless architecture, and live workflows.", "presentation"),
        taskItem("Task 12.2", "Live System Demonstration", "Execute real-time walkthrough: Student logs in, takes timed quiz, submits assessment; Instructor evaluates via rubric; Admin inspects system metrics.", "presentation"),
        taskItem("Task 12.3", "Technical Defense & Portfolio Showcase", "Present database moat, API-less Server Actions architecture, 100/100 SEO profile, and live production deployment evidence.", "presentation"),
      ],
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  // 1. Write to docs folder in repo
  const repoPath = path.resolve('docs/EduFlex_12_Week_Master_Roadmap.docx');
  fs.writeFileSync(repoPath, buffer);
  console.log('✓ Generated repository 12-week docx at:', repoPath);

  // 2. Write to brain artifact folder
  const artifactPath = 'C:/Users/Richard/.gemini/antigravity/brain/87e98f76-75aa-4f8f-b2fd-766e02151c5d/EduFlex_12_Week_Master_Roadmap.docx';
  fs.writeFileSync(artifactPath, buffer);
  console.log('✓ Generated artifact 12-week docx at:', artifactPath);
});
