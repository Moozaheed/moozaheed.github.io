"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { dnaBranches } from "@/data/engineering-dna";
import { cn } from "@/lib/utils";

const ACCENT_TEXT: Record<string, string> = {
  tech: "text-accent-tech",
  nature: "text-accent-nature",
  warm: "text-accent-warm",
};

export default function DNAAccordion() {
  const [open, setOpen] = useState<string | null>(dnaBranches[0]?.id ?? null);

  return (
    <div className="flex flex-col divide-y divide-border-muted border-y border-border-muted md:hidden">
      {dnaBranches.map((b) => {
        const isOpen = open === b.id;
        return (
          <div key={b.id}>
            <button
              onClick={() => setOpen(isOpen ? null : b.id)}
              className="flex w-full items-center justify-between py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className={cn("label-mono", ACCENT_TEXT[b.accent])}>{b.label}</span>
              <ChevronDown size={14} className={cn("transition-transform duration-300", isOpen && "rotate-180")} />
            </button>
            {isOpen && (
              <ul className="flex animate-fade-up flex-col gap-2 pb-5">
                {b.items.map((item) => (
                  <li key={item} className="text-sm text-text-secondary">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}
