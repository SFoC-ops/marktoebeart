import { defineField, defineType } from "sanity";

export const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "heroImage",
      title: "Hero image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          description: "Describe the image for screen readers. Required.",
          validation: (r) => r.required().min(4),
        }),
      ],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "heroTitle",
      title: "Hero title",
      type: "string",
      initialValue: "Not bound by style.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "heroAccentWord",
      title: "Accent word",
      type: "string",
      description:
        "The single word inside the hero title rendered in magenta italic (e.g. 'bound').",
      initialValue: "bound",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "bookingStatus",
      title: "Booking status",
      type: "string",
      description: "Short capsule shown in the hero corner, e.g. 'Now booking Spring / Summer 2026'.",
    }),
    defineField({
      name: "featuredTestimonial",
      title: "Featured testimonial",
      type: "reference",
      to: [{ type: "testimonial" }],
    }),
  ],
  preview: {
    select: { title: "heroTitle", media: "heroImage" },
    prepare: ({ title, media }) => ({ title: title ?? "Homepage", media }),
  },
});
