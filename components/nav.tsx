"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/rates", label: "Rates" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--color-rule)] bg-[color:var(--color-bg)]/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[var(--container-site)] items-center justify-between px-5 md:h-20 md:px-10">
        <Link
          href="/"
          className="font-display text-lg uppercase tracking-[0.12em] md:text-xl"
          aria-label="Mark Toebaert Media — home"
        >
          Mark <span className="text-[color:var(--color-ink-dim)]">/</span> Toebaert
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8 font-mono text-xs uppercase tracking-[0.18em]">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    isActive(link.href)
                      ? "text-[color:var(--color-accent)]"
                      : "text-[color:var(--color-ink)] transition-colors duration-300 hover:text-[color:var(--color-accent)]"
                  }
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="relative h-10 w-10 md:hidden"
        >
          <span className="sr-only">Menu</span>
          <span
            aria-hidden
            className={`absolute left-2 right-2 top-[14px] h-px bg-current transition-transform duration-300 ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            aria-hidden
            className={`absolute left-2 right-2 top-[20px] h-px bg-current transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            aria-hidden
            className={`absolute left-2 right-2 top-[26px] h-px bg-current transition-transform duration-300 ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 top-16 bottom-0 z-30 bg-[color:var(--color-bg)] md:hidden"
        >
          <nav aria-label="Primary mobile" className="h-full px-5 pt-10">
            <ul className="flex flex-col gap-6 font-display uppercase">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={
                      "text-4xl " +
                      (isActive(link.href)
                        ? "text-[color:var(--color-accent)]"
                        : "text-[color:var(--color-ink)]")
                    }
                    aria-current={isActive(link.href) ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
