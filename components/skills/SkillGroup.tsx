"use client";

import { useRef } from "react";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import type { SkillCategory } from "@/data/skills";

export default function SkillGroup({ category, index }: { category: SkillCategory; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useGsapReveal(ref, (gsap, el) => {
    gsap.set(el.querySelectorAll("[data-skill-item]"), { opacity: 0, y: 10 });
    gsap.to(el.querySelectorAll("[data-skill-item]"), {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.04,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });

  return (
    <div ref={ref} className="border-t border-border-muted py-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-10">
        <div className="flex items-baseline gap-3 md:w-64 md:shrink-0">
          <span className="label-mono text-accent-tech">{String(index + 1).padStart(2, "0")}</span>
          <h3 className="font-display text-xl text-text-primary md:text-2xl">{category.label}</h3>
        </div>
        <ul className="flex flex-wrap gap-2">
          {category.items.map((item) => (
            <li
              key={item}
              data-skill-item
              className="text-sm text-text-secondary rounded-full border border-border-muted px-3.5 py-1.5"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
