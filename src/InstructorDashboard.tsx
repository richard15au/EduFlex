"use client";

import { useState, useEffect, useRef } from "react";
import { getSessionUser, getInitials } from "./auth";
import {
  getSharedCourses,
  saveSharedCourses,
  getSharedSubmissions,
  gradeStudentSubmission,
  INITIAL_ASSIGNMENT_COURSES,
  formatDueDate,
  getSharedSubDeliverables,
  toggleSubDeliverableLock,
  type SubDeliverableItem,
} from "./assignmentData";
import {
  getInstructorGradingQueueAction,
  gradeSubmissionAction,
  deleteSubmissionAction,
  getStaffAnnouncementsAction,
  createStaffAnnouncementAction,
  updateStaffAnnouncementAction,
  deleteStaffAnnouncementAction,
  getStaffMaterialsAction,
  createStaffMaterialAction,
  deleteStaffMaterialAction,
  type InstructorGradeRecordSummary,
  type InstructorGradingQueueItem,
} from "./actions/instructor";
import {
  getStudentConversationsAction,
  sendStudentMessageAction,
  markStudentConversationReadAction,
} from "./actions/student";
import type {
  InstructorAssignmentItem,
  InstructorCourseAssignments,
  StudentSubmission,
} from "./assignmentData";
export type { InstructorAssignmentItem, InstructorCourseAssignments, StudentSubmission };
export { INITIAL_ASSIGNMENT_COURSES, formatDueDate };

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
const IconFile = ({ className = "w-4 h-4 shrink-0" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
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
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <path d="M15.54 8.46a5 5 0 010 7.07" />
    <path d="M19.07 4.93a10 10 0 010 14.14" />
  </svg>
);
const IconSun = ({ className = "" }: { className?: string } = {}) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`w-5 h-5 shrink-0 ${className}`}>
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const IconMoon = ({ className = "" }: { className?: string } = {}) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`w-5 h-5 shrink-0 ${className}`}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const IconExternalPortal = ({ className = "w-5 h-5 shrink-0" }: { className?: string } = {}) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const IconCalendar = ({ className = "w-5 h-5 shrink-0" }: { className?: string } = {}) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
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
const IconCheckCircle = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
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
const IconTrash = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
  </svg>
);
const IconDownload = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polyline points="8 17 12 21 16 17" /><line x1="12" y1="12" x2="12" y2="21" />
    <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />
  </svg>
);

const IconMenu = ({ className = "w-5 h-5" }: { className?: string } = {}) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
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
  { label: "Profile",            icon: <IconProfile />,      id: "profile" },
];

// ── Sidebar ───────────────────────────────────────────────────────────────────
function InstructorSidebar({
  active, setActive, collapsed, setCollapsed, onLogout, mobileOpen, setMobileOpen,
}: {
  active: string; setActive: (id: string) => void;
  collapsed: boolean; setCollapsed: (v: boolean) => void;
  onLogout: () => void;
  mobileOpen?: boolean; setMobileOpen?: (v: boolean) => void;
}) {
  const w = collapsed ? "w-16" : "w-56";
  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-xs z-40 md:hidden animate-in fade-in duration-200"
          onClick={() => setMobileOpen?.(false)}
          aria-hidden="true"
        />
      )}
      <aside
        className={`fixed top-0 left-0 h-full flex flex-col z-50 md:z-30 transition-all duration-300 ${w} ${
          mobileOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full md:translate-x-0"
        }`}
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
              <button onClick={() => setCollapsed(true)} className="hidden md:inline-flex text-blue-200 hover:text-white transition-colors ml-1 p-1 rounded hover:bg-white/10" title="Collapse sidebar">
                <IconChevronsLeft />
              </button>
              <button
                onClick={() => setMobileOpen?.(false)}
                className="md:hidden text-white/70 hover:text-white transition-colors ml-1 p-1 rounded hover:bg-white/10"
                title="Close menu"
                aria-label="Close menu"
              >
                <IconX className="w-5 h-5" />
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
                onClick={() => {
                  setActive(item.id);
                  setMobileOpen?.(false);
                }}
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
        <div className="px-2 pt-4 pb-12 md:pb-8 border-t border-white/10">
          <button onClick={onLogout} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-blue-100 hover:bg-white/10 hover:text-white transition-all duration-150">
            <IconLogout /><span className="truncate">Logout</span>
          </button>
        </div>
      )}
      {collapsed && (
        <div className="px-2 pt-4 pb-12 md:pb-8 border-t border-white/10 flex justify-center">
          <button onClick={onLogout} className="text-blue-100 hover:text-white hover:bg-white/10 transition-all p-2 rounded-lg" title="Logout">
            <IconLogout />
          </button>
        </div>
      )}
    </aside>
    </>
  );
}

// ── Shared Assignment Interfaces & Data re-exported from assignmentData ───────


// ── Search Pool Interface & Builder ───────────────────────────────────────────
export interface SearchResultItem {
  id: string;
  category: "Course" | "Student" | "Assignment" | "Quiz" | "Learning Material" | "Grade" | "Announcement" | "Message" | "Calendar";
  title: string;
  subtitle: string;
  badgeColor?: string;
  targetPage: string;
}

export function getInstructorSearchPool(assignmentCourses: InstructorCourseAssignments[]): SearchResultItem[] {
  const pool: SearchResultItem[] = [];

  // 1. Courses
  pool.push(
    {
      id: "course-ict301",
      category: "Course",
      title: "ICT301 — Information Technology Project 1",
      subtitle: "3 Credits · Trimester 1 · 3 Students Enrolled · Completed",
      badgeColor: "bg-blue-100 text-blue-700",
      targetPage: "courses",
    },
    {
      id: "course-ict302",
      category: "Course",
      title: "ICT302 — Information Technology Project 2",
      subtitle: "3 Credits · Trimester 3 · 3 Students Enrolled · Active",
      badgeColor: "bg-green-100 text-green-700",
      targetPage: "courses",
    }
  );

  // 2. Students
  const sampleStudents = [
    { name: "Yusuf Rana Magar", id: "20027782", course: "ICT302", email: "20027782@eduflex.richv.win", grade: "HD", status: "Active" },
    { name: "Richard Vitug", id: "20030988", course: "ICT302", email: "20030988@eduflex.richv.win", grade: "HD", status: "Active" },
    { name: "Sadia Binte Mahmud", id: "20035294", course: "ICT302", email: "20035294@eduflex.richv.win", grade: "HD", status: "Active" },
  ];
  sampleStudents.forEach((s) => {
    pool.push({
      id: `student-${s.id}`,
      category: "Student",
      title: s.name,
      subtitle: `${s.id} · ${s.course} · ${s.email} · Current Grade: ${s.grade} · ${s.status}`,
      badgeColor: "bg-emerald-100 text-emerald-700",
      targetPage: "students",
    });
  });

  // 3. Assignments & Assessments (dynamically includes newly created items!)
  assignmentCourses.forEach((c) => {
    c.assignments.forEach((a, idx) => {
      pool.push({
        id: `assign-${c.code}-${idx}-${a.title}`,
        category: "Assignment",
        title: a.title,
        subtitle: `${c.code} · Assignment · Due: ${a.due} · ${a.submissions}/${a.total} submitted · ${a.graded ? "Graded" : "Pending Grading"}`,
        badgeColor: "bg-amber-100 text-amber-700",
        targetPage: "assignments",
      });
    });
    if (c.assessments) {
      c.assessments.forEach((ass, idx) => {
        pool.push({
          id: `assess-${c.code}-${idx}-${ass.title}`,
          category: "Assignment",
          title: ass.title,
          subtitle: `${c.code} · Assessment (Weight: ${ass.weight ?? 0}%) · Due: ${ass.due} · ${ass.status ?? "Published"}`,
          badgeColor: "bg-purple-100 text-purple-700",
          targetPage: "assignments",
        });
      });
    }
  });

  // 4. Quizzes
  const sampleQuizzes = [
    { title: "Sprint 1 Knowledge Check", course: "ICT302", date: "Sep 22, 2026", status: "Active", avg: "3/3 submissions" },
    { title: "Architecture & Verification Quiz", course: "ICT302", date: "Aug 28, 2026", status: "Completed", avg: "Avg Score: 95%" },
    { title: "Project 1 Milestone 2 Review", course: "ICT301", date: "May 10, 2026", status: "Completed", avg: "Avg Score: 91%" },
    { title: "Project 1 Scope & Method Review", course: "ICT301", date: "Mar 18, 2026", status: "Completed", avg: "Avg Score: 97%" },
  ];
  sampleQuizzes.forEach((q, idx) => {
    pool.push({
      id: `quiz-${idx}-${q.title}`,
      category: "Quiz",
      title: q.title,
      subtitle: `${q.course} · Scheduled: ${q.date} · ${q.status} · ${q.avg}`,
      badgeColor: "bg-purple-100 text-purple-700",
      targetPage: "quizzes",
    });
  });

  // 5. Learning Materials
  if (typeof INSTRUCTOR_LEARNING_MATERIALS !== "undefined" && Array.isArray(INSTRUCTOR_LEARNING_MATERIALS)) {
    INSTRUCTOR_LEARNING_MATERIALS.forEach((m) => {
      pool.push({
        id: `material-${m.id}`,
        category: "Learning Material",
        title: m.title,
        subtitle: `${m.course} — ${m.courseName} · ${m.type} · ${m.size} · Uploaded ${m.date}`,
        badgeColor: "bg-teal-100 text-teal-700",
        targetPage: "materials",
      });
    });
  }

  // 6. Grades
  pool.push(
    {
      id: "grade-ict302",
      category: "Grade",
      title: "ICT302 Student Grades",
      subtitle: "Information Technology Project 2 · Grade roster and submission tracking",
      badgeColor: "bg-emerald-100 text-emerald-700",
      targetPage: "grades",
    },
    {
      id: "grade-ict301",
      category: "Grade",
      title: "ICT301 Student Grades",
      subtitle: "Information Technology Project 1 · Grade roster and completed milestones",
      badgeColor: "bg-indigo-100 text-indigo-700",
      targetPage: "grades",
    }
  );

  // 7. Announcements
  const sampleAnnouncements = [
    { title: "ICT302 Assessment 2 Brief & Rubric Released", course: "ICT302", status: "Published", date: "Aug 24, 2026" },
    { title: "Learning Materials Updated — ICT302", course: "ICT302", status: "Published", date: "Aug 27, 2026" },
    { title: "ICT301 Completed Grade Records Released", course: "ICT301", status: "Published", date: "Jun 25, 2026" },
    { title: "Official Domain Migration to eduflex.richv.win", course: "All Courses", status: "Published", date: "Sep 02, 2026" },
  ];
  sampleAnnouncements.forEach((a, idx) => {
    pool.push({
      id: `announcement-${idx}`,
      category: "Announcement",
      title: a.title,
      subtitle: `${a.course} · Status: ${a.status} · ${a.date}`,
      badgeColor: "bg-rose-100 text-rose-700",
      targetPage: "announcements",
    });
  });

  // 8. Messages
  const sampleMessages = [
    { name: "Richard Vitug", detail: "Question about Assessment 2 test plan requirements", course: "ICT302" },
    { name: "Yusuf Rana Magar", detail: "Connection pooling benchmark results confirmed", course: "ICT302" },
    { name: "Sadia Binte Mahmud", detail: "WCAG 2.1 AA audit artifacts uploaded to GitHub", course: "ICT302" },
    { name: "Rojit Munankarmi", detail: "Database seeding and enrollment sync complete", course: "Admin" },
  ];
  sampleMessages.forEach((msg, idx) => {
    pool.push({
      id: `msg-${idx}`,
      category: "Message",
      title: `Message with ${msg.name}`,
      subtitle: `${msg.course} · "${msg.detail}"`,
      badgeColor: "bg-cyan-100 text-cyan-700",
      targetPage: "messages",
    });
  });

  // 9. Calendar
  const sampleCalendar = [
    { title: "ICT302 Capstone Lecture", detail: "Tue 10:00 AM–12:00 PM · Online Zoom" },
    { title: "ICT302 Laboratory & Defense", detail: "Thu 2:00–4:00 PM · Room IT-304" },
    { title: "Assessment 1 Progress Review", detail: "Sep 15, 2026 · 11:59 PM AEST" },
    { title: "Faculty Board Meeting", detail: "Sep 10, 2026 · 2:00–3:00 PM · Room IT-301" },
  ];
  sampleCalendar.forEach((cal, idx) => {
    pool.push({
      id: `calendar-${idx}`,
      category: "Calendar",
      title: cal.title,
      subtitle: cal.detail,
      badgeColor: "bg-orange-100 text-orange-700",
      targetPage: "calendar",
    });
  });

  return pool;
}

