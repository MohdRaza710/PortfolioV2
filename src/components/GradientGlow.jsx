import React, { useState, useEffect, useRef } from "react";

export function GradientGlow() {
  const [mousePos, setMousePos] = useState({ x: "50%", y: "20%" });
  const requestRef = useRef();

  useEffect(() => {
    const onMove = (e) => {
      // Use requestAnimationFrame to sync with the browser's refresh rate
      cancelAnimationFrame(requestRef.current);
      
      requestRef.current = requestAnimationFrame(() => {
        setMousePos({
          x: `${e.clientX}px`,
          y: `${e.clientY}px`,
        });
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        background: `radial-gradient(650px circle at ${mousePos.x} ${mousePos.y}, rgba(59,130,246,0.18), transparent 60%)`,
        // GPU acceleration trick
        willChange: "background",
        transform: "translateZ(0)",
      }}
    />
  );
}