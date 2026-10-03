export interface Achievement {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export const achievements: Achievement[] = [
  { id: "problems", value: 1500, suffix: "+", label: "Problems Solved" },
  { id: "ai-dlc", value: 10, suffix: "×", label: "AI-DLC Productivity" },
  { id: "latency", value: 40, suffix: "%", label: "Context Pipeline Latency Reduction" },
];
