import React, { useState, useEffect } from "react";
import { Sparkles, Menu, X, ArrowRight, Volume2 } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useTemplate } from "@/context/TemplateContext";
import { loadingSounds } from "@/components/loadingSounds";

interface T3NavbarProps {
  onRegisterClick: () => void;
}

export default function T3Navbar({ onRegisterClick }: T3NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const [activeSection, setActiveSection] = useState<string>("overview");
  const { playLaunchAnimation } = useTemplate();

  const triggerLaunchWithSound = () => {
    loadingSounds.ensureRunning();
    playLaunchAnimation();
  };

  const navLinks = [
    { name: "Home", href: "#overview" },
    { name: "Event Moments", href: "#moments" },
    { name: "Campaign", href: "#campaign" },
    { name: "Rules", href: "#rules" },
    { name: "Tracks", href: "#tracks" },
    { name: "Schedule", href: "#timeline" },
    { name: "Prizes", href: "#prizes" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "FAQs", href: "#faqs" },
  ];

  useEffect(() => {
    // Ensure on page load / refresh the page always starts at the top (Home/Overview)
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
      setActiveSection("overview");
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (location !== "/" && location !== "" && location !== "/template-2") return;

      if (window.scrollY < 80) {
        setActiveSection("overview");
        return;
      }

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 70) {
        setActiveSection("faqs");
        return;
      }

      const navbarOffset = 180;
      let foundSection = "overview";

      for (const item of navLinks) {
        const id = item.href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= navbarOffset && rect.bottom > 60) {
            foundSection = id;
          }
        }
      }

      setActiveSection(foundSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const id = href.replace("#", "");
    if (id === "overview") {
      e.preventDefault();
      setActiveSection("overview");
      setMobileMenuOpen(false);
      window.history.pushState(null, "", "#overview");
      triggerLaunchWithSound();
      return;
    }

    if (location === "/" || location === "" || location === "/template-2") {
      e.preventDefault();
      setActiveSection(id);
      setMobileMenuOpen(false);
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 90;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
        window.history.pushState(null, "", href);
      }
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      style={{ top: "calc(var(--switcher-height, 40px) + 8px)" }}
      className={`sticky z-40 transition-all duration-300 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto`}
    >
      <div
        className={`rounded-2xl transition-all duration-300 border ${
          scrolled
            ? "bg-[#0b0c1e]/90 backdrop-blur-xl border-violet-500/25 shadow-2xl shadow-violet-950/40 py-2.5"
            : "bg-[#0f1129]/75 backdrop-blur-md border-white/10 py-3.5"
        } px-4 sm:px-6 flex items-center justify-between`}
      >
        {/* Brand / Logo */}
        <Link
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setActiveSection("overview");
            window.history.pushState(null, "", "#overview");
            triggerLaunchWithSound();
          }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-fuchsia-500 p-0.5 shadow-lg shadow-violet-500/25 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0a0a14] rounded-[10px] flex items-center justify-center overflow-hidden">
              <img
                src="/rietlogo.png"
                alt="RIET Logo"
                className="w-7 h-7 object-contain group-hover:rotate-6 transition-transform"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-baseline">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 font-sans">
                ENIGMA
              </span>
              <span className="font-black text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400 scale-y-130 inline-block origin-bottom tracking-tighter drop-shadow-[0_0_12px_rgba(232,121,249,0.8)]">
                2.0
              </span>
            </div>
            <span className="text-[10px] text-white/50 tracking-wider font-mono">
              RIET JAIPUR • 24H HACKATHON
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            const targetHref =
              location === "/" || location === "" || location === "/template-2"
                ? link.href
                : `/${link.href}`;

            return (
              <a
                key={link.name}
                href={targetHref}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-1.5 rounded-xl text-xs xl:text-sm transition-all font-medium border ${
                  isActive
                    ? "text-violet-200 font-bold bg-white/[0.12] border-violet-500/40 shadow-lg shadow-violet-500/20 backdrop-blur-md"
                    : "text-white/70 hover:text-white hover:bg-white/[0.06] border-transparent"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={triggerLaunchWithSound}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-medium text-violet-200 bg-white/5 hover:bg-white/10 border border-violet-500/30 hover:border-violet-400/50 transition-all cursor-pointer shadow-sm"
            title="Replay Launcher Animation & Sound"
          >
            <Volume2 className="w-3.5 h-3.5 text-fuchsia-400 animate-pulse" />
            <span>Intro</span>
          </button>

          <button
            onClick={onRegisterClick}
            className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-white overflow-hidden shadow-lg shadow-violet-600/30 hover:shadow-violet-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all group bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600"
          >
            <Sparkles className="w-4 h-4 text-violet-200 group-hover:rotate-12 transition-transform" />
            <span>Register Team</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 p-4 rounded-2xl bg-[#0b0c1e]/95 backdrop-blur-2xl border border-violet-500/20 shadow-2xl flex flex-col gap-1 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            const targetHref =
              location === "/" || location === "" || location === "/template-2"
                ? link.href
                : `/${link.href}`;

            return (
              <a
                key={link.name}
                href={targetHref}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors border ${
                  isActive
                    ? "text-violet-200 font-bold bg-white/10 border-violet-500/40 shadow-sm"
                    : "text-white/80 hover:text-white hover:bg-white/5 border-transparent"
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-2 mt-1 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                triggerLaunchWithSound();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-mono text-xs text-violet-200 bg-white/5 border border-violet-500/20 hover:bg-white/10 transition-colors"
            >
              <Volume2 className="w-4 h-4 text-fuchsia-400" />
              <span>Replay Launch Intro & Sound</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRegisterClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 shadow-lg shadow-violet-600/30"
            >
              <Sparkles className="w-4 h-4" />
              <span>Register Team</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
