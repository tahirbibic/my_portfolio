"use client";
import { useState } from "react";

interface SidebarProps {
  activeSection: string;
  setActiveSection: (s: string) => void;
}

const projectFiles = [
  { id: "thrive",   label: "Thrive.tsx",   icon: "🌱", color: "#4ec9b0" },
  { id: "mentorly", label: "Mentorly.tsx", icon: "🎓", color: "#c586c0" },
  { id: "buughive", label: "BuugHive.tsx", icon: "🐛", color: "#f4b942" },
];

const files = [
  { id: "hero",     label: "hero.tsx",     icon: "🏠", color: "#4ec9b0" },
  { id: "about",    label: "about.tsx",    icon: "👤", color: "#569cd6" },
  { id: "skills",   label: "skills.tsx",   icon: "⚡", color: "#dcdcaa" },
  { id: "contact",  label: "contact.tsx",  icon: "✉️",  color: "#c586c0" },
];

const activityIcons = [
  { label: "Explorer", svg: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="13" y="3" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="3" y="13" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="13" y="13" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  )},
  { label: "Search", svg: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )},
  { label: "Git", svg: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 6h4a4 4 0 0 1 4 4v4" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M6 8v8" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  )},
];

const isProjectSection = (id: string) =>
  projectFiles.some((p) => p.id === id);

export default function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const [projectsOpen, setProjectsOpen] = useState(isProjectSection(activeSection));

  const handleProjectsFolder = () => {
    setProjectsOpen((prev) => !prev);
  };

  return (
    <div className="hidden md:flex" style={{ borderRight: "1px solid var(--vsc-border)" }}>
      {/* Activity bar */}
      <div
        className="flex flex-col items-center py-2 gap-2"
        style={{ width: "48px", background: "#333333", borderRight: "1px solid var(--vsc-border)" }}
      >
        {activityIcons.map((icon, i) => (
          <button
            key={i}
            title={icon.label}
            className="flex items-center justify-center rounded"
            style={{
              width: "36px",
              height: "36px",
              color: i === 0 ? "#fff" : "#858585",
              background: i === 0 ? "rgba(255,255,255,0.1)" : "transparent",
              border: i === 0 ? "1px solid rgba(255,255,255,0.15)" : "1px solid transparent",
              cursor: "default",
            }}
          >
            {icon.svg}
          </button>
        ))}
      </div>

      {/* Explorer panel */}
      <div
        className="flex flex-col"
        style={{ width: "200px", background: "var(--vsc-sidebar)", fontSize: "12px" }}
      >
        <div
          className="px-3 py-2 uppercase tracking-widest font-semibold"
          style={{ color: "#bbb", fontSize: "10px", borderBottom: "1px solid var(--vsc-border)" }}
        >
          Explorer
        </div>
        <div className="px-3 py-1" style={{ color: "#cccccc" }}>
          <div className="flex items-center gap-1 py-1 cursor-default" style={{ fontSize: "12px" }}>
            <span style={{ fontSize: "10px" }}>▼</span>
            <span>TAHIR-PORTFOLIO</span>
          </div>
          <div className="ml-3">
            <div className="flex items-center gap-1 py-0.5 cursor-default" style={{ color: "#858585" }}>
              <span style={{ fontSize: "10px" }}>▼</span>
              <span>src</span>
            </div>
            <div className="ml-4 flex flex-col gap-0.5">
              {/* Regular files */}
              {files.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setActiveSection(f.id)}
                  className="flex items-center gap-2 py-0.5 px-1 rounded text-left w-full transition-all"
                  style={{
                    color: activeSection === f.id ? "#fff" : "var(--vsc-text-dim)",
                    background: activeSection === f.id ? "var(--vsc-highlight, #264f78)" : "transparent",
                    fontSize: "12px",
                  }}
                >
                  <span>{f.icon}</span>
                  <span style={{ color: activeSection === f.id ? f.color : undefined }}>{f.label}</span>
                </button>
              ))}

              {/* Projects folder */}
              <div>
                <button
                  onClick={handleProjectsFolder}
                  className="flex items-center gap-2 py-0.5 px-1 rounded text-left w-full transition-all"
                  style={{
                    color: isProjectSection(activeSection) ? "#fff" : "var(--vsc-text-dim)",
                    background: isProjectSection(activeSection) ? "rgba(38,79,120,0.4)" : "transparent",
                    fontSize: "12px",
                  }}
                >
                  <span style={{ fontSize: "10px", color: "#858585" }}>
                    {projectsOpen ? "▼" : "▶"}
                  </span>
                  <span>📁</span>
                  <span style={{ color: isProjectSection(activeSection) ? "#ce9178" : undefined }}>
                    projects
                  </span>
                </button>

                {/* Sub-files */}
                {projectsOpen && (
                  <div className="ml-4 flex flex-col gap-0.5 mt-0.5">
                    {projectFiles.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setActiveSection(p.id)}
                        className="flex items-center gap-2 py-0.5 px-1 rounded text-left w-full transition-all"
                        style={{
                          color: activeSection === p.id ? "#fff" : "var(--vsc-text-dim)",
                          background: activeSection === p.id ? "var(--vsc-highlight, #264f78)" : "transparent",
                          fontSize: "12px",
                        }}
                      >
                        <span>{p.icon}</span>
                        <span style={{ color: activeSection === p.id ? p.color : undefined }}>
                          {p.label}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}