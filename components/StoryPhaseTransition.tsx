"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Terminal, Activity, ChevronDown } from "lucide-react";

interface StoryPhaseTransitionProps {
  phaseNumber: string;
  phaseCode: string;
  actTitle: string;
  narrativeQuote: string;
  nextChapterId?: string;
  accentColor?: "emerald" | "cyan" | "chrome";
}

export default function StoryPhaseTransition({
  phaseNumber,
  phaseCode,
  actTitle,
  narrativeQuote,
  nextChapterId,
  accentColor = "emerald",
}: StoryPhaseTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "100%", "100%"]);
  const glowOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.3, 1, 0.4]);
  const scaleNode = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.8, 1.15, 0.9]);

  const colorStyles = {
    emerald: {
      text: "text-emerald-400",
      border: "border-emerald-500/30",
      bg: "bg-emerald-500/10",
      glow: "shadow-[0_0_25px_rgba(16,185,129,0.3)]",
      line: "from-transparent via-emerald-400 to-transparent",
    },
    cyan: {
      text: "text-cyan-400",
      border: "border-cyan-500/30",
      bg: "bg-cyan-500/10",
      glow: "shadow-[0_0_25px_rgba(56,189,248,0.3)]",
      line: "from-transparent via-cyan-400 to-transparent",
    },
    chrome: {
      text: "text-[#D9DDE4]",
      border: "border-[#D9DDE4]/30",
      bg: "bg-[#D9DDE4]/10",
      glow: "shadow-[0_0_25px_rgba(217,221,228,0.2)]",
      line: "from-transparent via-[#D9DDE4] to-transparent",
    },
  }[accentColor];

  const handleScrollToNext = () => {
    if (nextChapterId) {
      const el = document.getElementById(nextChapterId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-[#050505] via-[#08090D] to-[#050505] flex flex-col items-center justify-center select-none"
    >
      {/* Background Neural Circuit Lines */}
      <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none" />
      <div className="absolute inset-x-0 h-px top-0 bg-gradient-to-r from-transparent via-[#D9DDE4]/20 to-transparent" />
      <div className="absolute inset-x-0 h-px bottom-0 bg-gradient-to-r from-transparent via-[#D9DDE4]/20 to-transparent" />

      {/* Vertical Quantum Conduit Line */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-white/[0.04]">
        <motion.div
          style={{ height: lineHeight }}
          className={`w-full bg-gradient-to-b ${colorStyles.line}`}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        
        {/* Animated Central Node Gateway */}
        <motion.div
          style={{ scale: scaleNode, opacity: glowOpacity }}
          className={`mb-6 p-3 rounded-full bg-[#0E1117] border ${colorStyles.border} ${colorStyles.glow} backdrop-blur-xl relative group`}
        >
          <div className="relative flex items-center justify-center">
            <span className={`w-3 h-3 rounded-full animate-ping absolute ${colorStyles.bg}`} />
            <Activity className={`w-5 h-5 ${colorStyles.text}`} />
          </div>

          {/* Micro HUD Reticles */}
          <div className="absolute -top-1.5 -left-1.5 w-2 h-2 border-t border-l border-[#D9DDE4]/60" />
          <div className="absolute -bottom-1.5 -right-1.5 w-2 h-2 border-b border-r border-[#D9DDE4]/60" />
        </motion.div>

        {/* Phase Meta Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#111318]/90 border border-[#D9DDE4]/15 mb-4 shadow-lg backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono-tech text-[11px] text-[#A1A1AA] tracking-wider uppercase">
            PHASE {phaseNumber} {"//"} {phaseCode}
          </span>
          <span className="text-[#777B84]">&bull;</span>
          <span className="font-mono-tech text-[10px] text-emerald-400 font-semibold tracking-widest uppercase">
            {actTitle}
          </span>
        </div>

        {/* Story Narrative Quote */}
        <blockquote className="max-w-2xl text-lg sm:text-2xl font-display font-medium text-[#F5F5F5] tracking-tight leading-snug sm:leading-relaxed mb-6">
          &ldquo;{narrativeQuote}&rdquo;
        </blockquote>

        {/* Micro Telemetry Teleport Button */}
        {nextChapterId && (
          <button
            onClick={handleScrollToNext}
            className="group mt-2 inline-flex items-center gap-2 font-mono-tech text-[11px] text-[#777B84] hover:text-white transition-colors cursor-pointer"
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span className="tracking-wider">TRANSITIONING DOWN STREAM</span>
            <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform text-emerald-400" />
          </button>
        )}
      </div>

      {/* Ambient Side Telemetry Markers */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 font-mono-tech text-[9px] text-[#777B84]/50 hidden lg:block tracking-widest uppercase rotate-90 origin-left">
        SYNAPSE_SIGNAL // 0x{phaseNumber}F4
      </div>
      <div className="absolute right-6 top-1/2 -translate-y-1/2 font-mono-tech text-[9px] text-[#777B84]/50 hidden lg:block tracking-widest uppercase -rotate-90 origin-right">
        STREAM_LATENCY // 0.02MS
      </div>
    </div>
  );
}
