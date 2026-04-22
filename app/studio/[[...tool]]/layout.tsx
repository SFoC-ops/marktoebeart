import type { Metadata, Viewport } from "next";
import {
  metadata as studioMetadata,
  viewport as studioViewport,
} from "next-sanity/studio";

export const metadata: Metadata = studioMetadata;
export const viewport: Viewport = studioViewport;

// Studio owns its own look — no Nav / Footer / grain overlay.
export default function StudioLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
