import Link from "next/link";
import { Section } from "@/components/Section";

export default function NotFound() {
  return (
    <Section className="!pt-16">
      <h1 className="text-4xl font-extrabold text-[var(--color-primary)]">Page not found</h1>
      <p className="mt-4 text-[var(--color-muted-foreground)]">
        That page is not on the NOSS website.
      </p>
      <p className="mt-6">
        <Link
          href="/"
          className="font-bold text-[var(--color-accent)] underline"
        >
          Go home
        </Link>
      </p>
    </Section>
  );
}
