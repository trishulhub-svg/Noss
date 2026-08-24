import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://noss.vercel.app";
const siteEnv = process.env.NEXT_PUBLIC_SITE_ENV || "development";

export function absoluteUrl(path = "/"): string {
  const base = siteUrl.replace(/\/$/, "");
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${base}${clean === "/" ? "" : clean}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  noIndex,
}: {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}): Metadata {
  const fullTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;
  const url = absoluteUrl(path);
  const robots =
    noIndex || siteEnv === "staging" || siteEnv === "development"
      ? { index: false, follow: false }
      : { index: true, follow: true };

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    robots,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_GB",
      type: "website",
      images: [{ url: absoluteUrl("/og-default.png"), width: 1200, height: 630, alt: "NOSS" }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl("/og-default.png")],
    },
  };
}

export { siteUrl, siteEnv };
