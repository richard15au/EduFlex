// ── Admin Data Types & Initial Mock Datasets ──────────────────────────────────

export type AdminRole = "Student" | "Instructor" | "Admin";
export type AdminUserStatus = "Active" | "Inactive" | "Pending";

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: AdminRole;
  status: AdminUserStatus;
  lastActive: string;
  joined: string;
  avatar?: string;
  program?: string;
  department?: string;
  phone?: string;
  courses?: string[];
}

export interface AdminPendingItem {
  id: string;
  name: string;
  initials: string;
  role: AdminRole;
  action: string;
  email: string;
  submitted: string;
}

export interface AdminCourse {
  code: string;
  name: string;
  faculty: string;
  instructor: string;
  students: number;
  capacity: number;
  semester: string;
  status: "Active" | "Draft" | "Archived" | "Completed";
  description?: string;
}

export interface AdminEnrollmentRecord {
  id: string;
  studentName: string;
  studentId: string;
  courseName: string;
  courseCode: string;
  semester: string;
  date: string;
  status: "Enrolled" | "Dropped" | "Pending" | "Completed";
}

export interface AdminAnnouncementItem {
  id: string;
  title: string;
  desc: string;
  date: string;
  author: string;
  audience: "All Users" | "Students" | "Instructors";
  status: "Published" | "Draft" | "Scheduled";
  course?: string;
}

export interface AdminChatMessage {
  id: string;
  from: string;
  text: string;
  time: string;
  mine: boolean;
}

export interface AdminConversation {
  id: string;
  name: string;
  role: string;
  preview: string;
  time: string;
  unread: number;
  initials: string;
  color: string;
  messages: AdminChatMessage[];
}

export interface AdminCalendarEvent {
  id: string;
  title: string;
  label: string;
  date: string; // YYYY-MM-DD
  category: "Academic Date" | "Enrollment" | "Assessment" | "Quiz" | "School Break" | "Public Holiday" | "Exam";
  color: string;
  time?: string;
  description?: string;
}

export interface AdminSystemSettingsData {
  institutionName: string;
  institutionEmail: string;
  contactNumber: string;
  timezone: string;
  academicYear: string;
  currentSemester: string;
  semesterStartDate: string;
  semesterEndDate: string;
  enrollmentPeriod: string;
  emailNotifications: boolean;
  studentNotifications: boolean;
  instructorNotifications: boolean;
  systemAlerts: boolean;
  passwordPolicy: string;
  sessionTimeout: string;
  twoFactorAuth: boolean;
  loginSecurity: boolean;
  language: string;
  dateFormat: string;
  theme: string;
}

// ── Initial Mock Data ─────────────────────────────────────────────────────────

export const INITIAL_ADMIN_USERS: AdminUser[] = [
  {
    id: "20027782",
    name: "Yusuf Rana Magar",
    email: "20027782@eduflex.richv.win",
    role: "Student",
    status: "Active",
    lastActive: "Today, 10:45 AM",
    joined: "Feb 15, 2026",
    program: "Bachelor of Information Technology",
    phone: "+61 400 111 222",
    courses: ["ICT301", "ICT302"],
  },
  {
    id: "20030988",
    name: "Richard Vitug",
    email: "20030988@eduflex.richv.win",
    role: "Student",
    status: "Active",
    lastActive: "Just now",
    joined: "Feb 15, 2026",
    program: "Bachelor of Information Technology",
    phone: "+61 400 333 444",
    courses: ["ICT301", "ICT302"],
  },
  {
    id: "20035294",
    name: "Sadia Binte Mahmud",
    email: "20035294@eduflex.richv.win",
    role: "Student",
    status: "Active",
    lastActive: "Today, 09:15 AM",
    joined: "Feb 15, 2026",
    program: "Bachelor of Information Technology",
    phone: "+61 400 555 666",
    courses: ["ICT301", "ICT302"],
  },
  {
    id: "20033316",
    name: "Anita Humagain",
    email: "anita.humagain@eduflex.richv.win",
    role: "Instructor",
    status: "Active",
    lastActive: "Today, 11:30 AM",
    joined: "Feb 01, 2026",
    department: "School of Information and Communications Technology",
    phone: "+61 400 777 888",
    courses: ["ICT301", "ICT302"],
  },
  {
    id: "20024439",
    name: "Rojit Munankarmi",
    email: "a.rojit.munankarmi@eduflex.richv.win",
    role: "Admin",
    status: "Active",
    lastActive: "Just now",
    joined: "Jan 10, 2026",
    department: "System Administration & Academic Operations",
    phone: "+61 400 999 000",
    courses: [],
  },
];

