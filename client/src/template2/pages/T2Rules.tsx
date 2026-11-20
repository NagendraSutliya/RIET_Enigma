import React, { useState } from "react";
import T2Navbar from "../components/T2Navbar";
import T2Footer from "../components/T2Footer";
import T2RulesSection from "../components/T2RulesSection";
import T2RegistrationModal from "../components/T2RegistrationModal";
import { ArrowLeft, BookOpen, Sparkles } from "lucide-react";
import { Link } from "wouter";

export default function T2Rules() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070817] text-white selection:bg-violet-500/30 selection:text-violet-200 font-sans relative">
      {/* Aurora Lighting Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-[700px] h-[500px] bg-violet-600/10 blur-[140px] rounded-full" />
        <div className="absolute top-[35%] right-10 w-[600px] h-[600px] bg-fuchsia-600/10 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 pt-10">
        <T2Navbar onRegisterClick={() => setIsRegisterOpen(true)} />

        <main>
          <T2RulesSection />
        </main>

        <T2Footer />

        <T2RegistrationModal
          isOpen={isRegisterOpen}
          onClose={() => setIsRegisterOpen(false)}
        />
      </div>
    </div>
  );
}
