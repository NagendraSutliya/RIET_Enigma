import React, { useState, useEffect } from "react";
import { useTemplate } from "@/context/TemplateContext";
import { Terminal, Sparkles, ChevronDown, ChevronUp, Layers, Eye } from "lucide-react";

export default function TemplateSwitcher() {
  const { template, setTemplate } = useTemplate();
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.style.setProperty(
        "--switcher-height",
        isCollapsed ? "0px" : "40px"
      );
    }
  }, [isCollapsed]);

  return (
    <>
      {/* Collapsed floating pill button in top right */}
      {isCollapsed ? (
        <button
          onClick={() => setIsCollapsed(false)}
          className="fixed top-3 right-4 z-[9999] flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/85 backdrop-blur-xl border border-white/20 text-xs font-mono text-white shadow-2xl hover:bg-white/10 transition-all hover:scale-105 group"
          title="Open Template Switcher"
        >
          <Layers className="w-3.5 h-3.5 text-violet-400 group-hover:rotate-12 transition-transform" />
          <span>
            {template === "template3"
              ? "Template 3 (Cyber Pro ✨)"
              : template === "template2"
              ? "Template 2 (Cosmic)"
              : "Template 1 (Hacker)"}
          </span>
          <ChevronDown className="w-3.5 h-3.5 opacity-60" />
        </button>
      ) : (
        /* Top Switcher Bar */
        <div className="fixed top-0 left-0 right-0 z-[9999] h-10 bg-[#080811]/95 backdrop-blur-xl border-b border-white/10 px-3 sm:px-6 shadow-2xl transition-all flex items-center">
          <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-2 text-xs">
            {/* Left title badge */}
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold tracking-wider uppercase text-white/90 font-mono flex items-baseline gap-1">
                <Layers className="w-3.5 h-3.5 text-violet-400 self-center" />
                <span>ENIGMA</span>
                <span className="font-black text-sm text-fuchsia-400 scale-y-125 inline-block origin-bottom">2.0</span>
              </span>
              <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] bg-white/5 border border-white/10 text-white/60 font-mono">
                UI Switcher
              </span>
            </div>

            {/* Template Selector Segmented Control */}
            <div className="flex items-center p-0.5 bg-black/60 rounded-full border border-white/15">
              <button
                onClick={() => setTemplate("template1")}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  template === "template1"
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm shadow-emerald-500/20 font-semibold"
                    : "text-white/60 hover:text-white/90 hover:bg-white/5"
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Template 1</span>
                <span className="hidden xl:inline text-[10px] opacity-75 font-mono">(Hacker)</span>
              </button>

              <button
                onClick={() => setTemplate("template3")}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  template === "template3"
                    ? "bg-gradient-to-r from-emerald-500/30 via-emerald-600/40 to-teal-500/40 text-emerald-200 border border-emerald-400/60 shadow-md shadow-emerald-500/25 font-bold"
                    : "text-white/60 hover:text-white/90 hover:bg-white/5"
                }`}
              >
                <Terminal className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span>Template 3</span>
                <span className="px-1.5 py-0.2 rounded-full bg-emerald-400/20 text-[9px] font-mono text-emerald-300 border border-emerald-400/40 uppercase font-black tracking-wider">
                  CYBER PRO ✨
                </span>
              </button>

              <button
                onClick={() => setTemplate("template2")}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  template === "template2"
                    ? "bg-gradient-to-r from-violet-600/40 to-fuchsia-600/40 text-violet-200 border border-violet-500/50 shadow-sm shadow-violet-500/20 font-semibold"
                    : "text-white/60 hover:text-white/90 hover:bg-white/5"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
                <span>Template 2</span>
                <span className="hidden xl:inline text-[10px] opacity-75 font-mono">(Cosmic)</span>
              </button>
            </div>

            {/* Right side minimize / preview tag */}
            <div className="flex items-center gap-2">
              <span className="hidden lg:flex items-center gap-1 text-[11px] text-white/50 font-mono">
                <Eye className="w-3 h-3" />
                Active:{" "}
                <span className="text-white font-medium">
                  {template === "template3"
                    ? "Matrix Cyber Pro ✨"
                    : template === "template2"
                    ? "Cosmic Aurora"
                    : "Cyber Hacker"}
                </span>
              </span>
              <button
                onClick={() => setIsCollapsed(true)}
                className="p-1 rounded text-white/50 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                title="Minimize Switcher to Pill"
              >
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
