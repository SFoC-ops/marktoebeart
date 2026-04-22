import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";
import { structure } from "./sanity/structure";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2026-04-01";

export default defineConfig({
  name: "marktoebaertmedia",
  title: "Mark Toebaert Media",
  basePath: "/studio",
  projectId,
  dataset,
  apiVersion,
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
  schema: { types: schemaTypes },
  // Singletons: prevent editors from creating duplicates of the single-page docs.
  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === "global") {
        return prev.filter(
          (template) => template.templateId !== "homepage" && template.templateId !== "aboutPage",
        );
      }
      return prev;
    },
    actions: (prev, { schemaType }) => {
      if (schemaType === "homepage" || schemaType === "aboutPage") {
        return prev.filter(
          ({ action }) => !["duplicate", "delete", "unpublish"].includes(action ?? ""),
        );
      }
      return prev;
    },
  },
});
