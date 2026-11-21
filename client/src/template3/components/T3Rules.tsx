import React, { useState } from "react";
import { ShieldCheck, Search, CheckCircle2, AlertTriangle, FileText, Download, Code2, Users, Cpu, Award } from "lucide-react";

export default function T3Rules() {
  const [activeTab, setActiveTab] = useState<string>("general");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "general", label: "Eligibility & Teams", icon: Users },
    { id: "code", label: "Code & AI Policy", icon: Code2 },
    { id: "submission", label: "Submissions & Demos", icon: Cpu },
    { id: "judging", label: "Judging Criteria", icon: Award },
  ];

  const rulesData = {
    general: [
      {
        title: "Team Size: 2 to 4 Hackers",
        detail: "Solo participation is not allowed. Teams can have 2, 3, or 4 members. Inter-college and inter-branch teams are completely permitted.",
        isMust: true,
      },
      {
        title: "Student Identification Required",
        detail: "All team members must carry their valid physical college photo ID cards along with government ID for campus check-in at RIET Jaipur.",
        isMust: true,
      },
      {
        title: "Zero Registration Fee",
        detail: "Participation in ENIGMA2.0 is 100% free. Selected teams will receive full campus access, food, snacks, high-speed Wi-Fi, and swags at no cost.",
        isMust: false,
      },
      {
        title: "On-Campus 24-Hour Stay",
        detail: "The hackathon is strictly an offline 24-hour sprint. Resting zones and overnight security are provided on campus.",
        isMust: true,
      },
    ],
    code: [
      {
        title: "Build From Scratch During Sprint",
        detail: "All application code, databases, and core models must be written within the designated 24-hour hackathon window starting Dec 17, 10:00 AM.",
        isMust: true,
      },
      {
        title: "Open Source Libraries & APIs Permitted",
        detail: "You may use standard open-source libraries, UI components (Tailwind, Radix, etc.), cloud services (AWS, Firebase, Supabase), and public APIs.",
        isMust: false,
      },
      {
        title: "AI Assistant Transparency Policy",
        detail: "AI tools (Copilot, ChatGPT, Claude) are allowed for boilerplate and debugging. However, teams must be able to thoroughly explain their code logic to judges.",
        isMust: false,
      },
      {
        title: "Strict Anti-Plagiarism Protocol",
        detail: "Submitting pre-built projects or clone repos will lead to immediate disqualification and reporting to your respective institutions.",
        isMust: true,
      },
    ],
    submission: [
      {
        title: "Public GitHub Repository",
        detail: "Each team must submit a public GitHub repository containing a comprehensive README, setup instructions, architecture diagram, and commit history.",
        isMust: true,
      },
      {
        title: "Live Deployed MVP / Demo Video",
        detail: "Web & mobile apps should ideally have a live deployed staging URL. Hardware projects must demonstrate working physical sensors and actuators.",
        isMust: false,
      },
      {
        title: "3-Minute Pitch + 2-Minute Q&A",
        detail: "Finalists will present live on stage before the senior jury panel. Strict timer enforcement applies.",
        isMust: true,
      },
    ],
    judging: [
      {
        title: "Innovation & Problem Solving (25%)",
        detail: "How novel is the idea? Does it tackle a pressing real-world pain point with fresh thinking?",
        isMust: false,
      },
      {
        title: "Technical Depth & Scalability (25%)",
        detail: "Architecture elegance, efficient database queries, code cleanliness, and security considerations.",
        isMust: false,
      },
      {
        title: "UI / UX & Prototype Readiness (25%)",
        detail: "How polished, responsive, and intuitive is the user experience? Does the demo work smoothly without crashing?",
        isMust: false,
      },
      {
        title: "Market Impact & Presentation (25%)",
        detail: "Clarity of the live presentation, team confidence, market feasibility, and ability to answer technical cross-questions.",
        isMust: false,
      },
    ],
  };

  const currentRules = rulesData[activeTab as keyof typeof rulesData] || [];
  const filteredRules = currentRules.filter(
    (r) =>
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.detail.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="rules" className="relative py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      
      {/* Background Accent */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[350px] bg-cyan-600/10 blur-[150px] pointer-events-none -z-10 rounded-full" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Fair Play & Compliance</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Official{" "}
          <span className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400">
            Rules & Regulations
          </span>
        </h2>
        <p className="text-white/60 text-sm sm:text-base mt-3 max-w-xl mx-auto">
          Clear guidelines to ensure an ethical, intense, and level playing field for every participating innovator.
        </p>
      </div>

      {/* Rulebook Container */}
      <div className="rounded-3xl bg-[#070b1a]/90 border border-white/15 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl">
        
        {/* Top Controls: Tabs & Search Filter */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-white/10">
          
          {/* Tab Selector */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-500/25 to-violet-500/25 text-cyan-300 border border-cyan-400/40 shadow-sm"
                      : "bg-white/5 text-white/65 hover:text-white hover:bg-white/10 border border-white/5"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search rules..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-white/40 focus:outline-none focus:border-cyan-400/50 transition-colors font-mono"
            />
          </div>
        </div>

        {/* Rules Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {filteredRules.map((rule, idx) => (
            <div
              key={idx}
              className="group p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex items-start gap-4"
            >
              <div className="p-2 rounded-xl bg-white/5 border border-white/10 mt-0.5">
                {rule.isMust ? (
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                ) : (
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                )}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {rule.title}
                  </h3>
                  {rule.isMust && (
                    <span className="text-[9px] font-mono font-bold uppercase px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      MANDATORY
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-white/65 leading-relaxed">
                  {rule.detail}
                </p>
              </div>
            </div>
          ))}

          {filteredRules.length === 0 && (
            <div className="col-span-2 py-12 text-center text-white/50 text-xs font-mono">
              No rules matched your search query "{searchQuery}".
            </div>
          )}
        </div>

        {/* Bottom Banner with PDF Download Note */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/60">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span>Violations may lead to immediate revocation of entry and certifications.</span>
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe8WhPNn5GqrEhduyX8juD-kzTwGS9TJ0uDqpQs0hc4Yhwlzg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Official PDF Handbook</span>
          </a>
        </div>
      </div>
    </section>
  );
}
