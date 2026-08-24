import { FeatureList } from "@/components/Cards";
import { PageHero, Section, SectionHeading } from "@/components/Section";
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
        marker="About"
        title="About NOSS"
        description="NOSS is a UK compliance company and agency. We help small recruitment agencies and small/medium companies manage worker and business checks through one controlled service."
      />
      <Section tone="surface">
        <SectionHeading
          title="Our approach"
          description="Built for trust and clear ownership — not hype."
        />
        <FeatureList
          items={[
            {
              title: "People lead",
              description:
                "Trained review stays central when important results need a person to decide.",
            },
            {
              title: "Tools help",
              description:
                "Workflow and reminders cut chasing so missing items show up earlier.",
            },
            {
              title: "Official routes stay official",
              description:
                "Some checks use certified or GOV.UK routes. We do not claim to be government approved or fully automatic.",
            },
            {
              title: "Facts, not filler",
              description:
                "Founder and company history details will be added only when the NOSS owner supplies approved facts.",
            },
          ]}
        />
      </Section>
    </>
  );
}
