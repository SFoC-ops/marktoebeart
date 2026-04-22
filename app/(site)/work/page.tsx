// Phase 2 builds the real Work landing — 6 gallery tiles from Sanity. This is
// a placeholder so nav links don't 404 during Phase 1.
export default function WorkPage() {
  return (
    <section className="mx-auto max-w-[var(--container-site)] px-5 py-24 md:px-10 md:py-40">
      <h1 className="font-display text-5xl uppercase leading-[0.95] md:text-8xl">Work</h1>
      <p className="mt-6 max-w-xl text-[color:var(--color-ink-dim)]">
        Six galleries land here — festivals & live music, performance & fire, portraits, brand &
        product, travel & landscape, behind the scenes. In build.
      </p>
    </section>
  );
}
