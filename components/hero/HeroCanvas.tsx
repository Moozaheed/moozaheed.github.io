"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import NeuralNetworkScene from "@/components/three/NeuralNetworkScene";
import WebGLErrorBoundary from "@/components/three/WebGLErrorBoundary";
import { useIsMobile } from "@/hooks/useMediaQuery";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useWebGLSupport } from "@/hooks/useWebGLSupport";

function Fallback() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background: "radial-gradient(circle at 50% 40%, rgba(125,211,199,0.08), transparent 60%)",
      }}
    />
  );
}

export default function HeroCanvas({ sectionRef }: { sectionRef: React.RefObject<HTMLElement | null> }) {
  const isMobile = useIsMobile();
  const reducedMotion = useReducedMotion();
  const webglSupported = useWebGLSupport();

  if (reducedMotion || !webglSupported) {
    return <Fallback />;
  }

  return (
    <WebGLErrorBoundary fallback={<Fallback />}>
      <Canvas
        className="!absolute inset-0"
        dpr={[1, isMobile ? 1.5 : 2]}
        camera={{ position: [0, 0, 4.2], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <NeuralNetworkScene sectionRef={sectionRef} dense={!isMobile} />
        </Suspense>
      </Canvas>
    </WebGLErrorBoundary>
  );
}
