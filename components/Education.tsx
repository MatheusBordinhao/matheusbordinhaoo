"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, CalendarDays } from "lucide-react";

const education = [
  {
    institution: "UNISINOS",
    degree: "Bacharelado em Ciência da Computação",
    period: "Fev/2026 — Dez/2029",
    location: "São Leopoldo, RS",
    status: "Em andamento",
    statusColor: "emerald",
    highlights: [
      "Foco em desenvolvimento de software e resolução de problemas complexos.",
      "Contato com pesquisa acadêmica e projetos práticos do mercado.",
      "Aplicação de tecnologias em situações reais e multidisciplinares.",
    ],
  },
  {
    institution: "IFSUL — Campus Sapucaia do Sul",
    degree: "Técnico em Desenvolvimento de Sistemas (Ensino Médio Integrado)",
    period: "Jun/2022 — Dez/2025",
    location: "Sapucaia do Sul, RS",
    status: "Concluído",
    statusColor: "violet",
    highlights: [
      "Desenvolvimento de aplicações web com Java, SQL, PHP, JavaScript, CSS e HTML.",
      "Construção do plugin AGUIA como Trabalho de Conclusão de Curso (TCC).",
      "Formação técnica sólida integrada ao ensino médio.",
    ],
  },
];

const certifications = [
  {
    name: "Programa Geração Caldeira",
    issuer: "Instituto Caldeira & Alura",
    desc: "Formação intensiva em tecnologia: JavaScript, HTML/CSS, Java, Python, Lógica de Programação, Data Science, IA Generativa, Git/GitHub e competências profissionais.",
    icon: "🏭",
  },
  {
    name: "Curso de Inglês — UPTIME",
    issuer: "UPTIME",
    desc: "Aprimoramento da comunicação oral e escrita em inglês para contextos técnicos e profissionais.",
    icon: "🌐",
  },
];

const colorMap: Record<string, string> = {
  emerald: "bg-emerald-600/15 text-emerald-400 border-emerald-500/20",
  violet: "bg-blue-600/15 text-blue-300 border-blue-500/20",
};

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" ref={ref} className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">
            Formação
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2" style={{ color: 'var(--text-base)' }}>
            Educação & Certificações
          </h2>
          <div className="mt-3 w-12 h-0.5 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* Education cards */}
        <div className="flex flex-col gap-5 mb-12">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group p-6 sm:p-8 rounded-2xl t-card hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg leading-tight" style={{ color: 'var(--text-base)' }}>{edu.degree}</h3>
                    <p className="text-blue-300 font-semibold text-sm mt-0.5">{edu.institution}</p>
                    <p className="text-sm" style={{ color: 'var(--text-faint)' }}>{edu.location}</p>
                  </div>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
                  <span
                    className={`px-2.5 py-1 text-xs font-semibold border rounded-full ${colorMap[edu.statusColor]}`}
                  >
                    {edu.status}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-faint)' }}>
                    <CalendarDays className="w-3 h-3" />
                    {edu.period}
                  </div>
                </div>
              </div>
              <ul className="space-y-2">
                {edu.highlights.map((item, hi) => (
                  <li key={hi} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500/60 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl font-bold mb-5 flex items-center gap-2" style={{ color: 'var(--text-base)' }}>
            <Award className="w-5 h-5 text-blue-400" />
            Cursos & Certificações
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="p-5 rounded-xl t-card hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{cert.icon}</span>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: 'var(--text-base)' }}>{cert.name}</p>
                    <p className="text-blue-400 text-xs">{cert.issuer}</p>
                  </div>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
