import type { Metadata } from "next";
import "../src/index.css";

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://eduflex.edu";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "EduFlex — Best Course Management Tools & University LMS",
    template: "%s | EduFlex LMS",
  },
  description:
    "EduFlex is the premier modern course management platform for higher education. Featuring zero-latency lightning-fast, lightweight architecture, automated quiz grading, assignment rubrics, and dedicated Student, Instructor, and Admin portals.",
  keywords: [
    "best course management tools",
    "course management tools for higher education",
    "top learning management system LMS",
    "modern university LMS software",
    "automated assignment grading and rubric tool",
    "secure online quiz and exam platform with timer",
    "fastest learning management system for schools",
    "modern alternative to Canvas LMS",
    "student portal dashboard",
    "EduFlex",
  ],
  authors: [{ name: "EduFlex Academic Systems" }],
  creator: "Richard Maceda Vitug",
  publisher: "EduFlex",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteUrl,
    siteName: "EduFlex LMS",
    title: "EduFlex — Best Course Management Tools & University LMS",
    description:
      "A flexible, high-performance cloud LMS for students, instructors, and university administrators with automated grading and instant course authoring.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EduFlex Course Management Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EduFlex — Best Course Management Tools & University LMS",
    description:
      "Modern lightning-fast, lightweight LMS featuring automated grading, rubric assessments, and instant student dashboards.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "EduFlex LMS",
  operatingSystem: "Web Browser",
  applicationCategory: "EducationalApplication",
  description:
    "The best course management tools and learning management system (LMS) for modern universities and higher education institutions.",
  url: siteUrl,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "142",
    bestRating: "5",
    worstRating: "1",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the best course management tools for higher education?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EduFlex is a modern, high-performance course management platform featuring zero-latency Server Actions, automated grading, rubric assessments, and role-based access for students, instructors, and administrators.",
      },
    },
    {
      "@type": "Question",
      name: "How does EduFlex compare to traditional LMS platforms like Canvas or Moodle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EduFlex is engineered as a lightning-fast, lightweight platform delivering sub-second page loads, automated quiz scoring, cryptographic homework submission receipts (#EDF-2026), and seamless multi-device responsiveness without legacy bloat.",
      },
    },
    {
      "@type": "Question",
      name: "Can university administrators manage course enrollments and user permissions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. EduFlex provides institutional role-based access control (RBAC) with strict email conventions, automated registration approval queues, course catalog administration, and real-time academic grade tracking.",
      },
    },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "EduFlex",
  url: siteUrl,
  description:
    "Modern higher education LMS and course management system engineered for performance.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
