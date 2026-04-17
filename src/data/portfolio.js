import { title } from "framer-motion/client";
import {
  BadgeCheck,
  Database,
  Globe,
  MessagesSquare,
  Server,
  ShieldCheck,
  ShoppingCart,
  Wallet,
  ChartNoAxesCombined 
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
    title: "AAMEquipments – Industrial Components Website",
    description:
      "A clean and responsive business website developed for AAMEquipments (AAMMG), a company specializing in top-tier industrial components, equipment, and innovative technology services in Madagascar. The site showcases their range of industrial products (including trailer axles and heavy-duty equipment) and technology solutions, with clear service presentation and professional design aimed at business and industrial clients.",
    imageSrc: "/aammg.com-screenshot.png",
    tech: ["React", "Node.js", "Express", "Socket.io", "MongoDB"],
    icon: MessagesSquare,
    liveUrl: "https://www.aammg.com",
  },
  {
    title: "HR Management System – Alabbas Mining & Transport Madagascar",
    description:
      "A modern HR Management System developed for Alabbas Mining and Transport Madagascar. The dashboard enables efficient management of employees, attendance tracking, leave requests, and team information for the company's mining and transport operations. It features a clean design, intuitive navigation, and real-time updates to streamline HR processes and improve employee management.",
    imageSrc: "/hr-mng-screenshot.png",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    icon: ShieldCheck,
    liveUrl: "https://hr-mng-thdz.vercel.app/",
  },
  {
    title: "AAMTechSolution – Renewable Energy & Construction Website",
    description:
      "A clean, responsive business website developed for AAMTechSolution, a company specializing in solar energy and modern construction services in Madagascar and the Indian Ocean region. The website showcases AAM Energy (solar panels, complete solar solutions, and installations) and AAM Construction (prefab buildings and modular structures). It features a modern design, clear service presentation, project highlights, and strong calls-to-action to attract residential and commercial clients.",
    imageSrc: "/aamtechsolution.com-screenshot.png",
    tech: ["React", "Tailwind", "API", "Express", "MongoDB", "Socket.io"],
    icon: ShoppingCart,
    liveUrl: "https://www.aamtechsolution.com",
  },
  {
    title: "Personal Finance & Expense Tracker",
    description:
      "A clean and functional expense tracking web app developed to help users manage personal finances. Features include adding income & expenses, categorizing transactions, viewing summaries, and visual reports (charts).",
    imageSrc: "/finance-tracker-screenshot.png",
    tech: ["Next.JS", "Postgres SQL", "Supabase"],
    icon: Wallet,
    liveUrl: "https://expensetracker-nu-seven.vercel.app/",
  },
  {
    title: "MathTrade – Stock Trading Simulator",
    description:
      "A responsive web application built as a practice project that simulates a stock/crypto trading platform. Users can view market data, buy/sell stocks, track portfolio performance, and practice trading in a risk-free environment.",
    imageSrc: "/mathtrade-screenshot.png",
    tech: ["React", "Tailwind CSS", "API", "Chart.js"],
    icon: ChartNoAxesCombined,
    liveUrl: "https://mathtrade1.netlify.app/",
  }
];

export const EXPERIENCE = [
  {
    role: "Full‑Stack Intern",
    company: "Al Abbas Mining and Transport",
    period: "2025 — Present",
    icon: Server,
    highlights: [
      "Built and maintained MERN features with clean API boundaries.",
      "Implemented realtime communication patterns with Socket.io.",
      "Improved UX with responsive layouts and animation-driven feedback.",
    ],
  },
  {
    role: "Backend developer (freelance)",
    company: "Self-Employed",
    period: "2024 — 2025",
    icon: Database,
    highlights: [
      "Designed REST APIs, validation, and authentication flows.",
      "Worked with MongoDB/SQL data modeling and query optimization basics.",
      "Collaborated via Git workflows and code reviews.",
    ],
  },
  {
    role: "frontend Developer (freelance)",
    company: "Self-Employed",
    period: "2023 — 2024",
    icon: Globe,
    highlights: [
      "Delivered responsive websites with reusable components.",
      "Built landing pages and small dashboards with Tailwind CSS.",
      "Focused on SEO fundamentals, performance, and accessibility.",
    ],
  },
];

export const Webs = [
  { label: "Website", href: "https://www.aammg.com", icon: BadgeCheck },
  { label: "Company", href: "https://www.aamtechsolution.com", icon: BadgeCheck },
];

