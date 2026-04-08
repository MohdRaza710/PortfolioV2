import {
  BadgeCheck,
  Database,
  Globe,
  MessagesSquare,
  Server,
  ShieldCheck,
  ShoppingCart,
} from "lucide-react";

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const HERO_ROLES = ["MERN Expert", "Next.js Developer", "API Builder", "Realtime App Dev"];

export const SKILLS = [
  {
    group: "Frontend",
    items: ["React", "Tailwind CSS", "Vite", "Framer Motion", "Accessibility"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "Socket.io", "REST APIs", "Auth/JWT"],
  },
  {
    group: "Database",
    items: ["MongoDB", "PostgreSQL", "SQL", "Redis (basics)", "Prisma (basics)"],
  },
];

export const PROJECTS = [
  {
    title: "AAMEquimpment",
    description:
      "A high-performance, commercial digital catalog developed for a specialized heavy machinery and truck parts supplier. The platform is designed to streamline the way B2B clients browse and source essential industrial components.",
    imageSrc: "/project-placeholder.svg",
    tech: ["React", "Node.js", "Express", "Socket.io", "MongoDB"],
    icon: MessagesSquare,
    liveUrl: "https://www.aammg.com",
  },
  {
    title: "Salary Management System",
    description:
      "A comprehensive, full-stack human resources and payroll platform designed to automate administrative workflows. The application focuses on digitizing employee records, tracking attendance, and streamlining the complex process of monthly payroll generation.",
    imageSrc: "/project-placeholder.svg",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    icon: ShieldCheck,
    liveUrl: "https://hr-mng-thdz.vercel.app/",
  },
  {
    title: "AAMTechsolution",
    description:
      "A professional service platform showcasing end-to-end technical solutions, ranging from custom software development to advanced networking infrastructure. This site serves as a digital hub for professional IT services and client management.",
    imageSrc: "/project-placeholder.svg",
    tech: ["React", "Tailwind", "API", "Express", "MongoDB", "Socket.io"],
    icon: ShoppingCart,
    liveUrl: "https://www.aamtechsolution.com",
  },
];

export const EXPERIENCE = [
  {
    role: "Full‑Stack Developer",
    company: "Your Company",
    period: "2025 — Present",
    icon: Server,
    highlights: [
      "Built and maintained MERN features with clean API boundaries.",
      "Implemented realtime communication patterns with Socket.io.",
      "Improved UX with responsive layouts and animation-driven feedback.",
    ],
  },
  {
    role: "Backend Intern",
    company: "Your Company",
    period: "2024 — 2025",
    icon: Database,
    highlights: [
      "Designed REST APIs, validation, and authentication flows.",
      "Worked with MongoDB/SQL data modeling and query optimization basics.",
      "Collaborated via Git workflows and code reviews.",
    ],
  },
  {
    role: "Freelance Developer",
    company: "Self‑Employed",
    period: "2023 — 2024",
    icon: Globe,
    highlights: [
      "Delivered responsive websites with reusable components.",
      "Built landing pages and small dashboards with Tailwind CSS.",
      "Focused on SEO fundamentals, performance, and accessibility.",
    ],
  },
];

export const SOCIALS = [
  { label: "Website", href: "https://www.aammg.com", icon: BadgeCheck },
  { label: "Company", href: "https://www.aamtechsolution.com", icon: BadgeCheck },
];

