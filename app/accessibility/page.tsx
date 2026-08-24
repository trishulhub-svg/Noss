import { LegalDoc } from "@/components/LegalDoc";
import { Section } from "@/components/Section";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Accessibility",
  description:
    "Accessibility information for the NOSS Phase 1 marketing website.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <Section>
      <LegalDoc
        title="Accessibility statement"
        version="2026-08-24"
        sections={[
          {
            heading: "Our aim",
            body: [
              "The NOSS Phase 1 website targets WCAG 2.2 AA as an engineering baseline. Formal accessibility testing results may identify remaining issues to fix.",
            ],
          },
          {
            heading: "Measures we take",
            body: [
              "Semantic headings and landmarks.",
              "Keyboard-accessible navigation and forms.",
              "Visible focus styles.",
              "Text alternatives for meaningful images; decorative images ignored by assistive technology.",
              "Respect for prefers-reduced-motion.",
            ],
          },
          {
            heading: "Known limitations",
            body: [
              "Owner-supplied brand assets or future embedded media may introduce exceptions; those will be listed here when identified.",
            ],
          },
          {
            heading: "Reporting accessibility problems",
            body: [
              "Email info@trishulhub.in with the page URL and a short description of the problem. We will work to respond and improve.",
            ],
          },
        ]}
      />
    </Section>
  );
}
