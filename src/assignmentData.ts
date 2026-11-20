// ── Shared Assignment & Assessment Data Layer ────────────────────────────────

export interface InstructorAssignmentItem {
  id?: string;
  title: string;
  due: string;
  submissions: number;
  total: number;
  type: "Assignment" | "Assessment" | string;
  graded: boolean;
  maxScore?: number;
  description?: string;
  weight?: number;
  status?: "Draft" | "Published";
  totalSubmissions?: number;
  submittedCount?: number;
  submissionRatioLabel?: string;
}

export interface InstructorCourseAssignments {
  code: string;
  name: string;
  color: string;
  term?: string;
  assignments: InstructorAssignmentItem[];
  assessments?: InstructorAssignmentItem[];
}

export interface StudentSubmission {
  id: string;
  itemId: string; // id of assignment or assessment
  itemTitle: string;
  itemType: "Assignment" | "Assessment";
  courseCode: string;
  studentName: string;
  studentEmail: string;
  submittedAt: string;
  fileName: string;
  fileSize: string;
  comments?: string;
  receiptNumber: string;
  status: "submitted" | "graded";
  score?: number | string;
  maxScore?: number;
  grade?: string;
  feedback?: string;
  gradedAt?: string;
  gradedBy?: string;
}

// ── KOI Official Grading System Definitions (Section 2.8 of Subject Outline) ──
export interface KoiGradeDefinition {
  code: "HD" | "DI" | "CR" | "P" | "F";
  name: string;
  minPct: number;
  maxPct: number;
  description: string;
  badgeClass: string;
}

export const KOI_GRADE_DEFINITIONS: KoiGradeDefinition[] = [
  {
    code: "HD",
    name: "High Distinction",
    minPct: 85,
    maxPct: 100,
    description: "Outstanding performance; comprehensive understanding of subject matter",
    badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-300",
  },
  {
    code: "DI",
    name: "Distinction",
    minPct: 75,
    maxPct: 84,
    description: "Excellent performance; substantial understanding and analysis",
    badgeClass: "bg-blue-100 text-blue-800 border-blue-300",
  },
  {
    code: "CR",
    name: "Credit",
    minPct: 65,
    maxPct: 74,
    description: "Very good performance; clear understanding of core concepts",
    badgeClass: "bg-indigo-100 text-indigo-800 border-indigo-300",
  },
  {
    code: "P",
    name: "Pass",
    minPct: 50,
    maxPct: 64,
    description: "Satisfactory performance; meets minimum learning outcomes",
    badgeClass: "bg-amber-100 text-amber-800 border-amber-300",
  },
  {
    code: "F",
    name: "Fail",
    minPct: 0,
    maxPct: 49,
    description: "Unsatisfactory performance; fails to demonstrate minimum learning outcomes",
    badgeClass: "bg-red-100 text-red-800 border-red-300",
  },
];

export function getKoiGrade(score: number, maxScore: number = 100): KoiGradeDefinition {
  const pct = Math.round((Number(score) / (maxScore || 100)) * 100);
  if (pct >= 85) return KOI_GRADE_DEFINITIONS[0];
  if (pct >= 75) return KOI_GRADE_DEFINITIONS[1];
  if (pct >= 65) return KOI_GRADE_DEFINITIONS[2];
  if (pct >= 50) return KOI_GRADE_DEFINITIONS[3];
  return KOI_GRADE_DEFINITIONS[4];
}

export function formatKoiGradeLabel(score: number, maxScore: number = 100): string {
  const g = getKoiGrade(score, maxScore);
  return `${g.name} (${g.code})`;
}

// ── Strictly 2 Authoritative Courses: ICT302 (Active) & ICT301 (Completed) ────
export const INITIAL_ASSIGNMENT_COURSES: InstructorCourseAssignments[] = [
  {
    code: "ICT302",
    name: "Information Technology Project 2",
    color: "#0e9f6e",
    term: "T3 2026",
    assignments: [],
    assessments: [
      {
        id: "ict302-ass1",
        title: "Assessment 1: Weekly Progress Report & Self-Reflection (Weeks 2–11)",
        due: "Jan 24, 2027",
        submissions: 1,
        total: 10,
        type: "Assessment",
        graded: true,
        maxScore: 100,
        weight: 20,
        totalSubmissions: 10,
        submittedCount: 1,
        submissionRatioLabel: "1/10 Submitted",
        description: "Continuous weekly progress tracking across Weeks 2 to 11 evaluating technical implementation, literature review, and group dynamics with individual 2-paragraph self-reflections (10 weekly submissions · 20% total).",
        status: "Published",
      },
      {
        id: "ict302-ass2",
        title: "Assessment 2: Final Report and Group Activity Log",
        due: "Jan 24, 2027",
        submissions: 1,
        total: 2,
        type: "Assessment",
        graded: false,
        maxScore: 100,
        weight: 50,
        totalSubmissions: 2,
        submittedCount: 1,
        submissionRatioLabel: "1/2 Submitted",
        description: "Major deliverable comprising Final Report (40% — 25 to 30 pages: project scope, architecture, test plan with 8+ test cases, evaluation, results) and Group Activity Log (10% — 12 meeting minutes appendix, roles, and interaction) (2 deliverables · 50% total).",
        status: "Published",
      },
      {
        id: "ict302-ass3",
        title: "Assessment 3: Presentation and Demonstration",
        due: "Jan 29, 2027",
        submissions: 0,
        total: 1,
        type: "Assessment",
        graded: false,
        maxScore: 100,
        weight: 30,
        totalSubmissions: 1,
        submittedCount: 0,
        submissionRatioLabel: "0/1 Submitted",
        description: "Final capstone defense (20 minutes) comprising In-Class Presentation (20% — visual appeal, content, dynamics, individual delivery) and Live Demonstration (10% — systematic functional software execution).",
        status: "Published",
      },
    ],
  },
  {
    code: "ICT301",
    name: "Information Technology Project 1",
    color: "#2563eb",
    term: "T2 2026",
    assignments: [
      {
        id: "ict301-a1",
        title: "Milestone 1: Project Proposal & Scope Charter",
        due: "Mar 25, 2026",
        submissions: 3,
        total: 3,
        type: "Assignment",
        graded: true,
        maxScore: 100,
        weight: 30,
        description: "Comprehensive project proposal detailing project scope, team roles, and Gantt chart schedule.",
        status: "Published",
      },
      {
        id: "ict301-a2",
        title: "Milestone 2: System Architecture & Requirements Specification",
        due: "May 15, 2026",
        submissions: 3,
        total: 3,
        type: "Assignment",
        graded: true,
        maxScore: 100,
        weight: 30,
        description: "Preliminary architecture design diagrams, database schema models, and UX wireframe deliverables.",
        status: "Published",
      },
    ],
    assessments: [
      {
        id: "ict301-ass1",
        title: "Milestone 3: Project 1 Final Defense & Report",
        due: "Jun 20, 2026",
        submissions: 3,
        total: 3,
        type: "Assessment",
        graded: true,
        maxScore: 100,
        weight: 40,
        description: "Final architectural presentation, risk management matrix, and Project 1 defense (Completed).",
        status: "Published",
      },
    ],
  },
];

