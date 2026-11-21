import React, { useState } from "react";
import { Share2, Copy, Check, Instagram, Twitter, Linkedin, Sparkles, Award, Video, Flame } from "lucide-react";

export default function T3Campaign() {
  const [copiedTag, setCopiedTag] = useState<string | null>(null);

  const hashtags = [
    "#Enigma20",
    "#HackWithIndia",
    "#RIETJaipur",
    "#BuildInPublic",
    "#24HHackathon",
  ];

  const copyToClipboard = (tag: string) => {
    navigator.clipboard.writeText(tag);
    setCopiedTag(tag);
    setTimeout(() => setCopiedTag(null), 2000);
  };

  const steps = [
    {
      step: "01",
      icon: Video,
      title: "Shoot & Document Your Build",
      description: "Film your 2:00 AM debugging moments, team whiteboard architecture, and prototype reveals.",
      color: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-400",
    },
    {
      step: "02",
      icon: Share2,
      title: "Tag @rietjaipur & Hashtags",
      description: "Post on Instagram Reels, X (Twitter), and LinkedIn with the official event tags and links.",
      color: "from-violet-500/20 to-fuchsia-500/20 border-violet-500/30 text-violet-400",
    },
    {
      step: "03",
      icon: Award,
      title: "Win ₹5,000+ Creator Bounties",
      description: "Top 3 highest reach & most creative dev logs win mechanical keyboards, swags, and cash prizes.",
      color: "from-fuchsia-500/20 to-pink-500/20 border-fuchsia-500/30 text-fuchsia-400",
    },
  ];

  return (
    <section id="campaign" className="relative py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-fuchsia-600/10 blur-[150px] pointer-events-none -z-10 rounded-full" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-300 text-xs font-mono uppercase tracking-wider mb-4">
          <Flame className="w-3.5 h-3.5" />
          <span>Official Social Campaign</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          #HackTheMoment{" "}
          <span className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400">
            Creator Challenge
          </span>
        </h2>
        <p className="text-white/60 text-sm sm:text-base mt-3 max-w-xl mx-auto">
          Share your hackathon journey live. Win special social media creator bounties and feature on the mainstage!
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Columns: 3 Steps */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative group rounded-3xl bg-[#070b1a]/80 backdrop-blur-xl border border-white/10 p-6 flex flex-col justify-between hover:border-white/25 transition-all duration-300 shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-mono font-black text-white/30 group-hover:text-cyan-400 transition-colors">
                      {item.step}
                    </span>
                    <div className={`p-2.5 rounded-xl bg-white/5 border ${item.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/65 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Hashtag Vault & Links */}
        <div className="rounded-3xl bg-gradient-to-b from-[#090e24] to-[#060814] border border-white/15 p-6 backdrop-blur-2xl shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                Official Campaign Hashtags
              </span>
            </div>
            <p className="text-xs text-white/60 mb-4">
              Tap any hashtag to copy it directly to your clipboard:
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {hashtags.map((tag) => {
                const isCopied = copiedTag === tag;
                return (
                  <button
                    key={tag}
                    onClick={() => copyToClipboard(tag)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                      isCopied
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm"
                        : "bg-white/5 text-white/80 hover:text-white hover:bg-white/10 border border-white/10"
                    }`}
                  >
                    <span>{tag}</span>
                    {isCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 opacity-60" />}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-4 border-t border-white/10">
            <span className="text-[11px] font-mono uppercase text-white/50 block mb-2">
              Official Social Channels
            </span>
            <div className="flex items-center gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-white transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>Instagram</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-white transition-colors"
              >
                <Twitter className="w-4 h-4 text-cyan-400" />
                <span>Twitter / X</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-white transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
