import type { SchemaTypeDefinition } from "sanity";
import { homepage } from "./homepage";
import { gallery } from "./gallery";
import { aboutPage } from "./aboutPage";
import { rate } from "./rate";
import { testimonial } from "./testimonial";

export const schemaTypes: SchemaTypeDefinition[] = [
  homepage,
  aboutPage,
  gallery,
  rate,
  testimonial,
];
