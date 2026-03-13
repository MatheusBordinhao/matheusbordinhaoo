import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  title: "Matheus Bordinhão | Desenvolvedor Full Stack",
  description:
    "Portfólio profissional de Matheus Bordinhão — Desenvolvedor Full Stack especializado em React, TypeScript, C#/.NET e integração com IA. Disponível para novas oportunidades.",
  keywords: [
    "Desenvolvedor Full Stack",
    "React",
    "TypeScript",
    "C#",
    ".NET",
    "Next.js",
    "Matheus Bordinhão",
    "Portfólio",
  ],
  authors: [{ name: "Matheus Bordinhão de Oliveira" }],
  openGraph: {
    title: "Matheus Bordinhão | Desenvolvedor Full Stack",
    description:
      "Portfólio profissional com projetos reais, experiência e stack técnica completa.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* Anti-flash: apply saved theme before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(t===null&&d))document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
