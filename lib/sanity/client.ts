import { createClient } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2026-04-01";

// Public read client — used from server components. Cached at the Next.js
// fetch layer via `next: { revalidate }` on individual queries.
export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
});

// Authenticated client — read token required. Use for draft previews or any
// call that needs non-public data. Keep server-only (never ship the token to
// the client).
export const sanityReadClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: "previewDrafts",
  token: process.env.SANITY_API_READ_TOKEN,
});
