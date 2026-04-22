// Phase 1 placeholder home. Real hero / marquee / work grid lands in Phase 2
// once Sanity has real homepage content and gallery covers to render.
export default function HomePage() {
  return (
    <section className="mx-auto max-w-[var(--container-site)] px-5 py-24 md:px-10 md:py-40">
      <p className="font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--color-ink-dim)]">
        Mark Toebaert Media
      </p>
      <h1 className="mt-6 font-display text-5xl uppercase leading-[0.95] md:text-8xl">
        Not <span className="accent-italic">bound</span>
        <br />
        by style.
      </h1>
      <p className="mt-8 max-w-xl text-lg text-[color:var(--color-ink-dim)] md:text-xl">
        Fraser Valley photographer shooting festivals, performance, portraits, brand, travel,
        and behind-the-scenes. New site in build — full portfolio coming soon.
      </p>
    </section>
  );
}
