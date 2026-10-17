"use client";

import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import { ArrowLeft } from "lucide-react";

export default function ConnectRoute() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5]">
      <div className="pt-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono-tech text-xs text-[#777B84] hover:text-white transition-colors py-2 px-3 rounded border border-[#D9DDE4]/15 bg-[#111318]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO HOMEPAGE</span>
        </Link>
      </div>
      <ContactSection />
    </div>
  );
}
