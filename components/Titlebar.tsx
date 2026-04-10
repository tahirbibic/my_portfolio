"use client";
import { Lang } from "@/lib/i18n";

interface TitlebarProps {
  lang: Lang;
  setLang: (l: Lang) => void;
}

export default function Titlebar({ lang, setLang }: TitlebarProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 12px",
        background: "#3c3c3c",
        borderBottom: "1px solid #2d2d2d",
        height: "30px",
        fontSize: "12px",
        color: "#cccccc",
        flexShrink: 0,
        userSelect: "none",
      }}
    >
      {/* Traffic lights */}
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ff5f57" }} />
        <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#febc2e" }} />
        <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#28c840" }} />
      </div>

      {/* Title — hidden on mobile */}
      <span className="hidden md:block" style={{ fontSize: "11px" }}>
        tahir-bibic — portfolio.tsx — Visual Studio Code
      </span>
      <span className="block md:hidden" style={{ fontSize: "11px" }}>
        portfolio.tsx
      </span>

      {/* Right side */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {/* Menu items — hidden on mobile */}
        <div className="hidden md:flex" style={{ gap: "16px", fontSize: "11px", opacity: 0.7 }}>
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Terminal</span>
        </div>

        {/* Language toggle */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "#2a2a2a",
            border: "1px solid #555",
            borderRadius: "4px",
            overflow: "hidden",
            fontSize: "10px",
            fontFamily: "'Fira Code', monospace",
          }}
        >
          {(["en", "sr"] as Lang[]).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              style={{
                padding: "2px 8px",
                background: lang === l ? "#007acc" : "transparent",
                color: lang === l ? "#fff" : "#aaa",
                border: "none",
                cursor: "pointer",
                fontFamily: "'Fira Code', monospace",
                fontSize: "10px",
                transition: "background 0.15s",
              }}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}