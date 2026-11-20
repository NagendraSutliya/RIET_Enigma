import React from "react";
import { Zap, Users, Gift, Coffee, Briefcase, Code, ShieldCheck, Sparkles, Layers } from "lucide-react";

export default function T2BentoFeatures() {
  return (
    <section id="highlights" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>Why Join ENIGMA2.0</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            An Unrivaled 24-Hour{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
              Innovation Experience
            </span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg">
            Everything you need to turn bold ideas into functional, venture-ready prototypes in one high-energy weekend.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card 1: Large Featured Card (Span 2 cols, 2 rows) */}
          <div className="md:col-span-2 lg:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10 hover:border-violet-500/40 transition-all duration-300 shadow-xl hover:shadow-violet-500/10 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/10 blur-3xl pointer-events-none group-hover:bg-violet-600/20 transition-all rounded-full" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-violet-600/30 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-violet-400 uppercase tracking-wider font-semibold">
                Core Hackathon Engine
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1 mb-3">
                24 Hours of Continuous Sprint
              </h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
                From opening ceremony to final demo pitches, push your creativity to the edge. Enjoy ultra-fast dedicated fiber Wi-Fi, fully equipped maker & coding stations, and round-the-clock technical infrastructure.
              </p>
            </div>

            {/* Visual Live Activity Graphic */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-mono text-white/80">Continuous Mentorship & Workshops</span>
              </div>
              <span className="text-xs font-mono text-violet-300 bg-violet-500/20 px-2.5 py-1 rounded-full border border-violet-500/30">
                Non-Stop
              </span>
            </div>
          </div>

          {/* Card 2: 1-on-1 Mentorship */}
          <div className="md:col-span-1 lg:col-span-2 p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-fuchsia-500/40 transition-all duration-300 shadow-xl hover:shadow-fuchsia-500/10 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-60 h-60 bg-fuchsia-600/10 blur-3xl pointer-events-none rounded-full" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-fuchsia-600 to-pink-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-fuchsia-600/30 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-fuchsia-400 uppercase tracking-wider font-semibold">
                Expert Guidance
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 mb-3">
                Industry Mentors & Judges
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Get hands-on architectural reviews, pitch coaching, and debugging sessions from experienced software engineers, startup CTOs, and domain specialists.
              </p>
            </div>
            <div className="flex items-center gap-2 pt-2 border-t border-white/10 text-xs font-mono text-white/60">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>3 Scheduled Milestone Reviews</span>
            </div>
          </div>

          {/* Card 3: Free Food, Drinks & Lounges */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-amber-500/40 transition-all duration-300 shadow-xl hover:shadow-amber-500/10 group relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white mb-5 shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform">
              <Coffee className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold">
              All Inclusive
            </span>
            <h3 className="text-xl font-bold text-white mt-1 mb-2">Food, Drinks & Lounges</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Wholesome buffet meals, midnight pizza, unlimited coffee, energy drinks, and peaceful chill & rest zones for when you need a power nap.
            </p>
          </div>

          {/* Card 4: Massive Perks & API Credits */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 shadow-xl hover:shadow-cyan-500/10 group relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-500 flex items-center justify-center text-white mb-5 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
              <Gift className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              Sponsor Perks
            </span>
            <h3 className="text-xl font-bold text-white mt-1 mb-2">Credits & Swags</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              OpenAI API tokens, domain credits, high-quality event t-shirts, stickers, customized badges, and verified participation certificates.
            </p>
          </div>

          {/* Card 5: Recruitment & Opportunities */}
          <div className="md:col-span-2 lg:col-span-2 p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-violet-500/40 transition-all duration-300 shadow-xl hover:shadow-violet-500/10 group relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-violet-600 to-purple-500 flex items-center justify-center text-white mb-5 shadow-lg shadow-violet-600/30 group-hover:scale-110 transition-transform">
                <Briefcase className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-violet-400 uppercase tracking-wider font-semibold">
                Career Trajectory
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 mb-2">
                Hiring Fast-Tracks & Seed Networking
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Connect directly with hiring engineering managers, startup accelerators, and venture scouts eager to back exceptional student talent and promising hackathon prototypes.
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Internship Fast-Tracks", "Direct Resume Drops", "Venture Mentorship"].map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-xs font-mono text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
