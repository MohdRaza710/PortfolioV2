import React from "react";
import { GitBranch, Link2 } from "lucide-react";
import { Reveal } from "../components/Reveal.jsx";

export function Footer() {
  return (
    <footer className="container-max pb-12 pt-6">
      <Reveal>
        <div className="glass flex flex-col items-center justify-between gap-4 rounded-2xl px-6 py-5 sm:flex-row">
          <p className="text-sm text-zinc-300">
            © {new Date().getFullYear()} <span className="font-semibold text-zinc-100">Mohammed Raza</span>
          </p>
          <div className="flex items-center gap-2">
            <a
              href="https://www.aammg.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 p-2 text-zinc-200 hover:bg-white/10"
              aria-label="GitHub"
            >
              <GitBranch className="h-5 w-5" />
            </a>
            <a
              href="https://www.aamtechsolution.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 p-2 text-zinc-200 hover:bg-white/10"
              aria-label="LinkedIn"
            >
              <Link2 className="h-5 w-5" />
            </a>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}

