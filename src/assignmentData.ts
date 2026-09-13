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

export const INITIAL_ASSIGNMENT_COURSES: InstructorCourseAssignments[] = [
  {
    code: "ICT301",
    name: "Information Technology Project 1",
    color: "#2563eb",
    term: "T226",
    assignments: [
      {
        id: "ict301-a1",
        title: "Milestone 1: Project Proposal",
        due: "Aug 25, 2026",
        submissions: 32,
        total: 32,
        type: "Assignment",
        graded: true,
        maxScore: 100,
        description: "Comprehensive project proposal detailing project scope, team roles, and Gantt chart schedule.",
        status: "Published",
      },
      {
        id: "ict301-a2",
        title: "Milestone 2: Preliminary Design",
        due: "Sep 5, 2026",
        submissions: 28,
        total: 32,
        type: "Assignment",
        graded: false,
        maxScore: 100,
        description: "Preliminary architecture design diagrams, class models, and UX wireframe deliverables.",
        status: "Published",
      },
      {
        id: "ict301-a3",
        title: "Weekly Journal Entry 1",
        due: "Aug 22, 2026",
        submissions: 30,
        total: 32,
        type: "Assignment",
        graded: true,
        maxScore: 50,
        description: "Reflective learning journal entry covering sprint planning and risk management notes.",
        status: "Published",
      },
    ],
    assessments: [
      {
        id: "ict301-ass1",
        title: "Milestone 3: Final System Implementation & Defense",
        due: "Sep 25, 2026",
        submissions: 20,
        total: 32,
        type: "Assessment",
        graded: false,
        maxScore: 100,
        weight: 35,
        description: "Final functional software submission and panel presentation defense demonstrating project deliverables.",
        status: "Published",
      },
    ],
  },
  {
    code: "ICT272",
    name: "Web Design and Development",
    color: "#0e9f6e",
    term: "T226",
    assignments: [
      {
        id: "ict272-a1",
        title: "Lab Exercise 1: HTML Basics",
        due: "Aug 20, 2026",
        submissions: 38,
        total: 38,
        type: "Assignment",
        graded: true,
        maxScore: 50,
        description: "Semantic markup exercise creating accessible multi-page structure.",
        status: "Published",
      },
      {
        id: "ict272-a2",
        title: "Lab Exercise 2: CSS Layouts",
        due: "Aug 27, 2026",
        submissions: 37,
        total: 38,
        type: "Assignment",
        graded: true,
        maxScore: 50,
        description: "Flexbox and Grid layout implementation matching design specifications.",
        status: "Published",
      },
      {
        id: "ict272-a3",
        title: "Lab Exercise 3: JavaScript DOM",
        due: "Sep 3, 2026",
        submissions: 36,
        total: 38,
        type: "Assignment",
        graded: false,
        maxScore: 50,
        description: "Interactive client-side web application handling DOM events and form validation.",
        status: "Published",
      },
      {
        id: "ict272-a4",
        title: "Lab Exercise 4: React Basics",
        due: "Sep 7, 2026",
        submissions: 12,
        total: 38,
        type: "Assignment",
        graded: false,
        maxScore: 50,
        description: "Component-based web application with React state and props.",
        status: "Published",
      },
    ],
    assessments: [
      {
        id: "ict272-ass1",
        title: "Major Project: Interactive Web Application",
        due: "Sep 22, 2026",
        submissions: 35,
        total: 38,
        type: "Assessment",
        graded: true,
        maxScore: 100,
        weight: 30,
        description: "Production-ready web application built with responsive design and modern frontend framework.",
        status: "Published",
      },
    ],
  },
  {
    code: "ICT126",
    name: "Artificial Intelligence",
    color: "#7c3aed",
    term: "T226",
    assignments: [
      {
        id: "ict126-a1",
        title: "AI Case Study Research Paper",
        due: "Sep 19, 2026",
        submissions: 10,
        total: 26,
        type: "Assignment",
        graded: false,
        maxScore: 100,
        description: "Research paper surveying contemporary applications of generative AI in education.",
        status: "Published",
      },
      {
        id: "ict126-a2",
        title: "Assignment 1: AI History Review",
        due: "Aug 28, 2026",
        submissions: 26,
        total: 26,
        type: "Assignment",
        graded: true,
        maxScore: 100,
        description: "Literature review of classical AI paradigms and symbolic reasoning systems.",
        status: "Published",
      },
      {
        id: "ict126-a3",
        title: "Assignment 2: ML Algorithm Analysis",
        due: "Sep 4, 2026",
        submissions: 24,
        total: 26,
        type: "Assignment",
        graded: false,
        maxScore: 100,
        description: "Empirical evaluation of decision trees versus random forests on benchmark classification data.",
        status: "Published",
      },
    ],
    assessments: [
      {
        id: "ict126-ass1",
        title: "Mid-Term Practical AI Assessment",
        due: "Sep 18, 2026",
        submissions: 22,
        total: 26,
        type: "Assessment",
        graded: false,
        maxScore: 100,
        weight: 25,
        description: "Hands-on machine learning implementation and empirical performance evaluation report.",
        status: "Published",
      },
    ],
  },
];

