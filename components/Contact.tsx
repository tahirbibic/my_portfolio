"use client";
import { useState } from "react";
import { useLang, Lang } from "@/lib/i18n";

const translations: Record<Lang, {
  heading: string;
  fn: string;
  sub: string;
  copy: string;
  copied: string;
  footer: string;
  terminalCmd: string;
  terminalInit: string;
  terminalReady: string;
  terminalLoaded: string;
}> = {
  en: {
    heading: "Let's",
    fn: "connect()",
    sub: "I'm always open to new projects, collaborations, or just talking tech. Feel free to reach out through any of the channels below.",
    copy: "copy",
    copied: "✓ copied!",
    footer: "// Built by Tahir Bibić · 2025 · VSCode theme because obviously",
    terminalCmd: "node contact.js",
    terminalInit: "// Initializing contact module...",
    terminalReady: "✓ Ready to connect",
    terminalLoaded: "Contact info loaded:",
  },
  sr: {
    heading: "Hajde da se",
    fn: "povežemo()",
    sub: "Uvijek sam otvoren za nove projekte, saradnje ili samo razgovor o tehnologiji. Slobodno me kontaktiraj putem bilo kojeg od kanala ispod.",
    copy: "kopiraj",
    copied: "✓ kopirano!",
    footer: "// Napravio Tahir Bibić · 2025 · VSCode tema jer naravno",
    terminalCmd: "node kontakt.js",
    terminalInit: "// Inicijalizacija modula za kontakt...",
    terminalReady: "✓ Spreman za konekciju",
    terminalLoaded: "Kontakt informacije učitane:",
  },
};

const contactLinks = [
  {
    key: "email", label: "email", value: "bibictahir@gmail.com",
    href: "mailto:bibictahir@gmail.com", color: "#ce9178",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M2 7l10 7 10-7"/>
      </svg>
    ),
  },
  {
    key: "github", label: "github", value: "tahirbibic",
    href: "https://github.com/tahirbibic", color: "#d4d4d4",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    key: "linkedin", label: "linkedin", value: "tahir-bibić",
    href: "https://www.linkedin.com/in/tahir-bibi%C4%87-3584063b4/", color: "#569cd6",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    key: "location", label: "location", value: "Novi Pazar, Serbia",
    href: null, color: "#4ec9b0",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
    ),
  },
];

