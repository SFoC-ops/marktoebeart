import Link from "next/link";

// Placeholder contact & social. Phase 4 wires this to Sanity / verified details
// from Mark. Postal code is the fixed Canadian format (V3A 4G0), not V3A 04G.
const contact = {
  email: "mtoebaertt@gmail.com",
  phone: "778.808.9343",
  address: "Langley, BC V3A 4G0",
  instagram: "https://instagram.com/mark.toebaert",
};

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[color:var(--color-rule)] bg-[color:var(--color-bg-elev)]">
      <div className="mx-auto grid max-w-[var(--container-site)] gap-10 px-5 py-16 md:grid-cols-4 md:px-10 md:py-24">
        <div className="md:col-span-2">
          <p className="font-display text-3xl uppercase leading-none md:text-5xl">
            Let&apos;s make <span className="accent-italic strike-in">something</span>
            <span className="heavy-stop">.</span>
          </p>
          <p className="mt-4 max-w-md text-[color:var(--color-ink-dim)]">
            Festivals, performance, portraits, brand, travel, behind-the-scenes. Based in the
            Fraser Valley, shooting anywhere.
          </p>
        </div>

        <div>
          <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--color-ink-dim)]">
            Contact
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="transition-colors hover:text-[color:var(--color-accent)]"
              >
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${contact.phone.replace(/\./g, "")}`}
                className="transition-colors hover:text-[color:var(--color-accent)]"
              >
                {contact.phone}
              </a>
            </li>
            <li className="text-[color:var(--color-ink-dim)]">{contact.address}</li>
          </ul>
        </div>

        <div>
          <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--color-ink-dim)]">
            Elsewhere
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-[color:var(--color-accent)]"
              >
                Instagram
              </a>
            </li>
            <li>
              <Link
                href="/contact"
                className="transition-colors hover:text-[color:var(--color-accent)]"
              >
                Book a call
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[color:var(--color-rule)]">
        <div className="mx-auto flex max-w-[var(--container-site)] flex-col gap-2 px-5 py-6 text-xs text-[color:var(--color-ink-dim)] md:flex-row md:items-center md:justify-between md:px-10">
          <p>© {new Date().getFullYear()} Mark Toebaert Media.</p>
          <p className="font-mono uppercase tracking-[0.18em]">Not bound by style.</p>
        </div>
      </div>
    </footer>
  );
}
