import { ButtonLink } from "@/components/Button";
import { Section } from "@/components/Section";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About NOSS",
  description:
    "NOSS is a UK compliance-native company and agency helping recruitment agencies and employers manage workforce and business compliance.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Section>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-[var(--primary-navy)]">
          About NOSS
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-[var(--slate)]">
          NOSS is a UK compliance-native company and agency. We help small
          recruitment agencies and small/medium companies manage end-to-end
          workforce and business compliance through a controlled, accountable
          service.
        </p>
      </Section>

      <Section tone="surface">
        <h2 className="text-2xl font-semibold text-[var(--primary-navy)]">
          Our approach
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-[var(--slate)]">
          <p>
            Technology assists workflow, reminders and visibility. Human
            accountability remains central — especially where significant
            compliance outcomes need trained review.
          </p>
          <p>
            Some checks use official or certified third-party routes. NOSS does
            not claim to be government approved or to deliver fully automated
            compliance decisions.
          </p>
          <p>
            Founder, team and company-history details will be published only
            after the NOSS UK owner supplies approved facts. This page does not
            invent those details.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/contact">Book a Demo</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Contact NOSS
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
