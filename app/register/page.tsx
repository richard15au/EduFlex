import { RegisterPage } from "@/src/PublicPages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | EduFlex",
  description: "Create an account on EduFlex.",
};

export default function RegisterRoute() {
  return <RegisterPage />;
}
