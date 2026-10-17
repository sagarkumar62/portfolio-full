"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Server,
  Cpu,
  Database,
  Terminal,
  Activity,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/portfolioData";

export default function EngineeringCore() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const activeCategory = PORTFOLIO_DATA.skillCategories[activeCategoryIndex];

  const getIcon = (key: string) => {
    switch (key) {
      case "frontend":
        return <Layers className="w-5 h-5" />;
      case "backend":
        return <Server className="w-5 h-5" />;
      case "ai":
        return <Cpu className="w-5 h-5" />;
      case "databases":
        return <Database className="w-5 h-5" />;
      case "tools":
        return <Terminal className="w-5 h-5" />;
      default:
        return <Activity className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="core"
      className="relative min-h-screen w-full py-28 px-4 sm:px-6 lg:px-8 bg-[#050505] border-t border-[#D9DDE4]/10"
    >
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Chapter Header Tracker */}
        <div className="flex items-center justify-between pb-6 border-b border-[#D9DDE4]/10 mb-12">
          <div className="flex items-center gap-3">
            <span className="font-mono-tech text-xs text-[#777B84]">
              CHAPTER // 02
            </span>
            <span className="w-1 h-1 rounded-full bg-[#777B84]" />
            <span className="font-mono-tech text-xs text-[#D9DDE4] tracking-widest uppercase">
              THE ENGINEERING CORE
            </span>
          </div>
          <div className="font-mono-tech text-xs text-emerald-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>INTELLIGENCE SCHEMATIC ONLINE</span>
          </div>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#161922] border border-[#D9DDE4]/15 text-[#D9DDE4] font-mono-tech text-xs mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>THE ARCHITECTURAL BLUEPRINT // 5 CONNECTED SECTORS</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            CONNECTED <span className="text-chrome">SYSTEMS</span>,
            <br />
            NOT ISOLATED BADGES.
          </h2>
          <p className="mt-4 text-[#A1A1AA] text-base sm:text-lg font-light leading-relaxed">
            An intelligent system functions as an integrated organism: frontend perception, resilient backend nerve pathways, vector cognitive search, and distributed memory stores working in verified cohesion.
          </p>
        </div>

        {/* Interactive Schematic Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation: Subsystem Selectors */}
          <div className="lg:col-span-5 space-y-3">
            <div className="font-mono-tech text-[11px] text-[#777B84] uppercase tracking-wider mb-2">
              SUBSYSTEM MODULES
            </div>

            {PORTFOLIO_DATA.skillCategories.map((category, idx) => {
              const isSelected = idx === activeCategoryIndex;
              return (
                <button
                  key={category.categoryKey}
                  onClick={() => setActiveCategoryIndex(idx)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? "bg-[#161922] border-[#D9DDE4]/40 shadow-[0_0_25px_rgba(217,221,228,0.08)]"
                      : "bg-[#111318]/50 border-[#D9DDE4]/10 hover:border-[#D9DDE4]/25 hover:bg-[#111318]"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`p-2.5 rounded-md border transition-colors ${
                        isSelected
                          ? "bg-[#1F2430] border-[#D9DDE4]/40 text-[#D9DDE4]"
                          : "bg-[#0A0B0E] border-[#D9DDE4]/10 text-[#777B84] group-hover:text-[#D9DDE4]"
                      }`}
                    >
                      {getIcon(category.categoryKey)}
                    </div>
                    <div>
                      <div className="font-mono-tech text-[10px] text-[#777B84]">
                        SECTOR 0{idx + 1}
                      </div>
                      <div className="font-display text-base font-semibold text-white">
                        {category.title}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-mono-tech text-[10px] px-2 py-0.5 rounded bg-black/40 text-[#A1A1AA] border border-[#D9DDE4]/10">
                      {category.skills.length} NODES
                    </span>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isSelected
                          ? "text-[#D9DDE4] translate-x-1"
                          : "text-[#777B84] opacity-40 group-hover:opacity-100"
                      }`}
                    />
                  </div>
                </button>
              );
            })}

            {/* Architecture Pipeline Flow Summary */}
            <div className="p-4 rounded-lg bg-[#0E1015] border border-[#D9DDE4]/10 mt-6">
              <div className="font-mono-tech text-[10px] text-[#777B84] mb-2 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                SYSTEM INTERCONNECTION PATHWAY
              </div>
              <div className="font-mono-tech text-xs text-[#D9DDE4] space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[#777B84]">1.</span> Client UI (React / Next.js)
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#777B84]">2.</span> REST / JWT Layer (Node / Express)
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#777B84]">3.</span> Cache & State (Redis / MongoDB)
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#777B84]">4.</span> Vector Search (ChromaDB / FAISS)
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#777B84]">5.</span> Synthesis (Gemini / Python RAG)
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Detailed Sector Inspection */}
          <div className="lg:col-span-7 bg-[#111318]/70 border border-[#D9DDE4]/20 rounded-xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            
            {/* Corner reticles */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-[#D9DDE4]/40" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-[#D9DDE4]/40" />
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-[#D9DDE4]/40" />
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-[#D9DDE4]/40" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.categoryKey}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                {/* Subsystem Telemetry Banner */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#D9DDE4]/10 mb-6">
                  <div>
                    <span className="font-mono-tech text-[10px] text-[#777B84]">
                      INSPECTING SECTOR 0{activeCategoryIndex + 1}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                      {activeCategory.title}
                    </h3>
                  </div>
                  <div className="font-mono-tech text-xs px-3 py-1 rounded bg-[#161922] text-[#D9DDE4] border border-[#D9DDE4]/20 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    VERIFIED CAPABILITY
                  </div>
                </div>

                <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed mb-8 font-light">
                  {activeCategory.description}
                </p>

                {/* Connected Capability Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {activeCategory.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`p-3.5 rounded-lg border transition-all ${
                        skill.highlight
                          ? "bg-[#181B24] border-[#D9DDE4]/25 shadow-sm"
                          : "bg-[#0E1015]/80 border-[#D9DDE4]/10"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-display text-sm font-semibold text-white">
                          {skill.name}
                        </span>
                        <span
                          className={`font-mono-tech text-[9px] px-2 py-0.5 rounded ${
                            skill.level === "Core"
                              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                              : skill.level === "Advanced"
                              ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                              : "bg-white/5 text-[#A1A1AA] border border-white/10"
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            skill.level === "Core"
                              ? "w-full bg-gradient-to-r from-emerald-500 to-[#D9DDE4]"
                              : skill.level === "Advanced"
                              ? "w-4/5 bg-gradient-to-r from-cyan-500 to-[#D9DDE4]"
                              : "w-3/5 bg-[#777B84]"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Technical Verification Note */}
                <div className="mt-8 pt-6 border-t border-[#D9DDE4]/10 flex flex-wrap items-center justify-between text-xs font-mono-tech text-[#777B84] gap-2">
                  <span>SOURCE TRUTH: PROJECTS & APPOINTMENTS</span>
                  <span className="text-[#A1A1AA]">ZERO FABRICATED CERTIFICATIONS</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
