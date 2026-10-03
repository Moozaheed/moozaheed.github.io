export interface CVEducation {
  degree: string;
  department?: string;
  institution: string;
  period: string;
  location: string;
  details?: string[];
  thesis?: string;
  coursework?: string[];
  honors?: string[];
}

export interface CVExperience {
  role: string;
  company: string;
  period: string;
  location: string;
  tagline?: string;
  bullets: string[];
}

export interface CVProject {
  name: string;
  stack: string;
  period?: string;
  bullets: string[];
}

export interface CVData {
  type: "engineering" | "academic";
  title: string;
  subtitle: string;
  badge: string;
  summary: string;
  contact: {
    name: string;
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
    firm: string;
  };
  researchInterests?: string[];
  education: CVEducation[];
  experience: CVExperience[];
  publications?: {
    title: string;
    status: string;
    year: string;
    bullets: string[];
  }[];
  projects: CVProject[];
  skills: {
    category: string;
    items: string[];
  }[];
  honorsCertifications?: string[];
  extracurricular?: {
    role: string;
    org: string;
    period: string;
    bullets: string[];
  }[];
}

export const engineeringCV: CVData = {
  type: "engineering",
  title: "Forward Deployed & Backend Systems Engineer",
  subtitle: "Enterprise Delivery · Distributed Backends · AI Systems",
  badge: "INDUSTRY & BACKEND CV",
  summary:
    "Results-driven Software Engineer and Founder specializing in AI systems, Context Engineering, and Backend Architecture. Experienced in forward-deployed enterprise delivery, high-throughput microservices, and client-centric SaaS products. Proven track record in orchestrating multi-agent AI workflows, optimizing high-concurrency cloud databases, and bridging business goals with scalable technical execution.",
  contact: {
    name: "G. M. Mozahad",
    email: "moozaheed@gmail.com",
    phone: "+8801886388416",
    location: "Dhaka, Bangladesh · Remote Worldwide",
    github: "github.com/Moozaheed",
    linkedin: "linkedin.com/in/moozaheed",
    firm: "craftsmenit.com",
  },
  education: [
    {
      degree: "Bachelor of Science in Computer Science and Engineering",
      institution: "International Islamic University Chittagong",
      period: "Jan. 2020 – Jan. 2025",
      location: "Chittagong, Bangladesh",
      details: ["Medium of Instruction: English"],
    },
  ],
  experience: [
    {
      role: "Founder & CEO",
      company: "Craftsmen IT",
      period: "Jan. 2026 – Present",
      location: "Dhaka, Bangladesh",
      bullets: [
        "Founded software consultancy delivering AI-native SaaS solutions, cloud backends, and full digital transformation.",
        "Architected advanced context engineering pipelines and LLM workflows, cutting prompt reasoning latency by 40%.",
        "Spearheaded end-to-end technical architecture and product design for international enterprise clients across Gulf countries.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Brain Station 23 PLC",
      period: "Apr. 2024 – Present",
      location: "Dhaka, Bangladesh",
      bullets: [
        "Serve as forward-deployed engineer for Bloomex Canada, driving direct collaboration across distributed client teams.",
        "Engineered high-throughput GPMS, OMS, and ARCA APIs in Laravel Lumen, cutting latency and eliminating data loss.",
        "Automated containerized Docker CI/CD pipelines with SonarQube, ensuring strict code quality and zero-downtime releases.",
      ],
    },
  ],
  projects: [
    {
      name: "Alainstar ERP & E-Commerce",
      stack: "Next.js, Laravel, PostgreSQL, Docker, CI/CD, AWS Services",
      period: "Jan. 2026 – Present",
      bullets: [
        "Engineered custom enterprise ERP and e-commerce platform for UAE auto parts dealer, automating inventory tracking.",
        "Optimized catalog lookup REST APIs and checkout workflows, eliminating operational bottlenecks and query latency.",
      ],
    },
    {
      name: "SBF Print Dubai",
      stack: "React, Node.js, Express, AWS Services, CI/CD, Digital Marketing",
      period: "Jan. 2026 – Mar. 2026",
      bullets: [
        "Delivered complete digital transformation, establishing a modern high-conversion web presence and ordering portal.",
        "Engineered automated order management workflows and customer support pipelines, resolving operational issues rapidly.",
      ],
    },
    {
      name: "Tiffin BD",
      stack: "NestJS, Next.js, TypeScript, RabbitMQ, Socket.io, Docker, AWS, CI/CD, Terraform",
      period: "Jan. 2026 – Apr. 2026",
      bullets: [
        "Pioneered AI-DLC with multi-agent workflows from kickoff to deployment, achieving 10x developer productivity gains.",
        "Built asynchronous real-time dispatch pipelines handling high-volume order queues via RabbitMQ and Socket.io.",
      ],
    },
    {
      name: "freemail.ai",
      stack: "Python, Postfix, Redis, REST API, WordPress Plugin",
      period: "May 2025 – July 2026",
      bullets: [
        "Architected disposable temporary email platform featuring dynamic multi-domain SMTP routing and auto-purge storage.",
        "Engineered high-speed REST APIs and sanitized inbox viewer pipelines handling real-time high-concurrency web traffic.",
      ],
    },
    {
      name: "Moodle Proctoring Pro",
      stack: "PHP, JavaScript, Moodle, MySQL, AWS, AI/ML",
      period: "Jan. 2025 – July 2025",
      bullets: [
        "Contributed to open-source plugin achieving official Moodle Certified Integration for 2,000+ global institutions.",
        "Implemented automated AI suspicion detection algorithms and optimized database queries for high-concurrency exams.",
      ],
    },
    {
      name: "Extra Restriction (Online Exam SaaS)",
      stack: "Node.js, Electron, WebRTC, AWS",
      period: "Apr. 2024 – Dec. 2024",
      bullets: [
        "Built secure exam SaaS platform featuring real-time WebRTC live proctoring, face detection, and object detection.",
        "Deployed scalable backend streaming infrastructure utilized by prestigious universities for high-stakes online exams.",
      ],
    },
  ],
  skills: [
    {
      category: "AI & Context Engineering",
      items: ["Context Engineering", "Prompt Engineering", "Multi-Agent Workflows", "AI-DLC", "LLMs", "RAG Pipelines"],
    },
    {
      category: "Backend Architecture & Languages",
      items: ["Microservices", "RESTful APIs", "Python", "TypeScript", "JavaScript", "PHP", "C/C++", "Java", "SQL"],
    },
    {
      category: "Frameworks & Libraries",
      items: ["Node.js", "NestJS", "Next.js", "React", "Laravel", "Lumen", "Electron", "Express", "Tailwind CSS"],
    },
    {
      category: "DevOps & Databases",
      items: ["Docker", "AWS", "CI/CD", "Git/GitHub", "PostgreSQL", "MySQL", "Redis", "RabbitMQ", "Linux", "Terraform", "Kubernetes"],
    },
    {
      category: "Product & Problem Solving",
      items: ["UI/UX Wireframing", "System Design", "1,500+ Algorithmic Problems Solved (LeetCode, Codeforces)"],
    },
  ],
  extracurricular: [
    {
      role: "Undergraduate Teaching Assistant",
      org: "International Islamic University Chittagong",
      period: "June 2022 – Jan. 2024",
      bullets: ["Conducted courses and lab sessions: Data Structures, Algorithms, Object-Oriented Programming, and DBMS."],
    },
    {
      role: "Trainer & Organizing Secretary",
      org: "IIUC Competitive Programming Society",
      period: "Jan. 2022 – Jan. 2024",
      bullets: ["Conducted algorithms training sessions, competitive programming boot camps, and technical seminars."],
    },
  ],
};

export const academicCV: CVData = {
  type: "academic",
  title: "Academic & Scientific Research Curriculum Vitae",
  subtitle: "Federated Learning · Multi-Agent LLM Security · Biomedical AI",
  badge: "ACADEMIC & RESEARCH CV",
  summary:
    "Applied Machine Learning Researcher and Systems Architect investigating privacy-preserving federated continual learning across non-IID data distributions, and runtime inspection middleware for securing multi-agent LLM systems against prompt injection attacks.",
  contact: {
    name: "G. M. Mozahad",
    email: "moozaheed@gmail.com",
    phone: "+8801886388416",
    location: "Dhaka, Bangladesh · Remote Worldwide",
    github: "github.com/Moozaheed",
    linkedin: "linkedin.com/in/moozaheed",
    firm: "craftsmenit.com",
  },
  researchInterests: [
    "Distributed & Federated Learning: Privacy-preserving ML, continual learning, non-IID optimization, decentralized and communication-efficient learning, differential privacy, secure aggregation.",
    "Trustworthy & Explainable AI: Explainable AI (XAI), interpretable ML, robust and responsible AI, AI safety, adversarial robustness, mechanistic interpretability.",
    "LLMs & Multi-Agent AI: Robust and reliable LLM pipelines, NLP, LLM security and evaluation, multi-agent systems, AI middleware architectures, RAG, context engineering.",
    "Biomedical AI: Medical image analysis, clinical AI, domain adaptation, multimodal learning, computer-aided diagnosis (CAD), privacy-preserving healthcare.",
    "Large-Scale Systems & Software Engineering: Distributed systems, cloud-native architectures, scalable microservices, fault tolerance, event-driven streaming pipelines, AI-assisted software engineering (AI-DLC).",
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science and Engineering",
      department: "Department of Computer Science and Engineering",
      institution: "International Islamic University Chittagong",
      period: "2020 – 2025",
      location: "Chittagong, Bangladesh",
      thesis: "Privacy-Preserving Federated Learning for Liver Disease Detection from Distributed Medical Records",
      honors: ["3× Full Tuition Merit Waiver", "Talent Development Program Award by WAMY"],
      coursework: [
        "Machine Learning",
        "Artificial Intelligence",
        "Neural Networks",
        "Computer Security",
        "Digital Image Processing",
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
        "Discrete Mathematics",
        "Statistics & Probability",
        "Calculus & Linear Algebra",
      ],
    },
  ],
  publications: [
    {
      title: "Privacy-Preserving Federated Continual Learning for Multi-Domain Medical Imaging Under Non-IID Skew",
      status: "Manuscript Under Conference Review",
      year: "2026",
      bullets: [
        "Formulated an end-to-end privacy-preserving federated continual learning framework to mitigate catastrophic forgetting and severe inter-site domain shifts in distributed clinical environments without raw patient data transfer.",
        "Evaluated systematically across multi-center medical imaging benchmarks under non-IID client partitions, achieving resilient convergence, robust diagnostic stability, and superior cross-domain generalization.",
      ],
    },
    {
      title: "PIDM: A Middleware Framework for Detecting Prompt Injection Attacks in Multi-Agent LLM Pipelines",
      status: "Manuscript Under Conference Review",
      year: "2026",
      bullets: [
        "Architected a modular middleware security layer that intercepts, inspects, and neutralizes direct and indirect prompt injection attacks across inter-agent LLM communication pipelines.",
        "Developed real-time payload sanitization and semantic policy-checking mechanisms, safeguarding multi-agent collaboration and multi-step tool execution with minimal inference latency.",
      ],
    },
  ],
  experience: [
    {
      role: "Undergraduate Teaching Assistant",
      company: "International Islamic University Chittagong (IIUC)",
      period: "June 2022 – January 2024",
      location: "Chittagong, Bangladesh",
      bullets: [
        "Mentored 150+ undergraduate students across core courses: Data Structures, Algorithms, Object-Oriented Programming (OOP), and Database Management Systems (DBMS).",
        "Conducted weekly laboratory sessions and problem-solving clinics, designed coding assessments, guided students through algorithmic analysis, and assisted faculty in evaluating semester capstone projects.",
      ],
    },
    {
      role: "Founder & CEO",
      company: "Craftsmen IT",
      period: "January 2026 – Present",
      location: "Dhaka, Bangladesh",
      tagline: "AI Systems, SaaS & Digital Transformation Consultancy",
      bullets: [
        "Directing research and commercial deployment of AI-native SaaS architectures, distributed event pipelines, and multi-agent reasoning systems.",
        "Architected advanced context engineering pipelines and LLM workflows, cutting prompt reasoning latency by 40%.",
      ],
    },
    {
      role: "Software Engineer I",
      company: "Brain Station 23 PLC",
      period: "April 2024 – Present",
      location: "Dhaka, Bangladesh",
      bullets: [
        "Forward-deployed engineer for enterprise client Bloomex (Canada & Australia), architecting high-throughput GPMS, OMS, and ARCA APIs in Laravel Lumen to eliminate order data loss.",
        "Developed and maintained scalable SaaS applications using Node.js, PHP (Moodle), Electron.js, and Socket.io; applied modern AI-DLC workflows.",
      ],
    },
  ],
  projects: [
    {
      name: "Tiffin BD (Distributed AI-DLC Pipeline)",
      stack: "Next.js, NestJS, TypeScript, MySQL, RabbitMQ, Socket.io, Docker, AWS, Terraform",
      bullets: [
        "Pioneered an AI-DLC workflow leveraging multi-agentic AI to achieve 10x productivity gains; engineered realtime asynchronous dispatch pipelines handling high-volume order queues via Socket.io and RabbitMQ.",
      ],
    },
    {
      name: "freemail.ai (Disposable SMTP Platform)",
      stack: "Python, Postfix, Redis, Docker, High-Throughput REST APIs",
      bullets: [
        "Architected disposable temporary email platform with dynamic multi-domain SMTP routing and auto-purge storage; engineered high-speed REST APIs handling real-time high-concurrency web traffic.",
      ],
    },
    {
      name: "Moodle Proctoring Pro & Extra Restriction (AI Exam SaaS)",
      stack: "WebRTC, PHP, Node.js, Electron, MySQL, Docker, AWS, AI/ML",
      bullets: [
        "Engineered open-source and SaaS exam proctoring platforms serving 2,000+ global institutions and universities with official Moodle Certified Integration, WebRTC live streaming, face/object detection, and AI suspicion analysis.",
      ],
    },
  ],
  skills: [
    {
      category: "Programming Languages",
      items: ["Python", "C/C++", "Java", "JavaScript (ES6+)", "TypeScript", "PHP", "SQL", "Bash", "LaTeX"],
    },
    {
      category: "Machine Learning & AI",
      items: ["PyTorch", "TensorFlow", "Keras", "Hugging Face", "Scikit-learn", "OpenCV", "Deep Learning", "Representation Learning", "Transfer Learning"],
    },
    {
      category: "Advanced Research Topics",
      items: ["Federated & Continual Learning", "Distributed Optimization", "Context Engineering", "Explainable AI (XAI)", "Trustworthy AI", "Multi-Agent Systems", "Prompt Injection Mitigation", "Medical Imaging"],
    },
    {
      category: "Distributed & Cloud Systems",
      items: ["Microservices", "REST APIs", "WebSockets", "WebRTC", "RabbitMQ", "Redis", "AWS Services", "Fault-Tolerant Architecture"],
    },
    {
      category: "DevOps & Cloud Infra",
      items: ["Docker", "Kubernetes", "Terraform (IaC)", "GitHub Actions", "Git/GitHub", "Linux (Ubuntu/Debian)", "CI/CD Pipelines"],
    },
  ],
  honorsCertifications: [
    "Participant, ACM-ICPC Asia Regional; solved 1,500+ problems on online judges.",
    "3× Full Tuition Fees Merit Waiver — International Islamic University Chittagong",
    "Talent Development Program Award by WAMY",
    "Deep Learning with TensorFlow — IBM",
    "AI & Machine Learning with Python — BHTPA",
    "Evolution of AI Native Software Engineering & Agentic Engineering — Brain Station 23",
  ],
  extracurricular: [
    {
      role: "Trainer & Organizing Secretary",
      org: "IIUC Competitive Programming Society",
      period: "2022 – 2024",
      bullets: ["Conducted algorithms training sessions, competitive programming boot camps, and technical seminars for members."],
    },
    {
      role: "Organizing Secretary",
      org: "IIUC Data Science Club",
      period: "2022 – 2024",
      bullets: ["Organized workshops on data analysis, machine learning foundations, and technical competitions."],
    },
  ],
};
