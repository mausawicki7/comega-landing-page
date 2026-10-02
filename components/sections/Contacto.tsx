"use client";

import { useState, type FormEvent } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import GlassCard from "@/components/ui/GlassCard";

// El sitio es un export estático (sin backend): el envío lo resuelve FormSubmit,
// que reenvía cada consulta a esta casilla. El primer envío dispara un mail de
// activación que hay que confirmar una única vez. Una vez activado, se puede
// reemplazar el email por el alias que entrega FormSubmit para no exponerlo.
const FORM_ENDPOINT = "https://formsubmit.co/ajax/jpucheta@officeone.com";

type Estado = "idle" | "enviando" | "enviado" | "error";

const labelClass =
  "font-heading text-xs uppercase tracking-[0.2em] text-comega-cream/70";
const inputClass =
  "mt-2 w-full rounded-lg border border-white/15 bg-comega-black/40 px-4 py-3 font-body text-base text-comega-cream placeholder:text-comega-cream/35 transition-colors focus:border-comega-gold focus:outline-none";

export default function Contacto() {
  const [estado, setEstado] = useState<Estado>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: si un bot completó el campo oculto, no se envía nada
    if (data.get("_honey")) return;

    setEstado("enviando");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Nombre: data.get("nombre"),
          // FormSubmit usa el campo "email" como reply-to del mensaje
          email: data.get("email"),
          Empresa: data.get("empresa") || "—",
          Comentarios: data.get("comentarios"),
          _subject: "Nueva consulta desde la web del Edificio COMEGA",
          _template: "table",
        }),
      });
      const json = await res.json();
      if (!res.ok || String(json.success) !== "true") {
        throw new Error(json.message);
      }
      form.reset();
      setEstado("enviado");
    } catch {
      setEstado("error");
    }
  }

  return (
    <section
      id="contacto"
      className="w-full bg-comega-black px-6 py-24 md:px-16 md:py-32"
    >
      <div className="mx-auto max-w-2xl">
        <SectionHeading
          number="09"
          eyebrow="Contacto"
          title="Escribinos"
          align="center"
        />
        <p className="mx-auto mt-5 max-w-md text-center font-body text-sm leading-relaxed text-comega-cream/70 md:text-base">
          Contanos qué estás buscando y te respondemos a la brevedad.
        </p>

        <AnimatedReveal delay={0.1}>
          <GlassCard className="mt-12 p-6 md:p-10">
            {estado === "enviado" ? (
              <div role="status" className="py-10 text-center">
                <p className="font-heading text-2xl font-semibold tracking-tight text-comega-cream md:text-3xl">
                  ¡Gracias por escribirnos!
                </p>
                <p className="mt-3 font-body text-sm leading-relaxed text-comega-cream/70 md:text-base">
                  Recibimos tu consulta y te vamos a responder a la brevedad.
                </p>
                <button
                  type="button"
                  onClick={() => setEstado("idle")}
                  className="mt-8 font-body text-sm text-comega-cream/70 underline underline-offset-4 transition-colors hover:text-comega-gold"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="contacto-nombre" className={labelClass}>
                    Nombre
                  </label>
                  <input
                    id="contacto-nombre"
                    name="nombre"
                    type="text"
                    required
                    autoComplete="name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="contacto-email" className={labelClass}>
                    Email
                  </label>
                  <input
                    id="contacto-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={inputClass}
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="contacto-empresa" className={labelClass}>
                    Empresa
                  </label>
                  <input
                    id="contacto-empresa"
                    name="empresa"
                    type="text"
                    autoComplete="organization"
                    className={inputClass}
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="contacto-comentarios" className={labelClass}>
                    Comentarios
                  </label>
                  <textarea
                    id="contacto-comentarios"
                    name="comentarios"
                    rows={5}
                    required
                    className={`${inputClass} resize-y`}
                  />
                </div>

                <input
                  type="text"
                  name="_honey"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />

                <div className="flex flex-col items-center gap-4 md:col-span-2">
                  <button
                    type="submit"
                    disabled={estado === "enviando"}
                    className="w-full rounded-full bg-comega-gold px-8 py-3 font-heading text-sm font-semibold text-comega-black transition-colors hover:bg-comega-bronze disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
                  >
                    {estado === "enviando" ? "Enviando…" : "Enviar consulta"}
                  </button>
                  {estado === "error" && (
                    <p
                      role="alert"
                      className="text-center font-body text-sm text-red-300"
                    >
                      No pudimos enviar tu consulta. Probá de nuevo en unos
                      minutos.
                    </p>
                  )}
                </div>
              </form>
            )}
          </GlassCard>
        </AnimatedReveal>
      </div>
    </section>
  );
}
