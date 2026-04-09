"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";

const t = {
  en: {
    comment1: "// Started early. Building seriously.",
    comment2: "// Backend-first. Always learning.",
    cta1: "view_my_work()",
    cta2: "contact_me()",
    role: '"Full Stack Developer"',
    focus: '"Backend"',
    scroll: "scroll",
  },
  sr: {
    comment1: "// Počeo rano. Gradim ozbiljno.",
    comment2: "// Backend-prvo. Uvijek učim.",
    cta1: "pogledaj_radove()",
    cta2: "kontaktiraj_me()",
    role: '"Full Stack Programer"',
    focus: '"Backend"',
    scroll: "skroluaj",
  },
};

export default function Hero() {
  const { lang } = useLang();
  const tx = t[lang];

  const lines = [
    { tokens: [{ t: "const ", c: "tok-keyword" }, { t: "developer", c: "tok-var" }, { t: " = {", c: "tok-punc" }] },
    { tokens: [{ t: "  name", c: "tok-prop" }, { t: ": ", c: "tok-punc" }, { t: '"Tahir Bibić"', c: "tok-string" }, { t: ",", c: "tok-punc" }] },
    { tokens: [{ t: "  age", c: "tok-prop" }, { t: ": ", c: "tok-punc" }, { t: "15", c: "tok-number" }, { t: ",", c: "tok-punc" }] },
    { tokens: [{ t: "  role", c: "tok-prop" }, { t: ": ", c: "tok-punc" }, { t: tx.role, c: "tok-string" }, { t: ",", c: "tok-punc" }] },
    { tokens: [{ t: "  focus", c: "tok-prop" }, { t: ": ", c: "tok-punc" }, { t: tx.focus, c: "tok-string" }, { t: ",", c: "tok-punc" }] },
    { tokens: [{ t: "  location", c: "tok-prop" }, { t: ": ", c: "tok-punc" }, { t: '"Novi Pazar, RS"', c: "tok-string" }, { t: ",", c: "tok-punc" }] },
    { tokens: [{ t: "  available", c: "tok-prop" }, { t: ": ", c: "tok-punc" }, { t: "true", c: "tok-keyword" }, { t: ",", c: "tok-punc" }] },
    { tokens: [{ t: "};", c: "tok-punc" }] },
  ];

  const [visibleLines, setVisibleLines] = useState(0);
  const [showCursor, setShowCursor]     = useState(true);

  useEffect(() => {
    setVisibleLines(0);
    let current = 0;
    const interval = setInterval(() => {
      current++;
      setVisibleLines(current);
      if (current >= lines.length) clearInterval(interval);
    }, 180);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  useEffect(() => {
    const t = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(t);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="min-h-screen flex flex-col justify-center px-6 md:px-16 py-20 relative overflow-hidden"
      style={{ background: "var(--vsc-bg)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(86,156,214,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(86,156,214,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: "400px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,122,204,0.08) 0%, transparent 70%)",
          top: "10%", right: "10%",
        }}
      />

      <div className="relative z-10 max-w-4xl">
        <div className="flex items-center gap-1 mb-8 text-xs" style={{ color: "var(--vsc-text-dim)" }}>
          <span>tahir-portfolio</span><span>/</span><span>src</span><span>/</span>
          <span style={{ color: "var(--vsc-green)" }}>hero.tsx</span>
        </div>

        <div
          className="rounded-md overflow-hidden mb-10 shadow-2xl"
          style={{
            background: "#1a1a1a", border: "1px solid var(--vsc-border)",
            fontFamily: "'Fira Code', monospace", fontSize: "clamp(13px, 2vw, 16px)",
          }}
        >
          <div
            className="flex items-center gap-2 px-4 py-2"
            style={{ background: "#252526", borderBottom: "1px solid var(--vsc-border)" }}
          >
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#f44747" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#dcdcaa" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#4ec9b0" }} />
            <span className="ml-2 text-xs" style={{ color: "var(--vsc-text-dim)" }}>developer.ts</span>
          </div>

          <div className="p-4 md:p-6">
            {lines.map((line, i) => (
              <div
                key={i}
                className="flex items-start leading-relaxed"
                style={{ opacity: i < visibleLines ? 1 : 0, transition: "opacity 0.2s ease" }}
              >
                <span
                  className="select-none mr-6 text-right shrink-0"
                  style={{ width: "1.5rem", color: "var(--vsc-text-dim)", fontSize: "0.85em" }}
                >
                  {i + 1}
                </span>
                <span>
                  {line.tokens.map((tok, j) => (
                    <span key={j} className={tok.c}>{tok.t}</span>
                  ))}
                  {i === visibleLines - 1 && visibleLines < lines.length && (
                    <span
                      style={{
                        display: "inline-block", width: "2px", height: "1.1em",
                        background: "var(--vsc-accent)", verticalAlign: "text-bottom",
                        opacity: showCursor ? 1 : 0, transition: "opacity 0.1s", marginLeft: "1px",
                      }}
                    />
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p
          className="mb-8 text-sm md:text-base leading-relaxed max-w-xl"
          style={{ color: "var(--vsc-comment)", fontStyle: "italic" }}
        >
          {tx.comment1}<br />{tx.comment2}
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => scrollTo("projects")}
            className="px-6 py-3 rounded font-medium transition-all text-sm"
            style={{
              background: "var(--vsc-accent)", color: "#fff",
              border: "1px solid var(--vsc-accent)", fontFamily: "'Fira Code', monospace",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#1f8ad2")}
            onMouseOut={(e)  => (e.currentTarget.style.background = "var(--vsc-accent)")}
          >
            {tx.cta1}
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="px-6 py-3 rounded font-medium transition-all text-sm"
            style={{
              background: "transparent", color: "var(--vsc-green)",
              border: "1px solid var(--vsc-green)", fontFamily: "'Fira Code', monospace",
            }}
            onMouseOver={(e) => { e.currentTarget.style.background = "rgba(78,201,176,0.1)"; }}
            onMouseOut={(e)  => { e.currentTarget.style.background = "transparent"; }}
          >
            {tx.cta2}
          </button>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40"
        style={{ fontSize: "10px", color: "var(--vsc-text-dim)" }}
      >
        <span>{tx.scroll}</span>
        <div className="w-px h-8" style={{ background: "var(--vsc-border)" }} />
      </div>
    </section>
  );
}