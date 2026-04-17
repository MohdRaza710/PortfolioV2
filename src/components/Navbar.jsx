import React from "react";
import { Menu, Sparkles, Sun, Moon } from "lucide-react";
import { NAV_LINKS } from "../data/portfolio.js";
import { MobileMenu } from "./MobileMenu.jsx";
import { useTheme } from "../Context/ThemeContext";

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
      <header className="sticky top-0 z-30 transition-colors duration-300">
        <div className="container-max pt-4">
          <div className="glass border border-zinc-200 dark:border-white/10 rounded-2xl px-4 py-3 shadow-sm">
            <div className="flex items-center justify-between">

              {/* Logo + Name */}
              <a
                href="#home"
                className="flex items-center gap-2 text-sm font-semibold tracking-wide text-zinc-900 dark:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-500/15 text-blue-600 dark:text-blue-300 ring-1 ring-blue-500/30 transition-colors">
                  <Sparkles className="h-5 w-5" />
                </span>
                <span className="font-semibold">Mohammed Raza</span>   {/* Always visible */}
              </a>

              {/* Desktop Navigation */}
              <nav className="hidden items-center gap-1 md:flex">
                {NAV_LINKS.map((l) => (
                  <a
                    key={l.id}
                    href={`#${l.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(l.id)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="rounded-xl px-3 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-200 hover:bg-black/5 dark:hover:bg-white/5 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>

              {/* Right Side Buttons */}
              <div className="flex items-center gap-2">
                {/* Animated Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className="relative flex h-9 w-9 items-center justify-center rounded-2xl border border-zinc-200 bg-white text-zinc-700 transition-all hover:bg-zinc-100 active:scale-95 dark:border-white/10 dark:bg-zinc-900 dark:text-yellow-400"
                  aria-label="Toggle theme"
                >
                  <div className="relative h-5 w-5">
                    <Sun
                      className={`absolute inset-0 h-5 w-5 transition-all duration-500 ${isDarkMode ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
                    />
                    <Moon
                      className={`absolute inset-0 h-5 w-5 transition-all duration-500 ${isDarkMode ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`}
                    />
                  </div>
                </button>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hidden rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 md:inline-flex transition-all active:scale-95"
                >
                  Let’s talk
                </a>

                {/* Mobile Menu Button */}
                <button
                  type="button"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-200 md:hidden transition-all"
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