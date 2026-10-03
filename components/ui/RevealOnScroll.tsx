"use client";

import { useRef } from "react";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function RevealOnScroll({
  children,
  className,
  y = 28,
  duration = 0.9,
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
  duration?: number;
  delay?: number;
  as?: "div" | "span";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGsapReveal(ref, (gsap, el) => {
    gsap.set(el, { opacity: 0, y });
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });

  const Comp = Tag as "div";
  return (
    <Comp ref={ref} className={className}>
      {children}
    </Comp>
  );
}
