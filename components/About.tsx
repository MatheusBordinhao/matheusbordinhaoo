"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { Lightbulb, Target, Globe2, Cpu } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();
  const { language } = useLanguage();
  const isEnglish = language === "en";

  const highlights = [
    {
      icon: Target,
      title: isEnglish ? "Results Driven" : "Orientado a Resultados",
      desc: isEnglish
        ? "Every line of code solves a real problem."
        : "Cada linha de código resolve um problema real.",
    },
    {
      icon: Lightbulb,
      title: isEnglish ? "Continuous Learning" : "Aprendizado Contínuo",
      desc: isEnglish
        ? "Computer Science student at UNISINOS."
        : "Cursando Ciência da Computação na UNISINOS.",
    },
    {
      icon: Globe2,
      title: isEnglish ? "Advanced English" : "Inglês Avançado",
      desc: isEnglish
        ? "Fluent technical communication in English."
        : "Comunicação técnica fluente em inglês.",
    },
    {
      icon: Cpu,
      title: isEnglish ? "AI in Practice" : "IA na Prática",
      desc: isEnglish
        ? "Hands-on AI integration in real projects."
        : "Integração de IA em projetos reais.",
    },
  ];

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
            {isEnglish ? "Who I am" : "Quem sou eu"}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2" style={{ color: 'var(--text-base)' }}>
            {isEnglish ? "About Me" : "Sobre Mim"}
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
              {isEnglish ? (
                <>
                  I am <strong className="font-bold" style={{ color: 'var(--text-base)' }}>Matheus Bordinhao de Oliveira</strong>,
                  a Full Stack developer with a strong software engineering foundation built over the years at{" "}
                  <strong className="font-bold" style={{ color: 'var(--text-base)' }}>IFSUL</strong> (Systems Development Technician),
                  and currently pursuing a <strong className="font-bold" style={{ color: 'var(--text-base)' }}>Computer Science</strong> degree at
                  <strong className="font-bold" style={{ color: 'var(--text-base)' }}> UNISINOS</strong>.
                </>
              ) : (
                <>
                  Sou <strong className="font-bold" style={{ color: 'var(--text-base)' }}>Matheus Bordinhão de Oliveira</strong>,
                  desenvolvedor Full Stack com base sólida em desenvolvimento de
                  software, construída ao longo de anos no{" "}
                  <strong className="font-bold" style={{ color: 'var(--text-base)' }}>IFSUL</strong> (Técnico em
                  Desenvolvimento de Sistemas) e atualmente cursando{" "}
                  <strong className="font-bold" style={{ color: 'var(--text-base)' }}>Ciência da Computação</strong> na
                  <strong className="font-bold" style={{ color: 'var(--text-base)' }}> UNISINOS</strong>.
                </>
              )}
            </p>
            <p>
              {isEnglish ? (
                <>
                  I currently work as an <strong className="font-bold" style={{ color: 'var(--text-base)' }}>IT Intern</strong> at{" "}
                  <strong className="font-bold" style={{ color: 'var(--text-base)' }}>D9ti</strong>, where I contribute to
                  the development, maintenance, and improvement of internal systems,
                  turning business requirements into efficient technical solutions.
                </>
              ) : (
                <>
                  Atuo como <strong className="font-bold" style={{ color: 'var(--text-base)' }}>Estagiário de TI</strong> na{" "}
                  <strong className="font-bold" style={{ color: 'var(--text-base)' }}>D9ti</strong>, onde participo do
                  desenvolvimento, manutenção e melhoria de sistemas internos,
                  traduzindo requisitos de negócio em soluções técnicas eficientes.
                </>
              )}
            </p>
            <p>
              {isEnglish ? (
                <>
                  I have hands-on experience with{" "}
                  <strong className="text-blue-400">React, TypeScript, JavaScript, C#/.NET, PHP, Python, Java, and SQL</strong>,
                  plus integration with AI APIs. I am passionate about building
                  accessible interfaces and robust backends that deliver real value
                  to end users.
                </>
              ) : (
                <>
                  Tenho experiência prática com{" "}
                  <strong className="text-blue-400">React, TypeScript, JavaScript, C#/.NET, PHP, Python, Java e SQL</strong>,
                  além de integração com APIs de inteligência artificial. Sou
                  apaixonado por criar interfaces acessíveis e back-ends robustos que
                  entregam valor real ao usuário final.
                </>
              )}
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
                transition={{
                  duration: 0.5,
                  delay: 0.3 + i * 0.1,
                  y: { duration: 0.12, ease: "easeOut" },
                }}
                className="p-5 rounded-xl t-card hover:border-blue-500/30 transition-colors duration-150"
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { y: -6 }
                }
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600/15 border border-blue-500/20 flex items-center justify-center mb-3">
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
