import React from "react";
import { MapPin, Navigation, Train, Plane, Bus, Wifi, Zap, Shield, Coffee, Terminal } from "lucide-react";
import { TechCorner } from "@/components/TechDecorations";

export default function T3Venue() {
  const campusHighlights = [
    { icon: Wifi, title: "Gigabit Campus Fiber", desc: "Low-latency Wi-Fi & LAN ports throughout all hack zones" },
    { icon: Zap, title: "100% Uninterrupted Power", desc: "Dual backup generators keeping machines running 24/7" },
    { icon: Shield, title: "24/7 Campus Security", desc: "Monitored campus with faculty and medical staff on standby" },
    { icon: Coffee, title: "Round-the-clock Refreshments", desc: "Coffee machines, snacks, energy drinks, and meals" },
  ];

  const transitInfo = [
    { icon: Train, label: "Jaipur Junction Railway Station", distance: "~12 km (25-30 mins by Cab/Auto)" },
    { icon: Bus, label: "Sindhi Camp Central Bus Stand", distance: "~13 km (30 mins by Metro/Bus)" },
    { icon: Plane, label: "Jaipur International Airport (JAI)", distance: "~14 km (25 mins by Cab via Ring Road)" },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-emerald-600/10 blur-[160px] pointer-events-none -z-10 rounded-full" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
          <MapPin className="w-3.5 h-3.5" />
          <span>// PHYSICAL_VENUE_LOGISTICS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight leading-tight">
          Venue & Campus{" "}
          <span className="font-mono text-emerald-400 drop-shadow-[0_0_20px_rgba(34,197,94,0.6)]">
            Guide
          </span>
        </h2>
        <p className="text-white/60 font-mono text-xs sm:text-sm mt-2 max-w-xl mx-auto">
          Located in the Pink City of Jaipur. State-of-the-art campus infrastructure ready to host 800+ builders.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* Left: Venue Address Card & Transit */}
        <div className="relative rounded-none bg-[#050b07] border border-emerald-500/30 p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
          <TechCorner position="tl" />
          <TechCorner position="br" />

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-black border border-emerald-500/40 text-emerald-400">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-mono">
                  RIET Jaipur Campus
                </h3>
                <p className="text-xs font-mono text-emerald-400">
                  Rajasthan Institute of Engineering & Technology
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6 font-sans">
              Bhankrota, Ajmer Road, Jaipur, Rajasthan 302026. Equipped with high-capacity air-conditioned laboratories, grand auditoriums, and open-air greens.
            </p>

            <div className="space-y-3 mb-6">
              <span className="text-xs font-mono uppercase text-emerald-400/70 tracking-wider block">
                // CONNECTIVITY & TRANSIT:
              </span>
              {transitInfo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-3 p-3 bg-black/60 border border-emerald-500/15 text-xs text-white/80">
                    <Icon className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <span className="font-semibold block text-white font-mono">{item.label}</span>
                      <span className="text-[11px] text-white/50 font-mono">{item.distance}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <a
            href="https://maps.google.com/?q=Rajasthan+Institute+of+Engineering+and+Technology+Jaipur"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-6 rounded-none bg-emerald-400 hover:bg-emerald-300 text-black font-bold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30 transition-all hover:scale-[1.02]"
          >
            <Navigation className="w-4 h-4" />
            <span>Open in Google Maps Navigation</span>
          </a>
        </div>

        {/* Right: Campus Infrastructure Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {campusHighlights.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="group rounded-none bg-[#050b07] border border-emerald-500/20 hover:border-emerald-400 p-6 flex flex-col justify-between transition-all duration-300 shadow-xl"
              >
                <div>
                  <div className="p-3 bg-black border border-emerald-500/30 text-emerald-400 w-fit mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 font-mono">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-white/60 font-sans leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
