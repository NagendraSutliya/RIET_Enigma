import { ArrowRight, Handshake, ExternalLink } from "lucide-react";
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

        {/* Featured Official Sponsor / Platform Partner */}
        <div className={`max-w-3xl mx-auto mb-10 transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="border border-border/80 bg-background/90 backdrop-blur-sm p-6 sm:p-10 relative overflow-hidden group hover:border-primary/50 transition-all shadow-xl">
            {/* Ambient background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-primary/5 to-transparent pointer-events-none" />
            
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 relative z-10">
              {/* Logo container */}
              <div className="w-full sm:w-auto flex-shrink-0 flex items-center justify-center">
                <a
                  href="https://unstop.com/o/aSClEqd?lb=use8upTu&utm_medium=Share&utm_source=enigmrie19036&utm_campaign=Online_coding_challenge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white px-7 py-4 rounded-xl flex items-center justify-center shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-slate-200"
                  title="Visit ENIGMA 2.0 on Unstop"
                >
                  <img
                    src="/unstop.png"
                    alt="Unstop - Official Platform Partner"
                    className="h-10 sm:h-12 w-auto object-contain"
                  />
                </a>
              </div>

              {/* Partner Details */}
              <div className="flex-1 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[11px] font-mono uppercase tracking-wider mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  <span>Official Platform Partner</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-serif font-black text-foreground mb-2">
                  Unstop
                </h3>
                
                <p className="text-xs sm:text-sm text-muted-foreground font-mono leading-relaxed mb-4">
                  Official registration and competition host for ENIGMA 2.0 National Hackathon. Powering developer participation, team registrations, and nationwide reach.
                </p>

                <a
                  href="https://unstop.com/o/aSClEqd?lb=use8upTu&utm_medium=Share&utm_source=enigmrie19036&utm_campaign=Online_coding_challenge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-wider text-primary hover:text-primary/80 font-bold transition-colors group/link"
                >
                  <span>Explore on Unstop</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Announcing Soon Showcase Card */}
        <div className={`max-w-3xl mx-auto transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="border border-border/80 bg-background/60 backdrop-blur-sm p-6 sm:p-8 text-center relative overflow-hidden group hover:border-primary/40 transition-all shadow-md">
            {/* Ambient background glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono uppercase tracking-widest mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                <span>More Partners Revealing Soon</span>
              </div>
              
              <h4 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-2">
                More Sponsors & Partners Joining
              </h4>
              
              <p className="text-xs sm:text-sm text-muted-foreground max-w-lg mx-auto font-mono leading-relaxed mb-6">
                We are teaming up with premier tech companies, developer platforms, and industry innovators. Additional official partners will be unveiled soon!
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
