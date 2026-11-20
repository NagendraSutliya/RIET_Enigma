import React, { useState } from "react";
import T2Navbar from "./components/T2Navbar";
import T2Hero from "./components/T2Hero";
import T2BentoFeatures from "./components/T2BentoFeatures";
import EventCarousel from "@/components/EventCarousel";
import T2Tracks from "./components/T2Tracks";
import T2Timeline from "./components/T2Timeline";
import T2Prizes from "./components/T2Prizes";
import T2Sponsors from "./components/T2Sponsors";
import T2FAQ from "./components/T2FAQ";
import T2RulesSection from "./components/T2RulesSection";
import T2CampaignSection from "./components/T2CampaignSection";
import T2VenueContact from "./components/T2VenueContact";
import T2Footer from "./components/T2Footer";
import T2RegistrationModal from "./components/T2RegistrationModal";

export default function Template2Home() {
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
        <T2Navbar onRegisterClick={() => setIsRegisterModalOpen(true)} />

        <main>
          {/* Hero Section with Countdown & Metrics */}
          <T2Hero onRegisterClick={() => setIsRegisterModalOpen(true)} />

          {/* Event Moments Section */}
          <div id="moments">
            <EventCarousel />
          </div>

          {/* Official Creator Campaign */}
          <T2CampaignSection />

          {/* Official Rules & Guidelines */}
          <T2RulesSection />

          {/* Hackathon Challenge Tracks */}
          <T2Tracks />

          {/* 24-Hour Event Timeline */}
          <T2Timeline />

          {/* Bento Grid Highlights */}
          <T2BentoFeatures />

          {/* Grand Rewards & Category Bounties */}
          <T2Prizes />

          {/* Backed By Partners & Sponsors */}
          <T2Sponsors onSponsorClick={() => setIsRegisterModalOpen(true)} />

          {/* Frequently Asked Questions */}
          <T2FAQ />

          {/* Campus Venue & Guidelines */}
          <T2VenueContact />
        </main>

        {/* Modern Cosmic Footer */}
        <T2Footer />

        {/* Quick Team Registration Modal */}
        <T2RegistrationModal
          isOpen={isRegisterModalOpen}
          onClose={() => setIsRegisterModalOpen(false)}
        />
      </div>
    </div>
  );
}
