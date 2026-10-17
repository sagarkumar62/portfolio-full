"use client";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
  Github,
  Linkedin,
  Instagram,
  ArrowUpRight,
  Send,
  Terminal,
  Copy,
  Check,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/portfolioData";
import { EMAILJS_SERVICE_ID } from "@/config/emailjs";
import { EMAILJS_TEMPLATE_ID } from "@/config/emailjsTemplate";
import { EMAILJS_USER_ID } from "@/config/emailjsUser";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    const serviceId = EMAILJS_SERVICE_ID || process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const templateId = EMAILJS_TEMPLATE_ID || process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
    const userId = EMAILJS_USER_ID || process.env.NEXT_PUBLIC_EMAILJS_USER_ID || "";

    if (!serviceId || !templateId || !userId) {
      window.location.href = `mailto:${PORTFOLIO_DATA.personal.email}?subject=Project Collaboration Inquiry`;
      setLoading(false);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, formRef.current!, userId)
      .then(() => {
        setSuccess(true);
        setLoading(false);
        formRef.current?.reset();
      })
      .catch((err) => {
        console.error("EmailJS transmission error:", err);
        setError("Transmission failed. Please dispatch directly via pandeysagar7991@gmail.com");
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full py-28 px-4 sm:px-6 lg:px-8 bg-[#050505] border-t border-[#D9DDE4]/10 flex flex-col justify-between"
    >
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto">
        {/* Chapter Header Tracker */}
        <div className="flex items-center justify-between pb-6 border-b border-[#D9DDE4]/10 mb-12">
          <div className="flex items-center gap-3">
            <span className="font-mono-tech text-xs text-[#777B84]">
              CHAPTER // 07
            </span>
            <span className="w-1 h-1 rounded-full bg-[#777B84]" />
            <span className="font-mono-tech text-xs text-[#D9DDE4] tracking-widest uppercase">
              ESTABLISH CONTACT
            </span>
          </div>
          <div className="font-mono-tech text-xs text-emerald-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>TRANSMISSION LINE ACTIVE</span>
          </div>
        </div>

        {/* Section Headline */}
        <div className="max-w-4xl mb-16">
          <div className="font-mono-tech text-xs text-[#777B84] mb-3 tracking-widest">
            DIRECT TRANSMISSION
          </div>
          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[0.95]">
            LET&apos;S BUILD
            <br />
            <span className="text-chrome">WHAT&apos;S NEXT.</span>
          </h2>
          <p className="mt-6 text-[#A1A1AA] text-lg sm:text-xl font-light max-w-2xl leading-relaxed">
            Have an interesting engineering problem, an applied AI opportunity, or an ambition to build high-performance software? Let&apos;s connect.
          </p>
        </div>

        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Transmission Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Copy Email Card */}
            <div className="p-6 rounded-xl bg-[#111318]/70 border border-[#D9DDE4]/20 shadow-xl">
              <div className="font-mono-tech text-[10px] text-[#777B84] uppercase tracking-wider mb-2">
                DIRECT ELECTRONIC MAIL
              </div>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="font-mono-tech text-sm sm:text-base text-white hover:text-[#D9DDE4] transition-colors break-all"
                >
                  {PORTFOLIO_DATA.personal.email}
                </a>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded bg-[#161922] border border-[#D9DDE4]/20 text-[#D9DDE4] hover:text-white transition-colors cursor-pointer shrink-0"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Verified Public Profile Links */}
            <div className="space-y-3">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#111318]/50 border border-[#D9DDE4]/10 hover:border-[#D9DDE4]/40 hover:bg-[#161922] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-[#D9DDE4]" />
                  <div>
                    <div className="font-display text-sm font-semibold text-white">GitHub</div>
                    <div className="font-mono-tech text-[11px] text-[#777B84]">github.com/sagarkumar62</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#777B84] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#111318]/50 border border-[#D9DDE4]/10 hover:border-[#D9DDE4]/40 hover:bg-[#161922] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-[#D9DDE4]" />
                  <div>
                    <div className="font-display text-sm font-semibold text-white">LinkedIn</div>
                    <div className="font-mono-tech text-[11px] text-[#777B84]">linkedin.com/in/sagar-kumarcs</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#777B84] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#111318]/50 border border-[#D9DDE4]/10 hover:border-[#D9DDE4]/40 hover:bg-[#161922] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Instagram className="w-5 h-5 text-[#D9DDE4]" />
                  <div>
                    <div className="font-display text-sm font-semibold text-white">Instagram</div>
                    <div className="font-mono-tech text-[11px] text-[#777B84]">instagram.com/sagar_r72</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#777B84] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#161922] border border-[#D9DDE4]/30 hover:border-[#D9DDE4]/60 transition-all flex items-center justify-between group shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <Terminal className="w-5 h-5 text-emerald-400" />
                  <div>
                    <div className="font-display text-sm font-semibold text-white">Official Resume</div>
                    <div className="font-mono-tech text-[11px] text-emerald-400">Download Verified PDF</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Transmission Terminal */}
          <div className="lg:col-span-7 bg-[#111318]/70 border border-[#D9DDE4]/20 rounded-2xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
            
            {/* Corner reticles */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-[#D9DDE4]/40" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-[#D9DDE4]/40" />
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-[#D9DDE4]/40" />
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-[#D9DDE4]/40" />

            <div className="flex items-center justify-between pb-4 border-b border-[#D9DDE4]/10 mb-6">
              <span className="font-mono-tech text-xs text-[#777B84] flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                TRANSMISSION FORM // DISPATCH MESSAGE
              </span>
              <span className="font-mono-tech text-[10px] text-emerald-400">ONLINE</span>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono-tech text-xs text-[#777B84] mb-1.5 uppercase">
                    Your Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Alex Vance"
                    className="w-full bg-[#0A0B0E] border border-[#D9DDE4]/15 rounded-lg px-4 py-2.5 text-white font-mono-tech text-sm focus:outline-none focus:border-[#D9DDE4]/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-mono-tech text-xs text-[#777B84] mb-1.5 uppercase">
                    Your Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="alex@domain.com"
                    className="w-full bg-[#0A0B0E] border border-[#D9DDE4]/15 rounded-lg px-4 py-2.5 text-white font-mono-tech text-sm focus:outline-none focus:border-[#D9DDE4]/60 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono-tech text-xs text-[#777B84] mb-1.5 uppercase">
                  Subject / Mission
                </label>
                <input
                  name="subject"
                  type="text"
                  required
                  placeholder="Full-Stack Engineering / AI Pipeline Collaboration"
                  className="w-full bg-[#0A0B0E] border border-[#D9DDE4]/15 rounded-lg px-4 py-2.5 text-white font-mono-tech text-sm focus:outline-none focus:border-[#D9DDE4]/60 transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono-tech text-xs text-[#777B84] mb-1.5 uppercase">
                  Message Payload
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Describe your project, team opportunity, or inquiry..."
                  className="w-full bg-[#0A0B0E] border border-[#D9DDE4]/15 rounded-lg px-4 py-2.5 text-white font-mono-tech text-sm focus:outline-none focus:border-[#D9DDE4]/60 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-lg bg-[#D9DDE4] text-[#050505] font-mono-tech text-xs font-semibold hover:bg-white transition-all shadow-[0_0_20px_rgba(217,221,228,0.2)] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{loading ? "DISPATCHING PACKET..." : "TRANSMIT MESSAGE"}</span>
              </button>

              {success && (
                <div className="p-3 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono-tech text-xs text-center animate-in fade-in">
                  Transmission dispatched successfully. I will respond promptly.
                </div>
              )}

              {error && (
                <div className="p-3 rounded bg-red-500/10 border border-red-500/30 text-red-400 font-mono-tech text-xs text-center animate-in fade-in">
                  {error}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Cinematic Minimal Footer */}
      <footer className="relative z-10 max-w-7xl mx-auto w-full pt-16 mt-16 border-t border-[#D9DDE4]/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-tech text-xs text-[#777B84]">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded bg-[#111318] border border-[#D9DDE4]/20 flex items-center justify-center text-[10px] text-[#D9DDE4] font-bold">
            SK
          </div>
          <span>SAGAR KUMAR // THE HUMAN BEHIND THE MACHINE</span>
        </div>

        <div className="flex items-center gap-6">
          <span>{PORTFOLIO_DATA.personal.coordinates}</span>
          <span className="text-emerald-400">STATUS: NOMINAL</span>
        </div>
      </footer>
    </section>
  );
}
