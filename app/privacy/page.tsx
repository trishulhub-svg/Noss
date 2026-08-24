import Link from "next/link";
import { LegalDoc } from "@/components/LegalDoc";
import { Section } from "@/components/Section";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Privacy Notice",
  description:
    "How the NOSS marketing website handles business enquiry data in Phase 1.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <Section>
      <LegalDoc
        title="Privacy Notice"
        version="2026-08-24"
        sections={[
          {
            heading: "Who we are",
            body: [
              "This Privacy Notice explains how the NOSS Phase 1 marketing website handles personal data collected through enquiry forms.",
              "NOSS UK legal entity details (registered name, company number if applicable, and registered/business address) will be published here once supplied by the owner. Until then, contact the business mailbox below for privacy queries.",
            ],
          },
          {
            heading: "Contact for privacy queries",
            body: [
              "Email: info@trishulhub.in",
              "Phone / WhatsApp: +91 966210793",
            ],
          },
          {
            heading: "What data we collect",
            body: [
              "Business enquiry data only: name, work email, company name, optional phone, optional company size, service interests, optional message, privacy acknowledgement, optional marketing consent, source page, and operational metadata such as timestamps and notification status.",
              "We do not collect worker identity documents, Right to Work documents, DBS certificates or customer compliance records through this public website.",
            ],
          },
          {
            heading: "Why we process it",
            body: [
              "To respond to demo/contact enquiries and operate the lead-capture service you requested.",
              "Optional marketing messages are sent only if you separately consent. Marketing consent is not required to submit an enquiry.",
              "Lawful bases will be confirmed with the owner before production freeze. Typical bases for this type of form are steps prior to a contract / legitimate interests for service enquiries, and consent for optional marketing.",
            ],
          },
          {
            heading: "Where data is stored and who receives it",
            body: [
              "Enquiry records are stored in a Turso database operated for NOSS.",
              "Notification emails are sent to info@trishulhub.in using the configured server-side email mechanism.",
              "Hosting is on Vercel. Processors may change only with an updated notice.",
            ],
          },
          {
            heading: "Retention",
            body: [
              "A final statutory retention period has not been fixed in the source requirements. Phase 1 adopts this business rule until the owner replaces it: enquiry records are retained while needed to handle the enquiry and related follow-up, then reviewed periodically for deletion or anonymisation when no longer required.",
            ],
          },
          {
            heading: "Your rights",
            body: [
              "Depending on applicable UK data protection law, you may have rights to access, rectification, erasure, restriction, objection and complaint to the ICO.",
              "To exercise rights relating to website enquiries, email info@trishulhub.in.",
            ],
          },
          {
            heading: "Cookies and analytics",
            body: [
              "Phase 1 does not include analytics. See the Cookie Notice for technologies actually used.",
            ],
          },
        ]}
      />
      <p className="mt-8 text-sm text-[var(--slate)]">
        Related: <Link className="underline" href="/cookies">Cookie Notice</Link> ·{" "}
        <Link className="underline" href="/terms">Terms</Link> ·{" "}
        <Link className="underline" href="/complaints">Complaints</Link>
      </p>
    </Section>
  );
}
