"use client";
import { useLang, Lang } from "@/lib/i18n";

const translations: Record<Lang, {
  title: string;
  fn: string;
  intro: string;
  currentlyBuildingVal: string;
  learningVal: string;
  interestsVal: string;
  goalVal: string;
  philosophy: string;
  philosophyText: string;
  bjj: string;
}> = {
  en: {
    title: "About",
    fn: "aboutMe()",
    intro: "I'm Tahir, a 15-year-old full stack developer from Novi Pazar, Serbia. I started programming at a young age, driven by my interest in video games and technology. In 6th grade, I enrolled in a Python course, and since then I've been continuously learning and improving my skills. I focus on the backend — building systems that actually work, not just look good.",
    currentlyBuildingVal: "Mentorly (open-source ed-tech platform)",
    learningVal: "C, Next.js, MySQL",
    interestsVal: "Backend architecture, open source, entrepreneurship",
    goalVal: "Build things that matter. Ship fast. Keep learning.",
    philosophy: "// Philosophy",
    philosophyText: "I believe in writing clean code, shipping early, and always asking why something works before copy-pasting it. Being 15 doesn't mean waiting — it means starting now.",
    bjj: "// I also train BJJ & MMA — your databases will be secure. ;)",
  },
  sr: {
    title: "O meni",
    fn: "aboutMe()",
    intro: "Ja sam Tahir, 15-godišnji full stack developer iz Novog Pazara, Srbija. Počeo sam da programiram u mladosti, vođen interesovanjem za video igre i tehnologiju. U šestom razredu sam upisao kurs Python-a, i od tada kontinuirano učim i unapređujem svoje veštine. Fokusiram se na backend — gradim sisteme koji zaista rade, a ne samo lepo izgledaju.",
    currentlyBuildingVal: "Mentorly (open-source ed-tech platforma)",
    learningVal: "C, Next.js, MySQL",
    interestsVal: "Backend arhitektura, open source, preduzetništvo",
    goalVal: "Graditi stvari koje imaju smisao. Isporučivati brzo. Stalno učiti.",
    philosophy: "// Filozofija",
    philosophyText: "Vjerujem u čist kod, rano lansiranje i uvijek postavljanje pitanja zašto nešto funkcioniše prije kopiranja. Imati 15 godina ne znači čekati — znači početi odmah.",
    bjj: "// Treniram i BJJ & MMA — vaše baze podataka su sigurne. ;)",
  },
};

export default function About() {
  const { lang } = useLang();
  const tx = translations[lang];

  const lines = [
    { tokens: [{ t: "const ", c: "tok-keyword" }, { t: "aboutMe", c: "tok-fn" }, { t: " = () => ({", c: "tok-punc" }] },
    { tokens: [{ t: "  currentlyBuilding", c: "tok-prop" }, { t: ": ", c: "tok-punc" }, { t: `"${tx.currentlyBuildingVal}"`, c: "tok-string" }, { t: ",", c: "tok-punc" }] },
    { tokens: [{ t: "  learning", c: "tok-prop" }, { t: ": ", c: "tok-punc" }, { t: `"${tx.learningVal}"`, c: "tok-string" }, { t: ",", c: "tok-punc" }] },
    { tokens: [{ t: "  interests", c: "tok-prop" }, { t: ": ", c: "tok-punc" }, { t: `"${tx.interestsVal}"`, c: "tok-string" }, { t: ",", c: "tok-punc" }] },
    { tokens: [{ t: "  goal", c: "tok-prop" }, { t: ": ", c: "tok-punc" }, { t: `"${tx.goalVal}"`, c: "tok-string" }, { t: ",", c: "tok-punc" }] },
    { tokens: [{ t: "});", c: "tok-punc" }] },
  ];

  return (
    <section
      className="min-h-screen px-6 md:px-16 py-20"
      style={{ background: "var(--vsc-bg)" }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-10 fade-up fade-up-1">
        <div className="w-1 h-6 rounded" style={{ background: "var(--vsc-blue)" }} />
        <span className="text-xs uppercase tracking-widest" style={{ color: "var(--vsc-blue)" }}>
          about.tsx
        </span>
        <div className="flex-1 h-px" style={{ background: "var(--vsc-border)" }} />
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left: prose */}
        <div className="fade-up fade-up-2">
          <h2 className="text-2xl font-semibold mb-4" style={{ color: "#fff" }}>
            {tx.title}{" "}
            <span style={{ color: "var(--vsc-blue)" }}>{tx.fn}</span>
          </h2>
          <p className="text-sm leading-relaxed mb-2" style={{ color: "var(--vsc-text-dim)", lineHeight: "1.9" }}>
            {tx.intro}
          </p>

          <p
            className="text-[11px] italic opacity-60 mb-8"
            style={{ color: "var(--vsc-comment)", fontFamily: "'Fira Code', monospace" }}
          >
            {tx.bjj}
          </p>

          <div className="rounded-md p-4" style={{ background: "#1a1a1a", border: "1px solid var(--vsc-border)" }}>
            <div className="text-xs mb-2" style={{ color: "var(--vsc-comment)", fontFamily: "'Fira Code', monospace", fontStyle: "italic" }}>
              {tx.philosophy}
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--vsc-text-dim)", fontFamily: "'Fira Code', monospace", fontSize: "12px" }}>
              {tx.philosophyText}
            </p>
          </div>
        </div>

        {/* Right: code block */}
        <div
          className="rounded-md overflow-hidden fade-up fade-up-3"
          style={{ background: "#1a1a1a", border: "1px solid var(--vsc-border)", fontFamily: "'Fira Code', monospace", fontSize: "clamp(11px, 1.5vw, 14px)" }}
        >
          <div className="flex items-center gap-2 px-4 py-2" style={{ background: "#252526", borderBottom: "1px solid var(--vsc-border)" }}>
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#f44747" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#dcdcaa" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#4ec9b0" }} />
            <span className="ml-2 text-xs" style={{ color: "var(--vsc-text-dim)" }}>about.ts</span>
          </div>
          <div className="p-4 md:p-6">
            {lines.map((line, i) => (
              <div key={i} className="flex items-start leading-relaxed">
                <span className="select-none mr-6 text-right shrink-0" style={{ width: "1.5rem", color: "var(--vsc-text-dim)", fontSize: "0.85em" }}>
                  {i + 1}
                </span>
                <span>
                  {line.tokens.map((tok, j) => (
                    <span key={j} className={tok.c}>{tok.t}</span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}