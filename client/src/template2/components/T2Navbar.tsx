import React, { useState, useEffect } from "react";
import { useTemplate } from "@/context/TemplateContext";
import { loadingSounds } from "@/components/loadingSounds";
import { Menu, X, ArrowRight, Terminal, Shield, Zap } from "lucide-react";

interface T2NavbarProps {
  onRegisterClick?: () => void;
}

export default function T2Navbar({ onRegisterClick }: T2NavbarProps) {
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
        
        {/* Cyber-Matrix Floating Dynamic Island Pill */}
        <div className={`pointer-events-auto flex items-center justify-between w-full rounded-none sm:rounded-full px-3.5 sm:px-6 py-2.5 transition-all duration-300 ${
          isScrolled 
            ? "bg-[#040806]/95 backdrop-blur-2xl border border-emerald-500/40 shadow-[0_12px_40px_rgba(0,0,0,0.8)] shadow-emerald-950/40 ring-1 ring-emerald-500/20" 
            : "bg-[#050b08]/80 backdrop-blur-xl border border-emerald-500/25 shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
        }`}>
          
          {/* Brand Logo with Replay Sound Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleLogoClick}
              className="flex items-center gap-2 group text-left transition-transform hover:scale-105 active:scale-95 cursor-pointer"
              title="Click to replay launch sound & hacker terminal"
            >
              <div className="relative w-8 h-8 rounded bg-[#020503] border border-emerald-500/50 flex items-center justify-center p-0.5 shadow-md shadow-emerald-500/30 group-hover:border-emerald-400 group-hover:shadow-emerald-400/60 transition-all">
                <Terminal className="w-4 h-4 text-emerald-400 group-hover:rotate-12 transition-transform" />
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-black animate-ping" />
              </div>

              <div className="flex flex-col">
                <span className="font-mono font-black tracking-tight text-white text-base sm:text-lg flex items-baseline leading-none">
                  <span className="group-hover:text-emerald-300 transition-colors">ENIGMA</span>
                  <span className="text-emerald-400 scale-y-135 inline-block origin-bottom font-black ml-0.5 drop-shadow-[0_0_12px_rgba(52,211,153,0.8)]">
                    2.0
                  </span>
                </span>
                <span className="text-[8px] font-mono tracking-widest text-emerald-400/70 uppercase">
                  RIET // JAIPUR
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Single-Page Navigation Menu (10 Items strictly in sequence) */}
          <nav className="hidden xl:flex items-center gap-1 bg-[#020503]/80 border border-emerald-500/20 rounded-full px-3 py-1 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`relative px-3 py-1 text-xs font-mono font-medium rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "text-emerald-300 font-bold bg-emerald-500/20 border border-emerald-500/50 shadow-[0_0_12px_rgba(16,185,129,0.35)]"
                      : "text-white/70 hover:text-emerald-300 hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Elements */}
          <div className="flex items-center gap-2">
            {/* Direct Register CTA Button (Google Form) */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe8WhPNn5GqrEhduyX8juD-kzTwGS9TJ0uDqpQs0hc4Yhwlzg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onRegisterClick}
              className="relative group overflow-hidden flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full font-mono text-xs font-bold text-black bg-emerald-400 hover:bg-emerald-300 transition-all duration-300 shadow-[0_0_25px_rgba(52,211,153,0.5)] hover:shadow-[0_0_35px_rgba(52,211,153,0.8)] hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span className="relative flex items-center gap-1.5 uppercase tracking-wider">
                <span>Register</span>
                <span className="hidden sm:inline">Now</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg bg-emerald-950/30 hover:bg-emerald-900/40 border border-emerald-500/30 text-emerald-400 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-emerald-300" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Down Cyber Drawer */}
      {isMobileMenuOpen && (
        <div className="pointer-events-auto xl:hidden mt-2 max-w-7xl mx-auto rounded-2xl bg-[#040806]/98 backdrop-blur-2xl border border-emerald-500/30 p-5 shadow-2xl shadow-black ring-1 ring-emerald-500/20 animate-fade-in font-mono">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold shadow-sm"
                      : "bg-white/[0.03] text-white/70 hover:text-emerald-300 hover:bg-white/10 border border-white/5"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />}
                </a>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-emerald-500/20">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe8WhPNn5GqrEhduyX8juD-kzTwGS9TJ0uDqpQs0hc4Yhwlzg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-2.5 px-4 rounded-lg font-bold text-xs text-black bg-emerald-400 shadow-md shadow-emerald-500/30 uppercase tracking-wider"
            >
              Register Team Now →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
