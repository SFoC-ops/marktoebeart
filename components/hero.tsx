import Image from "next/image";
import type { Homepage } from "@/lib/types";

type Props = {
  homepage: Homepage;
};

/**
 * Full-bleed hero. Splits the hero title on the accent word so the magenta
 * italic + strike-through treatment only lands on that one word. The final
 * period is wrapped in .heavy-stop for the chunky Archivo Black glyph.
 */
export function Hero({ homepage }: Props) {
  const { heroTitle, heroAccentWord, bookingStatus, heroImage } = homepage;

  const lowerTitle = heroTitle.toLowerCase();
  const lowerAccent = heroAccentWord.toLowerCase();
  const accentStart = lowerTitle.indexOf(lowerAccent);
  const hasAccent = accentStart !== -1;

  let before = "";
  let accent = heroAccentWord;
  let after = "";

  if (hasAccent) {
    before = heroTitle.slice(0, accentStart);
    accent = heroTitle.slice(accentStart, accentStart + heroAccentWord.length);
    after = heroTitle.slice(accentStart + heroAccentWord.length);
  } else {
    before = heroTitle;
  }

  const endsWithStop = after.endsWith(".");
  const afterBody = endsWithStop ? after.slice(0, -1) : after;

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-bg)]/60 via-[color:var(--color-bg)]/30 to-[color:var(--color-bg)]"
        />
      </div>

      <div className="mx-auto flex min-h-[88vh] max-w-[var(--container-site)] flex-col justify-end px-5 pb-20 pt-40 md:px-10 md:pb-32 md:pt-56">
        {bookingStatus && (
          <div className="self-start">
            <span className="inline-flex items-center gap-2 border border-[color:var(--color-rule)] bg-[color:var(--color-bg)]/60 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-ink)] backdrop-blur">
              <span aria-hidden className="block h-1.5 w-1.5 animate-pulse rounded-full bg-[color:var(--color-accent)]" />
              {bookingStatus}
            </span>
          </div>
        )}

        <h1 className="mt-8 font-display text-5xl uppercase leading-[0.92] md:mt-12 md:text-9xl">
          {before.trimEnd()}
          {before && " "}
          <span className="accent-italic strike-in">{accent}</span>
          {afterBody && <br />}
          {afterBody.trim()}
          {endsWithStop && <span className="heavy-stop">.</span>}
        </h1>
      </div>
    </section>
  );
}
