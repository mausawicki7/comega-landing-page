import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedReveal from "@/components/ui/AnimatedReveal";

const posts = [1, 2, 3, 4, 5, 6];

export default function InstagramFeed() {
  return (
    <section className="w-full bg-comega-charcoal px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading number="06" eyebrow="Instagram" title="COMEGA en el feed" />
          {/* PLACEHOLDER: confirmar handle real de Instagram */}
          <a
            href="#"
            className="font-heading text-sm uppercase tracking-wide text-comega-gold underline underline-offset-4"
          >
            Seguinos @comega.edificio
          </a>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3">
          {posts.map((post, i) => (
            <AnimatedReveal key={post} delay={0.04 * i}>
              {/* PLACEHOLDER: reemplazar por posteo real de Instagram */}
              <div className="group relative aspect-square overflow-hidden rounded-lg bg-[linear-gradient(155deg,_#211d15_0%,_#0b0b0b_70%)]">
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="font-body text-xs text-comega-cream/80">♡ —</span>
                  <span className="font-body text-xs text-comega-cream/80">💬 —</span>
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
