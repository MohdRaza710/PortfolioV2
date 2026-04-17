import React from "react";
import { Reveal } from "./Reveal.jsx";

export function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-10">
      <Reveal>
        <p className="text-sm font-semibold tracking-wide text-blue-600 dark:text-blue-400">
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl transition-colors">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.1}>
          <p className="mt-3 max-w-2xl text-pretty text-zinc-700 dark:text-zinc-400 transition-colors">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}