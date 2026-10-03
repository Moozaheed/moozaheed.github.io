import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import PhotoGrid from "./PhotoGrid";
import { photographs } from "@/data/photography";

export default function Photography() {
  return (
    <section id="photography" className="relative border-t border-border-muted bg-background px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel index="07" label="Photography" />

        <RevealOnScroll>
          <h2 className="text-balance font-display text-[11vw] leading-[0.98] text-text-primary sm:text-[7vw] lg:text-[5vw]">
            WHEN I&apos;M NOT BUILDING.
            <br />
            <span className="text-accent-warm">I LOOK.</span>
          </h2>
        </RevealOnScroll>

        <div className="mt-16">
          {photographs.length === 0 ? (
            <RevealOnScroll>
              <div className="border border-dashed border-border-muted px-8 py-20 text-center">
                <p className="label-mono text-text-secondary">Photographs will appear here soon.</p>
              </div>
            </RevealOnScroll>
          ) : (
            <PhotoGrid photos={photographs} />
          )}
        </div>
      </div>
    </section>
  );
}
