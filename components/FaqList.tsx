"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState, type ReactNode } from "react";

export type FaqItem = { question: string; answer: ReactNode };

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-[var(--color-border)] overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-[var(--shadow-sm)]">
      {items.map((item) => (
        <FaqRow key={item.question} item={item} />
      ))}
    </div>
  );
}

function FaqRow({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div>
      <h3>
        <button
          type="button"
          className="tap flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left text-base font-bold text-[var(--color-primary)]"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          <span>{item.question}</span>
          <ChevronDown
            size={20}
            aria-hidden
            className={`shrink-0 text-[var(--color-muted-foreground)] transition ${open ? "rotate-180" : ""}`}
          />
        </button>
      </h3>
      {open ? (
        <div id={panelId} className="px-5 pb-5 text-[var(--color-muted-foreground)]">
          {item.answer}
        </div>
      ) : null}
    </div>
  );
}
