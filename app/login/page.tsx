import { LoginPage } from "@/src/PublicPages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Log in | EduFlex",
  description: "Log in to your EduFlex account.",
};

export default function LoginRoute() {
  return <LoginPage />;
}
