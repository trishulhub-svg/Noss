import { LegalDoc } from "@/components/LegalDoc";
import { Section } from "@/components/Section";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Cookie Notice",
  description:
    "Cookies and similar technologies used on the NOSS Phase 1 website.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <Section>
      <LegalDoc
        title="Cookie Notice"
        version="2026-08-24"
        sections={[
          {
            heading: "Summary",
            body: [
              "Phase 1 does not include analytics or advertising trackers.",
              "The site may use strictly necessary technologies required to deliver pages securely (for example hosting/platform session or security controls operated by the hosting provider).",
            ],
          },
          {
            heading: "What we do not use in Phase 1",
            body: [
              "No analytics scripts.",
              "No advertising pixels.",
              "No CRM tracking pixels.",
            ],
          },
          {
            heading: "Updates",
            body: [
              "If additional technologies are introduced later, this notice will be updated and consent will be re-assessed where required.",
            ],
          },
          {
            heading: "Contact",
            body: ["Email: info@trishulhub.in"],
          },
        ]}
      />
    </Section>
  );
}
