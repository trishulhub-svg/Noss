import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-[var(--color-blue)] text-white hover:bg-[#1d4ed8] border border-[var(--color-blue)]",
  secondary:
    "bg-white text-[var(--color-navy)] border border-[var(--color-border)] hover:bg-[var(--color-surface)]",
  ghost:
    "bg-transparent text-[var(--color-blue)] hover:underline border border-transparent",
};

const base =
  "inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-xl px-6 py-3 text-base font-semibold transition duration-200 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-blue)] disabled:cursor-not-allowed disabled:opacity-60";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  /** `lime` kept as alias to primary for older call sites */
  variant?: Variant | "lime";
  className?: string;
}) {
  const resolved: Variant = variant === "lime" ? "primary" : variant;
  return (
    <Link href={href} className={`${base} ${styles[resolved]} ${className}`}>
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  disabled,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant | "lime";
}) {
  const resolved: Variant = variant === "lime" ? "primary" : variant;
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${base} ${styles[resolved]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function LearnMoreLink({
  href,
  label = "Learn more",
}: {
  href: string;
  label?: string;
  dark?: boolean;
}) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-[44px] cursor-pointer items-center gap-3 font-semibold text-[var(--color-navy)]"
    >
      <span
        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-blue-soft)] text-[var(--color-blue)]"
        aria-hidden
      >
        <ArrowRight size={18} />
      </span>
      <span>{label}</span>
    </Link>
  );
}

export function Marker({ children }: { children: ReactNode }) {
  return <span className="marker">{children}</span>;
}
