"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";

const titles = [
  "Desenvolvedor Full Stack",
];

function useTypingEffect(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setDisplay(current.slice(0, charIndex + 1));
          if (charIndex + 1 === current.length) {
            setTimeout(() => setDeleting(true), pause);
          } else {
            setCharIndex((c) => c + 1);
          }
        } else {
          setDisplay(current.slice(0, charIndex - 1));
          if (charIndex - 1 === 0) {
            setDeleting(false);
            setWordIndex((w) => (w + 1) % words.length);
            setCharIndex(0);
          } else {
            setCharIndex((c) => c - 1);
          }
        }
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return display;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  const typedText = useTypingEffect(titles);

   return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 pt-24 sm:pt-20 pb-10"
    >
      {/* Subtle centered glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
        {/* Badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center justify-center gap-2 px-3 py-1.5 mb-8 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-300 text-xs sm:text-sm font-medium max-w-[92vw] sm:max-w-none leading-snug"
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shrink-0" />
          <span>Desenvolvendo tecnologia com propósito e performance</span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-tight"
          style={{ color: 'var(--text-base)' }}
        > 
          Olá, eu sou{" "}
          <span className="gradient-text glow-text">Matheus</span>
        </motion.h1>

        {/* Typing title */}
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="h-10 sm:h-12 flex items-center justify-center mb-6"
        >
          <p className="text-[1.65rem] sm:text-3xl font-semibold" style={{ color: 'var(--text-sub)' }}>
            <span>{typedText}</span>
            <span className="inline-block w-0.5 h-7 bg-blue-400 ml-1 animate-pulse align-middle" />
          </p>
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-base sm:text-xl max-w-2xl mx-auto mb-9 sm:mb-10 leading-relaxed"
          style={{ color: 'var(--text-muted)' }}
        >
          Construo aplicações web modernas, escaláveis e centradas no usuário,
          do backend ao frontend, integrando IA e boas práticas de engenharia.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-11 sm:mb-12 w-full max-w-xl mx-auto"
        >
          <a
            href="#projects"
            className="group relative w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-0.5"
          >
            Ver Projetos
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 bg-gray-100 hover:bg-gray-200 border border-gray-200 hover:border-blue-500/40 font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5"
            style={{ color: 'var(--text-base)' }}
          >
            Entrar em Contato
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          custom={5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap"
        >
          <span className="text-sm flex items-center gap-1.5 whitespace-nowrap" style={{ color: 'var(--text-faint)' }}>
            <MapPin className="w-3.5 h-3.5" />RS — Brasil
          </span>
          <div className="w-px h-4 bg-gray-300 dark:bg-gray-700" />
          <div className="flex gap-3">
            {[
              {
                icon: Github,
                href: "https://github.com/MatheusBordinhao",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/matheus-bordinh%C3%A3o-004a75285",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:matheusbordinhao11@gmail.com",
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-lg dark:bg-white/5 dark:border-white/10 bg-gray-100 border border-gray-200 text-gray-500 hover:text-blue-500 hover:border-blue-500/40 hover:bg-blue-600/10 transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2" style={{ color: 'var(--text-faint)' }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
