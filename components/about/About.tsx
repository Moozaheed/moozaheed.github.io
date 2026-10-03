import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Portrait from "./Portrait";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="relative border-t border-border-muted bg-background px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel index="01" label="About" />

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <RevealOnScroll>
              <h2 className="text-balance font-display text-[9vw] leading-[1.05] text-text-primary sm:text-[6vw] lg:text-[3.6vw]">
                I BUILD THE INVISIBLE SYSTEMS
                <br />
                BEHIND VISIBLE PRODUCTS.
              </h2>
            </RevealOnScroll>

            <div className="mt-10 flex flex-col gap-5 md:max-w-[46rem]">
              {profile.bio.map((p, i) => (
                <RevealOnScroll key={i} delay={i * 0.06}>
                  <p className="text-lg leading-relaxed text-text-secondary">{p}</p>
                </RevealOnScroll>
              ))}
            </div>

            <RevealOnScroll delay={0.1}>
              <ul className="mt-10 flex flex-wrap gap-x-3 gap-y-3">
                {profile.highlights.map((h) => (
                  <li key={h} className="label-mono rounded-full border border-border-muted px-4 py-2 text-text-secondary">
                    {h}
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          </div>

          <div className="lg:col-span-5">
            <RevealOnScroll y={20}>
              <Portrait />
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
