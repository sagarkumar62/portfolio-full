export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: "AI & Data Engineering" | "Full-Stack System" | "Frontend & Creative";
  problem: string;
  solution: string;
  myContribution: string;
  architectureHighlight: string;
  techStack: string[];
  metricsOrEvidence?: string;
  liveUrl?: string;
  repoUrl?: string;
  internalStatus?: string;
  featured: boolean;
  visualType: "pipeline" | "rag-flow" | "career-graph" | "audio-stream" | "service-grid";
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  duration?: string;
  location: string;
  isCurrent: boolean;
  type: "Internship" | "Contract";
  domain: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  timeline: string;
  score: string;
  scoreType: "CGPA" | "Percentage";
  badge?: string;
  specialization?: string;
}

export interface SkillCategory {
  title: string;
  categoryKey: "frontend" | "backend" | "ai" | "databases" | "tools";
  description: string;
  icon: string;
  skills: {
    name: string;
    level: "Core" | "Advanced" | "Integrated";
    highlight?: boolean;
  }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Sagar Kumar",
    identity: "THE HUMAN BEHIND THE MACHINE",
    headline: "MERN Full-Stack Developer & AI Engineer Intern",
    location: "Bhopal, Madhya Pradesh, India",
    email: "pandeysagar7991@gmail.com",
    github: "https://github.com/sagarkumar62",
    linkedin: "https://www.linkedin.com/in/sagar-kumarcs/",
    instagram: "https://www.instagram.com/sagar_r72/",
    facebook: "https://www.facebook.com/Sagarkumar6202/",
    resumeUrl: "/SAGAR_RESUME.pdf",
    shortBio:
      "Computer Science & Engineering undergraduate at LNCT Excellence, Bhopal (Class of 2027). Building at the convergence of full-stack engineering, high-throughput data extraction, and applied AI systems.",
    manifesto:
      "Code is simply syntax until it forms an architecture that thinks, parses reality, and delivers deterministic value. I engineer resilient web applications, intelligent agents, and structured data pipelines designed for scale.",
    systemStatus: "ALL SYSTEMS NOMINAL / MERN + AI PIPELINE ACTIVE",
    coordinates: "23.2599° N, 77.4126° E — BHOPAL, IN",
  },

  narrativeChapters: [
    { num: "00", id: "void", label: "INIT", title: "Enter The Void" },
    { num: "01", id: "identity", label: "BIO", title: "The Human Behind The Machine" },
    { num: "02", id: "core", label: "ENGINE", title: "Engineering Core" },
    { num: "03", id: "projects", label: "CASE STUDIES", title: "Selected Projects" },
    { num: "04", id: "journey", label: "CHRONOLOGY", title: "Professional Journey" },
    { num: "05", id: "philosophy", label: "DOCTRINE", title: "Engineering Philosophy" },
    { num: "06", id: "education", label: "FOUNDATION", title: "Academic Record" },
    { num: "07", id: "contact", label: "TRANSMISSION", title: "Establish Contact" },
  ],

  skillCategories: [
    {
      title: "Frontend Engineering",
      categoryKey: "frontend",
      description: "Performant, type-safe interfaces built with modern reactive architectures.",
      icon: "Layers",
      skills: [
        { name: "React 19", level: "Core", highlight: true },
        { name: "Next.js (App Router)", level: "Core", highlight: true },
        { name: "TypeScript", level: "Core", highlight: true },
        { name: "JavaScript (ESNext)", level: "Core" },
        { name: "Tailwind CSS v4", level: "Core", highlight: true },
        { name: "Redux Toolkit", level: "Advanced" },
        { name: "TanStack Query", level: "Advanced", highlight: true },
        { name: "HTML5 / CSS3", level: "Core" },
        { name: "GSAP / Motion", level: "Integrated" },
      ],
    },
    {
      title: "Backend & Systems",
      categoryKey: "backend",
      description: "Robust REST architectures, stateless authentication, and distributed caching.",
      icon: "Server",
      skills: [
        { name: "Node.js", level: "Core", highlight: true },
        { name: "Express.js", level: "Core", highlight: true },
        { name: "REST APIs", level: "Core", highlight: true },
        { name: "JWT Authentication", level: "Core" },
        { name: "RBAC (Access Control)", level: "Advanced" },
        { name: "Python", level: "Core", highlight: true },
        { name: "FastAPI", level: "Integrated" },
        { name: "API Rate Limiting", level: "Integrated" },
      ],
    },
    {
      title: "AI & Data Engineering",
      categoryKey: "ai",
      description: "Retrieval-augmented generation, vector search, LLM integrations, and web extraction pipelines.",
      icon: "Cpu",
      skills: [
        { name: "Gemini API", level: "Core", highlight: true },
        { name: "RAG Architectures", level: "Core", highlight: true },
        { name: "ChromaDB", level: "Core", highlight: true },
        { name: "FAISS Vector Search", level: "Advanced" },
        { name: "Sentence Transformers", level: "Core" },
        { name: "Web Scraping & Extraction", level: "Core", highlight: true },
        { name: "Agent Data Pipelines", level: "Core", highlight: true },
        { name: "Data Deduplication & QC", level: "Core" },
      ],
    },
    {
      title: "Databases & Storage",
      categoryKey: "databases",
      description: "Document stores, in-memory caching layers, relational schemas, and vector embeddings.",
      icon: "Database",
      skills: [
        { name: "MongoDB", level: "Core", highlight: true },
        { name: "Mongoose ODM", level: "Core" },
        { name: "Redis Caching", level: "Advanced", highlight: true },
        { name: "SQL", level: "Advanced" },
        { name: "Vector Databases", level: "Core" },
      ],
    },
    {
      title: "Workflow & Operations",
      categoryKey: "tools",
      description: "Deterministic versioning, automated testing, and multi-cloud deployment pipelines.",
      icon: "Terminal",
      skills: [
        { name: "Git & GitHub", level: "Core", highlight: true },
        { name: "Postman", level: "Core" },
        { name: "VS Code", level: "Core" },
        { name: "Chrome DevTools", level: "Core" },
        { name: "Vercel & Netlify", level: "Core" },
        { name: "Render", level: "Core" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "agent-pipeline",
      number: "01",
      title: "Agent Data Extraction Pipeline",
      tagline: "High-throughput extraction, normalization, and provenance tracking for 3,556+ AI agent records.",
      category: "AI & Data Engineering",
      problem:
        "AI agent directories publish unstructured, heterogeneous data with inconsistent pricing tiers, nested capabilities, and broken attribution URLs, making automated downstream ingestion error-prone.",
      solution:
        "Architected an automated multi-stage pipeline utilizing targeted scrapers, schema normalization, phonetic and exact deduplication routines, and strict source provenance verification.",
      myContribution:
        "Engineered the extraction scripts, designed the record normalization layer, implemented hash-based deduplication, and established evidence-backed source tracking for 3,556 verified agent profiles.",
      architectureHighlight:
        "Raw Extraction Engine ➔ Schema Normalization ➔ Deduplication & Entity Resolution ➔ Quality Scoring ➔ Traceable Output Artifact",
      techStack: ["Python", "Web Scraping", "Data Normalization", "Deduplication", "JSONL/CSV", "Quality Control"],
      metricsOrEvidence: "3,556+ structured agent records processed with full provenance",
      featured: true,
      visualType: "pipeline",
    },
    {
      id: "research-study-buddy",
      number: "02",
      title: "Research Study Buddy",
      tagline: "Context-aware PDF academic assistant using Sentence Transformers, ChromaDB, and Google Gemini.",
      category: "AI & Data Engineering",
      problem:
        "Navigating dense, multi-page scientific papers requires cross-referencing citations, mathematical formulations, and complex methodology sections where standard LLMs hallucinate without grounded context.",
      solution:
        "Constructed a Retrieval-Augmented Generation (RAG) platform that chunks academic papers, embeds passages with Sentence Transformers into ChromaDB, and passes ranked context to Gemini with source citations.",
      myContribution:
        "Implemented document parsing, semantic chunking strategy with overlap, ChromaDB vector indexing, semantic search queries, and prompt orchestration ensuring citations accompany each generated response.",
      architectureHighlight:
        "PDF Chunking ➔ Sentence Transformers Embeddings ➔ ChromaDB Vector Store ➔ Top-K Semantic Retrieval ➔ Grounded Gemini Synthesis",
      techStack: ["Python", "Streamlit", "Google Gemini API", "ChromaDB", "Sentence Transformers", "RAG"],
      repoUrl: "https://github.com/sagarkumar62/Research-Study-Buddy",
      featured: true,
      visualType: "rag-flow",
    },
    {
      id: "career-for-me",
      number: "03",
      title: "CareerForMe — AI Career Guide",
      tagline: "Multi-service career matching engine with skill-gap decomposition and deterministic roadmap states.",
      category: "Full-Stack System",
      problem:
        "Job seekers struggle to map their current competencies against evolving industry demands, lacking actionable, stateful learning paths to bridge critical skill gaps.",
      solution:
        "Engineered an intelligent career guidance platform combining a Next.js / Express MERN foundation with a dedicated Python FastAPI service utilizing FAISS for semantic skill matching and Gemini for curriculum generation.",
      myContribution:
        "Built the full-stack architecture, integrated the FastAPI semantic service with FAISS vectors, and implemented the stateful roadmap engine tracking MASTERED, NEEDS_WORK, MISSING, RECOMMENDED, and LOCKED states.",
      architectureHighlight:
        "Next.js App ➔ Express REST API ➔ FastAPI FAISS Vector Search ➔ Gemini Path Synthesizer ➔ MongoDB State Machine",
      techStack: ["Next.js", "React", "Node.js", "Express", "Python", "FastAPI", "MongoDB", "Gemini API", "FAISS"],
      featured: true,
      visualType: "career-graph",
    },
    {
      id: "music-pwa",
      number: "04",
      title: "Music — Spotify-Inspired PWA",
      tagline: "Progressive web application with client-side audio caching, ID3 metadata parsing, and offline playback.",
      category: "Frontend & Creative",
      problem:
        "Web streaming platforms fail catastrophically during intermittent connectivity, discarding playback state and caching zero audio assets.",
      solution:
        "Developed a Progressive Web Application utilizing Service Workers, Cache Storage API, and Redux state management to enable seamless offline streaming and instant resume.",
      myContribution:
        "Engineered the offline caching strategy, integrated audio stream buffer controllers, designed responsive dark-mode playback UI, and connected backend media storage.",
      architectureHighlight:
        "Client UI ➔ Redux Media Controller ➔ Service Worker Interceptor ➔ Cache API Fallback ➔ Node/Mongo Audio Stream",
      techStack: ["React", "Redux Toolkit", "Node.js", "MongoDB", "PWA", "Service Workers", "Cache API"],
      liveUrl: "https://music-gold-pi.vercel.app/",
      repoUrl: "https://github.com/sagarkumar62",
      featured: true,
      visualType: "audio-stream",
    },
    {
      id: "the-aid-grid",
      number: "05",
      title: "TheAidGrid & Worker Platform",
      tagline: "Dual-interface on-demand home service logistics suite with worker attendance and task workflows.",
      category: "Full-Stack System",
      problem:
        "Service marketplaces fail without tight operational synchrony between client service requests and field worker shift verification.",
      solution:
        "Built a modular dual-application ecosystem featuring client discovery alongside a dedicated worker application for shift tracking, attendance logs, and task lifecycle management.",
      myContribution:
        "Developed the responsive frontend architectures for both deployments, integrated task dispatch flows, and styled the interfaces with Tailwind CSS.",
      architectureHighlight:
        "Customer Portal + Dedicated Worker Dispatch ➔ Common State Engine ➔ Deployed on Netlify",
      techStack: ["React", "JavaScript", "Tailwind CSS", "Worker Architecture", "Netlify"],
      liveUrl: "https://theaidgrid.netlify.app/",
      repoUrl: "https://github.com/sagarkumar62",
      featured: false,
      visualType: "service-grid",
    },
    {
      id: "your-mini-shop",
      number: "06",
      title: "YourMiniShop E-Commerce",
      tagline: "Fast, responsive e-commerce catalog with client-side faceted filtering and centralized state.",
      category: "Frontend & Creative",
      problem:
        "Catalog exploration on heavy e-commerce frameworks suffers from sluggish filter interactions and heavy layout thrashing.",
      solution:
        "Created an ultra-responsive client-side store with instant category facet updates, cart persistence, and smooth UI transitions.",
      myContribution:
        "Implemented the catalog filtering engine, Redux cart state, responsive product matrices, and micro-interactions.",
      architectureHighlight:
        "React Component Tree ➔ Redux State Slice ➔ LocalStorage Persistence",
      techStack: ["React", "Redux", "Tailwind CSS", "JavaScript"],
      liveUrl: "https://yourminishop.netlify.app/",
      repoUrl: "https://github.com/sagarkumar62",
      featured: false,
      visualType: "service-grid",
    },
  ] as ProjectItem[],

  experiences: [
    {
      id: "the-ai-signal",
      role: "AI Engineer Intern",
      organization: "The AI Signal",
      period: "September 2026 – Present",
      location: "Remote",
      isCurrent: true,
      type: "Internship",
      domain: "Artificial Intelligence & Agent Data Extraction",
      highlights: [
        "Architecting web extraction pipelines to harvest and normalize AI agent data across diverse web directories and platforms.",
        "Extracting structured records including agent designations, taxonomy tags, pricing models, integration hooks, and verified source URLs.",
        "Developing automated normalization and deduplication routines ensuring strict data hygiene and deduplicated record sets.",
        "Maintaining verifiable source provenance and audit trails for reliable evidence-backed datasets.",
      ],
      technologies: ["Python", "Web Scraping", "Data Normalization", "Quality Control", "Agent Architectures"],
    },
    {
      id: "sheryians",
      role: "Full-Stack Web Developer Intern",
      organization: "Sheryians Coding School",
      period: "January – March 2026",
      duration: "3 months",
      location: "Bhopal, Madhya Pradesh",
      isCurrent: false,
      type: "Internship",
      domain: "Full-Stack Web Architecture & Platform Integration",
      highlights: [
        "Contributed to the full-stack blogging platform (shery-blogs client & backend integration) using Next.js, React, TypeScript, and Tailwind CSS.",
        "Integrated REST APIs with secure JWT authentication and role-based access control (RBAC).",
        "Implemented Redis caching and TanStack Query to optimize frontend data caching and eliminate redundant network roundtrips.",
        "Collaborated in Git-based team sprints, debugging asynchronous state mismatches and API payload edge cases.",
      ],
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "TanStack Query", "Redux", "Axios", "Node.js", "Redis"],
    },
    {
      id: "techiehelp",
      role: "Web Developer Intern",
      organization: "TechieHelp",
      period: "July – August 2025",
      location: "Jodhpur, Rajasthan",
      isCurrent: false,
      type: "Internship",
      domain: "Frontend Engineering & Dynamic UI Systems",
      highlights: [
        "Engineered responsive, accessible web interfaces utilizing HTML5, CSS3, JavaScript, and React.",
        "Integrated dynamic REST API payloads with modular UI components and real-time validation.",
        "Utilized Chrome DevTools performance profilers to troubleshoot DOM layout shifts and optimize rendering speed.",
      ],
      technologies: ["React", "JavaScript", "HTML5", "CSS3", "REST APIs", "Tailwind CSS"],
    },
    {
      id: "onlycounselling",
      role: "Intern",
      organization: "OnlyCounselling",
      period: "July – August 2025",
      location: "Remote / Hybrid",
      isCurrent: false,
      type: "Internship",
      domain: "Education Operations & Learner Engagement",
      highlights: [
        "Supported counselling and enrollment workflows, managing learner engagement pipelines and communication channels.",
        "Assisted in structured data entry and prospect tracking across application cycles.",
      ],
      technologies: ["Operations", "Client Communication", "Data Tracking"],
    },
  ] as ExperienceItem[],

  education: [
    {
      degree: "Bachelor of Technology — Computer Science and Engineering",
      institution: "Lakshmi Narain College of Technology Excellence (LNCTE), Bhopal",
      timeline: "2023 – 2027",
      score: "7.39 / 10",
      scoreType: "CGPA",
      badge: "Graduating 2027",
      specialization: "Data Structures, System Design, AI Systems, DBMS, Operating Systems",
    },
    {
      degree: "Senior Secondary (Class XII) — CBSE",
      institution: "Adarsh Vidya Mandir, Chas",
      timeline: "2023",
      score: "73%",
      scoreType: "Percentage",
      specialization: "Physics, Chemistry, Mathematics, Computer Science",
    },
    {
      degree: "Secondary School Examination (Class X) — CBSE",
      institution: "Gaurav Awasiya Uchcha Vidyalaya, Chas",
      timeline: "2021",
      score: "96%",
      scoreType: "Percentage",
      specialization: "General Sciences & Mathematics",
    },
  ] as EducationItem[],

  philosophies: [
    {
      num: "01",
      title: "Data Quality is Engineering",
      desc: "An AI system is only as truthful as the data pipeline feeding it. Unverified inputs produce hallucinated outputs. I build deterministic validation, deduplication, and provenance into every stage.",
    },
    {
      num: "02",
      title: "Systems Over Isolated Screens",
      desc: "Interfaces without intelligent backends are static mockups. Backend services without responsive ergonomics are inaccessible. True capability lies at the synchronous intersection of UI, server, and intelligence.",
    },
    {
      num: "03",
      title: "Evidence Over Assumptions",
      desc: "Measure latency, profile memory allocations, inspect vector embeddings, and verify ground truth. Speculation belongs in brainstorming; implementation demands empirical verification.",
    },
    {
      num: "04",
      title: "Maintainability With Ambition",
      desc: "Cinematic visual design and ambitious architectures must remain accessible, responsive, type-safe, and straightforward to refactor. Complexity without clarity is technical debt.",
    },
  ],

  achievements: [
    {
      title: "3rd Rank — AIMA Student Management Quiz",
      year: "2023",
      detail: "Secured third position in institutional management & analytical thinking competition at LNCTE, Bhopal.",
    },
    {
      title: "Smart India Hackathon (SIH)",
      year: "2024 & 2025",
      detail: "Participated in consecutive editions solving national-level technical problem statements.",
    },
    {
      title: "HCLTech AI Hackathon",
      year: "2024",
      detail: "Selected participant exploring machine intelligence problem formulations.",
    },
    {
      title: "Algorithm & Problem Solving",
      year: "Ongoing",
      detail: "180+ problems solved across data structures, graph traversals, and dynamic programming.",
    },
  ],
};
