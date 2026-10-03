import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import RadialDiagram from "./RadialDiagram";
import DNAAccordion from "./DNAAccordion";
import AmbientCanvas from "@/components/three/AmbientCanvasLazy";

export default function EngineeringDNA() {
  return (
    <section id="engineering-dna" className="relative overflow-hidden border-t border-border-muted bg-background px-6 py-28 md:px-10 md:py-36">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <AmbientCanvas color="#7dd3c7" count={80} />
      </div>

      <div className="relative mx-auto max-w-[1400px]">
        <SectionLabel index="02" label="Engineering DNA" />

        <RevealOnScroll>
          <h2 className="max-w-3xl text-balance font-display text-[8vw] leading-[1.05] text-text-primary sm:text-[5vw] lg:text-[3.2vw]">
            One engineer. Five disciplines that overlap constantly.
          </h2>
        </RevealOnScroll>

        <p className="label-mono mt-4 max-w-md text-text-secondary">
          Explore how each discipline connects to the work.
        </p>

        <div className="mt-16">
          <RevealOnScroll>
            <RadialDiagram />
          </RevealOnScroll>
          <DNAAccordion />
        </div>
      </div>
    </section>
  );
}
