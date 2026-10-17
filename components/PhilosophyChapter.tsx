"use client";

import Image from "next/image";
import { PORTFOLIO_DATA } from "@/lib/portfolioData";

export default function PhilosophyChapter() {
  return (
    <section
      id="philosophy"
      className="relative min-h-screen w-full py-28 px-4 sm:px-6 lg:px-8 bg-[#050505] border-t border-[#D9DDE4]/10"
    >
      <div className="absolute inset-0 bg-tech-dots opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Chapter Header Tracker */}
        <div className="flex items-center justify-between pb-6 border-b border-[#D9DDE4]/10 mb-12">
          <div className="flex items-center gap-3">
            <span className="font-mono-tech text-xs text-[#777B84]">
              CHAPTER // 05
            </span>
            <span className="w-1 h-1 rounded-full bg-[#777B84]" />
            <span className="font-mono-tech text-xs text-[#D9DDE4] tracking-widest uppercase">
              ENGINEERING PHILOSOPHY
            </span>
          </div>
          <div className="font-mono-tech text-xs text-[#777B84] hidden sm:block">
            DOCTRINE // RIGOR & VERIFIABILITY
          </div>
        </div>

        {/* Section Headline */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#161922] border border-[#D9DDE4]/15 text-[#D9DDE4] font-mono-tech text-xs mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>THE UNCOMPROMISING CREED // FIRST PRINCIPLES</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            I BUILD <span className="text-chrome">SYSTEMS</span>,
            <br />
            NOT JUST SCREENS.
          </h2>
          <p className="mt-4 text-[#A1A1AA] text-base sm:text-lg font-light leading-relaxed max-w-2xl">
            In an era where language models can generate boilerplate syntax in seconds, the software engineer&apos;s true value is architectural vision, runtime determinism, and an uncompromising obsession with ground truth.
          </p>
        </div>

        {/* Grid: 4 Core Principles + Authentic Workspace Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: 4 Core Tenets */}
          <div className="lg:col-span-7 space-y-6">
            {PORTFOLIO_DATA.philosophies.map((item) => (
              <div
                key={item.num}
                className="p-6 rounded-xl bg-[#111318]/60 border border-[#D9DDE4]/10 hover:border-[#D9DDE4]/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono-tech text-xs text-emerald-400 font-semibold">
                    [{item.num}]
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-[#D9DDE4] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-[#A1A1AA] leading-relaxed font-light pl-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Sagar Working at Workspace with HUD Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Corner HUD marks */}
              <div className="absolute -top-3 -left-3 w-5 h-5 border-t-2 border-l-2 border-[#D9DDE4]/40 z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-5 h-5 border-b-2 border-r-2 border-[#D9DDE4]/40 z-20 pointer-events-none" />

              <div className="relative rounded-xl overflow-hidden border border-[#D9DDE4]/20 bg-[#111318] shadow-[0_20px_50px_rgba(0,0,0,0.85)] group">
                <div className="aspect-[4/5] relative w-full overflow-hidden">
                  <Image
                    src="/images/sagar-laptop-coding.jpg"
                    alt="Sagar Kumar engineering systems and AI pipelines"
                    fill
                    className="object-cover object-center filter grayscale contrast-110 brightness-95 group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                </div>

                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black via-black/80 to-transparent font-mono-tech">
                  <div className="text-[10px] text-emerald-400 mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    ENGINEERING IN SESSION
                  </div>
                  <div className="font-display text-sm font-semibold text-white">
                    Sagar Kumar @ Systems Terminal
                  </div>
                  <div className="text-[11px] text-[#A1A1AA]">
                    Bhopal, India · LNCT Excellence &apos;27
                  </div>
                </div>
              </div>

              {/* Terminal Quote Box */}
              <div className="mt-4 p-4 rounded-lg bg-[#0E1015] border border-[#D9DDE4]/10 font-mono-tech text-xs text-[#777B84]">
                <span className="text-[#D9DDE4]">&ldquo;</span>
                Evidence matters more than assumptions. An AI system is only as truthful as the verification pipeline feeding it.
                <span className="text-[#D9DDE4]">&rdquo;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
