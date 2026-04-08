import React from "react";
import {
  Code2,
  Database,
  ExternalLink,
  Layers,
  Palette,
  Radio,
  Server,
} from "lucide-react";
import { Reveal } from "./Reveal.jsx";

const TECH_ICON = {
  React: Code2,
  Tailwind: Palette,
  "Tailwind CSS": Palette,
  Vite: Layers,
  "Framer Motion": Radio,
  "Node.js": Server,
  Node: Server,
  Express: Layers,
  "Socket.io": Radio,
  MongoDB: Database,
  PostgreSQL: Database,
  SQL: Database,
  API: Layers,
  Stripe: Layers,
};

function TechPill({ name }) {
  const Icon = TECH_ICON[name] ?? Code2;
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-zinc-200">
      <Icon className="h-3.5 w-3.5 text-blue-300" />
      {name}
    </span>
  );
}

export function ProjectCard({ project, index = 0 }) {
  const Icon = project.icon ?? Code2;

  return (
    <Reveal delay={Math.min(index * 0.05, 0.25)}>
      <article className="group glass overflow-hidden rounded-2xl">
        <div className="relative overflow-hidden">
          <img
            src={project.imageSrc}
            alt={`${project.title} preview`}
            className="aspect-[16/9] w-full object-cover transition duration-500 ease-out group-hover:scale-[1.04]"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/55 via-transparent to-transparent" />
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-950/55 px-3 py-2 text-sm font-semibold text-zinc-100 backdrop-blur">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-blue-500/15 text-blue-200 ring-1 ring-blue-500/30">
              <Icon className="h-4 w-4" />
            </span>
            {project.title}
          </div>
        </div>

        <div className="p-5">
          <p className="text-sm leading-relaxed text-zinc-300">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech?.map((t) => (
              <TechPill key={t} name={t} />
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

