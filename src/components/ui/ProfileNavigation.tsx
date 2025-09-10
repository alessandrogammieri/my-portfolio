"use client";

import { useState } from "react";

const navigationItems = [
  { id: "introduction", label: "Introduzione" },
  { id: "work-experience", label: "Esperienze" },
  { id: "study", label: "Formazione" },
  { id: "technical-skills", label: "Skills Tecniche" },
];

export default function ProfileNavigation() {
  const [activeSection, setActiveSection] = useState("introduction");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <div className="hidden md:flex flex-col gap-8 fixed left-0 top-1/2 -translate-y-1/2 ps-6 z-10">
      <div className="flex flex-col gap-6 fixed left-0 top-1/2 -translate-y-1/2 ps-6 whitespace-nowrap">
        {navigationItems.map((item) => (
          <div key={item.id} className="flex relative gap-3 flex-col">
            <div
              className="flex relative items-center gap-2 cursor-pointer transition-all duration-200 ease-in-out delay-0 hover:translate-x-1"
              onClick={() => scrollToSection(item.id)}
            >
              <div className="h-px flex relative transition-all duration-200 bg-zinc-700 min-w-4" />
              <span>{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
