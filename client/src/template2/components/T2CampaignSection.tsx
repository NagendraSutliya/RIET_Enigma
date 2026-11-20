import React from "react";
import { Camera, Video, Hash, Award, Instagram, Sparkles, ExternalLink, Heart } from "lucide-react";

export default function T2CampaignSection() {
  const steps = [
    {
      step: "01",
      title: "Capture the Vibe",
      desc: "Film the 24-hour coding frenzy, midnight pizza energy, bug hunts, and high-fives during 17-18 Dec.",
      icon: Video,
      color: "text-violet-400",
      border: "hover:border-violet-500/40",
    },
    {
      step: "02",
      title: "Tag & Post",
      desc: "Post your reel on Instagram tagging @enigma_2k26, @riet_official, and @hackwithindia with #Enigma20 #HackWithIndia.",
      icon: Hash,
      color: "text-fuchsia-400",
      border: "hover:border-fuchsia-500/40",
    },
    {
      step: "03",
      title: "Win & Collab",
      desc: "Top shortlisted creators receive official collaboration reposts, creator swag bundles, and social shoutouts.",
      icon: Award,
      color: "text-cyan-400",
      border: "hover:border-cyan-500/40",
    },
  ];

  const tags = ["#Enigma20", "#HackWithIndia", "#HackWithYou", "#RIETJaipur", "#HackathonCreators", "#BuildInPublic"];

  return (
    <section id="campaign" className="py-20 relative overflow-hidden bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Camera className="w-3.5 h-3.5 text-fuchsia-400" />
            <span>Official Creator Campaign</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Hack The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300">
              Moment
            </span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Capture the electric atmosphere of ENIGMA2.0. Share your story and get featured as an official collaborator on <span className="text-white font-medium">Hack With India</span> reaching thousands nationwide.
          </p>
        </div>

        {/* 3 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-7 rounded-3xl bg-white/[0.03] border border-white/10 ${item.border} backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] shadow-xl`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-white/40">{item.step}</span>
                  <div className="p-2.5 rounded-2xl bg-white/[0.05] border border-white/10">
                    <Icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Hashtag Strip */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-violet-900/20 via-fuchsia-900/20 to-cyan-900/20 border border-violet-500/20 backdrop-blur-xl flex flex-wrap items-center justify-center gap-2.5">
          {tags.map((tag, i) => (
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
  );
}
