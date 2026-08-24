import { describe, expect, it } from "vitest";
import { resources, getResource } from "@/content/resources";
import { navLinks, footerLegalLinks, colors } from "@/lib/site";

describe("phase1 content baseline", () => {
  it("exposes required navigation destinations", () => {
    const hrefs = navLinks.flatMap((l) =>
      "children" in l && l.children ? l.children.map((c) => c.href) : [l.href],
    );
    expect(hrefs).toEqual(
      expect.arrayContaining([
        "/workforce-compliance",
        "/business-compliance",
        "/industries/recruitment-agencies",
        "/industries/employers",
        "/how-it-works",
        "/resources",
        "/about",
        "/contact",
      ]),
    );
  });

  it("links required legal routes", () => {
    const hrefs = footerLegalLinks.map((l) => l.href);
    expect(hrefs).toEqual(
      expect.arrayContaining([
        "/privacy",
        "/terms",
        "/cookies",
        "/accessibility",
        "/complaints",
      ]),
    );
  });

  it("uses approved brand colours", () => {
    expect(colors.primary).toBe("#191A23");
    expect(colors.accent).toBe("#B9FF66");
    expect(colors.lime).toBe("#B9FF66");
  });

  it("provides starter resources with reviewed dates", () => {
    expect(resources.length).toBeGreaterThanOrEqual(5);
    for (const article of resources) {
      expect(article.reviewedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(getResource(article.slug)?.slug).toBe(article.slug);
    }
  });
});
