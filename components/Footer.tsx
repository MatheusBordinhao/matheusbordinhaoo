"use client";

import { Github, Linkedin, Mail, Code2 } from "lucide-react";

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

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projetos", href: "#projects" },
  { label: "Experiência", href: "#experience" },
  { label: "Contato", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t py-12 px-6" style={{ background: 'var(--bg-footer)', borderColor: 'var(--bg-footer)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-blue-400" />
              </div>
              <span className="font-semibold text-white tracking-tight">
                matheusbordinhão<span className="text-blue-400">.dev</span>
              </span>
            </a>
            <p className="mt-3 text-sm leading-relaxed max-w-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Desenvolvedor Full Stack construindo soluções modernas, acessíveis e
              centradas no usuário.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Navegação</h3>
            <ul className="space-y-2">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm transition-colors duration-200" style={{ color: 'rgba(255,255,255,0.4)' }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Redes Sociais</h3>
            <div className="flex flex-col gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm group transition-colors duration-200" style={{ color: 'rgba(255,255,255,0.4)' }}
                >
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>
            © {new Date().getFullYear()} Matheus Bordinhão de Oliveira. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
