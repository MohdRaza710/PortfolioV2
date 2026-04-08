import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
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
              href="https://x.com/MohammedRa78084"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 p-2 text-zinc-200 hover:bg-white/10"
              aria-label="Twitter"
            >
              <FaXTwitter className="h-5 w-5" />
            </a>
            <a
              href="www.linkedin.com/in/mohammed-raza-92aaa4398"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 p-2 text-zinc-200 hover:bg-white/10"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}

