"use client";

import { useState } from "react";
// Preserved from Vite router setup for reference:
// import { createBrowserRouter, RouterProvider } from "react-router";
// import AdminDashboard from "./AdminDashboard";
// import InstructorDashboard from "./InstructorDashboard";
// import { HomePage, LoginPage, RegisterPage } from "./PublicPages";
import { getSessionUser, clearSession, getInitials } from "./auth";
import { GradesPage, CalendarPage, AnnouncementsPage, MessagesPage, ProfilePage, SettingsPage } from "./StudentPages";

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
const IconCalendar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 shrink-0">
    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const IconAnnouncement = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 shrink-0">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <path d="M15.54 8.46a5 5 0 010 7.07" />
    <path d="M19.07 4.93a10 10 0 010 14.14" />
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
const IconChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
    <polyline points="9 18 15 12 9 6" />
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
const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const IconChevronDown = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
const IconClipboardList = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="9" y1="7" x2="15" y2="7" /><line x1="9" y1="11" x2="15" y2="11" /><line x1="9" y1="15" x2="12" y2="15" />
  </svg>
);
const IconAlertCircle = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);
const IconCheckCircle = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);
const IconXCircle = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
  </svg>
);
const IconClock = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);

// ── Nav items ─────────────────────────────────────────────────────────────────
const navItems = [
  { label: "Dashboard",         icon: <IconDashboard />,   id: "dashboard" },
  { label: "My Courses",        icon: <IconBook />,        id: "courses" },
  { label: "Assignments",       icon: <IconAssignment />,  id: "assignments" },
  { label: "Quizzes",           icon: <IconQuiz />,        id: "quizzes" },
  { label: "Learning Materials",icon: <IconFolder />,      id: "materials" },
  { label: "Grades",            icon: <IconGrades />,      id: "grades" },
  { label: "Calendar",          icon: <IconCalendar />,    id: "calendar" },
  { label: "Announcements",     icon: <IconAnnouncement />,id: "announcements" },
  { label: "Messages",          icon: <IconMessage />,     id: "messages" },
  { label: "Profile",           icon: <IconProfile />,     id: "profile" },
  { label: "Settings",          icon: <IconSettings />,    id: "settings" },
];

// ── Sidebar ───────────────────────────────────────────────────────────────────
function Sidebar({
  active, setActive, collapsed, setCollapsed, onLogout,
}: {
  active: string;
  setActive: (id: string) => void;
  collapsed: boolean;
  setCollapsed: (v: boolean) => void;
  onLogout: () => void;
}) {
  const w = collapsed ? "w-16" : "w-56";
  return (
    <aside
      className={`fixed top-0 left-0 h-full flex flex-col z-30 transition-all duration-300 ${w}`}
      style={{ background: "#1a3a9e" }}
    >
      {/* Branding + toggle */}
      <div className={`flex items-center pt-5 pb-4 border-b border-white/10 ${collapsed ? "justify-center px-0" : "px-4 gap-2"}`}>
        {collapsed ? (
          <button
            onClick={() => setCollapsed(false)}
            className="text-white hover:text-blue-200 transition-colors flex flex-col items-center gap-1"
            title="Expand sidebar"
          >
            <IconGraduationCap className="w-7 h-7" />
            <span className="text-[8px] font-bold tracking-wider text-blue-300">EF</span>
          </button>
        ) : (
          <>
            <IconGraduationCap className="w-6 h-6 text-white shrink-0" />
            <div className="flex-1 overflow-hidden">
              <p className="text-white font-bold text-base tracking-tight leading-none truncate">EduFlex</p>
              <p className="text-blue-200 text-[10px] mt-0.5 truncate">Simple and Smart system</p>
            </div>
            <button
              onClick={() => setCollapsed(true)}
              className="text-blue-200 hover:text-white transition-colors ml-1 p-1 rounded hover:bg-white/10"
              title="Collapse sidebar"
            >
              <IconChevronsLeft />
            </button>
          </>
        )}
      </div>

      {/* Nav */}
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

      {/* Expand button when collapsed (bottom) */}
      {collapsed && (
        <div className="px-2 py-3 border-t border-white/10 flex justify-center">
          <button
            onClick={() => setCollapsed(false)}
            className="text-blue-200 hover:text-white transition-colors p-2 rounded hover:bg-white/10"
            title="Expand"
          >
            <IconChevronsRight />
          </button>
        </div>
      )}

      {/* Logout */}
      {!collapsed && (
        <div className="px-2 py-4 border-t border-white/10">
          <button onClick={onLogout} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/10 hover:text-white transition-all duration-150">
            <IconLogout />
            <span>Logout</span>
          </button>
        </div>
      )}
      {collapsed && (
        <div className="px-2 py-4 border-t border-white/10 flex justify-center">
          <button onClick={onLogout}
            className="text-blue-100 hover:text-white hover:bg-white/10 transition-all p-2 rounded-lg"
            title="Logout"
          >
            <IconLogout />
          </button>
        </div>
      )}
    </aside>
  );
}

// ── Header ────────────────────────────────────────────────────────────────────
function Header({ sidebarW, userName, userRole, userInitials, onMessages, onNotifications, onProfile }: { sidebarW: string; userName: string; userRole: string; userInitials: string; onMessages?: () => void; onNotifications?: () => void; onProfile?: () => void }) {
  return (
    <header
      className="fixed top-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center px-6 gap-4 z-20 transition-all duration-300"
      style={{ left: sidebarW }}
    >
      {/* Search — full width left */}
      <div className="flex-1 relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <IconSearch />
        </span>
        <input
          type="text"
          placeholder="Search anything..."
          className="w-full pl-9 pr-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
        />
      </div>

      {/* Right icons */}
      <div className="flex items-center gap-3 shrink-0">
        <button onClick={onMessages} className="relative text-gray-500 hover:text-blue-700 transition-colors p-1.5 rounded-full hover:bg-gray-100">
          <IconMail />
        </button>
        <button onClick={onNotifications} className="relative text-gray-500 hover:text-blue-700 transition-colors p-1.5 rounded-full hover:bg-gray-100">
          <IconBell />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white" />
        </button>
        <button onClick={onProfile} className="flex items-center gap-2 pl-3 border-l border-gray-200 hover:opacity-80 transition-opacity">
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-800 leading-tight">{userName}</p>
            <p className="text-xs text-gray-500">{userRole}</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
            {userInitials}
          </div>
        </button>
      </div>
    </header>
  );
}

