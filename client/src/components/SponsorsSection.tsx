import { ArrowRight, Handshake } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

// Existing sponsors list preserved for upcoming announcement
const upcomingSponsors = [
  {
    name: "OpenAI",
    role: "API Sponsor",
    description: "Providing OpenAI API credits for winners and participants. Access to powerful AI models and tools for development.",
    logo: "/openai.png",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: ".xyz",
    role: "Domain Partner",
    description: "Free domains and perks for participants. Modern, innovative domain extensions for your projects.",
    logo: "/xyz.png",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Eventopia",
    role: "Media Partner",
    description: "Amplifying tech culture and innovation through media coverage. Bringing the hackathon story to a wider audience.",
    logo: "/eventopia.png",
    color: "from-amber-500 to-orange-500",
    link: "https://eventopia.in",
  },
  {
    name: "SheKunj",
    role: "In-kind Sponsor",
    description: "Supporting the hackathon with in-kind contributions and community support.",
    logo: "/shekunj.png",
    color: "from-pink-500 to-rose-500",
  },
];

export default function SponsorsSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section id="sponsors" ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden">
      {/* Minimal decorations - hidden on mobile */}
      <div className="hidden lg:block">
        <div className="absolute left-8 top-0 w-px h-full bg-border" />
        <div className="absolute right-8 top-0 w-px h-full bg-border" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header - minimal and clean */}
        <div className={`text-center mb-10 sm:mb-14 transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-3 sm:mb-4 animate-pulse">
            <span className="text-primary">{"< "}</span>Partners & Ecosystem<span className="text-primary">{" />"}</span>
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-foreground">
            Sponsors & Partners
          </h2>
        </div>

        {/* Announcing Soon Showcase Card */}
        <div className={`max-w-3xl mx-auto transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="border border-border/80 bg-background/80 backdrop-blur-sm p-8 sm:p-14 text-center relative overflow-hidden group hover:border-primary/50 transition-all shadow-lg">
            {/* Ambient background glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                <span>Revealing Soon</span>
              </div>
              
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 mx-auto flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <Handshake className="w-6 h-6" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-black text-foreground mb-4">
                Announcing Soon
              </h3>
              
              <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto font-mono leading-relaxed mb-8">
                We are teaming up with premier tech companies, developer platforms, and industry innovators. Official partners and sponsors will be unveiled soon!
              </p>

              {/* Tier Badges preview */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs font-mono text-muted-foreground">
                <span className="px-3 py-1.5 border border-border bg-card/50 rounded">Title Sponsor</span>
                <span className="px-3 py-1.5 border border-border bg-card/50 rounded">Cloud & AI Partner</span>
                <span className="px-3 py-1.5 border border-border bg-card/50 rounded">API & Tooling Partners</span>
                <span className="px-3 py-1.5 border border-border bg-card/50 rounded">Media & Community</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 sm:mt-16 pt-10 border-t border-border">
          <div className="max-w-lg mx-auto text-center">
            <p className="text-sm sm:text-base text-muted-foreground mb-4">Interested in sponsoring ENIGMA 2.0?</p>
            <a 
              href="mailto:enigma@rietjaipur.ac.in" 
              className="inline-flex items-center gap-2 text-sm sm:text-base font-mono uppercase tracking-[0.1em] text-primary hover:text-foreground transition-colors group"
            >
              <span>Contact Sponsorship Team</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
