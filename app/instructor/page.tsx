"use client";

import InstructorDashboard from "@/src/InstructorDashboard";
import { clearSession } from "@/src/auth";
import { useRouter } from "next/navigation";

export default function InstructorRoute() {
  const router = useRouter();

  const handleLogout = () => {
    clearSession();
    router.push("/");
  };

  return <InstructorDashboard onLogout={handleLogout} />;
}
