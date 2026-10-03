"use client";

import { useMemo, useState } from "react";
import { dnaBranches, dnaCenter } from "@/data/engineering-dna";
import { cn } from "@/lib/utils";

const ACCENT_HEX: Record<string, string> = {
  tech: "#7dd3c7",
  nature: "#8faf8b",
  warm: "#c9a77a",
};

function polar(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: 50 + Math.sin(rad) * radius,
    y: 50 - Math.cos(rad) * radius,
  };
}

export default function RadialDiagram() {
  const [active, setActive] = useState<string | null>(null);

  const nodes = useMemo(
    () =>
      dnaBranches.map((b) => ({
        ...b,
        pos: polar(b.angle, 33),
        panelPos: polar(b.angle, 46),
      })),
    []
  );

  return (
    <div className="relative mx-auto hidden aspect-square w-full max-w-[720px] md:block">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {nodes.map((n) => {
          const isActive = active === n.id;
          const isDimmed = active !== null && !isActive;
          return (
            <g key={n.id}>
              <line
                x1={50}
                y1={50}
                x2={n.pos.x}
                y2={n.pos.y}
                stroke={isActive ? ACCENT_HEX[n.accent] : "#252a27"}
                strokeWidth={isActive ? 0.35 : 0.2}
                opacity={isDimmed ? 0.25 : 1}
                style={{ transition: "all 0.35s ease" }}
              />
              <line
                x1={n.pos.x}
                y1={n.pos.y}
                x2={n.panelPos.x}
                y2={n.panelPos.y}
                stroke={isActive ? ACCENT_HEX[n.accent] : "#252a27"}
                strokeWidth={0.15}
                opacity={isDimmed ? 0.2 : 0.7}
                style={{ transition: "all 0.35s ease" }}
              />
            </g>
          );
        })}
      </svg>

      <div
        className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border-muted bg-surface"
        style={{ boxShadow: "0 0 60px rgba(125,211,199,0.06)" }}
      >
        <span className="font-display text-lg text-text-primary">{dnaCenter}</span>
      </div>

      {nodes.map((n) => {
        const isActive = active === n.id;
        const isDimmed = active !== null && !isActive;
        return (
          <button
            key={n.id}
            data-cursor="EXPLORE"
            onMouseEnter={() => setActive(n.id)}
            onFocus={() => setActive(n.id)}
            onMouseLeave={() => setActive(null)}
            onBlur={() => setActive(null)}
            className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            style={{ left: `${n.pos.x}%`, top: `${n.pos.y}%` }}
          >
            <span
              className={cn(
                "flex h-3 w-3 items-center justify-center rounded-full border transition-all duration-300",
                isActive ? "scale-150" : "scale-100"
              )}
              style={{
                borderColor: ACCENT_HEX[n.accent],
                background: isActive ? ACCENT_HEX[n.accent] : "transparent",
                opacity: isDimmed ? 0.4 : 1,
              }}
            />
          </button>
        );
      })}

      {nodes.map((n) => {
        const isActive = active === n.id;
        const isDimmed = active !== null && !isActive;
        const alignRight = n.pos.x < 50;
        return (
          <div
            key={`${n.id}-panel`}
            className="pointer-events-none absolute w-[9.5rem] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
            style={{
              left: `${n.panelPos.x}%`,
              top: `${n.panelPos.y}%`,
              opacity: isDimmed ? 0.35 : 1,
              textAlign: alignRight ? "right" : "left",
            }}
          >
            <p
              className="label-mono mb-1.5"
              style={{ color: isActive ? ACCENT_HEX[n.accent] : "var(--text-secondary)" }}
            >
              {n.label}
            </p>
            <ul className="flex flex-col gap-1">
              {n.items.map((item) => (
                <li
                  key={item}
                  className="text-xs leading-snug text-text-secondary transition-colors duration-300"
                  style={{ color: isActive ? "var(--text-primary)" : undefined }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
