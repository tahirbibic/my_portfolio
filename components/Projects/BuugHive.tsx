"use client";
import { useLang } from "@/lib/i18n";

const t = {
  en: {
    status: "development",
    description:
      "A SaaS-style bug tracking platform built as a portfolio project. Designed to manage and triage bugs across projects with a clean, developer-focused interface. Built with Next.js, FastAPI, and MongoDB.",
    github: "GitHub",
    notDeployed: "// not deployed",
    badge: "Portfolio Project",
  },
  sr: {
    status: "development",
    description:
      "SaaS-style platforma za praćenje grešaka napravljena kao portfolio projekat. Dizajnirana za upravljanje i trijažu bugova kroz projekte s čistim, developer-focused interfejsom. Napravljena uz Next.js, FastAPI i MongoDB.",
    github: "GitHub",
    notDeployed: "// nije objavljeno",
    badge: "Portfolio Projekat",
  },
};

const stack = ["Next.js", "FastAPI", "MongoDB", "TypeScript", "Python"];
const color = "#f4b942";

export default function BuugHive() {
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
          buughive.tsx
        </span>
        <div className="flex-1 h-px" style={{ background: "var(--vsc-border)" }} />
      </div>

      <div className="max-w-2xl">
        <div
          className="rounded-md overflow-hidden flex flex-col fade-up fade-up-2"
          style={{
            background: "var(--vsc-bg)",
            border: "1px solid var(--vsc-border)",
            transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s, ",
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
              <span>🐛</span>
              <span style={{ color, fontFamily: "'Fira Code', monospace", fontSize: "13px" }}>buugHive</span>
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
              <h2 className="text-2xl font-semibold" style={{ color: "#fff" }}>BuugHive</h2>
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
              <a
                href="https://github.com/tahirbibic/buughive"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs px-3 py-2 rounded transition-all"
                style={{
                  color: "var(--vsc-text)",
                  border: "1px solid var(--vsc-border)",
                  background: "transparent",
                  fontFamily: "'Fira Code', monospace",
                  textDecoration: "none",
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = color;
                  (e.currentTarget as HTMLElement).style.color = color;
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--vsc-border)";
                  (e.currentTarget as HTMLElement).style.color = "var(--vsc-text)";
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                {tx.github}
              </a>
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