"use client";

import AdminDashboard from "@/src/AdminDashboard";
import { clearSession } from "@/src/auth";
import { useRouter } from "next/navigation";

export default function AdminRoute() {
  const router = useRouter();

  const handleLogout = () => {
    clearSession();
    router.push("/");
  };

  return <AdminDashboard onLogout={handleLogout} />;
}
