"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import ParticleField from "./ParticleField";
import WebGLErrorBoundary from "./WebGLErrorBoundary";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useIsMobile } from "@/hooks/useMediaQuery";
import { useWebGLSupport } from "@/hooks/useWebGLSupport";

export default function AmbientCanvas({
  color = "#8faf8b",
  count,
  className = "",
}: {
  color?: string;
  count?: number;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const webglSupported = useWebGLSupport();

  if (reducedMotion || !webglSupported) return null;

  return (
    <WebGLErrorBoundary>
      <Canvas
        className={`!absolute inset-0 ${className}`}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: false, alpha: true }}
      >
        <Suspense fallback={null}>
          <ParticleField color={color} count={count ?? (isMobile ? 90 : 220)} />
        </Suspense>
      </Canvas>
    </WebGLErrorBoundary>
  );
}
