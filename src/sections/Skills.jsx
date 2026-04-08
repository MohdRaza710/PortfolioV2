import React from "react";
import { Braces, Database, LayoutPanelTop, Server } from "lucide-react";
import { Reveal } from "../components/Reveal.jsx";
import { SectionHeader } from "../components/SectionHeader.jsx";
import { SKILLS } from "../data/portfolio.js";

const GROUP_ICON = {
  Frontend: LayoutPanelTop,
  Backend: Server,
  Database: Database,
};

function SkillCard({ group, items, index }) {
  const Icon = GROUP_ICON[group] ?? Braces;
  return (
    <Reveal delay={Math.min(index * 0.06, 0.2)}>
      <div className="glass h-full rounded-2xl p-6">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-500/15 text-blue-200 ring-1 ring-blue-500/30">
            <Icon className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-semibold text-zinc-100">{group}</p>
            <p className="text-xs text-zinc-400">Tooling & patterns</p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {items.map((s) => (
            <span
              key={s}
              className="rounded-xl border border-white/10 bg-zinc-950/40 px-3 py-2 text-xs font-semibold text-zinc-200"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function Skills() {
  return (
    <section id="skills" className="container-max py-16 sm:py-20">
      <SectionHeader
        eyebrow="Skills"
        title="A bento layout for the stack I ship with"
        description="Grouped for quick scanning — frontend polish, backend reliability, and data foundations."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((g, idx) => (
          <SkillCard key={g.group} group={g.group} items={g.items} index={idx} />
        ))}
      </div>
    </section>
  );
}

