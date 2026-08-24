import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { PageHero, Section, SectionHeading } from "@/components/Section";
import { resources } from "@/content/resources";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Help & resources",
  description:
    "Simple guides for UK agencies and employers about worker and business checks.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        title="Help & resources"
        description="Short guides in plain English. Always check official sources for rules that can change."
      />

      <Section tone="surface" className="!pt-0">
        <SectionHeading title="Starter guides" />
        <ul className="grid gap-4 md:grid-cols-2">
          {resources.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/resources/${article.slug}`}
                className="flex h-full cursor-pointer flex-col rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-sm)] transition hover:border-[var(--color-accent)] hover:shadow-[var(--shadow-md)]"
              >
                <h2 className="text-lg font-bold text-[var(--color-primary)]">
                  {article.title}
                </h2>
                <p className="mt-2 flex-1 text-sm text-[var(--color-muted-foreground)]">
                  {article.description}
                </p>
                <p className="mt-4 text-xs text-[var(--color-muted-foreground)]">
                  Reviewed {article.reviewedAt}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <ButtonLink href="/contact">Book a demo</ButtonLink>
        </div>
      </Section>
    </>
  );
}
