"use client";

import { useRef } from "react";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function TimelineTrack({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useGsapReveal(rootRef, (gsap, el) => {
    gsap.set(fillRef.current, { scaleY: 0 });
    gsap.to(fillRef.current, {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top 60%",
        end: "bottom 80%",
        scrub: 0.6,
      },
    });
  });

  return (
    <div ref={rootRef} className="relative">
      <div className="absolute left-[7px] top-0 h-full w-px bg-border-muted md:left-[11px]" />
      <div
        ref={fillRef}
        className="absolute left-[7px] top-0 h-full w-px origin-top bg-accent-tech md:left-[11px]"
      />
      <div className="flex flex-col gap-24 md:gap-32">{children}</div>
    </div>
  );
}
