"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { generateNetwork } from "@/lib/network-generator";
import { gsap } from "@/lib/gsap";

const TECH = new THREE.Color("#7dd3c7");
const NATURE = new THREE.Color("#8faf8b");

export default function NeuralNetworkScene({
  sectionRef,
  dense = true,
}: {
  sectionRef: React.RefObject<HTMLElement | null>;
  dense?: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const { camera } = useThree();

  const graph = useMemo(
    () => generateNetwork(7, dense ? 5 : 4, dense ? 9 : 6),
    [dense]
  );

  const pointColors = useMemo(() => {
    const colors = new Float32Array(graph.count * 3);
    for (let i = 0; i < graph.count; i++) {
      const c = i % 3 === 0 ? TECH : NATURE;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return colors;
  }, [graph]);

  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    if (!sectionRef.current || !groupRef.current) return;
    const el = sectionRef.current;
    const group = groupRef.current;

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      })
        .to(group.rotation, { y: Math.PI * 0.35, x: 0.15, ease: "none" }, 0)
        .to(group.position, { z: 1.8, ease: "none" }, 0)
        .to(group.scale, { x: 1.4, y: 1.4, z: 1.4, ease: "none" }, 0)
        .to(
          [linesRef.current?.material, pointsRef.current?.material].filter(Boolean),
          { opacity: 0, ease: "power2.in" },
          0.55
        );
    }, el);

    return () => ctx.revert();
  }, [sectionRef]);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += 0.0007;

    const targetX = pointer.current.x * 0.5;
    const targetY = -pointer.current.y * 0.3;
    camera.position.x += (targetX - camera.position.x) * 0.02;
    camera.position.y += (targetY - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);

    const t = state.clock.getElapsedTime();
    if (pointsRef.current) {
      const mat = pointsRef.current.material as THREE.PointsMaterial;
      mat.opacity = 0.85 + Math.sin(t * 0.6) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[graph.edgePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#3a4640" transparent opacity={0.35} />
      </lineSegments>

      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[graph.positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[pointColors, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.045} vertexColors transparent opacity={0.9} sizeAttenuation depthWrite={false} />
      </points>
    </group>
  );
}
