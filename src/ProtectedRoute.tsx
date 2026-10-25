"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { getSessionUser, normalizeRole, type UserRole } from "./auth";

export default function ProtectedRoute({
  role,
  children,
}: {
  role: UserRole;
  children: ReactNode;
}) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const user = getSessionUser();
    const userRole = normalizeRole(user?.role);
    if (!user || !userRole) {
      router.replace("/login");
      return;
    }
    if (userRole !== role) {
      router.replace(`/${userRole}`);
      return;
    }
    setAuthorized(true);
  }, [role, router]);

  return authorized ? children : null;
}