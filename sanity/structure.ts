import type { StructureResolver } from "sanity/structure";

// Keep the sidebar readable for Mark — singletons up top, collections below.
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Homepage")
        .child(
          S.editor().id("homepage").schemaType("homepage").documentId("homepage"),
        ),
      S.listItem()
        .title("About page")
        .child(
          S.editor().id("aboutPage").schemaType("aboutPage").documentId("aboutPage"),
        ),
      S.divider(),
      S.documentTypeListItem("gallery").title("Galleries"),
      S.documentTypeListItem("rate").title("Rate cards"),
      S.documentTypeListItem("testimonial").title("Testimonials"),
    ]);
