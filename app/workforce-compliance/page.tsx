import { ButtonLink } from "@/components/Button";
import { FeatureList } from "@/components/Cards";
import { PageHero, Section, SectionHeading } from "@/components/Section";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Worker checks",
  description:
    "NOSS helps organise worker checks, evidence, review and follow-up for UK agencies and employers.",
  path: "/workforce-compliance",
});

const services = [
  {
    title: "Right to Work support",
    description:
      "Help collecting and tracking evidence. Official checks still follow GOV.UK rules where needed.",
  },
  {
    title: "ID and document checks",
    description: "Clear requests and review support for identity evidence.",
  },
  {
    title: "DBS help",
    description:
      "Coordination where the role allows it, through the correct DBS route.",
  },
  {
    title: "Work history and references",
    description: "Organised collection so chasing takes less time.",
  },
  {
    title: "Address proof",
    description: "Support for address history and proof where required.",
  },
  {
    title: "Qualifications and registrations",
    description: "Evidence checks for certificates and professional registrations.",
  },
  {
    title: "Licences and training",
    description: "Tracking for role licences, driving proof or training where needed.",
  },
  {
    title: "Renewals and re-checks",
    description: "Help spotting renewals early so dates are harder to miss.",
  },
];

export default function WorkforceCompliancePage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Worker checks, kept organised"
        description="NOSS helps with worker checks, evidence, review and follow-up so your team can see progress without drowning in email."
        actions={<ButtonLink href="/contact">Book a demo</ButtonLink>}
      />

      <Section tone="surface">
        <SectionHeading
          title="What we help with"
          description="These are service areas. Not every check applies to every role."
        />
        <FeatureList items={services} />
      </Section>

      <Section>
        <SectionHeading title="A simple process" />
        <ol className="grid gap-3 sm:grid-cols-2 md:grid-cols-5">
          {[
            "You ask",
            "Worker acts",
            "NOSS reviews",
            "Fixes if needed",
            "Status is tracked",
          ].map((step, i) => (
            <li
              key={step}
              className="rounded-2xl border border-[var(--color-border)] bg-white p-4 shadow-[var(--shadow-sm)]"
            >
              <p className="text-sm font-bold text-[var(--color-verified)]">{i + 1}</p>
              <p className="mt-2 font-semibold text-[var(--color-primary)]">{step}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-2xl text-[var(--color-muted-foreground)]">
          Official routes are used where required. Important results may need a
          trained person. We do not claim fully automatic checks or government
          endorsement.
        </p>
        <div className="mt-8">
          <ButtonLink href="/contact">Book a demo</ButtonLink>
        </div>
      </Section>
    </>
  );
}
