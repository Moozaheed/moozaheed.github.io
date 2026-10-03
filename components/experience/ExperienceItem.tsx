import type { Experience } from "@/data/experience";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function ExperienceItem({ item }: { item: Experience }) {
  return (
    <div className="relative pl-10 md:pl-16">
      <span
        className="absolute left-0 top-2 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-accent-tech bg-background md:left-1"
        style={{ boxShadow: item.current ? "0 0 0 4px rgba(125,211,199,0.12)" : undefined }}
      />

      <RevealOnScroll>
        <p className="label-mono mb-4 text-accent-tech">{item.period}</p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.05}>
        <h3 className="font-display text-[9vw] leading-[1.02] text-text-primary sm:text-[5vw] lg:text-[3vw]">
          {item.company}
        </h3>
        <p className="mt-2 text-lg text-text-secondary md:text-xl">{item.role}</p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary">{item.summary}</p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.14}>
        <ul className="mt-6 flex flex-wrap gap-2">
          {item.focus.map((f) => (
            <li key={f} className="label-mono rounded-full border border-border-muted px-3 py-1.5 text-text-secondary">
              {f}
            </li>
          ))}
        </ul>
      </RevealOnScroll>
    </div>
  );
}
