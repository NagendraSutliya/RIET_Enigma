import React, { useState, useEffect, useCallback, useRef } from "react";
import { Sparkles, Terminal, Cpu, Zap, Shield, ChevronRight, Volume2, VolumeX } from "lucide-react";
import { loadingSounds } from "./loadingSounds";

interface EnhancedLoadingScreenProps {
  onComplete: () => void;
}

export default function EnhancedLoadingScreen({ onComplete }: EnhancedLoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING ENIGMA2.0 CORE...");
  const [isExiting, setIsExiting] = useState(false);
  const [audioActive, setAudioActive] = useState(false);
  const completedRef = useRef(false);
  const soundStartedRef = useRef(false);
  const playedMilestonesRef = useRef<Set<number>>(new Set());

  // Sound unlock and start
  const startAudio = useCallback(async () => {
    try {
      const isRunning = await loadingSounds.ensureRunning();
      if (isRunning) {
        setAudioActive(true);
        if (!soundStartedRef.current) {
          soundStartedRef.current = true;
          try {
            loadingSounds.systemBoot();
          } catch (e) {}
        }
        return true;
      } else {
        setAudioActive(false);
        return false;
      }
    } catch (e) {
      setAudioActive(false);
      return false;
    }
  }, []);

  const finishLoading = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
    try {
      loadingSounds.accessGranted();
    } catch (e) {}
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 450);
  }, [onComplete]);

  // Ensure scroll is at top on mount & initialize audio
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }

    // Attempt autoplay sound immediately on mount
    startAudio();

    // Browser autoplay policy fallback: unlock on the very first touch/click/key
    const unlockEvents = ["pointerdown", "touchstart", "keydown", "click", "mousedown"];
    const handleUnlock = async () => {
      const ok = await startAudio();
      if (ok) {
        unlockEvents.forEach((evt) => window.removeEventListener(evt, handleUnlock));
      }
    };

    unlockEvents.forEach((evt) => window.addEventListener(evt, handleUnlock, { passive: true }));
    return () => {
      unlockEvents.forEach((evt) => window.removeEventListener(evt, handleUnlock));
    };
  }, [startAudio]);

  // Fast, cinematic progress counter (total ~2.4s)
  useEffect(() => {
    const statusUpdates = [
      { at: 15, text: "CONNECTING TO RIET JAIPUR HACKNET..." },
      { at: 35, text: "LOADING 24-HOUR HACKATHON PROTOCOLS..." },
      { at: 60, text: "SYNCING PROBLEM STATEMENTS & TRACKS..." },
      { at: 85, text: "SECURING DEV ENVIRONMENT // 17-18 DEC 2026..." },
      { at: 98, text: "VERIFICATION COMPLETE // LAUNCHING ENIGMA2.0..." },
    ];

    const startTime = Date.now();
    const duration = 2400; // 2.4s total duration for cinematic feel

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));

      setProgress(pct);

      // Sound blips at key milestones (25%, 50%, 75%)
      const milestones = [25, 50, 75];
      milestones.forEach((m) => {
        if (pct >= m && !playedMilestonesRef.current.has(m)) {
          playedMilestonesRef.current.add(m);
          try {
            loadingSounds.dataBlip();
          } catch (e) {}
        }
      });

      for (let i = statusUpdates.length - 1; i >= 0; i--) {
        if (pct >= statusUpdates[i].at) {
          setStatusText(statusUpdates[i].text);
          break;
        }
      }

      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          finishLoading();
        }, 300);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [finishLoading]);

  // Allow instant skip with keyboard (Space, Enter, Esc)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        finishLoading();
      } else if (e.key === " " || e.key === "Enter") {
        if (!audioActive) {
          startAudio();
        } else {
          finishLoading();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [finishLoading, startAudio, audioActive]);

  const handleContainerClick = async () => {
    if (!audioActive) {
      const ok = await startAudio();
      if (ok) {
        return; // Activated audio, let user enjoy the intro!
      }
    }
    finishLoading();
  };

  return (
    <div
      onClick={handleContainerClick}
      className={`fixed inset-0 z-[99999] bg-[#05060f] text-white flex flex-col items-center justify-center overflow-hidden cursor-pointer select-none transition-all duration-500 ${
        isExiting ? "opacity-0 scale-105 pointer-events-none filter blur-sm" : "opacity-100 scale-100"
      }`}
    >
      {/* Background Animated Gradient Lights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-green-500/15 via-emerald-500/10 to-violet-600/15 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-10 left-10 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Futuristic Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#22c55e 1px, transparent 1px), linear-gradient(90deg, #22c55e 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient Scanline overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, #000, #000 2px, transparent 2px, transparent 4px)",
        }}
      />

      {/* Cyber Corner HUD Brackets */}
      <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-emerald-500/40" />
      <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-emerald-500/40" />
      <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-emerald-500/40" />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-emerald-500/40" />

      {/* Top Protocol Telemetry */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span className="text-[11px] font-mono tracking-[0.25em] text-emerald-400 uppercase font-semibold">
          SYSTEM BOOT // PROTOCOL 2026
        </span>
      </div>

      {/* Sound Status Indicator Pill */}
      <button
        type="button"
        onClick={async (e) => {
          e.stopPropagation();
          await startAudio();
        }}
        className={`absolute top-6 right-6 sm:top-8 sm:right-8 z-30 flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono transition-all backdrop-blur-md cursor-pointer ${
          audioActive
            ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 shadow-[0_0_15px_rgba(34,197,94,0.25)]"
            : "bg-emerald-500/20 border-2 border-emerald-400 text-emerald-200 animate-pulse hover:bg-emerald-500/30 shadow-[0_0_25px_rgba(34,197,94,0.5)] font-bold"
        }`}
      >
        <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
        <span>{audioActive ? "SOUND: ON" : "ACTIVATE SOUND 🔊"}</span>
      </button>

      {/* Center Cinematic Showcase */}
      <div className="relative z-10 flex flex-col items-center max-w-2xl px-6 text-center">
        {/* Holographic Glowing Ring with RIET Logo */}
        <div className="relative mb-8 flex items-center justify-center">
          {/* Outer Rotating HUD Ring */}
          <div
            className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border border-dashed border-emerald-500/40"
            style={{ animation: "spin 12s linear infinite" }}
          />
          {/* Counter Rotating Inner Ring */}
          <div
            className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-violet-500/40 border-t-transparent border-b-transparent"
            style={{ animation: "spin 6s linear infinite reverse" }}
          />
          {/* Glowing Center Core */}
          <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-emerald-500/20 via-black to-violet-500/20 border border-emerald-500/30 backdrop-blur-xl flex items-center justify-center shadow-[0_0_40px_rgba(34,197,94,0.35)]">
            <img
              src="/mainlogo.png"
              alt="ENIGMA2.0 Logo"
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain filter drop-shadow-[0_0_15px_rgba(34,197,94,0.8)]"
              onError={(e) => {
                // fallback to icon if image missing
                (e.target as HTMLElement).style.display = "none";
              }}
            />
          </div>
        </div>

        {/* Institution Badge */}
        <div className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.35em] text-white/50 mb-2">
          RIET JAIPUR PRESENTS
        </div>

        {/* Grand Typography Reveal */}
        <div className="relative mb-4">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none flex items-baseline justify-center">
            <span className="text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]">
              ENIGMA
            </span>
            <span className="font-mono text-emerald-400 scale-y-135 inline-block origin-bottom font-black tracking-tighter drop-shadow-[0_0_30px_rgba(52,211,153,0.9)] ml-0.5">
              2.0
            </span>
          </h1>
          <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent mt-2 opacity-80" />
        </div>

        {/* Event Key Meta Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
          <span className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-[11px] sm:text-xs font-mono text-emerald-300">
            ⚡ 24-HOUR HACKATHON
          </span>
          <span className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-[11px] sm:text-xs font-mono text-violet-300">
            📅 17-18 DEC 2026
          </span>
          <span className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-[11px] sm:text-xs font-mono text-cyan-300">
            📍 RIET JAIPUR CAMPUS
          </span>
        </div>

        {/* Prominent Audio Callout if browser blocked initial autoplay */}
        {!audioActive && (
          <div className="mb-6 animate-bounce">
            <button
              type="button"
              onClick={async (e) => {
                e.stopPropagation();
                await startAudio();
              }}
              className="px-6 py-2.5 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-300 font-mono text-xs font-bold shadow-[0_0_35px_rgba(34,197,94,0.7)] hover:bg-emerald-500/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>TAP ANYWHERE FOR SOUND 🔊</span>
            </button>
          </div>
        )}

        {/* High-Tech Progress Gauge */}
        <div className="w-full max-w-md">
          {/* Progress Bar Container */}
          <div className="relative h-2 w-full bg-white/[0.06] rounded-full overflow-hidden p-0.5 border border-white/10 shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-300 rounded-full transition-all duration-100 shadow-[0_0_15px_rgba(52,211,153,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Telemetry and Percentage */}
          <div className="flex items-center justify-between mt-3 text-[11px] font-mono text-white/60">
            <span className="truncate pr-4 text-emerald-400/90 flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {statusText}
            </span>
            <span className="text-white font-bold tracking-wider">{progress}%</span>
          </div>
        </div>
      </div>

      {/* Bottom Skip Callout */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          finishLoading();
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[11px] font-mono text-white/40 hover:text-emerald-400 transition-colors px-4 py-2 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 cursor-pointer"
      >
        <span>Skip intro [ESC]</span>
        <ChevronRight className="w-3.5 h-3.5" />
      </button>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