export const INITIAL_ADMIN_PENDING: AdminPendingItem[] = [];

export const INITIAL_ADMIN_COURSES: AdminCourse[] = [
  { code: "DAT301", name: "Data Analytics", faculty: "School of ICT", instructor: "Anita Humagain", students: 0, capacity: 120, semester: "T2 2026", status: "Active" },
  { code: "ICT301", name: "Information Technology Project 1", faculty: "School of ICT", instructor: "Anita Humagain", students: 3, capacity: 50, semester: "T2 2026", status: "Completed", description: "Capstone systems development and project management course for final year IT students (Part 1 - Architecture & Scope)." },
  { code: "ICT302", name: "Information Technology Project 2", faculty: "School of ICT", instructor: "Anita Humagain", students: 3, capacity: 50, semester: "T3 2026", status: "Active", description: "Capstone systems implementation, agile delivery, full-stack verification, and final presentation (Part 2)." },
];

export const INITIAL_ADMIN_ENROLLMENTS: AdminEnrollmentRecord[] = [
  { id: "ENR-001", studentName: "Yusuf Rana Magar",   studentId: "20027782", courseName: "Information Technology Project 1", courseCode: "ICT301", semester: "T2 2026", date: "Feb 15, 2026", status: "Completed" },
  { id: "ENR-002", studentName: "Yusuf Rana Magar",   studentId: "20027782", courseName: "Information Technology Project 2", courseCode: "ICT302", semester: "T3 2026", date: "Aug 15, 2026", status: "Enrolled" },
  { id: "ENR-003", studentName: "Richard Vitug",       studentId: "20030988", courseName: "Information Technology Project 1", courseCode: "ICT301", semester: "T2 2026", date: "Feb 15, 2026", status: "Completed" },
  { id: "ENR-004", studentName: "Richard Vitug",       studentId: "20030988", courseName: "Information Technology Project 2", courseCode: "ICT302", semester: "T3 2026", date: "Aug 15, 2026", status: "Enrolled" },
  { id: "ENR-005", studentName: "Sadia Binte Mahmud", studentId: "20035294", courseName: "Information Technology Project 1", courseCode: "ICT301", semester: "T2 2026", date: "Feb 15, 2026", status: "Completed" },
  { id: "ENR-006", studentName: "Sadia Binte Mahmud", studentId: "20035294", courseName: "Information Technology Project 2", courseCode: "ICT302", semester: "T3 2026", date: "Aug 15, 2026", status: "Enrolled" },
];

