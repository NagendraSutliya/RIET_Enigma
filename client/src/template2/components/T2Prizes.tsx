import React from "react";
import { Trophy, Medal, Award, Sparkles, Gift, Check, Flame, Star } from "lucide-react";

export default function T2Prizes() {
  return (
    <section id="prizes" className="py-20 relative overflow-hidden bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Grand Rewards</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            ₹1,00,000+{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400">
              Prize Pool & Perks
            </span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg">
            Hard cash rewards, prestigious trophies, API credit bundles, startup grants, and premium swag kits for our top innovators.
          </p>
        </div>

        {/* 3-Tier Podium Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-end mb-16">
          {/* 2nd Place (Silver) */}
          <div className="order-2 md:order-1 p-8 rounded-3xl bg-white/[0.03] border border-slate-400/20 hover:border-slate-300/40 transition-all duration-300 backdrop-blur-xl shadow-xl flex flex-col justify-between group relative overflow-hidden">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-slate-300 to-slate-500 flex items-center justify-center text-slate-900 mb-6 shadow-lg shadow-slate-400/20 group-hover:scale-110 transition-transform">
              <Medal className="w-9 h-9" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-slate-300 font-bold">
                1st Runner Up • 2nd Place
              </span>
              <div className="text-4xl font-extrabold text-white mt-1 mb-2 font-mono">₹25,000</div>
              <p className="text-white/70 text-sm mb-6">
                Direct cash grant, official ENIGMA2.0 runner-up trophy, silver certificates, and premium sponsor vouchers.
              </p>
            </div>
            <ul className="space-y-2.5 pt-4 border-t border-white/10 text-xs text-white/80">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>₹25,000 Hard Cash Prize</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Runner-up Trophy & Certificates</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>OpenAI API Credit Bundle</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Exclusive Runner-up Swag Box</span>
              </li>
            </ul>
          </div>

          {/* 1st Place (Gold Winner - Elevated Center) */}
          <div className="order-1 md:order-2 p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-amber-500/10 via-yellow-500/5 to-white/[0.02] border-2 border-amber-400/50 hover:border-amber-400 transition-all duration-300 backdrop-blur-2xl shadow-2xl shadow-amber-500/10 flex flex-col justify-between group relative overflow-hidden md:-translate-y-4">
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-mono text-[11px] font-extrabold uppercase tracking-wider rounded-bl-2xl shadow-md">
              👑 Grand Champion
            </div>

            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-amber-300 via-yellow-400 to-orange-400 flex items-center justify-center text-slate-950 mb-6 shadow-xl shadow-amber-500/30 group-hover:scale-110 transition-transform">
              <Trophy className="w-11 h-11" />
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-300 font-bold">
                Grand Winner • 1st Place
              </span>
              <div className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-orange-300 mt-1 mb-2 font-mono">
                ₹50,000
              </div>
              <p className="text-white/80 text-sm sm:text-base mb-6">
                Ultimate championship title, massive cash award, golden winner trophy, and incubator fast-tracks.
              </p>
            </div>

            <ul className="space-y-3 pt-6 border-t border-amber-400/20 text-xs sm:text-sm text-white/90">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400" />
                <span className="font-semibold text-white">₹50,000 Direct Cash Prize</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400" />
                <span>Winner Trophy & Gold Medal of Honor</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400" />
                <span>Highest-Tier OpenAI API Credits</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400" />
                <span>Direct Venture Incubator Interview</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400" />
                <span>Premium Swags, Hoodies & Hardware Perks</span>
              </li>
            </ul>
          </div>

          {/* 3rd Place (Bronze) */}
          <div className="order-3 p-8 rounded-3xl bg-white/[0.03] border border-orange-400/20 hover:border-orange-400/40 transition-all duration-300 backdrop-blur-xl shadow-xl flex flex-col justify-between group relative overflow-hidden">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-600 to-orange-700 flex items-center justify-center text-white mb-6 shadow-lg shadow-orange-600/20 group-hover:scale-110 transition-transform">
              <Award className="w-9 h-9" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                2nd Runner Up • 3rd Place
              </span>
              <div className="text-4xl font-extrabold text-white mt-1 mb-2 font-mono">₹15,000</div>
              <p className="text-white/70 text-sm mb-6">
                Direct cash award, official ENIGMA bronze trophy, verified honors, and swags.
              </p>
            </div>
            <ul className="space-y-2.5 pt-4 border-t border-white/10 text-xs text-white/80">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>₹15,000 Hard Cash Prize</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Bronze Trophy & Certificates</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>OpenAI API Credit Bundle</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Official ENIGMA2.0 Hacker Swags</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Category Special Awards Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "Best All-Girls Team",
              reward: "₹10,000 Cash",
              desc: "Special recognition & dedicated mentorship for the top performing all-women team.",
              icon: Star,
              color: "text-fuchsia-400",
            },
            {
              title: "Best Freshman Team",
              reward: "₹5,000 Cash",
              desc: "Encouraging first and second-year undergraduate innovators.",
              icon: Sparkles,
              color: "text-cyan-400",
            },
            {
              title: "Best UI/UX Design",
              reward: "Cash + Design Perks",
              desc: "Awarded to the most intuitive, beautiful, and polished user experience.",
              icon: Flame,
              color: "text-amber-400",
            },
            {
              title: "Every Participant Perks",
              reward: "Swags + Credits",
              desc: "Verified certificate, food, t-shirts, stickers, and developer credits.",
              icon: Gift,
              color: "text-emerald-400",
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-violet-500/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${item.color} uppercase`}>{item.title}</span>
                  <Icon className={`w-4 h-4 ${item.color}`} />
                </div>
                <div className="text-xl font-bold text-white mb-1 font-mono">{item.reward}</div>
                <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
