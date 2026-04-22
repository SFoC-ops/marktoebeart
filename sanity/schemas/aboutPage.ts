import { defineField, defineType } from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About page",
  type: "document",
  fields: [
    defineField({
      name: "portrait",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          validation: (r) => r.required().min(4),
        }),
      ],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "bioParagraphs",
      title: "Bio",
      type: "array",
      of: [{ type: "block", styles: [{ title: "Normal", value: "normal" }] }],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "credentials",
      type: "array",
      of: [
        {
          type: "object",
          name: "credential",
          fields: [
            defineField({
              name: "label",
              type: "string",
              description: "e.g. 'Based in'.",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "value",
              type: "string",
              description: "e.g. 'Langley, BC'.",
              validation: (r) => r.required(),
            }),
          ],
          preview: { select: { title: "label", subtitle: "value" } },
        },
      ],
    }),
    defineField({
      name: "secondaryImage",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          validation: (r) => r.required().min(4),
        }),
      ],
      description: "Optional second image lower on the page for visual rhythm.",
    }),
  ],
  preview: {
    prepare: () => ({ title: "About page" }),
  },
});
