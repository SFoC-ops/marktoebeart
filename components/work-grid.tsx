import Image from "next/image";
import Link from "next/link";
import type { GallerySummary } from "@/lib/types";

type Props = {
  galleries: GallerySummary[];
  /**
   * "home" renders 6 smaller tiles on a 2/3 col grid; "full" renders larger
   * tiles used on /work with hover-reveal intro copy.
   */
  variant?: "home" | "full";
};

export function WorkGrid({ galleries, variant = "home" }: Props) {
  const gridClasses =
    variant === "home"
      ? "grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
      : "grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10";

  return (
    <ul className={gridClasses}>
      {galleries.map((g, i) => (
        <li key={g._id}>
          <Link
            href={`/work/${g.slug}`}
            className="group relative block overflow-hidden border border-[color:var(--color-rule)] bg-[color:var(--color-bg-elev)]"
          >
            <div className={variant === "full" ? "aspect-[4/5]" : "aspect-[4/3]"}>
              <Image
                src={g.coverImage.src}
                alt={g.coverImage.alt}
                fill
                sizes={
                  variant === "full"
                    ? "(min-width: 768px) 50vw, 100vw"
                    : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                }
                className="object-cover transition-transform duration-[800ms] ease-[var(--ease-settle)] group-hover:scale-[1.02]"
                priority={i < 2}
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-bg)]/90 via-[color:var(--color-bg)]/20 to-transparent"
              />
            </div>

            <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-ink-dim)]">
                {String(i + 1).padStart(2, "0")} / {String(galleries.length).padStart(2, "0")}
                {" — "}
                {g.frameCount} frames
              </p>
              <h3 className="mt-2 font-display text-2xl uppercase leading-tight md:text-4xl">
                {g.title}
              </h3>
              {variant === "full" && g.intro && (
                <p className="mt-3 max-w-md translate-y-2 text-sm text-[color:var(--color-ink-dim)] opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {g.intro}
                </p>
              )}
              {g.tags.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-ink-dim)]">
                  {g.tags.slice(0, 4).map((t) => (
                    <li key={t} className="border border-[color:var(--color-rule)] px-2 py-1">
                      {t}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
