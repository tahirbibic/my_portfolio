"use client";
import { useLang } from "@/lib/i18n";

const t = {
  en: {
    status: "development",
    description:
      "Open-source educational platform for structured digital learning based on curated textbook content. Extracts and organises knowledge from Serbian educational textbooks, makes it accessible online, and delivers it through an interactive learning interface. Co-founded and built as Back-end Developer.",
    github: "GitHub",
    notDeployed: "// not deployed",
    badge: "Co-Founder & Backend Dev",
  },
  sr: {
    status: "development",
    description:
      "Open-source obrazovna platforma za strukturirano digitalno učenje zasnovano na kuratiranom sadržaju udžbenika. Izvlači i organizuje znanje iz srpskih obrazovnih udžbenika, čini ga dostupnim online i isporučuje kroz interaktivni interfejs za učenje. Suosnivač i Backend Developer.",
    github: "GitHub",
    notDeployed: "// nije objavljeno",
    badge: "Suosnivač i Backend Dev",
  },
};

const stack = ["Python", "FastAPI", "PostgreSQL", "React", "TypeScript", "Docker"];
const color = "#c586c0";

export default function Mentorly() {
  const { lang } = useLang();
  const tx = t[lang];

  return (
    <section
      className="min-h-screen px-6 md:px-16 py-20"
      style={{ background: "#1a1a1a", borderTop: "1px solid var(--vsc-border)" }}
    >
      <div className="flex items-center gap-3 mb-10 fade-up fade-up-1">
        <div className="w-1 h-6 rounded" style={{ background: color }} />
        <span className="text-xs uppercase tracking-widest" style={{ color }}>
          mentorly.tsx
        </span>
        <div className="flex-1 h-px" style={{ background: "var(--vsc-border)" }} />
      </div>

      <div className="max-w-2xl">
        <div
          className="rounded-md overflow-hidden flex flex-col fade-up fade-up-2"
          style={{
            background: "var(--vsc-bg)",
            border: "1px solid var(--vsc-border)",
            transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
          }}
          onMouseOver={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = color;
            el.style.transform = "translateY(-2px)";
            el.style.boxShadow = `0 0 32px 4px ${color}33`;
          }}
          onMouseOut={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = "var(--vsc-border)";
            el.style.transform = "translateY(0)";
            el.style.boxShadow = "none";
          }}
        >
          <div
            className="px-4 py-3 flex items-center justify-between"
            style={{ borderBottom: "1px solid var(--vsc-border)", background: "#252526" }}
          >
            <div className="flex items-center gap-2">
              <span>🎓</span>
              <span style={{ color, fontFamily: "'Fira Code', monospace", fontSize: "13px" }}>mentorly</span>
              <span style={{ color: "var(--vsc-text-dim)", fontSize: "11px" }}>.tsx</span>
            </div>
            <span
              className="px-2 py-0.5 rounded text-xs"
              style={{
                background: "#dcdcaa22",
                color: "#dcdcaa",
                border: "1px solid #dcdcaa55",
                fontFamily: "'Fira Code', monospace",
              }}
            >
              {tx.status}
            </span>
          </div>

          <div className="p-6 flex flex-col gap-5">
            <div className="flex items-center gap-3 flex-wrap">
              <h2 className="text-2xl font-semibold" style={{ color: "#fff" }}>Mentorly</h2>
              <span
                className="px-2 py-0.5 rounded text-xs"
                style={{
                  background: `${color}22`,
                  color,
                  border: `1px solid ${color}55`,
                  fontFamily: "'Fira Code', monospace",
                  fontSize: "10px",
                }}
              >
                {tx.badge}
              </span>
            </div>

            <p className="text-sm leading-relaxed" style={{ color: "var(--vsc-text-dim)" }}>
              {tx.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded text-xs"
                  style={{
                    background: "#2a2a2a",
                    color: "var(--vsc-cyan)",
                    border: "1px solid #3a3a3a",
                    fontFamily: "'Fira Code', monospace",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3 pt-2">
              <span
                className="flex items-center gap-1 text-xs px-3 py-2 rounded"
                style={{
                  color: "var(--vsc-text-dim)",
                  border: "1px solid #333",
                  fontFamily: "'Fira Code', monospace",
                }}
              >
                // private repo
              </span>
              <span
                className="flex items-center gap-1 text-xs px-3 py-2 rounded"
                style={{
                  color: "var(--vsc-text-dim)",
                  border: "1px solid #333",
                  fontFamily: "'Fira Code', monospace",
                }}
              >
                {tx.notDeployed}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}