"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "@/lib/gsap";
import type { Project } from "@/data/projects";
import { useIsTouchDevice } from "@/hooks/useMediaQuery";

export default function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const isTouch = useIsTouchDevice();

  const quickRotateX = useRef<ReturnType<typeof gsap.quickTo>>(null);
  const quickRotateY = useRef<ReturnType<typeof gsap.quickTo>>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch || !panelRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    quickRotateX.current ??= gsap.quickTo(panelRef.current, "rotationX", { duration: 0.5, ease: "power3.out" });
    quickRotateY.current ??= gsap.quickTo(panelRef.current, "rotationY", { duration: 0.5, ease: "power3.out" });
    quickRotateX.current(py * -6);
    quickRotateY.current(px * 8);
  };

  const handleLeave = () => {
    if (!panelRef.current) return;
    gsap.to(panelRef.current, { rotationX: 0, rotationY: 0, duration: 0.6, ease: "power3.out" });
  };

  const content = (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group grid grid-cols-1 gap-6 border-b border-border-muted py-10 md:grid-cols-12 md:items-center md:gap-8 md:py-14"
      style={{ perspective: "1000px" }}
    >
      <div className="md:col-span-1">
        <span className="label-mono text-text-secondary">{project.number}</span>
      </div>

      <div className="md:col-span-6">
        <h3 className="font-display text-[8vw] leading-[1.02] text-text-primary transition-colors duration-300 group-hover:text-accent-tech sm:text-[4.5vw] lg:text-[2.6vw]">
          {project.name}
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-text-secondary md:mt-4">{project.description}</p>
        {project.technology.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.technology.map((t) => (
              <li key={t} className="label-mono rounded-full border border-border-muted px-3 py-1 text-text-secondary">
                {t}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex flex-col gap-2 md:col-span-2">
        <span className="label-mono text-accent-nature">{project.category}</span>
        {project.hasDeepDive && (
          <span className="flex items-center gap-1.5 text-sm text-text-secondary transition-colors duration-300 group-hover:text-text-primary">
            View case study <ArrowUpRight size={13} strokeWidth={1.5} />
          </span>
        )}
      </div>

      <div
        ref={panelRef}
        className="relative aspect-[4/3] w-full overflow-hidden border border-border-muted md:col-span-3"
        style={{
          background:
            "radial-gradient(circle at 30% 25%, rgba(125,211,199,0.1), transparent 55%), radial-gradient(circle at 75% 75%, rgba(143,175,139,0.08), transparent 55%), #121614",
          transformStyle: "preserve-3d",
        }}
      >
        <span className="label-mono absolute bottom-3 left-3 text-text-secondary">{project.category}</span>
      </div>
    </div>
  );

  if (project.hasDeepDive) {
    return (
      <Link href={`/projects/${project.slug}`} data-cursor="OPEN" className="block">
        {content}
      </Link>
    );
  }

  return content;
}
