import { useState, useEffect, useRef } from "react";

// ── Icons ─────────────────────────────────────────────────────────────────────
const IconCamera = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);
const IconUsers = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
  </svg>
);
const IconUserPlus = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="8.5" cy="7" r="4" />
    <line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" />
  </svg>
);
const IconSearch = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const IconChevronDown = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
const IconEye = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
  </svg>
);
const IconEdit = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);
const IconPower = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M18.36 6.64a9 9 0 11-12.73 0" /><line x1="12" y1="2" x2="12" y2="12" />
  </svg>
);
const IconTrash = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
    <path d="M10 11v6" /><path d="M14 11v6" /><path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
  </svg>
);
const IconCheck = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const IconX = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const IconXCircle = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
  </svg>
);
const IconShield = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const IconAlertTriangle = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);
const IconMail = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const IconCalendar = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const IconPhone = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.1 1.22 2 2 0 012.1 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l.91-.91a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 15.18v1.74z" />
  </svg>
);
const IconFilter = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
);
const IconMoreVertical = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <circle cx="12" cy="5" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="12" cy="19" r="1" />
  </svg>
);
const IconClock = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);

// ── Types ─────────────────────────────────────────────────────────────────────
export type Role = "Student" | "Instructor";
export type Status = "Active" | "Inactive" | "Pending";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  status: Status;
  lastActive: string;
  joined: string;
  avatar?: string;
  program?: string;
  department?: string;
  phone?: string;
  courses?: string[];
}

export interface PendingItem {
  id: string;
  name: string;
  initials: string;
  role: Role;
  action: string;
  email: string;
  submitted: string;
}

// ── Sample Data ───────────────────────────────────────────────────────────────
export const INITIAL_USERS: User[] = [
  { id: "STU-20262001", name: "Maria Santos",      email: "m.santos@eduflex.edu.ph",    role: "Student",    status: "Active",   lastActive: "Sep 2, 2026, 10:42 AM", joined: "Sep 1, 2026",  program: "BS Information Technology", phone: "+63 917 123 4567", courses: ["ICT301", "ICT272"] },
  { id: "STU-20262002", name: "James Reyes",        email: "j.reyes@eduflex.edu.ph",     role: "Student",    status: "Active",   lastActive: "Sep 2, 2026, 9:15 AM",  joined: "Sep 1, 2026",  program: "BS Information Technology", phone: "+63 918 234 5678", courses: ["ICT301", "ICT126"] },
  { id: "INS-20260034", name: "Anna Cruz",          email: "a.cruz@eduflex.edu.ph",      role: "Instructor", status: "Active",   lastActive: "Sep 2, 2026, 8:00 AM",  joined: "Aug 31, 2026", department: "School of IT", phone: "+63 919 345 6789", courses: ["ICT272", "ICT350"] },
  { id: "INS-20260035", name: "Prof. Eduardo Lim",  email: "e.lim@eduflex.edu.ph",       role: "Instructor", status: "Active",   lastActive: "Sep 1, 2026, 4:30 PM",  joined: "Aug 15, 2026", department: "School of IT", phone: "+63 920 456 7890", courses: ["ICT301", "ICT126"] },
  { id: "STU-20262003", name: "Carlos Bautista",    email: "c.bautista@eduflex.edu.ph",  role: "Student",    status: "Inactive", lastActive: "Aug 20, 2026, 2:11 PM", joined: "Aug 30, 2026", program: "BS Information Technology", phone: "+63 921 567 8901", courses: [] },
  { id: "STU-20262004", name: "Sophia Dela Torre",  email: "s.delatorre@eduflex.edu.ph", role: "Student",    status: "Active",   lastActive: "Sep 2, 2026, 11:03 AM", joined: "Aug 28, 2026", program: "BS Information Technology", phone: "+63 922 678 9012", courses: ["ICT272"] },
  { id: "STU-20262005", name: "Mark Villanueva",    email: "m.villanueva@eduflex.edu.ph",role: "Student",    status: "Active",   lastActive: "Sep 2, 2026, 7:45 AM",  joined: "Aug 27, 2026", program: "BS Information Technology", phone: "+63 923 789 0123", courses: ["ICT126", "ICT350"] },
  { id: "INS-20260036", name: "Dr. Rachel Gomez",   email: "r.gomez@eduflex.edu.ph",     role: "Instructor", status: "Active",   lastActive: "Sep 1, 2026, 5:00 PM",  joined: "Jul 10, 2026", department: "School of IT", phone: "+63 924 890 1234", courses: ["ICT126"] },
  { id: "STU-20262006", name: "Rico Dela Cruz",     email: "r.delacruz@eduflex.edu.ph",  role: "Student",    status: "Inactive", lastActive: "Aug 15, 2026, 9:00 AM", joined: "Aug 25, 2026", program: "BS Information Technology", phone: "+63 925 901 2345", courses: [] },
  { id: "STU-20262007", name: "Patricia Aquino",    email: "p.aquino@eduflex.edu.ph",    role: "Student",    status: "Active",   lastActive: "Sep 2, 2026, 10:10 AM", joined: "Aug 22, 2026", program: "BS Information Technology", phone: "+63 926 012 3456", courses: ["ICT301"] },
  { id: "STU-20262008", name: "Gabriel Mendoza",    email: "g.mendoza@eduflex.edu.ph",   role: "Student",    status: "Active",   lastActive: "Sep 1, 2026, 3:20 PM",  joined: "Aug 20, 2026", program: "BS Information Technology", phone: "+63 927 123 4567", courses: ["ICT272", "ICT126"] },
  { id: "INS-20260037", name: "Prof. Carla Tan",    email: "c.tan@eduflex.edu.ph",       role: "Instructor", status: "Active",   lastActive: "Aug 30, 2026, 11:30 AM",joined: "Jun 1, 2026",  department: "School of IT", phone: "+63 928 234 5678", courses: ["ICT350"] },
];

