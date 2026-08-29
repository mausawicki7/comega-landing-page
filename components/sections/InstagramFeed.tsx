import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import post1 from "@/public/images/instagram/post-1.webp";
import post2 from "@/public/images/instagram/post-2.webp";
import post3 from "@/public/images/instagram/post-3.webp";
import post4 from "@/public/images/instagram/post-4.webp";
import post5 from "@/public/images/instagram/post-5.webp";
import post6 from "@/public/images/instagram/post-6.webp";
import post7 from "@/public/images/instagram/post-7.webp";
import post8 from "@/public/images/instagram/post-8.webp";
import post9 from "@/public/images/instagram/post-9.webp";

const posts = [post1, post2, post3, post4, post5, post6, post7, post8, post9];

export default function InstagramFeed() {
  return (
    <section className="w-full bg-comega-charcoal px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading number="06" eyebrow="Instagram" title="COMEGA en el feed" />
          <a
            href="https://www.instagram.com/edificiocomega/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading text-sm uppercase tracking-wide text-comega-gold underline underline-offset-4"
          >
            Seguinos @edificiocomega
          </a>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3">
          {posts.map((post, i) => (
            <AnimatedReveal key={i} delay={0.04 * i}>
              <div className="group relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={post}
                  alt="Posteo de Instagram del edificio COMEGA"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 50vw"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-comega-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
