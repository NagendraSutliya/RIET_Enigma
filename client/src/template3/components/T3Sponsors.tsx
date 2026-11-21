import React from "react";
import { Handshake, Mail, Terminal } from "lucide-react";
import { TechCorner } from "@/components/TechDecorations";

export default function T3Sponsors() {
  const titlePartner = {
    name: "Rajasthan Institute of Engineering & Technology",
    role: "Host & Title Institution",
    logo: "/rietlogo.png",
    url: "https://rietjaipur.ac.in",
  };

  const keyPartners = [
    { name: "OpenAI", role: "AI & API Credits Partner", logo: "/openai.png", url: "https://openai.com" },
    { name: ".XYZ Domains", role: "Official Domain Partner", logo: "/xyz.png", url: "https://gen.xyz" },
    { name: "Eventopia", role: "Event Ticketing & Logistics", logo: "/eventopia.png", url: "#" },
    { name: "SheKunj", role: "Women in Tech Ecosystem", logo: "/shekunj.png", url: "#" },
  ];

  return (
    <section id="sponsors" className="relative py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-emerald-600/10 blur-[160px] pointer-events-none -z-10 rounded-full" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
          <Handshake className="w-3.5 h-3.5" />
          <span>// ECOSYSTEM_SPONSORS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight leading-tight">
          Backed by{" "}
          <span className="font-mono text-emerald-400 drop-shadow-[0_0_20px_rgba(34,197,94,0.6)]">
            Industry Leaders
          </span>
        </h2>
        <p className="text-white/60 font-mono text-xs sm:text-sm mt-2 max-w-xl mx-auto">
          We collaborate with top tech leaders and organizations committed to empowering the next generation of engineers.
        </p>
      </div>

      {/* Title Partner Hero Card */}
      <div className="max-w-3xl mx-auto mb-12">
        <div className="relative rounded-none bg-[#050b07] border-2 border-emerald-500/40 p-8 text-center shadow-xl hover:border-emerald-400 transition-all duration-300">
          <TechCorner position="tl" />
          <TechCorner position="tr" />

          <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold uppercase tracking-wider border border-emerald-500/40 inline-block mb-5">
            HOST & TITLE PARTNER
          </span>
          <div className="flex items-center justify-center mb-4">
            <img
              src={titlePartner.logo}
              alt={titlePartner.name}
              className="h-20 sm:h-24 object-contain filter drop-shadow-[0_0_20px_rgba(52,211,153,0.4)]"
            />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
            {titlePartner.name}
          </h3>
          <p className="text-xs sm:text-sm font-mono text-emerald-400/80">
            Bhankrota, Ajmer Road, Jaipur, Rajasthan 302026
          </p>
        </div>
      </div>

      {/* Grid of Key Ecosystem & Technology Partners */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto mb-16">
        {keyPartners.map((partner, idx) => (
          <div
            key={idx}
            className="group rounded-none bg-[#050b07] border border-emerald-500/20 hover:border-emerald-400 p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <div className="h-16 flex items-center justify-center mb-4">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 max-w-[120px] object-contain filter brightness-90 group-hover:brightness-100 transition-all"
              />
            </div>
            <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
              {partner.name}
            </h4>
            <span className="text-[11px] font-mono text-emerald-400/60 mt-1">
              {partner.role}
            </span>
          </div>
        ))}
      </div>

      {/* Become a Partner Callout */}
      <div className="max-w-4xl mx-auto rounded-none bg-[#040805] border border-emerald-500/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left relative">
        <TechCorner position="bl" />
        <TechCorner position="tr" />

        <div>
          <h3 className="text-lg font-bold text-white mb-1 font-mono">
            Want to Sponsor ENIGMA2.0 or Scout Elite Talent?
          </h3>
          <p className="text-xs sm:text-sm text-white/60 max-w-xl font-sans">
            Connect with 800+ top engineers, mentor innovative teams, and showcase your brand to tech universities across India.
          </p>
        </div>
        <a
          href="mailto:hackathon@rietjaipur.ac.in"
          className="px-6 py-3 rounded-none bg-emerald-400 hover:bg-emerald-300 text-xs font-mono font-bold text-black flex items-center gap-2 transition-all hover:scale-105 shrink-0 uppercase tracking-wider"
        >
          <Mail className="w-4 h-4" />
          <span>Partner With Us</span>
        </a>
      </div>
    </section>
  );
}
