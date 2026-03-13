"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Github, Linkedin, Mail, Download, Send, MapPin } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();
  const { language } = useLanguage();
  const isEnglish = language === "en";
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "matheusbordinhao11@gmail.com",
      href: "mailto:matheusbordinhao11@gmail.com",
      desc: isEnglish ? "I reply within 24h" : "Respondo em até 24h",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Matheus Bordinhão",
      href: "https://www.linkedin.com/in/matheus-bordinh%C3%A3o-004a75285",
      desc: isEnglish ? "Connect with me" : "Conecte-se comigo",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "MatheusBordinhao",
      href: "https://github.com/MatheusBordinhao",
      desc: isEnglish ? "Check my projects" : "Veja meus projetos",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const text = encodeURIComponent(
      isEnglish
        ? `Hi Matheus! I found you through your portfolio.\n\nName: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
        : `Olá Matheus! Vim pelo seu portfólio.\n\nNome: ${formState.name}\nEmail: ${formState.email}\n\nMensagem:\n${formState.message}`
    );
    const whatsappUrl = `https://wa.me/5551992600275?text=${text}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSending(false);
  };

  return (
    <section id="contact" ref={ref} className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">
            {isEnglish ? "Let's talk" : "Vamos conversar"}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2" style={{ color: 'var(--text-base)' }}>
            {isEnglish ? "Get in Touch" : "Entre em Contato"}
          </h2>
          <div className="mt-3 w-12 h-0.5 bg-blue-500 mx-auto rounded-full" />
          <p className="mt-4 max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            {isEnglish
              ? "I am available for new opportunities, freelance projects, or just a great conversation about technology."
              : "Estou disponível para novas oportunidades, projetos freelance ou apenas uma boa conversa sobre tecnologia."}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-5"
          >
            <div className="flex items-center gap-2 text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
              <MapPin className="w-4 h-4 text-blue-400" />
              <span>Sapucaia do Sul, RS — {isEnglish ? "Brazil" : "Brasil"} · +55 (51) 99260-0275</span>
            </div>

            {contactLinks.map(({ icon: Icon, label, value, href, desc }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + i * 0.1,
                  y: { duration: 0.12, ease: "easeOut" },
                }}
                className="flex items-center gap-4 p-4 rounded-xl t-card hover:border-blue-500/30 transition-colors duration-150"
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { y: -6 }
                }
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600/15 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs mb-0.5" style={{ color: 'var(--text-faint)' }}>{label}</p>
                  <p className="font-medium text-sm truncate" style={{ color: 'var(--text-base)' }}>{value}</p>
                  <p className="text-xs" style={{ color: 'var(--text-faint)' }}>{desc}</p>
                </div>
              </motion.a>
            ))}

            {/* Download CV */}
            <motion.a
              href="/cv.pdf"
              download="Currículo-MatheusBordinhão"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.5,
                y: { duration: 0.12, ease: "easeOut" },
              }}
              className="group flex items-center justify-center gap-3 w-full p-4 rounded-xl bg-blue-600/10 border border-blue-500/30 hover:border-blue-500/50 text-blue-300 font-semibold transition-colors duration-150"
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { y: -6 }
              }
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            >
              <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-150" />
              {isEnglish ? "Download Resume (PDF)" : "Baixar Currículo (PDF)"}
            </motion.a>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.15,
              y: { duration: 0.12, ease: "easeOut" },
            }}
            whileHover={
              shouldReduceMotion
                ? undefined
                : { y: -6 }
            }
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl t-card space-y-5 hover:border-blue-500/30 transition-colors duration-150"
            >
              <div>
                <label htmlFor="name" className="block text-sm mb-2" style={{ color: 'var(--text-muted)' }}>
                  {isEnglish ? "Name" : "Nome"}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                  placeholder={isEnglish ? "Your full name" : "Seu nome completo"}
                  className="t-input w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:border-blue-500/50 focus:bg-blue-600/5 transition-all duration-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm mb-2" style={{ color: 'var(--text-muted)' }}>
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                  placeholder={isEnglish ? "your@email.com" : "seu@email.com"}
                  className="t-input w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:border-blue-500/50 focus:bg-blue-600/5 transition-all duration-200"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm mb-2" style={{ color: 'var(--text-muted)' }}>
                  {isEnglish ? "Message" : "Mensagem"}
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                  placeholder={
                    isEnglish
                      ? "Hi Matheus, I would like to talk about..."
                      : "Olá Matheus, gostaria de conversar sobre..."
                  }
                  className="t-input w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:border-blue-500/50 focus:bg-blue-600/5 transition-all duration-200 resize-none"
                />
              </div>
              <motion.button
                type="submit"
                className="group w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-150 hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2"
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { y: -2, transition: { duration: 0.12, ease: "easeOut" } }
                }
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              >
                <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
                {sending
                  ? isEnglish
                    ? "Opening WhatsApp..."
                    : "Abrindo WhatsApp..."
                  : isEnglish
                    ? "Send via WhatsApp"
                    : "Enviar via WhatsApp"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
