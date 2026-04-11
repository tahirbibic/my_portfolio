"use client";

interface TabBarProps {
  activeSection: string;
  setActiveSection: (id: string) => void;
  openTabs: string[];
  closeTab: (id: string, e: React.MouseEvent) => void;
}

const tabMeta: Record<string, { label: string; color: string }> = {
  hero:     { label: "hero.tsx",       color: "#4ec9b0" },
  about:    { label: "about.tsx",      color: "#569cd6" },
  skills:   { label: "skills.tsx",     color: "#dcdcaa" },
  contact:  { label: "contact.tsx",    color: "#c586c0" },
  thrive:   { label: "Thrive.tsx",     color: "#4ec9b0" },
  mentorly: { label: "Mentorly.tsx",   color: "#c586c0" },
  buughive: { label: "BuugHive.tsx",   color: "#f4b942" },
};

export default function TabBar({ activeSection, setActiveSection, openTabs, closeTab }: TabBarProps) {
  return (
    <div
      style={{
        display: "flex",
        background: "#2d2d2d",
        borderBottom: "1px solid #3c3c3c",
        height: "35px",
        overflowX: "auto",
        overflowY: "hidden",
        scrollbarWidth: "none",
        flexShrink: 0,
      }}
    >
      {openTabs.map((id) => {
        const meta = tabMeta[id];
        if (!meta) return null;
        const isActive = activeSection === id;
        return (
          <div
            key={id}
            onClick={() => setActiveSection(id)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "0 10px",
              height: "100%",
              cursor: "pointer",
              background: isActive ? "#1e1e1e" : "transparent",
              borderRight: "1px solid #3c3c3c",
              borderTop: isActive ? "1px solid #007acc" : "1px solid transparent",
              color: isActive ? "#fff" : "#8d8d8d",
              fontSize: "11px",
              fontFamily: "'Fira Code', monospace",
              flexShrink: 0,
              userSelect: "none",
              minWidth: "80px",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: meta.color,
                display: "inline-block",
                flexShrink: 0,
                opacity: isActive ? 1 : 0.5,
              }}
            />
            <span style={{ color: isActive ? meta.color : "#8d8d8d", flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {meta.label}
            </span>
            <span
              onClick={(e) => closeTab(id, e)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "14px",
                height: "14px",
                borderRadius: "3px",
                fontSize: "13px",
                color: "#8d8d8d",
                flexShrink: 0,
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#555";
                (e.currentTarget as HTMLElement).style.color = "#fff";
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "#8d8d8d";
              }}
            >
              ×
            </span>
          </div>
        );
      })}
    </div>
  );
}