"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import AdminUserManagement, { User as AdminUserManagementUser } from "./AdminUserManagement";
import { getSessionUser, getInitials } from "./auth";
import {
  AdminUser,
  AdminPendingItem,
  AdminCourse,
  AdminEnrollmentRecord,
  AdminAnnouncementItem,
  AdminChatMessage,
  AdminConversation,
  AdminCalendarEvent,
  AdminSystemSettingsData,
  INITIAL_ADMIN_USERS,
  INITIAL_ADMIN_PENDING,
  INITIAL_ADMIN_COURSES,
  INITIAL_ADMIN_ENROLLMENTS,
  INITIAL_ADMIN_ANNOUNCEMENTS,
  INITIAL_ADMIN_CONVERSATIONS,
  INITIAL_ADMIN_CALENDAR_EVENTS,
  INITIAL_ADMIN_SETTINGS,
} from "./adminData";

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
const IconUsers = ({ className = "w-5 h-5 shrink-0" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
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
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <path d="M15.54 8.46a5 5 0 010 7.07" />
    <path d="M19.07 4.93a10 10 0 010 14.14" />
  </svg>
);
const IconX = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
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
const IconChevronRight = ({ className = "w-4 h-4" }: { className?: string } = {}) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
    <polyline points="9 18 15 12 9 6" />
  </svg>
);
const IconChevronLeft = ({ className = "w-4 h-4" }: { className?: string } = {}) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
    <polyline points="15 18 9 12 15 6" />
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
const IconCalendar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 shrink-0">
    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
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
const IconPlus = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

// ── Nav Items ─────────────────────────────────────────────────────────────────
const adminNavItems = [
  { label: "Dashboard",         icon: <IconDashboard />,    id: "dashboard" },
  { label: "User Management",   icon: <IconUsers />,        id: "users" },
  { label: "Course Management", icon: <IconBook />,         id: "courses" },
  { label: "Enrollment",        icon: <IconEnrollment />,   id: "enrollment" },
  { label: "Reports & Analytics",icon: <IconBarChart />,    id: "reports" },
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
            className="text-white hover:text-blue-200 transition-colors flex flex-col items-center gap-1 cursor-pointer"
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
              className="text-blue-200 hover:text-white transition-colors ml-1 p-1 rounded hover:bg-white/10 cursor-pointer"
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
              className={`w-full flex items-center rounded-lg transition-all duration-150 text-left cursor-pointer
                ${collapsed ? "justify-center px-0 py-3" : "gap-3 px-3 py-2.5"}
                ${isActive ? "bg-white/20 text-white font-semibold" : "text-blue-100 hover:bg-white/10 hover:text-white"}`}
            >
              {item.icon}
              {!collapsed && <span className="text-sm truncate">{item.label}</span>}
            </button>
          );
        })}
      </nav>

      {/* Expand button when collapsed */}
      {collapsed && (
        <div className="px-2 py-3 border-t border-white/10 flex justify-center">
          <button
            onClick={() => setCollapsed(false)}
            className="text-blue-200 hover:text-white transition-colors p-2 rounded hover:bg-white/10 cursor-pointer"
            title="Expand"
          >
            <IconChevronsRight />
          </button>
        </div>
      )}

      {/* Logout */}
      {!collapsed && (
        <div className="px-2 py-4 border-t border-white/10">
          <button onClick={onLogout} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/10 hover:text-white transition-all duration-150 cursor-pointer">
            <IconLogout />
            <span>Logout</span>
          </button>
        </div>
      )}
      {collapsed && (
        <div className="px-2 py-4 border-t border-white/10 flex justify-center">
          <button onClick={onLogout} className="text-blue-100 hover:text-white hover:bg-white/10 transition-all p-2 rounded-lg cursor-pointer" title="Logout">
            <IconLogout />
          </button>
        </div>
      )}
    </aside>
  );
}

// ── Search Item Interface ─────────────────────────────────────────────────────
interface AdminSearchItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  badgeColor: string;
  targetPage: string;
}

