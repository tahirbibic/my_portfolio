"use client";
import { useLang } from "@/lib/i18n";

const projects = [
  {
    id: "thrive",
    name: "Thrive",
    varName: "thrive",
    descriptionEn:
      "A full-stack wellness app built with the FARM stack. Focuses on daily challenges, rejection therapy, and building self-confidence. Includes user authentication, challenge tracking, and a completion counter system.",
    descriptionSr:
      "Full-stack wellness aplikacija napravljena na FARM stacku. Fokusira se na dnevne izazove, terapiju odbijanjem i izgradnju samopouzdanja. Uključuje autentifikaciju korisnika, praćenje izazova i brojač završenih aktivnosti.",
    stack: ["FastAPI", "React", "MongoDB", "TypeScript", "Python"],
    github: "https://github.com/tahirbibic/Thrive",
    live: null,
    status: "development",
    color: "#4ec9b0",
    icon: "🌱",
  },
  {
    id: "mentorly",
    name: "Mentorly",
    varName: "mentorly",
    descriptionEn:
      "Open-source educational platform for structured digital learning based on curated textbook content. Extracts and organises knowledge from Serbian educational textbooks, makes it accessible online, and delivers it through an interactive learning interface. Co-founded and built as Back-end Developer.",
    descriptionSr:
      "Open-source obrazovna platforma za strukturirano digitalno učenje zasnovano na kuratiranom sadržaju udžbenika. Izvlači i organizuje znanje iz srpskih obrazovnih udžbenika, čini ga dostupnim online i isporučuje kroz interaktivni interfejs za učenje. Suosnivač i Backend Developer.",
    stack: ["Python", "FastAPI", "PostgreSQL", "React", "TypeScript", "Docker"],
    github: null,
    live: null,
    status: "development",
    color: "#c586c0",
    icon: "🎓",
    badge: "Co-Founder & Backend Dev",
    badgeSr: "Suosnivač i Backend Dev",
  },
];

const statusColors: Record<string, string> = {
  development: "#dcdcaa",
  live: "#4ec9b0",
  archived: "#858585",
};

const t = {
  en: {
    file: "projects.tsx",
    comment: "// More projects incoming — this is just the beginning.",
    github: "GitHub",
    notDeployed: "// not deployed",
    live: "Live ↗",
    nextProject: "// next_project.tsx",
  },
  sr: {
    file: "projects.tsx",
    comment: "// Još projekata stiže — ovo je samo početak.",
    github: "GitHub",
    notDeployed: "// nije objavljeno",
    live: "Živo ↗",
    nextProject: "// sljedeći_projekt.tsx",
  },
};

export default function Projects() {
  const { lang } = useLang();
  const tx = t[lang];

  return (
    <section
      className="min-h-screen px-6 md:px-16 py-20"
      style={{ background: "#1a1a1a", borderTop: "1px solid var(--vsc-border)" }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-10">
        <div className="w-1 h-6 rounded" style={{ background: "var(--vsc-orange)" }} />
        <span className="text-xs uppercase tracking-widest" style={{ color: "var(--vsc-orange)" }}>
          {tx.file}
        </span>
        <div className="flex-1 h-px" style={{ background: "var(--vsc-border)" }} />
      </div>

      <div
        className="mb-8 text-sm"
        style={{ color: "var(--vsc-comment)", fontFamily: "'Fira Code', monospace", fontStyle: "italic" }}
      >
        {tx.comment}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {projects.map((proj) => {
          const desc = lang === "en" ? proj.descriptionEn : proj.descriptionSr;
          const badgeText = lang === "en" ? proj.badge : proj.badgeSr;

          return (
            <div
              key={proj.id}
              className="rounded-md overflow-hidden flex flex-col"
              style={{
                background: "var(--vsc-bg)",
                border: "1px solid var(--vsc-border)",
                transition: "border-color 0.2s, transform 0.2s",
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = proj.color;
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--vsc-border)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {/* Card header */}
              <div
                className="px-4 py-3 flex items-center justify-between"
                style={{ borderBottom: "1px solid var(--vsc-border)", background: "#252526" }}
              >
                <div className="flex items-center gap-2">
                  <span>{proj.icon}</span>
                  <span style={{ color: proj.color, fontFamily: "'Fira Code', monospace", fontSize: "13px" }}>
                    {proj.varName}
                  </span>
                  <span style={{ color: "var(--vsc-text-dim)", fontSize: "11px" }}>.tsx</span>
                </div>
                <span
                  className="px-2 py-0.5 rounded text-xs"
                  style={{
                    background: `${statusColors[proj.status]}22`,
                    color: statusColors[proj.status],
                    border: `1px solid ${statusColors[proj.status]}55`,
                    fontFamily: "'Fira Code', monospace",
                  }}
                >
                  {proj.status}
                </span>
              </div>

              {/* Body */}
              <div className="p-4 flex-1 flex flex-col gap-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-base font-semibold" style={{ color: "#fff" }}>
                    {proj.name}
                  </h3>
                  {badgeText && (
                    <span
                      className="px-2 py-0.5 rounded text-xs"
                      style={{
                        background: `${proj.color}22`,
                        color: proj.color,
                        border: `1px solid ${proj.color}55`,
                        fontFamily: "'Fira Code', monospace",
                        fontSize: "10px",
                      }}
                    >
                      {badgeText}
                    </span>
                  )}
                </div>

                <p className="text-sm leading-relaxed" style={{ color: "var(--vsc-text-dim)" }}>
                  {desc}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {proj.stack.map((tech) => (
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

                {/* Links */}
                <div className="flex gap-3 mt-auto pt-2">
                  {proj.github ? (
                    <a
                      href={proj.github}
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
                        (e.currentTarget as HTMLElement).style.borderColor = proj.color;
                        (e.currentTarget as HTMLElement).style.color = proj.color;
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
                  ) : (
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
                  )}

                  {proj.live ? (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-xs px-3 py-2 rounded"
                      style={{
                        color: "#fff",
                        background: "var(--vsc-accent)",
                        fontFamily: "'Fira Code', monospace",
                        textDecoration: "none",
                      }}
                    >
                      {tx.live}
                    </a>
                  ) : (
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
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {/* Placeholder card */}
        <div
          className="rounded-md flex flex-col items-center justify-center p-8 opacity-30"
          style={{ border: "1px dashed var(--vsc-border)", background: "transparent", minHeight: "260px" }}
        >
          <div className="text-3xl mb-3" style={{ fontFamily: "'Fira Code', monospace", color: "var(--vsc-text-dim)" }}>
            +
          </div>
          <div style={{ color: "var(--vsc-text-dim)", fontSize: "12px", fontFamily: "'Fira Code', monospace", fontStyle: "italic" }}>
            {tx.nextProject}
          </div>
        </div>
      </div>
    </section>
  );
}