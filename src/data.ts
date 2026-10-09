// Portfolio content shared by the page and the interactive terminal
// Import certificate images
import awsBadge from "./assets/aws badge.png";
import baseBuildBadge from "./assets/base build badge.jpg";
import cloudPractBadge from "./assets/cloud pract.png";
import datacampCloud from "./assets/datacamp cloud.png";
import introCyberBadge from "./assets/introduction to cyber badge.png";
import networkingBadge from "./assets/networking badge.png";
import solutionArchBadge from "./assets/solution arch.png";
import awsHackathon from "./assets/AWS_Hackaton.JPG";

// Import project images
import ragChatbot from "./assets/rag_chatbot.png";
import leadCrm from "./assets/lead_crm.png";
import gcfas from "./assets/gcfas.png";
import {
  SiAmazon,
  SiCisco,
  SiDatacamp,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiLinkedin,
  SiGithub,
  SiNodedotjs,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";
import { FaEnvelope } from "react-icons/fa";
import {
  FiAward,
  FiBriefcase,
  FiCloud,
  FiCode,
} from "react-icons/fi";


export const EMAIL = "ashleykierferreol@gmail.com";
export const GITHUB = "https://github.com/Ashlikiyer";
export const LINKEDIN = "https://www.linkedin.com/in/kierferreol/";

export const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const socials = [
  { label: "GitHub", href: GITHUB, icon: SiGithub },
  { label: "LinkedIn", href: LINKEDIN, icon: SiLinkedin },
  { label: "Email", href: `mailto:${EMAIL}`, icon: FaEnvelope },
];

export const stats = [
  { value: "1+", label: "Year of experience", icon: FiBriefcase },
  { value: "6+", label: "Featured projects", icon: FiCode },
  { value: "4", label: "Internships & roles", icon: FiAward },
  { value: "3", label: "Live projects", icon: FiCloud },
];

export const techStack = [
  { icon: SiReact, name: "React", href: "https://react.dev" },
  { icon: SiTypescript, name: "TypeScript", href: "https://www.typescriptlang.org" },
  { icon: SiJavascript, name: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { icon: SiNextdotjs, name: "Next.js", href: "https://nextjs.org" },
  { icon: SiNodedotjs, name: "Node.js", href: "https://nodejs.org" },
  { icon: SiTailwindcss, name: "Tailwind", href: "https://tailwindcss.com" },
  { icon: SiAmazon, name: "AWS", href: "https://aws.amazon.com" },
  { icon: SiDocker, name: "Docker", href: "https://www.docker.com" },
  { icon: SiKubernetes, name: "Kubernetes", href: "https://kubernetes.io" },
  { icon: SiPython, name: "Python", href: "https://www.python.org" },
  { icon: SiGit, name: "Git", href: "https://git-scm.com" },
];

export const experience = [
  {
    period: "Feb 2026 – May 2026",
    role: "System & Cloud Administrator",
    company: "Pilipinas Micro-Matrix Technology (PMT Joint Venture) Inc.",
    description:
      "Administered system infrastructure and cloud environments ensuring uptime, reliability, and security. Supported deployment, configuration, and monitoring of cloud-based services and server resources. Collaborated on system provisioning, access management, and network configuration.",
    tags: ["Cloud", "Infrastructure", "Monitoring", "Access Management", "Networking"],
  },
  {
    period: "Dec 2025 – Feb 2026",
    role: "Quality Assurance Tester",
    company: "Lujo PH",
    description:
      "Created and maintained QA test plans, test cases, and scenarios based on business requirements. Performed manual testing on web applications to identify bugs, usability issues, and performance concerns. Conducted functional, regression, and UAT testing. Documented defects and collaborated with developers and designers to ensure timely resolution.",
    tags: ["Test Plans", "Regression", "UAT", "Bug Reporting"],
  },
  {
    period: "Oct 2025 – Present",
    role: "Marketing Lead",
    company: "Catalyx Solutions",
    description:
      "Lead brand strategy, marketing direction, and market positioning for AI-driven and security-focused products. Developed marketing materials, pitch decks, and product messaging for hackathons, demos, and presentations. Coordinated user engagement, outreach, and promotional efforts with product and technical teams.",
    tags: ["Brand Strategy", "Pitch Decks", "Product Messaging"],
    current: true,
  },
  {
    period: "Mar 2025 – Aug 2025",
    role: "Software Engineer & UI/UX Design Intern",
    company: "Kloudtech",
    description:
      "Contributed to secure software development using best practices in coding, system design, and UI/UX principles. Implemented scalable backend and frontend components focusing on performance, usability, and security. Collaborated in Agile workflows, peer code reviews, CI/CD pipelines, and UI/UX design refinement.",
    tags: ["Frontend", "Backend", "UI/UX", "CI/CD", "Agile"],
  },
];

export const highlights = [
  {
    label: "Education",
    title: "Gordon College",
    lines: ["BS Computer Science"],
  },
  {
    label: "Achievements",
    title: "Base PH Hackathon Winner",
    lines: ["DataCamp Scholar", "AWS Cloud Club Committee"],
  },
  {
    label: "Affiliations",
    title: "AWS Cloud Club",
    lines: ["Operations Committee", "Gordon College Chapter"],
  },
];

export const projects = [
  {
    title: "Personal RAG Chatbot",
    kind: "AI · Document Q&A",
    image: ragChatbot,
    description:
      "AI Document Q&A Platform with PDF ingestion, text chunking, vector embedding via Pinecone, semantic search, and LLM-generated responses using Groq's Llama 3.1 70B model. Supports multi-document querying with filename filtering.",
    tags: ["Next.js 15", "TypeScript", "LangChain.js", "Pinecone", "Groq"],
    href: "https://ragdocs-app.vercel.app/landing",
  },
  {
    title: "Lead-to-CRM Automation Agent",
    kind: "Automation · LLM",
    image: leadCrm,
    description:
      "End-to-end automation pipeline that captures form-submitted leads, processes them in real-time using Groq's LLM API for auto-generated summaries, urgency scoring, and categorization. Integrates with Airtable CRM and Slack for instant team notifications.",
    tags: ["Node.js", "Express.js", "Groq API", "Airtable", "Slack API"],
    href: "https://lead-to-crm-agent.vercel.app/",
  },
  {
    title: "GCFAS: Gordon College Faculty Assessment System",
    kind: "Web App · Education",
    image: gcfas,
    description:
      "A comprehensive faculty assessment system for Gordon College that streamlines the evaluation process. Built with modern web technologies to provide an efficient and user-friendly interface for faculty performance assessments.",
    tags: ["React", "TypeScript", "TailwindCSS", "Node.js"],
    href: "https://gcfas.vercel.app/",
  },
];

export const certificates = [
  {
    image: cloudPractBadge,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2024",
    type: "Certificate" as const,
    icon: SiAmazon,
    badgeColor: "bg-orange-500",
  },
  {
    image: solutionArchBadge,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2024",
    type: "Certificate" as const,
    icon: SiAmazon,
    badgeColor: "bg-orange-500",
  },
  {
    image: awsBadge,
    title: "AWS Cloud Badge",
    issuer: "Amazon Web Services",
    year: "2024",
    type: "Badge" as const,
    icon: SiAmazon,
    badgeColor: "bg-orange-500",
  },
  {
    image: datacampCloud,
    title: "Cloud Computing Fundamentals",
    issuer: "DataCamp",
    year: "2024",
    type: "Course Complete" as const,
    icon: SiDatacamp,
    badgeColor: "bg-green-500",
  },
  {
    image: introCyberBadge,
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    year: "2023",
    type: "Course Complete" as const,
    icon: SiCisco,
    badgeColor: "bg-blue-600",
  },
  {
    image: networkingBadge,
    title: "Networking Essentials",
    issuer: "Cisco Networking Academy",
    year: "2023",
    type: "Badge" as const,
    icon: SiCisco,
    badgeColor: "bg-blue-600",
  },
  {
    image: baseBuildBadge,
    title: "Foundation Building Badge",
    issuer: "Base PH",
    year: "2023",
    type: "Participant" as const,
    badgeColor: "bg-blue-600",
  },
  {
    image: awsHackathon,
    title: "AWS Cloud Club PH Innovation Cup 2025",
    issuer: "AWS Cloud Club Philippines",
    year: "2025",
    type: "Participant" as const,
    icon: SiAmazon,
    badgeColor: "bg-orange-500",
  },
];

export const certSummary = [
  { value: "8", label: "Credentials" },
  { value: "8", label: "Verified" },
  { value: "5", label: "This year" },
  { value: "4+", label: "Platforms" },
];

export const skills = [
  {
    title: "Frontend Development",
    description:
      "React, React Native, Next.js, TailwindCSS, ShadCN UI, MUI — building responsive, modern web and mobile applications",
    label: "Web Development",
  },
  {
    title: "Backend Development",
    description:
      "Node.js, Express.js — developing RESTful APIs, server-side logic, and backend services",
    label: "Server-Side",
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "AWS EC2, AWS Cloud Essentials, Ubuntu Server, Nginx, PM2 — deploying and managing cloud-based applications",
    label: "Cloud Computing",
  },
  {
    title: "UI/UX Design",
    description:
      "Figma, Canva — designing user interfaces and creating visual assets for web and mobile",
    label: "Design",
  },
  {
    title: "AI & LLM Integration",
    description:
      "Groq, Agora AI, Prompt Engineering, Function Calling, RAG systems — integrating AI models into applications",
    label: "Artificial Intelligence",
  },
  {
    title: "Programming & Databases",
    description:
      "JavaScript, TypeScript, SQL, HTML/CSS — core programming skills and database fundamentals",
    label: "Core Skills",
  },
];
