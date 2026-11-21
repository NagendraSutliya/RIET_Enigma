import React, { useEffect } from "react";
import T2Navbar from "./components/T2Navbar";
import T2Hero from "./components/T2Hero";
import T2Moments from "./components/T2Moments";
import T2Campaign from "./components/T2Campaign";
import T2Rules from "./components/T2Rules";
import T2Tracks from "./components/T2Tracks";
import T2Timeline from "./components/T2Timeline";
import T2Speakers from "./components/T2Speakers";
import T2Prizes from "./components/T2Prizes";
import T2Sponsors from "./components/T2Sponsors";
import T2Venue from "./components/T2Venue";
import T2FAQ from "./components/T2FAQ";
import T2Footer from "./components/T2Footer";
import RocketScroll from "@/components/RocketScroll";
import { LeftSideDecoration, RightSideDecoration } from "@/components/SideDecorations";

export default function Template2Home() {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();
      const currentSequence = (window as any).konamiSequence || "";
      const newSequence = currentSequence + key;
      
      if ("ENIGMA20".startsWith(newSequence) || "ENIGMA2".startsWith(newSequence)) {
        (window as any).konamiSequence = newSequence;

        if (newSequence === "ENIGMA20" || newSequence === "ENIGMA2") {
          alert("🚀 Cyber Easter Egg Unlocked! Terminal Access Granted to ENIGMA2.0 Secret Protocol! ⚡");
          (window as any).konamiSequence = "";
        }
      } else {
        (window as any).konamiSequence = "";
      }
    };

    window.addEventListener("keypress", handleKeyPress);
    return () => window.removeEventListener("keypress", handleKeyPress);
  }, []);

  return (
    <div className="min-h-screen bg-[#030604] text-white selection:bg-emerald-500/30 selection:text-emerald-300 font-sans relative antialiased overflow-x-hidden">
      
      {/* Background Matrix Circuit Grid */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff8808_1px,transparent_1px),linear-gradient(to_bottom,#00ff8808_1px,transparent_1px)] bg-[size:40px_40px] opacity-70" />
        <div className="absolute top-0 left-1/4 w-[700px] h-[500px] bg-emerald-600/10 blur-[170px] rounded-full" />
        <div className="absolute top-[40%] right-10 w-[600px] h-[550px] bg-cyan-600/10 blur-[170px] rounded-full" />
      </div>

      {/* Floating Rocket Scroll Indicator */}
      <RocketScroll />

      {/* Side Decorations Inspired by Template 1 */}
      <LeftSideDecoration />
      <RightSideDecoration />

      <div className="relative z-10">
        {/* Floating Capsule Header Navbar with 10-Item Scrollspy */}
        <T2Navbar />

        <main>
          {/* Section 1: Home & Hero */}
          <div id="home">
            <T2Hero />
          </div>

          {/* Section 2: Event Moments (5 High-Res Photos) */}
          <div id="moments">
            <T2Moments />
          </div>

          {/* Section 3: Official Creator Campaign */}
          <div id="campaign">
            <T2Campaign />
          </div>

          {/* Section 4: Official Rules & Regulations */}
          <div id="rules">
            <T2Rules />
          </div>

          {/* Section 5: Hackathon Challenge Tracks & Bounties */}
          <div id="tracks">
            <T2Tracks />
          </div>

          {/* Section 6: 24-Hour Laser Event Timeline */}
          <div id="schedule">
            <T2Timeline />
          </div>

          {/* Section 7: Keynote Speakers & Mentors */}
          <div id="speakers">
            <T2Speakers />
          </div>

          {/* Section 8: Grand Prizes & Podium */}
          <div id="prizes">
            <T2Prizes />
          </div>

          {/* Section 9: Sponsoring Partners & Ecosystem */}
          <div id="sponsors">
            <T2Sponsors />
          </div>

          {/* RIET Campus Venue & Logistics */}
          <T2Venue />

          {/* Section 10: Frequently Asked Questions */}
          <div id="faq">
            <T2FAQ />
          </div>
        </main>

        {/* Neo-Matrix Modern Footer */}
        <T2Footer />
      </div>
    </div>
  );
}
