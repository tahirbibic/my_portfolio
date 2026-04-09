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
        padding: "0 16px",
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
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ff5f57" }} />
        <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#febc2e" }} />
        <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#28c840" }} />
      </div>

      {/* Title */}
      <span>tahir-bibic — portfolio.tsx — Visual Studio Code</span>

      {/* Right side: menu + language toggle */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div style={{ display: "flex", gap: "16px", fontSize: "11px", opacity: 0.7 }}>
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