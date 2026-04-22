import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAboutPage } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mark Toebaert, Fraser Valley photographer — festivals, performance, portraits, brand, travel, and behind-the-scenes work. Marketing lead at Camp Beer Co.",
};

export default async function AboutPage() {
  const about = await getAboutPage();

  return (
    <>
      <section className="mx-auto grid max-w-[var(--container-site)] gap-10 px-5 pb-24 pt-16 md:grid-cols-12 md:gap-16 md:px-10 md:pb-32 md:pt-28">
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden border border-[color:var(--color-rule)]">
            <Image
              src={about.portrait.src}
              alt={about.portrait.alt}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="md:col-span-7 md:pt-12">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--color-ink-dim)]">
            About
          </p>
          <h1 className="mt-4 font-display text-5xl uppercase leading-[0.95] md:text-7xl">
            A photographer without a <span className="accent-italic">comfortable</span> lane
            <span className="heavy-stop">.</span>
          </h1>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-[color:var(--color-ink)] md:text-lg">
            {about.bioParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {about.credentials.length > 0 && (
        <section className="border-y border-[color:var(--color-rule)] bg-[color:var(--color-bg-elev)]">
          <dl className="mx-auto grid max-w-[var(--container-site)] gap-6 px-5 py-12 md:grid-cols-4 md:gap-10 md:px-10 md:py-16">
            {about.credentials.map((c) => (
              <div key={c.label} className="flex flex-col gap-2">
                <dt className="font-mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-ink-dim)]">
                  {c.label}
                </dt>
                <dd className="font-display text-2xl uppercase leading-tight md:text-3xl">
                  {c.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {about.secondaryImage && (
        <section className="mx-auto max-w-[var(--container-site)] px-5 py-24 md:px-10 md:py-32">
          <div className="relative aspect-[16/9] overflow-hidden border border-[color:var(--color-rule)]">
            <Image
              src={about.secondaryImage.src}
              alt={about.secondaryImage.alt}
              fill
              sizes="(min-width: 1024px) 80vw, 100vw"
              className="object-cover"
            />
          </div>
        </section>
      )}

      <section className="mx-auto max-w-[var(--container-site)] px-5 pb-24 md:px-10 md:pb-40">
        <div className="flex flex-col items-start gap-8 border-t border-[color:var(--color-rule)] pt-12 md:pt-16">
          <h2 className="font-display text-4xl uppercase leading-[0.95] md:text-6xl">
            Still taking new <span className="accent-italic">clients</span>
            <span className="heavy-stop">.</span>
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 border border-[color:var(--color-ink)] px-6 py-4 font-mono text-xs uppercase tracking-[0.22em] transition-colors hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
          >
            Get in touch →
          </Link>
        </div>
      </section>
    </>
  );
}