// ── Header ────────────────────────────────────────────────────────────────────
function AdminHeader({
  sidebarW,
  userName,
  userInitials,
  setActive,
  searchPool,
  unreadMessagesCount,
}: {
  sidebarW: string;
  userName: string;
  userInitials: string;
  setActive?: (id: string) => void;
  searchPool: AdminSearchItem[];
  unreadMessagesCount: number;
}) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const trimmed = query.trim().toLowerCase();
  const matches = trimmed.length > 0
    ? searchPool.filter((item) => {
        return (
          item.title.toLowerCase().includes(trimmed) ||
          item.subtitle.toLowerCase().includes(trimmed) ||
          item.category.toLowerCase().includes(trimmed)
        );
      })
    : [];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSelect = (item: AdminSearchItem) => {
    if (setActive) {
      setActive(item.targetPage);
    }
    setQuery("");
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (matches.length > 0) {
        handleSelect(matches[0]);
      }
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <header
      className="fixed top-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 gap-4 z-20 transition-all duration-300"
      style={{ left: sidebarW }}
    >
      <div className="flex-1 relative max-w-2xl min-w-[240px]" ref={searchRef}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (matches.length > 0) {
              handleSelect(matches[0]);
            }
          }}
          className="relative w-full"
        >
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            <IconSearch />
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => {
              if (query.trim().length > 0) setIsOpen(true);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search users, courses, enrollments, reports, messages..."
            className="w-full pl-9 pr-24 py-2 bg-gray-100 rounded-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
          />
          {query.length > 0 && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setIsOpen(false);
              }}
              className="absolute right-20 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1 rounded-full cursor-pointer"
              title="Clear search"
            >
              <IconX className="w-3.5 h-3.5" />
            </button>
          )}
          <button
            type="submit"
            className="absolute right-1.5 top-1/2 -translate-y-1/2 px-4 py-1 bg-[#1a3a9e] hover:bg-[#102d80] text-white text-xs font-bold rounded-full transition-colors shadow-sm cursor-pointer"
          >
            Search
          </button>
        </form>

        {isOpen && query.trim().length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 max-h-96 overflow-y-auto divide-y divide-gray-50 animate-in fade-in zoom-in-95 duration-150">
            <div className="px-4 py-2 bg-gray-50 border-b border-gray-100 flex items-center justify-between text-[11px] text-gray-500 font-medium">
              <span>Search Results ({matches.length})</span>
              <span>Press Enter to select top result</span>
            </div>

            {matches.length > 0 ? (
              <div className="py-1">
                {matches.slice(0, 8).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(item)}
                    className="w-full px-4 py-3 text-left flex items-center justify-between gap-3 hover:bg-blue-50/60 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${item.badgeColor}`}>
                        {item.category}
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors truncate">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-blue-600 shrink-0 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Go to {item.targetPage.charAt(0).toUpperCase() + item.targetPage.slice(1)}</span>
                      <IconChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="p-6 text-center text-gray-500">
                <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                  <IconSearch />
                </div>
                <p className="text-sm font-semibold text-gray-700">No results found</p>
                <p className="text-xs text-gray-400 mt-1">
                  No matching results found for &ldquo;{query}&rdquo;. Try searching for users, courses, reports, or settings.
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flex items-center gap-3 shrink-0">
        <button
          type="button"
          onClick={() => setActive && setActive("calendar")}
          className="relative text-gray-500 hover:text-blue-700 transition-colors p-1.5 rounded-full hover:bg-gray-100 cursor-pointer"
          title="Academic Calendar"
          aria-label="Academic Calendar"
        >
          <IconCalendar />
        </button>
        <button
          type="button"
          onClick={() => setActive && setActive("announcements")}
          className="relative text-gray-500 hover:text-blue-700 transition-colors p-1.5 rounded-full hover:bg-gray-100 cursor-pointer"
          title="Announcements"
          aria-label="Announcements"
        >
          <IconAnnouncement />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white" />
        </button>
        <button
          type="button"
          onClick={() => setActive && setActive("messages")}
          className="relative text-gray-500 hover:text-blue-700 transition-colors p-1.5 rounded-full hover:bg-gray-100 cursor-pointer"
          title="Messages"
          aria-label="Messages"
        >
          <IconMail />
          {unreadMessagesCount > 0 && (
            <span className="absolute -top-1 -right-1 min-w-4 h-4 px-1 bg-blue-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center border border-white">
              {unreadMessagesCount}
            </span>
          )}
        </button>
        <button
          type="button"
          onClick={() => setActive && setActive("settings")}
          className="flex items-center gap-2 pl-3 border-l border-gray-200 hover:opacity-80 transition-opacity cursor-pointer text-left"
          title="System Settings & Profile"
        >
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-800 leading-tight">{userName}</p>
            <p className="text-xs text-gray-500">Administrator</p>
          </div>
          <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0" style={{ background: "#7c3aed" }}>
            {userInitials}
          </div>
        </button>
      </div>
    </header>
  );
}

// ── Progress Bar ──────────────────────────────────────────────────────────────
function ProgressBar({ pct, color }: { pct: number; color: string }) {
  const safePct = Math.min(Math.max(pct, 0), 100);
  return (
    <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
      <div className="h-full rounded-full transition-all duration-500" style={{ width: `${safePct}%`, background: color }} />
    </div>
  );
}

// ── Page Header helper ────────────────────────────────────────────────────────
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

type BadgeVariant = "blue" | "green" | "yellow" | "red" | "purple" | "gray" | "orange";
function Badge({ label, variant = "blue" }: { label: string; variant?: BadgeVariant }) {
  const map: Record<BadgeVariant, string> = {
    blue:   "bg-blue-50 text-blue-700",
    green:  "bg-green-50 text-green-700",
    yellow: "bg-yellow-50 text-yellow-700",
    red:    "bg-red-50 text-red-600",
    purple: "bg-purple-50 text-purple-700",
    orange: "bg-orange-50 text-orange-700",
    gray:   "bg-gray-100 text-gray-600",
  };
  return <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${map[variant] ?? map.gray}`}>{label}</span>;
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className="text-left text-[10px] font-bold text-gray-400 uppercase tracking-wider py-2.5 px-4 bg-gray-50 first:rounded-tl-xl last:rounded-tr-xl">{children}</th>;
}
function Td({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <td className={`py-3.5 px-4 text-sm text-gray-700 border-b border-gray-100 ${className}`}>{children}</td>;
}

// ── 1. Admin Dashboard Home ───────────────────────────────────────────────────
function AdminDashboardHome({
  userName,
  setActive,
  users,
  pending,
  courses,
  enrollments,
  announcements,
  onApprovePending,
  onRejectPending,
  onQuickAction,
}: {
  userName: string;
  setActive: (id: string) => void;
  users: AdminUser[];
  pending: AdminPendingItem[];
  courses: AdminCourse[];
  enrollments: AdminEnrollmentRecord[];
  announcements: AdminAnnouncementItem[];
  onApprovePending: (id: string) => void;
  onRejectPending: (id: string) => void;
  onQuickAction: (action: "addUser" | "createCourse" | "postAnnouncement" | "generateReport") => void;
}) {
  const firstName = userName.split(" ")[0];

  const totalStudents = users.filter((u) => u.role === "Student").length;
  const activeCourses = courses.filter((c) => c.status === "Active").length;
  const totalInstructors = users.filter((u) => u.role === "Instructor").length;
  const pendingRequestsCount = pending.length;

  const latestAnnouncement = announcements.find((a) => a.status === "Published") ?? announcements[0];

  const quickActions = [
    { label: "Add New User",      icon: <IconUserPlus className="w-5 h-5" />,   bg: "bg-blue-50 text-blue-700",   action: () => onQuickAction("addUser") },
    { label: "Create Course",     icon: <IconBook />,                           bg: "bg-purple-50 text-purple-700", action: () => onQuickAction("createCourse") },
    { label: "Post Announcement", icon: <IconAnnouncement />,                   bg: "bg-orange-50 text-orange-600", action: () => onQuickAction("postAnnouncement") },
    { label: "Generate Report",   icon: <IconBarChart />,                       bg: "bg-green-50 text-green-700", action: () => onQuickAction("generateReport") },
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
            <p className="text-sm text-gray-500 mt-0.5">Welcome back, {firstName}. Here&apos;s what&apos;s happening today.</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-sm">
            <IconClock className="w-4 h-4 text-gray-400" />
            <span>Sep 2, 2026 — Trimester 2, 2026</span>
          </div>
        </div>
      </div>

      {/* Announcement Banner */}
      <div
        className="rounded-2xl flex items-center gap-4 px-5 py-4 mb-6 overflow-hidden cursor-pointer shadow-sm hover:opacity-95 transition-opacity"
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
              {latestAnnouncement?.title ? `${latestAnnouncement.title}: ${latestAnnouncement.desc}` : "Semester enrollment is now open — 47 new enrollment requests pending review."} &nbsp;&nbsp; {pending.length} pending approvals requiring review. &nbsp;&nbsp; LMS platform operational.
            </p>
          </div>
        </div>
        <span className="shrink-0 text-blue-200">
          <IconChevronRight />
        </span>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <button
          onClick={() => setActive("users")}
          className="w-full text-left bg-white border border-gray-200 shadow-sm rounded-2xl p-4 flex items-start gap-3 hover:shadow-md hover:border-blue-300 transition-all cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-blue-50 text-blue-600">
            <IconUsers />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">Total Students</p>
            <p className="text-2xl font-extrabold text-gray-900 leading-none">{totalStudents}</p>
            <p className="text-xs text-gray-500 mt-1">Active student accounts</p>
          </div>
        </button>

        <button
          onClick={() => setActive("courses")}
          className="w-full text-left bg-white border border-gray-200 shadow-sm rounded-2xl p-4 flex items-start gap-3 hover:shadow-md hover:border-purple-300 transition-all cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-purple-50 text-purple-600">
            <IconBook />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">Active Courses</p>
            <p className="text-2xl font-extrabold text-gray-900 leading-none">{activeCourses}</p>
            <p className="text-xs text-gray-500 mt-1">Trimester 2, 2026</p>
          </div>
        </button>

        <button
          onClick={() => setActive("users")}
          className="w-full text-left bg-white border border-gray-200 shadow-sm rounded-2xl p-4 flex items-start gap-3 hover:shadow-md hover:border-green-300 transition-all cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-green-50 text-green-600">
            <IconShield />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">Instructors</p>
            <p className="text-2xl font-extrabold text-gray-900 leading-none">{totalInstructors}</p>
            <p className="text-xs text-gray-500 mt-1">Teaching faculty</p>
          </div>
        </button>

        <button
          onClick={() => setActive("enrollment")}
          className="w-full text-left bg-orange-50 border border-orange-200 shadow-sm rounded-2xl p-4 flex items-start gap-3 hover:shadow-md hover:border-orange-300 transition-all cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-orange-100 text-orange-600">
            <IconEnrollment />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-orange-700 opacity-70 mb-0.5">Pending Approvals</p>
            <p className="text-2xl font-extrabold text-orange-800 leading-none">{pendingRequestsCount}</p>
            <p className="text-xs text-orange-600 mt-1">Requires review</p>
          </div>
        </button>
      </div>

      {/* Main Sections */}
      <div className="space-y-5">
        {/* Quick Actions */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4">
          <p className="text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-3">Quick Actions</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {quickActions.map((a) => (
              <button
                key={a.label}
                onClick={a.action}
                className={`flex flex-col items-center gap-2 py-4 rounded-xl border border-transparent hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer ${a.bg}`}
              >
                <span>{a.icon}</span>
                <span className="text-xs font-semibold text-center leading-tight">{a.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Pending Approvals */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <p className="text-[10px] font-bold text-blue-700 uppercase tracking-widest">Pending Approvals</p>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-orange-100 text-orange-800">{pending.length}</span>
            </div>
            <button
              onClick={() => setActive("users")}
              className="text-xs text-blue-600 hover:underline font-medium cursor-pointer"
            >
              View All &gt;
            </button>
          </div>
          {pending.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <IconCheckCircle className="w-8 h-8 mx-auto text-green-500 mb-2" />
              <p className="text-sm font-semibold text-gray-800">No pending approval requests</p>
              <p className="text-xs text-gray-400 mt-0.5">All accounts and registrations have been reviewed.</p>
            </div>
          ) : (
            <>
              <div
                className="grid px-5 py-2.5 bg-gray-50 border-b border-gray-100 gap-4"
                style={{ gridTemplateColumns: "2fr 1fr 2fr 1fr 100px" }}
              >
                {["Name", "Role", "Request", "Submitted", "Action"].map((h) => (
                  <p key={h} className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{h}</p>
                ))}
              </div>
              {pending.slice(0, 5).map((item) => (
                <div
                  key={item.id}
                  className="grid items-center px-5 py-3.5 border-b border-gray-100 last:border-0 hover:bg-blue-50/30 transition-colors gap-4"
                  style={{ gridTemplateColumns: "2fr 1fr 2fr 1fr 100px" }}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-bold shrink-0">
                      {item.initials}
                    </div>
                    <p className="text-sm font-semibold text-gray-800 truncate">{item.name}</p>
                  </div>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full w-fit ${item.role === "Instructor" ? "bg-purple-50 text-purple-700" : "bg-blue-50 text-blue-700"}`}>
                    {item.role}
                  </span>
                  <p className="text-sm text-gray-600 truncate">{item.action}</p>
                  <p className="text-xs text-gray-400">{item.submitted}</p>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => onApprovePending(item.id)}
                      className="w-7 h-7 rounded-lg bg-green-50 hover:bg-green-100 text-green-600 flex items-center justify-center transition-colors cursor-pointer"
                      title="Approve"
                    >
                      <IconCheck className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onRejectPending(item.id)}
                      className="w-7 h-7 rounded-lg bg-red-50 hover:bg-red-100 text-red-500 flex items-center justify-center transition-colors cursor-pointer"
                      title="Reject"
                    >
                      <IconXCircle className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Recent User Registrations */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <p className="text-[10px] font-bold text-blue-700 uppercase tracking-widest">Recent User Registrations</p>
            <button
              onClick={() => setActive("users")}
              className="text-xs text-blue-600 hover:underline font-medium cursor-pointer"
            >
              View All &gt;
            </button>
          </div>
          <div
            className="grid px-5 py-2.5 bg-gray-50 border-b border-gray-100 gap-4"
            style={{ gridTemplateColumns: "2fr 1.5fr 1fr 1fr 1fr" }}
          >
            {["Name", "User ID", "Role", "Status", "Joined"].map((h) => (
              <p key={h} className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{h}</p>
            ))}
          </div>
          {users.slice(0, 5).map((u) => (
            <div
              key={u.id}
              className="grid items-center px-5 py-3.5 border-b border-gray-100 last:border-0 hover:bg-blue-50/30 transition-colors gap-4"
              style={{ gridTemplateColumns: "2fr 1.5fr 1fr 1fr 1fr" }}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 text-white overflow-hidden ${u.role === "Instructor" ? "bg-purple-500" : "bg-blue-500"}`}>
                  {u.avatar ? (
                    <img src={u.avatar} alt={u.name} className="w-full h-full object-cover" />
                  ) : (
                    u.name.split(" ").map((n) => n[0]).join("").slice(0, 2)
                  )}
                </div>
                <p className="text-sm font-semibold text-gray-800 truncate">{u.name}</p>
              </div>
              <p className="text-xs font-mono text-gray-500 truncate">{u.id}</p>
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
            <button
              onClick={() => setActive("courses")}
              className="text-xs text-blue-600 hover:underline font-medium cursor-pointer"
            >
              Manage Courses &gt;
            </button>
          </div>
          <div className="space-y-4">
            {courses.slice(0, 4).map((c, i) => {
              const pct = Math.round((c.students / Math.max(c.capacity, 1)) * 100);
              const colors = ["#2563eb", "#16a34a", "#db2777", "#7c3aed"];
              const color = colors[i % colors.length];
              return (
                <div key={c.code}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-bold text-gray-500">{c.code}</span>
                      <span className="text-sm font-semibold text-gray-800">{c.name}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="font-bold" style={{ color }}>{c.students}</span>
                      <span>/ {c.capacity} enrolled</span>
                      <span className="font-semibold text-gray-700">{pct}%</span>
                    </div>
                  </div>
                  <ProgressBar pct={pct} color={color} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── 2. Course Management ───────────────────────────────────────────────────────
function AdminCourseManagement({
  courses,
  setCourses,
  instructors,
  initialAction,
  onClearInitialAction,
  onShowToast,
}: {
  courses: AdminCourse[];
  setCourses: React.Dispatch<React.SetStateAction<AdminCourse[]>>;
  instructors: AdminUser[];
  initialAction?: string | null;
  onClearInitialAction?: () => void;
  onShowToast: (msg: string) => void;
}) {
  const [search, setSearch] = useState("");
  const [semesterFilter, setSemesterFilter] = useState("All Semesters");
  const [facultyFilter, setFacultyFilter] = useState("All Faculties");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [instructorFilter, setInstructorFilter] = useState("All Instructors");
  const [page, setPage] = useState(1);

  // Modals: create, edit, view, delete
  const [modalState, setModalState] = useState<{
    type: "create" | "edit" | "view" | "delete";
    course?: AdminCourse;
  } | null>(initialAction === "create" ? { type: "create" } : null);

  // Form state
  const [formCode, setFormCode] = useState("");
  const [formName, setFormName] = useState("");
  const [formFaculty, setFormFaculty] = useState("School of ICT");
  const [formInstructor, setFormInstructor] = useState("");
  const [formCapacity, setFormCapacity] = useState(120);
  const [formSemester, setFormSemester] = useState("T2 2026");
  const [formStatus, setFormStatus] = useState<"Active" | "Draft" | "Archived">("Active");
  const [formDesc, setFormDesc] = useState("");
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (initialAction === "create") {
      openCreateModal();
      if (onClearInitialAction) onClearInitialAction();
    }
  }, [initialAction]);

  const openCreateModal = () => {
    setFormCode("");
    setFormName("");
    setFormFaculty("School of ICT");
    setFormInstructor(instructors[0]?.name || "Prof. Sarita Koirala");
    setFormCapacity(120);
    setFormSemester("T2 2026");
    setFormStatus("Active");
    setFormDesc("");
    setFormError("");
    setModalState({ type: "create" });
  };

  const openEditModal = (c: AdminCourse) => {
    setFormCode(c.code);
    setFormName(c.name);
    setFormFaculty(c.faculty);
    setFormInstructor(c.instructor);
    setFormCapacity(c.capacity);
    setFormSemester(c.semester);
    setFormStatus(c.status);
    setFormDesc(c.description || "");
    setFormError("");
    setModalState({ type: "edit", course: c });
  };

  const handleSaveCourse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formCode.trim() || !formName.trim()) {
      setFormError("Course code and course name are required.");
      return;
    }

    if (modalState?.type === "create") {
      // Check duplicate
      if (courses.some((c) => c.code.toLowerCase() === formCode.trim().toLowerCase())) {
        setFormError(`Course code ${formCode.trim()} already exists.`);
        return;
      }
      const newCourse: AdminCourse = {
        code: formCode.trim().toUpperCase(),
        name: formName.trim(),
        faculty: formFaculty,
        instructor: formInstructor || "Prof. Sarita Koirala",
        students: 0,
        capacity: Number(formCapacity) || 100,
        semester: formSemester,
        status: formStatus,
        description: formDesc.trim(),
      };
      setCourses([newCourse, ...courses]);
      onShowToast(`Course ${newCourse.code} created successfully.`);
    } else if (modalState?.type === "edit" && modalState.course) {
      const updated = courses.map((c) =>
        c.code === modalState.course!.code
          ? {
              ...c,
              name: formName.trim(),
              faculty: formFaculty,
              instructor: formInstructor,
              capacity: Number(formCapacity) || 100,
              semester: formSemester,
              status: formStatus,
              description: formDesc.trim(),
            }
          : c
      );
      setCourses(updated);
      onShowToast(`Course ${modalState.course.code} updated successfully.`);
    }

    setModalState(null);
  };

  const handleDeleteCourse = (code: string) => {
    setCourses((prev) => prev.filter((c) => c.code !== code));
    setModalState(null);
    onShowToast(`Course ${code} has been deleted.`);
  };

  // Filtered
  const filtered = useMemo(() => {
    return courses.filter((c) => {
      const q = search.trim().toLowerCase();
      const matchSearch =
        !q ||
        c.code.toLowerCase().includes(q) ||
        c.name.toLowerCase().includes(q) ||
        c.instructor.toLowerCase().includes(q) ||
        c.faculty.toLowerCase().includes(q);
      const matchSemester = semesterFilter === "All Semesters" || c.semester === semesterFilter;
      const matchFaculty = facultyFilter === "All Faculties" || c.faculty === facultyFilter;
      const matchStatus = statusFilter === "All Status" || c.status === statusFilter;
      const matchInstructor = instructorFilter === "All Instructors" || c.instructor === instructorFilter;
      return matchSearch && matchSemester && matchFaculty && matchStatus && matchInstructor;
    });
  }, [courses, search, semesterFilter, facultyFilter, statusFilter, instructorFilter]);

  const pageSize = 7;
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageItems = filtered.slice((page - 1) * pageSize, page * pageSize);

  const statusVariant: Record<string, BadgeVariant> = { Active: "green", Draft: "yellow", Archived: "gray" };

  return (
    <div className="p-6">
      <PageHeader
        breadcrumb="Course Management"
        title="Course Management"
        subtitle="Create, manage, and organize academic courses"
        action={
          <button
            onClick={openCreateModal}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-colors hover:opacity-90 cursor-pointer shadow-sm"
            style={{ background: "#1a3a9e" }}
          >
            <span className="text-base leading-none">+</span> Create Course
          </button>
        }
      />

      {/* Filter Bar */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm px-4 py-3 mb-5 flex flex-wrap gap-3 items-center">
        <div className="relative flex-1 min-w-48">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <IconSearch />
          </span>
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            placeholder="Search courses by code, title, instructor..."
            className="w-full pl-9 pr-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
          />
        </div>

        <select
          value={semesterFilter}
          onChange={(e) => { setSemesterFilter(e.target.value); setPage(1); }}
          className="px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 border-none cursor-pointer"
        >
          <option>All Semesters</option>
          <option>T2 2026</option>
          <option>T1 2026</option>
          <option>T3 2025</option>
        </select>

        <select
          value={facultyFilter}
          onChange={(e) => { setFacultyFilter(e.target.value); setPage(1); }}
          className="px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 border-none cursor-pointer"
        >
          <option>All Faculties</option>
          <option>School of ICT</option>
          <option>School of Business</option>
          <option>School of Engineering</option>
        </select>

        <select
          value={statusFilter}
          onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }}
          className="px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 border-none cursor-pointer"
        >
          <option>All Status</option>
          <option>Active</option>
          <option>Draft</option>
          <option>Archived</option>
        </select>

        <select
          value={instructorFilter}
          onChange={(e) => { setInstructorFilter(e.target.value); setPage(1); }}
          className="px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 border-none cursor-pointer max-w-xs truncate"
        >
          <option>All Instructors</option>
          {Array.from(new Set(courses.map((c) => c.instructor))).map((inst) => (
            <option key={inst} value={inst}>{inst}</option>
          ))}
        </select>

        {(search || semesterFilter !== "All Semesters" || facultyFilter !== "All Faculties" || statusFilter !== "All Status" || instructorFilter !== "All Instructors") && (
          <button
            onClick={() => {
              setSearch("");
              setSemesterFilter("All Semesters");
              setFacultyFilter("All Faculties");
              setStatusFilter("All Status");
              setInstructorFilter("All Instructors");
              setPage(1);
            }}
            className="text-xs text-blue-600 hover:underline px-2 py-1 cursor-pointer font-medium"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Courses Table */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <Th>Course Code</Th>
              <Th>Course Name</Th>
              <Th>Faculty/School</Th>
              <Th>Instructor</Th>
              <Th>Students</Th>
              <Th>Semester</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {pageItems.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-center py-12 text-gray-500">
                  <p className="text-sm font-semibold">No courses match your criteria</p>
                  <p className="text-xs text-gray-400 mt-1">Try adjusting your filters or search query.</p>
                </td>
              </tr>
            ) : (
              pageItems.map((c) => (
                <tr key={c.code} className="hover:bg-blue-50/30 transition-colors">
                  <Td>
                    <span className="font-mono font-bold text-blue-700 text-xs">{c.code}</span>
                  </Td>
                  <Td>
                    <span className="font-semibold text-gray-800">{c.name}</span>
                  </Td>
                  <Td className="text-gray-500">{c.faculty}</Td>
                  <Td className="text-gray-700">{c.instructor}</Td>
                  <Td>
                    <span className="font-semibold">{c.students}</span>
                    <span className="text-xs text-gray-400">/{c.capacity}</span>
                  </Td>
                  <Td className="text-gray-500">{c.semester}</Td>
                  <Td><Badge label={c.status} variant={statusVariant[c.status]} /></Td>
                  <Td>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setModalState({ type: "view", course: c })}
                        className="text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors cursor-pointer"
                      >
                        View
                      </button>
                      <button
                        onClick={() => openEditModal(c)}
                        className="text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 transition-colors cursor-pointer"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => setModalState({ type: "delete", course: c })}
                        className="text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 transition-colors cursor-pointer"
                        title="Delete Course"
                      >
                        Delete
                      </button>
                    </div>
                  </Td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-between px-5 py-3.5 border-t border-gray-100">
          <p className="text-xs text-gray-400">
            Showing {filtered.length > 0 ? (page - 1) * pageSize + 1 : 0} to{" "}
            {Math.min(page * pageSize, filtered.length)} of {filtered.length} courses
          </p>
          <div className="flex items-center gap-1.5">
            <button
              disabled={page <= 1}
              onClick={() => setPage((p) => p - 1)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                page <= 1 ? "bg-gray-50 text-gray-300 cursor-not-allowed" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  p === page ? "text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                style={p === page ? { background: "#1a3a9e" } : {}}
              >
                {p}
              </button>
            ))}
            <button
              disabled={page >= totalPages}
              onClick={() => setPage((p) => p + 1)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                page >= totalPages ? "bg-gray-50 text-gray-300 cursor-not-allowed" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Create / Edit Modal */}
      {(modalState?.type === "create" || modalState?.type === "edit") && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-lg p-6 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">
                {modalState.type === "create" ? "Create New Course" : `Edit Course: ${modalState.course?.code}`}
              </h2>
              <button
                onClick={() => setModalState(null)}
                className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 cursor-pointer"
              >
                <IconX />
              </button>
            </div>

            <form onSubmit={handleSaveCourse} className="space-y-4">
              {formError && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600 font-medium">
                  {formError}
                </div>
              )}

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Course Code *</label>
                  <input
                    type="text"
                    value={formCode}
                    disabled={modalState.type === "edit"}
                    onChange={(e) => setFormCode(e.target.value)}
                    placeholder="e.g. ICT450"
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50 disabled:opacity-60"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Semester</label>
                  <select
                    value={formSemester}
                    onChange={(e) => setFormSemester(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50"
                  >
                    <option>T2 2026</option>
                    <option>T1 2026</option>
                    <option>T3 2025</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Course Name *</label>
                <input
                  type="text"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="e.g. Cloud Architecture and Operations"
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Faculty/School</label>
                  <select
                    value={formFaculty}
                    onChange={(e) => setFormFaculty(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50"
                  >
                    <option>School of ICT</option>
                    <option>School of Business</option>
                    <option>School of Engineering</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Status</label>
                  <select
                    value={formStatus}
                    onChange={(e) => setFormStatus(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50"
                  >
                    <option>Active</option>
                    <option>Draft</option>
                    <option>Archived</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Assigned Instructor</label>
                  <select
                    value={formInstructor}
                    onChange={(e) => setFormInstructor(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50"
                  >
                    {instructors.map((i) => (
                      <option key={i.id} value={i.name}>{i.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Class Capacity</label>
                  <input
                    type="number"
                    min={10}
                    max={500}
                    value={formCapacity}
                    onChange={(e) => setFormCapacity(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Course Description</label>
                <textarea
                  rows={3}
                  value={formDesc}
                  onChange={(e) => setFormDesc(e.target.value)}
                  placeholder="Overview of syllabus, prerequisites, and learning objectives..."
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50 resize-none"
                />
              </div>

              <div className="flex gap-3 pt-3 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setModalState(null)}
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold text-white hover:opacity-90 transition-opacity cursor-pointer"
                  style={{ background: "#1a3a9e" }}
                >
                  {modalState.type === "create" ? "Create Course" : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View Modal */}
      {modalState?.type === "view" && modalState.course && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-lg p-6">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
              <div>
                <span className="text-xs font-mono font-bold text-blue-700">{modalState.course.code}</span>
                <h2 className="text-lg font-bold text-gray-900">{modalState.course.name}</h2>
              </div>
              <button
                onClick={() => setModalState(null)}
                className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 cursor-pointer"
              >
                <IconX />
              </button>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span className="text-gray-400">Faculty / Department</span>
                <span className="font-medium text-gray-800">{modalState.course.faculty}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span className="text-gray-400">Lead Instructor</span>
                <span className="font-medium text-gray-800">{modalState.course.instructor}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span className="text-gray-400">Enrolled Students</span>
                <span className="font-medium text-gray-800">
                  {modalState.course.students} of {modalState.course.capacity} (
                  {Math.round((modalState.course.students / Math.max(modalState.course.capacity, 1)) * 100)}%)
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span className="text-gray-400">Semester Offering</span>
                <span className="font-medium text-gray-800">{modalState.course.semester}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span className="text-gray-400">Status</span>
                <Badge label={modalState.course.status} variant={statusVariant[modalState.course.status]} />
              </div>
              <div>
                <span className="text-xs font-semibold text-gray-400 block mb-1">Course Description</span>
                <p className="text-xs text-gray-600 bg-gray-50 p-3 rounded-xl leading-relaxed">
                  {modalState.course.description || "No specific course description recorded."}
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-5 pt-3 border-t border-gray-100">
              <button
                onClick={() => openEditModal(modalState.course!)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-blue-50 text-blue-700 hover:bg-blue-100 cursor-pointer"
              >
                Edit Course
              </button>
              <button
                onClick={() => setModalState(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {modalState?.type === "delete" && modalState.course && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-sm p-6 text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-3">
              <IconTrash className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-1">Delete Course</h3>
            <p className="text-xs text-gray-500 mb-5">
              Are you sure you want to remove <strong>{modalState.course.code} – {modalState.course.name}</strong>? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setModalState(null)}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteCourse(modalState.course!.code)}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white bg-red-600 hover:bg-red-700 cursor-pointer"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── 3. Enrollment ──────────────────────────────────────────────────────────────
function AdminEnrollment({
  enrollments,
  setEnrollments,
  students,
  courses,
  setCourses,
  onShowToast,
}: {
  enrollments: AdminEnrollmentRecord[];
  setEnrollments: React.Dispatch<React.SetStateAction<AdminEnrollmentRecord[]>>;
  students: AdminUser[];
  courses: AdminCourse[];
  setCourses: React.Dispatch<React.SetStateAction<AdminCourse[]>>;
  onShowToast: (msg: string) => void;
}) {
  const [search, setSearch] = useState("");
  const [courseFilter, setCourseFilter] = useState("All Courses");
  const [semesterFilter, setSemesterFilter] = useState("All Semesters");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [page, setPage] = useState(1);

  // Modal states
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [viewRecord, setViewRecord] = useState<AdminEnrollmentRecord | null>(null);

  // Enrollment modal workflow states
  const [selectedStudentId, setSelectedStudentId] = useState("");
  const [selectedCourseCode, setSelectedCourseCode] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("T2 2026");
  const [eligibilityResult, setEligibilityResult] = useState<{
    checked: boolean;
    eligible: boolean;
    reason: string;
  } | null>(null);

  const resetEnrollWorkflow = () => {
    setSelectedStudentId("");
    setSelectedCourseCode("");
    setSelectedSemester("T2 2026");
    setEligibilityResult(null);
  };

  const checkEligibility = () => {
    if (!selectedStudentId || !selectedCourseCode) {
      setEligibilityResult({
        checked: true,
        eligible: false,
        reason: "Please select both a student and a course to verify eligibility.",
      });
      return;
    }

    const student = students.find((s) => s.id === selectedStudentId);
    const course = courses.find((c) => c.code === selectedCourseCode);

    // 1. Check if already enrolled in this course for this semester
    const alreadyEnrolled = enrollments.some(
      (e) =>
        e.studentId === selectedStudentId &&
        e.courseCode === selectedCourseCode &&
        e.semester === selectedSemester &&
        e.status === "Enrolled"
    );
    if (alreadyEnrolled) {
      setEligibilityResult({
        checked: true,
        eligible: false,
        reason: `Student ${student?.name} is ALREADY enrolled in ${course?.code} for ${selectedSemester}.`,
      });
      return;
    }

    // 2. Check course capacity
    if (course && course.students >= course.capacity) {
      setEligibilityResult({
        checked: true,
        eligible: false,
        reason: `Course ${course.code} is currently at full capacity (${course.students}/${course.capacity}).`,
      });
      return;
    }

    // 3. Eligible
    setEligibilityResult({
      checked: true,
      eligible: true,
      reason: `Eligibility Verified: ${student?.name} meets prerequisites for ${course?.name}. Open capacity available (${course?.students}/${course?.capacity}).`,
    });
  };

  const handleConfirmEnrollment = () => {
    const student = students.find((s) => s.id === selectedStudentId);
    const course = courses.find((c) => c.code === selectedCourseCode);
    if (!student || !course) return;

    const newRecord: AdminEnrollmentRecord = {
      id: `ENR-${String(Date.now()).slice(-4)}`,
      studentName: student.name,
      studentId: student.id,
      courseName: course.name,
      courseCode: course.code,
      semester: selectedSemester,
      date: "Sep 2, 2026",
      status: "Enrolled",
    };

    setEnrollments([newRecord, ...enrollments]);

    // Increment enrolled students in courses
    setCourses((prev) =>
      prev.map((c) => (c.code === course.code ? { ...c, students: c.students + 1 } : c))
    );

    setShowEnrollModal(false);
    resetEnrollWorkflow();
    onShowToast(`Successfully enrolled ${student.name} in ${course.code}!`);
  };

  const handleToggleStatus = (id: string, newStatus: "Enrolled" | "Dropped") => {
    setEnrollments((prev) =>
      prev.map((e) => {
        if (e.id === id) {
          const prevStatus = e.status;
          if (prevStatus === "Enrolled" && newStatus === "Dropped") {
            setCourses((clist) =>
              clist.map((c) => (c.code === e.courseCode ? { ...c, students: Math.max(0, c.students - 1) } : c))
            );
          } else if (prevStatus !== "Enrolled" && newStatus === "Enrolled") {
            setCourses((clist) =>
              clist.map((c) => (c.code === e.courseCode ? { ...c, students: c.students + 1 } : c))
            );
          }
          return { ...e, status: newStatus };
        }
        return e;
      })
    );
    onShowToast(`Enrollment status updated to ${newStatus}.`);
  };

  const handleApproveEnrollment = (id: string) => {
    handleToggleStatus(id, "Enrolled");
  };

  const handleRejectEnrollment = (id: string) => {
    handleToggleStatus(id, "Dropped");
  };

  // Filtered
  const filtered = useMemo(() => {
    return enrollments.filter((r) => {
      const q = search.trim().toLowerCase();
      const matchSearch =
        !q ||
        r.studentName.toLowerCase().includes(q) ||
        r.studentId.toLowerCase().includes(q) ||
        r.courseName.toLowerCase().includes(q) ||
        r.courseCode.toLowerCase().includes(q);
      const matchCourse = courseFilter === "All Courses" || r.courseCode === courseFilter;
      const matchSemester = semesterFilter === "All Semesters" || r.semester === semesterFilter;
      const matchStatus = statusFilter === "All Status" || r.status === statusFilter;
      return matchSearch && matchCourse && matchSemester && matchStatus;
    });
  }, [enrollments, search, courseFilter, semesterFilter, statusFilter]);

  const pageSize = 7;
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageItems = filtered.slice((page - 1) * pageSize, page * pageSize);

  const activeEnrolledCount = enrollments.filter((e) => e.status === "Enrolled").length;
  const statusVariant: Record<string, BadgeVariant> = { Enrolled: "green", Dropped: "red", Pending: "yellow" };

  const courseSelectRef = useRef<HTMLSelectElement>(null);

  const handleTotalStudentsClick = () => {
    setSearch("");
    setCourseFilter("All Courses");
    setSemesterFilter("All Semesters");
    setStatusFilter("All Status");
    setPage(1);
  };

  const handleActiveEnrollmentsClick = () => {
    setStatusFilter("Enrolled");
    setPage(1);
  };

  const handleCoursesClick = () => {
    if (courseFilter === "All Courses" && courses.length > 0) {
      setCourseFilter(courses[0].code);
    } else if (courses.length > 0) {
      const currentIndex = courses.findIndex((c) => c.code === courseFilter);
      if (currentIndex >= 0 && currentIndex < courses.length - 1) {
        setCourseFilter(courses[currentIndex + 1].code);
      } else {
        setCourseFilter(courses[0].code);
      }
    }
    setPage(1);
    setTimeout(() => {
      courseSelectRef.current?.focus();
    }, 50);
  };

  const handleCurrentSemesterClick = () => {
    setSemesterFilter("T2 2026");
    setPage(1);
  };

  return (
    <div className="p-6">
      <PageHeader
        breadcrumb="Enrollment"
        title="Enrollment"
        subtitle="Enroll students into courses and manage their course enrollment"
        action={
          <button
            onClick={() => {
              resetEnrollWorkflow();
              setShowEnrollModal(true);
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-colors hover:opacity-90 cursor-pointer shadow-sm"
            style={{ background: "#1a3a9e" }}
          >
            <span className="text-base leading-none">+</span> Enroll Student
          </button>
        }
      />

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          {
            label: "Total Students",
            value: String(students.length),
            icon: <IconUsers />,
            bg: "bg-blue-50 text-blue-600",
            onClick: handleTotalStudentsClick,
            active: courseFilter === "All Courses" && semesterFilter === "All Semesters" && statusFilter === "All Status" && !search,
          },
          {
            label: "Active Enrollments",
            value: String(activeEnrolledCount),
            icon: <IconCheckCircle />,
            bg: "bg-green-50 text-green-600",
            onClick: handleActiveEnrollmentsClick,
            active: statusFilter === "Enrolled",
          },
          {
            label: "Courses",
            value: String(courses.length),
            icon: <IconBook />,
            bg: "bg-purple-50 text-purple-600",
            onClick: handleCoursesClick,
            active: courseFilter !== "All Courses",
          },
          {
            label: "Current Semester",
            value: "T2 2026",
            icon: <IconCalendar />,
            bg: "bg-orange-50 text-orange-500",
            onClick: handleCurrentSemesterClick,
            active: semesterFilter === "T2 2026",
          },
        ].map((s) => (
          <div
            key={s.label}
            role="button"
            tabIndex={0}
            aria-label={`${s.label}: ${s.value}`}
            onClick={s.onClick}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                s.onClick();
              }
            }}
            className={`bg-white rounded-2xl border border-gray-200 shadow-sm p-4 flex items-center gap-3 cursor-pointer select-none transition-all duration-150 hover:shadow-md hover:border-gray-300 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-blue-400/40 ${
              s.active ? "ring-2 ring-blue-500/40 shadow-sm" : ""
            }`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${s.bg}`}>{s.icon}</div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-0.5">{s.label}</p>
              <p className="text-xl font-extrabold text-gray-900 leading-none">{s.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filter and Table */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100">
          <p className="text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-3">Student Enrollments</p>
          <div className="flex flex-wrap gap-3">
            <div className="relative flex-1 min-w-48">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <IconSearch />
              </span>
              <input
                type="text"
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                placeholder="Search by student name, ID, or course..."
                className="w-full pl-9 pr-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
              />
            </div>
            <select
              ref={courseSelectRef}
              value={courseFilter}
              onChange={(e) => { setCourseFilter(e.target.value); setPage(1); }}
              className="px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 border-none cursor-pointer"
            >
              <option>All Courses</option>
              {courses.map((c) => (
                <option key={c.code} value={c.code}>{c.code}</option>
              ))}
            </select>
            <select
              value={semesterFilter}
              onChange={(e) => { setSemesterFilter(e.target.value); setPage(1); }}
              className="px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 border-none cursor-pointer"
            >
              <option>All Semesters</option>
              <option>T2 2026</option>
              <option>T1 2026</option>
              <option>T3 2025</option>
            </select>
            <select
              value={statusFilter}
              onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }}
              className="px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 border-none cursor-pointer"
            >
              <option>All Status</option>
              <option>Enrolled</option>
              <option>Dropped</option>
              <option>Pending</option>
            </select>
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
            {pageItems.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-center py-12 text-gray-500">
                  <p className="text-sm font-semibold">No enrollment records found</p>
                  <p className="text-xs text-gray-400 mt-1">Try adjusting your search or filters.</p>
                </td>
              </tr>
            ) : (
              pageItems.map((r) => (
                <tr key={r.id} className="hover:bg-blue-50/30 transition-colors">
                  <Td>
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold shrink-0">
                        {r.studentName.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                      </div>
                      <span className="font-semibold text-gray-800">{r.studentName}</span>
                    </div>
                  </Td>
                  <Td><span className="font-mono text-xs text-gray-500">{r.studentId}</span></Td>
                  <Td className="text-gray-700">{r.courseName}</Td>
                  <Td><span className="font-mono font-bold text-blue-700 text-xs">{r.courseCode}</span></Td>
                  <Td className="text-gray-500">{r.semester}</Td>
                  <Td className="text-gray-500">{r.date}</Td>
                  <Td><Badge label={r.status} variant={statusVariant[r.status]} /></Td>
                  <Td>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setViewRecord(r)}
                        className="text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 cursor-pointer"
                      >
                        View
                      </button>
                      {r.status === "Pending" ? (
                        <>
                          <button
                            onClick={() => handleApproveEnrollment(r.id)}
                            className="text-xs font-semibold px-2 py-1 rounded-lg bg-green-50 text-green-700 hover:bg-green-100 cursor-pointer"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleRejectEnrollment(r.id)}
                            className="text-xs font-semibold px-2 py-1 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 cursor-pointer"
                          >
                            Reject
                          </button>
                        </>
                      ) : r.status === "Enrolled" ? (
                        <button
                          onClick={() => handleToggleStatus(r.id, "Dropped")}
                          className="text-xs font-semibold px-2 py-1 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 cursor-pointer"
                        >
                          Drop
                        </button>
                      ) : (
                        <button
                          onClick={() => handleToggleStatus(r.id, "Enrolled")}
                          className="text-xs font-semibold px-2 py-1 rounded-lg bg-green-50 text-green-700 hover:bg-green-100 cursor-pointer"
                        >
                          Re-enroll
                        </button>
                      )}
                    </div>
                  </Td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-between px-5 py-3.5 border-t border-gray-100">
          <p className="text-xs text-gray-400">
            Showing {filtered.length > 0 ? (page - 1) * pageSize + 1 : 0} to{" "}
            {Math.min(page * pageSize, filtered.length)} of {filtered.length} enrollments
          </p>
          <div className="flex items-center gap-1.5">
            <button
              disabled={page <= 1}
              onClick={() => setPage((p) => p - 1)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                page <= 1 ? "bg-gray-50 text-gray-300 cursor-not-allowed" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  p === page ? "text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                style={p === page ? { background: "#1a3a9e" } : {}}
              >
                {p}
              </button>
            ))}
            <button
              disabled={page >= totalPages}
              onClick={() => setPage((p) => p + 1)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                page >= totalPages ? "bg-gray-50 text-gray-300 cursor-not-allowed" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Enroll Student Modal with Eligibility Check Workflow */}
      {showEnrollModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-lg p-6 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-gray-100">
              <div>
                <h2 className="text-base font-bold text-gray-900">Enroll Student in Course</h2>
                <p className="text-xs text-gray-400 mt-0.5">Select a student and course, verify eligibility, and confirm enrollment.</p>
              </div>
              <button
                onClick={() => setShowEnrollModal(false)}
                className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 cursor-pointer"
              >
                <IconX />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Select Student *</label>
                <select
                  value={selectedStudentId}
                  onChange={(e) => {
                    setSelectedStudentId(e.target.value);
                    setEligibilityResult(null);
                  }}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition cursor-pointer"
                >
                  <option value="">Choose a student...</option>
                  {students
                    .filter((s) => s.role === "Student")
                    .map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} — {s.id} ({s.status})
                      </option>
                    ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Select Course *</label>
                <select
                  value={selectedCourseCode}
                  onChange={(e) => {
                    setSelectedCourseCode(e.target.value);
                    setEligibilityResult(null);
                  }}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition cursor-pointer"
                >
                  <option value="">Choose a course...</option>
                  {courses.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.code} — {c.name} ({c.students}/{c.capacity} enrolled)
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Semester</label>
                <select
                  value={selectedSemester}
                  onChange={(e) => setSelectedSemester(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition cursor-pointer"
                >
                  <option>Trimester 2, 2026</option>
                  <option>Trimester 1, 2026</option>
                  <option>Trimester 3, 2025</option>
                </select>
              </div>

              {/* Check Eligibility Button & Result */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={checkEligibility}
                  className="w-full py-2 rounded-xl text-xs font-bold border border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <IconCheckCircle className="w-4 h-4" /> Check Course Eligibility
                </button>

                {eligibilityResult?.checked && (
                  <div
                    className={`mt-3 p-3.5 rounded-xl border text-xs leading-relaxed flex items-start gap-2.5 ${
                      eligibilityResult.eligible
                        ? "bg-green-50 border-green-200 text-green-800"
                        : "bg-red-50 border-red-200 text-red-700"
                    }`}
                  >
                    {eligibilityResult.eligible ? (
                      <IconCheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    ) : (
                      <IconAlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className="font-bold">{eligibilityResult.eligible ? "Eligible to Enroll" : "Enrollment Blocked"}</p>
                      <p className="mt-0.5">{eligibilityResult.reason}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-3 mt-6 pt-3 border-t border-gray-100">
              <button
                onClick={() => setShowEnrollModal(false)}
                className="flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmEnrollment}
                disabled={!selectedStudentId || !selectedCourseCode || (eligibilityResult !== null && !eligibilityResult.eligible)}
                className="flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                style={{ background: "#1a3a9e" }}
              >
                Confirm Enrollment
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Enrollment Details Modal */}
      {viewRecord && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-md p-6">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
              <h3 className="text-base font-bold text-gray-900">Enrollment Record: {viewRecord.id}</h3>
              <button onClick={() => setViewRecord(null)} className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 cursor-pointer">
                <IconX />
              </button>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span className="text-gray-400">Student Name</span>
                <span className="font-bold text-gray-800">{viewRecord.studentName}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span className="text-gray-400">Student ID</span>
                <span className="font-mono text-gray-700">{viewRecord.studentId}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span className="text-gray-400">Course</span>
                <span className="font-medium text-gray-800">{viewRecord.courseName}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span className="text-gray-400">Course Code</span>
                <span className="font-mono font-bold text-blue-700">{viewRecord.courseCode}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span className="text-gray-400">Semester</span>
                <span className="text-gray-800">{viewRecord.semester}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span className="text-gray-400">Enrollment Date</span>
                <span className="text-gray-800">{viewRecord.date}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-100">
                <span className="text-gray-400">Status</span>
                <Badge label={viewRecord.status} variant={statusVariant[viewRecord.status]} />
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-5 pt-3 border-t border-gray-100">
              <button
                onClick={() => setViewRecord(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── 4. Reports & Analytics ────────────────────────────────────────────────────
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

function SimpleBarChart({ courses }: { courses: AdminCourse[] }) {
  const bars = courses.slice(0, 5).map((c, idx) => {
    const defaultVals = [84, 91, 74, 68, 79];
    const colors = ["#2563eb", "#16a34a", "#db2777", "#7c3aed", "#ea580c"];
    return {
      label: c.code,
      value: defaultVals[idx % defaultVals.length],
      color: colors[idx % colors.length],
    };
  });

  return (
    <div className="flex items-end gap-4 h-32 px-2">
      {bars.map((b) => (
        <div key={b.label} className="flex-1 flex flex-col items-center gap-1.5">
          <span className="text-[10px] font-bold" style={{ color: b.color }}>{b.value}%</span>
          <div className="w-full rounded-t-md transition-all duration-500" style={{ background: b.color, height: `${(b.value / 100) * 96}px` }} />
          <span className="text-[10px] text-gray-500 font-semibold truncate">{b.label}</span>
        </div>
      ))}
    </div>
  );
}

function AdminReports({
  courses,
  users,
  enrollments,
  initialAction,
  onClearInitialAction,
  onShowToast,
}: {
  courses: AdminCourse[];
  users: AdminUser[];
  enrollments: AdminEnrollmentRecord[];
  initialAction?: string | null;
  onClearInitialAction?: () => void;
  onShowToast: (msg: string) => void;
}) {
  const [semester, setSemester] = useState("T2 2026");
  const [showGenerateModal, setShowGenerateModal] = useState(initialAction === "generate");
  const [reportType, setReportType] = useState("Academic Performance Audit");
  const [reportFormat, setReportFormat] = useState("CSV Spreadsheet");
  const [generating, setGenerating] = useState(false);

  useEffect(() => {
    if (initialAction === "generate") {
      setShowGenerateModal(true);
      if (onClearInitialAction) onClearInitialAction();
    }
  }, [initialAction]);

  const totalStudents = users.filter((u) => u.role === "Student").length;
  const activeCourses = courses.filter((c) => c.status === "Active").length;
  const instructorsCount = users.filter((u) => u.role === "Instructor").length;

  const handleExportCSV = () => {
    const headers = "Course Code,Course Name,Faculty,Instructor,Enrolled Students,Capacity,Status,Semester\n";
    const rows = courses
      .map(
        (c) =>
          `"${c.code}","${c.name}","${c.faculty}","${c.instructor}",${c.students},${c.capacity},"${c.status}","${c.semester}"`
      )
      .join("\n");
    const blob = new Blob([headers + rows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `EduFlex_Course_Enrollment_Report_${semester.replace(/\s+/g, "_")}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    onShowToast("Report exported successfully to CSV!");
  };

  const handleGenerateReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      setShowGenerateModal(false);
      handleExportCSV();
    }, 1200);
  };

  return (
    <div className="p-6">
      <PageHeader
        breadcrumb="Reports & Analytics"
        title="Reports & Analytics"
        subtitle="Monitor academic activity and system performance"
        action={
          <div className="flex gap-2">
            <button
              onClick={handleExportCSV}
              className="px-4 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors shadow-sm cursor-pointer"
            >
              Export Report
            </button>
            <button
              onClick={() => setShowGenerateModal(true)}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-white transition-colors hover:opacity-90 cursor-pointer shadow-sm"
              style={{ background: "#1a3a9e" }}
            >
              Generate Report
            </button>
          </div>
        }
      />

      <div className="flex justify-end mb-5">
        <select
          value={semester}
          onChange={(e) => {
            setSemester(e.target.value);
            onShowToast(`Switched report view to ${e.target.value}`);
          }}
          className="px-3 py-2 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-300 cursor-pointer shadow-sm"
        >
          <option value="T2 2026">Semester T2 2026</option>
          <option value="T1 2026">Semester T1 2026</option>
          <option value="T3 2025">Semester T3 2025</option>
        </select>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Students",           value: String(totalStudents), icon: <IconUsers />,        bg: "bg-blue-50 text-blue-600" },
          { label: "Active Courses",            value: String(activeCourses), icon: <IconBook />,         bg: "bg-purple-50 text-purple-600" },
          { label: "Instructors",               value: String(instructorsCount), icon: <IconShield className="w-5 h-5"/>, bg: "bg-green-50 text-green-600" },
          { label: "Avg Student Performance",   value: "84.2%", icon: <IconTrendingUp />,   bg: "bg-orange-50 text-orange-500" },
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
          <div className="flex items-center justify-between mb-4">
            <p className="text-[10px] font-bold text-blue-700 uppercase tracking-widest">Enrollment Trends</p>
            <span className="text-xs text-gray-400">12-month timeline</span>
          </div>
          <SimpleLineChart />
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="text-[10px] font-bold text-blue-700 uppercase tracking-widest">Student Performance by Course</p>
            <span className="text-xs text-gray-400">Average pass rate</span>
          </div>
          <SimpleBarChart courses={courses} />
        </div>
      </div>

      {/* Course Enrollment Breakdown */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 mb-5">
        <p className="text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-4">Course Enrollment Capacities</p>
        <div className="space-y-3">
          {courses.map((c, i) => {
            const pct = Math.round((c.students / Math.max(c.capacity, 1)) * 100);
            const colors = ["#16a34a", "#2563eb", "#db2777", "#ea580c", "#7c3aed"];
            const color = colors[i % colors.length];
            return (
              <div key={c.code}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-gray-500 font-mono">{c.code}</span>
                    <span className="text-sm text-gray-700 font-medium">{c.name}</span>
                  </div>
                  <span className="text-xs text-gray-500">
                    {c.students}/{c.capacity} — <span className="font-bold" style={{ color }}>{pct}%</span>
                  </span>
                </div>
                <ProgressBar pct={pct} color={color} />
              </div>
            );
          })}
        </div>
      </div>

      {/* System Overview */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
        <p className="text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-4">System Activity Overview</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Active Users",          value: String(Math.round(users.length * 0.8)), sub: "active sessions today" },
            { label: "Assignments Submitted", value: "3,210", sub: "this semester" },
            { label: "Quiz Attempts",         value: "1,876", sub: "attempts completed" },
            { label: "System Reliability",    value: "99.9%", sub: "uptime guarantee" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl bg-gray-50 border border-gray-100 p-4">
              <p className="text-xs text-gray-500 mb-1">{s.label}</p>
              <p className="text-2xl font-extrabold text-gray-900">{s.value}</p>
              <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Generate Report Modal */}
      {showGenerateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-md p-6 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
              <h3 className="text-base font-bold text-gray-900">Generate Academic Report</h3>
              <button
                onClick={() => setShowGenerateModal(false)}
                className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 cursor-pointer"
              >
                <IconX />
              </button>
            </div>

            <form onSubmit={handleGenerateReportSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Report Type</label>
                <select
                  value={reportType}
                  onChange={(e) => setReportType(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  <option>Academic Performance Audit</option>
                  <option>Enrollment Trends & Statistics</option>
                  <option>Course Completion & Pass Rates</option>
                  <option>System Health & Platform Activity</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Academic Term</label>
                <select
                  value={semester}
                  onChange={(e) => setSemester(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  <option value="T2 2026">Trimester 2, 2026 (Current)</option>
                  <option value="T1 2026">Trimester 1, 2026</option>
                  <option value="T3 2025">Trimester 3, 2025</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Export Format</label>
                <select
                  value={reportFormat}
                  onChange={(e) => setReportFormat(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  <option>CSV Spreadsheet (.csv)</option>
                  <option>Adobe PDF Document (.pdf)</option>
                  <option>Microsoft Excel (.xlsx)</option>
                </select>
              </div>

              <div className="flex gap-3 pt-3 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setShowGenerateModal(false)}
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={generating}
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90 cursor-pointer disabled:opacity-50"
                  style={{ background: "#1a3a9e" }}
                >
                  {generating ? "Generating..." : "Download Report"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// ── 5. Announcements ──────────────────────────────────────────────────────────
function AdminAnnouncements({
  announcements,
  setAnnouncements,
  courses,
  initialAction,
  onClearInitialAction,
  onShowToast,
}: {
  announcements: AdminAnnouncementItem[];
  setAnnouncements: React.Dispatch<React.SetStateAction<AdminAnnouncementItem[]>>;
  courses: AdminCourse[];
  initialAction?: string | null;
  onClearInitialAction?: () => void;
  onShowToast: (msg: string) => void;
}) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [audienceFilter, setAudienceFilter] = useState("All Audiences");
  const [modalState, setModalState] = useState<{
    type: "create" | "edit" | "view" | "delete";
    announcement?: AdminAnnouncementItem;
  } | null>(initialAction === "create" ? { type: "create" } : null);

  // Form states
  const [formTitle, setFormTitle] = useState("");
  const [formDesc, setFormDesc] = useState("");
  const [formAudience, setFormAudience] = useState<"All Users" | "Students" | "Instructors">("All Users");
  const [formStatus, setFormStatus] = useState<"Published" | "Draft" | "Scheduled">("Published");
  const [formCourse, setFormCourse] = useState("");
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (initialAction === "create") {
      openCreate();
      if (onClearInitialAction) onClearInitialAction();
    }
  }, [initialAction]);

  const openCreate = () => {
    setFormTitle("");
    setFormDesc("");
    setFormAudience("All Users");
    setFormStatus("Published");
    setFormCourse("");
    setFormError("");
    setModalState({ type: "create" });
  };

  const openEdit = (a: AdminAnnouncementItem) => {
    setFormTitle(a.title);
    setFormDesc(a.desc);
    setFormAudience(a.audience);
    setFormStatus(a.status);
    setFormCourse(a.course || "");
    setFormError("");
    setModalState({ type: "edit", announcement: a });
  };

  const handleSaveAnnouncement = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim() || !formDesc.trim()) {
      setFormError("Title and announcement message are required.");
      return;
    }

    if (modalState?.type === "create") {
      const newAnn: AdminAnnouncementItem = {
        id: `ANN-${String(Date.now()).slice(-4)}`,
        title: formTitle.trim(),
        desc: formDesc.trim(),
        date: "Sep 2, 2026",
        author: "Admin Office",
        audience: formAudience,
        status: formStatus,
        course: formCourse || undefined,
      };
      setAnnouncements([newAnn, ...announcements]);
      onShowToast(`Announcement "${newAnn.title}" created successfully.`);
    } else if (modalState?.type === "edit" && modalState.announcement) {
      const updated = announcements.map((a) =>
        a.id === modalState.announcement!.id
          ? {
              ...a,
              title: formTitle.trim(),
              desc: formDesc.trim(),
              audience: formAudience,
              status: formStatus,
              course: formCourse || undefined,
            }
          : a
      );
      setAnnouncements(updated);
      onShowToast(`Announcement updated.`);
    }
    setModalState(null);
  };

  const handleDeleteAnnouncement = (id: string) => {
    setAnnouncements((prev) => prev.filter((a) => a.id !== id));
    setModalState(null);
    onShowToast("Announcement deleted.");
  };

  const filtered = announcements.filter((item) => {
    const q = search.trim().toLowerCase();
    const matchSearch =
      !q ||
      item.title.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q) ||
      item.author.toLowerCase().includes(q);
    const matchStatus = statusFilter === "All Status" || item.status === statusFilter;
    const matchAudience = audienceFilter === "All Audiences" || item.audience === audienceFilter;
    return matchSearch && matchStatus && matchAudience;
  });

  const statusVariant: Record<string, BadgeVariant> = { Published: "green", Draft: "yellow", Scheduled: "blue" };
  const audienceVariant: Record<string, BadgeVariant> = { "All Users": "purple", Students: "blue", Instructors: "orange" };

  return (
    <div className="p-6">
      <PageHeader
        breadcrumb="Announcements"
        title="Announcements"
        subtitle="Create and manage announcements across the institution"
        action={
          <button
            onClick={openCreate}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-colors hover:opacity-90 cursor-pointer shadow-sm"
            style={{ background: "#1a3a9e" }}
          >
            <span className="text-base leading-none">+</span> New Announcement
          </button>
        }
      />

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm px-4 py-3 mb-5 flex flex-wrap gap-3 items-center">
        <div className="relative flex-1 min-w-48">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <IconSearch />
          </span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search announcements by title or keyword..."
            className="w-full pl-9 pr-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 border-none cursor-pointer"
        >
          <option>All Status</option>
          <option>Published</option>
          <option>Draft</option>
          <option>Scheduled</option>
        </select>
        <select
          value={audienceFilter}
          onChange={(e) => setAudienceFilter(e.target.value)}
          className="px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 border-none cursor-pointer"
        >
          <option>All Audiences</option>
          <option>All Users</option>
          <option>Students</option>
          <option>Instructors</option>
        </select>
      </div>

      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center text-gray-500">
            <IconAnnouncement />
            <p className="text-sm font-semibold text-gray-800 mt-2">No announcements found</p>
            <p className="text-xs text-gray-400 mt-1">Try adjusting your filters or search terms.</p>
          </div>
        ) : (
          filtered.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 hover:shadow-md transition-shadow">
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
                    <div className="flex items-center gap-4 text-xs text-gray-400 flex-wrap">
                      <span>{item.date}</span>
                      <span>By <span className="font-semibold text-gray-600">{item.author}</span></span>
                      <Badge label={item.audience} variant={audienceVariant[item.audience] ?? "gray"} />
                      {item.course && <span className="font-mono text-blue-700 font-bold">{item.course}</span>}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setModalState({ type: "view", announcement: item })}
                        className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-blue-50 text-gray-500 hover:text-blue-600 flex items-center justify-center transition-colors cursor-pointer"
                        title="View Announcement"
                      >
                        <IconEye />
                      </button>
                      <button
                        onClick={() => openEdit(item)}
                        className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-purple-50 text-gray-500 hover:text-purple-600 flex items-center justify-center transition-colors cursor-pointer"
                        title="Edit Announcement"
                      >
                        <IconEdit />
                      </button>
                      <button
                        onClick={() => setModalState({ type: "delete", announcement: item })}
                        className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-red-50 text-gray-500 hover:text-red-500 flex items-center justify-center transition-colors cursor-pointer"
                        title="Delete Announcement"
                      >
                        <IconTrash />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Create / Edit Modal */}
      {(modalState?.type === "create" || modalState?.type === "edit") && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-lg p-6 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
              <h2 className="text-base font-bold text-gray-900">
                {modalState.type === "create" ? "Post New Announcement" : "Edit Announcement"}
              </h2>
              <button
                onClick={() => setModalState(null)}
                className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 cursor-pointer"
              >
                <IconX />
              </button>
            </div>

            <form onSubmit={handleSaveAnnouncement} className="space-y-4">
              {formError && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600 font-medium">
                  {formError}
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Title *</label>
                <input
                  type="text"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  placeholder="e.g. Campus Library Extended Hours"
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Target Audience</label>
                  <select
                    value={formAudience}
                    onChange={(e) => setFormAudience(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50"
                  >
                    <option>All Users</option>
                    <option>Students</option>
                    <option>Instructors</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Status</label>
                  <select
                    value={formStatus}
                    onChange={(e) => setFormStatus(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50"
                  >
                    <option>Published</option>
                    <option>Draft</option>
                    <option>Scheduled</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Target Course (Optional)</label>
                <select
                  value={formCourse}
                  onChange={(e) => setFormCourse(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50"
                >
                  <option value="">None (University-wide)</option>
                  {courses.map((c) => (
                    <option key={c.code} value={c.code}>{c.code} – {c.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Announcement Body *</label>
                <textarea
                  rows={4}
                  value={formDesc}
                  onChange={(e) => setFormDesc(e.target.value)}
                  placeholder="Detailed announcement information..."
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50 resize-none"
                />
              </div>

              <div className="flex gap-3 pt-3 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setModalState(null)}
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold text-white hover:opacity-90 cursor-pointer"
                  style={{ background: "#1a3a9e" }}
                >
                  {modalState.type === "create" ? "Publish Announcement" : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View Modal */}
      {modalState?.type === "view" && modalState.announcement && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-lg p-6">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
              <Badge label={modalState.announcement.status} variant={statusVariant[modalState.announcement.status]} />
              <button
                onClick={() => setModalState(null)}
                className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 cursor-pointer"
              >
                <IconX />
              </button>
            </div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">{modalState.announcement.title}</h2>
            <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
              <span>Posted {modalState.announcement.date}</span>
              <span>By {modalState.announcement.author}</span>
              <span className="font-semibold text-blue-700">Audience: {modalState.announcement.audience}</span>
            </div>
            <p className="text-sm text-gray-700 bg-gray-50 p-4 rounded-xl leading-relaxed whitespace-pre-wrap">
              {modalState.announcement.desc}
            </p>
            <div className="flex justify-end gap-2 mt-5 pt-3 border-t border-gray-100">
              <button
                onClick={() => openEdit(modalState.announcement!)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-blue-50 text-blue-700 hover:bg-blue-100 cursor-pointer"
              >
                Edit
              </button>
              <button
                onClick={() => setModalState(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {modalState?.type === "delete" && modalState.announcement && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-sm p-6 text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-3">
              <IconTrash className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-1">Delete Announcement</h3>
            <p className="text-xs text-gray-500 mb-5">
              Are you sure you want to delete &ldquo;{modalState.announcement.title}&rdquo;?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setModalState(null)}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteAnnouncement(modalState.announcement!.id)}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white bg-red-600 hover:bg-red-700 cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── 6. Messages ───────────────────────────────────────────────────────────────
function AdminMessages({
  conversations,
  setConversations,
  onShowToast,
}: {
  conversations: AdminConversation[];
  setConversations: React.Dispatch<React.SetStateAction<AdminConversation[]>>;
  onShowToast: (msg: string) => void;
}) {
  const [selectedId, setSelectedId] = useState(conversations[0]?.id || "conv-1");
  const [search, setSearch] = useState("");
  const [inputMsg, setInputMsg] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const selectedConv = conversations.find((c) => c.id === selectedId) || conversations[0];

  const handleSelectConv = (id: string) => {
    setSelectedId(id);
    // Mark conversation as read
    setConversations((prev) =>
      prev.map((c) => (c.id === id ? { ...c, unread: 0 } : c))
    );
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const text = inputMsg.trim();
    if (!text || !selectedConv) return;

    const newMsg: AdminChatMessage = {
      id: `msg-${Date.now()}`,
      from: "Me",
      text,
      time: "Just now",
      mine: true,
    };

    setConversations((prev) =>
      prev.map((c) =>
        c.id === selectedConv.id
          ? {
              ...c,
              preview: text,
              time: "Just now",
              messages: [...c.messages, newMsg],
            }
          : c
      )
    );

    setInputMsg("");

    // Simulate realistic reply after 1.5 seconds
    setTimeout(() => {
      const replies = [
        "Thank you, I will look into this right away.",
        "Understood, thanks for the quick follow-up!",
        "Acknowledged. I'll update the records accordingly.",
      ];
      const replyText = replies[Math.floor(Math.random() * replies.length)];
      const replyMsg: AdminChatMessage = {
        id: `reply-${Date.now()}`,
        from: selectedConv.name,
        text: replyText,
        time: "Just now",
        mine: false,
      };
      setConversations((clist) =>
        clist.map((c) =>
          c.id === selectedConv.id
            ? {
                ...c,
                preview: replyText,
                time: "Just now",
                messages: [...c.messages, replyMsg],
              }
            : c
        )
      );
    }, 1500);
  };

  const filteredConversations = conversations.filter((c) => {
    const q = search.trim().toLowerCase();
    return !q || c.name.toLowerCase().includes(q) || c.preview.toLowerCase().includes(q);
  });

  return (
    <div className="p-6">
      <PageHeader
        breadcrumb="Messages"
        title="Messages"
        subtitle="Communicate with students, instructors, and staff"
      />
      <div
        className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex"
        style={{ height: "calc(100vh - 220px)", minHeight: 480 }}
      >
        {/* Conversation list */}
        <div className="w-72 shrink-0 border-r border-gray-100 flex flex-col">
          <div className="p-4 border-b border-gray-100">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <IconSearch />
              </span>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search messages..."
                className="w-full pl-9 pr-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {filteredConversations.map((c) => (
              <button
                key={c.id}
                onClick={() => handleSelectConv(c.id)}
                className={`w-full px-4 py-3.5 flex items-start gap-3 border-b border-gray-50 text-left transition-colors cursor-pointer ${
                  selectedConv?.id === c.id ? "bg-blue-50/70" : "hover:bg-gray-50"
                }`}
              >
                <div className={`w-9 h-9 rounded-full ${c.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                  {c.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-sm font-semibold text-gray-800 truncate">{c.name}</span>
                    <span className="text-xs text-gray-400 shrink-0 ml-1">{c.time}</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-0.5">{c.role}</p>
                  <p className="text-xs text-gray-400 truncate">{c.preview}</p>
                </div>
                {c.unread > 0 && (
                  <span
                    className="w-5 h-5 rounded-full text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "#1a3a9e" }}
                  >
                    {c.unread}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Conversation panel */}
        {selectedConv ? (
          <div className="flex-1 flex flex-col">
            <div className="px-5 py-3.5 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full ${selectedConv.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                  {selectedConv.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">{selectedConv.name}</p>
                  <p className="text-xs text-gray-500">{selectedConv.role}</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setConversations((prev) =>
                    prev.map((c) => (c.id === selectedConv.id ? { ...c, unread: 1 } : c))
                  );
                  onShowToast(`Marked conversation with ${selectedConv.name} as unread`);
                }}
                className="text-xs text-gray-500 hover:text-blue-700 cursor-pointer font-medium"
              >
                Mark as Unread
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 bg-gray-50/50">
              {selectedConv.messages.map((m) => (
                <div key={m.id} className={`flex ${m.mine ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-2xs ${
                      m.mine ? "text-white rounded-br-sm" : "bg-white border border-gray-200 text-gray-800 rounded-bl-sm"
                    }`}
                    style={m.mine ? { background: "#1a3a9e" } : {}}
                  >
                    <p>{m.text}</p>
                    <p className={`text-[10px] mt-1 ${m.mine ? "text-blue-200" : "text-gray-400"}`}>{m.time}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSendMessage} className="px-4 py-3 border-t border-gray-100 flex items-center gap-2">
              <button
                type="button"
                onClick={() => onShowToast("Attachments feature: file selection active.")}
                className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-500 flex items-center justify-center transition-colors shrink-0 cursor-pointer"
                title="Attach file"
              >
                <IconPaperclip />
              </button>
              <input
                type="text"
                value={inputMsg}
                onChange={(e) => setInputMsg(e.target.value)}
                placeholder="Type a message and press Enter..."
                className="flex-1 px-4 py-2.5 bg-gray-100 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
              />
              <button
                type="submit"
                disabled={!inputMsg.trim()}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white shrink-0 transition-opacity hover:opacity-90 disabled:opacity-50 cursor-pointer"
                style={{ background: "#1a3a9e" }}
              >
                <IconSend />
              </button>
            </form>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-400 text-sm">
            Select a conversation to begin messaging
          </div>
        )}
      </div>
    </div>
  );
}

// ── 7. Academic Calendar ──────────────────────────────────────────────────────
function AdminCalendar({
  calendarEvents,
  setCalendarEvents,
  onShowToast,
}: {
  calendarEvents: Record<string, AdminCalendarEvent[]>;
  setCalendarEvents: React.Dispatch<React.SetStateAction<Record<string, AdminCalendarEvent[]>>>;
  onShowToast: (msg: string) => void;
}) {
  const [year, setYear] = useState(2026);
  const [month, setMonth] = useState(8); // September = 8 (0-indexed)
  const [selectedDate, setSelectedDate] = useState("2026-09-08");

  // Add / Edit / View event modals
  const [showAddModal, setShowAddModal] = useState(false);
  const [activeEvent, setActiveEvent] = useState<AdminCalendarEvent | null>(null);

  // Form states
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("2026-09-08");
  const [eventCategory, setEventCategory] = useState<AdminCalendarEvent["category"]>("Academic Date");
  const [eventTime, setEventTime] = useState("9:00 AM");
  const [eventColor, setEventColor] = useState("#1a3a9e");
  const [eventDesc, setEventDesc] = useState("");

  const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

  const categoryColorMap: Record<AdminCalendarEvent["category"], string> = {
    "Academic Date": "#1a3a9e",
    "Enrollment":    "#16a34a",
    "Assessment":    "#ea580c",
    "Quiz":          "#2563eb",
    "School Break":  "#7c3aed",
    "Public Holiday":"#059669",
    "Exam":          "#db2777",
  };

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = Array(firstDay).fill(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  const prev = () => {
    if (month === 0) { setMonth(11); setYear((y) => y - 1); }
    else setMonth((m) => m - 1);
  };
  const next = () => {
    if (month === 11) { setMonth(0); setYear((y) => y + 1); }
    else setMonth((m) => m + 1);
  };

  const openAddModal = (dateStr?: string) => {
    const target = dateStr || selectedDate;
    setEventTitle("");
    setEventDate(target);
    setEventCategory("Academic Date");
    setEventTime("9:00 AM");
    setEventColor("#1a3a9e");
    setEventDesc("");
    setShowAddModal(true);
  };

  const handleSaveEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventTitle.trim() || !eventDate.trim()) return;

    const newEvt: AdminCalendarEvent = {
      id: `ce-${Date.now()}`,
      title: eventTitle.trim(),
      label: eventTitle.trim(),
      date: eventDate,
      category: eventCategory,
      color: categoryColorMap[eventCategory] || eventColor,
      time: eventTime,
      description: eventDesc.trim(),
    };

    setCalendarEvents((prev) => {
      const existing = prev[eventDate] || [];
      return {
        ...prev,
        [eventDate]: [...existing, newEvt],
      };
    });

    setShowAddModal(false);
    onShowToast(`Event "${newEvt.title}" added to calendar.`);
  };

  const handleDeleteEvent = (evtId: string, dateStr: string) => {
    setCalendarEvents((prev) => {
      const list = prev[dateStr] || [];
      const updated = list.filter((e) => e.id !== evtId);
      return { ...prev, [dateStr]: updated };
    });
    setActiveEvent(null);
    onShowToast("Event removed from calendar.");
  };

  // Events on selected date
  const selectedDayEvents = calendarEvents[selectedDate] || [];

  // Flatten upcoming events
  const allEventsList = useMemo(() => {
    const list: AdminCalendarEvent[] = [];
    Object.keys(calendarEvents).sort().forEach((dateKey) => {
      list.push(...calendarEvents[dateKey]);
    });
    return list;
  }, [calendarEvents]);

  return (
    <div className="p-6">
      <PageHeader
        breadcrumb="Academic Calendar"
        title="Academic Calendar"
        subtitle="Manage important academic dates, term schedules, and university events"
        action={
          <button
            onClick={() => openAddModal()}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-colors hover:opacity-90 cursor-pointer shadow-sm"
            style={{ background: "#1a3a9e" }}
          >
            <IconPlus /> Add Event
          </button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Calendar Grid */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors cursor-pointer"
              >
                <IconChevronLeft />
              </button>
              <h2 className="text-base font-bold text-gray-900">
                {monthNames[month]} {year}
              </h2>
              <button
                onClick={next}
                className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors cursor-pointer"
              >
                <IconChevronRight />
              </button>
            </div>
            <button
              className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 transition-colors cursor-pointer"
              onClick={() => {
                setYear(2026);
                setMonth(8);
                setSelectedDate("2026-09-08");
              }}
            >
              Today
            </button>
          </div>

          <div className="grid grid-cols-7 mb-2">
            {dayNames.map((d) => (
              <div key={d} className="text-center text-[10px] font-bold text-gray-400 uppercase py-2">
                {d}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {cells.map((day, i) => {
              if (!day) return <div key={i} className="h-20" />;
              const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
              const dayEvents = calendarEvents[dateStr] ?? [];
              const isSelected = selectedDate === dateStr;
              const isToday = year === 2026 && month === 8 && day === 8;

              return (
                <div
                  key={i}
                  onClick={() => setSelectedDate(dateStr)}
                  className={`h-20 rounded-xl p-1.5 border transition-all cursor-pointer hover:bg-blue-50/40 overflow-hidden flex flex-col justify-between ${
                    isSelected
                      ? "border-blue-600 bg-blue-50/70 shadow-xs"
                      : isToday
                      ? "border-blue-300 bg-blue-50/30"
                      : "border-gray-100"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full ${
                        isToday
                          ? "text-white"
                          : isSelected
                          ? "text-blue-700 font-extrabold"
                          : "text-gray-700"
                      }`}
                      style={isToday ? { background: "#1a3a9e" } : {}}
                    >
                      {day}
                    </span>
                    {dayEvents.length > 0 && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    )}
                  </div>
                  <div className="space-y-0.5 overflow-hidden">
                    {dayEvents.slice(0, 2).map((e) => (
                      <div
                        key={e.id}
                        onClick={(ev) => {
                          ev.stopPropagation();
                          setSelectedDate(dateStr);
                          setActiveEvent(e);
                        }}
                        className="text-[9px] font-semibold truncate px-1 py-0.5 rounded text-white shadow-2xs hover:opacity-90"
                        style={{ background: e.color }}
                        title={e.title}
                      >
                        {e.label}
                      </div>
                    ))}
                    {dayEvents.length > 2 && (
                      <span className="text-[8px] font-bold text-gray-500 pl-0.5">
                        +{dayEvents.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Details Panel */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 flex flex-col">
          {/* Selected Date Header */}
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-100">
            <div>
              <p className="text-[10px] font-bold text-blue-700 uppercase tracking-widest">Events on Date</p>
              <p className="text-sm font-bold text-gray-800 mt-0.5">{selectedDate}</p>
            </div>
            <button
              onClick={() => openAddModal(selectedDate)}
              className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 cursor-pointer"
            >
              + Add
            </button>
          </div>

          {/* Events for Selected Date */}
          <div className="space-y-2 mb-5">
            {selectedDayEvents.length === 0 ? (
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 text-center text-xs text-gray-400">
                No events scheduled on this date.
              </div>
            ) : (
              selectedDayEvents.map((e) => (
                <div
                  key={e.id}
                  onClick={() => setActiveEvent(e)}
                  className="p-3 rounded-xl border border-gray-100 bg-gray-50/70 hover:bg-blue-50/40 transition-colors flex items-start justify-between gap-2 cursor-pointer"
                >
                  <div className="flex items-start gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full mt-1 shrink-0" style={{ background: e.color }} />
                    <div>
                      <p className="text-xs font-bold text-gray-800">{e.title}</p>
                      <p className="text-[11px] text-gray-500">{e.category} · {e.time || "All Day"}</p>
                    </div>
                  </div>
                  <button
                    onClick={(ev) => {
                      ev.stopPropagation();
                      handleDeleteEvent(e.id, selectedDate);
                    }}
                    className="text-gray-400 hover:text-red-500 p-1 rounded cursor-pointer"
                    title="Delete Event"
                  >
                    <IconX className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Upcoming Events */}
          <p className="text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-3">Upcoming Calendar Events</p>
          <div className="space-y-2.5 flex-1 max-h-60 overflow-y-auto pr-1">
            {allEventsList.slice(0, 8).map((e) => (
              <div
                key={e.id}
                onClick={() => {
                  setSelectedDate(e.date);
                  setActiveEvent(e);
                }}
                className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="w-2 h-2 rounded-full mt-1 shrink-0" style={{ background: e.color }} />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-gray-800 truncate">{e.title}</p>
                  <p className="text-[10px] text-gray-400">{e.date} · {e.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-5 pt-4 border-t border-gray-100">
            <p className="text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-3">Category Legend</p>
            <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-600">
              {Object.entries(categoryColorMap).map(([cat, col]) => (
                <div key={cat} className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ background: col }} />
                  <span className="truncate">{cat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add Event Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-md p-6 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
              <h3 className="text-base font-bold text-gray-900">Add Academic Event</h3>
              <button onClick={() => setShowAddModal(false)} className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 cursor-pointer">
                <IconX />
              </button>
            </div>
            <form onSubmit={handleSaveEvent} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Event Title *</label>
                <input
                  type="text"
                  required
                  value={eventTitle}
                  onChange={(e) => setEventTitle(e.target.value)}
                  placeholder="e.g. Assessment 1 Due Date"
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Date *</label>
                  <input
                    type="date"
                    required
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Time</label>
                  <input
                    type="text"
                    value={eventTime}
                    onChange={(e) => setEventTime(e.target.value)}
                    placeholder="e.g. 10:00 AM / All Day"
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Category</label>
                <select
                  value={eventCategory}
                  onChange={(e) => setEventCategory(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 cursor-pointer"
                >
                  <option>Academic Date</option>
                  <option>Enrollment</option>
                  <option>Assessment</option>
                  <option>Quiz</option>
                  <option>School Break</option>
                  <option>Public Holiday</option>
                  <option>Exam</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Description</label>
                <textarea
                  rows={3}
                  value={eventDesc}
                  onChange={(e) => setEventDesc(e.target.value)}
                  placeholder="Notes, locations, or academic requirements..."
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
                />
              </div>
              <div className="flex gap-3 pt-3 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 py-2.5 rounded-xl text-sm font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white hover:opacity-90 cursor-pointer"
                  style={{ background: "#1a3a9e" }}
                >
                  Add Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View Event Modal */}
      {activeEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-md p-6">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full text-white" style={{ background: activeEvent.color }}>
                {activeEvent.category}
              </span>
              <button onClick={() => setActiveEvent(null)} className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 cursor-pointer">
                <IconX />
              </button>
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-1">{activeEvent.title}</h3>
            <p className="text-xs text-gray-400 mb-3">{activeEvent.date} · {activeEvent.time || "All Day"}</p>
            <p className="text-xs text-gray-600 bg-gray-50 p-3 rounded-xl leading-relaxed mb-4">
              {activeEvent.description || "No specific notes for this academic event."}
            </p>
            <div className="flex justify-between gap-2 pt-2 border-t border-gray-100">
              <button
                onClick={() => handleDeleteEvent(activeEvent.id, activeEvent.date)}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-red-50 text-red-600 hover:bg-red-100 cursor-pointer"
              >
                Delete Event
              </button>
              <button
                onClick={() => setActiveEvent(null)}
                className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── 8. System Settings ────────────────────────────────────────────────────────
function AdminSystemSettings({
  onShowToast,
}: {
  onShowToast: (msg: string) => void;
}) {
  const [settings, setSettings] = useState<AdminSystemSettingsData>(INITIAL_ADMIN_SETTINGS);
  const [savedFeedback, setSavedFeedback] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("eduflex_admin_settings");
      if (stored) {
        setSettings({ ...INITIAL_ADMIN_SETTINGS, ...JSON.parse(stored) });
      }
    } catch {}
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      localStorage.setItem("eduflex_admin_settings", JSON.stringify(settings));
    } catch {}
    setSavedFeedback(true);
    onShowToast("System settings saved successfully!");
    setTimeout(() => setSavedFeedback(false), 3000);
  };

  const updateSetting = <K extends keyof AdminSystemSettingsData>(key: K, val: AdminSystemSettingsData[K]) => {
    setSettings((prev) => ({ ...prev, [key]: val }));
  };

  return (
    <div className="p-6">
      <PageHeader
        breadcrumb="System Settings"
        title="System Settings"
        subtitle="Manage system configuration, security policies, and institution preferences"
      />

      <form onSubmit={handleSave} className="space-y-5">
        {savedFeedback && (
          <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm font-semibold flex items-center gap-2">
            <IconCheckCircle className="w-5 h-5 text-green-600" />
            Settings saved successfully! Preferences have been updated and persisted locally.
          </div>
        )}

        {/* General Settings */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
          <p className="text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-4">General Settings</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Institution Name</label>
              <input
                type="text"
                value={settings.institutionName}
                onChange={(e) => updateSetting("institutionName", e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Institution Email</label>
              <input
                type="email"
                value={settings.institutionEmail}
                onChange={(e) => updateSetting("institutionEmail", e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Contact Number</label>
              <input
                type="text"
                value={settings.contactNumber}
                onChange={(e) => updateSetting("contactNumber", e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Time Zone</label>
              <select
                value={settings.timezone}
                onChange={(e) => updateSetting("timezone", e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition cursor-pointer"
              >
                <option>Asia/Manila (UTC+8)</option>
                <option>Australia/Sydney (AEST, UTC+10)</option>
                <option>UTC</option>
                <option>America/New_York (EST, UTC-5)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Academic Settings */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
          <p className="text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-4">Academic Settings</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Current Semester</label>
              <select
                value={settings.currentSemester}
                onChange={(e) => updateSetting("currentSemester", e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition cursor-pointer"
              >
                <option>Trimester 2, 2026</option>
                <option>Trimester 1, 2026</option>
                <option>Trimester 3, 2025</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Enrollment Window</label>
              <input
                type="text"
                value={settings.enrollmentPeriod}
                onChange={(e) => updateSetting("enrollmentPeriod", e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Semester Start Date</label>
              <input
                type="date"
                value={settings.semesterStartDate}
                onChange={(e) => updateSetting("semesterStartDate", e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Semester End Date</label>
              <input
                type="date"
                value={settings.semesterEndDate}
                onChange={(e) => updateSetting("semesterEndDate", e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition"
              />
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 space-y-4">
          <p className="text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-4">Notifications</p>
          {[
            { key: "emailNotifications" as const, label: "Email Notifications", sub: "Send system emails and alerts to administrators" },
            { key: "studentNotifications" as const, label: "Student Notifications", sub: "Notify students of published announcements and deadlines" },
            { key: "instructorNotifications" as const, label: "Instructor Notifications", sub: "Notify instructors of course changes and enrollments" },
            { key: "systemAlerts" as const, label: "System Maintenance Alerts", sub: "Receive critical server infrastructure and LMS warnings" },
          ].map((item, idx) => (
            <div key={item.key} className={`flex items-center justify-between py-1 ${idx !== 0 ? "border-t border-gray-100 pt-3" : ""}`}>
              <div>
                <p className="text-sm font-semibold text-gray-800">{item.label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{item.sub}</p>
              </div>
              <button
                type="button"
                onClick={() => updateSetting(item.key, !settings[item.key])}
                className={`w-11 h-6 rounded-full transition-colors duration-200 relative shrink-0 cursor-pointer ${
                  settings[item.key] ? "bg-blue-600" : "bg-gray-200"
                }`}
              >
                <span
                  className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
                    settings[item.key] ? "translate-x-5" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>

        {/* Security */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 space-y-4">
          <p className="text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-4">Security</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Password Policy</label>
              <select
                value={settings.passwordPolicy}
                onChange={(e) => updateSetting("passwordPolicy", e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition cursor-pointer"
              >
                <option>Strong (8+ chars, uppercase, digit, symbol)</option>
                <option>Moderate (8+ chars, mixed)</option>
                <option>Basic (6+ chars)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Session Timeout</label>
              <select
                value={settings.sessionTimeout}
                onChange={(e) => updateSetting("sessionTimeout", e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition cursor-pointer"
              >
                <option>30 minutes</option>
                <option>1 hour</option>
                <option>4 hours</option>
                <option>8 hours</option>
              </select>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-3 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-gray-800">Two-Factor Authentication (2FA)</p>
              <p className="text-xs text-gray-400 mt-0.5">Require 2FA authentication for administrator logins</p>
            </div>
            <button
              type="button"
              onClick={() => updateSetting("twoFactorAuth", !settings.twoFactorAuth)}
              className={`w-11 h-6 rounded-full transition-colors duration-200 relative shrink-0 cursor-pointer ${
                settings.twoFactorAuth ? "bg-blue-600" : "bg-gray-200"
              }`}
            >
              <span
                className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
                  settings.twoFactorAuth ? "translate-x-5" : "translate-x-0.5"
                }`}
              />
            </button>
          </div>
          <div className="border-t border-gray-100 pt-3 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-gray-800">Account Lockout Protection</p>
              <p className="text-xs text-gray-400 mt-0.5">Lock user accounts automatically after 5 failed login attempts</p>
            </div>
            <button
              type="button"
              onClick={() => updateSetting("loginSecurity", !settings.loginSecurity)}
              className={`w-11 h-6 rounded-full transition-colors duration-200 relative shrink-0 cursor-pointer ${
                settings.loginSecurity ? "bg-blue-600" : "bg-gray-200"
              }`}
            >
              <span
                className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
                  settings.loginSecurity ? "translate-x-5" : "translate-x-0.5"
                }`}
              />
            </button>
          </div>
        </div>

        {/* System Preferences */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
          <p className="text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-4">System Preferences</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Language</label>
              <select
                value={settings.language}
                onChange={(e) => updateSetting("language", e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition cursor-pointer"
              >
                <option>English (US)</option>
                <option>English (UK)</option>
                <option>Filipino</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5">Date Format</label>
              <select
                value={settings.dateFormat}
                onChange={(e) => updateSetting("dateFormat", e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition cursor-pointer"
              >
                <option>MMM D, YYYY</option>
                <option>DD/MM/YYYY</option>
                <option>MM/DD/YYYY</option>
                <option>YYYY-MM-DD</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90 shadow-sm cursor-pointer"
            style={{ background: "#1a3a9e" }}
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

// ── Root Admin Dashboard ──────────────────────────────────────────────────────
export default function AdminDashboard({ onLogout = () => {} }: { onLogout?: () => void }) {
  const [active, setActive] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);
  const [userName, setUserName] = useState("Rojit Munankarmi");

  // Shared Admin State
  const [users, setUsers] = useState<AdminUser[]>(INITIAL_ADMIN_USERS);
  const [pending, setPending] = useState<AdminPendingItem[]>(INITIAL_ADMIN_PENDING);
  const [courses, setCourses] = useState<AdminCourse[]>(INITIAL_ADMIN_COURSES);
  const [enrollments, setEnrollments] = useState<AdminEnrollmentRecord[]>(INITIAL_ADMIN_ENROLLMENTS);
  const [announcements, setAnnouncements] = useState<AdminAnnouncementItem[]>(INITIAL_ADMIN_ANNOUNCEMENTS);
  const [conversations, setConversations] = useState<AdminConversation[]>(INITIAL_ADMIN_CONVERSATIONS);
  const [calendarEvents, setCalendarEvents] = useState<Record<string, AdminCalendarEvent[]>>(INITIAL_ADMIN_CALENDAR_EVENTS);

  // Quick Action transition triggers
  const [userModalAction, setUserModalAction] = useState<any>(null);
  const [courseAction, setCourseAction] = useState<string | null>(null);
  const [announcementAction, setAnnouncementAction] = useState<string | null>(null);
  const [reportAction, setReportAction] = useState<string | null>(null);

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3200);
  };

  useEffect(() => {
    const sessionUser = getSessionUser();
    if (sessionUser?.name) {
      setUserName(sessionUser.name);
    }
  }, []);

  const userInitials = getInitials(userName);
  const sidebarW = collapsed ? "4rem" : "14rem";

  // Compute total unread messages count
  const unreadMessagesCount = conversations.reduce((acc, c) => acc + (c.unread || 0), 0);

  // Dynamic search pool across all admin data
  const searchPool = useMemo(() => {
    const pool: AdminSearchItem[] = [];

    // Users
    users.forEach((u) => {
      pool.push({
        id: `user-${u.id}`,
        category: "User",
        title: u.name,
        subtitle: `${u.id} · ${u.role} · ${u.status}`,
        badgeColor: u.role === "Instructor" ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700",
        targetPage: "users",
      });
    });

    // Courses
    courses.forEach((c) => {
      pool.push({
        id: `course-${c.code}`,
        category: "Course",
        title: `${c.code} – ${c.name}`,
        subtitle: `${c.students}/${c.capacity} Enrolled · ${c.instructor} · ${c.status}`,
        badgeColor: "bg-indigo-100 text-indigo-700",
        targetPage: "courses",
      });
    });

    // Enrollments
    enrollments.forEach((e) => {
      pool.push({
        id: `enr-${e.id}`,
        category: "Enrollment",
        title: `${e.studentName} – ${e.courseCode}`,
        subtitle: `${e.semester} · Status: ${e.status}`,
        badgeColor: "bg-amber-100 text-amber-700",
        targetPage: "enrollment",
      });
    });

    // Announcements
    announcements.forEach((a) => {
      pool.push({
        id: `ann-${a.id}`,
        category: "Announcement",
        title: a.title,
        subtitle: `${a.date} · Audience: ${a.audience} · ${a.status}`,
        badgeColor: "bg-rose-100 text-rose-700",
        targetPage: "announcements",
      });
    });

    // Messages
    conversations.forEach((conv) => {
      pool.push({
        id: `msg-${conv.id}`,
        category: "Message",
        title: `Message with ${conv.name}`,
        subtitle: `${conv.role} · "${conv.preview}"`,
        badgeColor: "bg-cyan-100 text-cyan-700",
        targetPage: "messages",
      });
    });

    // Calendar
    Object.keys(calendarEvents).forEach((dateKey) => {
      calendarEvents[dateKey].forEach((evt) => {
        pool.push({
          id: `cal-${evt.id}`,
          category: "Calendar",
          title: evt.title,
          subtitle: `${evt.date} · ${evt.category} · ${evt.time || "All Day"}`,
          badgeColor: "bg-orange-100 text-orange-700",
          targetPage: "calendar",
        });
      });
    });

    // Settings
    pool.push({
      id: "set-1",
      category: "Settings",
      title: "Institution & Academic Settings",
      subtitle: "System configuration, semester terms, and contact info",
      badgeColor: "bg-gray-100 text-gray-700",
      targetPage: "settings",
    });
    pool.push({
      id: "set-2",
      category: "Settings",
      title: "Security & Authentication Policies",
      subtitle: "Password strength, session timeout, and 2FA",
      badgeColor: "bg-gray-100 text-gray-700",
      targetPage: "settings",
    });

    return pool;
  }, [users, courses, enrollments, announcements, conversations, calendarEvents]);

  // Handle approving pending approval from Dashboard
  const handleApprovePending = (id: string) => {
    const item = pending.find((p) => p.id === id);
    if (!item) return;

    setPending((prev) => prev.filter((p) => p.id !== id));

    // If registration, activate or add user
    if (item.action.toLowerCase().includes("registration")) {
      setUsers((prev) => {
        const existingIdx = prev.findIndex((u) => u.email.toLowerCase() === item.email.toLowerCase());
        if (existingIdx >= 0) {
          const next = [...prev];
          next[existingIdx] = { ...next[existingIdx], status: "Active" };
          return next;
        }
        const newUser: AdminUser = {
          id: item.role === "Instructor" ? `INS-202600${Math.floor(10 + Math.random() * 90)}` : `STU-202620${Math.floor(10 + Math.random() * 90)}`,
          name: item.name,
          email: item.email,
          role: item.role,
          status: "Active",
          lastActive: "Just now",
          joined: "Sep 2, 2026",
          department: item.role === "Instructor" ? "School of IT" : undefined,
          program: item.role === "Student" ? "BS Information Technology" : undefined,
          courses: [],
        };
        return [newUser, ...prev];
      });
    }

    showToast(`Approved registration for ${item.name}`);
  };

  const handleRejectPending = (id: string) => {
    const item = pending.find((p) => p.id === id);
    if (!item) return;
    setPending((prev) => prev.filter((p) => p.id !== id));
    showToast(`Rejected request for ${item.name}`);
  };

  const handleQuickAction = (action: "addUser" | "createCourse" | "postAnnouncement" | "generateReport") => {
    if (action === "addUser") {
      setUserModalAction({ type: "add" });
      setActive("users");
    } else if (action === "createCourse") {
      setCourseAction("create");
      setActive("courses");
    } else if (action === "postAnnouncement") {
      setAnnouncementAction("create");
      setActive("announcements");
    } else if (action === "generateReport") {
      setReportAction("generate");
      setActive("reports");
    }
  };

  const renderPage = () => {
    switch (active) {
      case "dashboard":
        return (
          <AdminDashboardHome
            userName={userName}
            setActive={setActive}
            users={users}
            pending={pending}
            courses={courses}
            enrollments={enrollments}
            announcements={announcements}
            onApprovePending={handleApprovePending}
            onRejectPending={handleRejectPending}
            onQuickAction={handleQuickAction}
          />
        );
      case "users":
        return (
          <AdminUserManagement
            users={users as unknown as AdminUserManagementUser[]}
            setUsers={setUsers as unknown as React.Dispatch<React.SetStateAction<AdminUserManagementUser[]>>}
            pending={pending}
            setPending={setPending}
            initialModal={userModalAction}
          />
        );
      case "courses":
        return (
          <AdminCourseManagement
            courses={courses}
            setCourses={setCourses}
            instructors={users.filter((u) => u.role === "Instructor")}
            initialAction={courseAction}
            onClearInitialAction={() => setCourseAction(null)}
            onShowToast={showToast}
          />
        );
      case "enrollment":
        return (
          <AdminEnrollment
            enrollments={enrollments}
            setEnrollments={setEnrollments}
            students={users.filter((u) => u.role === "Student")}
            courses={courses}
            setCourses={setCourses}
            onShowToast={showToast}
          />
        );
      case "reports":
        return (
          <AdminReports
            courses={courses}
            users={users}
            enrollments={enrollments}
            initialAction={reportAction}
            onClearInitialAction={() => setReportAction(null)}
            onShowToast={showToast}
          />
        );
      case "announcements":
        return (
          <AdminAnnouncements
            announcements={announcements}
            setAnnouncements={setAnnouncements}
            courses={courses}
            initialAction={announcementAction}
            onClearInitialAction={() => setAnnouncementAction(null)}
            onShowToast={showToast}
          />
        );
      case "messages":
        return (
          <AdminMessages
            conversations={conversations}
            setConversations={setConversations}
            onShowToast={showToast}
          />
        );
      case "calendar":
        return (
          <AdminCalendar
            calendarEvents={calendarEvents}
            setCalendarEvents={setCalendarEvents}
            onShowToast={showToast}
          />
        );
      case "settings":
        return <AdminSystemSettings onShowToast={showToast} />;
      default:
        return (
          <AdminDashboardHome
            userName={userName}
            setActive={setActive}
            users={users}
            pending={pending}
            courses={courses}
            enrollments={enrollments}
            announcements={announcements}
            onApprovePending={handleApprovePending}
            onRejectPending={handleRejectPending}
            onQuickAction={handleQuickAction}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <AdminSidebar
        active={active}
        setActive={setActive}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        onLogout={onLogout}
      />
      <AdminHeader
        sidebarW={sidebarW}
        userName={userName}
        userInitials={userInitials}
        setActive={setActive}
        searchPool={searchPool}
        unreadMessagesCount={unreadMessagesCount}
      />
      <main
        className="pt-16 min-h-screen transition-all duration-300"
        style={{ marginLeft: sidebarW }}
      >
        {renderPage()}
      </main>

      {/* Global Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 bg-gray-900 text-white rounded-xl shadow-2xl text-xs font-semibold animate-in fade-in slide-in-from-bottom-2">
          <IconCheckCircle className="w-4 h-4 text-green-400" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
