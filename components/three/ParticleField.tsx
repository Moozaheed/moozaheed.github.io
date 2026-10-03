"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ParticleField({
  count = 260,
  color = "#8faf8b",
  spread = 6,
  speed = 0.02,
  size = 0.03,
}: {
  count?: number;
  color?: string;
  spread?: number;
  speed?: number;
  size?: number;
}) {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * spread;
      arr[i * 3 + 1] = (Math.random() - 0.5) * spread;
      arr[i * 3 + 2] = (Math.random() - 0.5) * spread * 0.6;
    }
    return arr;
  }, [count, spread]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * speed;
    pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.08;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color={color} size={size} transparent opacity={0.55} sizeAttenuation depthWrite={false} />
    </points>
  );
}
