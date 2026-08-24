import { ButtonLink } from "@/components/Button";
import { PageHero, Section } from "@/components/Section";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About NOSS",
  description:
    "NOSS is a UK compliance company helping agencies and employers manage worker and business checks.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About NOSS"
        description="NOSS is a UK compliance company and agency. We help small recruitment agencies and small/medium companies manage worker and business checks through one controlled service."
      />

      <Section tone="surface">
        <h2 className="text-2xl font-bold text-[var(--color-primary)]">Our approach</h2>
        <div className="mt-5 max-w-2xl space-y-4 text-[var(--color-muted-foreground)]">
          <p>
            Tools help with workflow and reminders. People stay accountable —
            especially when important results need a trained review.
          </p>
          <p>
            Some checks use official or certified routes. We do not claim to be
            government approved or fully automatic.
          </p>
          <p>
            Founder and company history details will be added only when the NOSS
            owner supplies approved facts. We do not invent them here.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/contact">Book a demo</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Contact us
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
