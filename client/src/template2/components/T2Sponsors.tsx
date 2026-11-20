import React from "react";
import { Sparkles, Mail, ExternalLink, ArrowRight, Handshake } from "lucide-react";

interface T2SponsorsProps {
  onSponsorClick?: () => void;
}

export default function T2Sponsors({ onSponsorClick }: T2SponsorsProps) {
  const sponsors = [
    {
      name: "OpenAI",
      category: "Official AI & Intelligence Partner",
      logo: "/openai.png",
      tier: "Platinum",
    },
    {
      name: "Rajasthan Institute of Engineering & Technology",
      category: "Host Institution & Venue Partner",
      logo: "/rietlogo.png",
      tier: "Host",
    },
    {
      name: "SheKunj",
      category: "Women in Tech & Diversity Partner",
      logo: "/shekunj.png",
      tier: "Community",
    },
    {
      name: "Eventopia",
      category: "Ticketing & Experience Partner",
      logo: "/eventopia.png",
      tier: "Platform",
    },
    {
      name: ".XYZ Domains",
      category: "Official Web3 & Domain Partner",
      logo: "/xyz.png",
      tier: "Digital Perks",
    },
  ];

  return (
    <section id="sponsors" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Handshake className="w-3.5 h-3.5 text-violet-400" />
            <span>Backed By Industry Leaders</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Our Visionary{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-400">
              Partners & Sponsors
            </span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg">
            Empowering the next generation of engineers with real-world APIs, hardware kits, cash bounties, and cloud grants.
          </p>
        </div>

        {/* Sponsor Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {sponsors.map((sponsor, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-violet-500/40 hover:bg-white/[0.05] transition-all duration-300 backdrop-blur-xl shadow-lg flex flex-col items-center justify-center text-center group"
            >
              <div className="w-24 h-16 sm:w-28 sm:h-20 flex items-center justify-center mb-4 p-2">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
                  onError={(e) => {
                    // Fallback to text if missing
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-violet-300 transition-colors">
                {sponsor.name}
              </h4>
              <span className="text-[10px] font-mono text-white/50 mt-1 uppercase">
                {sponsor.category}
              </span>
            </div>
          ))}
        </div>

        {/* Sponsor Call to Action Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-violet-900/30 via-purple-900/20 to-fuchsia-900/30 border border-violet-500/30 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">
              Interested in Sponsoring ENIGMA2.0?
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Connect with 800+ passionate engineers, recruit top technical talent, run custom problem statements, and amplify your brand across premier universities in India.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href="mailto:hackathon@rietjaipur.ac.in"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 shadow-lg shadow-violet-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Sponsorship Team</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
