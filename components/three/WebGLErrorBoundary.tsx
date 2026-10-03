"use client";

import { Component, type ReactNode } from "react";

/**
 * Defense-in-depth around every <Canvas>: feature detection (useWebGLSupport)
 * catches most GPU-disabled environments before mounting, but context
 * creation can still fail after that check passes. Without this boundary,
 * Three.js throwing during render would crash the whole page tree.
 */
export default class WebGLErrorBoundary extends Component<
  { children: ReactNode; fallback?: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    // Swallow silently — the visual layer is decorative, content stays usable.
  }

  render() {
    if (this.state.hasError) return this.props.fallback ?? null;
    return this.props.children;
  }
}
