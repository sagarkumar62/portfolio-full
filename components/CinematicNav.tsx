"use client";

import { useState, useEffect } from "react";
import { Terminal, Menu, X, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/portfolioData";

export default function CinematicNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeChapter, setActiveChapter] = useState("void");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = PORTFOLIO_DATA.narrativeChapters.map((ch) => ch.id);
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveChapter(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#050505]/85 backdrop-blur-md border-b border-[#D9DDE4]/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Telemetry */}
            <button
              onClick={() => scrollTo("void")}
              className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D9DDE4]"
            >
              <div className="w-9 h-9 rounded-sm bg-[#111318] border border-[#D9DDE4]/25 flex items-center justify-center relative overflow-hidden group-hover:border-[#D9DDE4]/60 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="font-mono-tech text-xs font-semibold text-[#D9DDE4] tracking-wider">
                  SK
                </span>
                <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping opacity-75" />
                <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 bg-emerald-400 rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-sm font-semibold tracking-wider text-white flex items-center gap-2">
                  SAGAR KUMAR
                  <span className="hidden sm:inline-block text-[10px] font-mono-tech px-1.5 py-0.2 bg-[#161922] text-[#A1A1AA] border border-[#D9DDE4]/15 rounded">
                    MERN + AI
                  </span>
                </span>
                <span className="font-mono-tech text-[10px] text-[#777B84] tracking-tight">
                  SYS.STATUS // NOMINAL
                </span>
              </div>
            </button>

            {/* Desktop Navigation Chapters */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#111318]/70 border border-[#D9DDE4]/10 rounded-full px-3 py-1.5 backdrop-blur-lg">
              {PORTFOLIO_DATA.narrativeChapters.map((ch) => {
                const isActive = activeChapter === ch.id;
                return (
                  <button
                    key={ch.id}
                    onClick={() => scrollTo(ch.id)}
                    className={`font-mono-tech text-xs px-3 py-1.5 rounded-full transition-all duration-300 relative ${
                      isActive
                        ? "text-white bg-[#1F2430] border border-[#D9DDE4]/25 shadow-sm"
                        : "text-[#777B84] hover:text-[#D9DDE4] hover:bg-white/[0.03]"
                    }`}
                  >
                    <span className="opacity-40 mr-1">{ch.num}</span>
                    {ch.label}
                  </button>
                );
              })}
            </nav>

            {/* Right Quick Telemetry & Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={PORTFOLIO_DATA.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-tech text-xs px-3.5 py-1.5 rounded border border-[#D9DDE4]/20 text-[#D9DDE4] hover:text-white hover:border-[#D9DDE4]/60 hover:bg-white/[0.04] transition-all flex items-center gap-1.5 group"
              >
                <span>RESUME</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#777B84] group-hover:text-white transition-colors" />
              </a>

              <button
                onClick={() => scrollTo("contact")}
                className="font-mono-tech text-xs px-4 py-1.5 rounded bg-[#D9DDE4] text-[#050505] font-semibold hover:bg-white transition-all shadow-[0_0_15px_rgba(217,221,228,0.15)] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-1.5"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>INIT_CONTACT</span>
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={() => scrollTo("contact")}
                className="font-mono-tech text-[11px] px-2.5 py-1 rounded bg-[#D9DDE4] text-[#050505] font-semibold"
              >
                CONTACT
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded bg-[#111318] border border-[#D9DDE4]/20 text-[#D9DDE4] focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-24 px-6 flex flex-col justify-between pb-8 lg:hidden animate-in fade-in duration-200">
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-4 border-b border-[#D9DDE4]/10 mb-6">
              <div className="font-mono-tech text-xs text-[#777B84]">
                NAVIGATION TELEMETRY
              </div>
              <div className="flex items-center gap-1.5 font-mono-tech text-[10px] text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ONLINE
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2">
              {PORTFOLIO_DATA.narrativeChapters.map((ch) => (
                <button
                  key={ch.id}
                  onClick={() => scrollTo(ch.id)}
                  className={`flex items-center justify-between p-3 rounded border text-left font-mono-tech text-sm transition-colors ${
                    activeChapter === ch.id
                      ? "bg-[#161922] border-[#D9DDE4]/40 text-white"
                      : "bg-[#111318]/50 border-[#D9DDE4]/10 text-[#A1A1AA] hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[#777B84] text-xs">[{ch.num}]</span>
                    <span>{ch.title}</span>
                  </div>
                  <span className="text-[10px] text-[#777B84]">{ch.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-[#D9DDE4]/10 space-y-3">
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded border border-[#D9DDE4]/25 text-[#D9DDE4] font-mono-tech text-xs flex items-center justify-center gap-2 hover:bg-white/[0.04]"
            >
              <span>ACCESS VERIFIED RESUME</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <div className="font-mono-tech text-[10px] text-center text-[#777B84]">
              {PORTFOLIO_DATA.personal.coordinates}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
