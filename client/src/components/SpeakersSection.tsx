import { Award, Users, Sparkles, Info, X, Clock, MapPin } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { TechCorner } from "./TechDecorations";

interface Judge {
  name: string;
  tagline: string;
  role: string;
  image: string;
  brief: string;
  fullDescription: string;
}

const judges: Judge[] = [
  {
    name: "Dr. Mandeep Singh",
    tagline: '"The AlgaeMan"',
    role: "Associate Professor, UEM Jaipur | Co-Founder, CEO & CTO, E-Neuf",
    image: "/dr_mandeep_singh.jpg",
    brief:
      "Cleantech innovator & mechanical engineer specializing in biological carbon capture & circular bioenergy.",
    fullDescription:
      'Dr. Mandeep Singh, widely known as "The AlgaeMan," is a cleantech innovator, entrepreneur, and mechanical engineer specializing in biological carbon capture, microalgal biotechnology, and circular waste valorization. He is working as an Associate Professor at UEM, Jaipur. As the co-founder, CEO, and CTO of E-Neuf Green Solutions and E-Neuf Energy, he directs the commercialization of decentralized environmental remediation technologies, industrial decarbonization, and bioenergy platforms. Complementing his industrial leadership, he mentors Agri-Upchar, an agritech venture delivering engineered, crop-residue-derived biochar to revitalize depleted soils, boost organic carbon, and curtail synthetic fertilizer runoff. His flagship research encompasses the Integrated Phycoremediation-Biochar Circular System (IPBCS), a large-scale bi-phasic system treating agricultural groundwater leachate, and the MicroTree project, an IoT-enabled urban photobioreactor for ambient particulate capture and point-source carbon sequestration. A CII-certified Carbon Footprint professional holding a Ph.D. in mechanical engineering, Dr. Singh combines thermal-fluid sciences with applied biotechnology to build scalable, market-driven solutions for global environmental resilience.',
  },
];

