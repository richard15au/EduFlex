"use client";

import { StudentDashboard } from "@/src/LegacyApp";
import { clearSession } from "@/src/auth";
import { useRouter } from "next/navigation";

export default function StudentRoute() {
  const router = useRouter();

  const handleLogout = () => {
    clearSession();
    router.push("/");
  };

  return <StudentDashboard onLogout={handleLogout} />;
}
