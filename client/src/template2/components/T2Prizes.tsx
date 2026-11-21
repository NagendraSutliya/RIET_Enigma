import React from "react";
import { Trophy, Crown, Gift, Sparkles, Award, Zap, CheckCircle2, Terminal, Heart } from "lucide-react";
import { TechCorner } from "@/components/TechDecorations";

export default function T2Prizes() {
  const specialBounties = [
    {
      title: "Best All-Girls Team",
      reward: "₹3,000 + Swag Kit",
      desc: "Championing women in engineering and breakthrough technical leadership.",
      icon: Heart,
    },
    {
      title: "Best Freshman Team",
      reward: "₹3,000 + Mentorship",
      desc: "Top performing team comprising exclusively first-year undergraduate innovators.",
      icon: Sparkles,
    },
    {
      title: "Most Novel AI Solution",
      reward: "₹4,000 + Cloud API Credits",
      desc: "Most creative use of machine learning, multimodal models, or autonomous agents.",
      icon: Zap,
    },
    {
      title: "Best UI / UX & Design",
      reward: "₹2,000 + Design Passes",
      desc: "Highest visual polish, intuitive usability, and micro-interaction perfection.",
      icon: Award,
    },
  ];

  const universalPerks = [
    "Official Certificate of National Participation",
    "Free 24-Hour Meals, Coffee, Red Bull & Energy Snacks",
    "ENIGMA2.0 Limited Edition T-shirt & Die-Cut Stickers",
    "Free 1-Year .XYZ Domain Voucher & Cloud Credits",
    "Access to Exclusive Tech Recruiter Network",
    "1-on-1 Guidance from Silicon Valley Mentors",
  ];

  return (
    <section id="prizes" className="relative py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      
      {/* Background Accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-600/10 blur-[180px] pointer-events-none -z-10 rounded-full" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
          <Trophy className="w-3.5 h-3.5" />
          <span>// PRIZE_POOL_MATRIX</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight leading-tight">
          Grand Rewards &{" "}
          <span className="font-mono text-emerald-400 drop-shadow-[0_0_20px_rgba(34,197,94,0.6)]">
            Podium Glory
          </span>
        </h2>
        <p className="text-white/60 font-mono text-xs sm:text-sm mt-2 max-w-xl mx-auto">
          Compete for ₹50,000+ direct cash bounties, national prestige, champion trophies, and direct seed investment connections.
        </p>
      </div>

      {/* 3D Cyber Matrix Podium (2nd, 1st, 3rd) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end max-w-5xl mx-auto mb-16">
        
        {/* 2nd Place: Silver */}
        <div className="order-2 md:order-1 group rounded-none bg-[#050b07] border border-slate-400/30 p-6 sm:p-7 text-center shadow-xl transition-all duration-300 hover:scale-105 relative">
          <TechCorner position="tl" />
          <div className="w-16 h-16 mx-auto mb-4 bg-black border border-slate-400/40 flex items-center justify-center text-slate-300">
            <Trophy className="w-8 h-8" />
          </div>
          <div className="inline-block px-3 py-1 bg-slate-500/20 text-slate-300 text-xs font-mono font-bold uppercase mb-2">
            🥈 1ST RUNNER UP
          </div>
          <div className="text-3xl sm:text-4xl font-mono font-black text-white mb-2">
            ₹15,000
          </div>
          <p className="text-xs text-white/60 font-mono mb-5">
            Hard Cash + Cloud Credits + Trophy
          </p>

          <div className="space-y-2 text-xs text-white/80 text-left pt-4 border-t border-white/10 font-mono">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-slate-300" />
              <span>Silver Winner Trophy</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-slate-300" />
              <span>$2,500 Cloud Credits</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-slate-300" />
              <span>Fast-track Internship Screening</span>
            </div>
          </div>
        </div>

        {/* 1st Place: Gold Champion (Center Elevated) */}
        <div className="order-1 md:order-2 group relative rounded-none bg-[#061009] border-2 border-emerald-400 p-7 sm:p-8 text-center shadow-2xl shadow-emerald-500/20 transition-all duration-300 hover:scale-105 md:-translate-y-4">
          <TechCorner position="tl" />
          <TechCorner position="tr" />
          <TechCorner position="bl" />
          <TechCorner position="br" />

          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-400 text-black text-xs font-mono font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5">
            <Crown className="w-3.5 h-3.5" />
            <span>GRAND CHAMPION</span>
          </div>

          <div className="w-20 h-20 mx-auto mt-2 mb-4 bg-black border border-emerald-400/50 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(34,197,94,0.5)]">
            <Crown className="w-10 h-10" />
          </div>

          <div className="text-4xl sm:text-5xl font-mono font-black text-emerald-300 drop-shadow-[0_0_20px_rgba(52,211,153,0.7)] mb-2">
            ₹25,000
          </div>
          <p className="text-xs text-emerald-300/80 mb-6 font-mono font-semibold">
            Direct Cash Prize + Rolling Gold Trophy
          </p>

          <div className="space-y-2.5 text-xs text-white/90 text-left pt-5 border-t border-emerald-500/30 font-mono">
            <div className="flex items-center gap-2 font-bold text-emerald-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Prestigious ENIGMA2.0 Trophy</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>$5,000 OpenAI & Cloud Credits</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Investor Pitch & Incubation Pass</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Exclusive Champion Hoodie Kit</span>
            </div>
          </div>
        </div>

        {/* 3rd Place: Bronze */}
        <div className="order-3 group rounded-none bg-[#050b07] border border-amber-700/40 p-6 sm:p-7 text-center shadow-xl transition-all duration-300 hover:scale-105 relative">
          <TechCorner position="tr" />
          <div className="w-16 h-16 mx-auto mb-4 bg-black border border-amber-700/50 flex items-center justify-center text-amber-500">
            <Trophy className="w-8 h-8" />
          </div>
          <div className="inline-block px-3 py-1 bg-amber-700/20 text-amber-400 text-xs font-mono font-bold uppercase mb-2">
            🥉 2ND RUNNER UP
          </div>
          <div className="text-3xl sm:text-4xl font-mono font-black text-white mb-2">
            ₹10,000
          </div>
          <p className="text-xs text-white/60 font-mono mb-5">
            Hard Cash + Cloud Credits + Trophy
          </p>

          <div className="space-y-2 text-xs text-white/80 text-left pt-4 border-t border-white/10 font-mono">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
              <span>Bronze Winner Trophy</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
              <span>$1,000 Cloud Credits</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
              <span>Swag Hamper & Certifications</span>
            </div>
          </div>
        </div>

      </div>

      {/* Special Category Bounties */}
      <div className="mb-14">
        <h3 className="text-center text-lg font-bold text-white mb-6 font-mono">
          // SPECIAL_CATEGORY_BOUNTIES
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {specialBounties.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group rounded-none bg-[#050b07] border border-emerald-500/20 hover:border-emerald-500/50 p-5 transition-all duration-300"
              >
                <div className="p-2.5 bg-black border border-emerald-500/30 text-emerald-400 w-fit mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">
                  {item.title}
                </h4>
                <div className="text-xs font-mono font-bold text-emerald-300 mb-2">
                  {item.reward}
                </div>
                <p className="text-xs text-white/60 font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Universal Perks Ribbon */}
      <div className="rounded-none bg-[#040805] border border-emerald-500/30 p-6 sm:p-8 relative">
        <TechCorner position="tl" />
        <TechCorner position="br" />

        <div className="flex items-center gap-2 mb-4">
          <Gift className="w-5 h-5 text-emerald-400" />
          <h3 className="text-base sm:text-lg font-bold text-white font-mono">
            Every Single Participant Receives:
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {universalPerks.map((perk, i) => (
            <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/80 font-mono">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{perk}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
