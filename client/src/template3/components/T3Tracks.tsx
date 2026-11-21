import React, { useState } from "react";
import { Bot, Coins, Cpu, HeartPulse, Wallet, Globe, ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function T3Tracks() {
  const [selectedTrack, setSelectedTrack] = useState<number | null>(null);

  const tracks = [
    {
      id: 1,
      title: "AI & Autonomous Agents",
      icon: Bot,
      color: "from-violet-500 to-indigo-500",
      accent: "text-violet-400",
      border: "hover:border-violet-500/50",
      description:
        "Build next-generation autonomous workflows, multimodal models, real-time agent swarms, and intelligent developer tools that solve complex human tasks.",
      ideas: ["Autonomous Coding & Debugging Agents", "Personalized Real-Time Education Copilots", "Vision-Driven Defect Detection Systems"],
      stack: ["OpenAI API", "LangChain / LlamaIndex", "Python", "Transformers", "FastAPI"],
    },
    {
      id: 2,
      title: "Web3 & Decentralized Systems",
      icon: Coins,
      color: "from-cyan-500 to-blue-500",
      accent: "text-cyan-400",
      border: "hover:border-cyan-500/50",
      description:
        "Architect transparent, tamper-proof systems utilizing decentralized storage, smart contracts, zero-knowledge privacy proofs, and on-chain identity.",
      ideas: ["Zero-Knowledge Credential Verification", "Decentralized Micro-Grant Escrow", "On-Chain Intellectual Property Registry"],
      stack: ["Solidity", "Ethers.js", "Polygon / Arbitrum", "IPFS", "Hardhat"],
    },
    {
      id: 3,
      title: "IoT, Robotics & Edge Computing",
      icon: Cpu,
      color: "from-amber-500 to-orange-500",
      accent: "text-amber-400",
      border: "hover:border-amber-500/50",
      description:
        "Bridge the physical and digital domains with smart sensor arrays, robotics, automated telemetry, smart campus solutions, and low-latency edge AI.",
      ideas: ["Smart Campus Energy Optimizer", "Autonomous Delivery Rover Telemetry", "Predictive Agricultural Sensor Mesh"],
      stack: ["ESP32 / Arduino", "Raspberry Pi", "MQTT", "C++ / MicroPython", "TensorFlow Lite"],
    },
    {
      id: 4,
      title: "HealthTech & Bio-Informatics",
      icon: HeartPulse,
      color: "from-rose-500 to-pink-500",
      accent: "text-rose-400",
      border: "hover:border-rose-500/50",
      description:
        "Empower healthcare professionals and patients through diagnostic assistance, secure telemedicine, wearable health analytics, and mental well-being tools.",
      ideas: ["Early Diagnostic Screening via Audio/Images", "Secure EHR Interoperability Hub", "Gamified Physical Rehabilitation Companion"],
      stack: ["Computer Vision", "HIPAA-Compliant APIs", "React Native", "Node.js", "PostgreSQL"],
    },
    {
      id: 5,
      title: "FinTech & Open Commerce",
      icon: Wallet,
      color: "from-emerald-500 to-teal-500",
      accent: "text-emerald-400",
      border: "hover:border-emerald-500/50",
      description:
        "Reimagine finance for the next billion users: automated budgeting, fraud defense algorithms, micro-investing networks, and frictionless digital transactions.",
      ideas: ["AI Agent for Fraud Prevention", "UPI-Integrated Social Expense Splitter", "Micro-Loan Underwriting for Gig Workers"],
      stack: ["Plaid / Razorpay APIs", "Python ML", "TypeScript", "Next.js", "Redis"],
    },
    {
      id: 6,
      title: "Open Innovation & Green Tech",
      icon: Globe,
      color: "from-fuchsia-500 to-purple-500",
      accent: "text-fuchsia-400",
      border: "hover:border-fuchsia-500/50",
      description:
        "Got an unconventional, high-impact idea that doesn't fit a standard mold? Tackle climate resilience, civic transparency, disaster aid, or any frontier problem.",
      ideas: ["Disaster Relief Coordination Grid", "Carbon Footprint Tracking for Campuses", "Accessible Web Tools for Specially-Abled"],
      stack: ["Any Modern Tech Stack", "Open Source Libraries", "Mapbox / GIS", "Supabase"],
    },
  ];

  return (
    <section id="tracks" className="py-20 relative overflow-hidden bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>Problem Statements & Domains</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Select Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-400">
              Battleground Track
            </span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg">
            Choose from 6 diverse technology verticals. Compete for overall prizes or win dedicated track bounty awards.
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track) => {
            const Icon = track.icon;
            const isExpanded = selectedTrack === track.id;

            return (
              <div
                key={track.id}
                onClick={() => setSelectedTrack(isExpanded ? null : track.id)}
                className={`p-7 rounded-3xl bg-white/[0.03] border border-white/10 ${track.border} transition-all duration-300 backdrop-blur-xl shadow-xl flex flex-col justify-between group cursor-pointer relative overflow-hidden ${
                  isExpanded ? "ring-2 ring-violet-500/50 bg-white/[0.06]" : ""
                }`}
              >
                <div>
                  {/* Top Bar with Icon & Action */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${track.color} p-0.5 shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <div className="w-full h-full bg-[#0d0f22] rounded-[14px] flex items-center justify-center text-white">
                        <Icon className={`w-7 h-7 ${track.accent}`} />
                      </div>
                    </div>
                    <span className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-white/50 group-hover:text-white group-hover:bg-white/10 transition-colors">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-200 transition-colors">
                    {track.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    {track.description}
                  </p>

                  {/* Expanded Scope / Ideas (when clicked) */}
                  {isExpanded && (
                    <div className="mb-6 pt-4 border-t border-white/10 animate-in fade-in duration-300">
                      <span className="text-xs font-mono text-violet-300 font-semibold block mb-2 uppercase">
                        Sample Project Ideas:
                      </span>
                      <ul className="space-y-1.5 mb-4">
                        {track.ideas.map((idea, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-white/80">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                            <span>{idea}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Tech Stack Chips */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-1.5">
                  {track.stack.slice(0, 3).map((tool, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono text-white/60"
                    >
                      {tool}
                    </span>
                  ))}
                  {track.stack.length > 3 && (
                    <span className="px-2 py-1 text-[11px] font-mono text-violet-400">
                      +{track.stack.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
