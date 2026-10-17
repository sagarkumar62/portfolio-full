"use client";

import { Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/portfolioData";

export default function JourneyTimeline() {
  return (
    <section
      id="journey"
      className="relative min-h-screen w-full py-28 px-4 sm:px-6 lg:px-8 bg-[#050505] border-t border-[#D9DDE4]/10"
    >
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Chapter Header Tracker */}
        <div className="flex items-center justify-between pb-6 border-b border-[#D9DDE4]/10 mb-12">
          <div className="flex items-center gap-3">
            <span className="font-mono-tech text-xs text-[#777B84]">
              CHAPTER // 04
            </span>
            <span className="w-1 h-1 rounded-full bg-[#777B84]" />
            <span className="font-mono-tech text-xs text-[#D9DDE4] tracking-widest uppercase">
              PROFESSIONAL JOURNEY
            </span>
          </div>
          <div className="font-mono-tech text-xs text-[#777B84] hidden sm:block">
            CHRONOLOGY // MONTH-AND-YEAR VERIFIED
          </div>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-16">
          <div className="font-mono-tech text-xs text-[#777B84] mb-3 tracking-widest">
            CAREER MILESTONES
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            ENGINEERING IN <span className="text-chrome">PRACTICE</span>.
          </h2>
          <p className="mt-4 text-[#A1A1AA] text-base sm:text-lg font-light leading-relaxed">
            From frontend interfaces and component integration to full-stack blog platforms and autonomous agent extraction pipelines.
          </p>
        </div>

        {/* Luminous Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l border-[#D9DDE4]/20 space-y-12">
          {PORTFOLIO_DATA.experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline luminous node */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-300 group-hover:scale-125 ${
                  exp.isCurrent
                    ? "bg-emerald-400 border-white shadow-[0_0_15px_#10B981]"
                    : "bg-[#050505] border-[#D9DDE4]/40"
                }`}
              />

              {/* Milestone Card */}
              <div
                className={`p-6 sm:p-8 rounded-xl border transition-all duration-300 ${
                  exp.isCurrent
                    ? "bg-[#161922] border-[#D9DDE4]/30 shadow-[0_0_30px_rgba(217,221,228,0.06)]"
                    : "bg-[#111318]/60 border-[#D9DDE4]/10 hover:border-[#D9DDE4]/25"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="font-mono-tech text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          ACTIVE ROLE
                        </span>
                      )}
                    </div>
                    <div className="font-mono-tech text-sm text-[#D9DDE4] font-medium mt-1">
                      {exp.organization}
                    </div>
                  </div>

                  <div className="font-mono-tech text-xs text-[#777B84] flex flex-col sm:items-end">
                    <span className="flex items-center gap-1.5 text-[#D9DDE4]">
                      <Calendar className="w-3.5 h-3.5 text-[#777B84]" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-[#777B84]" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="font-mono-tech text-xs text-cyan-400/90 mb-4">
                  {exp.domain}
                </div>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li
                      key={hIdx}
                      className="text-xs sm:text-sm text-[#A1A1AA] font-light flex items-start gap-2.5 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#D9DDE4]/50 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-[#D9DDE4]/10">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono-tech text-[11px] px-2.5 py-1 rounded bg-[#0A0B0E] text-[#D9DDE4] border border-[#D9DDE4]/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
