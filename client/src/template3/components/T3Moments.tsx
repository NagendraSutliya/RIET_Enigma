import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause, Maximize2, X, Sparkles, Camera } from "lucide-react";

interface MomentItem {
  id: number;
  title: string;
  subtitle: string;
  phase: string;
  image: string;
  date: string;
  highlight: string;
}

export default function T3Moments() {
  const moments: MomentItem[] = [
    {
      id: 1,
      title: "The Midnight Coding Sprint",
      subtitle: "Teams collaborate through the night, debugging algorithms and building real-world software prototypes.",
      phase: "PHASE 02 • 24H CODE SPRINT",
      image: "/moments/coding_session.jpg",
      date: "Night of Dec 17, 02:30 AM",
      highlight: "500+ Engineers Non-Stop",
    },
    {
      id: 2,
      title: "Mainstage Keynote & Problem Reveal",
      subtitle: "Auditorium fills with anticipation as industry leaders and faculty unveil the national challenge themes.",
      phase: "PHASE 01 • OPENING CEREMONY",
      image: "/moments/ai_hackathon_stage.jpg",
      date: "Dec 17, 10:00 AM",
      highlight: "Grand Auditorium Kickoff",
    },
    {
      id: 3,
      title: "Deep Technical Mentorship",
      subtitle: "Senior architects and startup founders sit 1-on-1 with teams to refine architecture and scalability.",
      phase: "PHASE 03 • MENTOR JURY SPRINT",
      image: "/moments/mentor_round.jpg",
      date: "Dec 17, 06:30 PM",
      highlight: "1-on-1 Expert Guidance",
    },
    {
      id: 4,
      title: "Live Product Demos & Judge Pitches",
      subtitle: "Top finalist teams pitch their working MVPs and live-deployed projects before the senior jury panel.",
      phase: "PHASE 04 • EVALUATION ROUND",
      image: "/moments/stage_presentation.jpg",
      date: "Dec 18, 11:00 AM",
      highlight: "Production Ready Demos",
    },
    {
      id: 5,
      title: "Trophy Handover & Champion Celebration",
      subtitle: "Glory moments as winners lift the ENIGMA2.0 trophy alongside ₹50,000+ cash prizes and certificates.",
      phase: "PHASE 05 • GRAND FELICITATION",
      image: "/moments/victory_celebration.jpg",
      date: "Dec 18, 04:00 PM",
      highlight: "₹50K+ In Cash & Trophies",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % moments.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPlaying, moments.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % moments.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + moments.length) % moments.length);
  };

  const current = moments[currentIndex];

  return (
    <section id="moments" className="relative py-24 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
          <Camera className="w-3.5 h-3.5" />
          <span>Real Hackathon Atmosphere</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Capturing The Energy of{" "}
          <span className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400">
            ENIGMA2.0
          </span>
        </h2>
        <p className="text-white/60 text-sm sm:text-base mt-3 max-w-xl mx-auto">
          From the electrifying opening keynote to the sleepless 24-hour code marathon and victorious podium celebrations.
        </p>
      </div>

      {/* Main Spotlight Showcase */}
      <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#070b1a]/90 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] shadow-cyan-950/20 group">
        
        {/* Active High-Res Photo Container */}
        <div className="relative w-full h-[360px] sm:h-[480px] md:h-[560px] overflow-hidden bg-black/60">
          <img
            key={current.id}
            src={current.image}
            alt={current.title}
            className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105 filter brightness-95 contrast-105"
          />

          {/* Cinematic Vignette Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060814] via-[#060814]/30 to-transparent opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060814]/80 via-transparent to-[#060814]/40" />

          {/* Top Left Phase Tag */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[11px] font-mono text-cyan-300 font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              {current.phase}
            </span>
            <span className="hidden sm:inline-block px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[11px] font-mono text-white/70">
              {current.date}
            </span>
          </div>

          {/* Top Right Controls (Lightbox + Play/Pause) */}
          <div className="absolute top-4 sm:top-6 right-4 sm:right-6 flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2.5 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white/80 hover:text-white transition-all cursor-pointer shadow-lg"
              title={isPlaying ? "Pause auto-slide" : "Start auto-slide"}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-cyan-400" />}
            </button>
            <button
              onClick={() => setLightboxImage(current.image)}
              className="p-2.5 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white/80 hover:text-white transition-all cursor-pointer shadow-lg"
              title="Full screen view"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>

          {/* Bottom Content Card */}
          <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl space-y-2">
              <div className="inline-block text-xs font-mono font-semibold text-fuchsia-400 tracking-wide">
                {current.highlight}
              </div>
              <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight drop-shadow-md">
                {current.title}
              </h3>
              <p className="text-white/80 text-xs sm:text-base leading-relaxed max-w-xl">
                {current.subtitle}
              </p>
            </div>

            {/* Slide Navigation Buttons */}
            <div className="flex items-center gap-2 self-end md:self-auto">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnail Filmstrip Preview Bar */}
        <div className="p-3 sm:p-4 bg-[#050713] border-t border-white/10 grid grid-cols-5 gap-2 sm:gap-3">
          {moments.map((item, idx) => {
            const isSelected = idx === currentIndex;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsPlaying(false);
                }}
                className={`relative group h-14 sm:h-20 rounded-xl overflow-hidden transition-all duration-300 text-left border ${
                  isSelected
                    ? "border-cyan-400 ring-2 ring-cyan-400/40 scale-[1.02] shadow-lg shadow-cyan-500/20"
                    : "border-white/10 opacity-50 hover:opacity-100 hover:border-white/30"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover filter brightness-80 group-hover:brightness-100 transition-all"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-1 left-1.5 right-1.5 hidden sm:block">
                  <div className="text-[10px] font-mono text-white/90 truncate font-semibold">
                    0{item.id}. {item.title.split(" ")[0]}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox Zoom Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={lightboxImage}
            alt="Enigma Moment Full"
            className="max-w-[92vw] max-h-[88vh] object-contain rounded-2xl shadow-2xl border border-white/15"
          />
        </div>
      )}
    </section>
  );
}
