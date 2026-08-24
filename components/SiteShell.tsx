import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col bg-[var(--color-background)]">
      {/* LAYER 0 — fixed grid */}
      <div
        className="grid-lines pointer-events-none fixed inset-0 z-0 h-full min-h-screen"
        aria-hidden
      />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:shadow"
      >
        Skip to main content
      </a>

      {/* LAYER 1 — fixed glass header */}
      <Header />

      <main id="main-content" className="relative z-10 flex-1 pt-16 sm:pt-[4.25rem]">
        {children}
      </main>

      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
}
