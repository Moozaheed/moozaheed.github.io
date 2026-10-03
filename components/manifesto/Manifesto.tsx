import RevealOnScroll from "@/components/ui/RevealOnScroll";

const LINES = ["They are resilient.", "They are understandable.", "They adapt.", "They disappear into the experience."];

export default function Manifesto() {
  return (
    <section className="relative border-t border-border-muted bg-background px-6 py-32 md:px-10 md:py-48">
      <div className="mx-auto max-w-[1200px]">
        <RevealOnScroll>
          <h2 className="text-balance font-display text-[9vw] leading-[1.02] text-text-primary sm:text-[6vw] lg:text-[4.6vw]">
            THE BEST SYSTEMS
            <br />
            ARE NOT THE LOUDEST.
          </h2>
        </RevealOnScroll>

        <div className="mt-16 flex flex-col gap-3 md:ml-[10%] md:mt-20">
          {LINES.map((line, i) => (
            <RevealOnScroll key={line} delay={i * 0.08}>
              <p className="font-sans text-xl text-text-secondary md:text-2xl">{line}</p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
