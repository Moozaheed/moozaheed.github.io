"use client";

import { useSyncExternalStore } from "react";

let cached: boolean | null = null;

function detectWebGL(): boolean {
  if (cached !== null) return cached;
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") || canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    cached = !!gl;
  } catch {
    cached = false;
  }
  return cached;
}

// WebGL support never changes during a session, so there's nothing to
// subscribe to — this only exists to give useSyncExternalStore a store shape.
function subscribe() {
  return () => {};
}

function getServerSnapshot() {
  return false;
}

/**
 * Feature-detects WebGL. Some sandboxed/headless browsers (or GPU-disabled
 * environments) report as normal browsers but cannot actually create a
 * WebGL context — Three.js throws synchronously in that case, so every
 * Canvas usage must check this before mounting.
 *
 * Uses useSyncExternalStore (not useState) so the server-rendered HTML
 * always assumes WebGL is unavailable, matching what the client renders on
 * its first pass — the real client-only result is applied right after
 * hydration instead of during it, avoiding a hydration mismatch.
 */
export function useWebGLSupport(): boolean {
  return useSyncExternalStore(subscribe, detectWebGL, getServerSnapshot);
}
