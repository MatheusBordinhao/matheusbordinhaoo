"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { ExternalLink, Github, Tag } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();
  const { language } = useLanguage();
  const isEnglish = language === "en";

  const projects = [
    {
      name: "AGUIA Accessibility Plugin",
      subtitle: isEnglish
        ? "Capstone Project - Systems Development Technician"
        : "TCC — Técnico em Desenvolvimento de Sistemas",
      description: isEnglish
        ? "A Moodle plugin focused on digital accessibility for visually impaired users. It integrates assistive technologies and artificial intelligence to personalize the interface while ensuring WCAG and eMAG compliance. Compatible with screen readers."
        : "Plugin para a plataforma Moodle focado em acessibilidade digital para pessoas com deficiência visual. Integra tecnologias assistivas e inteligência artificial para personalizar a interface, garantindo conformidade com as diretrizes WCAG e eMAG. Compatível com leitores de tela.",
      problem: isEnglish
        ? "Virtual learning environments rarely provide strong accessibility support. AGUIA solves this directly in Moodle, without requiring external tools."
        : "Ambientes virtuais de aprendizagem raramente oferecem suporte robusto à acessibilidade. O AGUIA resolve isso diretamente na plataforma Moodle, sem necessidade de ferramentas externas.",
      tags: ["PHP", "JavaScript", "HTML/CSS", "SQL", "APIs", "Moodle", "WCAG", isEnglish ? "AI" : "IA"],
      github: "https://github.com/LucasBissolotti/aguiaplugin",
      deploy: null,
      featured: true,
    },
    {
      name: "PraViver ON",
      subtitle: isEnglish ? "Emotional Care Web Platform" : "Plataforma Web de Cuidado Emocional",
      description: isEnglish
        ? "A digital emotional care platform with 24/7 support, built with a Full Stack approach. It includes robust C#/.NET REST APIs with SQL Server, AI integration, and a React/TypeScript SPA with secure authentication and user-centered UX."
        : "Plataforma digital de cuidado emocional com suporte 24h, desenvolvida em stack Full Stack. Implementação de APIs REST robustas em C#/.NET com SQL Server, integração com IA e SPA em React/TypeScript com autenticação segura e UX centrada no bem-estar do usuário.",
      problem: isEnglish
        ? "Access to quality emotional support is limited. The platform offers continuous and accessible assistance, using AI to personalize each user's experience."
        : "Acesso a suporte emocional de qualidade é limitado. A plataforma oferece assistência contínua e acessível, integrando IA para personalizar a experiência de cada usuário.",
      tags: ["React", "TypeScript", "C#", ".NET", "SQL", "REST API", isEnglish ? "AI" : "IA"],
      github: "https://github.com/MatheusBordinhao",
      deploy: null,
      featured: true,
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">
            {isEnglish ? "Portfolio" : "Portfólio"}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2" style={{ color: 'var(--text-base)' }}>
            {isEnglish ? "Projects" : "Projetos"}
          </h2>
          <div className="mt-3 w-12 h-0.5 bg-blue-500 mx-auto rounded-full" />
          <p className="mt-4 max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            {isEnglish
              ? "Real-world projects with impact, each focused on solving a specific problem with strategically chosen technologies."
              : "Projetos reais com impacto — cada um com um problema específico para resolver e tecnologias escolhidas estrategicamente."}
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                y: { duration: 0.12, ease: "easeOut" },
              }}
              className="group relative p-7 sm:p-9 rounded-2xl t-card hover:border-blue-500/30 transition-colors duration-150"
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { y: -6 }
              }
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {project.featured && (
                        <span className="px-2 py-0.5 text-xs font-semibold bg-blue-600/20 text-blue-300 border border-blue-500/30 rounded-full">
                          {isEnglish ? "Featured" : "Destaque"}
                        </span>
                      )}
                    </div>
                    <h3
                      className="text-xl sm:text-2xl font-bold group-hover:text-blue-400 transition-colors duration-150" style={{ color: 'var(--text-base)' }}>
                      {project.name}
                    </h3>
                    <p className="text-blue-400 text-sm mt-1 font-medium">{project.subtitle}</p>
                  </div>
                  {/* Links */}
                  <div className="flex gap-3 shrink-0">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="w-9 h-9 flex items-center justify-center rounded-lg dark:bg-white/5 dark:border-white/10 bg-gray-100 border border-gray-200 text-gray-500 hover:text-blue-500 hover:border-blue-500/40 transition-all duration-200"
                        whileHover={
                          shouldReduceMotion
                            ? undefined
                            : { y: -2, scale: 1.05, transition: { duration: 0.12, ease: "easeOut" } }
                        }
                        whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    )}
                    {project.deploy && (
                      <motion.a
                        href={project.deploy}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Deploy"
                        className="w-9 h-9 flex items-center justify-center rounded-lg dark:bg-white/5 dark:border-white/10 bg-gray-100 border border-gray-200 text-gray-500 hover:text-blue-500 hover:border-blue-500/40 transition-all duration-200"
                        whileHover={
                          shouldReduceMotion
                            ? undefined
                            : { y: -2, scale: 1.05, transition: { duration: 0.12, ease: "easeOut" } }
                        }
                        whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="leading-relaxed mb-5" style={{ color: 'var(--text-sub)' }}>{project.description}</p>

                {/* Problem */}
                <div className="mb-6 p-4 rounded-xl dark:bg-white/[0.02] dark:border-white/5 bg-gray-50 border border-gray-100">
                  <p className="text-xs text-blue-400 font-semibold uppercase tracking-wider mb-1.5">
                    {isEnglish ? "Problem Solved" : "Problema Resolvido"}
                  </p>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{project.problem}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  <Tag className="w-3.5 h-3.5 text-gray-600 mt-0.5" />
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      className="px-2.5 py-0.5 text-xs font-medium dark:bg-white/5 dark:border-white/10 bg-gray-100 border border-gray-200 hover:border-blue-500/30 hover:text-blue-500 transition-all duration-200 rounded-md" style={{ color: 'var(--text-sub)' }}
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : { y: -2, transition: { duration: 0.12, ease: "easeOut" } }
                      }
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* More on GitHub */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <motion.a
            href="https://github.com/MatheusBordinhao"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl dark:bg-white/5 dark:border-white/10 bg-gray-100 border border-gray-200 hover:border-blue-500/30 hover:bg-blue-600/10 font-medium text-sm transition-all duration-150" style={{ color: 'var(--text-muted)' }}
            whileHover={
              shouldReduceMotion
                ? undefined
                : { y: -3, scale: 1.01, transition: { duration: 0.12, ease: "easeOut" } }
            }
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
          >
            <Github className="w-4 h-4" />
            {isEnglish ? "View all projects on GitHub" : "Ver todos os projetos no GitHub"}
            <ExternalLink className="w-3.5 h-3.5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
