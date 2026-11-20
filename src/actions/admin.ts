"use server";

import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/password";
import { getServerSession } from "./auth";
import { getNeonServerTime } from "./student";
import type { AccountStatus, ApprovalStatus, UserRole } from "@prisma/client";

export interface AdminUserDTO {
  id: string;
  externalId: string | null;
  name: string;
  email: string;
  role: "Student" | "Instructor" | "Admin";
  status: "Active" | "Inactive" | "Pending";
  program: string | null;
  department: string | null;
  phone: string | null;
  joinedAt: string;
}

export interface AdminPendingApprovalDTO {
  id: string;
  referenceCode: string | null;
  requesterId: string;
  name: string;
  email: string;
  role: "Student" | "Instructor" | "Admin";
  actionLabel: string;
  courseCode: string | null;
  status: string;
  submittedAt: string;
}

export interface CreateAdminUserInput {
  name: string;
  email: string;
  password?: string;
  role: "Student" | "Instructor" | "Admin";
  status?: "Active" | "Inactive" | "Pending";
  externalId?: string;
  program?: string;
  department?: string;
  phone?: string;
}

export interface UpdateAdminUserInput {
  id: string;
  name?: string;
  email?: string;
  role?: "Student" | "Instructor" | "Admin";
  status?: "Active" | "Inactive" | "Pending";
  program?: string;
  department?: string;
  phone?: string;
}

function toPrismaRole(role: "Student" | "Instructor" | "Admin"): UserRole {
  if (role === "Admin") return "ADMIN";
  if (role === "Instructor") return "INSTRUCTOR";
  return "STUDENT";
}

function fromPrismaRole(role: UserRole): "Student" | "Instructor" | "Admin" {
  if (role === "ADMIN") return "Admin";
  if (role === "INSTRUCTOR") return "Instructor";
  return "Student";
}

function toPrismaStatus(status?: "Active" | "Inactive" | "Pending"): AccountStatus {
  if (status === "Inactive") return "INACTIVE";
  if (status === "Pending") return "PENDING";
  return "ACTIVE";
}

function fromPrismaStatus(status: AccountStatus): "Active" | "Inactive" | "Pending" {
  if (status === "INACTIVE" || status === "REJECTED") return "Inactive";
  if (status === "PENDING") return "Pending";
  return "Active";
}

async function requireAdminSession() {
  const session = await getServerSession();
  if (!session || !session.user) {
    return { ok: false as const, error: "Unauthorized. Please log in as an administrator." };
  }
  if (session.user.role !== "admin") {
    return { ok: false as const, error: "Forbidden. Administrator role required for this operation." };
  }
  return { ok: true as const, user: session.user };
}

/**
 * WBS 3.2: Fetch all users and pending registration/enrollment approval requests from Neon PostgreSQL.
 */
export async function getAdminUsersAndApprovalsAction(): Promise<{
  success: boolean;
  users?: AdminUserDTO[];
  pendingApprovals?: AdminPendingApprovalDTO[];
  error?: string;
}> {
  try {
    const auth = await requireAdminSession();
    if (!auth.ok) {
      return { success: false, error: auth.error };
    }

    const [users, approvals] = await Promise.all([
      prisma.user.findMany({
        select: {
          id: true,
          externalId: true,
          name: true,
          email: true,
          role: true,
          status: true,
          program: true,
          department: true,
          phone: true,
          joinedAt: true,
        },
        orderBy: { createdAt: "desc" },
      }),
      prisma.approvalRequest.findMany({
        where: { status: "PENDING" },
        include: {
          requester: {
            select: { id: true, name: true, email: true, role: true },
          },
          course: {
            select: { code: true },
          },
        },
        orderBy: { submittedAt: "desc" },
      }),
    ]);

    return {
      success: true,
      users: users.map((u) => ({
        id: u.id,
        externalId: u.externalId,
        name: u.name,
        email: u.email,
        role: fromPrismaRole(u.role),
        status: fromPrismaStatus(u.status),
        program: u.program,
        department: u.department,
        phone: u.phone,
        joinedAt: u.joinedAt.toISOString(),
      })),
      pendingApprovals: approvals.map((a) => ({
        id: a.id,
        referenceCode: a.referenceCode,
        requesterId: a.requester.id,
        name: a.requester.name,
        email: a.requester.email,
        role: fromPrismaRole(a.requestedRole),
        actionLabel: a.actionLabel,
        courseCode: a.course?.code ?? null,
        status: a.status,
        submittedAt: a.submittedAt.toISOString(),
      })),
    };
  } catch (err) {
    console.error("[getAdminUsersAndApprovalsAction] Error:", err);
    return { success: false, error: "Failed to load users and approval queue." };
  }
}

