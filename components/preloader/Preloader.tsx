"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Preloader({ onDone = () => {} }: { onDone?: () => void }) {
  const [visible, setVisible] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      onDone();
      return;
    }

    document.documentElement.style.overflow = "hidden";

    const counter = { value: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(rootRef.current, {
          yPercent: -100,
          duration: 0.9,
          ease: "power4.inOut",
          onComplete: () => {
            document.documentElement.style.overflow = "";
            setVisible(false);
            onDone();
          },
        });
      },
    });

    tl.to(barRef.current, { scaleX: 1, duration: 1.4, ease: "power2.inOut" }, 0);
    tl.to(
      counter,
      {
        value: 100,
        duration: 1.4,
        ease: "power2.inOut",
        onUpdate: () => {
          if (countRef.current) countRef.current.textContent = String(Math.round(counter.value)).padStart(3, "0");
        },
      },
      0
    );
    tl.to({}, { duration: 0.3 });

    return () => {
      tl.kill();
      document.documentElement.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (reducedMotion || !visible) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-2">
        <span className="font-display text-5xl leading-none text-text-primary md:text-7xl">GM</span>
        <span className="font-display text-5xl leading-none text-text-primary md:text-7xl">MOZAHAD</span>
      </div>

      <div className="mt-10 flex flex-col items-center gap-3">
        <span className="label-mono">INITIALIZING EXPERIENCE — <span ref={countRef}>000</span></span>
        <div className="h-px w-48 overflow-hidden bg-border-muted">
          <div ref={barRef} className="h-full w-full origin-left scale-x-0 bg-accent-tech" />
        </div>
      </div>
    </div>
  );
}
