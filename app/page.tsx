"use client";

import EnterTheVoid from "@/components/EnterTheVoid";
import IdentityChapter from "@/components/IdentityChapter";
import EngineeringCore from "@/components/EngineeringCore";
import ProjectShowcase from "@/components/ProjectShowcase";
import JourneyTimeline from "@/components/JourneyTimeline";
import PhilosophyChapter from "@/components/PhilosophyChapter";
import AcademicFoundation from "@/components/AcademicFoundation";
import ContactSection from "@/components/ContactSection";
import StoryPhaseTransition from "@/components/StoryPhaseTransition";
import AmbientCyberSpace from "@/components/AmbientCyberSpace";
import StoryPhaseHUD from "@/components/StoryPhaseHUD";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-[#F5F5F5] selection:bg-[#D9DDE4]/20 selection:text-white overflow-x-hidden">
      {/* Ambient Sci-Fi Depth Particles (Lightweight GPU Canvas) */}
      <AmbientCyberSpace />

      {/* Futuristic Floating Storyline Telemetry HUD */}
      <StoryPhaseHUD />

      {/* Act 00: Enter The Void — Awakening & Code Splitting */}
      <EnterTheVoid />

      {/* Phase Transition 00 -> 01 */}
      <StoryPhaseTransition
        phaseNumber="01"
        phaseCode="BIOLOGICAL_ORIGIN"
        actTitle="THE HUMAN BEHIND THE MACHINE"
        narrativeQuote="Before neural weights converge and before servers scale, there is human curiosity. To understand the software, meet the mind that conceived it."
        nextChapterId="identity"
        accentColor="emerald"
      />

      {/* Act 01: The Identity — Sagar's Origin & Dual Competence */}
      <IdentityChapter />

      {/* Phase Transition 01 -> 02 */}
      <StoryPhaseTransition
        phaseNumber="02"
        phaseCode="SYNAPSE_CONVERGENCE"
        actTitle="THE ARCHITECTURAL FORGE"
        narrativeQuote="Raw intuition is chaotic. Engineering is the discipline of structuring chaos into high-throughput, deterministic systems that think and endure."
        nextChapterId="core"
        accentColor="cyan"
      />

      {/* Act 02: The Engineering Core — Connected 5-Sector Machine */}
      <EngineeringCore />

      {/* Phase Transition 02 -> 03 */}
      <StoryPhaseTransition
        phaseNumber="03"
        phaseCode="CRUCIBLE_OF_EXECUTION"
        actTitle="BATTLE-TESTED ARTIFACTS"
        narrativeQuote="Theory means nothing until tested in the crucible of production: 3,556+ harvested records with unbroken audit trails, and vector retrieval grounding LLMs in truth."
        nextChapterId="projects"
        accentColor="chrome"
      />

      {/* Act 03: Selected Project Case Studies — Tangible Missions */}
      <ProjectShowcase />

      {/* Phase Transition 03 -> 04 */}
      <StoryPhaseTransition
        phaseNumber="04"
        phaseCode="TEMPORAL_ACCELERATION"
        actTitle="THE CHRONOLOGY OF MASTERY"
        narrativeQuote="Growth is not accidental; it is engineered through sleepless terminal sessions, shipped features, and solving progressively harder problems every quarter."
        nextChapterId="journey"
        accentColor="emerald"
      />

      {/* Act 04: Professional Journey & Timeline */}
      <JourneyTimeline />

      {/* Phase Transition 04 -> 05 */}
      <StoryPhaseTransition
        phaseNumber="05"
        phaseCode="CONSCIOUSNESS_PROTOCOL"
        actTitle="THE FIRST PRINCIPLES"
        narrativeQuote="Frameworks depreciate and hype cycles dissolve. What endures is the creed: verifiability over assumptions, architecture over syntax, truth over hallucination."
        nextChapterId="philosophy"
        accentColor="cyan"
      />

      {/* Act 05: Engineering Philosophy & Doctrine */}
      <PhilosophyChapter />

      {/* Phase Transition 05 -> 06 */}
      <StoryPhaseTransition
        phaseNumber="06"
        phaseCode="ACADEMIC_FOUNDATION"
        actTitle="THE THEORETICAL BEDROCK"
        narrativeQuote="The deeper the mathematical foundation in operating systems, database internals, and algorithms, the taller the machine can reach without faltering."
        nextChapterId="education"
        accentColor="chrome"
      />

      {/* Act 06: Academic Foundation & Achievements */}
      <AcademicFoundation />

      {/* Phase Transition 06 -> 07 */}
      <StoryPhaseTransition
        phaseNumber="07"
        phaseCode="UPLINK_INITIALIZATION"
        actTitle="INITIATE DIRECT TRANSMISSION"
        narrativeQuote="The architecture is idle. The frequency is open. Let us collaborate and engineer what comes next."
        nextChapterId="contact"
        accentColor="emerald"
      />

      {/* Act 07: Establish Transmission & Terminal */}
      <ContactSection />
    </main>
  );
}
