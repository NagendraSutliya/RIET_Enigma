import React from "react";
import { ArrowUp, Github, Twitter, Instagram, Linkedin, Terminal } from "lucide-react";

export default function T2Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Event Moments", href: "#moments" },
    { label: "Campaign", href: "#campaign" },
    { label: "Rules", href: "#rules" },
    { label: "Tracks", href: "#tracks" },
    { label: "Schedule", href: "#schedule" },
    { label: "Speakers", href: "#speakers" },
    { label: "Prizes", href: "#prizes" },
    { label: "Sponsors", href: "#sponsors" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    if (id === "home") {
      scrollToTop();
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const offset = 120;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: Math.max(0, elementPosition - offset),
        behavior: "smooth"
      });
      history.replaceState(null, "", href);
    }
  };

  return (
    <footer className="relative border-t border-emerald-500/20 bg-[#020503] pt-16 pb-12 px-4 sm:px-6 overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-emerald-600/5 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-emerald-500/20">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-mono font-black tracking-tight text-white text-2xl flex items-baseline">
                <span>ENIGMA</span>
                <span className="text-emerald-400 scale-y-135 inline-block origin-bottom font-black ml-0.5">
                  2.0
                </span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-white/60 max-w-md font-sans leading-relaxed">
              Rajasthan’s premier 24-hour national hackathon bringing together the brightest minds to code, design, and deploy generational tech solutions.
            </p>

            {/* Live Operational Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/60 border border-emerald-500/30 text-[11px] font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>// ALL SYSTEMS OPERATIONAL • DEC 17–18, 2026</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-300">
              // INDEX_NAVIGATION
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-white/60 font-mono">
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="hover:text-emerald-300 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-300">
              // TELEMETRY_LINKS
            </h4>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-black/60 hover:bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-black/60 hover:bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-black/60 hover:bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-black/60 hover:bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-white/50 pt-2 font-mono">
              RIET Jaipur Campus, Bhankrota, Ajmer Road, Jaipur
            </p>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
          <div>
            © 2026 Rajasthan Institute of Engineering & Technology (RIET), Jaipur.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 bg-black/60 hover:bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 transition-all cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
