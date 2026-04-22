import { defineField, defineType } from "sanity";

export const rate = defineType({
  name: "rate",
  title: "Rate card",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      description: "e.g. 'Event coverage'.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "startingPrice",
      type: "string",
      description: "e.g. 'from $800 CAD'. Kept as a string so Mark can write copy, not a number.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "includes",
      type: "array",
      of: [{ type: "string" }],
      description: "Bullet list of what's included.",
    }),
    defineField({
      name: "order",
      type: "number",
      validation: (r) => r.required().integer().min(0),
    }),
  ],
  orderings: [
    {
      title: "Manual order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: { select: { title: "title", subtitle: "startingPrice" } },
});
