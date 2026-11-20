import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Sparkles, Camera } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { TechCorner } from "./TechDecorations";

const slides = [
  {
    image: "/moments/coding_session.jpg",
    caption: "Intense 24-Hour Coding Marathon",
    description: "800+ developers turning caffeine, code, and passion into innovative breakthroughs",
    tag: "DAY 1 // SPRINT",
  },
  {
    image: "/moments/ai_hackathon_stage.jpg",
    caption: "High-Tech Development Arena",
    description: "Teams battling it out across AI, Web3, FinTech, and Open Innovation domains",
    tag: "ARENA // TECH LAB",
  },
  {
    image: "/moments/mentor_round.jpg",
    caption: "Expert Mentorship & Code Reviews",
    description: "Senior tech leads and founders mentoring teams to refine architecture and scalability",
    tag: "MENTORSHIP // JURY",
  },
  {
    image: "/moments/stage_presentation.jpg",
    caption: "Grand Stage Project Pitches",
    description: "Finalists presenting live functional demos in front of industry judges and audience",
    tag: "EVALUATION // DEMO",
  },
  {
    image: "/moments/victory_celebration.jpg",
    caption: "Victory & Grand Prize Distribution",
    description: "Celebrating winners with cash prizes, coveted swag kits, and incubation offers",
    tag: "FINALE // AWARDS",
  },
];

export default function EventCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-play slideshow every 5 seconds (pauses on mouse hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="moments" ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden border-t border-border">
      {/* Tech corner decorations */}
      <div className="hidden sm:block">
        <TechCorner position="tl" />
        <TechCorner position="tr" />
        <TechCorner position="bl" />
        <TechCorner position="br" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">
            <Camera className="w-3.5 h-3.5 text-primary" />
            <span><span className="text-primary">[</span> EVENT GALLERY <span className="text-primary">]</span></span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black text-foreground mb-3" data-testid="text-event-moments-title">
            Event Moments
          </h2>
          <p className="text-xs sm:text-sm font-mono text-muted-foreground max-w-xl mx-auto">
            Relive the high-voltage energy, sleepless coding sprints, and triumph of ENIGMA hackathons.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className={`relative max-w-5xl mx-auto group transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Card className="overflow-hidden border border-border hover:border-primary/50 bg-card/80 shadow-2xl transition-all duration-500 rounded-none">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] md:aspect-[16/8] overflow-hidden bg-black/40">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                data-testid={`img-carousel-${currentSlide}`}
                key={currentSlide}
              />

              {/* Top Meta Tag */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20">
                <span className="px-3 py-1 bg-black/75 border border-primary/40 text-primary font-mono text-[10px] sm:text-xs uppercase tracking-widest backdrop-blur-md">
                  {slides[currentSlide].tag}
                </span>
              </div>

              {/* Bottom Gradient Scrim & Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-5 sm:p-8 lg:p-10 z-10">
                <h3 className="text-xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mb-2 tracking-tight drop-shadow-md" data-testid="text-carousel-caption">
                  {slides[currentSlide].caption}
                </h3>
                <p className="text-xs sm:text-base text-white/80 max-w-3xl drop-shadow">
                  {slides[currentSlide].description}
                </p>
              </div>
            </div>
          </Card>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-3 sm:px-5 pointer-events-none z-20">
            <Button
              size="icon"
              variant="outline"
              className="pointer-events-auto w-9 h-9 sm:w-11 sm:h-11 rounded-none border border-border bg-background/80 hover:bg-primary hover:border-primary text-foreground hover:text-primary-foreground backdrop-blur-md transition-all duration-300 shadow-lg"
              onClick={prevSlide}
              data-testid="button-carousel-prev"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <Button
              size="icon"
              variant="outline"
              className="pointer-events-auto w-9 h-9 sm:w-11 sm:h-11 rounded-none border border-border bg-background/80 hover:bg-primary hover:border-primary text-foreground hover:text-primary-foreground backdrop-blur-md transition-all duration-300 shadow-lg"
              onClick={nextSlide}
              data-testid="button-carousel-next"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Thumbnail / Dot Previews */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mt-6">
            {slides.map((slide, index) => (
              <button
                key={index}
                className={`transition-all duration-300 cursor-pointer ${
                  index === currentSlide
                    ? "w-10 sm:w-14 h-2 bg-primary shadow-[0_0_10px_rgba(34,197,94,0.6)]"
                    : "w-3 sm:w-4 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                }`}
                onClick={() => setCurrentSlide(index)}
                data-testid={`button-carousel-dot-${index}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
