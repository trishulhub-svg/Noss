import { ButtonLink } from "@/components/Button";
import { FeatureList } from "@/components/Cards";
import { Section, SectionHeading } from "@/components/Section";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Business Compliance",
  description:
    "NOSS supports company onboarding, KYB, VAT validation where required, sanctions screening support, insurance and policy document tracking for UK businesses.",
  path: "/business-compliance",
});

const services = [
  {
    title: "Company onboarding / KYB",
    description:
      "Company onboarding support using Companies House data where appropriate.",
  },
  {
    title: "UK VAT validation",
    description: "VAT number validation support where your process requires it.",
  },
  {
    title: "UK sanctions screening support",
    description:
      "Screening support with documented human review. A possible match is not an automatic adverse decision.",
  },
  {
    title: "Insurance, accreditation and licences",
    description:
      "Tracking for business insurance, accreditation and licence documents.",
  },
  {
    title: "Policy and document support",
    description:
      "Support categories can include privacy, data protection, health & safety, equality, anti-bribery, safeguarding, whistleblowing and modern slavery where applicable.",
  },
  {
    title: "Registers and contracts",
    description:
      "Risk assessment, contract/NDA/DPA and compliance-document register support.",
  },
  {
    title: "Client-specific packs",
    description:
      "Client-specific compliance packs and audit-ready evidence export as a service capability and future platform concept.",
  },
];

export default function BusinessCompliancePage() {
  return (
    <>
      <Section>
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--compliance-teal)]">
          Services
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-[var(--primary-navy)]">
          Business compliance without the document chase
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-[var(--slate)]">
          NOSS helps companies organise company checks, policy documents and
          evidence so business compliance work stays visible and audit-ready.
        </p>
        <div className="mt-8">
          <ButtonLink href="/contact">Book a Demo</ButtonLink>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading
          title="Business compliance services"
          description="Wording describes supported service areas. Availability depends on customer needs and applicable requirements."
        />
        <FeatureList items={services} />
        <p className="mt-8 max-w-3xl text-sm text-[var(--slate)]">
          Phase 1 explains these capabilities. Live Companies House, HMRC VAT or
          sanctions automation engines are out of scope for this marketing
          website.
        </p>
        <div className="mt-8">
          <ButtonLink href="/contact">Book a Demo</ButtonLink>
        </div>
      </Section>
    </>
  );
}
