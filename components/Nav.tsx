"use client";

import { useState } from "react";

const links = [
  { href: "#historia", label: "Historia" },
  { href: "#vistas", label: "Vistas Icónicas" },
  { href: "#marcas", label: "Marcas" },
  { href: "#contacto", label: "Contacto" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-4 top-4 z-50 md:inset-x-8 md:top-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-comega-gold/15 bg-comega-charcoal/70 px-5 py-3 backdrop-blur-md md:px-7">
        <a
          href="#"
          className="font-heading text-lg font-semibold uppercase tracking-wide text-comega-cream"
        >
          Comega
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-comega-cream/70 transition-colors hover:text-comega-gold"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          className="hidden rounded-full bg-comega-gold px-5 py-2 font-heading text-sm font-semibold text-comega-black transition-colors hover:bg-comega-bronze md:inline-block"
        >
          Alquilar oficina
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
          aria-expanded={open}
          className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className="h-px w-5 bg-comega-cream" />
          <span className="h-px w-5 bg-comega-cream" />
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-2xl border border-comega-gold/15 bg-comega-charcoal/95 p-4 backdrop-blur-md md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 font-body text-sm text-comega-cream/80 hover:bg-white/5 hover:text-comega-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-lg bg-comega-gold px-3 py-2 text-center font-heading text-sm font-semibold text-comega-black"
          >
            Alquilar oficina
          </a>
        </div>
      )}
    </header>
  );
}
