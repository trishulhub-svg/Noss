import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardList,
  FileCheck2,
  Mail,
  ShieldCheck,
  Users,
} from "lucide-react";
import { FaqList } from "@/components/FaqList";
import { SpotlightCard } from "@/components/SpotlightCard";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "NOSS",
  description:
    "Make worker checks easier to manage. NOSS helps UK agencies and employers organise checks, papers, follow-up and progress.",
  path: "/",
});

const marqueeItems = [
  "Right to Work",
  "DBS support",
  "ID evidence",
  "References",
  "Renewals",
  "Company checks",
  "VAT support",
  "Policy packs",
];

export default function HomePage() {
  return (
    <>
      {/* LAYER 2 — Hero */}
      <section className="relative z-10 overflow-hidden">
        <div
          className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[var(--color-blue-soft)] blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-16 top-32 h-72 w-72 rounded-full bg-white/80 blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto grid max-w-[1600px] gap-10 px-4 pb-12 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:pb-24">
          <div className="animate-fade-up lg:col-span-7">
            <p className="mb-5 inline-flex items-center rounded-full border border-[var(--color-border)] bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted-text)] backdrop-blur">
              UK compliance, kept simple
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-balance text-4xl font-extrabold leading-[0.95] tracking-tighter text-[var(--color-navy)] sm:text-5xl lg:text-6xl xl:text-7xl">
              Make worker checks{" "}
              <span className="relative inline-block">
                easier
                <svg
                  className="draw-underline absolute -bottom-1 left-0 w-full text-[var(--color-navy)]/55 sm:-bottom-2"
                  viewBox="0 0 100 10"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              to manage
            </h1>
            <p className="mt-6 max-w-xl text-base text-[var(--color-muted-text)] sm:text-lg">
              NOSS helps UK agencies and employers organise worker checks,
              business papers, follow-up and progress — in one clear service.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="glass-button group inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full bg-[var(--color-navy)] px-7 text-base font-semibold text-white shadow-[var(--shadow-card)]"
              >
                <span className="button-shine" aria-hidden />
                Book a demo
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
              <Link
                href="/login"
                className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-full border border-[var(--color-border)] bg-white/70 px-7 text-base font-semibold text-[var(--color-navy)] backdrop-blur hover:bg-white"
              >
                Client login
              </Link>
            </div>
          </div>

          {/* Floating cards: desktop only — keep mobile hero text-only */}
          <div className="relative hidden w-full max-w-md lg:col-span-5 lg:mx-0 lg:block lg:max-w-none">
            <div className="relative mx-auto h-[380px] w-full max-w-sm">
              <HeroFloatCard
                className="left-0 top-4 w-[72%] animate-float"
                style={{ animationDelay: "0s" }}
                icon={<Mail size={16} aria-hidden />}
                title="Request sent"
                subtitle="Worker checklist ready"
                badge="Email"
              />
              <HeroFloatCard
                className="right-0 top-[28%] w-[70%] animate-float"
                style={{ animationDelay: "1.5s" }}
                icon={<ShieldCheck size={16} aria-hidden />}
                title="Evidence reviewed"
                subtitle="ID · DBS · references"
                badge="Checks"
              />
              <HeroFloatCard
                className="bottom-2 left-[12%] w-[74%] animate-float"
                style={{ animationDelay: "2.5s" }}
                icon={<ClipboardList size={16} aria-hidden />}
                title="Status updated"
                subtitle="Ready for your record"
                badge="Progress"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LAYER 3 — white foreground */}
      <div className="relative z-20 -mt-2 rounded-t-[28px] bg-white shadow-[0_-20px_40px_rgba(0,0,0,0.02)] sm:rounded-t-[40px]">
        <div className="mx-auto max-w-[1600px] px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
          {/* Stats — qualitative, no fake revenue */}
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[24px] border border-[var(--color-border)] bg-[var(--color-border)] sm:rounded-[28px] lg:grid-cols-4">
            {[
              { value: "UK", label: "Focused on UK checks" },
              { value: "2", label: "Clear service areas" },
              { value: "5", label: "Simple process steps" },
              { value: "1", label: "Place for progress" },
            ].map((stat) => (
              <div key={stat.label} className="bg-neutral-50 p-5 sm:p-8">
                <p className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-[var(--color-navy)] sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-[var(--color-muted-text)]">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Bento services — past layout, clearer info inside */}
          <div className="mt-16 sm:mt-20">
            <div className="mb-8 max-w-2xl">
              <p className="mb-3 inline-flex rounded-full border border-[var(--color-border)] bg-neutral-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted-text)]">
                Services
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--color-navy)] sm:text-4xl">
                Two clear paths. Same calm process.
              </h2>
              <p className="mt-3 text-[var(--color-muted-text)]">
                Pick the path that fits — or talk to us if you need both.
              </p>
            </div>

            <div className="grid auto-rows-fr gap-4 md:grid-cols-2 xl:grid-cols-4">
              {/* Worker checks */}
              <article className="relative flex flex-col overflow-hidden rounded-[24px] bg-[var(--color-navy)] p-5 text-white sm:rounded-[28px] sm:p-6">
                <h3 className="text-xl font-bold">Worker checks</h3>
                <p className="mt-2 text-sm text-white/70">
                  People checks, kept in one clear list.
                </p>
                <div className="mt-5 flex-1 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                    <span className="ml-2 text-[10px] text-white/50">Worker checklist</span>
                  </div>
                  <ul className="space-y-2 p-3 text-xs">
                    {[
                      { label: "Right to Work", status: "Needed" },
                      { label: "ID evidence", status: "Needed" },
                      { label: "DBS / references", status: "Optional" },
                    ].map((row) => (
                      <li
                        key={row.label}
                        className="flex items-center justify-between gap-2 rounded-lg bg-white/5 px-3 py-2.5"
                      >
                        <span className="font-medium">{row.label}</span>
                        <span className="shrink-0 rounded-md bg-white/10 px-2 py-0.5 text-[10px] text-white/80">
                          {row.status}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/workforce-compliance"
                  className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white/90 hover:text-white"
                >
                  Learn more <ArrowRight size={16} aria-hidden />
                </Link>
              </article>

              {/* Business checks */}
              <article className="relative flex flex-col overflow-hidden rounded-[24px] bg-[var(--color-blue-soft)] p-5 sm:rounded-[28px] sm:p-6 md:col-span-2 xl:col-span-2">
                <h3 className="text-xl font-bold text-[var(--color-navy)]">Business checks</h3>
                <p className="mt-2 max-w-lg text-sm text-[var(--color-muted-text)]">
                  Company papers move through three clear stages.
                </p>
                <div className="mt-5 grid flex-1 gap-3 sm:grid-cols-3">
                  {[
                    {
                      step: "1",
                      title: "Request",
                      detail: "Ask for the company check or policy pack.",
                    },
                    {
                      step: "2",
                      title: "Review",
                      detail: "NOSS checks papers and asks for anything missing.",
                    },
                    {
                      step: "3",
                      title: "Ready",
                      detail: "You get a clear record for audit or clients.",
                    },
                  ].map((col) => (
                    <div
                      key={col.title}
                      className="rounded-2xl border border-[var(--color-border)] bg-white p-4 shadow-sm"
                    >
                      <p className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-navy)] text-xs font-bold text-white">
                        {col.step}
                      </p>
                      <p className="mt-3 text-sm font-bold text-[var(--color-navy)]">{col.title}</p>
                      <p className="mt-1.5 text-xs leading-relaxed text-[var(--color-muted-text)]">
                        {col.detail}
                      </p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/business-compliance"
                  className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[var(--color-navy)]"
                >
                  Learn more <ArrowRight size={16} aria-hidden />
                </Link>
              </article>

              {/* Agencies */}
              <article className="relative flex flex-col overflow-hidden rounded-[24px] border border-[var(--color-border)] bg-neutral-50 p-5 sm:rounded-[28px] sm:p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--color-navy)] shadow-sm">
                  <Users size={18} aria-hidden />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-navy)]">For agencies</h3>
                <p className="mt-2 text-sm text-[var(--color-muted-text)]">
                  Many workers. Clear progress. Less chasing.
                </p>
                <div className="mt-5 flex-1 space-y-2">
                  <div className="rounded-2xl bg-white p-3 shadow-sm">
                    <p className="text-xs font-semibold text-[var(--color-navy)]">Agency</p>
                    <p className="mt-1 text-[11px] leading-relaxed text-[var(--color-muted-text)]">
                      We need DBS and Right to Work for 12 new starters.
                    </p>
                  </div>
                  <div className="ml-3 rounded-2xl bg-[var(--color-navy)] p-3 text-white shadow-sm">
                    <p className="text-xs font-semibold">NOSS</p>
                    <p className="mt-1 text-[11px] leading-relaxed text-white/75">
                      Lists sent. We will track missing items for you.
                    </p>
                  </div>
                </div>
                <Link
                  href="/industries/recruitment-agencies"
                  className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[var(--color-navy)]"
                >
                  Learn more <ArrowRight size={16} aria-hidden />
                </Link>
              </article>

              {/* Employers */}
              <article className="relative flex flex-col overflow-hidden rounded-[24px] border border-[var(--color-border)] bg-sky-50/80 p-5 sm:rounded-[28px] sm:p-6 md:col-span-2 xl:col-span-1">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--color-navy)] shadow-sm">
                  <Building2 size={18} aria-hidden />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-navy)]">For employers</h3>
                <p className="mt-2 text-sm text-[var(--color-muted-text)]">
                  New starters and renewals, owned clearly.
                </p>
                <div className="mt-5 flex-1 rounded-2xl border border-[var(--color-border)] bg-white p-4 shadow-sm">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-bold text-[var(--color-navy)]">Starter pack</p>
                      <p className="mt-1 text-xs text-[var(--color-muted-text)]">3 checks open</p>
                    </div>
                    <span className="rounded-full bg-[var(--color-navy)] px-2.5 py-1 text-[10px] font-bold text-white">
                      Active
                    </span>
                  </div>
                  <ul className="mt-3 space-y-1.5 text-xs text-[var(--color-muted-text)]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-[var(--color-navy)]" aria-hidden />
                      ID received
                    </li>
                    <li className="flex items-center gap-2">
                      <ClipboardList size={14} className="text-[var(--color-navy)]" aria-hidden />
                      Right to Work waiting
                    </li>
                    <li className="flex items-center gap-2">
                      <ShieldCheck size={14} className="text-[var(--color-navy)]" aria-hidden />
                      Renewal due later
                    </li>
                  </ul>
                </div>
                <Link
                  href="/industries/employers"
                  className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[var(--color-navy)]"
                >
                  Learn more <ArrowRight size={16} aria-hidden />
                </Link>
              </article>
            </div>
          </div>

          {/* Marquee — service keywords, not fake logos */}
          <div className="mt-16 overflow-hidden border-y border-[var(--color-border)] py-6 sm:mt-20">
            <div className="flex w-max animate-marquee gap-10 pr-10">
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <span
                  key={`${item}-${i}`}
                  className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-navy)] opacity-40 transition hover:opacity-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Solutions spotlight */}
          <div className="mt-16 sm:mt-20">
            <div className="mb-8 text-center">
              <p className="mb-3 inline-flex rounded-full border border-[var(--color-border)] bg-neutral-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted-text)]">
                Our solutions
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--color-navy)] sm:text-4xl">
                Built for trust, not hype
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "People lead",
                  description: "Trained review stays central for important outcomes.",
                  href: "/about",
                },
                {
                  title: "Tools help",
                  description: "Less chasing. Missing items show up earlier.",
                  href: "/how-it-works",
                },
                {
                  title: "Clear records",
                  description: "Evidence is easier to find when audits ask.",
                  href: "/resources",
                },
              ].map((item) => (
                <SpotlightCard key={item.title} className="p-6 sm:p-7">
                  <h3 className="text-xl font-bold text-[var(--color-navy)]">{item.title}</h3>
                  <p className="mt-3 text-sm text-[var(--color-muted-text)]">{item.description}</p>
                  <Link
                    href={item.href}
                    className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[var(--color-navy)]"
                  >
                    Explore <ArrowRight size={16} aria-hidden />
                  </Link>
                </SpotlightCard>
              ))}
            </div>
          </div>

          {/* Dark dashboard preview */}
          <div className="mt-16 sm:mt-20">
            <div className="overflow-hidden rounded-[28px] bg-stone-900 p-5 shadow-[0_30px_60px_rgba(24,24,27,0.25)] sm:rounded-[32px] sm:p-8 lg:p-10">
              <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
                    Preview only
                  </p>
                  <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold text-white sm:text-3xl">
                    Progress you can see
                  </h2>
                </div>
                <p className="text-sm text-white/50">Example only — not live customer data</p>
              </div>

              <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md sm:p-5">
                  <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                    <p className="font-mono text-xs text-white/60">noss-progress.exe</p>
                    <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-white/70">
                      Demo
                    </span>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {[
                      { label: "In progress", value: "12", icon: ClipboardList },
                      { label: "Missing", value: "4", icon: FileCheck2 },
                      { label: "Checked", value: "7", icon: CheckCircle2 },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.label}
                          className="rounded-xl border border-white/10 bg-stone-950/40 p-4"
                        >
                          <div className="flex items-center justify-between">
                            <p className="text-[11px] uppercase tracking-wide text-white/45">
                              {item.label}
                            </p>
                            <Icon size={14} className="text-white/50" aria-hidden />
                          </div>
                          <p className="mt-2 text-3xl font-bold text-white">{item.value}</p>
                          <p className="mt-1 text-[11px] text-white/40">Example numbers</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-[10px] sm:p-5">
                  <p className="mb-3 text-sm font-semibold text-white">Live activity</p>
                  <ul className="space-y-3">
                    {[
                      "Worker list sent",
                      "ID evidence received",
                      "Missing item chased",
                      "Record marked ready",
                    ].map((row) => (
                      <li key={row} className="flex items-center gap-3 text-sm text-white/75">
                        <CheckCircle2 size={16} className="shrink-0 text-emerald-400/80" aria-hidden />
                        {row}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* How it works */}
          <div className="mt-16 sm:mt-20">
            <div className="mb-8 max-w-2xl">
              <p className="mb-3 inline-flex rounded-full border border-[var(--color-border)] bg-neutral-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted-text)]">
                Process
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--color-navy)] sm:text-4xl">
                How it works
              </h2>
              <p className="mt-3 text-[var(--color-muted-text)]">
                A clear path from request to ready records.
              </p>
            </div>
            <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {[
                { title: "You ask", description: "Add a worker or ask for a check." },
                { title: "We tell them", description: "The worker gets a clear list." },
                { title: "They send proof", description: "Upload or follow the official route." },
                { title: "We review", description: "NOSS checks it and asks for fixes." },
                { title: "You track", description: "See progress and get a ready record." },
              ].map((step, index) => (
                <li key={step.title} className="card-lift p-4">
                  <p className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-blue-soft)] text-sm font-bold text-[var(--color-blue)]">
                    {index + 1}
                  </p>
                  <h3 className="mt-3 font-bold text-[var(--color-navy)]">{step.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-muted-text)]">{step.description}</p>
                </li>
              ))}
            </ol>
            <div className="mt-8">
              <Link
                href="/how-it-works"
                className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-full border border-[var(--color-border)] bg-white px-6 text-sm font-semibold text-[var(--color-navy)] hover:bg-neutral-50"
              >
                See the full process
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-16 sm:mt-20">
            <div className="mb-8 max-w-2xl">
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--color-navy)] sm:text-4xl">
                FAQ
              </h2>
            </div>
            <FaqList
              items={[
                {
                  question: "Is my data safe?",
                  answer:
                    "This website only collects business enquiry details. It does not collect worker ID papers or customer check files.",
                },
                {
                  question: "What does the worker do?",
                  answer:
                    "They get a clear list, send what is needed, and we follow up on anything missing.",
                },
                {
                  question: "Do you replace official Right to Work checks?",
                  answer:
                    "No. We help with the process and evidence. Official checks still follow GOV.UK rules where required.",
                },
                {
                  question: "Can you help with DBS?",
                  answer:
                    "Yes, where the role allows it and through the correct route. We check eligibility carefully.",
                },
                {
                  question: "How fast is it?",
                  answer:
                    "It depends on the check and how quickly evidence arrives. We talk through real timings on a demo.",
                },
                {
                  question: "How do I reach you?",
                  answer:
                    "Use the form, email info@trishulhub.in, or call / WhatsApp +91 966210793.",
                },
              ]}
            />
          </div>

          {/* Final CTA */}
          <div className="mt-16 sm:mt-20">
            <div className="rounded-[28px] bg-[var(--color-navy)] px-6 py-12 text-center text-white sm:rounded-[32px] sm:px-10 sm:py-16">
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to talk through your checks?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/70">
                Book a demo and see how NOSS can help your team stay organised.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-7 text-base font-semibold text-[var(--color-navy)] hover:bg-neutral-100"
              >
                Book a demo
                <ArrowRight size={18} aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function HeroFloatCard({
  className,
  style,
  icon,
  title,
  subtitle,
  badge,
}: {
  className?: string;
  style?: CSSProperties;
  icon: ReactNode;
  title: string;
  subtitle: string;
  badge: string;
}) {
  return (
    <div
      className={`glass-panel absolute rounded-2xl p-4 shadow-[var(--shadow-card)] ${className ?? ""}`}
      style={style}
    >
      <div className="flex items-start gap-3">
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--color-navy)] text-white">
          {icon}
        </span>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <p className="truncate text-sm font-bold text-[var(--color-navy)]">{title}</p>
            <span className="rounded-full bg-[var(--color-blue-soft)] px-2 py-0.5 text-[10px] font-semibold text-[var(--color-blue)]">
              {badge}
            </span>
          </div>
          <p className="mt-0.5 truncate text-xs text-[var(--color-muted-text)]">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
