import { groq } from "next-sanity";

export const homepageQuery = groq`
  *[_type == "homepage"][0]{
    heroTitle,
    heroAccentWord,
    bookingStatus,
    "heroImage": heroImage{..., "alt": alt},
    "featuredTestimonial": featuredTestimonial->{ quote, authorName, authorTitle }
  }
`;

export const galleryListQuery = groq`
  *[_type == "gallery"] | order(order asc){
    _id,
    title,
    "slug": slug.current,
    intro,
    yearRange,
    tags,
    "coverImage": coverImage{..., "alt": alt},
    "frameCount": count(images)
  }
`;

export const galleryBySlugQuery = groq`
  *[_type == "gallery" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    intro,
    yearRange,
    tags,
    "coverImage": coverImage{..., "alt": alt},
    images[]{
      "asset": asset,
      alt,
      tag,
      caption
    }
  }
`;

export const gallerySlugsQuery = groq`
  *[_type == "gallery" && defined(slug.current)][].slug.current
`;

export const aboutPageQuery = groq`
  *[_type == "aboutPage"][0]{
    "portrait": portrait{..., "alt": alt},
    bioParagraphs,
    credentials,
    "secondaryImage": secondaryImage{..., "alt": alt}
  }
`;

export const ratesQuery = groq`
  *[_type == "rate"] | order(order asc){
    _id,
    title,
    startingPrice,
    description,
    includes
  }
`;

export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(order asc){
    _id,
    quote,
    authorName,
    authorTitle
  }
`;
