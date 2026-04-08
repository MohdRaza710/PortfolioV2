import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const MotionDiv = motion.div;

export function Reveal({
  children,
  className,
  delay = 0,
  y = 14,
  once = true,
  amount = 0.25,
}) {
  const reduceMotion = useReducedMotion();

  return (
    <MotionDiv
      className={className}
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay }}
    >
      {children}
    </MotionDiv>
  );
}

