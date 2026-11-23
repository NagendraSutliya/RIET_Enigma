import { Trophy, Star, Medal, Award, Gift, Zap } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { TechCorner, FloatingDots } from "./TechDecorations";

const prizeTiers = [
  {
    title: "1st Place",
    subtitle: "Grand Champion",
    amount: "₹11,000",
    icon: Trophy,
    perks: [
      "₹11,000 Direct Cash Prize",
      "Official Winner Trophy & Medals",
      "Certificate of Excellence",
      "Exclusive Winner Swag Kit",
    ],
    color: "from-yellow-500 to-orange-500",
    position: 1,
  },
  {
    title: "2nd Place",
    subtitle: "First Runner-Up",
    amount: "₹7,000",
    icon: Medal,
    perks: [
      "₹7,000 Direct Cash Prize",
      "Runner-Up Trophy & Medals",
      "Certificate of Excellence",
      "Special Swag Kit",
    ],
    color: "from-gray-400 to-gray-500",
    position: 2,
  },
  {
    title: "3rd Place",
    subtitle: "Second Runner-Up",
    amount: "₹5,000",
    icon: Award,
    perks: [
      "₹5,000 Direct Cash Prize",
      "Second Runner-Up Trophy & Medals",
      "Certificate of Excellence",
      "Special Swag Kit",
    ],
    color: "from-orange-600 to-amber-700",
    position: 3,
  },
];

export default function PrizesSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const [hoveredTier, setHoveredTier] = useState<number | null>(null);
  const [expandedPerk, setExpandedPerk] = useState<number | null>(null);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden">
      {/* Tech decorations - hidden on mobile */}
      <div className="hidden sm:block">
        <TechCorner position="tl" />
        <TechCorner position="br" />
      </div>
      <FloatingDots count={5} />
      
      {/* Side lines - hidden on mobile */}
      <div className="hidden lg:block">
        <div className="absolute left-8 top-0 w-px h-full bg-border" />
        <div className="absolute right-8 top-0 w-px h-full bg-border" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-2 sm:mb-3 animate-pulse">
            <span className="text-primary">$</span> Rewards
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-foreground mb-6 sm:mb-8 gradient-text">
            Prizes & Awards
          </h2>

          <div className="max-w-md mx-auto border border-border p-6 sm:p-10 bg-background group hover-lift cursor-default transition-all relative overflow-hidden">
            {/* Shimmer overlay */}
            <div className="absolute inset-0 sponsor-shimmer pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10">
              <div className="relative inline-block">
                <div className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-30 bg-gradient-to-br from-primary to-secondary rounded-lg transition-opacity duration-300" />
                <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-primary mx-auto mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative z-10" />
              </div>
              {/* Small decorative stars - hidden on mobile */}
              <Star className="hidden sm:block w-3 h-3 text-primary/50 absolute -top-1 -right-2 pulse-dot" />
              <Star className="hidden sm:block w-2 h-2 text-primary/30 absolute -bottom-1 -left-2 pulse-dot" style={{ animationDelay: "0.5s" }} />
            </div>
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.15em] sm:tracking-[0.2em] text-muted-foreground mb-1 sm:mb-2">Prize Pool</p>
            <p className="text-2xl sm:text-3xl font-bold font-serif text-primary group-hover:text-secondary transition-colors">
              ₹23,000+ Cash Prize Pool
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">
              Guaranteed cash rewards for top 3 teams, plus trophies, certificates, swags & additional sponsor perks!
            </p>
            
            {/* Animated decorative line */}
            <div className="mt-4 sm:mt-6 flex justify-center">
              <div className="h-px w-0 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-20 transition-all duration-500" />
            </div>

            {/* Badge */}
            <div className="mt-4 inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-[0.1em]">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
              <span>More Perks Announcing Soon</span>
            </div>
          </div>

          <div className="grid gap-4 sm:gap-6 lg:gap-8 mt-10 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {prizeTiers.map((tier, idx) => {
              const Icon = tier.icon;
              const isHovered = hoveredTier === idx;
              return (
                <div
                  key={tier.title}
                  className="stagger-item"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                  onMouseEnter={() => setHoveredTier(idx)}
                  onMouseLeave={() => setHoveredTier(null)}
                >
                  <div className={`relative border-2 p-5 sm:p-6 bg-background group hover-lift transition-all overflow-hidden ${
                    isHovered ? 'border-primary' : 'border-border'
                  }`}>
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${tier.color}`} />
                    <div className={`absolute inset-0 border-2 border-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      isHovered ? 'glow-pulse' : ''
                    }`}
                      style={{
                        borderImage: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary))) 1`,
                      }}
                    />

                    <div className="relative z-10">
                      <div className="absolute top-0 right-0 -mr-2 -mt-2">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-sm bg-gradient-to-br ${tier.color} shadow-lg`}>
                          <span className="text-lg">#{tier.position}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-lg transition-all duration-300 ${
                          isHovered ? 'bg-primary/20 scale-110' : 'bg-primary/10'
                        }`}>
                          <Icon className={`w-5 h-5 text-primary transition-all duration-300 ${
                            isHovered ? 'rotate-12 animate-bounce' : ''
                          }`} />
                        </div>
                        <div>
                          <p className={`text-lg font-semibold transition-colors duration-300 ${
                            isHovered ? 'text-primary' : 'text-foreground'
                          }`}>
                            {tier.title}
                          </p>
                          <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                            {tier.subtitle}
                          </p>
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-primary/10 border border-primary/20 text-xs sm:text-sm font-mono font-bold text-primary">
                          <span>{tier.amount} Cash Prize</span>
                        </div>
                      </div>

                      <ul className="text-xs sm:text-sm text-muted-foreground space-y-2">
                        {tier.perks.map((perk, perkIdx) => (
                          <li
                            key={perk}
                            className="flex items-start gap-2 group/perk cursor-pointer transition-all duration-300 hover:translate-x-1"
                            onClick={() => setExpandedPerk(expandedPerk === perkIdx ? null : perkIdx)}
                          >
                            <span className={`mt-2 h-1.5 w-1.5 rounded-full transition-all duration-300 flex-shrink-0 ${
                              isHovered ? 'bg-primary' : 'bg-primary/70'
                            }`} />
                            <span className={`transition-colors duration-300 ${
                              isHovered ? 'text-foreground' : 'text-muted-foreground'
                            }`}>
                              {perk}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className={`mt-4 overflow-hidden transition-all duration-300 ${
                        isHovered ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="pt-3 border-t border-primary/20">
                          <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.1em] text-primary animate-pulse flex items-center gap-2">
                            <Zap className="w-3 h-3" />
                            Guaranteed Cash + Awards!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 sm:mt-8 max-w-3xl mx-auto border-2 border-dashed border-primary/50 p-6 sm:p-8 bg-background/50 group hover-lift transition-all relative overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r from-primary via-secondary to-primary transition-opacity duration-300" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Gift className="w-5 h-5 text-primary group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  All Participants
                </p>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                🎁 Official Certificate of Participation, partner perks, developer tool credits & exclusive swags for all participants.
              </p>

              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent group-hover:via-primary transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
