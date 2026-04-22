import type { AboutPage, Gallery, Homepage, Rate, Testimonial } from "@/lib/types";

/**
 * Placeholder content for the six galleries. Swapped out once Mark delivers
 * real selects and they're ingested into Sanity. Picsum seeds are chosen so
 * the imagery stays visually distinct per category.
 */

const img = (seed: string, w: number, h: number, alt: string) => ({
  src: `https://picsum.photos/seed/${seed}/${w}/${h}`,
  alt,
  width: w,
  height: h,
});

function frames(prefix: string, tags: string[], count: number) {
  const aspects: [number, number][] = [
    [1200, 1500], // tall portrait
    [1600, 1000], // landscape
    [1200, 1200], // square
    [1600, 1200], // standard
    [1200, 1800], // extra tall
    [1800, 1200], // wide
  ];
  return Array.from({ length: count }, (_, i) => {
    const [w, h] = aspects[i % aspects.length];
    const tag = tags[i % tags.length];
    return {
      asset: img(`${prefix}-${i}`, w, h, `${prefix} frame ${i + 1}`),
      alt: `${prefix} frame ${i + 1} — placeholder stub`,
      tag,
      caption: undefined,
    };
  });
}

export const stubGalleries: Gallery[] = [
  {
    _id: "g-festivals",
    title: "Festivals & Live Music",
    slug: "festivals-live-music",
    intro:
      "Ten years of stage lights, crowd surges, and 3 AM festival magic. Shot across BC and Alberta — Basscoast, INIT, Shambhala, and the loud edges in between.",
    yearRange: "2016 — 2026",
    tags: ["Basscoast", "Shambhala", "INIT", "Crowd"],
    coverImage: img("festivals-cover", 1600, 1200, "Festival crowd bathed in magenta stage light"),
    images: frames("festivals", ["Basscoast", "Shambhala", "INIT", "Crowd"], 16),
  },
  {
    _id: "g-performance",
    title: "Performance & Fire",
    slug: "performance-fire",
    intro:
      "Fire spinners, aerialists, flow artists. Long exposures, tight timing, and the kind of frames you only get one chance at.",
    yearRange: "2018 — 2026",
    tags: ["Fire", "Aerial", "Flow", "Dance"],
    coverImage: img("performance-cover", 1600, 1200, "Fire performer mid-spin against a dark sky"),
    images: frames("performance", ["Fire", "Aerial", "Flow", "Dance"], 14),
  },
  {
    _id: "g-portraits",
    title: "Portraits",
    slug: "portraits",
    intro:
      "People as themselves. Studio, environmental, on-location. Natural light when I can, every light when I can't.",
    yearRange: "2017 — 2026",
    tags: ["Studio", "Environmental", "Editorial"],
    coverImage: img("portraits-cover", 1200, 1500, "Close-up portrait with soft window light"),
    images: frames("portraits", ["Studio", "Environmental", "Editorial"], 14),
  },
  {
    _id: "g-brand",
    title: "Brand & Product",
    slug: "brand-product",
    intro:
      "Commercial work across the Fraser Valley. Includes day-to-day marketing photography for Camp Beer Co. and one-off brand campaigns for local independents.",
    yearRange: "2019 — 2026",
    tags: ["Camp Beer", "Product", "Lifestyle", "Campaign"],
    coverImage: img("brand-cover", 1600, 1000, "Brand shot of a glass pint in warm late light"),
    images: frames("brand", ["Camp Beer", "Product", "Lifestyle", "Campaign"], 12),
  },
  {
    _id: "g-travel",
    title: "Travel & Landscape",
    slug: "travel-landscape",
    intro:
      "Landscape and street work from further-afield trips. The Pacific / Light series — shown at Enabling Arts, Vancouver — lives in here.",
    yearRange: "2019 — 2026",
    tags: ["Pacific / Light", "Coast", "Mountain", "Street"],
    coverImage: img("travel-cover", 1600, 1000, "Pacific coastline with fog rolling across a headland"),
    images: frames("travel", ["Pacific / Light", "Coast", "Mountain", "Street"], 14),
  },
  {
    _id: "g-bts",
    title: "Behind the Scenes",
    slug: "behind-the-scenes",
    intro:
      "The real work — setup shots, gear, the quiet moment before the set starts. Less curated than the rest of the portfolio and that's the point.",
    tags: ["Rigging", "Crew", "Setup"],
    coverImage: img("bts-cover", 1600, 1200, "Crew rigging lights backstage before a set"),
    images: frames("bts", ["Rigging", "Crew", "Setup"], 10),
  },
];