/**
 * WBS 3.2: Create a new user in Neon PostgreSQL with hashed password & institutional ID.
 */
export async function createAdminUserAction(input: CreateAdminUserInput): Promise<{
  success: boolean;
  user?: AdminUserDTO;
  error?: string;
}> {
  try {
    const auth = await requireAdminSession();
    if (!auth.ok) {
      return { success: false, error: auth.error };
    }

    const name = input.name?.trim();
    const email = input.email?.trim().toLowerCase();
    if (!name || !email) {
      return { success: false, error: "Name and email are required." };
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return { success: false, error: `A user with email ${email} already exists.` };
    }

    const rawPassword = input.password && input.password.length >= 6 ? input.password : "EduFlex2026!";
    const passwordHash = await hashPassword(rawPassword);
    const prismaRole = toPrismaRole(input.role);
    const prismaStatus = toPrismaStatus(input.status);
    const generatedExternalId =
      input.externalId?.trim() ||
      `${prismaRole === "ADMIN" ? "ADM" : prismaRole === "INSTRUCTOR" ? "INS" : "STU"}-${Date.now().toString().slice(-6)}`;

    const created = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
        role: prismaRole,
        status: prismaStatus,
        externalId: generatedExternalId,
        program: input.program ?? (prismaRole === "STUDENT" ? "BS Information Technology" : null),
        department: input.department ?? (prismaRole !== "STUDENT" ? "School of ICT" : null),
        phone: input.phone ?? null,
        emailVerified: true,
      },
      select: {
        id: true,
        externalId: true,
        name: true,
        email: true,
        role: true,
        status: true,
        program: true,
        department: true,
        phone: true,
        joinedAt: true,
      },
    });

    return {
      success: true,
      user: {
        id: created.id,
        externalId: created.externalId,
        name: created.name,
        email: created.email,
        role: fromPrismaRole(created.role),
        status: fromPrismaStatus(created.status),
        program: created.program,
        department: created.department,
        phone: created.phone,
        joinedAt: created.joinedAt.toISOString(),
      },
    };
  } catch (err) {
    console.error("[createAdminUserAction] Error:", err);
    return { success: false, error: "Failed to create user in Neon PostgreSQL." };
  }
}

/**
 * WBS 3.2: Update an existing user record in Neon PostgreSQL.
 */
export async function updateAdminUserAction(input: UpdateAdminUserInput): Promise<{
  success: boolean;
  user?: AdminUserDTO;
  error?: string;
}> {
  try {
    const auth = await requireAdminSession();
    if (!auth.ok) {
      return { success: false, error: auth.error };
    }

    if (!input.id) {
      return { success: false, error: "User ID is required." };
    }

    const updated = await prisma.user.update({
      where: { id: input.id },
      data: {
        ...(input.name !== undefined ? { name: input.name.trim() } : {}),
        ...(input.email !== undefined ? { email: input.email.trim().toLowerCase() } : {}),
        ...(input.role !== undefined ? { role: toPrismaRole(input.role) } : {}),
        ...(input.status !== undefined ? { status: toPrismaStatus(input.status) } : {}),
        ...(input.program !== undefined ? { program: input.program } : {}),
        ...(input.department !== undefined ? { department: input.department } : {}),
        ...(input.phone !== undefined ? { phone: input.phone } : {}),
      },
      select: {
        id: true,
        externalId: true,
        name: true,
        email: true,
        role: true,
        status: true,
        program: true,
        department: true,
        phone: true,
        joinedAt: true,
      },
    });

    return {
      success: true,
      user: {
        id: updated.id,
        externalId: updated.externalId,
        name: updated.name,
        email: updated.email,
        role: fromPrismaRole(updated.role),
        status: fromPrismaStatus(updated.status),
        program: updated.program,
        department: updated.department,
        phone: updated.phone,
        joinedAt: updated.joinedAt.toISOString(),
      },
    };
  } catch (err) {
    console.error("[updateAdminUserAction] Error:", err);
    return { success: false, error: "Failed to update user in Neon PostgreSQL." };
  }
}

