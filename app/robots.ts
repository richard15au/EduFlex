import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://eduflex.edu";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/login", "/register", "/courses"],
        disallow: ["/student/", "/instructor/", "/admin/", "/api/"],
      },
      {
        userAgent: "Googlebot",
        allow: ["/", "/login", "/register", "/courses"],
        disallow: ["/student/", "/instructor/", "/admin/", "/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
