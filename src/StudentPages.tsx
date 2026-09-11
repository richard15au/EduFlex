"use client";

import { useState } from "react";

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

const gradeRows: GradeRow[] = [
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

export function GradesPage() {
  const summary = [
    { label: "GPA",               value: "3.72", sub: "This Semester" },
    { label: "Overall Average",   value: "81.4%", sub: "Across assessments" },
    { label: "Completed Courses", value: "20",    sub: "All time" },
    { label: "Credits Earned",    value: "96",    sub: "of 120 required" },
  ];

  const courseColors: Record<string, string> = {
    ICT301: "#2563eb",
    ICT272: "#16a34a",
    ICT126: "#db2777",
  };

  const grouped = gradeRows.reduce<Record<string, GradeRow[]>>((acc, r) => {
    (acc[r.code] = acc[r.code] || []).push(r);
    return acc;
  }, {});

  return (
    <div className="p-7">
      <PageHeader
        title="Grades"
        subtitle="View your academic performance and course results"
        right={
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-700 font-medium shadow-sm">
            <span>Semester T226</span>
            <IconChevronDown className="w-3.5 h-3.5 text-gray-400" />
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

      {/* Academic results by course */}
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
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CALENDAR PAGE
// ─────────────────────────────────────────────────────────────────────────────
interface CalEvent {
  day: number;
  label: string;
  color: string;
  dot: string;
}

const calEvents: CalEvent[] = [
  { day: 3,  label: "Assessment 2 Due",    color: "bg-orange-50 text-orange-700 border-orange-100", dot: "bg-orange-400" },
  { day: 10, label: "Web Design Lecture",  color: "bg-blue-50 text-blue-700 border-blue-100",       dot: "bg-blue-500" },
  { day: 15, label: "Lab Report 1 Due",    color: "bg-pink-50 text-pink-700 border-pink-100",       dot: "bg-pink-500" },
  { day: 17, label: "AI Tutorial",         color: "bg-violet-50 text-violet-700 border-violet-100", dot: "bg-violet-500" },
  { day: 20, label: "Project Submission",  color: "bg-green-50 text-green-700 border-green-100",    dot: "bg-green-500" },
  { day: 24, label: "Web Design Lecture",  color: "bg-blue-50 text-blue-700 border-blue-100",       dot: "bg-blue-500" },
  { day: 29, label: "Quiz 2 — ICT272",    color: "bg-indigo-50 text-indigo-700 border-indigo-100", dot: "bg-indigo-500" },
];

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

  const eventsForDay = (d: number) => (monthOffset === 0 ? calEvents.filter((e) => e.day === d) : []);

  const upcomingEvents = monthOffset === 0 ? calEvents.filter((e) => e.day >= 7).slice(0, 5) : [];

  return (
    <div className="p-7">
      <PageHeader
        title="Calendar"
        subtitle="Keep track of your classes, assessments, and important events"
        right={
          <div className="flex items-center gap-2">
            <button onClick={() => setMonthOffset((o) => o - 1)} className="p-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 transition-colors shadow-sm">
              <IconChevronLeft />
            </button>
            <span className="text-sm font-semibold text-gray-800 min-w-[140px] text-center">{monthName}</span>
            <button onClick={() => setMonthOffset((o) => o + 1)} className="p-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 transition-colors shadow-sm">
              <IconChevronRight />
            </button>
          </div>
        }
      />

      {/* Calendar grid */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
        {/* Day headers */}
        <div className="grid grid-cols-7 border-b border-gray-100">
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
                className={`min-h-[96px] p-2 border-b border-r border-gray-100 last:border-r-0 ${!d ? "bg-gray-50/50" : "hover:bg-blue-50/20 transition-colors"} ${i % 7 === 6 ? "border-r-0" : ""}`}
              >
                {d && (
                  <>
                    <span className={`inline-flex w-7 h-7 items-center justify-center rounded-full text-sm font-semibold mb-1 ${isToday ? "text-white" : "text-gray-700 hover:bg-gray-100"}`}
                      style={isToday ? { background: "#1a3a9e" } : {}}>
                      {d}
                    </span>
                    <div className="space-y-0.5">
                      {events.map((ev, ei) => (
                        <div key={ei} className={`text-[10px] font-semibold px-1.5 py-0.5 rounded border truncate ${ev.color}`}>
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

      {/* Upcoming events */}
      {upcomingEvents.length > 0 && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="text-base font-bold text-gray-800 mb-4">Upcoming Events</h2>
          <div className="space-y-3">
            {upcomingEvents.map((ev, i) => (
              <div key={i} className="flex items-center gap-4 py-3 border-b border-gray-100 last:border-0">
                <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${ev.dot}`} />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-800">{ev.label}</p>
                </div>
                <span className="text-xs text-gray-400 font-medium">Sep {ev.day}, 2026</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ANNOUNCEMENTS PAGE
// ─────────────────────────────────────────────────────────────────────────────
interface Announcement {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  course?: string;
  important: boolean;
  unread: boolean;
}

const announcements: Announcement[] = [
  {
    id: 1,
    title: "Assessment 2 Submission Reminder",
    description: "This is a reminder that Assessment 2 for ICT301 Information Technology Project 1 is due on 3 September 2026 at 11:59 PM. Please ensure your submission meets all requirements outlined in the brief.",
    date: "Aug 30, 2026",
    category: "Assessment",
    course: "ICT301",
    important: true,
    unread: true,
  },
  {
    id: 2,
    title: "Semester T226 Important Dates",
    description: "Key academic dates for Semester T226 have been published. Enrollment for Semester T326 opens 1 October 2026. Final exam period runs 15–26 November 2026. Please plan accordingly.",
    date: "Aug 28, 2026",
    category: "Academic",
    important: true,
    unread: true,
  },
  {
    id: 3,
    title: "Learning Materials Updated — ICT272",
    description: "New learning materials for Week 9 have been uploaded to the ICT272 Web Design and Development course page. This includes lecture slides, the lab exercise file, and supplementary reading links.",
    date: "Aug 27, 2026",
    category: "Materials",
    course: "ICT272",
    important: false,
    unread: true,
  },
  {
    id: 4,
    title: "System Maintenance Notice",
    description: "The EduFlex student portal will undergo scheduled maintenance on Sunday, 1 September 2026 from 02:00 AM to 06:00 AM. The system will be unavailable during this window. Please plan your submissions accordingly.",
    date: "Aug 25, 2026",
    category: "System",
    important: false,
    unread: false,
  },
  {
    id: 5,
    title: "ICT126 Midterm Test Information",
    description: "The ICT126 Artificial Intelligence midterm test is scheduled for Week 10. It will be held during your regular tutorial time slot. The test covers Weeks 1–8 content. No aids are permitted.",
    date: "Aug 24, 2026",
    category: "Assessment",
    course: "ICT126",
    important: false,
    unread: false,
  },
  {
    id: 6,
    title: "Library Extended Hours — Exam Period",
    description: "The campus library will extend its opening hours during the upcoming exam period. The library will be open 7:00 AM to midnight on weekdays and 9:00 AM to 9:00 PM on weekends.",
    date: "Aug 22, 2026",
    category: "Campus",
    important: false,
    unread: false,
  },
];

const categoryColors: Record<string, string> = {
  Assessment: "bg-orange-50 text-orange-700 border-orange-100",
  Academic:   "bg-blue-50 text-blue-700 border-blue-100",
  Materials:  "bg-indigo-50 text-indigo-700 border-indigo-100",
  System:     "bg-gray-100 text-gray-600 border-gray-200",
  Campus:     "bg-green-50 text-green-700 border-green-100",
};

export function AnnouncementsPage() {
  const [filter, setFilter] = useState<"all" | "unread" | "important">("all");

  const filtered = announcements.filter((a) => {
    if (filter === "unread") return a.unread;
    if (filter === "important") return a.important;
    return true;
  });

  const unreadCount = announcements.filter((a) => a.unread).length;

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
              className={`relative px-4 py-3.5 text-sm font-medium capitalize whitespace-nowrap transition-colors ${filter === f ? "text-blue-700" : "text-gray-500 hover:text-gray-800"}`}
            >
              {f === "all" ? "All Announcements" : f === "unread" ? "Unread" : "Important"}
              {filter === f && <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-t-full bg-blue-600" />}
            </button>
          ))}
        </div>
      </div>

      {/* Announcement list */}
      <div className="space-y-4">
        {filtered.map((a) => (
          <div
            key={a.id}
            className={`bg-white rounded-2xl border shadow-sm p-6 transition-colors hover:shadow-md ${a.important ? "border-blue-100" : "border-gray-100"}`}
          >
            <div className="flex items-start gap-4">
              {/* Unread dot */}
              <div className="mt-1.5 shrink-0">
                <span className={`w-2.5 h-2.5 rounded-full block ${a.unread ? "bg-blue-500" : "bg-transparent"}`} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1.5">
                  <h3 className={`text-base font-bold ${a.unread ? "text-gray-900" : "text-gray-700"}`}>{a.title}</h3>
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
        ))}
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

const conversations: Message[] = [
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
// PROFILE PAGE
// ─────────────────────────────────────────────────────────────────────────────
export function ProfilePage({ userName, onNameChange }: { userName: string; onNameChange?: (name: string) => void }) {
  const [profile, setProfile] = useState({
    fullName:    userName,
    email:       "richard.vitug@student.edu.au",
    phone:       "+61 412 345 678",
    dateOfBirth: "14 March 2003",
  });
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(profile);

  const initials = profile.fullName.split(" ").filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join("");

  const openEdit = () => { setDraft(profile); setEditing(true); };
  const cancel   = () => setEditing(false);
  const save     = () => {
    setProfile(draft);
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
          <button onClick={openEdit} className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-all" style={{ background: "#1a3a9e" }}>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-1">{profile.fullName}</h2>
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
              { label: "Full Name",     value: profile.fullName },
              { label: "Student ID",    value: "S00123456" },
              { label: "Email Address", value: profile.email },
              { label: "Phone Number",  value: profile.phone },
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
              <button onClick={save} className="flex-1 py-2.5 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-all" style={{ background: "#1a3a9e" }}>
                Save Changes
              </button>
              <button onClick={cancel} className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-gray-600 border border-gray-200 hover:bg-gray-50 transition-all">
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
interface SettingsState {
  email: string;
  phone: string;
  notifAssignment: boolean;
  notifQuiz: boolean;
  notifAnnouncement: boolean;
  notifMessage: boolean;
  language: string;
  timezone: string;
  theme: string;
  twoFactor: boolean;
}

export function SettingsPage() {
  const [saved, setSaved] = useState(false);
  const [s, setS] = useState<SettingsState>({
    email: "richard.vitug@student.edu.au",
    phone: "+61 412 345 678",
    notifAssignment: true,
    notifQuiz: true,
    notifAnnouncement: true,
    notifMessage: false,
    language: "English",
    timezone: "Australia/Sydney (AEST, UTC+10)",
    theme: "Light",
    twoFactor: false,
  });

  const toggle = (key: keyof SettingsState) =>
    setS((prev) => ({ ...prev, [key]: !prev[key] }));

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
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
              <input
                type="email"
                value={s.email}
                onChange={(e) => setS((p) => ({ ...p, email: e.target.value }))}
                className="text-sm text-gray-700 border border-gray-200 rounded-xl px-3 py-2 w-60 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50"
              />
            </Field>
            <Field label="Phone Number" sub="Optional — used for two-factor authentication">
              <input
                type="tel"
                value={s.phone}
                onChange={(e) => setS((p) => ({ ...p, phone: e.target.value }))}
                className="text-sm text-gray-700 border border-gray-200 rounded-xl px-3 py-2 w-60 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50"
              />
            </Field>
            <Field label="Change Password" sub="Update your login password">
              <button className="text-sm font-semibold text-blue-700 border border-blue-100 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-xl transition-colors flex items-center gap-2">
                <IconKey /> Change Password
              </button>
            </Field>
          </Section>

          {/* Preferences */}
          <Section title="Preferences">
            <Field label="Language" sub="Interface display language">
              <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 bg-gray-50 text-sm text-gray-700 cursor-pointer">
                <IconGlobe />
                <span>{s.language}</span>
                <IconChevronDown className="w-3.5 h-3.5 text-gray-400" />
              </div>
            </Field>
            <Field label="Time Zone" sub="Used for scheduling and deadlines">
              <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 bg-gray-50 text-sm text-gray-700 cursor-pointer max-w-[260px]">
                <span className="truncate">{s.timezone}</span>
                <IconChevronDown className="w-3.5 h-3.5 text-gray-400 shrink-0" />
              </div>
            </Field>
            <Field label="Theme" sub="Portal appearance">
              <div className="flex gap-2">
                {["Light", "Dark"].map((t) => (
                  <button
                    key={t}
                    onClick={() => setS((p) => ({ ...p, theme: t }))}
                    className={`text-sm font-medium px-4 py-2 rounded-xl border transition-colors ${s.theme === t ? "border-blue-600 text-blue-700 bg-blue-50" : "border-gray-200 text-gray-600 hover:bg-gray-50"}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </Field>
          </Section>
        </div>

        <div>
          {/* Notifications */}
          <Section title="Notifications">
            <Field label="Assignment Notifications" sub="Get alerts when assignments are due or updated">
              <Toggle on={s.notifAssignment} onChange={() => toggle("notifAssignment")} />
            </Field>
            <Field label="Quiz Notifications" sub="Get alerts for upcoming quizzes and results">
              <Toggle on={s.notifQuiz} onChange={() => toggle("notifQuiz")} />
            </Field>
            <Field label="Announcement Notifications" sub="Receive university and course announcements">
              <Toggle on={s.notifAnnouncement} onChange={() => toggle("notifAnnouncement")} />
            </Field>
            <Field label="Message Notifications" sub="Be notified when you receive a new message">
              <Toggle on={s.notifMessage} onChange={() => toggle("notifMessage")} />
            </Field>
          </Section>

          {/* Privacy & Security */}
          <Section title="Privacy &amp; Security">
            <Field label="Two-Factor Authentication" sub="Add an extra layer of security to your account">
              <Toggle on={s.twoFactor} onChange={() => toggle("twoFactor")} />
            </Field>
            <Field label="Active Sessions" sub="Manage devices that are signed in to your account">
              <button className="flex items-center gap-2 text-sm font-semibold text-blue-700 border border-blue-100 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-xl transition-colors">
                <IconShield /> View Sessions
              </button>
            </Field>
            <Field label="Data &amp; Privacy" sub="Manage your data and privacy preferences">
              <button className="flex items-center gap-2 text-sm font-semibold text-gray-600 border border-gray-200 bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-xl transition-colors">
                <IconUser /> Manage Data
              </button>
            </Field>
          </Section>
        </div>
      </div>

      {/* Save */}
      <div className="flex items-center gap-4 pt-2">
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white shadow-sm hover:opacity-90 transition-all"
          style={{ background: "#1a3a9e" }}
        >
          {saved ? "Saved!" : "Save Changes"}
        </button>
        {saved && <span className="text-sm text-green-600 font-medium">Your settings have been saved.</span>}
      </div>
    </div>
  );
}
