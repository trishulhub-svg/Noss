import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-[var(--color-accent)] text-white shadow-[var(--shadow-sm)] hover:bg-[#0284c7] active:bg-[#0369a1]",
  secondary:
    "bg-white text-[var(--color-primary)] border border-[var(--color-border)] hover:bg-[var(--color-muted)]",
  ghost:
    "bg-transparent text-[var(--color-accent)] hover:underline",
};

const base =
  "inline-flex min-h-[44px] cursor-pointer items-center justify-center gap-2 rounded-xl px-5 py-3 text-base font-semibold transition duration-200 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-60";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
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
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${base} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
