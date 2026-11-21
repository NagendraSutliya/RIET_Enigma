import React, { useState } from "react";
import { Share2, Copy, Check, Instagram, Twitter, Linkedin, Terminal, Award, Video, Flame } from "lucide-react";
import { TechCorner } from "@/components/TechDecorations";

export default function T2Campaign() {
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
      title: "Document Your Build Journey",
      code: "// RECORD_TELEMETRY",
      description: "Film your 2:00 AM debugging runs, team whiteboard architectures, and live UI mockups.",
    },
    {
      step: "02",
      icon: Share2,
      title: "Tag @rietjaipur & Official Tags",
      code: "// BROADCAST_NETWORK",
      description: "Publish on Instagram Reels, X (Twitter), and LinkedIn with the official event hashtags.",
    },
    {
      step: "03",
      icon: Award,
      title: "Win ₹5,000+ Creator Bounties",
      code: "// CLAIM_REWARDS",
      description: "Top 3 highest reach & most creative dev logs win mechanical keyboards, swags, and cash prizes.",
    },
  ];

  return (
    <section id="campaign" className="relative py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-600/10 blur-[150px] pointer-events-none -z-10 rounded-full" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>// CREATOR_CAMPAIGN_CHALLENGE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight leading-tight">
          #HackTheMoment{" "}
          <span className="font-mono text-emerald-400 drop-shadow-[0_0_20px_rgba(34,197,94,0.6)]">
            Creator Challenge
          </span>
        </h2>
        <p className="text-white/60 font-mono text-xs sm:text-sm mt-2 max-w-xl mx-auto">
          Share your build process live. Win exclusive creator bounties, swags, and feature on the mainstage!
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
                className="relative group rounded-none bg-[#050b07] border border-emerald-500/25 p-6 flex flex-col justify-between hover:border-emerald-400 transition-all duration-300 shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-mono font-black text-emerald-500/40 group-hover:text-emerald-400 transition-colors">
                      {item.step}
                    </span>
                    <div className="p-2.5 bg-black border border-emerald-500/40 text-emerald-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="text-[10px] font-mono text-emerald-400/70 mb-1">
                    {item.code}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/60 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Hashtag Vault & Links */}
        <div className="rounded-none bg-[#040805] border border-emerald-500/40 p-6 shadow-xl flex flex-col justify-between relative">
          <TechCorner position="tr" />
          <TechCorner position="bl" />

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-300">
                Official Campaign Hashtags
              </span>
            </div>
            <p className="text-xs text-white/60 font-mono mb-4">
              Tap any hashtag to copy to your clipboard:
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {hashtags.map((tag) => {
                const isCopied = copiedTag === tag;
                return (
                  <button
                    key={tag}
                    onClick={() => copyToClipboard(tag)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono transition-all cursor-pointer ${
                      isCopied
                        ? "bg-emerald-500/30 text-emerald-300 border border-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.4)]"
                        : "bg-black/60 text-white/80 hover:text-emerald-300 hover:border-emerald-400 border border-emerald-500/30"
                    }`}
                  >
                    <span>{tag}</span>
                    {isCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 opacity-60" />}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-4 border-t border-emerald-500/20">
            <span className="text-[11px] font-mono uppercase text-emerald-400/60 block mb-2">
              Official Social Channels
            </span>
            <div className="flex items-center gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-black/60 hover:bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-300 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-black/60 hover:bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-300 transition-colors"
              >
                <Twitter className="w-3.5 h-3.5" />
                <span>Twitter / X</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-black/60 hover:bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-300 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
