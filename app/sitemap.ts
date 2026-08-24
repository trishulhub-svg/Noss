import type { MetadataRoute } from "next";
import { resources } from "@/content/resources";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/workforce-compliance",
    "/business-compliance",
    "/industries/recruitment-agencies",
    "/industries/employers",
    "/how-it-works",
    "/about",
    "/resources",
    "/contact",
    "/privacy",
    "/terms",
    "/cookies",
    "/accessibility",
    "/complaints",
    "/login",
  ];

  const now = new Date();

  return [
    ...staticRoutes.map((path) => ({
      url: absoluteUrl(path),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.7,
    })),
    ...resources.map((article) => ({
      url: absoluteUrl(`/resources/${article.slug}`),
      lastModified: new Date(article.reviewedAt),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
