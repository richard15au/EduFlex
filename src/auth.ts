export interface UserAccount {
  name: string;
  email: string;
  password: string;
  role: "student" | "instructor" | "admin";
}

const ACCOUNTS_KEY = "eduflex_accounts";
const SESSION_KEY = "eduflex_current_user";

const SEED_ACCOUNTS: UserAccount[] = [
  { name: "Richard Maceda Vitug", email: "2003988@eduflex.edu", password: "student123", role: "student" },
  { name: "Anita Humagain", email: "anita.humagain@eduflex.edu", password: "instructor123", role: "instructor" },
  { name: "Rojit Munankarmi", email: "a.rojit.munankarmi@eduflex.edu", password: "admin123", role: "admin" },
];

function getAccounts(): UserAccount[] {
  if (typeof window === "undefined") return SEED_ACCOUNTS;
  try {
    const stored: UserAccount[] = JSON.parse(localStorage.getItem(ACCOUNTS_KEY) || "[]");
    // Merge seed accounts in without overwriting any existing registered account
    const emails = new Set(stored.map((a) => a.email));
    const merged = [...stored, ...SEED_ACCOUNTS.filter((s) => !emails.has(s.email))];
    return merged;
  } catch {
    return SEED_ACCOUNTS;
  }
}

export function registerUser(account: UserAccount): void {
  if (typeof window === "undefined") return;
  const accounts = getAccounts();
  const exists = accounts.find((a) => a.email === account.email);
  if (!exists) {
    accounts.push(account);
    localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
  }
}

export function loginUser(email: string, password: string): UserAccount | null {
  if (typeof window === "undefined") return null;
  const accounts = getAccounts();
  const match = accounts.find((a) => a.email === email && a.password === password);
  if (match) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(match));
    return match;
  }
  return null;
}

export function setSessionUser(user: UserAccount): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
}

export function getSessionUser(): UserAccount | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? (JSON.parse(raw) as UserAccount) : null;
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
