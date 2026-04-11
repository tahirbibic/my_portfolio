"use client";
import { useState } from "react";
import { useLang } from "@/lib/i18n";
import Titlebar from "@/components/Titlebar";
import Sidebar from "@/components/Sidebar";
import TabBar from "@/components/TabBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Thrive from "@/components/projects/Thrive";
import Mentorly from "@/components/projects/Mentorly";
import BuugHive from "@/components/projects/BuugHive";
import Contact from "@/components/Contact";
import StatusBar from "@/components/StatusBar";

const mobileNav = [
  { id: "hero",     icon: "🏠", label: "Home",     color: "#4ec9b0" },
  { id: "about",    icon: "👤", label: "About",    color: "#569cd6" },
  { id: "skills",   icon: "⚡", label: "Skills",   color: "#dcdcaa" },
  { id: "thrive",   icon: "📁", label: "Projects", color: "#ce9178" },
  { id: "contact",  icon: "✉️",  label: "Contact",  color: "#c586c0" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [openTabs, setOpenTabs] = useState(["hero"]);
  const { lang, setLang } = useLang();

  const pages: Record<string, React.ReactNode> = {
    hero:     <Hero />,
    about:    <About />,
    skills:   <Skills />,
    thrive:   <Thrive />,
    mentorly: <Mentorly />,
    buughive: <BuugHive />,
    contact:  <Contact />,
  };

  const openTab = (id: string) => {
    setActiveSection(id);
    if (!openTabs.includes(id)) setOpenTabs((prev) => [...prev, id]);
  };

  const closeTab = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newTabs = openTabs.filter((t) => t !== id);
    if (newTabs.length === 0) {
      setOpenTabs(["hero"]);
      setActiveSection("hero");
    } else {
      setOpenTabs(newTabs);
      if (activeSection === id) setActiveSection(newTabs[newTabs.length - 1]);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", width: "100vw", overflow: "hidden", background: "#1e1e1e" }}>
      <Titlebar lang={lang} setLang={setLang} />
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <Sidebar activeSection={activeSection} setActiveSection={openTab} />
        <div style={{ display: "flex", flexDirection: "column", flex: 1, overflow: "hidden" }}>
          <TabBar
            activeSection={activeSection}
            setActiveSection={openTab}
            openTabs={openTabs}
            closeTab={closeTab}
          />
          <div style={{ flex: 1, overflowY: "auto", overflowX: "hidden", background: "#1e1e1e" }}>
            <div className="pb-16 md:pb-0">
              {pages[activeSection]}
            </div>
          </div>
        </div>
      </div>
      <StatusBar activeSection={activeSection} />

      {/* Mobile bottom nav */}
      <div
        className="flex md:hidden"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "#252526",
          borderTop: "1px solid #3c3c3c",
          height: "56px",
          zIndex: 50,
        }}
      >
        {mobileNav.map((item) => {
          // "Projects" button on mobile opens Thrive by default (first project)
          const isActive =
            item.id === "thrive"
              ? ["thrive", "mentorly", "buughive"].includes(activeSection)
              : activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => openTab(item.id)}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "2px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                borderTop: isActive ? `2px solid ${item.color}` : "2px solid transparent",
              }}
            >
              <span style={{ fontSize: "18px" }}>{item.icon}</span>
              <span
                style={{
                  fontSize: "9px",
                  fontFamily: "'Fira Code', monospace",
                  color: isActive ? item.color : "#858585",
                }}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}