import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const MotionOverlay = motion.div;
const MotionAside = motion.aside;

export function MobileMenu({ open, onClose, links }) {
  return (
    <AnimatePresence>
      {open ? (
        <>
          <MotionOverlay
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <MotionAside
            className="fixed right-0 top-0 z-50 h-full w-[86%] max-w-sm border-l border-white/10 bg-zinc-950/85 backdrop-blur-xl"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 40, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between px-5 py-4">
              <span className="text-sm font-semibold tracking-wide text-zinc-200">Menu</span>
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl border border-white/10 bg-white/5 p-2 text-zinc-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="px-3 py-2">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(l.id)?.scrollIntoView({ behavior: "smooth" });
                    onClose();
                  }}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-zinc-100 hover:bg-white/5"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </MotionAside>
        </>
      ) : null}
    </AnimatePresence>
  );
}