export const INITIAL_ADMIN_ANNOUNCEMENTS: AdminAnnouncementItem[] = [
  { id: "ANN-001", title: "Trimester T326 Important Notice", desc: "All students and faculty are reminded of the key academic dates for Trimester 3, 2026 including enrollment deadlines.", date: "Sep 2, 2026",  author: "Admin Office",  audience: "All Users",    status: "Published" },
  { id: "ANN-002", title: "System Maintenance Scheduled",   desc: "The LMS platform will undergo scheduled maintenance on September 10, 2026 from 11 PM to 2 AM.",                        date: "Sep 1, 2026",  author: "IT Department", audience: "All Users",    status: "Scheduled" },
  { id: "ANN-003", title: "Assessment Submission Reminder", desc: "Reminder: Assessment 1 submissions close on September 15, 2026. Late submissions will not be accepted.",               date: "Aug 31, 2026", author: "Academic Office",audience: "Students",     status: "Published" },
  { id: "ANN-004", title: "Enrollment Period Opens",         desc: "The enrollment period for Trimester 3, 2026 is now open. Students may enroll via the student portal.",                  date: "Aug 28, 2026", author: "Registrar",     audience: "Students",     status: "Published" },
  { id: "ANN-005", title: "Faculty Training Workshop",       desc: "Mandatory training workshop for all instructors on the updated LMS features scheduled for September 5, 2026.",          date: "Aug 27, 2026", author: "Admin Office",  audience: "Instructors",  status: "Draft" },
];

export const INITIAL_ADMIN_CONVERSATIONS: AdminConversation[] = [
  {
    id: "conv-1",
    name: "Anita Humagain",
    role: "Instructor",
    preview: "ICT302 Sprint 1 submissions are ready for review.",
    time: "10:32 AM",
    unread: 1,
    initials: "AH",
    color: "bg-blue-500",
    messages: [
      { id: "m-1", from: "Anita Humagain", text: "Good morning Rojit! All students have successfully enrolled in ICT302.", time: "10:28 AM", mine: false },
      { id: "m-2", from: "Me", text: "Good morning Anita. Great to hear! Both ICT301 and ICT302 records are synced in Neon.", time: "10:30 AM", mine: true },
      { id: "m-3", from: "Anita Humagain", text: "ICT302 Sprint 1 submissions are ready for review.", time: "10:32 AM", mine: false },
    ],
  },
  {
    id: "conv-2",
    name: "Richard Vitug",
    role: "Student",
    preview: "Thank you for updating our student portal domain.",
    time: "9:15 AM",
    unread: 0,
    initials: "RV",
    color: "bg-purple-500",
    messages: [
      { id: "m-201", from: "Richard Vitug", text: "Hi Rojit, confirming the new domain eduflex.richv.win is working smoothly.", time: "9:00 AM", mine: false },
      { id: "m-202", from: "Me", text: "Hi Richard, all accounts and subjects ICT301 and ICT302 are active.", time: "9:12 AM", mine: true },
      { id: "m-203", from: "Richard Vitug", text: "Thank you for updating our student portal domain.", time: "9:15 AM", mine: false },
    ],
  },
  {
    id: "conv-3",
    name: "Yusuf Rana Magar",
    role: "Student",
    preview: "ICT301 completed status verified.",
    time: "Yesterday",
    unread: 0,
    initials: "YM",
    color: "bg-green-500",
    messages: [
      { id: "m-301", from: "Yusuf Rana Magar", text: "Hi Rojit, my ICT301 grade and completed status show correctly on the dashboard.", time: "Yesterday, 3:15 PM", mine: false },
      { id: "m-302", from: "Me", text: "Excellent! Let us know if you need anything else.", time: "Yesterday, 3:45 PM", mine: true },
    ],
  },
];

