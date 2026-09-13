"use client";

import { useState, useRef, useEffect, useMemo } from "react";
// Preserved from Vite router setup for reference:
// import { createBrowserRouter, RouterProvider } from "react-router";
// import AdminDashboard from "./AdminDashboard";
// import InstructorDashboard from "./InstructorDashboard";
// import { HomePage, LoginPage, RegisterPage } from "./PublicPages";
import { getSessionUser, clearSession, getInitials } from "./auth";
import {
  getSharedCourses,
  getSharedSubmissions,
  addStudentSubmission,
  InstructorCourseAssignments,
  InstructorAssignmentItem,
  StudentSubmission,
} from "./assignmentData";
import {
  GradesPage,
  CalendarPage,
  AnnouncementsPage,
  MessagesPage,
  ProfilePage,
  SettingsPage,
  gradeRows,
  calEvents,
  announcements,
  conversations,
} from "./StudentPages";

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
const IconChevronLeft = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
    <polyline points="15 18 9 12 15 6" />
  </svg>
);
const IconChevronRight = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
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
const IconCheck = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
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

// ── Types ─────────────────────────────────────────────────────────────────────
type ActiveCourse = {
  code: string; title: string; term: string; school: string;
  pct: number; bgColor: string; accentColor: string;
  instructor?: string;
  svgIcon: (color: string) => React.ReactNode;
  status?: "Active" | "Completed";
  year?: string;
  grade?: string;
  finalScore?: string;
  completionDate?: string;
};

interface StudentSearchItem {
  id: string;
  category: "Course" | "Assignment" | "Quiz" | "Learning Material" | "Grade" | "Calendar" | "Announcement" | "Message" | "Profile & Settings" | "Page";
  title: string;
  subtitle?: string;
  description: string;
  badgeBg: string;
  badgeText: string;
  nav: string;
  navLabel: string;
  course?: ActiveCourse;
  keywords?: string[];
}

// ── Header ────────────────────────────────────────────────────────────────────
function Header({
  sidebarW,
  userName,
  userRole,
  userInitials,
  onCalendar,
  onMessages,
  onNotifications,
  onProfile,
  searchQuery,
  setSearchQuery,
  onSearch,
  searchResults,
  onNavigateResult,
}: {
  sidebarW: string;
  userName: string;
  userRole: string;
  userInitials: string;
  onCalendar?: () => void;
  onMessages?: () => void;
  onNotifications?: () => void;
  onProfile?: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onSearch: (q: string) => void;
  searchResults: StudentSearchItem[];
  onNavigateResult: (nav: string, course?: ActiveCourse) => void;
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const performSearch = () => {
    const q = searchQuery.trim();
    if (!q) return;
    onSearch(q);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header
      className="fixed top-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 gap-4 z-20 transition-all duration-300"
      style={{ left: sidebarW }}
    >
      {/* Search — left/center */}
      <div ref={containerRef} className="flex-1 relative max-w-2xl min-w-[240px]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            performSearch();
          }}
          className="relative w-full"
        >
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            <IconSearch />
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (!dropdownOpen && e.target.value.trim().length > 0) {
                setDropdownOpen(true);
              }
            }}
            onFocus={() => {
              if (searchQuery.trim().length > 0) {
                setDropdownOpen(true);
              }
            }}
            placeholder="Search courses, assignments, quizzes, materials, grades..."
            className="w-full pl-9 pr-24 py-2 bg-gray-100 rounded-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
          />
          <button
            type="submit"
            className="absolute right-1.5 top-1/2 -translate-y-1/2 px-4 py-1 bg-[#1a3a9e] hover:bg-[#102d80] text-white text-xs font-bold rounded-full transition-colors shadow-sm cursor-pointer"
          >
            Search
          </button>
        </form>

        {/* Dropdown preview */}
        {dropdownOpen && searchQuery.trim().length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-50 max-h-[70vh] flex flex-col">
            <div className="px-4 py-3 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-gray-800">
                  Search Results for "{searchQuery}"
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                  {searchResults.length} found
                </span>
              </div>
              <button
                type="button"
                onClick={() => setDropdownOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-xs px-2 py-0.5 rounded hover:bg-gray-200 transition cursor-pointer"
              >
                Close (Esc)
              </button>
            </div>

            {searchResults.length === 0 ? (
              <div className="p-6 text-center">
                <p className="text-sm font-semibold text-gray-700">No results found</p>
                <p className="text-xs text-gray-400 mt-1">
                  Press Enter or click "Search" to view the full search page.
                </p>
              </div>
            ) : (
              <div className="overflow-y-auto divide-y divide-gray-100 max-h-[50vh]">
                {searchResults.slice(0, 8).map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setDropdownOpen(false);
                      onNavigateResult(item.nav, item.course);
                    }}
                    className="w-full px-4 py-3 text-left hover:bg-blue-50/50 transition-colors flex items-start gap-3 group cursor-pointer"
                  >
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md shrink-0 mt-0.5 uppercase tracking-wider ${item.badgeBg} ${item.badgeText}`}>
                      {item.category}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-700 transition-colors truncate">
                          {item.title}
                        </p>
                        <span className="text-[11px] font-semibold text-blue-600 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                          {item.navLabel} →
                        </span>
                      </div>
                      {item.subtitle && (
                        <p className="text-xs font-medium text-gray-500 truncate mt-0.5">
                          {item.subtitle}
                        </p>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            )}

            <div className="px-4 py-2.5 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs">
              <span className="text-gray-500">Press Enter for all results</span>
              <button
                type="button"
                onClick={performSearch}
                className="font-bold text-blue-700 hover:text-blue-900 transition-colors cursor-pointer"
              >
                View all results page →
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Right icons & profile — fixed on the far right */}
      <div className="flex items-center gap-3 shrink-0 ml-auto">
        <button
          type="button"
          onClick={onCalendar}
          title="Calendar"
          aria-label="Calendar"
          className="relative text-gray-500 hover:text-blue-700 transition-colors p-1.5 rounded-full hover:bg-gray-100 cursor-pointer"
        >
          <IconCalendar />
        </button>
        <button
          type="button"
          onClick={onNotifications}
          title="Announcements"
          aria-label="Announcements"
          className="relative text-gray-500 hover:text-blue-700 transition-colors p-1.5 rounded-full hover:bg-gray-100 cursor-pointer"
        >
          <IconAnnouncement />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white" />
        </button>
        <button
          type="button"
          onClick={onMessages}
          title="Messages"
          aria-label="Messages"
          className="relative text-gray-500 hover:text-blue-700 transition-colors p-1.5 rounded-full hover:bg-gray-100 cursor-pointer"
        >
          <IconMail />
        </button>
        <button onClick={onProfile} className="flex items-center gap-2 pl-3 border-l border-gray-200 hover:opacity-80 transition-opacity cursor-pointer shrink-0">
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-800 leading-tight whitespace-nowrap">{userName}</p>
            <p className="text-xs text-gray-500 whitespace-nowrap">{userRole}</p>
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
function CompletedCourseRow({
  course,
  onOpen,
}: {
  course: ActiveCourse;
  onOpen: () => void;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
      className="flex items-center justify-between bg-white rounded-xl px-4 py-3 border border-gray-100 shadow-sm hover:shadow-md hover:border-green-200 transition-all cursor-pointer group"
    >
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center text-green-600 shrink-0 group-hover:bg-green-100 transition-colors">
          <IconCheck />
        </div>
        <div className="min-w-0">
          <p className="text-xs text-gray-400 font-medium">{course.code} · {course.year ?? "2025"}</p>
          <p className="text-sm font-semibold text-gray-800 truncate group-hover:text-blue-700 transition-colors">{course.title}</p>
        </div>
      </div>
      <div className="flex items-center gap-2.5 shrink-0 ml-3">
        <span className="text-[10px] font-bold text-green-700 bg-green-50 px-2.5 py-0.5 rounded-full border border-green-200">
          Completed
        </span>
        <span className="text-xs text-gray-400 font-medium">{course.term}</span>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpen();
          }}
          className="text-xs font-semibold text-blue-700 bg-gray-50 group-hover:bg-blue-50 border border-gray-200 group-hover:border-blue-200 px-2.5 py-1 rounded-lg transition-colors ml-1 hidden sm:inline-block"
        >
          View Details
        </button>
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


function CourseDetailModal({
  course,
  onClose,
  onGoToCourse,
}: {
  course: ActiveCourse;
  onClose: () => void;
  onGoToCourse?: (course: ActiveCourse) => void;
}) {
  const isCompleted = course.status === "Completed" || course.pct === 100;

  return (
    <PanelModal title={`${course.code} — ${course.title}`} onClose={onClose}>
      <div className="flex items-center justify-between gap-2 mb-1">
        <p className="text-sm text-gray-500">
          {course.school} · {course.term} {course.year ? `(${course.year})` : ""}
        </p>
        <span
          className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
            isCompleted
              ? "bg-green-50 text-green-700 border-green-200"
              : "bg-blue-50 text-blue-700 border-blue-200"
          }`}
        >
          {isCompleted ? "Completed" : "Active & Enrolled"}
        </span>
      </div>
      {course.instructor && (
        <p className="text-xs text-gray-600 mb-4 font-medium">
          Instructor: <span className="font-semibold text-gray-800">{course.instructor}</span>
        </p>
      )}
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1.5">
          <span className="text-gray-600 font-medium">{isCompleted ? "Course Completion" : "Progress"}</span>
          <span className="font-bold" style={{ color: course.accentColor }}>{course.pct}%</span>
        </div>
        <ProgressBar pct={course.pct} color={course.accentColor} />
      </div>
      <div className="grid grid-cols-2 gap-3 mb-4">
        {isCompleted ? (
          [
            { label: "Status",          val: "Completed" },
            { label: "Final Grade",     val: course.grade ?? "High Distinction (HD)" },
            { label: "Final Score",     val: course.finalScore ?? "88%" },
            { label: "Academic Record", val: "Archived & Verified" },
          ].map((s) => (
            <div key={s.label} className="bg-gray-50 rounded-xl p-3">
              <p className="text-xs text-gray-500">{s.label}</p>
              <p className="text-sm font-semibold text-gray-800">{s.val}</p>
            </div>
          ))
        ) : (
          [
            { label: "Assignments", val: "2 pending" },
            { label: "Quizzes",     val: "1 upcoming" },
            { label: "Materials",   val: "12 resources" },
            { label: "Grade",       val: "In progress" },
          ].map((s) => (
            <div key={s.label} className="bg-gray-50 rounded-xl p-3">
              <p className="text-xs text-gray-500">{s.label}</p>
              <p className="text-sm font-semibold text-gray-800">{s.val}</p>
            </div>
          ))
        )}
      </div>
      <button
        onClick={() => {
          onClose();
          onGoToCourse?.(course);
        }}
        className="w-full py-2 rounded-xl text-sm font-semibold text-white hover:opacity-95 transition-opacity"
        style={{ background: isCompleted ? "#16a34a" : "#1a3a9e" }}
      >
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
    instructor: "Dr. Sarah Mitchell",
    status: "Active",
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
    instructor: "Prof. David Chen",
    status: "Active",
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
    instructor: "Dr. Elena Rostova",
    status: "Active",
    svgIcon: (c) => (
      <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" className="w-7 h-7">
        <path d="M12 2a4 4 0 014 4v1h1a3 3 0 013 3v2a3 3 0 01-3 3h-1v1a4 4 0 01-8 0v-1H7a3 3 0 01-3-3v-2a3 3 0 013-3h1V6a4 4 0 014-4z" /><circle cx="9" cy="10" r="1" fill={c} stroke="none" /><circle cx="15" cy="10" r="1" fill={c} stroke="none" /><path d="M9 15s1 1.5 3 1.5 3-1.5 3-1.5" />
      </svg>
    ),
  },
];

