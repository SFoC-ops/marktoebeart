/**
 * Shared content types. These mirror the shape returned by the GROQ queries
 * in lib/sanity/queries.ts so pages don't care whether data came from Sanity
 * or a stub. Once Sanity is provisioned, nothing about component code
 * changes — the data-layer flips underneath.
 */

export type SanityImage = {
  // For Sanity this is the asset reference; for stubs it's the URL string.
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type Homepage = {
  heroTitle: string;
  heroAccentWord: string;
  bookingStatus: string;
  heroImage: SanityImage;
  featuredTestimonial: Testimonial | null;
};

export type GallerySummary = {
  _id: string;
  title: string;
  slug: string;
  intro: string;
  yearRange?: string;
  tags: string[];
  coverImage: SanityImage;
  frameCount: number;
};

export type GalleryFrame = {
  asset: SanityImage;
  alt: string;
  tag?: string;
  caption?: string;
};

export type Gallery = Omit<GallerySummary, "frameCount"> & {
  images: GalleryFrame[];
};

export type AboutPage = {
  portrait: SanityImage;
  bioParagraphs: string[];
  credentials: { label: string; value: string }[];
  secondaryImage?: SanityImage;
};

export type Testimonial = {
  _id?: string;
  quote: string;
  authorName: string;
  authorTitle?: string;
};

export type Rate = {
  _id: string;
  title: string;
  startingPrice: string;
  description?: string;
  includes?: string[];
};
