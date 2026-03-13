"use client";

import { useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { language } = useLanguage();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const isDark = mounted ? theme === "dark" : true;
  const isEnglish = language === "en";

  return (
    <button
      onClick={toggleTheme}
      aria-label={
        mounted
          ? isDark
            ? isEnglish
              ? "Enable light mode"
              : "Ativar modo claro"
            : isEnglish
              ? "Enable dark mode"
              : "Ativar modo escuro"
          : isEnglish
            ? "Toggle theme"
            : "Alternar tema"
      }
      className="relative w-9 h-9 flex items-center justify-center rounded-lg border transition-all duration-150"
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
