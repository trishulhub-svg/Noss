/** Animated pencil underline — hero titles only */
export function DrawUnderline({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`relative inline-block text-[var(--color-navy)] ${className}`}>
      {children}
      <svg
        className="draw-underline absolute -bottom-0.5 left-0 w-full text-[var(--color-navy)] sm:-bottom-1"
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
    </span>
  );
}

/** Underline the last word of a hero title */
export function TitleWithUnderline({ title }: { title: string }) {
  const parts = title.trim().split(/\s+/);
  if (parts.length === 0) return null;
  if (parts.length === 1) return <DrawUnderline>{parts[0]}</DrawUnderline>;
  const last = parts[parts.length - 1];
  const head = parts.slice(0, -1).join(" ");
  return (
    <>
      {head} <DrawUnderline>{last}</DrawUnderline>
    </>
  );
}