export default function Contact() {
  const { lang } = useLang();
  const tx = translations[lang];
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("bibictahir@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      className="min-h-screen px-6 md:px-16 py-20"
      style={{ background: "var(--vsc-bg)", borderTop: "1px solid var(--vsc-border)" }}
    >
      <div className="flex items-center gap-3 mb-10">
        <div className="w-1 h-6 rounded" style={{ background: "var(--vsc-purple)" }} />
        <span className="text-xs uppercase tracking-widest" style={{ color: "var(--vsc-purple)" }}>
          contact.tsx
        </span>
        <div className="flex-1 h-px" style={{ background: "var(--vsc-border)" }} />
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-2xl font-semibold mb-2" style={{ color: "#fff" }}>
            {tx.heading}{" "}
            <span style={{ color: "var(--vsc-purple)" }}>{tx.fn}</span>
          </h2>
          <p className="text-sm mb-8" style={{ color: "var(--vsc-text-dim)", lineHeight: "1.7" }}>
            {tx.sub}
          </p>

          <div className="flex flex-col gap-3">
            {contactLinks.map((link) => {
              const inner = (
                <div
                  className="flex items-center gap-3 rounded-md px-4 py-3 transition-all"
                  style={{ background: "#1a1a1a", border: "1px solid var(--vsc-border)", cursor: link.href ? "pointer" : "default" }}
                  onMouseOver={(e) => { if (link.href) (e.currentTarget as HTMLElement).style.borderColor = link.color; }}
                  onMouseOut={(e)  => { (e.currentTarget as HTMLElement).style.borderColor = "var(--vsc-border)"; }}
                >
                  <span style={{ color: link.color }}>{link.icon}</span>
                  <div className="flex-1">
                    <div className="text-xs" style={{ color: "var(--vsc-text-dim)", fontFamily: "'Fira Code', monospace" }}>{link.label}:</div>
                    <div className="text-sm" style={{ color: link.color, fontFamily: "'Fira Code', monospace" }}>{link.value}</div>
                  </div>
                  {link.href && <span style={{ color: "var(--vsc-text-dim)", fontSize: "12px" }}>↗</span>}
                </div>
              );
              return link.href ? (
                <a key={link.key} href={link.href} target={link.href.startsWith("mailto") ? "_self" : "_blank"} rel="noreferrer" style={{ textDecoration: "none" }}>
                  {inner}
                </a>
              ) : (
                <div key={link.key}>{inner}</div>
              );
            })}
          </div>
        </div>

        <div className="rounded-md overflow-hidden" style={{ border: "1px solid var(--vsc-border)", background: "#0d0d0d" }}>
          <div className="flex items-center gap-2 px-4 py-2" style={{ background: "#252526", borderBottom: "1px solid var(--vsc-border)" }}>
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#f44747" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#dcdcaa" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#4ec9b0" }} />
            <span className="ml-2 text-xs" style={{ color: "var(--vsc-text-dim)" }}>TERMINAL</span>
          </div>

          <div className="p-5" style={{ fontFamily: "'Fira Code', monospace", fontSize: "13px", lineHeight: "1.8" }}>
            <div>
              <span style={{ color: "#569cd6" }}>tahir</span>
              <span style={{ color: "#d4d4d4" }}>@</span>
              <span style={{ color: "#ce9178" }}>portfolio</span>
              <span style={{ color: "#d4d4d4" }}>:~$ {tx.terminalCmd}</span>
            </div>
            <div style={{ color: "var(--vsc-comment)", marginTop: "4px" }}>{tx.terminalInit}</div>
            <div style={{ color: "#4ec9b0", marginTop: "4px" }}>{tx.terminalReady}</div>
            <div style={{ color: "var(--vsc-text-dim)", marginTop: "8px" }}>{tx.terminalLoaded}</div>
            <div style={{ color: "var(--vsc-cyan)", marginTop: "4px" }}>
              {"{"}<br />
              &nbsp;&nbsp;email: <span style={{ color: "#ce9178" }}>"bibictahir@gmail.com"</span>,<br />
              &nbsp;&nbsp;location: <span style={{ color: "#ce9178" }}>"Novi Pazar, RS"</span>,<br />
              &nbsp;&nbsp;available: <span style={{ color: "#569cd6" }}>true</span><br />
              {"}"}
            </div>
            <div style={{ marginTop: "16px" }}>
              <span style={{ color: "#4ec9b0" }}>tahir</span>
              <span style={{ color: "#d4d4d4" }}>@</span>
              <span style={{ color: "#ce9178" }}>portfolio</span>
              <span style={{ color: "#d4d4d4" }}>:~$ </span>
              <span style={{
                display: "inline-block", width: "8px", height: "14px",
                background: "#d4d4d4", verticalAlign: "text-bottom",
                animation: "blink 1s step-end infinite",
              }} />
            </div>
          </div>

          <div className="px-4 py-3 flex justify-between items-center" style={{ borderTop: "1px solid var(--vsc-border)", background: "#111" }}>
            <span style={{ color: "var(--vsc-text-dim)", fontSize: "11px", fontFamily: "'Fira Code', monospace" }}>
              bibictahir@gmail.com
            </span>
            <button
              onClick={copyEmail}
              className="px-3 py-1 rounded text-xs transition-all"
              style={{
                background: copied ? "#4ec9b0" : "var(--vsc-accent)",
                color: "#fff", border: "none",
                fontFamily: "'Fira Code', monospace", cursor: "pointer",
              }}
            >
              {copied ? tx.copied : tx.copy}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-20 text-center" style={{ color: "var(--vsc-text-dim)", fontSize: "12px", fontFamily: "'Fira Code', monospace" }}>
        <span style={{ color: "var(--vsc-comment)", fontStyle: "italic" }}>{tx.footer}</span>
      </div>
    </section>
  );
}