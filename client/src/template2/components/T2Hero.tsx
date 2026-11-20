import React, { useState, useEffect } from "react";
import { Sparkles, ArrowRight, Calendar, MapPin, Trophy, Users, Clock, Flame, ChevronRight } from "lucide-react";

interface T2HeroProps {
  onRegisterClick: () => void;
}

export default function T2Hero({ onRegisterClick }: T2HeroProps) {
  // Countdown to December 17, 2026 09:00 AM IST
  const targetDate = new Date("2026-12-17T09:00:00+05:30").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = Math.max(0, targetDate - now);

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section id="overview" className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
      {/* Background Aurora Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] sm:h-[500px] bg-gradient-to-tr from-violet-600/20 via-fuchsia-600/15 to-cyan-500/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-purple-600/10 blur-[90px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-600/10 blur-[90px] pointer-events-none rounded-full" />

      {/* Subtle Star Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Live Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.05] border border-violet-500/30 backdrop-blur-xl shadow-lg shadow-violet-500/10 mb-8 animate-in fade-in zoom-in-95 duration-500 hover:border-violet-400/50 transition-colors">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
          </span>
          <span className="text-xs sm:text-sm font-medium text-violet-200">
            Rajasthan's Premier 24-Hour National Hackathon
          </span>
          <span className="text-white/30">•</span>
          <span className="text-xs font-mono text-fuchsia-300 font-semibold">17–18 DEC 2026</span>
        </div>

        {/* Main Title & Tagline */}
        <div className="max-w-4xl mx-auto mb-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4 leading-[1.1]">
            Innovate Beyond Boundaries with{" "}
            <span className="inline-flex items-baseline text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 drop-shadow-[0_0_35px_rgba(168,85,247,0.35)]">
              <span>ENIGMA</span>
              <span className="text-[1.2em] sm:text-[1.3em] font-black scale-y-135 inline-block origin-bottom text-fuchsia-300 drop-shadow-[0_0_25px_rgba(217,70,239,0.9)]">
                2.0
              </span>
            </span>
          </h1>
          <p className="text-base sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Join 800+ top student developers, designers, and creators for 24 continuous hours of building, learning, and competing at Rajasthan Institute of Engineering and Technology (RIET), Jaipur.
          </p>
        </div>

        {/* Date & Location Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-white/80 font-mono mb-10">
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <Calendar className="w-4 h-4 text-violet-400" />
            <span>December 17-18, 2026</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <MapPin className="w-4 h-4 text-fuchsia-400" />
            <span>RIET Campus, Bhankrota, Jaipur</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>₹1,00,000+ Prize Pool</span>
          </div>
        </div>

        {/* Futuristic Glassmorphism Countdown Timer */}
        <div className="w-full max-w-2xl mb-12">
          <div className="p-1 rounded-3xl bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-cyan-500/20 shadow-2xl shadow-violet-950/40">
            <div className="bg-[#0b0c1e]/90 backdrop-blur-2xl rounded-[22px] p-6 sm:p-8 border border-white/10">
              <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-violet-300 mb-5">
                <Clock className="w-3.5 h-3.5 text-violet-400 animate-pulse" />
                <span>Hacking Commences In</span>
              </div>
              <div className="grid grid-cols-4 gap-3 sm:gap-6 text-center">
                {[
                  { label: "Days", value: timeLeft.days },
                  { label: "Hours", value: timeLeft.hours },
                  { label: "Minutes", value: timeLeft.minutes },
                  { label: "Seconds", value: timeLeft.seconds },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-violet-500/40 transition-colors group"
                  >
                    <span className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 font-mono group-hover:scale-105 transition-transform">
                      {String(item.value).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-violet-300/80 mt-1">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <button
            onClick={onRegisterClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-semibold text-base text-white shadow-xl shadow-violet-600/30 hover:shadow-violet-600/50 hover:scale-[1.03] active:scale-[0.98] transition-all bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 group"
          >
            <Sparkles className="w-5 h-5 text-violet-200 group-hover:rotate-12 transition-transform" />
            <span>Apply For Hackathon</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#tracks"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-medium text-base text-white/90 bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 backdrop-blur-xl transition-all hover:scale-[1.02]"
          >
            <span>Explore Tracks</span>
            <ChevronRight className="w-4 h-4 opacity-60" />
          </a>
        </div>

        {/* Quick Highlights Counter Bar */}
        <div className="w-full max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md">
          <div className="p-3 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-sans">800+</div>
            <div className="text-xs text-white/60 font-mono mt-0.5">Participants</div>
          </div>
          <div className="p-3 text-center border-l border-white/10">
            <div className="text-2xl sm:text-3xl font-extrabold text-violet-300 font-sans">24h</div>
            <div className="text-xs text-white/60 font-mono mt-0.5">Non-stop Hacking</div>
          </div>
          <div className="p-3 text-center border-l sm:border-l border-white/10">
            <div className="text-2xl sm:text-3xl font-extrabold text-fuchsia-300 font-sans">₹1,00,000+</div>
            <div className="text-xs text-white/60 font-mono mt-0.5">Prize Pool</div>
          </div>
          <div className="p-3 text-center border-l border-white/10">
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-300 font-sans">100% Free</div>
            <div className="text-xs text-white/60 font-mono mt-0.5">Food, Stay & Swags</div>
          </div>
        </div>
      </div>
    </section>
  );
}