export const INITIAL_PENDING: PendingItem[] = [
  { id: "PA-001", name: "Bea Tolentino",  initials: "BT", role: "Instructor", action: "Account Registration",   email: "b.tolentino@eduflex.edu.ph", submitted: "Sep 1, 2026" },
  { id: "PA-002", name: "Karl Navarro",   initials: "KN", role: "Student",    action: "Late Enrollment – ICT301", email: "karl.navarro@eduflex.edu.ph", submitted: "Sep 1, 2026" },
  { id: "PA-003", name: "Liza Mendoza",   initials: "LM", role: "Instructor", action: "Account Registration",   email: "l.mendoza@eduflex.edu.ph", submitted: "Aug 31, 2026" },
  { id: "PA-004", name: "Nico Aguilar",   initials: "NA", role: "Student",    action: "Course Override – ICT272", email: "n.aguilar@eduflex.edu.ph", submitted: "Aug 30, 2026" },
  { id: "PA-005", name: "Danilo Santos",  initials: "DS", role: "Student",    action: "Account Registration",   email: "d.santos@eduflex.edu.ph", submitted: "Aug 29, 2026" },
];

// ── Helpers ───────────────────────────────────────────────────────────────────
function initials(name: string) {
  return name.replace(/^(Prof\.|Dr\.)\s*/i, "").split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

function avatarBg(role: Role) {
  return role === "Instructor" ? "#7c3aed" : "#2563eb";
}

// ── Badge ─────────────────────────────────────────────────────────────────────
function RoleBadge({ role }: { role: Role }) {
  return (
    <span className={`inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded-full ${
      role === "Instructor" ? "bg-purple-50 text-purple-700" : "bg-blue-50 text-blue-700"
    }`}>
      {role}
    </span>
  );
}

function StatusBadge({ status }: { status: Status }) {
  const cfg = {
    Active:   { dot: "bg-green-500",  cls: "bg-green-50 text-green-700" },
    Inactive: { dot: "bg-gray-400",   cls: "bg-gray-100 text-gray-500" },
    Pending:  { dot: "bg-yellow-400", cls: "bg-yellow-50 text-yellow-700" },
  }[status];
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full ${cfg.cls}`}>
      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${cfg.dot}`} />
      {status}
    </span>
  );
}

// ── Modal Backdrop ────────────────────────────────────────────────────────────
function Backdrop({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
      onClick={onClose}
    />
  );
}

