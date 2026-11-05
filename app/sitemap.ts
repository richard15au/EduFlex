import type { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://eduflex.edu";

  // Core public routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/login`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/register`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Dynamic course pages from Neon DB
  try {
    const courses = await prisma.course.findMany({
      where: { status: "ACTIVE" },
      select: { code: true, updatedAt: true },
    });

    const courseRoutes: MetadataRoute.Sitemap = courses.map((course) => ({
      url: `${baseUrl}/courses/${course.code.toLowerCase()}`,
      lastModified: course.updatedAt,
      changeFrequency: "weekly",
      priority: 0.9,
    }));

    return [...staticRoutes, ...courseRoutes];
  } catch (error) {
    console.error("[sitemap generation fallback]:", error);
    return staticRoutes;
  }
}
