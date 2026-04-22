/**
 * Unified data layer. Pages call these fetchers and don't care whether the
 * data came from Sanity or a stub — the dispatch happens here based on
 * whether `NEXT_PUBLIC_SANITY_PROJECT_ID` is set.
 *
 * Once Phase 1 access work is done (Sanity provisioned, .env.local filled),
 * these fetchers start returning real data with no downstream changes.
 *
 * GROQ queries below are ready but gated on the env var. When they go live,
 * delete the stub branch — don't keep the dual path around.
 */

import type { AboutPage, Gallery, GallerySummary, Homepage, Rate, Testimonial } from "@/lib/types";
import {
  stubAboutPage,
  stubGalleries,
  stubHomepage,
  stubRates,
  stubTestimonials,
} from "@/lib/stub/data";

const sanityLive = Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);

async function fromSanity<T>(_query: string, _params?: Record<string, unknown>): Promise<T> {
  const { sanityClient } = await import("@/lib/sanity/client");
  return sanityClient.fetch(_query, _params, {
    next: { revalidate: 60 },
  });
}

export async function getHomepage(): Promise<Homepage> {
  if (!sanityLive) return stubHomepage;
  const { homepageQuery } = await import("@/lib/sanity/queries");
  return fromSanity<Homepage>(homepageQuery);
}

export async function getGalleries(): Promise<GallerySummary[]> {
  if (!sanityLive) {
    return stubGalleries.map(({ images, ...rest }) => ({
      ...rest,
      frameCount: images.length,
    }));
  }
  const { galleryListQuery } = await import("@/lib/sanity/queries");
  return fromSanity<GallerySummary[]>(galleryListQuery);
}

export async function getGalleryBySlug(slug: string): Promise<Gallery | null> {
  if (!sanityLive) {
    return stubGalleries.find((g) => g.slug === slug) ?? null;
  }
  const { galleryBySlugQuery } = await import("@/lib/sanity/queries");
  return fromSanity<Gallery | null>(galleryBySlugQuery, { slug });
}

export async function getGallerySlugs(): Promise<string[]> {
  if (!sanityLive) return stubGalleries.map((g) => g.slug);
  const { gallerySlugsQuery } = await import("@/lib/sanity/queries");
  return fromSanity<string[]>(gallerySlugsQuery);
}

export async function getAboutPage(): Promise<AboutPage> {
  if (!sanityLive) return stubAboutPage;
  const { aboutPageQuery } = await import("@/lib/sanity/queries");
  return fromSanity<AboutPage>(aboutPageQuery);
}

export async function getTestimonials(): Promise<Testimonial[]> {
  if (!sanityLive) return stubTestimonials;
  const { testimonialsQuery } = await import("@/lib/sanity/queries");
  return fromSanity<Testimonial[]>(testimonialsQuery);
}

export async function getRates(): Promise<Rate[]> {
  if (!sanityLive) return stubRates;
  const { ratesQuery } = await import("@/lib/sanity/queries");
  return fromSanity<Rate[]>(ratesQuery);
}