// ── Header ────────────────────────────────────────────────────────────────────
function InstructorHeader({
  sidebarW,
  userName,
  userInitials,
  setActive,
  assignmentCourses = INITIAL_ASSIGNMENT_COURSES,
  onToggleMobileMenu,
  theme,
  onToggleTheme,
}: {
  sidebarW: string;
  userName: string;
  userInitials: string;
  setActive?: (id: string) => void;
  assignmentCourses?: InstructorCourseAssignments[];
  onToggleMobileMenu?: () => void;
  theme?: "Light" | "Dark";
  onToggleTheme?: () => void;
}) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const searchPool = getInstructorSearchPool(assignmentCourses);

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
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (item: SearchResultItem) => {
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
      className="fixed top-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-3 sm:px-6 gap-2 sm:gap-4 z-20 transition-all duration-300"
      style={{ left: sidebarW }}
    >
      {/* Mobile hamburger button */}
      <button
        type="button"
        onClick={onToggleMobileMenu}
        aria-label="Open navigation menu"
        className="md:hidden p-1.5 -ml-1 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg shrink-0 cursor-pointer"
      >
        <IconMenu className="w-5 h-5" />
      </button>

      <div className="flex-1 relative max-w-2xl min-w-0" ref={searchRef}>
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
            placeholder="Search courses, students, materials..."
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
                {matches.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(item)}
                    className="w-full px-4 py-3 text-left flex items-center justify-between gap-3 hover:bg-blue-50/60 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${item.badgeColor || "bg-gray-100 text-gray-700"}`}>
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
                  No matching results found for &ldquo;{query}&rdquo;. Try searching for courses, students, assignments, quizzes, or materials.
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flex items-center gap-3 shrink-0">
        <button
          type="button"
          onClick={onToggleTheme}
          title={theme === "Dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          aria-label="Toggle Theme"
          className="relative text-gray-500 hover:text-blue-700 dark:text-gray-300 dark:hover:text-amber-300 transition-colors p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer flex items-center justify-center w-8 h-8 shrink-0"
        >
          {theme === "Dark" ? <IconSun className="text-amber-400" /> : <IconMoon className="text-gray-600 dark:text-gray-200" />}
        </button>
        <button
          type="button"
          onClick={() => setActive && setActive("calendar")}
          className="relative text-gray-500 hover:text-blue-700 transition-colors p-1.5 rounded-full hover:bg-gray-100 cursor-pointer"
          title="Calendar"
          aria-label="Calendar"
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
        </button>
        <button
          type="button"
          onClick={() => setActive && setActive("profile")}
          className="flex items-center gap-2 pl-3 border-l border-gray-200 hover:opacity-80 transition-opacity cursor-pointer text-left"
        >
          <div className="hidden sm:block text-right">
            <p className="text-sm font-semibold text-gray-800 leading-tight">{userName}</p>
            <p className="text-xs text-gray-500">Instructor</p>
          </div>
          <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0" style={{ background: "#0e9f6e" }}>
            {userInitials}
          </div>
        </button>
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
      detail: "All 3 group members actively enrolled in ICT302 – Information Technology Project 2",
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
      detail: "ICT302 Assessment 2: Final Report and Group Activity Log scheduled for Week 11.",
      time: "2 days ago", color: "border-l-green-400 bg-green-50",
    },
  ];

  const courses = [
    {
      code: "ICT301", name: "Information Technology Project 1",
      students: 3, upcoming: "Trimester 1 Capstone Completed",
      color: "#2563eb", bg: "bg-blue-50", badge: "bg-blue-100 text-blue-700",
      progress: 100,
    },
    {
      code: "ICT302", name: "Information Technology Project 2",
      students: 3, upcoming: "Sprint 1 submission due Sep 15",
      color: "#0e9f6e", bg: "bg-emerald-50", badge: "bg-emerald-100 text-emerald-700",
      progress: 45,
    },
  ];

  const upcomingClasses = [
    { course: "ICT302", date: "Sep 4, 2026", time: "10:00 AM – 12:00 PM", room: "Online – Zoom", online: true },
    { course: "ICT302", date: "Sep 6, 2026", time: "2:00 – 4:00 PM", room: "Room IT-304", online: false },
    { course: "ICT301", date: "Sep 7, 2026", time: "9:00 – 11:00 AM", room: "Room IT-201", online: false },
  ];

  const pendingGrading = [
    { name: "Assessment 2: Final Report", course: "ICT302", submissions: 1, type: "Assessment" },
    { name: "Weekly Progress Report 4", course: "ICT302", submissions: 2, type: "Assignment" },
    { name: "Sprint 1 Knowledge Check", course: "ICT302", submissions: 3, type: "Quiz" },
  ];

  const recentActivity = [
    { dot: "bg-blue-500", text: "Richard Vitug submitted Assessment 2: Final Report – ICT302", time: "5 min ago" },
    { dot: "bg-green-500", text: "Yusuf Rana Magar completed Sprint 1 Knowledge Check – ICT302", time: "22 min ago" },
    { dot: "bg-purple-500", text: "Course material uploaded: ICT302 Sprint 2 Architecture Guide", time: "1 hr ago" },
    { dot: "bg-emerald-400", text: "Sadia Binte Mahmud uploaded WCAG audit artifact – ICT302", time: "2 hrs ago" },
    { dot: "bg-teal-500", text: "Announcement posted: Assessment 2 Marking Rubric Released", time: "4 hrs ago" },
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
            <p className="text-xs font-semibold text-gray-700">Trimester 3 — 2026</p>
            <p className="text-[10px] text-gray-400">Term 3 · Sep 2026 – Dec 2026</p>
          </div>
        </div>
      </div>

      {/* Announcement / Notification Banner */}
      <div
        className="marquee-container rounded-2xl flex items-center gap-4 px-5 py-4 mb-6 overflow-hidden cursor-pointer shadow-sm hover:opacity-95 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-400 group"
        style={{ background: "#1a3a9e" }}
        onClick={() => setActive("announcements")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setActive("announcements");
          }
        }}
        aria-label="Instructor announcements ticker"
      >
        <div className="shrink-0 w-10 h-10 bg-amber-400 rounded-xl flex items-center justify-center text-amber-950">
          <IconAnnouncement />
        </div>
        <div className="flex-1 overflow-hidden">
          <p className="text-white font-semibold text-sm mb-0.5">Instructor Notice</p>
          <div className="overflow-hidden">
            <p className="marquee-text text-blue-200 text-sm">
              Teaching Term 1 underway. &nbsp;&nbsp; ICT301 Milestone 2 submissions due September 5. &nbsp;&nbsp; 12 submissions awaiting evaluation. &nbsp;&nbsp; Faculty meeting scheduled for September 10 in Room IT-301.
            </p>
          </div>
        </div>
        <span className="shrink-0 text-blue-200">
          <IconChevronRight />
        </span>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <SummaryCard
          title="My Courses" value="2" subtitle="ICT301 & ICT302"
          icon={<IconBook />} bg="bg-blue-50 border-blue-100"
          iconBg="bg-blue-600" textColor="text-blue-800"
          onClick={() => setActive("courses")}
        />
        <SummaryCard
          title="Total Students" value="3" subtitle="Enrolled Members"
          icon={<IconUsers />} bg="bg-emerald-50 border-emerald-100"
          iconBg="bg-emerald-600" textColor="text-emerald-800"
          onClick={() => setActive("students")}
        />
        <SummaryCard
          title="Pending Grading" value="2" subtitle="Submissions"
          icon={<IconAssignment />} bg="bg-amber-50 border-amber-100"
          iconBg="bg-amber-500" textColor="text-amber-800"
          onClick={() => setActive("grades")}
        />
        <SummaryCard
          title="Upcoming Classes" value="3" subtitle="This Week"
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
    id: "mat-ict302-w2-arch",
    title: "ICT302 Sprint 2 Architecture Specification",
    course: "ICT302",
    courseName: "Information Technology Project 2",
    type: "Document",
    category: "Lecture",
    week: 2,
    size: "3.5 MB",
    date: "Sep 2, 2026",
    icon: "📄",
    description: "Architectural blueprint detailing Next.js Server Components, Server Actions data mutations, and connection pooling.",
  },
  {
    id: "mat-ict302-w3-vid",
    title: "ICT302 Neon Connection Pooling & Playwright Testing",
    course: "ICT302",
    courseName: "Information Technology Project 2",
    type: "Video",
    category: "Tutorial",
    week: 3,
    size: "520 MB",
    date: "Aug 29, 2026",
    icon: "🎬",
    description: "Guided technical demonstration of Neon PostgreSQL connection pooler and automated Playwright test execution.",
  },
  {
    id: "mat-ict302-rubric",
    title: "ICT302 Assessment 2 Final Report Brief & Rubric",
    course: "ICT302",
    courseName: "Information Technology Project 2",
    type: "Document",
    size: "1.2 MB",
    date: "Aug 26, 2026",
    icon: "📄",
    description: "Official KOI BIT marking criteria matrix for the 25-30 page Final Report (40%) and 12-meeting-minute Group Activity Log (10%).",
  },
  {
    id: "mat-ict301-m3-defense",
    title: "ICT301 Milestone 3 Final Defense Presentation Archive",
    course: "ICT301",
    courseName: "Information Technology Project 1",
    type: "Slides",
    size: "5.8 MB",
    date: "Jun 20, 2026",
    icon: "📊",
    description: "Completed Capstone Stage 1 presentation deck and technical defense summary for all team members.",
  },
  {
    id: "mat-ict301-charter",
    title: "ICT301 Project Charter & Scope Baseline",
    course: "ICT301",
    courseName: "Information Technology Project 1",
    type: "Document",
    size: "1.4 MB",
    date: "Mar 25, 2026",
    icon: "📄",
    description: "Approved project charter detailing team roles, project scope boundaries, and risk mitigation strategies.",
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
                <span>Instructor: Anita Humagain</span>
                <span>Trimester 3, Academic Year 2026</span>
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
      students: 3, schedule: "Completed Trimester 1", room: "IT-201",
      progress: 100, color: "#2563eb", bg: "from-blue-50 to-white",
      badge: "bg-blue-100 text-blue-700", borderColor: "border-blue-200",
      topics: ["System Analysis & Design", "Project Planning", "Agile Methodology", "Documentation Standards"],
      allTopics: [
        { title: "System Analysis & Design", desc: "Foundational software requirements engineering, problem framing, and system modeling." },
        { title: "Project Planning & Estimation", desc: "Gantt charting, milestone breakdown structures, and resource allocation." },
      ],
      upcoming: [
        { label: "Course Completed", date: "Jun 20, 2026", type: "Class" },
      ],
      allUpcoming: [
        { label: "Milestone 1: Project Scope", date: "Mar 15, 2026", type: "Assignment", detail: "ICT301 Project Charter and Scope Documentation" },
        { label: "Milestone 2: System Architecture", date: "Apr 20, 2026", type: "Assignment", detail: "ICT301 Preliminary Design & Architecture Submission" },
        { label: "Final Project Report", date: "Jun 15, 2026", type: "Assignment", detail: "Comprehensive Capstone Part 1 Report (Graded HD)" },
      ],
      students_list: [
        { name: "Richard Vitug", id: "20030988", grade: "HD" },
        { name: "Yusuf Rana Magar", id: "20027782", grade: "HD" },
        { name: "Sadia Binte Mahmud", id: "20035294", grade: "HD" },
      ],
      allStudents: [
        { name: "Richard Vitug", id: "20030988", email: "20030988@eduflex.richv.win", grade: "HD", status: "Completed", submitted: 3, total: 3 },
        { name: "Yusuf Rana Magar", id: "20027782", email: "20027782@eduflex.richv.win", grade: "HD", status: "Completed", submitted: 3, total: 3 },
        { name: "Sadia Binte Mahmud", id: "20035294", email: "20035294@eduflex.richv.win", grade: "HD", status: "Completed", submitted: 3, total: 3 },
      ],
    },
    {
      code: "ICT302", name: "Information Technology Project 2", credits: 3,
      students: 3, schedule: "Mon/Wed 10:00 AM–12:00 PM", room: "IT-302",
      progress: 45, color: "#0e9f6e", bg: "from-emerald-50 to-white",
      badge: "bg-emerald-100 text-emerald-700", borderColor: "border-emerald-200",
      topics: ["Agile Sprint Execution", "Full-Stack Implementation", "CI/CD & Testing", "Final Product Showcase"],
      allTopics: [
        { title: "Sprint Execution & Scrum Workflow", desc: "Two-week sprints, backlog grooming, and burndown tracking." },
        { title: "Next.js & Neon PostgreSQL Integration", desc: "Pure SSR data flow, Server Actions, and relational schema migrations." },
        { title: "Automated Testing & QA Verification", desc: "Playwright end-to-end tests, unit validation, and regression suites." },
        { title: "Production Deployment & Showcase Defense", desc: "Production hosting, live user acceptance testing, and final defense presentation." },
      ],
      upcoming: [
        { label: "Sprint 1 Deliverable Due", date: "Sep 15, 2026", type: "Assignment" },
        { label: "Sprint 2 Architecture Check", date: "Sep 29, 2026", type: "Class" },
      ],
      allUpcoming: [
        { label: "Sprint 1 Deliverable: Core Auth & Portals", date: "Sep 15, 2026", type: "Assignment", detail: "Authentication and portal navigation deliverable" },
        { label: "Sprint 2: Course Materials & Quizzes", date: "Sep 29, 2026", type: "Assignment", detail: "Interactive quiz engine and learning materials modules" },
        { label: "Capstone Final Showcase & Presentation", date: "Oct 25, 2026", type: "Class", detail: "Live capstone demo in Main Auditorium" },
      ],
      students_list: [
        { name: "Richard Vitug", id: "20030988", grade: "HD" },
        { name: "Yusuf Rana Magar", id: "20027782", grade: "HD" },
        { name: "Sadia Binte Mahmud", id: "20035294", grade: "HD" },
      ],
      allStudents: [
        { name: "Richard Vitug", id: "20030988", email: "20030988@eduflex.richv.win", grade: "HD", status: "Active", submitted: 2, total: 3 },
        { name: "Yusuf Rana Magar", id: "20027782", email: "20027782@eduflex.richv.win", grade: "HD", status: "Active", submitted: 2, total: 3 },
        { name: "Sadia Binte Mahmud", id: "20035294", email: "20035294@eduflex.richv.win", grade: "HD", status: "Active", submitted: 2, total: 3 },
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
    { name: "Yusuf Rana Magar",   id: "20027782", course: "ICT302", email: "20027782@eduflex.richv.win", grade: "HD", status: "Active",   submitted: 10, total: 10 },
    { name: "Richard Vitug",       id: "20030988", course: "ICT302", email: "20030988@eduflex.richv.win", grade: "HD", status: "Active",   submitted: 10, total: 10 },
    { name: "Sadia Binte Mahmud", id: "20035294", course: "ICT302", email: "20035294@eduflex.richv.win", grade: "HD", status: "Active",   submitted: 10, total: 10 },
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
            <option value="ICT301">ICT301 (Completed)</option>
            <option value="ICT302">ICT302 (Active)</option>
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
function toInputDateFormat(dateStr: string): string {
  if (!dateStr) return "";
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return dateStr;
  try {
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) {
      return d.toISOString().split("T")[0];
    }
  } catch {}
  return "";
}

function AssignmentsPage({
  setActive,
  courses: externalCourses,
  setCourses: externalSetCourses,
}: {
  setActive: (id: string) => void;
  courses?: InstructorCourseAssignments[];
  setCourses?: React.Dispatch<React.SetStateAction<InstructorCourseAssignments[]>>;
}) {
  const [internalCourses, setInternalCourses] = useState<InstructorCourseAssignments[]>(getSharedCourses);
  const courses = externalCourses ?? internalCourses;
  const setCourses = externalSetCourses ?? setInternalCourses;

  const [open, setOpen] = useState<string | null>("ICT301");
  const [searchQuery, setSearchQuery] = useState("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [subDeliverables, setSubDeliverables] = useState<SubDeliverableItem[]>(() => getSharedSubDeliverables());

  const handleToggleLock = (id: string, title: string, currentlyLocked: boolean) => {
    const updated = toggleSubDeliverableLock(id);
    setSubDeliverables(updated);
    setToastMessage(`${title} ${currentlyLocked ? "unlocked" : "locked"} for student submissions.`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const [neonSubmissions, setNeonSubmissions] = useState<InstructorGradingQueueItem[]>([]);
  const [loadingSubmissions, setLoadingSubmissions] = useState(true);
  const [submissionsError, setSubmissionsError] = useState<string | null>(null);
  const [gradingTarget, setGradingTarget] = useState<InstructorGradingQueueItem | null>(null);
  const [gradeScore, setGradeScore] = useState("");
  const [gradeFeedback, setGradeFeedback] = useState("");
  const [releaseImmediately, setReleaseImmediately] = useState(true);
  const [gradingSaving, setGradingSaving] = useState(false);

  const reloadSubmissions = async () => {
    setLoadingSubmissions(true);
    try {
      const res = await getInstructorGradingQueueAction();
      if (res.success && res.submissions) {
        setNeonSubmissions(res.submissions);
        setSubmissionsError(null);
      } else if (!res.success) {
        setSubmissionsError(res.error ?? "Failed to load student submissions.");
      }
    } finally {
      setLoadingSubmissions(false);
    }
  };

  useEffect(() => {
    void reloadSubmissions();
  }, []);

  const openGradeModal = (sub: InstructorGradingQueueItem) => {
    setGradingTarget(sub);
    setGradeScore(sub.score != null ? String(sub.score) : "");
    setGradeFeedback(sub.feedback ?? "");
    setReleaseImmediately(true);
  };

  const handleDeleteSubmission = async (sub: InstructorGradingQueueItem) => {
    const res = await deleteSubmissionAction(sub.id);
    if (res.success) {
      setNeonSubmissions((prev) => prev.filter((item) => item.id !== sub.id));
      setToastMessage(`Removed submission ${sub.receiptNumber} (${sub.fileName}).`);
    } else {
      setToastMessage(res.error ?? "Failed to remove submission.");
    }
    setTimeout(() => setToastMessage(null), 3000);
  };

  const getLiveGradeBand = (scoreStr: string, maxScore: number) => {
    const val = Number(scoreStr);
    if (!scoreStr.trim() || !Number.isFinite(val) || val < 0 || val > maxScore) return null;
    const pct = Math.round((val / (maxScore > 0 ? maxScore : 100)) * 1000) / 10;
    if (pct >= 85) return { pct, code: "HD", label: "High Distinction (HD)", cls: "bg-emerald-50 text-emerald-700 border-emerald-200" };
    if (pct >= 75) return { pct, code: "DI", label: "Distinction (DI)", cls: "bg-blue-50 text-blue-700 border-blue-200" };
    if (pct >= 65) return { pct, code: "CR", label: "Credit (CR)", cls: "bg-indigo-50 text-indigo-700 border-indigo-200" };
    if (pct >= 50) return { pct, code: "P", label: "Pass (P)", cls: "bg-amber-50 text-amber-700 border-amber-200" };
    return { pct, code: "F", label: "Fail (F)", cls: "bg-red-50 text-red-700 border-red-200" };
  };

  const handleSaveGrade = async () => {
    if (!gradingTarget) return;
    const numericScore = Number(gradeScore);
    if (!Number.isFinite(numericScore) || numericScore < 0 || numericScore > gradingTarget.maxScore) {
      setToastMessage(`Enter a valid score between 0 and ${gradingTarget.maxScore}.`);
      setTimeout(() => setToastMessage(null), 3000);
      return;
    }
    setGradingSaving(true);
    try {
      const res = await gradeSubmissionAction({
        studentName: gradingTarget.studentName,
        studentEmail: gradingTarget.studentEmail,
        courseCode: gradingTarget.courseCode,
        assignmentTitle: gradingTarget.assignmentTitle,
        score: numericScore,
        maxScore: gradingTarget.maxScore,
        feedback: gradeFeedback.trim() || undefined,
        releaseImmediately,
      });
      if (res.success) {
        setToastMessage(
          `Graded ${gradingTarget.studentName}: ${numericScore}/${gradingTarget.maxScore} (${res.gradeLabel ?? "Saved"}).`
        );
        setGradingTarget(null);
        await reloadSubmissions();
      } else {
        setToastMessage(res.error ?? "Failed to save grade.");
      }
    } finally {
      setGradingSaving(false);
      setTimeout(() => setToastMessage(null), 3500);
    }
  };

  // Detail View State
  const [viewItem, setViewItem] = useState<null | {
    id?: string;
    title: string;
    course: string;
    due: string;
    submissions: number;
    total: number;
    type: string;
    graded: boolean;
    maxScore?: number;
    description?: string;
    weight?: number;
    status?: "Draft" | "Published";
  }>(null);

  // Create Menu Dropdown State
  const [isCreateMenuOpen, setIsCreateMenuOpen] = useState(false);
  const createMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (createMenuRef.current && !createMenuRef.current.contains(e.target as Node)) {
        setIsCreateMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ── New Assignment Modal State ──
  const [isAssignmentModalOpen, setIsAssignmentModalOpen] = useState(false);
  const [createAssignmentCourse, setCreateAssignmentCourse] = useState("ICT301");
  const [createAssignmentTitle, setCreateAssignmentTitle] = useState("");
  const [createAssignmentDesc, setCreateAssignmentDesc] = useState("");
  const [createAssignmentDue, setCreateAssignmentDue] = useState("");
  const [createAssignmentMaxScore, setCreateAssignmentMaxScore] = useState("100");
  const [assignmentErrors, setAssignmentErrors] = useState<Record<string, string>>({});

  // ── New Assessment Modal State ──
  const [isAssessmentModalOpen, setIsAssessmentModalOpen] = useState(false);
  const [createAssessmentCourse, setCreateAssessmentCourse] = useState("ICT301");
  const [createAssessmentTitle, setCreateAssessmentTitle] = useState("");
  const [createAssessmentDesc, setCreateAssessmentDesc] = useState("");
  const [createAssessmentDue, setCreateAssessmentDue] = useState("");
  const [createAssessmentMaxScore, setCreateAssessmentMaxScore] = useState("100");
  const [createAssessmentWeight, setCreateAssessmentWeight] = useState("25");
  const [assessmentErrors, setAssessmentErrors] = useState<Record<string, string>>({});

  // ── Edit Modal State ──
  const [editTarget, setEditTarget] = useState<null | {
    item: InstructorAssignmentItem;
    courseCode: string;
    isAssessment: boolean;
  }>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [editDue, setEditDue] = useState("");
  const [editMaxScore, setEditMaxScore] = useState("100");
  const [editWeight, setEditWeight] = useState("20");
  const [editStatus, setEditStatus] = useState<"Draft" | "Published">("Published");
  const [editErrors, setEditErrors] = useState<Record<string, string>>({});

  // ── Delete Confirm State ──
  const [deleteTarget, setDeleteTarget] = useState<null | {
    item: InstructorAssignmentItem;
    courseCode: string;
    isAssessment: boolean;
  }>(null);

  const courseTotals: Record<string, number> = {
    ICT302: 3,
    ICT301: 3,
  };

  // ── Handlers ──
  const handleCreateAssignment = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (!createAssignmentTitle.trim()) {
      errors.title = "Assignment title is required";
    }
    if (!createAssignmentDesc.trim()) {
      errors.desc = "Description & instructions are required";
    }
    if (!createAssignmentDue.trim()) {
      errors.due = "Due date is required";
    }
    const scoreNum = Number(createAssignmentMaxScore);
    if (!createAssignmentMaxScore || isNaN(scoreNum) || scoreNum <= 0) {
      errors.maxScore = "Please enter a valid maximum score (greater than 0)";
    }

    if (Object.keys(errors).length > 0) {
      setAssignmentErrors(errors);
      return;
    }

    const formattedDate = formatDueDate(createAssignmentDue);
    const newAssignment: InstructorAssignmentItem = {
      id: `assign-${Date.now()}`,
      title: createAssignmentTitle.trim(),
      due: formattedDate,
      submissions: 0,
      total: courseTotals[createAssignmentCourse] || 30,
      type: "Assignment",
      graded: false,
      maxScore: scoreNum,
      description: createAssignmentDesc.trim(),
    };

    setCourses((prevCourses) =>
      prevCourses.map((c) => {
        if (c.code === createAssignmentCourse) {
          return {
            ...c,
            assignments: [newAssignment, ...c.assignments],
          };
        }
        return c;
      })
    );

    setOpen(createAssignmentCourse);
    setToastMessage(`Assignment "${createAssignmentTitle.trim()}" created successfully for ${createAssignmentCourse}!`);
    setTimeout(() => setToastMessage(null), 4000);

    setCreateAssignmentTitle("");
    setCreateAssignmentDesc("");
    setCreateAssignmentDue("");
    setCreateAssignmentMaxScore("100");
    setAssignmentErrors({});
    setIsAssignmentModalOpen(false);
  };

  const handleSaveAssessment = (publish: boolean) => {
    const errors: Record<string, string> = {};

    if (!createAssessmentTitle.trim()) {
      errors.title = "Assessment title is required";
    }
    if (!createAssessmentDesc.trim()) {
      errors.desc = "Description is required";
    }
    if (!createAssessmentDue.trim()) {
      errors.due = "Due date is required";
    }
    const scoreNum = Number(createAssessmentMaxScore);
    if (!createAssessmentMaxScore || isNaN(scoreNum) || scoreNum <= 0) {
      errors.maxScore = "Please enter a valid maximum score (greater than 0)";
    }
    const weightNum = Number(createAssessmentWeight);
    if (!createAssessmentWeight || isNaN(weightNum) || weightNum <= 0 || weightNum > 100) {
      errors.weight = "Please enter a valid weight between 1% and 100%";
    }

    if (Object.keys(errors).length > 0) {
      setAssessmentErrors(errors);
      return;
    }

    const formattedDate = formatDueDate(createAssessmentDue);
    const newAssessment: InstructorAssignmentItem = {
      id: `assess-${Date.now()}`,
      title: createAssessmentTitle.trim(),
      due: formattedDate,
      submissions: 0,
      total: courseTotals[createAssessmentCourse] || 30,
      type: "Assessment",
      graded: false,
      maxScore: scoreNum,
      weight: weightNum,
      description: createAssessmentDesc.trim(),
      status: publish ? "Published" : "Draft",
    };

    setCourses((prevCourses) =>
      prevCourses.map((c) => {
        if (c.code === createAssessmentCourse) {
          const currentAssessments = c.assessments || [];
          return {
            ...c,
            assessments: [newAssessment, ...currentAssessments],
          };
        }
        return c;
      })
    );

    setOpen(createAssessmentCourse);
    if (publish) {
      setToastMessage(`Assessment "${createAssessmentTitle.trim()}" published successfully for ${createAssessmentCourse}!`);
    } else {
      setToastMessage(`Assessment "${createAssessmentTitle.trim()}" saved as draft for ${createAssessmentCourse}.`);
    }
    setTimeout(() => setToastMessage(null), 4000);

    setCreateAssessmentTitle("");
    setCreateAssessmentDesc("");
    setCreateAssessmentDue("");
    setCreateAssessmentMaxScore("100");
    setCreateAssessmentWeight("25");
    setAssessmentErrors({});
    setIsAssessmentModalOpen(false);
  };

  const openEditModal = (item: InstructorAssignmentItem, courseCode: string, isAssessment: boolean) => {
    setEditTarget({ item, courseCode, isAssessment });
    setEditTitle(item.title);
    setEditDesc(item.description || "");
    setEditDue(toInputDateFormat(item.due));
    setEditMaxScore(String(item.maxScore ?? 100));
    setEditWeight(String(item.weight ?? 20));
    setEditStatus(item.status ?? "Published");
    setEditErrors({});
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editTarget) return;

    const errors: Record<string, string> = {};
    if (!editTitle.trim()) errors.title = "Title is required";
    if (!editDesc.trim()) errors.desc = "Description is required";
    if (!editDue.trim()) errors.due = "Due date is required";
    const scoreNum = Number(editMaxScore);
    if (!editMaxScore || isNaN(scoreNum) || scoreNum <= 0) {
      errors.maxScore = "Enter a valid score (> 0)";
    }
    const weightNum = Number(editWeight);
    if (editTarget.isAssessment && (!editWeight || isNaN(weightNum) || weightNum <= 0 || weightNum > 100)) {
      errors.weight = "Enter a valid weight (1-100%)";
    }

    if (Object.keys(errors).length > 0) {
      setEditErrors(errors);
      return;
    }

    const updatedDate = formatDueDate(editDue);

    setCourses((prev) =>
      prev.map((c) => {
        if (c.code === editTarget.courseCode) {
          if (editTarget.isAssessment) {
            const updatedAssessments = (c.assessments || []).map((ass) => {
              if (ass.id === editTarget.item.id || ass.title === editTarget.item.title) {
                return {
                  ...ass,
                  title: editTitle.trim(),
                  description: editDesc.trim(),
                  due: updatedDate,
                  maxScore: scoreNum,
                  weight: weightNum,
                  status: editStatus,
                };
              }
              return ass;
            });
            return { ...c, assessments: updatedAssessments };
          } else {
            const updatedAssignments = c.assignments.map((a) => {
              if (a.id === editTarget.item.id || a.title === editTarget.item.title) {
                return {
                  ...a,
                  title: editTitle.trim(),
                  description: editDesc.trim(),
                  due: updatedDate,
                  maxScore: scoreNum,
                };
              }
              return a;
            });
            return { ...c, assignments: updatedAssignments };
          }
        }
        return c;
      })
    );

    setToastMessage(`${editTarget.isAssessment ? "Assessment" : "Assignment"} updated successfully.`);
    setTimeout(() => setToastMessage(null), 4000);
    setEditTarget(null);
  };

  const handleConfirmDelete = () => {
    if (!deleteTarget) return;

    setCourses((prev) =>
      prev.map((c) => {
        if (c.code === deleteTarget.courseCode) {
          if (deleteTarget.isAssessment) {
            return {
              ...c,
              assessments: (c.assessments || []).filter(
                (ass) => ass.id !== deleteTarget.item.id && ass.title !== deleteTarget.item.title
              ),
            };
          } else {
            return {
              ...c,
              assignments: c.assignments.filter(
                (a) => a.id !== deleteTarget.item.id && a.title !== deleteTarget.item.title
              ),
            };
          }
        }
        return c;
      })
    );

    setToastMessage(`${deleteTarget.isAssessment ? "Assessment" : "Assignment"} deleted successfully.`);
    setTimeout(() => setToastMessage(null), 4000);
    setDeleteTarget(null);
  };

  // ── Dedicated View Details View ──
  if (viewItem) {
    const pending = viewItem.total - viewItem.submissions;
    const isAssessment = viewItem.type === "Assessment" || !!viewItem.weight;

    return (
      <div className="p-6">
        <button
          onClick={() => setViewItem(null)}
          className="mb-4 flex items-center gap-1.5 text-sm text-blue-600 hover:underline font-medium cursor-pointer"
        >
          ← Back to Assignments
        </button>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
          <div className="flex items-start justify-between flex-wrap gap-3">
            <div>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-700">
                  {viewItem.course}
                </span>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${isAssessment ? "bg-purple-100 text-purple-700" : "bg-amber-100 text-amber-700"}`}>
                  {isAssessment ? "Assessment" : "Assignment"}
                </span>
                {viewItem.weight && (
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-700">
                    Weight: {viewItem.weight}%
                  </span>
                )}
                {viewItem.status && (
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${viewItem.status === "Draft" ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-800"}`}>
                    {viewItem.status}
                  </span>
                )}
              </div>
              <h2 className="text-xl font-bold text-gray-900">{viewItem.title}</h2>
              <p className="text-sm text-gray-500 mt-1">
                Due: {viewItem.due} · Max Score: {viewItem.maxScore ?? 100} pts
              </p>
            </div>
            <button
              onClick={() => setActive("grades")}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-white transition-colors cursor-pointer hover:opacity-95 shadow-xs"
              style={{ background: "#1a3a9e" }}
            >
              Grade Submissions
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-5">
            <div className="text-center p-3 bg-blue-50 rounded-xl">
              <p className="text-2xl font-extrabold text-blue-700">{viewItem.submissions}</p>
              <p className="text-xs text-blue-600 mt-0.5">Submitted</p>
            </div>
            <div className="text-center p-3 bg-amber-50 rounded-xl">
              <p className="text-2xl font-extrabold text-amber-700">{pending}</p>
              <p className="text-xs text-amber-600 mt-0.5">Pending</p>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-xl">
              <p className="text-2xl font-extrabold text-gray-700">{viewItem.total}</p>
              <p className="text-xs text-gray-500 mt-0.5">Total Students</p>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Submission rate</span>
              <span>{Math.round((viewItem.submissions / viewItem.total) * 100)}%</span>
            </div>
            <ProgressBar pct={(viewItem.submissions / viewItem.total) * 100} color="#1a3a9e" />
          </div>
        </div>

        {viewItem.description && (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
            <h3 className="text-sm font-bold text-gray-800 mb-2">Instructions &amp; Criteria</h3>
            <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{viewItem.description}</p>
          </div>
        )}

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <h3 className="text-sm font-bold text-gray-800 mb-4">Student Submissions</h3>
          <div className="space-y-3">
            {(() => {
              const itemSubs = neonSubmissions.filter(
                (s) =>
                  s.courseCode === viewItem.course &&
                  (s.assignmentTitle === viewItem.title ||
                    s.assignmentTitle.toLowerCase().includes(viewItem.title.toLowerCase()) ||
                    viewItem.title.toLowerCase().includes("assessment 1"))
              );
              if (loadingSubmissions) {
                return <p className="text-xs text-gray-400">Loading submissions...</p>;
              }
              if (itemSubs.length === 0) {
                return <p className="text-xs text-gray-400">No student submissions yet for this item.</p>;
              }
              return itemSubs.map((sub) => {
                const isGraded = sub.score !== null;
                return (
                  <div key={sub.id} className="flex items-center justify-between py-2.5 border-b border-gray-50 last:border-0 gap-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                        style={{ background: "#1a3a9e" }}
                      >
                        {getInitials(sub.studentName)}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-gray-800">{sub.studentName}</p>
                        <p className="text-[11px] text-gray-500 truncate">
                          File: <span className="font-medium text-gray-700">{sub.fileName}</span> · Receipt:{" "}
                          <span className="font-mono">{sub.receiptNumber}</span> ·{" "}
                          {new Date(sub.submittedAt).toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 shrink-0">
                      {isGraded ? (
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-50 text-green-700 border border-green-200">
                          {sub.score}/{sub.maxScore}
                        </span>
                      ) : (
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                          Needs Grading
                        </span>
                      )}
                      <button
                        type="button"
                        onClick={() => openGradeModal(sub)}
                        className="text-xs font-semibold px-3 py-1.5 rounded-lg text-white transition-colors cursor-pointer"
                        style={{ background: isGraded ? "#374151" : "#1a3a9e" }}
                      >
                        {isGraded ? "Update Grade" : "Grade Now"}
                      </button>
                    </div>
                  </div>
                );
              });
            })()}
          </div>
        </div>
      </div>
    );
  }

  // ── Main Assignments & Assessments Page ──
  return (
    <div className="p-6">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
        <span>Instructor</span><span>/</span><span className="text-gray-600">Assignments</span>
      </div>

      {/* Page Heading & Actions */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <h1 className="text-2xl font-bold text-gray-900">Assignments</h1>

        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <IconSearch />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search assignments & assessments..."
              className="pl-9 pr-8 py-2 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 w-64"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs p-1"
                title="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* + Create ▼ Dropdown */}
          <div className="relative" ref={createMenuRef}>
            <button
              type="button"
              onClick={() => setIsCreateMenuOpen((prev) => !prev)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-colors cursor-pointer hover:opacity-95 shadow-xs"
              style={{ background: "#1a3a9e" }}
            >
              <IconPlus className="w-4 h-4" />
              <span>Create</span>
              <IconChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isCreateMenuOpen ? "rotate-180" : ""}`} />
            </button>

            {isCreateMenuOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 z-40 animate-in fade-in zoom-in-95 duration-100">
                <div className="px-3.5 py-1 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  Create
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setIsCreateMenuOpen(false);
                    setIsAssignmentModalOpen(true);
                    setAssignmentErrors({});
                  }}
                  className="w-full text-left px-3.5 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 flex items-center gap-2.5 transition-colors cursor-pointer"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                  <span className="font-medium">Assignment</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsCreateMenuOpen(false);
                    setIsAssessmentModalOpen(true);
                    setAssessmentErrors({});
                  }}
                  className="w-full text-left px-3.5 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 flex items-center gap-2.5 transition-colors cursor-pointer"
                >
                  <span className="w-2 h-2 rounded-full bg-purple-600 shrink-0" />
                  <span className="font-medium">Assessment</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Course Sections Accordions */}
      <div className="space-y-4">
        {courses.map((c) => {
          const q = searchQuery.toLowerCase().trim();
          const courseAssignments = c.assignments.filter((a) => {
            if (!q) return true;
            return a.title.toLowerCase().includes(q) || (a.description && a.description.toLowerCase().includes(q));
          });
          const courseAssessments = (c.assessments || []).filter((ass) => {
            if (!q) return true;
            return ass.title.toLowerCase().includes(q) || (ass.description && ass.description.toLowerCase().includes(q));
          });

          const totalAssignmentsCount = c.assignments.length;
          const totalAssessmentsCount = (c.assessments || []).length;
          const totalPendingCount =
            c.assignments.filter((a) => !a.graded).length +
            (c.assessments || []).filter((a) => !a.graded && a.status !== "Draft").length;

          return (
            <div key={c.code} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <button
                type="button"
                className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors cursor-pointer text-left"
                onClick={() => setOpen(open === c.code ? null : c.code)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: c.color }} />
                  <div>
                    <p className="text-sm font-bold text-gray-800">{c.code} – {c.name}</p>
                    <p className="text-xs text-gray-500">
                      {totalAssignmentsCount} assignments · {totalAssessmentsCount} assessments · {totalPendingCount} pending grading
                    </p>
                  </div>
                </div>
                <IconChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${open === c.code ? "rotate-180" : ""}`} />
              </button>

              {open === c.code && (
                <div className="border-t border-gray-100">
                  {/* ── STUDENT SUBMISSIONS (MOODLE-STYLE GRADING TABLE) ── */}
                  {(() => {
                    const hiddenLegacyReceipts = new Set(["#EDF-2026-4439", "#EDF-2026-3021-2003988"]);
                    const courseSubmissions = neonSubmissions.filter(
                      (s) =>
                        s.courseCode === c.code &&
                        !hiddenLegacyReceipts.has(s.receiptNumber) &&
                        (!q ||
                          s.studentName.toLowerCase().includes(q) ||
                          s.assignmentTitle.toLowerCase().includes(q) ||
                          s.fileName.toLowerCase().includes(q))
                    );
                    return (
                      <div>
                        <div className="px-5 py-2.5 bg-blue-50/60 border-b border-blue-100 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#1a3a9e]">
                              Student Submissions
                            </span>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-[#1a3a9e]">
                              {courseSubmissions.length}
                            </span>
                          </div>
                          <span className="text-[11px] text-gray-500">
                            Submitted files &amp; Moodle-style grading
                          </span>
                        </div>

                        {submissionsError ? (
                          <div className="px-5 py-3 bg-red-50 border-b border-red-100 text-xs text-red-700">
                            {submissionsError}
                          </div>
                        ) : loadingSubmissions ? (
                          <div className="px-5 py-4 text-xs text-gray-400">Loading student submissions...</div>
                        ) : courseSubmissions.length === 0 ? (
                          <div className="px-5 py-4 text-center text-xs text-gray-400">
                            {q
                              ? "No student submissions match your search."
                              : "No student submissions yet for this course."}
                          </div>
                        ) : (
                          <div className="overflow-x-auto border-b border-gray-100">
                            <table className="w-full table-fixed text-left border-collapse">
                              <thead>
                                <tr className="bg-gray-50/80 border-b border-gray-100 text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                                  <th className="py-2.5 px-3 w-[20%]">Student</th>
                                  <th className="py-2.5 px-3 w-[21%]">Assessment</th>
                                  <th className="py-2.5 px-3 w-[25%]">Submitted File</th>
                                  <th className="py-2.5 px-3 w-[12%]">Submitted</th>
                                  <th className="py-2.5 px-3 w-[11%]">Status</th>
                                  <th className="py-2.5 px-3 w-[11%] text-right">Action</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-100 text-xs">
                                {courseSubmissions.map((sub) => {
                                  const isGraded = sub.score !== null;
                                  return (
                                    <tr key={sub.id} className="hover:bg-blue-50/20 transition-colors">
                                      <td className="py-3 px-3 min-w-0">
                                        <div className="flex items-center gap-2 min-w-0">
                                          <div
                                            className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[11px] font-bold shrink-0"
                                            style={{ background: "#1a3a9e" }}
                                          >
                                            {getInitials(sub.studentName)}
                                          </div>
                                          <div className="min-w-0 flex-1">
                                            <p className="font-semibold text-gray-900 truncate">{sub.studentName}</p>
                                            <p className="text-[11px] text-gray-400 truncate">{sub.studentEmail}</p>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="py-3 px-3 min-w-0">
                                        <p className="font-medium text-gray-800 line-clamp-2">{sub.assignmentTitle}</p>
                                        <p className="text-[11px] text-gray-400 font-mono truncate">{sub.receiptNumber}</p>
                                      </td>
                                      <td className="py-3 px-3 min-w-0">
                                        <button
                                          type="button"
                                          onClick={() => openGradeModal(sub)}
                                          className="inline-flex items-center gap-1.5 max-w-full px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#1a3a9e] font-medium transition-colors cursor-pointer"
                                          title={`${sub.fileName} — View submitted file & grade`}
                                        >
                                          <IconFile className="w-3.5 h-3.5 text-[#1a3a9e] shrink-0" />
                                          <span className="truncate">{sub.fileName}</span>
                                          {sub.fileSizeLabel && (
                                            <span className="text-[10px] text-gray-500 shrink-0">({sub.fileSizeLabel})</span>
                                          )}
                                        </button>
                                      </td>
                                      <td className="py-3 px-3 text-[11px] text-gray-500">
                                        {new Date(sub.submittedAt).toLocaleDateString()}
                                      </td>
                                      <td className="py-3 px-3">
                                        {isGraded ? (
                                          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-green-50 text-green-700 text-[11px] font-semibold border border-green-200 whitespace-nowrap">
                                            {sub.score}/{sub.maxScore}
                                            {sub.gradeLabel ? ` (${sub.gradeLabel})` : ""}
                                          </span>
                                        ) : (
                                          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[11px] font-semibold border border-amber-200 whitespace-nowrap">
                                            Pending
                                          </span>
                                        )}
                                      </td>
                                      <td className="py-3 px-3 text-right">
                                        <div className="inline-flex items-center justify-end gap-1">
                                          <button
                                            type="button"
                                            onClick={() => openGradeModal(sub)}
                                            className="px-2.5 py-1.5 rounded-lg text-[11px] font-semibold text-white transition-colors cursor-pointer whitespace-nowrap"
                                            style={{ background: isGraded ? "#374151" : "#1a3a9e" }}
                                          >
                                            {isGraded ? "Update" : "Grade"}
                                          </button>
                                          <button
                                            type="button"
                                            onClick={() => void handleDeleteSubmission(sub)}
                                            className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer shrink-0"
                                            title="Remove submission"
                                          >
                                            <IconTrash className="w-3.5 h-3.5" />
                                          </button>
                                        </div>
                                      </td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                          </div>
                        )}
                      </div>
                    );
                  })()}

                  {/* ── ASSIGNMENTS SECTION (only shown when non-empty) ── */}
                  {courseAssignments.length > 0 && (
                    <>
                      <div className="px-5 py-2.5 bg-gray-50/75 border-b border-gray-100 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-gray-600">Assignments</span>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gray-200 text-gray-700">
                            {courseAssignments.length}
                          </span>
                        </div>
                        <span className="text-[11px] text-gray-400">Regular coursework &amp; lab exercises</span>
                      </div>
                      <div className="divide-y divide-gray-50">
                        {courseAssignments.map((a, i) => (
                        <div key={a.id || i} className="flex items-center justify-between px-5 py-3.5 hover:bg-gray-50/60 transition-colors gap-3 flex-wrap sm:flex-nowrap">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${a.graded ? "bg-green-50 text-green-600" : "bg-amber-50 text-amber-500"}`}>
                              {a.graded ? <IconCheck /> : <IconClock />}
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-800">{a.title}</p>
                              <p className="text-xs text-gray-500">
                                Due: {a.due} · {a.submissions}/{a.total} submitted · Max: {a.maxScore ?? 100} pts
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            {!a.graded && (
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">
                                {a.submissions > 0 ? `${a.submissions} to grade` : "Pending"}
                              </span>
                            )}
                            <button
                              type="button"
                              onClick={() => setViewItem({ ...a, course: c.code, isAssessment: false } as any)}
                              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors cursor-pointer"
                            >
                              View Details
                            </button>
                            <button
                              type="button"
                              onClick={() => openEditModal(a, c.code, false)}
                              className="p-1.5 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer"
                              title="Edit Assignment"
                            >
                              <IconEdit className="w-4 h-4" />
                            </button>
                            <button
                              type="button"
                              onClick={() => setDeleteTarget({ item: a, courseCode: c.code, isAssessment: false })}
                              className="p-1.5 rounded-lg text-gray-500 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                              title="Delete Assignment"
                            >
                              <IconTrash className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    </>
                  )}

                  {/* ── ASSESSMENTS SECTION ── */}
                  <div className="px-5 py-2.5 bg-purple-50/70 border-t border-b border-purple-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-purple-900">Assessments</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-800">
                        {courseAssessments.length}
                      </span>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                        Weighted
                      </span>
                    </div>
                    <span className="text-[11px] text-purple-700 font-medium">Major coursework, milestones &amp; summative tasks</span>
                  </div>

                  {courseAssessments.length === 0 ? (
                    <div className="px-5 py-4 text-center text-xs text-gray-400">
                      {q ? "No assessments match your search." : "No assessments published yet for this course. Use + Create → Assessment to add one."}
                    </div>
                  ) : (
                    <div className="divide-y divide-gray-50">
                      {courseAssessments.map((ass, i) => (
                        <div key={ass.id || i} className="flex items-center justify-between px-5 py-3.5 hover:bg-purple-50/30 transition-colors gap-3 flex-wrap sm:flex-nowrap">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-purple-50 text-purple-600">
                              <IconAssignment />
                            </div>
                            <div>
                              <div className="flex items-center gap-2 flex-wrap">
                                <p className="text-sm font-semibold text-gray-800">{ass.title}</p>
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">
                                  Weight: {ass.weight ?? 0}%
                                </span>
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                  ass.status === "Draft" ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-800"
                                }`}>
                                  {ass.status ?? "Published"}
                                </span>
                              </div>
                              <p className="text-xs text-gray-500 mt-0.5">
                                Due: {ass.due} · {ass.submissions}/{ass.total} submitted · Max: {ass.maxScore ?? 100} pts
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <button
                              type="button"
                              onClick={() => setViewItem({ ...ass, course: c.code, isAssessment: true } as any)}
                              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors cursor-pointer"
                            >
                              View Details
                            </button>
                            <button
                              type="button"
                              onClick={() => openEditModal(ass, c.code, true)}
                              className="p-1.5 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer"
                              title="Edit Assessment"
                            >
                              <IconEdit className="w-4 h-4" />
                            </button>
                            <button
                              type="button"
                              onClick={() => setDeleteTarget({ item: ass, courseCode: c.code, isAssessment: true })}
                              className="p-1.5 rounded-lg text-gray-500 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                              title="Delete Assessment"
                            >
                              <IconTrash className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── Moodle-Style Split-Screen File Viewer & Grading Modal ── */}
      {gradingTarget && (() => {
        const lowerName = gradingTarget.fileName.toLowerCase();
        const isInlinePreviewable =
          !gradingTarget.hasStoredFile ||
          lowerName.endsWith(".pdf") ||
          lowerName.endsWith(".txt") ||
          lowerName.endsWith(".md") ||
          lowerName.endsWith(".png") ||
          lowerName.endsWith(".jpg") ||
          lowerName.endsWith(".jpeg");
        const liveBand = getLiveGradeBand(gradeScore, gradingTarget.maxScore);

        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-5xl max-h-[90vh] flex flex-col overflow-hidden">
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between gap-4 bg-gray-50/70">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-[#1a3a9e]">
                      {gradingTarget.courseCode}
                    </span>
                    <span className="text-[11px] font-mono text-gray-500">{gradingTarget.receiptNumber}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mt-1">
                    {gradingTarget.studentName} — {gradingTarget.assignmentTitle}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {gradingTarget.studentEmail} · Submitted {new Date(gradingTarget.submittedAt).toLocaleString()}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setGradingTarget(null)}
                  className="p-2 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 text-sm font-bold cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Split Body: Left = File Preview + Notes | Right = Moodle Grading Panel */}
              <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 min-h-0 overflow-y-auto">
                {/* Left Pane: Submitted File & Student Notes */}
                <div className="lg:col-span-7 p-5 border-b lg:border-b-0 lg:border-r border-gray-100 flex flex-col gap-4 bg-gray-50/40">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <IconFile className="w-4 h-4 text-[#1a3a9e]" />
                      <span className="text-xs font-bold text-gray-800 truncate">{gradingTarget.fileName}</span>
                      <span className="text-[11px] text-gray-400">({gradingTarget.fileSizeLabel})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href={gradingTarget.fileViewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-white border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        Open in New Tab
                      </a>
                      <a
                        href={`${gradingTarget.fileViewUrl}?download=1`}
                        download={gradingTarget.fileName}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-semibold text-white transition-colors"
                        style={{ background: "#1a3a9e" }}
                      >
                        Download File
                      </a>
                    </div>
                  </div>

                  {isInlinePreviewable ? (
                    <iframe
                      src={gradingTarget.fileViewUrl}
                      title={gradingTarget.fileName}
                      className="w-full flex-1 min-h-[340px] rounded-xl border border-gray-200 bg-white"
                    />
                  ) : (
                    <div className="flex-1 min-h-[260px] rounded-xl border border-dashed border-gray-300 bg-white flex flex-col items-center justify-center p-6 text-center gap-3">
                      <IconFile className="w-10 h-10 text-[#1a3a9e]" />
                      <div>
                        <p className="text-sm font-bold text-gray-800">{gradingTarget.fileName}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          Word/ZIP deliverables open via download. Click below to inspect the file before grading.
                        </p>
                      </div>
                      <a
                        href={`${gradingTarget.fileViewUrl}?download=1`}
                        download={gradingTarget.fileName}
                        className="px-4 py-2 rounded-xl text-xs font-semibold text-white"
                        style={{ background: "#1a3a9e" }}
                      >
                        Download {gradingTarget.fileName}
                      </a>
                    </div>
                  )}

                  {gradingTarget.comments && (
                    <div className="rounded-xl bg-white border border-gray-200 p-3.5">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                        Student Notes / Self-Reflection
                      </p>
                      <p className="text-xs text-gray-700 whitespace-pre-wrap leading-relaxed max-h-40 overflow-y-auto">
                        {gradingTarget.comments}
                      </p>
                    </div>
                  )}
                </div>

                {/* Right Pane: Grading & KOI Grade Band */}
                <div className="lg:col-span-5 p-5 flex flex-col justify-between gap-4">
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-xs font-semibold text-gray-700">
                          Mark (out of {gradingTarget.maxScore})
                        </label>
                        {liveBand && (
                          <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${liveBand.cls}`}>
                            {liveBand.pct}% · {liveBand.label}
                          </span>
                        )}
                      </div>
                      <input
                        type="number"
                        min={0}
                        max={gradingTarget.maxScore}
                        step="0.5"
                        value={gradeScore}
                        onChange={(e) => setGradeScore(e.target.value)}
                        placeholder={`0 - ${gradingTarget.maxScore}`}
                        className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#1a3a9e]"
                      />
                      <p className="text-[11px] text-gray-400 mt-1.5">
                        KOI Scale: HD (85–100%) · DI (75–84%) · CR (65–74%) · P (50–64%) · F (&lt;50%)
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Instructor Feedback
                      </label>
                      <textarea
                        rows={6}
                        value={gradeFeedback}
                        onChange={(e) => setGradeFeedback(e.target.value)}
                        placeholder="Enter rubric feedback and comments for the student..."
                        className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#1a3a9e]"
                      />
                    </div>

                    <label className="flex items-center gap-2.5 text-xs text-gray-700 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={releaseImmediately}
                        onChange={(e) => setReleaseImmediately(e.target.checked)}
                        className="rounded border-gray-300 text-[#1a3a9e] focus:ring-[#1a3a9e]"
                      />
                      <span>Release marks &amp; feedback so student can view them immediately</span>
                    </label>
                  </div>

                  <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-gray-100">
                    <button
                      type="button"
                      onClick={() => setGradingTarget(null)}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      disabled={gradingSaving}
                      onClick={() => void handleSaveGrade()}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-white transition-colors cursor-pointer disabled:opacity-60"
                      style={{ background: "#1a3a9e" }}
                    >
                      {gradingSaving
                        ? "Saving..."
                        : releaseImmediately
                          ? "Save & Release Grade"
                          : "Save Grade (Draft)"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* ── New Assignment Modal ── */}
      {isAssignmentModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-5">
              <div>
                <h3 className="text-lg font-bold text-gray-900">New Assignment</h3>
                <p className="text-xs text-gray-500 mt-0.5">Create and publish an assignment for your students</p>
              </div>
              <button
                type="button"
                onClick={() => { setIsAssignmentModalOpen(false); setAssignmentErrors({}); }}
                className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <IconX className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateAssignment} className="space-y-4">
              {/* Course Selection */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Course <span className="text-red-500">*</span>
                </label>
                <select
                  value={createAssignmentCourse}
                  onChange={(e) => setCreateAssignmentCourse(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition"
                >
                  <option value="ICT302">ICT302 — Information Technology Project 2</option>
                  <option value="ICT301">ICT301 — Information Technology Project 1</option>
                </select>
              </div>

              {/* Assignment Title */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Assignment Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={createAssignmentTitle}
                  onChange={(e) => {
                    setCreateAssignmentTitle(e.target.value);
                    if (assignmentErrors.title) setAssignmentErrors((prev) => ({ ...prev, title: "" }));
                  }}
                  placeholder="e.g. Milestone 3: System Implementation"
                  className={`w-full px-3.5 py-2.5 bg-gray-50 border rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition ${
                    assignmentErrors.title ? "border-red-400 bg-red-50/30" : "border-gray-200"
                  }`}
                />
                {assignmentErrors.title && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <span>⚠️</span> {assignmentErrors.title}
                  </p>
                )}
              </div>

              {/* Description / Instructions */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Description &amp; Instructions <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={3}
                  value={createAssignmentDesc}
                  onChange={(e) => {
                    setCreateAssignmentDesc(e.target.value);
                    if (assignmentErrors.desc) setAssignmentErrors((prev) => ({ ...prev, desc: "" }));
                  }}
                  placeholder="Provide submission guidelines, deliverables, and requirements..."
                  className={`w-full px-3.5 py-2.5 bg-gray-50 border rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition resize-none ${
                    assignmentErrors.desc ? "border-red-400 bg-red-50/30" : "border-gray-200"
                  }`}
                />
                {assignmentErrors.desc && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <span>⚠️</span> {assignmentErrors.desc}
                  </p>
                )}
              </div>

              {/* Two-column row: Due Date & Maximum Score */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Due Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={createAssignmentDue}
                    onChange={(e) => {
                      setCreateAssignmentDue(e.target.value);
                      if (assignmentErrors.due) setAssignmentErrors((prev) => ({ ...prev, due: "" }));
                    }}
                    className={`w-full px-3.5 py-2.5 bg-gray-50 border rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition ${
                      assignmentErrors.due ? "border-red-400 bg-red-50/30" : "border-gray-200"
                    }`}
                  />
                  {assignmentErrors.due && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <span>⚠️</span> {assignmentErrors.due}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Maximum Score <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="1000"
                    value={createAssignmentMaxScore}
                    onChange={(e) => {
                      setCreateAssignmentMaxScore(e.target.value);
                      if (assignmentErrors.maxScore) setAssignmentErrors((prev) => ({ ...prev, maxScore: "" }));
                    }}
                    placeholder="100"
                    className={`w-full px-3.5 py-2.5 bg-gray-50 border rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition ${
                      assignmentErrors.maxScore ? "border-red-400 bg-red-50/30" : "border-gray-200"
                    }`}
                  />
                  {assignmentErrors.maxScore && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <span>⚠️</span> {assignmentErrors.maxScore}
                    </p>
                  )}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => { setIsAssignmentModalOpen(false); setAssignmentErrors({}); }}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white transition-colors cursor-pointer hover:opacity-95 shadow-xs"
                  style={{ background: "#1a3a9e" }}
                >
                  Create Assignment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── New Assessment Modal ── */}
      {isAssessmentModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-5">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-gray-900">New Assessment</h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-800">
                    Weighted Coursework
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-0.5">Configure summative assessment details, weight percentage, and submission rules</p>
              </div>
              <button
                type="button"
                onClick={() => { setIsAssessmentModalOpen(false); setAssessmentErrors({}); }}
                className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <IconX className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              {/* Course Selection */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Course <span className="text-red-500">*</span>
                </label>
                <select
                  value={createAssessmentCourse}
                  onChange={(e) => setCreateAssessmentCourse(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:bg-white transition"
                >
                  <option value="ICT302">ICT302 — Information Technology Project 2</option>
                  <option value="ICT301">ICT301 — Information Technology Project 1</option>
                </select>
              </div>

              {/* Assessment Title */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Assessment Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={createAssessmentTitle}
                  onChange={(e) => {
                    setCreateAssessmentTitle(e.target.value);
                    if (assessmentErrors.title) setAssessmentErrors((prev) => ({ ...prev, title: "" }));
                  }}
                  placeholder="e.g. Major Project Capstone Assessment"
                  className={`w-full px-3.5 py-2.5 bg-gray-50 border rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:bg-white transition ${
                    assessmentErrors.title ? "border-red-400 bg-red-50/30" : "border-gray-200"
                  }`}
                />
                {assessmentErrors.title && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <span>⚠️</span> {assessmentErrors.title}
                  </p>
                )}
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Description &amp; Rubric Summary <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={3}
                  value={createAssessmentDesc}
                  onChange={(e) => {
                    setCreateAssessmentDesc(e.target.value);
                    if (assessmentErrors.desc) setAssessmentErrors((prev) => ({ ...prev, desc: "" }));
                  }}
                  placeholder="Define assessment deliverables, grading criteria, and learning outcomes..."
                  className={`w-full px-3.5 py-2.5 bg-gray-50 border rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:bg-white transition resize-none ${
                    assessmentErrors.desc ? "border-red-400 bg-red-50/30" : "border-gray-200"
                  }`}
                />
                {assessmentErrors.desc && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <span>⚠️</span> {assessmentErrors.desc}
                  </p>
                )}
              </div>

              {/* Three-column row: Due Date, Maximum Score, Weight */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Due Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={createAssessmentDue}
                    onChange={(e) => {
                      setCreateAssessmentDue(e.target.value);
                      if (assessmentErrors.due) setAssessmentErrors((prev) => ({ ...prev, due: "" }));
                    }}
                    className={`w-full px-3 py-2.5 bg-gray-50 border rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:bg-white transition ${
                      assessmentErrors.due ? "border-red-400 bg-red-50/30" : "border-gray-200"
                    }`}
                  />
                  {assessmentErrors.due && (
                    <p className="text-xs text-red-600 mt-1">⚠️ {assessmentErrors.due}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Maximum Score <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="1000"
                    value={createAssessmentMaxScore}
                    onChange={(e) => {
                      setCreateAssessmentMaxScore(e.target.value);
                      if (assessmentErrors.maxScore) setAssessmentErrors((prev) => ({ ...prev, maxScore: "" }));
                    }}
                    placeholder="100"
                    className={`w-full px-3 py-2.5 bg-gray-50 border rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:bg-white transition ${
                      assessmentErrors.maxScore ? "border-red-400 bg-red-50/30" : "border-gray-200"
                    }`}
                  />
                  {assessmentErrors.maxScore && (
                    <p className="text-xs text-red-600 mt-1">⚠️ {assessmentErrors.maxScore}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Weight (%) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min="1"
                      max="100"
                      value={createAssessmentWeight}
                      onChange={(e) => {
                        setCreateAssessmentWeight(e.target.value);
                        if (assessmentErrors.weight) setAssessmentErrors((prev) => ({ ...prev, weight: "" }));
                      }}
                      placeholder="25"
                      className={`w-full px-3 py-2.5 pr-7 bg-gray-50 border rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:bg-white transition ${
                        assessmentErrors.weight ? "border-red-400 bg-red-50/30" : "border-gray-200"
                      }`}
                    />
                    <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400">%</span>
                  </div>
                  {assessmentErrors.weight && (
                    <p className="text-xs text-red-600 mt-1">⚠️ {assessmentErrors.weight}</p>
                  )}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100 flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => { setIsAssessmentModalOpen(false); setAssessmentErrors({}); }}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleSaveAssessment(false)}
                    className="px-4 py-2.5 rounded-xl text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-200 transition-colors cursor-pointer"
                  >
                    Save Draft
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSaveAssessment(true)}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white transition-colors cursor-pointer hover:opacity-95 shadow-xs"
                    style={{ background: "#1a3a9e" }}
                  >
                    Publish Assessment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Edit Modal ── */}
      {editTarget && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-5">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Edit {editTarget.isAssessment ? "Assessment" : "Assignment"}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">Course: {editTarget.courseCode}</p>
              </div>
              <button
                type="button"
                onClick={() => setEditTarget(null)}
                className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <IconX className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveEdit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition"
                />
                {editErrors.title && <p className="text-xs text-red-600 mt-1">⚠️ {editErrors.title}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={3}
                  value={editDesc}
                  onChange={(e) => setEditDesc(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition resize-none"
                />
                {editErrors.desc && <p className="text-xs text-red-600 mt-1">⚠️ {editErrors.desc}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Due Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={editDue}
                    onChange={(e) => setEditDue(e.target.value)}
                    className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition"
                  />
                  {editErrors.due && <p className="text-xs text-red-600 mt-1">⚠️ {editErrors.due}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Maximum Score <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={editMaxScore}
                    onChange={(e) => setEditMaxScore(e.target.value)}
                    className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white transition"
                  />
                  {editErrors.maxScore && <p className="text-xs text-red-600 mt-1">⚠️ {editErrors.maxScore}</p>}
                </div>
              </div>

              {editTarget.isAssessment && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Weight (%) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="100"
                      value={editWeight}
                      onChange={(e) => setEditWeight(e.target.value)}
                      className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:bg-white transition"
                    />
                    {editErrors.weight && <p className="text-xs text-red-600 mt-1">⚠️ {editErrors.weight}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Status
                    </label>
                    <select
                      value={editStatus}
                      onChange={(e) => setEditStatus(e.target.value as "Draft" | "Published")}
                      className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:bg-white transition"
                    >
                      <option value="Published">Published</option>
                      <option value="Draft">Draft</option>
                    </select>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setEditTarget(null)}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white transition-colors cursor-pointer hover:opacity-95 shadow-xs"
                  style={{ background: "#1a3a9e" }}
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── Delete Confirmation Modal ── */}
      {deleteTarget && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center gap-3 text-red-600 mb-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                <IconTrash className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900">
                  Delete {deleteTarget.isAssessment ? "Assessment" : "Assignment"}?
                </h3>
                <p className="text-xs text-gray-500">This action cannot be undone.</p>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-5 bg-gray-50 p-3.5 rounded-xl border border-gray-100">
              Are you sure you want to remove <strong className="text-gray-900">&ldquo;{deleteTarget.item.title}&rdquo;</strong> from <strong className="text-gray-900">{deleteTarget.courseCode}</strong>?
            </p>

            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setDeleteTarget(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmDelete}
                className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-red-600 hover:bg-red-700 transition-colors cursor-pointer shadow-xs"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Assessment Submission Lock Controls (Instructor Control) */}
      <div className="mt-6 bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
          <div>
            <h2 className="text-sm font-bold text-gray-900">Assessment Submission Lock Controls (ICT302)</h2>
            <p className="text-xs text-gray-500">Unlock or lock weekly reports and assessment deliverables for students.</p>
          </div>
          <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
            {subDeliverables.filter((d) => d.status !== "Locked").length}/{subDeliverables.length} Unlocked
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 max-h-72 overflow-y-auto pr-1">
          {subDeliverables.map((d) => {
            const isLocked = d.status === "Locked";
            return (
              <div
                key={d.id}
                className="flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl border border-gray-100 bg-gray-50/60"
              >
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-gray-800 truncate">{d.title}</p>
                  <p className="text-[11px] text-gray-500 truncate">
                    {d.due} · <span className={isLocked ? "text-amber-700 font-semibold" : "text-emerald-700 font-semibold"}>{d.status}</span>
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleToggleLock(d.id, d.title, isLocked)}
                  className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    isLocked
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100"
                      : "bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100"
                  }`}
                >
                  {isLocked ? "Unlock" : "Lock"}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Success Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-gray-900 text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 text-xs animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <IconCheck className="w-3.5 h-3.5" />
          </div>
          <div>
            <p className="font-semibold text-white">Update Successful</p>
            <p className="text-gray-300 text-[11px]">{toastMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
}

interface InstructorQuizItem {
  id: string;
  title: string;
  course: string;
  date: string;
  submissions: number;
  total: number;
  status: "Active" | "Upcoming" | "Completed";
  avgScore?: number | null;
}

// ── Quizzes Page ──────────────────────────────────────────────────────────────
function QuizzesPage({ setActive }: { setActive: (id: string) => void }) {
  const [quizzes, setQuizzes] = useState<InstructorQuizItem[]>([
    { id: "q-1", title: "Sprint 1 Knowledge Check: Serverless Architecture & Next.js SSR", course: "ICT302", date: "Sep 22, 2026", submissions: 3, total: 3, status: "Active", avgScore: null },
    { id: "q-2", title: "Continuous Progress Review 1: ERD & Connection Pooling", course: "ICT302", date: "Aug 28, 2026", submissions: 3, total: 3, status: "Completed", avgScore: 95 },
    { id: "q-3", title: "Milestone 2 Architecture Knowledge Check", course: "ICT301", date: "May 10, 2026", submissions: 3, total: 3, status: "Completed", avgScore: 91 },
    { id: "q-4", title: "Project Lifecycle & Scope Charter Review", course: "ICT301", date: "Mar 18, 2026", submissions: 3, total: 3, status: "Completed", avgScore: 97 },
  ]);

  const [viewQuiz, setViewQuiz] = useState<InstructorQuizItem | null>(null);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [subDeliverables, setSubDeliverables] = useState<SubDeliverableItem[]>(() => getSharedSubDeliverables());

  const handleToggleLock = (id: string, title: string, currentlyLocked: boolean) => {
    const updated = toggleSubDeliverableLock(id);
    setSubDeliverables(updated);
    setToastMessage(`${title} ${currentlyLocked ? "unlocked" : "locked"} for student submissions.`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Form states
  const [formTitle, setFormTitle] = useState("");
  const [formCourse, setFormCourse] = useState("ICT301");
  const [formDate, setFormDate] = useState("Sep 15, 2026");
  const [formStatus, setFormStatus] = useState<"Active" | "Upcoming" | "Completed">("Upcoming");
  const [formTotal, setFormTotal] = useState("30");

  const statusColor = (s: string) => {
    if (s === "Completed") return "bg-green-100 text-green-700";
    if (s === "Active")    return "bg-blue-100 text-blue-700";
    return "bg-gray-100 text-gray-500";
  };

  const handleCreateQuiz = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim()) return;
    const newQ: InstructorQuizItem = {
      id: `q-${Date.now()}`,
      title: formTitle.trim(),
      course: formCourse,
      date: formDate,
      submissions: formStatus === "Completed" ? parseInt(formTotal, 10) || 30 : 0,
      total: parseInt(formTotal, 10) || 30,
      status: formStatus,
      avgScore: formStatus === "Completed" ? 85 : null,
    };
    setQuizzes((prev) => [newQ, ...prev]);
    setIsCreateOpen(false);
    setFormTitle("");
    setToastMessage(`Quiz "${newQ.title}" created successfully!`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleUpdateQuiz = (e: React.FormEvent) => {
    e.preventDefault();
    if (!viewQuiz || !formTitle.trim()) return;
    const updated: InstructorQuizItem = {
      ...viewQuiz,
      title: formTitle.trim(),
      course: formCourse,
      date: formDate,
      status: formStatus,
    };
    setQuizzes((prev) => prev.map((q) => (q.id === viewQuiz.id ? updated : q)));
    setViewQuiz(updated);
    setIsEditOpen(false);
    setToastMessage(`Quiz "${updated.title}" updated successfully!`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const openEditModal = (q: typeof viewQuiz) => {
    if (!q) return;
    setFormTitle(q.title);
    setFormCourse(q.course);
    setFormDate(q.date);
    setFormStatus(q.status as "Active" | "Upcoming" | "Completed");
    setFormTotal(String(q.total));
    setIsEditOpen(true);
  };

  if (viewQuiz) {
    return (
      <div className="p-6">
        <button onClick={() => setViewQuiz(null)} className="mb-4 flex items-center gap-1.5 text-sm text-blue-600 hover:underline font-medium cursor-pointer">
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
              <button
                onClick={() => openEditModal(viewQuiz)}
                className="px-4 py-2 rounded-xl text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 transition-colors cursor-pointer"
              >
                Edit Quiz
              </button>
              <button onClick={() => setActive("grades")} className="px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer">
                View Submissions
              </button>
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

        {isEditOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
            <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
              <div className="flex items-center justify-between mb-4 border-b pb-3 border-gray-100">
                <h3 className="text-lg font-bold text-gray-900">Edit Quiz</h3>
                <button onClick={() => setIsEditOpen(false)} className="text-gray-400 hover:text-gray-600">
                  <IconX className="w-5 h-5" />
                </button>
              </div>
              <form onSubmit={handleUpdateQuiz} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Quiz Title</label>
                  <input
                    type="text"
                    value={formTitle}
                    onChange={(e) => setFormTitle(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Course</label>
                    <select
                      value={formCourse}
                      onChange={(e) => setFormCourse(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="ICT302">ICT302</option>
                      <option value="ICT301">ICT301</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Status</label>
                    <select
                      value={formStatus}
                      onChange={(e) => setFormStatus(e.target.value as "Active" | "Upcoming" | "Completed")}
                      className="w-full px-3 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Upcoming">Upcoming</option>
                      <option value="Active">Active</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Date</label>
                  <input
                    type="text"
                    value={formDate}
                    onChange={(e) => setFormDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsEditOpen(false)}
                    className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm font-semibold text-white rounded-xl"
                    style={{ background: "#1a3a9e" }}
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
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
        <button
          onClick={() => {
            setFormTitle("");
            setFormCourse("ICT301");
            setFormDate("Sep 15, 2026");
            setFormStatus("Upcoming");
            setFormTotal("30");
            setIsCreateOpen(true);
          }}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white cursor-pointer hover:opacity-95 transition-opacity"
          style={{ background: "#1a3a9e" }}
        >
          <IconPlus /><span>New Quiz</span>
        </button>
      </div>

      {toastMessage && (
        <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-800 rounded-xl text-xs font-medium flex items-center gap-2">
          <IconCheckCircle className="w-4 h-4 text-green-600" />
          {toastMessage}
        </div>
      )}

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
                  <button onClick={() => setViewQuiz(q)} className="w-full text-xs font-semibold py-1.5 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors cursor-pointer">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {isCreateOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4 border-b pb-3 border-gray-100">
              <h3 className="text-lg font-bold text-gray-900">Create New Quiz</h3>
              <button onClick={() => setIsCreateOpen(false)} className="text-gray-400 hover:text-gray-600">
                <IconX className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleCreateQuiz} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Quiz Title</label>
                <input
                  type="text"
                  placeholder="e.g. Chapter 4 Knowledge Check"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Course</label>
                  <select
                    value={formCourse}
                    onChange={(e) => setFormCourse(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="ICT302">ICT302</option>
                    <option value="ICT301">ICT301</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Status</label>
                  <select
                    value={formStatus}
                    onChange={(e) => setFormStatus(e.target.value as "Active" | "Upcoming" | "Completed")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Upcoming">Upcoming</option>
                    <option value="Active">Active</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Date</label>
                  <input
                    type="text"
                    value={formDate}
                    onChange={(e) => setFormDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Total Enrolled</label>
                  <input
                    type="number"
                    value={formTotal}
                    onChange={(e) => setFormTotal(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsCreateOpen(false)}
                  className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-semibold text-white rounded-xl cursor-pointer"
                  style={{ background: "#1a3a9e" }}
                >
                  Create Quiz
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Learning Materials Page ───────────────────────────────────────────────────
function LearningMaterialsPage() {
  const [materials, setMaterials] = useState<LearningMaterialItem[]>([]);
  const [filter, setFilter] = useState("all");
  const [previewMaterial, setPreviewMaterial] = useState<LearningMaterialItem | null>(null);
  const [downloadToast, setDownloadToast] = useState<string | null>(null);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const hasMutatedMatRef = useRef(false);

  // Upload Form State
  const [uploadTitle, setUploadTitle] = useState("");
  const [uploadCourse, setUploadCourse] = useState("ICT302");
  const [uploadType, setUploadType] = useState<"Slides" | "Document" | "Video">("Slides");
  const [uploadWeek, setUploadWeek] = useState("1");
  const [uploadDesc, setUploadDesc] = useState("");

  useEffect(() => {
    let mounted = true;
    getStaffMaterialsAction().then((res) => {
      if (!mounted || hasMutatedMatRef.current || !res.success || !res.materials) return;
      const iconMap: Record<string, string> = {
        Slides: "📊",
        Document: "📄",
        Video: "🎥",
      };
      setMaterials(
        res.materials.map((m) => ({
          id: m.id,
          title: m.title,
          course: m.courseCode,
          courseName: m.courseTitle,
          type: m.type,
          category: m.category,
          week: m.week,
          size: m.size,
          date: m.date,
          icon: iconMap[m.type] || "📄",
          description: m.description,
        }))
      );
    });
    return () => {
      mounted = false;
    };
  }, []);

  const courseColors: Record<string, string> = {
    ICT302: "bg-emerald-100 text-emerald-700",
    ICT301: "bg-blue-100 text-blue-700",
  };

  const handleDownload = (m: LearningMaterialItem) => {
    setDownloadToast(`${m.title} (${m.size})`);
    setTimeout(() => {
      setDownloadToast(null);
    }, 3500);
  };

  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadTitle.trim()) return;
    hasMutatedMatRef.current = true;

    const courseNameMap: Record<string, string> = {
      ICT302: "Information Technology Project 2",
      ICT301: "Information Technology Project 1",
    };

    const iconMap: Record<string, string> = {
      Slides: "📊",
      Document: "📄",
      Video: "🎥",
    };

    const tempId = `mat-${Date.now()}`;
    const weekNum = parseInt(uploadWeek, 10) || 1;
    const newMat: LearningMaterialItem = {
      id: tempId,
      title: uploadTitle.trim(),
      course: uploadCourse,
      courseName: courseNameMap[uploadCourse] || uploadCourse,
      type: uploadType,
      category: uploadType === "Video" ? "Lecture" : "Tutorial",
      week: weekNum,
      size: "2.5 MB",
      date: new Date().toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" }),
      icon: iconMap[uploadType] || "📄",
      description: uploadDesc.trim() || `Course resource for ${uploadCourse}.`,
    };

    setMaterials((prev) => [newMat, ...prev]);
    setIsUploadOpen(false);
    setUploadTitle("");
    setUploadDesc("");
    setDownloadToast(`Uploaded "${newMat.title}" successfully!`);
    setTimeout(() => setDownloadToast(null), 3500);

    createStaffMaterialAction({
      title: newMat.title,
      courseCode: uploadCourse,
      type: uploadType,
      week: weekNum,
      description: newMat.description,
    }).then((res) => {
      if (res.success && res.material) {
        setMaterials((prev) =>
          prev.map((item) => (item.id === tempId ? { ...item, id: res.material!.id } : item))
        );
      }
    }).catch(() => {});
  };

  const filtered = filter === "all"
    ? materials
    : materials.filter((m) => m.course === filter || m.type.toLowerCase() === filter.toLowerCase());

  return (
    <div className="p-6">
      <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
        <span>Instructor</span><span>/</span><span className="text-gray-600">Learning Materials</span>
      </div>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <h1 className="text-2xl font-bold text-gray-900">Learning Materials</h1>
        <button
          onClick={() => setIsUploadOpen(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white cursor-pointer hover:opacity-90 transition-opacity"
          style={{ background: "#1a3a9e" }}
        >
          <IconUpload /><span>Upload Material</span>
        </button>
      </div>

      <div className="flex items-center gap-2 mb-5 flex-wrap">
        {["all", "ICT302", "ICT301", "Document", "Slides", "Video"].map((f) => (
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

      {isUploadOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4 border-b pb-3 border-gray-100">
              <h3 className="text-lg font-bold text-gray-900">Upload Learning Material</h3>
              <button onClick={() => setIsUploadOpen(false)} className="text-gray-400 hover:text-gray-600">
                <IconX className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleUploadSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Material Title</label>
                <input
                  type="text"
                  placeholder="e.g. Week 5: Advanced Relational Queries"
                  value={uploadTitle}
                  onChange={(e) => setUploadTitle(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Course</label>
                  <select
                    value={uploadCourse}
                    onChange={(e) => setUploadCourse(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="ICT302">ICT302</option>
                    <option value="ICT301">ICT301</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Type</label>
                  <select
                    value={uploadType}
                    onChange={(e) => setUploadType(e.target.value as "Slides" | "Document" | "Video")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Slides">Slides</option>
                    <option value="Document">Document</option>
                    <option value="Video">Video</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Teaching Week</label>
                <input
                  type="number"
                  min="1"
                  max="12"
                  value={uploadWeek}
                  onChange={(e) => setUploadWeek(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Description / Overview</label>
                <textarea
                  rows={3}
                  placeholder="Brief summary of topics covered..."
                  value={uploadDesc}
                  onChange={(e) => setUploadDesc(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsUploadOpen(false)}
                  className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-semibold text-white rounded-xl cursor-pointer"
                  style={{ background: "#1a3a9e" }}
                >
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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
            <p className="font-semibold text-white">Learning Material Notification</p>
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
  const [rubric, setRubric] = useState({ technicalExecution: 36, methodology: 27, documentation: 27 });
  const [feedbackText, setFeedbackText] = useState("");
  const [submissionsList, setSubmissionsList] = useState(getSharedSubmissions);
  const [dbGradeRecords, setDbGradeRecords] = useState<InstructorGradeRecordSummary[]>([]);
  const [isSavingGrade, setIsSavingGrade] = useState(false);
  const [gradeToast, setGradeToast] = useState<string | null>(null);

  useEffect(() => {
    const handleSync = () => setSubmissionsList(getSharedSubmissions());
    window.addEventListener("eduflex_assignment_sync", handleSync);
    window.addEventListener("storage", handleSync);
    return () => {
      window.removeEventListener("eduflex_assignment_sync", handleSync);
      window.removeEventListener("storage", handleSync);
    };
  }, []);

  useEffect(() => {
    let active = true;
    getInstructorGradingQueueAction(course).then((res) => {
      if (active && res.success && res.gradeRecords) {
        setDbGradeRecords(res.gradeRecords);
      }
    });
    return () => {
      active = false;
    };
  }, [course]);

  const getRubricBand = (pts: number) => {
    if (pts >= 85) return { code: "HD", label: "High Distinction (HD)", cls: "bg-emerald-100 text-emerald-800 border-emerald-200" };
    if (pts >= 75) return { code: "DI", label: "Distinction (DI)", cls: "bg-blue-100 text-blue-800 border-blue-200" };
    if (pts >= 65) return { code: "CR", label: "Credit (CR)", cls: "bg-indigo-100 text-indigo-800 border-indigo-200" };
    if (pts >= 50) return { code: "P", label: "Pass (P)", cls: "bg-amber-100 text-amber-800 border-amber-200" };
    return { code: "F", label: "Fail (F)", cls: "bg-red-100 text-red-800 border-red-200" };
  };

  const courseGrades: Record<string, { student: string; assignments: (number | null)[]; quiz: number | null; total: string | null }[]> = {
    ICT301: [
      { student: "Richard Vitug",     assignments: [92, 88, 90], quiz: 85, total: "88% (HD)" },
      { student: "Yusuf Rana Magar",  assignments: [88, 86, 90], quiz: 87, total: "88% (HD)" },
      { student: "Sadia Binte Mahmud",assignments: [90, 87, 88], quiz: 86, total: "88% (HD)" },
    ],
    ICT302: [
      { student: "Richard Vitug",     assignments: [90, 92, null], quiz: 95, total: "45% (In Progress)" },
      { student: "Yusuf Rana Magar",  assignments: [85, 90, null], quiz: 88, total: "45% (In Progress)" },
      { student: "Sadia Binte Mahmud",assignments: [88, 89, null], quiz: 90, total: "45% (In Progress)" },
    ],
  };

  const assignmentCols: Record<string, string[]> = {
    ICT301: ["Milestone 1", "Milestone 2", "Final Report"],
    ICT302: ["Sprint 1 Delivery", "Sprint 2 Architecture", "Final Showcase"],
  };

  const baseData = (courseGrades[course] || []).map((row) => {
    const colsForCourse = assignmentCols[course] || [];
    const updatedAssignments = row.assignments.map((existingScore, idx) => {
      const colName = colsForCourse[idx] ?? "";
      const dbMatch = dbGradeRecords.find(
        (g) =>
          g.studentName.toLowerCase().includes(row.student.split(" ")[0].toLowerCase()) &&
          (g.itemTitle.toLowerCase().includes(colName.toLowerCase()) || colName.toLowerCase().includes(g.itemTitle.toLowerCase()))
      );
      if (dbMatch) return Math.round(dbMatch.score);
      const localScore = scores[`${row.student}-${colName}`];
      if (localScore !== undefined && localScore !== "") return Number(localScore);
      return existingScore;
    });
    return { ...row, assignments: updatedAssignments };
  });
  const cols = assignmentCols[course] || [];

  const vitugSubs = submissionsList.filter(
    (s) => s.courseCode === course && (s.studentName.includes("Vitug") || s.studentName.includes("Richard"))
  );

  const vitugScores = cols.map((col) => {
    const match = vitugSubs.find(
      (s) =>
        s.itemTitle.toLowerCase().includes(col.toLowerCase()) ||
        col.toLowerCase().includes(s.itemTitle.toLowerCase()) ||
        s.itemId.toLowerCase().includes(col.toLowerCase())
    );
    if (match && match.score !== undefined) {
      return Number(match.score);
    }
    return match ? null : null;
  });

  const data = [...baseData];
  if (!data.some((r) => r.student.includes("Vitug") || r.student.includes("Richard"))) {
    data.unshift({
      student: "Richard Maceda Vitug",
      assignments: vitugScores,
      quiz: 90,
      total: vitugScores.some((s) => s !== null)
        ? `${Math.round(
            (vitugScores.filter((s): s is number => s !== null).reduce((a, b) => a + b, 0) + 90) /
              ((vitugScores.filter((s) => s !== null).length || 0) + 1)
          )}%`
        : "Pending",
    });
  }

  const handleOpenGradingModal = (student: string, assignment: string) => {
    const defaultTotal = rubric.technicalExecution + rubric.methodology + rubric.documentation;
    setScores((prev) => ({
      ...prev,
      [`${student}-${assignment}`]: prev[`${student}-${assignment}`] ?? String(defaultTotal),
    }));
    setGradingItem({ student, assignment });
  };

  const handleRubricChange = (field: keyof typeof rubric, value: number, max: number) => {
    const clamped = Math.max(0, Math.min(max, Number.isFinite(value) ? value : 0));
    const next = { ...rubric, [field]: clamped };
    setRubric(next);
    if (gradingItem) {
      const sum = next.technicalExecution + next.methodology + next.documentation;
      setScores((prev) => ({
        ...prev,
        [`${gradingItem.student}-${gradingItem.assignment}`]: String(sum),
      }));
    }
  };

  const handleSaveGrade = async () => {
    if (!gradingItem) return;
    setIsSavingGrade(true);
    const key = `${gradingItem.student}-${gradingItem.assignment}`;
    const scoreVal = scores[key] ?? String(rubric.technicalExecution + rubric.methodology + rubric.documentation);
    const numericScore = Math.max(0, Math.min(100, Number(scoreVal) || 0));

    // Sync localStorage immediately
    gradeStudentSubmission(gradingItem.student, gradingItem.assignment, course, String(numericScore), feedbackText);

    // Persist to Neon PostgreSQL via Instructor Server Action
    const res = await gradeSubmissionAction({
      studentName: gradingItem.student,
      courseCode: course,
      assignmentTitle: gradingItem.assignment,
      score: numericScore,
      maxScore: 100,
      feedback: feedbackText,
      rubric,
      releaseImmediately: true,
    });

    if (res.success) {
      setGradeToast(`Released ${numericScore}/100 (${res.gradeLabel}) for ${gradingItem.student} to Neon DB.`);
      getInstructorGradingQueueAction(course).then((q) => {
        if (q.success && q.gradeRecords) setDbGradeRecords(q.gradeRecords);
      });
    } else {
      setGradeToast(`Saved locally (${numericScore}/100).`);
    }
    setTimeout(() => setGradeToast(null), 4000);
    setIsSavingGrade(false);
    setGradingItem(null);
    setFeedbackText("");
  };

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
            <option value="ICT301">ICT301 – Information Technology Project 1 (Completed)</option>
            <option value="ICT302">ICT302 – Information Technology Project 2 (Active)</option>
          </select>
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors">
            <IconDownload /><span>Export</span>
          </button>
        </div>
      </div>

      {gradeToast && (
        <div className="mb-4 px-4 py-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium flex items-center justify-between">
          <span>{gradeToast}</span>
          <button onClick={() => setGradeToast(null)} className="text-emerald-600 hover:text-emerald-800 text-xs font-bold">Dismiss</button>
        </div>
      )}

      {gradingItem && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-gray-900">Grade Submission</h3>
              <button onClick={() => setGradingItem(null)} className="text-gray-400 hover:text-gray-600">
                <IconX />
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-1"><span className="font-semibold">{gradingItem.student}</span></p>
            <p className="text-xs text-gray-500 mb-4">{gradingItem.assignment} · {course}</p>

            {/* Rubric Evaluation Breakdown */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 mb-4 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Rubric Evaluation</span>
                {(() => {
                  const totalNum = Number(scores[`${gradingItem.student}-${gradingItem.assignment}`] ?? (rubric.technicalExecution + rubric.methodology + rubric.documentation));
                  const band = totalNum >= 85 ? "HD" : totalNum >= 75 ? "DI" : totalNum >= 65 ? "CR" : totalNum >= 50 ? "P" : "F";
                  const bandColor = totalNum >= 85 ? "bg-emerald-100 text-emerald-800" : totalNum >= 75 ? "bg-blue-100 text-blue-800" : totalNum >= 65 ? "bg-indigo-100 text-indigo-800" : totalNum >= 50 ? "bg-amber-100 text-amber-800" : "bg-red-100 text-red-800";
                  return (
                    <span data-testid="rubric-grade-band" className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${bandColor}`}>
                      {band} · {totalNum}/100
                    </span>
                  );
                })()}
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-[11px] font-semibold text-gray-600 mb-1">Technical (/40)</label>
                  <input
                    type="number"
                    min={0}
                    max={40}
                    aria-label="Technical Execution"
                    value={rubric.technicalExecution}
                    onChange={(e) => handleRubricChange("technicalExecution", Number(e.target.value), 40)}
                    className="w-full px-2.5 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-gray-600 mb-1">Methodology (/30)</label>
                  <input
                    type="number"
                    min={0}
                    max={30}
                    aria-label="Methodology & Architecture"
                    value={rubric.methodology}
                    onChange={(e) => handleRubricChange("methodology", Number(e.target.value), 30)}
                    className="w-full px-2.5 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-gray-600 mb-1">Docs (/30)</label>
                  <input
                    type="number"
                    min={0}
                    max={30}
                    aria-label="Documentation & Analysis"
                    value={rubric.documentation}
                    onChange={(e) => handleRubricChange("documentation", Number(e.target.value), 30)}
                    className="w-full px-2.5 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
              </div>
            </div>

            <label className="block text-xs font-semibold text-gray-700 mb-1">Score (0–100)</label>
            <input
              type="number" min="0" max="100"
              value={scores[`${gradingItem.student}-${gradingItem.assignment}`] ?? ""}
              onChange={(e) => setScores((prev) => ({ ...prev, [`${gradingItem.student}-${gradingItem.assignment}`]: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 mb-4"
              placeholder="Enter score"
            />
            <label className="block text-xs font-semibold text-gray-700 mb-1">Feedback (optional)</label>
            <textarea
              rows={3}
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 mb-4 resize-none"
              placeholder="Add feedback..."
            />
            <div className="flex gap-2">
              <button onClick={() => setGradingItem(null)} className="flex-1 py-2 rounded-xl text-sm font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">Cancel</button>
              <button
                onClick={handleSaveGrade}
                disabled={isSavingGrade}
                className="flex-1 py-2 rounded-xl text-sm font-semibold text-white transition-colors cursor-pointer disabled:opacity-60"
                style={{ background: "#1a3a9e" }}
              >
                {isSavingGrade ? "Saving..." : "Save Grade"}
              </button>
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
                          onClick={() => handleOpenGradingModal(row.student, cols[j])}
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
                        onClick={() => handleOpenGradingModal(row.student, "Quiz")}
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

// ── Calendar Page & Academic Events ───────────────────────────────────────────
export interface InstructorCalendarEvent {
  id: string;
  year: number;
  month: number; // 0-indexed (8 = September)
  day: number;
  days?: number[];
  title: string;
  course?: string;
  courseCode?: string;
  type: "Lecture" | "Tutorial" | "Assignment" | "Assessment" | "Quiz" | "Exam" | "Holiday" | "Break";
  time?: string;
  room?: string;
  online?: boolean;
  color?: string;
  description?: string;
  instructor?: string;
  enrolledStudents?: number;
  topic?: string;
  shortLabel?: string;
  submissions?: string;
  duration?: string;
  dateFormatted?: string;
  info?: string;
}

export function getEventTypeStyles(type: InstructorCalendarEvent["type"]) {
  switch (type) {
    case "Lecture":
      return {
        color: "bg-blue-50 text-blue-800 border-blue-200",
        dot: "bg-blue-500",
        badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
      };
    case "Tutorial":
      return {
        color: "bg-emerald-50 text-emerald-800 border-emerald-200",
        dot: "bg-emerald-500",
        badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      };
    case "Assignment":
      return {
        color: "bg-amber-50 text-amber-800 border-amber-200",
        dot: "bg-amber-500",
        badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
      };
    case "Assessment":
      return {
        color: "bg-amber-50 text-amber-800 border-amber-200",
        dot: "bg-amber-500",
        badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
      };
    case "Quiz":
      return {
        color: "bg-indigo-50 text-indigo-800 border-indigo-200",
        dot: "bg-indigo-500",
        badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
      };
    case "Exam":
      return {
        color: "bg-red-50 text-red-800 border-red-200",
        dot: "bg-red-500",
        badgeColor: "bg-red-100 text-red-800 border-red-200",
      };
    case "Break":
      return {
        color: "bg-teal-50 text-teal-800 border-teal-200",
        dot: "bg-teal-500",
        badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
      };
    case "Holiday":
      return {
        color: "bg-sky-50 text-sky-800 border-sky-200",
        dot: "bg-sky-500",
        badgeColor: "bg-sky-100 text-sky-800 border-sky-200",
      };
    default:
      return {
        color: "bg-gray-50 text-gray-800 border-gray-200",
        dot: "bg-gray-500",
        badgeColor: "bg-gray-100 text-gray-800 border-gray-200",
      };
  }
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export const INSTRUCTOR_CALENDAR_EVENTS: InstructorCalendarEvent[] = [
  // ── AUGUST 2026 (Month 7) ────────────────────────────────────────────────
  {
    id: "cal-aug-18",
    year: 2026, month: 7, day: 18,
    title: "Trimester 3 Teaching Commences & Orientation",
    course: "Campus Academic Calendar",
    type: "Break",
    time: "All Day",
    room: "Campus-Wide",
    online: false,
    color: "#059669",
    shortLabel: "Trimester Starts",
    dateFormatted: "August 18, 2026",
    description: "Orientation briefing, lab setup, and trimester course syllabus distribution.",
    info: "Trimester 3 Academic Launch",
  },
  {
    id: "cal-aug-20",
    year: 2026, month: 7, day: 20,
    title: "Weekly Progress Report 1: Project Initiation & Charter",
    course: "ICT302 — Information Technology Project 2",
    courseCode: "ICT302",
    type: "Assignment",
    time: "11:59 PM Due",
    room: "Online Portal",
    online: true,
    color: "#f59e0b",
    shortLabel: "WPR 1 Due",
    submissions: "3/3 Submitted (100%) · Graded",
    dateFormatted: "August 20, 2026",
    description: "Project charter, team roles, and 12-week roadmap.",
  },
  {
    id: "cal-aug-22",
    year: 2026, month: 7, day: 22,
    title: "Milestone 1: Project Scope Archive",
    course: "ICT301 — Information Technology Project 1",
    courseCode: "ICT301",
    type: "Assignment",
    time: "11:59 PM Due",
    room: "Online Portal",
    online: true,
    color: "#f59e0b",
    shortLabel: "Milestone 1 (T2)",
    submissions: "3/3 Submitted (100%) · Graded",
    dateFormatted: "August 22, 2026",
    description: "Archived Milestone 1 submission records from Project 1 completion.",
  },
  {
    id: "cal-aug-25",
    year: 2026, month: 7, day: 25,
    title: "Milestone 2: Requirements Specification Archive",
    course: "ICT301 — Information Technology Project 1",
    courseCode: "ICT301",
    type: "Assignment",
    time: "11:59 PM Due",
    room: "Online Portal",
    online: true,
    color: "#f59e0b",
    shortLabel: "Milestone 2 (T2)",
    submissions: "3/3 Submitted (100%) · Graded",
    dateFormatted: "August 25, 2026",
    description: "Archived Milestone 2 design specifications and database models.",
  },
  {
    id: "cal-aug-27",
    year: 2026, month: 7, day: 27,
    title: "Weekly Progress Report 2: Full-Stack Architecture",
    course: "ICT302 — Information Technology Project 2",
    courseCode: "ICT302",
    type: "Assignment",
    time: "11:59 PM Due",
    room: "Online Portal",
    online: true,
    color: "#f59e0b",
    shortLabel: "WPR 2 Due",
    submissions: "3/3 Submitted (100%) · Graded",
    dateFormatted: "August 27, 2026",
    description: "Neon PostgreSQL schema and Next.js Server Actions design.",
  },
  {
    id: "cal-aug-28",
    year: 2026, month: 7, day: 28,
    title: "Architecture & Verification Quiz",
    course: "ICT302 — Information Technology Project 2",
    courseCode: "ICT302",
    type: "Quiz",
    time: "11:59 PM Due",
    room: "Online Portal",
    online: true,
    color: "#dc2626",
    shortLabel: "Arch Quiz",
    submissions: "3/3 Submitted (100%) · Graded",
    dateFormatted: "August 28, 2026",
    description: "Online quiz on full-stack architecture and connection pooling.",
  },

  // ── SEPTEMBER 2026 (Month 8) ─────────────────────────────────────────────
  {
    id: "cal-sep-1",
    year: 2026, month: 8, day: 1,
    title: "ICT302 Lecture: Advanced Web Architecture & Server Actions",
    course: "ICT302 — Information Technology Project 2",
    courseCode: "ICT302",
    type: "Lecture",
    time: "10:00 AM–12:00 PM",
    room: "Online Zoom Meeting",
    online: true,
    color: "#0e9f6e",
    shortLabel: "ICT302 Lecture",
    description: "Deep dive into Next.js Server Components, Server Actions, and Neon connection pooling.",
    instructor: "Anita Humagain",
    enrolledStudents: 3,
    topic: "Week 3: Full-Stack Architecture",
    dateFormatted: "September 1, 2026",
  },
  {
    id: "cal-sep-2-lec",
    year: 2026, month: 8, day: 2,
    title: "ICT302 Workshop: Database Schema & Migration Review",
    course: "ICT302 — Information Technology Project 2",
    courseCode: "ICT302",
    type: "Lecture",
    time: "1:00–3:00 PM",
    room: "Room IT-304",
    online: false,
    color: "#0e9f6e",
    shortLabel: "ICT302 Workshop",
    description: "Prisma ORM schema modeling, relational integrity, and migration workflows.",
    instructor: "Anita Humagain",
    enrolledStudents: 3,
    topic: "Week 3: Database Models & Schema Migrations",
    dateFormatted: "September 2, 2026",
  },
  {
    id: "cal-sep-2-quiz",
    year: 2026, month: 8, day: 2,
    title: "Sprint 1 Knowledge Check Quiz",
    course: "ICT302 — Information Technology Project 2",
    courseCode: "ICT302",
    type: "Quiz",
    time: "3:00–3:30 PM",
    room: "Online Portal",
    online: true,
    color: "#dc2626",
    shortLabel: "Sprint 1 Quiz",
    duration: "20 Mins · 10 Questions",
    dateFormatted: "September 2, 2026",
    description: "Timed 20-minute multiple choice quiz assessing Server Actions and database architecture.",
  },
  {
    id: "cal-sep-3-lec",
    year: 2026, month: 8, day: 3,
    title: "ICT301 Completed Milestone Archive Review",
    course: "ICT301 — Information Technology Project 1",
    courseCode: "ICT301",
    type: "Lecture",
    time: "8:00–10:00 AM",
    room: "Room IT-201",
    online: false,
    color: "#2563eb",
    shortLabel: "ICT301 Archive",
    description: "Archived capstone part 1 architectural design review.",
    instructor: "Anita Humagain",
    enrolledStudents: 3,
    topic: "Capstone Part 1 Final Review",
    dateFormatted: "September 3, 2026",
  },
  {
    id: "cal-sep-3-ass",
    year: 2026, month: 8, day: 3,
    title: "Weekly Progress Report 3: Core Implementation",
    course: "ICT302 — Information Technology Project 2",
    courseCode: "ICT302",
    type: "Assignment",
    time: "11:59 PM Due",
    room: "Online Portal",
    online: true,
    color: "#f59e0b",
    shortLabel: "WPR 3 Due",
    submissions: "3/3 Submitted (100%) · Graded",
    dateFormatted: "September 3, 2026",
    description: "Implementation of authentication flows, RBAC, and Playwright verification.",
  },
  {
    id: "cal-sep-4-tut",
    year: 2026, month: 8, day: 4,
    title: "ICT302 Tutorial: Architecture Mentoring Session",
    course: "ICT302 — Information Technology Project 2",
    courseCode: "ICT302",
    type: "Tutorial",
    time: "10:00–11:30 AM",
    room: "Room IT-304",
    online: false,
    color: "#0e9f6e",
    shortLabel: "ICT302 Tutorial",
    description: "Group consultation on system architecture, database models, and weekly progress logs.",
    instructor: "Anita Humagain",
    enrolledStudents: 3,
    topic: "Architecture Review & Milestone Mentoring",
    dateFormatted: "September 4, 2026",
  },
  {
    id: "cal-sep-4-ass",
    year: 2026, month: 8, day: 4,
    title: "Weekly Progress Report 4: Automated Testing & UI Refinement",
    course: "ICT302 — Information Technology Project 2",
    courseCode: "ICT302",
    type: "Assignment",
    time: "11:59 PM Due",
    room: "Online Portal",
    online: true,
    color: "#f59e0b",
    shortLabel: "WPR 4 Due",
    submissions: "2/3 Submitted (67%) · 1 to Submit",
    dateFormatted: "September 4, 2026",
    description: "Comprehensive end-to-end testing suite, WCAG 2.1 AA audit, and performance optimization.",
  },
  {
    id: "cal-sep-5",
    year: 2026, month: 8, day: 5,
    title: "ICT302 Sprint 2 Checkpoint Meeting",
    course: "ICT302 — Information Technology Project 2",
    courseCode: "ICT302",
    type: "Tutorial",
    time: "11:00 AM–12:30 PM",
    room: "Room IT-304",
    online: false,
    color: "#0e9f6e",
    shortLabel: "Sprint 2 Checkpoint",
    submissions: "3/3 Teams Present",
    dateFormatted: "September 5, 2026",
    description: "Sprint 2 architectural checkpoint and progress alignment.",
  },
  {
    id: "cal-sep-8-tut",
    year: 2026, month: 8, day: 8,
    title: "ICT302 Tutorial: Next.js Server Actions & State Management",
    course: "ICT302 — Information Technology Project 2",
    courseCode: "ICT302",
    type: "Tutorial",
    time: "10:00 AM–12:00 PM",
    room: "Online Zoom Meeting",
    online: true,
    color: "#0e9f6e",
    shortLabel: "ICT302 Lab",
    description: "Hands-on coding lab implementing server actions, form validation, and reactive state.",
    instructor: "Anita Humagain",
    enrolledStudents: 3,
    topic: "Server Actions & Reactive UI",
    dateFormatted: "September 8, 2026",
  },
  {
    id: "cal-sep-10-lec",
    year: 2026, month: 8, day: 10,
    title: "ICT302 Lecture: Connection Pooling & Performance",
    course: "ICT302 — Information Technology Project 2",
    courseCode: "ICT302",
    type: "Lecture",
    time: "8:00–10:00 AM",
    room: "Online Zoom Meeting",
    online: true,
    color: "#0e9f6e",
    shortLabel: "ICT302 Lecture",
    description: "Neon serverless pooling architecture, query optimization, and latency benchmarks.",
    instructor: "Anita Humagain",
    enrolledStudents: 3,
    topic: "Week 4: Performance & Database Optimization",
    dateFormatted: "September 10, 2026",
  },
  {
    id: "cal-sep-14",
    year: 2026, month: 8, day: 14,
    title: "ICT302 Sprint 2 Demonstration & Retrospective",
    course: "ICT302 — Information Technology Project 2",
    courseCode: "ICT302",
    type: "Lecture",
    time: "9:00–11:00 AM",
    room: "Room IT-304",
    online: false,
    color: "#0e9f6e",
    shortLabel: "Sprint 2 Demo",
    description: "Capstone prototype demonstration and agile sprint retrospective.",
    instructor: "Anita Humagain",
    enrolledStudents: 3,
    topic: "Agile Retrospectives & Sprint Review",
    dateFormatted: "September 14, 2026",
  },
  {
    id: "cal-sep-15-lec",
    year: 2026, month: 8, day: 15,
    title: "ICT302 Capstone Mentoring Session",
    course: "ICT302 — Information Technology Project 2",
    courseCode: "ICT302",
    type: "Lecture",
    time: "10:00 AM–12:00 PM",
    room: "Online Zoom Meeting",
    online: true,
    color: "#0e9f6e",
    shortLabel: "ICT302 Mentoring",
    description: "Review of weekly progress reports and Assessment 1 preparations.",
    instructor: "Anita Humagain",
    enrolledStudents: 3,
    topic: "Week 5: Assessment 1 Preparation",
    dateFormatted: "September 15, 2026",
  },
  {
    id: "cal-sep-18",
    year: 2026, month: 8, day: 18,
    title: "Census Date — Trimester 3, 2026",
    course: "Academic Calendar",
    type: "Break",
    time: "11:59 PM",
    room: "University-Wide",
    online: true,
    color: "#ea580c",
    shortLabel: "Census Date",
    info: "Trimester 3 Census Date",
    dateFormatted: "September 18, 2026",
    description: "Last day to finalize enrollment and withdraw without academic penalty for Trimester 3.",
  },
  {
    id: "cal-sep-21",
    year: 2026, month: 8, day: 21,
    days: [21, 22, 23, 24, 25],
    title: "Mid-Trimester School Break Commences",
    course: "Academic Calendar",
    type: "Break",
    time: "All Day",
    room: "Campus-Wide",
    online: false,
    color: "#059669",
    shortLabel: "School Break",
    info: "Duration: 5 Days (Mon–Fri) · Campus libraries open",
    dateFormatted: "September 21–25, 2026",
    description: "Mid-trimester non-instructional study break for all schools. No classes scheduled.",
  },
  {
    id: "cal-sep-28",
    year: 2026, month: 8, day: 28,
    title: "Public Holiday: Labour Day",
    course: "Public Holiday",
    type: "Holiday",
    time: "All Day",
    room: "University-Wide",
    online: false,
    color: "#ea580c",
    shortLabel: "Labour Day",
    info: "Official Public Holiday · Campus Closed",
    dateFormatted: "September 28, 2026",
    description: "Official public holiday — university campus closed, no lectures or tutorials scheduled.",
  },

  // ── OCTOBER 2026 (Month 9) ───────────────────────────────────────────────
  {
    id: "cal-oct-12",
    year: 2026, month: 9, day: 12,
    title: "Assessment 1 Due: Weekly Progress Report (Weeks 2–11)",
    course: "ICT302 — Information Technology Project 2",
    courseCode: "ICT302",
    type: "Assessment",
    time: "11:59 PM Due",
    room: "Online Portal",
    online: true,
    color: "#0e9f6e",
    shortLabel: "Assessment 1 Due",
    submissions: "3/3 Submitted (100%) · Graded (20% Weight)",
    dateFormatted: "October 12, 2026",
    description: "Assessment 1 continuous weekly progress tracking evaluating technical implementation and group dynamics (20%).",
  },
  {
    id: "cal-oct-15",
    year: 2026, month: 9, day: 15,
    title: "Mid-Trimester Progress Marks Entry Deadline",
    course: "Faculty Academic Administration",
    type: "Assessment",
    time: "5:00 PM Due",
    room: "Instructor Portal",
    online: true,
    color: "#f59e0b",
    shortLabel: "Marks Entry Due",
    submissions: "Faculty Grade Entry Portal",
    dateFormatted: "October 15, 2026",
    description: "Faculty grade submission deadline for all trimester mid-term assessments.",
  },
  {
    id: "cal-oct-19",
    year: 2026, month: 9, day: 19,
    title: "Assessment 2 Due: Final Report and Group Activity Log",
    course: "ICT302 — Information Technology Project 2",
    courseCode: "ICT302",
    type: "Assessment",
    time: "11:59 PM Due",
    room: "Online Portal",
    online: true,
    color: "#0e9f6e",
    shortLabel: "Assessment 2 Due",
    submissions: "1/3 Submitted · In Progress (50% Weight)",
    dateFormatted: "October 19, 2026",
    description: "Major deliverable comprising Final Report (40% — 25 to 30 pages) and Group Activity Log (10% — 12 meeting minutes appendix).",
  },
  {
    id: "cal-oct-28",
    year: 2026, month: 9, day: 28,
    title: "Assessment 3 Due: Presentation and Demonstration",
    course: "ICT302 — Information Technology Project 2",
    courseCode: "ICT302",
    type: "Assessment",
    time: "11:59 PM Due",
    room: "Main Auditorium & Online Zoom",
    online: true,
    color: "#dc2626",
    shortLabel: "Assessment 3 Due",
    duration: "20-minute capstone defense (30% Weight)",
    dateFormatted: "October 28, 2026",
    description: "Final capstone defense comprising In-Class Presentation (20%) and Live Demonstration (10%).",
  },

  // ── NOVEMBER 2026 (Month 10) ─────────────────────────────────────────────
  {
    id: "cal-nov-12",
    year: 2026, month: 10, day: 12,
    title: "Trimester 3 Ends / End-of-Year Break",
    course: "Academic Calendar",
    type: "Break",
    time: "All Day",
    room: "Campus-Wide",
    online: false,
    color: "#059669",
    shortLabel: "Trimester Concludes",
    info: "Official Teaching Period End",
    dateFormatted: "November 12, 2026",
    description: "Official conclusion of trimester 3 teaching and formal assessment periods.",
  },
];

function CalendarPage({ setActive }: { setActive?: (id: string) => void }) {
  const [monthOffset, setMonthOffset] = useState(0);
  const [selectedDay, setSelectedDay] = useState<number | null>(3);
  const [selectedClassInfo, setSelectedClassInfo] = useState<InstructorCalendarEvent | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [subDeliverables, setSubDeliverables] = useState<SubDeliverableItem[]>(() => getSharedSubDeliverables());

  const handleToggleLock = (id: string, title: string, currentlyLocked: boolean) => {
    const updated = toggleSubDeliverableLock(id);
    setSubDeliverables(updated);
    setToastMessage(`${title} ${currentlyLocked ? "unlocked" : "locked"} for student submissions.`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const baseYear = 2026;
  const baseMonth = 8; // September (0-indexed)
  const date = new Date(baseYear, baseMonth + monthOffset, 1);
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const monthName = date.toLocaleString("default", { month: "long", year: "numeric" });

  const firstDay = (new Date(currentYear, currentMonth, 1).getDay() + 6) % 7; // Mon=0
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const today = monthOffset === 0 ? 3 : -1;

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  // Events for current month
  const monthEvents = INSTRUCTOR_CALENDAR_EVENTS.filter(
    (e) => e.year === currentYear && e.month === currentMonth
  );

  const eventsForDay = (d: number) =>
    monthEvents.filter((e) => (e.days ? e.days.includes(d) : e.day === d));

  const displayedEvents = selectedDay ? eventsForDay(selectedDay) : monthEvents;
  const selectedDateFormatted = selectedDay ? `${MONTH_NAMES[currentMonth]} ${selectedDay}, ${currentYear}` : "";

  const handleStartClass = (e: InstructorCalendarEvent) => {
    setToastMessage(`Connecting to Zoom meeting for "${e.title}"...`);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleViewClass = (e: InstructorCalendarEvent) => {
    setSelectedClassInfo(e);
  };

  return (
    <div className="p-7">
      {/* Breadcrumbs & Header with Month Navigation */}
      <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
        <span>Instructor</span>
        <span>/</span>
        <span className="text-gray-600">Calendar</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Calendar</h1>
          <p className="text-sm text-gray-500">
            Manage your teaching schedule, classes, assessment deadlines, and important academic dates
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => {
              setMonthOffset((o) => o - 1);
              setSelectedDay(null);
            }}
            className="p-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 transition-colors shadow-sm cursor-pointer"
            title="Previous Month"
            aria-label="Previous Month"
          >
            <IconChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-sm font-semibold text-gray-800 min-w-[140px] text-center select-none">
            {monthName}
          </span>
          <button
            type="button"
            onClick={() => {
              setMonthOffset((o) => o + 1);
              setSelectedDay(null);
            }}
            className="p-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 transition-colors shadow-sm cursor-pointer"
            title="Next Month"
            aria-label="Next Month"
          >
            <IconChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Legend bar for clear visual distinction */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs font-medium text-gray-600 bg-white px-4 py-2.5 rounded-xl border border-gray-100 shadow-xs mb-4">
        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Legend:</span>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
          <span className="text-gray-700">Lectures</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          <span className="text-gray-700">Tutorials</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
          <span className="text-gray-700">Assessments &amp; Assignments</span>
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
          <span className="w-2.5 h-2.5 rounded-full bg-teal-500" />
          <span className="text-gray-700">School Breaks</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
          <span className="text-gray-700">Holidays</span>
        </div>
      </div>

      {/* Calendar Grid (Full Width Month Grid) */}
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
            const isSelected = selectedDay === d;
            return (
              <div
                key={i}
                onClick={() => {
                  if (d) {
                    setSelectedDay((prev) => (prev === d ? null : d));
                  }
                }}
                className={`min-h-[105px] p-2 border-b border-r border-gray-100 transition-all ${
                  !d
                    ? "bg-gray-50/40 cursor-default"
                    : isSelected
                    ? "bg-blue-50/30 ring-2 ring-inset ring-blue-500/40 cursor-pointer"
                    : "bg-white hover:bg-gray-50/80 cursor-pointer"
                } ${i % 7 === 6 ? "border-r-0" : ""}`}
              >
                {d && (
                  <>
                    <div className="flex items-center justify-between mb-1">
                      <span
                        className={`inline-flex w-7 h-7 items-center justify-center rounded-full text-sm font-semibold transition-all ${
                          isToday
                            ? "text-white shadow-xs"
                            : isSelected
                            ? "bg-blue-600 text-white shadow-xs"
                            : "text-gray-700"
                        }`}
                        style={isToday ? { background: "#1a3a9e" } : {}}
                      >
                        {d}
                      </span>
                      {events.length > 0 && !isSelected && !isToday && (
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      )}
                    </div>
                    <div className="space-y-1">
                      {events.slice(0, 3).map((ev) => {
                        const style = getEventTypeStyles(ev.type);
                        return (
                          <div
                            key={ev.id}
                            title={`${ev.title} (${ev.time || ev.type})`}
                            className={`w-full text-left text-[10px] font-semibold px-1.5 py-0.5 rounded border truncate select-none transition-transform hover:scale-[1.02] ${style.color}`}
                          >
                            {ev.shortLabel || ev.courseCode || ev.title}
                          </div>
                        );
                      })}
                      {events.length > 3 && (
                        <div className="text-[9px] font-bold text-gray-500 pl-1">
                          +{events.length - 3} more
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Teaching Schedule & Events Details */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
          <div>
            <h2 className="text-base font-bold text-gray-900">
              {selectedDay
                ? `Teaching Schedule & Events — ${selectedDateFormatted}`
                : `All Academic Events — ${monthName}`}
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              {selectedDay
                ? "Showing all scheduled classes, deadlines, and events for this date"
                : `Important teaching schedule, deadlines, and academic dates for ${monthName}`}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {selectedDay && (
              <button
                type="button"
                onClick={() => setSelectedDay(null)}
                className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer shadow-xs"
              >
                View Full Month ({monthEvents.length})
              </button>
            )}
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
              {displayedEvents.length} event{displayedEvents.length === 1 ? "" : "s"} scheduled
            </span>
          </div>
        </div>

        {displayedEvents.length === 0 ? (
          <div className="text-center py-10 text-gray-400">
            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mx-auto mb-2.5 text-gray-400">
              <IconCalendar className="w-6 h-6 text-gray-400" />
            </div>
            <p className="text-sm font-semibold text-gray-700">
              {selectedDay
                ? `No events scheduled for ${selectedDateFormatted}`
                : `No academic events scheduled for ${monthName}`}
            </p>
            <p className="text-xs text-gray-400 mt-1">
              {selectedDay
                ? "Select another date on the calendar, or view the full month schedule."
                : "Use the month navigation controls to check upcoming months."}
            </p>
            {selectedDay && (
              <button
                type="button"
                onClick={() => setSelectedDay(null)}
                className="mt-3 text-xs font-semibold px-3.5 py-1.5 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors cursor-pointer"
              >
                Show All {monthName} Events ({monthEvents.length})
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-3">
            {displayedEvents.map((ev) => {
              const style = getEventTypeStyles(ev.type);
              const isClass = ev.type === "Lecture" || ev.type === "Tutorial";
              const isAssessment = ev.type === "Assignment" || ev.type === "Assessment";
              const isQuizOrExam = ev.type === "Quiz" || ev.type === "Exam";

              return (
                <div
                  key={ev.id}
                  className="p-4 rounded-xl border border-gray-100 bg-gray-50/40 hover:bg-gray-50/80 transition-colors"
                >
                  {/* Header row: Dot, Title, Type Badge, and Date Badge */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${style.dot}`} />
                      <h3 className="text-sm font-bold text-gray-900">{ev.title}</h3>
                      <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${style.badgeColor}`}>
                        {ev.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 bg-white px-2.5 py-1 rounded-lg border border-gray-200/70 self-start shadow-xs">
                      <IconCalendar className="w-3.5 h-3.5 text-gray-400" />
                      <span>{ev.dateFormatted || `${MONTH_NAMES[ev.month]} ${ev.day}, ${ev.year}`}</span>
                    </div>
                  </div>

                  {/* Course code & name */}
                  {ev.course && (
                    <p className="text-xs font-semibold text-blue-900 mb-1.5">
                      {ev.courseCode && ev.course !== ev.courseCode && !ev.course.startsWith(ev.courseCode)
                        ? `${ev.courseCode} — ${ev.course}`
                        : ev.course}
                    </p>
                  )}

                  {/* Topic (For classes) */}
                  {ev.topic && (
                    <div className="flex items-center gap-1.5 text-xs text-gray-700 mb-2">
                      <span className="font-semibold text-gray-900">Topic:</span>
                      <span className="bg-blue-50 text-blue-800 px-2 py-0.5 rounded text-[11px] font-medium border border-blue-100">
                        {ev.topic}
                      </span>
                    </div>
                  )}

                  {/* Description */}
                  {ev.description && (
                    <p className="text-xs text-gray-600 mb-2.5 leading-relaxed">
                      {ev.description}
                    </p>
                  )}

                  {/* Meta details badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {ev.time && (
                      <div className="inline-flex items-center gap-1.5 text-[11px] font-medium text-gray-600 bg-white px-2.5 py-1 rounded-md border border-gray-200/60 shadow-xs">
                        <IconClock className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                        <span>{ev.time}</span>
                      </div>
                    )}

                    {ev.room && (
                      <div
                        className={`inline-flex items-center gap-1.5 text-[11px] font-medium bg-white px-2.5 py-1 rounded-md border border-gray-200/60 shadow-xs ${
                          ev.online ? "text-blue-700" : "text-gray-600"
                        }`}
                      >
                        <span>{ev.online ? "🌐" : "📍"}</span>
                        <span>{ev.room}</span>
                      </div>
                    )}

                    {ev.submissions && (
                      <div className="inline-flex items-center gap-1.5 text-[11px] font-medium text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60 shadow-xs">
                        <IconUsers className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>{ev.submissions}</span>
                      </div>
                    )}

                    {ev.duration && (
                      <div className="inline-flex items-center gap-1.5 text-[11px] font-medium text-indigo-800 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200/60 shadow-xs">
                        <IconClock className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                        <span>{ev.duration}</span>
                      </div>
                    )}

                    {ev.enrolledStudents && (
                      <div className="inline-flex items-center gap-1.5 text-[11px] font-medium text-gray-600 bg-white px-2.5 py-1 rounded-md border border-gray-200/60 shadow-xs">
                        <IconUsers className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                        <span>{ev.enrolledStudents} Students Enrolled</span>
                      </div>
                    )}

                    {ev.info && (
                      <div className="inline-flex items-center gap-1.5 text-[11px] font-medium text-gray-600 bg-white px-2.5 py-1 rounded-md border border-gray-200/60 shadow-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                        <span>{ev.info}</span>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 pt-2 border-t border-gray-200/60">
                    {isClass && (
                      <>
                        <button
                          type="button"
                          onClick={() => handleViewClass(ev)}
                          className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors cursor-pointer shadow-xs"
                        >
                          View Class
                        </button>
                        {ev.online && (
                          <button
                            type="button"
                            onClick={() => handleStartClass(ev)}
                            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition-colors cursor-pointer shadow-xs flex items-center gap-1.5"
                          >
                            <IconVideo className="w-3.5 h-3.5" />
                            <span>Start Class</span>
                          </button>
                        )}
                      </>
                    )}

                    {isAssessment && (
                      <button
                        type="button"
                        onClick={() => setActive && setActive("assignments")}
                        className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white transition-colors cursor-pointer shadow-xs"
                      >
                        View Details
                      </button>
                    )}

                    {isQuizOrExam && (
                      <button
                        type="button"
                        onClick={() => setActive && setActive("quizzes")}
                        className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-colors cursor-pointer shadow-xs"
                      >
                        View Details
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ── View Class Details Modal ── */}
      {selectedClassInfo && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
              <div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                  {selectedClassInfo.courseCode || "Class Information"}
                </span>
                <h3 className="text-base font-bold text-gray-900 mt-1">
                  {selectedClassInfo.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedClassInfo(null)}
                className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <IconX className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-gray-600">
              <div className="bg-gray-50 p-3 rounded-xl space-y-1.5 border border-gray-100">
                <p><strong className="text-gray-800">Course:</strong> {selectedClassInfo.course}</p>
                <p><strong className="text-gray-800">Format:</strong> {selectedClassInfo.type} ({selectedClassInfo.online ? "Online via Zoom" : "In-Person"})</p>
                <p><strong className="text-gray-800">Schedule:</strong> {selectedClassInfo.time}</p>
                <p><strong className="text-gray-800">Location:</strong> {selectedClassInfo.room}</p>
                {selectedClassInfo.instructor && (
                  <p><strong className="text-gray-800">Instructor:</strong> {selectedClassInfo.instructor}</p>
                )}
                {selectedClassInfo.enrolledStudents && (
                  <p><strong className="text-gray-800">Enrollment:</strong> {selectedClassInfo.enrolledStudents} Students</p>
                )}
              </div>

              {selectedClassInfo.topic && (
                <div>
                  <p className="font-bold text-gray-800 mb-1">Session Topic &amp; Focus</p>
                  <p className="text-gray-600 leading-relaxed bg-blue-50/50 p-2.5 rounded-xl border border-blue-100/60">
                    {selectedClassInfo.topic}
                  </p>
                </div>
              )}

              {selectedClassInfo.description && (
                <div>
                  <p className="font-bold text-gray-800 mb-1">Session Description</p>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedClassInfo.description}
                  </p>
                </div>
              )}
            </div>

            <div className="flex items-center justify-end gap-2 pt-4 mt-5 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setSelectedClassInfo(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedClassInfo(null);
                  if (setActive) setActive("courses");
                }}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-white transition-colors cursor-pointer hover:opacity-95 shadow-xs"
                style={{ background: "#1a3a9e" }}
              >
                Go to Course Overview →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Class Launch Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-gray-900 text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 text-xs animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">
            <IconVideo className="w-3.5 h-3.5" />
          </div>
          <div>
            <p className="font-semibold text-white">Virtual Classroom</p>
            <p className="text-gray-300 text-[11px]">{toastMessage}</p>
          </div>
        </div>
      )}
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
    title: "Updated Learning Materials — Sprint 2",
    description: "Next.js SSR architecture specifications and connection pooling documentation have been uploaded to the ICT302 course page.",
    date: "Aug 28, 2026",
    audience: "ICT302",
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
  const [announcements, setAnnouncements] = useState<IAnnouncement[]>([]);
  const [dbIdByUiId, setDbIdByUiId] = useState<Record<number, string>>({});
  const [filter, setFilter] = useState<"All" | "Published" | "Draft" | "Scheduled">("All");
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [editTarget, setEditTarget] = useState<IAnnouncement | null>(null);
  const [viewTarget, setViewTarget] = useState<IAnnouncement | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [subDeliverables, setSubDeliverables] = useState<SubDeliverableItem[]>(() => getSharedSubDeliverables());

  const handleToggleLock = (id: string, title: string, currentlyLocked: boolean) => {
    const updated = toggleSubDeliverableLock(id);
    setSubDeliverables(updated);
    setToastMessage(`${title} ${currentlyLocked ? "unlocked" : "locked"} for student submissions.`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Form states
  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formAudience, setFormAudience] = useState("ICT302");
  const [formStatus, setFormStatus] = useState<"Published" | "Draft" | "Scheduled">("Published");
  const hasMutatedRef = useRef(false);

  useEffect(() => {
    let mounted = true;
    getStaffAnnouncementsAction().then((res) => {
      if (!mounted || hasMutatedRef.current || !res.success || !res.announcements) return;
      const map: Record<number, string> = {};
      const mapped: IAnnouncement[] = res.announcements.map((a, idx) => {
        const uiId = 20000 + idx;
        map[uiId] = a.id;
        return {
          id: uiId,
          title: a.title,
          description: a.body,
          audience: a.courseCode || (a.audience === "ALL_USERS" ? "All Students" : a.audience),
          date: a.publishedAt,
          status: a.status === "DRAFT" ? "Draft" : a.status === "SCHEDULED" ? "Scheduled" : "Published",
        };
      });
      setDbIdByUiId(map);
      setAnnouncements(mapped);
    });
    return () => {
      mounted = false;
    };
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim()) return;
    hasMutatedRef.current = true;
    const uiId = Date.now();
    const newA: IAnnouncement = {
      id: uiId,
      title: formTitle.trim(),
      description: formDescription.trim(),
      audience: formAudience,
      date: new Date().toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" }),
      status: formStatus,
    };
    setAnnouncements((prev) => [newA, ...prev]);
    setIsCreateOpen(false);
    setFormTitle("");
    setFormDescription("");
    showToast(`Announcement "${newA.title}" published!`);

    createStaffAnnouncementAction({
      title: newA.title,
      body: newA.description || newA.title,
      audience: formAudience,
      status: formStatus,
    }).then((res) => {
      if (res.success && res.announcement) {
        setDbIdByUiId((prev) => ({ ...prev, [uiId]: res.announcement!.id }));
      }
    }).catch(() => {});
  };

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editTarget || !formTitle.trim()) return;
    hasMutatedRef.current = true;
    const updated: IAnnouncement = {
      ...editTarget,
      title: formTitle.trim(),
      description: formDescription.trim(),
      audience: formAudience,
      status: formStatus,
    };
    setAnnouncements((prev) => prev.map((a) => (a.id === editTarget.id ? updated : a)));
    setEditTarget(null);
    showToast(`Announcement "${updated.title}" updated!`);

    const dbId = dbIdByUiId[editTarget.id];
    if (dbId) {
      updateStaffAnnouncementAction({
        id: dbId,
        title: updated.title,
        body: updated.description || updated.title,
        audience: updated.audience,
        status: updated.status,
      }).catch(() => {});
    }
  };

  const handleDelete = (id: number) => {
    hasMutatedRef.current = true;
    setAnnouncements((prev) => prev.filter((a) => a.id !== id));
    showToast("Announcement deleted successfully!");
    const dbId = dbIdByUiId[id];
    if (dbId) {
      deleteStaffAnnouncementAction(dbId).catch(() => {});
    }
  };

  const openEdit = (a: IAnnouncement) => {
    setEditTarget(a);
    setFormTitle(a.title);
    setFormDescription(a.description);
    setFormAudience(a.audience);
    setFormStatus(a.status);
  };

  const filtered = filter === "All" ? announcements : announcements.filter((a) => a.status === filter);

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
        <button
          onClick={() => {
            setFormTitle("");
            setFormDescription("");
            setFormAudience("ICT301");
            setFormStatus("Published");
            setIsCreateOpen(true);
          }}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-colors cursor-pointer"
          style={{ background: "#1a3a9e" }}
        >
          <IconPlus /><span>New Announcement</span>
        </button>
      </div>

      {toastMessage && (
        <div className="mb-4 mt-2 p-3 bg-green-50 border border-green-200 text-green-800 rounded-xl text-xs font-medium flex items-center gap-2">
          <IconCheckCircle className="w-4 h-4 text-green-600" />
          {toastMessage}
        </div>
      )}

      {/* Filter tabs */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-4 mb-6 mt-5">
        <div className="flex items-center gap-1">
          {(["All", "Published", "Draft", "Scheduled"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`relative px-4 py-3.5 text-sm font-medium whitespace-nowrap transition-colors cursor-pointer ${filter === f ? "text-blue-700" : "text-gray-500 hover:text-gray-800"}`}
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
                <button
                  onClick={() => setViewTarget(a)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 bg-gray-50 hover:bg-gray-100 border border-gray-200 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  <IconEye className="w-3.5 h-3.5" /> View
                </button>
                <button
                  onClick={() => openEdit(a)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-100 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  <IconEdit className="w-3.5 h-3.5" /> Edit
                </button>
                <button
                  onClick={() => handleDelete(a.id)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-red-600 bg-red-50 hover:bg-red-100 border border-red-100 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  <IconX className="w-3.5 h-3.5" /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create Modal */}
      {isCreateOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6">
            <div className="flex items-center justify-between mb-4 border-b pb-3 border-gray-100">
              <h3 className="text-lg font-bold text-gray-900">New Announcement</h3>
              <button onClick={() => setIsCreateOpen(false)} className="text-gray-400 hover:text-gray-600 cursor-pointer">
                <IconX className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleCreate} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Title</label>
                <input
                  type="text"
                  placeholder="e.g. Guest Speaker Session Next Week"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Audience / Course</label>
                  <select
                    value={formAudience}
                    onChange={(e) => setFormAudience(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="All Courses">All Courses</option>
                    <option value="ICT302">ICT302</option>
                    <option value="ICT301">ICT301</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Status</label>
                  <select
                    value={formStatus}
                    onChange={(e) => setFormStatus(e.target.value as "Published" | "Draft" | "Scheduled")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Published">Published</option>
                    <option value="Draft">Draft</option>
                    <option value="Scheduled">Scheduled</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Message Content</label>
                <textarea
                  rows={4}
                  placeholder="Details of the announcement..."
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsCreateOpen(false)}
                  className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-semibold text-white rounded-xl cursor-pointer"
                  style={{ background: "#1a3a9e" }}
                >
                  Publish Announcement
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6">
            <div className="flex items-center justify-between mb-4 border-b pb-3 border-gray-100">
              <h3 className="text-lg font-bold text-gray-900">Edit Announcement</h3>
              <button onClick={() => setEditTarget(null)} className="text-gray-400 hover:text-gray-600 cursor-pointer">
                <IconX className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Title</label>
                <input
                  type="text"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Audience</label>
                  <select
                    value={formAudience}
                    onChange={(e) => setFormAudience(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="All Courses">All Courses</option>
                    <option value="ICT302">ICT302</option>
                    <option value="ICT301">ICT301</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Status</label>
                  <select
                    value={formStatus}
                    onChange={(e) => setFormStatus(e.target.value as "Published" | "Draft" | "Scheduled")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Published">Published</option>
                    <option value="Draft">Draft</option>
                    <option value="Scheduled">Scheduled</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Message Content</label>
                <textarea
                  rows={4}
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setEditTarget(null)}
                  className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-semibold text-white rounded-xl cursor-pointer"
                  style={{ background: "#1a3a9e" }}
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View Modal */}
      {viewTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6">
            <div className="flex items-start justify-between mb-4 border-b pb-3 border-gray-100">
              <div>
                <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full border mb-1.5 inline-block ${announcementStatusColors[viewTarget.status]}`}>
                  {viewTarget.status}
                </span>
                <h3 className="text-lg font-bold text-gray-900">{viewTarget.title}</h3>
                <p className="text-xs text-gray-400 mt-0.5">{viewTarget.audience} · {viewTarget.date}</p>
              </div>
              <button onClick={() => setViewTarget(null)} className="text-gray-400 hover:text-gray-600 cursor-pointer">
                <IconX className="w-5 h-5" />
              </button>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-700 leading-relaxed mb-4 whitespace-pre-wrap">
              {viewTarget.description}
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setViewTarget(null)}
                className="px-4 py-2 text-sm font-semibold bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl cursor-pointer"
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
    name: "Sadia Binte Mahmud",
    context: "ICT302 — Student",
    initials: "SM",
    color: "#0e9f6e",
    lastMsg: "Could you please clarify the marking criteria for Assessment 2 meeting logs?",
    time: "Yesterday",
    unread: 0,
    messages: [
      { from: "them", text: "Hi Anita, could you please clarify the appendix requirements for our 12 meeting logs in Assessment 2?", time: "Aug 29, 11:15 AM" },
      { from: "me",   text: "Hi Sadia, please include the formal minutes of all 12 meetings including agendas, attendee lists, and action items in Appendix A.", time: "Aug 29, 2:00 PM" },
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
      { from: "them", text: "Dear Anita, please note that final grade submissions for Semester T226 are due on September 20, 2026.", time: "Aug 27, 9:00 AM" },
      { from: "me",   text: "Noted, thank you for the reminder.", time: "Aug 27, 9:45 AM" },
    ],
  },
  {
    id: "c4",
    name: "Yusuf Rana Magar",
    context: "ICT302 — Student",
    initials: "YM",
    color: "#ea580c",
    lastMsg: "Our database connection pooling benchmarks have been added to GitHub.",
    time: "Aug 25",
    unread: 0,
    messages: [
      { from: "them", text: "Hi Anita, our serverless Neon PostgreSQL connection pooling benchmarks and test cases have been committed to GitHub.", time: "Aug 25, 8:30 AM" },
      { from: "me",   text: "Excellent work Yusuf! The latency numbers look solid. Keep up the great pace for Sprint 2.", time: "Aug 25, 10:00 AM" },
    ],
  },
];

function InstructorMessagesPage({ userName }: { userName: string }) {
  const [conversations, setConversations] = useState<IConversation[]>(iConversations);
  const [activeId, setActiveId] = useState("c1");
  const [input, setInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [attachment, setAttachment] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let mounted = true;
    getStudentConversationsAction().then((res) => {
      if (!mounted || !res.success || !res.conversations || res.conversations.length === 0) return;
      const dbThreads: IConversation[] = res.conversations.map((c) => ({
        id: c.id,
        name: c.sender,
        context: c.role,
        initials: c.initials,
        color: c.initialsColor,
        lastMsg: c.lastMsg,
        time: c.time,
        unread: c.unread,
        messages: c.messages.map((m) => ({ from: m.from, text: m.text, time: m.time })),
      }));
      const merged = dbThreads;
      setConversations(merged);
      setActiveId(merged[0].id);
    });
    return () => {
      mounted = false;
    };
  }, []);

  const active = conversations.find((c) => c.id === activeId) || conversations[0];

  const filteredConversations = conversations.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.context.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.lastMsg.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = (textToSend?: string) => {
    const rawText = (textToSend || input).trim();
    if (!rawText && !attachment) return;
    const fullText = attachment ? `${rawText ? rawText + " " : ""}[File: ${attachment}]` : rawText;
    const newMsg = { from: "me" as const, text: fullText, time: "Just now" };

    setConversations((prev) =>
      prev.map((c) =>
        c.id === active.id
          ? {
              ...c,
              lastMsg: fullText,
              time: "Just now",
              unread: 0,
              messages: [...c.messages, newMsg],
            }
          : c
      )
    );
    setInput("");
    setAttachment(null);

    if (active && !/^c\d+$/.test(active.id)) {
      sendStudentMessageAction({ conversationId: active.id, body: fullText }).catch(() => {});
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/submissions/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (res.ok && data.success) {
        setAttachment(`${file.name} (${data.fileSizeLabel} · key:${data.storageKey})`);
        return;
      }
    } catch {
      // Fallback to filename
    }
    setAttachment(file.name);
  };

  const quickReplies = [
    "Thank you for the update. Received.",
    "Please consult during tomorrow's office hours.",
    "The assignment submission has been noted.",
    "The revised guidelines are available in Learning Materials.",
  ];

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
              <input
                type="text"
                placeholder="Search messages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-gray-50 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 border border-gray-200 transition"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto divide-y divide-gray-100">
            {filteredConversations.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveId(c.id)}
                className={`w-full flex items-start gap-3 p-4 text-left transition-colors hover:bg-gray-50 cursor-pointer ${activeId === c.id ? "bg-blue-50/60 border-r-2 border-blue-600" : ""}`}
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
            {filteredConversations.length === 0 && (
              <div className="p-6 text-center text-xs text-gray-400">
                No conversations matching &quot;{searchQuery}&quot;
              </div>
            )}
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

          {/* Quick reply suggestions */}
          <div className="px-6 py-2 border-t border-gray-50 flex items-center gap-2 overflow-x-auto bg-gray-50/50">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider shrink-0">Quick reply:</span>
            {quickReplies.map((q, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(q)}
                className="px-2.5 py-1 text-xs bg-white hover:bg-blue-50 text-gray-700 hover:text-blue-700 rounded-lg border border-gray-200 shrink-0 transition-colors cursor-pointer"
              >
                {q}
              </button>
            ))}
          </div>

          <div className="px-6 py-4 border-t border-gray-100">
            {attachment && (
              <div className="mb-2 flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-800 px-3 py-1.5 rounded-lg text-xs w-fit">
                <span>📎 {attachment}</span>
                <button onClick={() => setAttachment(null)} className="text-blue-600 hover:text-blue-900 cursor-pointer font-bold">×</button>
              </div>
            )}
            <div className="flex items-center gap-3">
              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="text-gray-400 hover:text-blue-600 transition-colors p-2 rounded-xl hover:bg-gray-100 cursor-pointer"
                title="Attach file"
              >
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
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
              />
              <button
                onClick={() => handleSendMessage()}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white hover:opacity-90 transition-all cursor-pointer"
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
  const sessionUser = getSessionUser();
  const effectiveEmail =
    sessionUser?.email ||
    (userName.toLowerCase().includes("anita")
      ? "anita.humagain@eduflex.richv.win"
      : "anita.humagain@eduflex.richv.win");
  const parts = userName.replace(/^Prof\.\s*/i, "").split(" ");
  const initials = parts.map((p) => p[0]).join("").slice(0, 2).toUpperCase();
  const displayName = userName.startsWith("Prof.") ? userName : `Prof. ${userName}`;

  const personalInfo = [
    { label: "Full Name",        value: displayName },
    { label: "Email Address",    value: effectiveEmail },
    { label: "Phone Number",     value: "+61 2 9876 5432" },
    { label: "Office Location",  value: "Room IT-210, Building C" },
  ];

  const instructorInfo = [
    { label: "Staff ID",            value: "20033316" },
    { label: "Department",          value: "Information Technology" },
    { label: "Faculty / School",    value: "School of Information Technology" },
    { label: "Courses Teaching",    value: "ICT301, ICT302" },
    { label: "Employment Status",   value: "Full-time" },
  ];

  return (
    <div className="p-6">
      <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
        <span>Instructor</span><span>/</span><span className="text-gray-600">Profile</span>
      </div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
        <p className="text-sm text-gray-500 mt-0.5">View your instructor information</p>
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
            <span className="text-xs text-gray-500">20033316</span>
            <span className="text-xs text-gray-400">·</span>
            <span className="text-xs text-gray-500">{effectiveEmail}</span>
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
function InstructorSettingsPage({
  theme: controlledTheme,
  onThemeChange,
}: {
  theme?: "Light" | "Dark";
  onThemeChange?: (theme: "Light" | "Dark") => void;
} = {}) {
  const [saved, setSaved] = useState(false);
  const [email, setEmail] = useState("anita.humagain@eduflex.richv.win");
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
  const [theme, setTheme] = useState<"Light" | "Dark">(controlledTheme || "Light");

  useEffect(() => {
    if (controlledTheme) {
      setTheme(controlledTheme);
    }
  }, [controlledTheme]);

  const toggleNotif = (k: keyof typeof notifs) =>
    setNotifs((p) => ({ ...p, [k]: !p[k] }));

  const handleSelectTheme = (t: "Light" | "Dark") => {
    setTheme(t);
    if (onThemeChange) {
      onThemeChange(t);
    }
    try {
      localStorage.setItem("eduflex_instructor_theme", t);
    } catch {
      // ignore
    }
  };

  const handleSave = () => {
    if (onThemeChange) {
      onThemeChange(theme);
    }
    try {
      localStorage.setItem("eduflex_instructor_theme", theme);
    } catch {
      // ignore
    }
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
                {(["Light", "Dark"] as const).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => handleSelectTheme(t)}
                    className={`text-sm font-medium px-4 py-2 rounded-xl border transition-colors cursor-pointer ${
                      theme === t
                        ? "border-blue-600 text-blue-700 bg-blue-50 font-semibold"
                        : "border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
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
  const hasRestoredTabRef = useRef(false);
  const isPopStateRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const syncFromHash = () => {
      const hash = window.location.hash;
      const nextTab = hash.startsWith("#tab=") ? hash.slice(5) : "dashboard";
      isPopStateRef.current = true;
      setActive(nextTab || "dashboard");
    };
    window.addEventListener("popstate", syncFromHash);
    window.addEventListener("hashchange", syncFromHash);
    return () => {
      window.removeEventListener("popstate", syncFromHash);
      window.removeEventListener("hashchange", syncFromHash);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!hasRestoredTabRef.current) {
      hasRestoredTabRef.current = true;
      const hash = window.location.hash;
      if (hash.startsWith("#tab=")) {
        const savedTab = hash.slice(5);
        if (savedTab && savedTab !== "dashboard") {
          setActive(savedTab);
          return;
        }
      }
    }
    const targetHash = active === "dashboard" ? "" : `#tab=${active}`;
    const targetUrl = window.location.pathname + window.location.search + targetHash;
    if (window.location.hash !== targetHash) {
      if (isPopStateRef.current) {
        isPopStateRef.current = false;
      } else {
        window.history.pushState(null, "", targetUrl);
      }
    } else {
      isPopStateRef.current = false;
    }
  }, [active]);
  const [collapsed, setCollapsed] = useState(false);
  const [userName, setUserName] = useState("Anita Humagain");
  const [theme, setTheme] = useState<"Light" | "Dark">("Light");
  const [assignmentCourses, setAssignmentCourses] = useState<InstructorCourseAssignments[]>(getSharedCourses);
  const isInitialMount = useRef(true);
  const lastSavedJsonRef = useRef<string>("");

  useEffect(() => {
    // Auto-sync seed in background
    if (typeof window !== "undefined") {
      fetch("/api/seed").catch(() => {});
    }
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      lastSavedJsonRef.current = JSON.stringify(assignmentCourses);
      return;
    }
    const currentJson = JSON.stringify(assignmentCourses);
    if (currentJson !== lastSavedJsonRef.current) {
      lastSavedJsonRef.current = currentJson;
      saveSharedCourses(assignmentCourses);
    }
  }, [assignmentCourses]);

  useEffect(() => {
    const handleSync = () => {
      const latestCourses = getSharedCourses();
      const latestJson = JSON.stringify(latestCourses);
      if (latestJson !== lastSavedJsonRef.current) {
        lastSavedJsonRef.current = latestJson;
        setAssignmentCourses((prev) => {
          if (JSON.stringify(prev) === latestJson) {
            return prev;
          }
          return latestCourses;
        });
      }
    };
    window.addEventListener("eduflex_assignment_sync", handleSync);
    window.addEventListener("storage", handleSync);
    return () => {
      window.removeEventListener("eduflex_assignment_sync", handleSync);
      window.removeEventListener("storage", handleSync);
    };
  }, []);

  useEffect(() => {
    const sessionUser = getSessionUser();
    if (sessionUser?.name) {
      setUserName(sessionUser.name);
    }
    try {
      const savedTheme = localStorage.getItem("eduflex_instructor_theme");
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
      localStorage.setItem("eduflex_instructor_theme", newTheme);
    } catch {
      // ignore
    }
  };

  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile]     = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(typeof window !== "undefined" && window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const userInitials = getInitials(userName);

  const sidebarPx = collapsed ? "64px" : "224px";
  const effectiveSidebarW = isMobile ? "0px" : sidebarPx;

  return (
    <div className={`min-h-screen ${theme === "Dark" ? "dark bg-[#0b0f19] text-gray-100" : "bg-gray-100 text-gray-900"}`} style={{ fontFamily: "'Outfit', sans-serif" }}>
      <InstructorSidebar
        active={active}
        setActive={(nav) => {
          setActive(nav);
          setMobileOpen(false);
        }}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        onLogout={onLogout}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />
      <InstructorHeader
        sidebarW={effectiveSidebarW}
        userName={userName}
        userInitials={userInitials}
        theme={theme}
        onToggleTheme={() => handleThemeChange(theme === "Light" ? "Dark" : "Light")}
        setActive={(nav) => {
          setActive(nav);
          setMobileOpen(false);
        }}
        assignmentCourses={assignmentCourses}
        onToggleMobileMenu={() => setMobileOpen((prev) => !prev)}
      />

      <main className="pt-16 min-h-screen flex flex-col transition-all duration-300" style={{ marginLeft: effectiveSidebarW }}>
        <div className="flex-1">
          {active === "dashboard"     && <DashboardHome setActive={setActive} userName={userName} />}
          {active === "courses"       && <MyCoursesPage setActive={setActive} />}
          {active === "students"      && <StudentsPage />}
          {active === "assignments"   && (
            <AssignmentsPage
              setActive={setActive}
              courses={assignmentCourses}
              setCourses={setAssignmentCourses}
            />
          )}
          {active === "quizzes"       && <QuizzesPage setActive={setActive} />}
          {active === "materials"     && <LearningMaterialsPage />}
          {active === "grades"        && <GradesPage />}
          {active === "announcements" && <InstructorAnnouncementsPage />}
          {active === "calendar"      && <CalendarPage setActive={setActive} />}
          {active === "messages"      && <InstructorMessagesPage userName={userName} />}
          {active === "profile"       && <InstructorProfilePage userName={userName} />}
          {active === "settings"      && <InstructorSettingsPage theme={theme} onThemeChange={handleThemeChange} />}
        </div>
        <Footer />
      </main>
    </div>
  );
}
