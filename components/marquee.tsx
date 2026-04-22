/**
 * Infinite-scroll marquee of service categories. Duplicated track so the
 * loop looks seamless; `prefers-reduced-motion` pauses it via globals.css.
 */
const CATEGORIES = [
  "Festivals & Live",
  "Performance & Fire",
  "Portraits",
  "Brand & Product",
  "Travel & Landscape",
  "Behind the Scenes",
];

export function Marquee() {
  const items = [...CATEGORIES, ...CATEGORIES];
  return (
    <div
      className="relative overflow-hidden border-y border-[color:var(--color-rule)] py-6"
      aria-hidden
    >
      <div className="marquee-track flex min-w-max gap-16 whitespace-nowrap font-display text-2xl uppercase tracking-[0.06em] text-[color:var(--color-ink-dim)] md:text-4xl">
        {items.map((cat, i) => (
          <span key={i} className="flex shrink-0 items-center gap-16">
            <span>{cat}</span>
            <span className="text-[color:var(--color-ink-faint)]">—</span>
          </span>
        ))}
      </div>
      <style>{`
        .marquee-track {
          animation: marquee-scroll 40s linear infinite;
        }
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
