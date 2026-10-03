"use client";

import { useEffect } from "react";
import { gsap, registerGsap } from "@/lib/gsap";
import { useReducedMotion } from "./useReducedMotion";

type RevealFn = (g: typeof gsap, el: HTMLElement) => void;

/**
 * Runs a GSAP animation scoped to a ref's element, cleaned up automatically.
 * Skipped entirely under prefers-reduced-motion so content renders in its final state.
 */
export function useGsapReveal<T extends HTMLElement>(ref: React.RefObject<T | null>, fn: RevealFn) {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    registerGsap();
    if (reducedMotion || !ref.current) return;
    const el = ref.current;
    const ctx = gsap.context(() => fn(gsap, el), el);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducedMotion]);
}
