import { defineArrayMember, defineField, defineType } from "sanity";

export const gallery = defineType({
  name: "gallery",
  title: "Gallery",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 80 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      description: "Lower numbers appear first on the Work page.",
      validation: (r) => r.required().integer().min(0),
    }),
    defineField({
      name: "coverImage",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          validation: (r) => r.required().min(4),
        }),
      ],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "intro",
      type: "text",
      rows: 3,
      description: "One-paragraph description shown on the gallery page header.",
    }),
    defineField({
      name: "yearRange",
      title: "Year range",
      type: "string",
      description: "Optional. e.g. '2019 — 2026'.",
    }),
    defineField({
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      description: "Used as filter pills on the gallery page.",
    }),
    defineField({
      name: "images",
      type: "array",
      of: [
        defineArrayMember({
          name: "frame",
          type: "object",
          fields: [
            defineField({
              name: "asset",
              type: "image",
              options: { hotspot: true },
              validation: (r) => r.required(),
            }),
            defineField({
              name: "alt",
              title: "Alt text",
              type: "string",
              validation: (r) => r.required().min(4),
            }),
            defineField({
              name: "tag",
              type: "string",
              description:
                "Must match one of the gallery tags to appear under that filter pill.",
            }),
            defineField({ name: "caption", type: "string" }),
          ],
          preview: {
            select: { title: "alt", subtitle: "tag", media: "asset" },
          },
        }),
      ],
    }),
  ],
  orderings: [
    {
      title: "Manual order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "yearRange", media: "coverImage" },
  },
});
