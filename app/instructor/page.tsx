"use client";

import InstructorDashboard from "@/src/InstructorDashboard";
import { clearSession } from "@/src/auth";
import ProtectedRoute from "@/src/ProtectedRoute";
import { useRouter } from "next/navigation";

export default function InstructorRoute() {
  const router = useRouter();

  const handleLogout = () => {
    clearSession();
    router.push("/");
  };

  return (
    <ProtectedRoute role="instructor">
      <InstructorDashboard onLogout={handleLogout} />
    </ProtectedRoute>
  );
}
