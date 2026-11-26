import React, { useState, useEffect } from "react";
import { ArrowRight, Trophy, Clock, Users, Building, Terminal, ExternalLink, Flame, CheckCircle2, MapPin } from "lucide-react";
import { TechCorner, FloatingDots, CodeLine } from "@/components/TechDecorations";

interface T2HeroProps {
  onRegisterClick?: () => void;
}

export default function T2Hero({ onRegisterClick }: T2HeroProps) {
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
    { label: "Non-Stop Hackathon", value: "24 Hours", icon: Clock, color: "text-emerald-400" },
    { label: "Elite Innovators", value: "800+ Hackers", icon: Users, color: "text-cyan-400" },
    { label: "Universities Across India", value: "50+ Colleges", icon: Building, color: "text-emerald-300" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-28 sm:pt-36 pb-20 overflow-hidden bg-[#030604]">
      
      {/* Tech corner decorations inspired by Template 1 */}
      <div className="hidden sm:block">
        <TechCorner position="tl" />
        <TechCorner position="tr" />
        <TechCorner position="bl" />
        <TechCorner position="br" />
      </div>

      {/* Floating dots inspired by Template 1 */}
      <div className="hidden md:block">
        <FloatingDots count={8} />
      </div>

      {/* Background Matrix Circuit Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff8808_1px,transparent_1px),linear-gradient(to_bottom,#00ff8808_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[450px] bg-emerald-600/10 blur-[180px] pointer-events-none -z-10 rounded-full" />

      {/* Code comment decoration */}
      <div className="hidden sm:block mb-4">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400/60 bg-emerald-950/20 px-3 py-1 rounded-full border border-emerald-500/20">
          <Terminal className="w-3.5 h-3.5 text-emerald-400" />
          <span>// system_init --hackathon=enigma20 --runtime=24h</span>
        </div>
      </div>

      {/* Top Meta Capsule Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#06100a] border border-emerald-500/30 backdrop-blur-xl mb-6 shadow-lg shadow-emerald-950/40">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-[11px] sm:text-xs font-mono tracking-wider uppercase text-emerald-300 font-semibold">
          Rajasthan Institute of Engineering & Technology, Jaipur
        </span>
        <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-300 font-mono border border-emerald-500/30 font-bold">
          DEC 17–18, 2026
        </span>
      </div>

      {/* Main Neo-Matrix Hacker Title (Inspired by Template 1) */}
      <div className="max-w-5xl mx-auto space-y-4">
        <p className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.35em] text-emerald-400/80">
          24-Hour Hackathon · Jaipur · 17-18 Dec 2026
        </p>

        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-black text-white tracking-tight leading-none">
          <span className="inline-block hover:text-emerald-400 hover:scale-110 transition-all duration-300 hover:-translate-y-1">E</span>
          <span className="inline-block hover:text-emerald-400 hover:scale-110 transition-all duration-300 hover:-translate-y-1">N</span>
          <span className="inline-block hover:text-emerald-400 hover:scale-110 transition-all duration-300 hover:-translate-y-1">I</span>
          <span className="inline-block hover:text-emerald-400 hover:scale-110 transition-all duration-300 hover:-translate-y-1">G</span>
          <span className="inline-block hover:text-emerald-400 hover:scale-110 transition-all duration-300 hover:-translate-y-1">M</span>
          <span className="inline-block hover:text-emerald-400 hover:scale-110 transition-all duration-300 hover:-translate-y-1">A</span>
          <span className="inline-block text-emerald-400 font-black text-[1.15em] sm:text-[1.25em] scale-y-135 origin-bottom tracking-tighter hover:scale-125 transition-transform duration-300 drop-shadow-[0_0_35px_rgba(34,197,94,0.7)] ml-1">
            2.0
          </span>
        </h1>

        <p className="text-sm sm:text-lg md:text-xl font-mono uppercase tracking-[0.2em] text-emerald-400/90 font-semibold">
          Code · Collaborate · Innovate
        </p>

        <p className="text-sm sm:text-base lg:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed pt-2">
          Join 800+ elite engineers, designers, and innovators for 24 hours of non-stop code, mentorship, and high-impact software deployment at Rajasthan’s premier national hackathon.
        </p>

        {/* Highlight Perks Strip */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 pt-2 text-xs font-mono text-emerald-300/80">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Free Registration
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Free Accommodation & Meals
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Swags & Cloud Credits
          </span>
        </div>
      </div>

      {/* Dual High-Impact Action CTAs */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 w-full max-w-md mx-auto">
        <a
          href="https://unstop.com/o/aSClEqd?lb=use8upTu&utm_medium=Share&utm_source=enigmrie19036&utm_campaign=Online_coding_challenge"
          target="_blank"
          rel="noopener noreferrer"
          onClick={onRegisterClick}
          className="w-full sm:w-auto flex-1 font-mono uppercase tracking-[0.15em] font-bold text-sm text-black bg-emerald-400 hover:bg-emerald-300 px-8 py-3.5 rounded-none shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:shadow-[0_0_45px_rgba(34,197,94,0.8)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <ExternalLink className="w-4 h-4" />
          <span>Register Team Now</span>
        </a>

        <a
          href="#tracks"
          onClick={scrollToTracks}
          className="w-full sm:w-auto flex-1 font-mono uppercase tracking-[0.15em] border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/10 hover:border-emerald-400 px-6 py-3.5 rounded-none text-sm transition-all hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
        >
          <Terminal className="w-4 h-4 text-emerald-400" />
          <span>Explore Tracks</span>
        </a>
      </div>

      {/* Live Matrix Flip Countdown Component */}
      <div className="mt-12 w-full max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Flame className="w-4 h-4 text-emerald-400 animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400/70 font-semibold">
            // HACKATHON COMMENCES IN
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
              className="relative group rounded-none bg-[#050b07] border border-emerald-500/30 p-3 sm:p-4 text-center shadow-lg shadow-emerald-950/40 hover:border-emerald-400 transition-colors"
            >
              <div className="absolute -top-px left-1/2 -translate-x-1/2 w-8 h-[2px] bg-emerald-400 opacity-75" />
              <div className="text-2xl sm:text-4xl md:text-5xl font-mono font-black text-emerald-300 drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-[10px] sm:text-xs font-mono font-semibold tracking-wider text-emerald-400/60 mt-1 uppercase">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Row in Template 1 Grid Style */}
      <div className="mt-12 w-full max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-px bg-emerald-500/20 border border-emerald-500/30">
        {metrics.map((metric, i) => {
          const Icon = metric.icon;
          return (
            <div
              key={i}
              className="bg-[#040805] hover:bg-[#07100a] p-4 sm:p-5 text-center group transition-colors"
            >
              <div className="flex justify-center text-emerald-400 mb-2 group-hover:scale-110 transition-transform">
                <Icon className="w-5 h-5" />
              </div>
              <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.15em] text-emerald-400/60 mb-1">
                {metric.label}
              </p>
              <p className="text-base sm:text-lg font-mono font-bold text-white group-hover:text-emerald-300 transition-colors">
                {metric.value}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
