"use client";

import Link from "next/link";
import ProjectShowcase from "@/components/ProjectShowcase";
import { ArrowLeft } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/portfolioData";

export default function ProjectsRoute() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5]">
      <div className="pt-12 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono-tech text-xs text-[#777B84] hover:text-white transition-colors py-2 px-3 rounded border border-[#D9DDE4]/15 bg-[#111318]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO HOMEPAGE</span>
        </Link>
      </div>
      <ProjectShowcase />
      <footer className="max-w-7xl mx-auto px-4 py-12 border-t border-[#D9DDE4]/10 text-center font-mono-tech text-xs text-[#777B84]">
        {PORTFOLIO_DATA.personal.coordinates} &bull; ALL CASE STUDIES VERIFIED
      </footer>
    </div>
  );
}
