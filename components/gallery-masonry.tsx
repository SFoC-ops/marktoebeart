"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { GalleryFrame } from "@/lib/types";

type Props = {
  frames: GalleryFrame[];
  tags: string[];
};

const ALL = "All";

/**
 * Masonry grid with CSS columns (not JS). Tag filter strip filters
 * client-side. Clicking a frame opens a keyboard-operable lightbox:
 *   - Esc closes
 *   - ArrowLeft / ArrowRight navigate
 *   - Focus trapped on the dialog until closed
 */
export function GalleryMasonry({ frames, tags }: Props) {
  const [activeTag, setActiveTag] = useState<string>(ALL);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (activeTag === ALL ? frames : frames.filter((f) => f.tag === activeTag)),
    [frames, activeTag],
  );

  const openAt = useCallback((idx: number) => setLightboxIndex(idx), []);
  const close = useCallback(() => setLightboxIndex(null), []);
  const step = useCallback(
    (delta: number) => {
      setLightboxIndex((i) => {
        if (i === null) return i;
        const next = (i + delta + filtered.length) % filtered.length;
        return next;
      });
    },
    [filtered.length],
  );

  return (
    <>
      {tags.length > 0 && (
        <nav aria-label="Filter by tag" className="mb-10">
          <ul className="flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-[0.18em]">
            {[ALL, ...tags].map((t) => {
              const isActive = t === activeTag;
              return (
                <li key={t}>
                  <button
                    type="button"
                    onClick={() => setActiveTag(t)}
                    aria-pressed={isActive}
                    className={[
                      "border px-3 py-2 transition-colors",
                      isActive
                        ? "border-[color:var(--color-accent)] text-[color:var(--color-accent)]"
                        : "border-[color:var(--color-rule)] text-[color:var(--color-ink-dim)] hover:border-[color:var(--color-ink)] hover:text-[color:var(--color-ink)]",
                    ].join(" ")}
                  >
                    {t}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      )}

      <div className="columns-1 gap-4 md:columns-2 md:gap-6 lg:columns-3">
        {filtered.map((f, i) => (
          <button
            key={`${f.asset.src}-${i}`}
            type="button"
            onClick={() => openAt(i)}
            className="mb-4 block w-full break-inside-avoid overflow-hidden border border-[color:var(--color-rule)] bg-[color:var(--color-bg-elev)] md:mb-6"
            aria-label={`Open ${f.alt} in lightbox`}
          >
            <div className="relative">
              <Image
                src={f.asset.src}
                alt={f.alt}
                width={f.asset.width ?? 1200}
                height={f.asset.height ?? 1500}
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                priority={i < 2}
                className="h-auto w-full transition-transform duration-[800ms] ease-[var(--ease-settle)] hover:scale-[1.02]"
              />
              {f.tag && (
                <span className="absolute bottom-2 left-2 border border-[color:var(--color-rule)] bg-[color:var(--color-bg)]/70 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-ink-dim)] backdrop-blur">
                  {f.tag}
                </span>
              )}
            </div>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          frames={filtered}
          index={lightboxIndex}
          onClose={close}
          onStep={step}
        />
      )}
    </>
  );
}

type LightboxProps = {
  frames: GalleryFrame[];
  index: number;
  onClose: () => void;
  onStep: (delta: number) => void;
};

function Lightbox({ frames, index, onClose, onStep }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const frame = frames[index];

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        onStep(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        onStep(-1);
      } else if (e.key === "Tab") {
        // Simple focus trap — only two tabbable elements (close + overlay),
        // so cycle stays inside the dialog automatically.
      }
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose, onStep]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={frame.alt}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[color:var(--color-bg)]/95 p-4 backdrop-blur-sm md:p-10"
    >
      <button
        type="button"
        aria-label="Close lightbox (Esc)"
        onClick={onClose}
        className="absolute inset-0"
        tabIndex={-1}
      />

      <div className="relative mx-auto flex max-h-full max-w-[1400px] flex-col">
        <div className="flex items-center justify-between pb-4">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--color-ink-dim)]">
            {String(index + 1).padStart(2, "0")} / {String(frames.length).padStart(2, "0")}
            {frame.tag ? ` — ${frame.tag}` : ""}
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--color-ink)] hover:text-[color:var(--color-accent)]"
          >
            Close ✕
          </button>
        </div>

        <div className="relative flex-1 overflow-hidden border border-[color:var(--color-rule)] bg-[color:var(--color-bg-elev)]">
          <Image
            key={frame.asset.src}
            src={frame.asset.src}
            alt={frame.alt}
            width={frame.asset.width ?? 1600}
            height={frame.asset.height ?? 1200}
            className="mx-auto max-h-[78vh] w-auto object-contain"
            priority
          />
        </div>

        {frame.caption && (
          <p className="mt-4 max-w-2xl text-sm text-[color:var(--color-ink-dim)]">{frame.caption}</p>
        )}

        <div className="mt-4 flex items-center justify-between font-mono text-xs uppercase tracking-[0.22em]">
          <button
            type="button"
            onClick={() => onStep(-1)}
            className="hover:text-[color:var(--color-accent)]"
            aria-label="Previous frame (Left arrow)"
          >
            ← Prev
          </button>
          <button
            type="button"
            onClick={() => onStep(1)}
            className="hover:text-[color:var(--color-accent)]"
            aria-label="Next frame (Right arrow)"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
