"use client";

import type { MouseEvent, ReactNode } from "react";

/** Spotlight hover gradient — updates CSS custom properties on the card */
export function handleSpotlight(event: MouseEvent<HTMLElement>) {
  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;
  card.style.setProperty("--mouse-x", `${x}%`);
  card.style.setProperty("--mouse-y", `${y}%`);
}

export function SpotlightCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`spotlight-card card-lift ${className}`}
      onMouseMove={handleSpotlight}
    >
      {children}
    </div>
  );
}
