import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { Section, SectionHeading } from "@/components/Section";
import { resources } from "@/content/resources";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Resources",
  description:
    "Guides and FAQs to help UK recruitment agencies and employers understand workforce and business compliance topics.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <Section>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-[var(--primary-navy)]">
          Resources & help
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-[var(--slate)]">
          Practical explainers for managers. Compliance facts that can change
          should always be checked against official sources.
        </p>
      </Section>

      <Section tone="surface">
        <SectionHeading title="Starter guides" />
        <ul className="grid gap-4 md:grid-cols-2">
          {resources.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/resources/${article.slug}`}
                className="block h-full rounded-lg border border-[var(--border)] bg-white p-5 transition hover:border-[var(--action-blue)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--action-blue)]"
              >
                <h2 className="text-lg font-semibold text-[var(--primary-navy)]">
                  {article.title}
                </h2>
                <p className="mt-2 text-sm text-[var(--slate)]">{article.description}</p>
                <p className="mt-4 text-xs text-[var(--slate)]">
                  Reviewed {article.reviewedAt}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <ButtonLink href="/contact">Book a Demo</ButtonLink>
        </div>
      </Section>
    </>
  );
}
