import { Vector3 } from "three";

export interface NetworkGraph {
  positions: Float32Array;
  edgePositions: Float32Array;
  count: number;
}

function fibonacciSphere(samples: number): Vector3[] {
  const points: Vector3[] = [];
  const phi = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < samples; i++) {
    const y = 1 - (i / (samples - 1)) * 2;
    const radius = Math.sqrt(1 - y * y);
    const theta = phi * i;
    const x = Math.cos(theta) * radius;
    const z = Math.sin(theta) * radius;
    points.push(new Vector3(x, y, z));
  }
  return points;
}

/**
 * Procedurally generates an organic branching network — part neural
 * dendrite, part root system — used as the hero's living backdrop.
 */
export function generateNetwork(seed = 1, maxDepth = 5, primaryBranches = 9): NetworkGraph {
  let s = seed;
  const rand = () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };

  const nodes: Vector3[] = [new Vector3(0, 0, 0)];
  const edges: [number, number][] = [];

  const directions = fibonacciSphere(primaryBranches);

  function branch(originIndex: number, direction: Vector3, depth: number, length: number) {
    if (depth > maxDepth) return;

    const dir = direction.clone().normalize();
    const jitter = new Vector3(
      (rand() - 0.5) * 0.6,
      (rand() - 0.5) * 0.6,
      (rand() - 0.5) * 0.6
    );
    dir.add(jitter).normalize();

    const origin = nodes[originIndex];
    const end = origin.clone().add(dir.clone().multiplyScalar(length));
    nodes.push(end);
    const endIndex = nodes.length - 1;
    edges.push([originIndex, endIndex]);

    if (depth === maxDepth) return;

    const childCount = depth < 2 ? 2 : rand() > 0.45 ? 2 : 1;
    for (let i = 0; i < childCount; i++) {
      branch(endIndex, dir, depth + 1, length * (0.72 + rand() * 0.12));
    }
  }

  directions.forEach((dir) => {
    branch(0, dir, 1, 1.4 + rand() * 0.3);
  });

  const positions = new Float32Array(nodes.length * 3);
  nodes.forEach((n, i) => {
    positions[i * 3] = n.x;
    positions[i * 3 + 1] = n.y;
    positions[i * 3 + 2] = n.z;
  });

  const edgePositions = new Float32Array(edges.length * 6);
  edges.forEach(([a, b], i) => {
    const pa = nodes[a];
    const pb = nodes[b];
    edgePositions[i * 6] = pa.x;
    edgePositions[i * 6 + 1] = pa.y;
    edgePositions[i * 6 + 2] = pa.z;
    edgePositions[i * 6 + 3] = pb.x;
    edgePositions[i * 6 + 4] = pb.y;
    edgePositions[i * 6 + 5] = pb.z;
  });

  return { positions, edgePositions, count: nodes.length };
}
