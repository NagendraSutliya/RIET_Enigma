import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause, Maximize2, X, Terminal, Camera, Shield } from "lucide-react";
import { TechCorner } from "@/components/TechDecorations";

interface MomentItem {
  id: number;
  title: string;
  subtitle: string;
  phase: string;
  image: string;
  date: string;
  hudCode: string;
}

export default function T3Moments() {
  const moments: MomentItem[] = [
    {
      id: 1,
      title: "The Midnight Coding Sprint",
      subtitle: "Teams collaborate through the night, debugging algorithms and building real-world software prototypes.",
      phase: "PHASE://02_24H_CODE_SPRINT",
      image: "/moments/coding_session.jpg",
      date: "17 DEC // 02:30 AM",
      hudCode: "CAM_FEED://LAB_ALPHA [ISO 800 // 60FPS]",
    },
    {
      id: 2,
      title: "Mainstage Keynote & Problem Reveal",
      subtitle: "Auditorium fills with anticipation as industry leaders and faculty unveil the national challenge themes.",
      phase: "PHASE://01_OPENING_KEYNOTE",
      image: "/moments/ai_hackathon_stage.jpg",
      date: "17 DEC // 10:00 AM",
      hudCode: "CAM_FEED://MAIN_STAGE [4K TELEMETRY]",
    },
    {
      id: 3,
      title: "Deep Technical Mentorship",
      subtitle: "Senior architects and startup founders sit 1-on-1 with teams to refine architecture and scalability.",
      phase: "PHASE://03_ARCHITECTURE_REVIEW",
      image: "/moments/mentor_round.jpg",
      date: "17 DEC // 06:30 PM",
      hudCode: "CAM_FEED://MENTOR_GRID [ACTIVE_JURY]",
    },
    {
      id: 4,
      title: "Live Product Demos & Judge Pitches",
      subtitle: "Top finalist teams pitch their working MVPs and live-deployed projects before the senior jury panel.",
      phase: "PHASE://04_EVALUATION_ROUND",
      image: "/moments/stage_presentation.jpg",
      date: "18 DEC // 11:00 AM",
      hudCode: "CAM_FEED://STAGE_AUDIT [LIVE_DEMO]",
    },
    {
      id: 5,
      title: "Trophy Handover & Champion Celebration",
      subtitle: "Glory moments as winners lift the ENIGMA2.0 trophy alongside ₹50,000+ cash prizes and certificates.",
      phase: "PHASE://05_GRAND_VALEDICTORY",
      image: "/moments/victory_celebration.jpg",
      date: "18 DEC // 04:00 PM",
      hudCode: "CAM_FEED://PODIUM_HONORS [CHAMPIONS]",
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
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-600/10 blur-[160px] pointer-events-none -z-10 rounded-full" />

      {/* Section Header with Cyber Terminal styling */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>// EVENT_MOMENTS_STREAM</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight leading-tight">
          Captured Reality of{" "}
          <span className="font-mono text-emerald-400 drop-shadow-[0_0_20px_rgba(34,197,94,0.6)]">
            ENIGMA2.0
          </span>
        </h2>
        <p className="text-white/60 font-mono text-xs sm:text-sm mt-2 max-w-xl mx-auto">
          From the opening keynote to the sleepless 24-hour code marathon and podium triumph.
        </p>
      </div>

      {/* Main Spotlight Showcase with Tech Corner & HUD Brackets */}
      <div className="relative rounded-none border border-emerald-500/30 bg-[#040805] shadow-2xl shadow-emerald-950/40 group overflow-hidden">
        
        {/* Tech corners */}
        <TechCorner position="tl" />
        <TechCorner position="tr" />
        <TechCorner position="bl" />
        <TechCorner position="br" />

        {/* Active High-Res Photo Container */}
        <div className="relative w-full h-[380px] sm:h-[480px] md:h-[560px] overflow-hidden bg-black">
          <img
            key={current.id}
            src={current.image}
            alt={current.title}
            className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105 filter brightness-95 contrast-105"
          />

          {/* Vignette Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020503] via-[#020503]/40 to-transparent opacity-95" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020503]/85 via-transparent to-[#020503]/40" />

          {/* Top Left HUD Telemetry Tag */}
          <div className="absolute top-5 sm:top-7 left-5 sm:left-7 flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <span className="px-3 py-1 bg-black/85 border border-emerald-500/40 text-[11px] font-mono text-emerald-300 font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              {current.phase}
            </span>
            <span className="px-2.5 py-1 bg-black/60 border border-white/10 text-[10px] font-mono text-emerald-400/70">
              {current.hudCode}
            </span>
          </div>

          {/* Top Right Controls (Lightbox + Play/Pause) */}
          <div className="absolute top-5 sm:top-7 right-5 sm:right-7 flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2.5 bg-black/70 hover:bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 transition-all cursor-pointer shadow-lg"
              title={isPlaying ? "Pause stream" : "Play stream"}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-emerald-400" />}
            </button>
            <button
              onClick={() => setLightboxImage(current.image)}
              className="p-2.5 bg-black/70 hover:bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 transition-all cursor-pointer shadow-lg"
              title="Full screen view"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>

          {/* Bottom Content Card */}
          <div className="absolute bottom-5 sm:bottom-8 left-5 sm:left-8 right-5 sm:right-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl space-y-2">
              <div className="text-xs font-mono font-semibold text-emerald-400 tracking-wider">
                [TIMESTAMP: {current.date}]
              </div>
              <h3 className="text-xl sm:text-3xl md:text-4xl font-serif font-black text-white tracking-tight">
                {current.title}
              </h3>
              <p className="text-white/70 text-xs sm:text-sm font-sans leading-relaxed max-w-xl">
                {current.subtitle}
              </p>
            </div>

            {/* Slide Navigation Buttons */}
            <div className="flex items-center gap-2 self-end md:self-auto">
              <button
                onClick={prevSlide}
                className="p-3 bg-black/80 hover:bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 bg-black/80 hover:bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnail Filmstrip Preview Bar */}
        <div className="p-3 bg-[#020503] border-t border-emerald-500/20 grid grid-cols-5 gap-2 sm:gap-3">
          {moments.map((item, idx) => {
            const isSelected = idx === currentIndex;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsPlaying(false);
                }}
                className={`relative group h-14 sm:h-20 overflow-hidden transition-all duration-300 text-left border ${
                  isSelected
                    ? "border-emerald-400 ring-2 ring-emerald-400/40 shadow-lg shadow-emerald-500/30"
                    : "border-emerald-500/20 opacity-50 hover:opacity-100 hover:border-emerald-500/40"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover filter brightness-80 group-hover:brightness-100 transition-all"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-1 left-1.5 right-1.5 hidden sm:block">
                  <div className="text-[9px] font-mono text-emerald-300 truncate font-bold">
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
            className="absolute top-6 right-6 p-3 rounded-none bg-black border border-emerald-500/40 text-emerald-400 hover:text-white cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={lightboxImage}
            alt="Enigma Moment Full"
            className="max-w-[92vw] max-h-[88vh] object-contain border border-emerald-500/40 shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
