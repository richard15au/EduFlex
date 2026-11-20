const ExcelJS = require('exceljs');
const path = require('path');
const fs = require('fs');

async function createEduFlexGanttWorkbook() {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = 'Richard & Antigravity (Google DeepMind)';
  workbook.lastModifiedBy = 'Richard';
  workbook.created = new Date();
  workbook.modified = new Date();

  // ==========================================
  // SHEET 1: 12-WEEK GANTT CHART
  // ==========================================
  const ganttSheet = workbook.addWorksheet('12-Week Gantt Chart', {
    views: [{ state: 'frozen', xSplit: 3, ySplit: 5, showGridLines: true }]
  });

  // Color Palette Constants
  const NAVY_DARK = '0F172A';
  const BLUE_HEADER = '1E3A8A';
  const TEXT_WHITE = 'FFFFFF';
  const TEXT_DARK = '1E293B';
  const BORDER_COLOR = 'CBD5E1';

  // Status Fills
  const FILL_DONE = { type: 'pattern', pattern: 'solid', fgColor: { argb: '10B981' } };       // Emerald Green
  const FILL_CURRENT = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'F59E0B' } };    // Amber
  const FILL_FEATURE = { type: 'pattern', pattern: 'solid', fgColor: { argb: '3B82F6' } };    // Royal Blue
  const FILL_TEST_DOC = { type: 'pattern', pattern: 'solid', fgColor: { argb: '8B5CF6' } };   // Purple
  const FILL_PRESENT = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'EC4899' } };    // Pink/Magenta
  const FILL_SUMMARY_BG = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'F1F5F9' } };

  // Border Style
  const thinBorder = {
    top: { style: 'thin', color: { argb: BORDER_COLOR } },
    bottom: { style: 'thin', color: { argb: BORDER_COLOR } },
    left: { style: 'thin', color: { argb: BORDER_COLOR } },
    right: { style: 'thin', color: { argb: BORDER_COLOR } }
  };

  // Configure Column Widths
  ganttSheet.columns = [
    { key: 'wbs', width: 9 },         // A: WBS / ID
    { key: 'task', width: 38 },       // B: Task / Deliverable Name
    { key: 'phase', width: 28 },      // C: Phase
    { key: 'owner', width: 14 },      // D: Assignee
    { key: 'startWeek', width: 10 },  // E: Start Wk
    { key: 'endWeek', width: 10 },    // F: End Wk
    { key: 'status', width: 16 },     // G: Status
    { key: 'progress', width: 12 },   // H: % Done
    // Gantt Week Columns (I - T)
    { key: 'w1', width: 7 },
    { key: 'w2', width: 7 },
    { key: 'w3', width: 7 },
    { key: 'w4', width: 7 },
    { key: 'w5', width: 7 },
    { key: 'w6', width: 7 },
    { key: 'w7', width: 7 },
    { key: 'w8', width: 7 },
    { key: 'w9', width: 7 },
    { key: 'w10', width: 7 },
    { key: 'w11', width: 7 },
    { key: 'w12', width: 7 },
  ];

  // Row 1: Main Title Banner
  ganttSheet.mergeCells('A1:T1');
  const titleCell = ganttSheet.getCell('A1');
  titleCell.value = 'EDUFLEX LMS — 12-WEEK MASTER ROADMAP & INTERACTIVE GANTT CHART';
  titleCell.font = { name: 'Calibri', size: 16, bold: true, color: { argb: TEXT_WHITE } };
  titleCell.alignment = { vertical: 'middle', horizontal: 'center' };
  titleCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: NAVY_DARK } };
  ganttSheet.getRow(1).height = 36;

  // Row 2: Subtitle Banner
  ganttSheet.mergeCells('A2:T2');
  const subtitleCell = ganttSheet.getCell('A2');
  subtitleCell.value = 'Mission: Pure Next.js SSR + Server Actions directly to Neon PostgreSQL | Better Auth Identity | Cloudflare R2 | Grafana Telemetry';
  subtitleCell.font = { name: 'Calibri', size: 10, italic: true, color: { argb: '94A3B8' } };
  subtitleCell.alignment = { vertical: 'middle', horizontal: 'center' };
  subtitleCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '1E293B' } };
  ganttSheet.getRow(2).height = 20;

  // Row 3: Legend Bar
  ganttSheet.mergeCells('A3:T3');
  const legendCell = ganttSheet.getCell('A3');
  legendCell.value = 'LEGEND:  [█ GREEN: Completed]   [█ AMBER: Current Focus (Week 3)]   [█ BLUE: Feature Implementation (Weeks 4-8)]   [█ PURPLE: Testing, Debugging & Docs (Weeks 9-11)]   [█ PINK: Presentation (Week 12)]';
  legendCell.font = { name: 'Calibri', size: 9, bold: true, color: { argb: '334155' } };
  legendCell.alignment = { vertical: 'middle', horizontal: 'center' };
  legendCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'E2E8F0' } };
  ganttSheet.getRow(3).height = 22;

  // Row 4: Timeline Phase Grouping Headers
  ganttSheet.mergeCells('A4:H4');
  const metaHeader = ganttSheet.getCell('A4');
  metaHeader.value = 'TASK MANAGEMENT & METRICS';
  metaHeader.font = { name: 'Calibri', size: 10, bold: true, color: { argb: TEXT_WHITE } };
  metaHeader.alignment = { vertical: 'middle', horizontal: 'center' };
  metaHeader.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: BLUE_HEADER } };

  ganttSheet.mergeCells('I4:P4');
  const p1Header = ganttSheet.getCell('I4');
  p1Header.value = 'PHASE 1: FEATURE BUILD (WEEKS 1–8)';
  p1Header.font = { name: 'Calibri', size: 10, bold: true, color: { argb: TEXT_WHITE } };
  p1Header.alignment = { vertical: 'middle', horizontal: 'center' };
  p1Header.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '1D4ED8' } };

  ganttSheet.mergeCells('Q4:S4');
  const p2Header = ganttSheet.getCell('Q4');
  p2Header.value = 'PHASE 2: TESTING, DEBUGGING & DOCS';
  p2Header.font = { name: 'Calibri', size: 9, bold: true, color: { argb: TEXT_WHITE } };
  p2Header.alignment = { vertical: 'middle', horizontal: 'center' };
  p2Header.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '6D28D9' } };

  const p3Header = ganttSheet.getCell('T4');
  p3Header.value = 'PHASE 3';
  p3Header.font = { name: 'Calibri', size: 9, bold: true, color: { argb: TEXT_WHITE } };
  p3Header.alignment = { vertical: 'middle', horizontal: 'center' };
  p3Header.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'BE185D' } };
  ganttSheet.getRow(4).height = 22;

  // Row 5: Column Headers
  const colHeaders = [
    'WBS', 'Task / Deliverable Description', 'Project Phase', 'Assignee',
    'Start', 'End', 'Status', '% Done',
    'W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10', 'W11', 'W12'
  ];
  const headerRow = ganttSheet.getRow(5);
  colHeaders.forEach((text, idx) => {
    const cell = headerRow.getCell(idx + 1);
    cell.value = text;
    cell.font = { name: 'Calibri', size: 10, bold: true, color: { argb: TEXT_WHITE } };
    cell.alignment = { vertical: 'middle', horizontal: 'center' };
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '334155' } };
    cell.border = thinBorder;
  });
  headerRow.height = 24;

  // Data definitions for 12 weeks
  const tasks = [
    // --- WEEK 1 ---
    {
      wbs: 'W1', task: 'Week 1: Data Moat & Better Auth Identity', phase: 'Phase 1: Feature Build',
      owner: 'Richard', startWeek: 1, endWeek: 1, status: 'COMPLETED', progress: 1.0, isSummary: true, phaseType: 'done'
    },
    { wbs: '1.1', task: 'Neon PostgreSQL 6-tier database seed', phase: 'Data Layer', owner: 'Richard', startWeek: 1, endWeek: 1, status: 'COMPLETED', progress: 1.0, phaseType: 'done' },
    { wbs: '1.2', task: 'Install & configure better-auth ^1.7.17', phase: 'Auth Layer', owner: 'Richard', startWeek: 1, endWeek: 1, status: 'COMPLETED', progress: 1.0, phaseType: 'done' },
    { wbs: '1.3', task: 'Prisma schema sync (Account & Verification)', phase: 'Data Layer', owner: 'Richard', startWeek: 1, endWeek: 1, status: 'COMPLETED', progress: 1.0, phaseType: 'done' },
    { wbs: '1.4', task: 'Server auth actions with scrypt & HTTP cookies', phase: 'Auth Layer', owner: 'Richard', startWeek: 1, endWeek: 1, status: 'COMPLETED', progress: 1.0, phaseType: 'done' },
    { wbs: '1.5', task: 'Next.js edge middleware route guards', phase: 'Security Layer', owner: 'Richard', startWeek: 1, endWeek: 1, status: 'COMPLETED', progress: 1.0, phaseType: 'done' },
    { wbs: '1.6', task: 'Pass 49/49 Playwright auth test suite', phase: 'Audit Gate', owner: 'Richard', startWeek: 1, endWeek: 1, status: 'COMPLETED', progress: 1.0, phaseType: 'done' },

    // --- WEEK 2 ---
    {
      wbs: 'W2', task: 'Week 2: Student SSR, Course Actions & Top SEO', phase: 'Phase 1: Feature Build',
      owner: 'Richard', startWeek: 2, endWeek: 2, status: 'COMPLETED', progress: 1.0, isSummary: true, phaseType: 'done'
    },
    { wbs: '2.1', task: 'Student Server Actions (src/actions/student.ts)', phase: 'Server Actions', owner: 'Richard', startWeek: 2, endWeek: 2, status: 'COMPLETED', progress: 1.0, phaseType: 'done' },
    { wbs: '2.2', task: 'Dynamic XML sitemap auto-generator (app/sitemap.ts)', phase: 'SEO Foundation', owner: 'Richard', startWeek: 2, endWeek: 2, status: 'COMPLETED', progress: 1.0, phaseType: 'done' },
    { wbs: '2.3', task: 'Robots crawler policy (app/robots.ts)', phase: 'SEO Foundation', owner: 'Richard', startWeek: 2, endWeek: 2, status: 'COMPLETED', progress: 1.0, phaseType: 'done' },
    { wbs: '2.4', task: 'Schema.org JSON-LD (SoftwareApp, FAQPage, Course)', phase: 'SEO Foundation', owner: 'Richard', startWeek: 2, endWeek: 2, status: 'COMPLETED', progress: 1.0, phaseType: 'done' },
    { wbs: '2.5', task: 'High-intent SEO copy & keyword optimization', phase: 'Public Landing', owner: 'Richard', startWeek: 2, endWeek: 2, status: 'COMPLETED', progress: 1.0, phaseType: 'done' },
    { wbs: '2.6', task: 'Dark mode color blending (100% Day Mode intact)', phase: 'UI / UX Polish', owner: 'Richard', startWeek: 2, endWeek: 2, status: 'COMPLETED', progress: 1.0, phaseType: 'done' },
    { wbs: '2.7', task: 'Pass 162/162 Playwright test suite (0 TS errors)', phase: 'Audit Gate', owner: 'Richard', startWeek: 2, endWeek: 2, status: 'COMPLETED', progress: 1.0, phaseType: 'done' },

    // --- WEEK 3 ---
    {
      wbs: 'W3', task: 'Week 3: Academic Assessments & Timed Quiz Engine', phase: 'Phase 1: Feature Build',
      owner: 'Richard', startWeek: 3, endWeek: 3, status: 'IN PROGRESS', progress: 0.15, isSummary: true, phaseType: 'current'
    },
    { wbs: '3.1', task: 'Assignment submission Server Actions (src/actions/assignments.ts)', phase: 'Assessment Engine', owner: 'Richard', startWeek: 3, endWeek: 3, status: 'IN PROGRESS', progress: 0.20, phaseType: 'current' },
    { wbs: '3.2', task: 'Academic Integrity checkbox & #EDF-2026-XXXX receipts', phase: 'Compliance', owner: 'Richard', startWeek: 3, endWeek: 3, status: 'PLANNED', progress: 0.0, phaseType: 'current' },
    { wbs: '3.3', task: 'Multi-attempt resubmissions with audit revision trail', phase: 'Assessment Engine', owner: 'Richard', startWeek: 3, endWeek: 3, status: 'PLANNED', progress: 0.0, phaseType: 'current' },
    { wbs: '3.4', task: 'Timed quiz engine (QuizAttempt & auto-scoring)', phase: 'Quiz Engine', owner: 'Richard', startWeek: 3, endWeek: 3, status: 'PLANNED', progress: 0.0, phaseType: 'current' },
    { wbs: '3.5', task: 'Server-side answer key protection (correctIndex)', phase: 'Security Layer', owner: 'Richard', startWeek: 3, endWeek: 3, status: 'PLANNED', progress: 0.0, phaseType: 'current' },
    { wbs: '3.6', task: 'Pass Playwright quiz & submission test suite', phase: 'Audit Gate', owner: 'Richard', startWeek: 3, endWeek: 3, status: 'PLANNED', progress: 0.0, phaseType: 'current' },

    // --- WEEK 4 ---
    {
      wbs: 'W4', task: 'Week 4: Staff Portals (Grading & Admin Operations)', phase: 'Phase 1: Feature Build',
      owner: 'Richard', startWeek: 4, endWeek: 4, status: 'LOCKED', progress: 0.0, isSummary: true, phaseType: 'feature'
    },
    { wbs: '4.1', task: 'Instructor grading Server Actions (src/actions/instructor.ts)', phase: 'Faculty Portal', owner: 'Richard', startWeek: 4, endWeek: 4, status: 'LOCKED', progress: 0.0, phaseType: 'feature' },
    { wbs: '4.2', task: 'Rubric evaluation & GradeRecord score release', phase: 'Faculty Portal', owner: 'Richard', startWeek: 4, endWeek: 4, status: 'LOCKED', progress: 0.0, phaseType: 'feature' },
    { wbs: '4.3', task: 'Admin user CRUD with institutional naming rules', phase: 'Admin Portal', owner: 'Richard', startWeek: 4, endWeek: 4, status: 'LOCKED', progress: 0.0, phaseType: 'feature' },
    { wbs: '4.4', task: 'Student registration approval queue workflow', phase: 'Admin Portal', owner: 'Richard', startWeek: 4, endWeek: 4, status: 'LOCKED', progress: 0.0, phaseType: 'feature' },
    { wbs: '4.5', task: 'Pass Instructor & Admin Playwright test suite', phase: 'Audit Gate', owner: 'Richard', startWeek: 4, endWeek: 4, status: 'LOCKED', progress: 0.0, phaseType: 'feature' },

    // --- WEEK 5 ---
    {
      wbs: 'W5', task: 'Week 5: Cloudflare R2 Storage & Disaster Recovery', phase: 'Phase 1: Feature Build',
      owner: 'Richard', startWeek: 5, endWeek: 5, status: 'LOCKED', progress: 0.0, isSummary: true, phaseType: 'feature'
    },
    { wbs: '5.1', task: 'Cloudflare R2 S3-compatible client & presigned URLs', phase: 'Object Storage', owner: 'Richard', startWeek: 5, endWeek: 5, status: 'LOCKED', progress: 0.0, phaseType: 'feature' },
    { wbs: '5.2', task: 'Direct-to-R2 student attachment & PDF material uploads', phase: 'Object Storage', owner: 'Richard', startWeek: 5, endWeek: 5, status: 'LOCKED', progress: 0.0, phaseType: 'feature' },
    { wbs: '5.3', task: 'Server-side file size & MIME type security validation', phase: 'Security Layer', owner: 'Richard', startWeek: 5, endWeek: 5, status: 'LOCKED', progress: 0.0, phaseType: 'feature' },
    { wbs: '5.4', task: 'Automated nightly pg_dump backup to R2 (30-day retention)', phase: 'Disaster Recovery', owner: 'Richard', startWeek: 5, endWeek: 5, status: 'LOCKED', progress: 0.0, phaseType: 'feature' },

    // --- WEEK 6 ---
    {
      wbs: 'W6', task: 'Week 6: Messaging Hub & Communication Engine', phase: 'Phase 1: Feature Build',
      owner: 'Richard', startWeek: 6, endWeek: 6, status: 'LOCKED', progress: 0.0, isSummary: true, phaseType: 'feature'
    },
    { wbs: '6.1', task: 'Persistent messaging Server Actions (src/actions/messages.ts)', phase: 'Communication', owner: 'Richard', startWeek: 6, endWeek: 6, status: 'LOCKED', progress: 0.0, phaseType: 'feature' },
    { wbs: '6.2', task: 'Unread message counters & thread keyword search', phase: 'Communication', owner: 'Richard', startWeek: 6, endWeek: 6, status: 'LOCKED', progress: 0.0, phaseType: 'feature' },
    { wbs: '6.3', task: 'Campus announcements with targeted audience filters', phase: 'Communication', owner: 'Richard', startWeek: 6, endWeek: 6, status: 'LOCKED', progress: 0.0, phaseType: 'feature' },

    // --- WEEK 7 ---
    {
      wbs: 'W7', task: 'Week 7: Vercel Deploy & Consolidated Cloud Audit', phase: 'Phase 1: Feature Build',
      owner: 'Richard', startWeek: 7, endWeek: 7, status: 'LOCKED', progress: 0.0, isSummary: true, phaseType: 'feature'
    },
    { wbs: '7.1', task: 'Deploy feature branch to live Vercel Preview URL', phase: 'Cloud Infrastructure', owner: 'Richard', startWeek: 7, endWeek: 7, status: 'LOCKED', progress: 0.0, phaseType: 'feature' },
    { wbs: '7.2', task: 'Run full automated Playwright test suite against Vercel', phase: 'Audit Gate', owner: 'Richard', startWeek: 7, endWeek: 7, status: 'LOCKED', progress: 0.0, phaseType: 'feature' },
    { wbs: '7.3', task: 'Real-device manual testing (Desktop, iPad, iPhone, Android)', phase: 'Audit Gate', owner: 'Richard', startWeek: 7, endWeek: 7, status: 'LOCKED', progress: 0.0, phaseType: 'feature' },
    { wbs: '7.4', task: 'Verify 100/100 Lighthouse SEO score & Google rich snippets', phase: 'Audit Gate', owner: 'Richard', startWeek: 7, endWeek: 7, status: 'LOCKED', progress: 0.0, phaseType: 'feature' },

    // --- WEEK 8 ---
    {
      wbs: 'W8', task: 'Week 8: Observability & Production Go-Live', phase: 'Phase 1: Feature Build',
      owner: 'Richard', startWeek: 8, endWeek: 8, status: 'LOCKED', progress: 0.0, isSummary: true, phaseType: 'feature'
    },
    { wbs: '8.1', task: 'Telemetry via instrumentation.ts to Grafana Loki & Tempo', phase: 'Observability', owner: 'Richard', startWeek: 8, endWeek: 8, status: 'LOCKED', progress: 0.0, phaseType: 'feature' },
    { wbs: '8.2', task: 'Promote main branch to production domain (eduflex.edu)', phase: 'Release', owner: 'Richard', startWeek: 8, endWeek: 8, status: 'LOCKED', progress: 0.0, phaseType: 'feature' },
    { wbs: '8.3', task: 'Automated production smoke tests & database failover check', phase: 'Verification', owner: 'Richard', startWeek: 8, endWeek: 8, status: 'LOCKED', progress: 0.0, phaseType: 'feature' },

    // --- WEEK 9 ---
    {
      wbs: 'W9', task: 'Week 9: Testing, Debugging & Test Documentation', phase: 'Phase 2: Quality & Docs',
      owner: 'Richard', startWeek: 9, endWeek: 9, status: 'LOCKED', progress: 0.0, isSummary: true, phaseType: 'test_doc'
    },
    { wbs: '9.1', task: 'Full automated regression testing across all browsers', phase: 'Testing', owner: 'Richard', startWeek: 9, endWeek: 9, status: 'LOCKED', progress: 0.0, phaseType: 'test_doc' },
    { wbs: '9.2', task: 'High-concurrency quiz submission & upload stress testing', phase: 'Debugging', owner: 'Richard', startWeek: 9, endWeek: 9, status: 'LOCKED', progress: 0.0, phaseType: 'test_doc' },
    { wbs: '9.3', task: 'Edge middleware boundary testing & cookie tampering checks', phase: 'Testing', owner: 'Richard', startWeek: 9, endWeek: 9, status: 'LOCKED', progress: 0.0, phaseType: 'test_doc' },
    { wbs: '9.4', task: 'Author QA Test Matrix & Defect Tracking Log (P0/P1/P2)', phase: 'Documentation', owner: 'Richard', startWeek: 9, endWeek: 9, status: 'LOCKED', progress: 0.0, phaseType: 'test_doc' },

    // --- WEEK 10 ---
    {
      wbs: 'W10', task: 'Week 10: Deep Debugging, Security & Tech Docs', phase: 'Phase 2: Quality & Docs',
      owner: 'Richard', startWeek: 10, endWeek: 10, status: 'LOCKED', progress: 0.0, isSummary: true, phaseType: 'test_doc'
    },
    { wbs: '10.1', task: 'Session timeout, multi-tab logout & token invalidation fixes', phase: 'Debugging', owner: 'Richard', startWeek: 10, endWeek: 10, status: 'LOCKED', progress: 0.0, phaseType: 'test_doc' },
    { wbs: '10.2', task: 'CSRF/XSS red-team audit & Server Action injection defense', phase: 'Security', owner: 'Richard', startWeek: 10, endWeek: 10, status: 'LOCKED', progress: 0.0, phaseType: 'test_doc' },
    { wbs: '10.3', task: 'Simulate mock disaster recovery restoration from R2 backup', phase: 'Reliability', owner: 'Richard', startWeek: 10, endWeek: 10, status: 'LOCKED', progress: 0.0, phaseType: 'test_doc' },
    { wbs: '10.4', task: 'Author Architecture Specs & Disaster Recovery Runbook', phase: 'Documentation', owner: 'Richard', startWeek: 10, endWeek: 10, status: 'LOCKED', progress: 0.0, phaseType: 'test_doc' },

    // --- WEEK 11 ---
    {
      wbs: 'W11', task: 'Week 11: Performance Polish, User Guides & Staging Freeze', phase: 'Phase 2: Quality & Docs',
      owner: 'Richard', startWeek: 11, endWeek: 11, status: 'LOCKED', progress: 0.0, isSummary: true, phaseType: 'test_doc'
    },
    { wbs: '11.1', task: 'Core Web Vitals optimization (sub-1s LCP, 0.0 CLS, <50ms INP)', phase: 'Performance', owner: 'Richard', startWeek: 11, endWeek: 11, status: 'LOCKED', progress: 0.0, phaseType: 'test_doc' },
    { wbs: '11.2', task: 'WCAG 2.1 AA accessibility audit & keyboard tab order check', phase: 'Accessibility', owner: 'Richard', startWeek: 11, endWeek: 11, status: 'LOCKED', progress: 0.0, phaseType: 'test_doc' },
    { wbs: '11.3', task: 'Author Student Manual, Instructor Guide & Admin Operations Book', phase: 'Documentation', owner: 'Richard', startWeek: 11, endWeek: 11, status: 'LOCKED', progress: 0.0, phaseType: 'test_doc' },
    { wbs: '11.4', task: 'Complete live demo dry-run rehearsal & freeze staging code', phase: 'Presentation Prep', owner: 'Richard', startWeek: 11, endWeek: 11, status: 'LOCKED', progress: 0.0, phaseType: 'test_doc' },

    // --- WEEK 12 ---
    {
      wbs: 'W12', task: 'Week 12: Final Presentation, Live Demo & Project Defense', phase: 'Phase 3: Showcase',
      owner: 'Richard', startWeek: 12, endWeek: 12, status: 'LOCKED', progress: 0.0, isSummary: true, phaseType: 'present'
    },
    { wbs: '12.1', task: 'Executive slide deck (Architecture, SEO moat, business impact)', phase: 'Presentation', owner: 'Richard', startWeek: 12, endWeek: 12, status: 'LOCKED', progress: 0.0, phaseType: 'present' },
    { wbs: '12.2', task: 'Live demo: Student quiz & homework -> Instructor rubric grading', phase: 'Live Demo', owner: 'Richard', startWeek: 12, endWeek: 12, status: 'LOCKED', progress: 0.0, phaseType: 'present' },
    { wbs: '12.3', task: 'Technical architecture defense (Pure SSR, Server Actions, Neon)', phase: 'Defense', owner: 'Richard', startWeek: 12, endWeek: 12, status: 'LOCKED', progress: 0.0, phaseType: 'present' },
    { wbs: '12.4', task: 'Project handover package, GitHub repository & stakeholder signoff', phase: 'Handover', owner: 'Richard', startWeek: 12, endWeek: 12, status: 'LOCKED', progress: 0.0, phaseType: 'present' },
  ];

  let rowIndex = 6;
  tasks.forEach((item) => {
    const row = ganttSheet.getRow(rowIndex);

    // Meta Columns A-H
    row.getCell(1).value = item.wbs;
    row.getCell(2).value = item.task;
    row.getCell(3).value = item.phase;
    row.getCell(4).value = item.owner;
    row.getCell(5).value = `Wk ${item.startWeek}`;
    row.getCell(6).value = `Wk ${item.endWeek}`;
    row.getCell(7).value = item.status;
    row.getCell(8).value = item.progress;
    row.getCell(8).numFmt = '0%';

    // Styling meta columns
    const isSum = item.isSummary;
    for (let c = 1; c <= 8; c++) {
      const cell = row.getCell(c);
      cell.border = thinBorder;
      cell.font = {
        name: 'Calibri',
        size: isSum ? 10 : 9,
        bold: isSum,
        color: { argb: isSum ? '0F172A' : TEXT_DARK }
      };
      if (isSum) {
        cell.fill = FILL_SUMMARY_BG;
      }
      if (c === 1 || c >= 4) {
        cell.alignment = { vertical: 'middle', horizontal: 'center' };
      } else {
        cell.alignment = { vertical: 'middle', horizontal: 'left' };
      }
    }

    // Status column pill color styling
    const statusCell = row.getCell(7);
    if (item.status === 'COMPLETED') {
      statusCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'DCFCE7' } };
      statusCell.font = { name: 'Calibri', size: 9, bold: true, color: { argb: '166534' } };
    } else if (item.status === 'IN PROGRESS') {
      statusCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FEF3C7' } };
      statusCell.font = { name: 'Calibri', size: 9, bold: true, color: { argb: '92400E' } };
    } else {
      statusCell.font = { name: 'Calibri', size: 9, color: { argb: '64748B' } };
    }

    // Gantt Timeline Columns I to T (Weeks 1 to 12)
    for (let w = 1; w <= 12; w++) {
      const colIdx = 8 + w; // 9 = W1, 20 = W12
      const cell = row.getCell(colIdx);
      cell.border = thinBorder;
      cell.alignment = { vertical: 'middle', horizontal: 'center' };

      const inSpan = w >= item.startWeek && w <= item.endWeek;
      if (inSpan) {
        // Choose bar color based on phase
        if (item.phaseType === 'done') {
          cell.fill = isSum
            ? FILL_DONE
            : { type: 'pattern', pattern: 'solid', fgColor: { argb: '86EFAC' } };
          cell.value = isSum ? '✔' : '■';
          cell.font = { name: 'Calibri', size: 10, bold: true, color: { argb: TEXT_WHITE } };
        } else if (item.phaseType === 'current') {
          cell.fill = isSum
            ? FILL_CURRENT
            : { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FDE68A' } };
          cell.value = isSum ? '⏳' : '■';
          cell.font = { name: 'Calibri', size: 10, bold: true, color: { argb: '78350F' } };
        } else if (item.phaseType === 'feature') {
          cell.fill = isSum
            ? FILL_FEATURE
            : { type: 'pattern', pattern: 'solid', fgColor: { argb: '93C5FD' } };
          cell.value = isSum ? '█' : '■';
          cell.font = { name: 'Calibri', size: 10, bold: true, color: { argb: TEXT_WHITE } };
        } else if (item.phaseType === 'test_doc') {
          cell.fill = isSum
            ? FILL_TEST_DOC
            : { type: 'pattern', pattern: 'solid', fgColor: { argb: 'C4B5FD' } };
          cell.value = isSum ? '█' : '■';
          cell.font = { name: 'Calibri', size: 10, bold: true, color: { argb: TEXT_WHITE } };
        } else if (item.phaseType === 'present') {
          cell.fill = isSum
            ? FILL_PRESENT
            : { type: 'pattern', pattern: 'solid', fgColor: { argb: 'F472B6' } };
          cell.value = isSum ? '★' : '■';
          cell.font = { name: 'Calibri', size: 10, bold: true, color: { argb: TEXT_WHITE } };
        }
      } else {
        cell.value = '';
      }
    }

    row.height = isSum ? 22 : 18;
    rowIndex++;
  });

  // ==========================================
  // SHEET 2: WEEKLY TASKS & ACCEPTANCE CRITERIA
  // ==========================================
  const detailsSheet = workbook.addWorksheet('Weekly Tasks & Criteria', {
    views: [{ state: 'frozen', xSplit: 0, ySplit: 2, showGridLines: true }]
  });

  detailsSheet.columns = [
    { key: 'week', width: 12 },
    { key: 'phase', width: 22 },
    { key: 'milestone', width: 32 },
    { key: 'keyTasks', width: 50 },
    { key: 'acceptanceCriteria', width: 45 },
    { key: 'status', width: 16 }
  ];

  detailsSheet.mergeCells('A1:F1');
  const detailsTitle = detailsSheet.getCell('A1');
  detailsTitle.value = 'EDUFLEX LMS — WEEKLY TASK EXECUTION DETAILS & ACCEPTANCE CRITERIA';
  detailsTitle.font = { name: 'Calibri', size: 13, bold: true, color: { argb: TEXT_WHITE } };
  detailsTitle.alignment = { vertical: 'middle', horizontal: 'center' };
  detailsTitle.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: NAVY_DARK } };
  detailsSheet.getRow(1).height = 30;

  const detailHeaders = ['Week', 'Phase', 'Milestone Name', 'Core Deliverable Tasks', 'Acceptance & Gating Criteria', 'Status'];
  const dHeaderRow = detailsSheet.getRow(2);
  detailHeaders.forEach((text, i) => {
    const c = dHeaderRow.getCell(i + 1);
    c.value = text;
    c.font = { name: 'Calibri', size: 10, bold: true, color: { argb: TEXT_WHITE } };
    c.alignment = { vertical: 'middle', horizontal: 'center' };
    c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '334155' } };
    c.border = thinBorder;
  });
  dHeaderRow.height = 24;

  const weekRows = [
    [
      'Week 1', 'Feature Build', 'Data Moat & Better Auth',
      'Neon PostgreSQL 6-tier seed; better-auth ^1.7.17; Prisma schema sync (Account & Verification); scrypt server auth actions; Edge middleware guards.',
      'Neon verified with 26 users, 9 courses, 18 enrollments; 49/49 Playwright auth tests pass; 0 TypeScript errors.',
      'COMPLETED'
    ],
    [
      'Week 2', 'Feature Build', 'Student SSR, Actions & Top SEO',
      'Student Server Actions (courses, assignments, grades); dynamic XML sitemap (app/sitemap.ts); robots.ts crawler policy; Schema.org JSON-LD (SoftwareApp 5-star, FAQPage, Course); Dark Mode blending.',
      '100/100 Lighthouse SEO; rich snippet validated; 162/162 Playwright tests pass; 100% Day Mode preserved.',
      'COMPLETED'
    ],
    [
      'Week 3', 'Feature Build', 'Assessments & Timed Quiz Engine',
      'Assignment submission Server Actions (src/actions/assignments.ts); Academic Integrity opt-in; #EDF-2026-XXXX receipts; multi-attempt audit trail; timed quiz engine with countdowns & auto-scoring.',
      'Submission receipts recorded; answer keys kept server-side until submission; Playwright quiz & submission suite passes.',
      'IN PROGRESS'
    ],
    [
      'Week 4', 'Feature Build', 'Staff Portals (Grading & Admin)',
      'Instructor grading Server Actions (src/actions/instructor.ts); rubric scoring; GradeRecord release; Admin user CRUD with institutional naming rules; registration approval queue.',
      'Instructor & Admin Playwright suites pass; role boundaries verified; zero self-elevation to staff allowed.',
      'LOCKED'
    ],
    [
      'Week 5', 'Feature Build', 'Cloudflare R2 Storage & Disaster Recovery',
      'Cloudflare R2 client with presigned upload/download URLs; direct binary upload for student files & lecture PDFs; nightly pg_dump GitHub Actions backup to R2 (30-day retention).',
      'Presigned URLs upload directly to R2; automated nightly backup workflow verified; database restoration dry-run succeeds.',
      'LOCKED'
    ],
    [
      'Week 6', 'Feature Build', 'Messaging Hub & Announcements',
      'Messaging Server Actions (src/actions/messages.ts); conversation threads; unread participant counters; keyword search; campus announcements with audience targeting filters.',
      'Multi-party conversations update read states correctly; announcements display strictly according to audience filters.',
      'LOCKED'
    ],
    [
      'Week 7', 'Feature Build', 'The Dedicated Cloud Audit Week',
      'Deploy feature branch to live Vercel Preview URL; execute automated Playwright suite against live URL; real-device manual testing on desktop, tablet, and mobile; Lighthouse audit.',
      'Zero test regressions on cloud deployment; 100/100 Lighthouse SEO; WCAG 2.1 AA keyboard navigation passes.',
      'LOCKED'
    ],
    [
      'Week 8', 'Feature Build', 'Observability & Production Go-Live',
      'Configure instrumentation.ts streaming traces to Grafana Tempo and logs to Grafana Loki; promote main branch to production domain (eduflex.edu); run automated smoke tests.',
      'Live Grafana telemetry stream verified; production health checks green; portfolio architecture documentation updated.',
      'LOCKED'
    ],
    [
      'Week 9', 'Testing & Docs', 'Testing, Debugging & Test Docs',
      'Comprehensive Playwright E2E regression runs across Chromium, Firefox, WebKit, iOS & Android; simulate concurrent quiz submissions; edge middleware tampering tests; author QA Test Matrix & Defect Log.',
      'Full cross-browser test pass rate >99%; Neon connection pooling handles concurrent load with zero dropped connections; QA Test Matrix signed off.',
      'LOCKED'
    ],
    [
      'Week 10', 'Testing & Docs', 'Deep Debugging, Security & Tech Docs',
      'Session timeout & multi-tab logout debugging; CSRF/XSS red-team audit; mock disaster recovery restore from R2; author Technical Architecture Specification and DR Runbook.',
      'All open P0/P1 defects closed; zero npm audit vulnerabilities; full mock database restore from R2 backup in under 15 minutes; Technical Specs signed off.',
      'LOCKED'
    ],
    [
      'Week 11', 'Testing & Docs', 'Polish, User Guides & Staging Freeze',
      'Core Web Vitals optimization (<1s LCP, 0.0 CLS, <50ms INP); WCAG 2.1 AA accessibility audit; author Student User Manual, Instructor Guide & Admin Operations Book; full presentation dry-run simulation; freeze staging codebase.',
      'Lighthouse performance & accessibility scores >95; all 3 user guides compiled into PDF/docs; staging branch frozen.',
      'LOCKED'
    ],
    [
      'Week 12', 'Showcase', 'Final Presentation, Live Demo & Defense',
      'High-impact presentation slide deck; live software demonstration (Student quiz submission -> Instructor rubric grading -> Admin audit); technical defense of modern architecture; project sign-off.',
      'Live demonstration flawlessly completed without errors; technical architecture questions defended successfully; final project approval.',
      'LOCKED'
    ],
  ];

  weekRows.forEach((rowValues, idx) => {
    const row = detailsSheet.getRow(idx + 3);
    rowValues.forEach((val, colIdx) => {
      const cell = row.getCell(colIdx + 1);
      cell.value = val;
      cell.border = thinBorder;
      cell.font = { name: 'Calibri', size: 9, color: { argb: TEXT_DARK } };
      cell.alignment = { vertical: 'top', horizontal: colIdx === 0 || colIdx === 5 ? 'center' : 'left', wrapText: true };
    });

    const statusCell = row.getCell(6);
    if (rowValues[5] === 'COMPLETED') {
      statusCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'DCFCE7' } };
      statusCell.font = { name: 'Calibri', size: 9, bold: true, color: { argb: '166534' } };
    } else if (rowValues[5] === 'IN PROGRESS') {
      statusCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FEF3C7' } };
      statusCell.font = { name: 'Calibri', size: 9, bold: true, color: { argb: '92400E' } };
    }
    row.height = 42;
  });

  // ==========================================
  // SHEET 3: EXECUTIVE SUMMARY & STATS
  // ==========================================
  const summarySheet = workbook.addWorksheet('Executive Summary', {
    views: [{ showGridLines: true }]
  });

  summarySheet.columns = [
    { key: 'colA', width: 26 },
    { key: 'colB', width: 28 },
    { key: 'colC', width: 32 },
    { key: 'colD', width: 20 }
  ];

  summarySheet.mergeCells('A1:D1');
  const sumTitle = summarySheet.getCell('A1');
  sumTitle.value = 'EDUFLEX LMS — 12-WEEK ROADMAP EXECUTIVE DASHBOARD';
  sumTitle.font = { name: 'Calibri', size: 14, bold: true, color: { argb: TEXT_WHITE } };
  sumTitle.alignment = { vertical: 'middle', horizontal: 'center' };
  sumTitle.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: NAVY_DARK } };
  summarySheet.getRow(1).height = 32;

  const statCards = [
    ['Total Project Duration', '12 Weeks (8 Weeks Feature Build + 3 Weeks QA & Docs + 1 Week Presentation)'],
    ['Current Timeline Position', 'Week 3 of 12 (Assessments & Timed Quiz Engine)'],
    ['Overall Milestone Completion', '2 of 12 Weeks (16.7% Elapsed / 100% On-Track)'],
    ['Core Architecture Paradigm', 'Internal API-less (Pure SSR + Server Actions directly to Neon PostgreSQL)'],
    ['Database Infrastructure', 'Neon Serverless PostgreSQL (6-Tier Seeded, 26 Users, 9 Courses)'],
    ['Authentication Engine', 'Better Auth ^1.7.17 (Prisma adapter + scrypt password hashing + Edge guards)'],
    ['Storage & DR', 'Cloudflare R2 Object Storage + Nightly automated pg_dump GitHub Actions backup'],
    ['Observability & Monitoring', 'OpenTelemetry instrumentation.ts -> Grafana Loki (logs) & Tempo (traces)'],
    ['Phase 2 Quality Window', 'Weeks 9, 10, 11 dedicated exclusively to E2E Testing, Debugging & Complete Documentation'],
    ['Phase 3 Capstone Window', 'Week 12 dedicated to Live Demonstration, Presentation Deck & Architecture Defense'],
  ];

  let sRowIndex = 3;
  statCards.forEach(([metric, desc]) => {
    summarySheet.mergeCells(`B${sRowIndex}:D${sRowIndex}`);
    const labelCell = summarySheet.getCell(`A${sRowIndex}`);
    const descCell = summarySheet.getCell(`B${sRowIndex}`);

    labelCell.value = metric;
    labelCell.font = { name: 'Calibri', size: 10, bold: true, color: { argb: TEXT_WHITE } };
    labelCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: '334155' } };
    labelCell.alignment = { vertical: 'middle', horizontal: 'left' };
    labelCell.border = thinBorder;

    descCell.value = desc;
    descCell.font = { name: 'Calibri', size: 10, color: { argb: TEXT_DARK } };
    descCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'F8FAFC' } };
    descCell.alignment = { vertical: 'middle', horizontal: 'left' };
    descCell.border = thinBorder;

    summarySheet.getRow(sRowIndex).height = 24;
    sRowIndex++;
  });

  // Write Excel file to both repo docs and brain artifact folder
  const repoFilePath = path.resolve('docs/EduFlex_12_Week_Gantt_Chart.xlsx');
  await workbook.xlsx.writeFile(repoFilePath);
  console.log('✓ Generated Excel Gantt chart at:', repoFilePath);

  const artifactFilePath = 'C:/Users/Richard/.gemini/antigravity/brain/87e98f76-75aa-4f8f-b2fd-766e02151c5d/EduFlex_12_Week_Gantt_Chart.xlsx';
  await workbook.xlsx.writeFile(artifactFilePath);
  console.log('✓ Generated artifact copy at:', artifactFilePath);
}

createEduFlexGanttWorkbook().catch((err) => {
  console.error('Failed to generate Excel Gantt chart:', err);
  process.exit(1);
});
