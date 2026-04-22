// Temporary type-test page for verifying Unica One / Archivo / JetBrains Mono
// load correctly across weights. Per PLAN.md § Phase 1 — delete before launch.
export default function TypeTestPage() {
  return (
    <div className="mx-auto max-w-[var(--container-site)] px-5 py-20 md:px-10">
      <header className="mb-16 border-b border-[color:var(--color-rule)] pb-10">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--color-ink-dim)]">
          /test-type — delete before launch
        </p>
        <h1 className="mt-4 font-display text-5xl uppercase md:text-7xl">Type stack check</h1>
      </header>

      <section className="mb-16">
        <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--color-ink-dim)]">
          Unica One — display
        </h2>
        <p className="font-display text-6xl uppercase leading-none md:text-9xl">
          Not <span className="accent-italic strike-in">bound</span> by style<span className="heavy-stop">.</span>
        </p>
      </section>

      <section className="mb-16 grid gap-6 border-t border-[color:var(--color-rule)] pt-10 md:grid-cols-2">
        <div>
          <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--color-ink-dim)]">
            Archivo — body
          </h2>
          <p className="text-base font-normal">
            400 / regular. The quick brown fox jumps over the lazy dog.
          </p>
          <p className="text-base font-medium">
            500 / medium. The quick brown fox jumps over the lazy dog.
          </p>
          <p className="text-base font-bold">
            700 / bold. The quick brown fox jumps over the lazy dog.
          </p>
          <p className="text-base font-black">
            900 / black. The quick brown fox jumps over the lazy dog.
          </p>
          <p className="text-base font-black italic">
            900 italic. The quick brown fox jumps over the lazy dog.
          </p>
        </div>

        <div>
          <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--color-ink-dim)]">
            JetBrains Mono — captions
          </h2>
          <p className="font-mono text-sm uppercase tracking-[0.18em]">
            frame_0042 — basscoast 2024
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--color-ink-dim)]">
            now booking — spring / summer 2026
          </p>
          <pre className="mt-4 font-mono text-sm">
{`const shoot = "festival";
const frames = 247;
const mood = "loud";`}
          </pre>
        </div>
      </section>

      <section className="border-t border-[color:var(--color-rule)] pt-10">
        <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--color-ink-dim)]">
          Colour tokens
        </h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            ["bg", "var(--color-bg)"],
            ["bg-elev", "var(--color-bg-elev)"],
            ["ink", "var(--color-ink)"],
            ["ink-dim", "var(--color-ink-dim)"],
            ["ink-faint", "var(--color-ink-faint)"],
            ["accent", "var(--color-accent)"],
            ["accent-2", "var(--color-accent-2)"],
            ["accent-3", "var(--color-accent-3)"],
          ].map(([name, value]) => (
            <div
              key={name}
              className="rounded border border-[color:var(--color-rule)] p-4"
            >
              <div
                className="mb-3 h-16 rounded"
                style={{ background: value as string }}
              />
              <p className="font-mono text-xs uppercase tracking-[0.15em]">{name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
