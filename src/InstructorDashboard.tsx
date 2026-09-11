"use client";

import { useState, useEffect } from "react";
import { getSessionUser, getInitials } from "./auth";

// ── Icons ─────────────────────────────────────────────────────────────────────
const IconGraduationCap = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
  </svg>
);
const IconDashboard = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
  </svg>
);
const IconBook = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 shrink-0">
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
  </svg>
);
const IconUsers = ({ className = "w-5 h-5 shrink-0" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
  </svg>
);
const IconAssignment = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 shrink-0">
    <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="9" y1="7" x2="15" y2="7" /><line x1="9" y1="11" x2="15" y2="11" /><line x1="9" y1="15" x2="12" y2="15" />
  </svg>
);
const IconQuiz = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 shrink-0">
    <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);
const IconFolder = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 shrink-0">
    <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
  </svg>
);
const IconGrades = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 shrink-0">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);
const IconAnnouncement = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 shrink-0">
    <path d="M3 11l19-9-9 19-2-8-8-2z" />
  </svg>
);
const IconCalendar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 shrink-0">
    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const IconMessage = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 shrink-0">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
  </svg>
);
const IconProfile = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 shrink-0">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
  </svg>
);
const IconSettings = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 shrink-0">
    <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
  </svg>
);
const IconLogout = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 shrink-0">
    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);
const IconBell = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" />
  </svg>
);
const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
  </svg>
);
const IconSearch = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const IconChevronsLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <polyline points="11 17 6 12 11 7" /><polyline points="18 17 13 12 18 7" />
  </svg>
);
const IconChevronsRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <polyline points="13 17 18 12 13 7" /><polyline points="6 17 11 12 6 7" />
  </svg>
);
const IconChevronRight = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
    <polyline points="9 18 15 12 9 6" />
  </svg>
);
const IconChevronDown = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
const IconCheck = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const IconClock = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const IconStar = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);
const IconEdit = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);
const IconEye = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
  </svg>
);
const IconUpload = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polyline points="16 16 12 12 8 16" /><line x1="12" y1="12" x2="12" y2="21" />
    <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
  </svg>
);
const IconVideo = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" />
  </svg>
);
const IconPlus = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
const IconFilter = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
);
const IconBarChart = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
    <line x1="2" y1="20" x2="22" y2="20" />
  </svg>
);
const IconAlertCircle = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);
const IconX = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const IconDownload = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polyline points="8 17 12 21 16 17" /><line x1="12" y1="12" x2="12" y2="21" />
    <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />
  </svg>
);

// ── Nav Config ────────────────────────────────────────────────────────────────
const navItems = [
  { label: "Dashboard",          icon: <IconDashboard />,    id: "dashboard" },
  { label: "My Courses",         icon: <IconBook />,         id: "courses" },
  { label: "Students",           icon: <IconUsers />,        id: "students" },
  { label: "Assignments",        icon: <IconAssignment />,   id: "assignments" },
  { label: "Quizzes",            icon: <IconQuiz />,         id: "quizzes" },
  { label: "Learning Materials", icon: <IconFolder />,       id: "materials" },
  { label: "Grades",             icon: <IconGrades />,       id: "grades" },
  { label: "Announcements",      icon: <IconAnnouncement />, id: "announcements" },
  { label: "Calendar",           icon: <IconCalendar />,     id: "calendar" },
  { label: "Messages",           icon: <IconMessage />,      id: "messages" },
  { label: "Profile",            icon: <IconProfile />,      id: "profile" },
  { label: "Settings",           icon: <IconSettings />,     id: "settings" },
];

// ── Sidebar ───────────────────────────────────────────────────────────────────
function InstructorSidebar({
  active, setActive, collapsed, setCollapsed, onLogout,
}: {
  active: string; setActive: (id: string) => void;
  collapsed: boolean; setCollapsed: (v: boolean) => void;
  onLogout: () => void;
}) {
  const w = collapsed ? "w-16" : "w-56";
  return (
    <aside
      className={`fixed top-0 left-0 h-full flex flex-col z-30 transition-all duration-300 ${w}`}
      style={{ background: "#1a3a9e" }}
    >
      <div className={`flex items-center pt-5 pb-4 border-b border-white/10 ${collapsed ? "justify-center px-0" : "px-4 gap-2"}`}>
        {collapsed ? (
          <button onClick={() => setCollapsed(false)} className="text-white hover:text-blue-200 transition-colors flex flex-col items-center gap-1" title="Expand sidebar">
            <IconGraduationCap className="w-7 h-7" />
            <span className="text-[8px] font-bold tracking-wider text-blue-300">EF</span>
          </button>
        ) : (
          <>
            <IconGraduationCap className="w-6 h-6 text-white shrink-0" />
            <div className="flex-1 overflow-hidden">
              <p className="text-white font-bold text-base tracking-tight leading-none truncate">EduFlex</p>
              <p className="text-blue-200 text-[10px] mt-0.5 truncate">Instructor Portal</p>
            </div>
            <button onClick={() => setCollapsed(true)} className="text-blue-200 hover:text-white transition-colors ml-1 p-1 rounded hover:bg-white/10" title="Collapse sidebar">
              <IconChevronsLeft />
            </button>
          </>
        )}
      </div>

      <nav className="flex-1 px-2 py-3 overflow-y-auto space-y-0.5">
        {navItems.map((item) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              title={collapsed ? item.label : undefined}
              className={`w-full flex items-center rounded-lg transition-all duration-150 text-left
                ${collapsed ? "justify-center px-0 py-3" : "gap-3 px-3 py-2.5"}
                ${isActive ? "bg-white/20 text-white" : "text-blue-100 hover:bg-white/10 hover:text-white"}`}
            >
              {item.icon}
              {!collapsed && <span className="text-sm font-medium truncate">{item.label}</span>}
            </button>
          );
        })}
      </nav>

      {collapsed && (
        <div className="px-2 py-3 border-t border-white/10 flex justify-center">
          <button onClick={() => setCollapsed(false)} className="text-blue-200 hover:text-white transition-colors p-2 rounded hover:bg-white/10" title="Expand">
            <IconChevronsRight />
          </button>
        </div>
      )}

      {!collapsed && (
        <div className="px-2 py-4 border-t border-white/10">
          <button onClick={onLogout} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/10 hover:text-white transition-all duration-150">
            <IconLogout /><span>Logout</span>
          </button>
        </div>
      )}
      {collapsed && (
        <div className="px-2 py-4 border-t border-white/10 flex justify-center">
          <button onClick={onLogout} className="text-blue-100 hover:text-white hover:bg-white/10 transition-all p-2 rounded-lg" title="Logout">
            <IconLogout />
          </button>
        </div>
      )}
    </aside>
  );
}

// ── Header ────────────────────────────────────────────────────────────────────
function InstructorHeader({ sidebarW, userName, userInitials }: { sidebarW: string; userName: string; userInitials: string }) {
  return (
    <header
      className="fixed top-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center px-6 gap-4 z-20 transition-all duration-300"
      style={{ left: sidebarW }}
    >
      <div className="flex-1 relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><IconSearch /></span>
        <input
          type="text"
          placeholder="Search courses, students, materials..."
          className="w-full pl-9 pr-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
        />
      </div>
      <div className="flex items-center gap-3 shrink-0">
        <button className="relative text-gray-500 hover:text-blue-700 transition-colors p-1.5 rounded-full hover:bg-gray-100">
          <IconMail />
        </button>
        <button className="relative text-gray-500 hover:text-blue-700 transition-colors p-1.5 rounded-full hover:bg-gray-100">
          <IconBell />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white" />
        </button>
        <div className="flex items-center gap-2 pl-3 border-l border-gray-200">
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-800 leading-tight">{userName}</p>
            <p className="text-xs text-gray-500">Instructor</p>
          </div>
          <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0" style={{ background: "#0e9f6e" }}>
            {userInitials}
          </div>
        </div>
      </div>
    </header>
  );
}

