import React from "react";
import { Menu, Sparkles } from "lucide-react";
import { NAV_LINKS } from "../data/portfolio.js";
import { MobileMenu } from "./MobileMenu.jsx";

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <header className="sticky top-0 z-30">
        <div className="container-max pt-4">
          <div className="glass rounded-2xl px-4 py-3">
            <div className="flex items-center justify-between">
              <a
                href="#home"
                className="flex items-center gap-2 text-sm font-semibold tracking-wide text-zinc-100"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-500/15 text-blue-300 ring-1 ring-blue-500/30">
                  <Sparkles className="h-5 w-5" />
                </span>
                <span className="hidden sm:inline">Mohammed Raza</span>
              </a>

              <nav className="hidden items-center gap-1 md:flex">
                {NAV_LINKS.map((l) => (
                  <a
                    key={l.id}
                    href={`#${l.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(l.id)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="rounded-xl px-3 py-2 text-sm font-medium text-zinc-200 hover:bg-white/5 hover:text-zinc-50"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>

              <div className="flex items-center gap-2">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hidden rounded-xl bg-blue-500/15 px-4 py-2 text-sm font-semibold text-blue-200 ring-1 ring-blue-500/30 hover:bg-blue-500/20 md:inline-flex"
                >
                  Let’s talk
                </a>
                <button
                  type="button"
                  className="inline-flex rounded-xl border border-white/10 bg-white/5 p-2 text-zinc-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 md:hidden"
                  onClick={() => setOpen(true)}
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} links={NAV_LINKS} />
    </>
  );
}

