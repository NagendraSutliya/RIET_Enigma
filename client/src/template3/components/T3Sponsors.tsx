import React from "react";
import { Handshake, ExternalLink, Mail, Sparkles, Building2 } from "lucide-react";

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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-600/10 blur-[160px] pointer-events-none -z-10 rounded-full" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
          <Handshake className="w-3.5 h-3.5" />
          <span>Ecosystem & Industry Support</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Backed by{" "}
          <span className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400">
            Pioneering Partners
          </span>
        </h2>
        <p className="text-white/60 text-sm sm:text-base mt-3 max-w-xl mx-auto">
          We collaborate with top tech leaders and organizations committed to empowering the next generation of engineers.
        </p>
      </div>

      {/* Title Partner Hero Card */}
      <div className="max-w-3xl mx-auto mb-12">
        <div className="rounded-3xl bg-gradient-to-r from-[#070b1a] via-[#0d1430] to-[#070b1a] border border-cyan-500/30 p-8 text-center backdrop-blur-2xl shadow-xl hover:border-cyan-400/60 transition-all duration-300">
          <span className="px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider border border-cyan-500/30 inline-block mb-5">
            HOST & TITLE PARTNER
          </span>
          <div className="flex items-center justify-center mb-4">
            <img
              src={titlePartner.logo}
              alt={titlePartner.name}
              className="h-20 sm:h-24 object-contain filter drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]"
            />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
            {titlePartner.name}
          </h3>
          <p className="text-xs sm:text-sm font-mono text-white/60">
            Bhankrota, Ajmer Road, Jaipur, Rajasthan 302026
          </p>
        </div>
      </div>

      {/* Grid of Key Ecosystem & Technology Partners */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto mb-16">
        {keyPartners.map((partner, idx) => (
          <div
            key={idx}
            className="group rounded-2xl bg-[#070b1a]/80 backdrop-blur-xl border border-white/10 hover:border-white/25 p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <div className="h-16 flex items-center justify-center mb-4">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 max-w-[120px] object-contain filter brightness-90 group-hover:brightness-100 transition-all"
              />
            </div>
            <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
              {partner.name}
            </h4>
            <span className="text-[11px] font-mono text-white/50 mt-1">
              {partner.role}
            </span>
          </div>
        ))}
      </div>

      {/* Become a Partner Callout */}
      <div className="max-w-4xl mx-auto rounded-3xl bg-white/[0.02] border border-white/10 p-6 sm:p-8 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <h3 className="text-lg font-bold text-white mb-1">
            Want to Sponsor ENIGMA2.0 or Scout Elite Talent?
          </h3>
          <p className="text-xs sm:text-sm text-white/60 max-w-xl">
            Connect with 500+ top engineers, mentor innovative teams, and showcase your brand to tech universities across India.
          </p>
        </div>
        <a
          href="mailto:hackathon@rietjaipur.ac.in"
          className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-mono font-bold text-white flex items-center gap-2 transition-all hover:scale-105 shrink-0"
        >
          <Mail className="w-4 h-4 text-cyan-400" />
          <span>Partner With Us</span>
        </a>
      </div>
    </section>
  );
}
