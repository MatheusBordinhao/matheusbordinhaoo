"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projetos", href: "#projects" },
  { label: "Experiência", href: "#experience" },
  { label: "Contato", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { threshold: 0.4 }
    );
    links.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "navbar-scrolled border-b shadow-sm"
            : "bg-transparent"
        )}
        style={scrolled ? { borderColor: "var(--border)" } : {}}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center group-hover:bg-blue-600/30 transition-all duration-300">
              <Code2 className="w-4 h-4 text-blue-400" />
            </div>
            <span className="font-semibold tracking-tight t-text">
              matheusbordinhão<span className="text-blue-400">.dev</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-md transition-all duration-300",
                  active === href ? "t-text" : "t-text-muted hover:t-text"
                )}
                style={{
                  color: active === href ? "var(--text-base)" : "var(--text-muted)",
                }}
              >
                {active === href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-blue-600/10 border border-blue-500/20 rounded-md"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </a>
            ))}
          </nav>

          {/* CTA + Theme toggle */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <a
              href="/cv.pdf"
              download="Currículo-MatheusBordinhão"
              className="px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              Download CV
            </a>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-9 h-9 flex items-center justify-center rounded-lg border transition-all duration-200"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border)",
                color: "var(--text-muted)",
              }}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 md:hidden flex flex-col pt-20 px-6"
            style={{
              background: "color-mix(in srgb, var(--bg-base) 96%, transparent)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            <nav className="flex flex-col gap-2">
              {links.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 text-lg font-medium rounded-lg transition-all duration-200",
                    active === href
                      ? "bg-blue-600/15 text-blue-500 border border-blue-500/30"
                      : "border border-transparent"
                  )}
                  style={
                    active !== href
                      ? { color: "var(--text-muted)" }
                      : {}
                  }
                >
                  {label}
                </a>
              ))}
              <a
                href="/cv.pdf"
                download="Currículo-MatheusBordinhão"
                className="mt-4 px-4 py-3 text-center text-white bg-blue-600 hover:bg-blue-500 rounded-lg font-medium transition-all duration-200"
              >
                Download CV
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

