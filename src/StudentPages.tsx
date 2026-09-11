"use client";

import { useState, useRef, useEffect } from "react";

// ── Shared Icons ──────────────────────────────────────────────────────────────
const IconChevronLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);
const IconChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);
const IconChevronDown = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
const IconSend = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);
const IconPaperclip = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
  </svg>
);
const IconSearch = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const IconEdit = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);
const IconBell = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" />
  </svg>
);
const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const IconGlobe = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);
const IconUser = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
  </svg>
);
const IconKey = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
  </svg>
);
const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
const IconCalendar = ({ className = "w-4 h-4" }: { className?: string } = {}) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const IconVideo = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <polygon points="23 7 16 12 23 17 23 7" />
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  </svg>
);
const IconFileText = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);
const IconDownload = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);
const IconCheckCircle = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);
const IconCopy = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
  </svg>
);
const IconMapPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const IconAward = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);
const IconExternalLink = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);
const IconX = ({ className = "w-4 h-4" }: { className?: string } = {}) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// ── Page Header component ─────────────────────────────────────────────────────
function PageHeader({ title, subtitle, right }: { title: string; subtitle: string; right?: React.ReactNode }) {
  return (
    <div className="flex items-end justify-between mb-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-1">{title}</h1>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
      {right}
    </div>
  );
}