// ── Initial Student Submissions (5 Group Members Roster) ──────────────────────
export const INITIAL_SUBMISSIONS: StudentSubmission[] = [
  // Richard Vitug (20030988)
  {
    id: "sub-ict302-a1-richard",
    itemId: "ict302-ass1",
    itemTitle: "Assessment 1: Weekly Progress Report (Weeks 2–11)",
    itemType: "Assessment",
    courseCode: "ICT302",
    studentName: "Richard Vitug",
    studentEmail: "20030988@eduflex.en-rich.me",
    submittedAt: "Nov 8, 2026 at 4:30 PM AEST",
    fileName: "ICT302_Assessment1_WPR_Week2_Vitug.pdf",
    fileSize: "3.4 MB",
    comments: "Week 2 Progress Report: Project initiation, team role allocation, and 12-week Gantt schedule (1/10 submitted).",
    receiptNumber: "#EDF-2026-3021",
    status: "graded",
    score: 95,
    maxScore: 100,
    grade: "High Distinction (HD)",
    feedback: "Exceptional Week 2 progress report. Team charter, roles, and repository setup are verified and clear.",
    gradedAt: "Nov 9, 2026 at 10:00 AM AEST",
    gradedBy: "Anita Humagain",
  },
  {
    id: "sub-ict302-a2-richard",
    itemId: "ict302-ass2",
    itemTitle: "Assessment 2: Final Report and Group Activity Log",
    itemType: "Assessment",
    courseCode: "ICT302",
    studentName: "Richard Vitug",
    studentEmail: "20030988@eduflex.en-rich.me",
    submittedAt: "Nov 7, 2026 at 6:15 PM AEST",
    fileName: "ICT302_Assessment2_Part2_GroupActivityLog.pdf",
    fileSize: "4.2 MB",
    comments: "Deliverable 2: Group Activity Log and team meeting minutes (1/2 submitted).",
    receiptNumber: "#EDF-2026-3022",
    status: "submitted",
    score: undefined,
    maxScore: 100,
    grade: undefined,
  },
  {
    id: "sub-ict301-a1-richard",
    itemId: "ict301-a1",
    itemTitle: "Milestone 1: Project Proposal & Scope Charter",
    itemType: "Assignment",
    courseCode: "ICT301",
    studentName: "Richard Vitug",
    studentEmail: "20030988@eduflex.en-rich.me",
    submittedAt: "Mar 24, 2026 at 6:20 PM AEST",
    fileName: "ICT301_Milestone1_Proposal_Vitug.pdf",
    fileSize: "2.4 MB",
    comments: "Includes team charter, work breakdown structure, and 12-week Gantt schedule.",
    receiptNumber: "#EDF-2026-3011",
    status: "graded",
    score: 95,
    maxScore: 100,
    grade: "High Distinction (HD)",
    feedback: "Outstanding project proposal detailing clear scope, thorough team roles, and realistic schedule.",
    gradedAt: "Mar 29, 2026 at 2:00 PM AEST",
    gradedBy: "Anita Humagain",
  },
  {
    id: "sub-ict301-a2-richard",
    itemId: "ict301-a2",
    itemTitle: "Milestone 2: System Architecture & Requirements Specification",
    itemType: "Assignment",
    courseCode: "ICT301",
    studentName: "Richard Vitug",
    studentEmail: "20030988@eduflex.en-rich.me",
    submittedAt: "May 14, 2026 at 8:10 PM AEST",
    fileName: "ICT301_Milestone2_Architecture_Vitug.pdf",
    fileSize: "3.8 MB",
    comments: "Database schema ERD and Next.js Server Actions design documentation.",
    receiptNumber: "#EDF-2026-3012",
    status: "graded",
    score: 90,
    maxScore: 100,
    grade: "High Distinction (HD)",
    feedback: "Robust database schema design and well-justified serverless architecture choices.",
    gradedAt: "May 20, 2026 at 10:00 AM AEST",
    gradedBy: "Anita Humagain",
  },
  {
    id: "sub-ict301-ass1-richard",
    itemId: "ict301-ass1",
    itemTitle: "Milestone 3: Project 1 Final Defense & Report",
    itemType: "Assessment",
    courseCode: "ICT301",
    studentName: "Richard Vitug",
    studentEmail: "20030988@eduflex.en-rich.me",
    submittedAt: "Jun 19, 2026 at 9:15 PM AEST",
    fileName: "ICT301_Final_Defense_Vitug.pdf",
    fileSize: "4.5 MB",
    comments: "Completed Project 1 defense slide deck and final synthesis document.",
    receiptNumber: "#EDF-2026-3013",
    status: "graded",
    score: 92,
    maxScore: 100,
    grade: "High Distinction (HD)",
    feedback: "Excellent technical defense and thorough preparation for Project 2 implementation.",
    gradedAt: "Jun 25, 2026 at 4:00 PM AEST",
    gradedBy: "Anita Humagain",
  },

  // Yusuf Rana Magar (20027782)
  {
    id: "sub-ict302-a1-yusuf",
    itemId: "ict302-ass1",
    itemTitle: "Assessment 1: Weekly Progress Report (Weeks 2–11)",
    itemType: "Assessment",
    courseCode: "ICT302",
    studentName: "Yusuf Rana Magar",
    studentEmail: "20027782@eduflex.en-rich.me",
    submittedAt: "Oct 10, 2026 at 5:00 PM AEST",
    fileName: "ICT302_Assessment1_WeeklyReports_Yusuf.pdf",
    fileSize: "3.2 MB",
    comments: "Weekly progress reports with database tuning and backend verification entries.",
    receiptNumber: "#EDF-2026-3023",
    status: "graded",
    score: 86,
    maxScore: 100,
    grade: "High Distinction (HD)",
    feedback: "Thorough weekly records. Serverless connection pooling benchmarks are insightful.",
    gradedAt: "Oct 13, 2026 at 11:30 AM AEST",
    gradedBy: "Anita Humagain",
  },
  {
    id: "sub-ict301-ass1-yusuf",
    itemId: "ict301-ass1",
    itemTitle: "Milestone 3: Project 1 Final Defense & Report",
    itemType: "Assessment",
    courseCode: "ICT301",
    studentName: "Yusuf Rana Magar",
    studentEmail: "20027782@eduflex.en-rich.me",
    submittedAt: "Jun 19, 2026 at 8:50 PM AEST",
    fileName: "ICT301_Final_Defense_Yusuf.pdf",
    fileSize: "4.1 MB",
    comments: "Final project 1 defense presentation and milestone report.",
    receiptNumber: "#EDF-2026-3014",
    status: "graded",
    score: 91,
    maxScore: 100,
    grade: "High Distinction (HD)",
    feedback: "Strong technical presentation and well articulated database architecture.",
    gradedAt: "Jun 25, 2026 at 4:30 PM AEST",
    gradedBy: "Anita Humagain",
  },

  // Sadia Binte Mahmud (20035294)
  {
    id: "sub-ict302-a1-sadia",
    itemId: "ict302-ass1",
    itemTitle: "Assessment 1: Weekly Progress Report (Weeks 2–11)",
    itemType: "Assessment",
    courseCode: "ICT302",
    studentName: "Sadia Binte Mahmud",
    studentEmail: "20035294@eduflex.en-rich.me",
    submittedAt: "Oct 10, 2026 at 5:15 PM AEST",
    fileName: "ICT302_Assessment1_WeeklyReports_Sadia.pdf",
    fileSize: "3.6 MB",
    comments: "Weekly journals detailing UX design systems, responsive layouts, and accessibility audits.",
    receiptNumber: "#EDF-2026-3025",
    status: "graded",
    score: 89,
    maxScore: 100,
    grade: "High Distinction (HD)",
    feedback: "High-quality weekly entries with rigorous design system documentation and WCAG review.",
    gradedAt: "Oct 13, 2026 at 11:45 AM AEST",
    gradedBy: "Anita Humagain",
  },
  {
    id: "sub-ict301-ass1-sadia",
    itemId: "ict301-ass1",
    itemTitle: "Milestone 3: Project 1 Final Defense & Report",
    itemType: "Assessment",
    courseCode: "ICT301",
    studentName: "Sadia Binte Mahmud",
    studentEmail: "20035294@eduflex.en-rich.me",
    submittedAt: "Jun 19, 2026 at 9:00 PM AEST",
    fileName: "ICT301_Final_Defense_Sadia.pdf",
    fileSize: "4.3 MB",
    comments: "Comprehensive project 1 final defense slide deck and UX research.",
    receiptNumber: "#EDF-2026-3015",
    status: "graded",
    score: 93,
    maxScore: 100,
    grade: "High Distinction (HD)",
    feedback: "Superb UI/UX architecture presentation and user research artifacts.",
    gradedAt: "Jun 25, 2026 at 5:00 PM AEST",
    gradedBy: "Anita Humagain",
  },
];

