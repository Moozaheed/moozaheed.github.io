import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { education, academicRoles } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="relative border-t border-border-muted bg-background px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1100px]">
        <SectionLabel index="09" label="Education" />

        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-8">
            <RevealOnScroll>
              <p className="label-mono mb-4 text-accent-tech">{education.period}</p>
              <h2 className="text-balance font-display text-[8vw] leading-[1.05] text-text-primary sm:text-[5vw] lg:text-[2.8vw]">
                {education.institution}
              </h2>
              <p className="mt-4 text-lg text-text-secondary">{education.degree}</p>
              {education.detail && <p className="label-mono mt-3">{education.detail}</p>}
            </RevealOnScroll>
          </div>

          <div className="md:col-span-4">
            <RevealOnScroll delay={0.1}>
              <p className="label-mono mb-6 text-text-secondary">Also</p>
              <ul className="flex flex-col gap-6">
                {academicRoles.map((r) => (
                  <li key={r.id} className="border-l border-border-muted pl-4">
                    <p className="text-text-primary">{r.title}</p>
                    <p className="text-sm text-text-secondary">{r.org}</p>
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
