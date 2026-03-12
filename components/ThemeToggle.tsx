"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? theme === "dark" : true;

  return (
    <button
      onClick={toggleTheme}
      aria-label={mounted ? (isDark ? "Ativar modo claro" : "Ativar modo escuro") : "Alternar tema"}
      className="relative w-9 h-9 flex items-center justify-center rounded-lg border transition-all duration-300"
      style={{
        background: "var(--bg-card)",
        borderColor: "var(--border)",
        color: "var(--text-muted)",
      }}
    >
      <motion.div
        key={theme}
        initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
        transition={{ duration: 0.2 }}
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-blue-400" />
        ) : (
          <Moon className="w-4 h-4 text-blue-500" />
        )}
      </motion.div>
    </button>
  );
}