// Current storage keys versioned to v12 (Synced Weeks 3-11 with 12-Week Master Gantt Chart WBS)
const STORAGE_KEY_COURSES = "eduflex_assignment_courses_v12";
const STORAGE_KEY_SUBMISSIONS = "eduflex_assignment_submissions_v12";
export const STORAGE_KEY_SUB_DELIVERABLES = "eduflex_sub_deliverables_v12";

export function formatDueDate(dateStr: string): string {
  if (!dateStr) return "";
  try {
    const parts = dateStr.split("-");
    if (parts.length === 3) {
      const year = parts[0];
      const monthIndex = parseInt(parts[1], 10) - 1;
      const day = parseInt(parts[2], 10);
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      if (months[monthIndex]) {
        return `${months[monthIndex]} ${day}, ${year}`;
      }
    }
  } catch {}
  return dateStr;
}

function notifySync() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("eduflex_assignment_sync"));
  }
}

// Automatically purges any legacy local storage keys containing outdated subjects or schemas
function purgeLegacyStorage() {
  if (typeof window === "undefined") return;
  try {
    const toRemove: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key) continue;
      if (
        (key.startsWith("eduflex_assignment_courses") && key !== STORAGE_KEY_COURSES) ||
        (key.startsWith("eduflex_assignment_submissions") && key !== STORAGE_KEY_SUBMISSIONS) ||
        (key.startsWith("eduflex_sub_deliverables") && key !== STORAGE_KEY_SUB_DELIVERABLES)
      ) {
        toRemove.push(key);
      } else if (key.includes("course") || key.includes("assignment") || key.includes("submiss")) {
        const val = localStorage.getItem(key);
        if (
          val &&
          (val.includes("ICT272") ||
            val.includes("ICT126") ||
            val.includes("ICT101") ||
            val.includes("ICT102") ||
            val.includes("Weekly Progress Report 1: Project Initiation") ||
            val.includes("Project Initiation & Charter"))
        ) {
          toRemove.push(key);
        }
      }
    }
    for (const k of toRemove) {
      localStorage.removeItem(k);
    }
  } catch {}
}

