export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  current: boolean;
  summary: string;
  focus: string[];
}

export const experiences: Experience[] = [
  {
    id: "craftsmen-it",
    company: "Craftsmen IT",
    role: "Founder & CEO",
    period: "2026 — Present",
    current: true,
    summary:
      "Building and leading an engineering practice focused on AI systems, backend architecture, and product delivery for clients that need software built to last.",
    focus: ["Company Building", "AI Systems", "Backend Architecture", "Client Delivery"],
  },
  {
    id: "brain-station-23",
    company: "Brain Station 23 PLC",
    role: "Software Engineer I",
    period: "2024 — Present",
    current: true,
    summary:
      "Forward-deployed engineer for Bloomex (Canada & Australia), architecting high-throughput GPMS, OMS, and ARCA APIs in Laravel Lumen while building scalable microservices and Docker CI/CD pipelines.",
    focus: ["Microservice", "AIDLC", "Team Collaboration", "CI/CD"],
  },
];
