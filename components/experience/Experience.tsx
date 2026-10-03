import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import TimelineTrack from "./Timeline";
import ExperienceItem from "./ExperienceItem";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="relative border-t border-border-muted bg-background px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1100px]">
        <SectionLabel index="03" label="Experience" />

        <RevealOnScroll>
          <h2 className="mb-20 max-w-2xl text-balance font-display text-[8vw] leading-[1.05] text-text-primary sm:text-[5vw] lg:text-[3.2vw] md:mb-28">
            Where the systems get built.
          </h2>
        </RevealOnScroll>

        <TimelineTrack>
          {experiences.map((item) => (
            <ExperienceItem key={item.id} item={item} />
          ))}
        </TimelineTrack>
      </div>
    </section>
  );
}
