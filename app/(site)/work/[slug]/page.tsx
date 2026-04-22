import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GalleryMasonry } from "@/components/gallery-masonry";
import { getGalleries, getGalleryBySlug, getGallerySlugs } from "@/lib/data";

type Params = { slug: string };

export async function generateStaticParams() {
  const slugs = await getGallerySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const gallery = await getGalleryBySlug(slug);
  if (!gallery) return {};
  return {
    title: gallery.title,
    description: gallery.intro,
    openGraph: {
      images: [{ url: gallery.coverImage.src, alt: gallery.coverImage.alt }],
    },
  };
}

export default async function GalleryPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const [gallery, all] = await Promise.all([getGalleryBySlug(slug), getGalleries()]);

  if (!gallery) notFound();

  const orderedSlugs = all.map((g) => g.slug);
  const i = orderedSlugs.indexOf(gallery.slug);
  const prevSlug = orderedSlugs[(i - 1 + orderedSlugs.length) % orderedSlugs.length];
  const nextSlug = orderedSlugs[(i + 1) % orderedSlugs.length];
  const prev = all.find((g) => g.slug === prevSlug)!;
  const next = all.find((g) => g.slug === nextSlug)!;

  return (
    <>
      <section className="mx-auto max-w-[var(--container-site)] px-5 pb-12 pt-16 md:px-10 md:pb-20 md:pt-24">
        <Link
          href="/work"
          className="font-mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-ink-dim)] transition-colors hover:text-[color:var(--color-accent)]"
        >
          ← All galleries
        </Link>
        <h1 className="mt-6 font-display text-5xl uppercase leading-[0.95] md:text-8xl">
          {gallery.title}
          <span className="heavy-stop">.</span>
        </h1>
        {gallery.intro && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[color:var(--color-ink-dim)] md:text-lg">
            {gallery.intro}
          </p>
        )}
        <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-[color:var(--color-rule)] pt-6 font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--color-ink-dim)]">
          {gallery.yearRange && (
            <div className="flex gap-2">
              <dt>Years</dt>
              <dd className="text-[color:var(--color-ink)]">{gallery.yearRange}</dd>
            </div>
          )}
          <div className="flex gap-2">
            <dt>Frames</dt>
            <dd className="text-[color:var(--color-ink)]">{gallery.images.length}</dd>
          </div>
          {gallery.tags.length > 0 && (
            <div className="flex gap-2">
              <dt>Tags</dt>
              <dd className="text-[color:var(--color-ink)]">{gallery.tags.join(" · ")}</dd>
            </div>
          )}
        </dl>
      </section>

      <section className="mx-auto max-w-[var(--container-site)] px-5 pb-24 md:px-10 md:pb-32">
        <GalleryMasonry frames={gallery.images} tags={gallery.tags} />
      </section>

      <nav
        aria-label="Gallery navigation"
        className="mx-auto grid max-w-[var(--container-site)] gap-6 border-t border-[color:var(--color-rule)] px-5 py-16 md:grid-cols-2 md:gap-10 md:px-10 md:py-24"
      >
        <Link
          href={`/work/${prev.slug}`}
          className="group block border border-[color:var(--color-rule)] p-6 transition-colors hover:border-[color:var(--color-accent)] md:p-10"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-ink-dim)]">
            ← Previous
          </p>
          <p className="mt-3 font-display text-2xl uppercase md:text-4xl">{prev.title}</p>
        </Link>
        <Link
          href={`/work/${next.slug}`}
          className="group block border border-[color:var(--color-rule)] p-6 text-right transition-colors hover:border-[color:var(--color-accent)] md:p-10"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-ink-dim)]">
            Next →
          </p>
          <p className="mt-3 font-display text-2xl uppercase md:text-4xl">{next.title}</p>
        </Link>
      </nav>
    </>
  );
}
