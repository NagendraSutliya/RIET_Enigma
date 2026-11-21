import React, { useState, useEffect } from "react";
import { useTemplate } from "@/context/TemplateContext";
import { loadingSounds } from "@/components/loadingSounds";
import { Menu, X, Volume2, ArrowRight, Sparkles, Shield, Trophy } from "lucide-react";

interface T3NavbarProps {
  onRegisterClick?: () => void;
}

export default function T3Navbar({ onRegisterClick }: T3NavbarProps) {
  const { playLaunchAnimation } = useTemplate();
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home", id: "home" },
    { label: "Moments", href: "#moments", id: "moments" },
    { label: "Campaign", href: "#campaign", id: "campaign" },
    { label: "Rules", href: "#rules", id: "rules" },
    { label: "Tracks", href: "#tracks", id: "tracks" },
    { label: "Schedule", href: "#schedule", id: "schedule" },
    { label: "Speakers", href: "#speakers", id: "speakers" },
    { label: "Prizes", href: "#prizes", id: "prizes" },
    { label: "Sponsors", href: "#sponsors", id: "sponsors" },
    { label: "FAQ", href: "#faq", id: "faq" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Scrollspy calculation using viewport relative positioning
      const scrollPosition = window.scrollY + 200;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    setIsMobileMenuOpen(false);

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (window.location.hash) {
        history.replaceState(null, "", window.location.pathname + window.location.search);
      }
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const switcherOffset = 50;
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - switcherOffset - navOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth"
      });
      history.replaceState(null, "", `#${id}`);
    }
  };

  const handleLogoClick = () => {
    loadingSounds.ensureRunning();
    playLaunchAnimation();
  };

  return (
    <header className="fixed top-12 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Dynamic Island Floating Glass Pill */}
        <div className={`pointer-events-auto flex items-center justify-between w-full rounded-2xl sm:rounded-full px-3 sm:px-5 py-2.5 transition-all duration-300 ${
          isScrolled 
            ? "bg-[#060814]/85 backdrop-blur-2xl border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.7)] shadow-cyan-500/5 ring-1 ring-white/10" 
            : "bg-[#070b1a]/70 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
        }`}>
          
          {/* Brand Logo with Replay Sound Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleLogoClick}
              className="flex items-center gap-2 group text-left transition-transform hover:scale-105 active:scale-95 cursor-pointer"
              title="Click to replay launch sound & animation"
            >
              <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 via-violet-600 to-fuchsia-500 p-0.5 shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-400/50 transition-shadow">
                <div className="w-full h-full bg-[#08091a] rounded-[7px] flex items-center justify-center">
                  <span className="font-mono font-black text-xs text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">
                    E2
                  </span>
                </div>
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#08091a] animate-pulse" />
              </div>

              <div className="flex flex-col">
                <span className="font-mono font-black tracking-tight text-white text-base sm:text-lg flex items-baseline leading-none">
                  <span>ENIGMA</span>
                  <span className="text-cyan-400 scale-y-125 inline-block origin-bottom font-black ml-0.5 drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]">
                    2.0
                  </span>
                </span>
                <span className="text-[9px] font-mono tracking-widest text-white/50 uppercase">
                  RIET JAIPUR
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Single-Page Navigation Menu (10 Items strictly in sequence) */}
          <nav className="hidden xl:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full px-3 py-1 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`relative px-2.5 py-1 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "text-white font-semibold shadow-sm"
                      : "text-white/65 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/30 via-violet-500/30 to-fuchsia-500/30 border border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.35)] -z-10 animate-fade-in" />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Elements */}
          <div className="flex items-center gap-2">
            {/* Audio Replay Button */}
            <button
              onClick={handleLogoClick}
              className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-mono text-cyan-300 transition-colors cursor-pointer"
              title="Play Launch Audio & Intro"
            >
              <Volume2 className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span className="hidden lg:inline">Audio</span>
            </button>

            {/* Direct Register CTA Button (Google Form) */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe8WhPNn5GqrEhduyX8juD-kzTwGS9TJ0uDqpQs0hc4Yhwlzg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onRegisterClick}
              className="relative group overflow-hidden flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-bold text-white transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/50 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-violet-600 to-fuchsia-600 transition-all duration-300 group-hover:opacity-90" />
              <span className="relative flex items-center gap-1.5 tracking-wide">
                <span>Register</span>
                <span className="hidden sm:inline">Team</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Down Glass Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="pointer-events-auto xl:hidden mt-2 max-w-7xl mx-auto rounded-3xl bg-[#070b1a]/95 backdrop-blur-2xl border border-white/15 p-5 shadow-2xl shadow-black ring-1 ring-white/10 animate-fade-in">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-500/25 to-violet-500/25 text-cyan-300 border border-cyan-400/40 shadow-sm shadow-cyan-500/20 font-bold"
                      : "bg-white/[0.03] text-white/70 hover:text-white hover:bg-white/10 border border-white/5"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                </a>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-3">
            <button
              onClick={handleLogoClick}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 text-xs text-white/70 hover:text-white font-mono"
            >
              <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Replay Intro</span>
            </button>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe8WhPNn5GqrEhduyX8juD-kzTwGS9TJ0uDqpQs0hc4Yhwlzg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 px-4 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-cyan-500 to-fuchsia-600 shadow-md shadow-cyan-500/30"
            >
              Register Team Now →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
