"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

interface ChapterAct {
  id: string;
  act: string;
  title: string;
}

const CHAPTER_ACTS: ChapterAct[] = [
  { id: "void", act: "ACT 00", title: "THE VOID // INCEPTION" },
  { id: "identity", act: "ACT 01", title: "THE HUMAN BEHIND THE MACHINE" },
  { id: "core", act: "ACT 02", title: "ENGINEERING CORE" },
  { id: "projects", act: "ACT 03", title: "VERIFIED CASE STUDIES" },
  { id: "journey", act: "ACT 04", title: "CHRONOLOGY & TRAJECTORY" },
  { id: "philosophy", act: "ACT 05", title: "THE FIRST PRINCIPLES" },
  { id: "education", act: "ACT 06", title: "ACADEMIC FOUNDATION" },
  { id: "contact", act: "ACT 07", title: "DIRECT TRANSMISSION" },
];

export default function StoryPhaseHUD() {
  const [activeActIndex, setActiveActIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalScroll) * 100));
        setScrollProgress(Math.round(progress));
      }

      // Check current section
      const sections = CHAPTER_ACTS.map((ch) => document.getElementById(ch.id));
      const scrollPos = window.scrollY + window.innerHeight * 0.35;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveActIndex(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToAct = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsExpanded(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentAct = CHAPTER_ACTS[activeActIndex] || CHAPTER_ACTS[0];

  return (
    <aside 
      aria-label="Story Progress Telemetry"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end select-none"
    >
      {/* Expanded Story Act Navigator Modal/Tray */}
      {isExpanded && (
        <div className="mb-3 p-4 rounded-xl bg-[#090B0E]/95 border border-[#D9DDE4]/20 shadow-[0_20px_50px_rgba(0,0,0,0.9)] backdrop-blur-xl w-72 max-w-[90vw] animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#D9DDE4]/10 mb-3 text-[10px] font-mono-tech text-[#777B84]">
            <span>STORYLINE TRANSMISSION // ACTS</span>
            <span className="text-emerald-400">{scrollProgress}% CONSUMED</span>
          </div>
          <div className="space-y-1 max-h-64 overflow-y-auto pr-1">
            {CHAPTER_ACTS.map((ch, idx) => {
              const isActive = idx === activeActIndex;
              return (
                <button
                  key={ch.id}
                  onClick={() => scrollToAct(ch.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-all flex items-center justify-between text-xs font-mono-tech cursor-pointer ${
                    isActive
                      ? "bg-[#161922] text-white border border-[#D9DDE4]/30"
                      : "text-[#777B84] hover:text-[#D9DDE4] hover:bg-white/5"
                  }`}
                >
                  <span className="text-[10px] text-emerald-400 font-semibold">{ch.act}</span>
                  <span className="truncate max-w-[150px] text-[11px]">{ch.title}</span>
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-emerald-400" : "bg-transparent"}`} />
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Floating Telemetry Pill */}
      <div className="flex items-center gap-2 p-1.5 rounded-full bg-[#08090C]/90 border border-[#D9DDE4]/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-md">
        
        {/* Toggle Navigator Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full hover:bg-white/5 transition-all text-left cursor-pointer group"
          title="Toggle Storyline Acts"
        >
          <div className="relative flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          <div className="flex flex-col">
            <span className="font-mono-tech text-[9px] text-emerald-400 font-semibold tracking-wider">
              {currentAct.act}
            </span>
            <span className="font-display text-xs font-bold text-white max-w-[140px] sm:max-w-[200px] truncate">
              {currentAct.title}
            </span>
          </div>

          <div className="pl-2 border-l border-[#D9DDE4]/15 font-mono-tech text-[10px] text-[#A1A1AA]">
            {scrollProgress}%
          </div>
        </button>

        {/* Quick Scroll to Top */}
        {scrollProgress > 15 && (
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full hover:bg-white/10 text-[#777B84] hover:text-white transition-colors cursor-pointer"
            title="Return to Inception"
          >
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </aside>
  );
}