// ── Toggle Switch ─────────────────────────────────────────────────────────────
function Toggle({ on, onChange }: { on: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none ${on ? "bg-blue-600" : "bg-gray-200"}`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform duration-200 ${on ? "translate-x-5" : "translate-x-0.5"}`}
      />
    </button>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// GRADES PAGE
// ─────────────────────────────────────────────────────────────────────────────
interface GradeRow {
  course: string;
  code: string;
  assessment: string;
  score: number;
  max: number;
  grade: string;
  status: "Released" | "Pending" | "Not Submitted";
}

export const gradeRows: GradeRow[] = [
  { course: "Information Technology Project 1", code: "ICT301", assessment: "Assessment 1",    score: 8,  max: 10, grade: "A",  status: "Released" },
  { course: "Information Technology Project 1", code: "ICT301", assessment: "Assessment 2",    score: 0,  max: 30, grade: "—",  status: "Pending" },
  { course: "Information Technology Project 1", code: "ICT301", assessment: "Project Report",  score: 0,  max: 60, grade: "—",  status: "Not Submitted" },
  { course: "Web Design and Development",       code: "ICT272", assessment: "Quiz 1",           score: 32, max: 35, grade: "A+", status: "Released" },
  { course: "Web Design and Development",       code: "ICT272", assessment: "Quiz 2",           score: 28, max: 35, grade: "B+", status: "Released" },
  { course: "Web Design and Development",       code: "ICT272", assessment: "Assessment 2",    score: 0,  max: 30, grade: "—",  status: "Pending" },
  { course: "Artificial Intelligence",          code: "ICT126", assessment: "Lab Report 1",    score: 18, max: 20, grade: "A",  status: "Released" },
  { course: "Artificial Intelligence",          code: "ICT126", assessment: "Mid-Semester Test",score: 0, max: 40, grade: "—",  status: "Not Submitted" },
];

const gradeColors: Record<string, string> = {
  "HD": "text-emerald-700 bg-emerald-50 border-emerald-200",
  "D":  "text-blue-700 bg-blue-50 border-blue-200",
  "A+": "text-emerald-700 bg-emerald-50 border-emerald-200",
  "A":  "text-blue-700 bg-blue-50 border-blue-200",
  "B+": "text-indigo-700 bg-indigo-50 border-indigo-200",
  "B":  "text-violet-700 bg-violet-50 border-violet-200",
  "—":  "text-gray-400 bg-gray-50 border-gray-200",
};

const statusColors: Record<string, string> = {
  Released:      "text-green-700 bg-green-50 border-green-100",
  Pending:       "text-orange-600 bg-orange-50 border-orange-100",
  "Not Submitted": "text-gray-400 bg-gray-50 border-gray-200",
};

interface SemesterGradeSummary {
  gpa: string;
  gpaSub: string;
  average: string;
  avgSub: string;
  completed: string;
  compSub: string;
  credits: string;
  creditsSub: string;
}

interface SemesterGradeData {
  id: string;
  name: string;
  summary: SemesterGradeSummary;
  rows: GradeRow[];
}

const semesterGradeMap: Record<string, SemesterGradeData> = {
  "Semester T226": {
    id: "Semester T226",
    name: "Semester T226",
    summary: {
      gpa: "3.72",
      gpaSub: "This Semester",
      average: "81.4%",
      avgSub: "Across assessments",
      completed: "20",
      compSub: "All time",
      credits: "96",
      creditsSub: "of 120 required",
    },
    rows: gradeRows,
  },
  "Semester T225": {
    id: "Semester T225",
    name: "Semester T225",
    summary: {
      gpa: "3.85",
      gpaSub: "Semester T225",
      average: "84.5%",
      avgSub: "Across assessments",
      completed: "20",
      compSub: "All time",
      credits: "84",
      creditsSub: "of 120 required",
    },
    rows: [
      { course: "Introduction to Programming (Python)", code: "ICT101", assessment: "Assignment 1: Algorithms & Structured Programming", score: 92, max: 100, grade: "A+", status: "Released" },
      { course: "Introduction to Programming (Python)", code: "ICT101", assessment: "Assignment 2: Python Data Analytics & Automation", score: 86, max: 100, grade: "A", status: "Released" },
      { course: "Introduction to Programming (Python)", code: "ICT101", assessment: "Formative Quizzes & Code Exercises", score: 37, max: 40, grade: "A+", status: "Released" },
      { course: "Introduction to Programming (Python)", code: "ICT101", assessment: "Final Examination", score: 88, max: 100, grade: "A", status: "Released" },
      { course: "Discrete Mathematics for IT", code: "ICT102", assessment: "Problem Set 1: Propositional Logic & Truth Tables", score: 84, max: 100, grade: "A", status: "Released" },
      { course: "Discrete Mathematics for IT", code: "ICT102", assessment: "Problem Set 2: Graph Theory & Combinatorics", score: 80, max: 100, grade: "B+", status: "Released" },
      { course: "Discrete Mathematics for IT", code: "ICT102", assessment: "Mid-Term Test", score: 33, max: 40, grade: "A", status: "Released" },
      { course: "Discrete Mathematics for IT", code: "ICT102", assessment: "Final Examination", score: 81, max: 100, grade: "A", status: "Released" },
    ],
  },
  "Semester T224": {
    id: "Semester T224",
    name: "Semester T224",
    summary: {
      gpa: "—",
      gpaSub: "No grades recorded",
      average: "—",
      avgSub: "No assessments",
      completed: "16",
      compSub: "Prior credits",
      credits: "72",
      creditsSub: "of 120 required",
    },
    rows: [],
  },
};

const semesterOptions = [
  { id: "Semester T226", label: "Semester T226" },
  { id: "Semester T225", label: "Semester T225" },
  { id: "Semester T224", label: "Semester T224" },
];

export function GradesPage() {
  const [selectedSemester, setSelectedSemester] = useState("Semester T226");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const currentData = semesterGradeMap[selectedSemester] ?? semesterGradeMap["Semester T226"];

  const summary = [
    { label: "GPA",               value: currentData.summary.gpa,       sub: currentData.summary.gpaSub },
    { label: "Overall Average",   value: currentData.summary.average,   sub: currentData.summary.avgSub },
    { label: "Completed Courses", value: currentData.summary.completed, sub: currentData.summary.compSub },
    { label: "Credits Earned",    value: currentData.summary.credits,   sub: currentData.summary.creditsSub },
  ];

  const courseColors: Record<string, string> = {
    ICT301: "#2563eb",
    ICT272: "#16a34a",
    ICT126: "#db2777",
    ICT101: "#0d9488",
    ICT102: "#7c3aed",
  };

  const grouped = currentData.rows.reduce<Record<string, GradeRow[]>>((acc, r) => {
    (acc[r.code] = acc[r.code] || []).push(r);
    return acc;
  }, {});

  return (
    <div className="p-7">
      <PageHeader
        title="Grades"
        subtitle="View your academic performance and course results"
        right={
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              aria-haspopup="listbox"
              aria-expanded={isDropdownOpen}
              className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-700 font-medium shadow-sm hover:border-gray-300 transition-colors cursor-pointer"
            >
              <span>{selectedSemester}</span>
              <IconChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {isDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setIsDropdownOpen(false)}
                />
                <div
                  role="listbox"
                  className="absolute right-0 mt-1.5 w-44 bg-white border border-gray-200 rounded-xl shadow-lg py-1.5 z-20 overflow-hidden"
                >
                  {semesterOptions.map((sem) => {
                    const isSelected = sem.id === selectedSemester;
                    return (
                      <button
                        key={sem.id}
                        type="button"
                        role="option"
                        aria-selected={isSelected}
                        onClick={() => {
                          setSelectedSemester(sem.id);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3.5 py-2 text-sm transition-colors flex items-center justify-between ${
                          isSelected
                            ? "bg-blue-50 text-blue-700 font-semibold"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <span>{sem.label}</span>
                        {isSelected && (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 text-blue-600 shrink-0">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        }
      />

      {/* Summary row */}
      <div className="grid grid-cols-4 gap-5 mb-7">
        {summary.map((s) => (
          <div key={s.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{s.label}</p>
            <p className="text-3xl font-extrabold text-gray-900 leading-none mb-1">{s.value}</p>
            <p className="text-xs text-gray-400">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Academic results by course OR Empty state */}
      {currentData.rows.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-12 text-center flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-400 mb-3">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6 text-gray-400">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="9" y1="15" x2="15" y2="15" />
            </svg>
          </div>
          <h3 className="text-base font-bold text-gray-900 mb-1">No grade data available for this semester</h3>
          <p className="text-xs text-gray-400 max-w-md">
            There are no recorded grades or assessment results available for {selectedSemester}. Please select another semester to view published academic records.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {Object.entries(grouped).map(([code, rows]) => {
            const courseName = rows[0].course;
            const accent = courseColors[code] ?? "#2563eb";
            const released = rows.filter((r) => r.status === "Released");
            const earned = released.reduce((a, r) => a + r.score, 0);
            const total  = released.reduce((a, r) => a + r.max, 0);
            return (
              <div key={code} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                {/* Course header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100" style={{ background: `${accent}08` }}>
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full shrink-0" style={{ background: accent }} />
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest mr-2" style={{ color: accent }}>{code}</span>
                      <span className="text-sm font-semibold text-gray-800">{courseName}</span>
                    </div>
                  </div>
                  {total > 0 && (
                    <span className="text-sm font-bold" style={{ color: accent }}>{earned}/{total} released</span>
                  )}
                </div>

                {/* Table header */}
                <div className="grid px-6 py-2.5 bg-gray-50 border-b border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-wider gap-4"
                  style={{ gridTemplateColumns: "2fr 1fr 80px 80px 100px" }}>
                  {["Assessment", "Score", "/ Max", "Grade", "Status"].map((h) => (
                    <span key={h}>{h}</span>
                  ))}
                </div>

                {/* Rows */}
                {rows.map((r, i) => {
                  const pct = r.max > 0 && r.status === "Released" ? Math.round((r.score / r.max) * 100) : 0;
                  return (
                    <div
                      key={i}
                      className="grid items-center px-6 py-4 border-b border-gray-50 last:border-0 hover:bg-blue-50/20 transition-colors gap-4"
                      style={{ gridTemplateColumns: "2fr 1fr 80px 80px 100px" }}
                    >
                      <span className="text-sm font-medium text-gray-800">{r.assessment}</span>
                      <div className="min-w-0">
                        {r.status === "Released" ? (
                          <>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-bold text-gray-800">{r.score}</span>
                            </div>
                            <div className="w-full h-1.5 rounded-full bg-gray-100 overflow-hidden">
                              <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, background: accent }} />
                            </div>
                          </>
                        ) : (
                          <span className="text-sm text-gray-300">—</span>
                        )}
                      </div>
                      <span className="text-sm text-gray-500">{r.max}</span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-lg border w-fit ${gradeColors[r.grade] ?? gradeColors["—"]}`}>{r.grade}</span>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border w-fit ${statusColors[r.status]}`}>{r.status}</span>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CALENDAR PAGE (VIEW-ONLY ACADEMIC CALENDAR)
// ─────────────────────────────────────────────────────────────────────────────
export interface CalEvent {
  id: string;
  day: number;
  days?: number[];
  label: string;
  eventType: "Assessment" | "Quiz" | "Exam" | "School Break" | "Holiday";
  category?: "assignment" | "quiz";
  courseCode?: string;
  courseName?: string;
  fullTitle?: string;
  dateFormatted: string;
  description: string;
  info?: string;
  color: string;
  dot: string;
  badgeColor: string;
  time?: string;
  weight?: string;
  status?: string;
  totalMarks?: string | number;
  timeLimit?: string;
  questionsCount?: number;
  attemptsAllowed?: number;
  instructions?: { overview: string; tasks: { title: string; desc: string }[] };
  quizInstructions?: string[];
  topics?: string[];
  resources?: { name: string; size: string; type: string }[];
  rubric?: { criterion: string; maxPts: number; desc: string }[];
}

export const calEvents: CalEvent[] = [
  {
    id: "cal-event-1",
    day: 3,
    label: "Assessment 2 Due",
    eventType: "Assessment",
    category: "assignment",
    courseCode: "ICT301",
    courseName: "Information Technology Project 1",
    fullTitle: "ICT301 — Project Deliverables & Architecture Specification",
    dateFormatted: "September 3, 2026",
    description: "Submit comprehensive project deliverables including system architecture diagrams, database models, implementation source code, and milestone progress report.",
    info: "Due by 11:59 PM AEST · 30% weighting",
    color: "bg-amber-50 text-amber-800 border-amber-200",
    dot: "bg-amber-500",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
  },
  {
    id: "cal-event-2",
    day: 7,
    label: "Holiday",
    eventType: "Holiday",
    fullTitle: "Public Holiday — Labour Day Observance",
    dateFormatted: "September 7, 2026",
    description: "Public holiday observance. University closed, all lectures, tutorials, and academic services suspended.",
    info: "Public Holiday · No classes scheduled · University closed",
    color: "bg-sky-50 text-sky-800 border-sky-200",
    dot: "bg-sky-500",
    badgeColor: "bg-sky-100 text-sky-800 border-sky-200",
  },
  {
    id: "cal-event-3",
    day: 15,
    label: "Lab Report 1 Due",
    eventType: "Assessment",
    category: "assignment",
    courseCode: "ICT126",
    courseName: "Artificial Intelligence",
    fullTitle: "ICT126 — Lab Report 1: Perceptrons & Single-Layer Networks",
    dateFormatted: "September 15, 2026",
    description: "Implement single-layer perceptron models in Python, evaluate linear classification boundaries, and submit convergence logs and analysis.",
    info: "Due by 11:59 PM AEST · 20% weighting",
    color: "bg-rose-50 text-rose-800 border-rose-200",
    dot: "bg-rose-500",
    badgeColor: "bg-rose-100 text-rose-800 border-rose-200",
  },
  {
    id: "cal-event-4",
    day: 18,
    label: "Mid-Semester Exam",
    eventType: "Exam",
    courseCode: "ICT126",
    courseName: "Artificial Intelligence",
    fullTitle: "ICT126 — Mid-Semester Examination: Core AI & Search Heuristics",
    dateFormatted: "September 18, 2026",
    description: "Proctored mid-semester examination covering Units 1–5: Search algorithms, heuristics, knowledge representation, and neural network foundations.",
    info: "10:00 AM – 12:00 PM AEST (2 Hours) · Proctored Online / Examination Hall B",
    color: "bg-red-50 text-red-800 border-red-200",
    dot: "bg-red-500",
    badgeColor: "bg-red-100 text-red-800 border-red-200",
  },
  {
    id: "cal-event-5",
    day: 21,
    days: [21, 22, 23, 24, 25],
    label: "School Break",
    eventType: "School Break",
    fullTitle: "Mid-Semester Recess & Study Break",
    dateFormatted: "September 21 – September 25, 2026",
    description: "No classes scheduled. Mid-semester academic recess and independent study week.",
    info: "Duration: 5 days (Monday – Friday) · Campus libraries and study spaces open",
    color: "bg-emerald-50 text-emerald-800 border-emerald-200",
    dot: "bg-emerald-500",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
  },
  {
    id: "cal-event-6",
    day: 29,
    label: "Quiz 2 – ICT272",
    eventType: "Quiz",
    category: "quiz",
    courseCode: "ICT272",
    courseName: "Web Design and Development",
    fullTitle: "ICT272 — Web Design and Development",
    dateFormatted: "September 29, 2026",
    description: "Online quiz assessment covering DOM manipulation, Fetch API, asynchronous JavaScript, and React component state lifecycles.",
    info: "Available until 11:59 PM AEST · 30 Mins time limit · 5% weighting",
    color: "bg-indigo-50 text-indigo-800 border-indigo-200",
    dot: "bg-indigo-500",
    badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
  },
];
// ── CALENDAR PAGE COMPONENT ──────────────────────────────────────────────────

export function CalendarPage() {
  const [monthOffset, setMonthOffset] = useState(0);

  const baseYear = 2026;
  const baseMonth = 8; // September (0-indexed)
  const date = new Date(baseYear, baseMonth + monthOffset, 1);
  const year = date.getFullYear();
  const month = date.getMonth();
  const monthName = date.toLocaleString("default", { month: "long", year: "numeric" });

  const firstDay = (new Date(year, month, 1).getDay() + 6) % 7; // Mon=0
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = monthOffset === 0 ? 7 : -1;

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  // Single shared mock data source for calendar cells and upcoming list
  const eventsForDay = (d: number) =>
    monthOffset === 0
      ? calEvents.filter((e) => (e.days ? e.days.includes(d) : e.day === d))
      : [];

  const upcomingEvents = monthOffset === 0 ? calEvents : [];

  return (
    <div className="p-7">
      <PageHeader
        title="Calendar"
        subtitle="Keep track of your assessments, quizzes, exams, and important academic dates"
        right={
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMonthOffset((o) => o - 1)}
              className="p-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 transition-colors shadow-sm cursor-pointer"
            >
              <IconChevronLeft />
            </button>
            <span className="text-sm font-semibold text-gray-800 min-w-[140px] text-center">{monthName}</span>
            <button
              onClick={() => setMonthOffset((o) => o + 1)}
              className="p-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 transition-colors shadow-sm cursor-pointer"
            >
              <IconChevronRight />
            </button>
          </div>
        }
      />

      {/* Legend bar for clear visual distinction */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs font-medium text-gray-600 bg-white px-4 py-2.5 rounded-xl border border-gray-100 shadow-xs mb-4">
        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Legend:</span>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
          <span className="text-gray-700">Assessments</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
          <span className="text-gray-700">Quizzes</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <span className="text-gray-700">Exams</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          <span className="text-gray-700">School Breaks</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
          <span className="text-gray-700">Holidays</span>
        </div>
      </div>

      {/* Calendar grid (View-Only) */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
        {/* Day headers */}
        <div className="grid grid-cols-7 border-b border-gray-100 bg-gray-50/50">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
            <div key={d} className="py-3 text-center text-[11px] font-bold text-gray-400 uppercase tracking-wider">
              {d}
            </div>
          ))}
        </div>

        {/* Cells */}
        <div className="grid grid-cols-7">
          {cells.map((d, i) => {
            const events = d ? eventsForDay(d) : [];
            const isToday = d === today;
            return (
              <div
                key={i}
                className={`min-h-[96px] p-2 border-b border-r border-gray-100 last:border-r-0 ${!d ? "bg-gray-50/50" : "bg-white"} ${i % 7 === 6 ? "border-r-0" : ""}`}
              >
                {d && (
                  <>
                    <span
                      className={`inline-flex w-7 h-7 items-center justify-center rounded-full text-sm font-semibold mb-1 ${isToday ? "text-white" : "text-gray-700"}`}
                      style={isToday ? { background: "#1a3a9e" } : {}}
                    >
                      {d}
                    </span>
                    <div className="space-y-1">
                      {events.map((ev, ei) => (
                        <div
                          key={ei}
                          className={`w-full text-left text-[10px] font-semibold px-1.5 py-0.5 rounded border truncate select-none ${ev.color}`}
                        >
                          {ev.label}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Upcoming Academic Events (View-Only Details) */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-base font-bold text-gray-800">Upcoming Academic Events</h2>
            <p className="text-xs text-gray-500 mt-0.5">Important academic dates, assessment deadlines, exams, and breaks for {monthName}</p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
            {upcomingEvents.length} events scheduled
          </span>
        </div>

        {upcomingEvents.length === 0 ? (
          <div className="text-center py-8 text-gray-400 text-xs">
            No academic events scheduled for this month.
          </div>
        ) : (
          <div className="space-y-3">
            {upcomingEvents.map((ev) => (
              <div
                key={ev.id}
                className="p-4 rounded-xl border border-gray-100 bg-gray-50/40"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${ev.dot}`} />
                    <h3 className="text-sm font-bold text-gray-900">{ev.label}</h3>
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${ev.badgeColor}`}>
                      {ev.eventType}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 bg-white px-2.5 py-1 rounded-lg border border-gray-200/70 self-start shadow-xs">
                    <IconCalendar className="w-3.5 h-3.5 text-gray-400" />
                    <span>{ev.dateFormatted}</span>
                  </div>
                </div>

                {ev.courseCode ? (
                  <p className="text-xs font-semibold text-blue-900 mb-1.5">
                    {ev.courseCode} — {ev.courseName || ev.fullTitle}
                  </p>
                ) : ev.fullTitle && ev.fullTitle !== ev.label ? (
                  <p className="text-xs font-semibold text-gray-700 mb-1.5">
                    {ev.fullTitle}
                  </p>
                ) : null}

                <p className="text-xs text-gray-600 mb-2 leading-relaxed">
                  {ev.description}
                </p>

                {ev.info && (
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-medium text-gray-500 bg-white px-2.5 py-1 rounded-md border border-gray-200/60 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                    <span>{ev.info}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ANNOUNCEMENTS PAGE
// ─────────────────────────────────────────────────────────────────────────────
export interface Announcement {
  id: number;
  title: string;
  description: string;
  fullContent?: string[];
  date: string;
  category: string;
  course?: string;
  courseName?: string;
  important: boolean;
  unread: boolean;
  relevantDate?: string;
  author?: {
    name: string;
    role: string;
  };
  attachments?: {
    name: string;
    size: string;
  }[];
}

export const announcements: Announcement[] = [
  {
    id: 1,
    title: "Assessment 2 Submission Reminder",
    description: "This is a reminder that Assessment 2 for ICT301 Information Technology Project 1 is due on 3 September 2026 at 11:59 PM. Please ensure your submission meets all requirements outlined in the brief.",
    date: "Aug 30, 2026",
    category: "Assessment",
    course: "ICT301",
    courseName: "Information Technology Project 1",
    important: true,
    unread: true,
    relevantDate: "Thursday, 3 September 2026 at 11:59 PM AEST",
    author: {
      name: "Dr. Marcus Vance",
      role: "Unit Coordinator & Senior Lecturer",
    },
    fullContent: [
      "This is a formal reminder that Assessment 2 for ICT301 Information Technology Project 1 is due on Thursday, 3 September 2026 at 11:59 PM AEST.",
      "Please ensure your final submission meets all requirements specified in the unit project brief. Submissions must include full system architecture diagrams, database entity-relationship models, documented backend API endpoints, and the Sprint 2 progress retrospective report.",
      "Late submissions without an approved academic extension will incur a penalty of 5% per calendar day. The submission portal is active on the Assignments page. Ensure your team lead has completed the digital academic integrity declaration prior to uploading final materials.",
    ],
    attachments: [
      { name: "ICT301_Assessment2_Guidelines.pdf", size: "1.2 MB" },
      { name: "Submission_Checklist_Template.pdf", size: "380 KB" },
    ],
  },
  {
    id: 2,
    title: "Semester T226 Important Dates",
    description: "Key academic dates for Semester T226 have been published. Enrollment for Semester T326 opens 1 October 2026. Final exam period runs 15–26 November 2026. Please plan accordingly.",
    date: "Aug 28, 2026",
    category: "Academic",
    important: true,
    unread: true,
    relevantDate: "Key Milestones: Oct 1, 2026 (Enrollment) & Nov 15–26, 2026 (Final Exams)",
    author: {
      name: "Academic Registrar Office",
      role: "Division of Student Administration",
    },
    fullContent: [
      "The Academic Board has published key operational and examination dates for the remainder of Semester T226 and the upcoming academic calendar.",
      "Important dates to note in your calendar:",
      "• Census Date: Friday, 4 September 2026 (Last day to withdraw without academic or financial penalty)",
      "• Mid-Semester Break: Monday, 21 September – Friday, 25 September 2026 (No scheduled classes)",
      "• Re-enrollment for Semester T326 opens: Thursday, 1 October 2026 at 9:00 AM",
      "• Final Teaching Week concludes: Friday, 6 November 2026",
      "• Examination Study Period (Swotvac): Monday, 9 November – Friday, 13 November 2026",
      "• Formal Examination Period: Sunday, 15 November – Thursday, 26 November 2026",
      "Students are strongly advised to check their personal timetable and contact their faculty advisor if they have questions regarding course progression.",
    ],
    attachments: [
      { name: "Academic_Calendar_T226_T326.pdf", size: "840 KB" },
    ],
  },
  {
    id: 3,
    title: "Learning Materials Updated — ICT272",
    description: "New learning materials for Week 9 have been uploaded to the ICT272 Web Design and Development course page. This includes lecture slides, the lab exercise file, and supplementary reading links.",
    date: "Aug 27, 2026",
    category: "Materials",
    course: "ICT272",
    courseName: "Web Design and Development",
    important: false,
    unread: true,
    relevantDate: "Week 9 Release · Published August 27, 2026",
    author: {
      name: "Prof. David Chen",
      role: "Senior Lecturer",
    },
    fullContent: [
      "New learning resources and hands-on lab materials for Week 9 have been uploaded to the ICT272 Web Design and Development course section.",
      "This week focuses on Modern CSS Layouts, Flexbox, CSS Grid systems, and Responsive Design Patterns. The uploaded bundle contains:",
      "1. Lecture slides and presentation notes (PDF)",
      "2. Week 9 hands-on lab exercise sheet and starter HTML/CSS files",
      "3. Supplementary reference links for MDN Web Docs and modern CSS container queries",
      "Please download the starter files and complete Exercise 1 prior to attending your scheduled computer lab tutorial session.",
    ],
    attachments: [
      { name: "Week9_Responsive_Layouts.pdf", size: "2.8 MB" },
      { name: "lab09_starter_pack.zip", size: "4.5 MB" },
    ],
  },
  {
    id: 4,
    title: "System Maintenance Notice",
    description: "The EduFlex student portal will undergo scheduled maintenance on Sunday, 1 September 2026 from 02:00 AM to 06:00 AM. The system will be unavailable during this window. Please plan your submissions accordingly.",
    date: "Aug 25, 2026",
    category: "System",
    important: false,
    unread: false,
    relevantDate: "Sunday, 1 September 2026 (02:00 AM – 06:00 AM AEST)",
    author: {
      name: "IT Services & Infrastructure",
      role: "University Systems Team",
    },
    fullContent: [
      "The EduFlex Student Portal and associated learning management systems will undergo routine scheduled infrastructure maintenance on Sunday, 1 September 2026 between 02:00 AM and 06:00 AM AEST.",
      "During this 4-hour maintenance window:",
      "• The student portal dashboard, course materials, and assignment submission endpoints will be completely unavailable.",
      "• Automated quiz submissions and grading services will be paused.",
      "• Campus Wi-Fi and student email accounts will remain unaffected.",
      "Please plan your study sessions and assessment submissions accordingly to prevent disruption. If you experience persistent connectivity issues after 06:00 AM, please contact the IT Helpdesk.",
    ],
  },
  {
    id: 5,
    title: "ICT126 Midterm Test Information",
    description: "The ICT126 Artificial Intelligence midterm test is scheduled for Week 10. It will be held during your regular tutorial time slot. The test covers Weeks 1–8 content. No aids are permitted.",
    date: "Aug 24, 2026",
    category: "Assessment",
    course: "ICT126",
    courseName: "Artificial Intelligence",
    important: false,
    unread: false,
    relevantDate: "Week 10 Scheduled Tutorial Slot",
    author: {
      name: "Dr. Elena Rostova",
      role: "Course Coordinator & Lead Researcher",
    },
    fullContent: [
      "The mid-semester test for ICT126 Artificial Intelligence is scheduled to take place during your enrolled tutorial session in Week 10.",
      "Key examination parameters:",
      "• Duration: 50 minutes",
      "• Format: 25 multiple-choice questions and 2 short analytical problem-solving questions",
      "• Scope: Units 1 through 8 (Breadth-First Search, A* Heuristics, Adversarial Search, and Perceptron foundations)",
      "• Conditions: Closed book examination. Calculators and electronic smart devices are strictly prohibited.",
      "A practice quiz with specimen questions and solutions is available in the Quizzes & Exams portal section to assist with your revision.",
    ],
    attachments: [
      { name: "ICT126_Midterm_Formula_Sheet.pdf", size: "420 KB" },
    ],
  },
  {
    id: 6,
    title: "Library Extended Hours — Exam Period",
    description: "The campus library will extend its opening hours during the upcoming exam period. The library will be open 7:00 AM to midnight on weekdays and 9:00 AM to 9:00 PM on weekends.",
    date: "Aug 22, 2026",
    category: "Campus",
    important: false,
    unread: false,
    relevantDate: "Effective 15 September – 26 November 2026",
    author: {
      name: "University Library Services",
      role: "Campus Facilities & Student Services",
    },
    fullContent: [
      "In preparation for the upcoming mid-semester assessments and final examination period, the main campus university library is expanding its opening hours to support student learning.",
      "Commencing Tuesday, 15 September 2026, library operating hours will be:",
      "• Monday to Friday: 7:00 AM – Midnight",
      "• Saturday & Sunday: 9:00 AM – 9:00 PM",
      "• Public Holidays: 10:00 AM – 6:00 PM",
      "Quiet study zones on Levels 3 and 4 will be enforced at all times. Group study pods may be reserved up to 7 days in advance via the student portal. Free evening security escorts to campus carparks and public transit hubs are available upon request at the front desk.",
    ],
  },
];

const categoryColors: Record<string, string> = {
  Assessment: "bg-orange-50 text-orange-700 border-orange-100",
  Academic:   "bg-blue-50 text-blue-700 border-blue-100",
  Materials:  "bg-indigo-50 text-indigo-700 border-indigo-100",
  System:     "bg-gray-100 text-gray-600 border-gray-200",
  Campus:     "bg-green-50 text-green-700 border-green-100",
};

// ── REUSABLE ANNOUNCEMENT DETAILS VIEW ────────────────────────────────────────

function AnnouncementDetailView({
  announcement,
  onBack,
}: {
  announcement: Announcement;
  onBack: () => void;
}) {
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  const handleDownload = (filename: string) => {
    setDownloadToast(`Downloading ${filename}...`);
    setTimeout(() => setDownloadToast(null), 3000);
  };

  const paragraphs = announcement.fullContent && announcement.fullContent.length > 0
    ? announcement.fullContent
    : [announcement.description];

  return (
    <div className="p-7 max-w-4xl mx-auto">
      {/* Navigation / Breadcrumb */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-blue-900 bg-white hover:bg-gray-50 border border-gray-200 px-3.5 py-2 rounded-xl transition-all shadow-xs cursor-pointer"
        >
          <IconChevronLeft />
          <span>Back to Announcements</span>
        </button>

        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <span>Announcements</span>
          <span>/</span>
          <span className="font-semibold text-gray-700">{announcement.category}</span>
        </div>
      </div>

      {/* Main Announcement Card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 mb-6">
        {/* Badges & Meta */}
        <div className="flex items-center gap-2.5 flex-wrap mb-4">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${categoryColors[announcement.category] ?? "bg-gray-100 text-gray-700 border-gray-200"}`}>
            {announcement.category}
          </span>
          {announcement.course && (
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
              {announcement.course}
            </span>
          )}
          {announcement.important && (
            <span
              className="text-xs font-bold px-2.5 py-1 rounded-full text-white shadow-xs"
              style={{ background: "#1a3a9e" }}
            >
              Important
            </span>
          )}
          <span className="text-xs text-gray-400 font-medium ml-auto flex items-center gap-1.5">
            <IconCalendar className="w-3.5 h-3.5" />
            <span>Published {announcement.date}</span>
          </span>
        </div>

        {/* Title */}
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 leading-snug">
          {announcement.title}
        </h1>

        {/* Course Name subtitle if applicable */}
        {announcement.courseName && (
          <p className="text-xs font-semibold text-blue-900 mb-4">
            {announcement.course} — {announcement.courseName}
          </p>
        )}

        {/* Relevant Deadline / Key Date Banner if applicable */}
        {announcement.relevantDate && (
          <div className="bg-amber-50/90 border border-amber-200 rounded-xl p-4 mb-6 flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
              <IconClock />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-0.5">
                Relevant Deadline / Important Date
              </p>
              <p className="text-sm font-semibold text-amber-950">
                {announcement.relevantDate}
              </p>
            </div>
          </div>
        )}

        {/* Author information if applicable */}
        {announcement.author && (
          <div className="flex items-center gap-3 py-3 border-y border-gray-100 mb-6">
            <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0">
              {announcement.author.name
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")}
            </div>
            <div>
              <p className="text-xs font-bold text-gray-800">{announcement.author.name}</p>
              <p className="text-[11px] text-gray-500">{announcement.author.role}</p>
            </div>
          </div>
        )}

        {/* Full Announcement Body */}
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
          {paragraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        {/* Attached resources / files if applicable */}
        {announcement.attachments && announcement.attachments.length > 0 && (
          <div className="mt-8 pt-6 border-t border-gray-100">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              Attached Resources ({announcement.attachments.length})
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {announcement.attachments.map((att, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50/60 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="text-gray-400 shrink-0">
                      <IconPaperclip />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-gray-800 truncate">{att.name}</p>
                      <p className="text-[10px] text-gray-400">{att.size}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDownload(att.name)}
                    className="p-1.5 rounded-lg text-gray-500 hover:text-blue-700 hover:bg-white border border-transparent hover:border-gray-200 transition-all cursor-pointer shrink-0"
                    title={`Download ${att.name}`}
                  >
                    <IconDownload />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Return button */}
      <div className="flex justify-start">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-600 hover:text-gray-900 bg-white border border-gray-200 px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-colors shadow-xs cursor-pointer"
        >
          <IconChevronLeft />
          <span>Return to All Announcements</span>
        </button>
      </div>

      {/* Toast alert */}
      {downloadToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-gray-900 text-white text-xs font-medium px-4 py-3 rounded-xl shadow-lg animate-in fade-in slide-in-from-bottom-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{downloadToast}</span>
        </div>
      )}
    </div>
  );
}

// ── ANNOUNCEMENTS PAGE COMPONENT ──────────────────────────────────────────────

export function AnnouncementsPage() {
  const [items, setItems] = useState<Announcement[]>(() => announcements);
  const [filter, setFilter] = useState<"all" | "unread" | "important">("all");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedAnnouncement = items.find((a) => a.id === selectedId) ?? null;

  const handleSelectAnnouncement = (a: Announcement) => {
    if (a.unread) {
      a.unread = false; // Keep in-memory mock updated for session
      setItems((prev) =>
        prev.map((item) => (item.id === a.id ? { ...item, unread: false } : item))
      );
    }
    setSelectedId(a.id);
  };

  const handleBackToList = () => {
    setSelectedId(null);
  };

  if (selectedAnnouncement) {
    return (
      <AnnouncementDetailView
        announcement={selectedAnnouncement}
        onBack={handleBackToList}
      />
    );
  }

  const filtered = items.filter((a) => {
    if (filter === "unread") return a.unread;
    if (filter === "important") return a.important;
    return true;
  });

  const unreadCount = items.filter((a) => a.unread).length;

  return (
    <div className="p-7">
      <PageHeader
        title="Announcements"
        subtitle="Stay updated with the latest news and important notices"
        right={
          <span className="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full">
            {unreadCount} unread
          </span>
        }
      />

      {/* Filter tabs */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-4 mb-6">
        <div className="flex items-center gap-1">
          {(["all", "unread", "important"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`relative px-4 py-3.5 text-sm font-medium capitalize whitespace-nowrap transition-colors cursor-pointer ${filter === f ? "text-blue-700" : "text-gray-500 hover:text-gray-800"}`}
            >
              {f === "all" ? "All Announcements" : f === "unread" ? "Unread" : "Important"}
              {filter === f && <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-t-full bg-blue-600" />}
            </button>
          ))}
        </div>
      </div>

      {/* Announcement list */}
      <div className="space-y-4">
        {filtered.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-12 text-center">
            <p className="text-sm font-medium text-gray-500">
              {filter === "unread"
                ? "No unread announcements."
                : filter === "important"
                ? "No important announcements."
                : "No announcements found."}
            </p>
          </div>
        ) : (
          filtered.map((a) => (
            <div
              key={a.id}
              onClick={() => handleSelectAnnouncement(a)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleSelectAnnouncement(a);
                }
              }}
              className={`bg-white rounded-2xl border shadow-sm p-6 transition-all cursor-pointer hover:border-blue-200 hover:shadow-md active:scale-[0.998] ${a.important ? "border-blue-100" : "border-gray-100"}`}
            >
              <div className="flex items-start gap-4">
                {/* Unread dot */}
                <div className="mt-1.5 shrink-0">
                  <span className={`w-2.5 h-2.5 rounded-full block transition-colors ${a.unread ? "bg-blue-500" : "bg-transparent"}`} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1.5">
                    <h3 className={`text-base font-bold transition-colors ${a.unread ? "text-gray-900" : "text-gray-700"}`}>
                      {a.title}
                    </h3>
                    {a.important && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border text-white shrink-0" style={{ background: "#1a3a9e", borderColor: "#1a3a9e" }}>
                        Important
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed mb-3">{a.description}</p>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${categoryColors[a.category] ?? ""}`}>
                      {a.category}
                    </span>
                    {a.course && (
                      <span className="text-xs font-medium text-gray-500">{a.course}</span>
                    )}
                    <span className="text-xs text-gray-400">{a.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MESSAGES PAGE
// ─────────────────────────────────────────────────────────────────────────────
interface Message {
  id: string;
  sender: string;
  role: string;
  initials: string;
  initialsColor: string;
  lastMsg: string;
  time: string;
  unread: number;
  messages: { from: "me" | "them"; text: string; time: string }[];
}

export const conversations: Message[] = [
  {
    id: "c1",
    sender: "Dr. Sarah Mitchell",
    role: "ICT301 Lecturer",
    initials: "SM",
    initialsColor: "#1a3a9e",
    lastMsg: "Please ensure your project proposal follows the template provided.",
    time: "10:24 AM",
    unread: 2,
    messages: [
      { from: "them", text: "Hi Richard, I wanted to check in on your Assessment 2 progress.", time: "Mon 9:12 AM" },
      { from: "me",   text: "Hi Dr. Mitchell, I'm about 60% through the report. I should be able to submit by the deadline.", time: "Mon 9:45 AM" },
      { from: "them", text: "Great to hear. Please ensure your project proposal follows the template provided on the course page.", time: "Today 10:24 AM" },
      { from: "them", text: "Also make sure you cite all references in APA format.", time: "Today 10:24 AM" },
    ],
  },
  {
    id: "c2",
    sender: "Student Support",
    role: "University Services",
    initials: "SS",
    initialsColor: "#16a34a",
    lastMsg: "Your scholarship application is under review.",
    time: "Yesterday",
    unread: 0,
    messages: [
      { from: "them", text: "Hello Richard, we received your scholarship application and it is currently under review.", time: "Aug 28, 2:00 PM" },
      { from: "me",   text: "Thank you, how long does the review process usually take?", time: "Aug 28, 2:30 PM" },
      { from: "them", text: "Typically 2–3 weeks. You will receive an email notification once a decision has been made.", time: "Aug 29, 9:15 AM" },
    ],
  },
  {
    id: "c3",
    sender: "IT Helpdesk",
    role: "IT Department",
    initials: "IT",
    initialsColor: "#7c3aed",
    lastMsg: "Your password reset request has been completed.",
    time: "Aug 25",
    unread: 0,
    messages: [
      { from: "me",   text: "Hi, I'm having trouble accessing the student portal from off campus. Could you help?", time: "Aug 25, 8:45 AM" },
      { from: "them", text: "Hi Richard, please try connecting via the university VPN first. Let me know if the issue persists.", time: "Aug 25, 9:00 AM" },
      { from: "me",   text: "That fixed it, thank you!", time: "Aug 25, 9:10 AM" },
      { from: "them", text: "Great. Your password reset request has also been completed as requested.", time: "Aug 25, 9:12 AM" },
    ],
  },
];

export function MessagesPage() {
  const [activeId, setActiveId] = useState("c1");
  const [input, setInput] = useState("");

  const active = conversations.find((c) => c.id === activeId)!;

  return (
    <div className="p-7 h-[calc(100vh-64px)] flex flex-col">
      <PageHeader title="Messages" subtitle="Communicate with your lecturers and university services" />

      <div className="flex gap-5 flex-1 min-h-0">

        {/* Conversation list */}
        <div className="w-72 shrink-0 flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {/* Search */}
          <div className="p-3 border-b border-gray-100">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><IconSearch /></span>
              <input type="text" placeholder="Search messages..." className="w-full pl-9 pr-3 py-2 bg-gray-50 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 border border-gray-200 transition" />
            </div>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto divide-y divide-gray-100">
            {conversations.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveId(c.id)}
                className={`w-full flex items-start gap-3 p-4 text-left transition-colors hover:bg-gray-50 ${activeId === c.id ? "bg-blue-50/60 border-r-2 border-blue-600" : ""}`}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0" style={{ background: c.initialsColor }}>
                  {c.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <p className={`text-sm font-semibold truncate ${activeId === c.id ? "text-blue-700" : "text-gray-800"}`}>{c.sender}</p>
                    <span className="text-[10px] text-gray-400 shrink-0 ml-1">{c.time}</span>
                  </div>
                  <p className="text-xs text-gray-400 truncate">{c.role}</p>
                  <p className="text-xs text-gray-500 truncate mt-0.5">{c.lastMsg}</p>
                </div>
                {c.unread > 0 && (
                  <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0 mt-0.5" style={{ background: "#1a3a9e" }}>
                    {c.unread}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Active conversation */}
        <div className="flex-1 min-w-0 flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-100">
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0" style={{ background: active.initialsColor }}>
              {active.initials}
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">{active.sender}</p>
              <p className="text-xs text-gray-400">{active.role}</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
            {active.messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[68%] ${m.from === "me" ? "items-end" : "items-start"} flex flex-col gap-1`}>
                  <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    m.from === "me"
                      ? "text-white rounded-br-sm"
                      : "bg-gray-100 text-gray-800 rounded-bl-sm"
                  }`} style={m.from === "me" ? { background: "#1a3a9e" } : {}}>
                    {m.text}
                  </div>
                  <span className="text-[10px] text-gray-400">{m.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="px-6 py-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <button className="text-gray-400 hover:text-blue-600 transition-colors p-2 rounded-xl hover:bg-gray-100">
                <IconPaperclip />
              </button>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                onKeyDown={(e) => e.key === "Enter" && setInput("")}
              />
              <button
                onClick={() => setInput("")}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-all"
                style={{ background: "#1a3a9e" }}
              >
                <IconSend /> Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SHARED STUDENT PROFILE STATE
// ─────────────────────────────────────────────────────────────────────────────
export interface StudentProfileData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  dateOfBirth: string;
}

export const initialStudentProfile: StudentProfileData = {
  fullName: "Richard Vitug",
  email: "richard.vitug@student.edu.au",
  phone: "+61 412 345 678",
  address: "Sydney, NSW, Australia",
  dateOfBirth: "14 March 2003",
};

let sharedStudentProfile: StudentProfileData = { ...initialStudentProfile };
const profileListeners = new Set<(profile: StudentProfileData) => void>();

export function getSharedStudentProfile(): StudentProfileData {
  return sharedStudentProfile;
}

export function updateSharedStudentProfile(updates: Partial<StudentProfileData>): StudentProfileData {
  sharedStudentProfile = { ...sharedStudentProfile, ...updates };
  profileListeners.forEach((listener) => listener(sharedStudentProfile));
  return sharedStudentProfile;
}

export function useSharedStudentProfile(): [StudentProfileData, (updates: Partial<StudentProfileData>) => void] {
  const [profile, setProfileState] = useState<StudentProfileData>(sharedStudentProfile);

  useEffect(() => {
    profileListeners.add(setProfileState);
    return () => {
      profileListeners.delete(setProfileState);
    };
  }, []);

  const updateProfile = (updates: Partial<StudentProfileData>) => {
    updateSharedStudentProfile(updates);
  };

  return [profile, updateProfile];
}

// ─────────────────────────────────────────────────────────────────────────────
// SHARED STUDENT SETTINGS STATE
// ─────────────────────────────────────────────────────────────────────────────
export interface ActiveSessionItem {
  id: string;
  device: string;
  browser: string;
  location: string;
  ip: string;
  lastActive: string;
  isCurrent: boolean;
}

export interface StudentSettingsData {
  notifAssignment: boolean;
  notifQuiz: boolean;
  notifAnnouncement: boolean;
  notifMessage: boolean;
  language: string;
  timezone: string;
  twoFactor: boolean;
  activeSessions: ActiveSessionItem[];
}

export const initialStudentSettings: StudentSettingsData = {
  notifAssignment: true,
  notifQuiz: true,
  notifAnnouncement: true,
  notifMessage: false,
  language: "English",
  timezone: "Australia/Sydney (AEST, UTC+10)",
  twoFactor: false,
  activeSessions: [
    {
      id: "sess-1",
      device: "Windows 11 PC",
      browser: "Chrome 124.0",
      location: "Sydney, NSW, Australia",
      ip: "110.142.76.21",
      lastActive: "Active now",
      isCurrent: true,
    },
    {
      id: "sess-2",
      device: "iPhone 15 Pro",
      browser: "Mobile Safari 17.4",
      location: "Sydney, NSW, Australia",
      ip: "110.142.76.22",
      lastActive: "2 hours ago",
      isCurrent: false,
    },
    {
      id: "sess-3",
      device: "MacBook Pro",
      browser: "Firefox 125.0",
      location: "Melbourne, VIC, Australia",
      ip: "139.130.4.5",
      lastActive: "3 days ago",
      isCurrent: false,
    },
  ],
};

let sharedStudentSettings: StudentSettingsData = { ...initialStudentSettings };
const settingsListeners = new Set<(settings: StudentSettingsData) => void>();

export function getSharedStudentSettings(): StudentSettingsData {
  return sharedStudentSettings;
}

export function updateSharedStudentSettings(updates: Partial<StudentSettingsData>): StudentSettingsData {
  sharedStudentSettings = { ...sharedStudentSettings, ...updates };
  settingsListeners.forEach((listener) => listener(sharedStudentSettings));
  return sharedStudentSettings;
}

export function useSharedStudentSettings(): [StudentSettingsData, (updates: Partial<StudentSettingsData>) => void] {
  const [settings, setSettingsState] = useState<StudentSettingsData>(sharedStudentSettings);

  useEffect(() => {
    settingsListeners.add(setSettingsState);
    return () => {
      settingsListeners.delete(setSettingsState);
    };
  }, []);

  const updateSettings = (updates: Partial<StudentSettingsData>) => {
    updateSharedStudentSettings(updates);
  };

  return [settings, updateSettings];
}

// ─────────────────────────────────────────────────────────────────────────────
// PROFILE PAGE
// ─────────────────────────────────────────────────────────────────────────────
export function ProfilePage({ userName, onNameChange }: { userName: string; onNameChange?: (name: string) => void }) {
  const [profile, updateProfile] = useSharedStudentProfile();
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState({
    ...profile,
    fullName: userName || profile.fullName,
  });

  useEffect(() => {
    setDraft({
      ...profile,
      fullName: userName || profile.fullName,
    });
  }, [profile, userName]);

  const initials = (profile.fullName || userName || "Richard Vitug")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

  const openEdit = () => {
    setDraft({
      ...profile,
      fullName: userName || profile.fullName,
    });
    setEditing(true);
  };
  const cancel = () => setEditing(false);
  const save = () => {
    updateProfile(draft);
    setEditing(false);
    onNameChange?.(draft.fullName);
  };

  const academicInfo = [
    { label: "Program",           value: "Bachelor of Information Technology" },
    { label: "Faculty / School",  value: "School of Information Technology" },
    { label: "Current Semester",  value: "Semester T226 (2026)" },
    { label: "Enrollment Status", value: "Enrolled" },
    { label: "Credits Completed", value: "96 of 120" },
  ];

  const inputCls = "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-[#1a3a9e] transition";
  const readCls  = "w-full rounded-xl border border-gray-100 bg-gray-100 px-4 py-2.5 text-sm text-gray-400 cursor-not-allowed";

  return (
    <div className="p-7">
      <PageHeader
        title="My Profile"
        subtitle="View and manage your personal information"
        right={
          <button onClick={openEdit} className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-all cursor-pointer" style={{ background: "#1a3a9e" }}>
            <IconEdit /> Edit Profile
          </button>
        }
      />

      {/* Profile header card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 mb-6 flex items-center gap-7">
        <div className="w-24 h-24 rounded-full flex items-center justify-center text-white text-3xl font-bold shrink-0" style={{ background: "#1a3a9e" }}>
          {initials}
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">{profile.fullName || userName}</h2>
          <p className="text-sm text-gray-500 mb-3">Student · Bachelor of Information Technology</p>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs font-semibold text-green-700 bg-green-50 border border-green-100 px-3 py-1 rounded-full">Enrolled</span>
            <span className="text-xs text-gray-500">Semester T226</span>
            <span className="text-xs text-gray-400">·</span>
            <span className="text-xs text-gray-500">S00123456</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Personal information */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h3 className="text-base font-bold text-gray-800 mb-5">Personal Information</h3>
          <div className="space-y-4">
            {[
              { label: "Full Name",     value: profile.fullName || userName },
              { label: "Student ID",    value: "S00123456" },
              { label: "Email Address", value: profile.email },
              { label: "Phone Number",  value: profile.phone },
              { label: "Address",       value: profile.address },
              { label: "Date of Birth", value: profile.dateOfBirth },
            ].map((f) => (
              <div key={f.label} className="flex items-start justify-between py-3 border-b border-gray-100 last:border-0">
                <span className="text-sm text-gray-400 w-36 shrink-0">{f.label}</span>
                <span className="text-sm font-medium text-gray-800 text-right">{f.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Academic information */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h3 className="text-base font-bold text-gray-800 mb-5">Academic Information</h3>
          <div className="space-y-4">
            {academicInfo.map((f) => (
              <div key={f.label} className="flex items-start justify-between py-3 border-b border-gray-100 last:border-0">
                <span className="text-sm text-gray-400 w-40 shrink-0">{f.label}</span>
                <span className={`text-sm font-medium text-right ${f.label === "Enrollment Status" ? "text-green-700" : "text-gray-800"}`}>{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {editing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={cancel}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 p-7" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-lg font-bold text-gray-900 mb-1">Edit Profile</h2>
            <p className="text-sm text-gray-400 mb-6">Update your personal information below.</p>

            <div className="space-y-4">
              {/* Editable fields */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">Full Name</label>
                <input className={inputCls} value={draft.fullName} onChange={(e) => setDraft((d) => ({ ...d, fullName: e.target.value }))} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">Email Address</label>
                <input className={inputCls} type="email" value={draft.email} onChange={(e) => setDraft((d) => ({ ...d, email: e.target.value }))} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">Phone Number</label>
                <input className={inputCls} type="tel" value={draft.phone} onChange={(e) => setDraft((d) => ({ ...d, phone: e.target.value }))} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">Address</label>
                <input className={inputCls} value={draft.address} onChange={(e) => setDraft((d) => ({ ...d, address: e.target.value }))} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">Date of Birth</label>
                <input className={inputCls} value={draft.dateOfBirth} onChange={(e) => setDraft((d) => ({ ...d, dateOfBirth: e.target.value }))} />
              </div>

              {/* Read-only fields */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1.5">Student ID <span className="font-normal">(read-only)</span></label>
                <input className={readCls} value="S00123456" readOnly />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1.5">Program <span className="font-normal">(read-only)</span></label>
                <input className={readCls} value="Bachelor of Information Technology" readOnly />
              </div>
            </div>

            <div className="flex gap-3 mt-7">
              <button onClick={save} className="flex-1 py-2.5 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-all cursor-pointer" style={{ background: "#1a3a9e" }}>
                Save Changes
              </button>
              <button onClick={cancel} className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-gray-600 border border-gray-200 hover:bg-gray-50 transition-all cursor-pointer">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SETTINGS PAGE
// ─────────────────────────────────────────────────────────────────────────────
const LANGUAGE_OPTIONS = ["English", "English (US)", "Filipino"];

const TIMEZONE_OPTIONS = [
  "Australia/Sydney (AEST, UTC+10)",
  "Australia/Melbourne (AEST, UTC+10)",
  "Australia/Brisbane (AEST, UTC+10)",
  "Australia/Perth (AWST, UTC+8)",
  "Asia/Manila (UTC+8)",
  "UTC",
  "America/New_York (EST, UTC-5)",
];

export function SettingsPage() {
  const [profile, updateProfile] = useSharedStudentProfile();
  const [settings, updateSettings] = useSharedStudentSettings();

  // Local state initialized from shared profile and settings
  const [email, setEmail] = useState(profile.email);
  const [phone, setPhone] = useState(profile.phone);
  const [address, setAddress] = useState(profile.address);
  const [notifs, setNotifs] = useState({
    notifAssignment: settings.notifAssignment,
    notifQuiz: settings.notifQuiz,
    notifAnnouncement: settings.notifAnnouncement,
    notifMessage: settings.notifMessage,
  });
  const [language, setLanguage] = useState(settings.language);
  const [timezone, setTimezone] = useState(settings.timezone);
  const [twoFactor, setTwoFactor] = useState(settings.twoFactor);
  const [activeSessions, setActiveSessions] = useState(settings.activeSessions);

  // Sync when profile updates externally
  useEffect(() => {
    setEmail(profile.email);
    setPhone(profile.phone);
    setAddress(profile.address);
  }, [profile.email, profile.phone, profile.address]);

  // Sync when settings update externally
  useEffect(() => {
    setNotifs({
      notifAssignment: settings.notifAssignment,
      notifQuiz: settings.notifQuiz,
      notifAnnouncement: settings.notifAnnouncement,
      notifMessage: settings.notifMessage,
    });
    setLanguage(settings.language);
    setTimezone(settings.timezone);
    setTwoFactor(settings.twoFactor);
    setActiveSessions(settings.activeSessions);
  }, [settings]);

  // Validation errors
  const [emailError, setEmailError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [addressError, setAddressError] = useState<string | null>(null);

  // Save feedback
  const [saved, setSaved] = useState(false);

  // Dropdown states
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [tzDropdownOpen, setTzDropdownOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const tzRef = useRef<HTMLDivElement>(null);

  // Modal states
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  const [twoFactorModalOpen, setTwoFactorModalOpen] = useState(false);
  const [sessionsModalOpen, setSessionsModalOpen] = useState(false);

  // Change Password state
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [passwordSuccess, setPasswordSuccess] = useState(false);

  // 2FA modal state
  const [twoFactorCode, setTwoFactorCode] = useState("482910");
  const [twoFactorError, setTwoFactorError] = useState<string | null>(null);

  // Click outside listener for dropdowns
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
      if (tzRef.current && !tzRef.current.contains(e.target as Node)) {
        setTzDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggleNotif = (key: keyof typeof notifs) => {
    const nextVal = !notifs[key];
    setNotifs((prev) => ({ ...prev, [key]: nextVal }));
    // Preserve immediately in shared state so navigation within the current session retains state
    updateSettings({ [key]: nextVal });
  };

  const handleSelectLanguage = (val: string) => {
    setLanguage(val);
    setLangDropdownOpen(false);
    updateSettings({ language: val });
  };

  const handleSelectTimezone = (val: string) => {
    setTimezone(val);
    setTzDropdownOpen(false);
    updateSettings({ timezone: val });
  };

  const handleToggle2FA = () => {
    if (!twoFactor) {
      setTwoFactorCode("482910");
      setTwoFactorError(null);
      setTwoFactorModalOpen(true);
    } else {
      setTwoFactor(false);
      updateSettings({ twoFactor: false });
    }
  };

  const handleConfirmEnable2FA = () => {
    if (twoFactorCode.trim().length !== 6) {
      setTwoFactorError("Please enter a valid 6-digit verification code.");
      return;
    }
    setTwoFactor(true);
    updateSettings({ twoFactor: true });
    setTwoFactorModalOpen(false);
  };

  const handleSignOutSession = (sessionId: string) => {
    const nextSessions = activeSessions.filter((s) => s.id !== sessionId);
    setActiveSessions(nextSessions);
    updateSettings({ activeSessions: nextSessions });
  };

  const handleSignOutAllOther = () => {
    const nextSessions = activeSessions.filter((s) => s.isCurrent);
    setActiveSessions(nextSessions);
    updateSettings({ activeSessions: nextSessions });
  };

  const handleOpenPasswordModal = () => {
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setPasswordError(null);
    setPasswordSuccess(false);
    setPasswordModalOpen(true);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentPassword.trim()) {
      setPasswordError("Please enter your current password.");
      return;
    }
    if (!newPassword.trim()) {
      setPasswordError("Please enter a new password.");
      return;
    }
    if (newPassword.length < 8) {
      setPasswordError("New password must be at least 8 characters long.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordError("New passwords do not match.");
      return;
    }
    if (newPassword === currentPassword) {
      setPasswordError("New password must be different from current password.");
      return;
    }

    setPasswordError(null);
    setPasswordSuccess(true);
    setTimeout(() => {
      setPasswordModalOpen(false);
      setPasswordSuccess(false);
    }, 1800);
  };

  const handleSave = () => {
    let hasError = false;

    if (!email.trim()) {
      setEmailError("Email address is required.");
      hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setEmailError("Please enter a valid email address.");
      hasError = true;
    } else {
      setEmailError(null);
    }

    if (!phone.trim()) {
      setPhoneError("Phone number is required.");
      hasError = true;
    } else {
      setPhoneError(null);
    }

    if (!address.trim()) {
      setAddressError("Address cannot be empty.");
      hasError = true;
    } else {
      setAddressError(null);
    }

    if (hasError) {
      setSaved(false);
      return;
    }

    // Save changes to shared profile (keeps Settings and Profile in sync)
    updateProfile({
      email: email.trim(),
      phone: phone.trim(),
      address: address.trim(),
    });

    // Save changes to shared settings
    updateSettings({
      ...notifs,
      language,
      timezone,
      twoFactor,
      activeSessions,
    });

    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-5">
      <h3 className="text-base font-bold text-gray-800 mb-5 pb-3 border-b border-gray-100">{title}</h3>
      {children}
    </div>
  );

  const Field = ({ label, sub, children }: { label: string; sub?: string; children: React.ReactNode }) => (
    <div className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0">
      <div>
        <p className="text-sm font-medium text-gray-800">{label}</p>
        {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
      </div>
      {children}
    </div>
  );

  return (
    <div className="p-7">
      <PageHeader title="Settings" subtitle="Manage your account and preferences" />

      <div className="grid grid-cols-2 gap-6">
        <div>
          {/* Account */}
          <Section title="Account">
            <Field label="Email Address" sub="Used for login and notifications">
              <div className="flex flex-col items-end">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    const val = e.target.value;
                    setEmail(val);
                    if (emailError && val.trim()) setEmailError(null);
                  }}
                  className={`text-sm text-gray-700 border rounded-xl px-3 py-2 w-64 focus:outline-none focus:ring-2 transition-colors ${
                    emailError
                      ? "border-red-400 focus:ring-red-200 bg-red-50/40"
                      : "border-gray-200 focus:ring-blue-300 bg-gray-50"
                  }`}
                />
                {emailError && (
                  <span className="text-[11px] text-red-600 font-medium mt-1">
                    {emailError}
                  </span>
                )}
              </div>
            </Field>
            <Field label="Phone Number" sub="Optional — used for two-factor authentication">
              <div className="flex flex-col items-end">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    const val = e.target.value;
                    setPhone(val);
                    if (phoneError && val.trim()) setPhoneError(null);
                  }}
                  className={`text-sm text-gray-700 border rounded-xl px-3 py-2 w-64 focus:outline-none focus:ring-2 transition-colors ${
                    phoneError
                      ? "border-red-400 focus:ring-red-200 bg-red-50/40"
                      : "border-gray-200 focus:ring-blue-300 bg-gray-50"
                  }`}
                />
                {phoneError && (
                  <span className="text-[11px] text-red-600 font-medium mt-1">
                    {phoneError}
                  </span>
                )}
              </div>
            </Field>
            <Field label="Address" sub="Used for your account profile">
              <div className="flex flex-col items-end">
                <input
                  type="text"
                  value={address}
                  onChange={(e) => {
                    const val = e.target.value;
                    setAddress(val);
                    if (addressError && val.trim()) setAddressError(null);
                  }}
                  className={`text-sm text-gray-700 border rounded-xl px-3 py-2 w-64 focus:outline-none focus:ring-2 transition-colors ${
                    addressError
                      ? "border-red-400 focus:ring-red-200 bg-red-50/40"
                      : "border-gray-200 focus:ring-blue-300 bg-gray-50"
                  }`}
                />
                {addressError && (
                  <span className="text-[11px] text-red-600 font-medium mt-1">
                    {addressError}
                  </span>
                )}
              </div>
            </Field>
            <Field label="Change Password" sub="Update your login password">
              <button
                type="button"
                onClick={handleOpenPasswordModal}
                className="text-sm font-semibold text-blue-700 border border-blue-100 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-xl transition-colors flex items-center gap-2 cursor-pointer"
              >
                <IconKey /> Change Password
              </button>
            </Field>
          </Section>

          {/* Preferences */}
          <Section title="Preferences">
            <Field label="Language" sub="Interface display language">
              <div className="relative" ref={langRef}>
                <button
                  type="button"
                  onClick={() => {
                    setLangDropdownOpen((v) => !v);
                    setTzDropdownOpen(false);
                  }}
                  className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 bg-gray-50 hover:bg-gray-100 text-sm text-gray-700 transition-colors cursor-pointer"
                >
                  <IconGlobe />
                  <span>{language}</span>
                  <IconChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform ${langDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                {langDropdownOpen && (
                  <div className="absolute left-0 mt-1.5 w-48 bg-white border border-gray-100 rounded-xl shadow-xl py-1 z-30">
                    {LANGUAGE_OPTIONS.map((lang) => (
                      <button
                        key={lang}
                        type="button"
                        onClick={() => handleSelectLanguage(lang)}
                        className={`w-full text-left px-3.5 py-2 text-sm transition-colors flex items-center justify-between ${
                          language === lang
                            ? "bg-blue-50 text-blue-700 font-semibold"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <span>{lang}</span>
                        {language === lang && <span className="text-blue-600 text-xs font-bold">✓</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </Field>
            <Field label="Time Zone" sub="Used for scheduling and deadlines">
              <div className="relative" ref={tzRef}>
                <button
                  type="button"
                  onClick={() => {
                    setTzDropdownOpen((v) => !v);
                    setLangDropdownOpen(false);
                  }}
                  className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 bg-gray-50 hover:bg-gray-100 text-sm text-gray-700 transition-colors cursor-pointer max-w-[280px]"
                >
                  <span className="truncate">{timezone}</span>
                  <IconChevronDown className={`w-3.5 h-3.5 text-gray-400 shrink-0 transition-transform ${tzDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                {tzDropdownOpen && (
                  <div className="absolute left-0 mt-1.5 w-72 bg-white border border-gray-100 rounded-xl shadow-xl py-1 z-30 max-h-60 overflow-y-auto">
                    {TIMEZONE_OPTIONS.map((tz) => (
                      <button
                        key={tz}
                        type="button"
                        onClick={() => handleSelectTimezone(tz)}
                        className={`w-full text-left px-3.5 py-2 text-sm transition-colors flex items-center justify-between ${
                          timezone === tz
                            ? "bg-blue-50 text-blue-700 font-semibold"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <span className="truncate">{tz}</span>
                        {timezone === tz && <span className="text-blue-600 text-xs font-bold shrink-0 ml-2">✓</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </Field>
            <Field label="Theme" sub="Portal appearance">
              <div className="flex gap-2">
                <button
                  type="button"
                  className="text-sm font-semibold px-4 py-2 rounded-xl border border-blue-600 text-blue-700 bg-blue-50 cursor-default"
                >
                  Light
                </button>
              </div>
            </Field>
          </Section>
        </div>

        <div>
          {/* Notifications */}
          <Section title="Notifications">
            <Field label="Assignment Notifications" sub="Get alerts when assignments are due or updated">
              <Toggle on={notifs.notifAssignment} onChange={() => handleToggleNotif("notifAssignment")} />
            </Field>
            <Field label="Quiz Notifications" sub="Get alerts for upcoming quizzes and results">
              <Toggle on={notifs.notifQuiz} onChange={() => handleToggleNotif("notifQuiz")} />
            </Field>
            <Field label="Announcement Notifications" sub="Receive university and course announcements">
              <Toggle on={notifs.notifAnnouncement} onChange={() => handleToggleNotif("notifAnnouncement")} />
            </Field>
            <Field label="Message Notifications" sub="Be notified when you receive a new message">
              <Toggle on={notifs.notifMessage} onChange={() => handleToggleNotif("notifMessage")} />
            </Field>
          </Section>

          {/* Privacy & Security */}
          <Section title="Privacy & Security">
            <Field
              label="Two-Factor Authentication"
              sub={twoFactor ? "Enabled · Protected with authenticator app" : "Add an extra layer of security to your account"}
            >
              <Toggle on={twoFactor} onChange={handleToggle2FA} />
            </Field>
            <Field label="Active Sessions" sub="Manage devices that are signed in to your account">
              <button
                type="button"
                onClick={() => setSessionsModalOpen(true)}
                className="flex items-center gap-2 text-sm font-semibold text-blue-700 border border-blue-100 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-xl transition-colors cursor-pointer"
              >
                <IconShield /> View Sessions
              </button>
            </Field>
          </Section>
        </div>
      </div>

      {/* Save */}
      <div className="flex items-center gap-4 pt-2">
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white shadow-sm hover:opacity-90 transition-all cursor-pointer"
          style={{ background: "#1a3a9e" }}
        >
          {saved ? "Saved!" : "Save Changes"}
        </button>
        {saved && <span className="text-sm text-green-600 font-medium">Your settings have been saved.</span>}
        {(emailError || phoneError || addressError) && (
          <span className="text-sm text-red-600 font-medium">
            {emailError || phoneError || addressError}
          </span>
        )}
      </div>

      {/* Change Password Modal */}
      {passwordModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setPasswordModalOpen(false)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-7" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <IconKey /> Change Password
              </h2>
              <button
                type="button"
                onClick={() => setPasswordModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100 transition cursor-pointer"
              >
                <IconX />
              </button>
            </div>
            <p className="text-sm text-gray-500 mb-5">Update your account login password</p>

            {passwordSuccess ? (
              <div className="py-6 text-center">
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-3">
                  <IconCheckCircle />
                </div>
                <h3 className="text-base font-bold text-gray-800">Password Changed!</h3>
                <p className="text-sm text-gray-500 mt-1">Your password has been successfully updated.</p>
                <button
                  type="button"
                  onClick={() => setPasswordModalOpen(false)}
                  className="mt-5 w-full py-2.5 rounded-xl text-sm font-bold text-white shadow-sm hover:opacity-90 transition-all cursor-pointer"
                  style={{ background: "#1a3a9e" }}
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handlePasswordSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Current Password</label>
                  <input
                    type="password"
                    placeholder="Enter current password"
                    value={currentPassword}
                    onChange={(e) => {
                      setCurrentPassword(e.target.value);
                      setPasswordError(null);
                    }}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-[#1a3a9e] transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">New Password</label>
                  <input
                    type="password"
                    placeholder="Enter new password (min. 8 characters)"
                    value={newPassword}
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                      setPasswordError(null);
                    }}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-[#1a3a9e] transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Confirm New Password</label>
                  <input
                    type="password"
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      setPasswordError(null);
                    }}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-[#1a3a9e] transition"
                  />
                </div>

                {passwordError && (
                  <div className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-xl px-3 py-2 font-medium">
                    {passwordError}
                  </div>
                )}

                <div className="flex gap-3 pt-3">
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-all cursor-pointer shadow-sm"
                    style={{ background: "#1a3a9e" }}
                  >
                    Update Password
                  </button>
                  <button
                    type="button"
                    onClick={() => setPasswordModalOpen(false)}
                    className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-gray-600 border border-gray-200 hover:bg-gray-50 transition-all cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Two-Factor Authentication Setup Modal */}
      {twoFactorModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setTwoFactorModalOpen(false)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-7" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <IconShield /> Setup Two-Factor Authentication
              </h2>
              <button
                type="button"
                onClick={() => setTwoFactorModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100 transition cursor-pointer"
              >
                <IconX />
              </button>
            </div>
            <p className="text-sm text-gray-500 mb-5">
              Scan the QR code with your authenticator app (e.g. Google Authenticator) or enter the setup key.
            </p>

            <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl border border-gray-200 mb-4">
              <div className="w-36 h-36 bg-white border border-gray-300 rounded-lg p-2 shadow-inner flex flex-col items-center justify-center relative">
                <div className="grid grid-cols-6 gap-1 w-full h-full p-1 opacity-80">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div
                      key={i}
                      className={`${(i % 2 === 0 || i % 5 === 0) && i % 7 !== 0 ? "bg-gray-900" : "bg-transparent"} rounded-[2px]`}
                    />
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white px-2 py-0.5 rounded text-[10px] font-bold text-[#1a3a9e] border border-[#1a3a9e]/20 shadow-xs">
                    EDUFLEX
                  </span>
                </div>
              </div>
              <div className="mt-3 text-center">
                <span className="text-xs text-gray-400 block mb-1">Setup Key</span>
                <code className="text-xs font-mono font-bold bg-white border border-gray-200 px-3 py-1 rounded-lg text-gray-700 tracking-wider">
                  EDFX-9428-SECURE-KEY
                </code>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">6-Digit Verification Code</label>
                <input
                  type="text"
                  maxLength={6}
                  value={twoFactorCode}
                  onChange={(e) => {
                    setTwoFactorCode(e.target.value.replace(/\D/g, ""));
                    if (twoFactorError) setTwoFactorError(null);
                  }}
                  placeholder="e.g. 482910"
                  className="w-full text-center text-lg font-mono tracking-widest rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-[#1a3a9e] transition"
                />
                {twoFactorError && (
                  <p className="text-xs text-red-600 font-medium mt-1 text-center">{twoFactorError}</p>
                )}
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleConfirmEnable2FA}
                  className="flex-1 py-2.5 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-all cursor-pointer shadow-sm"
                  style={{ background: "#1a3a9e" }}
                >
                  Verify &amp; Enable
                </button>
                <button
                  type="button"
                  onClick={() => setTwoFactorModalOpen(false)}
                  className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-gray-600 border border-gray-200 hover:bg-gray-50 transition-all cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Active Sessions Modal */}
      {sessionsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setSessionsModalOpen(false)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 p-7" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <IconShield /> Active Sessions
              </h2>
              <button
                type="button"
                onClick={() => setSessionsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100 transition cursor-pointer"
              >
                <IconX />
              </button>
            </div>
            <p className="text-sm text-gray-500 mb-5">
              Devices and browsers currently logged into your EduFlex account.
            </p>

            <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
              {activeSessions.map((session) => (
                <div
                  key={session.id}
                  className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 flex items-center justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-bold text-gray-800">{session.device}</span>
                      {session.isCurrent && (
                        <span className="text-[11px] font-semibold text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">
                          Current Device
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500">
                      {session.browser} · {session.location}
                    </p>
                    <p className="text-[11px] text-gray-400 mt-0.5">
                      IP: {session.ip} · {session.lastActive}
                    </p>
                  </div>
                  {!session.isCurrent ? (
                    <button
                      type="button"
                      onClick={() => handleSignOutSession(session.id)}
                      className="text-xs font-semibold text-red-600 border border-red-200 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-xl transition-colors cursor-pointer shrink-0"
                    >
                      Sign Out
                    </button>
                  ) : (
                    <span className="text-xs text-gray-400 italic shrink-0">Active</span>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between gap-3 mt-6 pt-4 border-t border-gray-100">
              {activeSessions.filter((x) => !x.isCurrent).length > 0 ? (
                <button
                  type="button"
                  onClick={handleSignOutAllOther}
                  className="text-xs font-semibold text-red-600 hover:text-red-700 hover:underline cursor-pointer"
                >
                  Sign out of all other sessions
                </button>
              ) : (
                <span className="text-xs text-gray-400">No other active sessions.</span>
              )}
              <button
                type="button"
                onClick={() => setSessionsModalOpen(false)}
                className="px-5 py-2 rounded-xl text-sm font-semibold text-gray-700 border border-gray-200 hover:bg-gray-50 transition-all cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