// ── View User Modal ───────────────────────────────────────────────────────────
function ViewUserModal({ user, onClose, onEdit }: { user: User; onClose: () => void; onEdit: () => void }) {
  return (
    <>
      <Backdrop onClose={onClose} />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg pointer-events-auto overflow-hidden">
          {/* Header strip */}
          <div className="flex items-start gap-4 px-6 pt-6 pb-5 border-b border-gray-100">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xl font-bold shrink-0 overflow-hidden"
              style={{ background: avatarBg(user.role) }}>
              {user.avatar ? (
                <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
              ) : (
                initials(user.name)
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-bold text-gray-900 truncate">{user.name}</h2>
              <p className="text-xs font-mono text-gray-400 mt-0.5">{user.id}</p>
              <div className="flex items-center gap-2 mt-2">
                <RoleBadge role={user.role} />
                <StatusBadge status={user.status} />
              </div>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100 transition-colors shrink-0">
              <IconX className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="px-6 py-5 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Detail icon={<IconMail />} label="Email" value={user.email} />
              <Detail icon={<IconPhone />} label="Phone" value={user.phone ?? "—"} />
              <Detail icon={<IconCalendar />} label="Joined" value={user.joined} />
              <Detail icon={<IconClock />} label="Last Active" value={user.lastActive} />
              {user.role === "Student" && <Detail icon={<IconShield className="w-4 h-4" />} label="Program" value={user.program ?? "—"} />}
              {user.role === "Instructor" && <Detail icon={<IconShield className="w-4 h-4" />} label="Department" value={user.department ?? "—"} />}
            </div>
            {user.courses && user.courses.length > 0 && (
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Enrolled Courses</p>
                <div className="flex flex-wrap gap-2">
                  {user.courses.map((c) => (
                    <span key={c} className="text-xs font-semibold bg-blue-50 text-blue-700 px-2.5 py-1 rounded-lg">{c}</span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-2 px-6 pb-6">
            <button
              onClick={onEdit}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white transition-colors"
              style={{ background: "#1a3a9e" }}
            >
              <IconEdit className="w-4 h-4" /> Edit User
            </button>
            <button onClick={onClose} className="px-5 py-2.5 rounded-xl text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors">
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function Detail({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{label}</p>
      <div className="flex items-center gap-1.5 text-sm text-gray-800">
        <span className="text-gray-400 shrink-0">{icon}</span>
        <span className="truncate">{value}</span>
      </div>
    </div>
  );
}

// ── Add / Edit User Modal ─────────────────────────────────────────────────────
function UserFormModal({
  user, onClose, onSave,
}: {
  user: User | null;
  onClose: () => void;
  onSave: (u: User) => void;
}) {
  const isEdit = user !== null;
  const [form, setForm] = useState<Partial<User>>(
    user ?? { role: "Student", status: "Active", courses: [] }
  );
  const [avatarError, setAvatarError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function set(field: keyof User, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setAvatarError("Please select a valid image file (PNG, JPG, or WebP).");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setAvatarError("Image file size must be less than 5MB.");
      return;
    }

    setAvatarError(null);
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setForm((f) => ({ ...f, avatar: reader.result as string }));
      }
    };
    reader.readAsDataURL(file);
  }

  function handleRemoveAvatar() {
    setForm((f) => ({ ...f, avatar: undefined }));
    setAvatarError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  function handleSave() {
    if (!form.name?.trim() || !form.email?.trim()) return;
    const now = "Sep 2, 2026";
    onSave({
      id: form.id ?? `STU-${Date.now()}`,
      name: form.name!,
      email: form.email!,
      role: (form.role as Role) ?? "Student",
      status: (form.status as Status) ?? "Active",
      lastActive: form.lastActive ?? "—",
      joined: form.joined ?? now,
      avatar: form.avatar,
      phone: form.phone,
      program: form.program,
      department: form.department,
      courses: form.courses ?? [],
    });
  }

  const labelCls = "block text-xs font-semibold text-gray-500 mb-1";
  const inputCls = "w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 transition";

  return (
    <>
      <Backdrop onClose={onClose} />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg pointer-events-auto overflow-hidden">
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <div>
              <h2 className="text-base font-bold text-gray-900">{isEdit ? "Edit User" : "Add New User"}</h2>
              <p className="text-xs text-gray-400 mt-0.5">{isEdit ? `Editing ${user!.name}` : "Create a new user account"}</p>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100 transition-colors">
              <IconX className="w-5 h-5" />
            </button>
          </div>

          <div className="px-6 py-5 space-y-4 max-h-[60vh] overflow-y-auto">
            {/* Profile Picture */}
            <div>
              <label className={labelCls}>Profile Picture</label>
              <div className="flex items-center gap-4 p-3 bg-gray-50 border border-gray-200 rounded-xl">
                <div
                  className="w-14 h-14 rounded-full overflow-hidden shrink-0 flex items-center justify-center text-white text-base font-bold shadow-inner border-2 border-white ring-1 ring-gray-200"
                  style={{ background: avatarBg((form.role as Role) ?? "Student") }}
                >
                  {form.avatar ? (
                    <img src={form.avatar} alt="Profile preview" className="w-full h-full object-cover" />
                  ) : form.name?.trim() ? (
                    initials(form.name)
                  ) : (
                    <IconCamera className="w-6 h-6 text-white/80" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 text-xs font-semibold rounded-lg shadow-sm transition-colors cursor-pointer"
                    >
                      <IconCamera className="w-3.5 h-3.5 text-gray-500" />
                      {form.avatar ? "Change Photo" : "Upload Photo"}
                    </button>
                    {form.avatar && (
                      <button
                        type="button"
                        onClick={handleRemoveAvatar}
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                      >
                        <IconX className="w-3.5 h-3.5" />
                        Remove
                      </button>
                    )}
                  </div>
                  <p className="text-[11px] text-gray-400 mt-1">PNG, JPG, or WebP. Fallback to initials if unset.</p>
                  {avatarError && <p className="text-[11px] text-red-600 font-medium mt-1">{avatarError}</p>}
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/png,image/jpeg,image/jpg,image/webp,image/svg+xml"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Full Name *</label>
                <input className={inputCls} value={form.name ?? ""} onChange={(e) => set("name", e.target.value)} placeholder="e.g. Maria Santos" />
              </div>
              <div>
                <label className={labelCls}>Email Address *</label>
                <input className={inputCls} type="email" value={form.email ?? ""} onChange={(e) => set("email", e.target.value)} placeholder="user@eduflex.edu.ph" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Role</label>
                <div className="relative">
                  <select className={`${inputCls} appearance-none pr-8`} value={form.role ?? "Student"} onChange={(e) => set("role", e.target.value)}>
                    <option>Student</option>
                    <option>Instructor</option>
                  </select>
                  <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"><IconChevronDown /></span>
                </div>
              </div>
              <div>
                <label className={labelCls}>Status</label>
                <div className="relative">
                  <select className={`${inputCls} appearance-none pr-8`} value={form.status ?? "Active"} onChange={(e) => set("status", e.target.value)}>
                    <option>Active</option>
                    <option>Inactive</option>
                    <option>Pending</option>
                  </select>
                  <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"><IconChevronDown /></span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Phone</label>
                <input className={inputCls} value={form.phone ?? ""} onChange={(e) => set("phone", e.target.value)} placeholder="+63 9XX XXX XXXX" />
              </div>
              <div>
                <label className={labelCls}>{form.role === "Instructor" ? "Department" : "Program"}</label>
                <input className={inputCls}
                  value={form.role === "Instructor" ? (form.department ?? "") : (form.program ?? "")}
                  onChange={(e) => form.role === "Instructor" ? set("department", e.target.value) : set("program", e.target.value)}
                  placeholder={form.role === "Instructor" ? "e.g. School of IT" : "e.g. BS Information Technology"}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-2 px-6 pb-6 border-t border-gray-100 pt-4">
            <button
              onClick={handleSave}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white transition-colors hover:opacity-90"
              style={{ background: "#1a3a9e" }}
            >
              <IconCheck className="w-4 h-4" />
              {isEdit ? "Save Changes" : "Create User"}
            </button>
            <button onClick={onClose} className="px-5 py-2.5 rounded-xl text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// ── Confirm Dialog ────────────────────────────────────────────────────────────
type ConfirmVariant = "delete" | "deactivate" | "activate" | "approve" | "reject";

const CONFIRM_CFG: Record<ConfirmVariant, { title: string; desc: (name: string) => string; action: string; cls: string; iconBg: string; iconColor: string }> = {
  delete: {
    title: "Delete User Account",
    desc: (n) => `Are you sure you want to permanently delete ${n}'s account? This action cannot be undone and all associated data will be removed.`,
    action: "Delete Account",
    cls: "bg-red-600 hover:bg-red-700 text-white",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
  },
  deactivate: {
    title: "Deactivate User Account",
    desc: (n) => `Are you sure you want to deactivate ${n}'s account? They will lose access to the portal until reactivated.`,
    action: "Deactivate Account",
    cls: "bg-orange-500 hover:bg-orange-600 text-white",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
  },
  activate: {
    title: "Activate User Account",
    desc: (n) => `Activate ${n}'s account? They will regain full access to the EduFlex portal.`,
    action: "Activate Account",
    cls: "bg-green-600 hover:bg-green-700 text-white",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  approve: {
    title: "Approve Request",
    desc: (n) => `Approve ${n}'s pending request? This will grant them access to the EduFlex portal.`,
    action: "Approve",
    cls: "bg-green-600 hover:bg-green-700 text-white",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  reject: {
    title: "Reject Request",
    desc: (n) => `Reject ${n}'s pending request? They will be notified and their account will not be created.`,
    action: "Reject",
    cls: "bg-red-600 hover:bg-red-700 text-white",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
  },
};

function ConfirmDialog({
  variant, targetName, onConfirm, onClose,
}: {
  variant: ConfirmVariant;
  targetName: string;
  onConfirm: () => void;
  onClose: () => void;
}) {
  const cfg = CONFIRM_CFG[variant];
  return (
    <>
      <Backdrop onClose={onClose} />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm pointer-events-auto p-6 text-center">
          <div className={`w-14 h-14 rounded-2xl ${cfg.iconBg} flex items-center justify-center ${cfg.iconColor} mx-auto mb-4`}>
            <IconAlertTriangle className="w-7 h-7" />
          </div>
          <h3 className="text-base font-bold text-gray-900 mb-2">{cfg.title}</h3>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">{cfg.desc(targetName)}</p>
          <div className="flex gap-2">
            <button onClick={onClose} className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors">
              Cancel
            </button>
            <button onClick={onConfirm} className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-colors ${cfg.cls}`}>
              {cfg.action}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// ── Row Actions Dropdown ──────────────────────────────────────────────────────
function RowActions({
  user,
  onView,
  onEdit,
  onToggleStatus,
  onDelete,
}: {
  user: User;
  onView: () => void;
  onEdit: () => void;
  onToggleStatus: () => void;
  onDelete: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
      >
        <IconMoreVertical className="w-4 h-4" />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-20 py-1 w-44 overflow-hidden">
            <button onClick={() => { setOpen(false); onView(); }}
              className="w-full flex items-center gap-2.5 px-3.5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
              <IconEye className="w-4 h-4 text-gray-400" /> View Details
            </button>
            <button onClick={() => { setOpen(false); onEdit(); }}
              className="w-full flex items-center gap-2.5 px-3.5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
              <IconEdit className="w-4 h-4 text-gray-400" /> Edit User
            </button>
            <button onClick={() => { setOpen(false); onToggleStatus(); }}
              className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 text-sm hover:bg-gray-50 transition-colors ${user.status === "Active" ? "text-orange-600" : "text-green-700"}`}>
              <IconPower className={`w-4 h-4 ${user.status === "Active" ? "text-orange-400" : "text-green-500"}`} />
              {user.status === "Active" ? "Deactivate" : "Activate"}
            </button>
            <div className="border-t border-gray-100 my-1" />
            <button onClick={() => { setOpen(false); onDelete(); }}
              className="w-full flex items-center gap-2.5 px-3.5 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors">
              <IconTrash className="w-4 h-4 text-red-400" /> Delete User
            </button>
          </div>
        </>
      )}
    </div>
  );
}

// ── Stat Card ─────────────────────────────────────────────────────────────────
function StatCard({
  title,
  value,
  subtitle,
  icon,
  bg,
  iconBg,
  textColor,
  onClick,
  active = false,
}: {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
  bg: string;
  iconBg: string;
  textColor: string;
  onClick?: () => void;
  active?: boolean;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`${title}: ${value}`}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
      className={`rounded-2xl border shadow-sm p-4 flex items-start gap-3 cursor-pointer select-none transition-all duration-150 hover:shadow-md active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-blue-400/40 ${bg} ${
        active
          ? title === "Pending Approvals"
            ? "ring-2 ring-orange-400/50 shadow-sm"
            : "ring-2 ring-blue-500/40 shadow-sm"
          : "hover:border-gray-300"
      }`}
    >
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${iconBg}`}>
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className={`text-[10px] font-bold uppercase tracking-wider mb-0.5 ${textColor} opacity-70`}>{title}</p>
        <p className={`text-2xl font-extrabold leading-none ${textColor}`}>{value}</p>
        <p className={`text-xs mt-1 ${textColor} opacity-60 truncate`}>{subtitle}</p>
      </div>
    </div>
  );
}

export type AdminUserModal =
  | { type: "view"; user: User }
  | { type: "add" }
  | { type: "edit"; user: User }
  | { type: "confirm"; variant: ConfirmVariant; userId: string; name: string }
  | { type: "confirmPending"; variant: "approve" | "reject"; pendingId: string; name: string }
  | null;

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function AdminUserManagement({
  users: controlledUsers,
  setUsers: controlledSetUsers,
  pending: controlledPending,
  setPending: controlledSetPending,
  initialModal = null,
}: {
  users?: User[];
  setUsers?: React.Dispatch<React.SetStateAction<User[]>>;
  pending?: PendingItem[];
  setPending?: React.Dispatch<React.SetStateAction<PendingItem[]>>;
  initialModal?: AdminUserModal;
} = {}) {
  const [internalUsers, setInternalUsers] = useState<User[]>(INITIAL_USERS);
  const [internalPending, setInternalPending] = useState<PendingItem[]>(INITIAL_PENDING);

  const users = controlledUsers ?? internalUsers;
  const setUsers = controlledSetUsers ?? setInternalUsers;
  const pending = controlledPending ?? internalPending;
  const setPending = controlledSetPending ?? setInternalPending;

  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All Roles");
  const [statusFilter, setStatusFilter] = useState("All Status");

  const [modal, setModal] = useState<AdminUserModal>(initialModal);

  useEffect(() => {
    if (initialModal) {
      setModal(initialModal);
    }
  }, [initialModal]);

  // Toast notification
  const [toast, setToast] = useState<{ msg: string; key: number } | null>(null);
  function showToast(msg: string) {
    const key = Date.now();
    setToast({ msg, key });
    setTimeout(() => setToast(null), 3000);
  }

  // Filtered users
  const filtered = users.filter((u) => {
    const q = search.toLowerCase();
    const matchSearch = !q || u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q) || u.id.toLowerCase().includes(q);
    const matchRole = roleFilter === "All Roles" || u.role === roleFilter;
    const matchStatus = statusFilter === "All Status" || u.status === statusFilter;
    return matchSearch && matchRole && matchStatus;
  });

  // Filtered pending items
  const filteredPending = pending.filter((p) => {
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.email.toLowerCase().includes(q) ||
      p.id.toLowerCase().includes(q) ||
      p.action.toLowerCase().includes(q);
    const matchRole = roleFilter === "All Roles" || p.role === roleFilter;
    return matchSearch && matchRole;
  });

  const handleTotalUsersClick = () => {
    setRoleFilter("All Roles");
    setStatusFilter("All Status");
    setSearch("");
  };

  const handleStudentsClick = () => {
    setRoleFilter("Student");
    if (statusFilter === "Pending") {
      setStatusFilter("All Status");
    }
  };

  const handleInstructorsClick = () => {
    setRoleFilter("Instructor");
    if (statusFilter === "Pending") {
      setStatusFilter("All Status");
    }
  };

  const handlePendingApprovalsClick = () => {
    setStatusFilter("Pending");
    setRoleFilter("All Roles");
  };

  function handleSaveUser(u: User) {
    setUsers((prev) => {
      const idx = prev.findIndex((x) => x.id === u.id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = u;
        return next;
      }
      return [u, ...prev];
    });
    setModal(null);
    showToast(modal?.type === "edit" ? `${u.name}'s profile updated.` : `${u.name} added successfully.`);
  }

  function handleConfirm() {
    if (!modal) return;
    if (modal.type === "confirm") {
      const { variant, userId, name } = modal;
      if (variant === "delete") {
        setUsers((prev) => prev.filter((u) => u.id !== userId));
        showToast(`${name}'s account has been deleted.`);
      } else if (variant === "deactivate") {
        setUsers((prev) => prev.map((u) => u.id === userId ? { ...u, status: "Inactive" } : u));
        showToast(`${name}'s account deactivated.`);
      } else if (variant === "activate") {
        setUsers((prev) => prev.map((u) => u.id === userId ? { ...u, status: "Active" } : u));
        showToast(`${name}'s account activated.`);
      }
    } else if (modal.type === "confirmPending") {
      const { variant, pendingId, name } = modal;
      if (variant === "approve") {
        const item = pending.find((p) => p.id === pendingId);
        if (item) {
          const newUser: User = {
            id: `${item.role === "Instructor" ? "INS" : "STU"}-2026${Math.floor(1000 + Math.random() * 9000)}`,
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
          setUsers((prev) => [newUser, ...prev]);
        }
      }
      setPending((prev) => prev.filter((p) => p.id !== pendingId));
      showToast(variant === "approve" ? `${name}'s request approved.` : `${name}'s request rejected.`);
    }
    setModal(null);
  }

  const totalStudents = users.filter((u) => u.role === "Student").length;
  const totalInstructors = users.filter((u) => u.role === "Instructor").length;

  return (
    <div className="p-6 relative">
      {/* Toast */}
      {toast && (
        <div key={toast.key} className="fixed bottom-6 right-6 z-[60] bg-gray-900 text-white text-sm font-medium px-4 py-3 rounded-xl shadow-xl flex items-center gap-2 animate-fade-in-up">
          <IconCheck className="w-4 h-4 text-green-400 shrink-0" />
          {toast.msg}
        </div>
      )}

      {/* Page Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
          <span>Admin</span><span>/</span>
          <span className="text-gray-600">User Management</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
            <p className="text-sm text-gray-500 mt-0.5">Manage students, instructors, and user accounts.</p>
          </div>
          <button
            onClick={() => setModal({ type: "add" })}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
            style={{ background: "#1a3a9e" }}
          >
            <IconUserPlus className="w-4 h-4" />
            Add New User
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Total Users"
          value={`${users.length.toLocaleString()}`}
          subtitle="All registered accounts"
          icon={<IconUsers />}
          bg="bg-white border-gray-200"
          iconBg="bg-blue-50 text-blue-600"
          textColor="text-gray-800"
          onClick={handleTotalUsersClick}
          active={roleFilter === "All Roles" && statusFilter === "All Status"}
        />
        <StatCard
          title="Students"
          value={totalStudents.toLocaleString()}
          subtitle="+23 this semester"
          icon={<IconUsers className="w-5 h-5" />}
          bg="bg-white border-gray-200"
          iconBg="bg-indigo-50 text-indigo-600"
          textColor="text-gray-800"
          onClick={handleStudentsClick}
          active={roleFilter === "Student" && statusFilter !== "Pending"}
        />
        <StatCard
          title="Instructors"
          value={totalInstructors.toLocaleString()}
          subtitle="2 pending approval"
          icon={<IconShield />}
          bg="bg-white border-gray-200"
          iconBg="bg-purple-50 text-purple-600"
          textColor="text-gray-800"
          onClick={handleInstructorsClick}
          active={roleFilter === "Instructor" && statusFilter !== "Pending"}
        />
        <StatCard
          title="Pending Approvals"
          value={`${pending.length}`}
          subtitle="Requires review"
          icon={<IconFilter />}
          bg="bg-orange-50 border-orange-100"
          iconBg="bg-orange-100 text-orange-500"
          textColor="text-orange-700"
          onClick={handlePendingApprovalsClick}
          active={statusFilter === "Pending"}
        />
      </div>

      {/* Toolbar */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm px-4 py-3.5 mb-4 flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-48">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><IconSearch /></span>
          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
          />
        </div>

        {/* Role filter */}
        <div className="relative">
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="appearance-none pl-3 pr-8 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
          >
            {["All Roles", "Student", "Instructor"].map((r) => <option key={r}>{r}</option>)}
          </select>
          <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"><IconChevronDown /></span>
        </div>

        {/* Status filter */}
        <div className="relative">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="appearance-none pl-3 pr-8 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
          >
            {["All Status", "Active", "Inactive", "Pending"].map((s) => <option key={s}>{s}</option>)}
          </select>
          <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"><IconChevronDown /></span>
        </div>

        <span className="ml-auto text-xs text-gray-400 font-medium shrink-0">
          {statusFilter === "Pending"
            ? `${filteredPending.length} of ${pending.length} pending request${pending.length === 1 ? "" : "s"}`
            : `${filtered.length} of ${users.length} users`}
        </span>
      </div>

      {/* User Table */}
      {(statusFilter !== "Pending" || filtered.length > 0) && (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-5">
          {/* Table header */}
          <div className="grid bg-gray-50 border-b border-gray-100 px-5 py-3 gap-3"
            style={{ gridTemplateColumns: "2fr 1fr 2fr 1fr 1.4fr 80px" }}>
            {["User", "Role", "Email", "Status", "Last Active", "Actions"].map((h) => (
              <p key={h} className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{h}</p>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <IconUsers className="w-10 h-10 mx-auto mb-3 opacity-30" />
              <p className="text-sm font-medium">No users match your filters</p>
            </div>
          ) : (
            filtered.map((u) => (
              <div
                key={u.id}
                className="grid items-center px-5 py-3.5 border-b border-gray-100 last:border-0 hover:bg-blue-50/20 transition-colors gap-3"
                style={{ gridTemplateColumns: "2fr 1fr 2fr 1fr 1.4fr 80px" }}
              >
                {/* User */}
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 overflow-hidden"
                    style={{ background: avatarBg(u.role) }}>
                    {u.avatar ? (
                      <img src={u.avatar} alt={u.name} className="w-full h-full object-cover" />
                    ) : (
                      initials(u.name)
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-800 truncate">{u.name}</p>
                    <p className="text-[10px] text-gray-400 font-mono">{u.id}</p>
                  </div>
                </div>

                {/* Role */}
                <div><RoleBadge role={u.role} /></div>

                {/* Email */}
                <p className="text-xs text-gray-500 truncate">{u.email}</p>

                {/* Status */}
                <div><StatusBadge status={u.status} /></div>

                {/* Last Active */}
                <p className="text-xs text-gray-400 truncate">{u.lastActive}</p>

                {/* Actions */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setModal({ type: "view", user: u })}
                    className="p-1.5 rounded-lg text-gray-400 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                    title="View user"
                  >
                    <IconEye className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setModal({ type: "edit", user: u })}
                    className="p-1.5 rounded-lg text-gray-400 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                    title="Edit user"
                  >
                    <IconEdit className="w-4 h-4" />
                  </button>
                  <RowActions
                    user={u}
                    onView={() => setModal({ type: "view", user: u })}
                    onEdit={() => setModal({ type: "edit", user: u })}
                    onToggleStatus={() =>
                      setModal({
                        type: "confirm",
                        variant: u.status === "Active" ? "deactivate" : "activate",
                        userId: u.id,
                        name: u.name,
                      })
                    }
                    onDelete={() => setModal({ type: "confirm", variant: "delete", userId: u.id, name: u.name })}
                  />
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Empty state when filtering exclusively for Pending and there are none */}
      {statusFilter === "Pending" && filtered.length === 0 && filteredPending.length === 0 && (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-12 text-center text-gray-400 mb-5">
          <IconFilter className="w-10 h-10 mx-auto mb-3 opacity-30 text-orange-400" />
          <p className="text-sm font-semibold text-gray-600">No pending approvals or requests requiring review</p>
          <p className="text-xs text-gray-400 mt-1">All user accounts and registration requests have been reviewed.</p>
        </div>
      )}

      {/* Pending Approvals Section */}
      {(statusFilter === "All Status" || statusFilter === "Pending") && (statusFilter === "Pending" ? filteredPending.length > 0 : pending.length > 0) && (
        <div className="bg-white rounded-2xl border border-orange-200 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-orange-100 bg-orange-50/50">
            <div className="flex items-center gap-2">
              <p className="text-[10px] font-bold text-orange-600 uppercase tracking-widest">Pending Approvals</p>
              <span className="text-[10px] font-bold bg-orange-500 text-white px-2 py-0.5 rounded-full">
                {statusFilter === "Pending" ? filteredPending.length : pending.length}
              </span>
            </div>
            <p className="text-xs text-orange-500">These accounts require your review</p>
          </div>

          {/* Table header */}
          <div className="grid bg-gray-50/80 border-b border-gray-100 px-5 py-3 gap-3"
            style={{ gridTemplateColumns: "2fr 1fr 2fr 1fr 180px" }}>
            {["Name", "Role", "Request", "Submitted", "Actions"].map((h) => (
              <p key={h} className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{h}</p>
            ))}
          </div>

          {(statusFilter === "Pending" ? filteredPending : pending).map((p) => (
            <div
              key={p.id}
              className="grid items-center px-5 py-3.5 border-b border-gray-100 last:border-0 hover:bg-orange-50/20 transition-colors gap-3"
              style={{ gridTemplateColumns: "2fr 1fr 2fr 1fr 180px" }}
            >
              {/* Name */}
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700 text-xs font-bold shrink-0">
                  {p.initials}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gray-800 truncate">{p.name}</p>
                  <p className="text-[10px] text-gray-400 truncate">{p.email}</p>
                </div>
              </div>

              {/* Role */}
              <div><RoleBadge role={p.role} /></div>

              {/* Action */}
              <p className="text-sm text-gray-600 truncate">{p.action}</p>

              {/* Submitted */}
              <p className="text-xs text-gray-400">{p.submitted}</p>

              {/* Actions */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setModal({ type: "confirmPending", variant: "approve", pendingId: p.id, name: p.name })}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-green-50 hover:bg-green-100 text-green-700 text-xs font-semibold transition-colors shrink-0 whitespace-nowrap"
                >
                  <IconCheck className="w-3.5 h-3.5 shrink-0" /> Approve
                </button>
                <button
                  onClick={() => setModal({ type: "confirmPending", variant: "reject", pendingId: p.id, name: p.name })}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 text-xs font-semibold transition-colors shrink-0 whitespace-nowrap"
                >
                  <IconXCircle className="w-3.5 h-3.5 shrink-0" /> Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Modals ── */}
      {modal?.type === "view" && (
        <ViewUserModal
          user={modal.user}
          onClose={() => setModal(null)}
          onEdit={() => setModal({ type: "edit", user: modal.user })}
        />
      )}

      {(modal?.type === "add" || modal?.type === "edit") && (
        <UserFormModal
          user={modal.type === "edit" ? modal.user : null}
          onClose={() => setModal(null)}
          onSave={handleSaveUser}
        />
      )}

      {modal?.type === "confirm" && (
        <ConfirmDialog
          variant={modal.variant}
          targetName={modal.name}
          onConfirm={handleConfirm}
          onClose={() => setModal(null)}
        />
      )}

      {modal?.type === "confirmPending" && (
        <ConfirmDialog
          variant={modal.variant}
          targetName={modal.name}
          onConfirm={handleConfirm}
          onClose={() => setModal(null)}
        />
      )}
    </div>
  );
}
