/** Decorative hero artwork — abstract compliance workflow graphic */
export function HeroIllustration() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-md"
      aria-hidden
    >
      <div className="absolute inset-[8%] rounded-full border border-[var(--color-black)]/15" />
      <div className="absolute inset-[18%] rounded-full border border-[var(--color-black)]/10" />
      <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-[var(--color-black)] bg-[var(--color-lime)] shadow-[var(--shadow-card)] sm:h-48 sm:w-48" />
      <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-[var(--color-black)] bg-white sm:h-32 sm:w-32">
        <svg viewBox="0 0 64 64" className="h-16 w-16" fill="none">
          <path
            d="M18 12h20l8 8v32a4 4 0 0 1-4 4H18a4 4 0 0 1-4-4V16a4 4 0 0 1 4-4Z"
            stroke="#191A23"
            strokeWidth="2.5"
          />
          <path d="M38 12v8h8" stroke="#191A23" strokeWidth="2.5" />
          <path
            d="M22 30h16M22 38h12M22 46h8"
            stroke="#191A23"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="46" cy="44" r="10" fill="#B9FF66" stroke="#191A23" strokeWidth="2" />
          <path
            d="M42 44.5 44.8 47.2 50 42"
            stroke="#191A23"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {[
        { top: "8%", left: "12%", label: "ID" },
        { top: "18%", right: "8%", label: "DBS" },
        { bottom: "22%", left: "6%", label: "RTW" },
        { bottom: "12%", right: "14%", label: "OK" },
      ].map((chip) => (
        <span
          key={chip.label}
          className="absolute inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-black)] bg-white text-xs font-extrabold shadow-[var(--shadow-card)]"
          style={
            {
              top: chip.top,
              left: chip.left,
              right: chip.right,
              bottom: chip.bottom,
            } as Record<string, string | undefined>
          }
        >
          {chip.label}
        </span>
      ))}
    </div>
  );
}
