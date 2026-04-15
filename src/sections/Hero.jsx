import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react"; // Added MessageCircle
import { Reveal } from "../components/Reveal.jsx";
import { HERO_ROLES } from "../data/portfolio.js";

function useTypewriter(words, { typeMs = 55, deleteMs = 35, holdMs = 1100 } = {}) {

  const [wordIndex, setWordIndex] = React.useState(0);

  const [subIndex, setSubIndex] = React.useState(0);

  const [deleting, setDeleting] = React.useState(false);



  React.useEffect(() => {

    const current = words[wordIndex % words.length] ?? "";

    const timeout = window.setTimeout(() => {

      if (!deleting) {

        if (subIndex < current.length) setSubIndex((s) => s + 1);

        else setDeleting(true);

      } else {

        if (subIndex > 0) setSubIndex((s) => s - 1);

        else {

          setDeleting(false);

          setWordIndex((i) => (i + 1) % words.length);

        }

      }

    }, deleting ? deleteMs : subIndex === current.length ? holdMs : typeMs);

    return () => window.clearTimeout(timeout);

  }, [words, wordIndex, subIndex, deleting, typeMs, deleteMs, holdMs]);

  const current = words[wordIndex % words.length] ?? "";

  return current.slice(0, subIndex);

}

export function Hero() {
  const typed = useTypewriter(HERO_ROLES);
  const whatsappNumber = "0386997600";
  const defaultMessage = encodeURIComponent("Hi Mohammed, I saw your portfolio and would like to discuss a project.");

  return (
    <section id="home" className="container-max pb-10 pt-16 sm:pt-20">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-zinc-200">
              Available for opportunities
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-5 text-balance text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Full-Stack Web Developer
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-4 text-lg text-zinc-300">
              <span className="text-zinc-100">I build</span>{" "}
              <span className="font-semibold text-blue-300">{typed}</span>
              <span className="caret" aria-hidden="true" />{" "}
              <span className="text-zinc-300">— clean UI, solid APIs, and realtime features.</span>
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-shimmer"
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </a>

              {/* Added WhatsApp Button */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition-all hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4 text-green-400" />
                WhatsApp Me
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.05} className="lg:justify-self-end">
          <div className="glass relative overflow-hidden rounded-3xl p-6 sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.22),transparent_55%),radial-gradient(circle_at_80%_90%,rgba(255,255,255,0.06),transparent_55%)]" />
            <div className="relative">
              <p className="text-sm font-semibold text-blue-300">What you get</p>
              <ul className="mt-4 space-y-3 text-sm text-zinc-200">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-400" />
                  Responsive UI with modern animations (Framer Motion)
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-400" />
                  Backend-ready thinking: auth, APIs, realtime patterns
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-400" />
                  Clean components you can grow into a full product
                </li>
              </ul>
              <div className="mt-6 rounded-2xl border border-white/10 bg-zinc-950/50 p-4">
                <p className="text-xs font-semibold text-zinc-300">Tech vibe</p>
                <p className="mt-1 text-sm text-zinc-200">
                  MERN • Next.js • Tailwind • Socket.io • MongoDB • SQL
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}