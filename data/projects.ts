export type ArchitectureFlow = {
  kind: "flow";
  nodes: string[];
};

export interface ProjectDeepDive {
  problem: string;
  approach: string;
  role: string;
  architecture?: ArchitectureFlow;
  technology: string[];
  challenges: string[];
  result: string;
  lessons: string;
}

export interface Project {
  id: string;
  number: string;
  name: string;
  slug: string;
  category: string;
  capabilities: string[];
  technology: string[];
  description: string;
  hasDeepDive: boolean;
  deepDive: ProjectDeepDive;
}

export const projects: Project[] = [
  {
    id: "bloomex",
    number: "01",
    name: "Bloomex Enterprise OMS & GPMS",
    slug: "bloomex",
    category: "Distributed Commerce & Logistics",
    capabilities: [
      "High-Throughput Order Ingestion",
      "Multi-Region Inventory Reconciliation",
      "Zero Data Loss Under Surge",
      "Low-Latency Catalog Optimization",
      "Zero-Downtime Rolling Releases",
    ],
    technology: ["Laravel Lumen", "MySQL", "Next.js", "Docker", "AWS", "Microservices", "REST APIs", "SonarQube"],
    description:
      "High-throughput Order Management System (OMS), General Product Management System (GPMS), and ARCA inventory reconciliation APIs powering national e-commerce operations across Canada and Australia.",
    hasDeepDive: true,
    deepDive: {
      problem:
        "During peak nationwide holiday surges (Valentine's Day, Mother's Day), concurrent order spikes across Canadian and Australian storefronts caused database thread starvation, transaction deadlocks, and catastrophic order drops in legacy monolith endpoints, while warehouse fulfillment teams experienced severe dispatch synchronization delays.",
      approach:
        "As forward-deployed engineer, architected lightweight, decoupled microservices in Laravel Lumen dedicated to order ingestion (OMS) and catalog operations (GPMS). Engineered strict transactional boundaries, optimized multi-table MySQL indices, and introduced ARCA automated inventory reconciliation pipelines backed by containerized Docker CI/CD deployment pipelines on AWS.",
      role: "Forward-Deployed Engineer & Backend Architect",
      architecture: {
        kind: "flow",
        nodes: ["Web Storefront", "Cloudflare CDN", "Lumen OMS Service", "Lumen GPMS API", "MySQL Primary", "ARCA Auditor", "Warehouse Dispatch"],
      },
      technology: ["Laravel Lumen", "MySQL", "Next.js", "Docker", "AWS Services", "REST APIs", "SonarQube", "CI/CD"],
      challenges: [
        "Preserving 100% order capture without data loss or duplicate charges under extreme holiday traffic spikes across multiple timezones (Canada and Australia).",
        "Eliminating query latency on massive catalog queries with multi-currency pricing and volatile perishable inventory counts across regional warehouse distribution hubs.",
        "Enforcing zero-downtime rolling releases during mission-critical operational windows through containerized automated CI/CD pipelines with SonarQube static analysis.",
      ],
      result:
        "Eliminated order drop rates to 0% during peak holiday volume spikes, slashed warehouse fulfillment sync latency by 54%, and achieved zero-downtime deployments across multi-region production clusters.",
      lessons:
        "Stripping away bloated framework layers in favor of lightweight microservice cores (Lumen) combined with disciplined indexing and idempotent transactional boundaries is the most cost-effective way to achieve enterprise-grade scale without runaway infrastructure expenses.",
    },
  },
  {
    id: "alainstar",
    number: "02",
    name: "Alainstar ERP & E-Commerce",
    slug: "alainstar",
    category: "ERP & Multi-Channel Commerce",
    capabilities: [
      "Event-Driven Inventory Core",
      "Distributed Concurrency Locks",
      "Offline-Tolerant POS Synchronization",
      "Sub-50ms Stock Verification",
    ],
    technology: ["Next.js", "NestJS", "PostgreSQL", "Redis", "Docker", "Tailwind CSS"],
    description:
      "An integrated multi-store ERP and e-commerce platform coordinating point-of-sale transactions, multi-warehouse inventory levels, and real-time order processing across retail branches.",
    hasDeepDive: true,
    deepDive: {
      problem:
        "Retail stores and online storefronts suffered from inventory desynchronization during high-volume promotions, resulting in double-selling, manual reconciliation overhead, and slow checkout latencies.",
      approach:
        "Architected an event-driven inventory synchronization core using NestJS, PostgreSQL transactional locks, and Redis cache invalidation layers, ensuring sub-50ms stock checks and automated sync across retail outlets.",
      role: "Lead Backend & Systems Architect",
      architecture: {
        kind: "flow",
        nodes: ["Next.js Storefront", "POS Terminal", "API Gateway", "NestJS Core", "Redis Lock", "PostgreSQL DB", "Audit Log"],
      },
      technology: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Redis", "Docker"],
      challenges: [
        "Handling concurrent inventory decrements during flash sales across both physical POS terminals and web clients without deadlocks.",
        "Designing an offline-tolerant POS sync mechanism allowing physical branches to ring sales during transient network drops.",
      ],
      result:
        "Eliminated inventory reconciliation errors to 0%, reduced average order checkout response time by 62%, and streamlined operations across multiple retail branches.",
      lessons:
        "Optimistic locking paired with Redis distributed mutexes provides superior throughput compared to heavy pessimistic database transactions in high-throughput retail operations.",
    },
  },
  {
    id: "tiffin-bd",
    number: "03",
    name: "Tiffin BD",
    slug: "tiffin-bd",
    category: "Distributed Systems & Logistics",
    capabilities: [
      "Message-Driven Decoupling",
      "Asynchronous Queue Workers",
      "Idempotent Event Processing",
      "Backpressure Buffering",
      "99.98% High Availability",
    ],
    technology: ["Next.js", "NestJS", "RabbitMQ", "PostgreSQL", "Redis", "Docker"],
    description:
      "A subscription meal-delivery platform built around an asynchronous, message-driven backend rather than a monolithic request/response loop.",
    hasDeepDive: true,
    deepDive: {
      problem:
        "Order placement, kitchen prep scheduling, delivery routing, and SMS confirmations were running sequentially in a single process, causing request timeouts during the peak 11:30 AM lunch ordering rush.",
      approach:
        "Decoupled the request path from execution: the client talks to a Next.js frontend and a lightweight NestJS API, which publishes events onto RabbitMQ queues for dedicated worker nodes to process asynchronously.",
      role: "Founder & Lead Architect",
      architecture: {
        kind: "flow",
        nodes: ["Client", "Next.js", "NestJS API", "RabbitMQ Broker", "Kitchen Worker", "Logistics Worker", "PostgreSQL"],
      },
      technology: ["Next.js", "NestJS", "RabbitMQ", "PostgreSQL", "Redis", "Docker"],
      challenges: [
        "Ensuring idempotent event processing so that network retries never resulted in duplicate meal orders or double billing.",
        "Orchestrating route optimization batches dynamically based on driver availability and meal readiness time windows.",
      ],
      result:
        "Achieved 99.98% uptime during peak lunch surges, slashed API latency from 2,400ms to 85ms, and successfully delivered thousands of daily subscription orders.",
      lessons:
        "Message-driven architectures turn spiky traffic bursts into smooth, controlled background consumption queues that safeguard database stability.",
    },
  },
  {
    id: "freemail-ai",
    number: "04",
    name: "Freemail.ai",
    slug: "freemail-ai",
    category: "Autonomous AI & Context Engineering",
    capabilities: [
      "Multi-Agent Context Pipelines",
      "Prompt Injection Defense Middleware",
      "Deterministic Schema Validation",
      "Sanitized Data Ingestion",
    ],
    technology: ["Python", "FastAPI", "Next.js", "TypeScript", "Multi-Agent Workflows", "Vector DB"],
    description:
      "An intelligent email processing and reasoning middleware that extracts intent, retrieves contextual organizational knowledge, and drafts human-calibrated executive responses.",
    hasDeepDive: true,
    deepDive: {
      problem:
        "Generic LLM email responders hallucinate commitments, miss domain-specific organizational context, and frequently leak sensitive conversational history across different email threads.",
      approach:
        "Designed a multi-agent context pipeline with deterministic safety guardrails. Incoming emails pass through an intent classifier, followed by a scoped RAG context retriever, and a drafting agent checked by a critique verifier.",
      role: "AI Systems Engineer & Architect",
      architecture: {
        kind: "flow",
        nodes: ["Raw Email", "Intent Classifier", "Context Retriever", "Drafting Agent", "Verification Gate", "Approved Draft"],
      },
      technology: ["Python", "FastAPI", "Next.js", "LangChain/LangGraph", "ChromaDB", "TypeScript"],
      challenges: [
        "Preventing prompt injection attacks embedded inside incoming third-party email bodies.",
        "Minimizing token usage while preserving multi-turn historical thread context.",
      ],
      result:
        "Achieved a 94% human acceptance rate on drafted replies with zero reported prompt leakage or hallucinated commitments.",
      lessons:
        "Deterministic pre- and post-validation filters are essential in multi-agent LLM systems; trusting raw model output directly in enterprise workflows is an unacceptable operational risk.",
    },
  },
  {
    id: "sbf-print-dubai",
    number: "05",
    name: "SBF Print Dubai",
    slug: "sbf-print-dubai",
    category: "High-Throughput Digital Platform",
    capabilities: [
      "Client-Side Prepress Inspection",
      "Asynchronous Image Worker Pipeline",
      "Memory-Efficient Vector Rendering",
      "Automated CMYK Validation",
    ],
    technology: ["React", "TypeScript", "Node.js", "AWS S3", "Sharp", "Stripe API"],
    description:
      "A high-throughput custom print-on-demand platform featuring interactive prepress vector rendering, automated asset verification, and high-resolution PDF generation for commercial printing.",
    hasDeepDive: true,
    deepDive: {
      problem:
        "Commercial clients submitted unverified vector and raster artwork with incorrect color profiles (RGB vs CMYK) and improper bleed margins, causing prepress bottlenecks and expensive reprint wastage.",
      approach:
        "Engineered an automated browser-based prepress inspection tool coupled with a background image processing worker pipeline that validates resolution, inspects CMYK separations, and compiles print-ready proofs.",
      role: "Full-Stack Software Engineer",
      architecture: {
        kind: "flow",
        nodes: ["Client Upload", "Client Inspector", "Node.js API", "Worker Cluster", "Sharp Prepress", "AWS S3 Proofs"],
      },
      technology: ["React", "TypeScript", "Node.js", "Sharp", "AWS S3", "Tailwind CSS"],
      challenges: [
        "Processing gigabyte-scale print artwork in asynchronous background queues without exhausting server memory.",
        "Creating a zero-dependency SVG bleed and crop boundary visualization directly within the browser.",
      ],
      result:
        "Cut prepress approval time from 4 hours down to under 3 minutes per job, reducing print refund disputes by 85%.",
      lessons:
        "Validating asset constraints on the client before upload saves gigabytes of network bandwidth and prevents expensive compute in cloud pipelines.",
    },
  },
  {
    id: "moodle-proctoring-pro",
    number: "06",
    name: "Moodle Proctoring Pro",
    slug: "moodle-proctoring-pro",
    category: "EdTech & System Security",
    capabilities: [
      "Browser-Native Telemetry Hooks",
      "Low-Overhead Session Inspection",
      "Real-Time Anomaly Stream",
      "Zero Client Installation",
    ],
    technology: ["PHP", "JavaScript", "Moodle Core API", "WebRTC", "PostgreSQL"],
    description:
      "An automated exam integrity and proctoring extension for Moodle LMS, monitoring browser focus shifts, suspicious tab switching, and peripheral camera feeds with zero client software installation.",
    hasDeepDive: true,
    deepDive: {
      problem:
        "Standard online assessments in educational institutions were vulnerable to unmonitored tab switching, secondary display usage, and unauthorized copy-pasting during remote university examinations.",
      approach:
        "Built a lightweight native Moodle quiz plugin that enforces strict Page Visibility API inspection, full-screen lockdown, copy/paste event trapping, and encrypted periodic client telemetry heartbeats.",
      role: "Full-Stack Security & Plugin Developer",
      architecture: {
        kind: "flow",
        nodes: ["Student Browser", "Lockdown Hook", "Telemetry Stream", "Moodle Plugin API", "PostgreSQL Logs", "Instructor Dashboard"],
      },
      technology: ["PHP", "JavaScript", "Moodle API", "WebRTC", "PostgreSQL"],
      challenges: [
        "Maintaining high responsiveness and data integrity across thousands of simultaneous students taking exams concurrently on shared campus servers.",
        "Preventing students from disabling JavaScript hooks via browser developer tool manipulation.",
      ],
      result:
        "Adopted for university departmental examinations across 1,200+ students with 100% telemetry capture and tamper-evident anomaly reports.",
      lessons:
        "Lightweight browser-native APIs combined with encrypted cryptographic session nonces offer far better reliability and user trust than invasive root-level desktop spyware.",
    },
  },
  {
    id: "extra-restriction",
    number: "07",
    name: "Extra Restriction",
    slug: "extra-restriction",
    category: "Access Control & Systems Security",
    capabilities: [
      "In-Memory Boolean Rule Engine",
      "Subnet & Device Fingerprinting",
      "Sub-Millisecond Policy Evaluation",
      "Modular Capability Hooks",
    ],
    technology: ["PHP", "Moodle Access API", "Linux", "MySQL", "JavaScript"],
    description:
      "A granular conditional-access and capability-restriction engine empowering university instructors to enforce time-boxed IP subnet rules, device fingerprints, and prerequisite completion gates.",
    hasDeepDive: true,
    deepDive: {
      problem:
        "Institutional LMS platforms lacked flexible conditional release controls based on combined parameters such as physical laboratory IP subnet, browser device class, and sequential mastery prerequisites.",
      approach:
        "Implemented a modular restriction subplugin extending the Moodle Availability API, enabling multi-criteria boolean rules evaluation evaluated in memory before granting student access to sensitive exam resources.",
      role: "Backend Systems Developer",
      architecture: {
        kind: "flow",
        nodes: ["Access Request", "Subnet Filter", "Prerequisite Check", "Policy Evaluator", "Access Token", "Resource Grant"],
      },
      technology: ["PHP", "Moodle Availability API", "MySQL", "Linux"],
      challenges: [
        "Evaluating deeply nested multi-condition boolean logic trees in sub-millisecond execution times on high-load academic servers.",
        "Accurately detecting campus subnet ranges behind reverse proxies and CDN edge routers.",
      ],
      result:
        "Successfully prevented off-campus access during on-premise lab examinations across multiple academic departments.",
      lessons:
        "Designing modular plugin extensions that hook directly into core framework lifecycle hooks yields significant maintainability and upgrades without monkey-patching.",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
