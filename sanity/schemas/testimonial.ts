import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "quote",
      type: "text",
      rows: 3,
      validation: (r) => r.required().min(10),
    }),
    defineField({
      name: "authorName",
      title: "Author — full name",
      type: "string",
      description: "Full name. No single-letter initials (e.g. 'Sam Jennings', not 'S. Jennings').",
      validation: (r) =>
        r
          .required()
          .min(3)
          .custom((name) => {
            if (!name) return true;
            if (/^[A-Z]\.? /.test(name)) {
              return "Use the author's full first name, not a single-letter initial.";
            }
            return true;
          }),
    }),
    defineField({
      name: "authorTitle",
      title: "Author — role / company",
      type: "string",
      description: "Optional. e.g. 'Camp Beer Co.'.",
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
  preview: {
    select: { title: "authorName", subtitle: "authorTitle" },
  },
});
