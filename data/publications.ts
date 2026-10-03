export interface Publication {
  id: string;
  title: string;
  year: string;
  venue: string;
  authors: string[];
  abstract: string;
  link?: string;
  tags: string[];
}

export interface ResearchInterest {
  id: string;
  category: string;
  focus: string;
  topics: string[];
}

export const researchInterests: ResearchInterest[] = [
  {
    id: "federated-learning",
    category: "Distributed & Federated Learning",
    focus:
      "Privacy-preserving machine learning, continual learning, non-IID optimization, decentralized and communication-efficient learning, differential privacy, and secure aggregation.",
    topics: [
      "Privacy-Preserving ML",
      "Continual Learning",
      "Non-IID Optimization",
      "Decentralized Learning",
      "Differential Privacy",
      "Secure Aggregation",
    ],
  },
  {
    id: "trustworthy-ai",
    category: "Trustworthy & Explainable AI",
    focus:
      "Explainable AI (XAI), interpretable machine learning, robust and responsible AI, AI safety, adversarial robustness, mechanistic interpretability, and privacy and security.",
    topics: [
      "Explainable AI (XAI)",
      "Interpretable ML",
      "AI Safety & Governance",
      "Adversarial Robustness",
      "Mechanistic Interpretability",
      "Robust & Responsible AI",
    ],
  },
  {
    id: "llm-multi-agent",
    category: "LLMs & Multi-Agent AI",
    focus:
      "Robust and reliable LLM pipelines, NLP, LLM security and evaluation, multi-agent systems, AI middleware architectures, Retrieval-Augmented Generation (RAG), and context engineering.",
    topics: [
      "Robust LLM Pipelines",
      "NLP & Evaluation",
      "Multi-Agent Systems",
      "AI Middleware Architectures",
      "Retrieval-Augmented Gen (RAG)",
      "Context Engineering",
    ],
  },
  {
    id: "biomedical-ai",
    category: "Biomedical AI",
    focus:
      "Medical image analysis, clinical AI, domain adaptation, multimodal learning, computer-aided diagnosis (CAD), clinical foundation models, and privacy-preserving healthcare.",
    topics: [
      "Medical Image Analysis",
      "Clinical Foundation Models",
      "Domain Adaptation",
      "Multimodal Learning",
      "Computer-Aided Diagnosis (CAD)",
      "Privacy-Preserving Healthcare",
    ],
  },
  {
    id: "large-scale-systems",
    category: "Large-Scale Systems & Software Engineering",
    focus:
      "Distributed systems, cloud-native architectures, scalable microservices, fault tolerance, event-driven streaming pipelines, and AI-assisted software engineering (AI-DLC).",
    topics: [
      "Distributed Systems",
      "Cloud-Native Architectures",
      "Scalable Microservices",
      "Fault Tolerance",
      "Event-Driven Streaming",
      "AI-Assisted SE (AI-DLC)",
    ],
  },
];

export const publications: Publication[] = [
  {
    id: "federated-continual-learning-medical-imaging",
    title: "Privacy-Preserving Federated Continual Learning for Multi-Domain Medical Imaging Under Non-IID Skew",
    year: "2026",
    venue: "Under Conference Review",
    authors: ["G. M. Mozahad"],
    abstract:
      "Investigates deep learning pipelines across heterogeneous data distributions, focusing on parameter optimization, variance reduction, and representation stability across decentralized nodes.",
    tags: ["Federated Learning", "Continual Learning", "Medical Imaging", "Privacy-Preserving ML"],
  },
  {
    id: "pidm-prompt-injection-middleware",
    title: "PIDM: A Middleware Framework for Detecting Prompt Injection Attacks in Multi-Agent LLM Pipelines",
    year: "2026",
    venue: "Under Conference Review",
    authors: ["G. M. Mozahad"],
    abstract:
      "Designs runtime inspection and state-monitoring mechanisms to track dynamic transitions and prevent cascading instabilities across communicating models in multi-agent LLM systems.",
    tags: ["Multi-Agent Systems", "LLM Security", "Prompt Injection", "Middleware"],
  },
];
