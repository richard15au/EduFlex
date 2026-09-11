"use client";

import { useState, useEffect } from "react";
import AdminUserManagement from "./AdminUserManagement";
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
const IconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 shrink-0">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
  </svg>
);
const IconBook = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 shrink-0">
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
  </svg>
);
const IconEnrollment = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 shrink-0">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
  </svg>
);
const IconBarChart = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 shrink-0">
    <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
    <line x1="2" y1="20" x2="22" y2="20" />
  </svg>
);
const IconAnnouncement = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 shrink-0">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);
const IconMessage = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 shrink-0">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
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
const IconUserPlus = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="8.5" cy="7" r="4" />
    <line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" />
  </svg>
);
const IconCheckCircle = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);
const IconAlertCircle = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);
const IconClock = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const IconShield = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const IconTrendingUp = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
  </svg>
);
const IconXCircle = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
  </svg>
);
const IconCheck = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const IconServer = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>
);
const IconDatabase = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);
const IconWifi = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M5 12.55a11 11 0 0114.08 0" /><path d="M1.42 9a16 16 0 0121.16 0" />
    <path d="M8.53 16.11a6 6 0 016.95 0" /><line x1="12" y1="20" x2="12.01" y2="20" />
  </svg>
);
const IconCalendar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 shrink-0">
    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

// ── Nav Items ─────────────────────────────────────────────────────────────────
const adminNavItems = [
  { label: "Dashboard",         icon: <IconDashboard />,    id: "dashboard" },
  { label: "User Management",   icon: <IconUsers />,        id: "users" },
  { label: "Course Management", icon: <IconBook />,         id: "courses" },
  { label: "Enrollment",        icon: <IconEnrollment />,   id: "enrollment" },
  { label: "Reports & Analytics",icon: <IconBarChart />,    id: "reports" },
  { label: "Announcements",     icon: <IconAnnouncement />, id: "announcements" },
  { label: "Messages",          icon: <IconMessage />,      id: "messages" },
  { label: "Academic Calendar", icon: <IconCalendar />,     id: "calendar" },
  { label: "System Settings",   icon: <IconSettings />,     id: "settings" },
];