// ── Stat Card ─────────────────────────────────────────────────────────────────
function StatCard({
  title, icon, bigNum, bigLabel, rows,
}: {
  title: string; icon: React.ReactNode; bigNum: string; bigLabel: string;
  rows: { color: string; label: string; value: string | number }[];
}) {
  return (
    <div className="bg-white rounded-2xl p-4 flex gap-3 border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full">
      <div className="shrink-0 mt-0.5 text-blue-500">{icon}</div>
      <div>
        <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide mb-1">{title}</p>
        <p className="text-xl font-bold text-gray-800 leading-none">
          {bigNum}<span className="text-xs font-medium text-gray-500 ml-1">{bigLabel}</span>
        </p>
        <div className="mt-2 space-y-0.5">
          {rows.map((r) => (
            <p key={r.label} className="text-xs">
              <span className={`font-bold ${r.color} mr-1`}>{r.value}</span>
              <span className="text-gray-500">{r.label}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Announcement Banner ───────────────────────────────────────────────────────
function AnnouncementBanner({ onClick }: { onClick?: () => void }) {
  return (
    <div
      className="rounded-2xl flex items-center gap-4 px-5 py-4 overflow-hidden"
      style={{ background: "#1a3a9e", cursor: onClick ? "pointer" : "default" }}
      onClick={onClick}
      role={onClick ? "button" : undefined}
    >
      <div className="shrink-0 w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center text-white">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
        </svg>
      </div>
      <div className="flex-1 overflow-hidden">
        <p className="text-white font-semibold text-sm mb-0.5">Announcements</p>
        <div className="overflow-hidden">
          <p className="marquee-text text-blue-200 text-sm">
            The Notification Message will display here sliding. &nbsp;&nbsp; Reminder: Assessment 2 for ICT301 is due September 3. &nbsp;&nbsp; New learning materials uploaded for ICT126 AI. &nbsp;&nbsp; Semester enrollment opens October 1.
          </p>
        </div>
      </div>
      <span className="shrink-0 text-blue-200">
        <IconChevronRight />
      </span>
    </div>
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

// ── Active Course Row ─────────────────────────────────────────────────────────
function ActiveCourseCard({
  code, title, term, school, pct, bgColor, accentColor, svgIcon, onOpen,
}: ActiveCourse & { onOpen: () => void }) {
  return (
    <div
      className="rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col cursor-pointer"
      style={{ background: bgColor }}
      onClick={onOpen}
    >
      <div className="flex justify-center items-center py-5">
        <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm">
          {svgIcon(accentColor)}
        </div>
      </div>
      <div className="px-4 pb-1">
        <p className="text-[10px] font-semibold text-gray-400 mb-0.5">{code}</p>
        <p className="text-sm font-bold text-gray-800 leading-snug">{title} {term}</p>
      </div>
      <div className="px-4 py-3">
        <p className="text-xs text-gray-500 mb-1.5">{pct}% complete</p>
        <ProgressBar pct={pct} color={accentColor} />
      </div>
      <button
        onClick={(e) => { e.stopPropagation(); onOpen(); }}
        className="mt-auto mx-4 mb-4 py-1.5 rounded-xl text-xs font-semibold text-blue-700 bg-white hover:bg-blue-50 border border-blue-100 transition-colors truncate px-2"
      >
        {school}
      </button>
    </div>
  );
}

// ── Completed Course Row ──────────────────────────────────────────────────────
function CompletedCourseRow({ code, title, term, year }: { code: string; title: string; term: string; year: string }) {
  return (
    <div className="flex items-center justify-between bg-white rounded-xl px-4 py-3 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center text-green-600 shrink-0">
          <IconCheck />
        </div>
        <div className="min-w-0">
          <p className="text-xs text-gray-400 font-medium">{code} · {year}</p>
          <p className="text-sm font-semibold text-gray-800 truncate">{title}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 shrink-0 ml-3">
        <span className="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
          Completed
        </span>
        <span className="text-xs text-gray-400 font-medium">{term}</span>
      </div>
    </div>
  );
}

// ── Grades Widget ─────────────────────────────────────────────────────────────
function GradesWidget() {
  const grades = [
    { name: "Assessment 1", course: "ICT301", note: "With Feedback", score: "8/10" },
    { name: "Quiz 1",        course: "ICT272", note: "",              score: "32/35" },
  ];
  return (
    <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <p className="text-[10px] font-bold text-blue-700 uppercase tracking-widest">Recent Released Grades</p>
        <button className="text-xs text-blue-600 hover:underline font-medium">View All &gt;</button>
      </div>
      <div className="divide-y divide-gray-100">
        {grades.map((g) => (
          <div key={g.name + g.course} className="flex items-center justify-between py-3">
            <div>
              <p className="text-sm font-semibold text-gray-800">
                {g.name} · <span className="text-gray-500 font-normal">{g.course}</span>
              </p>
              {g.note && <p className="text-xs text-gray-400">{g.note}</p>}
            </div>
            <span className="text-base font-bold text-blue-700">{g.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Deadlines Widget ──────────────────────────────────────────────────────────
function DeadlinesWidget() {
  const deadlines = [
    { name: "Assessment 2", course: "ICT301", due: "Due 3 Sep" },
    { name: "Assessment 2", course: "ICT272", due: "Due 07 Aug" },
  ];
  return (
    <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <p className="text-[10px] font-bold text-blue-700 uppercase tracking-widest">Upcoming Deadlines</p>
        <button className="text-xs text-blue-600 hover:underline font-medium">View All &gt;</button>
      </div>
      <div className="divide-y divide-gray-100">
        {deadlines.map((d, i) => (
          <div key={i} className="flex items-center justify-between py-3">
            <p className="text-sm font-semibold text-gray-800">
              {d.name} <span className="text-gray-500 font-normal">({d.course})</span>
            </p>
            <span className="text-xs font-semibold text-orange-500 bg-orange-50 px-2 py-1 rounded-lg">{d.due}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Panel Modal ───────────────────────────────────────────────────────────────
function PanelModal({ title, children, onClose }: { title: string; children: React.ReactNode; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 p-6" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-800">{title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 text-2xl leading-none w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">&times;</button>
        </div>
        {children}
      </div>
    </div>
  );
}

// ── Course Detail Modal ───────────────────────────────────────────────────────
type ActiveCourse = {
  code: string; title: string; term: string; school: string;
  pct: number; bgColor: string; accentColor: string;
  svgIcon: (color: string) => React.ReactNode;
};

function CourseDetailModal({ course, onClose }: { course: ActiveCourse; onClose: () => void }) {
  return (
    <PanelModal title={`${course.code} — ${course.title}`} onClose={onClose}>
      <p className="text-sm text-gray-500 mb-4">{course.school} · {course.term}</p>
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1.5">
          <span className="text-gray-600 font-medium">Progress</span>
          <span className="font-bold" style={{ color: course.accentColor }}>{course.pct}%</span>
        </div>
        <ProgressBar pct={course.pct} color={course.accentColor} />
      </div>
      <div className="grid grid-cols-2 gap-3 mb-4">
        {[
          { label: "Assignments", val: "2 pending" },
          { label: "Quizzes",     val: "1 upcoming" },
          { label: "Materials",   val: "12 resources" },
          { label: "Grade",       val: "In progress" },
        ].map((s) => (
          <div key={s.label} className="bg-gray-50 rounded-xl p-3">
            <p className="text-xs text-gray-500">{s.label}</p>
            <p className="text-sm font-semibold text-gray-800">{s.val}</p>
          </div>
        ))}
      </div>
      <button onClick={onClose} className="w-full py-2 rounded-xl text-sm font-semibold text-white" style={{ background: "#1a3a9e" }}>
        Go to Course
      </button>
    </PanelModal>
  );
}

// ── Assignments Modal ─────────────────────────────────────────────────────────
function AssignmentsModal({ onClose }: { onClose: () => void }) {
  const items = [
    { name: "Assessment 2", course: "ICT301", due: "Sep 3, 2026",  status: "Due" },
    { name: "Assessment 2", course: "ICT272", due: "Aug 7, 2026",  status: "Overdue" },
    { name: "Lab Report 1", course: "ICT126", due: "Sep 15, 2026", status: "Not started" },
  ];

  return (
    <PanelModal title="Assignments" onClose={onClose}>
      <div className="space-y-3">
        {items.map((a, i) => (
          <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
            <div>
              <p className="text-sm font-semibold text-gray-800">{a.name} <span className="text-gray-500 font-normal">({a.course})</span></p>
              <p className="text-xs text-gray-400">Due: {a.due}</p>
            </div>
            <span className={`text-xs font-semibold px-2 py-1 rounded-lg ${a.status === "Due" ? "bg-yellow-50 text-yellow-700" : a.status === "Overdue" ? "bg-red-50 text-red-600" : "bg-gray-100 text-gray-500"}`}>
              {a.status}
            </span>
          </div>
        ))}
      </div>
      <button onClick={onClose} className="mt-4 w-full py-2 rounded-xl text-sm font-semibold text-white" style={{ background: "#1a3a9e" }}>
        View All Assignments
      </button>
    </PanelModal>
  );
}

// ── Quizzes Modal ─────────────────────────────────────────────────────────────
function QuizzesModal({ onClose }: { onClose: () => void }) {
  const items = [
    { name: "Quiz 2", course: "ICT272", date: "Sep 10, 2026", status: "Upcoming", score: "" },
    { name: "Quiz 1", course: "ICT272", date: "Aug 1, 2026",  status: "Finished", score: "32/35" },
    { name: "Quiz 1", course: "ICT301", date: "Jul 20, 2026", status: "Finished", score: "8/10" },
  ];
  return (
    <PanelModal title="Quizzes" onClose={onClose}>
      <div className="space-y-3">
        {items.map((q, i) => (
          <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
            <div>
              <p className="text-sm font-semibold text-gray-800">{q.name} <span className="text-gray-500 font-normal">({q.course})</span></p>
              <p className="text-xs text-gray-400">{q.date}</p>
            </div>
            <div className="text-right">
              <span className={`text-xs font-semibold px-2 py-1 rounded-lg block mb-1 ${q.status === "Upcoming" ? "bg-blue-50 text-blue-700" : "bg-green-50 text-green-700"}`}>
                {q.status}
              </span>
              {q.score && <span className="text-xs font-bold text-gray-700">{q.score}</span>}
            </div>
          </div>
        ))}
      </div>
      <button onClick={onClose} className="mt-4 w-full py-2 rounded-xl text-sm font-semibold text-white" style={{ background: "#1a3a9e" }}>
        View All Quizzes
      </button>
    </PanelModal>
  );
}

// ── Course data ───────────────────────────────────────────────────────────────
const activeCourses: ActiveCourse[] = [
  {
    code: "ICT301",
    title: "Information Technology Project 1",
    term: "T226",
    school: "School of Information Technology",
    pct: 58,
    bgColor: "#eff6ff",
    accentColor: "#2563eb",
    svgIcon: (c) => (
      <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" className="w-7 h-7">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 12h8M12 8v8" />
      </svg>
    ),
  },
  {
    code: "ICT272",
    title: "Web Design and Development",
    term: "T226",
    school: "School of Information Technology",
    pct: 72,
    bgColor: "#f0fdf4",
    accentColor: "#16a34a",
    svgIcon: (c) => (
      <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" className="w-7 h-7">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    code: "ICT126",
    title: "Artificial Intelligence",
    term: "T226",
    school: "School of Information Technology",
    pct: 35,
    bgColor: "#fdf2f8",
    accentColor: "#db2777",
    svgIcon: (c) => (
      <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" className="w-7 h-7">
        <path d="M12 2a4 4 0 014 4v1h1a3 3 0 013 3v2a3 3 0 01-3 3h-1v1a4 4 0 01-8 0v-1H7a3 3 0 01-3-3v-2a3 3 0 013-3h1V6a4 4 0 014-4z" /><circle cx="9" cy="10" r="1" fill={c} stroke="none" /><circle cx="15" cy="10" r="1" fill={c} stroke="none" /><path d="M9 15s1 1.5 3 1.5 3-1.5 3-1.5" />
      </svg>
    ),
  },
];

const completedCourses = [
  { code: "ICT101", title: "Introduction to Programming (Python)",     term: "T123", year: "2023" },
  { code: "ICT102", title: "Discrete Mathematics for IT",              term: "T123", year: "2023" },
  { code: "ICT103", title: "Computer Organisation and Architecture",   term: "T123", year: "2023" },
  { code: "ICT104", title: "Professional Practice in IT",              term: "T123", year: "2023" },
  { code: "ICT105", title: "Database Management Systems",              term: "T124", year: "2024" },
  { code: "ICT106", title: "Object-Oriented Programming (Java)",       term: "T124", year: "2024" },
  { code: "ICT107", title: "Network Architecture and Protocols",       term: "T124", year: "2024" },
  { code: "ICT108", title: "Operating Systems Fundamentals",           term: "T124", year: "2024" },
  { code: "ICT201", title: "Data Structures and Algorithms",           term: "T125", year: "2025" },
  { code: "ICT202", title: "Software Engineering Principles",          term: "T125", year: "2025" },
  { code: "ICT203", title: "Cloud Computing Foundations",              term: "T125", year: "2025" },
  { code: "ICT204", title: "Human-Computer Interaction",               term: "T125", year: "2025" },
  { code: "ICT205", title: "Web Technologies and Standards",           term: "T225", year: "2025" },
  { code: "ICT206", title: "Mobile Application Development",           term: "T225", year: "2025" },
  { code: "ICT207", title: "IT Project Management",                    term: "T225", year: "2025" },
  { code: "ICT208", title: "Information Systems Security",             term: "T225", year: "2025" },
  { code: "ICT209", title: "Machine Learning Essentials",              term: "T325", year: "2025" },
  { code: "ICT210", title: "Big Data Analytics",                       term: "T325", year: "2025" },
  { code: "ICT211", title: "Internet of Things Architecture",          term: "T325", year: "2025" },
  { code: "ICT212", title: "DevOps and Continuous Integration",        term: "T325", year: "2025" },
];

// ── Assignments Page ──────────────────────────────────────────────────────────
const assignmentStatuses = {
  submitted: { label: "Submitted", bg: "bg-green-50", text: "text-green-700", border: "border-green-200", dot: "bg-green-500" },
  dueSoon:   { label: "Due Soon",  bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200", dot: "bg-orange-400" },
  notStarted:{ label: "Not Started", bg: "bg-gray-100", text: "text-gray-600", border: "border-gray-200", dot: "bg-gray-400" },
  overdue:   { label: "Overdue",   bg: "bg-red-50",    text: "text-red-600",   border: "border-red-200",   dot: "bg-red-500" },
} as const;

type AStatus = keyof typeof assignmentStatuses;

interface Assignment {
  id: string;
  name: string;
  description: string;
  dueDate: string;
  status: AStatus;
}

interface CourseGroup {
  code: string;
  title: string;
  term: string;
  iconColor: string;
  assignments: Assignment[];
}

const courseGroups: CourseGroup[] = [
  {
    code: "ICT272",
    title: "Web Design and Development",
    term: "T226",
    iconColor: "#2563eb",
    assignments: [
      {
        id: "a1",
        name: "RICT272 Web application",
        description: "Create a responsive website layout using HTML, CSS, and Flexbox.",
        dueDate: "May 30, 2026",
        status: "submitted",
      },
      {
        id: "a2",
        name: "ICT301 Prototyping",
        description: "Add interactive elements using JavaScript and DOM manipulation.",
        dueDate: "Jun 06, 2026",
        status: "dueSoon",
      },
    ],
  },
  {
    code: "ICT301",
    title: "Information Technology Project 1",
    term: "T226",
    iconColor: "#7c3aed",
    assignments: [
      {
        id: "a3",
        name: "Project Proposal",
        description: "Submit a structured proposal outlining project scope and objectives.",
        dueDate: "May 25, 2026",
        status: "submitted",
      },
      {
        id: "a4",
        name: "Literature Review",
        description: "Conduct a review of at least 10 academic sources related to your topic.",
        dueDate: "Jun 15, 2026",
        status: "notStarted",
      },
    ],
  },
];

type AssignmentFilter = "all" | "dueSoon" | "submitted" | "overdue";

function StatusBadge({ status }: { status: AStatus }) {
  const s = assignmentStatuses[status];
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${s.bg} ${s.text} ${s.border}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
      {s.label}
    </span>
  );
}

function AssignmentRow({ a }: { a: Assignment }) {
  return (
    <div className="grid items-center gap-4 px-5 py-3.5 border-b border-gray-100 last:border-0 hover:bg-blue-50/30 transition-colors group"
      style={{ gridTemplateColumns: "1fr 2fr 140px 110px" }}>
      <div>
        <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">{a.name}</p>
      </div>
      <div>
        <p className="text-xs text-gray-500 leading-relaxed">{a.description}</p>
      </div>
      <div className="flex items-center gap-1.5 text-xs text-gray-500">
        <IconClock className="w-3.5 h-3.5 text-gray-400 shrink-0" />
        <span>{a.dueDate}</span>
      </div>
      <div>
        <StatusBadge status={a.status} />
      </div>
    </div>
  );
}

function CourseAccordion({ group, defaultOpen = false, filter }: { group: CourseGroup; defaultOpen?: boolean; filter: AssignmentFilter }) {
  const [open, setOpen] = useState(defaultOpen);

  const visibleAssignments = filter === "all"
    ? group.assignments
    : group.assignments.filter((a) => a.status === filter);

  if (filter !== "all" && visibleAssignments.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-3 px-5 py-4 hover:bg-gray-50 transition-colors text-left"
      >
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 text-white"
          style={{ background: group.iconColor }}
        >
          <IconClipboardList className="w-4.5 h-4.5" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-gray-800">
            {group.code} {group.title} {group.term}
          </p>
          <p className="text-xs text-gray-400 mt-0.5">{visibleAssignments.length} assignment{visibleAssignments.length !== 1 ? "s" : ""}</p>
        </div>
        <div className={`text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          <IconChevronDown />
        </div>
      </button>

      {open && visibleAssignments.length > 0 && (
        <div className="border-t border-gray-100">
          {/* Table header */}
          <div className="grid px-5 py-2.5 bg-gray-50 border-b border-gray-100 gap-4"
            style={{ gridTemplateColumns: "1fr 2fr 140px 110px" }}>
            {["Assignment", "Description", "Due Date", "Status"].map((h) => (
              <p key={h} className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{h}</p>
            ))}
          </div>
          {visibleAssignments.map((a) => (
            <AssignmentRow key={a.id} a={a} />
          ))}
        </div>
      )}
    </div>
  );
}

type SortOption = "dueDate" | "newest" | "oldest" | "status";

const courseOptions = [
  { value: "all",    label: "All Courses" },
  { value: "ICT301", label: "ICT301 – Information Technology Project 1" },
  { value: "ICT272", label: "ICT272 – Web Design and Development" },
  { value: "ICT126", label: "ICT126 – Artificial Intelligence" },
];

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "dueDate", label: "Due Date" },
  { value: "newest",  label: "Newest" },
  { value: "oldest",  label: "Oldest" },
  { value: "status",  label: "Status" },
];

function AssignmentsPage() {
  const [filter, setFilter] = useState<AssignmentFilter>("all");
  const [courseFilter, setCourseFilter] = useState("all");
  const [sortBy, setSortBy] = useState<SortOption>("dueDate");
  const [courseOpen, setCourseOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const filterTabs: { id: AssignmentFilter; label: string }[] = [
    { id: "all",       label: "All Assignments" },
    { id: "dueSoon",   label: "Due Soon" },
    { id: "submitted", label: "Submitted" },
    { id: "overdue",   label: "Overdue" },
  ];

  const visibleGroups = courseGroups
    .filter((g) => courseFilter === "all" || g.code === courseFilter)
    .map((g) => {
      const sorted = [...g.assignments].sort((a, b) => {
        if (sortBy === "newest") return new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime();
        if (sortBy === "oldest") return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
        if (sortBy === "status") return a.status.localeCompare(b.status);
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      });
      return { ...g, assignments: sorted };
    });

  const courseLabel = courseOptions.find((o) => o.value === courseFilter)?.label ?? "All Courses";
  const sortLabel   = sortOptions.find((o) => o.value === sortBy)?.label ?? "Due Date";

  const statusBreakdown = [
    { status: "submitted"  as AStatus, count: 5,  pct: 42 },
    { status: "dueSoon"    as AStatus, count: 2,  pct: 17 },
    { status: "notStarted" as AStatus, count: 4,  pct: 33 },
    { status: "overdue"    as AStatus, count: 1,  pct: 8  },
  ];

  return (
    <div className="p-6">
      {/* Page heading */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
          <span>Assignments</span>
          <span>/</span>
          <span className="text-gray-600">View and manage your course assignments</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Assignments</h1>
      </div>

      {/* Stat banner cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Total */}
        <button onClick={() => setFilter("all")} className="text-left bg-white rounded-2xl border border-gray-200 shadow-sm p-4 flex items-start gap-3 hover:shadow-md hover:border-blue-200 transition-all">
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
            <IconClipboardList className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Total Assignments</p>
            <p className="text-2xl font-extrabold text-gray-900 leading-none">12</p>
            <p className="text-xs text-gray-400 mt-1">Across all courses</p>
          </div>
        </button>

        {/* Due Soon */}
        <button onClick={() => setFilter("dueSoon")} className="text-left bg-orange-50 rounded-2xl border border-orange-100 shadow-sm p-4 flex items-start gap-3 hover:shadow-md hover:border-orange-300 transition-all">
          <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-500 shrink-0">
            <IconClock className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-orange-400 uppercase tracking-wider mb-0.5">Due Soon</p>
            <p className="text-2xl font-extrabold text-orange-600 leading-none">2</p>
            <p className="text-xs text-orange-400 mt-1">Due in the next 7 days</p>
          </div>
        </button>

        {/* Submitted */}
        <button onClick={() => setFilter("submitted")} className="text-left bg-green-50 rounded-2xl border border-green-100 shadow-sm p-4 flex items-start gap-3 hover:shadow-md hover:border-green-300 transition-all">
          <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600 shrink-0">
            <IconCheckCircle className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-green-500 uppercase tracking-wider mb-0.5">Submitted</p>
            <p className="text-2xl font-extrabold text-green-700 leading-none">5</p>
            <p className="text-xs text-green-500 mt-1">Assignments submitted</p>
          </div>
        </button>

        {/* Overdue */}
        <button onClick={() => setFilter("overdue")} className="text-left bg-red-50 rounded-2xl border border-red-100 shadow-sm p-4 flex items-start gap-3 hover:shadow-md hover:border-red-300 transition-all">
          <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-red-500 shrink-0">
            <IconXCircle className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-red-400 uppercase tracking-wider mb-0.5">Overdue</p>
            <p className="text-2xl font-extrabold text-red-600 leading-none">1</p>
            <p className="text-xs text-red-400 mt-1">Past due assignments</p>
          </div>
        </button>
      </div>

      {/* Main content */}
      <div className="space-y-4">
          {/* Filter row */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm px-4">
            <div className="flex items-center justify-between">
              {/* Tabs */}
              <div className="flex items-center gap-1 overflow-x-auto">
                {filterTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setFilter(tab.id)}
                    className={`relative px-4 py-3.5 text-sm font-medium whitespace-nowrap transition-colors ${
                      filter === tab.id
                        ? "text-blue-700"
                        : "text-gray-500 hover:text-gray-800"
                    }`}
                  >
                    {tab.label}
                    {filter === tab.id && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-t-full bg-blue-600" />
                    )}
                  </button>
                ))}
              </div>

              {/* Dropdowns */}
              <div className="flex items-center gap-2 shrink-0 pl-4">
                {/* Course filter */}
                <div className="relative">
                  <button
                    onClick={() => { setCourseOpen((o) => !o); setSortOpen(false); }}
                    className="flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg px-3 py-1.5 transition-colors"
                  >
                    {courseLabel === "All Courses" ? "All Courses" : courseFilter}
                    <IconChevronDown className="w-3.5 h-3.5 text-gray-400" />
                  </button>
                  {courseOpen && (
                    <div className="absolute right-0 top-full mt-1 z-30 bg-white border border-gray-200 rounded-xl shadow-lg py-1 min-w-[260px]">
                      {courseOptions.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => { setCourseFilter(opt.value); setCourseOpen(false); }}
                          className={`w-full text-left px-4 py-2.5 text-xs hover:bg-blue-50 transition-colors ${courseFilter === opt.value ? "text-blue-700 font-semibold" : "text-gray-700"}`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Sort */}
                <div className="relative">
                  <button
                    onClick={() => { setSortOpen((o) => !o); setCourseOpen(false); }}
                    className="flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg px-3 py-1.5 transition-colors"
                  >
                    Sort by: {sortLabel}
                    <IconChevronDown className="w-3.5 h-3.5 text-gray-400" />
                  </button>
                  {sortOpen && (
                    <div className="absolute right-0 top-full mt-1 z-30 bg-white border border-gray-200 rounded-xl shadow-lg py-1 min-w-[140px]">
                      {sortOptions.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                          className={`w-full text-left px-4 py-2.5 text-xs hover:bg-blue-50 transition-colors ${sortBy === opt.value ? "text-blue-700 font-semibold" : "text-gray-700"}`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Accordion course groups */}
          {visibleGroups.map((g, i) => (
            <CourseAccordion
              key={g.code}
              group={g}
              defaultOpen={i === 0}
              filter={filter}
            />
          ))}
      </div>
    </div>
  );
}

// ── Quizzes Page ─────────────────────────────────────────────────────────────
const IconLock = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0110 0v4" />
  </svg>
);

const IconPlay = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const IconTrophy = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <path d="M6 9H3V4h3M18 9h3V4h-3M6 9a6 6 0 0012 0M12 15v4M8 21h8M12 9V4" />
  </svg>
);

type QuizStatus = "open" | "locked" | "completed" | "overdue";
type QuizFilter = "all" | "upcoming" | "completed" | "overdue";

interface QuizItem {
  id: string;
  name: string;
  description: string;
  dueDate: string;
  status: QuizStatus;
  timeLimit?: string;
  questions?: number;
  weight?: string;
  score?: string;
  dateTaken?: string;
}

interface QuizCourseGroup {
  code: string;
  title: string;
  term: string;
  iconColor: string;
  quizzes: QuizItem[];
}

const quizCourseGroups: QuizCourseGroup[] = [
  {
    code: "ICT272",
    title: "Web Design and Development",
    term: "T226",
    iconColor: "#2563eb",
    quizzes: [
      { id: "q1", name: "Weekly Quiz 4", description: "JavaScript DOM manipulation and event handling.", dueDate: "Sep 05, 2026", status: "open", timeLimit: "30 Mins", questions: 15, weight: "5%" },
      { id: "q2", name: "Weekly Quiz 3", description: "CSS Flexbox and responsive layout.", dueDate: "Aug 15, 2026", status: "completed", score: "13/15", dateTaken: "Aug 15, 2026" },
    ],
  },
  {
    code: "ICT301",
    title: "Information Technology Project 1",
    term: "T226",
    iconColor: "#7c3aed",
    quizzes: [
      { id: "q3", name: "Midterm Exam", description: "Project management and systems analysis.", dueDate: "Oct 12, 2026", status: "locked", timeLimit: "90 Mins", questions: 40, weight: "20%" },
      { id: "q4", name: "Weekly Quiz 1", description: "Introduction to project lifecycle.", dueDate: "Aug 02, 2026", status: "completed", score: "32/35", dateTaken: "Aug 02, 2026" },
    ],
  },
  {
    code: "ICT126",
    title: "Artificial Intelligence",
    term: "T226",
    iconColor: "#059669",
    quizzes: [
      { id: "q5", name: "Weekly Quiz 3", description: "Neural networks and deep learning fundamentals.", dueDate: "Sep 20, 2026", status: "locked", timeLimit: "30 Mins", questions: 15, weight: "5%" },
    ],
  },
];

const quizStatusStyles: Record<QuizStatus, { label: string; bg: string; text: string; border: string; dot: string }> = {
  open:      { label: "Open Now",  bg: "bg-blue-50",   text: "text-blue-700",  border: "border-blue-100",  dot: "bg-blue-500" },
  locked:    { label: "Locked",    bg: "bg-gray-100",  text: "text-gray-500",  border: "border-gray-200",  dot: "bg-gray-400" },
  completed: { label: "Completed", bg: "bg-green-50",  text: "text-green-700", border: "border-green-100", dot: "bg-green-500" },
  overdue:   { label: "Overdue",   bg: "bg-red-50",    text: "text-red-600",   border: "border-red-100",   dot: "bg-red-500" },
};

const quizCourseOptions = [
  { value: "all",    label: "All Courses" },
  { value: "ICT272", label: "ICT272 – Web Design and Development" },
  { value: "ICT301", label: "ICT301 – Information Technology Project 1" },
  { value: "ICT126", label: "ICT126 – Artificial Intelligence" },
];

function QuizStatusBadge({ status }: { status: QuizStatus }) {
  const s = quizStatusStyles[status];
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${s.bg} ${s.text} ${s.border}`}>
      {status === "locked" ? <IconLock className="w-3 h-3" /> : <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />}
      {s.label}
    </span>
  );
}

function QuizAccordion({ group, filter, defaultOpen = false }: { group: QuizCourseGroup; filter: QuizFilter; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  const visible = filter === "all"
    ? group.quizzes
    : group.quizzes.filter((q) => {
        if (filter === "upcoming") return q.status === "open" || q.status === "locked";
        if (filter === "completed") return q.status === "completed";
        if (filter === "overdue") return q.status === "overdue";
        return true;
      });

  if (filter !== "all" && visible.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-3 px-5 py-4 hover:bg-gray-50 transition-colors text-left"
      >
        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0"
          style={{ background: group.iconColor }}>
          {group.code.slice(0, 3)}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-gray-800">{group.code} — {group.title}</p>
          <p className="text-xs text-gray-400">{group.term} · {visible.length} quiz{visible.length !== 1 ? "zes" : ""}</p>
        </div>
        <IconChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && visible.length > 0 && (
        <div className="border-t border-gray-100">
          <div className="grid px-5 py-2.5 bg-gray-50 border-b border-gray-100 gap-4"
            style={{ gridTemplateColumns: "1fr 2fr 130px 120px 110px" }}>
            {["Quiz", "Description", "Due Date", "Status", "Action"].map((h) => (
              <p key={h} className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{h}</p>
            ))}
          </div>
          {visible.map((q) => (
            <div key={q.id}
              className="grid items-center gap-4 px-5 py-3.5 border-b border-gray-100 last:border-0 hover:bg-blue-50/30 transition-colors"
              style={{ gridTemplateColumns: "1fr 2fr 130px 120px 110px" }}>
              <div>
                <p className="text-sm font-semibold text-gray-800">{q.name}</p>
                {q.score && (
                  <div className="flex items-center gap-1 mt-0.5">
                    <IconTrophy className="w-3 h-3 text-yellow-500" />
                    <span className="text-xs font-bold text-gray-600">{q.score}</span>
                  </div>
                )}
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">{q.description}</p>
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <IconClock className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                <span>{q.dateTaken ?? q.dueDate}</span>
              </div>
              <QuizStatusBadge status={q.status} />
              <div>
                {q.status === "open" ? (
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white shadow-sm hover:opacity-90 transition-all"
                    style={{ background: "#1a3a9e" }}>
                    <IconPlay className="w-3 h-3" /> Start
                  </button>
                ) : q.status === "completed" ? (
                  <span className="text-xs text-gray-400">—</span>
                ) : (
                  <button disabled className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-gray-400 bg-gray-100 border border-gray-200 cursor-not-allowed">
                    <IconLock className="w-3 h-3" /> Locked
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function QuizzesPage() {
  const [filter, setFilter] = useState<QuizFilter>("all");
  const [courseFilter, setCourseFilter] = useState("all");
  const [sortBy, setSortBy] = useState<SortOption>("dueDate");
  const [courseOpen, setCourseOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const filterTabs: { id: QuizFilter; label: string }[] = [
    { id: "all",       label: "All Quizzes" },
    { id: "upcoming",  label: "Upcoming" },
    { id: "completed", label: "Completed" },
    { id: "overdue",   label: "Overdue" },
  ];

  const allQuizzes = quizCourseGroups.flatMap((g) => g.quizzes);
  const totalCount     = allQuizzes.length;
  const upcomingCount  = allQuizzes.filter((q) => q.status === "open" || q.status === "locked").length;
  const completedCount = allQuizzes.filter((q) => q.status === "completed").length;
  const overdueCount   = allQuizzes.filter((q) => q.status === "overdue").length;

  const visibleGroups = quizCourseGroups
    .filter((g) => courseFilter === "all" || g.code === courseFilter)
    .map((g) => {
      const sorted = [...g.quizzes].sort((a, b) => {
        if (sortBy === "newest") return new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime();
        if (sortBy === "oldest") return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
        if (sortBy === "status") return a.status.localeCompare(b.status);
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      });
      return { ...g, quizzes: sorted };
    });

  const courseLabel = quizCourseOptions.find((o) => o.value === courseFilter)?.label ?? "All Courses";
  const sortLabel   = sortOptions.find((o) => o.value === sortBy)?.label ?? "Due Date";

  return (
    <div className="p-6">
      {/* Page heading */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
          <span>Quizzes</span>
          <span>/</span>
          <span className="text-gray-600">View and manage your quizzes and exams</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Quizzes &amp; Exams</h1>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <button onClick={() => setFilter("all")} className="text-left bg-white rounded-2xl border border-gray-200 shadow-sm p-4 flex items-start gap-3 hover:shadow-md hover:border-blue-200 transition-all">
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0"><IconQuiz /></div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Total Quizzes</p>
            <p className="text-2xl font-extrabold text-gray-900 leading-none">{totalCount}</p>
            <p className="text-xs text-gray-400 mt-1">Across all courses</p>
          </div>
        </button>
        <button onClick={() => setFilter("upcoming")} className="text-left bg-orange-50 rounded-2xl border border-orange-100 shadow-sm p-4 flex items-start gap-3 hover:shadow-md hover:border-orange-300 transition-all">
          <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-500 shrink-0"><IconClock className="w-5 h-5" /></div>
          <div>
            <p className="text-[10px] font-bold text-orange-400 uppercase tracking-wider mb-0.5">Upcoming</p>
            <p className="text-2xl font-extrabold text-orange-600 leading-none">{upcomingCount}</p>
            <p className="text-xs text-orange-400 mt-1">Open or scheduled</p>
          </div>
        </button>
        <button onClick={() => setFilter("completed")} className="text-left bg-green-50 rounded-2xl border border-green-100 shadow-sm p-4 flex items-start gap-3 hover:shadow-md hover:border-green-300 transition-all">
          <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600 shrink-0"><IconCheckCircle className="w-5 h-5" /></div>
          <div>
            <p className="text-[10px] font-bold text-green-500 uppercase tracking-wider mb-0.5">Completed</p>
            <p className="text-2xl font-extrabold text-green-700 leading-none">{completedCount}</p>
            <p className="text-xs text-green-500 mt-1">Attempts finished</p>
          </div>
        </button>
        <button onClick={() => setFilter("overdue")} className="text-left bg-red-50 rounded-2xl border border-red-100 shadow-sm p-4 flex items-start gap-3 hover:shadow-md hover:border-red-300 transition-all">
          <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-red-500 shrink-0"><IconXCircle className="w-5 h-5" /></div>
          <div>
            <p className="text-[10px] font-bold text-red-400 uppercase tracking-wider mb-0.5">Overdue</p>
            <p className="text-2xl font-extrabold text-red-600 leading-none">{overdueCount}</p>
            <p className="text-xs text-red-400 mt-1">Missed quizzes</p>
          </div>
        </button>
      </div>

      {/* Main content */}
      <div className="space-y-4">
        {/* Filter + dropdown row */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 overflow-x-auto">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`relative px-4 py-3.5 text-sm font-medium whitespace-nowrap transition-colors ${filter === tab.id ? "text-blue-700" : "text-gray-500 hover:text-gray-800"}`}
                >
                  {tab.label}
                  {filter === tab.id && <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-t-full bg-blue-600" />}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 shrink-0 pl-4">
              {/* Course filter */}
              <div className="relative">
                <button
                  onClick={() => { setCourseOpen((o) => !o); setSortOpen(false); }}
                  className="flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg px-3 py-1.5 transition-colors"
                >
                  {courseFilter === "all" ? "All Courses" : courseFilter}
                  <IconChevronDown className="w-3.5 h-3.5 text-gray-400" />
                </button>
                {courseOpen && (
                  <div className="absolute right-0 top-full mt-1 z-30 bg-white border border-gray-200 rounded-xl shadow-lg py-1 min-w-[280px]">
                    {quizCourseOptions.map((opt) => (
                      <button key={opt.value} onClick={() => { setCourseFilter(opt.value); setCourseOpen(false); }}
                        className={`w-full text-left px-4 py-2.5 text-xs hover:bg-blue-50 transition-colors ${courseFilter === opt.value ? "text-blue-700 font-semibold" : "text-gray-700"}`}>
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {/* Sort */}
              <div className="relative">
                <button
                  onClick={() => { setSortOpen((o) => !o); setCourseOpen(false); }}
                  className="flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg px-3 py-1.5 transition-colors"
                >
                  Sort by: {sortLabel}
                  <IconChevronDown className="w-3.5 h-3.5 text-gray-400" />
                </button>
                {sortOpen && (
                  <div className="absolute right-0 top-full mt-1 z-30 bg-white border border-gray-200 rounded-xl shadow-lg py-1 min-w-[140px]">
                    {sortOptions.map((opt) => (
                      <button key={opt.value} onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                        className={`w-full text-left px-4 py-2.5 text-xs hover:bg-blue-50 transition-colors ${sortBy === opt.value ? "text-blue-700 font-semibold" : "text-gray-700"}`}>
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Course accordions */}
        {visibleGroups.map((g, i) => (
          <QuizAccordion key={g.code} group={g} filter={filter} defaultOpen={i === 0} />
        ))}
      </div>
    </div>
  );
}

// ── Learning Materials Icons ──────────────────────────────────────────────────
const IconFilePdf = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" />
    <line x1="9" y1="13" x2="15" y2="13" /><line x1="9" y1="17" x2="11" y2="17" />
  </svg>
);
const IconVideo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <rect x="2" y="6" width="14" height="12" rx="2" /><path d="M16 10l5.447-2.724A1 1 0 0123 8.276v7.448a1 1 0 01-1.553.832L16 14" />
  </svg>
);
const IconExternalLink = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);
const IconCode = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
  </svg>
);
const IconDownload = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);
const IconGlobe = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);
const IconPresentation = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);
const IconGithub = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.195 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
  </svg>
);
const IconPlay2 = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.15" /><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
  </svg>
);

// ── Learning Materials Page ────────────────────────────────────────────────────
type MaterialFilter = "all" | "courseMaterials" | "recordings" | "additionalResources" | "codeAndLab";

interface RecentMaterial {
  name: string;
  course: string;
  type: MaterialFilter;
  typeLabel: string;
  date: string;
  icon: React.ReactNode;
  iconBg: string;
  action: "Open" | "Watch" | "View";
  href?: string;
}

const recentMaterials: RecentMaterial[] = [
  { name: "ICT301 Project Charter Template", course: "ICT301", type: "courseMaterials", typeLabel: "Course Material", date: "Aug 28, 2026", icon: <IconFilePdf className="w-4 h-4" />, iconBg: "bg-red-50 text-red-500", action: "Open" },
  { name: "Week 8 — Lecture Recording (AI Ethics)", course: "ICT126", type: "recordings", typeLabel: "Class Recording", date: "Aug 27, 2026", icon: <IconVideo className="w-4 h-4" />, iconBg: "bg-blue-50 text-blue-500", action: "Watch" },
  { name: "Neural Networks — 3Blue1Brown", course: "ICT126", type: "additionalResources", typeLabel: "YouTube Tutorial", date: "Aug 26, 2026", icon: <IconGlobe className="w-4 h-4" />, iconBg: "bg-orange-50 text-orange-500", action: "View", href: "https://www.youtube.com/watch?v=aircAruvnKk" },
  { name: "ICT272 Week 7 Slides — React Hooks", course: "ICT272", type: "courseMaterials", typeLabel: "Presentation", date: "Aug 25, 2026", icon: <IconPresentation className="w-4 h-4" />, iconBg: "bg-indigo-50 text-indigo-500", action: "Open" },
  { name: "Lab 5 — Perceptron Starter Code", course: "ICT126", type: "codeAndLab", typeLabel: "Lab File", date: "Aug 23, 2026", icon: <IconCode className="w-4 h-4" />, iconBg: "bg-emerald-50 text-emerald-600", action: "Open" },
  { name: "ICT301 GitHub Repository — Project T226", course: "ICT301", type: "codeAndLab", typeLabel: "GitHub Repo", date: "Aug 22, 2026", icon: <IconGithub className="w-4 h-4" />, iconBg: "bg-gray-100 text-gray-600", action: "View", href: "https://github.com" },
  { name: "Week 7 — Zoom Recording (Web APIs)", course: "ICT272", type: "recordings", typeLabel: "Class Recording", date: "Aug 20, 2026", icon: <IconVideo className="w-4 h-4" />, iconBg: "bg-blue-50 text-blue-500", action: "Watch" },
  { name: "MDN Web Docs — JavaScript Reference", course: "ICT272", type: "additionalResources", typeLabel: "Documentation", date: "Aug 19, 2026", icon: <IconGlobe className="w-4 h-4" />, iconBg: "bg-orange-50 text-orange-500", action: "View", href: "https://developer.mozilla.org" },
];

const courseMaterials = [
  { name: "ICT301 Project Charter Template", type: "PDF", size: "340 KB", date: "Aug 28, 2026", course: "ICT301" },
  { name: "ICT301 Assessment 2 Brief", type: "PDF", size: "518 KB", date: "Aug 20, 2026", course: "ICT301" },
  { name: "ICT272 Week 7 Slides — React Hooks", type: "PowerPoint", size: "3.1 MB", date: "Aug 25, 2026", course: "ICT272" },
  { name: "ICT272 Handout — CSS Grid & Flexbox", type: "PDF", size: "210 KB", date: "Aug 18, 2026", course: "ICT272" },
  { name: "ICT126 Week 8 — AI Ethics Lecture Notes", type: "PDF", size: "425 KB", date: "Aug 27, 2026", course: "ICT126" },
  { name: "ICT126 Assessment 1 Rubric", type: "Document", size: "128 KB", date: "Aug 10, 2026", course: "ICT126" },
];

const classRecordings = [
  { title: "Week 8 — AI Ethics & Bias in Machine Learning", course: "ICT126", date: "Aug 27, 2026", duration: "1h 52m" },
  { title: "Week 7 — REST APIs & Async JavaScript", course: "ICT272", date: "Aug 20, 2026", duration: "1h 47m" },
  { title: "Week 7 — Project Scoping and Stakeholder Analysis", course: "ICT301", date: "Aug 19, 2026", duration: "1h 58m" },
  { title: "Week 6 — Neural Networks Fundamentals", course: "ICT126", date: "Aug 13, 2026", duration: "1h 44m" },
];

const additionalResources = [
  { title: "Neural Networks — 3Blue1Brown Series", source: "YouTube", url: "https://www.youtube.com/watch?v=aircAruvnKk", desc: "Visual explainer on how neural networks learn" },
  { title: "MDN Web Docs — JavaScript Reference", source: "Web Docs", url: "https://developer.mozilla.org", desc: "Comprehensive JS/HTML/CSS documentation" },
  { title: "freeCodeCamp — Responsive Web Design", source: "Course", url: "https://www.freecodecamp.org", desc: "Free interactive web design curriculum" },
  { title: "Kaggle — Intro to Machine Learning", source: "Course", url: "https://www.kaggle.com/learn", desc: "Hands-on ML notebooks and datasets" },
  { title: "Google AI Blog", source: "Article", url: "https://ai.googleblog.com", desc: "Latest research articles from Google AI" },
];

const codeAndLabResources = [
  { title: "ICT301 Project — GitHub Repository", desc: "Team project repository for T226 semester", tags: ["GitHub", "Python"], date: "Aug 22, 2026", url: "https://github.com" },
  { title: "Lab 5 — Perceptron Starter Code", desc: "Starter template for Lab 5 perceptron implementation", tags: ["Python", "Jupyter"], date: "Aug 23, 2026", url: "#" },
  { title: "Lab 4 — Linear Regression Notebook", desc: "Completed notebook with sklearn examples", tags: ["Python", "Notebook"], date: "Aug 16, 2026", url: "#" },
  { title: "ICT272 Portfolio Starter Template", desc: "HTML/CSS/JS template for your portfolio project", tags: ["HTML", "CSS", "JS"], date: "Aug 20, 2026", url: "#" },
];

const filterOptions: { id: MaterialFilter; label: string }[] = [
  { id: "all",               label: "All Courses" },
  { id: "courseMaterials",   label: "Course Materials" },
  { id: "recordings",        label: "Class Recordings" },
  { id: "additionalResources", label: "Additional Resources" },
  { id: "codeAndLab",        label: "Code & Lab Resources" },
];

const typeColors: Record<string, string> = {
  "Course Material":   "bg-red-50 text-red-600 border-red-100",
  "Presentation":      "bg-indigo-50 text-indigo-600 border-indigo-100",
  "Class Recording":   "bg-blue-50 text-blue-600 border-blue-100",
  "YouTube Tutorial":  "bg-orange-50 text-orange-600 border-orange-100",
  "Documentation":     "bg-orange-50 text-orange-600 border-orange-100",
  "Lab File":          "bg-emerald-50 text-emerald-700 border-emerald-100",
  "GitHub Repo":       "bg-gray-100 text-gray-600 border-gray-200",
  "Document":          "bg-red-50 text-red-600 border-red-100",
};

function LearningMaterialsPage() {
  const [activeFilter, setActiveFilter] = useState<MaterialFilter>("all");
  const [search, setSearch] = useState("");

  const filteredRecent = recentMaterials.filter((m) => {
    const matchFilter = activeFilter === "all" || m.type === activeFilter;
    const matchSearch = search === "" || m.name.toLowerCase().includes(search.toLowerCase()) || m.course.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  const showCourseMaterials  = activeFilter === "all" || activeFilter === "courseMaterials";
  const showRecordings       = activeFilter === "all" || activeFilter === "recordings";
  const showAdditional       = activeFilter === "all" || activeFilter === "additionalResources";
  const showCode             = activeFilter === "all" || activeFilter === "codeAndLab";

  const quickAccessLinks: { id: MaterialFilter; label: string; icon: React.ReactNode; color: string; bg: string }[] = [
    { id: "courseMaterials",    label: "Course Materials",    icon: <IconFilePdf className="w-4 h-4" />,    color: "text-blue-600",    bg: "bg-blue-50" },
    { id: "recordings",         label: "Class Recordings",    icon: <IconVideo className="w-4 h-4" />,      color: "text-indigo-600",  bg: "bg-indigo-50" },
    { id: "additionalResources",label: "Additional Resources",icon: <IconGlobe className="w-4 h-4" />,      color: "text-orange-600",  bg: "bg-orange-50" },
    { id: "codeAndLab",         label: "Code & Lab Resources",icon: <IconCode className="w-4 h-4" />,       color: "text-emerald-600", bg: "bg-emerald-50" },
  ];

  return (
    <div className="p-6">
      {/* Page heading */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
          <span>Learning Materials</span>
          <span>/</span>
          <span className="text-gray-600">Access course materials, class recordings, and additional learning resources.</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Learning Materials</h1>
      </div>

      {/* ── Summary stat cards ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Course Materials */}
        <button onClick={() => setActiveFilter("courseMaterials")} className="text-left bg-white rounded-2xl border border-gray-200 shadow-sm p-4 flex items-start gap-3 hover:shadow-md hover:border-blue-200 transition-all">
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
            <IconFilePdf className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Course Materials</p>
            <p className="text-2xl font-extrabold text-gray-900 leading-none">6</p>
            <p className="text-xs text-gray-400 mt-1">6 Available</p>
          </div>
        </button>

        {/* Class Recordings */}
        <button onClick={() => setActiveFilter("recordings")} className="text-left bg-indigo-50 rounded-2xl border border-indigo-100 shadow-sm p-4 flex items-start gap-3 hover:shadow-md hover:border-indigo-300 transition-all">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
            <IconVideo className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider mb-0.5">Class Recordings</p>
            <p className="text-2xl font-extrabold text-indigo-700 leading-none">4</p>
            <p className="text-xs text-indigo-400 mt-1">4 Available</p>
          </div>
        </button>

        {/* Additional Resources */}
        <button onClick={() => setActiveFilter("additionalResources")} className="text-left bg-orange-50 rounded-2xl border border-orange-100 shadow-sm p-4 flex items-start gap-3 hover:shadow-md hover:border-orange-300 transition-all">
          <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-500 shrink-0">
            <IconGlobe className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-orange-400 uppercase tracking-wider mb-0.5">Additional Resources</p>
            <p className="text-2xl font-extrabold text-orange-600 leading-none">5</p>
            <p className="text-xs text-orange-400 mt-1">2 New</p>
          </div>
        </button>

        {/* Code & Lab Resources */}
        <button onClick={() => setActiveFilter("codeAndLab")} className="text-left bg-emerald-50 rounded-2xl border border-emerald-100 shadow-sm p-4 flex items-start gap-3 hover:shadow-md hover:border-emerald-300 transition-all">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
            <IconCode className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider mb-0.5">Code &amp; Lab Resources</p>
            <p className="text-2xl font-extrabold text-emerald-700 leading-none">4</p>
            <p className="text-xs text-emerald-500 mt-1">1 New</p>
          </div>
        </button>
      </div>

      {/* ── Main content ── */}
      <div className="space-y-5">

          {/* Search + Filter */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
            <div className="px-4 pt-4 pb-3 border-b border-gray-100">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <IconSearch />
                </span>
                <input
                  type="text"
                  placeholder="Search materials..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                />
              </div>
            </div>
            <div className="flex items-center gap-1 px-4 overflow-x-auto">
              {filterOptions.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`relative px-4 py-3.5 text-sm font-medium whitespace-nowrap transition-colors ${
                    activeFilter === f.id ? "text-blue-700" : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  {f.label}
                  {activeFilter === f.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-t-full bg-blue-600" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Category cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* ── 1. Course Materials ── */}
        {showCourseMaterials && (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100" style={{ background: "#eff6ff" }}>
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0">
                <IconFilePdf className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Course Materials</p>
                <p className="text-xs text-gray-500">PDFs, slides, handouts &amp; documents</p>
              </div>
              <span className="ml-auto text-xs font-bold text-blue-700 bg-blue-100 px-2.5 py-1 rounded-full">{courseMaterials.length} files</span>
            </div>
            <div className="divide-y divide-gray-100">
              {courseMaterials.map((f, i) => (
                <div key={i} className="flex items-center justify-between px-5 py-3 hover:bg-gray-50 transition-colors group">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold ${f.type === "PDF" || f.type === "Document" ? "bg-red-50 text-red-600" : "bg-indigo-50 text-indigo-600"}`}>
                      {f.type === "PDF" ? "PDF" : f.type === "PowerPoint" ? "PPT" : "DOC"}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-800 truncate group-hover:text-blue-700 transition-colors">{f.name}</p>
                      <p className="text-xs text-gray-400">{f.course} · {f.size} · {f.date}</p>
                    </div>
                  </div>
                  <button className="ml-3 shrink-0 flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg border border-blue-100 transition-colors">
                    <IconDownload className="w-3.5 h-3.5" /> Open
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── 2. Additional Resources ── */}
        {showAdditional && (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100" style={{ background: "#fff7ed" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0" style={{ background: "#f97316" }}>
                <IconGlobe className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Additional Resources</p>
                <p className="text-xs text-gray-500">YouTube, articles, documentation &amp; websites</p>
              </div>
              <span className="ml-auto text-xs font-bold text-orange-700 bg-orange-100 px-2.5 py-1 rounded-full">{additionalResources.length} links</span>
            </div>
            <div className="divide-y divide-gray-100">
              {additionalResources.map((r, i) => (
                <div key={i} className="flex items-center justify-between px-5 py-3.5 hover:bg-gray-50 transition-colors group">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
                      <IconGlobe className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-800 truncate group-hover:text-blue-700 transition-colors">{r.title}</p>
                      <p className="text-xs text-gray-400">{r.source} · {r.desc}</p>
                    </div>
                  </div>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-3 shrink-0 flex items-center gap-1.5 text-xs font-semibold text-orange-700 bg-orange-50 hover:bg-orange-100 px-3 py-1.5 rounded-lg border border-orange-100 transition-colors"
                  >
                    <IconExternalLink className="w-3.5 h-3.5" /> View Resource
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── 3. Class Recordings ── */}
        {showRecordings && (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100" style={{ background: "#eff6ff" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0" style={{ background: "#2563eb" }}>
                <IconVideo className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Class Recordings</p>
                <p className="text-xs text-gray-500">Recorded lectures and Zoom sessions</p>
              </div>
              <span className="ml-auto text-xs font-bold text-blue-700 bg-blue-100 px-2.5 py-1 rounded-full">{classRecordings.length} videos</span>
            </div>
            <div className="divide-y divide-gray-100">
              {classRecordings.map((r, i) => (
                <div key={i} className="flex items-center justify-between px-5 py-3.5 hover:bg-gray-50 transition-colors group">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                      <IconPlay2 className="w-6 h-6" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-800 truncate group-hover:text-blue-700 transition-colors">{r.title}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs text-gray-400">{r.course}</span>
                        <span className="text-gray-300">·</span>
                        <span className="text-xs text-gray-400">{r.date}</span>
                        <span className="text-gray-300">·</span>
                        <span className="flex items-center gap-0.5 text-xs text-blue-600 font-medium">
                          <IconClock className="w-3 h-3" /> {r.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    className="ml-3 shrink-0 flex items-center gap-1.5 text-xs font-semibold text-white px-3 py-1.5 rounded-lg transition-colors hover:opacity-90"
                    style={{ background: "#2563eb" }}
                  >
                    <IconPlay className="w-3 h-3" /> Watch
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── 4. Code & Lab Resources ── */}
        {showCode && (
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100" style={{ background: "#ecfdf5" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0" style={{ background: "#059669" }}>
                <IconCode className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Code &amp; Lab Resources</p>
                <p className="text-xs text-gray-500">GitHub repos, lab files &amp; code examples</p>
              </div>
              <span className="ml-auto text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">{codeAndLabResources.length} items</span>
            </div>
            <div className="divide-y divide-gray-100">
              {codeAndLabResources.map((r, i) => (
                <div key={i} className="flex items-center justify-between px-5 py-3.5 hover:bg-gray-50 transition-colors group">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 shrink-0">
                      <IconGithub className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-800 truncate group-hover:text-blue-700 transition-colors">{r.title}</p>
                      <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
                        <span className="text-xs text-gray-400">{r.desc}</span>
                      </div>
                      <div className="flex items-center gap-1 mt-1 flex-wrap">
                        {r.tags.map((tag) => (
                          <span key={tag} className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-100">{tag}</span>
                        ))}
                        <span className="text-[10px] text-gray-400 ml-1">{r.date}</span>
                      </div>
                    </div>
                  </div>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-3 shrink-0 flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg border border-emerald-100 transition-colors"
                  >
                    <IconExternalLink className="w-3.5 h-3.5" /> Open
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
          </div>{/* end category cards grid */}

          {/* Recent Materials */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <p className="text-[10px] font-bold text-blue-700 uppercase tracking-widest">Recent Materials</p>
              <span className="text-xs text-gray-400">{filteredRecent.length} item{filteredRecent.length !== 1 ? "s" : ""}</span>
            </div>

            {filteredRecent.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-gray-400">
                <IconFolder />
                <p className="text-sm mt-2 font-medium">No materials match your search</p>
              </div>
            ) : (
              <>
                <div className="hidden md:grid px-5 py-2.5 bg-gray-50 border-b border-gray-100 gap-4"
                  style={{ gridTemplateColumns: "2fr 1fr 1fr 100px 80px" }}>
                  {["Resource Name", "Course", "Type", "Date Added", ""].map((h) => (
                    <p key={h} className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{h}</p>
                  ))}
                </div>
                <div className="divide-y divide-gray-100">
                  {filteredRecent.map((m, i) => (
                    <div
                      key={i}
                      className="flex flex-col md:grid items-center gap-3 md:gap-4 px-5 py-3.5 hover:bg-blue-50/30 transition-colors group"
                      style={{ gridTemplateColumns: "2fr 1fr 1fr 100px 80px" }}
                    >
                      <div className="flex items-center gap-3 min-w-0 w-full md:w-auto">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${m.iconBg}`}>
                          {m.icon}
                        </div>
                        <p className="text-sm font-semibold text-gray-800 truncate group-hover:text-blue-700 transition-colors">{m.name}</p>
                      </div>
                      <span className="hidden md:block text-sm text-gray-500 font-medium">{m.course}</span>
                      <span className={`hidden md:inline-flex text-xs font-semibold px-2.5 py-1 rounded-full border w-fit ${typeColors[m.typeLabel] || "bg-gray-100 text-gray-600 border-gray-200"}`}>
                        {m.typeLabel}
                      </span>
                      <span className="hidden md:block text-xs text-gray-400">{m.date}</span>
                      <div className="flex items-center gap-2 w-full md:w-auto">
                        <span className="md:hidden text-xs text-gray-400">{m.course} · {m.date}</span>
                        {m.href ? (
                          <a
                            href={m.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-auto md:ml-0 flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors text-blue-700 bg-blue-50 hover:bg-blue-100 border-blue-100"
                          >
                            <IconExternalLink className="w-3 h-3" /> {m.action}
                          </a>
                        ) : (
                          <button className="ml-auto md:ml-0 flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors text-blue-700 bg-blue-50 hover:bg-blue-100 border-blue-100">
                            {m.action === "Watch" ? <IconPlay className="w-3 h-3" /> : <IconDownload className="w-3 h-3" />}
                            {m.action}
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

        </div>{/* end main content */}
    </div>
  );
}

// ── My Courses Page ───────────────────────────────────────────────────────────
function MyCoursesPage({
  setOpenCourse,
  setActiveNav,
}: {
  setOpenCourse: (c: ActiveCourse) => void;
  setActiveNav: (id: string) => void;
}) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-5">My Courses</h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
        <button className="text-left h-full" onClick={() => setActiveNav("courses")}>
          <StatCard title="My Courses" icon={<IconBook />} bigNum="3" bigLabel="My Courses"
            rows={[{ color: "text-blue-600", label: "Active", value: 3 }, { color: "text-green-600", label: "Completed", value: 20 }]} />
        </button>
        <button className="text-left h-full" onClick={() => setActiveNav("assignments")}>
          <StatCard title="Assignments" icon={<IconAssignment />} bigNum="2" bigLabel="Assignments"
            rows={[{ color: "text-orange-500", label: "Due", value: 2 }, { color: "text-green-600", label: "Submitted", value: 0 }]} />
        </button>
        <button className="text-left h-full" onClick={() => setActiveNav("quizzes")}>
          <StatCard title="Quizzes" icon={<IconQuiz />} bigNum="1" bigLabel="Quizzes"
            rows={[{ color: "text-blue-600", label: "Upcoming", value: 1 }, { color: "text-green-600", label: "Finished", value: 2 }]} />
        </button>
        <button className="text-left h-full" onClick={() => setActiveNav("materials")}>
          <StatCard title="Learning Materials" icon={<IconFolder />} bigNum="12" bigLabel="Resources"
            rows={[{ color: "text-blue-600", label: "Resources", value: 12 }, { color: "text-gray-400", label: "New", value: 0 }]} />
        </button>
      </div>

      {/* Announcement */}
      <div className="mb-6"><AnnouncementBanner onClick={() => setActiveNav("announcements")} /></div>

      {/* Courses */}
      <div>
          <h2 className="text-base font-bold text-gray-800 mb-4">My Enrolled Courses (3/23)</h2>
          <div className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden" style={{ maxHeight: "70vh" }}>
            <div className="overflow-y-auto h-full" style={{ maxHeight: "70vh" }}>
              <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm px-4 py-2.5 border-b border-gray-200 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
                <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Active Courses (3)</span>
              </div>
              <div className="p-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 border-b border-gray-200">
                {activeCourses.map((c) => (
                  <ActiveCourseCard key={c.code} {...c} onOpen={() => setOpenCourse(c)} />
                ))}
              </div>
              <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm px-4 py-2.5 border-b border-gray-200 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Completed Courses (20)</span>
              </div>
              <div className="p-4 space-y-2">
                {completedCourses.map((c) => (
                  <CompletedCourseRow key={c.code} {...c} />
                ))}
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

// ── Mini Calendar ─────────────────────────────────────────────────────────────
const calendarDots: Record<number, ("assignment" | "quiz" | "report")[]> = {
  3: ["assignment"],
  8: ["quiz"],
  15: ["report"],
  22: ["assignment"],
  29: ["quiz"],
};

function MiniCalendar() {
  const [month] = useState(8); // September (0-indexed = 8)
  const year = 2026;
  const monthName = "September 2026";
  const firstDay = new Date(year, month, 1).getDay(); // 0=Sun
  // shift so Monday=0
  const startOffset = (firstDay + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = 30; // Aug 30 → highlight Sep 1 as "today" = next day, let's just mark 1

  const cells: (number | null)[] = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const dotColors = {
    assignment: "bg-orange-400",
    quiz: "bg-blue-500",
    report: "bg-pink-500",
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-bold text-gray-800">{monthName}</p>
        <div className="flex gap-1">
          <button className="p-1 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <button className="p-1 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 mb-1">
        {["M","T","W","T","F","S","S"].map((d, i) => (
          <p key={i} className="text-center text-[10px] font-bold text-gray-400 py-1">{d}</p>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-y-0.5">
        {cells.map((d, i) => {
          if (!d) return <div key={i} />;
          const dots = calendarDots[d] || [];
          const isToday = d === 1;
          return (
            <div key={i} className="flex flex-col items-center py-0.5">
              <span className={`w-7 h-7 flex items-center justify-center rounded-full text-xs font-semibold transition-colors cursor-pointer
                ${isToday ? "text-white" : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"}`}
                style={isToday ? { background: "#1a3a9e" } : {}}>
                {d}
              </span>
              {dots.length > 0 && (
                <div className="flex gap-0.5 mt-0.5">
                  {dots.map((type, j) => (
                    <span key={j} className={`w-1 h-1 rounded-full ${dotColors[type]}`} />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      {/* Legend */}
      <div className="flex items-center gap-3 mt-3 pt-3 border-t border-gray-100">
        <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-orange-400" /><span className="text-[10px] text-gray-500">Assignment</span></div>
        <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500" /><span className="text-[10px] text-gray-500">Quiz</span></div>
        <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-pink-500" /><span className="text-[10px] text-gray-500">Report</span></div>
      </div>
    </div>
  );
}

// ── Quick Access ──────────────────────────────────────────────────────────────
function QuickAccess() {
  // To enable Enrollment when it opens: set disabled: false and remove statusLabel
  const items = [
    {
      label: "Zoom Class",
      badge: 0,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.8" className="w-6 h-6">
          <path d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      bg: "#f5f3ff",
      disabled: false,
    },
    {
      label: "Digital Library",
      badge: 0,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="1.8" className="w-6 h-6">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      bg: "#ecfeff",
      disabled: false,
    },
    {
      label: "Student Services",
      badge: 0,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.8" className="w-6 h-6">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      ),
      bg: "#ecfdf5",
      disabled: false,
    },
    {
      label: "Enrollment",
      badge: 0,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.8" className="w-6 h-6">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /><path d="M9 12h6M9 16h4" />
        </svg>
      ),
      bg: "#f3f4f6",
      disabled: true,
      statusLabel: "Not Open",
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Campus Quick Access</p>
      <div className="grid grid-cols-4 gap-2">
        {items.map((item) => (
          <button
            key={item.label}
            disabled={item.disabled}
            className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-colors group relative ${
              item.disabled
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-50 cursor-pointer"
            }`}
          >
            <div className="relative">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow"
                style={{ background: item.bg }}
              >
                {item.icon}
              </div>
              {item.badge > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                  {item.badge}
                </span>
              )}
            </div>
            <span className={`text-[10px] font-semibold text-center leading-tight transition-colors ${item.disabled ? "text-gray-400" : "text-gray-600 group-hover:text-blue-700"}`}>
              {item.label}
            </span>
            {item.statusLabel && (
              <span className="text-[9px] font-medium text-gray-400 bg-gray-100 rounded-full px-1.5 py-0.5 leading-none -mt-1">
                {item.statusLabel}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

// ── Today's Schedule ──────────────────────────────────────────────────────────
const IconVideoCamera = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <path d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);
const IconMapPin = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);

function TodaySchedule() {
  const classes = [
    {
      time: "09:00 AM",
      end: "11:00 AM",
      code: "ICT301",
      name: "Information Technology Project 1",
      location: "Room 806 — Live Lecture",
      isLive: true,
      accentColor: "#2563eb",
      bg: "#eff6ff",
    },
    {
      time: "02:00 PM",
      end: "04:00 PM",
      code: "ICT126",
      name: "Artificial Intelligence",
      location: "Room 1004 — Lecture",
      isLive: false,
      accentColor: "#db2777",
      bg: "#fdf2f8",
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Today's Schedule</p>
          <p className="text-base font-bold text-gray-900">Live Class Schedule</p>
        </div>
        <span className="flex items-center gap-1.5 text-xs font-semibold text-green-700 bg-green-50 px-3 py-1.5 rounded-full border border-green-100">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          Friday, 29 Aug 2026
        </span>
      </div>

      <div className="space-y-3">
        {classes.map((cls, i) => (
          <div key={i} className="flex gap-3 items-stretch">
            {/* Time column */}
            <div className="flex flex-col items-end shrink-0 pt-1" style={{ minWidth: "70px" }}>
              <p className="text-xs font-bold text-gray-700">{cls.time}</p>
              <p className="text-[10px] text-gray-400">to {cls.end}</p>
              <div
                className="mt-2 w-2 h-2 rounded-full border-2 border-white ring-2 shrink-0"
                style={{ backgroundColor: cls.accentColor, boxShadow: `0 0 0 2px ${cls.accentColor}40` }}
              />
            </div>

            {/* Card */}
            <div
              className="flex-1 rounded-xl p-3.5 border flex items-center justify-between gap-3"
              style={{ background: cls.bg, borderColor: cls.accentColor + "30" }}
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-md text-white"
                    style={{ background: cls.accentColor }}
                  >
                    {cls.code}
                  </span>
                  {cls.isLive && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-md border border-red-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                      LIVE
                    </span>
                  )}
                </div>
                <p className="text-sm font-bold text-gray-900 leading-tight mb-1">{cls.name}</p>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <IconMapPin className="w-3 h-3 shrink-0 text-gray-400" />
                  <span>{cls.location}</span>
                </div>
              </div>

              {cls.isLive && (
                <button
                  className="shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white shadow-sm hover:opacity-90 active:scale-95 transition-all"
                  style={{ background: "#16a34a" }}
                >
                  <IconVideoCamera className="w-3.5 h-3.5" />
                  Join Live
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Dashboard Page ────────────────────────────────────────────────────────────
function DashboardPage({
  setActiveNav,
  setOpenCourse,
  userName,
}: {
  setActiveNav: (id: string) => void;
  setOpenCourse: (c: ActiveCourse) => void;
  userName: string;
}) {
  const firstName = userName.split(" ")[0];

  const quickNav = [
    { id: "courses",     label: "My Courses",        icon: <IconBook />,       note: "3 active this semester" },
    { id: "assignments", label: "Assignments",        icon: <IconAssignment />, note: "2 due soon" },
    { id: "quizzes",     label: "Quizzes",            icon: <IconQuiz />,       note: "1 upcoming" },
    { id: "materials",   label: "Learning Materials", icon: <IconFolder />,     note: "12 resources available" },
  ];

  const deadlines = [
    { name: "Assessment 2", course: "ICT301", fullCourse: "Information Technology Project 1", due: "Due 3 Sep 2026", urgent: true },
    { name: "Assessment 2", course: "ICT272", fullCourse: "Web Design and Development",       due: "Due 7 Aug 2026", urgent: true },
    { name: "Lab Report 1", course: "ICT126", fullCourse: "Artificial Intelligence",          due: "Due 15 Sep 2026", urgent: false },
  ];

  return (
    <div className="p-7">

      {/* ── Row 1: Welcome + semester info ── */}
      <div className="flex items-end justify-between mb-7">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Welcome to EduFlex, {firstName}!</h1>
          <p className="text-sm text-gray-500">Bachelor of Information Technology — Semester T226</p>
        </div>
        <p className="text-xs text-gray-400 pb-0.5">Monday, 7 September 2026</p>
      </div>

      {/* ── Row 2: Four nav cards, full width ── */}
      <div className="grid grid-cols-4 gap-5 mb-7">
        {quickNav.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveNav(item.id)}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all p-5 text-left group"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-blue-600 bg-blue-50 group-hover:bg-blue-100 transition-colors shrink-0">
                {item.icon}
              </div>
              <p className="text-sm font-semibold text-gray-800">{item.label}</p>
            </div>
            <p className="text-xs text-gray-400">{item.note}</p>
          </button>
        ))}
      </div>

      {/* ── Row 3: Announcements, full width ── */}
      <div className="mb-7">
        <AnnouncementBanner onClick={() => setActiveNav("announcements")} />
      </div>

      {/* ── Row 4: Enrolled courses, full width ── */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <div className="flex items-center justify-between mb-5">
          <button onClick={() => setActiveNav("courses")} className="text-base font-bold text-gray-800 hover:text-blue-700 transition-colors">Enrolled Courses</button>
          <button onClick={() => setActiveNav("courses")} className="text-xs font-medium text-blue-600 hover:underline">View All</button>
        </div>
        <div className="divide-y divide-gray-100">
          {activeCourses.map((c) => (
            <button
              key={c.code}
              onClick={() => { setOpenCourse(c); setActiveNav("courses"); }}
              className="w-full flex items-center gap-5 py-4 first:pt-0 last:pb-0 text-left hover:bg-blue-50/50 rounded-xl px-2 -mx-2 transition-colors"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: c.bgColor }}
              >
                {c.svgIcon(c.accentColor)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-3 mb-2">
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wide mr-2">{c.code}</span>
                    <span className="text-sm font-semibold text-gray-800">{c.title}</span>
                    <span className="text-xs text-gray-400 ml-2">{c.term}</span>
                  </div>
                  <span className="text-sm font-bold shrink-0" style={{ color: c.accentColor }}>{c.pct}%</span>
                </div>
                <ProgressBar pct={c.pct} color={c.accentColor} />
                <p className="text-xs text-gray-400 mt-1.5">{c.school}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Student portal ────────────────────────────────────────────────────────────
export function StudentDashboard({ onLogout = () => {} }: { onLogout?: () => void }) {
  const [activeNav, setActiveNav]         = useState("dashboard");
  const [collapsed, setCollapsed]         = useState(false);
  const [openCourse, setOpenCourse]       = useState<ActiveCourse | null>(null);

  const sessionUser = getSessionUser();
  const [userName, setUserName] = useState(sessionUser?.name ?? "Richard Maceda Vitug");
  const userRole    = "Student";
  const userInitials = getInitials(userName);

  const sidebarPx = collapsed ? "64px" : "224px";

  return (
    <div className="min-h-screen bg-gray-100" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <Sidebar
        active={activeNav}
        setActive={setActiveNav}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        onLogout={onLogout}
      />
      <Header sidebarW={sidebarPx} userName={userName} userRole={userRole} userInitials={userInitials} onMessages={() => setActiveNav("messages")} onNotifications={() => setActiveNav("announcements")} onProfile={() => setActiveNav("profile")} />

      <main
        className="pt-16 min-h-screen flex flex-col transition-all duration-300"
        style={{ marginLeft: sidebarPx }}
      >
        <div className="flex-1">
          {activeNav === "dashboard" && (
            <DashboardPage
              setActiveNav={setActiveNav}
              setOpenCourse={setOpenCourse}
              userName={userName}
            />
          )}
          {activeNav === "courses" && (
            <MyCoursesPage
              setOpenCourse={setOpenCourse}
              setActiveNav={setActiveNav}
            />
          )}
          {activeNav === "assignments" && <AssignmentsPage />}
          {activeNav === "quizzes" && <QuizzesPage />}
          {activeNav === "materials" && <LearningMaterialsPage />}
          {activeNav === "grades" && <GradesPage />}
          {activeNav === "calendar" && <CalendarPage />}
          {activeNav === "announcements" && <AnnouncementsPage />}
          {activeNav === "messages" && <MessagesPage />}
          {activeNav === "profile" && <ProfilePage userName={userName} onNameChange={setUserName} />}
          {activeNav === "settings" && <SettingsPage />}
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-gray-900 text-gray-300 px-8 py-4 flex flex-wrap items-center justify-between gap-3 text-xs">
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
      </main>

      {openCourse && <CourseDetailModal course={openCourse} onClose={() => setOpenCourse(null)} />}

    </div>
  );
}

// ── Legacy Vite Router (preserved for reference) ──────────────────────────────
// The routes are now implemented in the Next.js App Router under app/:
//   /           -> app/page.tsx
//   /login      -> app/login/page.tsx
//   /register   -> app/register/page.tsx
//   /student    -> app/student/page.tsx
//   /instructor -> app/instructor/page.tsx
//   /admin      -> app/admin/page.tsx
/*
const router = createBrowserRouter([
  { path: "/", Component: HomePage },
  { path: "/login", Component: LoginPage },
  { path: "/register", Component: RegisterPage },
  { path: "/student", Component: () => <StudentDashboard onLogout={() => { clearSession(); window.location.href = "/"; }} /> },
  { path: "/admin", Component: () => <AdminDashboard onLogout={() => { clearSession(); window.location.href = "/"; }} /> },
  { path: "/instructor", Component: () => <InstructorDashboard onLogout={() => { clearSession(); window.location.href = "/"; }} /> },
  { path: "*", Component: HomePage },
]);
*/

export default function App() {
  return <StudentDashboard />;
}
