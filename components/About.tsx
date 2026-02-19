"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Target, Globe2, Cpu } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Orientado a Resultados",
    desc: "Cada linha de código resolve um problema real.",
  },
  {
    icon: Lightbulb,
    title: "Aprendizado Contínuo",
    desc: "Cursando Ciência da Computação na UNISINOS.",
  },
  {
    icon: Globe2,
    title: "Inglês Avançado",
    desc: "Comunicação técnica fluente em inglês.",
  },
  {
    icon: Cpu,
    title: "IA na Prática",
    desc: "Integração de IA em projetos reais.",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">
            Quem sou eu
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2" style={{ color: 'var(--text-base)' }}>
            Sobre Mim
          </h2>
          <div className="mt-3 w-12 h-0.5 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-5 text-[1.05rem] leading-relaxed"
          style={{ color: 'var(--text-sub)' }}
          >
            <p>
              Sou <strong className="font-bold" style={{ color: 'var(--text-base)' }}>Matheus Bordinhão de Oliveira</strong>,
              desenvolvedor Full Stack com base sólida em desenvolvimento de
              software, construída ao longo de anos no{" "}
              <strong className="font-bold" style={{ color: 'var(--text-base)' }}>IFSUL</strong> (Técnico em
              Desenvolvimento de Sistemas) e atualmente cursando{" "}
              <strong className="font-bold" style={{ color: 'var(--text-base)' }}>Ciência da Computação</strong> na
              UNISINOS.
            </p>
            <p>
              Atuo como <strong className="font-bold" style={{ color: 'var(--text-base)' }}>Estagiário de TI</strong> na{" "}
              <strong className="font-bold" style={{ color: 'var(--text-base)' }}>D9ti</strong>, onde participo do
              desenvolvimento, manutenção e melhoria de sistemas internos —
              traduzindo requisitos de negócio em soluções técnicas eficientes.
            </p>
            <p>
              Tenho experiência prática com{" "}
              <strong className="text-blue-400">React, TypeScript, C#/.NET, PHP, Java e SQL</strong>,
              além de integração com APIs de inteligência artificial. Sou
              apaixonado por criar interfaces acessíveis e back-ends robustos que
              entregam valor real ao usuário final.
            </p>
            <p>
              Busco oportunidades onde possa crescer, contribuir com equipes
              ágeis e aplicar tecnologia para resolver problemas que importam.
            </p>

          </motion.div>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"          >
            {highlights.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="group p-5 rounded-xl t-card hover:border-blue-500/30 hover:bg-blue-600/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600/15 border border-blue-500/20 flex items-center justify-center mb-3 group-hover:bg-blue-600/25 transition-all duration-300">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="font-semibold text-sm mb-1" style={{ color: 'var(--text-base)' }}>{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-faint)' }}>{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
