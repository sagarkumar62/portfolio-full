"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { ArrowDown, ChevronRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/portfolioData";

// Dynamically import CodeSplittingPortrait with SSR disabled
const CodeSplittingPortrait = dynamic(() => import("./CodeSplittingPortrait"), {
  ssr: false,
  loading: () => (
    <div className="w-full max-w-lg aspect-[4/5] rounded-xl border border-[#D9DDE4]/20 bg-[#08090C] flex flex-col items-center justify-center gap-3">
      <div className="w-10 h-10 border-2 border-[#D9DDE4]/20 border-t-emerald-400 rounded-full animate-spin" />
      <span className="font-mono-tech text-xs text-[#777B84]">INITIALIZING NEURAL CODE MATRIX...</span>
    </div>
  ),
});

export default function EnterTheVoid() {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setInitialized(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById("identity");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="void"
      className="relative min-h-screen w-full flex flex-col justify-between pt-12 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#050505]"
    >
      {/* Background Ambience & Lighting */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-[#D9DDE4]/[0.05] via-transparent to-transparent blur-3xl pointer-events-none" />
      
      {/* Technical Reticles on corners */}
      <div className="absolute top-6 left-6 font-mono-tech text-[10px] text-[#777B84] tracking-widest hidden md:block">
        [SYS.INIT // CORE_STATION_00]
      </div>
      <div className="absolute top-6 right-6 font-mono-tech text-[10px] text-[#777B84] tracking-widest hidden md:block">
        {PORTFOLIO_DATA.personal.coordinates}
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center py-6">
        
        {/* Left Column: Narrative Headline & Identity */}
        <div className="lg:col-span-6 flex flex-col items-start justify-center space-y-6">
          
          {/* Telemetry pill */}
          <div
            className={`transition-all duration-700 transform ${
              initialized ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#111318] border border-[#D9DDE4]/20 text-[#D9DDE4] font-mono-tech text-xs tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>SYSTEM ONLINE / FULL-STACK + AI ENGINEERING</span>
            </div>
          </div>

          {/* Oversized Editorial Headline */}
          <div
            className={`transition-all duration-1000 delay-150 transform ${
              initialized ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[0.95]">
              ENGINEERING
              <br />
              <span className="text-chrome">WHAT COMES</span>
              <br />
              NEXT.
            </h1>
          </div>

          {/* Subtitle / Positioning Statement */}
          <p
            className={`max-w-xl text-lg sm:text-xl text-[#A1A1AA] leading-relaxed font-light transition-all duration-1000 delay-300 transform ${
              initialized ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            I&apos;m{" "}
            <span className="text-[#F5F5F5] font-medium border-b border-[#D9DDE4]/40">
              Sagar Kumar
            </span>{" "}
            — a MERN Full-Stack Developer and AI Engineer Intern exploring the convergence
            of intelligent agent pipelines, vector retrieval architectures, and responsive software systems.
          </p>

          {/* Quick HUD Metrics */}
          <div
            className={`grid grid-cols-3 gap-3.5 pt-2 w-full max-w-lg transition-all duration-1000 delay-450 transform ${
              initialized ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="p-3 rounded bg-[#111318]/60 border border-[#D9DDE4]/10">
              <div className="font-mono-tech text-[10px] text-[#777B84] uppercase">Role</div>
              <div className="font-display text-sm font-semibold text-[#F5F5F5] truncate">AI Intern</div>
              <div className="font-mono-tech text-[9px] text-emerald-400 truncate">The AI Signal</div>
            </div>
            <div className="p-3 rounded bg-[#111318]/60 border border-[#D9DDE4]/10">
              <div className="font-mono-tech text-[10px] text-[#777B84] uppercase">Core Stack</div>
              <div className="font-display text-sm font-semibold text-[#F5F5F5] truncate">MERN + Python</div>
              <div className="font-mono-tech text-[9px] text-[#A1A1AA] truncate">FastAPI · Gemini</div>
            </div>
            <div className="p-3 rounded bg-[#111318]/60 border border-[#D9DDE4]/10">
              <div className="font-mono-tech text-[10px] text-[#777B84] uppercase">Academic</div>
              <div className="font-display text-sm font-semibold text-[#F5F5F5] truncate">LNCTE CSE</div>
              <div className="font-mono-tech text-[9px] text-[#A1A1AA] truncate">7.39 CGPA · &apos;27</div>
            </div>
          </div>

          {/* Action CTAs */}
          <div
            className={`flex flex-wrap items-center gap-4 pt-3 transition-all duration-1000 delay-600 transform ${
              initialized ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <button
              onClick={scrollToNext}
              className="px-6 py-3.5 rounded bg-[#D9DDE4] text-[#050505] font-mono-tech text-xs font-semibold hover:bg-white transition-all shadow-[0_0_25px_rgba(217,221,228,0.2)] hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] flex items-center gap-2 group cursor-pointer"
            >
              <span>ENTER THE SYSTEM</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#projects"
              className="px-6 py-3.5 rounded bg-[#111318] border border-[#D9DDE4]/25 text-[#D9DDE4] font-mono-tech text-xs hover:border-[#D9DDE4]/60 hover:text-white transition-all flex items-center gap-2"
            >
              <span>INSPECT CASE STUDIES</span>
            </a>

            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3.5 rounded border border-[#D9DDE4]/15 text-[#777B84] font-mono-tech text-xs hover:text-white hover:border-[#D9DDE4]/40 transition-colors"
            >
              RESUME.PDF
            </a>
          </div>
        </div>

        {/* Right Column: Sagar's Photo Splitting Into Code On Scroll */}
        <div className="lg:col-span-6 relative flex items-center justify-center">
          <CodeSplittingPortrait />
        </div>
      </div>

      {/* Bottom Telemetry & Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 flex items-center justify-between border-t border-[#D9DDE4]/10">
        <div className="font-mono-tech text-xs text-[#777B84] flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>PORTFOLIO KERNEL 02 // ALL DATA VERIFIED</span>
        </div>

        <button
          onClick={scrollToNext}
          className="flex items-center gap-2 font-mono-tech text-xs text-[#A1A1AA] hover:text-white transition-colors group cursor-pointer"
        >
          <span>EXPLORE ARCHITECTURE</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform text-emerald-400" />
        </button>
      </div>
    </section>
  );
}
