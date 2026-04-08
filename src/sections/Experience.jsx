import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "../components/Reveal.jsx";
import { SectionHeader } from "../components/SectionHeader.jsx";
import { EXPERIENCE } from "../data/portfolio.js";

function TimelineItem({ item, index }) {
  const Icon = item.icon ?? CheckCircle2;

  return (
    <Reveal delay={Math.min(index * 0.06, 0.25)}>
      <div className="relative grid gap-4 pl-10 sm:pl-12">
        <div className="absolute left-0 top-0 flex h-full w-8 flex-col items-center sm:w-10">
          <span className="mt-1 grid h-9 w-9 place-items-center rounded-2xl bg-blue-500/15 text-blue-200 ring-1 ring-blue-500/30">
            <Icon className="h-5 w-5" />
          </span>
          <span className="mt-3 h-full w-px bg-white/10" aria-hidden="true" />
        </div>

        <div className="glass rounded-2xl p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <div>
              <p className="text-base font-semibold text-zinc-100">{item.role}</p>
              <p className="text-sm text-zinc-400">{item.company}</p>
            </div>
            <p className="text-xs font-semibold text-zinc-300">{item.period}</p>
          </div>

          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            {item.highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}

export function Experience() {
  return (
    <section id="experience" className="container-max py-16 sm:py-20">
      <SectionHeader
        eyebrow="Experience"
        title="A timeline of professional growth"
        description="Clear milestones that show impact, increasing scope, and stronger engineering habits."
      />

      <div className="space-y-5">
        {EXPERIENCE.map((item, idx) => (
          <TimelineItem key={`${item.role}-${item.period}`} item={item} index={idx} />
        ))}
      </div>
    </section>
  );
}

