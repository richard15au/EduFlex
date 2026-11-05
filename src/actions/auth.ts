"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { randomBytes, createHash } from "node:crypto";
import { prisma } from "@/lib/prisma";
import { hashPassword, verifyPassword } from "@/lib/password";
import type { UserRole as PrismaUserRole } from "@prisma/client";

export type AuthRole = "student" | "instructor" | "admin";

export interface AuthUser {
  id: string;
  externalId: string | null;
  name: string;
  email: string;
  role: AuthRole;
  status: string;
  avatarUrl?: string | null;
  program?: string | null;
  department?: string | null;
}

export interface AuthResponse {
  success: boolean;
  role?: AuthRole;
  user?: AuthUser;
  error?: string;
}

const SESSION_COOKIE_NAME = "eduflex_session_token";
const SESSION_DURATION_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
  maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
};

function hashToken(rawToken: string): string {
  return createHash("sha256").update(rawToken).digest("hex");
}

function normalizeRole(role: PrismaUserRole): AuthRole {
  switch (role) {
    case "STUDENT":
      return "student";
    case "INSTRUCTOR":
      return "instructor";
    case "ADMIN":
      return "admin";
    default:
      return "student";
  }
}

/**
 * Server Action: Authenticate user against Neon DB and establish server session.
 * Pure Zero-API Server Action running directly in Node runtime.
 */
export async function loginAction(
  credentials: { email: string; password: string }
): Promise<AuthResponse> {
  const email = credentials.email?.trim().toLowerCase();
  const password = credentials.password;

  if (!email || !password) {
    return { success: false, error: "Please enter your email and password." };
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return { success: false, error: "Invalid email or password." };
    }

    if (user.status !== "ACTIVE") {
      return {
        success: false,
        error: "Your account is pending administrator approval.",
      };
    }

    if (!user.passwordHash) {
      return { success: false, error: "Invalid email or password." };
    }

    const isMatch = verifyPassword(password, user.passwordHash);
    if (!isMatch) {
      return { success: false, error: "Invalid email or password." };
    }

    // Generate secure opaque session token
    const rawToken = randomBytes(32).toString("hex");
    const tokenHash = hashToken(rawToken);
    const expiresAt = new Date(Date.now() + SESSION_DURATION_MS);

    // Persist session to Neon PostgreSQL
    await prisma.session.create({
      data: {
        userId: user.id,
        tokenHash,
        expiresAt,
      },
    });

    // Update last activity timestamp
    await prisma.user.update({
      where: { id: user.id },
      data: { lastActiveAt: new Date() },
    });

    // Set secure HTTP-only cookie
    const cookieStore = await cookies();
    cookieStore.set(SESSION_COOKIE_NAME, rawToken, cookieOptions);

    const role = normalizeRole(user.role);

    return {
      success: true,
      role,
      user: {
        id: user.id,
        externalId: user.externalId,
        name: user.name,
        email: user.email,
        role,
        status: user.status,
        avatarUrl: user.avatarUrl,
        program: user.program,
        department: user.department,
      },
    };
  } catch (error) {
    console.error("[loginAction error]:", error);
    return { success: false, error: "An unexpected error occurred during sign-in." };
  }
}

/**
 * Server Action: Register new student account and establish session.
 */
export async function registerAction(data: {
  name: string;
  email: string;
  password: string;
}): Promise<AuthResponse> {
  const name = data.name?.trim();
  const email = data.email?.trim().toLowerCase();
  const password = data.password;

  if (!name || !email || !password) {
    return { success: false, error: "Please fill in all required fields." };
  }

  if (password.length < 6) {
    return { success: false, error: "Password must be at least 6 characters long." };
  }

  try {
    const existing = await prisma.user.findUnique({
      where: { email },
    });

    if (existing) {
      return { success: false, error: "An account with this email already exists." };
    }

    const passwordHash = hashPassword(password);

    // Self-registration creates a STUDENT account with ACTIVE status
    const user = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
        role: "STUDENT",
        status: "ACTIVE",
      },
    });

    const rawToken = randomBytes(32).toString("hex");
    const tokenHash = hashToken(rawToken);
    const expiresAt = new Date(Date.now() + SESSION_DURATION_MS);

    await prisma.session.create({
      data: {
        userId: user.id,
        tokenHash,
        expiresAt,
      },
    });

    const cookieStore = await cookies();
    cookieStore.set(SESSION_COOKIE_NAME, rawToken, cookieOptions);

    return {
      success: true,
      role: "student",
      user: {
        id: user.id,
        externalId: user.externalId,
        name: user.name,
        email: user.email,
        role: "student",
        status: user.status,
      },
    };
  } catch (error) {
    console.error("[registerAction error]:", error);
    return { success: false, error: "Failed to register account. Please try again." };
  }
}

/**
 * Server Action: Revoke current session in Neon DB and clear session cookie.
 */
export async function logoutAction(): Promise<{ success: boolean }> {
  try {
    const cookieStore = await cookies();
    const rawToken = cookieStore.get(SESSION_COOKIE_NAME)?.value;

    if (rawToken) {
      const tokenHash = hashToken(rawToken);
      await prisma.session.deleteMany({
        where: { tokenHash },
      });
    }

    cookieStore.delete(SESSION_COOKIE_NAME);
  } catch (error) {
    console.error("[logoutAction error]:", error);
  }

  return { success: true };
}

/**
 * Server Helper: Retrieve authenticated user and session directly inside Server Components / Actions.
 * Returns null if unauthenticated, expired, or inactive.
 */
export async function getServerSession(): Promise<{
  user: AuthUser;
  session: { id: string; expiresAt: Date };
} | null> {
  try {
    const cookieStore = await cookies();
    const rawToken = cookieStore.get(SESSION_COOKIE_NAME)?.value;

    if (!rawToken) {
      return null;
    }

    const tokenHash = hashToken(rawToken);
    const now = new Date();

    const session = await prisma.session.findUnique({
      where: { tokenHash },
      include: {
        user: true,
      },
    });

    if (!session || session.revokedAt || session.expiresAt <= now) {
      return null;
    }

    if (session.user.status !== "ACTIVE") {
      return null;
    }

    const role = normalizeRole(session.user.role);

    return {
      user: {
        id: session.user.id,
        externalId: session.user.externalId,
        name: session.user.name,
        email: session.user.email,
        role,
        status: session.user.status,
        avatarUrl: session.user.avatarUrl,
        program: session.user.program,
        department: session.user.department,
      },
      session: {
        id: session.id,
        expiresAt: session.expiresAt,
      },
    };
  } catch (error) {
    console.error("[getServerSession error]:", error);
    return null;
  }
}

/**
 * Server Helper: Enforces role-based route access in Server Components.
 * Redirects unauthorized visitors to /login or their authorized role portal.
 */
export async function requireRole(allowedRoles: AuthRole[]) {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  if (!allowedRoles.includes(session.user.role)) {
    redirect(`/${session.user.role}`);
  }

  return session;
}