export const INITIAL_SUBMISSIONS: StudentSubmission[] = [
  {
    id: "sub-1",
    itemId: "ict272-a1",
    itemTitle: "Lab Exercise 1: HTML Basics",
    itemType: "Assignment",
    courseCode: "ICT272",
    studentName: "Richard Maceda Vitug",
    studentEmail: "2003988@eduflex.edu",
    submittedAt: "Aug 19, 2026 at 4:15 PM AEST",
    fileName: "ict272_lab1_html_vitug.zip",
    fileSize: "4.2 MB",
    comments: "Complete HTML5 multi-page accessible website with semantic tags.",
    receiptNumber: "#EDF-2026-8192",
    status: "graded",
    score: 48,
    maxScore: 50,
    grade: "High Distinction (HD)",
    feedback: "Outstanding work! Semantic HTML tags are used impeccably. Flawless structure.",
    gradedAt: "Aug 21, 2026 at 10:30 AM AEST",
    gradedBy: "Prof. Sarita Koirala",
  },
  {
    id: "sub-2",
    itemId: "ict301-a1",
    itemTitle: "Milestone 1: Project Proposal",
    itemType: "Assignment",
    courseCode: "ICT301",
    studentName: "Richard Maceda Vitug",
    studentEmail: "2003988@eduflex.edu",
    submittedAt: "Aug 24, 2026 at 8:20 PM AEST",
    fileName: "ict301_milestone1_proposal_vitug.pdf",
    fileSize: "2.8 MB",
    comments: "Includes team charter, work breakdown structure, and milestone schedules.",
    receiptNumber: "#EDF-2026-9418",
    status: "graded",
    score: 94,
    maxScore: 100,
    grade: "High Distinction (HD)",
    feedback: "Comprehensive project proposal detailing clear scope, thorough team roles, and realistic Gantt chart schedule.",
    gradedAt: "Aug 26, 2026 at 2:00 PM AEST",
    gradedBy: "Prof. Sarita Koirala",
  },
  {
    id: "sub-3",
    itemId: "ict272-a2",
    itemTitle: "Lab Exercise 2: CSS Layouts",
    itemType: "Assignment",
    courseCode: "ICT272",
    studentName: "Richard Maceda Vitug",
    studentEmail: "2003988@eduflex.edu",
    submittedAt: "Aug 26, 2026 at 6:40 PM AEST",
    fileName: "ict272_lab2_css_vitug.zip",
    fileSize: "8.5 MB",
    comments: "Responsive CSS grid and flexbox layout tested on desktop, tablet, and mobile breakpoints.",
    receiptNumber: "#EDF-2026-5321",
    status: "graded",
    score: 47,
    maxScore: 50,
    grade: "High Distinction (HD)",
    feedback: "Great implementation of CSS Grid and custom properties. Clean and modern aesthetic.",
    gradedAt: "Aug 28, 2026 at 11:15 AM AEST",
    gradedBy: "Prof. Sarita Koirala",
  },
];

const STORAGE_KEY_COURSES = "eduflex_assignment_courses";
const STORAGE_KEY_SUBMISSIONS = "eduflex_assignment_submissions";

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

export function getSharedCourses(): InstructorCourseAssignments[] {
  if (typeof window === "undefined") return INITIAL_ASSIGNMENT_COURSES;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_COURSES);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY_COURSES, JSON.stringify(INITIAL_ASSIGNMENT_COURSES));
      return INITIAL_ASSIGNMENT_COURSES;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_ASSIGNMENT_COURSES;
  }
}

export function saveSharedCourses(courses: InstructorCourseAssignments[]): void {
  if (typeof window === "undefined") return;
  try {
    const json = JSON.stringify(courses);
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
    const raw = localStorage.getItem(STORAGE_KEY_SUBMISSIONS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY_SUBMISSIONS, JSON.stringify(INITIAL_SUBMISSIONS));
      return INITIAL_SUBMISSIONS;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_SUBMISSIONS;
  }
}

export function saveSharedSubmissions(submissions: StudentSubmission[]): void {
  if (typeof window === "undefined") return;
  try {
    const json = JSON.stringify(submissions);
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

  let gradeLabel = "Pass (P)";
  if (numScore >= 85) gradeLabel = "High Distinction (HD)";
  else if (numScore >= 75) gradeLabel = "Distinction (D)";
  else if (numScore >= 65) gradeLabel = "Credit (C)";
  else if (numScore >= 50) gradeLabel = "Pass (P)";
  else gradeLabel = "Fail (F)";

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
        gradedBy: "Prof. Sarita Koirala",
      };
    }
    return sub;
  });

  // If no existing student submission record was found (e.g. grading a mock student), create a graded record
  if (!matchFound) {
    const newRecord: StudentSubmission = {
      id: `sub-${Date.now()}`,
      itemId: itemTitleOrId,
      itemTitle: itemTitleOrId,
      itemType: "Assignment",
      courseCode: courseCode || "ICT301",
      studentName,
      studentEmail: `${studentName.toLowerCase().replace(/\s+/g, ".")}@eduflex.edu`,
      submittedAt: formattedGradedAt,
      fileName: `${courseCode.toLowerCase()}_submission.zip`,
      fileSize: "5.1 MB",
      receiptNumber: `#EDF-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      status: "graded",
      score: numScore,
      grade: gradeLabel,
      feedback: feedback || "Graded by instructor.",
      gradedAt: formattedGradedAt,
      gradedBy: "Prof. Sarita Koirala",
    };
    updatedSubmissions.unshift(newRecord);
  }

  saveSharedSubmissions(updatedSubmissions);

  // Mark item as graded in courses list if all submissions or as appropriate
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