export default function SpeakersSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState<number | null>(null);

  const toggleMobileBio = (idx: number) => {
    setMobileExpandedIndex(mobileExpandedIndex === idx ? null : idx);
  };

  return (
    <section id="speakers" ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden">
      {/* Tech decorations - hidden on mobile */}
      <div className="hidden sm:block">
        <TechCorner position="tr" />
        <TechCorner position="bl" />
      </div>
      
      {/* Side lines - hidden on mobile */}
      <div className="hidden lg:block">
        <div className="absolute left-8 top-0 w-px h-full bg-border" />
        <div className="absolute right-8 top-0 w-px h-full bg-border" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* ========================================================= */}
        {/* SECTION 1: JUDGES */}
        {/* ========================================================= */}
        <div id="judges" className="scroll-mt-24">
          <div className={`text-center mb-10 sm:mb-14 transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-2 sm:mb-3">
              <span className="text-primary">/*</span> Evaluation Panel <span className="text-primary">*/</span>
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-foreground">
              Judges
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-3 max-w-xl mx-auto">
              Distinguished researchers, innovators, and industry leaders assessing hackathon solutions on innovation, architecture, and real-world impact.
            </p>
          </div>

          {/* Judges Grid */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Confirmed Judge Card */}
            {judges.map((judge, idx) => {
              const isExpanded = mobileExpandedIndex === idx;

              return (
                <div
                  key={judge.name}
                  className="bg-card/40 border border-border p-6 sm:p-8 text-center group hover:border-primary/50 transition-all duration-300 relative flex flex-col justify-between shadow-sm min-h-[460px]"
                  onClick={() => toggleMobileBio(idx)}
                >
                  {/* Default Card Content */}
                  <div className="flex flex-col items-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] sm:text-xs font-mono uppercase tracking-wider mb-4">
                      <Award className="w-3.5 h-3.5" />
                      <span>Hackathon Judge</span>
                    </div>

                    {/* Image */}
                    <div className="w-32 h-32 sm:w-36 sm:h-36 mx-auto rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center text-primary mb-4 overflow-hidden group-hover:scale-105 transition-transform duration-300 shadow-md">
                      <img
                        src={judge.image}
                        alt={judge.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    {/* Name & Tagline */}
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                      {judge.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-primary font-semibold mt-1">
                      {judge.tagline}
                    </p>
                    <p className="text-[11px] sm:text-xs font-mono text-muted-foreground mt-1 max-w-xs">
                      {judge.role}
                    </p>

                    <div className="my-3.5 h-px w-12 bg-border group-hover:bg-primary transition-colors duration-300" />

                    {/* Brief Intro */}
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed text-center px-1">
                      {judge.brief}
                    </p>
                  </div>

                  {/* Hover / Tap Hint */}
                  {/* <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-center gap-1.5 text-[11px] font-mono text-primary/80 group-hover:text-primary">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    <span>Hover to view full bio on side →</span>
                  </div> */}

                  {/* Pop-like Message Card on the Side (on desktop, pops out to the right side; on mobile, pops in place) */}
                  <div
                    className={`absolute z-50 rounded-2xl bg-card/98 sm:bg-background/98 backdrop-blur-xl p-5 sm:p-6 text-left shadow-[0_20px_50px_rgba(0,0,0,0.85)] border-2 border-primary/70 flex flex-col justify-between transition-all duration-300 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]
                      /* Desktop: pop out to the right side of the card without covering it */
                      md:top-0 md:left-[calc(100%+16px)] md:w-[380px] lg:w-[420px] md:min-h-[460px] md:origin-left
                      /* Invisible hover bridge to eliminate cursor gap */
                      before:hidden md:before:block before:content-[''] before:absolute before:-left-5 before:top-0 before:w-5 before:h-full
                      /* Mobile: card overlay */
                      max-md:inset-2 max-md:origin-center
                      ${
                        isExpanded
                          ? "scale-100 opacity-100 pointer-events-auto"
                          : "scale-90 opacity-0 pointer-events-none group-hover:scale-100 group-hover:opacity-100 group-hover:pointer-events-auto"
                      }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMobileBio(idx);
                    }}
                  >
                    {/* Speech Pointer Notch pointing to the left card on desktop */}
                    <div className="hidden md:block absolute -left-[9px] top-12 w-4 h-4 bg-background/98 border-l-2 border-b-2 border-primary/70 rotate-45 pointer-events-none" />

                    <div className="flex items-center justify-between pb-3 border-b border-border/70">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={judge.image}
                          alt={judge.name}
                          className="w-10 h-10 rounded-full object-cover border border-primary/50 shadow-sm"
                        />
                        <div>
                          <h4 className="text-sm font-bold text-foreground leading-tight flex items-center gap-1.5">
                            <span>{judge.name}</span>
                            <span className="text-[10px] font-mono text-primary font-normal">{judge.tagline}</span>
                          </h4>
                          <p className="text-[10px] font-mono text-muted-foreground mt-0.5">
                            {judge.role}
                          </p>
                        </div>
                      </div>
                      {/* <div className="flex items-center gap-1.5">
                        {/* <span className="px-2 py-0.5 rounded-full bg-primary/10 border border-primary/30 text-[9px] font-mono text-primary font-bold uppercase tracking-wider">
                          Full Bio
                        </span> */}
                       {/* <button
                          type="button"
                          aria-label="Close bio"
                          className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            setMobileExpandedIndex(null);
                          }}
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div> */}
                    </div>

                    <div className="my-3 space-y-2 text-xs text-foreground/90 leading-relaxed font-sans overflow-y-auto pr-1 max-h-[300px]">
                      <p>{judge.fullDescription}</p>
                    </div>

                    <div className="pt-2.5 border-t border-border/60 text-[10px] font-mono text-muted-foreground flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                        <span>Enigma 2.0 Evaluation Panel</span>
                      </span>
                      <span className="text-primary font-semibold">UEM Jaipur</span>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Upcoming Judges Card */}
            <div className="bg-card/30 border border-border p-6 sm:p-8 text-center group hover:border-primary/50 transition-all flex flex-col items-center justify-center min-h-[460px]">
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-semibold mb-1">
                Panel In Progress
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                More Judges
              </h3>
              <p className="text-xs sm:text-sm font-mono text-primary mb-3">
                To Be Announced
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-xs leading-relaxed">
                Distinguished researchers, CTOs, and founders from premier organizations joining the official evaluation board shortly.
              </p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground/80">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span>Revealing Soon</span>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================= */}
        {/* SECTION DIVIDER */}
        {/* ========================================================= */}
        <div className="my-16 sm:my-20 h-px bg-border max-w-4xl mx-auto relative">
          <div className="absolute left-1/2 -translate-x-1/2 -top-3 px-4 bg-background font-mono text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>Sprint Mentorship</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          </div>
        </div>

        {/* ========================================================= */}
        {/* SECTION 2: MENTORS */}
        {/* ========================================================= */}
        <div id="mentors" className="scroll-mt-24">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-2 sm:mb-3">
              <span className="text-primary">/*</span> Technical Guidance <span className="text-primary">*/</span>
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-foreground">
              Mentors
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-3 max-w-xl mx-auto">
              Senior engineers and specialists offering 1-on-1 code reviews, architectural advice, and pitch guidance throughout the 24-hour sprint.
            </p>
          </div>

          {/* Mentors Cards */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Card 1: Industry Mentors Pool */}
            <div className="bg-card/30 border border-border p-6 sm:p-8 text-center group hover:border-primary/50 transition-all flex flex-col items-center justify-between min-h-[320px]">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-semibold mb-1">
                  Sprint Support
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Industry Mentors
                </h3>
                <p className="text-xs sm:text-sm font-mono text-primary mb-3">
                  To Be Announced
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm">
                  Mentors from leading MNCs and high-growth startups assisting teams with debugging, API integrations, and architecture validation.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/50 w-full flex items-center justify-center gap-1.5 text-[11px] font-mono text-muted-foreground">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span>Mentors Announcing Soon</span>
              </div>
            </div>

            {/* Card 2: Dedicated Mentorship Round Schedule */}
            <div className="bg-card/30 border border-border p-6 sm:p-8 text-center group hover:border-primary/50 transition-all flex flex-col items-center justify-between min-h-[320px]">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="w-8 h-8" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-semibold mb-1">
                  Event Schedule
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Mentorship Round
                </h3>
                <p className="text-xs sm:text-sm font-mono text-primary mb-3">
                  Day 1 · 5:00 PM – 7:00 PM
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm">
                  Every team receives dedicated evaluation and guidance in their assigned code rooms to refine their prototype before midnight sprint.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/50 w-full flex items-center justify-center gap-1.5 text-[11px] font-mono text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span>Venue: Code Rooms (RIET Campus)</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
