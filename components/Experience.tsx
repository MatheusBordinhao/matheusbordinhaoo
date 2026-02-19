"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, CalendarDays } from "lucide-react";

const experiences = [
  {
    company: "D9ti",
    role: "Estagiário em TI",
    period: "Dez/2025 — Atual",
    location: "São Leopoldo, RS",
    current: true,
    responsibilities: [
      "Desenvolvimento, manutenção e melhoria de sistemas internos de software.",
      "Participação ativa no ciclo completo de desenvolvimento: análise, implementação e testes.",
      "Apoio em suporte técnico, manutenção de infraestrutura de software e organização de dados.",
      "Colaboração na melhoria de processos internos e comunicação entre equipes técnicas.",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="py-28 px-6" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">
            Carreira
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2" style={{ color: 'var(--text-base)' }}>
            Experiência Profissional
          </h2>
          <div className="mt-3 w-12 h-0.5 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-5 w-4 h-4 -translate-x-1/2 rounded-full border-2 border-blue-500 bg-[#080808] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                </div>

                {/* Card */}
                <div className="group p-6 sm:p-8 rounded-2xl t-card hover:border-blue-500/30 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase className="w-4 h-4 text-blue-400" />
                        <h3 className="text-lg font-bold" style={{ color: 'var(--text-base)' }}>{exp.role}</h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 text-xs font-semibold bg-emerald-600/15 text-emerald-400 border border-emerald-500/20 rounded-full">
                            Atual
                          </span>
                        )}
                      </div>
                      <p className="text-blue-300 font-semibold">{exp.company}</p>
                    <p className="text-sm mt-0.5" style={{ color: 'var(--text-faint)' }}>{exp.location}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm shrink-0" style={{ color: 'var(--text-faint)' }}>
                      <CalendarDays className="w-3.5 h-3.5" />
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((item, ri) => (
                      <li key={ri} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: 'var(--text-sub)' }}>
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
