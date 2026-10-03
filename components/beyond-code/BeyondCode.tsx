import RevealOnScroll from "@/components/ui/RevealOnScroll";
import AmbientCanvas from "@/components/three/AmbientCanvasLazy";

export default function BeyondCode() {
  return (
    <section className="relative overflow-hidden border-t border-border-muted bg-surface px-6 py-32 md:px-10 md:py-44">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <AmbientCanvas color="#8faf8b" count={140} />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(circle at 50% 50%, transparent 30%, #121614 85%)" }}
        />
      </div>

      <div className="relative mx-auto max-w-[1100px] text-center">
        <RevealOnScroll>
          <p className="text-balance font-display text-[9vw] leading-[1.1] text-text-primary sm:text-[6vw] lg:text-[3.6vw]">
            Technology teaches me
            <br />
            how systems connect.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.15}>
          <p className="mt-8 text-balance font-display text-[9vw] leading-[1.1] text-accent-nature sm:text-[6vw] lg:text-[3.6vw]">
            Nature reminds me
            <br />
            they already do.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
