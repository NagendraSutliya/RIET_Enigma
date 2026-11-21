import React, { useState } from "react";
import { BookOpen, Users, Shield, Award, Code, FileCheck, AlertCircle, CheckCircle2, ChevronRight, Scale, ShieldAlert } from "lucide-react";

export default function T3RulesSection() {
  const [activeCategory, setActiveCategory] = useState<string>("eligibility");

  const categories = [
    { id: "eligibility", name: "Eligibility", icon: Users },
    { id: "teams", name: "Team Rules", icon: Shield },
    { id: "code", name: "Code Integrity", icon: Code },
    { id: "judging", name: "Evaluation & Scoring", icon: Award },
    { id: "conduct", name: "Code of Conduct", icon: Scale },
  ];

  return (
    <section id="rules" className="py-20 relative overflow-hidden bg-black/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-mono uppercase tracking-widest mb-4">
            <BookOpen className="w-3.5 h-3.5 text-violet-400" />
            <span>Hackathon Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Official Rules &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
              Guidelines
            </span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg">
            Fair competition policies, submission requirements, and judging criteria for all participants of ENIGMA2.0.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-600/30 scale-105"
                    : "bg-white/[0.03] text-white/70 hover:text-white hover:bg-white/[0.08] border border-white/10"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Category Content */}
        <div className="max-w-4xl mx-auto">
          {activeCategory === "eligibility" && (
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl animate-in fade-in duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-300">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Eligibility Criteria</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Open to all undergraduate, postgraduate, and diploma students enrolled in recognized institutions across India.",
                  "A valid physical college ID card is mandatory for campus entry and physical check-in.",
                  "Inter-college and inter-disciplinary teams are fully permitted and actively encouraged.",
                  "Members of the core organizing and jury committees are strictly prohibited from competing.",
                ].map((rule, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                    <p className="text-sm text-white/80 leading-relaxed">{rule}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeCategory === "teams" && (
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl animate-in fade-in duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-fuchsia-600/20 border border-fuchsia-500/30 flex items-center justify-center text-fuchsia-300">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Team Formation & Size</h3>
              </div>
              <div className="space-y-3.5">
                {[
                  "Teams must consist of 2 to 4 members. Solo hackers may form teams on Discord/WhatsApp prior to the event.",
                  "A participant can be a member of exactly one team during the entirety of the hackathon.",
                  "Each team must nominate one Team Leader responsible for official communications, checkpoints, and submissions.",
                  "Each team must register with a unique, professional team name.",
                  "Team composition changes are not permitted after the official check-in on December 17, 2026.",
                ].map((rule, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-fuchsia-400 mt-1 shrink-0" />
                    <p className="text-sm text-white/80 leading-relaxed">{rule}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeCategory === "code" && (
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl animate-in fade-in duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300">
                  <Code className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Code Integrity & Originality</h3>
              </div>
              <div className="space-y-3.5">
                {[
                  "All project code, architectures, and assets must be developed during the official 24-hour hackathon window.",
                  "Pre-existing codebases, past hackathon clones, or commercial solutions will result in immediate disqualification.",
                  "Open-source libraries, frameworks (React, PyTorch, LangChain, etc.), and public APIs are completely permissible.",
                  "A public GitHub/GitLab repository with meaningful commit timestamps must be created and linked during check-in.",
                  "Generative AI tools (ChatGPT, Copilot, Gemini) may assist with ideation and boilerplate, but core logic must be team-authored.",
                ].map((rule, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                    <p className="text-sm text-white/80 leading-relaxed">{rule}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeCategory === "judging" && (
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl animate-in fade-in duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-600/20 border border-amber-500/30 flex items-center justify-center text-amber-300">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Evaluation Criteria & Rubric</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Innovation & Originality",
                    weight: "25%",
                    desc: "Novelty of the solution, distinctiveness of thought, and addressing unserved pain points.",
                  },
                  {
                    title: "Technical Execution & Architecture",
                    weight: "25%",
                    desc: "Code quality, complexity, choice of APIs, scalability, and technical depth.",
                  },
                  {
                    title: "Practical Viability & Impact",
                    weight: "25%",
                    desc: "Real-world usefulness, addressable market, feasibility, and potential for deployment.",
                  },
                  {
                    title: "UX Design & Live Demonstration",
                    weight: "25%",
                    desc: "Intuitive user experience, aesthetic polish, and clarity of the live pitch & QA response.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-white text-base">{item.title}</span>
                        <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                          {item.weight}
                        </span>
                      </div>
                      <p className="text-xs text-white/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeCategory === "conduct" && (
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl animate-in fade-in duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-rose-600/20 border border-rose-500/30 flex items-center justify-center text-rose-300">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Campus Conduct & Zero-Tolerance Policies</h3>
              </div>
              <div className="space-y-3.5">
                {[
                  "Zero tolerance for harassment, discrimination, hate speech, or offensive content in verbal, digital, or project form.",
                  "Smoking, alcohol, and any illegal substances are strictly banned on the RIET campus premises.",
                  "All participants must respect campus infrastructure, lab computers, security staff, and fellow competitors.",
                  "Violations of the code of conduct will result in immediate disqualification and removal from campus grounds.",
                ].map((rule, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                    <ShieldAlert className="w-4 h-4 text-rose-400 mt-1 shrink-0" />
                    <p className="text-sm text-white/80 leading-relaxed">{rule}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
