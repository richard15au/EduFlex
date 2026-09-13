module.exports = [
"[project]/src/adminData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ── Admin Data Types & Initial Mock Datasets ──────────────────────────────────
__turbopack_context__.s([
    "INITIAL_ADMIN_ANNOUNCEMENTS",
    ()=>INITIAL_ADMIN_ANNOUNCEMENTS,
    "INITIAL_ADMIN_CALENDAR_EVENTS",
    ()=>INITIAL_ADMIN_CALENDAR_EVENTS,
    "INITIAL_ADMIN_CONVERSATIONS",
    ()=>INITIAL_ADMIN_CONVERSATIONS,
    "INITIAL_ADMIN_COURSES",
    ()=>INITIAL_ADMIN_COURSES,
    "INITIAL_ADMIN_ENROLLMENTS",
    ()=>INITIAL_ADMIN_ENROLLMENTS,
    "INITIAL_ADMIN_PENDING",
    ()=>INITIAL_ADMIN_PENDING,
    "INITIAL_ADMIN_SETTINGS",
    ()=>INITIAL_ADMIN_SETTINGS,
    "INITIAL_ADMIN_USERS",
    ()=>INITIAL_ADMIN_USERS
]);
const INITIAL_ADMIN_USERS = [
    {
        id: "STU-20262001",
        name: "Maria Santos",
        email: "m.santos@eduflex.edu.ph",
        role: "Student",
        status: "Active",
        lastActive: "Sep 2, 2026, 10:42 AM",
        joined: "Sep 1, 2026",
        program: "BS Information Technology",
        phone: "+63 917 123 4567",
        courses: [
            "ICT301",
            "ICT272"
        ]
    },
    {
        id: "STU-20262002",
        name: "James Reyes",
        email: "j.reyes@eduflex.edu.ph",
        role: "Student",
        status: "Active",
        lastActive: "Sep 2, 2026, 9:15 AM",
        joined: "Sep 1, 2026",
        program: "BS Information Technology",
        phone: "+63 918 234 5678",
        courses: [
            "ICT301",
            "ICT126"
        ]
    },
    {
        id: "INS-20260034",
        name: "Anna Cruz",
        email: "a.cruz@eduflex.edu.ph",
        role: "Instructor",
        status: "Active",
        lastActive: "Sep 2, 2026, 8:00 AM",
        joined: "Aug 31, 2026",
        department: "School of IT",
        phone: "+63 919 345 6789",
        courses: [
            "ICT272",
            "ICT350"
        ]
    },
    {
        id: "INS-20260035",
        name: "Prof. Eduardo Lim",
        email: "e.lim@eduflex.edu.ph",
        role: "Instructor",
        status: "Active",
        lastActive: "Sep 1, 2026, 4:30 PM",
        joined: "Aug 15, 2026",
        department: "School of IT",
        phone: "+63 920 456 7890",
        courses: [
            "ICT301",
            "ICT126"
        ]
    },
    {
        id: "STU-20262003",
        name: "Carlos Bautista",
        email: "c.bautista@eduflex.edu.ph",
        role: "Student",
        status: "Inactive",
        lastActive: "Aug 20, 2026, 2:11 PM",
        joined: "Aug 30, 2026",
        program: "BS Information Technology",
        phone: "+63 921 567 8901",
        courses: []
    },
    {
        id: "STU-20262004",
        name: "Sophia Dela Torre",
        email: "s.delatorre@eduflex.edu.ph",
        role: "Student",
        status: "Active",
        lastActive: "Sep 2, 2026, 11:03 AM",
        joined: "Aug 28, 2026",
        program: "BS Information Technology",
        phone: "+63 922 678 9012",
        courses: [
            "ICT272"
        ]
    },
    {
        id: "STU-20262005",
        name: "Mark Villanueva",
        email: "m.villanueva@eduflex.edu.ph",
        role: "Student",
        status: "Active",
        lastActive: "Sep 2, 2026, 7:45 AM",
        joined: "Aug 27, 2026",
        program: "BS Information Technology",
        phone: "+63 923 789 0123",
        courses: [
            "ICT126",
            "ICT350"
        ]
    },
    {
        id: "INS-20260036",
        name: "Dr. Rachel Gomez",
        email: "r.gomez@eduflex.edu.ph",
        role: "Instructor",
        status: "Active",
        lastActive: "Sep 1, 2026, 5:00 PM",
        joined: "Jul 10, 2026",
        department: "School of IT",
        phone: "+63 924 890 1234",
        courses: [
            "ICT126"
        ]
    },
    {
        id: "STU-20262006",
        name: "Rico Dela Cruz",
        email: "r.delacruz@eduflex.edu.ph",
        role: "Student",
        status: "Inactive",
        lastActive: "Aug 15, 2026, 9:00 AM",
        joined: "Aug 25, 2026",
        program: "BS Information Technology",
        phone: "+63 925 901 2345",
        courses: []
    },
    {
        id: "STU-20262007",
        name: "Patricia Aquino",
        email: "p.aquino@eduflex.edu.ph",
        role: "Student",
        status: "Active",
        lastActive: "Sep 2, 2026, 10:10 AM",
        joined: "Aug 22, 2026",
        program: "BS Information Technology",
        phone: "+63 926 012 3456",
        courses: [
            "ICT301"
        ]
    },
    {
        id: "STU-20262008",
        name: "Gabriel Mendoza",
        email: "g.mendoza@eduflex.edu.ph",
        role: "Student",
        status: "Active",
        lastActive: "Sep 1, 2026, 3:20 PM",
        joined: "Aug 20, 2026",
        program: "BS Information Technology",
        phone: "+63 927 123 4567",
        courses: [
            "ICT272",
            "ICT126"
        ]
    },
    {
        id: "INS-20260037",
        name: "Prof. Carla Tan",
        email: "c.tan@eduflex.edu.ph",
        role: "Instructor",
        status: "Active",
        lastActive: "Aug 30, 2026, 11:30 AM",
        joined: "Jun 1, 2026",
        department: "School of IT",
        phone: "+63 928 234 5678",
        courses: [
            "ICT350"
        ]
    },
    {
        id: "INS-20260012",
        name: "Prof. Sarita Koirala",
        email: "s.koirala@eduflex.edu.ph",
        role: "Instructor",
        status: "Active",
        lastActive: "Sep 2, 2026, 11:30 AM",
        joined: "May 10, 2026",
        department: "School of IT",
        phone: "+63 929 111 2233",
        courses: [
            "ICT301",
            "ICT272"
        ]
    }
];
const INITIAL_ADMIN_PENDING = [
    {
        id: "PA-001",
        name: "Bea Tolentino",
        initials: "BT",
        role: "Instructor",
        action: "Account Registration",
        email: "b.tolentino@eduflex.edu.ph",
        submitted: "Sep 1, 2026"
    },
    {
        id: "PA-002",
        name: "Karl Navarro",
        initials: "KN",
        role: "Student",
        action: "Late Enrollment – ICT301",
        email: "karl.navarro@eduflex.edu.ph",
        submitted: "Sep 1, 2026"
    },
    {
        id: "PA-003",
        name: "Liza Mendoza",
        initials: "LM",
        role: "Instructor",
        action: "Account Registration",
        email: "l.mendoza@eduflex.edu.ph",
        submitted: "Aug 31, 2026"
    },
    {
        id: "PA-004",
        name: "Nico Aguilar",
        initials: "NA",
        role: "Student",
        action: "Course Override – ICT272",
        email: "n.aguilar@eduflex.edu.ph",
        submitted: "Aug 30, 2026"
    },
    {
        id: "PA-005",
        name: "Danilo Santos",
        initials: "DS",
        role: "Student",
        action: "Account Registration",
        email: "d.santos@eduflex.edu.ph",
        submitted: "Aug 29, 2026"
    }
];
const INITIAL_ADMIN_COURSES = [
    {
        code: "ICT301",
        name: "Information Technology Project 1",
        faculty: "School of ICT",
        instructor: "Prof. Sarita Koirala",
        students: 124,
        capacity: 150,
        semester: "T2 2026",
        status: "Active",
        description: "Capstone systems development and project management course for final year IT students."
    },
    {
        code: "ICT272",
        name: "Web Design and Development",
        faculty: "School of ICT",
        instructor: "Prof. Anna Cruz",
        students: 138,
        capacity: 150,
        semester: "T2 2026",
        status: "Active",
        description: "Modern responsive web applications, component lifecycle, styling architectures, and REST API integration."
    },
    {
        code: "ICT126",
        name: "Artificial Intelligence",
        faculty: "School of ICT",
        instructor: "Dr. Rachel Gomez",
        students: 97,
        capacity: 120,
        semester: "T2 2026",
        status: "Active",
        description: "Core concepts of artificial intelligence, search algorithms, heuristic evaluation, and machine learning models."
    },
    {
        code: "ICT350",
        name: "Cybersecurity Basics",
        faculty: "School of ICT",
        instructor: "Prof. Eduardo Lim",
        students: 41,
        capacity: 100,
        semester: "T2 2026",
        status: "Draft",
        description: "Network defense principles, encryption standards, threat modeling, and vulnerability assessments."
    },
    {
        code: "ICT410",
        name: "Mobile Application Development",
        faculty: "School of ICT",
        instructor: "Prof. Carla Tan",
        students: 88,
        capacity: 120,
        semester: "T1 2026",
        status: "Active",
        description: "Cross-platform mobile application engineering, reactive state management, and native device hardware access."
    },
    {
        code: "ICT220",
        name: "Data Structures & Algorithms",
        faculty: "School of ICT",
        instructor: "Prof. Eduardo Lim",
        students: 112,
        capacity: 130,
        semester: "T1 2026",
        status: "Archived",
        description: "Algorithmic complexity, tree traversals, dynamic programming, and asymptotic computational analysis."
    },
    {
        code: "ICT180",
        name: "Computer Networks",
        faculty: "School of ICT",
        instructor: "Prof. Anna Cruz",
        students: 76,
        capacity: 100,
        semester: "T1 2026",
        status: "Archived",
        description: "OSI and TCP/IP protocol stacks, subnetting, socket communications, routing topologies, and packet filtering."
    }
];
const INITIAL_ADMIN_ENROLLMENTS = [
    {
        id: "ENR-001",
        studentName: "Maria Santos",
        studentId: "STU-20262001",
        courseName: "Information Technology Project 1",
        courseCode: "ICT301",
        semester: "T2 2026",
        date: "Sep 1, 2026",
        status: "Enrolled"
    },
    {
        id: "ENR-002",
        studentName: "James Reyes",
        studentId: "STU-20262002",
        courseName: "Web Design and Development",
        courseCode: "ICT272",
        semester: "T2 2026",
        date: "Sep 1, 2026",
        status: "Enrolled"
    },
    {
        id: "ENR-003",
        studentName: "Karl Navarro",
        studentId: "STU-20262003",
        courseName: "Information Technology Project 1",
        courseCode: "ICT301",
        semester: "T2 2026",
        date: "Sep 1, 2026",
        status: "Enrolled"
    },
    {
        id: "ENR-004",
        studentName: "Bea Tolentino",
        studentId: "STU-20262004",
        courseName: "Artificial Intelligence",
        courseCode: "ICT126",
        semester: "T2 2026",
        date: "Aug 31, 2026",
        status: "Dropped"
    },
    {
        id: "ENR-005",
        studentName: "Nico Aguilar",
        studentId: "STU-20262005",
        courseName: "Web Design and Development",
        courseCode: "ICT272",
        semester: "T2 2026",
        date: "Aug 30, 2026",
        status: "Enrolled"
    },
    {
        id: "ENR-006",
        studentName: "Liza Mendoza",
        studentId: "STU-20262006",
        courseName: "Cybersecurity Basics",
        courseCode: "ICT350",
        semester: "T2 2026",
        date: "Aug 30, 2026",
        status: "Enrolled"
    },
    {
        id: "ENR-007",
        studentName: "Carlos Bautista",
        studentId: "STU-20262007",
        courseName: "Artificial Intelligence",
        courseCode: "ICT126",
        semester: "T2 2026",
        date: "Aug 29, 2026",
        status: "Enrolled"
    },
    {
        id: "ENR-008",
        studentName: "Sophia Dela Torre",
        studentId: "STU-20262004",
        courseName: "Web Design and Development",
        courseCode: "ICT272",
        semester: "T2 2026",
        date: "Aug 28, 2026",
        status: "Enrolled"
    },
    {
        id: "ENR-009",
        studentName: "Mark Villanueva",
        studentId: "STU-20262005",
        courseName: "Artificial Intelligence",
        courseCode: "ICT126",
        semester: "T2 2026",
        date: "Aug 27, 2026",
        status: "Enrolled"
    },
    {
        id: "ENR-010",
        studentName: "Patricia Aquino",
        studentId: "STU-20262007",
        courseName: "Information Technology Project 1",
        courseCode: "ICT301",
        semester: "T2 2026",
        date: "Aug 22, 2026",
        status: "Enrolled"
    }
];
const INITIAL_ADMIN_ANNOUNCEMENTS = [
    {
        id: "ANN-001",
        title: "Semester T226 Important Notice",
        desc: "All students and faculty are reminded of the key academic dates for Trimester 2, 2026 including enrollment deadlines.",
        date: "Sep 2, 2026",
        author: "Admin Office",
        audience: "All Users",
        status: "Published"
    },
    {
        id: "ANN-002",
        title: "System Maintenance Scheduled",
        desc: "The LMS platform will undergo scheduled maintenance on September 10, 2026 from 11 PM to 2 AM.",
        date: "Sep 1, 2026",
        author: "IT Department",
        audience: "All Users",
        status: "Scheduled"
    },
    {
        id: "ANN-003",
        title: "Assessment Submission Reminder",
        desc: "Reminder: Assessment 1 submissions close on September 15, 2026. Late submissions will not be accepted.",
        date: "Aug 31, 2026",
        author: "Academic Office",
        audience: "Students",
        status: "Published"
    },
    {
        id: "ANN-004",
        title: "Enrollment Period Opens",
        desc: "The enrollment period for Trimester 2, 2026 is now open. Students may enroll via the student portal.",
        date: "Aug 28, 2026",
        author: "Registrar",
        audience: "Students",
        status: "Published"
    },
    {
        id: "ANN-005",
        title: "Faculty Training Workshop",
        desc: "Mandatory training workshop for all instructors on the updated LMS features scheduled for September 5, 2026.",
        date: "Aug 27, 2026",
        author: "Admin Office",
        audience: "Instructors",
        status: "Draft"
    }
];
const INITIAL_ADMIN_CONVERSATIONS = [
    {
        id: "conv-1",
        name: "Prof. Sarita Koirala",
        role: "Instructor",
        preview: "Could you approve the late enrollment for Carla Ramos?",
        time: "10:32 AM",
        unread: 2,
        initials: "SK",
        color: "bg-blue-500",
        messages: [
            {
                id: "m-1",
                from: "Prof. Sarita Koirala",
                text: "Good morning! Could you approve the late enrollment request for ICT301 from one of my students?",
                time: "10:28 AM",
                mine: false
            },
            {
                id: "m-2",
                from: "Me",
                text: "Good morning, Sarita. I'll look into it now. What's the student's ID number?",
                time: "10:30 AM",
                mine: true
            },
            {
                id: "m-3",
                from: "Prof. Sarita Koirala",
                text: "It's STU-20262008 — Carla Ramos. She had a valid medical reason for missing the deadline.",
                time: "10:31 AM",
                mine: false
            },
            {
                id: "m-4",
                from: "Me",
                text: "Got it. I'll review her file and get back to you within the hour.",
                time: "10:32 AM",
                mine: true
            }
        ]
    },
    {
        id: "conv-2",
        name: "Bea Tolentino",
        role: "Instructor",
        preview: "Thank you for approving my account.",
        time: "9:15 AM",
        unread: 0,
        initials: "BT",
        color: "bg-purple-500",
        messages: [
            {
                id: "m-201",
                from: "Bea Tolentino",
                text: "Hello Admin, just following up on my instructor onboarding access.",
                time: "9:00 AM",
                mine: false
            },
            {
                id: "m-202",
                from: "Me",
                text: "Hi Bea, your account has been reviewed and approved! You can now log in.",
                time: "9:12 AM",
                mine: true
            },
            {
                id: "m-203",
                from: "Bea Tolentino",
                text: "Thank you for approving my account.",
                time: "9:15 AM",
                mine: false
            }
        ]
    },
    {
        id: "conv-3",
        name: "Karl Navarro",
        role: "Student",
        preview: "When will the enrollment period close?",
        time: "Yesterday",
        unread: 1,
        initials: "KN",
        color: "bg-green-500",
        messages: [
            {
                id: "m-301",
                from: "Karl Navarro",
                text: "Hi, I would like to confirm when will the enrollment period close for T2?",
                time: "Yesterday, 3:15 PM",
                mine: false
            },
            {
                id: "m-302",
                from: "Me",
                text: "Hello Karl, the census date is September 14, 2026. Please complete your enrollment before then.",
                time: "Yesterday, 3:45 PM",
                mine: true
            }
        ]
    },
    {
        id: "conv-4",
        name: "Student Support Desk",
        role: "Support",
        preview: "3 new support tickets this morning.",
        time: "Yesterday",
        unread: 3,
        initials: "SS",
        color: "bg-orange-400",
        messages: [
            {
                id: "m-401",
                from: "Student Support Desk",
                text: "We have received 3 student queries regarding password resets and 2FA.",
                time: "Yesterday, 11:20 AM",
                mine: false
            }
        ]
    },
    {
        id: "conv-5",
        name: "IT Infrastructure",
        role: "Staff",
        preview: "Maintenance completed ahead of schedule.",
        time: "Mon",
        unread: 0,
        initials: "IT",
        color: "bg-gray-500",
        messages: [
            {
                id: "m-501",
                from: "IT Infrastructure",
                text: "Scheduled database backup and index optimization finished successfully.",
                time: "Mon, 4:00 PM",
                mine: false
            }
        ]
    }
];
const INITIAL_ADMIN_CALENDAR_EVENTS = {
    "2026-09-01": [
        {
            id: "ce-1",
            title: "Trimester 2 Begins",
            label: "Trimester 2 Begins",
            date: "2026-09-01",
            category: "Academic Date",
            color: "#1a3a9e",
            time: "8:00 AM",
            description: "Official commencement of academic teaching period for Trimester 2, 2026."
        }
    ],
    "2026-09-02": [
        {
            id: "ce-2",
            title: "Enrollment Opens",
            label: "Enrollment Opens",
            date: "2026-09-02",
            category: "Enrollment",
            color: "#16a34a",
            time: "9:00 AM",
            description: "Online course selection and enrollment portal open for all students."
        }
    ],
    "2026-09-08": [
        {
            id: "ce-8",
            title: "System Audit & Health Review",
            label: "System Audit",
            date: "2026-09-08",
            category: "Academic Date",
            color: "#2563eb",
            time: "2:00 PM",
            description: "Mid-week platform load monitoring and enrollment audit."
        }
    ],
    "2026-09-14": [
        {
            id: "ce-3",
            title: "Census Date — Final Enrollment",
            label: "Census Date",
            date: "2026-09-14",
            category: "Exam",
            color: "#db2777",
            time: "11:59 PM",
            description: "Final date to drop or add units without academic and financial penalty."
        }
    ],
    "2026-09-15": [
        {
            id: "ce-4",
            title: "Assessment 1 Due (All Courses)",
            label: "Assessment 1 Due",
            date: "2026-09-15",
            category: "Assessment",
            color: "#ea580c",
            time: "11:59 PM",
            description: "Submission deadline for Assessment 1 across School of ICT units."
        }
    ],
    "2026-09-18": [
        {
            id: "ce-5",
            title: "Midterm Practical Due — ICT126",
            label: "Midterm Practical Due",
            date: "2026-09-18",
            category: "Assessment",
            color: "#ea580c",
            time: "5:00 PM",
            description: "Hands-on machine learning laboratory assessment submission."
        }
    ],
    "2026-09-21": [
        {
            id: "ce-6",
            title: "Mid-Semester School Break Begins",
            label: "School Break",
            date: "2026-09-21",
            category: "School Break",
            color: "#7c3aed",
            time: "All Day",
            description: "No lectures scheduled. Campus libraries and study areas open."
        }
    ],
    "2026-09-22": [
        {
            id: "ce-7",
            title: "Assessment 2 Due — ICT272",
            label: "Assessment 2 Due",
            date: "2026-09-22",
            category: "Assessment",
            color: "#ea580c",
            time: "11:59 PM",
            description: "Interactive web frontend project milestone deadline."
        }
    ],
    "2026-09-23": [
        {
            id: "ce-9",
            title: "School Break Day 3",
            label: "School Break",
            date: "2026-09-23",
            category: "School Break",
            color: "#7c3aed",
            time: "All Day",
            description: "Recess and independent study period."
        }
    ],
    "2026-09-24": [
        {
            id: "ce-10",
            title: "School Break Day 4",
            label: "School Break",
            date: "2026-09-24",
            category: "School Break",
            color: "#7c3aed",
            time: "All Day",
            description: "Recess and independent study period."
        }
    ],
    "2026-09-25": [
        {
            id: "ce-11",
            title: "Milestone 3 Due — ICT301",
            label: "Milestone 3 Due",
            date: "2026-09-25",
            category: "Assessment",
            color: "#ea580c",
            time: "11:59 PM",
            description: "Final architectural presentation and system defense."
        }
    ],
    "2026-09-28": [
        {
            id: "ce-12",
            title: "Public Holiday — Labour Day",
            label: "Labour Day (Holiday)",
            date: "2026-09-28",
            category: "Public Holiday",
            color: "#059669",
            time: "All Day",
            description: "Official public holiday. Campus administration and facilities closed."
        }
    ],
    "2026-10-05": [
        {
            id: "ce-13",
            title: "Spring Holiday",
            label: "Spring Holiday",
            date: "2026-10-05",
            category: "Public Holiday",
            color: "#059669",
            time: "All Day",
            description: "University holiday observance."
        }
    ],
    "2026-10-15": [
        {
            id: "ce-14",
            title: "Marks Entry Deadline",
            label: "Marks Entry Deadline",
            date: "2026-10-15",
            category: "Academic Date",
            color: "#1a3a9e",
            time: "5:00 PM",
            description: "Instructors must submit midterm assessment marks to registrar."
        }
    ],
    "2026-10-20": [
        {
            id: "ce-15",
            title: "Final Examinations Period",
            label: "Final Exams Period",
            date: "2026-10-20",
            category: "Exam",
            color: "#db2777",
            time: "All Day",
            description: "Formal proctored exam timetable commences."
        }
    ],
    "2026-10-30": [
        {
            id: "ce-16",
            title: "Trimester 2 Teaching Period Ends",
            label: "Trimester 2 Ends",
            date: "2026-10-30",
            category: "Academic Date",
            color: "#1a3a9e",
            time: "5:00 PM",
            description: "Conclusion of 12-week teaching trimester."
        }
    ]
};
const INITIAL_ADMIN_SETTINGS = {
    institutionName: "EduFlex University",
    institutionEmail: "admin@eduflex.edu",
    contactNumber: "+63 2 8888 0000",
    timezone: "Asia/Manila (UTC+8)",
    academicYear: "2026",
    currentSemester: "Trimester 2, 2026",
    semesterStartDate: "2026-09-01",
    semesterEndDate: "2026-11-30",
    enrollmentPeriod: "Sep 1 – Sep 14, 2026",
    emailNotifications: true,
    studentNotifications: true,
    instructorNotifications: true,
    systemAlerts: false,
    passwordPolicy: "Strong (8+ chars, mixed)",
    sessionTimeout: "1 hour",
    twoFactorAuth: false,
    loginSecurity: true,
    language: "English (US)",
    dateFormat: "MMM D, YYYY",
    theme: "Light"
};
}),
"[project]/src/auth.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    if ("TURBOPACK compile-time truthy", 1) return SEED_ACCOUNTS;
    //TURBOPACK unreachable
    ;
}
function registerUser(account) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const accounts = undefined;
    const exists = undefined;
}
function loginUser(email, password) {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
    const accounts = undefined;
    const match = undefined;
}
function setSessionUser(user) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function getSessionUser() {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
}
function clearSession() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function getInitials(name) {
    return name.split(" ").filter(Boolean).slice(0, 2).map((w)=>w[0].toUpperCase()).join("");
}
}),
];

//# sourceMappingURL=src_1-0-bcw._.js.map