"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLanguage } from "./LanguageProvider";

type SkillLevel = "basic" | "intermediate" | "advanced";
type Skill = { name: string; level: SkillLevel };

const levelColor: Record<SkillLevel, string> = {
  basic: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  intermediate: "text-blue-300 bg-blue-500/10 border-blue-500/20",
  advanced: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20",
};

const cardColors: Record<string, string> = {
  violet: "border-blue-500/20 hover:border-blue-500/40",
  blue: "border-blue-500/20 hover:border-blue-500/40",
  emerald: "border-emerald-500/20 hover:border-emerald-500/40",
  orange: "border-orange-500/20 hover:border-orange-500/40",
};

const headerColors: Record<string, string> = {
  violet: "text-violet-400",
  blue: "text-blue-400",
  emerald: "text-[#06d4d4]",
  orange: "text-emerald-400",
};

export default function Stack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();
  const { language } = useLanguage();
  const isEnglish = language === "en";

  const categories = [
    {
      title: "Frontend",
      color: "violet",
      skills: [
        { name: "React", level: "intermediate" },
        { name: "TypeScript", level: "intermediate" },
        { name: "JavaScript", level: "intermediate" },
        { name: "HTML / CSS", level: "intermediate" },
        { name: "Next.js", level: "basic" },
      ] as Skill[],
    },
    {
      title: "Backend",
      color: "blue",
      skills: [
        { name: "C# / .NET", level: "intermediate" },
        { name: "Java", level: "intermediate" },
        { name: "PHP", level: "intermediate" },
        { name: "Python", level: "basic" },
        { name: "REST APIs", level: "intermediate" },
      ] as Skill[],
    },
    {
      title: isEnglish ? "Databases" : "Banco de Dados",
      color: "emerald",
      skills: [
        { name: "SQL", level: "intermediate" },
        { name: "MySQL", level: "intermediate" },
        { name: "MariaDB", level: "intermediate" },
        { name: "DBeaver", level: "intermediate" },
      ] as Skill[],
    },
    {
      title: isEnglish ? "Tools & Others" : "Ferramentas & Outros",
      color: "orange",
      skills: [
        { name: "Git / GitHub", level: "intermediate" },
        { name: "Swagger", level: "intermediate" },
        { name: isEnglish ? "AI Integration" : "Integração com IA", level: "basic" },
        { name: "Moodle (Plugin Dev)", level: "intermediate" },
      ] as Skill[],
    },
  ];

  return (
    <section id="stack" ref={ref} className="py-28 px-6" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">
            {isEnglish ? "Technologies" : "Tecnologias"}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2" style={{ color: 'var(--text-base)' }}>
            {isEnglish ? "My Stack" : "Minha Stack"}
          </h2>
          <div className="mt-3 w-12 h-0.5 bg-blue-500 mx-auto rounded-full" />
          <p className="mt-4 max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            {isEnglish
              ? "Tools and languages I use to build complete solutions, from the database layer to the user interface."
              : "Ferramentas e linguagens que uso para construir soluções completas, do banco de dados à interface do usuário."}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map(({ title, color, skills }, ci) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: ci * 0.1,
                y: { duration: 0.12, ease: "easeOut" },
              }}
              className={cn(
                "p-5 rounded-2xl t-card transition-colors duration-150",
                cardColors[color]
              )}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { y: -6 }
              }
            >
              <h3 className={cn("font-bold text-sm mb-4 uppercase tracking-wider", headerColors[color])}>
                {title}
              </h3>
              <div className="flex flex-col gap-2.5">
                {skills.map(({ name, level }, si) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: ci * 0.1 + si * 0.06 }}
                    className="flex items-center justify-between"
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : { x: 4, transition: { duration: 0.12, ease: "easeOut" } }
                    }
                  >
                    <span className="text-sm font-medium" style={{ color: 'var(--text-base)' }}>{name}</span>
                    <span
                      className={cn(
                        "text-xs px-2 py-0.5 rounded-full border font-medium",
                        levelColor[level]
                      )}
                    >
                      {isEnglish
                        ? level === "basic"
                          ? "Basic"
                          : level === "intermediate"
                            ? "Intermediate"
                            : "Advanced"
                        : level === "basic"
                          ? "Básico"
                          : level === "intermediate"
                            ? "Intermediário"
                            : "Avançado"}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Language */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 flex justify-center"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full t-card text-sm hover:border-blue-500/30 hover:bg-blue-600/5 transition-all duration-150"
            whileHover={
              shouldReduceMotion
                ? undefined
                : { y: -6, transition: { duration: 0.12, ease: "easeOut" } }
            }
          >
            <span className="text-blue-500 dark:text-blue-400 font-medium">
              🌐 {isEnglish ? "Advanced English" : "Inglês Avançado"}
            </span>
            <span style={{ color: 'var(--text-faint)' }}>•</span>
            <span style={{ color: 'var(--text-muted)' }}>
              {isEnglish ? "Fluent technical communication" : "Comunicação técnica fluente"}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
