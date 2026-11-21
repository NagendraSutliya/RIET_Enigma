import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles, Trophy, Clock, Users, Building, Terminal, ExternalLink, Flame, CheckCircle2 } from "lucide-react";

interface T3HeroProps {
  onRegisterClick?: () => void;
}

export default function T3Hero({ onRegisterClick }: T3HeroProps) {
  // Live Countdown to Dec 17, 2026 09:00 AM IST
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
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const scrollToTracks = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("tracks");
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: Math.max(0, elementPosition - offset),
        behavior: "smooth"
      });
      history.replaceState(null, "", "#tracks");
    }
  };

  const metrics = [
    { label: "Grand Prize Pool", value: "₹50,000+", icon: Trophy, color: "text-amber-400" },
    { label: "Non-Stop Hackathon", value: "24 Hours", icon: Clock, color: "text-cyan-400" },
    { label: "Elite Innovators", value: "500+ Hackers", icon: Users, color: "text-violet-400" },
    { label: "Institutions Across India", value: "50+ Colleges", icon: Building, color: "text-fuchsia-400" },
  ];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-24 sm:pt-32 pb-16 overflow-hidden">
      
      {/* Background Kinetic Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-cyan-600/15 via-violet-600/15 to-fuchsia-600/15 blur-[160px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none -z-10 opacity-60" />

      {/* Top Meta Capsule Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-xl mb-6 shadow-lg shadow-black/40 animate-fade-in">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-[11px] sm:text-xs font-mono tracking-wider uppercase text-white/90">
          Rajasthan Institute of Engineering & Technology, Jaipur
        </span>
        <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] bg-cyan-500/20 text-cyan-300 font-mono border border-cyan-500/30 font-semibold">
          DEC 17–18, 2026
        </span>
      </div>

      {/* Main Neo-Kinetic Typography */}
      <div className="max-w-5xl mx-auto space-y-4">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white flex flex-col items-center justify-center leading-[1.05]">
          <span className="text-white/80 font-medium text-2xl sm:text-4xl md:text-5xl font-mono tracking-normal mb-1">
            24H NATIONAL HACKATHON
          </span>
          <span className="flex items-baseline font-mono tracking-tighter uppercase drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-white/90 bg-clip-text text-transparent">
              ENIGMA
            </span>
            <span className="scale-y-125 inline-block origin-bottom font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 ml-1 drop-shadow-[0_0_30px_rgba(34,211,238,0.7)]">
              2.0
            </span>
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/70 font-normal leading-relaxed pt-2">
          Step into Rajasthan’s premier national hackathon. Assemble your team of 2–4 developers, solve hard problems, and ship production-ready innovations in 24 hours.
        </p>

        {/* Highlight Perks Strip */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 pt-2 text-xs font-mono text-white/75">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Free Registration
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Free Accommodation & Meals
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
            <CheckCircle2 className="w-3.5 h-3.5 text-violet-400" /> Swags & Cloud Credits
          </span>
        </div>
      </div>

      {/* Dual High-Impact Action CTAs */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 w-full max-w-md mx-auto">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSe8WhPNn5GqrEhduyX8juD-kzTwGS9TJ0uDqpQs0hc4Yhwlzg/viewform"
          target="_blank"
          rel="noopener noreferrer"
          onClick={onRegisterClick}
          className="relative group w-full sm:w-auto flex-1 overflow-hidden px-8 py-3.5 rounded-full font-bold text-sm text-white transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.35)] hover:shadow-[0_0_45px_rgba(6,182,212,0.6)] hover:scale-105 active:scale-95 cursor-pointer"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-violet-600 to-fuchsia-600 transition-all duration-300 group-hover:scale-105" />
          <span className="relative flex items-center justify-center gap-2 tracking-wide font-sans">
            <span>Register Team Now</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </a>

        <a
          href="#tracks"
          onClick={scrollToTracks}
          className="w-full sm:w-auto flex-1 px-6 py-3.5 rounded-full font-medium text-sm text-white/90 bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-white/30 backdrop-blur-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
        >
          <Terminal className="w-4 h-4 text-cyan-400" />
          <span>Explore Tracks</span>
        </a>
      </div>

      {/* Live Flip Countdown Component */}
      <div className="mt-12 w-full max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-widest text-white/60">
            HACKATHON COMMENCES IN
          </span>
        </div>

        <div className="grid grid-cols-4 gap-2 sm:gap-4">
          {[
            { label: "DAYS", value: timeLeft.days },
            { label: "HOURS", value: timeLeft.hours },
            { label: "MINUTES", value: timeLeft.minutes },
            { label: "SECONDS", value: timeLeft.seconds },
          ].map((item, idx) => (
            <div
              key={idx}
              className="relative group rounded-2xl bg-[#080c1f]/80 backdrop-blur-xl border border-white/10 p-3 sm:p-4 text-center shadow-xl shadow-black/50 hover:border-cyan-500/40 transition-colors"
            >
              <div className="absolute -top-px left-1/2 -translate-x-1/2 w-8 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-75" />
              <div className="text-2xl sm:text-4xl md:text-5xl font-mono font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/60">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-[10px] sm:text-xs font-mono font-semibold tracking-wider text-cyan-400/80 mt-1 uppercase">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Live Metrics Glass Ribbon */}
      <div className="mt-12 w-full max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {metrics.map((metric, i) => {
          const Icon = metric.icon;
          return (
            <div
              key={i}
              className="group relative rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-white/20 p-4 sm:p-5 backdrop-blur-md transition-all duration-300 text-left flex items-center gap-3.5"
            >
              <div className={`p-2.5 rounded-xl bg-white/5 border border-white/10 ${metric.color} group-hover:scale-110 transition-transform`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-mono font-black text-white tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xs text-white/60 font-sans">
                  {metric.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