export function getSharedCourses(): InstructorCourseAssignments[] {
  if (typeof window === "undefined") return INITIAL_ASSIGNMENT_COURSES;
  try {
    purgeLegacyStorage();
    const raw = localStorage.getItem(STORAGE_KEY_COURSES);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY_COURSES, JSON.stringify(INITIAL_ASSIGNMENT_COURSES));
      return INITIAL_ASSIGNMENT_COURSES;
    }
    const parsed: InstructorCourseAssignments[] = JSON.parse(raw);
    // Strict domain check: ONLY ICT301 and ICT302 are permitted
    const allowedCodes = new Set(["ICT301", "ICT302"]);
    const filtered = parsed.filter((c) => allowedCodes.has(c.code)).map((c) => {
      if (c.code === "ICT301") return { ...c, term: "T2 2026", assignments: [] };
      if (c.code === "ICT302") return { ...c, term: "T3 2026", assignments: [] };
      return { ...c, assignments: [] };
    });
    if (filtered.length !== 2) {
      // Force clean reset if unexpected subjects were detected
      localStorage.setItem(STORAGE_KEY_COURSES, JSON.stringify(INITIAL_ASSIGNMENT_COURSES));
      return INITIAL_ASSIGNMENT_COURSES;
    }
    return filtered;
  } catch {
    return INITIAL_ASSIGNMENT_COURSES;
  }
}

export function saveSharedCourses(courses: InstructorCourseAssignments[]): void {
  if (typeof window === "undefined") return;
  try {
    // Enforce that only ICT301 and ICT302 can ever be saved
    const allowedCodes = new Set(["ICT301", "ICT302"]);
    const sanitized = courses.filter((c) => allowedCodes.has(c.code));
    const json = JSON.stringify(sanitized);
    const existing = localStorage.getItem(STORAGE_KEY_COURSES);
    if (existing === json) return;
    localStorage.setItem(STORAGE_KEY_COURSES, json);
    notifySync();
  } catch (err) {
    console.error("Failed to save assignment courses:", err);
  }
}

export function getSharedSubmissions(): StudentSubmission[] {
  if (typeof window === "undefined") return INITIAL_SUBMISSIONS;
  try {
    purgeLegacyStorage();
    const raw = localStorage.getItem(STORAGE_KEY_SUBMISSIONS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY_SUBMISSIONS, JSON.stringify(INITIAL_SUBMISSIONS));
      return INITIAL_SUBMISSIONS;
    }
    const parsed: StudentSubmission[] = JSON.parse(raw);
    // Strict domain filter: only submissions for ICT301 and ICT302
    const allowedCodes = new Set(["ICT301", "ICT302"]);
    const filtered = parsed.filter((s) => allowedCodes.has(s.courseCode));
    return filtered.length > 0 ? filtered : INITIAL_SUBMISSIONS;
  } catch {
    return INITIAL_SUBMISSIONS;
  }
}

export function saveSharedSubmissions(submissions: StudentSubmission[]): void {
  if (typeof window === "undefined") return;
  try {
    const allowedCodes = new Set(["ICT301", "ICT302"]);
    const sanitized = submissions.filter((s) => allowedCodes.has(s.courseCode));
    const json = JSON.stringify(sanitized);
    const existing = localStorage.getItem(STORAGE_KEY_SUBMISSIONS);
    if (existing === json) return;
    localStorage.setItem(STORAGE_KEY_SUBMISSIONS, json);
    notifySync();
  } catch (err) {
    console.error("Failed to save assignment submissions:", err);
  }
}

export function addStudentSubmission(
  data: Omit<StudentSubmission, "id" | "submittedAt" | "status">
): StudentSubmission {
  const submissions = getSharedSubmissions();
  const now = new Date();
  const formattedDate =
    now.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }) +
    " at " +
    now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }) +
    " AEST";

  const newSub: StudentSubmission = {
    ...data,
    id: `sub-${Date.now()}`,
    submittedAt: formattedDate,
    status: "submitted",
  };

  // Check if replacing previous submission or adding new
  const existingIdx = submissions.findIndex(
    (s) =>
      s.courseCode === data.courseCode &&
      (s.itemId === data.itemId || s.itemTitle === data.itemTitle) &&
      s.studentEmail === data.studentEmail
  );

  let updatedSubmissions: StudentSubmission[];
  if (existingIdx >= 0) {
    updatedSubmissions = [...submissions];
    updatedSubmissions[existingIdx] = newSub;
  } else {
    updatedSubmissions = [newSub, ...submissions];

    // Increment submission count in courses
    const courses = getSharedCourses();
    const updatedCourses = courses.map((c) => {
      if (c.code === data.courseCode) {
        return {
          ...c,
          assignments: c.assignments.map((a) => {
            if (a.id === data.itemId || a.title === data.itemTitle) {
              return { ...a, submissions: a.submissions + 1 };
            }
            return a;
          }),
          assessments: (c.assessments || []).map((ass) => {
            if (ass.id === data.itemId || ass.title === data.itemTitle) {
              return { ...ass, submissions: ass.submissions + 1 };
            }
            return ass;
          }),
        };
      }
      return c;
    });
    saveSharedCourses(updatedCourses);
  }

  saveSharedSubmissions(updatedSubmissions);
  return newSub;
}

