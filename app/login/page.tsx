import { ButtonLink } from "@/components/Button";
import { Section } from "@/components/Section";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Login",
  description:
    "NOSS client and service portals will be available in later phases. Contact support if you need help today.",
  path: "/login",
});

export default function LoginPage() {
  return (
    <Section>
      <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-[var(--primary-navy)]">
        Client login
      </h1>
      <p className="mt-5 max-w-3xl text-lg text-[var(--slate)]">
        The customer portal (app.noss.co.uk) and internal service portal
        (service.noss.co.uk) are later-phase applications. They are not live in
        Phase 1, so this page does not send you to a broken destination.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6">
          <h2 className="text-xl font-semibold text-[var(--primary-navy)]">
            Client portal
          </h2>
          <p className="mt-3 text-sm text-[var(--slate)]">
            Planned location: app.noss.co.uk
          </p>
          <p className="mt-4 rounded-md bg-white px-3 py-3 text-sm text-[var(--text)]">
            Portal not yet available. Please contact support if you need help
            with an existing NOSS engagement.
          </p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6">
          <h2 className="text-xl font-semibold text-[var(--primary-navy)]">
            NOSS service portal
          </h2>
          <p className="mt-3 text-sm text-[var(--slate)]">
            Planned location: service.noss.co.uk
          </p>
          <p className="mt-4 rounded-md bg-white px-3 py-3 text-sm text-[var(--text)]">
            Portal not yet available. Staff access will be enabled in a later
            phase.
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/contact">Contact support</ButtonLink>
        <ButtonLink href="/contact" variant="secondary">
          Book a Demo
        </ButtonLink>
      </div>
    </Section>
  );
}
