import Link from "next/link";
import { LegalDoc } from "@/components/LegalDoc";
import { Section } from "@/components/Section";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Terms",
  description: "Website terms for the NOSS Phase 1 marketing site.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <Section>
      <LegalDoc
        title="Terms of website use"
        version="2026-08-24"
        sections={[
          {
            heading: "About these terms",
            body: [
              "These terms apply to the public NOSS marketing website. They do not create a compliance-services contract by themselves. Service engagements are agreed separately after enquiry.",
              "NOSS UK legal entity details will be inserted once supplied by the owner.",
            ],
          },
          {
            heading: "Website purpose",
            body: [
              "This website explains NOSS services and collects business enquiries. It does not provide live compliance decisions, worker portals, or official government checks.",
            ],
          },
          {
            heading: "Accuracy and service descriptions",
            body: [
              "Service descriptions are informational. Availability of specific checks depends on role, eligibility and applicable requirements.",
              "Official compliance rules can change. Always verify regulated processes against current official sources.",
            ],
          },
          {
            heading: "Intellectual property",
            body: [
              "Website content, branding and design are owned by NOSS / its licensors unless otherwise stated. You may not copy substantial parts for commercial use without permission.",
            ],
          },
          {
            heading: "Acceptable use",
            body: [
              "Do not misuse the enquiry form, attempt to disrupt the site, or submit unlawful content.",
            ],
          },
          {
            heading: "Liability",
            body: [
              "The website is provided for general information and lead capture. To the extent permitted by law, NOSS is not liable for decisions made solely on the basis of marketing-page summaries.",
              "Nothing in these terms excludes liability that cannot lawfully be excluded under UK law.",
            ],
          },
          {
            heading: "Contact",
            body: ["Email: info@trishulhub.in"],
          },
        ]}
      />
      <p className="mt-8 text-sm text-[var(--slate)]">
        Related: <Link className="underline" href="/privacy">Privacy Notice</Link>
      </p>
    </Section>
  );
}
