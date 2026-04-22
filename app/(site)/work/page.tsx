import type { Metadata } from "next";
import { WorkGrid } from "@/components/work-grid";
import { getGalleries } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Six galleries across festivals, performance, portraits, brand, travel, and behind-the-scenes work.",
};

export default async function WorkPage() {
  const galleries = await getGalleries();

  return (
    <section className="mx-auto max-w-[var(--container-site)] px-5 py-24 md:px-10 md:py-32">
      <header className="mb-16 border-b border-[color:var(--color-rule)] pb-12 md:mb-24">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--color-ink-dim)]">
          Work
        </p>
        <h1 className="mt-4 font-display text-5xl uppercase leading-[0.95] md:text-8xl">
          Six lanes, one <span className="accent-italic strike-in">photographer</span>
          <span className="heavy-stop">.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[color:var(--color-ink-dim)] md:text-lg">
          Organised by how I actually shoot — not a generic event-photographer taxonomy. Festival
          work is the loudest cluster, but it&apos;s not the only cluster.
        </p>
      </header>

      <WorkGrid galleries={galleries} variant="full" />
    </section>
  );
}
