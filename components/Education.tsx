"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { GraduationCap, Award, CalendarDays, Download } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

type Certification = {
  name: string;
  issuer: string;
  desc: string;
  icon: string;
  certificatePdfUrl?: string;
  certificateFileName?: string;
};

const colorMap: Record<string, string> = {
  emerald: "bg-emerald-600/15 text-emerald-400 border-emerald-500/20",
  blue: "bg-blue-600/15 text-blue-400 border-blue-500/20",
};

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();
  const { language } = useLanguage();
  const isEnglish = language === "en";

  const education = [
    {
      institution: "UNISINOS",
      degree: isEnglish ? "BSc in Computer Science" : "Bacharelado em Ciência da Computação",
      period: isEnglish ? "Feb/2026 - Dec/2029" : "Fev/2026 — Dez/2029",
      location: "São Leopoldo, RS",
      status: isEnglish ? "In progress" : "Em andamento",
      statusColor: "blue",
      highlights: isEnglish
        ? [
            "Focused on software development and solving complex problems.",
            "Exposure to academic research and market-oriented practical projects.",
            "Applying technologies in real and multidisciplinary scenarios.",
          ]
        : [
            "Foco em desenvolvimento de software e resolução de problemas complexos.",
            "Contato com pesquisa acadêmica e projetos práticos do mercado.",
            "Aplicação de tecnologias em situações reais e multidisciplinares.",
          ],
    },
    {
      institution: "IFSUL — Campus Sapucaia do Sul",
      degree: isEnglish ? "Systems Development Technician" : "Técnico em Desenvolvimento de Sistemas",
      period: isEnglish ? "Jun/2022 - Dec/2025" : "Jun/2022 — Dez/2025",
      location: "Sapucaia do Sul, RS",
      status: isEnglish ? "Completed" : "Concluído",
      statusColor: "emerald",
      highlights: isEnglish
        ? [
            "Web application development with Java, SQL, PHP, JavaScript, CSS, and HTML.",
            "Built the AGUIA plugin as the final capstone project.",
            "Strong technical education integrated with high school curriculum.",
          ]
        : [
            "Desenvolvimento de aplicações web com Java, SQL, PHP, JavaScript, CSS e HTML.",
            "Construção do plugin AGUIA como Trabalho de Conclusão de Curso (TCC).",
            "Formação técnica sólida integrada ao ensino médio.",
          ],
    },
  ];

  const certifications: Certification[] = [
    {
      name: isEnglish ? "Geração Caldeira Program" : "Programa Geração Caldeira",
      issuer: "Instituto Caldeira & Alura",
      desc: isEnglish
        ? "Intensive technology training covering JavaScript, HTML/CSS, Java, Python, Programming Logic, Data Science, Generative AI, Git/GitHub, and professional skills."
        : "Formação intensiva em tecnologia: JavaScript, HTML/CSS, Java, Python, Lógica de Programação, Data Science, IA Generativa, Git/GitHub e competências profissionais.",
      icon: "🏭",
      certificatePdfUrl: "/CertificadoAluraCompleto.pdf",
      certificateFileName: "certificado-geracao-caldeira",
    },
    {
      name: isEnglish ? "English Course — UPTIME" : "Curso de Inglês — UPTIME",
      issuer: "UPTIME",
      desc: isEnglish
        ? "Improvement of spoken and written English for technical and professional contexts."
        : "Aprimoramento da comunicação oral e escrita em inglês para contextos técnicos e profissionais.",
      icon: "🌐",
    },
  ];

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
            {isEnglish ? "Education" : "Formação"}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2" style={{ color: 'var(--text-base)' }}>
            {isEnglish ? "Education & Certifications" : "Educação & Certificações"}
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
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                y: { duration: 0.12, ease: "easeOut" },
              }}
              className="group p-6 sm:p-8 rounded-2xl t-card hover:border-blue-500/30 transition-colors duration-150"
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { y: -6 }
              }
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
                  <motion.li
                    key={hi}
                    className="flex items-start gap-3 text-sm leading-relaxed"
                    style={{ color: 'var(--text-muted)' }}
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : { x: 3, transition: { duration: 0.12, ease: "easeOut" } }
                    }
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500/60 shrink-0" />
                    {item}
                  </motion.li>
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
            {isEnglish ? "Courses & Certifications" : "Cursos & Certificações"}
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + i * 0.1,
                  y: { duration: 0.12, ease: "easeOut" },
                }}
                className="relative p-5 rounded-xl t-card hover:border-blue-500/30 transition-colors duration-150"
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { y: -6 }
                }
              >
                {cert.certificatePdfUrl && (
                  <motion.a
                    href={cert.certificatePdfUrl}
                    download={`${cert.certificateFileName || cert.name}.pdf`}
                    className="absolute top-3 right-3 inline-flex items-center justify-center w-8 h-8 rounded-md border border-blue-500/25 bg-blue-600/10 text-blue-400 hover:bg-blue-600/20 transition-colors"
                    aria-label={isEnglish ? `Download ${cert.name} certificate` : `Baixar certificado de ${cert.name}`}
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : { scale: 1.08, transition: { duration: 0.12, ease: "easeOut" } }
                    }
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                  >
                    <Download className="w-3.5 h-3.5" />
                  </motion.a>
                )}
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
