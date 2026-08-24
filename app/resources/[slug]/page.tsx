import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/Button";
import { Section } from "@/components/Section";
import { getResource, resources } from "@/content/resources";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getResource(slug);
  if (!article) return {};
  return createPageMetadata({
    title: article.title,
    description: article.description,
    path: `/resources/${article.slug}`,
  });
}

export default async function ResourceArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getResource(slug);
  if (!article) notFound();

  return (
    <Section>
      <p className="text-sm text-[var(--slate)]">
        <Link href="/resources" className="text-[var(--action-blue)] underline">
          Resources
        </Link>
      </p>
      <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-[var(--primary-navy)]">
        {article.title}
      </h1>
      <p className="mt-3 text-sm text-[var(--slate)]">
        Reviewed {article.reviewedAt}
      </p>
      <div className="mt-8 max-w-3xl space-y-4 text-[var(--text)]">
        {article.body.map((para) => (
          <p key={para.slice(0, 24)}>{para}</p>
        ))}
      </div>
      {article.officialSources?.length ? (
        <div className="mt-10 max-w-3xl rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
          <h2 className="font-semibold text-[var(--primary-navy)]">Official sources</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {article.officialSources.map((source) => (
              <li key={source.href}>
                <a
                  href={source.href}
                  className="text-[var(--action-blue)] underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <div className="mt-10">
        <ButtonLink href="/contact">Book a Demo</ButtonLink>
      </div>
    </Section>
  );
}
