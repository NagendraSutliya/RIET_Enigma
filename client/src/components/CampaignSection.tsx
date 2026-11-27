import React from "react";
import { Camera, Video, Hash, Award, Instagram, Sparkles, ExternalLink, Flame } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function CampaignSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  const steps = [
    {
      num: "01",
      title: "Capture The Grind",
      desc: "Record the 24h coding frenzy, team brainstorming, late-night debug sessions, and victory moments during 17-18 Dec.",
      icon: Video,
    },
    {
      num: "02",
      title: "Tag & Post Reels",
      desc: "Upload to Instagram & LinkedIn tagging @enigma_2k26, @riet_official, @unstop with #Enigma20 #Unstop.",
      icon: Hash,
    },
    {
      num: "03",
      title: "Win Collab & Swag",
      desc: "Top shortlisted creators earn official collaborative reposts, creator swag bundles, and reach 100k+ tech enthusiasts.",
      icon: Award,
    },
  ];

  const tags = ["#Enigma2.0", "#Unstop", "#RIETJaipur", "#HackathonCreators", "#SapiensGroupofInstitutes"];

  return (
    <section id="campaign" ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden border-t border-border">
      {/* Decorative vertical lines */}
      <div className="hidden lg:block">
        <div className="absolute left-8 top-0 w-px h-full bg-border opacity-40" />
        <div className="absolute right-8 top-0 w-px h-full bg-border opacity-40" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">
            <Camera className="w-3.5 h-3.5 text-primary" />
            <span><span className="text-primary">[</span> CREATOR INITIATIVE <span className="text-primary">]</span></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-foreground">
            Hack The Moment
          </h2>
          <p className="text-xs sm:text-sm sm:text-base font-mono text-muted-foreground mt-3 max-w-2xl mx-auto leading-relaxed">
            Enigma 2.0 – A National-Level Hackathon, Powered by <span className="text-primary font-semibold">Unstop</span>, Bringing Together Innovators, Developers, and Problem-Solvers from Across the Nation.
          </p>
        </div>

        {/* 3 Step Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative border border-border bg-card/40 p-6 sm:p-8 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-muted-foreground group-hover:text-primary transition-colors">
                    PHASE // {item.num}
                  </span>
                  <div className="w-9 h-9 flex items-center justify-center bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-mono font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Hashtag Strip */}
        <div className="max-w-4xl mx-auto border border-border bg-card/20 p-6 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
            Official Campaign Hashtags
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-3.5 py-1.5 text-xs font-mono border border-border bg-background text-foreground hover:border-primary/50 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
