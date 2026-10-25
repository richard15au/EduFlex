export type UserRole = "student" | "instructor" | "admin";

export interface UserAccount {
  name: string;
  email: string;
  password: string;
  role: UserRole;
}

const ACCOUNTS_KEY = "eduflex_accounts";
const SESSION_KEY = "eduflex_current_user";

export function normalizeRole(role: unknown): UserRole | null {
  if (typeof role !== "string") return null;
  const cleaned = role.trim().toLowerCase();
  if (cleaned === "student") return "student";
  if (cleaned === "instructor") return "instructor";
  if (cleaned === "admin" || cleaned === "administrator") return "admin";
  return null;
}

export const SEED_ACCOUNTS: UserAccount[] = [
  // Institutional identity convention accounts (richacademy.en-rich.me)
  { name: "Richard Maceda Vitug", email: "2003988@richacademy.en-rich.me", password: "student123", role: "student" },
  { name: "Anita Humagain", email: "anita.humagain@richacademy.en-rich.me", password: "instructor123", role: "instructor" },
  { name: "Rojit Munankarmi", email: "a.rojit.munankarmi@richacademy.en-rich.me", password: "admin123", role: "admin" },
  // Existing demo accounts (eduflex.edu)
  { name: "Richard Maceda Vitug", email: "2003988@eduflex.edu", password: "student123", role: "student" },
  { name: "Anita Humagain", email: "anita.humagain@eduflex.edu", password: "instructor123", role: "instructor" },
  { name: "Rojit Munankarmi", email: "a.rojit.munankarmi@eduflex.edu", password: "admin123", role: "admin" },
];

function getAccounts(): UserAccount[] {
  if (typeof window === "undefined") return SEED_ACCOUNTS;
  try {
    const rawStored = JSON.parse(localStorage.getItem(ACCOUNTS_KEY) || "[]");
    const stored: UserAccount[] = Array.isArray(rawStored)
      ? rawStored
          .filter((a): a is UserAccount => Boolean(a && typeof a.email === "string" && typeof a.password === "string"))
          .map((a) => ({
            name: typeof a.name === "string" ? a.name : "",
            email: a.email.trim(),
            password: a.password,
            role: normalizeRole(a.role) ?? "student",
          }))
      : [];

    // Seed accounts are authoritative for their emails so self-registration cannot corrupt their trusted roles
    const seedByEmail = new Map(SEED_ACCOUNTS.map((s) => [s.email.toLowerCase(), s]));
    const customAccounts = stored.filter((a) => !seedByEmail.has(a.email.toLowerCase()));
    return [...SEED_ACCOUNTS, ...customAccounts];
  } catch {
    return SEED_ACCOUNTS;
  }
}

export function registerUser(account: UserAccount): void {
  if (typeof window === "undefined") return;
  const normalizedEmail = account.email.trim().toLowerCase();
  if (!normalizedEmail) return;

  // Prevent overwriting authoritative seed accounts
  if (SEED_ACCOUNTS.some((s) => s.email.toLowerCase() === normalizedEmail)) {
    return;
  }

  const normalizedRole = normalizeRole(account.role) ?? "student";
  const accounts = getAccounts();
  const exists = accounts.find((a) => a.email.trim().toLowerCase() === normalizedEmail);
  if (!exists) {
    const updated = [
      ...accounts,
      {
        name: account.name.trim(),
        email: account.email.trim(),
        password: account.password,
        role: normalizedRole,
      },
    ];
    localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(updated));
  }
}

export function loginUser(email: string, password: string): UserAccount | null {
  if (typeof window === "undefined") return null;
  const normalizedEmail = email.trim().toLowerCase();
  if (!normalizedEmail || !password) return null;

  const accounts = getAccounts();
  const match = accounts.find(
    (a) => a.email.trim().toLowerCase() === normalizedEmail && a.password === password
  );
  if (match) {
    const trustedRole = normalizeRole(match.role);
    if (!trustedRole) return null;
    const sessionUser: UserAccount = {
      ...match,
      role: trustedRole,
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));
    return sessionUser;
  }
  return null;
}

export function setSessionUser(user: UserAccount): void {
  if (typeof window === "undefined") return;
  const trustedRole = normalizeRole(user.role);
  if (!trustedRole) return;
  localStorage.setItem(
    SESSION_KEY,
    JSON.stringify({
      ...user,
      role: trustedRole,
    })
  );
}

export function getSessionUser(): UserAccount | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<UserAccount>;
    if (!parsed || typeof parsed.email !== "string") return null;

    const normalizedEmail = parsed.email.trim().toLowerCase();
    const seedMatch = SEED_ACCOUNTS.find((s) => s.email.toLowerCase() === normalizedEmail);
    const trustedRole = seedMatch ? seedMatch.role : normalizeRole(parsed.role);
    if (!trustedRole) return null;

    return {
      name: typeof parsed.name === "string" ? parsed.name : seedMatch?.name ?? "",
      email: parsed.email.trim(),
      password: typeof parsed.password === "string" ? parsed.password : "",
      role: trustedRole,
    };
  } catch {
    return null;
  }
}

export function clearSession(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(SESSION_KEY);
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}
