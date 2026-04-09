"use client";
import { useLang, Lang } from "@/lib/i18n";

const skillGroups = [
  {
    key: "backend",
    labelEn: "Backend",
    labelSr: "Backend",
    color: "#4ec9b0",
    items: [
      { name: "Python",   level: 80,  learning: false },
      { name: "FastAPI",  level: 80,  learning: false },
      { name: "MongoDB",  level: 75,  learning: false },
      { name: "MySQL",    level: 5,   learning: true  },
      { name: "C",        level: 15,  learning: true  },
    ],
  },
  {
    key: "frontend",
    labelEn: "Frontend",
    labelSr: "Frontend",
    color: "#569cd6",
    items: [
      { name: "HTML / CSS",  level: 70,  learning: false },
      { name: "JavaScript",  level: 75,  learning: false },
      { name: "React",       level: 70,  learning: false },
      { name: "Next.js",     level: 20,  learning: true  },
      { name: "WordPress",   level: 65,  learning: false },
    ],
  },
  {
    key: "other",
    labelEn: "Tools & Other",
    labelSr: "Alati i ostalo",
    color: "#dcdcaa",
    items: [
      { name: "Discord Bots", level: 75, learning: false },
      { name: "Git / GitHub", level: 80, learning: false },
      { name: "REST APIs",    level: 75, learning: false },
    ],
  },
];

const translations: Record<Lang, {
  file: string;
  title: string;
  fn: string;
  comment: string;
  learningNote: string;
  learningBadge: string;
}> = {
  en: {
    file: "skills.tsx",
    title: "Skills",
    fn: "myStack()",
    comment: "// Self-assessed — always improving.",
    learningNote: "// Currently learning: C · Next.js · MySQL",
    learningBadge: "learning",
  },
  sr: {
    file: "skills.tsx",
    title: "Vještine",
    fn: "mojStack()",
    comment: "// Samo-procijenjeno — uvijek napređujem.",
    learningNote: "// Trenutno učim: C · Next.js · MySQL",
    learningBadge: "učim",
  },
};

export default function Skills() {
  const { lang } = useLang();
  const tx = translations[lang];

  return (
    <section
      className="min-h-screen px-6 md:px-16 py-20"
      style={{ background: "var(--vsc-bg)" }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-10">
        <div className="w-1 h-6 rounded" style={{ background: "var(--vsc-yellow)" }} />
        <span className="text-xs uppercase tracking-widest" style={{ color: "var(--vsc-yellow)" }}>
          {tx.file}
        </span>
        <div className="flex-1 h-px" style={{ background: "var(--vsc-border)" }} />
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2" style={{ color: "#fff" }}>
          {tx.title}{" "}
          <span style={{ color: "var(--vsc-yellow)" }}>{tx.fn}</span>
        </h2>
        <p className="text-xs mb-10" style={{ color: "var(--vsc-comment)", fontFamily: "'Fira Code', monospace", fontStyle: "italic" }}>
          {tx.comment}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.key}
              className="rounded-md overflow-hidden"
              style={{ background: "#1a1a1a", border: "1px solid var(--vsc-border)" }}
            >
              <div
                className="px-4 py-3 flex items-center gap-2"
                style={{ borderBottom: "1px solid var(--vsc-border)", background: "#252526" }}
              >
                <div className="w-2 h-2 rounded-full" style={{ background: group.color }} />
                <span style={{ color: group.color, fontFamily: "'Fira Code', monospace", fontSize: "12px" }}>
                  {lang === "en" ? group.labelEn : group.labelSr}
                </span>
              </div>

              <div className="p-4 flex flex-col gap-4">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1" style={{ fontFamily: "'Fira Code', monospace", fontSize: "12px" }}>
                      <div className="flex items-center gap-2">
                        <span style={{ color: "var(--vsc-text)" }}>{skill.name}</span>
                        {skill.learning && (
                          <span style={{
                            fontSize: "9px", padding: "1px 5px", borderRadius: "3px",
                            background: "rgba(220,220,170,0.15)", color: "var(--vsc-yellow)",
                            border: "1px solid rgba(220,220,170,0.3)", fontFamily: "'Fira Code', monospace",
                          }}>
                            {tx.learningBadge}
                          </span>
                        )}
                      </div>
                      <span style={{ color: "var(--vsc-text-dim)" }}>{skill.level}%</span>
                    </div>
                    <div className="w-full rounded-full overflow-hidden" style={{ height: "4px", background: "#2a2a2a" }}>
                      <div style={{
                        width: `${skill.level}%`, height: "100%",
                        background: skill.learning ? "var(--vsc-yellow)" : group.color,
                        borderRadius: "9999px", transition: "width 1s ease",
                        opacity: skill.learning ? 0.6 : 1,
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-10 rounded-md p-4 flex items-start gap-3"
          style={{ background: "#1a1a1a", border: "1px solid var(--vsc-border)" }}
        >
          <span style={{ color: "var(--vsc-yellow)", fontSize: "18px" }}>⚡</span>
          <div style={{ fontFamily: "'Fira Code', monospace", fontSize: "12px", color: "var(--vsc-comment)", fontStyle: "italic" }}>
            {tx.learningNote}
          </div>
        </div>
      </div>
    </section>
  );
}