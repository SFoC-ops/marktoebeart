import Link from "next/link";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { WorkGrid } from "@/components/work-grid";
import { AboutPreview } from "@/components/about-preview";
import { TestimonialCard } from "@/components/testimonial-card";
import { getAboutPage, getGalleries, getHomepage } from "@/lib/data";

const CLIENTS = [
  "Camp Beer Co.",
  "Basscoast",
  "INIT Festival",
  "Shambhala",
  "Enabling Arts",
  "Fraser Valley Co-op",
];

export default async function HomePage() {
  const [homepage, galleries, about] = await Promise.all([
    getHomepage(),
    getGalleries(),
    getAboutPage(),
  ]);

  return (
    <>
      <Hero homepage={homepage} />
      <Marquee />

      <section className="mx-auto max-w-[var(--container-site)] px-5 py-24 md:px-10 md:py-32">
        <header className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--color-ink-dim)]">
              Selected work
            </p>
            <h2 className="mt-3 font-display text-4xl uppercase leading-[0.95] md:text-6xl">
              Ten years, one camera,
              <br />
              <span className="accent-italic">no lane</span>
              <span className="heavy-stop">.</span>
            </h2>
          </div>
          <Link
            href="/work"
            className="self-start font-mono text-xs uppercase tracking-[0.22em] transition-colors hover:text-[color:var(--color-accent)] md:self-end"
          >
            All work →
          </Link>
        </header>
        <WorkGrid galleries={galleries} variant="home" />
      </section>

      <AboutPreview about={about} />

      <section className="border-y border-[color:var(--color-rule)] bg-[color:var(--color-bg-elev)]">
        <div className="mx-auto max-w-[var(--container-site)] px-5 py-10 md:px-10 md:py-14">
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-ink-dim)]">
            Trusted by
          </p>
          <ul className="flex flex-wrap items-center gap-x-10 gap-y-4 font-display text-xl uppercase text-[color:var(--color-ink-dim)] md:text-3xl">
            {CLIENTS.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      {homepage.featuredTestimonial && (
        <section className="mx-auto max-w-[var(--container-site)] px-5 py-24 md:px-10 md:py-32">
          <TestimonialCard
            testimonial={homepage.featuredTestimonial}
            className="mx-auto max-w-4xl"
          />
        </section>
      )}

      <section className="relative overflow-hidden border-t border-[color:var(--color-rule)]">
        <div className="mx-auto flex max-w-[var(--container-site)] flex-col items-start gap-10 px-5 py-24 md:px-10 md:py-40">
          <h2 className="font-display text-5xl uppercase leading-[0.92] md:text-9xl">
            Let&apos;s make <span className="accent-italic strike-in">something</span>
            <span className="heavy-stop">.</span>
          </h2>
          <div className="flex flex-col gap-3 font-mono text-xs uppercase tracking-[0.22em] md:flex-row md:gap-8">
            <a
              href="mailto:mtoebaertt@gmail.com"
              className="border border-[color:var(--color-ink)] px-6 py-4 transition-colors hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
            >
              mtoebaertt@gmail.com →
            </a>
            <Link
              href="/contact"
              className="border border-[color:var(--color-rule)] px-6 py-4 transition-colors hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
            >
              Book a call →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