export function gradeStudentSubmission(
  studentName: string,
  itemTitleOrId: string,
  courseCode: string,
  score: number | string,
  feedback: string
): void {
  const submissions = getSharedSubmissions();
  const numScore = Number(score);

  // Strictly adhere to KOI Section 2.8 BIT Grading Definitions:
  // HD (85-100%), DI (75-84%), CR (65-74%), P (50-64%), F (0-49%)
  const koiGrade = getKoiGrade(numScore, 100);
  const gradeLabel = `${koiGrade.name} (${koiGrade.code})`;

  const now = new Date();
  const formattedGradedAt =
    now.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }) +
    " at " +
    now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }) +
    " AEST";

  let matchFound = false;
  const updatedSubmissions = submissions.map((sub) => {
    if (
      (sub.studentName === studentName || sub.studentEmail.includes(studentName.toLowerCase().split(" ")[0])) &&
      (sub.itemId === itemTitleOrId || sub.itemTitle === itemTitleOrId || itemTitleOrId.includes(sub.itemTitle)) &&
      (!courseCode || sub.courseCode === courseCode)
    ) {
      matchFound = true;
      return {
        ...sub,
        status: "graded" as const,
        score: numScore,
        grade: gradeLabel,
        feedback: feedback || "Graded by instructor.",
        gradedAt: formattedGradedAt,
        gradedBy: "Anita Humagain",
      };
    }
    return sub;
  });

  // If no existing student submission record was found, create a graded record
  if (!matchFound) {
    const studentUser = studentName.toLowerCase().replace(/[^a-z]/g, "");
    const newRecord: StudentSubmission = {
      id: `sub-${Date.now()}`,
      itemId: itemTitleOrId,
      itemTitle: itemTitleOrId,
      itemType: "Assessment",
      courseCode: courseCode || "ICT302",
      studentName,
      studentEmail: `${studentUser}@eduflex.en-rich.me`,
      submittedAt: formattedGradedAt,
      fileName: `${(courseCode || "ICT302").toLowerCase()}_submission.pdf`,
      fileSize: "4.8 MB",
      receiptNumber: `#EDF-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      status: "graded",
      score: numScore,
      grade: gradeLabel,
      feedback: feedback || "Graded by instructor.",
      gradedAt: formattedGradedAt,
      gradedBy: "Anita Humagain",
    };
    updatedSubmissions.unshift(newRecord);
  }

  saveSharedSubmissions(updatedSubmissions);

  // Mark item as graded in courses list
  const courses = getSharedCourses();
  const updatedCourses = courses.map((c) => {
    if (c.code === courseCode) {
      return {
        ...c,
        assignments: c.assignments.map((a) => {
          if (a.id === itemTitleOrId || a.title === itemTitleOrId || itemTitleOrId.includes(a.title)) {
            return { ...a, graded: true };
          }
          return a;
        }),
        assessments: (c.assessments || []).map((ass) => {
          if (ass.id === itemTitleOrId || ass.title === itemTitleOrId || itemTitleOrId.includes(ass.title)) {
            return { ...ass, graded: true };
          }
          return ass;
        }),
      };
    }
    return c;
  });
  saveSharedCourses(updatedCourses);
}

// ── Sub-Deliverables (Weekly Reports, Final Report, Group Activity Log Links) ──

export interface SubDeliverableItem {
  id: string;
  assessmentId: string;
  courseCode: string;
  week?: number;
  part?: number;
  title: string;
  weight: string;
  description: string;
  due: string;
  status: "Submitted (Verified)" | "Due Soon (Current Week)" | "In Progress" | "Upcoming" | "Overdue" | "Locked";
  opensAt?: string;
  badgeClass: string;
  score?: string | null;
  linkTitle: string; // e.g. "Week 2 Submission Link", "Week 3 Submission Link", "Final Report Submission Link", "Group Activity Log Submission Link"
  receiptNumber?: string;
  fileName?: string;
  fileSize?: string;
  submittedAt?: string;
  feedback?: string;
  comments?: string;
  attemptNumber?: number;
  // Authoritative Self-Reflection & Submission Fields per THE_BRAIN.md & 9b0f0eef-6a73-4d83-aab0-6fa5f3704409
  selfReflection?: {
    learned: string; // Paragraph 1: What I learned & why it mattered
    growth: string;  // Paragraph 2: How it improved my approach & handled challenges
  };
  assignedSection?: string;
  workCompleted?: string[];
  docFilePath?: string;
}

export const INITIAL_SUB_DELIVERABLES: SubDeliverableItem[] = [
  // Assessment 1: Weekly Progress Reports & Self-Reflections (Weeks 2–11)
  {
    id: "ict302-ass1-w2",
    assessmentId: "ict302-ass1",
    courseCode: "ICT302",
    week: 2,
    title: "Week 2 Progress",
    weight: "2%",
    description: "Connecting EduFlex to Neon PostgreSQL, data migration, Better Auth login, and Student Server Actions.",
    due: "Nov 08, 2026",
    status: "Submitted (Verified)",
    badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-300",
    score: "9.5/10",
    linkTitle: "Week 2 Submission Link",
    receiptNumber: "#EDF-2026-3021",
    fileName: "ICT302_Week_2_Richard_Vitug_2003988.docx",
    fileSize: "105.5 KB",
    submittedAt: "Nov 8, 2026 at 4:30 PM AEST",
    feedback: "Exceptional Week 2 progress report and self-reflection. Neon data migration and Better Auth server actions verified.",
    comments: "Week 2 Individual Submission: Neon PostgreSQL database connection, Prisma data migration, Better Auth setup, and student server actions.",
    attemptNumber: 1,
    assignedSection: "For this week, I was responsible for connecting EduFlex to our Neon PostgreSQL database, completing the data migration, setting up authentication with Better Auth, and building the Student Server Actions (src/actions/student.ts). The main goal of my task was to move our system away from temporary browser data so the Student Portal can load real courses, enrolments, assignments, and deadlines from the database.",
    workCompleted: [
      "Connecting EduFlex to the Neon PostgreSQL database using Prisma",
      "Running the database schema and data migration for users, courses, enrolments, assignments, and quizzes",
      "Setting up login and session authentication using Better Auth and Neon",
      "Building Student Server Actions (src/actions/student.ts) to load student dashboard and course data from Neon",
    ],
    selfReflection: {
      learned: "This week's task helped me understand how to connect a website to a real cloud database and move our sample data into PostgreSQL tables. While working on the Neon data migration and Better Auth login setup, I learned how the database tables link together and why passwords and user sessions need to be handled on the server instead of the browser. This made it much easier for me to build the Student Server Actions and load the right courses and deadlines for each student.",
      growth: "This activity also helped me improve my backend development skills and organise our database queries more clearly. At first, it was challenging to make sure the tables were migrated in the right order without errors, especially when linking students to their enrolled courses and assignments. Overcoming this gave me confidence for building out Assessment 1 and Week 3 features.",
    },
    docFilePath: "c:/Users/Richard/Desktop/Antigravity Projects/ICT302 Assessements/submissions/ICT302_Week_2_Richard_Vitug_2003988.docx",
  },
  {
    id: "ict302-ass1-w3",
    assessmentId: "ict302-ass1",
    courseCode: "ICT302",
    week: 3,
    title: "Week 3 Progress",
    weight: "2%",
    description: "Staff Portals: Instructor grading Server Actions (src/actions/instructor.ts), rubric evaluations, and GradeRecord release.",
    due: "Nov 15, 2026",
    status: "Due Soon (Current Week)",
    badgeClass: "bg-orange-100 text-orange-800 border-orange-300",
    score: null,
    linkTitle: "Week 3 Submission Link",
    assignedSection: "For Week 3 (WBS 3.1: Staff Portals — Grading & Admin Operations), I was responsible for building the Instructor grading Server Actions (src/actions/instructor.ts) to support rubric evaluations, GradeRecord persistence in Neon PostgreSQL, and coordinated with Yusuf and Anita on the Admin registration approval queue and Staff Portal UI wiring.",
    workCompleted: [
      "Built Instructor grading Server Actions (src/actions/instructor.ts) directly targeting Neon PostgreSQL",
      "Implemented server-side rubric evaluation scoring and GradeRecord gradebook release logic",
      "Enforced strict role-based authorization boundaries so only verified staff/instructors can mutate grades",
      "Integrated grading actions with the Staff Portal UI and prepared automated Playwright verification tests",
    ],
    selfReflection: {
      learned: "Building the instructor grading Server Actions taught me how to enforce strict server-side role checks and structure atomic database updates when releasing student marks and rubric feedback. Separating instructor permissions from student routes ensured zero privilege escalation paths.",
      growth: "This milestone strengthened my confidence in designing clean Server Actions for staff workflows and coordinating schema contracts with teammates working on Admin CRUD and UI wiring.",
    },
  },
  {
    id: "ict302-ass1-w4",
    assessmentId: "ict302-ass1",
    courseCode: "ICT302",
    week: 4,
    title: "Week 4 Progress",
    weight: "2%",
    description: "Cloudflare R2 Backups & Messaging Hub: Cloudflare R2 presigned URLs & nightly pg_dump backup to R2.",
    due: "Nov 22, 2026",
    opensAt: "Nov 16, 2026",
    status: "Locked",
    badgeClass: "bg-gray-100 text-gray-500 border-gray-200",
    score: null,
    linkTitle: "Week 4 Submission Link",
    assignedSection: "For Week 4 (WBS 4.1: Cloudflare R2 Backups & Messaging Hub), I am responsible for configuring the Cloudflare R2 S3-compatible client with presigned upload/download URLs and automating the nightly pg_dump database backup workflow to R2.",
    selfReflection: {
      learned: "Configuring presigned URLs and automated object-storage backups teaches how to handle binary file transfers securely without bottlenecking the application server.",
      growth: "Automating disaster recovery dumps builds practical experience in maintaining enterprise-grade database reliability.",
    },
  },
  {
    id: "ict302-ass1-w5",
    assessmentId: "ict302-ass1",
    courseCode: "ICT302",
    week: 5,
    title: "Week 5 Progress",
    weight: "2%",
    description: "Vercel Deploy & Consolidated Cloud Audit: Deploy feature branch to live Vercel Preview URL & configure env vars.",
    due: "Nov 29, 2026",
    opensAt: "Nov 23, 2026",
    status: "Locked",
    badgeClass: "bg-gray-100 text-gray-500 border-gray-200",
    score: null,
    linkTitle: "Week 5 Submission Link",
    assignedSection: "For Week 5 (WBS 5.1: Vercel Deploy & Consolidated Cloud Audit), I am responsible for deploying the feature branch to a live Vercel Preview URL and configuring production-grade environment variables for Neon, Better Auth, and Cloudflare R2.",
    selfReflection: {
      learned: "Deploying to a live cloud preview environment highlights differences between local development and serverless production runtimes, especially around environment secrets and connection pooling.",
      growth: "Managing preview deployments prepares the team for cross-device QA and automated Playwright runs against live URLs.",
    },
  },
  {
    id: "ict302-ass1-w6",
    assessmentId: "ict302-ass1",
    courseCode: "ICT302",
    week: 6,
    title: "Week 6 Progress",
    weight: "2%",
    description: "Observability & Production Go-Live: Telemetry via instrumentation.ts (Grafana Loki/Tempo) & prod domain release.",
    due: "Dec 06, 2026",
    opensAt: "Nov 30, 2026",
    status: "Locked",
    badgeClass: "bg-gray-100 text-gray-500 border-gray-200",
    score: null,
    linkTitle: "Week 6 Submission Link",
    assignedSection: "For Week 6 (WBS 6.1: Observability & Production Go-Live), I am responsible for configuring OpenTelemetry instrumentation via instrumentation.ts streaming logs and traces to Grafana Loki and Tempo, and promoting the release to the production domain.",
    selfReflection: {
      learned: "Structured application telemetry enables real-time visibility into Server Action latency, database query performance, and error traces in production.",
      growth: "Promoting EduFlex to the live production domain completes Phase 1 Feature Build and establishes production observability.",
    },
  },
  {
    id: "ict302-ass1-w7",
    assessmentId: "ict302-ass1",
    courseCode: "ICT302",
    week: 7,
    title: "Week 7 Progress",
    weight: "2%",
    description: "Testing, Debugging & Test Documentation: Fix deployment, Neon pooling & backup edge-case bugs.",
    due: "Dec 13, 2026",
    opensAt: "Dec 07, 2026",
    status: "Locked",
    badgeClass: "bg-gray-100 text-gray-500 border-gray-200",
    score: null,
    linkTitle: "Week 7 Submission Link",
    assignedSection: "For Week 7 (WBS 7.1: Testing, Debugging & Test Documentation), I am responsible for resolving deployment edge cases, Neon serverless connection pooling bottlenecks, and backup workflow bugs uncovered during regression and concurrency testing.",
    selfReflection: {
      learned: "Debugging serverless connection pooling and concurrency edge cases reveals how database connection limits behave under simultaneous load.",
      growth: "Partnering closely with QA on defect resolution improves system stability ahead of security hardening.",
    },
  },
  {
    id: "ict302-ass1-w8",
    assessmentId: "ict302-ass1",
    courseCode: "ICT302",
    week: 8,
    title: "Week 8 Progress",
    weight: "2%",
    description: "Deep Debugging & Security Hardening: Simulate mock disaster recovery restoration from R2 backup.",
    due: "Dec 20, 2026",
    opensAt: "Dec 14, 2026",
    status: "Locked",
    badgeClass: "bg-gray-100 text-gray-500 border-gray-200",
    score: null,
    linkTitle: "Week 8 Submission Link",
    assignedSection: "For Week 8 (WBS 8.1: Deep Debugging & Security Hardening), I am responsible for executing a mock disaster recovery restoration drill from our Cloudflare R2 pg_dump backups and verifying data integrity post-restore.",
    selfReflection: {
      learned: "Practicing end-to-end disaster recovery proves that automated backups are actually restorable within target recovery time objectives.",
      growth: "Validating backup restoration alongside security red-team checks strengthens overall platform resilience.",
    },
  },
  {
    id: "ict302-ass1-w9",
    assessmentId: "ict302-ass1",
    courseCode: "ICT302",
    week: 9,
    title: "Week 9 Progress",
    weight: "2%",
    description: "Performance Polish & Accessibility Audit: Production caching, CDN & telemetry performance tuning.",
    due: "Jan 03, 2027",
    opensAt: "Dec 28, 2026",
    status: "Locked",
    badgeClass: "bg-gray-100 text-gray-500 border-gray-200",
    score: null,
    linkTitle: "Week 9 Submission Link",
    assignedSection: "For Week 9 (WBS 9.1: Performance Polish & Accessibility Audit), I am responsible for tuning production caching headers, CDN delivery, and Grafana telemetry overhead to help achieve sub-1s LCP targets.",
    selfReflection: {
      learned: "Analyzing trace spans in Grafana Tempo pinpoints exactly which server queries or asset loads affect Core Web Vitals.",
      growth: "Optimizing caching and telemetry overhead ensures fast page loads for all student and staff portals.",
    },
  },
  {
    id: "ict302-ass1-w10",
    assessmentId: "ict302-ass1",
    courseCode: "ICT302",
    week: 10,
    title: "Week 10 Progress",
    weight: "2%",
    description: "Technical Specs & User Manuals: Review Architecture Specs, Deployment & DR Runbook accuracy.",
    due: "Jan 10, 2027",
    opensAt: "Jan 04, 2027",
    status: "Locked",
    badgeClass: "bg-gray-100 text-gray-500 border-gray-200",
    score: null,
    linkTitle: "Week 10 Submission Link",
    assignedSection: "For Week 10 (WBS 10.1: Technical Specs & User Manuals), I am responsible alongside Yusuf and Anita for reviewing the Technical Architecture Specifications, Deployment guide, and Disaster Recovery Runbook for complete accuracy.",
    selfReflection: {
      learned: "Cross-checking written architecture documentation against the live codebase ensures every Server Action, schema table, and recovery step is accurately recorded.",
      growth: "Finalizing technical runbooks prepares our project for smooth handover and academic assessment.",
    },
  },
  {
    id: "ict302-ass1-w11",
    assessmentId: "ict302-ass1",
    courseCode: "ICT302",
    week: 11,
    title: "Week 11 Progress",
    weight: "2%",
    description: "Live Demo Rehearsal & Staging Freeze: Freeze staging/production codebase & verify demo database seed.",
    due: "Jan 17, 2027",
    opensAt: "Jan 11, 2027",
    status: "Locked",
    badgeClass: "bg-gray-100 text-gray-500 border-gray-200",
    score: null,
    linkTitle: "Week 11 Submission Link",
    assignedSection: "For Week 11 (WBS 11.1: Live Demo Rehearsal & Staging Freeze), I am responsible alongside Yusuf and Anita for freezing the staging and production codebase and verifying the Neon demo database seed ahead of the Week 12 live demonstration.",
    selfReflection: {
      learned: "Freezing the release branch and rehearsing with deterministic seeded data eliminates last-minute surprises during live software demonstrations.",
      growth: "Completing the full demo dry-run builds team confidence for the Week 12 capstone presentation and defense.",
    },
  },

  // Assessment 2: Deliverables (2 Submissions · 50% Total Weight)
  {
    id: "ict302-ass2-d1",
    assessmentId: "ict302-ass2",
    courseCode: "ICT302",
    part: 1,
    title: "Deliverable 1: Final Project Report",
    weight: "40%",
    description: "25 to 30 pages comprehensive final report detailing project scope, full-stack architecture, test plan with 8+ test cases, evaluation, results, and deployment.",
    due: "Jan 24, 2027 (Week 11)",
    status: "In Progress",
    badgeClass: "bg-blue-100 text-blue-800 border-blue-200",
    score: null,
    linkTitle: "Final Report Submission Link",
    fileName: "ICT302_Final_Report_EduFlex_Draft.pdf",
    comments: "Drafting Sections 1-6: Project scope, Next.js architecture, and test cases.",
  },
  {
    id: "ict302-ass2-d2",
    assessmentId: "ict302-ass2",
    courseCode: "ICT302",
    part: 2,
    title: "Deliverable 2: Group Activity Log & Meeting Minutes",
    weight: "10%",
    description: "12 meeting minutes appendix, roles allocation, individual contributions journal, and team interaction records.",
    due: "Jan 24, 2027 (Week 11)",
    status: "Submitted (Verified)",
    badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-300",
    score: "9.2/10",
    linkTitle: "Group Activity Log Submission Link",
    receiptNumber: "#EDF-2026-3022",
    fileName: "ICT302_Assessment2_Part2_GroupActivityLog.pdf",
    fileSize: "4.2 MB",
    submittedAt: "Nov 7, 2026 at 6:15 PM AEST",
    feedback: "Well-documented meeting minutes covering weekly standups, mentor consultation notes, and task allocations.",
    comments: "Deliverable 2: Group Activity Log and team meeting minutes (1/2 submitted).",
    attemptNumber: 1,
  },

  // Assessment 3: Presentation and Demonstration (2 Deliverables · 30% Total Weight)
  {
    id: "ict302-ass3-d1",
    assessmentId: "ict302-ass3",
    courseCode: "ICT302",
    part: 1,
    title: "Deliverable 1: In-Class Presentation Slides",
    weight: "20%",
    description: "20-minute capstone defense presentation covering architecture, achievements, and individual project contributions.",
    due: "Jan 29, 2027 (Week 12)",
    opensAt: "Jan 18, 2027",
    status: "Locked",
    badgeClass: "bg-gray-100 text-gray-500 border-gray-200",
    score: null,
    linkTitle: "Presentation Slides Submission Link",
  },
  {
    id: "ict302-ass3-d2",
    assessmentId: "ict302-ass3",
    courseCode: "ICT302",
    part: 2,
    title: "Deliverable 2: Live System Demonstration & GitHub Repository",
    weight: "10%",
    description: "Live functional system execution walkthrough and verified production repository code branch.",
    due: "Jan 29, 2027 (Week 12)",
    opensAt: "Jan 18, 2027",
    status: "Locked",
    badgeClass: "bg-gray-100 text-gray-500 border-gray-200",
    score: null,
    linkTitle: "Live Demo & Repo Submission Link",
  },
];

export function getSharedSubDeliverables(): SubDeliverableItem[] {
  if (typeof window === "undefined") return INITIAL_SUB_DELIVERABLES;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_SUB_DELIVERABLES);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY_SUB_DELIVERABLES, JSON.stringify(INITIAL_SUB_DELIVERABLES));
      return INITIAL_SUB_DELIVERABLES;
    }
    const parsed: SubDeliverableItem[] = JSON.parse(raw);
    return parsed.length > 0 ? parsed : INITIAL_SUB_DELIVERABLES;
  } catch {
    return INITIAL_SUB_DELIVERABLES;
  }
}

export function saveSharedSubDeliverables(items: SubDeliverableItem[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY_SUB_DELIVERABLES, JSON.stringify(items));
    notifySync();
  } catch (err) {
    console.error("Failed to save sub deliverables:", err);
  }
}

export function submitSubDeliverableAction(
  deliverableId: string,
  fileName: string,
  fileSize: string = "4.5 MB",
  comments: string = "",
  studentEmail: string = "20030988@eduflex.en-rich.me",
  studentName: string = "Richard Vitug",
  selfReflection?: { learned: string; growth: string }
): { success: boolean; item?: SubDeliverableItem; submittedCount: number; totalCount: number; ratioLabel: string } {
  const items = getSharedSubDeliverables();
  const index = items.findIndex((x) => x.id === deliverableId);
  if (index === -1) {
    return { success: false, submittedCount: 0, totalCount: 0, ratioLabel: "" };
  }

  const existing = items[index];
  const receipt = `#EDF-2026-${Math.floor(1000 + Math.random() * 9000)}`;
  const now = new Date();
  const submittedAt =
    now.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }) +
    " at " +
    now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }) +
    " AEST";

  const updatedItem: SubDeliverableItem = {
    ...existing,
    status: "Submitted (Verified)",
    badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-300",
    receiptNumber: receipt,
    fileName,
    fileSize,
    submittedAt,
    comments,
    attemptNumber: (existing.attemptNumber ?? 0) + 1,
    selfReflection: selfReflection || existing.selfReflection,
  };

  items[index] = updatedItem;
  saveSharedSubDeliverables(items);

  // Recalculate submitted counts for the parent assessment
  const siblingItems = items.filter((x) => x.assessmentId === existing.assessmentId);
  const totalCount = siblingItems.length;
  const submittedCount = siblingItems.filter((x) => x.status === "Submitted (Verified)").length;
  const ratioLabel = `${submittedCount}/${totalCount} Submitted`;

  // Also update parent course item in STORAGE_KEY_COURSES
  const courses = getSharedCourses();
  const updatedCourses = courses.map((c) => {
    if (c.code === existing.courseCode) {
      return {
        ...c,
        assessments: (c.assessments || []).map((ass) => {
          if (ass.id === existing.assessmentId) {
            return {
              ...ass,
              submittedCount,
              totalSubmissions: totalCount,
              submissionRatioLabel: ratioLabel,
            };
          }
          return ass;
        }),
      };
    }
    return c;
  });
  saveSharedCourses(updatedCourses);

  // Record submission in STORAGE_KEY_SUBMISSIONS
  const submissions = getSharedSubmissions();
  submissions.unshift({
    id: `sub-${deliverableId}-${Date.now()}`,
    itemId: deliverableId,
    itemTitle: `${existing.title} (${existing.linkTitle})`,
    itemType: "Assessment",
    courseCode: existing.courseCode,
    studentName,
    studentEmail,
    submittedAt,
    fileName,
    fileSize,
    comments,
    receiptNumber: receipt,
    status: "submitted",
  });
  saveSharedSubmissions(submissions);

  return { success: true, item: updatedItem, submittedCount, totalCount, ratioLabel };
}

