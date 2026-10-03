import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { contactCategories, contactLinks } from "@/data/contact";

const LINKS = [
  { label: "Email", value: contactLinks.email, href: `mailto:${contactLinks.email}` },
  { label: "LinkedIn", value: contactLinks.linkedin, href: contactLinks.linkedin },
  { label: "GitHub", value: contactLinks.github, href: contactLinks.github },
].filter((l) => l.value);

export default function Contact() {
  return (
    <section id="contact" className="relative border-t border-border-muted bg-background px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1200px]">
        <SectionLabel index="08" label="Contact" />

        <RevealOnScroll>
          <h2 className="text-balance font-display text-[12vw] leading-[0.96] text-text-primary sm:text-[8vw] lg:text-[5.6vw]">
            HAVE A SYSTEM
            <br />
            TO BUILD?
          </h2>
        </RevealOnScroll>

        <div className="mt-16 grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-6">
            <RevealOnScroll delay={0.05}>
              <ul className="flex flex-wrap gap-2">
                {contactCategories.map((c) => (
                  <li key={c.id} className="label-mono rounded-full border border-border-muted px-4 py-2 text-text-secondary">
                    {c.label}
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          </div>

          <div className="md:col-span-6">
            <RevealOnScroll delay={0.1}>
              <ul className="flex flex-col divide-y divide-border-muted border-t border-border-muted">
                {LINKS.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.label === "Email" ? undefined : "_blank"}
                      rel={l.label === "Email" ? undefined : "noreferrer"}
                      data-cursor="OPEN"
                      className="group flex items-center justify-between py-5"
                    >
                      <span className="label-mono text-text-secondary">{l.label}</span>
                      <span className="flex items-center gap-2 text-lg text-text-primary transition-colors duration-300 group-hover:text-accent-tech">
                        {l.value}
                        <ArrowUpRight size={16} strokeWidth={1.5} />
                      </span>
                    </a>
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
