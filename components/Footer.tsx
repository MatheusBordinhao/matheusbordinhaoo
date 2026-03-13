"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

const socials = [
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
];

export default function Footer() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: isEnglish ? "About" : "Sobre", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: isEnglish ? "Projects" : "Projetos", href: "#projects" },
    { label: isEnglish ? "Experience" : "Experiência", href: "#experience" },
    { label: isEnglish ? "Contact" : "Contato", href: "#contact" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="border-t py-12 px-6"
      style={{ background: 'var(--bg-footer)', borderColor: 'var(--bg-footer)' }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid sm:grid-cols-3 gap-10 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {/* Brand */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <a href="#home" className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-blue-400" />
              </div>
              <span className="font-semibold text-white tracking-tight">
                matheusbordinhão<span className="text-blue-400">.dev</span>
              </span>
            </a>
            <p className="mt-3 text-sm leading-relaxed max-w-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>
              {isEnglish
                ? "Full Stack Developer building modern, accessible, and user-centered solutions."
                : "Desenvolvedor Full Stack construindo soluções modernas, acessíveis e centradas no usuário."}
            </p>
          </motion.div>

          {/* Nav */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <h3 className="text-white font-semibold text-sm mb-4">{isEnglish ? "Navigation" : "Navegação"}</h3>
            <ul className="space-y-2">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <motion.a
                    href={href}
                    className="text-sm transition-colors duration-200" style={{ color: 'rgba(255,255,255,0.4)' }}
                    whileHover={{ x: 4, color: "rgba(147,197,253,1)", transition: { duration: 0.12, ease: "easeOut" } }}
                  >
                    {label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <h3 className="text-white font-semibold text-sm mb-4">{isEnglish ? "Social" : "Redes Sociais"}</h3>
            <div className="flex flex-col gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm group transition-colors duration-200" style={{ color: 'rgba(255,255,255,0.4)' }}
                  whileHover={{ x: 4, color: "rgba(147,197,253,1)", transition: { duration: 0.12, ease: "easeOut" } }}
                >
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <div className="pt-6 border-t flex flex-col sm:flex-row items-center justify-center gap-3 text-center" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>
           © {new Date().getFullYear()} Matheus Bordinhão de Oliveira. {isEnglish ? "All rights reserved." : "Todos os direitos reservados."}
          </p>
        </div>
      </div>
      </motion.footer>
  );
}
