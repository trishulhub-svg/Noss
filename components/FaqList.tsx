"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState, type ReactNode } from "react";

export type FaqItem = { question: string; answer: ReactNode };

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="card-lift divide-y divide-[var(--color-border)] overflow-hidden">
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
          className="tap flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left text-base font-bold text-[var(--color-navy)]"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          <span>{item.question}</span>
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-surface)] text-[var(--color-muted-text)]">
            <ChevronDown
              size={18}
              aria-hidden
              className={`transition ${open ? "rotate-180" : ""}`}
            />
          </span>
        </button>
      </h3>
      {open ? (
        <div id={panelId} className="px-5 pb-5 text-[var(--color-muted-text)]">
          {item.answer}
        </div>
      ) : null}
    </div>
  );
}
