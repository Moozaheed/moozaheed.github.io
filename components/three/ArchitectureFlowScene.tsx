"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const TECH = new THREE.Color("#7dd3c7");

export default function ArchitectureFlowScene({ steps }: { steps: number }) {
  const packetRefs = useRef<THREE.Mesh[]>([]);

  const nodePositions = useMemo(() => {
    const spacing = 2.4;
    const start = -((steps - 1) * spacing) / 2;
    return Array.from({ length: steps }, (_, i) => start + i * spacing);
  }, [steps]);

  const linePositions = useMemo(() => {
    const arr = new Float32Array(nodePositions.length * 3);
    nodePositions.forEach((x, i) => {
      arr[i * 3] = x;
      arr[i * 3 + 1] = 0;
      arr[i * 3 + 2] = 0;
    });
    return arr;
  }, [nodePositions]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    packetRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      const offset = i * 0.9;
      const progress = ((t * 0.35 + offset) % (nodePositions.length - 1 || 1));
      const segment = Math.floor(progress);
      const localT = progress - segment;
      const a = nodePositions[segment] ?? nodePositions[0];
      const b = nodePositions[segment + 1] ?? nodePositions[nodePositions.length - 1];
      mesh.position.x = THREE.MathUtils.lerp(a, b, localT);
      mesh.position.y = Math.sin(localT * Math.PI) * 0.08;
    });
  });

  return (
    <group>
      <line>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#252a27" />
      </line>

      {nodePositions.map((x, i) => (
        <mesh key={i} position={[x, 0, 0]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshBasicMaterial color={TECH} />
        </mesh>
      ))}

      {[0, 1, 2].map((i) => (
        <mesh
          key={i}
          ref={(el) => {
            if (el) packetRefs.current[i] = el;
          }}
        >
          <sphereGeometry args={[0.045, 12, 12]} />
          <meshBasicMaterial color="#c9a77a" transparent opacity={0.9} />
        </mesh>
      ))}
    </group>
  );
}
