import React from "react";

export function GradientGlow() {
  React.useEffect(() => {
    function onMove(e) {
      const x = `${e.clientX}px`;
      const y = `${e.clientY}px`;
      document.documentElement.style.setProperty("--glow-x", x);
      document.documentElement.style.setProperty("--glow-y", y);
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        background:
          "radial-gradient(650px circle at var(--glow-x, 50%) var(--glow-y, 20%), rgba(59,130,246,0.18), transparent 60%)",
      }}
    />
  );
}

