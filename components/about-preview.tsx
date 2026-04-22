import Image from "next/image";
import Link from "next/link";
import type { AboutPage } from "@/lib/types";

type Props = { about: AboutPage };

export function AboutPreview({ about }: Props) {
  const first = about.bioParagraphs[0];
  const teaser = first.length > 240 ? first.slice(0, 240).trimEnd() + "…" : first;

  return (
    <section className="mx-auto grid max-w-[var(--container-site)] gap-10 px-5 py-24 md:grid-cols-12 md:gap-14 md:px-10 md:py-32">
      <div className="md:col-span-5">
        <div className="relative aspect-[4/5] overflow-hidden border border-[color:var(--color-rule)]">
          <Image
            src={about.portrait.src}
            alt={about.portrait.alt}
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
      <div className="md:col-span-7 md:pt-10">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--color-ink-dim)]">
          About
        </p>
        <h2 className="mt-4 font-display text-4xl uppercase leading-[0.95] md:text-6xl">
          A photographer without a <span className="accent-italic">comfortable</span> lane
          <span className="heavy-stop">.</span>
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:var(--color-ink-dim)] md:text-lg">
          {teaser}
        </p>
        <Link
          href="/about"
          className="mt-8 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--color-ink)] transition-colors hover:text-[color:var(--color-accent)]"
        >
          Read more
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
