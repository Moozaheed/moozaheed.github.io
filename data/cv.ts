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

export interface CVPublication {
  title: string;
  status: string;
  year: string;
  bullets?: string[];
}

export interface CVData {
  type: "engineering" | "academic";
  title: string;
  subtitle: string;
  badge: string;
  summary: string;
  pdfUrl?: string;
  contact: {
    name: string;
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
    firm?: string;
    website: string;
  };
  researchInterests?: string[];
  education: CVEducation[];
  languages?:
    | {
        test?: string;
        testScore?: string;
        languages: string;
      }
    | string[];
  experience: CVExperience[];
  publications?: CVPublication[];
  projects: CVProject[];
  skills: {
    category: string;
    items: string[];
  }[];
  honorsCertifications?: string[];
  certifications?: string[];
  extracurricular?: {
    role: string;
    org: string;
    period: string;
    bullets: string[];
  }[];
  hobbies?: {
    category: string;
    description: string;
  }[];
}

export const engineeringCV: CVData = {
  type: "engineering",
  title: "Software Engineer — Backend & Distributed Systems",
  subtitle: "Microservices · SaaS · Distributed Systems · AI Systems",
  badge: "INDUSTRY & BACKEND CV",
  summary:
    "Results-driven Software Engineer with over 3 years of experience in microservices, SaaS, and distributed systems, specializing in AI systems and backend architecture. Proven track record optimizing high-concurrency APIs and databases, orchestrating multi-agent AI workflows, and delivering client-centric SaaS products for enterprise clients. Committed to architecting resilient, scalable systems that bridge business goals with technical execution.",
  contact: {
    name: "G. M. Mozahad",
    email: "moozaheed@gmail.com",
    phone: "+8801886388416",
    location: "Dhaka, Bangladesh · Remote Worldwide",
    github: "github.com/Moozaheed",
    linkedin: "linkedin.com/in/moozaheed",
    website: "moozaheed.github.io",
  },
  experience: [
    {
      role: "Software Engineer I",
      company: "Brain Station 23 PLC",
      period: "April 2024 – Present",
      location: "Dhaka, Bangladesh",
      bullets: [
        "Engineered and maintained Laravel Lumen microservices for Bloomex Canada’s GPMS, OMS, and ARCA systems as an augmented resource, collaborating with a distributed team of approximately 8 engineers across Bangladesh and Canada.",
        "Optimized REST APIs and MySQL queries across core order-management services and refactored warehouse/order-processing logic, reducing average API response latency by approximately 20–25% and cutting order-data errors by an estimated 15%.",
        "Automated CI/CD deployment pipelines with Docker, reducing manual deployment time by approximately 30–40% and lowering production incident rates, while resolving 50+ SonarQube-flagged code quality and security issues across multiple microservices.",
        "Increased unit and integration test coverage, contributing to an estimated 20% reduction in post-release bugs, while consistently delivering on commitments within two-week Agile sprints.",
      ],
    },
  ],
  skills: [
    {
      category: "AI & Machine Learning",
      items: [
        "Machine Learning",
        "Deep Learning",
        "Context Engineering",
        "Prompt Engineering",
        "Multi-Agent Workflows",
        "AI-DLC",
        "LLMs",
        "RAG Pipelines",
      ],
    },
    {
      category: "Programming Languages",
      items: ["Python", "TypeScript", "JavaScript", "PHP", "C/C++", "Java", "SQL"],
    },
    {
      category: "Frameworks and Libraries",
      items: ["Laravel", "Lumen", "Node JS", "NestJS", "React", "Redux", "Next.js", "Electron", "Express"],
    },
    {
      category: "Distributed & Cloud Systems",
      items: [
        "Microservices",
        "REST APIs",
        "WebSockets",
        "WebRTC",
        "Socket.IO",
        "RabbitMQ",
        "Redis",
        "AWS Services",
        "Fault-Tolerant Architecture",
        "High-Concurrency Backends",
      ],
    },
    {
      category: "Software Engineering",
      items: [
        "System Design",
        "Scalable Architecture",
        "API Design",
        "Database Optimization",
        "Design Patterns",
        "Clean Architecture",
        "Test Automation",
        "Performance Engineering",
      ],
    },
    {
      category: "DevOps & Cloud Infra",
      items: [
        "Docker",
        "Kubernetes",
        "Terraform (IaC)",
        "GitHub Actions",
        "Git/GitHub",
        "Linux (Ubuntu/Debian)",
        "CI/CD Pipelines",
        "Cloud Deployment",
        "Observability & Monitoring",
      ],
    },
    {
      category: "Databases & Dev Tools",
      items: ["MySQL", "PostgreSQL", "MongoDB", "NoSQL", "SonarQube", "Figma", "Postman", "Jira", "Workbench"],
    },
    {
      category: "Product Design & Problem Solving",
      items: [
        "UI/UX Wireframing",
        "1500+ problems solved on LeetCode, Codeforces, and other judges",
        "ICPC Regional participant",
      ],
    },
    {
      category: "Soft & Managerial Skills",
      items: [
        "Attention to Detail",
        "Technical Leadership",
        "Client Management",
        "Cross-Functional Teamwork",
      ],
    },
  ],
  projects: [
    {
      name: "Alainstar ERP & E-Commerce",
      stack: "Next.js, Laravel, PostgreSQL, Docker, CI/CD, AWS Services",
      period: "Jan 2026 – Present",
      bullets: [
        "Engineered a custom enterprise ERP and e-commerce platform for a UAE-based auto parts dealer, automating inventory tracking and order management.",
        "Optimized catalog lookup REST APIs and checkout workflows, eliminating operational bottlenecks and reducing query latency.",
      ],
    },
    {
      name: "freemail.ai",
      stack: "Python, Postfix, Redis, REST API, WordPress Plugin",
      period: "May 2025 – July 2026",
      bullets: [
        "Architected a disposable temporary email platform featuring dynamic multi-domain SMTP routing and auto-purge storage.",
        "Engineered high-speed REST APIs and a sanitized inbox-viewer pipeline handling real-time, high-concurrency web traffic.",
      ],
    },
    {
      name: "Extra Restriction",
      stack: "Node.js, Moodle, Electron JS, WebRTC, Docker, STUN/TURN, REST API, MongoDB, AWS Services",
      bullets: [
        "Developed a SaaS solution for secure online exams, featuring suspicious activity detection, live streaming and recording, identity verification, object detection, and multiple face detection for robust exam security.",
        "Implemented scalable backend services, real-time communication, and secure data handling.",
        "Used by renowned universities, helping them securely conduct high-stakes online exams.",
      ],
    },
    {
      name: "Moodle Proctoring",
      stack: "PHP, JavaScript, Moodle, REST API, MySQL, AWS, CI/CD, SonarQube, AI, ML",
      bullets: [
        "Contributed extensively to the Open Source Moodle Proctoring, achieving Moodle Certified Integration status through rigorous QA, security, and performance testing.",
        "Integrated multiple new features, optimized database queries, and ensured high code quality for a reliable and scalable solution used by 2000+ institutions worldwide.",
      ],
    },
    {
      name: "Bloomex Canada",
      stack: "Laravel Lumen, React, Redux, Next.js, PHP, CI/CD, Docker, MySQL, Cron Jobs",
      bullets: [
        "Worked on Laravel Lumen microservices and React Redux to enhance performance and add new features to the Bloomex internal panels and APIs.",
        "Worked as augmented resources for their GPMS, OMS, and ARCA API (for 3rd party integrations).",
        "Enhanced performance and accuracy by optimizing backend operations, reducing warehouse errors, and minimizing data loss. Wrote unit tests and automated CI/CD processes to improve code quality and system reliability.",
      ],
    },
    {
      name: "Tiffin BD",
      stack: "Next.js, React Native, NestJS, TypeScript, MySQL, RabbitMQ, Socket.io, Docker, Grafana, Firebase",
      bullets: [
        "Led the architecture and development of this platform with web, mobile, and microservice-based backend applications.",
        "Applied an AI-DLC from kickoff to production delivery, leveraging multi-agentic AI workflows to accelerate development, testing, debugging, and deployment, resulting in approximately 10x productivity gains.",
        "Built real-time order processing and notification pipelines using Socket.io, RabbitMQ, and Firebase Cloud Messaging, while implementing RBAC, database migrations, and end-to-end observability.",
      ],
    },
  ],
  certifications: [
    "Deep Learning with TensorFlow – IBM",
    "AI & Machine Learning with Python – BHTPA",
    "Evolution of AI-Native Software Engineering – Brain Station 23",
    "Agentic Engineering – Brain Station 23",
    "Claude Certified Architect – Foundations – Anthropic (In Progress)",
  ],
  publications: [
    {
      title: "Privacy-Preserving Federated Continual Learning for Multi-Domain Medical Imaging Under Non-IID Skew",
      status: "Manuscript Under Review",
      year: "2026",
      bullets: [],
    },
    {
      title: "PIDM: A Middleware Framework for Detecting Prompt Injection Attacks in Multi-Agent LLM Pipelines",
      status: "Manuscript Under Review",
      year: "2026",
      bullets: [],
    },
  ],
  languages: [
    "English – Full Professional & Academic Proficiency (CEFR C1)",
    "Bengali – Native",
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science and Engineering",
      institution: "International Islamic University Chittagong",
      period: "Jan 2020 – Jan 2025",
      location: "Chittagong, Bangladesh",
    },
  ],
  extracurricular: [
    {
      role: "Undergraduate Teaching Assistant",
      org: "International Islamic University Chittagong",
      period: "June 2022 – January 2024",
      bullets: [
        "Conducted courses: Data Structures, Algorithms, Object-Oriented Programming, Database Management System",
      ],
    },
    {
      role: "Trainer & Organizing Secretary",
      org: "IIUC Competitive Programming Society",
      period: "Jan 2022 – Jan 2024",
      bullets: [
        "Conducting training sessions, boot camps, arranging contests and seminars, tracking members' performance, and ensuring the smooth functioning of the club, providing a positive experience for members.",
      ],
    },
  ],
  hobbies: [
    { category: "Photography", description: "Nature & architectural photography" },
    { category: "Culinary Arts", description: "Cooking authentic Bangla cuisine" },
    { category: "Travel & Exploration", description: "Exploring new destinations, scenic topography, and historic architecture" },
    { category: "Gardening", description: "Tending ornamental plants and indoor foliage" },
    { category: "Sports", description: "Badminton, Football" },
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
    website: "moozaheed.github.io",
  },
  researchInterests: [
    "Distributed & Federated Learning: Privacy-preserving ML, continual learning, non-IID optimization, decentralized and communication-efficient learning, differential privacy, secure aggregation.",
    "Trustworthy & Explainable AI: Explainable AI (XAI), interpretable ML, robust and responsible AI, AI safety, adversarial robustness, mechanistic interpretability, privacy and security.",
    "LLMs & Multi-Agent AI: Robust and reliable LLM pipelines, NLP, LLM security and evaluation, multi-agent systems, AI middleware architectures, Retrieval-Augmented Generation (RAG), context engineering.",
    "Biomedical AI: Medical image analysis, clinical AI, domain adaptation, multimodal learning, computer-aided diagnosis (CAD), clinical foundation models, privacy-preserving healthcare.",
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
        "Numerical Methods",
        "Mathematical Analysis",
        "Discrete Mathematics",
        "Statistics & Probability",
        "Calculus & Linear Algebra",
      ],
    },
  ],
  languages: {
    test: "IELTS Academic",
    testScore: "Target Overall Band: 6.5 (min. 6.0 each band)",
    languages: "English (Full Professional & Academic Proficiency, CEFR C1), Bengali (Native)",
  },
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
      role: "Software Engineer I",
      company: "Brain Station 23 PLC",
      period: "April 2024 – Present",
      location: "Dhaka, Bangladesh",
      bullets: [
        "Forward-deployed engineer for enterprise client Bloomex (Canada & Australia), architecting high-throughput GPMS, OMS, and ARCA APIs in Laravel Lumen to eliminate order data loss and cut query latency.",
        "Developed and maintained scalable SaaS applications using Node.js, PHP (Moodle), Electron.js, and Socket.io; applied modern AI-DLC workflows to accelerate testing and deployment cycles.",
        "Containerized microservices and automated CI/CD pipelines on AWS cloud infrastructure.",
      ],
    },
  ],
  projects: [
    {
      name: "Tiffin BD",
      stack: "Next.js, React Native, NestJS, TypeScript, MySQL, RabbitMQ, Socket.io, Docker, AWS, Terraform",
      bullets: [
        "Pioneered an AI-DLC workflow leveraging multi-agentic AI to achieve 10x productivity gains; engineered real-time asynchronous dispatch pipelines handling high-volume order queues via Socket.io, RabbitMQ, and Firebase.",
      ],
    },
    {
      name: "Bloomex (Canada & Australia)",
      stack: "Laravel Lumen, React, Redux, Next.js, MySQL, Docker, AWS, Microservices",
      bullets: [
        "Engineered high-throughput OMS, GPMS, and ARCA APIs across Canadian and Australian operations; optimized microservices to eliminate order data loss and reduce warehouse processing latency.",
      ],
    },
    {
      name: "freemail.ai",
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
      items: ["PyTorch", "TensorFlow", "Keras", "Hugging Face", "Scikit-learn", "OpenCV", "Deep Learning", "Representation Learning", "Transfer Learning", "Multimodal Learning"],
    },
    {
      category: "Advanced Research Topics",
      items: ["Federated & Continual Learning", "Distributed Optimization", "Context Engineering", "Explainable AI (XAI)", "Trustworthy AI", "Multi-Agent AI", "LLMs", "RAG", "Prompt Injection Mitigation", "AI Safety", "Medical Image Analysis"],
    },
    {
      category: "Distributed & Cloud Systems",
      items: ["Microservices", "REST APIs", "WebSockets", "WebRTC", "Socket.IO", "RabbitMQ", "Redis", "AWS Services", "Fault-Tolerant Architecture", "High-Concurrency Backends"],
    },
    {
      category: "Software Engineering & Architecture",
      items: ["System Design", "Scalable Architecture", "API Design", "Database Optimization", "Design Patterns", "Clean Architecture", "Test Automation", "CI/CD", "Observability", "Performance Engineering", "AIDLC"],
    },
    {
      category: "DevOps & Cloud Infrastructure",
      items: ["Docker", "Kubernetes", "Terraform (IaC)", "GitHub Actions", "Git/GitHub", "Linux (Ubuntu/Debian)", "CI/CD Pipelines", "Cloud Deployment", "Observability & Monitoring"],
    },
  ],
  honorsCertifications: [
    "Contest Programming: Participant, ACM-ICPC Asia Regional; solved 1,500+ problems on online judges.",
    "Awards & Waivers: 3× Full Tuition Fees Merit Waiver — International Islamic University Chittagong; WAMY Scholarship.",
    "Certifications: Deep Learning with TensorFlow (IBM); AI & Machine Learning with Python (BHTPA); Evolution of AI Native Software Engineering (BS23); Agentic Engineering (BS23).",
    "Leadership & Service: Trainer & Organizing Secretary, IIUC Competitive Programming Society; Organizing Secretary, IIUC Data Science Club; Asst. General Secretary, IIUC Computer Club.",
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

export function getCV(type: "engineering" | "academic"): CVData {
  return type === "engineering" ? engineeringCV : academicCV;
}