const completedCourses: ActiveCourse[] = [
  {
    code: "ICT101",
    title: "Introduction to Programming (Python)",
    term: "T125",
    year: "2025",
    school: "School of Information Technology",
    instructor: "Dr. Alan Turing",
    pct: 100,
    status: "Completed",
    grade: "High Distinction (HD)",
    finalScore: "88%",
    completionDate: "December 12, 2025",
    bgColor: "#f0fdf4",
    accentColor: "#16a34a",
    svgIcon: (c) => (
      <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" className="w-7 h-7">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    code: "ICT102",
    title: "Discrete Mathematics for IT",
    term: "T225",
    year: "2025",
    school: "School of Information Technology",
    instructor: "Prof. Ada Lovelace",
    pct: 100,
    status: "Completed",
    grade: "Distinction (D)",
    finalScore: "81%",
    completionDate: "November 28, 2025",
    bgColor: "#f0fdf4",
    accentColor: "#16a34a",
    svgIcon: (c) => (
      <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" className="w-7 h-7">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
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
  score?: string;
  submissionDate?: string;
  feedback?: string;
  type?: "Assignment" | "Assessment";
  maxScore?: number;
  weight?: number;
}

interface CourseGroup {
  code: string;
  title: string;
  term: string;
  iconColor: string;
  assignments: Assignment[];
  assessments?: Assignment[];
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
        name: "Interactive Web Prototype",
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
  {
    code: "ICT126",
    title: "Artificial Intelligence",
    term: "T226",
    iconColor: "#db2777",
    assignments: [
      {
        id: "a5",
        name: "Lab Report 1: Perceptrons",
        description: "Implement a single-layer perceptron model and evaluate classification metrics.",
        dueDate: "Sep 15, 2026",
        status: "dueSoon",
      },
      {
        id: "a6",
        name: "Mid-Semester Test",
        description: "Comprehensive assessment covering state-space search and supervised learning.",
        dueDate: "Oct 04, 2026",
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

function AssignmentRow({
  a,
  course,
  onSelect,
}: {
  a: Assignment;
  course: CourseGroup;
  onSelect: (a: Assignment, course: CourseGroup) => void;
}) {
  return (
    <div
      onClick={() => onSelect(a, course)}
      className="grid items-center gap-4 px-5 py-3.5 border-b border-gray-100 last:border-0 hover:bg-blue-50/40 transition-colors group cursor-pointer"
      style={{ gridTemplateColumns: "1.2fr 2fr 130px 110px 32px" }}
      title={`Click to view details for ${a.name}`}
    >
      <div>
        <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-700 transition-colors flex items-center gap-2">
          {a.name}
        </p>
      </div>
      <div>
        <p className="text-xs text-gray-500 leading-relaxed line-clamp-1">{a.description}</p>
      </div>
      <div className="flex items-center gap-1.5 text-xs text-gray-500">
        <IconClock className="w-3.5 h-3.5 text-gray-400 shrink-0" />
        <span>{a.dueDate}</span>
      </div>
      <div>
        <StatusBadge status={a.status} />
      </div>
      <div className="flex justify-end text-gray-300 group-hover:text-blue-600 transition-colors">
        <IconChevronRight className="w-4 h-4" />
      </div>
    </div>
  );
}

function AssessmentRow({
  a,
  course,
  onSelect,
}: {
  a: Assignment;
  course: CourseGroup;
  onSelect: (a: Assignment, course: CourseGroup) => void;
}) {
  return (
    <div
      onClick={() => onSelect(a, course)}
      className="grid items-center gap-4 px-5 py-3.5 border-b border-gray-100 last:border-0 hover:bg-purple-50/40 transition-colors group cursor-pointer"
      style={{ gridTemplateColumns: "1.2fr 2fr 130px 110px 32px" }}
      title={`Click to view details for ${a.name}`}
    >
      <div>
        <div className="flex items-center gap-2 flex-wrap">
          <p className="text-sm font-semibold text-gray-800 group-hover:text-purple-700 transition-colors">
            {a.name}
          </p>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 shrink-0">
            Weight: {a.weight ?? 25}%
          </span>
        </div>
      </div>
      <div>
        <p className="text-xs text-gray-500 leading-relaxed line-clamp-1">{a.description}</p>
      </div>
      <div className="flex items-center gap-1.5 text-xs text-gray-500">
        <IconClock className="w-3.5 h-3.5 text-gray-400 shrink-0" />
        <span>{a.dueDate}</span>
      </div>
      <div>
        <StatusBadge status={a.status} />
      </div>
      <div className="flex justify-end text-gray-300 group-hover:text-purple-600 transition-colors">
        <IconChevronRight className="w-4 h-4" />
      </div>
    </div>
  );
}

function CourseAccordion({
  group,
  defaultOpen = false,
  filter,
  onSelectAssignment,
}: {
  group: CourseGroup;
  defaultOpen?: boolean;
  filter: AssignmentFilter;
  onSelectAssignment: (a: Assignment, course: CourseGroup) => void;
}) {
  const [open, setOpen] = useState(defaultOpen);

  const assignments = group.assignments || [];
  const assessments = group.assessments || [];

  const visibleAssignments = filter === "all"
    ? assignments
    : assignments.filter((a) => a.status === filter);

  const visibleAssessments = filter === "all"
    ? assessments
    : assessments.filter((a) => a.status === filter);

  const totalVisible = visibleAssignments.length + visibleAssessments.length;
  if (filter !== "all" && totalVisible === 0) return null;

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
            {group.code} – {group.title} {group.term ? `(${group.term})` : ""}
          </p>
          <p className="text-xs text-gray-500 mt-0.5">
            {assignments.length} assignment{assignments.length !== 1 ? "s" : ""} · {assessments.length} assessment{assessments.length !== 1 ? "s" : ""}
          </p>
        </div>
        <div className={`text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          <IconChevronDown />
        </div>
      </button>

      {open && (
        <div className="border-t border-gray-100">
          {/* ── ASSIGNMENTS SECTION ── */}
          <div className="px-5 py-2.5 bg-gray-50/75 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-600">Assignments</span>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gray-200 text-gray-700">
                {visibleAssignments.length}
              </span>
            </div>
            <span className="text-[11px] text-gray-400">Regular coursework &amp; lab exercises</span>
          </div>

          {visibleAssignments.length === 0 ? (
            <div className="px-5 py-4 text-center text-xs text-gray-400">
              {filter === "all" ? "No regular assignments in this course." : "No assignments match the selected filter."}
            </div>
          ) : (
            <div>
              {/* Table header */}
              <div
                className="grid px-5 py-2 bg-gray-50/50 border-b border-gray-100 gap-4"
                style={{ gridTemplateColumns: "1.2fr 2fr 130px 110px 32px" }}
              >
                {["Assignment", "Description", "Due Date", "Status", ""].map((h, idx) => (
                  <p key={idx} className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{h}</p>
                ))}
              </div>
              {visibleAssignments.map((a) => (
                <AssignmentRow key={a.id} a={a} course={group} onSelect={onSelectAssignment} />
              ))}
            </div>
          )}

          {/* ── ASSESSMENTS SECTION ── */}
          <div className="px-5 py-2.5 bg-purple-50/70 border-t border-b border-purple-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-900">Assessments</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-800">
                {visibleAssessments.length}
              </span>
              <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                Weighted
              </span>
            </div>
            <span className="text-[11px] text-purple-700 font-medium">Major coursework, milestones &amp; summative tasks</span>
          </div>

          {visibleAssessments.length === 0 ? (
            <div className="px-5 py-4 text-center text-xs text-gray-400">
              {filter === "all" ? "No assessments published yet for this course." : "No assessments match the selected filter."}
            </div>
          ) : (
            <div>
              {/* Table header */}
              <div
                className="grid px-5 py-2 bg-purple-50/30 border-b border-purple-100 gap-4"
                style={{ gridTemplateColumns: "1.2fr 2fr 130px 110px 32px" }}
              >
                {["Assessment", "Description", "Due Date", "Status", ""].map((h, idx) => (
                  <p key={idx} className="text-[10px] font-bold text-purple-700 uppercase tracking-wider">{h}</p>
                ))}
              </div>
              {visibleAssessments.map((a) => (
                <AssessmentRow key={a.id} a={a} course={group} onSelect={onSelectAssignment} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function buildStudentCourseGroups(
  instructorCourses: InstructorCourseAssignments[],
  submissions: StudentSubmission[],
  studentEmail: string = "2003988@eduflex.edu"
): CourseGroup[] {
  return instructorCourses.map((c) => {
    const courseSubmissions = submissions.filter((s) => s.courseCode === c.code);

    const mapItem = (item: InstructorAssignmentItem, itemType: "Assignment" | "Assessment"): Assignment => {
      const sub = courseSubmissions.find(
        (s) =>
          (s.itemId === item.id || s.itemTitle.toLowerCase() === item.title.toLowerCase()) &&
          (!studentEmail || s.studentEmail === studentEmail)
      );

      let status: AStatus = "notStarted";
      if (sub) {
        status = "submitted";
      } else {
        const dueTime = new Date(item.due).getTime();
        const now = Date.now();
        if (!isNaN(dueTime)) {
          const diffDays = (dueTime - now) / (1000 * 60 * 60 * 24);
          if (diffDays < 0) {
            status = "overdue";
          } else if (diffDays <= 14) {
            status = "dueSoon";
          }
        }
      }

      return {
        id: item.id || `${itemType.toLowerCase()}-${item.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}`,
        name: item.title,
        description:
          item.description ||
          (itemType === "Assessment"
            ? "Major assessment milestone and project deliverable."
            : "Coursework and lab deliverable."),
        dueDate: item.due,
        status,
        score: sub?.score !== undefined ? `${sub.score}` : undefined,
        submissionDate: sub?.submittedAt,
        feedback: sub?.feedback,
        type: itemType,
        maxScore: item.maxScore ?? 100,
        weight: item.weight ?? (itemType === "Assessment" ? 25 : undefined),
      };
    };

    const publishedAssignments = (c.assignments || [])
      .filter((a) => a.status !== "Draft")
      .map((a) => mapItem(a, "Assignment"));

    const publishedAssessments = (c.assessments || [])
      .filter((ass) => ass.status === "Published" || !ass.status)
      .map((ass) => mapItem(ass, "Assessment"));

    return {
      code: c.code,
      title: c.name,
      term: c.term || "T226",
      iconColor: c.color,
      assignments: publishedAssignments,
      assessments: publishedAssessments,
    };
  });
}


// ── Reusable Assignment Details View Icons & Data ──────────────────────────────
const IconFileArchive = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <polyline points="21 8 21 21 3 21 3 8" /><rect x="1" y="3" width="22" height="5" />
    <line x1="10" y1="12" x2="14" y2="12" />
  </svg>
);

const IconCloudUpload = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <path d="M16 16l-4-4-4 4" /><path d="M12 12v9" />
    <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
  </svg>
);

const IconFileTextDoc = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
  </svg>
);

const IconDownloadBtn = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

interface AssignmentDetailMeta {
  weight: string;
  totalMarks: number;
  gradeInfo?: {
    status: string;
    score?: string;
    grade?: string;
    feedback?: string;
    submissionDate?: string;
    receipt?: string;
  };
  instructions: {
    overview: string;
    tasks: { title: string; desc: string }[];
  };
  submissionRequirements: {
    acceptedFormats: string[];
    maxSize: string;
    namingConvention: string;
    policies: string[];
  };
  rubric: {
    criterion: string;
    maxPts: number;
    desc: string;
  }[];
  resources: {
    name: string;
    size: string;
    type: string;
    desc: string;
  }[];
}

const assignmentCustomData: Record<string, AssignmentDetailMeta> = {
  // First working example requested by user
  a2: {
    weight: "30% of total unit mark",
    totalMarks: 100,
    gradeInfo: {
      status: "Pending Submission",
      feedback: "Official marks and evaluator feedback will be published here once grading is finalized.",
    },
    instructions: {
      overview:
        "In this assessment, you will design and develop an Interactive Web Prototype demonstrating modern client-side JavaScript, structured DOM manipulation, asynchronous state management, and accessible frontend components. The prototype should allow users to interact seamlessly with dynamic data, filter catalog items, and manipulate interface states without reloading the browser.",
      tasks: [
        {
          title: "1. Semantic Structure & Responsive Layout",
          desc: "Construct a multi-section user interface utilizing HTML5 semantic elements (<header>, <nav>, <main>, <section>, <footer>) styled with modern CSS Grid and Flexbox that transitions gracefully across mobile (375px), tablet (768px), and desktop (1280px+) viewports.",
        },
        {
          title: "2. Dynamic DOM Manipulation & Event Handling",
          desc: "Implement modular JavaScript event listeners ('click', 'input', 'change', 'keydown') to trigger real-time DOM mutations, interactive tabs, expandable drawers, and accessible modal overlays without third-party frameworks.",
        },
        {
          title: "3. Client-Side Data Rendering & Filter Logic",
          desc: "Load and manipulate structured JSON datasets client-side. Provide instant search and multi-category filtering with debounced input handling that updates the interface without full page reloads.",
        },
        {
          title: "4. Form Validation & User Feedback",
          desc: "Implement client-side input validation with descriptive visual feedback states, error prevention, and live status messaging adhering to WCAG 2.1 AA accessibility guidelines.",
        },
        {
          title: "5. Code Modularization & Technical Documentation",
          desc: "Organize JavaScript source files into clean modules (e.g. app.js, ui.js, state.js). Include inline JSDoc comments and a comprehensive README.md file explaining architecture, instructions to test, and browser compatibility notes.",
        },
      ],
    },
    submissionRequirements: {
      acceptedFormats: [
        ".ZIP (Compressed archive containing index.html, styles/, scripts/, and assets/)",
        ".PDF (Accompanying technical report & design rationale)",
      ],
      maxSize: "50 MB",
      namingConvention: "ICT272_A2_StudentID_LastName.zip",
      policies: [
        "Academic Integrity Declaration: All HTML, CSS, and JavaScript source code must be authored by the student. Any third-party starter templates, icons, or snippets must be explicitly cited in README.md.",
        "Late Submissions: 5% per calendar day penalty applies up to a maximum of 5 days. Submissions submitted after 5 days cannot be marked without approved academic consideration.",
        "Browser Compatibility: Code must execute without console errors on modern releases of Google Chrome, Firefox, and Safari.",
      ],
    },
    rubric: [
      {
        criterion: "DOM Manipulation & Event Interactivity",
        maxPts: 35,
        desc: "Robust event listener implementation, seamless DOM mutation, clean state transitions, and bug-free runtime execution.",
      },
      {
        criterion: "Responsive UI / UX & Visual Polish",
        maxPts: 25,
        desc: "Modern aesthetic hierarchy, consistent typography and spacing, and fluid adaptation across breakpoints.",
      },
      {
        criterion: "Code Architecture & Best Practices",
        maxPts: 20,
        desc: "Modular JavaScript separation of concerns, descriptive identifiers, optimal execution, and meaningful comments.",
      },
      {
        criterion: "Accessibility & Documentation",
        maxPts: 20,
        desc: "WCAG 2.1 AA compliance, keyboard focus navigation, semantic HTML, ARIA attributes, and an informative README guide.",
      },
    ],
    resources: [
      {
        name: "ICT272_Assignment2_Specification_Brief.pdf",
        size: "1.4 MB",
        type: "PDF Document",
        desc: "Official assessment brief, technical specifications, and step-by-step deliverable checklist.",
      },
      {
        name: "interactive_web_prototype_starter_code.zip",
        size: "3.8 MB",
        type: "ZIP Archive",
        desc: "Boilerplate project template with starter layout, sample JSON data fixtures, and icon assets.",
      },
      {
        name: "ICT272_Assessment2_Marking_Rubric.pdf",
        size: "420 KB",
        type: "PDF Document",
        desc: "Detailed marking criteria matrix, performance descriptors, and score band standards.",
      },
    ],
  },
  a1: {
    weight: "20% of total unit mark",
    totalMarks: 100,
    gradeInfo: {
      status: "Graded & Released",
      score: "94 / 100",
      grade: "High Distinction (HD)",
      submissionDate: "May 28, 2026 at 4:15 PM AEST",
      receipt: "#EDF-2026-8192",
      feedback:
        "Outstanding work! Semantic HTML tags are used impeccably. Fluid flexbox design adapts perfectly from 320px up to 4K displays. Great documentation in the README.",
    },
    instructions: {
      overview:
        "Design and construct a multi-page responsive website utilizing HTML5 semantics, CSS3 Flexbox, CSS Grid layouts, and responsive media query techniques.",
      tasks: [
        {
          title: "1. Layout Architecture",
          desc: "Implement a fluid multi-breakpoint grid system with standard header, navigation bar, hero container, and footer.",
        },
        {
          title: "2. Visual Hierarchy & CSS Best Practices",
          desc: "Use modern CSS custom properties (variables) for consistent color theming, spacing, and typography scales.",
        },
        {
          title: "3. Accessibility Audit",
          desc: "Attain a Lighthouse accessibility score above 95 with correct alt text, color contrast ratios, and landmark regions.",
        },
      ],
    },
    submissionRequirements: {
      acceptedFormats: [".ZIP", ".PDF"],
      maxSize: "50 MB",
      namingConvention: "ICT272_A1_StudentID_LastName.zip",
      policies: [
        "Work must adhere to standard university academic integrity requirements.",
      ],
    },
    rubric: [
      { criterion: "Responsive Design & Flexbox", maxPts: 40, desc: "Flawless layout behavior across all screen resolutions." },
      { criterion: "Semantic HTML & CSS Structure", maxPts: 30, desc: "Clean, valid HTML5 markup and organized stylesheets." },
      { criterion: "Visual Polish & Accessibility", maxPts: 30, desc: "Typography, color contrast, and WCAG 2.1 compliance." },
    ],
    resources: [
      { name: "RICT272_Assignment1_Project_Brief.pdf", size: "1.1 MB", type: "PDF Document", desc: "Project brief and submission instructions." },
      { name: "RICT272_Assignment1_Rubric.pdf", size: "310 KB", type: "PDF Document", desc: "Grading matrix." },
    ],
  },
};

function getAssignmentDetails(a: Assignment, course: CourseGroup): AssignmentDetailMeta {
  const isAssessment = a.type === "Assessment";
  const baseCustom = assignmentCustomData[a.id];

  const weightStr = a.weight ? `${a.weight}% of unit mark` : isAssessment ? "30% of unit mark" : "20% of unit mark";
  const maxPts = a.maxScore ?? (baseCustom?.totalMarks ?? 100);

  const isSubmitted = a.status === "submitted";
  const gradeInfo = isSubmitted
    ? {
        status: a.score || a.feedback ? "Graded & Released" : (baseCustom?.gradeInfo?.status ?? "Submitted & Under Review"),
        score: a.score ? `${a.score} / ${maxPts}` : (baseCustom?.gradeInfo?.score),
        grade:
          a.score && Number(a.score) >= 85
            ? "High Distinction (HD)"
            : a.score && Number(a.score) >= 75
            ? "Distinction (D)"
            : a.score && Number(a.score) >= 65
            ? "Credit (C)"
            : (baseCustom?.gradeInfo?.grade),
        feedback: a.feedback ?? baseCustom?.gradeInfo?.feedback ?? "Submission received on time. Marker evaluation currently in progress.",
        submissionDate: a.submissionDate ?? baseCustom?.gradeInfo?.submissionDate ?? a.dueDate,
        receipt: `#EDF-2026-${a.id.toUpperCase()}`,
      }
    : {
        status: a.status === "dueSoon" ? "Submission Pending" : "Not Started",
        feedback: "Evaluation criteria and awarded marks will appear here after grading.",
      };

  if (baseCustom) {
    return {
      ...baseCustom,
      weight: weightStr,
      totalMarks: maxPts,
      gradeInfo,
      instructions: {
        ...baseCustom.instructions,
        overview: a.description || baseCustom.instructions.overview,
      },
    };
  }

  // Reusable fallback for any other assignment in the portal
  return {
    weight: weightStr,
    totalMarks: maxPts,
    gradeInfo,
    instructions: {
      overview: a.description || `Complete the ${a.name} in accordance with ${course.code} unit learning outcomes and specifications. Demonstrate strong problem-solving methodology and adherence to industry best practices.`,
      tasks: [
        {
          title: "1. Scope Analysis & Preparation",
          desc: `Review the provided specifications for ${a.name} and document project requirements and architecture.`,
        },
        {
          title: "2. Technical Implementation & Development",
          desc: "Develop and assemble deliverables following course guidelines, utilizing modular structures and robust error handling.",
        },
        {
          title: "3. Testing, Verification & Technical Write-up",
          desc: "Conduct thorough testing of all components and compile a concise report summarizing results and references.",
        },
      ],
    },
    submissionRequirements: {
      acceptedFormats: [".ZIP", ".PDF"],
      maxSize: "50 MB",
      namingConvention: `${course.code}_${a.id.toUpperCase()}_StudentID.zip`,
      policies: [
        "Academic Integrity: All work must be original and authored by the enrolled student.",
        "Late Penalty: 5% per calendar day penalty applies up to a maximum of 5 days.",
      ],
    },
    rubric: [
      { criterion: "Technical Execution & Completeness", maxPts: Math.round(maxPts * 0.4), desc: "Implementation meets all key technical requirements and objectives." },
      { criterion: "Methodology & Architecture", maxPts: Math.round(maxPts * 0.3), desc: "Adherence to standards, structure, and optimal problem-solving." },
      { criterion: "Documentation & Analysis", maxPts: Math.round(maxPts * 0.3), desc: "Clear reporting, evidence of testing, and thorough write-up." },
    ],
    resources: [
      { name: `${course.code}_${a.name.replace(/[^a-zA-Z0-9]/g, "_")}_Brief.pdf`, size: "1.2 MB", type: "PDF Document", desc: "Official assessment brief and instructions." },
      { name: `${course.code}_Assessment_Marking_Rubric.pdf`, size: "380 KB", type: "PDF Document", desc: "Marking criteria and grade bands." },
    ],
  };
}


// ── Dedicated Reusable Assignment Details View ────────────────────────────────
function AssignmentDetailsView({
  assignment,
  course,
  onBack,
  onStatusChange,
}: {
  assignment: Assignment;
  course: CourseGroup;
  onBack: () => void;
  onStatusChange: (
    assignmentId: string,
    newStatus: AStatus,
    details?: { score?: string; submissionDate?: string; feedback?: string }
  ) => void;
}) {
  const details = getAssignmentDetails(assignment, course);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isInitiallySubmitted = assignment.status === "submitted";
  const [currentStatus, setCurrentStatus] = useState<AStatus>(assignment.status);
  const [isSubmitted, setIsSubmitted] = useState(isInitiallySubmitted);
  const [isResubmitting, setIsResubmitting] = useState(false);

  const [uploadedFile, setUploadedFile] = useState<{ name: string; size: string } | null>(
    isInitiallySubmitted
      ? {
          name: `${course.code.toLowerCase()}_${assignment.name.toLowerCase().replace(/[^a-zA-Z0-9]/g, "_")}_submission.zip`,
          size: "14.2 MB",
        }
      : null
  );

  const [comments, setComments] = useState("");
  const [integrityAccepted, setIntegrityAccepted] = useState(isInitiallySubmitted);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [receiptNumber, setReceiptNumber] = useState(details.gradeInfo?.receipt ?? "#EDF-2026-9418");
  const [submissionTimestamp, setSubmissionTimestamp] = useState(
    details.gradeInfo?.submissionDate ?? "Jun 05, 2026 at 09:42 PM AEST"
  );
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadedFile) {
      setValidationError("Please select or attach your submission file before submitting.");
      return;
    }
    if (!integrityAccepted) {
      setValidationError("Please confirm the academic integrity declaration checkbox.");
      return;
    }

    setValidationError(null);
    const newReceipt = `#EDF-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const now = new Date();
    const formattedDate =
      now.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }) +
      " at " +
      now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }) +
      " AEST";

    setReceiptNumber(newReceipt);
    setSubmissionTimestamp(formattedDate);
    setIsSubmitted(true);
    setCurrentStatus("submitted");
    setIsResubmitting(false);

    // Save to shared submissions store
    const sessionUser = getSessionUser();
    const studentName = sessionUser?.name || "Richard Maceda Vitug";
    const studentEmail = sessionUser?.email || "2003988@eduflex.edu";

    addStudentSubmission({
      itemId: assignment.id,
      itemTitle: assignment.name,
      itemType: assignment.type === "Assessment" ? "Assessment" : "Assignment",
      courseCode: course.code,
      studentName,
      studentEmail,
      fileName: uploadedFile.name,
      fileSize: uploadedFile.size,
      comments: comments.trim() || undefined,
      receiptNumber: newReceipt,
      maxScore: assignment.maxScore ?? details.totalMarks,
    });

    showToast(
      `${assignment.type === "Assessment" ? "Assessment" : "Assignment"} "${assignment.name}" submitted successfully! Receipt: ${newReceipt}`
    );
    onStatusChange(assignment.id, "submitted", {
      submissionDate: formattedDate,
    });
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-gray-900 text-white px-5 py-3 rounded-2xl shadow-xl border border-gray-700 flex items-center gap-3 animate-fade-in text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-green-400" />
          {toastMessage}
        </div>
      )}

      {/* Top Bar: Navigation & Breadcrumbs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <button
            onClick={onBack}
            className="hover:text-blue-700 font-medium transition-colors"
          >
            Assignments
          </button>
          <span className="text-gray-300">/</span>
          <span className="text-gray-600 font-medium">{course.code}</span>
          <span className="text-gray-300">/</span>
          <span className="font-semibold text-gray-900 truncate max-w-[240px] sm:max-w-md">
            {assignment.name}
          </span>
        </div>

        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-600 hover:text-blue-700 bg-white px-3.5 py-2 rounded-xl border border-gray-200 shadow-sm transition-all hover:border-blue-300 self-start sm:self-auto"
        >
          <IconChevronLeft className="w-4 h-4" />
          <span>Back to Assignments</span>
        </button>
      </div>

      {/* Course Banner & Assignment Overview Header Card */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-bl-full pointer-events-none opacity-20"
          style={{ background: course.iconColor }}
        />

        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-2.5 mb-2">
            <span
              className="px-2.5 py-0.5 rounded-md text-xs font-extrabold tracking-wide uppercase"
              style={{ background: `${course.iconColor}18`, color: course.iconColor }}
            >
              {course.code}
            </span>
            <span className="text-xs text-gray-300 font-medium">·</span>
            <span className="text-xs font-semibold text-gray-700">
              {course.title} {course.term ? `(${course.term})` : ""}
            </span>
            <span className="text-xs text-gray-300 font-medium">·</span>
            {assignment.type === "Assessment" ? (
              <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-purple-100 text-purple-800">
                Assessment · Weighted ({assignment.weight ?? 25}%)
              </span>
            ) : (
              <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-blue-100 text-blue-800">
                Assignment · Coursework
              </span>
            )}
            <span className="text-xs text-gray-300 font-medium">·</span>
            <StatusBadge status={currentStatus} />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 tracking-tight mb-2">
            {assignment.name}
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed max-w-3xl mb-5">
            {assignment.description}
          </p>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-gray-100 text-xs">
            <div className="bg-gray-50 rounded-xl p-3.5 border border-gray-100">
              <span className="text-gray-400 font-medium block text-[11px] mb-0.5">Due Date</span>
              <span className="font-bold text-gray-900 flex items-center gap-1.5">
                <IconClock className="w-3.5 h-3.5 text-blue-600" />
                {assignment.dueDate}
              </span>
              <span className="text-[10px] text-gray-400 mt-0.5 block">11:59 PM AEST</span>
            </div>

            <div className="bg-gray-50 rounded-xl p-3.5 border border-gray-100">
              <span className="text-gray-400 font-medium block text-[11px] mb-0.5">
                {assignment.type === "Assessment" ? "Assessment Weight" : "Coursework Weight"}
              </span>
              <span className="font-bold text-gray-900 block">{details.weight}</span>
              <span className="text-[10px] text-gray-400 mt-0.5 block">{details.totalMarks} Points Total</span>
            </div>


            <div className="bg-gray-50 rounded-xl p-3.5 border border-gray-100">
              <span className="text-gray-400 font-medium block text-[11px] mb-0.5">Submission Mode</span>
              <span className="font-bold text-gray-900 block">File Upload</span>
              <span className="text-[10px] text-gray-400 mt-0.5 block">.ZIP Archive or .PDF</span>
            </div>

            <div className="bg-gray-50 rounded-xl p-3.5 border border-gray-100">
              <span className="text-gray-400 font-medium block text-[11px] mb-0.5">Current Status</span>
              <span className="font-bold text-gray-900 flex items-center gap-1.5 capitalize">
                {currentStatus === "submitted" ? (
                  <span className="text-green-700 flex items-center gap-1">
                    <IconCheck className="w-3.5 h-3.5" /> Submitted
                  </span>
                ) : currentStatus === "dueSoon" ? (
                  <span className="text-orange-600">Due Soon</span>
                ) : (
                  <span className="text-gray-600">Not Started</span>
                )}
              </span>
              <span className="text-[10px] text-gray-400 mt-0.5 block">
                {currentStatus === "submitted" ? "Submission recorded" : "Action required"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Columns: Instructions, Requirements, Rubric & Attached Files */}
        <div className="lg:col-span-2 space-y-6">
          {/* Grade / Evaluation Card (shown when available or submitted) */}
          {(assignment.score || (isSubmitted && details.gradeInfo?.score)) && (
            <div className="bg-white rounded-2xl border border-emerald-200 shadow-sm p-6 relative overflow-hidden">
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <IconCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">Graded &amp; Evaluated</h3>
                    <p className="text-xs text-gray-500">Official marks released by unit coordinator</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold text-gray-400 block">Awarded Score</span>
                  <p className="text-xl font-black text-emerald-700">
                    {assignment.score ?? details.gradeInfo?.score}
                  </p>
                </div>
              </div>

              {details.gradeInfo?.feedback && (
                <div className="bg-emerald-50/60 rounded-xl p-4 border border-emerald-100 text-xs">
                  <p className="font-bold text-emerald-800 mb-1">Evaluator Feedback:</p>
                  <p className="text-gray-700 italic leading-relaxed">"{details.gradeInfo.feedback}"</p>
                </div>
              )}
            </div>
          )}

          {/* Section 1: Assignment Instructions & Tasks */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center gap-2.5 pb-4 border-b border-gray-100 mb-4">
              <span className="p-2 rounded-xl bg-blue-50 text-blue-600">
                <IconClipboardList className="w-5 h-5" />
              </span>
              <div>
                <h2 className="text-base font-bold text-gray-900">Assignment Instructions &amp; Objectives</h2>
                <p className="text-xs text-gray-400">Step-by-step technical implementation deliverables</p>
              </div>
            </div>

            <p className="text-xs text-gray-600 leading-relaxed mb-5">
              {details.instructions.overview}
            </p>

            <div className="space-y-3.5">
              {details.instructions.tasks.map((task, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-gray-50/80 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors"
                >
                  <h3 className="text-xs font-bold text-gray-900 mb-1 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-black flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span>{task.title}</span>
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed pl-7">{task.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Submission Requirements & Academic Policies */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center gap-2.5 pb-4 border-b border-gray-100 mb-4">
              <span className="p-2 rounded-xl bg-purple-50 text-purple-600">
                <IconAlertCircle className="w-5 h-5" />
              </span>
              <div>
                <h2 className="text-base font-bold text-gray-900">Submission Requirements &amp; Policies</h2>
                <p className="text-xs text-gray-400">Accepted file types, naming conventions, and academic guidelines</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-50 rounded-xl p-3.5 border border-gray-100">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                  Accepted Deliverable Formats
                </span>
                <div className="space-y-1">
                  {details.submissionRequirements.acceptedFormats.map((fmt, i) => (
                    <span
                      key={i}
                      className="block text-xs font-semibold text-gray-800 bg-white border border-gray-200 px-2.5 py-1 rounded-md"
                    >
                      {fmt}
                    </span>
                  ))}
                </div>
                <span className="text-[10px] text-gray-400 mt-2 block">Max file size limit: {details.submissionRequirements.maxSize}</span>
              </div>

              <div className="bg-gray-50 rounded-xl p-3.5 border border-gray-100">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                  File Naming Standard
                </span>
                <code className="text-xs font-mono font-bold text-blue-700 bg-white border border-gray-200 px-2.5 py-1.5 rounded-md block truncate">
                  {details.submissionRequirements.namingConvention}
                </code>
                <span className="text-[10px] text-gray-400 mt-2 block">
                  Please replace StudentID and LastName with your official details
                </span>
              </div>
            </div>

            <div className="space-y-2">
              {details.submissionRequirements.policies.map((pol, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 text-xs text-gray-600 bg-blue-50/40 p-3 rounded-xl border border-blue-100"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                  <span>{pol}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Marking Rubric & Criteria Breakdown */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-4">
              <div className="flex items-center gap-2.5">
                <span className="p-2 rounded-xl bg-amber-50 text-amber-600">
                  <IconCheckCircle className="w-5 h-5" />
                </span>
                <div>
                  <h2 className="text-base font-bold text-gray-900">Marking Rubric &amp; Grade Criteria</h2>
                  <p className="text-xs text-gray-400">Total 100 points distributed across 4 key evaluation categories</p>
                </div>
              </div>
              <span className="text-xs font-extrabold text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-lg">
                100 Marks Total
              </span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-gray-100">
              <table className="w-full text-left text-xs">
                <thead className="bg-gray-50/80 text-gray-500 uppercase tracking-wider font-bold">
                  <tr>
                    <th className="px-4 py-3">Criterion</th>
                    <th className="px-4 py-3 text-right">Marks</th>
                    <th className="px-4 py-3">Descriptor &amp; Requirements</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {details.rubric.map((r, i) => (
                    <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-4 py-3.5 font-bold text-gray-900 align-top whitespace-nowrap">
                        {r.criterion}
                      </td>
                      <td className="px-4 py-3.5 font-extrabold text-blue-700 text-right whitespace-nowrap align-top">
                        {r.maxPts} pts
                      </td>
                      <td className="px-4 py-3.5 text-gray-600 leading-relaxed align-top">
                        {r.desc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 4: Attached Course Resources & Starter Files */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-4">
              <div className="flex items-center gap-2.5">
                <span className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
                  <IconFileArchive className="w-5 h-5" />
                </span>
                <div>
                  <h2 className="text-base font-bold text-gray-900">Attached Resources &amp; Starter Files</h2>
                  <p className="text-xs text-gray-400">Official briefs, templates, and downloadable assets</p>
                </div>
              </div>
              <span className="text-xs text-gray-400 font-medium">
                {details.resources.length} files available
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {details.resources.map((res, i) => (
                <div
                  key={i}
                  className="p-4 bg-gray-50 rounded-xl border border-gray-200/80 hover:border-blue-300 hover:bg-blue-50/30 transition-all flex items-start justify-between gap-3"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="p-2.5 rounded-xl bg-white border border-gray-200 text-blue-600 shrink-0">
                      {res.type.includes("ZIP") ? (
                        <IconFileArchive className="w-5 h-5 text-amber-600" />
                      ) : (
                        <IconFileTextDoc className="w-5 h-5 text-red-500" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-gray-900 truncate" title={res.name}>
                        {res.name}
                      </h4>
                      <p className="text-[11px] text-gray-400 mt-0.5">
                        {res.type} · {res.size}
                      </p>
                      <p className="text-[11px] text-gray-500 mt-1 line-clamp-1">{res.desc}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => showToast(`Downloading ${res.name}...`)}
                    className="p-2 text-gray-500 hover:text-blue-700 hover:bg-white rounded-lg transition-colors shrink-0"
                    title={`Download ${res.name}`}
                  >
                    <IconDownloadBtn className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right 1 Column: Interactive Submission Area */}
        <div className="lg:col-span-1 space-y-6">
          {/* Submission Status & Form Card */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-4 sticky top-20">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-blue-50 text-blue-600">
                  <IconCloudUpload className="w-5 h-5" />
                </span>
                <h3 className="text-base font-bold text-gray-900">
                  {isSubmitted && !isResubmitting ? "Submission Status" : isResubmitting ? "Resubmit Assignment" : "Submit Assignment"}
                </h3>
              </div>
              {isResubmitting && (
                <button
                  onClick={() => setIsResubmitting(false)}
                  className="text-[11px] font-semibold text-gray-500 hover:text-gray-700 hover:underline"
                >
                  Cancel
                </button>
              )}
            </div>

            {/* If Already Submitted and Not Resubmitting */}
            {isSubmitted && !isResubmitting ? (
              <div className="space-y-4">
                <div className="p-4 bg-green-50/90 rounded-xl border border-green-200 text-green-900 space-y-2 text-xs">
                  <div className="flex items-center justify-between font-bold">
                    <span className="flex items-center gap-1.5 text-green-800">
                      <IconCheck className="w-4 h-4 text-green-600" /> Submitted Successfully
                    </span>
                    <span className="text-[11px] font-mono text-green-800 bg-white/70 px-2 py-0.5 rounded">
                      {receiptNumber}
                    </span>
                  </div>
                  <p className="text-green-700 text-[11px]">
                    Recorded on {submissionTimestamp}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 space-y-2.5 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">File attached:</span>
                    <span className="font-semibold text-blue-700 truncate max-w-[170px]" title={uploadedFile?.name}>
                      {uploadedFile?.name ?? "assignment_final_submission.zip"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">File size:</span>
                    <span className="text-gray-700 font-medium">{uploadedFile?.size ?? "14.2 MB"}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Evaluation:</span>
                    <span className="font-semibold text-green-700">
                      {assignment.score ? "Graded & Released" : "Received & Pending Review"}
                    </span>
                  </div>
                  {comments && (
                    <div className="pt-2 border-t border-gray-200">
                      <span className="text-gray-500 block mb-1">Student Notes:</span>
                      <p className="p-2.5 bg-white rounded-lg border border-gray-200 text-gray-700 italic">
                        "{comments}"
                      </p>
                    </div>
                  )}
                </div>

                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => showToast(`Downloading ${uploadedFile?.name ?? "submission.zip"}...`)}
                    className="w-full py-2.5 rounded-xl text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                  >
                    <IconDownloadBtn className="w-4 h-4" />
                    <span>Download Submitted File</span>
                  </button>
                  <button
                    onClick={() => {
                      setIsResubmitting(true);
                      setIntegrityAccepted(false);
                    }}
                    className="w-full py-2 rounded-xl text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-colors"
                  >
                    Resubmit Assignment (Upload Revision)
                  </button>
                </div>
              </div>
            ) : (
              /* Active Submission Form */
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                {/* File Upload Dropzone */}
                <div>
                  <label className="block font-bold text-gray-700 mb-1.5">
                    Upload Submission File <span className="text-red-500">*</span>
                  </label>

                  {uploadedFile ? (
                    <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-200 flex items-center justify-between gap-2.5">
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="p-2 rounded-lg bg-blue-600 text-white shrink-0">
                          <IconFileArchive className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-gray-900 truncate max-w-[170px]" title={uploadedFile.name}>
                            {uploadedFile.name}
                          </p>
                          <p className="text-[10px] text-gray-500">{uploadedFile.size} · Ready to submit</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setUploadedFile(null)}
                        className="w-6 h-6 rounded-full hover:bg-blue-100 flex items-center justify-center text-gray-500 hover:text-red-600 transition-colors shrink-0"
                        title="Remove attached file"
                      >
                        ✕
                      </button>
                    </div>
                  ) : (
                    <div>
                      <div
                        onClick={() => fileInputRef.current?.click()}
                        className="border-2 border-dashed border-gray-300 hover:border-blue-500 rounded-2xl p-5 text-center transition-colors cursor-pointer bg-gray-50/60 group"
                      >
                        <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-1.5 group-hover:scale-105 transition-transform">
                          <IconCloudUpload className="w-5 h-5" />
                        </div>
                        <p className="font-bold text-gray-800">Drag &amp; drop file here</p>
                        <p className="text-[11px] text-gray-400 mt-0.5">.ZIP, .PDF (Max 50MB)</p>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            fileInputRef.current?.click();
                          }}
                          className="mt-2.5 px-3 py-1 bg-white border border-gray-200 hover:border-blue-300 rounded-lg text-xs font-semibold text-gray-700 shadow-sm"
                        >
                          Browse Files
                        </button>
                        <input
                          ref={fileInputRef}
                          type="file"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              setUploadedFile({
                                name: file.name,
                                size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
                              });
                              setValidationError(null);
                            }
                          }}
                        />
                      </div>

                      {/* Quick sample file attachment for easy testing */}
                      <button
                        type="button"
                        onClick={() => {
                          setUploadedFile({
                            name: `${course.code.toLowerCase()}_${assignment.name.toLowerCase().replace(/[^a-zA-Z0-9]/g, "_")}_vitug.zip`,
                            size: "14.2 MB",
                          });
                          setValidationError(null);
                        }}
                        className="mt-2 text-[11px] text-blue-700 hover:text-blue-900 font-semibold hover:underline block text-center w-full"
                      >
                        + Attach sample file ({course.code.toLowerCase()}_prototype_submission.zip)
                      </button>
                    </div>
                  )}
                </div>

                {/* Comments Field */}
                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Comments &amp; Marker Notes <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    rows={3}
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    placeholder="Add any notes for the instructor (e.g. hosted preview URL, GitHub repo, testing notes)..."
                    className="w-full text-xs rounded-xl border border-gray-200 p-2.5 focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Academic Integrity Checkbox */}
                <div className="pt-1">
                  <label className="flex items-start gap-2 text-gray-700 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={integrityAccepted}
                      onChange={(e) => {
                        setIntegrityAccepted(e.target.checked);
                        if (e.target.checked) setValidationError(null);
                      }}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-0.5"
                    />
                    <span className="leading-snug text-[11px] text-gray-600">
                      I declare that this assignment is entirely my own original work, completed in accordance with the University's Academic Integrity Policy.
                    </span>
                  </label>
                </div>

                {/* Validation Error Banner */}
                {validationError && (
                  <div className="p-2.5 bg-red-50 border border-red-200 rounded-xl text-red-700 text-[11px] flex items-center gap-2 animate-fade-in">
                    <IconAlertCircle className="w-4 h-4 shrink-0" />
                    <span>{validationError}</span>
                  </div>
                )}

                {/* Submit Assignment / Assessment Button */}
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-[#1a3a9e] hover:bg-[#102d80] active:scale-[0.99] transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <IconCheck className="w-4 h-4" />
                  <span>Submit {assignment.type === "Assessment" ? "Assessment" : "Assignment"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
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

  // Dynamic course groups connected to shared store
  const [allCourseGroups, setAllCourseGroups] = useState<CourseGroup[]>(() => {
    const courses = getSharedCourses();
    const subs = getSharedSubmissions();
    const user = getSessionUser();
    return buildStudentCourseGroups(courses, subs, user?.email || "2003988@eduflex.edu");
  });
  const [selectedAssignment, setSelectedAssignment] = useState<{
    assignment: Assignment;
    course: CourseGroup;
  } | null>(null);

  useEffect(() => {
    const refreshData = () => {
      const courses = getSharedCourses();
      const subs = getSharedSubmissions();
      const user = getSessionUser();
      const studentEmail = user?.email || "2003988@eduflex.edu";
      const updatedGroups = buildStudentCourseGroups(courses, subs, studentEmail);
      setAllCourseGroups(updatedGroups);

      // If viewing an assignment details, keep it in sync with updated grade/status
      setSelectedAssignment((prev) => {
        if (!prev) return null;
        const matchingCourse = updatedGroups.find((g) => g.code === prev.course.code);
        if (!matchingCourse) return prev;
        const matchingItem = [
          ...matchingCourse.assignments,
          ...(matchingCourse.assessments || []),
        ].find((item) => item.id === prev.assignment.id || item.name === prev.assignment.name);
        if (!matchingItem) return prev;
        return { assignment: matchingItem, course: matchingCourse };
      });
    };

    window.addEventListener("eduflex_assignment_sync", refreshData);
    window.addEventListener("storage", refreshData);
    return () => {
      window.removeEventListener("eduflex_assignment_sync", refreshData);
      window.removeEventListener("storage", refreshData);
    };
  }, []);

  const filterTabs: { id: AssignmentFilter; label: string }[] = [
    { id: "all",       label: "All Assignments" },
    { id: "dueSoon",   label: "Due Soon" },
    { id: "submitted", label: "Submitted" },
    { id: "overdue",   label: "Overdue" },
  ];

  const handleStatusChange = (
    assignmentId: string,
    newStatus: AStatus,
    details?: { score?: string; submissionDate?: string; feedback?: string }
  ) => {
    setAllCourseGroups((prev) =>
      prev.map((g) => ({
        ...g,
        assignments: g.assignments.map((a) =>
          a.id === assignmentId
            ? {
                ...a,
                status: newStatus,
                score: details?.score ?? a.score,
                submissionDate: details?.submissionDate ?? a.submissionDate,
                feedback: details?.feedback ?? a.feedback,
              }
            : a
        ),
        assessments: (g.assessments || []).map((a) =>
          a.id === assignmentId
            ? {
                ...a,
                status: newStatus,
                score: details?.score ?? a.score,
                submissionDate: details?.submissionDate ?? a.submissionDate,
                feedback: details?.feedback ?? a.feedback,
              }
            : a
        ),
      }))
    );

    if (selectedAssignment && selectedAssignment.assignment.id === assignmentId) {
      setSelectedAssignment((prev) =>
        prev
          ? {
              ...prev,
              assignment: {
                ...prev.assignment,
                status: newStatus,
                score: details?.score ?? prev.assignment.score,
                submissionDate: details?.submissionDate ?? prev.assignment.submissionDate,
                feedback: details?.feedback ?? prev.assignment.feedback,
              },
            }
          : null
      );
    }
  };

  // If student clicked an assignment, render dedicated Assignment Details view
  if (selectedAssignment) {
    return (
      <AssignmentDetailsView
        assignment={selectedAssignment.assignment}
        course={selectedAssignment.course}
        onBack={() => setSelectedAssignment(null)}
        onStatusChange={handleStatusChange}
      />
    );
  }

  const allItems = allCourseGroups.flatMap((g) => [...g.assignments, ...(g.assessments || [])]);
  const dueSoonCount = allItems.filter((a) => a.status === "dueSoon").length;
  const submittedCount = allItems.filter((a) => a.status === "submitted").length;
  const overdueCount = allItems.filter((a) => a.status === "overdue").length;

  const visibleGroups = allCourseGroups
    .filter((g) => courseFilter === "all" || g.code === courseFilter)
    .map((g) => {
      const sortFn = (a: Assignment, b: Assignment) => {
        if (sortBy === "newest") return new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime();
        if (sortBy === "oldest") return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
        if (sortBy === "status") return a.status.localeCompare(b.status);
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      };
      return {
        ...g,
        assignments: [...g.assignments].sort(sortFn),
        assessments: [...(g.assessments || [])].sort(sortFn),
      };
    });

  const currentCourseOptions = [
    { value: "all", label: "All Courses" },
    ...allCourseGroups.map((g) => ({
      value: g.code,
      label: `${g.code} – ${g.title}`,
    })),
  ];
  const courseLabel = currentCourseOptions.find((o) => o.value === courseFilter)?.label ?? "All Courses";
  const sortLabel   = sortOptions.find((o) => o.value === sortBy)?.label ?? "Due Date";

  return (
    <div className="p-6">
      {/* Page heading */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
          <span>Assignments</span>
          <span>/</span>
          <span className="text-gray-600">View and manage your course assignments and assessments</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Assignments &amp; Assessments</h1>
      </div>

      {/* Stat banner cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Total */}
        <button onClick={() => setFilter("all")} className="text-left bg-white rounded-2xl border border-gray-200 shadow-sm p-4 flex items-start gap-3 hover:shadow-md hover:border-blue-200 transition-all">
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
            <IconClipboardList className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Total Coursework</p>
            <p className="text-2xl font-extrabold text-gray-900 leading-none">{allItems.length}</p>
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
            <p className="text-2xl font-extrabold text-orange-600 leading-none">{dueSoonCount}</p>
            <p className="text-xs text-orange-400 mt-1">Due in the next 14 days</p>
          </div>
        </button>

        {/* Submitted */}
        <button onClick={() => setFilter("submitted")} className="text-left bg-green-50 rounded-2xl border border-green-100 shadow-sm p-4 flex items-start gap-3 hover:shadow-md hover:border-green-300 transition-all">
          <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600 shrink-0">
            <IconCheckCircle className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-green-500 uppercase tracking-wider mb-0.5">Submitted</p>
            <p className="text-2xl font-extrabold text-green-700 leading-none">{submittedCount}</p>
            <p className="text-xs text-green-500 mt-1">Items submitted</p>
          </div>
        </button>

        {/* Overdue */}
        <button onClick={() => setFilter("overdue")} className="text-left bg-red-50 rounded-2xl border border-red-100 shadow-sm p-4 flex items-start gap-3 hover:shadow-md hover:border-red-300 transition-all">
          <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-red-500 shrink-0">
            <IconXCircle className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-red-400 uppercase tracking-wider mb-0.5">Overdue</p>
            <p className="text-2xl font-extrabold text-red-600 leading-none">{overdueCount}</p>
            <p className="text-xs text-red-400 mt-1">Past due items</p>
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
                      {currentCourseOptions.map((opt) => (
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
              onSelectAssignment={(a, course) => setSelectedAssignment({ assignment: a, course })}
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

export interface QuizQuestion {
  id: string;
  questionNumber: number;
  text: string;
  codeSnippet?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface QuizItem {
  id: string;
  name: string;
  description: string;
  dueDate: string;
  status: QuizStatus;
  timeLimit?: string;
  questions?: number;
  weight?: string;
  score?: string;
  percentage?: string;
  dateTaken?: string;
  attemptsAllowed?: number;
  attemptsUsed?: number;
  feedback?: string;
  instructions?: string[];
  userAnswers?: Record<number, number>;
  availableDate?: string;
}

export interface QuizCourseGroup {
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
      {
        id: "q1",
        name: "Weekly Quiz 4",
        description: "JavaScript DOM manipulation and event handling.",
        dueDate: "Sep 05, 2026",
        status: "open",
        timeLimit: "30 Mins",
        questions: 15,
        weight: "5%",
        attemptsAllowed: 1,
        attemptsUsed: 0,
        availableDate: "Open Now",
      },
      {
        id: "q2",
        name: "Weekly Quiz 3",
        description: "CSS Flexbox and responsive layout.",
        dueDate: "Aug 15, 2026",
        status: "completed",
        score: "13/15",
        percentage: "86.7%",
        dateTaken: "Aug 15, 2026",
        timeLimit: "30 Mins",
        questions: 15,
        weight: "5%",
        attemptsAllowed: 1,
        attemptsUsed: 1,
        feedback: "Outstanding work on CSS Flexbox container properties, alignment, and flex-wrap responsiveness. Review flex-basis auto vs 0 edge cases.",
        userAnswers: { 0: 1, 1: 1, 2: 1, 3: 0, 4: 1, 5: 1, 6: 0, 7: 0, 8: 1, 9: 0, 10: 1, 11: 1, 12: 0, 13: 1, 14: 2 },
      },
    ],
  },
  {
    code: "ICT301",
    title: "Information Technology Project 1",
    term: "T226",
    iconColor: "#7c3aed",
    quizzes: [
      {
        id: "q3",
        name: "Midterm Exam",
        description: "Project management and systems analysis.",
        dueDate: "Oct 12, 2026",
        status: "locked",
        timeLimit: "90 Mins",
        questions: 40,
        weight: "20%",
        attemptsAllowed: 1,
        attemptsUsed: 0,
        availableDate: "Oct 12, 2026, 09:00 AM",
      },
      {
        id: "q4",
        name: "Weekly Quiz 1",
        description: "Introduction to project lifecycle.",
        dueDate: "Aug 02, 2026",
        status: "completed",
        score: "32/35",
        percentage: "91.4%",
        dateTaken: "Aug 02, 2026",
        timeLimit: "45 Mins",
        questions: 35,
        weight: "10%",
        attemptsAllowed: 1,
        attemptsUsed: 1,
        feedback: "Excellent understanding of software development life cycles (SDLC), Agile ceremonies, and stakeholder risk matrices.",
        userAnswers: {
          0: 0, 1: 1, 2: 2, 3: 3, 4: 0, 5: 1, 6: 2, 7: 3, 8: 0, 9: 1,
          10: 2, 11: 3, 12: 0, 13: 1, 14: 2, 15: 3, 16: 0, 17: 1, 18: 2, 19: 3,
          20: 0, 21: 1, 22: 2, 23: 3, 24: 0, 25: 1, 26: 2, 27: 3, 28: 0, 29: 1,
          30: 2, 31: 3, 32: 1, 33: 1, 34: 1,
        },
      },
    ],
  },
  {
    code: "ICT126",
    title: "Artificial Intelligence",
    term: "T226",
    iconColor: "#059669",
    quizzes: [
      {
        id: "q5",
        name: "Weekly Quiz 3",
        description: "Neural networks and deep learning fundamentals.",
        dueDate: "Sep 20, 2026",
        status: "locked",
        timeLimit: "30 Mins",
        questions: 15,
        weight: "5%",
        attemptsAllowed: 1,
        attemptsUsed: 0,
        availableDate: "Sep 20, 2026, 10:00 AM",
      },
      {
        id: "q6",
        name: "Weekly Quiz 1",
        description: "Foundations of AI and propositional logic.",
        dueDate: "Jul 28, 2026",
        status: "overdue",
        timeLimit: "25 Mins",
        questions: 10,
        weight: "5%",
        attemptsAllowed: 1,
        attemptsUsed: 0,
      },
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

// ── Mock Question Banks ────────────────────────────────────────────────────────
const mockQuizQuestions: Record<string, QuizQuestion[]> = {
  q1: [
    {
      id: "q1-1",
      questionNumber: 1,
      text: "Which DOM method returns the first Element that matches a specified CSS selector string?",
      options: ["document.getElementById()", "document.querySelector()", "document.querySelectorAll()", "document.getElementsByTagName()"],
      correctIndex: 1,
      explanation: "document.querySelector() returns the first Element within the document that matches the specified CSS selector or group of selectors.",
    },
    {
      id: "q1-2",
      questionNumber: 2,
      text: "How do you prevent an event from bubbling up the DOM tree to parent ancestor nodes?",
      options: ["event.preventDefault()", "event.stopPropagation()", "event.stopImmediatePropagation()", "event.cancelBubble()"],
      correctIndex: 1,
      explanation: "event.stopPropagation() halts the propagation of the event further up the DOM hierarchy in the capturing and bubbling phases.",
    },
    {
      id: "q1-3",
      questionNumber: 3,
      text: "Which property is used to safely retrieve or set the visible text content of an HTML element without parsing HTML tags?",
      options: ["element.innerHTML", "element.textContent", "element.outerHTML", "element.nodeValue"],
      correctIndex: 1,
      explanation: "element.textContent retrieves or sets the text content of a node and its descendants without parsing HTML tags, making it safe against XSS attacks.",
    },
    {
      id: "q1-4",
      questionNumber: 4,
      text: "When attaching an event listener with addEventListener('click', handler, true), what does setting the third parameter to true do?",
      options: [
        "The handler runs during the bubbling phase.",
        "The handler runs during the capturing phase.",
        "The event listener executes only once before being deleted.",
        "The browser prevents the default action automatically.",
      ],
      correctIndex: 1,
      explanation: "Setting useCapture to true (or { capture: true }) causes the handler to execute during the event capturing phase (from window down to target element).",
    },
    {
      id: "q1-5",
      questionNumber: 5,
      text: "What is 'event delegation' in modern JavaScript web development?",
      options: [
        "Delegating event dispatch to a Web Worker thread.",
        "Attaching a single event listener to an ancestor container to manage events on current and future children via bubbling.",
        "Passing callback functions to a microtask queue.",
        "Triggering synthetic events programmatically using dispatchEvent().",
      ],
      correctIndex: 1,
      explanation: "Event delegation leverages event bubbling by placing one listener on a parent element to handle events on multiple or dynamically inserted child elements.",
    },
    {
      id: "q1-6",
      questionNumber: 6,
      text: "Which method is the standard way to dynamically add a CSS class name to an element?",
      options: [
        "element.className.add('active')",
        "element.classList.add('active')",
        "element.classes.push('active')",
        "element.setAttribute('class-add', 'active')",
      ],
      correctIndex: 1,
      explanation: "element.classList.add() adds one or more specified class tokens to the element's class list without overwriting existing classes.",
    },
    {
      id: "q1-7",
      questionNumber: 7,
      text: "What is the key difference between event.target and event.currentTarget in an event handler?",
      options: [
        "event.target is where the handler is attached; event.currentTarget is the element clicked.",
        "event.target is the element that triggered the event; event.currentTarget is the element whose event listener is currently running.",
        "event.target is only for keyboard events; event.currentTarget is for mouse events.",
        "They are aliases in modern ECMAScript with identical behavior.",
      ],
      correctIndex: 1,
      explanation: "event.target references the deepest element where the event originated, while event.currentTarget references the element to which the event handler is attached.",
    },
    {
      id: "q1-8",
      questionNumber: 8,
      text: "Which method creates a new HTML DOM element in memory before inserting it into the document?",
      options: [
        "document.newElement('div')",
        "document.createElement('div')",
        "document.appendNode('div')",
        "document.instantiateElement('div')",
      ],
      correctIndex: 1,
      explanation: "document.createElement(tagName) creates the HTML element specified by tagName in memory, ready for attribute configuration and DOM attachment.",
    },
    {
      id: "q1-9",
      questionNumber: 9,
      text: "How do you prevent a form element from performing a full page reload when its submit button is clicked?",
      options: [
        "event.preventDefault()",
        "event.stopPropagation()",
        "event.halt()",
        "window.stopSubmit()",
      ],
      correctIndex: 0,
      explanation: "event.preventDefault() suppresses the default browser action associated with the event, such as form submission and page reloading.",
    },
    {
      id: "q1-10",
      questionNumber: 10,
      text: "Which DOM method is used to insert a new node immediately before an existing reference child node?",
      options: [
        "parentElement.prepend(newNode, referenceNode)",
        "parentElement.insertBefore(newNode, referenceNode)",
        "referenceNode.insertPreceding(newNode)",
        "parentElement.insertAfter(newNode, referenceNode)",
      ],
      correctIndex: 1,
      explanation: "parentElement.insertBefore(newNode, referenceNode) inserts newNode directly before referenceNode as a child of parentElement.",
    },
    {
      id: "q1-11",
      questionNumber: 11,
      text: "What is the primary difference between DOMContentLoaded and the window.load event?",
      options: [
        "DOMContentLoaded fires when the HTML is parsed without waiting for stylesheets/images; window.load waits for all external resources.",
        "DOMContentLoaded waits for all images to download; window.load fires as soon as the HTML is parsed.",
        "DOMContentLoaded only works on desktop browsers; window.load is for mobile devices.",
        "DOMContentLoaded fires repeatedly whenever the DOM updates; window.load fires only once.",
      ],
      correctIndex: 0,
      explanation: "DOMContentLoaded triggers when the HTML document has been parsed and DOM tree built, without waiting for stylesheets, images, and subframes to finish loading.",
    },
    {
      id: "q1-12",
      questionNumber: 12,
      text: "Which method provides the modern, standard way to remove an element directly from the DOM?",
      options: [
        "element.parentNode.removeChild(element)",
        "element.remove()",
        "document.deleteElement(element)",
        "element.clear()",
      ],
      correctIndex: 1,
      explanation: "The modern ChildNode.remove() method allows an element to remove itself directly from the DOM tree without requiring a reference to parentNode.",
    },
    {
      id: "q1-13",
      questionNumber: 13,
      text: "Which of the following methods returns a live HTMLCollection rather than a static NodeList?",
      options: [
        "document.querySelectorAll('.card')",
        "document.getElementsByClassName('.card')",
        "element.closest('.card')",
        "document.querySelector('.card')",
      ],
      correctIndex: 1,
      explanation: "document.getElementsByClassName() returns a live HTMLCollection that dynamically updates as matching elements are added or removed from the DOM.",
    },
    {
      id: "q1-14",
      questionNumber: 14,
      text: "How do you read or write a custom data-user-id attribute on an element using the dataset API?",
      options: [
        "element.dataset.userId",
        "element.dataset['user-id-attr']",
        "element.data.userId",
        "element.getDataset('userId')",
      ],
      correctIndex: 0,
      explanation: "The dataset property maps kebab-case data-* attributes to camelCase properties, so data-user-id is accessed via element.dataset.userId.",
    },
    {
      id: "q1-15",
      questionNumber: 15,
      text: "What is the effect of configuring { once: true } in addEventListener('click', handler, { once: true })?",
      options: [
        "The listener throttles execution to once per minute.",
        "The listener is automatically removed after being invoked for the first time.",
        "The listener only executes if no previous click event occurred in the window.",
        "The listener executes synchronously blocking all other callbacks.",
      ],
      correctIndex: 1,
      explanation: "The once: true option specifies that the event listener should be invoked at most once after being added, and automatically removed after firing.",
    },
  ],
  q2: [
    {
      id: "q2-1",
      questionNumber: 1,
      text: "Which CSS property defines a flex container and activates the Flexbox formatting context?",
      options: ["display: block-flex", "display: flex", "flex-mode: container", "position: flex"],
      correctIndex: 1,
      explanation: "display: flex converts the element into a flex container and its direct children into flex items.",
    },
    {
      id: "q2-2",
      questionNumber: 2,
      text: "Which property controls the alignment of flex items along the main axis?",
      options: ["align-items", "justify-content", "align-content", "flex-align"],
      correctIndex: 1,
      explanation: "justify-content aligns items along the main axis (horizontal by default when flex-direction is row).",
    },
    {
      id: "q2-3",
      questionNumber: 3,
      text: "Which property controls the alignment of flex items along the cross axis inside a single line?",
      options: ["justify-items", "align-items", "align-self", "content-align"],
      correctIndex: 1,
      explanation: "align-items defines default alignment along the cross axis for all flex items in the container.",
    },
    {
      id: "q2-4",
      questionNumber: 4,
      text: "When flex-direction is set to column, which direction becomes the main axis?",
      options: ["Horizontal (left to right)", "Vertical (top to bottom)", "Diagonal", "Radial"],
      correctIndex: 1,
      explanation: "Setting flex-direction: column sets the main axis vertically from top to bottom.",
    },
    {
      id: "q2-5",
      questionNumber: 5,
      text: "Which property allows flex items to wrap onto multiple lines when container width is insufficient?",
      options: ["flex-wrap: nowrap", "flex-wrap: wrap", "overflow: wrap", "white-space: normal"],
      correctIndex: 1,
      explanation: "flex-wrap: wrap allows flex items to break onto multiple lines rather than overflowing or shrinking.",
    },
    {
      id: "q2-6",
      questionNumber: 6,
      text: "What does the align-content property do in a flex container?",
      options: [
        "Aligns text content inside each flex item.",
        "Aligns flex lines relative to each other along the cross axis when extra space exists.",
        "Centers the flex container on the screen.",
        "Controls letter spacing across flex elements.",
      ],
      correctIndex: 1,
      explanation: "align-content aligns flex lines along the cross axis when there is extra space and flex-wrap is active.",
    },
    {
      id: "q2-7",
      questionNumber: 7,
      text: "What does flex-grow: 1 signify on a flex item?",
      options: [
        "The item absorbs available free space proportionally along the main axis.",
        "The item doubles in font size.",
        "The item shrinks faster than other items.",
        "The item is fixed at 100% width.",
      ],
      correctIndex: 0,
      explanation: "flex-grow determines how much of the available free space along the main axis this flex item should absorb.",
    },
    {
      id: "q2-8",
      questionNumber: 8,
      text: "How do you prevent a flex item from shrinking smaller than its flex-basis or intrinsic content size?",
      options: ["flex-shrink: 0", "flex-shrink: 1", "flex-grow: 0", "min-width: auto"],
      correctIndex: 0,
      explanation: "Setting flex-shrink: 0 prevents the item from shrinking when available space is constrained.",
    },
    {
      id: "q2-9",
      questionNumber: 9,
      text: "What does flex-basis define on a flex item?",
      options: [
        "The maximum height of the item.",
        "The initial main size of the item before any free space is distributed or shrinking occurs.",
        "The border radius of the item.",
        "The flex item's z-index order.",
      ],
      correctIndex: 1,
      explanation: "flex-basis specifies the initial size of the flex item along the main axis before space distribution.",
    },
    {
      id: "q2-10",
      questionNumber: 10,
      text: "What does the shorthand 'flex: 1 1 auto' expand to?",
      options: [
        "flex-grow: 1, flex-shrink: 1, flex-basis: 0%",
        "flex-grow: 1, flex-shrink: 1, flex-basis: auto",
        "flex-grow: 0, flex-shrink: 1, flex-basis: auto",
        "flex-direction: row, flex-wrap: wrap, flex-align: center",
      ],
      correctIndex: 1,
      explanation: "flex: 1 1 auto sets flex-grow to 1, flex-shrink to 1, and flex-basis to auto.",
    },
    {
      id: "q2-11",
      questionNumber: 11,
      text: "Which media query breakpoint syntax represents a standard mobile-first approach for screens at least 768px wide?",
      options: [
        "@media (max-width: 768px)",
        "@media (min-width: 768px)",
        "@media only screen and (max-device-width: 768px)",
        "@media (device-width: 768px)",
      ],
      correctIndex: 1,
      explanation: "min-width: 768px applies styles for screens 768px and wider, which is the foundational pattern of mobile-first responsive design.",
    },
    {
      id: "q2-12",
      questionNumber: 12,
      text: "What is the purpose of the <meta name='viewport' content='width=device-width, initial-scale=1.0'> tag?",
      options: [
        "Enables GPU acceleration on mobile devices.",
        "Instructs mobile browsers to render the viewport width equal to the physical device width at 1:1 scale.",
        "Compresses image assets for mobile bandwidth.",
        "Disables pinch-to-zoom completely.",
      ],
      correctIndex: 1,
      explanation: "The viewport meta tag ensures the mobile browser scales the document correctly to match device screen width without zoomed-out desktop rendering.",
    },
    {
      id: "q2-13",
      questionNumber: 13,
      text: "Which CSS property provides space between flex items without applying margin to outer edges?",
      options: ["gap", "flex-spacing", "margin-between", "item-padding"],
      correctIndex: 0,
      explanation: "The gap property (including row-gap and column-gap) sets gutters between flex items without unnecessary outer margins.",
    },
    {
      id: "q2-14",
      questionNumber: 14,
      text: "How does the order property affect flex items?",
      options: [
        "Modifies the item's position in the HTML DOM tree permanently.",
        "Changes the visual rendering order of flex items without altering DOM structure or tab order.",
        "Reverses the flex-direction axis.",
        "Sorts children alphabetically.",
      ],
      correctIndex: 1,
      explanation: "The order property reorders visual display of flex items without modifying the underlying DOM hierarchy.",
    },
    {
      id: "q2-15",
      questionNumber: 15,
      text: "Which property allows an individual flex item to override the container's align-items setting?",
      options: ["align-content", "justify-self", "align-self", "flex-override"],
      correctIndex: 2,
      explanation: "align-self allows a specific flex item to override the default cross-axis alignment defined by its parent's align-items.",
    },
  ],
};

function getQuizQuestions(quiz: QuizItem): QuizQuestion[] {
  if (mockQuizQuestions[quiz.id]) {
    return mockQuizQuestions[quiz.id];
  }
  const count = quiz.questions ?? 10;
  const list: QuizQuestion[] = [];
  for (let i = 1; i <= count; i++) {
    list.push({
      id: `${quiz.id}-${i}`,
      questionNumber: i,
      text: `[${quiz.name}] Question ${i}: Reviewing core assessment principles and analytical criteria for ${quiz.description}`,
      options: [
        `Option A: Standard baseline implementation for ${quiz.name} requirement ${i}`,
        `Option B: Recommended industry best practice with structured error handling`,
        `Option C: Deprecated synchronous fallback method`,
        `Option D: Experimental feature requiring browser flag activation`,
      ],
      correctIndex: i % 4,
      explanation: `Option ${String.fromCharCode(65 + (i % 4))} represents the established best practice for this assessment objective.`,
    });
  }
  return list;
}

// ── Quiz Details View ────────────────────────────────────────────────────────
function QuizDetailsView({
  quiz,
  group,
  onBack,
  onStartQuiz,
  onReviewAnswers,
}: {
  quiz: QuizItem;
  group: QuizCourseGroup;
  onBack: () => void;
  onStartQuiz: () => void;
  onReviewAnswers: () => void;
}) {
  const isCompleted = quiz.status === "completed";
  const isLocked = quiz.status === "locked";
  const isOverdue = quiz.status === "overdue";
  const isOpen = quiz.status === "open";
  const attemptsRemaining = (quiz.attemptsAllowed ?? 1) - (quiz.attemptsUsed ?? (isCompleted ? 1 : 0));
  const canStart = isOpen && attemptsRemaining > 0;

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Breadcrumb & Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <button onClick={onBack} className="hover:text-blue-700 font-medium transition-colors">
            Quizzes &amp; Exams
          </button>
          <span className="text-gray-300">/</span>
          <span className="text-gray-600 font-medium">{group.code}</span>
          <span className="text-gray-300">/</span>
          <span className="font-semibold text-gray-900 truncate max-w-[240px] sm:max-w-md">
            {quiz.name}
          </span>
        </div>

        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-600 hover:text-blue-700 bg-white px-3.5 py-2 rounded-xl border border-gray-200 shadow-sm transition-all hover:border-blue-300 self-start sm:self-auto"
        >
          <IconChevronLeft className="w-4 h-4" />
          <span>Back to Quizzes &amp; Exams</span>
        </button>
      </div>

      {/* Main Details Card */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden p-6 sm:p-8 space-y-8">
        {/* Header Title Section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-gray-100">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className="px-2.5 py-1 rounded-md text-xs font-bold text-white uppercase tracking-wider"
                style={{ background: group.iconColor }}
              >
                {group.code}
              </span>
              <span className="text-xs font-semibold text-gray-500">
                {group.title} · {group.term}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              {quiz.name}
            </h1>
            <p className="text-sm text-gray-600 max-w-3xl leading-relaxed">
              {quiz.description}
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <QuizStatusBadge status={quiz.status} />
          </div>
        </div>

        {/* 4 Summary Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-blue-50/60 rounded-xl p-4 border border-blue-100">
            <div className="flex items-center gap-2 text-blue-700 mb-1">
              <IconClock className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Time Limit</span>
            </div>
            <p className="text-xl font-extrabold text-gray-900">{quiz.timeLimit ?? "Untimed"}</p>
            <p className="text-xs text-gray-500 mt-0.5">Continuous countdown timer</p>
          </div>

          <div className="bg-purple-50/60 rounded-xl p-4 border border-purple-100">
            <div className="flex items-center gap-2 text-purple-700 mb-1">
              <IconClipboardList className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Total Questions</span>
            </div>
            <p className="text-xl font-extrabold text-gray-900">{quiz.questions ?? 15} Questions</p>
            <p className="text-xs text-gray-500 mt-0.5">Multiple choice · 1 mark each</p>
          </div>

          <div className="bg-amber-50/60 rounded-xl p-4 border border-amber-100">
            <div className="flex items-center gap-2 text-amber-700 mb-1">
              <IconTrophy className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Weight &amp; Attempts</span>
            </div>
            <p className="text-xl font-extrabold text-gray-900">{quiz.weight ?? "5% Weight"}</p>
            <p className="text-xs text-gray-500 mt-0.5">
              Attempts: {quiz.attemptsUsed ?? (isCompleted ? 1 : 0)} of {quiz.attemptsAllowed ?? 1} used
            </p>
          </div>

          <div className={`rounded-xl p-4 border ${
            isCompleted
              ? "bg-green-50/60 border-green-100 text-green-700"
              : isOverdue
              ? "bg-red-50/60 border-red-100 text-red-700"
              : "bg-gray-50 border-gray-200 text-gray-700"
          }`}>
            <div className="flex items-center gap-2 mb-1">
              {isCompleted ? (
                <IconCheckCircle className="w-4 h-4 text-green-600" />
              ) : isOverdue ? (
                <IconXCircle className="w-4 h-4 text-red-600" />
              ) : (
                <IconClock className="w-4 h-4 text-gray-500" />
              )}
              <span className="text-[10px] font-bold uppercase tracking-wider">
                {isCompleted ? "Score Achieved" : isLocked ? "Available From" : "Due Date"}
              </span>
            </div>
            <p className="text-xl font-extrabold text-gray-900">
              {isCompleted ? quiz.score : isLocked ? (quiz.availableDate ?? quiz.dueDate) : quiz.dueDate}
            </p>
            <p className="text-xs text-gray-500 mt-0.5">
              {isCompleted
                ? `Completed ${quiz.dateTaken ?? quiz.dueDate}`
                : isOverdue
                ? "Submission closed"
                : "AEST timezone"}
            </p>
          </div>
        </div>

        {/* Assessment Instructions Section */}
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 space-y-4">
          <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            Assessment Instructions &amp; Policies
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-gray-600">
            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">1</span>
              <span><strong>Timed Attempt:</strong> Once you click "Start Quiz", the {quiz.timeLimit ?? "30 Mins"} timer begins immediately and cannot be paused or reset.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">2</span>
              <span><strong>Free Navigation:</strong> You can navigate between questions using "Previous", "Next", or jump directly using the Question Palette.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">3</span>
              <span><strong>Change Answers:</strong> You may modify your selections at any time before clicking the final "Submit Quiz" button.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">4</span>
              <span><strong>Auto-Grading:</strong> Submitting will automatically grade your attempt, record your score, and provide detailed question review feedback.</span>
            </li>
          </ul>

          <div className="pt-3 border-t border-gray-200 flex items-center gap-2 text-xs text-gray-500">
            <IconAlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
            <span>Academic Integrity: All answers must be your own work without unauthorized collaboration.</span>
          </div>
        </div>

        {/* Action Button Area */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-100">
          <div>
            {canStart && (
              <p className="text-xs text-gray-500">
                Ready to begin? Ensure you have an uninterrupted {quiz.timeLimit ?? "30-minute"} window.
              </p>
            )}
            {isCompleted && (
              <p className="text-xs text-green-700 font-medium">
                You have completed this quiz with score <strong>{quiz.score}</strong> ({quiz.percentage ?? "Passed"}).
              </p>
            )}
            {isLocked && (
              <p className="text-xs text-gray-500">
                This assessment is scheduled and will automatically open on <strong>{quiz.availableDate ?? quiz.dueDate}</strong>.
              </p>
            )}
            {isOverdue && (
              <p className="text-xs text-red-600 font-medium">
                The deadline for this assessment passed on <strong>{quiz.dueDate}</strong>. Submissions are no longer accepted.
              </p>
            )}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {canStart && (
              <button
                onClick={onStartQuiz}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white shadow-md hover:shadow-lg hover:opacity-95 transition-all"
                style={{ background: "#1a3a9e" }}
              >
                <IconPlay className="w-4 h-4" />
                Start Quiz Now
              </button>
            )}

            {isCompleted && (
              <button
                onClick={onReviewAnswers}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white shadow-md hover:shadow-lg hover:opacity-95 transition-all bg-emerald-600 hover:bg-emerald-700"
              >
                <IconCheckCircle className="w-4 h-4" />
                Review Answers &amp; Results
              </button>
            )}

            {isLocked && (
              <button
                disabled
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-gray-400 bg-gray-100 border border-gray-200 cursor-not-allowed"
              >
                <IconLock className="w-4 h-4" />
                Quiz Locked
              </button>
            )}

            {isOverdue && (
              <button
                disabled
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-red-400 bg-red-50 border border-red-200 cursor-not-allowed"
              >
                <IconXCircle className="w-4 h-4" />
                Submission Window Closed
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Quiz Attempt View ────────────────────────────────────────────────────────
function QuizAttemptView({
  quiz,
  group,
  questions,
  onCancel,
  onSubmit,
}: {
  quiz: QuizItem;
  group: QuizCourseGroup;
  questions: QuizQuestion[];
  onCancel: () => void;
  onSubmit: (userAnswers: Record<number, number>) => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);

  const initialSeconds = useMemo(() => {
    const raw = quiz.timeLimit ?? "30";
    const num = parseInt(raw, 10);
    return isNaN(num) ? 1800 : num * 60;
  }, [quiz.timeLimit]);

  const [timeLeft, setTimeLeft] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onSubmit(userAnswers);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [userAnswers, onSubmit]);

  const formatTimer = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const answeredCount = Object.keys(userAnswers).length;
  const totalCount = questions.length;
  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === totalCount - 1;

  const handleSelectOption = (optionIndex: number) => {
    setUserAnswers((prev) => ({ ...prev, [currentIndex]: optionIndex }));
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-100 flex flex-col">
      {/* Sticky Top Header */}
      <div className="sticky top-16 z-30 bg-white border-b border-gray-200 shadow-sm px-6 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0"
              style={{ background: group.iconColor }}
            >
              {group.code.slice(0, 3)}
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900 leading-none">{quiz.name}</p>
              <p className="text-xs text-gray-500 mt-0.5">{group.code} · Question {currentIndex + 1} of {totalCount}</p>
            </div>
          </div>

          {/* Live Countdown Timer */}
          <div className="flex items-center gap-3">
            <div
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-colors ${
                timeLeft <= 60
                  ? "bg-red-50 text-red-700 border-red-300 animate-pulse"
                  : timeLeft <= 300
                  ? "bg-amber-50 text-amber-700 border-amber-300"
                  : "bg-blue-50 text-blue-700 border-blue-200"
              }`}
            >
              <IconClock className="w-4 h-4 shrink-0" />
              <span>Time Left: {formatTimer(timeLeft)}</span>
            </div>

            <button
              onClick={() => setShowExitModal(true)}
              className="px-3 py-1.5 text-xs font-semibold text-gray-500 hover:text-red-600 bg-gray-50 hover:bg-red-50 rounded-lg border border-gray-200 transition-colors"
            >
              Exit
            </button>

            <button
              onClick={() => setShowSubmitModal(true)}
              className="px-4 py-1.5 text-xs font-bold text-white rounded-lg shadow-sm hover:opacity-95 transition-all"
              style={{ background: "#1a3a9e" }}
            >
              Submit Quiz
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-100 h-1 mt-3 rounded-full overflow-hidden">
          <div
            className="h-full transition-all duration-300 rounded-full"
            style={{
              width: `${Math.round(((currentIndex + 1) / totalCount) * 100)}%`,
              background: "#1a3a9e",
            }}
          />
        </div>
      </div>

      {/* Main Attempt Body */}
      <div className="max-w-7xl mx-auto w-full p-6 flex-1 flex flex-col lg:flex-row gap-6">
        {/* Left / Center: Active Question Card */}
        <div className="flex-1 space-y-6">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between text-xs text-gray-500 pb-4 border-b border-gray-100">
              <span className="font-bold uppercase tracking-wider text-blue-700">
                Question {currentIndex + 1} of {totalCount}
              </span>
              <span className="font-semibold px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600">
                1 Point · Single Answer
              </span>
            </div>

            {/* Question Text */}
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
              {currentQuestion.text}
            </h2>

            {currentQuestion.codeSnippet && (
              <pre className="p-4 rounded-xl bg-gray-900 text-gray-100 font-mono text-xs overflow-x-auto">
                <code>{currentQuestion.codeSnippet}</code>
              </pre>
            )}

            {/* Multiple Choice Options */}
            <div className="space-y-3 pt-2">
              {currentQuestion.options.map((optionText, optIdx) => {
                const isSelected = userAnswers[currentIndex] === optIdx;
                const letter = String.fromCharCode(65 + optIdx);
                return (
                  <button
                    key={optIdx}
                    type="button"
                    onClick={() => handleSelectOption(optIdx)}
                    className={`w-full text-left p-4 rounded-xl transition-all flex items-start gap-3.5 border ${
                      isSelected
                        ? "border-blue-600 bg-blue-50/70 shadow-sm text-blue-950"
                        : "border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 text-gray-800"
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                        isSelected
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {letter}
                    </div>
                    <span className="text-sm font-medium flex-1 pt-0.5 leading-relaxed">
                      {optionText}
                    </span>
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isSelected
                          ? "border-blue-600 bg-blue-600 text-white"
                          : "border-gray-300 bg-white"
                      }`}
                    >
                      {isSelected && <span className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation Controls Bar */}
          <div className="flex items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
            <button
              onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                currentIndex === 0
                  ? "bg-gray-50 text-gray-300 border-gray-200 cursor-not-allowed"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-sm"
              }`}
            >
              <IconChevronLeft className="w-4 h-4" />
              Previous
            </button>

            <div className="text-xs text-gray-500 font-medium text-center">
              <span>{answeredCount} of {totalCount} Answered</span>
              {userAnswers[currentIndex] !== undefined ? (
                <span className="text-green-600 font-semibold ml-2">✓ Saved</span>
              ) : (
                <span className="text-gray-400 ml-2">○ Unanswered</span>
              )}
            </div>

            {isLastQuestion ? (
              <button
                onClick={() => setShowSubmitModal(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white shadow-md hover:shadow-lg transition-all"
                style={{ background: "#1a3a9e" }}
              >
                <IconCheck className="w-4 h-4" />
                Submit Quiz
              </button>
            ) : (
              <button
                onClick={() => setCurrentIndex((prev) => Math.min(totalCount - 1, prev + 1))}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold text-white shadow-md hover:shadow-lg transition-all"
                style={{ background: "#1a3a9e" }}
              >
                Next
                <IconChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Right Sidebar: Question Palette */}
        <div className="w-full lg:w-80 shrink-0 space-y-4">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-600">Question Navigator</h3>
              <span className="text-xs font-bold text-blue-700">{answeredCount}/{totalCount} Completed</span>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {questions.map((q, idx) => {
                const isAnswered = userAnswers[idx] !== undefined;
                const isCurrent = idx === currentIndex;
                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-10 rounded-xl text-xs font-bold transition-all flex items-center justify-center ${
                      isCurrent
                        ? "ring-2 ring-blue-600 ring-offset-2 bg-blue-600 text-white shadow-sm"
                        : isAnswered
                        ? "bg-blue-100 text-blue-800 hover:bg-blue-200"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-gray-100 space-y-1.5 text-[11px] text-gray-500">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-blue-600 shrink-0" />
                <span>Current Question</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-blue-100 border border-blue-200 shrink-0" />
                <span>Answered</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-gray-100 border border-gray-200 shrink-0" />
                <span>Unanswered</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Confirmation Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-gray-200 space-y-4 animate-fade-in">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <IconClipboardList className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Ready to Submit Quiz?</h3>
              <p className="text-xs text-gray-500 mt-1">
                You have answered <strong>{answeredCount}</strong> of <strong>{totalCount}</strong> questions.
              </p>
            </div>

            {answeredCount < totalCount && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-start gap-2 text-xs text-amber-800">
                <IconAlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  Warning: You have <strong>{totalCount - answeredCount}</strong> unanswered question(s). Unanswered questions will receive 0 marks.
                </span>
              </div>
            )}

            <p className="text-xs text-gray-600">
              Once submitted, your responses will be scored immediately and you cannot return to edit your attempt.
            </p>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-gray-600 hover:bg-gray-100 transition-colors"
              >
                Return to Quiz
              </button>
              <button
                onClick={() => {
                  setShowSubmitModal(false);
                  onSubmit(userAnswers);
                }}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-white shadow-md hover:opacity-95 transition-all"
                style={{ background: "#1a3a9e" }}
              >
                Confirm &amp; Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Exit Confirmation Modal */}
      {showExitModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-gray-200 space-y-4 animate-fade-in">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
              <IconAlertCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Exit Quiz Attempt?</h3>
              <p className="text-xs text-gray-500 mt-1">
                Exiting will cancel this attempt and your answers will not be saved.
              </p>
            </div>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setShowExitModal(false)}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-gray-600 hover:bg-gray-100 transition-colors"
              >
                Stay in Quiz
              </button>
              <button
                onClick={onCancel}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-700 shadow-md transition-all"
              >
                Exit Without Saving
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Quiz Results & Review View ───────────────────────────────────────────────
function QuizResultView({
  quiz,
  group,
  questions,
  userAnswers = {},
  onBackToQuizzes,
  onViewDetails,
}: {
  quiz: QuizItem;
  group: QuizCourseGroup;
  questions: QuizQuestion[];
  userAnswers?: Record<number, number>;
  onBackToQuizzes: () => void;
  onViewDetails: () => void;
}) {
  const [filterReview, setFilterReview] = useState<"all" | "correct" | "incorrect">("all");

  const effectiveAnswers = quiz.userAnswers ?? userAnswers;

  // Calculate score, correct, and missed consistently:
  // correct = score
  // missed = totalQuestions - correct
  const totalQuestions = quiz.questions ?? questions.length;
  let correctCount: number;

  if (quiz.score && quiz.score.includes("/")) {
    const parsed = parseInt(quiz.score.split("/")[0].trim(), 10);
    correctCount = !isNaN(parsed) ? parsed : 0;
  } else if (quiz.score && !isNaN(parseInt(quiz.score, 10))) {
    correctCount = parseInt(quiz.score, 10);
  } else {
    correctCount = 0;
    questions.forEach((q, idx) => {
      if (effectiveAnswers[idx] === q.correctIndex) {
        correctCount++;
      }
    });
  }

  const missedCount = Math.max(0, totalQuestions - correctCount);
  const scoreDisplay = quiz.score ?? `${correctCount}/${totalQuestions}`;

  let percentageDisplay: string;
  let numericPercentage: number;
  if (quiz.percentage) {
    percentageDisplay = quiz.percentage;
    numericPercentage = parseFloat(quiz.percentage.replace("%", "").trim()) || 0;
  } else {
    const calculatedPct = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 1000) / 10 : 0;
    percentageDisplay = `${calculatedPct.toFixed(1)}%`;
    numericPercentage = calculatedPct;
  }

  // Pass/Fail status calculated from percentage using the existing passing threshold (50%)
  const isPassed = numericPercentage >= 50;
  const resultStatus = isPassed ? "Passed" : "Failed";
  const statusBadgeStyle = isPassed
    ? "text-emerald-700 bg-emerald-50 border-emerald-200"
    : "text-red-700 bg-red-50 border-red-200";

  const feedbackMessage =
    quiz.feedback ??
    (numericPercentage >= 85
      ? "Outstanding achievement! You have demonstrated exceptional mastery of the subject matter covered in this assessment."
      : numericPercentage >= 70
      ? "Great work! You have a solid grasp of core principles, with only minor areas for review."
      : numericPercentage >= 50
      ? "Passing score. Please review the detailed question explanations below to strengthen your understanding."
      : "Further revision recommended. Consult the lecture notes and review the missed questions carefully.");

  const filteredQuestions = questions.filter((q, idx) => {
    const isCorrect = effectiveAnswers[idx] === q.correctIndex;
    if (filterReview === "correct") return isCorrect;
    if (filterReview === "incorrect") return !isCorrect;
    return true;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Breadcrumbs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <button onClick={onBackToQuizzes} className="hover:text-blue-700 font-medium transition-colors">
            Quizzes &amp; Exams
          </button>
          <span className="text-gray-300">/</span>
          <span className="text-gray-600 font-medium">{group.code}</span>
          <span className="text-gray-300">/</span>
          <button onClick={onViewDetails} className="hover:text-blue-700 font-medium transition-colors">
            {quiz.name}
          </button>
          <span className="text-gray-300">/</span>
          <span className="font-semibold text-gray-900">Results &amp; Review</span>
        </div>

        <button
          onClick={onBackToQuizzes}
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-600 hover:text-blue-700 bg-white px-3.5 py-2 rounded-xl border border-gray-200 shadow-sm transition-all hover:border-blue-300 self-start sm:self-auto"
        >
          <IconChevronLeft className="w-4 h-4" />
          <span>Back to Quizzes &amp; Exams</span>
        </button>
      </div>

      {/* Result Hero Banner */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-gray-100">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0 border border-amber-100 shadow-sm">
              <IconTrophy className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-md text-white" style={{ background: group.iconColor }}>
                  {group.code}
                </span>
                <span className="text-xs text-gray-500 font-medium">{group.title}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                {quiz.name} — Results
              </h1>
              <p className="text-xs text-gray-500 mt-0.5">
                Submitted on {quiz.dateTaken ?? "Aug 15, 2026"} · Attempt 1 of 1
              </p>
            </div>
          </div>

          <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border ${statusBadgeStyle}`}>
            {isPassed ? <IconCheckCircle className="w-3.5 h-3.5" /> : <IconXCircle className="w-3.5 h-3.5" />}
            {resultStatus}
          </span>
        </div>

        {/* Score Grid Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-blue-50/60 rounded-xl p-4 border border-blue-100 text-center">
            <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1">Final Score</p>
            <p className="text-3xl font-extrabold text-gray-900 leading-none">{scoreDisplay}</p>
            <p className="text-xs text-gray-500 mt-1">Marks achieved</p>
          </div>

          <div className="bg-green-50/60 rounded-xl p-4 border border-green-100 text-center">
            <p className="text-[10px] font-bold text-green-600 uppercase tracking-wider mb-1">Percentage</p>
            <p className="text-3xl font-extrabold text-green-700 leading-none">{percentageDisplay}</p>
            <p className="text-xs text-green-600 mt-1">Overall performance</p>
          </div>

          <div className="bg-purple-50/60 rounded-xl p-4 border border-purple-100 text-center">
            <p className="text-[10px] font-bold text-purple-600 uppercase tracking-wider mb-1">Questions</p>
            <p className="text-3xl font-extrabold text-gray-900 leading-none">{totalQuestions}</p>
            <p className="text-xs text-gray-500 mt-1">{correctCount} correct / {missedCount} missed</p>
          </div>

          <div className="bg-amber-50/60 rounded-xl p-4 border border-amber-100 text-center">
            <p className="text-[10px] font-bold text-amber-600 uppercase tracking-wider mb-1">Course Weight</p>
            <p className="text-3xl font-extrabold text-gray-900 leading-none">{quiz.weight ?? "5%"}</p>
            <p className="text-xs text-gray-500 mt-1">Applied to final grade</p>
          </div>
        </div>

        {/* Evaluator Feedback Card */}
        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 space-y-2">
          <p className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
            <IconCheck className="w-4 h-4 text-green-600" />
            Evaluator &amp; System Feedback
          </p>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed italic">
            "{feedbackMessage}"
          </p>
        </div>
      </div>

      {/* Question Review Section */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
          <div>
            <h2 className="text-base font-bold text-gray-900">Detailed Answer Review</h2>
            <p className="text-xs text-gray-500">Inspect your selected answers against the model answer key.</p>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setFilterReview("all")}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                filterReview === "all" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              All ({totalQuestions})
            </button>
            <button
              onClick={() => setFilterReview("correct")}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                filterReview === "correct" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Correct ({correctCount})
            </button>
            <button
              onClick={() => setFilterReview("incorrect")}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                filterReview === "incorrect" ? "bg-red-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Missed ({missedCount})
            </button>
          </div>
        </div>

        {/* Question Review Cards */}
        <div className="space-y-4">
          {filteredQuestions.map((q) => {
            const userPick = effectiveAnswers[q.questionNumber - 1];
            const isCorrect = userPick === q.correctIndex;
            return (
              <div key={q.id} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-4">
                <div className="flex items-start justify-between gap-3 pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-extrabold text-gray-500 uppercase tracking-wider">
                      Question {q.questionNumber}
                    </span>
                  </div>
                  {isCorrect ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-full border border-green-200">
                      <IconCheck className="w-3.5 h-3.5" />
                      Correct · 1/1 Mark
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded-full border border-red-200">
                      <IconXCircle className="w-3.5 h-3.5" />
                      Incorrect · 0/1 Mark
                    </span>
                  )}
                </div>

                <p className="text-sm sm:text-base font-bold text-gray-900 leading-snug">
                  {q.text}
                </p>

                {q.codeSnippet && (
                  <pre className="p-4 rounded-xl bg-gray-900 text-gray-100 font-mono text-xs overflow-x-auto">
                    <code>{q.codeSnippet}</code>
                  </pre>
                )}

                <div className="space-y-2 pt-2">
                  {q.options.map((optText, optIdx) => {
                    const isChosen = userPick === optIdx;
                    const isModelCorrect = optIdx === q.correctIndex;
                    const letter = String.fromCharCode(65 + optIdx);

                    let cardStyle = "border-gray-200 bg-white text-gray-700";
                    let badgeLabel: string | null = null;
                    let badgeStyle = "";

                    if (isModelCorrect && isChosen) {
                      cardStyle = "border-green-500 bg-green-50/70 text-green-950 font-medium";
                      badgeLabel = "Your Answer (Correct)";
                      badgeStyle = "bg-green-600 text-white";
                    } else if (!isModelCorrect && isChosen) {
                      cardStyle = "border-red-400 bg-red-50/70 text-red-950 font-medium";
                      badgeLabel = "Your Answer (Incorrect)";
                      badgeStyle = "bg-red-600 text-white";
                    } else if (isModelCorrect) {
                      cardStyle = "border-green-500 bg-green-50/40 text-green-900 font-medium";
                      badgeLabel = "Correct Answer";
                      badgeStyle = "bg-green-100 text-green-800 border border-green-300";
                    }

                    return (
                      <div
                        key={optIdx}
                        className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 text-xs sm:text-sm transition-all ${cardStyle}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs shrink-0 ${
                            isModelCorrect
                              ? "bg-green-600 text-white"
                              : isChosen
                              ? "bg-red-600 text-white"
                              : "bg-gray-100 text-gray-500"
                          }`}>
                            {letter}
                          </span>
                          <span className="leading-relaxed">{optText}</span>
                        </div>

                        {badgeLabel && (
                          <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold shrink-0 ${badgeStyle}`}>
                            {badgeLabel}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Explanation Box */}
                <div className="bg-blue-50/50 rounded-xl p-3.5 border border-blue-100 flex items-start gap-2.5 text-xs text-blue-900">
                  <IconAlertCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Explanation: </span>
                    <span className="leading-relaxed">{q.explanation}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-4 flex justify-center">
          <button
            onClick={onBackToQuizzes}
            className="px-6 py-3 rounded-xl text-xs font-bold text-white shadow-md hover:shadow-lg transition-all"
            style={{ background: "#1a3a9e" }}
          >
            Back to Quizzes &amp; Exams List
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Quiz Accordion Row ───────────────────────────────────────────────────────
function QuizAccordion({
  group,
  filter,
  defaultOpen = false,
  onSelectQuiz,
}: {
  group: QuizCourseGroup;
  filter: QuizFilter;
  defaultOpen?: boolean;
  onSelectQuiz: (quiz: QuizItem, group: QuizCourseGroup, mode?: "details" | "attempt" | "results") => void;
}) {
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
            <div
              key={q.id}
              onClick={() => onSelectQuiz(q, group, "details")}
              className="grid items-center gap-4 px-5 py-3.5 border-b border-gray-100 last:border-0 hover:bg-blue-50/40 cursor-pointer transition-colors"
              style={{ gridTemplateColumns: "1fr 2fr 130px 120px 110px" }}
            >
              <div>
                <p className="text-sm font-semibold text-gray-800 hover:text-blue-700 transition-colors">{q.name}</p>
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
              <div>
                <QuizStatusBadge status={q.status} />
              </div>
              <div>
                {q.status === "open" ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectQuiz(q, group, "details");
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white shadow-sm hover:opacity-90 transition-all"
                    style={{ background: "#1a3a9e" }}
                  >
                    <IconPlay className="w-3 h-3" /> Start
                  </button>
                ) : q.status === "completed" ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectQuiz(q, group, "results");
                    }}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold text-green-700 bg-green-50 border border-green-200 hover:bg-green-100 transition-colors"
                  >
                    <IconCheck className="w-3 h-3" /> Review
                  </button>
                ) : q.status === "overdue" ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectQuiz(q, group, "details");
                    }}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold text-red-600 bg-red-50 border border-red-200 hover:bg-red-100 transition-colors"
                  >
                    <IconAlertCircle className="w-3 h-3" /> Overdue
                  </button>
                ) : (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectQuiz(q, group, "details");
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-gray-500 bg-gray-100 border border-gray-200 hover:bg-gray-200 transition-colors"
                  >
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

// ── Main QuizzesPage Component ───────────────────────────────────────────────
export function QuizzesPage({
  groups = quizCourseGroups,
  onUpdateQuiz,
}: {
  groups?: QuizCourseGroup[];
  onUpdateQuiz?: (courseCode: string, quizId: string, updates: Partial<QuizItem>) => void;
}) {
  const [filter, setFilter] = useState<QuizFilter>("all");
  const [courseFilter, setCourseFilter] = useState("all");
  const [sortBy, setSortBy] = useState<SortOption>("dueDate");
  const [courseOpen, setCourseOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  // View mode management: list, details, attempt, results
  const [viewMode, setViewMode] = useState<"list" | "details" | "attempt" | "results">("list");
  const [selectedQuizState, setSelectedQuizState] = useState<{
    quiz: QuizItem;
    group: QuizCourseGroup;
  } | null>(null);

  const filterTabs: { id: QuizFilter; label: string }[] = [
    { id: "all",       label: "All Quizzes" },
    { id: "upcoming",  label: "Upcoming" },
    { id: "completed", label: "Completed" },
    { id: "overdue",   label: "Overdue" },
  ];

  const handleSelectQuiz = (quiz: QuizItem, group: QuizCourseGroup, mode: "details" | "attempt" | "results" = "details") => {
    setSelectedQuizState({ quiz, group });
    setViewMode(mode);
  };

  const handleQuizSubmit = (userAnswers: Record<number, number>) => {
    if (!selectedQuizState) return;
    const { quiz, group } = selectedQuizState;
    const questions = getQuizQuestions(quiz);

    let correctCount = 0;
    questions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctIndex) {
        correctCount++;
      }
    });

    const total = questions.length;
    const scoreStr = `${correctCount}/${total}`;
    const pct = Math.round((correctCount / total) * 1000) / 10;
    const pctStr = `${pct}%`;

    let feedback = "";
    if (pct >= 85) {
      feedback = "Outstanding performance! You have demonstrated exceptional comprehension of all key assessment concepts and best practices.";
    } else if (pct >= 70) {
      feedback = "Great work! You have a solid grasp of core assessment principles, with only minor areas requiring review.";
    } else if (pct >= 50) {
      feedback = "Passing attempt. Review the detailed questions feedback and explanations below to strengthen your understanding.";
    } else {
      feedback = "Needs further revision. Consult the learning materials and attempt review notes to improve before the next assessment.";
    }

    const now = new Date();
    const dateStr = now.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });

    const updatedQuiz: QuizItem = {
      ...quiz,
      status: "completed",
      score: scoreStr,
      percentage: pctStr,
      dateTaken: dateStr,
      attemptsUsed: (quiz.attemptsUsed ?? 0) + 1,
      feedback,
      userAnswers,
    };

    onUpdateQuiz?.(group.code, quiz.id, updatedQuiz);
    setSelectedQuizState({ quiz: updatedQuiz, group });
    setViewMode("results");
  };

  // Dedicated View Switching
  if (selectedQuizState) {
    const { quiz, group } = selectedQuizState;
    const questions = getQuizQuestions(quiz);

    if (viewMode === "details") {
      return (
        <QuizDetailsView
          quiz={quiz}
          group={group}
          onBack={() => {
            setSelectedQuizState(null);
            setViewMode("list");
          }}
          onStartQuiz={() => setViewMode("attempt")}
          onReviewAnswers={() => setViewMode("results")}
        />
      );
    }

    if (viewMode === "attempt") {
      return (
        <QuizAttemptView
          quiz={quiz}
          group={group}
          questions={questions}
          onCancel={() => setViewMode("details")}
          onSubmit={handleQuizSubmit}
        />
      );
    }

    if (viewMode === "results") {
      return (
        <QuizResultView
          quiz={quiz}
          group={group}
          questions={questions}
          userAnswers={quiz.userAnswers}
          onBackToQuizzes={() => {
            setSelectedQuizState(null);
            setViewMode("list");
          }}
          onViewDetails={() => setViewMode("details")}
        />
      );
    }
  }

  const allQuizzes = groups.flatMap((g) => g.quizzes);
  const totalCount     = allQuizzes.length;
  const upcomingCount  = allQuizzes.filter((q) => q.status === "open" || q.status === "locked").length;
  const completedCount = allQuizzes.filter((q) => q.status === "completed").length;
  const overdueCount   = allQuizzes.filter((q) => q.status === "overdue").length;

  const visibleGroups = groups
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
          <QuizAccordion
            key={g.code}
            group={g}
            filter={filter}
            defaultOpen={i === 0}
            onSelectQuiz={handleSelectQuiz}
          />
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
  { name: "ICT101 Complete Python Lecture Notes & Guide", type: "PDF", size: "1.4 MB", date: "Nov 25, 2025", course: "ICT101" },
  { name: "ICT101 Final Exam Revision & Practice Solutions", type: "PDF", size: "820 KB", date: "Dec 01, 2025", course: "ICT101" },
  { name: "ICT102 Discrete Mathematics Theorems & Proofs Summary", type: "PDF", size: "1.8 MB", date: "Nov 20, 2025", course: "ICT102" },
  { name: "ICT102 Logic, Sets & Graph Theory Formula Sheet", type: "PDF", size: "430 KB", date: "Nov 24, 2025", course: "ICT102" },
];

const classRecordings = [
  { title: "Week 8 — AI Ethics & Bias in Machine Learning", course: "ICT126", date: "Aug 27, 2026", duration: "1h 52m" },
  { title: "Week 7 — REST APIs & Async JavaScript", course: "ICT272", date: "Aug 20, 2026", duration: "1h 47m" },
  { title: "Week 7 — Project Scoping and Stakeholder Analysis", course: "ICT301", date: "Aug 19, 2026", duration: "1h 58m" },
  { title: "Week 6 — Neural Networks Fundamentals", course: "ICT126", date: "Aug 13, 2026", duration: "1h 44m" },
  { title: "ICT101 Final Review — Python Programming & Algorithms", course: "ICT101", date: "Nov 28, 2025", duration: "1h 55m" },
  { title: "ICT102 Final Exam Prep — Proof Techniques & Graphs", course: "ICT102", date: "Nov 22, 2025", duration: "1h 50m" },
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
  { title: "ICT101 Python Archive — Solutions & Notebooks", desc: "Archived complete Python notebooks and starter code", tags: ["Python", "Jupyter", "Archived"], date: "Dec 05, 2025", url: "#" },
  { title: "ICT102 Mathematical Proofs & Graph Algorithms Code", desc: "Python implementations of graph algorithms (BFS/DFS, Dijkstra)", tags: ["Python", "Algorithms"], date: "Nov 26, 2025", url: "#" },
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

const learningMaterialsCourseMap: Record<string, string> = {
  ICT301: "ICT 301 Information Technology Project 1 IT Project",
  ICT272: "ICT 272 Web & Mobile App Development Web Development Mobile Development Frontend",
  ICT126: "ICT 126 Introduction to Artificial Intelligence AI Machine Learning",
  ICT101: "ICT 101 Introduction to Programming Python Programming Algorithms",
  ICT102: "ICT 102 Discrete Mathematics for IT Discrete Mathematics Math Logic Graphs",
};

function matchesMaterialSearch(searchWords: string[], targetText: string): boolean {
  if (searchWords.length === 0) return true;
  const lower = targetText.toLowerCase();
  return searchWords.every((word) => lower.includes(word));
}

function LearningMaterialsPage() {
  const [activeFilter, setActiveFilter] = useState<MaterialFilter>("all");
  const [search, setSearch] = useState("");

  const searchWords = useMemo(
    () => search.trim().toLowerCase().split(/\s+/).filter(Boolean),
    [search]
  );
  const isSearching = searchWords.length > 0;

  const filteredCourseMaterials = useMemo(() => {
    return courseMaterials.filter((m) => {
      const typeExtensions =
        m.type === "PowerPoint"
          ? "PPT PPTX presentation slides"
          : m.type === "Document"
          ? "DOC DOCX Word rubric"
          : "PDF";
      const searchable = `${m.name} ${m.course} ${learningMaterialsCourseMap[m.course] ?? ""} ${m.type} ${typeExtensions} Course Material Course Materials Handout Notes`;
      return matchesMaterialSearch(searchWords, searchable);
    });
  }, [searchWords]);

  const filteredAdditional = useMemo(() => {
    return additionalResources.filter((r) => {
      const typeDesc =
        r.source === "YouTube"
          ? "Video Tutorial Watch"
          : r.source === "Web Docs"
          ? "Documentation Docs Reference"
          : r.source === "Article"
          ? "Article Blog Read"
          : "Course Interactive Web";
      const courseHints = `${r.title.includes("Neural") ? "ICT126 Artificial Intelligence AI" : ""} ${
        r.title.includes("JavaScript") || r.title.includes("Web Design") ? "ICT272 Web Mobile Development" : ""
      } ${r.title.includes("Machine Learning") ? "ICT126 Artificial Intelligence AI" : ""}`;
      const searchable = `${r.title} ${r.source} ${r.desc} ${typeDesc} ${courseHints} Additional Resources Additional Resource`;
      return matchesMaterialSearch(searchWords, searchable);
    });
  }, [searchWords]);

  const filteredRecordings = useMemo(() => {
    return classRecordings.filter((r) => {
      const searchable = `${r.title} ${r.course} ${learningMaterialsCourseMap[r.course] ?? ""} Class Recording Class Recordings Lecture Video Recording Zoom session Watch MP4`;
      return matchesMaterialSearch(searchWords, searchable);
    });
  }, [searchWords]);

  const filteredCodeAndLab = useMemo(() => {
    return codeAndLabResources.filter((r) => {
      const tagsStr = r.tags.join(" ");
      const courseHints = `${r.title.includes("ICT301") ? learningMaterialsCourseMap.ICT301 : ""} ${
        r.title.includes("ICT272") ? learningMaterialsCourseMap.ICT272 : ""
      } ${r.title.includes("ICT101") ? learningMaterialsCourseMap.ICT101 : ""} ${
        r.title.includes("ICT102") ? learningMaterialsCourseMap.ICT102 : ""
      } ${r.title.includes("Perceptron") || r.title.includes("Regression") ? "ICT126 " + learningMaterialsCourseMap.ICT126 : ""}`;
      const searchable = `${r.title} ${r.desc} ${tagsStr} ${courseHints} Code & Lab Resources Code and Lab Resources Lab File GitHub Repo Repository Notebook Jupyter Code`;
      return matchesMaterialSearch(searchWords, searchable);
    });
  }, [searchWords]);

  const filteredRecent = useMemo(() => {
    return recentMaterials.filter((m) => {
      const matchFilter = activeFilter === "all" || m.type === activeFilter;
      const typeExtensions =
        m.typeLabel.toLowerCase().includes("recording")
          ? "Video Zoom MP4"
          : m.typeLabel.toLowerCase().includes("presentation")
          ? "PowerPoint PPT Slides"
          : m.typeLabel.toLowerCase().includes("lab")
          ? "Code Jupyter Python"
          : "";
      const searchable = `${m.name} ${m.course} ${learningMaterialsCourseMap[m.course] ?? ""} ${m.type} ${m.typeLabel} ${m.action} ${typeExtensions}`;
      const matchSearch = matchesMaterialSearch(searchWords, searchable);
      return matchFilter && matchSearch;
    });
  }, [searchWords, activeFilter]);

  const showCourseMaterials = activeFilter === "all" || activeFilter === "courseMaterials";
  const showRecordings = activeFilter === "all" || activeFilter === "recordings";
  const showAdditional = activeFilter === "all" || activeFilter === "additionalResources";
  const showCode = activeFilter === "all" || activeFilter === "codeAndLab";

  const showCourseMaterialsCard = showCourseMaterials && (!isSearching || filteredCourseMaterials.length > 0);
  const showAdditionalCard = showAdditional && (!isSearching || filteredAdditional.length > 0);
  const showRecordingsCard = showRecordings && (!isSearching || filteredRecordings.length > 0);
  const showCodeCard = showCode && (!isSearching || filteredCodeAndLab.length > 0);
  const showRecentSection = !isSearching || filteredRecent.length > 0;

  const visibleCategoriesMatchCount =
    (showCourseMaterials ? filteredCourseMaterials.length : 0) +
    (showAdditional ? filteredAdditional.length : 0) +
    (showRecordings ? filteredRecordings.length : 0) +
    (showCode ? filteredCodeAndLab.length : 0);

  const totalVisibleMatches = visibleCategoriesMatchCount + filteredRecent.length;

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

          {/* No materials found state */}
          {isSearching && totalVisibleMatches === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-12 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-3">
                <IconFolder />
              </div>
              <h3 className="text-base font-bold text-gray-900">No materials found</h3>
              <p className="text-xs text-gray-500 mt-1 max-w-md">
                No learning materials matched &quot;{search}&quot;{activeFilter !== "all" ? " in this category" : ""}. Try adjusting your search term or clearing the search.
              </p>
              <button
                onClick={() => setSearch("")}
                className="mt-4 px-4 py-2 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-xl border border-blue-100 transition-colors"
              >
                Clear search
              </button>
            </div>
          ) : (
            <>
              {/* Category cards */}
              {(showCourseMaterialsCard || showAdditionalCard || showRecordingsCard || showCodeCard) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  {/* ── 1. Course Materials ── */}
                  {showCourseMaterialsCard && (
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                      <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100" style={{ background: "#eff6ff" }}>
                        <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0">
                          <IconFilePdf className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-900">Course Materials</p>
                          <p className="text-xs text-gray-500">PDFs, slides, handouts &amp; documents</p>
                        </div>
                        <span className="ml-auto text-xs font-bold text-blue-700 bg-blue-100 px-2.5 py-1 rounded-full">
                          {filteredCourseMaterials.length} file{filteredCourseMaterials.length !== 1 ? "s" : ""}
                        </span>
                      </div>
                      <div className="divide-y divide-gray-100">
                        {filteredCourseMaterials.map((f, i) => (
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
                  {showAdditionalCard && (
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                      <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100" style={{ background: "#fff7ed" }}>
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0" style={{ background: "#f97316" }}>
                          <IconGlobe className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-900">Additional Resources</p>
                          <p className="text-xs text-gray-500">YouTube, articles, documentation &amp; websites</p>
                        </div>
                        <span className="ml-auto text-xs font-bold text-orange-700 bg-orange-100 px-2.5 py-1 rounded-full">
                          {filteredAdditional.length} link{filteredAdditional.length !== 1 ? "s" : ""}
                        </span>
                      </div>
                      <div className="divide-y divide-gray-100">
                        {filteredAdditional.map((r, i) => (
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
                  {showRecordingsCard && (
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                      <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100" style={{ background: "#eff6ff" }}>
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0" style={{ background: "#2563eb" }}>
                          <IconVideo className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-900">Class Recordings</p>
                          <p className="text-xs text-gray-500">Recorded lectures and Zoom sessions</p>
                        </div>
                        <span className="ml-auto text-xs font-bold text-blue-700 bg-blue-100 px-2.5 py-1 rounded-full">
                          {filteredRecordings.length} video{filteredRecordings.length !== 1 ? "s" : ""}
                        </span>
                      </div>
                      <div className="divide-y divide-gray-100">
                        {filteredRecordings.map((r, i) => (
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
                  {showCodeCard && (
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                      <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100" style={{ background: "#ecfdf5" }}>
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0" style={{ background: "#059669" }}>
                          <IconCode className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-900">Code &amp; Lab Resources</p>
                          <p className="text-xs text-gray-500">GitHub repos, lab files &amp; code examples</p>
                        </div>
                        <span className="ml-auto text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                          {filteredCodeAndLab.length} item{filteredCodeAndLab.length !== 1 ? "s" : ""}
                        </span>
                      </div>
                      <div className="divide-y divide-gray-100">
                        {filteredCodeAndLab.map((r, i) => (
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

                </div>
              )}

              {/* Recent Materials */}
              {showRecentSection && (
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                    <p className="text-[10px] font-bold text-blue-700 uppercase tracking-widest">Recent Materials</p>
                    <span className="text-xs text-gray-400">
                      {filteredRecent.length} item{filteredRecent.length !== 1 ? "s" : ""}
                    </span>
                  </div>

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
                </div>
              )}
            </>
          )}

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
            rows={[{ color: "text-blue-600", label: "Active", value: 3 }, { color: "text-green-600", label: "Completed", value: 2 }]} />
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
          <h2 className="text-base font-bold text-gray-800 mb-4">My Enrolled Courses (3/5)</h2>
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
                <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Completed Courses (2)</span>
              </div>
              <div className="p-4 space-y-2">
                {completedCourses.map((c) => (
                  <CompletedCourseRow key={c.code} course={c} onOpen={() => setOpenCourse(c)} />
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

// ── Student Search Catalog & Helper ──────────────────────────────────────────
function getCategoryIcon(cat: string) {
  switch (cat) {
    case "Course":
      return <IconBook />;
    case "Assignment":
      return <IconAssignment />;
    case "Quiz":
      return <IconQuiz />;
    case "Learning Material":
      return <IconFolder />;
    case "Grade":
      return <IconGrades />;
    case "Calendar":
      return <IconCalendar />;
    case "Announcement":
      return <IconAnnouncement />;
    case "Message":
      return <IconMessage />;
    case "Profile & Settings":
      return <IconProfile />;
    default:
      return <IconDashboard />;
  }
}

function buildStudentSearchCatalog(): StudentSearchItem[] {
  const items: StudentSearchItem[] = [
    // ── Pages ──
    {
      id: "page-dashboard",
      category: "Page",
      title: "Student Dashboard",
      subtitle: "Overview & summary",
      description: "Overview of your courses, notifications, upcoming deadlines, and learning progress.",
      badgeBg: "bg-sky-50",
      badgeText: "text-sky-700",
      nav: "dashboard",
      navLabel: "Dashboard",
      keywords: ["home", "overview", "stats", "deadlines"],
    },
    {
      id: "page-courses",
      category: "Page",
      title: "My Courses",
      subtitle: "Enrolled & completed courses",
      description: "View all active enrolled subjects, course progress, and academic unit history.",
      badgeBg: "bg-blue-50",
      badgeText: "text-blue-700",
      nav: "courses",
      navLabel: "Courses",
      keywords: ["classes", "subjects", "units", "enrollment"],
    },
    {
      id: "page-assignments",
      category: "Page",
      title: "Assignments",
      subtitle: "Course tasks & submissions",
      description: "Track assignment due dates, submission statuses, and rubric requirements.",
      badgeBg: "bg-purple-50",
      badgeText: "text-purple-700",
      nav: "assignments",
      navLabel: "Assignments",
      keywords: ["tasks", "homework", "assessments", "submissions", "due soon"],
    },
    {
      id: "page-quizzes",
      category: "Page",
      title: "Quizzes & Exams",
      subtitle: "Tests, quizzes & exams",
      description: "Take upcoming quizzes, review completed test scores, and prepare for exams.",
      badgeBg: "bg-amber-50",
      badgeText: "text-amber-700",
      nav: "quizzes",
      navLabel: "Quizzes",
      keywords: ["tests", "exams", "midterms", "assessments"],
    },
    {
      id: "page-materials",
      category: "Page",
      title: "Learning Materials",
      subtitle: "Slides, recordings & labs",
      description: "Access lecture slides, Zoom recordings, lab files, code repositories, and documentation.",
      badgeBg: "bg-emerald-50",
      badgeText: "text-emerald-700",
      nav: "materials",
      navLabel: "Materials",
      keywords: ["slides", "recordings", "videos", "lectures", "pdf", "labs", "code"],
    },
    {
      id: "page-grades",
      category: "Page",
      title: "Grades & Results",
      subtitle: "GPA, transcript & scores",
      description: "Check your academic performance, semester GPA, assessment marks, and course grades.",
      badgeBg: "bg-teal-50",
      badgeText: "text-teal-700",
      nav: "grades",
      navLabel: "Grades",
      keywords: ["marks", "results", "scores", "gpa", "transcript", "performance"],
    },
    {
      id: "page-calendar",
      category: "Page",
      title: "Calendar & Schedule",
      subtitle: "Timetable, classes & deadlines",
      description: "View monthly calendar, scheduled lectures, tutorials, assignment due dates, and exam periods.",
      badgeBg: "bg-orange-50",
      badgeText: "text-orange-700",
      nav: "calendar",
      navLabel: "Calendar",
      keywords: ["schedule", "timetable", "events", "dates", "deadlines", "classes"],
    },
    {
      id: "page-announcements",
      category: "Page",
      title: "Announcements",
      subtitle: "University & course notices",
      description: "Stay updated with important notices, assessment reminders, and campus announcements.",
      badgeBg: "bg-rose-50",
      badgeText: "text-rose-700",
      nav: "announcements",
      navLabel: "Announcements",
      keywords: ["notices", "news", "updates", "alerts", "important"],
    },
    {
      id: "page-messages",
      category: "Page",
      title: "Messages",
      subtitle: "Inbox & direct communications",
      description: "Direct messaging with lecturers, course coordinators, and university student support services.",
      badgeBg: "bg-indigo-50",
      badgeText: "text-indigo-700",
      nav: "messages",
      navLabel: "Messages",
      keywords: ["inbox", "chat", "email", "communication", "lecturers"],
    },
    {
      id: "page-profile",
      category: "Page",
      title: "My Profile",
      subtitle: "Student details & program",
      description: "View and manage personal details, student ID, program, email, and contact info.",
      badgeBg: "bg-slate-100",
      badgeText: "text-slate-700",
      nav: "profile",
      navLabel: "Profile",
      keywords: ["student id", "personal", "contact", "name", "email", "program"],
    },
    {
      id: "page-settings",
      category: "Page",
      title: "Settings",
      subtitle: "Account & preferences",
      description: "Manage password, notification preferences, system language, timezone, and two-factor auth.",
      badgeBg: "bg-slate-100",
      badgeText: "text-slate-700",
      nav: "settings",
      navLabel: "Settings",
      keywords: ["password", "notifications", "security", "language", "timezone", "2fa"],
    },

    // ── Active Courses ──
    ...activeCourses.map((c) => ({
      id: `course-${c.code}`,
      category: "Course" as const,
      title: `${c.code} – ${c.title}`,
      subtitle: `${c.term} · ${c.school} · ${c.pct}% complete`,
      description: `Active enrolled course in ${c.school}. Term ${c.term}. Progress is currently ${c.pct}%.`,
      badgeBg: "bg-blue-50",
      badgeText: "text-blue-700",
      nav: "courses",
      navLabel: "Courses",
      course: c,
      keywords: [c.code, c.title, c.school, c.term, "active", "course", "subject"],
    })),

    // ── Completed Courses ──
    ...completedCourses.map((c) => ({
      id: `course-completed-${c.code}`,
      category: "Course" as const,
      title: `${c.code} – ${c.title}`,
      subtitle: `${c.term} (${c.year}) · Completed Course`,
      description: `Completed academic unit from ${c.year} (${c.term}). Included in student academic history.`,
      badgeBg: "bg-blue-50",
      badgeText: "text-blue-700",
      nav: "courses",
      navLabel: "Courses",
      course: c,
      keywords: [c.code, c.title, c.term, c.year ?? "", "completed", "course", "history"],
    })),

    // ── Assignments ──
    ...courseGroups.flatMap((g) =>
      g.assignments.map((a) => ({
        id: `assign-${a.id}`,
        category: "Assignment" as const,
        title: a.name,
        subtitle: `${g.code} (${g.title}) · Due ${a.dueDate} · ${assignmentStatuses[a.status]?.label ?? a.status}`,
        description: `${a.description} Due on ${a.dueDate} for ${g.code} ${g.title}.`,
        badgeBg: "bg-purple-50",
        badgeText: "text-purple-700",
        nav: "assignments",
        navLabel: "Assignments",
        keywords: [a.name, g.code, g.title, a.dueDate, a.status, "assignment", "task", a.description],
      }))
    ),

    // ── Quizzes ──
    ...quizCourseGroups.flatMap((g) =>
      g.quizzes.map((q) => ({
        id: `quiz-${q.id}`,
        category: "Quiz" as const,
        title: q.name,
        subtitle: `${g.code} (${g.title}) · Due ${q.dueDate} · ${quizStatusStyles[q.status]?.label ?? q.status}`,
        description: `${q.description}${q.timeLimit ? ` Time limit: ${q.timeLimit}.` : ""}${q.score ? ` Score: ${q.score}.` : ""}${q.weight ? ` Weight: ${q.weight}.` : ""}`,
        badgeBg: "bg-amber-50",
        badgeText: "text-amber-700",
        nav: "quizzes",
        navLabel: "Quizzes",
        keywords: [q.name, g.code, g.title, q.dueDate, q.status, "quiz", "exam", "test", q.description],
      }))
    ),

    // ── Learning Materials ──
    ...recentMaterials.map((m) => ({
      id: `mat-rec-${m.name}`,
      category: "Learning Material" as const,
      title: m.name,
      subtitle: `${m.course} · ${m.typeLabel} · ${m.date}`,
      description: `Course material and resource for ${m.course}. Type: ${m.typeLabel}. Date: ${m.date}.`,
      badgeBg: "bg-emerald-50",
      badgeText: "text-emerald-700",
      nav: "materials",
      navLabel: "Materials",
      keywords: [m.name, m.course, m.typeLabel, m.date, "material", "slide", "recording", "resource"],
    })),
    ...courseMaterials.map((m) => ({
      id: `mat-doc-${m.name}`,
      category: "Learning Material" as const,
      title: m.name,
      subtitle: `${m.course} · ${m.type} (${m.size}) · ${m.date}`,
      description: `Course file: ${m.name} (${m.type}, ${m.size}) for ${m.course}. Added ${m.date}.`,
      badgeBg: "bg-emerald-50",
      badgeText: "text-emerald-700",
      nav: "materials",
      navLabel: "Materials",
      keywords: [m.name, m.course, m.type, m.date, "document", "pdf", "file"],
    })),
    ...classRecordings.map((r) => ({
      id: `mat-video-${r.title}`,
      category: "Learning Material" as const,
      title: r.title,
      subtitle: `${r.course} · Class Recording (${r.duration}) · ${r.date}`,
      description: `Recorded lecture: ${r.title} for ${r.course} (Duration: ${r.duration}). Recorded ${r.date}.`,
      badgeBg: "bg-emerald-50",
      badgeText: "text-emerald-700",
      nav: "materials",
      navLabel: "Materials",
      keywords: [r.title, r.course, r.duration, r.date, "recording", "video", "lecture", "zoom"],
    })),

    // ── Grades ──
    {
      id: "grade-gpa-summary",
      category: "Grade" as const,
      title: "Academic Transcript & GPA Summary",
      subtitle: "Semester T226 · GPA: 3.72 · Overall Average: 81.4%",
      description: "Current GPA is 3.72. Overall average: 81.4%. 20 completed courses, 96 credits earned of 120 required.",
      badgeBg: "bg-teal-50",
      badgeText: "text-teal-700",
      nav: "grades",
      navLabel: "Grades",
      keywords: ["gpa", "overall average", "credits", "transcript", "results", "marks"],
    },
    ...gradeRows.map((g) => ({
      id: `grade-item-${g.code}-${g.assessment}`,
      category: "Grade" as const,
      title: `${g.code} ${g.assessment} (${g.course})`,
      subtitle: `Status: ${g.status} · Score: ${g.status === "Released" ? `${g.score}/${g.max} (Grade ${g.grade})` : "Pending"}`,
      description: `Assessment mark: ${g.assessment} for ${g.course} (${g.code}). Status: ${g.status}. Score: ${g.score}/${g.max}.`,
      badgeBg: "bg-teal-50",
      badgeText: "text-teal-700",
      nav: "grades",
      navLabel: "Grades",
      keywords: [g.code, g.course, g.assessment, g.grade, g.status, "grade", "score", "mark"],
    })),

    // ── Calendar Events ──
    ...calEvents.map((e) => ({
      id: `cal-event-${e.day}-${e.label}`,
      category: "Calendar" as const,
      title: `${e.label} (September ${e.day})`,
      subtitle: `September ${e.day}, 2026 · Academic Calendar`,
      description: `Scheduled calendar date: ${e.label} on September ${e.day}, 2026.`,
      badgeBg: "bg-orange-50",
      badgeText: "text-orange-700",
      nav: "calendar",
      navLabel: "Calendar",
      keywords: [e.label, `September ${e.day}`, "calendar", "event", "schedule", "deadline", "class"],
    })),

    // ── Announcements ──
    ...announcements.map((a) => ({
      id: `ann-${a.id}`,
      category: "Announcement" as const,
      title: a.title,
      subtitle: `${a.category}${a.course ? ` · ${a.course}` : ""} · ${a.date}${a.important ? " · Important" : ""}`,
      description: a.description,
      badgeBg: "bg-rose-50",
      badgeText: "text-rose-700",
      nav: "announcements",
      navLabel: "Announcements",
      keywords: [a.title, a.category, a.course ?? "", a.date, a.description, "announcement", "notice", "news"],
    })),

    // ── Messages ──
    ...conversations.map((c) => ({
      id: `msg-${c.id}`,
      category: "Message" as const,
      title: `${c.sender} (${c.role})`,
      subtitle: `Last message: "${c.lastMsg}" · ${c.time}`,
      description: `Conversation with ${c.sender}, ${c.role}. Latest: "${c.lastMsg}". Messages include: ${c.messages.map((m) => m.text).join(" ")}`,
      badgeBg: "bg-indigo-50",
      badgeText: "text-indigo-700",
      nav: "messages",
      navLabel: "Messages",
      keywords: [c.sender, c.role, c.lastMsg, ...c.messages.map((m) => m.text), "message", "chat", "inbox", "lecturer"],
    })),

    // ── Profile & Settings ──
    {
      id: "profile-student-info",
      category: "Profile & Settings" as const,
      title: "Student Profile — Richard Maceda Vitug",
      subtitle: "S00123456 · Bachelor of Information Technology",
      description: "Student ID: S00123456. Email: richard.vitug@student.edu.au. Phone: +61 412 345 678. Status: Enrolled T226.",
      badgeBg: "bg-slate-100",
      badgeText: "text-slate-700",
      nav: "profile",
      navLabel: "Profile",
      keywords: ["richard", "vitug", "profile", "student id", "s00123456", "email", "phone", "enrolled"],
    },
    {
      id: "settings-change-password",
      category: "Profile & Settings" as const,
      title: "Change Password & Security",
      subtitle: "Account Settings · Security",
      description: "Update your login password and manage student account credentials.",
      badgeBg: "bg-slate-100",
      badgeText: "text-slate-700",
      nav: "settings",
      navLabel: "Settings",
      keywords: ["password", "change password", "security", "credentials", "login"],
    },
    {
      id: "settings-notification-prefs",
      category: "Profile & Settings" as const,
      title: "Notification Preferences",
      subtitle: "Account Settings · Alerts",
      description: "Configure notifications for assignment deadlines, quizzes, announcements, and direct messages.",
      badgeBg: "bg-slate-100",
      badgeText: "text-slate-700",
      nav: "settings",
      navLabel: "Settings",
      keywords: ["notifications", "alerts", "assignment alerts", "quiz alerts", "announcement alerts"],
    },
    {
      id: "settings-language-timezone",
      category: "Profile & Settings" as const,
      title: "Language and Timezone Preferences",
      subtitle: "Account Settings · Preferences",
      description: "Display language (English) and system timezone (Australia/Sydney AEST, UTC+10).",
      badgeBg: "bg-slate-100",
      badgeText: "text-slate-700",
      nav: "settings",
      navLabel: "Settings",
      keywords: ["language", "timezone", "sydney", "english", "preferences"],
    },
    {
      id: "settings-2fa",
      category: "Profile & Settings" as const,
      title: "Two-Factor Authentication (2FA)",
      subtitle: "Account Settings · Security",
      description: "Add an extra layer of security to your student account with two-factor verification.",
      badgeBg: "bg-slate-100",
      badgeText: "text-slate-700",
      nav: "settings",
      navLabel: "Settings",
      keywords: ["2fa", "two-factor", "authentication", "security", "phone"],
    },
  ];

  return items;
}

// ── Search Results Page ───────────────────────────────────────────────────────
function SearchResultsPage({
  query,
  results,
  onNavigate,
  onQuickSearch,
}: {
  query: string;
  results: StudentSearchItem[];
  onNavigate: (nav: string, course?: ActiveCourse) => void;
  onQuickSearch: (q: string) => void;
}) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const cats = new Set<string>();
    results.forEach((r) => cats.add(r.category));
    return ["All", ...Array.from(cats)];
  }, [results]);

  const filtered = useMemo(() => {
    if (selectedCategory === "All") return results;
    return results.filter((r) => r.category === selectedCategory);
  }, [results, selectedCategory]);

  const quickSuggestions = [
    "ICT272",
    "ICT301",
    "AI",
    "Assignment",
    "Quiz",
    "Materials",
    "Grades",
    "Calendar",
    "Announcement",
    "Dr. Mitchell",
    "Password",
  ];

  return (
    <div className="p-7">
      {/* Top breadcrumb & heading */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
          <span>Student Portal</span>
          <span>/</span>
          <span className="text-gray-600">Search Results</span>
        </div>
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {query ? (
                <>Search Results for <span className="text-[#1a3a9e]">"{query}"</span></>
              ) : (
                "Search Student Portal"
              )}
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Found {results.length} item{results.length === 1 ? "" : "s"} across courses, assignments, quizzes, materials, grades, calendar, announcements, messages, and settings
            </p>
          </div>
          <button
            onClick={() => onNavigate("dashboard")}
            className="px-4 py-2 text-xs font-semibold rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 transition-colors shadow-sm cursor-pointer"
          >
            ← Back to Dashboard
          </button>
        </div>
      </div>

      {/* Filter tabs */}
      {results.length > 0 && categories.length > 1 && (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm px-4 mb-6">
          <div className="flex items-center gap-2 overflow-x-auto py-2.5">
            {categories.map((cat) => {
              const count = cat === "All" ? results.length : results.filter((r) => r.category === cat).length;
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? "bg-[#1a3a9e] text-white shadow-sm"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? "bg-blue-800 text-white" : "bg-gray-200 text-gray-600"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Results list or empty state */}
      {filtered.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-12 text-center">
          <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4">
            <IconSearch />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">
            {query ? `No matching results for "${query}"` : "Enter a search term above"}
          </h3>
          <p className="text-sm text-gray-500 max-w-md mx-auto mb-6">
            Try searching for course codes, assignment titles, quiz names, lecture recordings, grades, lecturers, or settings.
          </p>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Popular searches</p>
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-lg mx-auto">
              {quickSuggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => onQuickSearch(s)}
                  className="px-3 py-1.5 bg-gray-100 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 text-xs font-medium text-gray-700 rounded-xl border border-gray-200 transition cursor-pointer"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate(item.nav, item.course)}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 hover:shadow-md hover:border-blue-200 transition-all cursor-pointer flex items-start justify-between gap-4 group"
            >
              <div className="flex items-start gap-4 min-w-0">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${item.badgeBg} ${item.badgeText}`}>
                  {getCategoryIcon(item.category)}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider ${item.badgeBg} ${item.badgeText}`}>
                      {item.category}
                    </span>
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  {item.subtitle && (
                    <p className="text-xs font-semibold text-gray-500">
                      {item.subtitle}
                    </p>
                  )}
                  <p className="text-sm text-gray-600 mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="shrink-0 self-center">
                <span className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#1a3a9e] group-hover:bg-[#102d80] transition-colors shadow-sm inline-flex items-center gap-1.5 whitespace-nowrap">
                  Open {item.navLabel} →
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Course Overview Page ──────────────────────────────────────────────────────

const IconUser = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
  </svg>
);

const IconPaperclip = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
  </svg>
);

interface CourseZoomSession {
  id: string;
  type: "Lecture" | "Tutorial/Class";
  title: string;
  day: string;
  date: string;
  startTime: string;
  endTime: string;
  duration: string;
  instructor: string;
  instructorRole: string;
  location: string;
  meetingId: string;
  passcode: string;
  isLive?: boolean;
  topic?: string;
}

const courseZoomScheduleMap: Record<string, CourseZoomSession[]> = {
  ICT301: [
    {
      id: "ict301-lecture",
      type: "Lecture",
      title: "ICT301 Weekly Lecture",
      day: "Monday",
      date: "Sep 14, 2026",
      startTime: "10:00 AM",
      endTime: "12:00 PM",
      duration: "2-hour session",
      instructor: "Dr. Sarah Mitchell",
      instructorRole: "Course Lecturer",
      location: "Online · Zoom Room A",
      meetingId: "849 2011 3012",
      passcode: "ICT301",
      isLive: true,
      topic: "System Architecture & Agile Sprint 2 Review",
    },
    {
      id: "ict301-tutorial",
      type: "Tutorial/Class",
      title: "ICT301 Tutorial / Workshop",
      day: "Thursday",
      date: "Sep 17, 2026",
      startTime: "10:00 AM",
      endTime: "12:00 PM",
      duration: "2-hour session",
      instructor: "James Thornton",
      instructorRole: "Senior Lab Tutor",
      location: "Room IT-201 & Zoom",
      meetingId: "849 2011 3013",
      passcode: "ICT301",
      isLive: false,
      topic: "Jira Sprint Tracking & Automated CI/CD Setup",
    },
  ],
  ICT272: [
    {
      id: "ict272-lecture",
      type: "Lecture",
      title: "ICT272 Weekly Lecture",
      day: "Tuesday",
      date: "Sep 15, 2026",
      startTime: "10:00 AM",
      endTime: "12:00 PM",
      duration: "2-hour session",
      instructor: "Prof. David Chen",
      instructorRole: "Course Lecturer",
      location: "Online · Zoom Room B",
      meetingId: "752 4892 2721",
      passcode: "ICT272",
      isLive: false,
      topic: "Modern Web Frameworks & State Architecture",
    },
    {
      id: "ict272-tutorial",
      type: "Tutorial/Class",
      title: "ICT272 Tutorial / Practical Lab",
      day: "Thursday",
      date: "Sep 17, 2026",
      startTime: "02:00 PM",
      endTime: "04:00 PM",
      duration: "2-hour session",
      instructor: "Alicia Zhang",
      instructorRole: "Workshop Demonstrator",
      location: "Lab 3B & Zoom",
      meetingId: "752 4892 2722",
      passcode: "ICT272",
      isLive: false,
      topic: "Interactive CSS Layouts & Responsive Code Review",
    },
  ],
  ICT126: [
    {
      id: "ict126-lecture",
      type: "Lecture",
      title: "ICT126 Weekly Lecture",
      day: "Wednesday",
      date: "Sep 16, 2026",
      startTime: "10:00 AM",
      endTime: "12:00 PM",
      duration: "2-hour session",
      instructor: "Dr. Elena Rostova",
      instructorRole: "Course Lecturer",
      location: "Online · Zoom Room C",
      meetingId: "618 3920 1261",
      passcode: "ICT126",
      isLive: false,
      topic: "Neural Networks & Gradient Descent Intuition",
    },
    {
      id: "ict126-tutorial",
      type: "Tutorial/Class",
      title: "ICT126 Tutorial / Practical AI Lab",
      day: "Friday",
      date: "Sep 18, 2026",
      startTime: "01:00 PM",
      endTime: "03:00 PM",
      duration: "2-hour session",
      instructor: "Marcus Vance",
      instructorRole: "AI Teaching Assistant",
      location: "Lab AI-1 & Zoom",
      meetingId: "618 3920 1262",
      passcode: "ICT126",
      isLive: true,
      topic: "Hands-on PyTorch Tensor Operations & Model Training",
    },
  ],
  ICT101: [
    {
      id: "ict101-lecture",
      type: "Lecture",
      title: "ICT101 Python Programming Fundamentals",
      day: "Monday",
      date: "Nov 17, 2025",
      startTime: "10:00 AM",
      endTime: "12:00 PM",
      duration: "2-hour session",
      instructor: "Dr. Alan Turing",
      instructorRole: "Course Lecturer",
      location: "Online · Zoom Archived Room",
      meetingId: "512 8810 1011",
      passcode: "ICT101",
      isLive: false,
      topic: "Python Data Structures, Functions, and OOP Review",
    },
    {
      id: "ict101-tutorial",
      type: "Tutorial/Class",
      title: "ICT101 Interactive Code Lab",
      day: "Wednesday",
      date: "Nov 19, 2025",
      startTime: "02:00 PM",
      endTime: "04:00 PM",
      duration: "2-hour session",
      instructor: "Dr. Alan Turing",
      instructorRole: "Course Lecturer",
      location: "Lab Room 101 & Zoom",
      meetingId: "512 8810 1012",
      passcode: "ICT101",
      isLive: false,
      topic: "Algorithm Implementation & Pythonic Best Practices",
    },
  ],
  ICT102: [
    {
      id: "ict102-lecture",
      type: "Lecture",
      title: "ICT102 Discrete Mathematics Lecture",
      day: "Tuesday",
      date: "Nov 18, 2025",
      startTime: "10:00 AM",
      endTime: "12:00 PM",
      duration: "2-hour session",
      instructor: "Prof. Ada Lovelace",
      instructorRole: "Course Lecturer",
      location: "Online · Zoom Archived Room",
      meetingId: "640 1934 1021",
      passcode: "ICT102",
      isLive: false,
      topic: "Propositional Logic, Proofs & Set Theory",
    },
    {
      id: "ict102-tutorial",
      type: "Tutorial/Class",
      title: "ICT102 Problem Solving Workshop",
      day: "Thursday",
      date: "Nov 20, 2025",
      startTime: "01:00 PM",
      endTime: "03:00 PM",
      duration: "2-hour session",
      instructor: "Prof. Ada Lovelace",
      instructorRole: "Course Lecturer",
      location: "Lab Room 204 & Zoom",
      meetingId: "640 1934 1022",
      passcode: "ICT102",
      isLive: false,
      topic: "Graph Theory, Combinatorics, and Boolean Algebra",
    },
  ],
};

type CourseTab = "overview" | "materials" | "assignments" | "quizzes" | "grades";

function CourseOverviewPage({
  course,
  onBack,
  setActiveNav,
}: {
  course: ActiveCourse;
  onBack: () => void;
  setActiveNav: (nav: string) => void;
}) {
  const [activeTab, setActiveTab] = useState<CourseTab>("overview");
  const [materialsFilter, setMaterialsFilter] = useState<"all" | "slides" | "recordings" | "code">("all");
  const [assignmentFilter, setAssignmentFilter] = useState<"all" | "dueSoon" | "submitted" | "notStarted">("all");
  const [quizFilter, setQuizFilter] = useState<"all" | "open" | "completed" | "locked">("all");

  // Dynamic state for interactive mock submission / actions
  const [submittingAssignment, setSubmittingAssignment] = useState<Assignment | null>(null);
  const [viewingAssignment, setViewingAssignment] = useState<Assignment | null>(null);
  const [selectedQuiz, setSelectedQuiz] = useState<QuizItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const isCompleted = course.status === "Completed" || course.pct === 100;
  const completionDate = course.completionDate ?? (course.code === "ICT102" ? "November 28, 2025" : "December 12, 2025");

  // Local assignments state so student can submit and see changes in mock UI
  const initialAssignments = useMemo(() => {
    const existing = courseGroups.find((g) => g.code === course.code)?.assignments ?? [];
    if (existing.length > 0) return existing;
    if (course.code === "ICT101") {
      return [
        {
          id: "ict101-a1",
          name: "Assignment 1: Algorithms & Structured Programming",
          description: "Python control flow, modular functions, algorithmic problem solving, and unit test suites.",
          dueDate: "Oct 10, 2025",
          status: "submitted" as const,
          score: "92/100 (HD)",
          submissionDate: "Oct 08, 2025",
          feedback: "Outstanding code structure, well-commented functions, and elegant algorithmic decomposition. All unit test cases passed with optimal execution time.",
        },
        {
          id: "ict101-a2",
          name: "Assignment 2: Python Data Analytics & Automation",
          description: "End-to-end Python pipeline processing real-world CSV datasets with error handling and visualization.",
          dueDate: "Nov 15, 2025",
          status: "submitted" as const,
          score: "86/100 (HD)",
          submissionDate: "Nov 14, 2025",
          feedback: "Comprehensive data preprocessing, robust exception handling, and clean visualization outputs. Demonstrated strong mastery of modular Python architecture.",
        },
      ];
    }
    if (course.code === "ICT102") {
      return [
        {
          id: "ict102-a1",
          name: "Problem Set 1: Propositional Logic & Truth Tables",
          description: "Formal logic proofs, Boolean algebra reductions, and digital logic equivalence problem sets.",
          dueDate: "Sep 20, 2025",
          status: "submitted" as const,
          score: "84/100 (D)",
          submissionDate: "Sep 18, 2025",
          feedback: "Rigorous logical proofs and well-structured truth tables. Induction steps are clearly stated and justified.",
        },
        {
          id: "ict102-a2",
          name: "Problem Set 2: Graph Theory & Combinatorics",
          description: "Applications of Eulerian/Hamiltonian paths, tree traversals, recurrence relations, and permutations.",
          dueDate: "Oct 30, 2025",
          status: "submitted" as const,
          score: "80/100 (D)",
          submissionDate: "Oct 28, 2025",
          feedback: "Accurate bipartite graph models and sound combinatorial arguments throughout.",
        },
      ];
    }
    return [];
  }, [course.code]);

  const [assignmentsList, setAssignmentsList] = useState<Assignment[]>(initialAssignments);

  // Reset when course changes
  useEffect(() => {
    setAssignmentsList(initialAssignments);
    setActiveTab("overview");
  }, [course.code, initialAssignments]);

  const courseQuizzes = useMemo(() => {
    const existing = quizCourseGroups.find((g) => g.code === course.code)?.quizzes ?? [];
    if (existing.length > 0) return existing;
    if (course.code === "ICT101") {
      return [
        {
          id: "q-ict101-1",
          name: "Python Syntax & Basic Data Types Quiz",
          description: "Variables, conditionals, loops, lists, and basic I/O operations.",
          dueDate: "Sep 18, 2025",
          status: "completed" as const,
          score: "19/20 (95%)",
          dateTaken: "Sep 17, 2025",
          timeLimit: "30 Mins",
          questions: 20,
          weight: "10%",
        },
        {
          id: "q-ict101-2",
          name: "Functions, Scope & Recursion Quiz",
          description: "Parameter passing, recursion depth, pure functions, and namespaces.",
          dueDate: "Oct 22, 2025",
          status: "completed" as const,
          score: "18/20 (90%)",
          dateTaken: "Oct 21, 2025",
          timeLimit: "30 Mins",
          questions: 20,
          weight: "10%",
        },
      ];
    }
    if (course.code === "ICT102") {
      return [
        {
          id: "q-ict102-1",
          name: "Set Theory & Predicate Logic Quiz",
          description: "Venn diagrams, set builder notation, and first-order quantifiers.",
          dueDate: "Sep 12, 2025",
          status: "completed" as const,
          score: "17/20 (85%)",
          dateTaken: "Sep 11, 2025",
          timeLimit: "30 Mins",
          questions: 20,
          weight: "10%",
        },
        {
          id: "q-ict102-2",
          name: "Relations, Functions & Proofs Quiz",
          description: "Equivalence relations, partial orderings, and direct vs contradiction proofs.",
          dueDate: "Oct 15, 2025",
          status: "completed" as const,
          score: "16/20 (80%)",
          dateTaken: "Oct 14, 2025",
          timeLimit: "30 Mins",
          questions: 20,
          weight: "10%",
        },
      ];
    }
    return [];
  }, [course.code]);

  const courseMaterialsList = useMemo(() => {
    return courseMaterials.filter((m) => m.course === course.code);
  }, [course.code]);

  const courseRecordingsList = useMemo(() => {
    return classRecordings.filter((r) => r.course === course.code);
  }, [course.code]);

  const courseCodeResources = useMemo(() => {
    return codeAndLabResources.filter((r) => r.title.includes(course.code) || (course.code === "ICT301" && r.tags.includes("GitHub")));
  }, [course.code]);

  const courseAnnouncements = useMemo(() => {
    return announcements.filter((a) => !a.course || a.course === course.code);
  }, [course.code]);

  const courseGrades = useMemo(() => {
    const existing = gradeRows.filter((g) => g.code === course.code);
    if (existing.length > 0) return existing;
    if (course.code === "ICT101") {
      return [
        { course: "Introduction to Programming (Python)", code: "ICT101", assessment: "Assignment 1: Algorithms & Structured Programming", score: 92, max: 100, grade: "HD", status: "Released" as const },
        { course: "Introduction to Programming (Python)", code: "ICT101", assessment: "Assignment 2: Python Data Analytics & Automation", score: 86, max: 100, grade: "HD", status: "Released" as const },
        { course: "Introduction to Programming (Python)", code: "ICT101", assessment: "Formative Quizzes & Code Exercises", score: 37, max: 40, grade: "HD", status: "Released" as const },
        { course: "Introduction to Programming (Python)", code: "ICT101", assessment: "Final Examination", score: 88, max: 100, grade: "HD", status: "Released" as const },
      ];
    }
    if (course.code === "ICT102") {
      return [
        { course: "Discrete Mathematics for IT", code: "ICT102", assessment: "Problem Set 1: Propositional Logic & Truth Tables", score: 84, max: 100, grade: "D", status: "Released" as const },
        { course: "Discrete Mathematics for IT", code: "ICT102", assessment: "Problem Set 2: Graph Theory & Combinatorics", score: 80, max: 100, grade: "D", status: "Released" as const },
        { course: "Discrete Mathematics for IT", code: "ICT102", assessment: "Mid-Term Test", score: 33, max: 40, grade: "D", status: "Released" as const },
        { course: "Discrete Mathematics for IT", code: "ICT102", assessment: "Final Examination", score: 81, max: 100, grade: "D", status: "Released" as const },
      ];
    }
    return [];
  }, [course.code]);

  const zoomSessions = courseZoomScheduleMap[course.code] ?? [
    {
      id: `${course.code.toLowerCase()}-lecture`,
      type: "Lecture" as const,
      title: `${course.code} Weekly Lecture`,
      day: "Monday",
      date: "Sep 14, 2026",
      startTime: "10:00 AM",
      endTime: "12:00 PM",
      duration: "2-hour session",
      instructor: course.instructor ?? "Dr. Jane Smith",
      instructorRole: "Course Lecturer",
      location: "Online · Zoom",
      meetingId: "800 1234 5678",
      passcode: "EDUFLEX",
      isLive: false,
      topic: "Unit overview and core conceptual lecture.",
    },
    {
      id: `${course.code.toLowerCase()}-tutorial`,
      type: "Tutorial/Class" as const,
      title: `${course.code} Tutorial / Class`,
      day: "Thursday",
      date: "Sep 17, 2026",
      startTime: "10:00 AM",
      endTime: "12:00 PM",
      duration: "2-hour session",
      instructor: "Alex Rivera",
      instructorRole: "Workshop Demonstrator",
      location: "Online / Campus · Zoom",
      meetingId: "800 1234 5679",
      passcode: "EDUFLEX",
      isLive: false,
      topic: "Weekly practical exercises and mentoring.",
    },
  ];

  const [expandedSessionIds, setExpandedSessionIds] = useState<Record<string, boolean>>({});

  const toggleSession = (id: string) => {
    setExpandedSessionIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleConfirmSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!submittingAssignment) return;
    setAssignmentsList((prev) =>
      prev.map((a) => (a.id === submittingAssignment.id ? { ...a, status: "submitted" } : a))
    );
    showToast(`Successfully submitted ${submittingAssignment.name}!`);
    setSubmittingAssignment(null);
  };

  const tabs: { id: CourseTab; label: string; count?: number }[] = isCompleted
    ? [
        { id: "overview", label: "Overview" },
        { id: "materials", label: "Learning Materials", count: courseMaterialsList.length + courseRecordingsList.length },
        { id: "assignments", label: "Past Assignments", count: assignmentsList.length },
        { id: "quizzes", label: "Past Quizzes", count: courseQuizzes.length },
        { id: "grades", label: "Final Results" },
      ]
    : [
        { id: "overview", label: "Overview" },
        { id: "materials", label: "Learning Materials", count: courseMaterialsList.length + courseRecordingsList.length },
        { id: "assignments", label: "Assignments", count: assignmentsList.length },
        { id: "quizzes", label: "Quizzes", count: courseQuizzes.length },
        { id: "grades", label: "Grades", count: courseGrades.length },
      ];

  const filteredAssignments = assignmentsList.filter((a) => {
    if (assignmentFilter === "all") return true;
    return a.status === assignmentFilter;
  });

  const filteredQuizzes = courseQuizzes.filter((q) => {
    if (quizFilter === "all") return true;
    return q.status === quizFilter;
  });

  return (
    <div className="p-6">
      {/* Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-gray-900 text-white px-5 py-3 rounded-2xl shadow-xl border border-gray-700 flex items-center gap-3 animate-fade-in text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-green-400" />
          {toastMessage}
        </div>
      )}

      {/* Back breadcrumb */}
      <div className="mb-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-blue-700 transition-colors bg-white px-3 py-1.5 rounded-lg border border-gray-200 shadow-sm"
        >
          <IconChevronLeft />
          <span>Back to My Courses</span>
        </button>
      </div>

      {/* Course Header Banner Card */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span
                className="px-2.5 py-0.5 rounded-md text-xs font-extrabold tracking-wide uppercase"
                style={{ background: `${course.accentColor}18`, color: course.accentColor }}
              >
                {course.code}
              </span>
              <span className="text-xs text-gray-300 font-medium">·</span>
              <span className="text-xs text-gray-600 font-semibold">{course.term}</span>
              <span className="text-xs text-gray-300 font-medium">·</span>
              {course.status === "Completed" ? (
                <span className="text-[11px] font-bold text-green-700 bg-green-50 px-2.5 py-0.5 rounded-md border border-green-200 inline-flex items-center gap-1">
                  <IconCheck className="w-3.5 h-3.5" /> Completed Course
                </span>
              ) : (
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                  Enrolled &amp; Active
                </span>
              )}
            </div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight mb-2">{course.title}</h1>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <IconBook />
                {course.school}
              </span>
              {course.instructor && (
                <span className="flex items-center gap-1.5 font-medium text-gray-600">
                  <IconUser />
                  Instructor: <strong className="text-gray-900 font-semibold">{course.instructor}</strong>
                </span>
              )}
              <span className="flex items-center gap-1.5 text-gray-400">
                <IconCalendar />
                {course.year ? `Semester ${course.term} ${course.year}` : "Semester T2 2026"}
              </span>
            </div>
          </div>

          {/* Progress Card */}
          <div className="lg:w-80 bg-gray-50 border border-gray-200/80 rounded-xl p-4 shrink-0">
            <div className="flex items-center justify-between text-xs font-semibold text-gray-600 mb-2">
              <span>{isCompleted ? "Course Completion" : "Overall Course Completion"}</span>
              <span className="font-bold text-sm" style={{ color: isCompleted ? "#16a34a" : course.accentColor }}>
                {isCompleted ? "100%" : `${course.pct}%`}
              </span>
            </div>
            <ProgressBar pct={isCompleted ? 100 : course.pct} color={isCompleted ? "#16a34a" : course.accentColor} />
            <div className="flex items-center justify-between mt-2.5 text-[11px] font-medium">
              {isCompleted ? (
                <>
                  <span className="text-green-700 font-bold flex items-center gap-1">
                    <IconCheck className="w-3 h-3" /> Status: Completed
                  </span>
                  <span className="text-gray-500 font-semibold">{completionDate}</span>
                </>
              ) : (
                <>
                  <span className="text-gray-500">Status: {course.pct >= 70 ? "On Track" : course.pct >= 40 ? "Progressing" : "Attention"}</span>
                  <span className="text-gray-400">Target: 100%</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs Bar */}
      <div className="flex items-center gap-1 border-b border-gray-200 mb-6 overflow-x-auto scrollbar-none">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-3 text-sm font-semibold transition-all border-b-2 -mb-px whitespace-nowrap flex items-center gap-2 ${
              activeTab === tab.id
                ? "border-[#1a3a9e] text-[#1a3a9e]"
                : "border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300"
            }`}
          >
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                  activeTab === tab.id
                    ? "bg-blue-100 text-[#1a3a9e]"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* ── TAB CONTENT: OVERVIEW ── */}
      {activeTab === "overview" && (
        isCompleted ? (
          /* COMPLETED COURSE OVERVIEW EXPERIENCE */
          <div className="space-y-6">
            {/* 1. Course Completion & Academic Record Summary */}
            <div className="bg-white rounded-2xl border border-green-200 shadow-sm p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-green-50/60 rounded-bl-full pointer-events-none" />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center text-green-700 shrink-0 shadow-sm">
                    <IconCheck />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h2 className="text-lg font-bold text-gray-900">Course Successfully Completed</h2>
                      <span className="text-[11px] font-bold text-green-700 bg-green-50 px-2.5 py-0.5 rounded-full border border-green-200">
                        Completed · 100% Complete
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">
                      Officially finalized and archived in academic record · Completed on <strong className="text-gray-800 font-semibold">{completionDate}</strong>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <div className="text-right">
                    <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wider">Final Standing</p>
                    <p className="text-base font-extrabold text-green-700">{course.grade ?? "High Distinction (HD)"}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-gray-100">
                <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                  <span className="text-[11px] text-gray-400 font-medium block">Course Status</span>
                  <span className="text-sm font-bold text-green-700 flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                    Completed
                  </span>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                  <span className="text-[11px] text-gray-400 font-medium block">Course Progress</span>
                  <span className="text-sm font-bold text-gray-900 mt-0.5 block">100% Complete</span>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                  <span className="text-[11px] text-gray-400 font-medium block">Completion Date</span>
                  <span className="text-sm font-bold text-gray-900 mt-0.5 block">{completionDate}</span>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                  <span className="text-[11px] text-gray-400 font-medium block">Academic Credit</span>
                  <span className="text-sm font-bold text-blue-700 mt-0.5 block">6.0 Credits Earned</span>
                </div>
              </div>
            </div>

            {/* 2. Final Results with Final Grade and Assessment Breakdown */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-blue-50 text-blue-700"><IconBook /></span>
                  <div>
                    <h2 className="text-base font-bold text-gray-900">Final Results</h2>
                    <p className="text-xs text-gray-400">Final grade and verified assessment results</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveTab("grades")}
                  className="text-xs font-semibold text-blue-700 hover:underline"
                >
                  View Full Breakdown →
                </button>
              </div>

              {/* Score highlight cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100">
                  <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">Final Grade</span>
                  <p className="text-2xl font-black text-blue-900 mt-1">{course.grade ?? "High Distinction (HD)"}</p>
                  <p className="text-xs text-blue-600/80 mt-0.5">Highest Academic Standing</p>
                </div>
                <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                  <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">Overall Score</span>
                  <p className="text-2xl font-black text-emerald-900 mt-1">{course.finalScore ?? "88%"}</p>
                  <p className="text-xs text-emerald-600/80 mt-0.5">Weighted Assessment Mark</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Academic Record</span>
                  <p className="text-2xl font-black text-gray-900 mt-1">Archived</p>
                  <p className="text-xs text-gray-500 mt-0.5">Transcripts Verified &amp; Stored</p>
                </div>
              </div>

              {/* Assessment results table */}
              <div className="overflow-x-auto rounded-xl border border-gray-100">
                <table className="w-full text-left text-xs">
                  <thead className="bg-gray-50/80 text-gray-500 uppercase tracking-wider font-bold">
                    <tr>
                      <th className="px-4 py-3">Assessment Item</th>
                      <th className="px-4 py-3">Score</th>
                      <th className="px-4 py-3">Max Score</th>
                      <th className="px-4 py-3">Grade</th>
                      <th className="px-4 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {courseGrades.map((g, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-4 py-3 font-semibold text-gray-800">{g.assessment}</td>
                        <td className="px-4 py-3 font-bold text-blue-700">{g.score}</td>
                        <td className="px-4 py-3 text-gray-500">{g.max} pts</td>
                        <td className="px-4 py-3">
                          <span className="px-2 py-0.5 rounded font-bold bg-green-50 text-green-700 border border-green-200 text-[11px]">
                            {g.grade}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full border border-green-200">
                            <IconCheck className="w-3 h-3" /> Released
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3. Past Assignments with Submitted Results & Feedback */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-purple-50 text-purple-600"><IconAssignment /></span>
                  <div>
                    <h2 className="text-base font-bold text-gray-900">Past Assignments</h2>
                    <p className="text-xs text-gray-400">Completed submissions, awarded marks, and evaluator feedback</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveTab("assignments")}
                  className="text-xs font-semibold text-blue-700 hover:underline"
                >
                  View All ({assignmentsList.length}) →
                </button>
              </div>

              <div className="space-y-4">
                {assignmentsList.map((a) => (
                  <div
                    key={a.id}
                    className="p-4 bg-gray-50/60 rounded-xl border border-gray-200/80 hover:border-purple-200 transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-sm font-bold text-gray-900">{a.name}</h3>
                        <span className="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full border border-green-200 inline-flex items-center gap-1">
                          <IconCheck className="w-3 h-3" /> Submitted &amp; Graded
                        </span>
                      </div>
                      {a.score && (
                        <span className="text-xs font-extrabold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-lg border border-purple-100 self-start sm:self-auto">
                          Score: {a.score}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 mb-3">{a.description}</p>

                    {a.feedback && (
                      <div className="mb-3 p-3 bg-white rounded-lg border border-purple-100 text-xs">
                        <span className="text-[10px] font-bold text-purple-700 uppercase tracking-wider block mb-1">
                          Evaluator Feedback
                        </span>
                        <p className="text-gray-700 italic">"{a.feedback}"</p>
                      </div>
                    )}

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-gray-200/60 text-xs">
                      <div className="flex items-center gap-3 text-[11px] text-gray-400">
                        <span>Submitted: {a.submissionDate ?? "On time"}</span>
                        <span>·</span>
                        <span>Due: {a.dueDate}</span>
                      </div>
                      <button
                        onClick={() => setViewingAssignment(a)}
                        className="text-xs font-semibold text-purple-700 hover:text-purple-900 hover:underline inline-flex items-center gap-1"
                      >
                        <span>View Submission &amp; Feedback</span>
                        <IconChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Past Quizzes with Completed Scores */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-amber-50 text-amber-600"><IconQuiz /></span>
                  <div>
                    <h2 className="text-base font-bold text-gray-900">Past Quizzes</h2>
                    <p className="text-xs text-gray-400">Completed quiz attempts and final recorded scores</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveTab("quizzes")}
                  className="text-xs font-semibold text-blue-700 hover:underline"
                >
                  View All ({courseQuizzes.length}) →
                </button>
              </div>

              <div className="space-y-3">
                {courseQuizzes.map((q) => (
                  <div
                    key={q.id}
                    className="p-4 bg-gray-50/60 rounded-xl border border-gray-200/80 hover:border-amber-200 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="text-sm font-bold text-gray-900">{q.name}</h3>
                        <span className="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full border border-green-200 inline-flex items-center gap-1">
                          <IconCheck className="w-3 h-3" /> Completed
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mb-1">{q.description}</p>
                      <div className="flex items-center gap-3 text-[11px] text-gray-400">
                        <span>Taken: {q.dateTaken ?? q.dueDate}</span>
                        {q.questions && <span>· {q.questions} Questions</span>}
                        {q.weight && <span>· Weight: {q.weight}</span>}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                      {q.score && (
                        <span className="text-sm font-extrabold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
                          {q.score}
                        </span>
                      )}
                      <button
                        onClick={() => setSelectedQuiz(q)}
                        className="px-3 py-1.5 rounded-xl text-xs font-semibold text-gray-700 bg-white hover:bg-gray-100 border border-gray-200 transition-colors shadow-sm"
                      >
                        Review Results
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Learning Materials & Resources */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600"><IconFolder /></span>
                  <div>
                    <h2 className="text-base font-bold text-gray-900">Learning Materials &amp; Resources</h2>
                    <p className="text-xs text-gray-400">Archived course handouts, lecture slides, and recordings available for review and download</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveTab("materials")}
                  className="text-xs font-semibold text-blue-700 hover:underline"
                >
                  View All ({courseMaterialsList.length + courseRecordingsList.length}) →
                </button>
              </div>

              <div className="space-y-2.5">
                {courseMaterialsList.map((m, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3.5 bg-gray-50 rounded-xl border border-gray-100 hover:bg-blue-50/40 transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-2 rounded-lg bg-red-50 text-red-600 shrink-0">
                        <IconFilePdf className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-gray-800 truncate">{m.name}</p>
                        <p className="text-[11px] text-gray-400">{m.type} · {m.size} · Archived {m.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 ml-2">
                      <button
                        onClick={() => showToast(`Opening ${m.name}...`)}
                        className="text-xs font-semibold text-blue-700 hover:text-blue-900 px-3 py-1 rounded-lg hover:bg-blue-50"
                      >
                        Open
                      </button>
                      <button
                        onClick={() => showToast(`Downloading ${m.name}...`)}
                        className="text-xs font-semibold text-gray-600 hover:text-gray-900 px-2.5 py-1 rounded-lg hover:bg-gray-100"
                        title="Download"
                      >
                        <IconDownload className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}

                {courseRecordingsList.map((r, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3.5 bg-gray-50 rounded-xl border border-gray-100 hover:bg-blue-50/40 transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-2 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                        <IconVideo className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-gray-800 truncate">{r.title}</p>
                        <p className="text-[11px] text-gray-400">{r.duration} · Recorded {r.date}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => showToast(`Streaming archived recording for ${r.title}...`)}
                      className="text-xs font-semibold text-blue-700 hover:text-blue-900 px-3 py-1 rounded-lg hover:bg-blue-50 shrink-0 ml-2"
                    >
                      Watch Recording
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* ACTIVE COURSE OVERVIEW EXPERIENCE (UNCHANGED) */
          <div className="space-y-6">
            {/* Zoom Class Sessions (Compact Collapsible Area) */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 md:p-5">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2.5">
                  <span className="p-1.5 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                    <IconVideoCamera className="w-4 h-4" />
                  </span>
                  <div>
                    <h2 className="text-base font-bold text-gray-900 leading-tight">Zoom Class Sessions</h2>
                    <p className="text-[11px] text-gray-400 font-medium">Weekly 2-hour synchronous lectures &amp; tutorials</p>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-lg shrink-0">
                  {zoomSessions.length} Scheduled Sessions
                </span>
              </div>

              {/* Collapsible Session Rows */}
              <div className="divide-y divide-gray-100 mt-1">
                {zoomSessions.map((session) => {
                  const isExpanded = !!expandedSessionIds[session.id];
                  return (
                    <div key={session.id} className="pt-2.5 pb-2.5 first:pt-2 last:pb-1">
                      {/* Header row / Compact bar */}
                      <div
                        onClick={() => toggleSession(session.id)}
                        className="flex flex-col md:flex-row md:items-center justify-between gap-3 p-3 rounded-xl hover:bg-gray-50/80 cursor-pointer transition-colors group"
                      >
                        <div className="flex items-center gap-3 min-w-0 flex-1">
                          {/* Expand/Collapse Chevron indicator */}
                          <span
                            className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-gray-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-all ${
                              isExpanded ? "rotate-180 bg-blue-50 text-blue-600" : ""
                            }`}
                          >
                            <IconChevronDown className="w-4 h-4" />
                          </span>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2 flex-wrap mb-1">
                              <span
                                className={`text-[10px] font-extrabold uppercase tracking-wide px-2 py-0.5 rounded-md ${
                                  session.type === "Lecture"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-indigo-100 text-indigo-800"
                                }`}
                              >
                                {session.type}
                              </span>
                              <span className="text-[11px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                                {session.duration}
                              </span>
                              {session.isLive && (
                                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-md border border-red-100 animate-pulse">
                                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                  LIVE NOW
                                </span>
                              )}
                              <span className="text-xs font-bold text-gray-900 truncate">
                                {session.title}
                              </span>
                            </div>

                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
                              <span className="flex items-center gap-1 font-semibold text-gray-700">
                                <IconCalendar />
                                {session.day}, {session.date}
                              </span>
                              <span className="text-gray-300">·</span>
                              <span className="flex items-center gap-1 font-semibold text-blue-700">
                                <IconClock className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                                {session.startTime} – {session.endTime}
                              </span>
                              <span className="text-gray-300">·</span>
                              <span className="flex items-center gap-1 text-gray-600">
                                <IconUser />
                                <span className="text-gray-400">Instructor:</span>
                                <strong className="text-gray-800 font-semibold">{session.instructor}</strong>
                                <span className="text-[11px] text-gray-400 font-normal">({session.instructorRole})</span>
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Right actions: Join Zoom button */}
                        <div className="flex items-center gap-2 shrink-0 self-end md:self-center ml-10 md:ml-0">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              showToast(`Launching Zoom for ${session.title}...`);
                            }}
                            className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-[#1a3a9e] hover:bg-[#102d80] active:scale-95 transition-all shadow-sm flex items-center gap-1.5"
                          >
                            <IconVideoCamera className="w-3.5 h-3.5" />
                            <span>Join Zoom</span>
                          </button>
                        </div>
                      </div>

                      {/* Expandable details panel */}
                      {isExpanded && (
                        <div className="mt-2 ml-10 mr-3 p-3.5 bg-blue-50/40 rounded-xl border border-blue-100 text-xs animate-fade-in space-y-2">
                          {session.topic && (
                            <div className="flex items-start gap-2 text-gray-700">
                              <strong className="text-gray-900 shrink-0 font-bold">Session Agenda:</strong>
                              <span>{session.topic}</span>
                            </div>
                          )}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-[11px] text-gray-600">
                            <div className="bg-white p-2.5 rounded-lg border border-gray-100">
                              <span className="text-gray-400 block text-[10px] uppercase font-bold tracking-wider">Location / Link</span>
                              <span className="font-semibold text-gray-800">{session.location}</span>
                            </div>
                            <div className="bg-white p-2.5 rounded-lg border border-gray-100">
                              <span className="text-gray-400 block text-[10px] uppercase font-bold tracking-wider">Meeting ID</span>
                              <span className="font-mono font-bold text-gray-900">{session.meetingId}</span>
                            </div>
                            <div className="bg-white p-2.5 rounded-lg border border-gray-100">
                              <span className="text-gray-400 block text-[10px] uppercase font-bold tracking-wider">Passcode</span>
                              <span className="font-mono font-bold text-gray-900">{session.passcode}</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Upcoming Assignments */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-purple-50 text-purple-600"><IconAssignment /></span>
                  <h2 className="text-base font-bold text-gray-900">Upcoming Assignments</h2>
                </div>
                <button
                  onClick={() => setActiveTab("assignments")}
                  className="text-xs font-semibold text-blue-700 hover:underline"
                >
                  View All ({assignmentsList.length}) →
                </button>
              </div>

              {assignmentsList.length === 0 ? (
                <p className="text-sm text-gray-500 py-4 text-center">No assignments scheduled for this course.</p>
              ) : (
                <div className="divide-y divide-gray-100">
                  {assignmentsList.slice(0, 3).map((a) => (
                    <div key={a.id} className="py-3.5 first:pt-0 last:pb-0 flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-sm font-bold text-gray-900">{a.name}</h3>
                          <StatusBadge status={a.status} />
                        </div>
                        <p className="text-xs text-gray-500 line-clamp-1">{a.description}</p>
                        <p className="text-[11px] text-gray-400 mt-1 font-medium flex items-center gap-1">
                          <IconCalendar /> Due: {a.dueDate}
                        </p>
                      </div>
                      <div className="shrink-0">
                        {a.status === "submitted" ? (
                          <button
                            onClick={() => setViewingAssignment(a)}
                            className="px-3 py-1.5 rounded-xl text-xs font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors"
                          >
                            Details
                          </button>
                        ) : (
                          <button
                            onClick={() => setSubmittingAssignment(a)}
                            className="px-3 py-1.5 rounded-xl text-xs font-semibold text-white bg-[#1a3a9e] hover:bg-[#102d80] transition-colors shadow-sm"
                          >
                            Submit
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quizzes & Tests */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-amber-50 text-amber-600"><IconQuiz /></span>
                  <h2 className="text-base font-bold text-gray-900">Quizzes &amp; Tests</h2>
                </div>
                <button
                  onClick={() => setActiveTab("quizzes")}
                  className="text-xs font-semibold text-blue-700 hover:underline"
                >
                  View All ({courseQuizzes.length}) →
                </button>
              </div>

              {courseQuizzes.length === 0 ? (
                <p className="text-sm text-gray-500 py-4 text-center">No quizzes scheduled for this course.</p>
              ) : (
                <div className="divide-y divide-gray-100">
                  {courseQuizzes.slice(0, 3).map((q) => (
                    <div key={q.id} className="py-3.5 first:pt-0 last:pb-0 flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-sm font-bold text-gray-900">{q.name}</h3>
                          <QuizStatusBadge status={q.status} />
                        </div>
                        <p className="text-xs text-gray-500 line-clamp-1">{q.description}</p>
                        <div className="flex items-center gap-3 text-[11px] text-gray-400 mt-1">
                          <span>Due: {q.dueDate}</span>
                          {q.timeLimit && <span>· Limit: {q.timeLimit}</span>}
                          {q.score && <span className="font-semibold text-green-700">· Score: {q.score}</span>}
                        </div>
                      </div>
                      <div className="shrink-0">
                        <button
                          onClick={() => setSelectedQuiz(q)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                            q.status === "open"
                              ? "text-white bg-[#1a3a9e] hover:bg-[#102d80] shadow-sm"
                              : "text-gray-700 bg-gray-100 hover:bg-gray-200"
                          }`}
                        >
                          {q.status === "open" ? "Start" : "View"}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Recent Announcements */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-blue-50 text-blue-600"><IconAnnouncement /></span>
                  <h2 className="text-base font-bold text-gray-900">Recent Announcements</h2>
                </div>
                <button
                  onClick={() => setActiveNav("announcements")}
                  className="text-xs font-semibold text-blue-700 hover:underline"
                >
                  All Announcements →
                </button>
              </div>

              {courseAnnouncements.length === 0 ? (
                <p className="text-sm text-gray-500 py-4 text-center">No announcements for this course.</p>
              ) : (
                <div className="space-y-3">
                  {courseAnnouncements.slice(0, 3).map((ann) => (
                    <div key={ann.id} className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 transition-all">
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                          {ann.category}
                        </span>
                        <span className="text-[11px] text-gray-400">{ann.date}</span>
                      </div>
                      <h4 className="text-sm font-bold text-gray-900 mb-1">{ann.title}</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">{ann.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Learning Materials & Resources */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600"><IconFolder /></span>
                  <h2 className="text-base font-bold text-gray-900">Learning Materials &amp; Resources</h2>
                </div>
                <button
                  onClick={() => setActiveTab("materials")}
                  className="text-xs font-semibold text-blue-700 hover:underline"
                >
                  View All ({courseMaterialsList.length + courseRecordingsList.length}) →
                </button>
              </div>

              <div className="space-y-2.5">
                {courseMaterialsList.map((m, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3.5 bg-gray-50 rounded-xl border border-gray-100 hover:bg-blue-50/40 transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-2 rounded-lg bg-red-50 text-red-600 shrink-0">
                        <IconFilePdf className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-gray-800 truncate">{m.name}</p>
                        <p className="text-[11px] text-gray-400">{m.type} · {m.size} · {m.date}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => showToast(`Opening ${m.name}...`)}
                      className="text-xs font-semibold text-blue-700 hover:text-blue-900 px-3 py-1 rounded-lg hover:bg-blue-50 shrink-0 ml-2"
                    >
                      Open
                    </button>
                  </div>
                ))}

                {courseRecordingsList.map((r, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3.5 bg-gray-50 rounded-xl border border-gray-100 hover:bg-blue-50/40 transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-2 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                        <IconVideo className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-gray-800 truncate">{r.title}</p>
                        <p className="text-[11px] text-gray-400">{r.duration} · {r.date}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => showToast(`Streaming ${r.title}...`)}
                      className="text-xs font-semibold text-blue-700 hover:text-blue-900 px-3 py-1 rounded-lg hover:bg-blue-50 shrink-0 ml-2"
                    >
                      Watch
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      )}

      {/* ── TAB CONTENT: LEARNING MATERIALS ── */}
      {activeTab === "materials" && (
        <div className="space-y-6">
          {/* Subfilter Pills */}
          <div className="flex items-center gap-2">
            {[
              { id: "all", label: "All Materials" },
              { id: "slides", label: "Slides & Documents" },
              { id: "recordings", label: "Class Recordings" },
              { id: "code", label: "Code & Lab Starter Files" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setMaterialsFilter(f.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  materialsFilter === f.id
                    ? "bg-[#1a3a9e] text-white shadow-sm"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Documents Section */}
          {(materialsFilter === "all" || materialsFilter === "slides") && (
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                  <IconFilePdf className="w-4 h-4 text-red-500" />
                  Course Handouts &amp; Lecture Slides ({courseMaterialsList.length})
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {courseMaterialsList.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-gray-50 rounded-xl border border-gray-200/80 hover:border-blue-300 hover:bg-blue-50/30 transition-all flex items-start justify-between gap-3"
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <div className="p-2.5 rounded-xl bg-red-50 text-red-600 shrink-0">
                        <IconFilePdf className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs font-bold text-gray-900 leading-snug">{m.name}</h4>
                        <p className="text-[11px] text-gray-400 mt-1">{m.type} · {m.size} · Uploaded {m.date}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => showToast(`Downloading ${m.name}...`)}
                      className="p-2 text-gray-500 hover:text-blue-700 hover:bg-white rounded-lg transition-colors shrink-0"
                      title="Download file"
                    >
                      <IconDownload className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recordings Section */}
          {(materialsFilter === "all" || materialsFilter === "recordings") && (
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                  <IconVideo className="w-4 h-4 text-blue-500" />
                  Recorded Lectures &amp; Workgroups ({courseRecordingsList.length})
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {courseRecordingsList.map((rec, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-gray-50 rounded-xl border border-gray-200/80 hover:border-blue-300 hover:bg-blue-50/30 transition-all flex items-start justify-between gap-3"
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                        <IconVideo className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs font-bold text-gray-900 leading-snug">{rec.title}</h4>
                        <p className="text-[11px] text-gray-400 mt-1">Duration: {rec.duration} · Recorded {rec.date}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => showToast(`Opening player for ${rec.title}...`)}
                      className="px-3 py-1.5 bg-[#1a3a9e] text-white rounded-lg text-xs font-semibold hover:bg-[#102d80] transition-colors shrink-0"
                    >
                      Watch
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Code & Lab Files Section */}
          {(materialsFilter === "all" || materialsFilter === "code") && (
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                  <IconCode className="w-4 h-4 text-emerald-600" />
                  Code Templates &amp; Repositories
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {courseCodeResources.map((res, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-gray-50 rounded-xl border border-gray-200/80 hover:border-blue-300 hover:bg-blue-50/30 transition-all flex items-start justify-between gap-3"
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
                        <IconCode className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs font-bold text-gray-900 leading-snug">{res.title}</h4>
                        <p className="text-[11px] text-gray-500 mt-0.5">{res.desc}</p>
                        <div className="flex gap-1.5 mt-2">
                          {res.tags.map((tag) => (
                            <span key={tag} className="text-[10px] font-semibold bg-white border border-gray-200 px-1.5 py-0.5 rounded text-gray-600">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => showToast(`Accessing ${res.title}...`)}
                      className="p-2 text-gray-500 hover:text-blue-700 hover:bg-white rounded-lg transition-colors shrink-0"
                    >
                      <IconExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── TAB CONTENT: ASSIGNMENTS ── */}
      {activeTab === "assignments" && (
        <div className="space-y-6">
          {/* Status Filter */}
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2">
              {isCompleted ? (
                <span className="text-xs font-bold text-gray-700 bg-gray-100 px-3 py-1.5 rounded-xl border border-gray-200">
                  Archived Submissions ({assignmentsList.length})
                </span>
              ) : (
                [
                  { id: "all", label: `All (${assignmentsList.length})` },
                  { id: "dueSoon", label: "Due Soon" },
                  { id: "submitted", label: "Submitted" },
                  { id: "notStarted", label: "Not Started" },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setAssignmentFilter(f.id as any)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      assignmentFilter === f.id
                        ? "bg-[#1a3a9e] text-white shadow-sm"
                        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    {f.label}
                  </button>
                ))
              )}
            </div>

            <p className="text-xs text-gray-500">
              {isCompleted
                ? "All assignments have been evaluated and recorded"
                : "All submissions require academic integrity declaration"}
            </p>
          </div>

          {/* Assignments List */}
          <div className="space-y-4">
            {filteredAssignments.map((a) => (
              <div
                key={a.id}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:border-blue-200 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="min-w-0 max-w-2xl">
                  <div className="flex items-center gap-2.5 flex-wrap mb-2">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{course.code}</span>
                    <span className="text-gray-300">·</span>
                    <h3 className="text-base font-bold text-gray-900">{a.name}</h3>
                    {isCompleted ? (
                      <span className="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full border border-green-200 inline-flex items-center gap-1">
                        <IconCheck className="w-3 h-3" /> Submitted &amp; Graded
                      </span>
                    ) : (
                      <StatusBadge status={a.status} />
                    )}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3">{a.description}</p>
                  
                  {isCompleted && a.feedback && (
                    <div className="mb-3 p-3 bg-purple-50/60 rounded-xl border border-purple-100 text-xs">
                      <span className="text-[10px] font-bold text-purple-700 uppercase tracking-wider block mb-1">
                        Evaluator Feedback
                      </span>
                      <p className="text-gray-700 italic">"{a.feedback}"</p>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 font-medium">
                    <span className="flex items-center gap-1.5 text-gray-600 font-semibold">
                      <IconCalendar /> {isCompleted ? `Submitted: ${a.submissionDate ?? a.dueDate}` : `Due Date: ${a.dueDate} at 11:59 PM`}
                    </span>
                    <span>Submission Mode: PDF Upload</span>
                    {a.score ? (
                      <span className="text-purple-700 font-bold bg-purple-50 px-2 py-0.5 rounded border border-purple-100">
                        Score: {a.score}
                      </span>
                    ) : (
                      <span>Weight: 30% of total unit</span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => showToast(`Downloading assignment brief for ${a.name}...`)}
                    className="px-3.5 py-2 rounded-xl text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    Brief (PDF)
                  </button>
                  {isCompleted || a.status === "submitted" ? (
                    <button
                      onClick={() => setViewingAssignment(a)}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-green-700 bg-green-50 border border-green-200 hover:bg-green-100 transition-colors inline-flex items-center gap-1.5"
                    >
                      <IconCheck />
                      View Submission
                    </button>
                  ) : (
                    <button
                      onClick={() => setSubmittingAssignment(a)}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#1a3a9e] hover:bg-[#102d80] transition-colors shadow-sm"
                    >
                      Submit Assignment
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── TAB CONTENT: QUIZZES ── */}
      {activeTab === "quizzes" && (
        <div className="space-y-6">
          {/* Status Filter */}
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2">
              {isCompleted ? (
                <span className="text-xs font-bold text-gray-700 bg-gray-100 px-3 py-1.5 rounded-xl border border-gray-200">
                  Completed Quizzes ({courseQuizzes.length})
                </span>
              ) : (
                [
                  { id: "all", label: `All (${courseQuizzes.length})` },
                  { id: "open", label: "Open Now" },
                  { id: "completed", label: "Completed" },
                  { id: "locked", label: "Upcoming" },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setQuizFilter(f.id as any)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      quizFilter === f.id
                        ? "bg-[#1a3a9e] text-white shadow-sm"
                        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    {f.label}
                  </button>
                ))
              )}
            </div>

            <p className="text-xs text-gray-500">
              {isCompleted ? "All quiz attempts finalized" : "Quizzes are timed once opened"}
            </p>
          </div>

          {/* Quizzes List */}
          <div className="space-y-4">
            {filteredQuizzes.map((q) => (
              <div
                key={q.id}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:border-blue-200 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="min-w-0 max-w-2xl">
                  <div className="flex items-center gap-2.5 flex-wrap mb-2">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{course.code}</span>
                    <span className="text-gray-300">·</span>
                    <h3 className="text-base font-bold text-gray-900">{q.name}</h3>
                    <QuizStatusBadge status={q.status} />
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3">{q.description}</p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 font-medium">
                    <span className="text-gray-700 font-semibold">{isCompleted ? `Date Taken: ${q.dateTaken ?? q.dueDate}` : `Due: ${q.dueDate}`}</span>
                    {q.timeLimit && <span>Time Limit: {q.timeLimit}</span>}
                    {q.questions && <span>{q.questions} Questions</span>}
                    {q.weight && <span>Weight: {q.weight}</span>}
                    {q.score && (
                      <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Score: {q.score}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => setSelectedQuiz(q)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                      q.status === "open" && !isCompleted
                        ? "bg-[#1a3a9e] text-white hover:bg-[#102d80] shadow-sm"
                        : q.status === "completed" || isCompleted
                        ? "bg-green-50 text-green-700 border border-green-200 hover:bg-green-100"
                        : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                    }`}
                  >
                    {q.status === "open" && !isCompleted ? "Start Quiz Now" : q.status === "completed" || isCompleted ? "Review Results" : "View Details"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── TAB CONTENT: GRADES ── */}
      {activeTab === "grades" && (
        <div className="space-y-6">
          {/* Grade Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
              <span className="text-xs text-gray-500 font-medium">
                {isCompleted ? "Final Awarded Grade" : "Current Assessment Grade"}
              </span>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-3xl font-bold text-blue-700">
                  {isCompleted
                    ? (course.grade ?? "High Distinction (HD)")
                    : (courseGrades.find(g => g.grade !== "—")?.grade ?? "In Review")}
                </span>
                <span className="text-xs text-emerald-600 font-semibold">
                  {isCompleted ? "Academic Distinction" : "Satisfactory Standing"}
                </span>
              </div>
              <p className="text-[11px] text-gray-400 mt-2">
                {isCompleted ? `Official grade finalized on ${completionDate}` : "Based on released formative marks"}
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
              <span className="text-xs text-gray-500 font-medium">Evaluated Assessments</span>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-3xl font-bold text-gray-900">
                  {courseGrades.filter(g => g.status === "Released").length} / {courseGrades.length}
                </span>
                <span className="text-xs text-gray-500">{isCompleted ? "Finalized" : "Released"}</span>
              </div>
              <p className="text-[11px] text-gray-400 mt-2">
                {isCompleted ? "100% of coursework assessed & recorded" : "Remaining items currently in grading"}
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
              <span className="text-xs text-gray-500 font-medium">Credit Allocation</span>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-3xl font-bold text-gray-900">6.0</span>
                <span className="text-xs text-gray-500">Credit Points Earned</span>
              </div>
              <p className="text-[11px] text-gray-400 mt-2">Accredited under {course.school}</p>
            </div>
          </div>

          {/* Grades Table */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h3 className="text-sm font-bold text-gray-900">
                {isCompleted ? "Final Assessment Results & Transcript Breakdown" : "Course Assessment Breakdown"}
              </h3>
              <span className="text-xs text-gray-400">Unit Code: {course.code}</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50/75 border-b border-gray-100 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-3.5">Assessment Item</th>
                    <th className="px-6 py-3.5">Score</th>
                    <th className="px-6 py-3.5">Max Score</th>
                    <th className="px-6 py-3.5">Grade</th>
                    <th className="px-6 py-3.5">Status</th>
                    <th className="px-6 py-3.5 text-right">Feedback</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-xs font-medium">
                  {courseGrades.map((g, idx) => (
                    <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                      <td className="px-6 py-4 font-bold text-gray-900">{g.assessment}</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">{g.status === "Released" ? g.score : "—"}</td>
                      <td className="px-6 py-4 text-gray-500">{g.max} pts</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-0.5 rounded font-bold ${
                          g.grade.startsWith("A") || g.grade === "HD"
                            ? "bg-emerald-50 text-emerald-700"
                            : g.grade.startsWith("B") || g.grade === "D"
                            ? "bg-blue-50 text-blue-700"
                            : "bg-gray-100 text-gray-500"
                        }`}>
                          {g.grade}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                          g.status === "Released"
                            ? "bg-green-50 text-green-700 border border-green-200"
                            : g.status === "Pending"
                            ? "bg-orange-50 text-orange-700 border border-orange-200"
                            : "bg-gray-100 text-gray-500 border border-gray-200"
                        }`}>
                          {g.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        {g.status === "Released" ? (
                          <button
                            onClick={() => showToast(`Viewing feedback for ${g.assessment}: "Excellent work on criteria."`)}
                            className="text-xs font-semibold text-blue-700 hover:underline"
                          >
                            View Feedback
                          </button>
                        ) : (
                          <span className="text-gray-400">Available after release</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ── MODALS ── */}

      {/* Modal: Assignment Submission */}
      {submittingAssignment && (
        <PanelModal
          title={`Submit: ${submittingAssignment.name}`}
          onClose={() => setSubmittingAssignment(null)}
        >
          <form onSubmit={handleConfirmSubmit} className="space-y-4">
            <p className="text-xs text-gray-500">{submittingAssignment.description}</p>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 text-xs text-blue-800 flex items-center gap-2">
              <IconAlertCircle className="w-4 h-4 shrink-0 text-blue-600" />
              <span>Due: {submittingAssignment.dueDate} · Accepted formats: .PDF, .ZIP (max 50MB)</span>
            </div>

            <div className="border-2 border-dashed border-gray-300 hover:border-blue-500 rounded-2xl p-6 text-center transition-colors cursor-pointer bg-gray-50/50">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-2">
                <IconPaperclip />
              </div>
              <p className="text-xs font-bold text-gray-800">Drag &amp; drop your submission file here</p>
              <p className="text-[11px] text-gray-400 mt-1">or browse files from your computer</p>
              <span className="inline-block mt-3 px-3 py-1 bg-white border border-gray-200 rounded-lg text-xs font-semibold text-gray-700 shadow-sm">
                Choose File
              </span>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Submission Comments (Optional)</label>
              <textarea
                rows={3}
                placeholder="Add any notes for the instructor or marker..."
                className="w-full text-xs rounded-xl border border-gray-200 p-3 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex items-center gap-2 pt-2">
              <input type="checkbox" id="integrity" required className="rounded border-gray-300 text-blue-600" />
              <label htmlFor="integrity" className="text-xs text-gray-600">
                I declare this work is entirely my own original submission.
              </label>
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setSubmittingAssignment(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-[#1a3a9e] hover:bg-[#102d80] transition-colors shadow-sm"
              >
                Confirm Submission
              </button>
            </div>
          </form>
        </PanelModal>
      )}

      {/* Modal: View Submission Details */}
      {viewingAssignment && (
        <PanelModal
          title={`Submission: ${viewingAssignment.name}`}
          onClose={() => setViewingAssignment(null)}
        >
          <div className="space-y-4 text-xs">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl border border-green-200 text-green-800">
              <span className="font-bold flex items-center gap-1.5">
                <IconCheck /> Submitted Successfully
              </span>
              <span className="text-[11px]">Receipt: #EDF-2026-8912</span>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 space-y-2 border border-gray-200">
              <div className="flex justify-between">
                <span className="text-gray-500">Assignment:</span>
                <span className="font-bold text-gray-800">{viewingAssignment.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Unit:</span>
                <span className="font-bold text-gray-800">{course.code}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">File uploaded:</span>
                <span className="font-semibold text-blue-700">{course.code.toLowerCase()}_submission_final.pdf</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Status:</span>
                <span className="font-semibold text-green-700">
                  {viewingAssignment.score ? "Graded & Finalized" : "Under Review"}
                </span>
              </div>
              {viewingAssignment.submissionDate && (
                <div className="flex justify-between">
                  <span className="text-gray-500">Submitted on:</span>
                  <span className="font-medium text-gray-700">{viewingAssignment.submissionDate}</span>
                </div>
              )}
              {viewingAssignment.score && (
                <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                  <span className="text-gray-700 font-bold">Awarded Score:</span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-purple-100 text-purple-800 border border-purple-200">
                    {viewingAssignment.score}
                  </span>
                </div>
              )}
              {viewingAssignment.feedback && (
                <div className="pt-2 border-t border-gray-200">
                  <span className="text-gray-500 block font-semibold mb-1">Evaluator Feedback:</span>
                  <p className="p-2.5 bg-white rounded-lg border border-gray-200 text-gray-700 italic">
                    "{viewingAssignment.feedback}"
                  </p>
                </div>
              )}
            </div>

            <button
              onClick={() => setViewingAssignment(null)}
              className="w-full py-2 bg-gray-900 text-white font-bold rounded-xl"
            >
              Close
            </button>
          </div>
        </PanelModal>
      )}

      {/* Modal: Quiz Info / Start */}
      {selectedQuiz && (
        <PanelModal
          title={selectedQuiz.name}
          onClose={() => setSelectedQuiz(null)}
        >
          <div className="space-y-4 text-xs">
            <p className="text-gray-600 leading-relaxed">{selectedQuiz.description}</p>
            <div className="grid grid-cols-2 gap-2 bg-gray-50 p-3 rounded-xl border border-gray-200">
              <div>
                <span className="text-gray-400 block text-[10px]">TIME LIMIT</span>
                <span className="font-bold text-gray-800">{selectedQuiz.timeLimit ?? "30 Mins"}</span>
              </div>
              <div>
                <span className="text-gray-400 block text-[10px]">TOTAL QUESTIONS</span>
                <span className="font-bold text-gray-800">{selectedQuiz.questions ?? 15} Questions</span>
              </div>
              <div>
                <span className="text-gray-400 block text-[10px]">WEIGHT</span>
                <span className="font-bold text-gray-800">{selectedQuiz.weight ?? "5%"}</span>
              </div>
              <div>
                <span className="text-gray-400 block text-[10px]">DUE DATE</span>
                <span className="font-bold text-gray-800">{selectedQuiz.dueDate}</span>
              </div>
            </div>

            {selectedQuiz.status === "open" ? (
              <>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-amber-800 text-[11px]">
                  <strong>Notice:</strong> Once you click Begin Quiz, the countdown timer will begin immediately and cannot be paused.
                </div>
                <button
                  onClick={() => {
                    showToast(`Quiz "${selectedQuiz.name}" started! Session timer active.`);
                    setSelectedQuiz(null);
                  }}
                  className="w-full py-2.5 bg-[#1a3a9e] text-white font-bold rounded-xl hover:bg-[#102d80] transition-colors shadow-sm"
                >
                  Begin Quiz Now
                </button>
              </>
            ) : selectedQuiz.status === "completed" ? (
              <div className="space-y-3">
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-800 flex justify-between items-center">
                  <span className="font-bold">Final Score:</span>
                  <span className="text-sm font-extrabold">{selectedQuiz.score}</span>
                </div>
                <button
                  onClick={() => setSelectedQuiz(null)}
                  className="w-full py-2 bg-gray-900 text-white font-bold rounded-xl"
                >
                  Close
                </button>
              </div>
            ) : (
              <button
                onClick={() => setSelectedQuiz(null)}
                className="w-full py-2 bg-gray-200 text-gray-700 font-bold rounded-xl"
              >
                Close (Locked)
              </button>
            )}
          </div>
        </PanelModal>
      )}
    </div>
  );
}

// ── Student portal ────────────────────────────────────────────────────────────
export function StudentDashboard({ onLogout = () => {} }: { onLogout?: () => void }) {
  const [activeNav, setActiveNav]         = useState("dashboard");
  const [collapsed, setCollapsed]         = useState(false);
  const [openCourse, setOpenCourse]       = useState<ActiveCourse | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<ActiveCourse | null>(null);
  const [searchQuery, setSearchQuery]     = useState("");
  const [executedSearchQuery, setExecutedSearchQuery] = useState("");
  const [studentQuizGroups, setStudentQuizGroups] = useState<QuizCourseGroup[]>(quizCourseGroups);

  const handleUpdateQuiz = (courseCode: string, quizId: string, updates: Partial<QuizItem>) => {
    setStudentQuizGroups((prev) =>
      prev.map((g) =>
        g.code === courseCode
          ? {
              ...g,
              quizzes: g.quizzes.map((q) =>
                q.id === quizId ? { ...q, ...updates } : q
              ),
            }
          : g
      )
    );
  };

  const [userName, setUserName] = useState("Richard Maceda Vitug");
  const [userRole, setUserRole] = useState("Student");
  const [theme, setTheme] = useState<"Light" | "Dark">("Light");
  const userInitials = getInitials(userName);

  useEffect(() => {
    const sessionUser = getSessionUser();
    if (sessionUser?.name) {
      setUserName(sessionUser.name);
    }
    if (sessionUser?.role) {
      setUserRole(sessionUser.role.charAt(0).toUpperCase() + sessionUser.role.slice(1));
    }
    try {
      const savedTheme = localStorage.getItem("eduflex_student_theme");
      if (savedTheme === "Light" || savedTheme === "Dark") {
        setTheme(savedTheme);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleThemeChange = (newTheme: "Light" | "Dark") => {
    setTheme(newTheme);
    try {
      localStorage.setItem("eduflex_student_theme", newTheme);
    } catch {
      // ignore
    }
  };

  const sidebarPx = collapsed ? "64px" : "224px";

  const allSearchItems = useMemo(() => buildStudentSearchCatalog(), []);

  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    const words = q.split(/\s+/).filter(Boolean);
    return allSearchItems.filter((item) => {
      const text = `${item.title} ${item.subtitle ?? ""} ${item.description} ${item.category} ${item.navLabel} ${(item.keywords ?? []).join(" ")}`.toLowerCase();
      return words.every((w) => text.includes(w));
    });
  }, [searchQuery, allSearchItems]);

  const handleSearchExecute = (q: string) => {
    setSearchQuery(q);
    setExecutedSearchQuery(q);
    setActiveNav("search");
  };

  const handleNavigateResult = (nav: string, course?: ActiveCourse) => {
    setActiveNav(nav);
    if (course) {
      setOpenCourse(course);
    }
  };

  return (
    <div className={`min-h-screen ${theme === "Dark" ? "dark bg-[#0b0f19] text-gray-100" : "bg-gray-100 text-gray-900"}`} style={{ fontFamily: "'Outfit', sans-serif" }}>
      <Sidebar
        active={activeNav === "course-detail" ? "courses" : activeNav}
        setActive={(nav) => {
          if (nav !== "course-detail") {
            setSelectedCourse(null);
          }
          setActiveNav(nav);
        }}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        onLogout={onLogout}
      />
      <Header
        sidebarW={sidebarPx}
        userName={userName}
        userRole={userRole}
        userInitials={userInitials}
        onCalendar={() => { setSelectedCourse(null); setActiveNav("calendar"); }}
        onMessages={() => { setSelectedCourse(null); setActiveNav("messages"); }}
        onNotifications={() => { setSelectedCourse(null); setActiveNav("announcements"); }}
        onProfile={() => { setSelectedCourse(null); setActiveNav("profile"); }}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={handleSearchExecute}
        searchResults={searchResults}
        onNavigateResult={handleNavigateResult}
      />

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
          {activeNav === "course-detail" && selectedCourse && (
            <CourseOverviewPage
              course={selectedCourse}
              onBack={() => {
                setSelectedCourse(null);
                setActiveNav("courses");
              }}
              setActiveNav={setActiveNav}
            />
          )}
          {activeNav === "assignments" && <AssignmentsPage />}
          {activeNav === "quizzes" && <QuizzesPage groups={studentQuizGroups} onUpdateQuiz={handleUpdateQuiz} />}
          {activeNav === "materials" && <LearningMaterialsPage />}
          {activeNav === "grades" && <GradesPage />}
          {activeNav === "calendar" && <CalendarPage />}
          {activeNav === "announcements" && <AnnouncementsPage />}
          {activeNav === "messages" && <MessagesPage />}
          {activeNav === "profile" && <ProfilePage userName={userName} onNameChange={setUserName} />}
          {activeNav === "settings" && <SettingsPage theme={theme} onThemeChange={handleThemeChange} />}
          {activeNav === "search" && (
            <SearchResultsPage
              query={executedSearchQuery || searchQuery}
              results={searchResults}
              onNavigate={handleNavigateResult}
              onQuickSearch={handleSearchExecute}
            />
          )}
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

      {openCourse && (
        <CourseDetailModal
          course={openCourse}
          onClose={() => setOpenCourse(null)}
          onGoToCourse={(course) => {
            setOpenCourse(null);
            setSelectedCourse(course);
            setActiveNav("course-detail");
          }}
        />
      )}

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
