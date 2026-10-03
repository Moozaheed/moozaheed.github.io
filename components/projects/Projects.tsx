import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative border-t border-border-muted bg-background px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel index="04" label="Selected Projects" />

        <RevealOnScroll>
          <h2 className="mb-16 max-w-2xl text-balance font-display text-[8vw] leading-[1.05] text-text-primary sm:text-[5vw] lg:text-[3.2vw] md:mb-20">
            Systems shipped, not just shipped code.
          </h2>
        </RevealOnScroll>

        <div>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
