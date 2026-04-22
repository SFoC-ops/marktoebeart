import type { Testimonial } from "@/lib/types";

type Props = { testimonial: Testimonial; className?: string };

export function TestimonialCard({ testimonial, className = "" }: Props) {
  return (
    <figure className={className}>
      <blockquote>
        <p className="font-display text-3xl uppercase leading-[1.08] md:text-5xl">
          “{testimonial.quote}”
        </p>
      </blockquote>
      <figcaption className="mt-6 font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--color-ink-dim)]">
        {testimonial.authorName}
        {testimonial.authorTitle ? ` — ${testimonial.authorTitle}` : ""}
      </figcaption>
    </figure>
  );
}
