export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export const ACCENT_COLORS = {
  nature: "#8faf8b",
  tech: "#7dd3c7",
  warm: "#c9a77a",
} as const;

export type AccentKey = keyof typeof ACCENT_COLORS;
