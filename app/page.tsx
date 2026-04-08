"use client";

import { useState } from "react";
import Titlebar from "@/components/Titlebar";
import Sidebar from "@/components/Sidebar";
import TabBar from "@/components/TabBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import StatusBar from "@/components/StatusBar";

const pages: Record<string, React.ReactNode> = {
  hero: <Hero />,
  about: <About />,
  skills: <Skills />,
  projects: <Projects />,
  contact: <Contact />,
};

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [openTabs, setOpenTabs] = useState(["hero"]);

  const openTab = (id: string) => {
    setActiveSection(id);
    if (!openTabs.includes(id)) {
      setOpenTabs((prev) => [...prev, id]);
    }
  };

  const closeTab = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newTabs = openTabs.filter((t) => t !== id);
    if (newTabs.length === 0) {
      setOpenTabs(["hero"]);
      setActiveSection("hero");
    } else {
      setOpenTabs(newTabs);
      if (activeSection === id) {
        setActiveSection(newTabs[newTabs.length - 1]);
      }
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", width: "100vw", overflow: "hidden", background: "#1e1e1e" }}>
      <Titlebar />
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
            {pages[activeSection]}
          </div>
        </div>
      </div>
      <StatusBar activeSection={activeSection} />
    </div>
  );
}