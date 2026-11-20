import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import EventCarousel from "@/components/EventCarousel";
import TracksSection from "@/components/TracksSection";
import ScheduleSection from "@/components/ScheduleSection";
import SpeakersSection from "@/components/SpeakersSection";
import PrizesSection from "@/components/PrizesSection";
import RulesSection from "@/components/RulesSection";
import CampaignSection from "@/components/CampaignSection";
import SponsorsSection from "@/components/SponsorsSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import RocketScroll from "@/components/RocketScroll";
import { LeftSideDecoration, RightSideDecoration } from "@/components/SideDecorations";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();
      const currentSequence = (window as any).konamiSequence || "";
      const newSequence = currentSequence + key;
      
      if ("ENIGMA20".startsWith(newSequence) || "ENIGMA2".startsWith(newSequence)) {
        (window as any).konamiSequence = newSequence;

        if (newSequence === "ENIGMA20" || newSequence === "ENIGMA2") {
          alert("🚀 Easter Egg Unlocked! You found the secret! Welcome to the ENIGMA2.0 secret club! 🎉");
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
    <div className="min-h-screen bg-background">
      <Navbar />
      <RocketScroll />
      
      {/* Side decorations - only visible on xl screens */}
      <LeftSideDecoration />
      <RightSideDecoration />
      
      <main>
        <div id="home">
          <HeroSection />
        </div>
        <FeatureGrid />
        <div id="moments">
          <EventCarousel />
        </div>
        <div id="campaign">
          <CampaignSection />
        </div>
        <div id="rules">
          <RulesSection />
        </div>
        <div id="tracks">
          <TracksSection />
        </div>
        <div id="schedule">
          <ScheduleSection />
        </div>
        <div id="speakers">
          <SpeakersSection />
        </div>
        <div id="prizes">
          <PrizesSection />
        </div>
        <div id="sponsors">
          <SponsorsSection />
        </div>
        <ContactSection />
        <div id="faq">
          <FAQSection />
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
