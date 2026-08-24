import Link from "next/link";
import { Section } from "@/components/Section";

export default function NotFound() {
  return (
    <Section>
      <h1 className="text-4xl font-semibold text-[var(--primary-navy)]">Page not found</h1>
      <p className="mt-4 text-[var(--slate)]">
        That page does not exist on the NOSS website.
      </p>
      <p className="mt-6">
        <Link href="/" className="font-semibold text-[var(--action-blue)] underline">
          Return home
        </Link>
      </p>
    </Section>
  );
}
