(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/assignmentData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ── Shared Assignment & Assessment Data Layer ────────────────────────────────
__turbopack_context__.s([
    "INITIAL_ASSIGNMENT_COURSES",
    ()=>INITIAL_ASSIGNMENT_COURSES,
    "INITIAL_SUBMISSIONS",
    ()=>INITIAL_SUBMISSIONS,
    "addStudentSubmission",
    ()=>addStudentSubmission,
    "formatDueDate",
    ()=>formatDueDate,
    "getSharedCourses",
    ()=>getSharedCourses,
    "getSharedSubmissions",
    ()=>getSharedSubmissions,
    "gradeStudentSubmission",
    ()=>gradeStudentSubmission,
    "saveSharedCourses",
    ()=>saveSharedCourses,
    "saveSharedSubmissions",
    ()=>saveSharedSubmissions
]);
const INITIAL_ASSIGNMENT_COURSES = [
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
                status: "Published"
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
                status: "Published"
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
                status: "Published"
            }
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
                status: "Published"
            }
        ]
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
                status: "Published"
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
                status: "Published"
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
                status: "Published"
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
                status: "Published"
            }
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
                status: "Published"
            }
        ]
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
                status: "Published"
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
                status: "Published"
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
                status: "Published"
            }
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
                status: "Published"
            }
        ]
    }
];
const INITIAL_SUBMISSIONS = [
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
        gradedBy: "Prof. Sarita Koirala"
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
        gradedBy: "Prof. Sarita Koirala"
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
        gradedBy: "Prof. Sarita Koirala"
    }
];
const STORAGE_KEY_COURSES = "eduflex_assignment_courses";
const STORAGE_KEY_SUBMISSIONS = "eduflex_assignment_submissions";
function formatDueDate(dateStr) {
    if (!dateStr) return "";
    try {
        const parts = dateStr.split("-");
        if (parts.length === 3) {
            const year = parts[0];
            const monthIndex = parseInt(parts[1], 10) - 1;
            const day = parseInt(parts[2], 10);
            const months = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
            ];
            if (months[monthIndex]) {
                return `${months[monthIndex]} ${day}, ${year}`;
            }
        }
    } catch  {}
    return dateStr;
}
function notifySync() {
    if ("TURBOPACK compile-time truthy", 1) {
        window.dispatchEvent(new CustomEvent("eduflex_assignment_sync"));
    }
}
function getSharedCourses() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = localStorage.getItem(STORAGE_KEY_COURSES);
        if (!raw) {
            localStorage.setItem(STORAGE_KEY_COURSES, JSON.stringify(INITIAL_ASSIGNMENT_COURSES));
            return INITIAL_ASSIGNMENT_COURSES;
        }
        return JSON.parse(raw);
    } catch  {
        return INITIAL_ASSIGNMENT_COURSES;
    }
}
function saveSharedCourses(courses) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
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
function getSharedSubmissions() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = localStorage.getItem(STORAGE_KEY_SUBMISSIONS);
        if (!raw) {
            localStorage.setItem(STORAGE_KEY_SUBMISSIONS, JSON.stringify(INITIAL_SUBMISSIONS));
            return INITIAL_SUBMISSIONS;
        }
        return JSON.parse(raw);
    } catch  {
        return INITIAL_SUBMISSIONS;
    }
}
function saveSharedSubmissions(submissions) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
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
function addStudentSubmission(data) {
    const submissions = getSharedSubmissions();
    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric"
    }) + " at " + now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit"
    }) + " AEST";
    const newSub = {
        ...data,
        id: `sub-${Date.now()}`,
        submittedAt: formattedDate,
        status: "submitted"
    };
    // Check if replacing previous submission or adding new
    const existingIdx = submissions.findIndex((s)=>s.courseCode === data.courseCode && (s.itemId === data.itemId || s.itemTitle === data.itemTitle) && s.studentEmail === data.studentEmail);
    let updatedSubmissions;
    if (existingIdx >= 0) {
        updatedSubmissions = [
            ...submissions
        ];
        updatedSubmissions[existingIdx] = newSub;
    } else {
        updatedSubmissions = [
            newSub,
            ...submissions
        ];
        // Increment submission count in courses
        const courses = getSharedCourses();
        const updatedCourses = courses.map((c)=>{
            if (c.code === data.courseCode) {
                return {
                    ...c,
                    assignments: c.assignments.map((a)=>{
                        if (a.id === data.itemId || a.title === data.itemTitle) {
                            return {
                                ...a,
                                submissions: a.submissions + 1
                            };
                        }
                        return a;
                    }),
                    assessments: (c.assessments || []).map((ass)=>{
                        if (ass.id === data.itemId || ass.title === data.itemTitle) {
                            return {
                                ...ass,
                                submissions: ass.submissions + 1
                            };
                        }
                        return ass;
                    })
                };
            }
            return c;
        });
        saveSharedCourses(updatedCourses);
    }
    saveSharedSubmissions(updatedSubmissions);
    return newSub;
}
function gradeStudentSubmission(studentName, itemTitleOrId, courseCode, score, feedback) {
    const submissions = getSharedSubmissions();
    const numScore = Number(score);
    let gradeLabel = "Pass (P)";
    if (numScore >= 85) gradeLabel = "High Distinction (HD)";
    else if (numScore >= 75) gradeLabel = "Distinction (D)";
    else if (numScore >= 65) gradeLabel = "Credit (C)";
    else if (numScore >= 50) gradeLabel = "Pass (P)";
    else gradeLabel = "Fail (F)";
    const now = new Date();
    const formattedGradedAt = now.toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric"
    }) + " at " + now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit"
    }) + " AEST";
    let matchFound = false;
    const updatedSubmissions = submissions.map((sub)=>{
        if ((sub.studentName === studentName || sub.studentEmail.includes(studentName.toLowerCase().split(" ")[0])) && (sub.itemId === itemTitleOrId || sub.itemTitle === itemTitleOrId || itemTitleOrId.includes(sub.itemTitle)) && (!courseCode || sub.courseCode === courseCode)) {
            matchFound = true;
            return {
                ...sub,
                status: "graded",
                score: numScore,
                grade: gradeLabel,
                feedback: feedback || "Graded by instructor.",
                gradedAt: formattedGradedAt,
                gradedBy: "Prof. Sarita Koirala"
            };
        }
        return sub;
    });
    // If no existing student submission record was found (e.g. grading a mock student), create a graded record
    if (!matchFound) {
        const newRecord = {
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
            gradedBy: "Prof. Sarita Koirala"
        };
        updatedSubmissions.unshift(newRecord);
    }
    saveSharedSubmissions(updatedSubmissions);
    // Mark item as graded in courses list if all submissions or as appropriate
    const courses = getSharedCourses();
    const updatedCourses = courses.map((c)=>{
        if (c.code === courseCode) {
            return {
                ...c,
                assignments: c.assignments.map((a)=>{
                    if (a.id === itemTitleOrId || a.title === itemTitleOrId || itemTitleOrId.includes(a.title)) {
                        return {
                            ...a,
                            graded: true
                        };
                    }
                    return a;
                }),
                assessments: (c.assessments || []).map((ass)=>{
                    if (ass.id === itemTitleOrId || ass.title === itemTitleOrId || itemTitleOrId.includes(ass.title)) {
                        return {
                            ...ass,
                            graded: true
                        };
                    }
                    return ass;
                })
            };
        }
        return c;
    });
    saveSharedCourses(updatedCourses);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/auth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearSession",
    ()=>clearSession,
    "getInitials",
    ()=>getInitials,
    "getSessionUser",
    ()=>getSessionUser,
    "loginUser",
    ()=>loginUser,
    "registerUser",
    ()=>registerUser,
    "setSessionUser",
    ()=>setSessionUser
]);
const ACCOUNTS_KEY = "eduflex_accounts";
const SESSION_KEY = "eduflex_current_user";
const SEED_ACCOUNTS = [
    {
        name: "Richard Maceda Vitug",
        email: "2003988@eduflex.edu",
        password: "student123",
        role: "student"
    },
    {
        name: "Anita Humagain",
        email: "anita.humagain@eduflex.edu",
        password: "instructor123",
        role: "instructor"
    },
    {
        name: "Rojit Munankarmi",
        email: "a.rojit.munankarmi@eduflex.edu",
        password: "admin123",
        role: "admin"
    }
];
function getAccounts() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const stored = JSON.parse(localStorage.getItem(ACCOUNTS_KEY) || "[]");
        // Merge seed accounts in without overwriting any existing registered account
        const emails = new Set(stored.map((a)=>a.email));
        const merged = [
            ...stored,
            ...SEED_ACCOUNTS.filter((s)=>!emails.has(s.email))
        ];
        return merged;
    } catch  {
        return SEED_ACCOUNTS;
    }
}
function registerUser(account) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const accounts = getAccounts();
    const exists = accounts.find((a)=>a.email === account.email);
    if (!exists) {
        accounts.push(account);
        localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
    }
}
function loginUser(email, password) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const accounts = getAccounts();
    const match = accounts.find((a)=>a.email === email && a.password === password);
    if (match) {
        localStorage.setItem(SESSION_KEY, JSON.stringify(match));
        return match;
    }
    return null;
}
function setSessionUser(user) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.setItem(SESSION_KEY, JSON.stringify(user));
}
function getSessionUser() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = localStorage.getItem(SESSION_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch  {
        return null;
    }
}
function clearSession() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.removeItem(SESSION_KEY);
}
function getInitials(name) {
    return name.split(" ").filter(Boolean).slice(0, 2).map((w)=>w[0].toUpperCase()).join("");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1rksxsd._.js.map