export const stubTestimonials: Testimonial[] = [
  {
    _id: "t-1",
    quote:
      "Mark is creative, hardworking, and supremely talented. The passion with which he creates is infectious to everyone around him. He is my go-to for all photography work.",
    authorName: "Alex Dizon",
    authorTitle: "Camp Beer Co.",
  },
  {
    _id: "t-2",
    quote:
      "Every festival we've worked together Mark has come back with frames I didn't think were possible. He finds the shot nobody else sees.",
    authorName: "Sam Jennings",
    authorTitle: "Basscoast Festival",
  },
  {
    _id: "t-3",
    quote:
      "The Pacific / Light show was the most complete body of travel work I've seen from a local photographer in years. Honest, patient, and unhurried.",
    authorName: "Jordan Lee",
    authorTitle: "Enabling Arts, Vancouver",
  },
];

export const stubHomepage: Homepage = {
  heroTitle: "Not bound by style.",
  heroAccentWord: "bound",
  bookingStatus: "Now booking — Spring / Summer 2026",
  heroImage: img(
    "hero-mark",
    2400,
    1500,
    "Performer lit by a single stage spotlight against a dark crowd",
  ),
  featuredTestimonial: stubTestimonials[0],
};

export const stubAboutPage: AboutPage = {
  portrait: img(
    "mark-portrait",
    1200,
    1500,
    "Mark Toebaert, mid-thirties, photographed against a plain studio background",
  ),
  bioParagraphs: [
    "I'm Mark. I'm a photographer based in Langley, BC, working across festivals, performance, portraits, brand, travel, and behind-the-scenes. I came up shooting live music — Basscoast, INIT, Shambhala — and the festival work is still the loudest cluster in my portfolio, but it's not the only work.",
    "By day I'm marketing lead at Camp Beer Co., which means my commercial eye stays sharp on real brand work year-round. In 2023 my travel series Pacific / Light opened at Enabling Arts in Vancouver. I'm still based in the Fraser Valley, and still taking new clients.",
  ],
  credentials: [
    { label: "Based in", value: "Langley, BC" },
    { label: "Shooting since", value: "2016" },
    { label: "Recent show", value: "Pacific / Light, Enabling Arts" },
    { label: "Day role", value: "Marketing lead, Camp Beer Co." },
  ],
  secondaryImage: img(
    "mark-second",
    1600,
    1000,
    "Mark behind the camera at a live festival set, mid-shoot",
  ),
};

export const stubRates: Rate[] = [
  {
    _id: "r-event",
    title: "Event coverage",
    startingPrice: "from $800 CAD",
    description: "Festivals, launches, brand activations. Half-day and full-day rates.",
    includes: ["Pre-event call", "On-site coverage", "Edited web-ready gallery", "Commercial usage"],
  },
  {
    _id: "r-portrait",
    title: "Portraits",
    startingPrice: "from $450 CAD",
    description: "Studio or environmental. Individuals, couples, or small teams.",
    includes: ["90-minute session", "Two looks", "Retouched final selects", "Print release"],
  },
  {
    _id: "r-brand",
    title: "Brand & product",
    startingPrice: "from $1,200 CAD",
    description: "Day-rate commercial work for independents and small brands.",
    includes: ["Creative direction call", "Shot list alignment", "Full-day shoot", "Licensed gallery"],
  },
];
