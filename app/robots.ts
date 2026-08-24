import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const env = process.env.NEXT_PUBLIC_SITE_ENV || "development";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://noss.vercel.app";

  if (env !== "production") {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl.replace(/\/$/, "")}/sitemap.xml`,
  };
}
