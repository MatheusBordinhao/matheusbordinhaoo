"use client";

import { motion, useReducedMotion } from "framer-motion";

type PageShellProps = {
  children: React.ReactNode;
};

export default function PageShell({ children }: PageShellProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="relative"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-blue-600/6 blur-3xl"
          animate={shouldReduceMotion ? undefined : { x: [0, 45, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl"
          animate={shouldReduceMotion ? undefined : { x: [0, -35, 0], y: [0, 24, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />
      </div>

      {children}
    </motion.div>
  );
}
