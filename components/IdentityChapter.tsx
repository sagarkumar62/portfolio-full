"use client";

import Image from "next/image";
import { Terminal, MapPin, Sparkles, CheckCircle2, Shield, ArrowRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/portfolioData";

export default function IdentityChapter() {
  return (
    <section
      id="identity"
      className="relative min-h-screen w-full py-28 px-4 sm:px-6 lg:px-8 bg-[#050505] border-t border-[#D9DDE4]/10"
    >
      <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Chapter Header Tracker */}
        <div className="flex items-center justify-between pb-6 border-b border-[#D9DDE4]/10 mb-12">
          <div className="flex items-center gap-3">
            <span className="font-mono-tech text-xs text-[#777B84]">
              CHAPTER // 01
            </span>
            <span className="w-1 h-1 rounded-full bg-[#777B84]" />
            <span className="font-mono-tech text-xs text-[#D9DDE4] tracking-widest uppercase">
              THE HUMAN BEHIND THE MACHINE
            </span>
          </div>
          <div className="font-mono-tech text-xs text-[#777B84] hidden sm:flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#D9DDE4]" />
            <span>{PORTFOLIO_DATA.personal.location}</span>
          </div>
        </div>

        {/* Editorial Title */}
        <div className="max-w-4xl mb-16">
          <div className="font-mono-tech text-xs text-[#777B84] mb-3 tracking-widest">
            ENGINEERING PRINCIPLE
          </div>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
            NOT JUST CODE.
            <br />
            <span className="text-chrome">SYSTEMS THAT THINK.</span>
          </h2>
        </div>

        {/* Asymmetrical Grid: Visual Anchor & Deep Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authentic Portrait with HUD Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Corner HUD reticles */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#D9DDE4]/40 z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#D9DDE4]/40 z-20 pointer-events-none" />
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-[#D9DDE4]/20 z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-[#D9DDE4]/20 z-20 pointer-events-none" />

              {/* Main Photo Container */}
              <div className="relative rounded-lg overflow-hidden border border-[#D9DDE4]/20 bg-[#111318] shadow-[0_20px_50px_rgba(0,0,0,0.9)] group">
                <div className="aspect-[3/4] relative w-full overflow-hidden">
                  <Image
                    src="/images/sagar-portrait-blue.jpg"
                    alt="Sagar Kumar — Full-Stack Developer & AI Engineer Intern"
                    fill
                    className="object-cover object-center filter grayscale contrast-110 brightness-95 group-hover:grayscale-0 group-hover:contrast-105 transition-all duration-700"
                    priority
                  />
                  {/* Subtle scanline overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                </div>

                {/* Technical Card Overlay on photo footer */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <div className="font-mono-tech text-[10px] text-emerald-400 mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    VERIFIED SUBJECT // SAGAR KUMAR
                  </div>
                  <div className="font-display text-lg font-bold text-white">
                    Sagar Kumar
                  </div>
                  <div className="font-mono-tech text-xs text-[#A1A1AA]">
                    B.Tech CSE &apos;27 · LNCT Excellence, Bhopal
                  </div>
                </div>
              </div>

              {/* Secondary floating tech badge */}
              <div className="absolute -bottom-6 -left-4 sm:left-4 bg-[#111318] border border-[#D9DDE4]/25 p-3 rounded shadow-xl backdrop-blur-md hidden sm:block">
                <div className="font-mono-tech text-[9px] text-[#777B84]">CURRENT APPOINTMENT</div>
                <div className="font-display text-xs font-semibold text-white">AI Engineer Intern</div>
                <div className="font-mono-tech text-[10px] text-emerald-400">The AI Signal · Remote</div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Story & Engineering Dimensions */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6 text-[#A1A1AA] text-base sm:text-lg leading-relaxed font-light">
              <p>
                Behind every neural model, automated pipeline, and interface lies deliberate human engineering.
                I am a Computer Science & Engineering undergraduate at{" "}
                <span className="text-white font-medium">LNCT Excellence, Bhopal</span> (graduating in 2027) with a dedicated focus on{" "}
                <span className="text-white font-medium">full-stack web development</span> and{" "}
                <span className="text-white font-medium">applied AI engineering</span>.
              </p>

              <p>
                My work spans the full development continuum: from architecting high-performance MERN web applications with TypeScript and Tailwind CSS, to constructing resilient backend services with Node.js and Express, to building retrieval-augmented generation (RAG) platforms using Python, Sentence Transformers, and ChromaDB.
              </p>

              <p>
                Currently, at <span className="text-white font-medium">The AI Signal</span>, I engineer high-throughput web scraping and AI agent extraction pipelines — transforming heterogeneous web sources into verified, normalized, and deduplicated record stores with complete provenance.
              </p>
            </div>

            {/* Core Competency Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-lg bg-[#111318]/70 border border-[#D9DDE4]/10 hover:border-[#D9DDE4]/30 transition-colors">
                <div className="flex items-center gap-2 font-mono-tech text-xs text-[#D9DDE4] mb-2">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span>FULL-STACK ARCHITECTURE</span>
                </div>
                <p className="text-xs text-[#777B84] leading-normal">
                  Production MERN applications, Next.js App Router, stateless JWT authentication, RBAC, and distributed Redis caching.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#111318]/70 border border-[#D9DDE4]/10 hover:border-[#D9DDE4]/30 transition-colors">
                <div className="flex items-center gap-2 font-mono-tech text-xs text-[#D9DDE4] mb-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>APPLIED AI & RAG</span>
                </div>
                <p className="text-xs text-[#777B84] leading-normal">
                  Semantic search with ChromaDB & FAISS, Gemini API integration, prompt orchestration, and grounded citation systems.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#111318]/70 border border-[#D9DDE4]/10 hover:border-[#D9DDE4]/30 transition-colors">
                <div className="flex items-center gap-2 font-mono-tech text-xs text-[#D9DDE4] mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>DATA EXTRACTION & QC</span>
                </div>
                <p className="text-xs text-[#777B84] leading-normal">
                  Web scrapers, agent directory harvesting, hash-based deduplication, normalization schemas, and source audit trails.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#111318]/70 border border-[#D9DDE4]/10 hover:border-[#D9DDE4]/30 transition-colors">
                <div className="flex items-center gap-2 font-mono-tech text-xs text-[#D9DDE4] mb-2">
                  <Shield className="w-4 h-4 text-cyan-400" />
                  <span>ACADEMIC FOUNDATION</span>
                </div>
                <p className="text-xs text-[#777B84] leading-normal">
                  7.39 CGPA in Computer Science & Engineering, solid grounding in Data Structures, DBMS, Operating Systems, and System Design.
                </p>
              </div>
            </div>

            {/* Direct Link to Technical Core */}
            <div className="pt-2">
              <a
                href="#core"
                className="inline-flex items-center gap-2 font-mono-tech text-xs text-[#D9DDE4] hover:text-white transition-colors group"
              >
                <span>EXPLORE TECHNICAL CAPABILITY ENGINE</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
