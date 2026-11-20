import React, { useState } from "react";
import { BookOpen, Users, Shield, Award, Code, CheckCircle2, AlertCircle, Scale, ShieldAlert } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function RulesSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const [activeTab, setActiveTab] = useState<string>("eligibility");

  const categories = [
    { id: "eligibility", name: "Eligibility", icon: Users },
    { id: "teams", name: "Team Rules", icon: Shield },
    { id: "build", name: "Build Policy", icon: Code },
    { id: "judging", name: "Evaluation", icon: Award },
    { id: "conduct", name: "Code of Conduct", icon: Scale },
  ];

  const rulesData: Record<string, { title: string; items: string[]; note?: string }> = {
    eligibility: {
      title: "Participant Eligibility",
      items: [
        "Open to undergraduate and postgraduate students from any recognized college or university across India.",
        "A valid college/university student ID card is mandatory during offline check-in.",
        "Inter-college and cross-department teams are fully permitted and encouraged.",
        "Organizing committee members and mentors are not eligible to participate as competitors.",
      ],
      note: "Offline participation is subject to venue capacity and confirmed on a first-come, first-served basis.",
    },
    teams: {
      title: "Team Formation & Size",
      items: [
        "Solo hackers are allowed; maximum team size is 6 members.",
        "A participant may only be a registered member of one team.",
        "Each team must nominate a Team Leader who serves as primary point of contact.",
        "All team members must complete individual registration prior to the kickoff deadline.",
      ],
      note: "Teams cannot change their composition once the official hackathon hacking begins on 17 Dec.",
    },
    build: {
      title: "Development & Resource Rules",
      items: [
        "All project code and assets must be developed exclusively during the 24-hour hackathon window.",
        "Open-source libraries, frameworks, APIs, and public cloud services are allowed provided they are declared.",
        "Pre-built projects, pre-existing proprietary code, or template clones will lead to immediate disqualification.",
        "Every team must maintain a public GitHub repository with regular commits demonstrating progress.",
      ],
      note: "Commit histories will be audited by the technical review jury prior to final evaluation.",
    },
    judging: {
      title: "Evaluation & Scoring Matrix",
      items: [
        "Innovation & Originality (25%): Uniqueness and creative approach to solving the problem statement.",
        "Technical Complexity & Execution (30%): Architecture quality, code integrity, and robust stack implementation.",
        "Impact & Feasibility (25%): Real-world viability, market applicability, and scalability.",
        "Presentation & Live Demo (20%): Quality of team pitch, functional demo, and Q&A defense.",
      ],
      note: "Live functional prototypes score significantly higher than static mockup presentations.",
    },
    conduct: {
      title: "Code of Conduct & Ethics",
      items: [
        "Harassment, abusive language, or discrimination of any kind is strictly prohibited and carries zero tolerance.",
        "Respect the campus facilities, equipment, and fellow hackers at all times.",
        "Strict adherence to RIET campus safety guidelines and quiet-hour protocols is required.",
        "Plagiarism, intellectual property theft, or uncredited work will result in immediate ban.",
      ],
      note: "Violation of the conduct policy results in immediate team removal from campus without refund.",
    },
  };

  const currentCategory = rulesData[activeTab];

  return (
    <section id="rules" ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-card/20 relative overflow-hidden border-t border-border">
      {/* Decorative vertical lines */}
      <div className="hidden lg:block">
        <div className="absolute left-8 top-0 w-px h-full bg-border opacity-40" />
        <div className="absolute right-8 top-0 w-px h-full bg-border opacity-40" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">
            <BookOpen className="w-3.5 h-3.5 text-primary" />
            <span><span className="text-primary">[</span> PROTOCOL & GUIDELINES <span className="text-primary">]</span></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-foreground">
            Official Rules
          </h2>
          <p className="text-xs sm:text-sm font-mono text-muted-foreground mt-3 max-w-xl mx-auto">
            Fair competition guidelines, eligibility rules, and evaluation criteria for ENIGMA2.0.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 max-w-3xl mx-auto">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all border ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-[0_0_15px_rgba(34,197,94,0.3)] font-bold"
                    : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Content Box */}
        <div className="max-w-4xl mx-auto border border-border bg-background/80 p-6 sm:p-8 lg:p-10 shadow-lg">
          <div className="flex items-center gap-3 pb-4 mb-6 border-b border-border">
            <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
            <h3 className="text-lg sm:text-xl font-mono font-bold text-foreground">
              {currentCategory.title}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {currentCategory.items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 bg-card/60 border border-border hover:border-primary/40 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {currentCategory.note && (
            <div className="flex items-start gap-3 p-3.5 bg-primary/5 border border-primary/20 text-xs font-mono text-muted-foreground">
              <AlertCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-primary uppercase tracking-wider">Note:</strong> {currentCategory.note}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
