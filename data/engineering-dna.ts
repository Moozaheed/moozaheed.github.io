export interface DNANode {
  id: string;
  label: string;
  children?: string[];
}

export interface DNABranch {
  id: string;
  label: string;
  accent: "nature" | "tech" | "warm";
  angle: number;
  items: string[];
}

export const dnaCenter = "MOZAHAD";

export const dnaBranches: DNABranch[] = [
  {
    id: "ai",
    label: "AI",
    accent: "tech",
    angle: -60,
    items: ["Context Engineering", "LLMs", "RAG", "Multi-Agent Systems", "AI-DLC"],
  },
  {
    id: "backend",
    label: "Backend",
    accent: "tech",
    angle: -20,
    items: ["Microservices", "REST APIs", "Node.js", "NestJS", "Laravel", "Lumen"],
  },
  {
    id: "infrastructure",
    label: "Infrastructure",
    accent: "nature",
    angle: 20,
    items: ["AWS", "Docker", "CI/CD", "Terraform", "Kubernetes", "Linux"],
  },
  {
    id: "data",
    label: "Data",
    accent: "warm",
    angle: 60,
    items: ["SQL", "NoSQL", "Redis", "RabbitMQ"],
  },
  {
    id: "product",
    label: "Product",
    accent: "nature",
    angle: 100,
    items: ["System Design", "UI/UX", "Client Delivery", "Technical Leadership"],
  },
];
