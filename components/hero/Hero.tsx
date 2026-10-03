"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { ArrowDown } from "lucide-react";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), { ssr: false });

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useGsapReveal(rootRef, (gsap, el) => {
    const tl = gsap.timeline({ delay: 0.2 });
    tl.from(el.querySelectorAll("[data-reveal-line]"), {
      yPercent: 110,
      duration: 1,
      stagger: 0.08,
      ease: "power4.out",
    })
      .from(el.querySelectorAll("[data-reveal-fade]"), { opacity: 0, y: 12, duration: 0.8, ease: "power2.out" }, "-=0.5");
  });

  return (
    <section
      id="hero"
      ref={(node) => {
        sectionRef.current = node;
      }}
      className="relative flex h-[100svh] min-h-[640px] w-full items-center overflow-hidden bg-background"
    >
      <HeroCanvas sectionRef={sectionRef} />

      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(11,13,12,0.2) 0%, rgba(11,13,12,0.65) 85%, #0b0d0c 100%)" }}
      />

      <div ref={rootRef} className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <p data-reveal-fade className="label-mono mb-6">
          Software Engineer — AI Systems · Backend Architecture · Distributed Systems
        </p>

        <h1 className="font-display text-[15vw] leading-[0.92] tracking-tight text-text-primary sm:text-[11vw] lg:text-[7.2vw]">
          <span className="block overflow-hidden">
            <span data-reveal-line className="block">I BUILD</span>
          </span>
          <span className="block overflow-hidden">
            <span data-reveal-line className="block">SYSTEMS</span>
          </span>
          <span className="block overflow-hidden">
            <span data-reveal-line className="block text-accent-tech">THAT THINK.</span>
          </span>
        </h1>

        <div data-reveal-fade className="mt-10 flex items-center gap-3 text-text-secondary">
          <ArrowDown size={14} strokeWidth={1.5} className="animate-bounce" />
          <span className="label-mono">Scroll</span>
        </div>
      </div>
    </section>
  );
}
