"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function LanguageToggle() {
  const { language, setLanguage, toggleLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("mousedown", onPointerDown);
    window.addEventListener("keydown", onEscape);

    return () => {
      window.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("keydown", onEscape);
    };
  }, []);

  const currentLabel = language === "pt" ? "PT" : "EN";

  return (
    <div
      ref={containerRef}
      className="relative inline-flex items-center rounded-lg border"
      style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
      aria-label={language === "pt" ? "Selecionar idioma" : "Select language"}
    >
      <button
        type="button"
        onClick={toggleLanguage}
        className="h-7 px-2.5 text-[11px] font-semibold rounded-l-[7px] border-r transition-colors duration-150"
        style={{ color: "var(--text-muted)", borderColor: "var(--border)" }}
        aria-label={language === "pt" ? "Alternar idioma" : "Toggle language"}
      >
        {currentLabel}
      </button>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="h-7 w-7 inline-flex items-center justify-center rounded-r-[7px] transition-colors duration-150"
        style={
          open
            ? { background: "#2563eb", color: "#ffffff" }
            : { color: "var(--text-muted)" }
        }
        aria-label={language === "pt" ? "Abrir opções de idioma" : "Open language options"}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <ChevronDown className="w-3.5 h-3.5" />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-[calc(100%+0.35rem)] min-w-[108px] rounded-lg border p-1 shadow-md z-50"
          style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
        >
          <button
            type="button"
            role="menuitemradio"
            aria-checked={language === "pt"}
            onClick={() => {
              setLanguage("pt");
              setOpen(false);
            }}
            className="w-full flex items-center justify-between px-2 py-1.5 text-[11px] font-semibold rounded-md transition-colors duration-150"
            style={{ color: "var(--text-muted)" }}
          >
            Português
            {language === "pt" && <Check className="w-3.5 h-3.5 text-blue-500" />}
          </button>
          <button
            type="button"
            role="menuitemradio"
            aria-checked={language === "en"}
            onClick={() => {
              setLanguage("en");
              setOpen(false);
            }}
            className="w-full flex items-center justify-between px-2 py-1.5 text-[11px] font-semibold rounded-md transition-colors duration-150"
            style={{ color: "var(--text-muted)" }}
          >
            English
            {language === "en" && <Check className="w-3.5 h-3.5 text-blue-500" />}
          </button>
        </div>
      )}
    </div>
  );
}
