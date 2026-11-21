import React, { useState } from "react";
import T3Navbar from "./components/T3Navbar";
import T3Hero from "./components/T3Hero";
import T3BentoFeatures from "./components/T3BentoFeatures";
import EventCarousel from "@/components/EventCarousel";
import T3Tracks from "./components/T3Tracks";
import T3Timeline from "./components/T3Timeline";
import T3Prizes from "./components/T3Prizes";
import T3Sponsors from "./components/T3Sponsors";
import T3FAQ from "./components/T3FAQ";
import T3RulesSection from "./components/T3RulesSection";
import T3CampaignSection from "./components/T3CampaignSection";
import T3VenueContact from "./components/T3VenueContact";
import T3Footer from "./components/T3Footer";
import T3RegistrationModal from "./components/T3RegistrationModal";

export default function Template3Home() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070817] text-white selection:bg-violet-500/30 selection:text-violet-200 font-sans relative">
      {/* Background Aurora Lighting Gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-[700px] h-[500px] bg-violet-600/10 blur-[140px] rounded-full" />
        <div className="absolute top-[35%] right-10 w-[600px] h-[600px] bg-fuchsia-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[20%] left-10 w-[500px] h-[500px] bg-cyan-600/10 blur-[130px] rounded-full" />
      </div>

      <div className="relative z-10 pt-10">
        {/* Modern Floating Header Navbar */}
        <T3Navbar onRegisterClick={() => setIsRegisterModalOpen(true)} />

        <main>
          {/* Hero Section with Countdown & Metrics */}
          <T3Hero onRegisterClick={() => setIsRegisterModalOpen(true)} />

          {/* Event Moments Section */}
          <div id="moments">
            <EventCarousel />
          </div>

          {/* Official Creator Campaign */}
          <T3CampaignSection />

          {/* Official Rules & Guidelines */}
          <T3RulesSection />

          {/* Hackathon Challenge Tracks */}
          <T3Tracks />

          {/* 24-Hour Event Timeline */}
          <T3Timeline />

          {/* Bento Grid Highlights */}
          <T3BentoFeatures />

          {/* Grand Rewards & Category Bounties */}
          <T3Prizes />

          {/* Backed By Partners & Sponsors */}
          <T3Sponsors onSponsorClick={() => setIsRegisterModalOpen(true)} />

          {/* Frequently Asked Questions */}
          <T3FAQ />

          {/* Campus Venue & Guidelines */}
          <T3VenueContact />
        </main>

        {/* Modern Cosmic Footer */}
        <T3Footer />

        {/* Quick Team Registration Modal */}
        <T3RegistrationModal
          isOpen={isRegisterModalOpen}
          onClose={() => setIsRegisterModalOpen(false)}
        />
      </div>
    </div>
  );
}
