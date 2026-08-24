import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteShell } from "@/components/SiteShell";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  ...createPageMetadata({
    title: siteConfig.name,
    description: siteConfig.description,
    path: "/",
  }),
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://noss.co.uk"),
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${inter.variable} antialiased`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
