import React, { useState } from "react";
import T3Navbar from "../components/T3Navbar";
import T3Footer from "../components/T3Footer";
import T3RulesSection from "../components/T3RulesSection";
import T3RegistrationModal from "../components/T3RegistrationModal";
import { ArrowLeft, BookOpen, Sparkles } from "lucide-react";
import { Link } from "wouter";

export default function T3Rules() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070817] text-white selection:bg-violet-500/30 selection:text-violet-200 font-sans relative">
      {/* Aurora Lighting Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-[700px] h-[500px] bg-violet-600/10 blur-[140px] rounded-full" />
        <div className="absolute top-[35%] right-10 w-[600px] h-[600px] bg-fuchsia-600/10 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 pt-10">
        <T3Navbar onRegisterClick={() => setIsRegisterOpen(true)} />

        <main>
          <T3RulesSection />
        </main>

        <T3Footer />

        <T3RegistrationModal
          isOpen={isRegisterOpen}
          onClose={() => setIsRegisterOpen(false)}
        />
      </div>
    </div>
  );
}
