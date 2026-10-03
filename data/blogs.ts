export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  topic: string;
  summary: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "decoupling-request-lifecycles-distributed-commerce",
    title: "Decoupling Request Lifecycles: Surviving 10× Holiday Traffic Spikes in Distributed Commerce",
    date: "October 2025",
    readTime: "6 min read",
    topic: "Backend Architecture",
    summary:
      "Why monolithic request-response loops collapse under sudden holiday bursts, and how event-driven queue buffering in Laravel Lumen and RabbitMQ prevents database thread starvation.",
    content: [
      "In high-volume e-commerce networks spanning multiple national territories (such as nationwide Canadian and Australian holiday rushes), peak traffic rarely scales linearly. During Valentine's Day and Mother's Day, order volume surges by 8× to 12× within narrow two-hour delivery cut-off windows.",
      "The architectural vulnerability of traditional frameworks is synchronous execution: when a customer submits an order, the server process attempts to validate payment, reserve multi-warehouse inventory, generate order PDFs, dispatch confirmation notifications, and compute warehouse dispatch routing all within a single HTTP transaction. As database connection pools saturate, thread starvation cascades upstream, causing reverse proxy 504 gateway timeouts and catastrophic order drops.",
      "The remedy lies in strict request lifecycle decoupling: the customer-facing endpoint does exactly three things — validates the input schema, issues an immutable idempotency key, and pushes an encrypted payload onto an asynchronous queue before returning a 202 Accepted response in under 40 milliseconds.",
      "Dedicated downstream worker pools consume events at a controlled, sustainable rate. If payment gateways or warehouse systems stutter, the message queue absorbs the backpressure without losing a single customer transaction. Resilient architecture is not about building infinite throughput; it is about building graceful, bounded ingestion.",
    ],
  },
  {
    slug: "runtime-defense-gates-multi-agent-llms",
    title: "Runtime Defense Gates for Multi-Agent LLMs: Mitigating Prompt Injections",
    date: "August 2025",
    readTime: "8 min read",
    topic: "AI Safety & Systems",
    summary:
      "Exploring PIDM (Prompt Injection Defense Middleware) state transitions to safeguard communicating autonomous agents from indirect malicious prompt hijacking.",
    content: [
      "As multi-agent workflows transition from experimental playgrounds to enterprise production pipelines, their attack surface expands dramatically. While traditional single-turn LLMs are vulnerable to direct jailbreaks, multi-agent systems introduce a much more insidious threat: indirect prompt injection.",
      "When an untrusted external document, email body, or database record is retrieved by an ingesting agent and subsequently summarized for an executive decision agent, malicious instructions embedded within the text can compromise the entire supervisory chain.",
      "Our research into PIDM (Prompt Injection Defense Middleware) demonstrates that probabilistic safety system prompts alone are fundamentally inadequate. Instead, agents must be separated by deterministic runtime inspection gates.",
      "Every inter-agent message must conform to strict JSON Schema contracts, undergo semantic anomaly scoring against known adversarial embeddings, and enforce immutable privilege boundaries where downstream executors cannot perform tool actions without cryptographically signed authorization tokens.",
    ],
  },
  {
    slug: "catastrophic-forgetting-federated-learning",
    title: "Mitigating Catastrophic Forgetting in Decentralized Medical Imaging",
    date: "May 2025",
    readTime: "10 min read",
    topic: "Federated ML Research",
    summary:
      "An empirical look at parameter drift across non-IID hospital client distributions and how orthogonal weight consolidation preserves multi-organ diagnostic accuracy.",
    content: [
      "Federated learning holds tremendous promise for healthcare: hospitals across different countries can collaboratively train deep diagnostic models on patient MRI and CT scans without ever sharing raw patient data outside institutional firewalls.",
      "However, in real-world clinical deployments, data distributions across hospitals are severely non-IID (non-identically and independently distributed). Hospital A may specialize in oncology, while Hospital B sees primarily pediatric trauma. Furthermore, hospitals acquire new scanning modalities sequentially over time.",
      "When local models train on sequential tasks, they suffer from catastrophic forgetting: the neural weights that enabled high accuracy on previous diagnostic classifications are overwritten by the gradient updates of the new task.",
      "By integrating orthogonal projection constraints into the local optimization objective and computing fisher information approximations prior to federated aggregation, we demonstrate that global models can retain previous clinical knowledge while rapidly adapting to novel institutional distributions.",
    ],
  },
  {
    slug: "high-concurrency-database-locking-postgresql",
    title: "The Pragmatist's Guide to High-Concurrency Database Locking in PostgreSQL",
    date: "January 2025",
    readTime: "5 min read",
    topic: "Database Internals",
    summary:
      "Optimistic vs. pessimistic locking in practice: combining Redis distributed mutexes with PostgreSQL row versioning to eliminate double-selling during flash retail spikes.",
    content: [
      "Every software engineer eventually encounters the race condition that brings a retail system to its knees: two concurrent shoppers attempt to purchase the exact last unit of inventory at the exact same millisecond.",
      "Under heavy read-modify-write loads, naive SELECT followed by UPDATE queries result in double-selling. Conversely, heavy pessimistic locks (`SELECT ... FOR UPDATE`) lock rows across transactions, creating database deadlock cascades when hundreds of point-of-sale terminals and web clients contend for the same stock records.",
      "The practical production pattern combines two layers: a sub-millisecond Redis distributed mutex (using atomic SETNX tokens with TTLs) to serialize incoming order contention at the edge, followed by PostgreSQL optimistic concurrency control (`UPDATE inventory SET stock = stock - 1, version = version + 1 WHERE id = $1 AND version = $2`).",
      "This hybrid approach maintains sub-50ms checkout latency, guarantees strict ACID consistency, and ensures zero deadlocks even during peak multi-branch promotions.",
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
