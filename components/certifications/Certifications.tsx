import SectionLabel from "@/components/ui/SectionLabel";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="relative border-t border-border-muted bg-background px-6 py-24 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1100px]">
        <SectionLabel index="10" label="Certifications" />

        {certifications.length === 0 ? (
          <RevealOnScroll>
            <div className="border border-dashed border-border-muted px-8 py-14 text-center">
              <p className="label-mono text-text-secondary">Certifications will be listed here as they&apos;re earned.</p>
            </div>
          </RevealOnScroll>
        ) : (
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {certifications.map((c) => (
              <li key={c.id} className="border-t border-border-muted pt-4">
                <p className="text-text-primary">{c.title}</p>
                <p className="label-mono mt-1 text-text-secondary">
                  {c.issuer} — {c.year}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
