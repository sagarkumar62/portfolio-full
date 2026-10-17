"use client";

import { useState } from "react";
import {
  ExternalLink,
  Github,
  Terminal,
  Cpu,
  ShieldCheck,
} from "lucide-react";
import { PORTFOLIO_DATA, ProjectItem } from "@/lib/portfolioData";

export default function ProjectShowcase() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(
    PORTFOLIO_DATA.projects[0].id
  );

  const selectedProject =
    PORTFOLIO_DATA.projects.find((p) => p.id === selectedProjectId) ||
    PORTFOLIO_DATA.projects[0];

  const renderVisualSchematic = (project: ProjectItem) => {
    switch (project.visualType) {
      case "pipeline":
        return (
          <div className="w-full h-full p-6 flex flex-col justify-between font-mono-tech text-xs bg-[#08090C] rounded-lg border border-[#D9DDE4]/15">
            <div className="flex items-center justify-between pb-3 border-b border-[#D9DDE4]/10 text-[10px] text-[#777B84]">
              <span>PIPELINE TELEMETRY // REAL-TIME EXTRACTION</span>
              <span className="text-emerald-400">STATUS: VERIFIED</span>
            </div>
            <div className="space-y-3 my-4">
              <div className="p-2.5 rounded bg-[#111318] border border-[#D9DDE4]/10 flex items-center justify-between">
                <span className="text-[#A1A1AA]">STAGE 01: Multi-Platform Scraper</span>
                <span className="text-emerald-400 text-[10px]">INGEST ➔ 100%</span>
              </div>
              <div className="p-2.5 rounded bg-[#111318] border border-[#D9DDE4]/10 flex items-center justify-between">
                <span className="text-[#A1A1AA]">STAGE 02: Schema Normalizer</span>
                <span className="text-cyan-400 text-[10px]">PARSED ➔ JSONL</span>
              </div>
              <div className="p-2.5 rounded bg-[#111318] border border-[#D9DDE4]/10 flex items-center justify-between">
                <span className="text-[#A1A1AA]">STAGE 03: Entity Deduplication</span>
                <span className="text-emerald-400 text-[10px]">HASH RESOLVED</span>
              </div>
              <div className="p-2.5 rounded bg-[#161922] border border-[#D9DDE4]/30 flex items-center justify-between text-white font-semibold">
                <span>STAGE 04: Structured Provenance Store</span>
                <span className="text-emerald-400 text-[10px]">3,556+ RECORDS</span>
              </div>
            </div>
            <div className="text-[10px] text-[#777B84] pt-2 border-t border-[#D9DDE4]/10 flex justify-between">
              <span>OUTPUT: CLEAN JSONL / CSV</span>
              <span>AUDIT TRAIL: GROUNDED</span>
            </div>
          </div>
        );

      case "rag-flow":
        return (
          <div className="w-full h-full p-6 flex flex-col justify-between font-mono-tech text-xs bg-[#08090C] rounded-lg border border-[#D9DDE4]/15">
            <div className="flex items-center justify-between pb-3 border-b border-[#D9DDE4]/10 text-[10px] text-[#777B84]">
              <span>RAG ENGINE // VECTOR SEARCH & CITATION</span>
              <span className="text-cyan-400">CHROMADB EMBEDDINGS</span>
            </div>
            <div className="space-y-3 my-4">
              <div className="p-2.5 rounded bg-[#111318] border border-[#D9DDE4]/10 flex items-center justify-between">
                <span className="text-[#A1A1AA]">Input: Research Paper PDF</span>
                <span className="text-[#777B84] text-[10px]">PyPDF / Chunking</span>
              </div>
              <div className="p-2.5 rounded bg-[#111318] border border-[#D9DDE4]/10 flex items-center justify-between">
                <span className="text-[#A1A1AA]">Vector Store: Sentence Transformers</span>
                <span className="text-cyan-400 text-[10px]">Cosine Sim / Top-K</span>
              </div>
              <div className="p-2.5 rounded bg-[#161922] border border-[#D9DDE4]/30 flex items-center justify-between text-white">
                <span>LLM Generation: Google Gemini API</span>
                <span className="text-emerald-400 text-[10px]">Source Cited</span>
              </div>
            </div>
            <div className="text-[10px] text-[#777B84] pt-2 border-t border-[#D9DDE4]/10">
              DISTINCTION: RETRIEVED PASSAGES VS GENERATED INTERPRETATION
            </div>
          </div>
        );

      case "career-graph":
        return (
          <div className="w-full h-full p-6 flex flex-col justify-between font-mono-tech text-xs bg-[#08090C] rounded-lg border border-[#D9DDE4]/15">
            <div className="flex items-center justify-between pb-3 border-b border-[#D9DDE4]/10 text-[10px] text-[#777B84]">
              <span>ROADMAP STATE MACHINE // FAISS SEMANTIC</span>
              <span className="text-purple-400">FAISS MATCHING</span>
            </div>
            <div className="grid grid-cols-2 gap-2 my-4">
              <div className="p-2 rounded bg-[#111318] border border-emerald-500/30 text-emerald-400 text-center">
                MASTERED
              </div>
              <div className="p-2 rounded bg-[#111318] border border-yellow-500/30 text-yellow-400 text-center">
                NEEDS_WORK
              </div>
              <div className="p-2 rounded bg-[#111318] border border-red-500/30 text-red-400 text-center">
                MISSING
              </div>
              <div className="p-2 rounded bg-[#111318] border border-cyan-500/30 text-cyan-400 text-center">
                RECOMMENDED
              </div>
            </div>
            <div className="p-2 rounded bg-[#161922] border border-[#D9DDE4]/20 text-center text-white">
              STATE: LOCKED (PENDING PREREQUISITES)
            </div>
            <div className="text-[10px] text-[#777B84] pt-2 border-t border-[#D9DDE4]/10">
              NEXT.JS ➔ EXPRESS ➔ FASTAPI (FAISS) ➔ GEMINI
            </div>
          </div>
        );

      case "audio-stream":
        return (
          <div className="w-full h-full p-6 flex flex-col justify-between font-mono-tech text-xs bg-[#08090C] rounded-lg border border-[#D9DDE4]/15">
            <div className="flex items-center justify-between pb-3 border-b border-[#D9DDE4]/10 text-[10px] text-[#777B84]">
              <span>AUDIO PWA // OFFLINE BUFFER CONTROLLER</span>
              <span className="text-emerald-400">CACHE STORAGE ACTIVE</span>
            </div>
            <div className="space-y-3 my-4">
              <div className="p-2.5 rounded bg-[#111318] border border-[#D9DDE4]/10 flex items-center justify-between">
                <span className="text-[#A1A1AA]">Audio Stream & Metadata</span>
                <span className="text-[#777B84] text-[10px]">ID3 / Blobs</span>
              </div>
              <div className="p-2.5 rounded bg-[#111318] border border-[#D9DDE4]/10 flex items-center justify-between">
                <span className="text-[#A1A1AA]">Service Worker Interceptor</span>
                <span className="text-emerald-400 text-[10px]">Offline Stream</span>
              </div>
              <div className="p-2.5 rounded bg-[#161922] border border-[#D9DDE4]/30 flex items-center justify-between text-white">
                <span>Redux Media State</span>
                <span className="text-cyan-400 text-[10px]">Zero Latency Resume</span>
              </div>
            </div>
            <div className="text-[10px] text-[#777B84] pt-2 border-t border-[#D9DDE4]/10">
              DEPLOYED: VERCEL PWA CONTAINER
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-full p-6 flex flex-col justify-between font-mono-tech text-xs bg-[#08090C] rounded-lg border border-[#D9DDE4]/15">
            <div className="flex items-center justify-between pb-3 border-b border-[#D9DDE4]/10 text-[10px] text-[#777B84]">
              <span>FULL-STACK SYSTEM TOPOLOGY</span>
              <span className="text-emerald-400">NETLIFY DEPLOYED</span>
            </div>
            <div className="space-y-2 my-4">
              <div className="p-2 rounded bg-[#111318] text-[#A1A1AA]">Client Portal & Catalog Management</div>
              <div className="p-2 rounded bg-[#111318] text-[#A1A1AA]">Worker Dispatch & Shift Attendance Tracking</div>
              <div className="p-2 rounded bg-[#161922] text-white">Responsive Tailwind CSS Architecture</div>
            </div>
            <div className="text-[10px] text-[#777B84] pt-2 border-t border-[#D9DDE4]/10">
              AUTHENTIC SERVICE LOGISTICS WORKFLOW
            </div>
          </div>
        );
    }
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full py-28 px-4 sm:px-6 lg:px-8 bg-[#050505] border-t border-[#D9DDE4]/10"
    >
      <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Chapter Header Tracker */}
        <div className="flex items-center justify-between pb-6 border-b border-[#D9DDE4]/10 mb-12">
          <div className="flex items-center gap-3">
            <span className="font-mono-tech text-xs text-[#777B84]">
              CHAPTER // 03
            </span>
            <span className="w-1 h-1 rounded-full bg-[#777B84]" />
            <span className="font-mono-tech text-xs text-[#D9DDE4] tracking-widest uppercase">
              PROJECT CASE STUDIES
            </span>
          </div>
          <div className="font-mono-tech text-xs text-[#777B84] hidden sm:block">
            EVIDENCE-BACKED IMPLEMENTATIONS
          </div>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-12">
          <div className="font-mono-tech text-xs text-[#777B84] mb-3 tracking-widest">
            AUTHENTIC ENGINEERING PROOF
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            DEEP-DIVE <span className="text-chrome">CASE STUDIES</span>.
          </h2>
          <p className="mt-4 text-[#A1A1AA] text-base sm:text-lg font-light leading-relaxed">
            Every project demonstrates tangible software engineering: problem definition, architecture design, personal implementation, and verified technologies.
          </p>
        </div>

        {/* Project Selector Ribbon */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {PORTFOLIO_DATA.projects.map((project) => {
            const isSelected = project.id === selectedProjectId;
            return (
              <button
                key={project.id}
                onClick={() => setSelectedProjectId(project.id)}
                className={`font-mono-tech text-xs px-4 py-2.5 rounded-lg border whitespace-nowrap transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? "bg-[#161922] border-[#D9DDE4]/40 text-white shadow-[0_0_20px_rgba(217,221,228,0.1)]"
                    : "bg-[#111318]/60 border-[#D9DDE4]/10 text-[#777B84] hover:text-[#D9DDE4] hover:border-[#D9DDE4]/20"
                }`}
              >
                <span className="opacity-40">[{project.number}]</span>
                <span>{project.title}</span>
              </button>
            );
          })}
        </div>

        {/* Main Cinematic Case Study Spotlight */}
        <div className="bg-[#111318]/70 border border-[#D9DDE4]/20 rounded-2xl p-6 sm:p-10 backdrop-blur-md relative overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.9)]">
          
          {/* Subtle reticle markings */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[#D9DDE4]/40" />
          <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-[#D9DDE4]/40" />
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-[#D9DDE4]/40" />
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[#D9DDE4]/40" />

          {/* Top Banner */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#D9DDE4]/10 mb-8">
            <div className="flex items-center gap-3">
              <span className="font-mono-tech text-sm px-2.5 py-1 rounded bg-[#1F2430] text-[#D9DDE4] border border-[#D9DDE4]/20">
                PROJ_{selectedProject.number}
              </span>
              <span className="font-mono-tech text-xs text-[#777B84]">
                {selectedProject.category}
              </span>
            </div>

            {/* Action Links */}
            <div className="flex items-center gap-3">
              {selectedProject.repoUrl && (
                <a
                  href={selectedProject.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono-tech text-xs px-3.5 py-1.5 rounded border border-[#D9DDE4]/20 text-[#D9DDE4] hover:text-white hover:border-[#D9DDE4]/60 transition-colors flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>REPOSITORY</span>
                </a>
              )}
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono-tech text-xs px-3.5 py-1.5 rounded bg-[#D9DDE4] text-[#050505] font-semibold hover:bg-white transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(217,221,228,0.2)]"
                >
                  <span>LIVE DEMO</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Case Study Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Problem, Solution, Contribution */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="font-display text-3xl sm:text-4xl font-bold text-white mb-2">
                  {selectedProject.title}
                </h3>
                <p className="font-mono-tech text-xs text-emerald-400">
                  {selectedProject.tagline}
                </p>
              </div>

              {/* The Problem */}
              <div className="space-y-2">
                <div className="font-mono-tech text-[11px] text-[#777B84] uppercase tracking-wider flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  THE PROBLEM & REAL-WORLD CHALLENGE
                </div>
                <p className="text-[#A1A1AA] text-sm sm:text-base font-light leading-relaxed">
                  {selectedProject.problem}
                </p>
              </div>

              {/* The Engineered Solution */}
              <div className="space-y-2">
                <div className="font-mono-tech text-[11px] text-[#777B84] uppercase tracking-wider flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                  ENGINEERED ARCHITECTURE & SYSTEM
                </div>
                <p className="text-[#A1A1AA] text-sm sm:text-base font-light leading-relaxed">
                  {selectedProject.solution}
                </p>
              </div>

              {/* My Personal Contribution */}
              <div className="space-y-2 p-4 rounded-lg bg-[#0E1015] border border-[#D9DDE4]/10">
                <div className="font-mono-tech text-[11px] text-[#D9DDE4] uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  SPECIFIC IMPLEMENTATION CONTRIBUTION
                </div>
                <p className="text-[#A1A1AA] text-xs sm:text-sm font-light leading-relaxed">
                  {selectedProject.myContribution}
                </p>
              </div>

              {/* Verified Tech Stack */}
              <div>
                <div className="font-mono-tech text-[10px] text-[#777B84] uppercase tracking-wider mb-2">
                  VERIFIED TECHNOLOGY STACK
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono-tech text-xs px-2.5 py-1 rounded bg-[#161922] text-[#D9DDE4] border border-[#D9DDE4]/15"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Visual Schematic / Topology Visualizer */}
            <div className="lg:col-span-5 flex flex-col justify-between min-h-[320px] lg:min-h-[440px]">
              <div className="w-full h-full min-h-[300px]">
                {renderVisualSchematic(selectedProject)}
              </div>

              {/* Architecture Highlight Caption */}
              <div className="mt-4 p-3 rounded bg-[#0A0B0E] border border-[#D9DDE4]/10 font-mono-tech text-[11px] text-[#777B84]">
                <div className="text-[10px] text-[#A1A1AA] mb-1">FLOW TOPOLOGY:</div>
                <div className="text-[#D9DDE4]">{selectedProject.architectureHighlight}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Verified Project Archives Card Row */}
        <div className="mt-12 pt-8 border-t border-[#D9DDE4]/10">
          <div className="font-mono-tech text-xs text-[#777B84] mb-4">
            ADDITIONAL VERIFIED APPLICATIONS IN PORTFOLIO INVENTORY
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-[#111318]/50 border border-[#D9DDE4]/10">
              <div className="font-display text-sm font-semibold text-white">Sheryians Blogs</div>
              <p className="text-xs text-[#777B84] mt-1">Next.js, TypeScript, TanStack Query, Redux. Contributed to frontend & backend integration.</p>
            </div>
            <div className="p-4 rounded-lg bg-[#111318]/50 border border-[#D9DDE4]/10">
              <div className="font-display text-sm font-semibold text-white">Sidcup Family</div>
              <p className="text-xs text-[#777B84] mt-1">GSAP-animated responsive landing page focused on motion and visual design.</p>
            </div>
            <div className="p-4 rounded-lg bg-[#111318]/50 border border-[#D9DDE4]/10">
              <div className="font-display text-sm font-semibold text-white">TheAidGrid Worker</div>
              <p className="text-xs text-[#777B84] mt-1">Dedicated mobile-first worker platform for service shift tracking and attendance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