export const INITIAL_ADMIN_CALENDAR_EVENTS: Record<string, AdminCalendarEvent[]> = {
  "2026-09-01": [{ id: "ce-1", title: "Trimester 3 Begins", label: "Trimester 3 Begins", date: "2026-09-01", category: "Academic Date", color: "#1a3a9e", time: "8:00 AM", description: "Official commencement of academic teaching period for Trimester 3, 2026." }],
  "2026-09-02": [{ id: "ce-2", title: "Enrollment Opens", label: "Enrollment Opens", date: "2026-09-02", category: "Enrollment", color: "#16a34a", time: "9:00 AM", description: "Online course selection and enrollment portal open for all students." }],
  "2026-09-08": [{ id: "ce-8", title: "System Audit & Health Review", label: "System Audit", date: "2026-09-08", category: "Academic Date", color: "#2563eb", time: "2:00 PM", description: "Mid-week platform load monitoring and enrollment audit." }],
  "2026-09-14": [{ id: "ce-3", title: "Census Date — Final Enrollment", label: "Census Date", date: "2026-09-14", category: "Exam", color: "#db2777", time: "11:59 PM", description: "Final date to drop or add units without academic and financial penalty." }],
  "2026-09-15": [{ id: "ce-4", title: "Assessment 1 Due (All Courses)", label: "Assessment 1 Due", date: "2026-09-15", category: "Assessment", color: "#ea580c", time: "11:59 PM", description: "Submission deadline for Assessment 1 across School of ICT units." }],
  "2026-09-18": [{ id: "ce-5", title: "Assessment 1: Weekly Progress Review — ICT302", label: "Assessment 1 Review", date: "2026-09-18", category: "Assessment", color: "#ea580c", time: "5:00 PM", description: "Sprint progress check and technical evaluation for ICT302 Capstone." }],
  "2026-09-21": [{ id: "ce-6", title: "Mid-Trimester School Break Begins", label: "School Break", date: "2026-09-21", category: "School Break", color: "#7c3aed", time: "All Day", description: "No lectures scheduled. Campus libraries and study areas open." }],
  "2026-09-22": [{ id: "ce-7", title: "Weekly Progress Report 4 Due — ICT302", label: "WPR 4 Due", date: "2026-09-22", category: "Assessment", color: "#ea580c", time: "11:59 PM", description: "Automated testing suite and accessibility verification deliverable." }],
  "2026-09-23": [{ id: "ce-9", title: "School Break Day 3", label: "School Break", date: "2026-09-23", category: "School Break", color: "#7c3aed", time: "All Day", description: "Recess and independent study period." }],
  "2026-09-24": [{ id: "ce-10", title: "School Break Day 4", label: "School Break", date: "2026-09-24", category: "School Break", color: "#7c3aed", time: "All Day", description: "Recess and independent study period." }],
  "2026-09-25": [{ id: "ce-11", title: "Milestone 3 Due — ICT301", label: "Milestone 3 Due", date: "2026-09-25", category: "Assessment", color: "#ea580c", time: "11:59 PM", description: "Final architectural presentation and system defense." }],
  "2026-09-28": [{ id: "ce-12", title: "Public Holiday — Labour Day", label: "Labour Day (Holiday)", date: "2026-09-28", category: "Public Holiday", color: "#059669", time: "All Day", description: "Official public holiday. Campus administration and facilities closed." }],
  "2026-10-05": [{ id: "ce-13", title: "Spring Holiday", label: "Spring Holiday", date: "2026-10-05", category: "Public Holiday", color: "#059669", time: "All Day", description: "University holiday observance." }],
  "2026-10-15": [{ id: "ce-14", title: "Marks Entry Deadline", label: "Marks Entry Deadline", date: "2026-10-15", category: "Academic Date", color: "#1a3a9e", time: "5:00 PM", description: "Instructors must submit midterm assessment marks to registrar." }],
  "2026-10-20": [{ id: "ce-15", title: "Final Examinations Period", label: "Final Exams Period", date: "2026-10-20", category: "Exam", color: "#db2777", time: "All Day", description: "Formal proctored exam timetable commences." }],
  "2026-10-30": [{ id: "ce-16", title: "Trimester 3 Teaching Period Ends", label: "Trimester 3 Ends", date: "2026-10-30", category: "Academic Date", color: "#1a3a9e", time: "5:00 PM", description: "Conclusion of 12-week teaching trimester." }],
};

export const INITIAL_ADMIN_SETTINGS: AdminSystemSettingsData = {
  institutionName: "EduFlex University",
  institutionEmail: "admin@eduflex.richv.win",
  contactNumber: "+63 2 8888 0000",
  timezone: "Asia/Manila (UTC+8)",
  academicYear: "2026",
  currentSemester: "Trimester 3, 2026",
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
  theme: "Light",
};

