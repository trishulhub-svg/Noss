import { ButtonLink } from "@/components/Button";
import { FeatureList } from "@/components/Cards";
import { PageHero, Section, SectionHeading } from "@/components/Section";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Business checks",
  description:
    "NOSS helps with company checks, VAT support, sanctions review help, insurance and policy tracking.",
  path: "/business-compliance",
});

const services = [
  {
    title: "Company checks / KYB",
    description: "Company onboarding support using Companies House data where useful.",
  },
  {
    title: "UK VAT checks",
    description: "VAT number checks where your process needs them.",
  },
  {
    title: "Sanctions review help",
    description:
      "Screening support with human review. A possible match is not an automatic rejection.",
  },
  {
    title: "Insurance and licences",
    description: "Tracking for insurance, accreditations and licence papers.",
  },
  {
    title: "Policy documents",
    description:
      "Help with privacy, health & safety, equality and other policy packs where needed.",
  },
  {
    title: "Registers and contracts",
    description: "Support for risk assessments, contracts, NDAs and DPAs.",
  },
  {
    title: "Client packs",
    description: "Client-ready packs and audit-friendly exports as a service.",
  },
];

export default function BusinessCompliancePage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Business checks without the paper chase"
        description="NOSS helps companies organise company checks, policies and evidence so the work stays visible and ready for audit."
        actions={<ButtonLink href="/contact">Book a demo</ButtonLink>}
      />

      <Section tone="surface">
        <SectionHeading
          title="Business support areas"
          description="Availability depends on what your clients and process need."
        />
        <FeatureList items={services} />
        <p className="mt-8 max-w-2xl text-sm text-[var(--color-muted-foreground)]">
          This website explains the service. Live Companies House, HMRC or
          sanctions engines are not part of Phase 1.
        </p>
        <div className="mt-8">
          <ButtonLink href="/contact">Book a demo</ButtonLink>
        </div>
      </Section>
    </>
  );
}
