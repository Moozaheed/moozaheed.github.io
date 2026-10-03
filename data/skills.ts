export interface SkillCategory {
  id: string;
  label: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    label: "Backend Systems Architecture",
    items: ["Node.js", "NestJS", "Laravel", "Lumen", "Microservices", "RESTful APIs", "Event Sourcing"],
  },
  {
    id: "system-design",
    label: "Distributed Systems & Queues",
    items: ["Distributed Systems", "Message Brokers", "RabbitMQ", "Redis Mutexes", "Scalable Topology", "Idempotency"],
  },
  {
    id: "ai",
    label: "Applied ML & Context Engineering",
    items: ["Federated Learning", "Continual Learning", "Multi-Agent Workflows", "LLM Security Middleware", "RAG", "Prompt Defense"],
  },
  {
    id: "databases",
    label: "Databases & Storage",
    items: ["PostgreSQL", "MySQL", "Redis", "Vector DBs / Chroma", "ACID Transactions", "Query Optimization"],
  },
  {
    id: "devops",
    label: "DevOps & Infrastructure",
    items: ["Docker", "Linux Systems", "AWS (EC2, S3)", "CI/CD GitHub Actions", "Terraform", "Kubernetes"],
  },
  {
    id: "frontend",
    label: "Frontend Engineering",
    items: ["React", "Next.js (App Router)", "TypeScript", "Tailwind CSS", "Semantic HTML"],
  },
  {
    id: "product",
    label: "System Design & Leadership",
    items: ["Technical Blueprints", "Client Delivery", "Code Reviews", "Architecture Reviews", "Founder Execution"],
  },
];
