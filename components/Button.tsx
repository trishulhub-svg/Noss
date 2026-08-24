import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-[var(--action-blue)] text-white hover:bg-[#1d4ed8] focus-visible:outline-[var(--action-blue)]",
  secondary:
    "bg-white text-[var(--primary-navy)] border border-[var(--border)] hover:bg-[var(--surface)] focus-visible:outline-[var(--action-blue)]",
  ghost:
    "bg-transparent text-[var(--action-blue)] hover:underline focus-visible:outline-[var(--action-blue)]",
};

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
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-md px-5 py-3 text-base font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${styles[variant]} ${className}`}
    >
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
      className={`inline-flex items-center justify-center rounded-md px-5 py-3 text-base font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60 ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
