"use client";

import { useId, useState, type ReactNode } from "react";

export type FaqItem = { question: string; answer: ReactNode };

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-[var(--border)] rounded-lg border border-[var(--border)] bg-white">
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
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-[var(--primary-navy)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--action-blue)]"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          <span>{item.question}</span>
          <span aria-hidden className="text-[var(--slate)]">
            {open ? "−" : "+"}
          </span>
        </button>
      </h3>
      {open ? (
        <div id={panelId} className="px-5 pb-5 text-[var(--slate)]">
          {item.answer}
        </div>
      ) : null}
    </div>
  );
}
