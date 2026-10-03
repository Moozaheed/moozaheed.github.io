"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { profile } from "@/data/profile";

export default function Portrait() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useGsapReveal(wrapRef, (gsap, el) => {
    gsap.to(imgRef.current, {
      yPercent: -12,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  return (
    <div ref={wrapRef} className="relative aspect-[4/5] w-full overflow-hidden border border-border-muted bg-surface">
      <div ref={imgRef} className="absolute inset-[-8%] h-[116%] w-full">
        {profile.portraitSrc ? (
          <Image
            src={profile.portraitSrc}
            alt="Portrait of G. M. Mozahad"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, 90vw"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, rgba(143,175,139,0.14), transparent 55%), radial-gradient(circle at 75% 80%, rgba(125,211,199,0.1), transparent 55%), #121614",
            }}
          >
            <span className="label-mono text-text-secondary">PORTRAIT</span>
          </div>
        )}
      </div>
      <div className="pointer-events-none absolute inset-0 border border-border-muted" />
      <span className="label-mono absolute bottom-4 left-4 text-text-secondary">G.M.M — 2026</span>
    </div>
  );
}