// ── Summary Card ──────────────────────────────────────────────────────────────
function SummaryCard({
  title, value, subtitle, icon, bg, iconBg, textColor, onClick,
}: {
  title: string; value: string; subtitle: string;
  icon: React.ReactNode; bg: string; iconBg: string; textColor: string;
  onClick?: () => void;
}) {
  return (
    <button onClick={onClick} className={`w-full text-left rounded-2xl border shadow-sm p-4 flex items-start gap-3 transition-all hover:shadow-md hover:brightness-95 ${bg}`}>
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${iconBg}`}>
        {icon}
      </div>
      <div>
        <p className={`text-[10px] font-bold uppercase tracking-wider mb-0.5 ${textColor} opacity-70`}>{title}</p>
        <p className={`text-2xl font-extrabold leading-none ${textColor}`}>{value}</p>
        <p className={`text-xs mt-1 ${textColor} opacity-60`}>{subtitle}</p>
      </div>
    </button>
  );
}

// ── Progress Bar ──────────────────────────────────────────────────────────────
function ProgressBar({ pct, color }: { pct: number; color: string }) {
  return (
    <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
      <div className="h-full rounded-full transition-all duration-700" style={{ width: `${pct}%`, background: color }} />
    </div>
  );
}

// ── Dashboard Page ────────────────────────────────────────────────────────────
function DashboardHome({ setActive, userName }: { setActive: (id: string) => void; userName: string }) {
  const greeting = userName.startsWith("Prof.") ? userName.split(" ").slice(0, 2).join(" ") : userName.split(" ")[0];
  const announcements = [
    {
      type: "warning", icon: "⚠️",
      title: "Assignment Submission Deadline Approaching",
      detail: "ICT301 – IT Project 1: Milestone 2 submissions due September 5, 2026 at 11:59 PM",
      time: "1 hr ago", color: "border-l-amber-400 bg-amber-50",
    },
    {
      type: "info", icon: "🎓",
      title: "New Student Enrollment",
      detail: "3 new students enrolled in ICT272 – Web Design and Development this week",
      time: "3 hrs ago", color: "border-l-blue-400 bg-blue-50",
    },
    {
      type: "dept", icon: "📢",
      title: "Department Announcement",
      detail: "Faculty meeting scheduled for September 10, 2026 at 2:00 PM in Room IT-301",
      time: "Yesterday", color: "border-l-purple-400 bg-purple-50",
    },
    {
      type: "exam", icon: "📝",
      title: "Upcoming Assessment",
      detail: "ICT126 – AI: Midterm Quiz scheduled for September 8, 2026. Please prepare the quiz module.",
      time: "2 days ago", color: "border-l-green-400 bg-green-50",
    },
  ];

  const courses = [
    {
      code: "ICT301", name: "Information Technology Project 1",
      students: 32, upcoming: "Milestone 2 submission due Sep 5",
      color: "#2563eb", bg: "bg-blue-50", badge: "bg-blue-100 text-blue-700",
      progress: 55,
    },
    {
      code: "ICT272", name: "Web Design and Development",
      students: 38, upcoming: "Lab Exercise 4 due Sep 7",
      color: "#0e9f6e", bg: "bg-emerald-50", badge: "bg-emerald-100 text-emerald-700",
      progress: 40,
    },
    {
      code: "ICT126", name: "Artificial Intelligence",
      students: 26, upcoming: "Midterm Quiz on Sep 8",
      color: "#7c3aed", bg: "bg-purple-50", badge: "bg-purple-100 text-purple-700",
      progress: 48,
    },
  ];

  const upcomingClasses = [
    { course: "ICT301", date: "Sep 3, 2026", time: "8:00 – 10:00 AM", room: "Room IT-201", online: false },
    { course: "ICT272", date: "Sep 4, 2026", time: "10:00 AM – 12:00 PM", room: "Online – Zoom", online: true },
    { course: "ICT126", date: "Sep 5, 2026", time: "1:00 – 3:00 PM", room: "Room IT-304", online: false },
    { course: "ICT301", date: "Sep 6, 2026", time: "8:00 – 10:00 AM", room: "Room IT-201", online: false },
  ];

  const pendingGrading = [
    { name: "Milestone 2 Draft Report", course: "ICT301", submissions: 28, type: "Assignment" },
    { name: "Lab Exercise 3", course: "ICT272", submissions: 36, type: "Assignment" },
    { name: "Weekly Quiz 3", course: "ICT126", submissions: 24, type: "Quiz" },
  ];

  const recentActivity = [
    { dot: "bg-blue-500", text: "Marco Reyes submitted Milestone 2 – ICT301", time: "5 min ago" },
    { dot: "bg-green-500", text: "New quiz submission received for ICT126 Quiz 3", time: "22 min ago" },
    { dot: "bg-purple-500", text: "Course material uploaded: ICT272 Week 5 Lecture Slides", time: "1 hr ago" },
    { dot: "bg-orange-400", text: "Sofia Tan enrolled in ICT272 – Web Design and Development", time: "2 hrs ago" },
    { dot: "bg-red-400",    text: "Liam Garcia submitted late: ICT126 Assignment 2", time: "3 hrs ago" },
    { dot: "bg-teal-500",   text: "Announcement posted: ICT301 Milestone 2 Rubric Update", time: "4 hrs ago" },
    { dot: "bg-blue-400",   text: "Aisha Patel requested grade review for ICT272 Lab 2", time: "5 hrs ago" },
  ];

  return (
    <div className="p-6">
      {/* Header row */}
      <div className="flex items-start justify-between mb-6 flex-wrap gap-3">
        <div>
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
            <span>Instructor</span><span>/</span>
            <span className="text-gray-600">Dashboard</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, {greeting}!</h1>
          <p className="text-sm text-gray-500 mt-0.5">Here&apos;s an overview of your teaching activities.</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500 bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-sm">
          <IconCalendar />
          <div>
            <p className="text-xs font-semibold text-gray-700">Semester 1 — 2026</p>
            <p className="text-[10px] text-gray-400">Term 1 · Sep 2026 – Jan 2027</p>
          </div>
        </div>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <SummaryCard
          title="My Courses" value="3" subtitle="Active Courses"
          icon={<IconBook />} bg="bg-blue-50 border-blue-100"
          iconBg="bg-blue-600" textColor="text-blue-800"
          onClick={() => setActive("courses")}
        />
        <SummaryCard
          title="Total Students" value="96" subtitle="Students Enrolled"
          icon={<IconUsers />} bg="bg-emerald-50 border-emerald-100"
          iconBg="bg-emerald-600" textColor="text-emerald-800"
          onClick={() => setActive("students")}
        />
        <SummaryCard
          title="Pending Grading" value="12" subtitle="Submissions"
          icon={<IconAssignment />} bg="bg-amber-50 border-amber-100"
          iconBg="bg-amber-500" textColor="text-amber-800"
          onClick={() => setActive("grades")}
        />
        <SummaryCard
          title="Upcoming Classes" value="4" subtitle="This Week"
          icon={<IconCalendar />} bg="bg-purple-50 border-purple-100"
          iconBg="bg-purple-600" textColor="text-purple-800"
          onClick={() => setActive("calendar")}
        />
      </div>

      <div className="space-y-6">

          {/* Announcements */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-gray-800 flex items-center gap-2">
                <IconAnnouncement /><span>Announcements</span>
              </h2>
              <button onClick={() => setActive("announcements")} className="text-xs text-blue-600 font-medium hover:underline">View All</button>
            </div>
            <div className="space-y-3">
              {announcements.map((a, i) => (
                <div key={i} className={`border-l-4 rounded-r-xl px-4 py-3 ${a.color}`}>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{a.icon} {a.title}</p>
                      <p className="text-xs text-gray-600 mt-0.5">{a.detail}</p>
                    </div>
                    <span className="text-[10px] text-gray-400 shrink-0 mt-0.5">{a.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* My Courses */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-gray-800 flex items-center gap-2">
                <IconBook /><span>My Courses</span>
              </h2>
              <button onClick={() => setActive("courses")} className="text-xs text-blue-600 font-medium hover:underline">Manage All</button>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {courses.map((c) => (
                <div key={c.code} className={`rounded-xl border p-4 ${c.bg} border-gray-100 hover:shadow-md transition-shadow cursor-pointer`}>
                  <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full mb-2 ${c.badge}`}>{c.code}</span>
                  <p className="text-sm font-bold text-gray-800 leading-snug mb-2">{c.name}</p>
                  <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
                    <IconUsers className="w-3 h-3" /><span>{c.students} students</span>
                  </div>
                  <div className="mb-2">
                    <div className="flex justify-between text-[10px] text-gray-500 mb-1">
                      <span>Progress</span><span>{c.progress}%</span>
                    </div>
                    <ProgressBar pct={c.progress} color={c.color} />
                  </div>
                  <p className="text-[10px] text-gray-500 mb-3 flex items-center gap-1">
                    <IconClock className="w-3 h-3" />{c.upcoming}
                  </p>
                  <button
                    onClick={() => setActive("courses")}
                    className="w-full text-xs font-semibold py-1.5 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
                    style={{ color: c.color }}
                  >
                    View Course
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Teaching Overview */}
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Upcoming Classes */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-800 flex items-center gap-2">
                  <IconCalendar /><span>Upcoming Classes</span>
                </h2>
                <button onClick={() => setActive("calendar")} className="text-xs text-blue-600 font-medium hover:underline">Calendar</button>
              </div>
              <div className="space-y-3">
                {upcomingClasses.map((cls, i) => (
                  <div key={i} className="flex items-start justify-between gap-2 pb-3 border-b border-gray-50 last:border-0 last:pb-0">
                    <div>
                      <p className="text-xs font-semibold text-gray-800">{cls.course}</p>
                      <p className="text-[10px] text-gray-500">{cls.date} · {cls.time}</p>
                      <p className={`text-[10px] font-medium mt-0.5 ${cls.online ? "text-blue-600" : "text-gray-500"}`}>
                        {cls.room}
                      </p>
                    </div>
                    <button
                      className={`shrink-0 text-[10px] font-semibold px-2.5 py-1 rounded-lg transition-colors ${
                        cls.online
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {cls.online ? "Start Class" : "View Class"}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Pending Grading */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-800 flex items-center gap-2">
                  <IconAssignment /><span>Pending Grading</span>
                </h2>
                <button onClick={() => setActive("grades")} className="text-xs text-blue-600 font-medium hover:underline">All Grades</button>
              </div>
              <div className="space-y-3">
                {pendingGrading.map((g, i) => (
                  <div key={i} className="flex items-start justify-between gap-2 pb-3 border-b border-gray-50 last:border-0 last:pb-0">
                    <div>
                      <p className="text-xs font-semibold text-gray-800">{g.name}</p>
                      <p className="text-[10px] text-gray-500">{g.course} · {g.type}</p>
                      <p className="text-[10px] font-semibold text-amber-600 mt-0.5">{g.submissions} submissions</p>
                    </div>
                    <button
                      onClick={() => setActive("grades")}
                      className="shrink-0 text-[10px] font-semibold px-2.5 py-1 rounded-lg bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100 transition-colors"
                    >
                      Grade Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

// ── Shared Learning Materials Data & Modal ──────────────────────────────────────
export interface LearningMaterialItem {
  id: string;
  title: string;
  course: string;
  courseName: string;
  type: "Slides" | "Document" | "Video";
  category?: "Lecture" | "Tutorial";
  week?: number;
  size: string;
  date: string;
  icon: string;
  description: string;
}

export const INSTRUCTOR_LEARNING_MATERIALS: LearningMaterialItem[] = [
  {
    id: "mat-ict301-w1-lec",
    title: "Week 1 Lecture: System Analysis & Design",
    course: "ICT301",
    courseName: "Information Technology Project 1",
    type: "Slides",
    category: "Lecture",
    week: 1,
    size: "3.4 MB",
    date: "Aug 18, 2026",
    icon: "📊",
    description: "Foundational lecture slide deck covering systems thinking, stakeholder requirements elicitation, problem framing, and UML domain modeling standards.",
  },
  {
    id: "mat-ict301-w1-tut",
    title: "Week 1 Tutorial: Requirements Engineering Worksheet",
    course: "ICT301",
    courseName: "Information Technology Project 1",
    type: "Document",
    category: "Tutorial",
    week: 1,
    size: "1.2 MB",
    date: "Aug 19, 2026",
    icon: "📄",
    description: "Hands-on tutorial worksheet and exercises guiding students through user story authoring, acceptance criteria formulation, and requirements traceability.",
  },
  {
    id: "mat-ict301-w2-lec",
    title: "Week 2 Lecture: Project Planning & Estimation",
    course: "ICT301",
    courseName: "Information Technology Project 1",
    type: "Slides",
    category: "Lecture",
    week: 2,
    size: "4.1 MB",
    date: "Aug 25, 2026",
    icon: "📊",
    description: "Lecture presentation on Work Breakdown Structure (WBS), Gantt scheduling, critical path method, PERT estimation, and resource allocation frameworks.",
  },
  {
    id: "mat-ict301-w2-tut",
    title: "Week 2 Tutorial: Project Charter & Estimation Template",
    course: "ICT301",
    courseName: "Information Technology Project 1",
    type: "Document",
    category: "Tutorial",
    week: 2,
    size: "850 KB",
    date: "Aug 26, 2026",
    icon: "📋",
    description: "Interactive project charter template and spreadsheet model for sprint velocity planning, milestone cost estimation, and risk assessment matrices.",
  },
  {
    id: "mat-ict301-rubric",
    title: "Project Milestone 2 Rubric",
    course: "ICT301",
    courseName: "Information Technology Project 1",
    type: "Document",
    size: "0.5 MB",
    date: "Aug 30, 2026",
    icon: "📋",
    description: "Detailed grading rubric, assessment criteria, and submission checklist for Milestone 2 Preliminary Design & Architecture.",
  },
  {
    id: "mat-ict301-agile",
    title: "Agile Methodology Handbook",
    course: "ICT301",
    courseName: "Information Technology Project 1",
    type: "Document",
    size: "2.8 MB",
    date: "Aug 27, 2026",
    icon: "📄",
    description: "Comprehensive guide to Agile workflows, Scrum ceremonies, sprint planning, daily standups, and retrospective practices.",
  },
  {
    id: "mat-ict272-w5-lec",
    title: "Week 5 Lecture Slides",
    course: "ICT272",
    courseName: "Web Design and Development",
    type: "Slides",
    category: "Lecture",
    week: 5,
    size: "3.2 MB",
    date: "Sep 2, 2026",
    icon: "📊",
    description: "Lecture slides focusing on React hooks (useState, useEffect), component lifecycle, and state lifting techniques.",
  },
  {
    id: "mat-ict272-w5-vid",
    title: "React Tutorial – Week 5",
    course: "ICT272",
    courseName: "Web Design and Development",
    type: "Video",
    category: "Tutorial",
    week: 5,
    size: "480 MB",
    date: "Aug 29, 2026",
    icon: "🎬",
    description: "Guided code-along screen recording building interactive React components and managing state across child views.",
  },
  {
    id: "mat-ict272-grid",
    title: "CSS Grid & Flexbox Cheatsheet",
    course: "ICT272",
    courseName: "Web Design and Development",
    type: "Document",
    size: "0.8 MB",
    date: "Aug 26, 2026",
    icon: "📄",
    description: "Visual cheat sheet and quick syntax reference for 2D CSS Grid layouts and 1D Flexbox alignment rules.",
  },
  {
    id: "mat-ict126-ethics",
    title: "AI Ethics Reading Guide",
    course: "ICT126",
    courseName: "Artificial Intelligence",
    type: "Document",
    size: "1.1 MB",
    date: "Sep 1, 2026",
    icon: "📄",
    description: "Annotated readings on ethical challenges in autonomous AI, bias detection, fairness constraints, and alignment standards.",
  },
  {
    id: "mat-ict126-nn-vid",
    title: "Neural Networks Intro Video",
    course: "ICT126",
    courseName: "Artificial Intelligence",
    type: "Video",
    size: "620 MB",
    date: "Aug 28, 2026",
    icon: "🎬",
    description: "Animated overview explaining biological vs artificial neurons, activation functions, loss gradients, and backpropagation.",
  },
  {
    id: "mat-ict126-ml-chart",
    title: "ML Algorithm Comparison Chart",
    course: "ICT126",
    courseName: "Artificial Intelligence",
    type: "Slides",
    size: "4.5 MB",
    date: "Aug 25, 2026",
    icon: "📊",
    description: "Comparative matrix analyzing supervised, unsupervised, and reinforcement learning algorithms and decision boundaries.",
  },
];

function MaterialPreviewModal({
  material,
  onClose,
  onDownload,
  onNavigateToMaterialsHub,
}: {
  material: LearningMaterialItem | null;
  onClose: () => void;
  onDownload: (material: LearningMaterialItem) => void;
  onNavigateToMaterialsHub?: () => void;
}) {
  if (!material) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/70">
          <div className="flex items-center gap-3">
            <span className="text-2xl p-1.5 rounded-xl bg-white shadow-xs border border-gray-100">{material.icon}</span>
            <div>
              <h3 className="text-base font-bold text-gray-900 leading-snug">{material.title}</h3>
              <p className="text-xs text-blue-600 font-semibold">{material.course} — {material.courseName}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            title="Close modal"
          >
            <IconX className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          {/* Metadata badges */}
          <div className="flex flex-wrap items-center gap-2">
            {material.week && (
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-100 text-blue-800">
                Week {material.week}
              </span>
            )}
            {material.category && (
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-100 text-purple-800">
                {material.category}
              </span>
            )}
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">
              {material.type}
            </span>
            <span className="text-xs text-gray-500 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-200">
              {material.size}
            </span>
            <span className="text-xs text-gray-400">
              Uploaded on {material.date}
            </span>
          </div>

          {/* Description */}
          <div className="bg-gray-50 rounded-xl p-3.5 text-xs text-gray-600 leading-relaxed border border-gray-100">
            <p className="font-semibold text-gray-700 mb-1">Description & Learning Objectives:</p>
            {material.description}
          </div>

          {/* Interactive Document / Slide Preview Window */}
          <div className="rounded-xl border border-gray-200 bg-slate-950 text-slate-100 p-4 shadow-inner">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs text-slate-400 mb-4">
              <span className="flex items-center gap-1.5 font-medium text-slate-300 truncate">
                <span>📄</span> <span className="truncate">{material.title}</span>
              </span>
              <span className="bg-slate-800 px-2 py-0.5 rounded text-[11px] text-slate-300 shrink-0">
                Preview Mode · Page 1 of 24
              </span>
            </div>

            {/* Simulated Document / Slide Canvas */}
            <div className="bg-white text-gray-900 rounded-lg p-6 min-h-[170px] shadow-sm flex flex-col justify-between border border-slate-200">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                    {material.course} · {material.courseName}
                  </span>
                  <span className="text-[10px] text-gray-400">EduFlex Academic LMS</span>
                </div>
                <h4 className="text-base font-bold text-gray-900">{material.title}</h4>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  {material.description}
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-400 flex-wrap gap-2">
                <span>Instructor: Prof. Sarita Koirala</span>
                <span>Term 2, Academic Year 2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 bg-gray-50/70 gap-3">
          {onNavigateToMaterialsHub ? (
            <button
              onClick={onNavigateToMaterialsHub}
              className="text-xs text-blue-600 hover:text-blue-800 hover:underline font-medium flex items-center gap-1 cursor-pointer"
            >
              <span>View in Learning Materials Hub →</span>
            </button>
          ) : (
            <div />
          )}

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-600 bg-white border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => onDownload(material)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white transition-colors cursor-pointer"
              style={{ background: "#1a3a9e" }}
            >
              <IconDownload className="w-3.5 h-3.5" />
              <span>Download ({material.size})</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── My Courses Page ───────────────────────────────────────────────────────────
function MyCoursesPage({ setActive }: { setActive: (id: string) => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [subView, setSubView] = useState<"topics" | "upcoming" | "students" | null>(null);
  const [expandedWeeks, setExpandedWeeks] = useState<number[]>([1, 2]);
  const [selectedMaterial, setSelectedMaterial] = useState<LearningMaterialItem | null>(null);
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  const toggleWeek = (week: number) => {
    setExpandedWeeks((prev) =>
      prev.includes(week) ? prev.filter((w) => w !== week) : [...prev, week]
    );
  };

  const handleDownload = (material: LearningMaterialItem) => {
    setDownloadToast(`${material.title} (${material.size})`);
    setTimeout(() => {
      setDownloadToast(null);
    }, 3500);
  };

  const courses = [
    {
      code: "ICT301", name: "Information Technology Project 1", credits: 3,
      students: 32, schedule: "Mon/Wed 8:00–10:00 AM", room: "IT-201",
      progress: 55, color: "#2563eb", bg: "from-blue-50 to-white",
      badge: "bg-blue-100 text-blue-700", borderColor: "border-blue-200",
      topics: ["System Analysis & Design", "Project Planning", "Agile Methodology", "Documentation Standards"],
      allTopics: [
        { title: "System Analysis & Design", desc: "Foundational software requirements engineering, problem framing, and system modeling." },
        { title: "Project Planning & Estimation", desc: "Gantt charting, milestone breakdown structures, and resource allocation." },
      ],
      upcoming: [
        { label: "Milestone 2 Due", date: "Sep 5, 2026", type: "Assignment" },
        { label: "Sprint Review", date: "Sep 10, 2026", type: "Class" },
      ],
      allUpcoming: [
        { label: "Milestone 2 Due", date: "Sep 5, 2026", type: "Assignment", detail: "ICT301 Preliminary Design & Architecture Submission" },
        { label: "ICT301 Lecture: CI/CD Pipelines", date: "Sep 6, 2026", type: "Class", detail: "Room IT-201 · 8:00–10:00 AM" },
        { label: "Sprint Review & Milestone Check", date: "Sep 10, 2026", type: "Class", detail: "Room IT-201 · 8:00–10:00 AM" },
        { label: "Weekly Quiz 3: Project Management", date: "Sep 12, 2026", type: "Quiz", detail: "Online Quiz · 15 Multiple Choice Questions" },
        { label: "Milestone 3 Draft Submissions", date: "Sep 18, 2026", type: "Assignment", detail: "Working software prototype demonstration" },
        { label: "Final Project Defense & Showcase", date: "Sep 25, 2026", type: "Class", detail: "Auditorium A · 9:00 AM–1:00 PM" },
      ],
      students_list: [
        { name: "Marco Reyes", id: "STU-0231", grade: "B+" },
        { name: "Sofia Tan", id: "STU-0198", grade: "A" },
        { name: "Liam Garcia", id: "STU-0274", grade: "B" },
      ],
      allStudents: [
        { name: "Marco Reyes", id: "STU-0231", email: "m.reyes@student.edu", grade: "B+", status: "Active", submitted: 8, total: 10 },
        { name: "Liam Garcia", id: "STU-0274", email: "l.garcia@student.edu", grade: "B", status: "Active", submitted: 7, total: 10 },
        { name: "Luna Santos", id: "STU-0422", email: "l.santos@student.edu", grade: "C+", status: "At Risk", submitted: 5, total: 10 },
        { name: "Chloe Taylor", id: "STU-0455", email: "c.taylor@student.edu", grade: "A", status: "Active", submitted: 10, total: 10 },
        { name: "Daniel Lee", id: "STU-0466", email: "d.lee@student.edu", grade: "B+", status: "Active", submitted: 9, total: 10 },
        { name: "Emily Watson", id: "STU-0477", email: "e.watson@student.edu", grade: "A-", status: "Active", submitted: 9, total: 10 },
      ],
    },
    {
      code: "ICT272", name: "Web Design and Development", credits: 3,
      students: 38, schedule: "Tue/Thu 10:00 AM–12:00 PM", room: "Online – Zoom",
      progress: 40, color: "#0e9f6e", bg: "from-emerald-50 to-white",
      badge: "bg-emerald-100 text-emerald-700", borderColor: "border-emerald-200",
      topics: ["HTML5 & CSS3", "JavaScript Fundamentals", "React.js Basics", "Responsive Design"],
      allTopics: [
        { title: "HTML5 & CSS3 Semantics", desc: "Semantic markup, modern layout techniques, and modern styling rules." },
        { title: "JavaScript Fundamentals & ES6+", desc: "Arrow functions, destructuring, promises, and async/await." },
        { title: "DOM Manipulation & Events", desc: "Browser events, element selectors, and event delegation patterns." },
        { title: "Responsive Design & Flexbox/Grid", desc: "Mobile-first layouts, breakpoints, container queries, and fluid typography." },
        { title: "React.js Basics & Component Architecture", desc: "JSX, props, unidirectional data flow, and composable UI design." },
        { title: "React State Management & Hooks", desc: "useState, useEffect, custom hooks, and shared application state." },
        { title: "Web Accessibility (WCAG 2.1)", desc: "ARIA landmarks, screen reader optimization, and color contrast compliance." },
        { title: "REST APIs & Client Integration", desc: "Fetching remote datasets, JSON parsing, error boundaries, and loading states." },
      ],
      upcoming: [
        { label: "Lab Exercise 4 Due", date: "Sep 7, 2026", type: "Assignment" },
        { label: "Online Lecture Week 5", date: "Sep 9, 2026", type: "Class" },
      ],
      allUpcoming: [
        { label: "Lab Exercise 3: DOM Manipulation", date: "Sep 3, 2026", type: "Assignment", detail: "Interactive JavaScript task submission" },
        { label: "ICT272 Online Lecture: React Hooks", date: "Sep 4, 2026", type: "Class", detail: "Online – Zoom · 10:00 AM–12:00 PM" },
        { label: "Lab Exercise 4 Due", date: "Sep 7, 2026", type: "Assignment", detail: "React component building exercise" },
        { label: "Online Lecture Week 5: Styling Systems", date: "Sep 9, 2026", type: "Class", detail: "Online – Zoom · 10:00 AM–12:00 PM" },
        { label: "Lab Quiz 1: JavaScript & Web Concepts", date: "Sep 10, 2026", type: "Quiz", detail: "Timed online quiz · 20 Questions" },
        { label: "Midterm Interactive Prototype Project", date: "Sep 20, 2026", type: "Assignment", detail: "Full responsive Single Page Application" },
      ],
      students_list: [
        { name: "Aisha Patel", id: "STU-0312", grade: "A-" },
        { name: "Ethan Cruz", id: "STU-0299", grade: "B+" },
        { name: "Maya Lopez", id: "STU-0344", grade: "A" },
      ],
      allStudents: [
        { name: "Sofia Tan", id: "STU-0198", email: "s.tan@student.edu", grade: "A", status: "Active", submitted: 10, total: 10 },
        { name: "Aisha Patel", id: "STU-0312", email: "a.patel@student.edu", grade: "A-", status: "Active", submitted: 9, total: 10 },
        { name: "Ethan Cruz", id: "STU-0299", email: "e.cruz@student.edu", grade: "B+", status: "Active", submitted: 9, total: 10 },
        { name: "Maya Lopez", id: "STU-0344", email: "m.lopez@student.edu", grade: "A", status: "Active", submitted: 10, total: 10 },
        { name: "Raj Sharma", id: "STU-0433", email: "r.sharma@student.edu", grade: "B", status: "Active", submitted: 8, total: 10 },
        { name: "Ben Miller", id: "STU-0488", email: "b.miller@student.edu", grade: "B+", status: "Active", submitted: 8, total: 10 },
      ],
    },
    {
      code: "ICT126", name: "Artificial Intelligence", credits: 3,
      students: 26, schedule: "Fri 1:00–3:00 PM", room: "IT-304",
      progress: 48, color: "#7c3aed", bg: "from-purple-50 to-white",
      badge: "bg-purple-100 text-purple-700", borderColor: "border-purple-200",
      topics: ["Introduction to AI", "Machine Learning Basics", "Neural Networks", "Ethical AI"],
      allTopics: [
        { title: "Introduction to AI & Intelligent Agents", desc: "Agent environments, rationality, Turing test, and foundational paradigms." },
        { title: "Problem Solving & Search Algorithms", desc: "Uninformed search (BFS, DFS) and informed heuristic search (A* Search)." },
        { title: "Machine Learning Basics & Supervised Learning", desc: "Linear regression, logistic regression, and decision tree classifiers." },
        { title: "Unsupervised Learning & Clustering", desc: "K-means, dimensionality reduction via PCA, and clustering evaluation." },
        { title: "Neural Networks & Deep Learning", desc: "Perceptrons, backpropagation, activation functions, and convolutional layers." },
        { title: "Natural Language Processing (NLP)", desc: "Tokenization, bag-of-words, TF-IDF, transformers, and sentiment analysis." },
        { title: "Ethical AI, Bias & Fairness", desc: "Algorithmic bias, safety alignment, transparency, and regulation standards." },
        { title: "Reinforcement Learning & Future Trends", desc: "Markov decision processes, Q-learning, and autonomous systems outlook." },
      ],
      upcoming: [
        { label: "Midterm Quiz", date: "Sep 8, 2026", type: "Quiz" },
        { label: "AI Case Study Presentation", date: "Sep 19, 2026", type: "Assignment" },
      ],
      allUpcoming: [
        { label: "Assignment 2: ML Algorithm Analysis", date: "Sep 4, 2026", type: "Assignment", detail: "Classifier benchmark comparison report" },
        { label: "ICT126 Lab: Neural Network Training", date: "Sep 5, 2026", type: "Class", detail: "Room IT-304 · 1:00–3:00 PM" },
        { label: "Midterm Quiz: Core AI Foundations", date: "Sep 8, 2026", type: "Quiz", detail: "Lab Quiz · 25 Multiple Choice & Short Answer" },
        { label: "AI Ethics Reading Reflection", date: "Sep 14, 2026", type: "Assignment", detail: "Short paper on algorithmic transparency" },
        { label: "AI Case Study Presentation", date: "Sep 19, 2026", type: "Assignment", detail: "Group presentation and slide deck submission" },
        { label: "Term Project: Deep Learning Pipeline", date: "Sep 28, 2026", type: "Assignment", detail: "Computer vision classification model submission" },
      ],
      students_list: [
        { name: "Noah Kim", id: "STU-0401", grade: "A+" },
        { name: "Priya Nair", id: "STU-0388", grade: "B" },
        { name: "Carlos Vega", id: "STU-0411", grade: "B+" },
      ],
      allStudents: [
        { name: "Noah Kim", id: "STU-0401", email: "n.kim@student.edu", grade: "A+", status: "Active", submitted: 10, total: 10 },
        { name: "Priya Nair", id: "STU-0388", email: "p.nair@student.edu", grade: "B", status: "Active", submitted: 7, total: 10 },
        { name: "Carlos Vega", id: "STU-0411", email: "c.vega@student.edu", grade: "B+", status: "Active", submitted: 8, total: 10 },
        { name: "Zoe Andrade", id: "STU-0444", email: "z.andrade@student.edu", grade: "A-", status: "Active", submitted: 9, total: 10 },
        { name: "Lucas Scott", id: "STU-0499", email: "l.scott@student.edu", grade: "B", status: "Active", submitted: 7, total: 10 },
        { name: "Hana Tanaka", id: "STU-0501", email: "h.tanaka@student.edu", grade: "A", status: "Active", submitted: 10, total: 10 },
      ],
    },
  ];

  const selectedCourse = courses.find((c) => c.code === selected);

  if (selectedCourse && subView === "topics") {
    const displayTopics = (selectedCourse.allTopics || []).slice(0, 2);

    return (
      <div className="p-6">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
          <button onClick={() => { setSelected(null); setSubView(null); }} className="hover:text-blue-600 transition-colors">My Courses</button>
          <span>/</span>
          <button onClick={() => setSubView(null)} className="hover:text-blue-600 transition-colors">{selectedCourse.code}</button>
          <span>/</span>
          <span className="text-gray-600">Course Topics</span>
        </div>
        <button onClick={() => setSubView(null)} className="mb-4 flex items-center gap-1.5 text-sm text-blue-600 hover:underline font-medium cursor-pointer">
          ← Back to {selectedCourse.code} Overview
        </button>

        <div className={`rounded-2xl border ${selectedCourse.borderColor} bg-gradient-to-r ${selectedCourse.bg} p-6 mb-6`}>
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-2 ${selectedCourse.badge}`}>{selectedCourse.code}</span>
              <h1 className="text-xl font-bold text-gray-900">Course Topics — {selectedCourse.name}</h1>
              <p className="text-sm text-gray-500 mt-1">
                Active curriculum syllabus and weekly learning materials (Week 1 &amp; Week 2 active)
              </p>
            </div>
            <span className="text-xs font-semibold text-gray-500 bg-white border border-gray-200 px-3 py-1.5 rounded-xl">
              {selectedCourse.credits} Credits · {selectedCourse.schedule}
            </span>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
            <div>
              <h2 className="text-sm font-bold text-gray-900">Weekly Modules</h2>
              <p className="text-xs text-gray-500">Expand a week to view associated lecture and tutorial learning materials</p>
            </div>
            <button
              onClick={() => {
                if (expandedWeeks.length === displayTopics.length) {
                  setExpandedWeeks([]);
                } else {
                  setExpandedWeeks(displayTopics.map((_, i) => i + 1));
                }
              }}
              className="text-xs text-blue-600 font-semibold hover:underline cursor-pointer"
            >
              {expandedWeeks.length === displayTopics.length ? "Collapse All" : "Expand All"}
            </button>
          </div>

          <div className="space-y-4">
            {displayTopics.map((topic, i) => {
              const weekNum = i + 1;
              const isExpanded = expandedWeeks.includes(weekNum);
              const weekMaterials = INSTRUCTOR_LEARNING_MATERIALS.filter(
                (m) => m.course === selectedCourse.code && m.week === weekNum
              );
              const lectureMaterial = weekMaterials.find((m) => m.category === "Lecture");
              const tutorialMaterial = weekMaterials.find((m) => m.category === "Tutorial");

              return (
                <div
                  key={i}
                  className="rounded-2xl border border-gray-200/80 bg-white overflow-hidden shadow-xs hover:border-gray-300 transition-all"
                >
                  {/* Expandable Topic Header */}
                  <button
                    onClick={() => toggleWeek(weekNum)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-gray-50/70 transition-colors cursor-pointer"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-start gap-3.5 flex-1 pr-4">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5 shadow-xs"
                        style={{ background: selectedCourse.color }}
                      >
                        {weekNum}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                            Week {weekNum}
                          </span>
                          <h3 className="text-sm sm:text-base font-bold text-gray-900">
                            Week {weekNum} — {topic.title}
                          </h3>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed">{topic.desc}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-[11px] text-gray-400 font-medium hidden sm:inline-block bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-lg">
                        {weekMaterials.length > 0 ? `${weekMaterials.length} materials` : "2 materials"}
                      </span>
                      <span
                        className={`w-7 h-7 rounded-lg flex items-center justify-center bg-gray-100 text-gray-500 hover:bg-gray-200 transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      >
                        <IconChevronDown className="w-4 h-4" />
                      </span>
                    </div>
                  </button>

                  {/* Collapsible Materials Area */}
                  {isExpanded && (
                    <div className="border-t border-gray-100 bg-gray-50/40 p-4 sm:p-5 space-y-4">
                      {/* Lecture Section */}
                      <div>
                        <div className="flex items-center gap-2 mb-2.5">
                          <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-gray-600">
                            Lecture Materials
                          </span>
                        </div>
                        {lectureMaterial ? (
                          <div className="bg-white rounded-xl border border-gray-200/80 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:shadow-xs hover:border-blue-200 transition-all">
                            <div className="flex items-start gap-3">
                              <span className="text-2xl shrink-0 p-1.5 rounded-xl bg-blue-50 border border-blue-100">
                                {lectureMaterial.icon}
                              </span>
                              <div>
                                <h4 className="text-sm font-bold text-gray-800 hover:text-blue-600 transition-colors">
                                  {lectureMaterial.title}
                                </h4>
                                <div className="flex items-center gap-2 mt-1 text-[11px] text-gray-500 flex-wrap">
                                  <span className="font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                                    {lectureMaterial.course} — {lectureMaterial.courseName}
                                  </span>
                                  <span>·</span>
                                  <span>{lectureMaterial.type}</span>
                                  <span>·</span>
                                  <span>{lectureMaterial.size}</span>
                                  <span>·</span>
                                  <span>Uploaded {lectureMaterial.date}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                              <button
                                onClick={() => setSelectedMaterial(lectureMaterial)}
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors cursor-pointer"
                              >
                                <IconEye className="w-3.5 h-3.5" />
                                <span>Preview</span>
                              </button>
                              <button
                                onClick={() => handleDownload(lectureMaterial)}
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-white transition-colors cursor-pointer"
                                style={{ background: "#1a3a9e" }}
                                title="Download Lecture Material"
                              >
                                <IconDownload className="w-3.5 h-3.5" />
                                <span>Download</span>
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="bg-white rounded-xl border border-dashed border-gray-200 p-4 text-xs text-gray-400 text-center">
                            No lecture materials uploaded for this week.
                          </div>
                        )}
                      </div>

                      {/* Tutorial Section */}
                      <div>
                        <div className="flex items-center gap-2 mb-2.5">
                          <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-gray-600">
                            Tutorial Materials
                          </span>
                        </div>
                        {tutorialMaterial ? (
                          <div className="bg-white rounded-xl border border-gray-200/80 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:shadow-xs hover:border-teal-200 transition-all">
                            <div className="flex items-start gap-3">
                              <span className="text-2xl shrink-0 p-1.5 rounded-xl bg-teal-50 border border-teal-100">
                                {tutorialMaterial.icon}
                              </span>
                              <div>
                                <h4 className="text-sm font-bold text-gray-800 hover:text-teal-700 transition-colors">
                                  {tutorialMaterial.title}
                                </h4>
                                <div className="flex items-center gap-2 mt-1 text-[11px] text-gray-500 flex-wrap">
                                  <span className="font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                                    {tutorialMaterial.course} — {tutorialMaterial.courseName}
                                  </span>
                                  <span>·</span>
                                  <span>{tutorialMaterial.type}</span>
                                  <span>·</span>
                                  <span>{tutorialMaterial.size}</span>
                                  <span>·</span>
                                  <span>Uploaded {tutorialMaterial.date}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                              <button
                                onClick={() => setSelectedMaterial(tutorialMaterial)}
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-gray-100 text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors cursor-pointer"
                              >
                                <IconEye className="w-3.5 h-3.5" />
                                <span>Preview</span>
                              </button>
                              <button
                                onClick={() => handleDownload(tutorialMaterial)}
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-white transition-colors cursor-pointer"
                                style={{ background: "#1a3a9e" }}
                                title="Download Tutorial Material"
                              >
                                <IconDownload className="w-3.5 h-3.5" />
                                <span>Download</span>
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="bg-white rounded-xl border border-dashed border-gray-200 p-4 text-xs text-gray-400 text-center">
                            No tutorial materials uploaded for this week.
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {selectedMaterial && (
          <MaterialPreviewModal
            material={selectedMaterial}
            onClose={() => setSelectedMaterial(null)}
            onDownload={handleDownload}
            onNavigateToMaterialsHub={() => {
              setSelectedMaterial(null);
              setActive("materials");
            }}
          />
        )}

        {downloadToast && (
          <div className="fixed bottom-6 right-6 z-50 bg-gray-900 text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 text-xs animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">
              <IconDownload className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="font-semibold text-white">Downloading file</p>
              <p className="text-gray-300 text-[11px]">{downloadToast}</p>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (selectedCourse && subView === "upcoming") {
    return (
      <div className="p-6">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
          <button onClick={() => { setSelected(null); setSubView(null); }} className="hover:text-blue-600 transition-colors">My Courses</button>
          <span>/</span>
          <button onClick={() => setSubView(null)} className="hover:text-blue-600 transition-colors">{selectedCourse.code}</button>
          <span>/</span>
          <span className="text-gray-600">Upcoming</span>
        </div>
        <button onClick={() => setSubView(null)} className="mb-4 flex items-center gap-1.5 text-sm text-blue-600 hover:underline font-medium cursor-pointer">
          ← Back to {selectedCourse.code} Overview
        </button>

        <div className={`rounded-2xl border ${selectedCourse.borderColor} bg-gradient-to-r ${selectedCourse.bg} p-6 mb-6`}>
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-2 ${selectedCourse.badge}`}>{selectedCourse.code}</span>
              <h1 className="text-xl font-bold text-gray-900">All Upcoming Items — {selectedCourse.name}</h1>
              <p className="text-sm text-gray-500 mt-1">
                Upcoming assessments, quizzes, and class sessions ({selectedCourse.allUpcoming.length} items scheduled)
              </p>
            </div>
            <span className="text-xs font-semibold text-gray-500 bg-white border border-gray-200 px-3 py-1.5 rounded-xl">
              {selectedCourse.schedule} · {selectedCourse.room}
            </span>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <div className="space-y-3">
            {selectedCourse.allUpcoming.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-gray-50 transition-colors gap-4">
                <div className="flex items-center gap-3.5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    item.type === "Assignment" ? "bg-amber-50 text-amber-600" : item.type === "Quiz" ? "bg-purple-50 text-purple-600" : "bg-blue-50 text-blue-600"
                  }`}>
                    {item.type === "Assignment" ? <IconAssignment /> : item.type === "Quiz" ? <IconQuiz /> : <IconCalendar />}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-800">{item.label}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{item.detail}</p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    item.type === "Assignment" ? "bg-amber-100 text-amber-800" : item.type === "Quiz" ? "bg-purple-100 text-purple-800" : "bg-blue-100 text-blue-800"
                  }`}>
                    {item.type}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (selectedCourse && subView === "students") {
    return (
      <div className="p-6">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
          <button onClick={() => { setSelected(null); setSubView(null); }} className="hover:text-blue-600 transition-colors">My Courses</button>
          <span>/</span>
          <button onClick={() => setSubView(null)} className="hover:text-blue-600 transition-colors">{selectedCourse.code}</button>
          <span>/</span>
          <span className="text-gray-600">Students</span>
        </div>
        <button onClick={() => setSubView(null)} className="mb-4 flex items-center gap-1.5 text-sm text-blue-600 hover:underline font-medium cursor-pointer">
          ← Back to {selectedCourse.code} Overview
        </button>

        <div className={`rounded-2xl border ${selectedCourse.borderColor} bg-gradient-to-r ${selectedCourse.bg} p-6 mb-6`}>
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-2 ${selectedCourse.badge}`}>{selectedCourse.code}</span>
              <h1 className="text-xl font-bold text-gray-900">All Students — {selectedCourse.name}</h1>
              <p className="text-sm text-gray-500 mt-1">
                Enrolled student roster ({selectedCourse.allStudents.length} students)
              </p>
            </div>
            <span className="text-xs font-semibold text-gray-500 bg-white border border-gray-200 px-3 py-1.5 rounded-xl">
              {selectedCourse.students} Total Enrolled
            </span>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-xs text-gray-500 font-semibold border-b border-gray-100">
                <tr>
                  <th className="px-6 py-3.5">Student</th>
                  <th className="px-6 py-3.5">Student ID</th>
                  <th className="px-6 py-3.5">Email</th>
                  <th className="px-6 py-3.5">Submissions</th>
                  <th className="px-6 py-3.5">Status</th>
                  <th className="px-6 py-3.5 text-right">Current Grade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {selectedCourse.allStudents.map((s, i) => (
                  <tr key={i} className="hover:bg-gray-50/70 transition-colors">
                    <td className="px-6 py-4 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0" style={{ background: selectedCourse.color }}>
                        {s.name.split(" ").map((n: string) => n[0]).join("")}
                      </div>
                      <span className="font-semibold text-gray-900">{s.name}</span>
                    </td>
                    <td className="px-6 py-4 text-gray-500">{s.id}</td>
                    <td className="px-6 py-4 text-gray-500">{s.email}</td>
                    <td className="px-6 py-4 text-gray-600">{s.submitted} / {s.total} submitted</td>
                    <td className="px-6 py-4">
                      <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${s.status === "At Risk" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
                        {s.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-gray-900">{s.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  if (selectedCourse) {
    return (
      <div className="p-6">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
          <button onClick={() => { setSelected(null); setSubView(null); }} className="hover:text-blue-600 transition-colors">My Courses</button>
          <span>/</span>
          <span className="text-gray-600">{selectedCourse.code}</span>
        </div>
        <button onClick={() => { setSelected(null); setSubView(null); }} className="mb-4 flex items-center gap-1.5 text-sm text-blue-600 hover:underline font-medium">
          ← Back to All Courses
        </button>

        <div className={`rounded-2xl border ${selectedCourse.borderColor} bg-gradient-to-r ${selectedCourse.bg} p-6 mb-6`}>
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-2 ${selectedCourse.badge}`}>{selectedCourse.code}</span>
              <h1 className="text-xl font-bold text-gray-900">{selectedCourse.name}</h1>
              <p className="text-sm text-gray-500 mt-1">{selectedCourse.schedule} · {selectedCourse.room} · {selectedCourse.credits} Credits</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setActive("assignments")} className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition-colors text-gray-700">Assignments</button>
              <button onClick={() => setActive("materials")} className="px-3 py-1.5 text-xs font-semibold rounded-lg text-white transition-colors" style={{ background: selectedCourse.color }}>Course Materials</button>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-xs text-gray-500 mb-1.5">
              <span>Semester Progress</span><span>{selectedCourse.progress}%</span>
            </div>
            <ProgressBar pct={selectedCourse.progress} color={selectedCourse.color} />
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {/* Topics */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-bold text-gray-800">Course Topics</h2>
              <button onClick={() => setSubView("topics")} className="text-xs text-blue-600 font-medium hover:underline cursor-pointer">View All</button>
            </div>
            <div className="space-y-2">
              {selectedCourse.topics.map((t, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0" style={{ background: selectedCourse.color }}>
                    {i + 1}
                  </div>
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-bold text-gray-800">Upcoming</h2>
              <button onClick={() => setSubView("upcoming")} className="text-xs text-blue-600 font-medium hover:underline cursor-pointer">View All</button>
            </div>
            <div className="space-y-3">
              {selectedCourse.upcoming.map((u, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${u.type === "Assignment" ? "bg-amber-50 text-amber-600" : u.type === "Quiz" ? "bg-purple-50 text-purple-600" : "bg-blue-50 text-blue-600"}`}>
                    {u.type === "Assignment" ? <IconAssignment /> : u.type === "Quiz" ? <IconQuiz /> : <IconCalendar />}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-800">{u.label}</p>
                    <p className="text-[10px] text-gray-500">{u.date} · {u.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Students */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-bold text-gray-800">Students</h2>
              <button onClick={() => setSubView("students")} className="text-xs text-blue-600 font-medium hover:underline cursor-pointer">View All</button>
            </div>
            <div className="space-y-3">
              {selectedCourse.students_list.map((s, i) => (
                <div key={i} className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0" style={{ background: selectedCourse.color }}>
                      {s.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-800">{s.name}</p>
                      <p className="text-[10px] text-gray-400">{s.id}</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-gray-700">{s.grade}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
        <span>Instructor</span><span>/</span><span className="text-gray-600">My Courses</span>
      </div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">My Courses</h1>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {courses.map((c) => (
          <div key={c.code} className={`rounded-2xl border ${c.borderColor} bg-gradient-to-br ${c.bg} p-5 hover:shadow-md transition-shadow cursor-pointer flex flex-col`}>
            <div className="flex items-center justify-between mb-3">
              <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${c.badge}`}>{c.code}</span>
              <span className="text-[10px] text-gray-500">{c.credits} Credits</span>
            </div>
            <h3 className="text-sm font-bold text-gray-900 leading-snug mb-2">{c.name}</h3>
            <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
              <IconUsers className="w-3 h-3" /><span>{c.students} students</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-500 mb-3">
              <IconClock className="w-3 h-3" /><span>{c.schedule}</span>
            </div>
            <div className="mb-4">
              <div className="flex justify-between text-[10px] text-gray-500 mb-1">
                <span>Semester Progress</span><span>{c.progress}%</span>
              </div>
              <ProgressBar pct={c.progress} color={c.color} />
            </div>
            <div className="mt-auto flex gap-2">
              <button
                onClick={() => setSelected(c.code)}
                className="flex-1 text-xs font-semibold py-2 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
                style={{ color: c.color }}
              >
                View Course
              </button>
              <button className="px-3 py-2 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 transition-colors text-gray-500">
                <IconEdit />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Students Page ─────────────────────────────────────────────────────────────
function StudentsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [viewStudent, setViewStudent] = useState<null | typeof students[0]>(null);

  const students = [
    { name: "Marco Reyes",   id: "STU-0231", course: "ICT301", email: "m.reyes@student.edu", grade: "B+", status: "Active",   submitted: 8, total: 10 },
    { name: "Sofia Tan",     id: "STU-0198", course: "ICT272", email: "s.tan@student.edu",   grade: "A",  status: "Active",   submitted: 10, total: 10 },
    { name: "Liam Garcia",   id: "STU-0274", course: "ICT301", email: "l.garcia@student.edu",grade: "B",  status: "Active",   submitted: 7, total: 10 },
    { name: "Aisha Patel",   id: "STU-0312", course: "ICT272", email: "a.patel@student.edu", grade: "A-", status: "Active",   submitted: 9, total: 10 },
    { name: "Ethan Cruz",    id: "STU-0299", course: "ICT272", email: "e.cruz@student.edu",  grade: "B+", status: "Active",   submitted: 9, total: 10 },
    { name: "Maya Lopez",    id: "STU-0344", course: "ICT272", email: "m.lopez@student.edu", grade: "A",  status: "Active",   submitted: 10, total: 10 },
    { name: "Noah Kim",      id: "STU-0401", course: "ICT126", email: "n.kim@student.edu",   grade: "A+", status: "Active",   submitted: 10, total: 10 },
    { name: "Priya Nair",    id: "STU-0388", course: "ICT126", email: "p.nair@student.edu",  grade: "B",  status: "Active",   submitted: 7, total: 10 },
    { name: "Carlos Vega",   id: "STU-0411", course: "ICT126", email: "c.vega@student.edu",  grade: "B+", status: "Active",   submitted: 8, total: 10 },
    { name: "Luna Santos",   id: "STU-0422", course: "ICT301", email: "l.santos@student.edu",grade: "C+", status: "At Risk", submitted: 5, total: 10 },
    { name: "Raj Sharma",    id: "STU-0433", course: "ICT272", email: "r.sharma@student.edu",grade: "B",  status: "Active",   submitted: 8, total: 10 },
    { name: "Zoe Andrade",   id: "STU-0444", course: "ICT126", email: "z.andrade@student.edu",grade: "A-", status: "Active",  submitted: 9, total: 10 },
  ];

  const filtered = students.filter((s) => {
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.id.toLowerCase().includes(search.toLowerCase()) || s.course.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || s.course === filter || s.status === filter;
    return matchSearch && matchFilter;
  });

  const gradeColor = (g: string) => {
    if (g.startsWith("A")) return "text-green-700 bg-green-50";
    if (g.startsWith("B")) return "text-blue-700 bg-blue-50";
    if (g.startsWith("C")) return "text-amber-700 bg-amber-50";
    return "text-red-700 bg-red-50";
  };

  if (viewStudent) {
    return (
      <div className="p-6">
        <button onClick={() => setViewStudent(null)} className="mb-4 flex items-center gap-1.5 text-sm text-blue-600 hover:underline font-medium">
          ← Back to Students
        </button>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6 flex items-center gap-5">
          <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0" style={{ background: "#1a3a9e" }}>
            {viewStudent.name.split(" ").map((n) => n[0]).join("")}
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">{viewStudent.name}</h2>
            <p className="text-sm text-gray-500">{viewStudent.id} · {viewStudent.email}</p>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold">{viewStudent.course}</span>
              <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${viewStudent.status === "At Risk" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>{viewStudent.status}</span>
            </div>
          </div>
          <div className="ml-auto text-right">
            <p className="text-4xl font-extrabold text-gray-900">{viewStudent.grade}</p>
            <p className="text-xs text-gray-500 mt-1">Current Grade</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-5">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h3 className="text-sm font-bold text-gray-800 mb-3">Submission Status</h3>
            <div className="flex items-end gap-2 mb-2">
              <span className="text-3xl font-extrabold text-gray-900">{viewStudent.submitted}</span>
              <span className="text-sm text-gray-500 mb-1">/ {viewStudent.total} submitted</span>
            </div>
            <ProgressBar pct={(viewStudent.submitted / viewStudent.total) * 100} color="#1a3a9e" />
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h3 className="text-sm font-bold text-gray-800 mb-3">Attendance</h3>
            <div className="flex items-end gap-2 mb-2">
              <span className="text-3xl font-extrabold text-gray-900">90%</span>
              <span className="text-sm text-gray-500 mb-1">attendance rate</span>
            </div>
            <ProgressBar pct={90} color="#0e9f6e" />
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h3 className="text-sm font-bold text-gray-800 mb-3">Participation</h3>
            <div className="flex items-end gap-2 mb-2">
              <span className="text-3xl font-extrabold text-gray-900">75%</span>
              <span className="text-sm text-gray-500 mb-1">class participation</span>
            </div>
            <ProgressBar pct={75} color="#7c3aed" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
        <span>Instructor</span><span>/</span><span className="text-gray-600">Students</span>
      </div>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <h1 className="text-2xl font-bold text-gray-900">Students</h1>
        <div className="flex items-center gap-2">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><IconSearch /></span>
            <input
              value={search} onChange={(e) => setSearch(e.target.value)}
              placeholder="Search students..."
              className="pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 w-56"
            />
          </div>
          <select
            value={filter} onChange={(e) => setFilter(e.target.value)}
            className="px-3 py-2 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <option value="all">All Courses</option>
            <option value="ICT301">ICT301</option>
            <option value="ICT272">ICT272</option>
            <option value="ICT126">ICT126</option>
            <option value="At Risk">At Risk</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-gray-500">Student</th>
                <th className="text-left px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-gray-500">Course</th>
                <th className="text-left px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-gray-500">Submissions</th>
                <th className="text-left px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-gray-500">Grade</th>
                <th className="text-left px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-gray-500">Status</th>
                <th className="text-right px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((s, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0" style={{ background: "#1a3a9e" }}>
                        {s.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-800">{s.name}</p>
                        <p className="text-[10px] text-gray-400">{s.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700">{s.course}</span>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-gray-700">{s.submitted}/{s.total}</span>
                      <div className="w-16">
                        <ProgressBar pct={(s.submitted / s.total) * 100} color="#1a3a9e" />
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${gradeColor(s.grade)}`}>{s.grade}</span>
                  </td>
                  <td className="px-5 py-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${s.status === "At Risk" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
                      {s.status}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center justify-end gap-1">
                      <button onClick={() => setViewStudent(s)} className="p-1.5 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors" title="View">
                        <IconEye />
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors" title="Message">
                        <IconMessage />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between">
          <p className="text-xs text-gray-500">Showing {filtered.length} of {students.length} students</p>
          <div className="flex items-center gap-1">
            {["1", "2", "3"].map((p) => (
              <button key={p} className={`w-7 h-7 rounded-lg text-xs font-semibold transition-colors ${p === "1" ? "text-white" : "text-gray-500 hover:bg-gray-100"}`} style={p === "1" ? { background: "#1a3a9e" } : {}}>
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Assignments Page ──────────────────────────────────────────────────────────
function AssignmentsPage({ setActive }: { setActive: (id: string) => void }) {
  const [open, setOpen] = useState<string | null>("ICT301");
  const [viewAssignment, setViewAssignment] = useState<null | { title: string; course: string; due: string; submissions: number; total: number; type: string }>(null);

  const courses = [
    {
      code: "ICT301", name: "Information Technology Project 1", color: "#2563eb",
      assignments: [
        { title: "Milestone 1: Project Proposal", due: "Aug 25, 2026", submissions: 32, total: 32, type: "Assignment", graded: true },
        { title: "Milestone 2: Preliminary Design", due: "Sep 5, 2026", submissions: 28, total: 32, type: "Assignment", graded: false },
        { title: "Weekly Journal Entry 1", due: "Aug 22, 2026", submissions: 30, total: 32, type: "Assignment", graded: true },
      ],
    },
    {
      code: "ICT272", name: "Web Design and Development", color: "#0e9f6e",
      assignments: [
        { title: "Lab Exercise 1: HTML Basics", due: "Aug 20, 2026", submissions: 38, total: 38, type: "Assignment", graded: true },
        { title: "Lab Exercise 2: CSS Layouts", due: "Aug 27, 2026", submissions: 37, total: 38, type: "Assignment", graded: true },
        { title: "Lab Exercise 3: JavaScript DOM", due: "Sep 3, 2026", submissions: 36, total: 38, type: "Assignment", graded: false },
        { title: "Lab Exercise 4: React Basics", due: "Sep 7, 2026", submissions: 12, total: 38, type: "Assignment", graded: false },
      ],
    },
    {
      code: "ICT126", name: "Artificial Intelligence", color: "#7c3aed",
      assignments: [
        { title: "AI Case Study Research Paper", due: "Sep 19, 2026", submissions: 10, total: 26, type: "Assignment", graded: false },
        { title: "Assignment 1: AI History Review", due: "Aug 28, 2026", submissions: 26, total: 26, type: "Assignment", graded: true },
        { title: "Assignment 2: ML Algorithm Analysis", due: "Sep 4, 2026", submissions: 24, total: 26, type: "Assignment", graded: false },
      ],
    },
  ];

  if (viewAssignment) {
    const pending = viewAssignment.total - viewAssignment.submissions;
    return (
      <div className="p-6">
        <button onClick={() => setViewAssignment(null)} className="mb-4 flex items-center gap-1.5 text-sm text-blue-600 hover:underline font-medium">
          ← Back to Assignments
        </button>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
          <div className="flex items-start justify-between flex-wrap gap-3">
            <div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 mb-2 inline-block">{viewAssignment.course}</span>
              <h2 className="text-xl font-bold text-gray-900">{viewAssignment.title}</h2>
              <p className="text-sm text-gray-500 mt-1">Due: {viewAssignment.due} · {viewAssignment.type}</p>
            </div>
            <button onClick={() => setActive("grades")} className="px-4 py-2 rounded-xl text-sm font-semibold text-white transition-colors" style={{ background: "#1a3a9e" }}>
              Grade Submissions
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-5">
            <div className="text-center p-3 bg-blue-50 rounded-xl">
              <p className="text-2xl font-extrabold text-blue-700">{viewAssignment.submissions}</p>
              <p className="text-xs text-blue-600 mt-0.5">Submitted</p>
            </div>
            <div className="text-center p-3 bg-amber-50 rounded-xl">
              <p className="text-2xl font-extrabold text-amber-700">{pending}</p>
              <p className="text-xs text-amber-600 mt-0.5">Pending</p>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-xl">
              <p className="text-2xl font-extrabold text-gray-700">{viewAssignment.total}</p>
              <p className="text-xs text-gray-500 mt-0.5">Total Students</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Submission rate</span>
              <span>{Math.round((viewAssignment.submissions / viewAssignment.total) * 100)}%</span>
            </div>
            <ProgressBar pct={(viewAssignment.submissions / viewAssignment.total) * 100} color="#1a3a9e" />
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <h3 className="text-sm font-bold text-gray-800 mb-4">Recent Submissions</h3>
          <div className="space-y-3">
            {["Marco Reyes", "Sofia Tan", "Aisha Patel", "Ethan Cruz"].slice(0, viewAssignment.submissions >= 3 ? 3 : viewAssignment.submissions).map((name, i) => (
              <div key={i} className="flex items-center justify-between py-2.5 border-b border-gray-50 last:border-0">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: "#1a3a9e" }}>
                    {name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{name}</p>
                    <p className="text-[10px] text-gray-400">Submitted {i === 0 ? "5 min ago" : i === 1 ? "1 hr ago" : "3 hrs ago"}</p>
                  </div>
                </div>
                <button onClick={() => setActive("grades")} className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100 transition-colors">
                  Grade Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
        <span>Instructor</span><span>/</span><span className="text-gray-600">Assignments</span>
      </div>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <h1 className="text-2xl font-bold text-gray-900">Assignments</h1>
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-colors" style={{ background: "#1a3a9e" }}>
          <IconPlus /><span>New Assignment</span>
        </button>
      </div>
      <div className="space-y-4">
        {courses.map((c) => (
          <div key={c.code} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <button
              className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors"
              onClick={() => setOpen(open === c.code ? null : c.code)}
            >
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: c.color }} />
                <div className="text-left">
                  <p className="text-sm font-bold text-gray-800">{c.code} – {c.name}</p>
                  <p className="text-xs text-gray-500">{c.assignments.length} assignments · {c.assignments.filter((a) => !a.graded).length} pending grading</p>
                </div>
              </div>
              <IconChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${open === c.code ? "rotate-180" : ""}`} />
            </button>
            {open === c.code && (
              <div className="border-t border-gray-100">
                {c.assignments.map((a, i) => (
                  <div key={i} className="flex items-center justify-between px-5 py-3.5 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${a.graded ? "bg-green-50 text-green-600" : "bg-amber-50 text-amber-500"}`}>
                        {a.graded ? <IconCheck /> : <IconClock />}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-800">{a.title}</p>
                        <p className="text-xs text-gray-500">Due: {a.due} · {a.submissions}/{a.total} submitted</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {!a.graded && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">
                          {a.submissions - (a.total - a.submissions > 0 ? 0 : 0)} to grade
                        </span>
                      )}
                      <button
                        onClick={() => setViewAssignment({ ...a, course: c.code })}
                        className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Quizzes Page ──────────────────────────────────────────────────────────────
function QuizzesPage({ setActive }: { setActive: (id: string) => void }) {
  const [viewQuiz, setViewQuiz] = useState<null | { title: string; course: string; date: string; submissions: number; total: number; status: string; avgScore?: number | null }>(null);

  const quizzes = [
    { title: "Weekly Quiz 1", course: "ICT301", date: "Aug 19, 2026", submissions: 32, total: 32, status: "Completed", avgScore: 82 },
    { title: "Weekly Quiz 2", course: "ICT272", date: "Aug 26, 2026", submissions: 37, total: 38, status: "Completed", avgScore: 78 },
    { title: "Weekly Quiz 3", course: "ICT126", date: "Sep 2, 2026",  submissions: 24, total: 26, status: "Active",    avgScore: null },
    { title: "Midterm Quiz",  course: "ICT126", date: "Sep 8, 2026",  submissions: 0,  total: 26, status: "Upcoming",  avgScore: null },
    { title: "Lab Quiz 1",    course: "ICT272", date: "Sep 10, 2026", submissions: 0,  total: 38, status: "Upcoming",  avgScore: null },
    { title: "Weekly Quiz 3", course: "ICT301", date: "Sep 3, 2026",  submissions: 18, total: 32, status: "Active",    avgScore: null },
  ];

  const statusColor = (s: string) => {
    if (s === "Completed") return "bg-green-100 text-green-700";
    if (s === "Active")    return "bg-blue-100 text-blue-700";
    return "bg-gray-100 text-gray-500";
  };

  if (viewQuiz) {
    return (
      <div className="p-6">
        <button onClick={() => setViewQuiz(null)} className="mb-4 flex items-center gap-1.5 text-sm text-blue-600 hover:underline font-medium">
          ← Back to Quizzes
        </button>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
          <div className="flex items-start justify-between flex-wrap gap-3">
            <div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-purple-100 text-purple-700 mb-2 inline-block">{viewQuiz.course}</span>
              <h2 className="text-xl font-bold text-gray-900">{viewQuiz.title}</h2>
              <p className="text-sm text-gray-500 mt-1">Scheduled: {viewQuiz.date}</p>
            </div>
            <div className="flex gap-2">
              {viewQuiz.status === "Upcoming" && (
                <button className="px-4 py-2 rounded-xl text-sm font-semibold text-white" style={{ background: "#1a3a9e" }}>Edit Quiz</button>
              )}
              {viewQuiz.status !== "Upcoming" && (
                <button onClick={() => setActive("grades")} className="px-4 py-2 rounded-xl text-sm font-semibold text-white" style={{ background: "#1a3a9e" }}>View Submissions</button>
              )}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-5">
            <div className="text-center p-3 bg-blue-50 rounded-xl">
              <p className="text-2xl font-extrabold text-blue-700">{viewQuiz.submissions}</p>
              <p className="text-xs text-blue-600 mt-0.5">Submitted</p>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-xl">
              <p className="text-2xl font-extrabold text-gray-700">{viewQuiz.total}</p>
              <p className="text-xs text-gray-500 mt-0.5">Total Students</p>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-xl">
              <p className="text-2xl font-extrabold text-green-700">{viewQuiz.avgScore ?? "—"}{viewQuiz.avgScore ? "%" : ""}</p>
              <p className="text-xs text-green-600 mt-0.5">Avg Score</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
        <span>Instructor</span><span>/</span><span className="text-gray-600">Quizzes</span>
      </div>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <h1 className="text-2xl font-bold text-gray-900">Quizzes &amp; Assessments</h1>
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white" style={{ background: "#1a3a9e" }}>
          <IconPlus /><span>New Quiz</span>
        </button>
      </div>

      {(["Active", "Upcoming", "Completed"] as const).map((section) => {
        const items = quizzes.filter((q) => q.status === section);
        if (!items.length) return null;
        return (
          <div key={section} className="mb-6">
            <h2 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full inline-block ${section === "Active" ? "bg-blue-500" : section === "Upcoming" ? "bg-gray-400" : "bg-green-500"}`} />
              {section}
            </h2>
            <div className="grid grid-cols-2 gap-5">
              {items.map((q, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">{q.course}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${statusColor(q.status)}`}>{q.status}</span>
                  </div>
                  <h3 className="text-sm font-bold text-gray-800 mb-1">{q.title}</h3>
                  <p className="text-xs text-gray-500 mb-2">{q.date}</p>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="text-gray-500">{q.submissions}/{q.total} submitted</span>
                    {q.avgScore && <span className="font-bold text-green-700">Avg: {q.avgScore}%</span>}
                  </div>
                  <button onClick={() => setViewQuiz(q)} className="w-full text-xs font-semibold py-1.5 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Learning Materials Page ───────────────────────────────────────────────────
function LearningMaterialsPage() {
  const [filter, setFilter] = useState("all");
  const [previewMaterial, setPreviewMaterial] = useState<LearningMaterialItem | null>(null);
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  const courseColors: Record<string, string> = {
    ICT301: "bg-blue-100 text-blue-700",
    ICT272: "bg-emerald-100 text-emerald-700",
    ICT126: "bg-purple-100 text-purple-700",
  };

  const handleDownload = (m: LearningMaterialItem) => {
    setDownloadToast(`${m.title} (${m.size})`);
    setTimeout(() => {
      setDownloadToast(null);
    }, 3500);
  };

  const filtered = filter === "all"
    ? INSTRUCTOR_LEARNING_MATERIALS
    : INSTRUCTOR_LEARNING_MATERIALS.filter((m) => m.course === filter || m.type.toLowerCase() === filter.toLowerCase());

  return (
    <div className="p-6">
      <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
        <span>Instructor</span><span>/</span><span className="text-gray-600">Learning Materials</span>
      </div>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <h1 className="text-2xl font-bold text-gray-900">Learning Materials</h1>
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white" style={{ background: "#1a3a9e" }}>
          <IconUpload /><span>Upload Material</span>
        </button>
      </div>

      <div className="flex items-center gap-2 mb-5 flex-wrap">
        {["all", "ICT301", "ICT272", "ICT126", "Document", "Slides", "Video"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${filter === f ? "text-white" : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 cursor-pointer"}`}
            style={filter === f ? { background: "#1a3a9e" } : {}}
          >
            {f === "all" ? "All Materials" : f}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((m) => (
          <div
            key={m.id}
            onClick={() => setPreviewMaterial(m)}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition-shadow group cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between mb-3">
                <span className="text-2xl p-1 rounded-lg bg-gray-50">{m.icon}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${courseColors[m.course] || "bg-gray-100 text-gray-700"}`}>{m.course}</span>
              </div>
              <h3 className="text-sm font-bold text-gray-800 leading-snug mb-1 group-hover:text-blue-600 transition-colors">{m.title}</h3>
              <p className="text-[10px] text-gray-500 mb-1">
                {m.week ? `Week ${m.week} · ` : ""}{m.type} · {m.size}
              </p>
              <p className="text-[10px] text-gray-400 mb-4">Uploaded {m.date}</p>
            </div>
            <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setPreviewMaterial(m)}
                className="flex-1 flex items-center justify-center gap-1 text-xs font-semibold py-1.5 rounded-xl bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors cursor-pointer"
              >
                <IconEye /><span>Preview</span>
              </button>
              <button
                onClick={() => handleDownload(m)}
                className="p-1.5 rounded-xl bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors cursor-pointer"
                title="Download"
              >
                <IconDownload />
              </button>
            </div>
          </div>
        ))}
      </div>

      {previewMaterial && (
        <MaterialPreviewModal
          material={previewMaterial}
          onClose={() => setPreviewMaterial(null)}
          onDownload={handleDownload}
        />
      )}

      {downloadToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-gray-900 text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 text-xs animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">
            <IconDownload className="w-3.5 h-3.5" />
          </div>
          <div>
            <p className="font-semibold text-white">Downloading file</p>
            <p className="text-gray-300 text-[11px]">{downloadToast}</p>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Grades Page ───────────────────────────────────────────────────────────────
function GradesPage() {
  const [course, setCourse] = useState("ICT301");
  const [gradingItem, setGradingItem] = useState<null | { student: string; assignment: string }>(null);
  const [scores, setScores] = useState<Record<string, string>>({});

  const courseGrades: Record<string, { student: string; assignments: (number | null)[]; quiz: number | null; total: string | null }[]> = {
    ICT301: [
      { student: "Marco Reyes",   assignments: [92, 88, null], quiz: 85, total: null },
      { student: "Sofia Tan",     assignments: [95, 92, null], quiz: 91, total: null },
      { student: "Liam Garcia",   assignments: [80, 75, null], quiz: 78, total: null },
      { student: "Luna Santos",   assignments: [65, 60, null], quiz: 70, total: null },
    ],
    ICT272: [
      { student: "Aisha Patel",   assignments: [90, 88, 85], quiz: 87, total: "88%" },
      { student: "Ethan Cruz",    assignments: [85, 82, 80], quiz: 83, total: "83%" },
      { student: "Maya Lopez",    assignments: [95, 93, 91], quiz: 94, total: "93%" },
      { student: "Raj Sharma",    assignments: [80, 78, 76], quiz: 79, total: "78%" },
    ],
    ICT126: [
      { student: "Noah Kim",      assignments: [98, 95], quiz: null, total: null },
      { student: "Priya Nair",    assignments: [80, 78], quiz: null, total: null },
      { student: "Carlos Vega",   assignments: [85, 82], quiz: null, total: null },
      { student: "Zoe Andrade",   assignments: [90, 88], quiz: null, total: null },
    ],
  };

  const assignmentCols: Record<string, string[]> = {
    ICT301: ["Milestone 1", "Milestone 2", "Journal 1"],
    ICT272: ["Lab Ex 1", "Lab Ex 2", "Lab Ex 3"],
    ICT126: ["Assignment 1", "Assignment 2"],
  };

  const data = courseGrades[course];
  const cols = assignmentCols[course];

  return (
    <div className="p-6">
      <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
        <span>Instructor</span><span>/</span><span className="text-gray-600">Grades</span>
      </div>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <h1 className="text-2xl font-bold text-gray-900">Student Grades</h1>
        <div className="flex items-center gap-2">
          <select
            value={course} onChange={(e) => setCourse(e.target.value)}
            className="px-3 py-2 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <option value="ICT301">ICT301 – IT Project 1</option>
            <option value="ICT272">ICT272 – Web Design</option>
            <option value="ICT126">ICT126 – Artificial Intelligence</option>
          </select>
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors">
            <IconDownload /><span>Export</span>
          </button>
        </div>
      </div>

      {gradingItem && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-gray-900">Grade Submission</h3>
              <button onClick={() => setGradingItem(null)} className="text-gray-400 hover:text-gray-600">
                <IconX />
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-1"><span className="font-semibold">{gradingItem.student}</span></p>
            <p className="text-xs text-gray-500 mb-4">{gradingItem.assignment} · {course}</p>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Score (0–100)</label>
            <input
              type="number" min="0" max="100"
              value={scores[`${gradingItem.student}-${gradingItem.assignment}`] ?? ""}
              onChange={(e) => setScores((prev) => ({ ...prev, [`${gradingItem.student}-${gradingItem.assignment}`]: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 mb-4"
              placeholder="Enter score"
            />
            <label className="block text-xs font-semibold text-gray-700 mb-1">Feedback (optional)</label>
            <textarea rows={3} className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 mb-4 resize-none" placeholder="Add feedback..." />
            <div className="flex gap-2">
              <button onClick={() => setGradingItem(null)} className="flex-1 py-2 rounded-xl text-sm font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">Cancel</button>
              <button onClick={() => setGradingItem(null)} className="flex-1 py-2 rounded-xl text-sm font-semibold text-white transition-colors" style={{ background: "#1a3a9e" }}>Save Grade</button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-5 py-3 text-[10px] font-bold uppercase tracking-wider text-gray-500">Student</th>
                {cols.map((c) => (
                  <th key={c} className="text-center px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-gray-500">{c}</th>
                ))}
                <th className="text-center px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-gray-500">Quiz</th>
                <th className="text-center px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-gray-500">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {data.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0" style={{ background: "#1a3a9e" }}>
                        {row.student.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <span className="text-sm font-semibold text-gray-800">{row.student}</span>
                    </div>
                  </td>
                  {row.assignments.map((score, j) => (
                    <td key={j} className="px-4 py-3 text-center">
                      {score !== null ? (
                        <span className={`text-sm font-bold ${score >= 90 ? "text-green-700" : score >= 75 ? "text-blue-700" : "text-amber-700"}`}>{score}</span>
                      ) : (
                        <button
                          onClick={() => setGradingItem({ student: row.student, assignment: cols[j] })}
                          className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100 transition-colors"
                        >
                          Grade
                        </button>
                      )}
                    </td>
                  ))}
                  <td className="px-4 py-3 text-center">
                    {row.quiz !== null ? (
                      <span className={`text-sm font-bold ${row.quiz >= 90 ? "text-green-700" : row.quiz >= 75 ? "text-blue-700" : "text-amber-700"}`}>{row.quiz}</span>
                    ) : (
                      <button
                        onClick={() => setGradingItem({ student: row.student, assignment: "Quiz" })}
                        className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100 transition-colors"
                      >
                        Grade
                      </button>
                    )}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {row.total ? (
                      <span className="text-sm font-extrabold text-gray-900">{row.total}</span>
                    ) : (
                      <span className="text-xs text-gray-400">Pending</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ── Calendar Page ─────────────────────────────────────────────────────────────
function CalendarPage() {
  const [selectedDay, setSelectedDay] = useState<number | null>(3);

  const events: Record<number, { title: string; time: string; room: string; color: string; online: boolean }[]> = {
    3:  [{ title: "ICT301 Lecture", time: "8:00–10:00 AM", room: "IT-201", color: "#2563eb", online: false }],
    4:  [{ title: "ICT272 Online Lecture", time: "10:00 AM–12:00 PM", room: "Zoom", color: "#0e9f6e", online: true }],
    5:  [{ title: "ICT126 Lab", time: "1:00–3:00 PM", room: "IT-304", color: "#7c3aed", online: false }],
    6:  [{ title: "ICT301 Lecture", time: "8:00–10:00 AM", room: "IT-201", color: "#2563eb", online: false }],
    8:  [{ title: "ICT126 Midterm Quiz", time: "1:00–2:00 PM", room: "IT-304", color: "#7c3aed", online: false }],
    10: [{ title: "ICT272 Online Lecture", time: "10:00 AM–12:00 PM", room: "Zoom", color: "#0e9f6e", online: true },
         { title: "Faculty Meeting", time: "2:00–3:00 PM", room: "IT-301", color: "#f59e0b", online: false }],
    12: [{ title: "ICT301 Lecture", time: "8:00–10:00 AM", room: "IT-201", color: "#2563eb", online: false }],
    13: [{ title: "ICT272 Online Lecture", time: "10:00 AM–12:00 PM", room: "Zoom", color: "#0e9f6e", online: true }],
    14: [{ title: "ICT126 Lab", time: "1:00–3:00 PM", room: "IT-304", color: "#7c3aed", online: false }],
  };

  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const startOffset = 1;

  return (
    <div className="p-6">
      <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
        <span>Instructor</span><span>/</span><span className="text-gray-600">Calendar</span>
      </div>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-sm text-sm font-semibold text-gray-700">
          <IconCalendar /> September 2026
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <div className="grid grid-cols-7 mb-2">
            {dayNames.map((d) => (
              <div key={d} className="text-center text-[10px] font-bold text-gray-400 uppercase py-1">{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: startOffset }).map((_, i) => <div key={`empty-${i}`} />)}
            {days.map((d) => {
              const hasEvent = !!events[d];
              const isSelected = selectedDay === d;
              return (
                <button
                  key={d}
                  onClick={() => setSelectedDay(d)}
                  className={`aspect-square rounded-xl flex flex-col items-center justify-center text-sm font-semibold transition-all ${
                    isSelected ? "text-white shadow-md" : hasEvent ? "bg-blue-50 text-blue-700 hover:bg-blue-100" : "text-gray-700 hover:bg-gray-100"
                  }`}
                  style={isSelected ? { background: "#1a3a9e" } : {}}
                >
                  {d}
                  {hasEvent && !isSelected && <span className="w-1 h-1 rounded-full bg-blue-500 mt-0.5" />}
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <h2 className="text-sm font-bold text-gray-800 mb-4">
            {selectedDay ? `September ${selectedDay}, 2026` : "Select a day"}
          </h2>
          {selectedDay && events[selectedDay] ? (
            <div className="space-y-3">
              {events[selectedDay].map((e, i) => (
                <div key={i} className="rounded-xl p-3 border-l-4" style={{ borderColor: e.color, background: `${e.color}10` }}>
                  <p className="text-sm font-bold text-gray-800">{e.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{e.time}</p>
                  <p className={`text-xs font-medium mt-0.5 ${e.online ? "text-blue-600" : "text-gray-500"}`}>{e.room}</p>
                  <button
                    className="mt-2 text-xs font-semibold px-2.5 py-1 rounded-lg text-white transition-colors"
                    style={{ background: e.color }}
                  >
                    {e.online ? "Start Class" : "View Class"}
                  </button>
                </div>
              ))}
            </div>
          ) : selectedDay ? (
            <div className="text-center py-8 text-gray-400">
              <IconCalendar />
              <p className="text-xs mt-2">No classes scheduled</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

// ── Generic Placeholder Page ──────────────────────────────────────────────────
function PlaceholderPage({ title, icon }: { title: string; icon: React.ReactNode }) {
  return (
    <div className="p-6 flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 text-blue-600" style={{ background: "#e8effe" }}>
        {icon}
      </div>
      <h2 className="text-lg font-bold text-gray-800 mb-1">{title}</h2>
      <p className="text-sm text-gray-500">This section is coming soon.</p>
    </div>
  );
}

// ── Instructor Announcements Page ─────────────────────────────────────────────
interface IAnnouncement {
  id: number;
  title: string;
  description: string;
  date: string;
  audience: string;
  status: "Published" | "Draft" | "Scheduled";
}

const iAnnouncements: IAnnouncement[] = [
  {
    id: 1,
    title: "Assessment 2 Submission Reminder",
    description: "This is a reminder that Assessment 2 for ICT301 is due on 3 September 2026 at 11:59 PM. Please review the submission checklist before uploading.",
    date: "Aug 30, 2026",
    audience: "ICT301",
    status: "Published",
  },
  {
    id: 2,
    title: "Updated Learning Materials — Week 8",
    description: "Week 8 lecture slides and lab exercise files have been uploaded to the ICT272 course page. Please review them before the next session.",
    date: "Aug 28, 2026",
    audience: "ICT272",
    status: "Published",
  },
  {
    id: 3,
    title: "Important Semester T226 Notice",
    description: "All students must complete their mid-semester feedback survey by 5 September 2026. The link has been sent to your university email address.",
    date: "Sep 1, 2026",
    audience: "All Students",
    status: "Scheduled",
  },
  {
    id: 4,
    title: "Project Submission Guidelines",
    description: "Please ensure your ICT301 final project report follows the provided template and is submitted via the portal. Emailed submissions will not be accepted.",
    date: "Aug 25, 2026",
    audience: "ICT301",
    status: "Draft",
  },
];

const announcementStatusColors: Record<string, string> = {
  Published: "bg-green-50 text-green-700 border-green-100",
  Draft:     "bg-gray-100 text-gray-500 border-gray-200",
  Scheduled: "bg-blue-50 text-blue-700 border-blue-100",
};

function InstructorAnnouncementsPage() {
  const [filter, setFilter] = useState<"All" | "Published" | "Draft" | "Scheduled">("All");

  const filtered = filter === "All" ? iAnnouncements : iAnnouncements.filter((a) => a.status === filter);

  return (
    <div className="p-6">
      <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
        <span>Instructor</span><span>/</span><span className="text-gray-600">Announcements</span>
      </div>
      <div className="flex items-start justify-between mb-1 flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Announcements</h1>
          <p className="text-sm text-gray-500 mt-0.5">Create and manage announcements for your students</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-colors" style={{ background: "#1a3a9e" }}>
          <IconPlus /><span>New Announcement</span>
        </button>
      </div>

      {/* Filter tabs */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-4 mb-6 mt-5">
        <div className="flex items-center gap-1">
          {(["All", "Published", "Draft", "Scheduled"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`relative px-4 py-3.5 text-sm font-medium whitespace-nowrap transition-colors ${filter === f ? "text-blue-700" : "text-gray-500 hover:text-gray-800"}`}
            >
              {f === "All" ? "All Announcements" : f}
              {filter === f && <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-t-full bg-blue-600" />}
            </button>
          ))}
        </div>
      </div>

      {/* Announcement cards */}
      <div className="space-y-4">
        {filtered.map((a) => (
          <div key={a.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1.5">
                  <h3 className="text-base font-bold text-gray-900">{a.title}</h3>
                  <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full border shrink-0 ${announcementStatusColors[a.status]}`}>
                    {a.status}
                  </span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">{a.description}</p>
                <div className="flex items-center gap-4 text-xs text-gray-400 flex-wrap">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
                    {a.audience}
                  </span>
                  <span>{a.date}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 bg-gray-50 hover:bg-gray-100 border border-gray-200 px-3 py-1.5 rounded-lg transition-colors">
                  <IconEye className="w-3.5 h-3.5" /> View
                </button>
                <button className="flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-100 px-3 py-1.5 rounded-lg transition-colors">
                  <IconEdit className="w-3.5 h-3.5" /> Edit
                </button>
                <button className="flex items-center gap-1.5 text-xs font-semibold text-red-600 bg-red-50 hover:bg-red-100 border border-red-100 px-3 py-1.5 rounded-lg transition-colors">
                  <IconX className="w-3.5 h-3.5" /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Instructor Messages Page ───────────────────────────────────────────────────
interface IConversation {
  id: string;
  name: string;
  context: string;
  initials: string;
  color: string;
  lastMsg: string;
  time: string;
  unread: number;
  messages: { from: "me" | "them"; text: string; time: string }[];
}

const iConversations: IConversation[] = [
  {
    id: "c1",
    name: "Richard Vitug",
    context: "ICT301 — Student",
    initials: "RV",
    color: "#2563eb",
    lastMsg: "I have submitted my milestone 2 draft. Please let me know if any changes are needed.",
    time: "10:42 AM",
    unread: 2,
    messages: [
      { from: "them", text: "Good morning Prof. Koirala, I wanted to ask about the Milestone 2 requirements.", time: "Mon 9:00 AM" },
      { from: "me",   text: "Hi Richard, please refer to the assessment brief uploaded on the course page. All requirements are outlined there.", time: "Mon 9:30 AM" },
      { from: "them", text: "Thank you! I have now submitted my Milestone 2 draft. Please let me know if any changes are needed.", time: "Today 10:42 AM" },
    ],
  },
  {
    id: "c2",
    name: "Sarah Chen",
    context: "ICT272 — Student",
    initials: "SC",
    color: "#0e9f6e",
    lastMsg: "Could you please clarify the marking criteria for Lab Exercise 4?",
    time: "Yesterday",
    unread: 0,
    messages: [
      { from: "them", text: "Hi Prof. Koirala, could you please clarify the marking criteria for Lab Exercise 4?", time: "Aug 29, 11:15 AM" },
      { from: "me",   text: "Hi Sarah, the marking rubric is available in the Lab 4 brief. Focus on functionality, code quality, and documentation.", time: "Aug 29, 2:00 PM" },
    ],
  },
  {
    id: "c3",
    name: "Student Support",
    context: "University Services",
    initials: "SS",
    color: "#7c3aed",
    lastMsg: "Your grade submission deadline is September 20, 2026.",
    time: "Aug 27",
    unread: 0,
    messages: [
      { from: "them", text: "Dear Prof. Koirala, please note that final grade submissions for Semester T226 are due on September 20, 2026.", time: "Aug 27, 9:00 AM" },
      { from: "me",   text: "Noted, thank you for the reminder.", time: "Aug 27, 9:45 AM" },
    ],
  },
  {
    id: "c4",
    name: "Daniel Park",
    context: "ICT126 — Student",
    initials: "DP",
    color: "#ea580c",
    lastMsg: "I had an emergency and could not sit the midterm. Is there a supplementary option?",
    time: "Aug 25",
    unread: 0,
    messages: [
      { from: "them", text: "Hi Prof. Koirala, I had a medical emergency and could not sit the ICT126 midterm quiz. Is there a supplementary option?", time: "Aug 25, 8:30 AM" },
      { from: "me",   text: "Hi Daniel, please submit a medical certificate to the student office and they will guide you through the supplementary assessment process.", time: "Aug 25, 10:00 AM" },
    ],
  },
];

function InstructorMessagesPage({ userName }: { userName: string }) {
  const [activeId, setActiveId] = useState("c1");
  const [input, setInput] = useState("");
  const active = iConversations.find((c) => c.id === activeId)!;

  return (
    <div className="p-6 flex flex-col" style={{ height: "calc(100vh - 64px)" }}>
      <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
        <span>Instructor</span><span>/</span><span className="text-gray-600">Messages</span>
      </div>
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
        <p className="text-sm text-gray-500 mt-0.5">Communicate with students and staff</p>
      </div>

      <div className="flex gap-5 flex-1 min-h-0">
        {/* Conversation list */}
        <div className="w-72 shrink-0 flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-3 border-b border-gray-100">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><IconSearch /></span>
              <input type="text" placeholder="Search messages..." className="w-full pl-9 pr-3 py-2 bg-gray-50 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 border border-gray-200 transition" />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto divide-y divide-gray-100">
            {iConversations.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveId(c.id)}
                className={`w-full flex items-start gap-3 p-4 text-left transition-colors hover:bg-gray-50 ${activeId === c.id ? "bg-blue-50/60 border-r-2 border-blue-600" : ""}`}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0" style={{ background: c.color }}>
                  {c.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <p className={`text-sm font-semibold truncate ${activeId === c.id ? "text-blue-700" : "text-gray-800"}`}>{c.name}</p>
                    <span className="text-[10px] text-gray-400 shrink-0 ml-1">{c.time}</span>
                  </div>
                  <p className="text-xs text-gray-400 truncate">{c.context}</p>
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
          <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-100">
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0" style={{ background: active.color }}>
              {active.initials}
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">{active.name}</p>
              <p className="text-xs text-gray-400">{active.context}</p>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
            {active.messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[68%] flex flex-col gap-1 ${m.from === "me" ? "items-end" : "items-start"}`}>
                  <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${m.from === "me" ? "text-white rounded-br-sm" : "bg-gray-100 text-gray-800 rounded-bl-sm"}`}
                    style={m.from === "me" ? { background: "#1a3a9e" } : {}}>
                    {m.text}
                  </div>
                  <span className="text-[10px] text-gray-400">{m.time}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="px-6 py-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <button className="text-gray-400 hover:text-blue-600 transition-colors p-2 rounded-xl hover:bg-gray-100">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
                </svg>
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
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white hover:opacity-90 transition-all"
                style={{ background: "#1a3a9e" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Instructor Profile Page ────────────────────────────────────────────────────
function InstructorProfilePage({ userName }: { userName: string }) {
  const parts = userName.replace(/^Prof\.\s*/i, "").split(" ");
  const initials = parts.map((p) => p[0]).join("").slice(0, 2).toUpperCase();
  const displayName = userName.startsWith("Prof.") ? userName : `Prof. ${userName}`;

  const personalInfo = [
    { label: "Full Name",        value: displayName },
    { label: "Email Address",    value: "sarita.koirala@university.edu.au" },
    { label: "Phone Number",     value: "+61 2 9876 5432" },
    { label: "Office Location",  value: "Room IT-210, Building C" },
  ];

  const instructorInfo = [
    { label: "Staff ID",            value: "STF-00845" },
    { label: "Department",          value: "Information Technology" },
    { label: "Faculty / School",    value: "School of Information Technology" },
    { label: "Courses Teaching",    value: "ICT301, ICT272, ICT126" },
    { label: "Employment Status",   value: "Full-time" },
  ];

  return (
    <div className="p-6">
      <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
        <span>Instructor</span><span>/</span><span className="text-gray-600">Profile</span>
      </div>
      <div className="flex items-start justify-between mb-6 flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
          <p className="text-sm text-gray-500 mt-0.5">View and manage your instructor information</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-colors" style={{ background: "#1a3a9e" }}>
          <IconEdit /> Edit Profile
        </button>
      </div>

      {/* Profile header card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 mb-6 flex items-center gap-7">
        <div className="w-24 h-24 rounded-full flex items-center justify-center text-white text-3xl font-bold shrink-0" style={{ background: "#0e9f6e" }}>
          {initials}
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">{displayName}</h2>
          <p className="text-sm text-gray-500 mb-3">Instructor · School of Information Technology</p>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full">Full-time</span>
            <span className="text-xs text-gray-500">STF-00845</span>
            <span className="text-xs text-gray-400">·</span>
            <span className="text-xs text-gray-500">sarita.koirala@university.edu.au</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Personal information */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h3 className="text-base font-bold text-gray-800 mb-5">Personal Information</h3>
          <div className="divide-y divide-gray-100">
            {personalInfo.map((f) => (
              <div key={f.label} className="flex items-start justify-between py-3.5">
                <span className="text-sm text-gray-400 w-36 shrink-0">{f.label}</span>
                <span className="text-sm font-medium text-gray-800 text-right">{f.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Instructor information */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h3 className="text-base font-bold text-gray-800 mb-5">Instructor Information</h3>
          <div className="divide-y divide-gray-100">
            {instructorInfo.map((f) => (
              <div key={f.label} className="flex items-start justify-between py-3.5">
                <span className="text-sm text-gray-400 w-40 shrink-0">{f.label}</span>
                <span className={`text-sm font-medium text-right ${f.label === "Employment Status" ? "text-emerald-700" : "text-gray-800"}`}>{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Instructor Settings Page ───────────────────────────────────────────────────
function InstructorSettingsPage() {
  const [saved, setSaved] = useState(false);
  const [email, setEmail] = useState("sarita.koirala@university.edu.au");
  const [phone, setPhone] = useState("+61 2 9876 5432");
  const [notifs, setNotifs] = useState({
    messages:      true,
    assignments:   true,
    quizzes:       true,
    announcements: true,
    system:        false,
  });
  const [twoFactor, setTwoFactor] = useState(false);
  const [language, setLanguage] = useState("English");
  const [timezone, setTimezone] = useState("Australia/Sydney (AEST, UTC+10)");
  const [theme, setTheme] = useState("Light");

  const toggleNotif = (k: keyof typeof notifs) =>
    setNotifs((p) => ({ ...p, [k]: !p[k] }));

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const Toggle = ({ on, onChange }: { on: boolean; onChange: () => void }) => (
    <button
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none ${on ? "bg-blue-600" : "bg-gray-200"}`}
    >
      <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform duration-200 ${on ? "translate-x-5" : "translate-x-0.5"}`} />
    </button>
  );

  const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-5">
      <h3 className="text-base font-bold text-gray-800 mb-4 pb-3 border-b border-gray-100">{title}</h3>
      {children}
    </div>
  );

  const Field = ({ label, sub, children }: { label: string; sub?: string; children: React.ReactNode }) => (
    <div className="flex items-center justify-between py-3.5 border-b border-gray-100 last:border-0">
      <div>
        <p className="text-sm font-medium text-gray-800">{label}</p>
        {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
      </div>
      {children}
    </div>
  );

  return (
    <div className="p-6">
      <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
        <span>Instructor</span><span>/</span><span className="text-gray-600">Settings</span>
      </div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-sm text-gray-500 mt-0.5">Manage your account and portal preferences</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <Section title="Account">
            <Field label="Email Address" sub="Used for login and notifications">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                className="text-sm text-gray-700 border border-gray-200 rounded-xl px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50" />
            </Field>
            <Field label="Phone Number" sub="Optional — for two-factor authentication">
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}
                className="text-sm text-gray-700 border border-gray-200 rounded-xl px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50" />
            </Field>
            <Field label="Change Password" sub="Update your login password">
              <button className="flex items-center gap-1.5 text-sm font-semibold text-blue-700 border border-blue-100 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-xl transition-colors">
                Change Password
              </button>
            </Field>
          </Section>

          <Section title="Preferences">
            <Field label="Language" sub="Interface display language">
              <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 bg-gray-50 text-sm text-gray-700 cursor-pointer">
                <span>{language}</span>
                <IconChevronDown className="w-3.5 h-3.5 text-gray-400" />
              </div>
            </Field>
            <Field label="Time Zone" sub="Used for scheduling and deadlines">
              <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 bg-gray-50 text-sm text-gray-700 cursor-pointer max-w-[260px]">
                <span className="truncate">{timezone}</span>
                <IconChevronDown className="w-3.5 h-3.5 text-gray-400 shrink-0" />
              </div>
            </Field>
            <Field label="Theme" sub="Portal appearance">
              <div className="flex gap-2">
                {["Light", "Dark"].map((t) => (
                  <button key={t} onClick={() => setTheme(t)}
                    className={`text-sm font-medium px-4 py-2 rounded-xl border transition-colors ${theme === t ? "border-blue-600 text-blue-700 bg-blue-50" : "border-gray-200 text-gray-600 hover:bg-gray-50"}`}>
                    {t}
                  </button>
                ))}
              </div>
            </Field>
          </Section>
        </div>

        <div>
          <Section title="Notifications">
            {([
              ["messages",      "New Student Messages",       "Be notified when a student sends you a message"],
              ["assignments",   "Assignment Submissions",     "Get alerts when students submit assignments"],
              ["quizzes",       "Quiz Submissions",           "Get alerts when students submit quizzes"],
              ["announcements", "Announcement Notifications", "Receive alerts when a new announcement is posted"],
              ["system",        "System Notifications",       "Portal maintenance and system updates"],
            ] as [keyof typeof notifs, string, string][]).map(([key, label, sub]) => (
              <Field key={key} label={label} sub={sub}>
                <Toggle on={notifs[key]} onChange={() => toggleNotif(key)} />
              </Field>
            ))}
          </Section>

          <Section title="Security">
            <Field label="Two-Factor Authentication" sub="Add an extra layer of security to your account">
              <Toggle on={twoFactor} onChange={() => setTwoFactor((v) => !v)} />
            </Field>
            <Field label="Active Sessions" sub="Manage devices signed in to your account">
              <button className="flex items-center gap-1.5 text-sm font-semibold text-blue-700 border border-blue-100 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-xl transition-colors">
                View Sessions
              </button>
            </Field>
          </Section>
        </div>
      </div>

      {/* Save */}
      <div className="flex items-center gap-4 pt-2">
        <button onClick={handleSave}
          className="px-6 py-2.5 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-all"
          style={{ background: "#1a3a9e" }}>
          {saved ? "Saved!" : "Save Changes"}
        </button>
        {saved && <span className="text-sm text-green-600 font-medium">Your settings have been saved.</span>}
      </div>
    </div>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="mt-8 border-t border-gray-200 bg-gray-900 text-gray-300 px-8 py-4 flex flex-wrap items-center justify-between gap-3 text-xs">
      <div className="flex gap-6">
        {["Home", "Cookies Policy", "About Us", "Contact Us"].map((l) => (
          <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <span>Follow Us</span>
        {["f", "𝕏", "○", "in"].map((s) => (
          <button key={s} className="w-6 h-6 bg-gray-700 hover:bg-blue-600 rounded flex items-center justify-center text-xs transition-colors">{s}</button>
        ))}
      </div>
    </footer>
  );
}

// ── Root ──────────────────────────────────────────────────────────────────────
export default function InstructorDashboard({ onLogout = () => {} }: { onLogout?: () => void }) {
  const [active, setActive] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);
  const [userName, setUserName] = useState("Prof. Sarita Koirala");

  useEffect(() => {
    const sessionUser = getSessionUser();
    if (sessionUser?.name) {
      setUserName(sessionUser.name);
    }
  }, []);

  const userInitials = getInitials(userName);

  const sidebarPx = collapsed ? "64px" : "224px";

  return (
    <div className="min-h-screen bg-gray-100" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <InstructorSidebar active={active} setActive={setActive} collapsed={collapsed} setCollapsed={setCollapsed} onLogout={onLogout} />
      <InstructorHeader sidebarW={sidebarPx} userName={userName} userInitials={userInitials} />

      <main className="pt-16 min-h-screen flex flex-col transition-all duration-300" style={{ marginLeft: sidebarPx }}>
        <div className="flex-1">
          {active === "dashboard"     && <DashboardHome setActive={setActive} userName={userName} />}
          {active === "courses"       && <MyCoursesPage setActive={setActive} />}
          {active === "students"      && <StudentsPage />}
          {active === "assignments"   && <AssignmentsPage setActive={setActive} />}
          {active === "quizzes"       && <QuizzesPage setActive={setActive} />}
          {active === "materials"     && <LearningMaterialsPage />}
          {active === "grades"        && <GradesPage />}
          {active === "announcements" && <InstructorAnnouncementsPage />}
          {active === "calendar"      && <CalendarPage />}
          {active === "messages"      && <InstructorMessagesPage userName={userName} />}
          {active === "profile"       && <InstructorProfilePage userName={userName} />}
          {active === "settings"      && <InstructorSettingsPage />}
        </div>
        <Footer />
      </main>
    </div>
  );
}