/**
 * WBS 3.2: Delete a user from Neon PostgreSQL (with self-deletion protection).
 */
export async function deleteAdminUserAction(userId: string): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    const auth = await requireAdminSession();
    if (!auth.ok) {
      return { success: false, error: auth.error };
    }

    if (userId === auth.user.id) {
      return { success: false, error: "Administrators cannot delete their own active account." };
    }

    await prisma.user.delete({ where: { id: userId } });
    return { success: true };
  } catch (err) {
    console.error("[deleteAdminUserAction] Error:", err);
    return { success: false, error: "Failed to delete user from Neon PostgreSQL." };
  }
}

/**
 * WBS 3.2: Approve or Reject a single pending registration/approval request.
 */
export async function reviewApprovalRequestAction(input: {
  approvalId: string;
  decision: "APPROVED" | "REJECTED";
  notes?: string;
}): Promise<{ success: boolean; error?: string }> {
  try {
    const auth = await requireAdminSession();
    if (!auth.ok) {
      return { success: false, error: auth.error };
    }

    const serverTime = await getNeonServerTime();
    const reviewedNow = new Date(serverTime.timestampMs);

    await prisma.$transaction(async (tx) => {
      const approval = await tx.approvalRequest.update({
        where: { id: input.approvalId },
        data: {
          status: input.decision as ApprovalStatus,
          reviewedAt: reviewedNow,
          reviewedById: auth.user.id,
          ...(input.notes ? { notes: input.notes } : {}),
        },
      });

      await tx.user.update({
        where: { id: approval.requesterId },
        data: {
          status: input.decision === "APPROVED" ? "ACTIVE" : "REJECTED",
          ...(input.decision === "APPROVED" ? { role: approval.requestedRole } : {}),
        },
      });
    });

    return { success: true };
  } catch (err) {
    console.error("[reviewApprovalRequestAction] Error:", err);
    return { success: false, error: "Failed to process approval request." };
  }
}

/**
 * WBS 3.2: Atomically approve all pending registration/enrollment requests.
 */
export async function approveAllPendingAction(): Promise<{
  success: boolean;
  approvedCount?: number;
  error?: string;
}> {
  try {
    const auth = await requireAdminSession();
    if (!auth.ok) {
      return { success: false, error: auth.error };
    }

    const serverTime = await getNeonServerTime();
    const reviewedNow = new Date(serverTime.timestampMs);

    const pendingList = await prisma.approvalRequest.findMany({
      where: { status: "PENDING" },
      select: { id: true, requesterId: true, requestedRole: true },
    });

    if (pendingList.length === 0) {
      return { success: true, approvedCount: 0 };
    }

    await prisma.$transaction(async (tx) => {
      await tx.approvalRequest.updateMany({
        where: { id: { in: pendingList.map((p) => p.id) } },
        data: {
          status: "APPROVED",
          reviewedAt: reviewedNow,
          reviewedById: auth.user.id,
        },
      });

      for (const item of pendingList) {
        await tx.user.update({
          where: { id: item.requesterId },
          data: {
            status: "ACTIVE",
            role: item.requestedRole,
          },
        });
      }
    });

    return { success: true, approvedCount: pendingList.length };
  } catch (err) {
    console.error("[approveAllPendingAction] Error:", err);
    return { success: false, error: "Failed to approve pending requests." };
  }
}
