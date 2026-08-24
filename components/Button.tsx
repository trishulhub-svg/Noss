import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "lime" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-[var(--color-black)] text-white hover:bg-[#2b2c35] border border-[var(--color-black)]",
  secondary:
    "bg-white text-[var(--color-black)] border border-[var(--color-black)] hover:bg-[var(--color-gray)]",
  lime:
    "bg-[var(--color-lime)] text-[var(--color-black)] border border-[var(--color-black)] hover:bg-[var(--color-lime-deep)]",
  ghost:
    "bg-transparent text-[var(--color-black)] hover:underline border border-transparent",
};

const base =
  "inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-xl px-6 py-3 text-base font-bold transition duration-200 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-lime)] disabled:cursor-not-allowed disabled:opacity-60";

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

export function LearnMoreLink({
  href,
  label = "Learn more",
  dark = false,
}: {
  href: string;
  label?: string;
  dark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-[44px] cursor-pointer items-center gap-3 font-semibold ${
        dark ? "text-white" : "text-[var(--color-black)]"
      }`}
    >
      <span
        className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-black)] ${
          dark
            ? "bg-[var(--color-lime)] text-[var(--color-black)]"
            : "bg-[var(--color-black)] text-white"
        }`}
        aria-hidden
      >
        <ArrowRight size={18} />
      </span>
      <span className={dark ? "text-[var(--color-lime)]" : undefined}>{label}</span>
    </Link>
  );
}

export function Marker({ children }: { children: ReactNode }) {
  return <span className="marker">{children}</span>;
}
