"use client";

import { useRef } from "react";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import type { Achievement } from "@/data/achievements";

export default function Counter({ achievement }: { achievement: Achievement }) {
  const numRef = useRef<HTMLSpanElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useGsapReveal(rootRef, (gsap, el) => {
    const counter = { value: 0 };
    gsap.to(counter, {
      value: achievement.value,
      duration: 1.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        if (numRef.current) numRef.current.textContent = Math.round(counter.value).toLocaleString();
      },
    });
  });

  return (
    <div ref={rootRef} className="flex flex-col gap-3 border-t border-border-muted py-10">
      <p className="font-display text-[13vw] leading-none text-text-primary sm:text-[7vw] lg:text-[4.2vw]">
        <span ref={numRef}>0</span>
        {achievement.suffix}
      </p>
      <p className="label-mono text-text-secondary">{achievement.label}</p>
    </div>
  );
}
