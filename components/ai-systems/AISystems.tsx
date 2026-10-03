import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import ArchitectureDiagram from "@/components/project-detail/ArchitectureDiagram";

const CAPABILITIES = ["Context Engineering", "RAG", "LLMs", "Multi-Agent Workflows", "AI-DLC", "Prompt Engineering"];

export default function AISystems() {
  return (
    <section id="ai-systems" className="relative border-t border-border-muted bg-surface px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1200px]">
        <SectionLabel index="05" label="AI / Systems" />

        <RevealOnScroll>
          <h2 className="max-w-3xl text-balance font-display text-[8vw] leading-[1.05] text-text-primary sm:text-[5vw] lg:text-[3.4vw]">
            I don&apos;t just use AI.
            <br />
            <span className="text-accent-tech">I engineer around it.</span>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <ul className="mt-10 flex flex-wrap gap-3">
            {CAPABILITIES.map((c) => (
              <li key={c} className="label-mono rounded-full border border-border-muted px-4 py-2 text-text-secondary">
                {c}
              </li>
            ))}
          </ul>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <div className="mt-20">
            <p className="label-mono mb-6 text-text-secondary">How context moves through the system</p>
            <ArchitectureDiagram flow={{ kind: "flow", nodes: ["Input", "Context", "Reasoning", "Agents", "Tools", "Output"] }} />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