// ── Sidebar ───────────────────────────────────────────────────────────────────
function AdminSidebar({
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
      {/* Branding */}
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
              <p className="text-blue-200 text-[10px] mt-0.5 truncate">Administration Portal</p>
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
        {adminNavItems.map((item) => {
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

      {/* Expand button when collapsed */}
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
          <button onClick={onLogout} className="text-blue-100 hover:text-white hover:bg-white/10 transition-all p-2 rounded-lg" title="Logout">
            <IconLogout />
          </button>
        </div>
      )}
    </aside>
  );
}

// ── Header ────────────────────────────────────────────────────────────────────
function AdminHeader({ sidebarW, userName, userInitials }: { sidebarW: string; userName: string; userInitials: string }) {
  return (
    <header
      className="fixed top-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center px-6 gap-4 z-20 transition-all duration-300"
      style={{ left: sidebarW }}
    >
      <div className="flex-1 relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <IconSearch />
        </span>
        <input
          type="text"
          placeholder="Search users, courses, reports..."
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
            <p className="text-xs text-gray-500">Administrator</p>
          </div>
          <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0" style={{ background: "#7c3aed" }}>
            {userInitials}
          </div>
        </div>
      </div>
    </header>
  );
}

// ── Stat Card ─────────────────────────────────────────────────────────────────
function AdminStatCard({
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
function AdminDashboardHome({ userName, setActive }: { userName: string; setActive: (id: string) => void }) {
  const firstName = userName.split(" ")[0];
  const recentActivity = [
    { type: "enrollment",    user: "Maria Santos",   detail: "enrolled in ICT301 – IT Project 1",      time: "2 min ago",   color: "bg-blue-500" },
    { type: "user",          user: "James Reyes",    detail: "new student account created",             time: "14 min ago",  color: "bg-green-500" },
    { type: "course",        user: "Prof. Lim",      detail: "published ICT350 – Cybersecurity Basics", time: "38 min ago",  color: "bg-purple-500" },
    { type: "announcement",  user: "System",         detail: "Semester enrollment window opened",       time: "1 hr ago",    color: "bg-orange-400" },
    { type: "user",          user: "Anna Cruz",      detail: "instructor account approved",             time: "2 hrs ago",   color: "bg-green-500" },
    { type: "enrollment",    user: "Rico Dela Cruz", detail: "dropped ICT126 – Artificial Intelligence",time: "3 hrs ago",   color: "bg-red-400" },
    { type: "course",        user: "Admin",          detail: "ICT272 materials updated for T226",       time: "5 hrs ago",   color: "bg-purple-500" },
  ];

  const pendingApprovals = [
    { name: "Bea Tolentino",   role: "Instructor",  action: "Account Registration", submitted: "Sep 1, 2026" },
    { name: "Karl Navarro",    role: "Student",     action: "Late Enrollment – ICT301", submitted: "Sep 1, 2026" },
    { name: "Liza Mendoza",    role: "Instructor",  action: "Account Registration", submitted: "Aug 31, 2026" },
    { name: "Nico Aguilar",    role: "Student",     action: "Course Override – ICT272", submitted: "Aug 30, 2026" },
  ];

  const recentUsers = [
    { name: "Maria Santos",   id: "STU-20262001", role: "Student",    status: "Active",   joined: "Sep 1, 2026" },
    { name: "James Reyes",    id: "STU-20262002", role: "Student",    status: "Active",   joined: "Sep 1, 2026" },
    { name: "Anna Cruz",      id: "INS-20260034", role: "Instructor", status: "Active",   joined: "Aug 31, 2026" },
    { name: "Bea Tolentino",  id: "INS-20260035", role: "Instructor", status: "Pending",  joined: "Sep 1, 2026" },
    { name: "Carlos Bautista",id: "STU-20262003", role: "Student",    status: "Active",   joined: "Aug 30, 2026" },
  ];

  const courseEnrollment = [
    { code: "ICT301", title: "IT Project 1",              enrolled: 124, capacity: 150, pct: 83, color: "#2563eb" },
    { code: "ICT272", title: "Web Design & Development",  enrolled: 138, capacity: 150, pct: 92, color: "#16a34a" },
    { code: "ICT126", title: "Artificial Intelligence",   enrolled: 97,  capacity: 120, pct: 81, color: "#db2777" },
    { code: "ICT350", title: "Cybersecurity Basics",      enrolled: 41,  capacity: 100, pct: 41, color: "#7c3aed" },
  ];

  const systemHealth = [
    { label: "Application Server", status: "Operational", icon: <IconServer className="w-4 h-4" />, color: "text-green-600 bg-green-50" },
    { label: "Database",           status: "Operational", icon: <IconDatabase className="w-4 h-4" />, color: "text-green-600 bg-green-50" },
    { label: "LMS Platform",       status: "Degraded",    icon: <IconWifi className="w-4 h-4" />, color: "text-orange-500 bg-orange-50" },
    { label: "File Storage",       status: "Operational", icon: <IconShield className="w-4 h-4" />, color: "text-green-600 bg-green-50" },
  ];

  const quickActions = [
    { label: "Add New User",      icon: <IconUserPlus className="w-6 h-6" />, bg: "bg-blue-50", text: "text-blue-700" },
    { label: "Create Course",     icon: <IconBook />,     bg: "bg-purple-50", text: "text-purple-700" },
    { label: "Post Announcement", icon: <IconAnnouncement />, bg: "bg-orange-50", text: "text-orange-600" },
    { label: "Generate Report",   icon: <IconBarChart />, bg: "bg-green-50", text: "text-green-700" },
  ];

  return (
    <div className="p-6">
      {/* Breadcrumb + heading */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
          <span>Admin</span><span>/</span>
          <span className="text-gray-600">Dashboard Overview</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-sm text-gray-500 mt-0.5">Welcome back, {firstName}. Here's what's happening today.</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-sm">
            <IconClock className="w-4 h-4 text-gray-400" />
            <span>Sep 2, 2026 — Trimester 2, 2026</span>
          </div>
        </div>
      </div>

      {/* ── Announcement Banner ── */}
      <div
        className="rounded-2xl flex items-center gap-4 px-5 py-4 mb-6 overflow-hidden cursor-pointer"
        style={{ background: "#1a3a9e" }}
        onClick={() => setActive("announcements")}
        role="button"
      >
        <div className="shrink-0 w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center text-yellow-900">
          <IconAlertCircle className="w-5 h-5" />
        </div>
        <div className="flex-1 overflow-hidden">
          <p className="text-white font-semibold text-sm mb-0.5">Admin Notice</p>
          <div className="overflow-hidden">
            <p className="marquee-text text-blue-200 text-sm">
              Semester enrollment is now open — 47 new enrollment requests pending review. &nbsp;&nbsp; LMS platform experiencing intermittent slowness — IT team notified. &nbsp;&nbsp; 2 new instructor account requests awaiting approval.
            </p>
          </div>
        </div>
        <span className="shrink-0 text-blue-200">
          <IconChevronRight />
        </span>
      </div>

      {/* ── Stat Cards ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <AdminStatCard
          title="Total Students"
          value="1,284"
          subtitle="+23 this semester"
          icon={<IconUsers />}
          bg="bg-white border-gray-200"
          iconBg="bg-blue-50 text-blue-600"
          textColor="text-gray-800"
          onClick={() => setActive("users")}
        />
        <AdminStatCard
          title="Active Courses"
          value="38"
          subtitle="4 new this trimester"
          icon={<IconBook />}
          bg="bg-white border-gray-200"
          iconBg="bg-purple-50 text-purple-600"
          textColor="text-gray-800"
          onClick={() => setActive("courses")}
        />
        <AdminStatCard
          title="Instructors"
          value="62"
          subtitle="2 pending approval"
          icon={<IconShield />}
          bg="bg-white border-gray-200"
          iconBg="bg-green-50 text-green-600"
          textColor="text-gray-800"
          onClick={() => setActive("users")}
        />
        <AdminStatCard
          title="Pending Enrollments"
          value="47"
          subtitle="Requires review"
          icon={<IconEnrollment />}
          bg="bg-orange-50 border-orange-100"
          iconBg="bg-orange-100 text-orange-500"
          textColor="text-orange-700"
          onClick={() => setActive("enrollment")}
        />
      </div>

      {/* ── Main two-column layout ── */}
      <div className="space-y-5">

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4">
            <p className="text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-3">Quick Actions</p>
            <div className="grid grid-cols-4 gap-3">
              {quickActions.map((a) => (
                <button
                  key={a.label}
                  className={`flex flex-col items-center gap-2 py-4 rounded-xl border border-transparent hover:border-gray-200 hover:shadow-sm transition-all ${a.bg}`}
                >
                  <span className={a.text}>{a.icon}</span>
                  <span className={`text-xs font-semibold text-center leading-tight ${a.text}`}>{a.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Pending Approvals */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <p className="text-[10px] font-bold text-blue-700 uppercase tracking-widest">Pending Approvals</p>
              <button className="text-xs text-blue-600 hover:underline font-medium">View All &gt;</button>
            </div>
            {/* Table header */}
            <div className="grid px-5 py-2.5 bg-gray-50 border-b border-gray-100 gap-4"
              style={{ gridTemplateColumns: "2fr 1fr 2fr 1fr 100px" }}>
              {["Name", "Role", "Request", "Submitted", "Action"].map((h) => (
                <p key={h} className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{h}</p>
              ))}
            </div>
            {pendingApprovals.map((item, i) => (
              <div
                key={i}
                className="grid items-center px-5 py-3.5 border-b border-gray-100 last:border-0 hover:bg-blue-50/30 transition-colors gap-4"
                style={{ gridTemplateColumns: "2fr 1fr 2fr 1fr 100px" }}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-bold shrink-0">
                    {item.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <p className="text-sm font-semibold text-gray-800">{item.name}</p>
                </div>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full w-fit ${item.role === "Instructor" ? "bg-purple-50 text-purple-700" : "bg-blue-50 text-blue-700"}`}>
                  {item.role}
                </span>
                <p className="text-sm text-gray-600">{item.action}</p>
                <p className="text-xs text-gray-400">{item.submitted}</p>
                <div className="flex items-center gap-1.5">
                  <button className="w-7 h-7 rounded-lg bg-green-50 hover:bg-green-100 text-green-600 flex items-center justify-center transition-colors" title="Approve">
                    <IconCheck className="w-3.5 h-3.5" />
                  </button>
                  <button className="w-7 h-7 rounded-lg bg-red-50 hover:bg-red-100 text-red-500 flex items-center justify-center transition-colors" title="Reject">
                    <IconXCircle className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Recent User Registrations */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <p className="text-[10px] font-bold text-blue-700 uppercase tracking-widest">Recent User Registrations</p>
              <button className="text-xs text-blue-600 hover:underline font-medium">View All &gt;</button>
            </div>
            <div className="grid px-5 py-2.5 bg-gray-50 border-b border-gray-100 gap-4"
              style={{ gridTemplateColumns: "2fr 1.5fr 1fr 1fr 1fr" }}>
              {["Name", "User ID", "Role", "Status", "Joined"].map((h) => (
                <p key={h} className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{h}</p>
              ))}
            </div>
            {recentUsers.map((u, i) => (
              <div
                key={i}
                className="grid items-center px-5 py-3.5 border-b border-gray-100 last:border-0 hover:bg-blue-50/30 transition-colors gap-4"
                style={{ gridTemplateColumns: "2fr 1.5fr 1fr 1fr 1fr" }}
              >
                <div className="flex items-center gap-2.5">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 text-white ${u.role === "Instructor" ? "bg-purple-500" : "bg-blue-500"}`}>
                    {u.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <p className="text-sm font-semibold text-gray-800">{u.name}</p>
                </div>
                <p className="text-xs font-mono text-gray-500">{u.id}</p>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full w-fit ${u.role === "Instructor" ? "bg-purple-50 text-purple-700" : "bg-blue-50 text-blue-700"}`}>
                  {u.role}
                </span>
                <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full w-fit ${u.status === "Active" ? "bg-green-50 text-green-700" : "bg-yellow-50 text-yellow-700"}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${u.status === "Active" ? "bg-green-500" : "bg-yellow-400"}`} />
                  {u.status}
                </span>
                <p className="text-xs text-gray-400">{u.joined}</p>
              </div>
            ))}
          </div>

          {/* Course Enrollment Overview */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <p className="text-[10px] font-bold text-blue-700 uppercase tracking-widest">Course Enrollment Overview</p>
              <button className="text-xs text-blue-600 hover:underline font-medium">Manage Courses &gt;</button>
            </div>
            <div className="space-y-4">
              {courseEnrollment.map((c) => (
                <div key={c.code}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-bold text-gray-500">{c.code}</span>
                      <span className="text-sm font-semibold text-gray-800">{c.title}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="font-bold" style={{ color: c.color }}>{c.enrolled}</span>
                      <span>/ {c.capacity} enrolled</span>
                      <span className="font-semibold text-gray-700">{c.pct}%</span>
                    </div>
                  </div>
                  <ProgressBar pct={c.pct} color={c.color} />
                </div>
              ))}
            </div>
          </div>
      </div>
    </div>
  );
}

// ── Shared helpers ────────────────────────────────────────────────────────────
function PageHeader({
  breadcrumb, title, subtitle, action,
}: {
  breadcrumb: string; title: string; subtitle: string; action?: React.ReactNode;
}) {
  return (
    <div className="flex items-start justify-between mb-6">
      <div>
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
          <span>Admin</span><span>/</span>
          <span className="text-gray-600">{breadcrumb}</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

function FilterBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm px-4 py-3 mb-5 flex flex-wrap gap-3 items-center">
      {children}
    </div>
  );
}

function SearchInput({ placeholder }: { placeholder: string }) {
  return (
    <div className="relative flex-1 min-w-48">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><IconSearch /></span>
      <input type="text" placeholder={placeholder}
        className="w-full pl-9 pr-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition" />
    </div>
  );
}

function FilterSelect({ label, options }: { label: string; options: string[] }) {
  return (
    <select className="pl-3 pr-8 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 border-none cursor-pointer appearance-none">
      <option value="">{label}</option>
      {options.map((o) => <option key={o}>{o}</option>)}
    </select>
  );
}

type BadgeVariant = "blue" | "green" | "yellow" | "red" | "purple" | "gray";
function Badge({ label, variant = "blue" }: { label: string; variant?: BadgeVariant }) {
  const map: Record<BadgeVariant, string> = {
    blue:   "bg-blue-50 text-blue-700",
    green:  "bg-green-50 text-green-700",
    yellow: "bg-yellow-50 text-yellow-700",
    red:    "bg-red-50 text-red-600",
    purple: "bg-purple-50 text-purple-700",
    gray:   "bg-gray-100 text-gray-600",
  };
  return <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${map[variant]}`}>{label}</span>;
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className="text-left text-[10px] font-bold text-gray-400 uppercase tracking-wider py-2.5 px-4 bg-gray-50 first:rounded-tl-xl last:rounded-tr-xl">{children}</th>;
}
function Td({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <td className={`py-3.5 px-4 text-sm text-gray-700 border-b border-gray-100 ${className}`}>{children}</td>;
}

function ActionBtn({ label, variant = "default" }: { label: string; variant?: "default" | "danger" | "success" | "warn" }) {
  const map: Record<string, string> = {
    default: "bg-gray-100 text-gray-600 hover:bg-gray-200",
    danger:  "bg-red-50 text-red-600 hover:bg-red-100",
    success: "bg-green-50 text-green-700 hover:bg-green-100",
    warn:    "bg-yellow-50 text-yellow-700 hover:bg-yellow-100",
  };
  return <button className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${map[variant]}`}>{label}</button>;
}

// ── 1. Course Management ───────────────────────────────────────────────────────
function AdminCourseManagement() {
  const courses = [
    { code: "ICT301", name: "Information Technology Project 1", faculty: "School of ICT", instructor: "Prof. R. Lim", students: 124, semester: "T2 2026", status: "Active" as const },
    { code: "ICT272", name: "Web Design and Development",       faculty: "School of ICT", instructor: "Prof. A. Cruz", students: 138, semester: "T2 2026", status: "Active" as const },
    { code: "ICT126", name: "Artificial Intelligence",          faculty: "School of ICT", instructor: "Prof. M. Santos", students: 97,  semester: "T2 2026", status: "Active" as const },
    { code: "ICT350", name: "Cybersecurity Basics",             faculty: "School of ICT", instructor: "Prof. J. Reyes", students: 41,  semester: "T2 2026", status: "Draft" as const },
    { code: "ICT410", name: "Mobile Application Development",   faculty: "School of ICT", instructor: "Prof. B. Tolentino", students: 88,  semester: "T1 2026", status: "Active" as const },
    { code: "ICT220", name: "Data Structures & Algorithms",     faculty: "School of ICT", instructor: "Prof. K. Navarro", students: 112, semester: "T1 2026", status: "Archived" as const },
    { code: "ICT180", name: "Computer Networks",                faculty: "School of ICT", instructor: "Prof. L. Mendoza", students: 76,  semester: "T1 2026", status: "Archived" as const },
  ];

  const statusVariant: Record<string, BadgeVariant> = { Active: "green", Draft: "yellow", Archived: "gray" };

  return (
    <div className="p-6">
      <PageHeader
        breadcrumb="Course Management"
        title="Course Management"
        subtitle="Create, manage, and organize academic courses"
        action={
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-colors hover:opacity-90" style={{ background: "#1a3a9e" }}>
            <span className="text-base leading-none">+</span> Create Course
          </button>
        }
      />
      <FilterBar>
        <SearchInput placeholder="Search courses..." />
        <FilterSelect label="All Semesters" options={["T2 2026", "T1 2026", "T3 2025"]} />
        <FilterSelect label="Faculty/School" options={["School of ICT", "School of Business"]} />
        <FilterSelect label="Status" options={["Active", "Draft", "Archived"]} />
        <FilterSelect label="Instructor" options={["Prof. R. Lim", "Prof. A. Cruz", "Prof. M. Santos", "Prof. J. Reyes"]} />
      </FilterBar>
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full border-collapse">
          <thead><tr><Th>Course Code</Th><Th>Course Name</Th><Th>Faculty/School</Th><Th>Instructor</Th><Th>Students</Th><Th>Semester</Th><Th>Status</Th><Th>Actions</Th></tr></thead>
          <tbody>
            {courses.map((c) => (
              <tr key={c.code} className="hover:bg-blue-50/30 transition-colors">
                <Td><span className="font-mono font-bold text-blue-700 text-xs">{c.code}</span></Td>
                <Td><span className="font-semibold text-gray-800">{c.name}</span></Td>
                <Td className="text-gray-500">{c.faculty}</Td>
                <Td>{c.instructor}</Td>
                <Td><span className="font-semibold">{c.students}</span></Td>
                <Td className="text-gray-500">{c.semester}</Td>
                <Td><Badge label={c.status} variant={statusVariant[c.status]} /></Td>
                <Td>
                  <div className="flex items-center gap-1.5">
                    <ActionBtn label="View" />
                    <ActionBtn label="Edit" />
                    <button className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors">•••</button>
                  </div>
                </Td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between px-5 py-3.5 border-t border-gray-100">
          <p className="text-xs text-gray-400">Showing 7 of 38 courses</p>
          <div className="flex items-center gap-1.5">
            {["Previous", "1", "2", "3", "Next"].map((p) => (
              <button key={p} className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${p === "1" ? "text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                style={p === "1" ? { background: "#1a3a9e" } : {}}>
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── 2. Enrollment ──────────────────────────────────────────────────────────────
function EnrollStudentModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-md mx-4 p-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-base font-bold text-gray-900">Enroll Student</h2>
            <p className="text-xs text-gray-400 mt-0.5">Add a student to a course for a semester</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Select Student</label>
            <select className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition">
              <option value="">Choose a student...</option>
              <option>Maria Santos — STU-20262001</option>
              <option>James Reyes — STU-20262002</option>
              <option>Karl Navarro — STU-20262003</option>
              <option>Bea Tolentino — STU-20262004</option>
              <option>Nico Aguilar — STU-20262005</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Select Course</label>
            <select className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition">
              <option value="">Choose a course...</option>
              <option>ICT301 — Information Technology Project 1</option>
              <option>ICT272 — Web Design and Development</option>
              <option>ICT126 — Artificial Intelligence</option>
              <option>ICT350 — Cybersecurity Basics</option>
              <option>ICT410 — Mobile Application Development</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Select Semester</label>
            <select className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition">
              <option>Trimester 2, 2026</option>
              <option>Trimester 1, 2026</option>
              <option>Trimester 3, 2025</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5">Enrollment Status</label>
            <select className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition">
              <option>Enrolled</option>
              <option>Dropped</option>
            </select>
          </div>
        </div>
        <div className="flex gap-3 mt-6">
          <button onClick={onClose} className="flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
            Cancel
          </button>
          <button onClick={onClose} className="flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-colors hover:opacity-90" style={{ background: "#1a3a9e" }}>
            Enroll Student
          </button>
        </div>
      </div>
    </div>
  );
}

function AdminEnrollment() {
  const [showModal, setShowModal] = useState(false);

  const enrollments = [
    { name: "Maria Santos",    id: "STU-20262001", course: "Information Technology Project 1", code: "ICT301", semester: "T2 2026", date: "Sep 1, 2026",  status: "Enrolled" as const },
    { name: "James Reyes",     id: "STU-20262002", course: "Web Design and Development",       code: "ICT272", semester: "T2 2026", date: "Sep 1, 2026",  status: "Enrolled" as const },
    { name: "Karl Navarro",    id: "STU-20262003", course: "Information Technology Project 1", code: "ICT301", semester: "T2 2026", date: "Sep 1, 2026",  status: "Enrolled" as const },
    { name: "Bea Tolentino",   id: "STU-20262004", course: "Artificial Intelligence",          code: "ICT126", semester: "T2 2026", date: "Aug 31, 2026", status: "Dropped" as const },
    { name: "Nico Aguilar",    id: "STU-20262005", course: "Web Design and Development",       code: "ICT272", semester: "T2 2026", date: "Aug 30, 2026", status: "Enrolled" as const },
    { name: "Liza Mendoza",    id: "STU-20262006", course: "Cybersecurity Basics",             code: "ICT350", semester: "T2 2026", date: "Aug 30, 2026", status: "Enrolled" as const },
    { name: "Carlos Bautista", id: "STU-20262007", course: "Artificial Intelligence",          code: "ICT126", semester: "T2 2026", date: "Aug 29, 2026", status: "Enrolled" as const },
  ];

  const statusVariant: Record<string, BadgeVariant> = { Enrolled: "green", Dropped: "red" };

  return (
    <div className="p-6">
      {showModal && <EnrollStudentModal onClose={() => setShowModal(false)} />}
      <PageHeader
        breadcrumb="Enrollment"
        title="Enrollment"
        subtitle="Enroll students into courses and manage their course enrollment"
        action={
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-colors hover:opacity-90"
            style={{ background: "#1a3a9e" }}
          >
            <span className="text-base leading-none">+</span> Enroll Student
          </button>
        }
      />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Students",     value: "1,284", icon: <IconUsers />,       bg: "bg-blue-50 text-blue-600" },
          { label: "Active Enrollments", value: "1,241", icon: <IconCheckCircle />, bg: "bg-green-50 text-green-600" },
          { label: "Courses",            value: "38",    icon: <IconBook />,        bg: "bg-purple-50 text-purple-600" },
          { label: "Current Semester",   value: "T2 2026", icon: <IconCalendar />, bg: "bg-orange-50 text-orange-500" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${s.bg}`}>{s.icon}</div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">{s.label}</p>
              <p className="text-xl font-extrabold text-gray-900 leading-none">{s.value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100">
          <p className="text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-3">Student Enrollments</p>
          <div className="flex flex-wrap gap-3">
            <SearchInput placeholder="Search student..." />
            <FilterSelect label="Course" options={["ICT301", "ICT272", "ICT126", "ICT350", "ICT410"]} />
            <FilterSelect label="Semester" options={["T2 2026", "T1 2026", "T3 2025"]} />
          </div>
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <Th>Student</Th>
              <Th>Student ID</Th>
              <Th>Course</Th>
              <Th>Course Code</Th>
              <Th>Semester</Th>
              <Th>Enrollment Date</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {enrollments.map((r, i) => (
              <tr key={i} className="hover:bg-blue-50/30 transition-colors">
                <Td>
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold shrink-0">
                      {r.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </div>
                    <span className="font-semibold text-gray-800">{r.name}</span>
                  </div>
                </Td>
                <Td><span className="font-mono text-xs text-gray-500">{r.id}</span></Td>
                <Td className="text-gray-700">{r.course}</Td>
                <Td><span className="font-mono font-bold text-blue-700 text-xs">{r.code}</span></Td>
                <Td className="text-gray-500">{r.semester}</Td>
                <Td className="text-gray-500">{r.date}</Td>
                <Td><Badge label={r.status} variant={statusVariant[r.status]} /></Td>
                <Td>
                  <div className="flex items-center gap-1.5">
                    <ActionBtn label="View" />
                    <ActionBtn label="Edit" />
                    <ActionBtn label="Remove" variant="danger" />
                  </div>
                </Td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between px-5 py-3.5 border-t border-gray-100">
          <p className="text-xs text-gray-400">Showing 7 of 1,241 enrollments</p>
          <div className="flex items-center gap-1.5">
            {["Previous", "1", "2", "3", "Next"].map((p) => (
              <button key={p} className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${p === "1" ? "text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                style={p === "1" ? { background: "#1a3a9e" } : {}}>
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


// ── 3. Reports & Analytics ────────────────────────────────────────────────────
function SimpleLineChart() {
  const points = [30, 45, 40, 60, 55, 80, 75, 95, 88, 110, 102, 124];
  const max = Math.max(...points);
  const w = 600; const h = 120; const pad = 10;
  const xs = points.map((_, i) => pad + (i / (points.length - 1)) * (w - pad * 2));
  const ys = points.map((v) => h - pad - ((v / max) * (h - pad * 2)));
  const d = xs.map((x, i) => `${i === 0 ? "M" : "L"}${x},${ys[i]}`).join(" ");
  const fill = xs.map((x, i) => `${i === 0 ? "M" : "L"}${x},${ys[i]}`).join(" ") + ` L${xs[xs.length - 1]},${h} L${xs[0]},${h} Z`;
  const months = ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"];
  return (
    <svg viewBox={`0 0 ${w} ${h + 20}`} className="w-full h-32">
      <defs>
        <linearGradient id="lgLine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a3a9e" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#1a3a9e" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={fill} fill="url(#lgLine)" />
      <path d={d} fill="none" stroke="#1a3a9e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {xs.map((x, i) => (
        <text key={i} x={x} y={h + 16} textAnchor="middle" fontSize="10" fill="#9ca3af">{months[i]}</text>
      ))}
    </svg>
  );
}

function SimpleBarChart() {
  const bars = [
    { label: "ICT301", value: 82, color: "#2563eb" },
    { label: "ICT272", value: 91, color: "#16a34a" },
    { label: "ICT126", value: 74, color: "#db2777" },
    { label: "ICT350", value: 68, color: "#7c3aed" },
    { label: "ICT410", value: 79, color: "#ea580c" },
  ];
  return (
    <div className="flex items-end gap-4 h-32 px-2">
      {bars.map((b) => (
        <div key={b.label} className="flex-1 flex flex-col items-center gap-1.5">
          <span className="text-[10px] font-bold" style={{ color: b.color }}>{b.value}%</span>
          <div className="w-full rounded-t-md" style={{ background: b.color, height: `${(b.value / 100) * 96}px` }} />
          <span className="text-[10px] text-gray-500 font-semibold">{b.label}</span>
        </div>
      ))}
    </div>
  );
}

function AdminReports() {
  const systemStats = [
    { label: "Active Users",          value: "842", sub: "right now" },
    { label: "Assignments Submitted", value: "3,210", sub: "this semester" },
    { label: "Quiz Activity",         value: "1,876", sub: "attempts this month" },
    { label: "Course Activity",       value: "98%",  sub: "uptime" },
  ];

  return (
    <div className="p-6">
      <PageHeader
        breadcrumb="Reports & Analytics"
        title="Reports & Analytics"
        subtitle="Monitor academic activity and system performance"
        action={
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">Export Report</button>
            <button className="px-4 py-2 rounded-xl text-sm font-semibold text-white transition-colors hover:opacity-90" style={{ background: "#1a3a9e" }}>Generate Report</button>
          </div>
        }
      />
      <div className="flex justify-end mb-5">
        <FilterSelect label="Semester T2 2026" options={["T1 2026", "T3 2025"]} />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Students",           value: "1,284", icon: <IconUsers />,        bg: "bg-blue-50 text-blue-600" },
          { label: "Active Courses",            value: "38",    icon: <IconBook />,         bg: "bg-purple-50 text-purple-600" },
          { label: "Instructors",               value: "62",    icon: <IconShield className="w-5 h-5"/>, bg: "bg-green-50 text-green-600" },
          { label: "Avg Student Performance",   value: "81%",   icon: <IconTrendingUp />,   bg: "bg-orange-50 text-orange-500" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${s.bg}`}>{s.icon}</div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">{s.label}</p>
              <p className="text-2xl font-extrabold text-gray-900 leading-none">{s.value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
          <p className="text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-4">Enrollment Trends</p>
          <SimpleLineChart />
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
          <p className="text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-4">Student Performance by Course</p>
          <SimpleBarChart />
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 mb-5">
        <p className="text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-4">Course Enrollment</p>
        <div className="space-y-3">
          {[
            { code: "ICT272", title: "Web Design and Development",  enrolled: 138, capacity: 150, pct: 92, color: "#16a34a" },
            { code: "ICT301", title: "Information Technology Project 1", enrolled: 124, capacity: 150, pct: 83, color: "#2563eb" },
            { code: "ICT126", title: "Artificial Intelligence",     enrolled: 97,  capacity: 120, pct: 81, color: "#db2777" },
            { code: "ICT410", title: "Mobile Application Development", enrolled: 88, capacity: 120, pct: 73, color: "#ea580c" },
            { code: "ICT350", title: "Cybersecurity Basics",        enrolled: 41,  capacity: 100, pct: 41, color: "#7c3aed" },
          ].map((c) => (
            <div key={c.code}>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-500">{c.code}</span>
                  <span className="text-sm text-gray-700">{c.title}</span>
                </div>
                <span className="text-xs text-gray-500">{c.enrolled}/{c.capacity} — <span className="font-bold" style={{ color: c.color }}>{c.pct}%</span></span>
              </div>
              <ProgressBar pct={c.pct} color={c.color} />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
        <p className="text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-4">System Overview</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {systemStats.map((s) => (
            <div key={s.label} className="rounded-xl bg-gray-50 border border-gray-100 p-4">
              <p className="text-xs text-gray-500 mb-1">{s.label}</p>
              <p className="text-2xl font-extrabold text-gray-900">{s.value}</p>
              <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── 4. Announcements ──────────────────────────────────────────────────────────
const IconTrash = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14H6L5 6" /><path d="M10 11v6M14 11v6" /><path d="M9 6V4h6v2" />
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

function AdminAnnouncements() {
  const items = [
    { title: "Semester T226 Important Notice", desc: "All students and faculty are reminded of the key academic dates for Trimester 2, 2026 including enrollment deadlines.", date: "Sep 2, 2026",  author: "Admin Office",  audience: "All Users",    status: "Published" as const },
    { title: "System Maintenance Scheduled",   desc: "The LMS platform will undergo scheduled maintenance on September 10, 2026 from 11 PM to 2 AM.",                        date: "Sep 1, 2026",  author: "IT Department", audience: "All Users",    status: "Scheduled" as const },
    { title: "Assessment Submission Reminder", desc: "Reminder: Assessment 1 submissions close on September 15, 2026. Late submissions will not be accepted.",               date: "Aug 31, 2026", author: "Academic Office",audience: "Students",     status: "Published" as const },
    { title: "Enrollment Period Opens",         desc: "The enrollment period for Trimester 2, 2026 is now open. Students may enroll via the student portal.",                  date: "Aug 28, 2026", author: "Registrar",     audience: "Students",     status: "Published" as const },
    { title: "Faculty Training Workshop",       desc: "Mandatory training workshop for all instructors on the updated LMS features scheduled for September 5, 2026.",          date: "Aug 27, 2026", author: "Admin Office",  audience: "Instructors",  status: "Draft" as const },
  ];

  const statusVariant: Record<string, BadgeVariant> = { Published: "green", Draft: "yellow", Scheduled: "blue" };
  const audienceVariant: Record<string, BadgeVariant> = { "All Users": "purple", Students: "blue", Instructors: "orange" as BadgeVariant };

  return (
    <div className="p-6">
      <PageHeader
        breadcrumb="Announcements"
        title="Announcements"
        subtitle="Create and manage announcements across the institution"
        action={
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-colors hover:opacity-90" style={{ background: "#1a3a9e" }}>
            <span className="text-base leading-none">+</span> New Announcement
          </button>
        }
      />
      <FilterBar>
        <SearchInput placeholder="Search announcements..." />
        <FilterSelect label="Status" options={["Published", "Draft", "Scheduled"]} />
        <FilterSelect label="Audience" options={["All Users", "Students", "Instructors"]} />
        <FilterSelect label="Date" options={["This Week", "This Month", "This Semester"]} />
      </FilterBar>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#eef2ff" }}>
                <IconAnnouncement />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 mb-1.5">
                  <h3 className="text-sm font-bold text-gray-900">{item.title}</h3>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <Badge label={item.status} variant={statusVariant[item.status]} />
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-3 leading-relaxed">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span>{item.date}</span>
                    <span>By <span className="font-semibold text-gray-600">{item.author}</span></span>
                    <Badge label={item.audience} variant={audienceVariant[item.audience] ?? "gray"} />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-blue-50 text-gray-500 hover:text-blue-600 flex items-center justify-center transition-colors" title="View"><IconEye /></button>
                    <button className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-purple-50 text-gray-500 hover:text-purple-600 flex items-center justify-center transition-colors" title="Edit"><IconEdit /></button>
                    <button className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-red-50 text-gray-500 hover:text-red-500 flex items-center justify-center transition-colors" title="Delete"><IconTrash /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── 5. Messages ───────────────────────────────────────────────────────────────
const IconPaperclip = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
  </svg>
);
const IconSend = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

function AdminMessages() {
  const conversations = [
    { name: "Richard",       role: "Instructor", preview: "Could you approve the late enrollment for...", time: "10:32 AM", unread: 2, initials: "RI", color: "bg-blue-500" },
    { name: "Bea Tolentino", role: "Instructor", preview: "Thank you for approving my account.", time: "9:15 AM",  unread: 0, initials: "BT", color: "bg-purple-500" },
    { name: "Karl Navarro",  role: "Student",    preview: "When will the enrollment period close?",    time: "Yesterday", unread: 1, initials: "KN", color: "bg-green-500" },
    { name: "Student Support",role: "Support",   preview: "3 new support tickets this morning.",       time: "Yesterday", unread: 3, initials: "SS", color: "bg-orange-400" },
    { name: "IT Department", role: "Staff",      preview: "Maintenance completed ahead of schedule.",  time: "Mon",    unread: 0, initials: "IT", color: "bg-gray-500" },
  ];

  const messages = [
    { from: "Richard", text: "Good morning! Could you approve the late enrollment request for ICT301 from one of my students?", time: "10:28 AM", mine: false },
    { from: "Me",      text: "Good morning, Richard. I'll look into it now. What's the student's ID number?",                   time: "10:30 AM", mine: true },
    { from: "Richard", text: "It's STU-20262008 — Carla Ramos. She had a valid medical reason for missing the deadline.",       time: "10:31 AM", mine: false },
    { from: "Me",      text: "Got it. I'll review her file and get back to you within the hour.",                               time: "10:32 AM", mine: true },
  ];

  const [selected, setSelected] = useState(0);

  return (
    <div className="p-6">
      <PageHeader breadcrumb="Messages" title="Messages" subtitle="Communicate with students, instructors, and staff" />
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex" style={{ height: "calc(100vh - 220px)", minHeight: 480 }}>
        {/* Conversation list */}
        <div className="w-72 shrink-0 border-r border-gray-100 flex flex-col">
          <div className="p-4 border-b border-gray-100">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><IconSearch /></span>
              <input type="text" placeholder="Search messages..." className="w-full pl-9 pr-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition" />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {conversations.map((c, i) => (
              <button key={i} onClick={() => setSelected(i)}
                className={`w-full px-4 py-3.5 flex items-start gap-3 border-b border-gray-50 text-left transition-colors ${selected === i ? "bg-blue-50" : "hover:bg-gray-50"}`}>
                <div className={`w-9 h-9 rounded-full ${c.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>{c.initials}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-sm font-semibold text-gray-800 truncate">{c.name}</span>
                    <span className="text-xs text-gray-400 shrink-0 ml-1">{c.time}</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-0.5">{c.role}</p>
                  <p className="text-xs text-gray-400 truncate">{c.preview}</p>
                </div>
                {c.unread > 0 && (
                  <span className="w-5 h-5 rounded-full text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5" style={{ background: "#1a3a9e" }}>{c.unread}</span>
                )}
              </button>
            ))}
          </div>
        </div>
        {/* Conversation panel */}
        <div className="flex-1 flex flex-col">
          <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-3">
            <div className={`w-9 h-9 rounded-full ${conversations[selected].color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
              {conversations[selected].initials}
            </div>
            <div>
              <p className="text-sm font-bold text-gray-800">{conversations[selected].name}</p>
              <p className="text-xs text-gray-500">{conversations[selected].role}</p>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 bg-gray-50/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.mine ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-xs lg:max-w-md px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${m.mine ? "text-white rounded-br-sm" : "bg-white border border-gray-200 text-gray-800 rounded-bl-sm"}`}
                  style={m.mine ? { background: "#1a3a9e" } : {}}>
                  {m.text}
                  <p className={`text-[10px] mt-1 ${m.mine ? "text-blue-200" : "text-gray-400"}`}>{m.time}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="px-4 py-3 border-t border-gray-100 flex items-center gap-2">
            <button className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-500 flex items-center justify-center transition-colors shrink-0"><IconPaperclip /></button>
            <input type="text" placeholder="Type a message..." className="flex-1 px-4 py-2.5 bg-gray-100 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition" />
            <button className="w-9 h-9 rounded-xl flex items-center justify-center text-white shrink-0 transition-colors hover:opacity-90" style={{ background: "#1a3a9e" }}><IconSend /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── 6. Academic Calendar ──────────────────────────────────────────────────────
const IconChevronLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);
const IconPlus = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

function AdminCalendar() {
  const [year, setYear] = useState(2026);
  const [month, setMonth] = useState(8); // September = 8 (0-indexed)

  const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

  const events: Record<string, { label: string; color: string }[]> = {
    "2026-09-01": [{ label: "Semester Begins", color: "#1a3a9e" }],
    "2026-09-02": [{ label: "Enrollment Opens", color: "#16a34a" }],
    "2026-09-15": [{ label: "Assessment 1", color: "#ea580c" }],
    "2026-09-22": [{ label: "Assessment 2", color: "#ea580c" }],
    "2026-09-29": [{ label: "Mid-Semester Break", color: "#7c3aed" }],
    "2026-10-20": [{ label: "Final Exams", color: "#db2777" }],
    "2026-10-30": [{ label: "Semester Ends", color: "#1a3a9e" }],
  };

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = Array(firstDay).fill(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  const prev = () => { if (month === 0) { setMonth(11); setYear(y => y - 1); } else setMonth(m => m - 1); };
  const next = () => { if (month === 11) { setMonth(0); setYear(y => y + 1); } else setMonth(m => m + 1); };

  const upcomingEvents = [
    { date: "Sep 15", label: "Assessment 1", color: "#ea580c" },
    { date: "Sep 22", label: "Assessment 2", color: "#ea580c" },
    { date: "Sep 29", label: "Mid-Semester Break", color: "#7c3aed" },
    { date: "Oct 20", label: "Final Exams", color: "#db2777" },
    { date: "Oct 30", label: "Semester Ends", color: "#1a3a9e" },
  ];

  return (
    <div className="p-6">
      <PageHeader
        breadcrumb="Academic Calendar"
        title="Academic Calendar"
        subtitle="Manage important academic dates and events"
        action={
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-colors hover:opacity-90" style={{ background: "#1a3a9e" }}>
            <IconPlus /> Add Event
          </button>
        }
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <button onClick={prev} className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"><IconChevronLeft /></button>
              <h2 className="text-base font-bold text-gray-900">{monthNames[month]} {year}</h2>
              <button onClick={next} className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"><IconChevronRight /></button>
            </div>
            <button className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 transition-colors"
              onClick={() => { setYear(2026); setMonth(8); }}>Today</button>
          </div>
          <div className="grid grid-cols-7 mb-2">
            {dayNames.map((d) => <div key={d} className="text-center text-[10px] font-bold text-gray-400 uppercase py-2">{d}</div>)}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {cells.map((day, i) => {
              if (!day) return <div key={i} className="h-20" />;
              const key = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
              const dayEvents = events[key] ?? [];
              const isToday = year === 2026 && month === 8 && day === 8;
              return (
                <div key={i} className={`h-20 rounded-xl p-1.5 border transition-colors cursor-pointer hover:bg-blue-50/50 ${isToday ? "border-blue-400 bg-blue-50" : "border-gray-100"}`}>
                  <span className={`text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full ${isToday ? "text-white" : "text-gray-700"}`}
                    style={isToday ? { background: "#1a3a9e" } : {}}>
                    {day}
                  </span>
                  <div className="mt-1 space-y-0.5">
                    {dayEvents.map((e, ei) => (
                      <div key={ei} className="text-[9px] font-semibold truncate px-1 py-0.5 rounded text-white" style={{ background: e.color }}>
                        {e.label}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
          <p className="text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-4">Upcoming Events</p>
          <div className="space-y-3">
            {upcomingEvents.map((e, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 hover:bg-blue-50/50 transition-colors cursor-pointer">
                <div className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ background: e.color }} />
                <div>
                  <p className="text-sm font-semibold text-gray-800">{e.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{e.date}, 2026</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 pt-4 border-t border-gray-100">
            <p className="text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-3">Legend</p>
            <div className="space-y-2">
              {[
                { label: "Academic Dates", color: "#1a3a9e" },
                { label: "Enrollment",     color: "#16a34a" },
                { label: "Assessments",    color: "#ea580c" },
                { label: "Breaks",         color: "#7c3aed" },
                { label: "Exams",          color: "#db2777" },
              ].map((l) => (
                <div key={l.label} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm shrink-0" style={{ background: l.color }} />
                  <span className="text-xs text-gray-600">{l.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── 7. System Settings ────────────────────────────────────────────────────────
function Toggle({ defaultOn = false }: { defaultOn?: boolean }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <button onClick={() => setOn(!on)}
      className={`w-11 h-6 rounded-full transition-colors duration-200 relative shrink-0 ${on ? "" : "bg-gray-200"}`}
      style={on ? { background: "#1a3a9e" } : {}}>
      <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${on ? "translate-x-5" : "translate-x-0.5"}`} />
    </button>
  );
}

function SettingsSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 mb-5">
      <p className="text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-4">{title}</p>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function SettingsField({ label, type = "text", defaultValue = "" }: { label: string; type?: string; defaultValue?: string }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-600 mb-1.5">{label}</label>
      <input type={type} defaultValue={defaultValue}
        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition" />
    </div>
  );
}

function SettingsSelect({ label, options, defaultValue }: { label: string; options: string[]; defaultValue: string }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-600 mb-1.5">{label}</label>
      <select defaultValue={defaultValue}
        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}

function SettingsToggleRow({ label, sub, defaultOn }: { label: string; sub: string; defaultOn?: boolean }) {
  return (
    <div className="flex items-center justify-between py-1">
      <div>
        <p className="text-sm font-semibold text-gray-800">{label}</p>
        <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
      </div>
      <Toggle defaultOn={defaultOn} />
    </div>
  );
}

function AdminSystemSettings() {
  return (
    <div className="p-6">
      <PageHeader breadcrumb="System Settings" title="System Settings" subtitle="Manage system configuration and administrator preferences" />
      <div>
        <SettingsSection title="General Settings">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SettingsField label="Institution Name" defaultValue="EduFlex University" />
            <SettingsField label="Institution Email" type="email" defaultValue="admin@eduflex.edu" />
            <SettingsField label="Contact Number" defaultValue="+63 2 8888 0000" />
            <SettingsSelect label="Time Zone" options={["Asia/Manila (UTC+8)", "UTC", "America/New_York"]} defaultValue="Asia/Manila (UTC+8)" />
            <SettingsField label="Academic Year" defaultValue="2026" />
          </div>
        </SettingsSection>

        <SettingsSection title="Academic Settings">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SettingsSelect label="Current Semester" options={["Trimester 2, 2026", "Trimester 1, 2026", "Trimester 3, 2025"]} defaultValue="Trimester 2, 2026" />
            <SettingsField label="Semester Start Date" type="date" defaultValue="2026-09-01" />
            <SettingsField label="Semester End Date" type="date" defaultValue="2026-11-30" />
            <SettingsField label="Enrollment Period" defaultValue="Sep 1 – Sep 14, 2026" />
          </div>
        </SettingsSection>

        <SettingsSection title="Notifications">
          <SettingsToggleRow label="Email Notifications" sub="Send system emails to administrators" defaultOn={true} />
          <div className="border-t border-gray-100" />
          <SettingsToggleRow label="Student Notifications" sub="Notify students of announcements and updates" defaultOn={true} />
          <div className="border-t border-gray-100" />
          <SettingsToggleRow label="Instructor Notifications" sub="Notify instructors of course and assessment changes" defaultOn={true} />
          <div className="border-t border-gray-100" />
          <SettingsToggleRow label="System Alerts" sub="Receive critical system health and maintenance alerts" defaultOn={false} />
        </SettingsSection>

        <SettingsSection title="Security">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SettingsSelect label="Password Policy" options={["Strong (8+ chars, mixed)", "Moderate (6+ chars)", "Basic"]} defaultValue="Strong (8+ chars, mixed)" />
            <SettingsSelect label="Session Timeout" options={["30 minutes", "1 hour", "4 hours", "8 hours"]} defaultValue="1 hour" />
          </div>
          <SettingsToggleRow label="Two-Factor Authentication" sub="Require 2FA for administrator accounts" defaultOn={false} />
          <div className="border-t border-gray-100" />
          <SettingsToggleRow label="Login Security" sub="Lock accounts after 5 failed login attempts" defaultOn={true} />
        </SettingsSection>

        <SettingsSection title="System Preferences">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SettingsSelect label="Language" options={["English (US)", "Filipino"]} defaultValue="English (US)" />
            <SettingsSelect label="Date Format" options={["MMM D, YYYY", "DD/MM/YYYY", "MM/DD/YYYY", "YYYY-MM-DD"]} defaultValue="MMM D, YYYY" />
            <SettingsSelect label="Theme" options={["Light", "Dark", "System"]} defaultValue="Light" />
          </div>
        </SettingsSection>

        <div className="flex justify-end">
          <button className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-colors hover:opacity-90 shadow-sm" style={{ background: "#1a3a9e" }}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Root Component ────────────────────────────────────────────────────────────
export default function AdminDashboard({ onLogout = () => {} }: { onLogout?: () => void }) {
  const [active, setActive] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);

  const [userName, setUserName] = useState("Rojit Munankarmi");

  useEffect(() => {
    const sessionUser = getSessionUser();
    if (sessionUser?.name) {
      setUserName(sessionUser.name);
    }
  }, []);

  const userInitials = getInitials(userName);

  const sidebarW = collapsed ? "4rem" : "14rem";

  const renderPage = () => {
    switch (active) {
      case "dashboard":     return <AdminDashboardHome userName={userName} setActive={setActive} />;
      case "users":         return <AdminUserManagement />;
      case "courses":       return <AdminCourseManagement />;
      case "enrollment":    return <AdminEnrollment />;
      case "reports":       return <AdminReports />;
      case "announcements": return <AdminAnnouncements />;
      case "messages":      return <AdminMessages />;
      case "calendar":      return <AdminCalendar />;
      case "settings":      return <AdminSystemSettings />;
      default:              return <AdminDashboardHome userName={userName} setActive={setActive} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar
        active={active}
        setActive={setActive}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        onLogout={onLogout}
      />
      <AdminHeader sidebarW={sidebarW} userName={userName} userInitials={userInitials} />
      <main
        className="pt-16 min-h-screen transition-all duration-300"
        style={{ marginLeft: sidebarW }}
      >
        {renderPage()}
      </main>
    </div>
  );
}
