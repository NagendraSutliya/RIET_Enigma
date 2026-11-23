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
  { name: "Speakers", href: "#speakers" },
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
        const headerOffset = 80;
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
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" : "bg-background/40 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setActiveSection("home");
              window.history.pushState(null, "", "#home");
              playLaunchAnimation();
            }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <img
              src="/mainlogo.png"
              alt="ENIGMA2.0 Logo"
              className="w-11 h-11 sm:w-12 sm:h-12 object-cover scale-105 hover:scale-110 transition-transform duration-300"
            />
            <div className="flex flex-col">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">
                RIET Presents
              </span>
              <span className="text-xl font-serif font-bold text-foreground flex items-baseline leading-none">
                <span>ENIGMA</span>
                <span className="text-2xl font-mono font-black text-primary scale-y-130 inline-block origin-bottom tracking-tighter">
                  2.0
                </span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-2.5 xl:gap-5">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              const targetHref = location === "/" || location === "" ? item.href : `/${item.href}`;

              return (
                <a
                  key={item.name}
                  href={targetHref}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative text-[11px] xl:text-xs font-mono uppercase tracking-wider xl:tracking-[0.18em] transition-all py-1.5 cursor-pointer ${
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

         {/* Right Action Button (Desktop) */}
          {/* <div className="hidden lg:flex items-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdboLzWGuW84d9MhK9b59nWlYbKe3iHlPCuq6_qF3EXlqgMvQ/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 text-xs font-mono uppercase tracking-wider font-bold bg-primary text-primary-foreground border border-primary hover:bg-primary/90 shadow-[0_0_15px_rgba(34,197,94,0.35)] hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] transition-all cursor-pointer"
            >
              Register
            </a>
          </div> */}

          {/* Mobile toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden absolute w-96 right-0 border-t border-border bg-background/95 backdrop-blur-xl">
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
                href="https://docs.google.com/forms/d/e/1FAIpQLSdboLzWGuW84d9MhK9b59nWlYbKe3iHlPCuq6_qF3EXlqgMvQ/viewform?usp=header"
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
