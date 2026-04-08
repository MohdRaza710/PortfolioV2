import React from "react";
import { SectionHeader } from "../components/SectionHeader.jsx";
import { ProjectCard } from "../components/ProjectCard.jsx";
import { PROJECTS } from "../data/portfolio.js";

export function Projects() {
  return (
    <section id="projects" className="container-max py-16 sm:py-20">
      <SectionHeader
        eyebrow="Projects"
        title="Interactive cards for real work"
        description="Hover states, tech pills, and quick links to demo/source. Replace the placeholder URLs with your real deployments."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {PROJECTS.map((p, idx) => (
          <ProjectCard key={p.title} project={p} index={idx} />
        ))}
      </div>
    </section>
  );
}

