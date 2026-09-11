import type { Metadata } from "next";
import "../src/index.css";

export const metadata: Metadata = {
  title: "EduFlex",
  description: "EduFlex - A Lightweight Course Management Tool",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
