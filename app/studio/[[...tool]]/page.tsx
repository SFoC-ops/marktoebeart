/**
 * Sanity Studio embedded at /studio. Lives outside the (site) route group so
 * it doesn't inherit Nav/Footer/grain — Studio owns its own shell.
 */
"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
