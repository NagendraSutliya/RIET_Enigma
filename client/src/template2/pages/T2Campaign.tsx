import React, { useState } from "react";
import T2Navbar from "../components/T2Navbar";
import T2Footer from "../components/T2Footer";
import T2RegistrationModal from "../components/T2RegistrationModal";
import { ArrowLeft, Camera, Instagram, Sparkles, Award, TrendingUp, Users, Video, Zap, Hash, ExternalLink, Heart, Gift } from "lucide-react";
import { Link } from "wouter";

export default function T2Campaign() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070817] text-white selection:bg-violet-500/30 selection:text-violet-200 font-sans relative">
      {/* Background Aurora Gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-[700px] h-[500px] bg-violet-600/10 blur-[140px] rounded-full" />
        <div className="absolute top-[35%] right-10 w-[600px] h-[600px] bg-fuchsia-600/10 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 pt-10">
        <T2Navbar onRegisterClick={() => setIsRegisterOpen(true)} />

        {/* Campaign Hero */}
        <section className="pt-12 pb-20 relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-mono uppercase tracking-widest mb-6">
              <Camera className="w-3.5 h-3.5 text-fuchsia-400" />
              <span>Official Creator Campaign</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
              Hack The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300">
                Moment
              </span>
            </h1>

            <p className="text-base sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
              Capture the electric atmosphere of ENIGMA2.0. Create reels, share the grind, and get featured as an official collaborator on <span className="text-white font-medium">Hack With India</span> reaching thousands of creators nationwide.
            </p>

            {/* Campaign Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-16">
              {[
                {
                  step: "01",
                  title: "Capture the Vibe",
                  desc: "Film the coding frenzy, midnight pizza moments, debug battles, and breakthrough celebrations during 17-18 Dec.",
                  icon: Video,
                  color: "text-violet-400",
                },
                {
                  step: "02",
                  title: "Tag & Post",
                  desc: "Post your reel on Instagram tagging @enigma_2k26, @riet_official, and @hackwithindia with #Enigma20 #HackWithIndia.",
                  icon: Hash,
                  color: "text-fuchsia-400",
                },
                {
                  step: "03",
                  title: "Win & Collab",
                  desc: "Top shortlisted creators receive official collaboration reposts, creator swag bundles, and social shoutouts.",
                  icon: Award,
                  color: "text-amber-400",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-violet-500/30 backdrop-blur-xl transition-all"
                  >
                    <span className="text-xs font-mono font-bold text-white/40 block mb-3">{item.step}</span>
                    <Icon className={`w-8 h-8 ${item.color} mb-4`} />
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Hashtag Cloud */}
            <div className="p-8 rounded-3xl bg-gradient-to-r from-violet-900/30 to-fuchsia-900/30 border border-violet-500/20 backdrop-blur-xl flex flex-wrap items-center justify-center gap-3">
              {["#Enigma20", "#HackWithIndia", "#HackWithYou", "#RIETJaipur", "#HackathonCreators", "#BuildInPublic"].map((tag, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-xl bg-white/[0.06] border border-white/10 text-xs sm:text-sm font-mono text-violet-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <T2Footer />

        <T2RegistrationModal
          isOpen={isRegisterOpen}
          onClose={() => setIsRegisterOpen(false)}
        />
      </div>
    </div>
  );
}
