"use client";

import { GraduationCap, Award, CheckCircle } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/portfolioData";

export default function AcademicFoundation() {
  return (
    <section
      id="education"
      className="relative min-h-screen w-full py-28 px-4 sm:px-6 lg:px-8 bg-[#050505] border-t border-[#D9DDE4]/10"
    >
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Chapter Header Tracker */}
        <div className="flex items-center justify-between pb-6 border-b border-[#D9DDE4]/10 mb-12">
          <div className="flex items-center gap-3">
            <span className="font-mono-tech text-xs text-[#777B84]">
              CHAPTER // 06
            </span>
            <span className="w-1 h-1 rounded-full bg-[#777B84]" />
            <span className="font-mono-tech text-xs text-[#D9DDE4] tracking-widest uppercase">
              ACADEMIC FOUNDATION
            </span>
          </div>
          <div className="font-mono-tech text-xs text-[#777B84] hidden sm:block">
            ACCREDITATION & COMPETITIONS
          </div>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-16">
          <div className="font-mono-tech text-xs text-[#777B84] mb-3 tracking-widest">
            FORMAL EDUCATION & PROVEN RECORD
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            ACADEMIC <span className="text-chrome">GROUNDING</span>.
          </h2>
          <p className="mt-4 text-[#A1A1AA] text-base sm:text-lg font-light leading-relaxed">
            Verified academic performance at LNCT Excellence, secondary schooling results, and technical competition participation.
          </p>
        </div>

        {/* Academic Records Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {PORTFOLIO_DATA.education.map((edu, idx) => (
            <div
              key={edu.degree}
              className={`p-6 sm:p-8 rounded-xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                idx === 0
                  ? "bg-[#161922] border-[#D9DDE4]/35 shadow-[0_0_30px_rgba(217,221,228,0.08)]"
                  : "bg-[#111318]/60 border-[#D9DDE4]/10 hover:border-[#D9DDE4]/25"
              }`}
            >
              {/* Corner reticle */}
              <div className="absolute top-2 right-2 font-mono-tech text-[10px] text-[#777B84]">
                REC_0{idx + 1}
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 rounded bg-[#1F2430] text-[#D9DDE4] border border-[#D9DDE4]/15">
                    <GraduationCap className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="font-mono-tech text-xs text-[#777B84]">
                    {edu.timeline}
                  </span>
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                  {edu.degree}
                </h3>

                <div className="font-mono-tech text-xs text-[#D9DDE4] mb-4">
                  {edu.institution}
                </div>

                {edu.specialization && (
                  <p className="text-xs text-[#777B84] font-light mb-6">
                    {edu.specialization}
                  </p>
                )}
              </div>

              {/* Score Metric Card */}
              <div className="pt-4 border-t border-[#D9DDE4]/10 flex items-center justify-between">
                <span className="font-mono-tech text-xs text-[#777B84]">
                  OFFICIAL {edu.scoreType}
                </span>
                <span className="font-display text-2xl font-bold text-white tracking-tight">
                  {edu.score}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Achievements & Extracurriculars */}
        <div className="bg-[#111318]/60 border border-[#D9DDE4]/15 rounded-xl p-6 sm:p-8 backdrop-blur-md">
          <div className="flex items-center justify-between pb-4 border-b border-[#D9DDE4]/10 mb-6">
            <div className="flex items-center gap-2 font-mono-tech text-xs text-[#D9DDE4]">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>VERIFIED COMPETITIONS & CODING MILESTONES</span>
            </div>
            <span className="font-mono-tech text-[10px] text-[#777B84]">
              EVIDENCE VERIFIED
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PORTFOLIO_DATA.achievements.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-[#0E1015] border border-[#D9DDE4]/10 hover:border-[#D9DDE4]/25 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono-tech text-[10px] text-emerald-400">
                    {item.year}
                  </span>
                  <CheckCircle className="w-3.5 h-3.5 text-[#777B84]" />
                </div>
                <div className="font-display text-sm font-semibold text-white mb-1.5">
                  {item.title}
                </div>
                <p className="text-xs text-[#777B84] font-light leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
