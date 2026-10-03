import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { publications } from "@/data/publications";
import { contactLinks } from "@/data/contact";

export default function Publications() {
  return (
    <section id="publications" className="relative border-t border-border-muted bg-background px-6 py-24 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1100px]">
        <SectionLabel index="11" label="Publications" />

        <RevealOnScroll>
          <p className="mb-14 max-w-2xl text-lg leading-relaxed text-text-secondary">
            Actively pursuing PhD opportunities in the US, Canada, and the EU. Open to interviews, research
            collaboration, and academic challenges —{" "}
            <a href={`mailto:${contactLinks.email}`} className="inline-flex items-center gap-1 text-accent-tech underline underline-offset-4">
              reach out
              <ArrowUpRight size={14} strokeWidth={1.5} />
            </a>
            .
          </p>
        </RevealOnScroll>

        {publications.length === 0 ? (
          <RevealOnScroll>
            <div className="border border-dashed border-border-muted px-8 py-14 text-center">
              <p className="label-mono text-text-secondary">No publications to show yet.</p>
            </div>
          </RevealOnScroll>
        ) : (
          <ul className="flex flex-col gap-10">
            {publications.map((p) => (
              <li key={p.id} className="border-t border-border-muted pt-8">
                <p className="label-mono text-accent-tech">
                  {p.venue} — {p.year}
                </p>
                <h3 className="mt-2 font-display text-2xl text-text-primary">{p.title}</h3>
                <p className="mt-1 text-sm text-text-secondary">{p.authors.join(", ")}</p>
                <p className="mt-3 max-w-2xl text-text-secondary">{p.abstract}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li key={t} className="label-mono rounded-full border border-border-muted px-3 py-1 text-text-secondary">
                      {t}
                    </li>
                  ))}
                </ul>
                {p.link && (
                  <a href={p.link} className="label-mono mt-4 inline-block text-accent-tech" target="_blank" rel="noreferrer">
                    Read →
                  </a>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
