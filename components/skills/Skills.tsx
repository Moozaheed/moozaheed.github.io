import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SkillGroup from "./SkillGroup";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative border-t border-border-muted bg-background px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1100px]">
        <SectionLabel index="06" label="Skills" />

        <RevealOnScroll>
          <h2 className="mb-16 max-w-2xl text-balance font-display text-[8vw] leading-[1.05] text-text-primary sm:text-[5vw] lg:text-[3.2vw]">
            Depth over decoration.
          </h2>
        </RevealOnScroll>

        <div>
          {skillCategories.map((c, i) => (
            <SkillGroup key={c.id} category={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
