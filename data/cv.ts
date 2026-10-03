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
  pdfUrl: string;
  contact: {
    name: string;
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
    firm: string;
    website: string;
  };
  researchInterests?: string[];
  education: CVEducation[];
  languages?: {
    test: string;
    testScore: string;
    languages: string;
  };
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
  pdfUrl: "/G_M_Mozahad_CV.pdf",
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
    website: "moozaheed.github.io",
  },
  education: [
    {
      degree: "Bachelor of Science in Computer Science and Engineering",
      institution: "International Islamic University Chittagong",
      period: "2020 – 2026",
      location: "Chittagong, Bangladesh",
      details: ["Medium of Instruction: English"],
      thesis: "Privacy-Preserving Federated Learning for Liver Disease Detection from Distributed Medical Records",
    },
  ],
  languages: {
    test: "IELTS Academic",
    testScore: "Target Overall Band: 6.5 (min. 6.0 each band)",
    languages: "English (Full Professional & Academic Proficiency, CEFR C1), Bengali (Native)",
  },
  experience: [
    {
      role: "Founder & CEO",
      company: "Craftsmen IT",
      period: "January 2026 – Present",
      location: "Dhaka, Bangladesh",
      tagline: "AI Systems, SaaS & Digital Transformation Consultancy",
      bullets: [
        "Founded software consultancy delivering AI-native SaaS solutions, cloud architectures, and digital transformations.",
        "Architected advanced context engineering pipelines and multi-agent LLM workflows, reducing prompt latency by 40%.",
        "Directed end-to-end technical architecture and product design for enterprise clients across the Gulf region.",
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
      category: "Programming",
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
    "Awards & Waivers: Full Tuition Fees Waiver; WAMY Scholarship.",
    "Certifications: Deep Learning with TensorFlow (IBM); AI & Machine Learning with Python (BHTPA); Evolution of AI Native Software Engineering (BS23); Agentic Engineering (BS23).",
    "Leadership: Trainer & Organizing Secretary, IIUC Competitive Programming Society; Organizing Secretary, IIUC Data Science Club; Asst. General Secretary, IIUC Computer Club.",
  ],
  extracurricular: [
    {
      role: "Undergraduate Teaching Assistant",
      org: "International Islamic University Chittagong",
      period: "June 2022 – January 2024",
      bullets: ["Conducted courses and lab sessions: Data Structures, Algorithms, Object-Oriented Programming, and DBMS."],
    },
    {
      role: "Trainer & Organizing Secretary",
      org: "IIUC Competitive Programming Society",
      period: "2022 – 2024",
      bullets: ["Conducted algorithms training sessions, competitive programming boot camps, and technical seminars."],
    },
  ],
};

export const academicCV: CVData = {
  type: "academic",
  title: "Academic & Scientific Research Curriculum Vitae",
  subtitle: "Federated Learning · Multi-Agent LLM Security · Biomedical AI",
  badge: "ACADEMIC & RESEARCH CV",
  pdfUrl: "/G_M_Mozahad_CV.pdf",
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
      period: "2020 – 2026",
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
      role: "Founder & CEO",
      company: "Craftsmen IT",
      period: "January 2026 – Present",
      location: "Dhaka, Bangladesh",
      tagline: "AI Systems, SaaS & Digital Transformation Consultancy",
      bullets: [
        "Directing research and commercial deployment of AI-native SaaS architectures, distributed event pipelines, and multi-agent reasoning systems.",
        "Architected advanced context engineering pipelines and LLM workflows, cutting prompt reasoning latency by 40%.",
        "Directed end-to-end technical architecture and product design for enterprise clients across the Gulf region.",
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
