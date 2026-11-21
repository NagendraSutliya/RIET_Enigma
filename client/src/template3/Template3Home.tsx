import React from "react";
import T3Navbar from "./components/T3Navbar";
import T3Hero from "./components/T3Hero";
import T3Moments from "./components/T3Moments";
import T3Campaign from "./components/T3Campaign";
import T3Rules from "./components/T3Rules";
import T3Tracks from "./components/T3Tracks";
import T3Timeline from "./components/T3Timeline";
import T3Speakers from "./components/T3Speakers";
import T3Prizes from "./components/T3Prizes";
import T3Sponsors from "./components/T3Sponsors";
import T3Venue from "./components/T3Venue";
import T3FAQ from "./components/T3FAQ";
import T3Footer from "./components/T3Footer";

export default function Template3Home() {
  return (
    <div className="min-h-screen bg-[#030612] text-white selection:bg-cyan-500/30 selection:text-cyan-200 font-sans relative antialiased overflow-x-hidden">
      
      {/* Neo-Kinetic Ambient Grid & Mesh Lighting */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[800px] h-[550px] bg-cyan-600/10 blur-[160px] rounded-full" />
        <div className="absolute top-[35%] right-10 w-[700px] h-[600px] bg-violet-600/10 blur-[170px] rounded-full" />
        <div className="absolute bottom-[20%] left-10 w-[600px] h-[500px] bg-fuchsia-600/10 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10">
        {/* Floating Capsule Header Navbar with 10-Item Scrollspy */}
        <T3Navbar />

        <main>
          {/* Section 1: Home & Hero */}
          <div id="home">
            <T3Hero />
          </div>

          {/* Section 2: Event Moments (5 High-Res Photos) */}
          <div id="moments">
            <T3Moments />
          </div>

          {/* Section 3: Official Creator Campaign */}
          <div id="campaign">
            <T3Campaign />
          </div>

          {/* Section 4: Official Rules & Regulations */}
          <div id="rules">
            <T3Rules />
          </div>

          {/* Section 5: Hackathon Challenge Tracks & Bounties */}
          <div id="tracks">
            <T3Tracks />
          </div>

          {/* Section 6: 24-Hour Laser Event Timeline */}
          <div id="schedule">
            <T3Timeline />
          </div>

          {/* Section 7: Keynote Speakers & Mentors */}
          <div id="speakers">
            <T3Speakers />
          </div>

          {/* Section 8: Grand Prizes & Podium */}
          <div id="prizes">
            <T3Prizes />
          </div>

          {/* Section 9: Sponsoring Partners & Ecosystem */}
          <div id="sponsors">
            <T3Sponsors />
          </div>

          {/* RIET Campus Venue & Logistics */}
          <T3Venue />

          {/* Section 10: Frequently Asked Questions */}
          <div id="faq">
            <T3FAQ />
          </div>
        </main>

        {/* Neo-Luxe Modern Footer */}
        <T3Footer />
      </div>
    </div>
  );
}
