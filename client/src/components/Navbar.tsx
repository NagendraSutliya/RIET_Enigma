import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useTemplate } from "@/context/TemplateContext";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Event Moments", href: "#moments" },
  { name: "Campaign", href: "#campaign" },
  { name: "Rules", href: "#rules" },
  { name: "Tracks", href: "#tracks" },
  { name: "Schedule", href: "#schedule" },
  { name: "Judges", href: "#speakers" },
  { name: "Prizes", href: "#prizes" },
  { name: "Sponsors", href: "#sponsors" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const [activeSection, setActiveSection] = useState<string>("home");
  const { playLaunchAnimation } = useTemplate();

  useEffect(() => {
    // Ensure on page load / refresh the page always starts at the top (Home)
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
      setActiveSection("home");
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 12);

      if (location !== "/" && location !== "") return;

      if (window.scrollY < 80) {
        setActiveSection("home");
        return;
      }

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 70) {
        setActiveSection("faq");
        return;
      }

      const navbarOffset = 180;
      let foundSection = "home";

      for (const item of navItems) {
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
    if (id === "home") {
      e.preventDefault();
      setActiveSection("home");
      setMenuOpen(false);
      window.history.pushState(null, "", "#home");
      playLaunchAnimation();
      return;
    }

    if (location === "/" || location === "") {
      e.preventDefault();
      setActiveSection(id);
      setMenuOpen(false);
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 110;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
        window.history.pushState(null, "", href);
      }
    } else {
      setMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" : "bg-background/80 backdrop-blur-md border-b border-border/40"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Top Row: ENIGMA 2.0 (Left) and RIET & SGI Logos (Right) */}
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setActiveSection("home");
              window.history.pushState(null, "", "#home");
              playLaunchAnimation();
            }}
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group"
          >
            <img
              src="/enigma-emblem.png"
              alt="ENIGMA2.0 Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain scale-105 group-hover:scale-110 transition-transform duration-300"
            />
            <div className="flex flex-col">
              <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.25em] sm:tracking-[0.3em] text-muted-foreground leading-tight">
                RIET Presents
              </span>
              <span className="text-xl sm:text-2xl font-serif font-bold text-foreground flex items-baseline leading-none mt-0.5">
                <span>ENIGMA</span>
                <span className="text-2xl sm:text-3xl font-mono font-black text-primary scale-y-130 inline-block origin-bottom tracking-tighter">
                  2.0
                </span>
              </span>
            </div>
          </Link>

          {/* Right: RIET & SGI Logos on the top right */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* RIET Logo Badge */}
            <div className="flex items-center gap-1 sm:gap-0 bg-white rounded-lg sm:rounded-xl p-0.5 shadow-sm border border-border/50 hover:border-primary/50 transition-all duration-200 hover:scale-105">
              <img
                src="/riet_logo.jpg"
                alt="RIET Jaipur"
                className="w-7 h-7 sm:w-12 sm:h-12 object-contain"
              />
              {/* <div className="hidden md:flex flex-col text-left leading-none">
                <span className="text-[10px] font-bold text-slate-900 tracking-wide">RIET</span>
                <span className="text-[8px] font-mono text-slate-500 uppercase tracking-tighter">Jaipur</span>
              </div> */}
            </div>

            {/* SGI Logo Badge */}
            <div className="flex items-center gap-1 sm:gap-0 bg-white rounded-lg sm:rounded-xl p-0.5 shadow-sm border border-border/50 hover:border-primary/50 transition-all duration-200 hover:scale-105">
              <img
                src="/sgi_logo.jpg"
                alt="Sapiens Group of Institutes"
                className="w-7 h-7 sm:w-12 sm:h-12 object-contain"
              />
              {/* <div className="hidden md:flex flex-col text-left leading-none">
                <span className="text-[10px] font-bold text-slate-900 tracking-wide">SGI</span>
                <span className="text-[8px] font-mono text-slate-500 uppercase tracking-tighter">Group</span>
              </div> */}
            </div>

            {/* Mobile toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden ml-1 text-foreground hover:text-primary"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </Button>
          </div>
        </div>

        {/* Bottom Row: Shifted Down Desktop Navigation Menu */}
        <div className="hidden lg:flex items-center justify-center border-t border-border/40 py-2">
          <div className="flex items-center gap-3 xl:gap-5 overflow-x-auto no-scrollbar">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              const targetHref = location === "/" || location === "" ? item.href : `/${item.href}`;

              return (
                <a
                  key={item.name}
                  href={targetHref}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative text-[11px] xl:text-xs font-mono uppercase tracking-wider xl:tracking-[0.16em] transition-all py-1 px-1.5 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "text-primary font-bold border-b-2 border-primary drop-shadow-[0_0_10px_rgba(34,197,94,0.7)]"
                      : "text-muted-foreground hover:text-foreground hover:border-b-2 hover:border-primary/30"
                  }`}
                  data-testid={`link-nav-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 w-full border-t border-b border-border bg-background/95 backdrop-blur-xl shadow-2xl">
          <div className="px-6 py-4 space-y-1">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              const targetHref = location === "/" || location === "" ? item.href : `/${item.href}`;

              return (
                <a
                  key={item.name}
                  href={targetHref}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block text-sm font-mono uppercase tracking-[0.15em] py-2.5 px-3 rounded transition-colors border-l-2 ${
                    isActive
                      ? "text-primary font-bold border-primary bg-primary/10 shadow-sm"
                      : "text-muted-foreground hover:text-foreground border-transparent hover:bg-white/5"
                  }`}
                  data-testid={`link-mobile-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </a>
              );
            })}
            <div className="pt-2 mt-2 border-t border-border">
              <a
                href="https://unstop.com/o/aSClEqd?lb=use8upTu&utm_medium=Share&utm_source=enigmrie19036&utm_campaign=Online_coding_challenge"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="w-full flex items-center justify-center py-2.5 text-xs font-mono uppercase tracking-wider font-bold bg-primary text-primary-foreground border border-primary shadow-sm"
              >
                Register Team Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
