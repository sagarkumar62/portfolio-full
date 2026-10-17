"use client";

import CinematicNav from "@/components/CinematicNav";
import EnterTheVoid from "@/components/EnterTheVoid";
import IdentityChapter from "@/components/IdentityChapter";
import EngineeringCore from "@/components/EngineeringCore";
import ProjectShowcase from "@/components/ProjectShowcase";
import JourneyTimeline from "@/components/JourneyTimeline";
import PhilosophyChapter from "@/components/PhilosophyChapter";
import AcademicFoundation from "@/components/AcademicFoundation";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-[#F5F5F5] selection:bg-[#D9DDE4]/20 selection:text-white overflow-x-hidden">
      {/* HUD Navigation */}
      <CinematicNav />

      {/* Chapter 00: Enter The Void */}
      <EnterTheVoid />

      {/* Chapter 01: The Identity */}
      <IdentityChapter />

      {/* Chapter 02: The Engineering Core */}
      <EngineeringCore />

      {/* Chapter 03: Selected Project Case Studies */}
      <ProjectShowcase />

      {/* Chapter 04: Professional Journey & Timeline */}
      <JourneyTimeline />

      {/* Chapter 05: Engineering Philosophy */}
      <PhilosophyChapter />

      {/* Chapter 06: Academic Foundation & Achievements */}
      <AcademicFoundation />

      {/* Chapter 07: Establish Contact & Terminal */}
      <ContactSection />
    </main>
  );
}
