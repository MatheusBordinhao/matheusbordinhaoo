"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Linkedin, Mail, Download, Send, MapPin } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "matheusbordinhao11@gmail.com",
    href: "mailto:matheusbordinhao11@gmail.com",
    desc: "Respondo em até 24h",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Matheus Bordinhão",
    href: "https://www.linkedin.com/in/matheus-bordinh%C3%A3o-004a75285",
    desc: "Conecte-se comigo",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "MatheusBordinhao",
    href: "https://github.com/MatheusBordinhao",
    desc: "Veja meus projetos",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // mailto fallback
    const subject = encodeURIComponent(`Contato via portfólio — ${formState.name}`);
    const body = encodeURIComponent(
      `Nome: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    );
    window.location.href = `mailto:matheusbordinhao11@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
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
            Vamos conversar
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2" style={{ color: 'var(--text-base)' }}>
            Entre em Contato
          </h2>
          <div className="mt-3 w-12 h-0.5 bg-blue-500 mx-auto rounded-full" />
          <p className="mt-4 max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Estou disponível para novas oportunidades, projetos freelance ou
            apenas uma boa conversa sobre tecnologia.
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
              <span>Sapucaia do Sul, RS — Brasil · +55 (51) 99260-0275</span>
            </div>

            {contactLinks.map(({ icon: Icon, label, value, href, desc }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="group flex items-center gap-4 p-4 rounded-xl t-card hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600/15 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-600/25 transition-all duration-300 shrink-0">
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
              transition={{ duration: 0.5, delay: 0.5 }}
              className="group flex items-center justify-center gap-3 w-full p-4 rounded-xl bg-blue-600/10 border border-blue-500/30 hover:bg-blue-600/20 hover:border-blue-500/50 text-blue-300 font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            >
              <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              Baixar Currículo (PDF)
            </motion.a>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl t-card space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-sm mb-2" style={{ color: 'var(--text-muted)' }}>
                  Nome
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                  placeholder="Seu nome completo"
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
                  placeholder="seu@email.com"
                  className="t-input w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:border-blue-500/50 focus:bg-blue-600/5 transition-all duration-200"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm mb-2" style={{ color: 'var(--text-muted)' }}>
                  Mensagem
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                  placeholder="Olá Matheus, gostaria de conversar sobre..."
                  className="t-input w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:border-blue-500/50 focus:bg-blue-600/5 transition-all duration-200 resize-none"
                />
              </div>
              <button
                type="submit"
                className="group w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                {sent ? "Redirecionando para email..." : "Enviar Mensagem"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
