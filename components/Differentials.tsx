"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Shield, Users, Accessibility, Brain, Globe } from "lucide-react";

const differentials = [
  {
    icon: Accessibility,
    title: "Acessibilidade Digital",
    desc: "Experiência real com desenvolvimento comprometido com inclusão — WCAG, eMAG e tecnologias assistivas integradas em projetos reais.",
    highlight: "TCC AGUIA",
  },
  {
    icon: Brain,
    title: "IA na Engenharia de Software",
    desc: "Integração prática de APIs de inteligência artificial em sistemas reais, criando produtos mais inteligentes e personalizados.",
    highlight: "PraViver ON + AGUIA",
  },
  {
    icon: Globe,
    title: "Inglês Avançado",
    desc: "Comunicação técnica fluente — leitura de documentação, colaboração com equipes e participação em ambientes internacionais.",
    highlight: "Inglês",
  },
  {
    icon: Zap,
    title: "Desenvolvimento Full Stack Real",
    desc: "Entrego desde o modelo de dados até a interface do usuário, com domínio de frontend (React/TS) e backend (C#/.NET, PHP, Java).",
    highlight: "End-to-end",
  },
  {
    icon: Shield,
    title: "Base Técnica Sólida",
    desc: "Formação técnica de 4 anos no IFSUL + graduação em Ciência da Computação na UNISINOS — teoria e prática caminhando juntas.",
    highlight: "IFSUL + UNISINOS",
  },
  {
    icon: Users,
    title: "Colaboração e Comunicação",
    desc: "Atuação em equipes técnicas reais, com foco em comunicação clara, alinhamento com stakeholders e processos ágeis.",
    highlight: "D9ti",
  },
];

export default function Differentials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="differentials" ref={ref} className="py-28 px-6" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">
            Por que eu?
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2" style={{ color: 'var(--text-base)' }}>
            Diferenciais
          </h2>
          <div className="mt-3 w-12 h-0.5 bg-blue-500 mx-auto rounded-full" />
          <p className="mt-4 max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            O que me distingue como desenvolvedor — competências técnicas e
            comportamentais que entregam valor além do código.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {differentials.map(({ icon: Icon, title, desc, highlight }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-6 rounded-2xl t-card hover:border-blue-500/30 hover:bg-blue-600/5 transition-all duration-400 overflow-hidden"
            >
              {/* Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-8 translate-x-8 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-600/25 transition-all duration-300">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="px-2 py-0.5 text-xs font-semibold bg-blue-600/10 text-blue-400 border border-blue-500/20 rounded-full">
                    {highlight}
                  </span>
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: 'var(--text-base)' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
