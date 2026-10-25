"use client";

import AdminDashboard from "@/src/AdminDashboard";
import { clearSession } from "@/src/auth";
import ProtectedRoute from "@/src/ProtectedRoute";
import { useRouter } from "next/navigation";

export default function AdminRoute() {
  const router = useRouter();

  const handleLogout = () => {
    clearSession();
    router.push("/");
  };

  return (
    <ProtectedRoute role="admin">
      <AdminDashboard onLogout={handleLogout} />
    </ProtectedRoute>
  );
}
