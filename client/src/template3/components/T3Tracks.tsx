import React, { useState } from "react";
import { Brain, Shield, Coins, HeartPulse, Cpu, Sparkles, Terminal, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { TechCorner } from "@/components/TechDecorations";

interface TrackItem {
  id: string;
  command: string;
  title: string;
  tagline: string;
  icon: any;
  bounty: string;
  techStack: string[];
  description: string;
  sampleProblems: string[];
}

export default function T3Tracks() {
  const [expandedTrack, setExpandedTrack] = useState<string | null>(null);

  const tracks: TrackItem[] = [
    {
      id: "ai",
      command: "$ ./run --track=ai_ml",
      title: "AI & Generative Intelligence",
      tagline: "Autonomous Agents, LLMs & Applied Machine Learning",
      icon: Brain,
      bounty: "₹15,000 Bounty",
      techStack: ["LangChain", "PyTorch", "RAG Pipelines", "Whisper", "Vector DBs"],
      description: "Harness the frontier of generative AI and autonomous workflows to construct intelligent systems that understand, reason, and execute complex workflows without human intervention.",
      sampleProblems: [
        "Autonomous multi-agent research and synthesis engine",
        "Multilingual voice AI assistant for vernacular Indian languages",
        "Enterprise document retrieval with zero hallucination rate"
      ],
    },
    {
      id: "web3",
      command: "$ ./run --track=web3_defi",
      title: "Web3 & Decentralized Systems",
      tagline: "Smart Contracts, Account Abstraction & Zero-Knowledge Cryptography",
      icon: Coins,
      bounty: "₹10,000 Bounty",
      techStack: ["Solidity", "Rust", "EVM", "zk-SNARKs", "IPFS"],
      description: "Architect trustless, censorship-resistant networks and protocols. Build decentralized finance primitives, verifiable on-chain reputation systems, or zero-knowledge data proofs.",
      sampleProblems: [
        "Gasless cross-chain decentralized escrow for gig workers",
        "ZK-based student credential and degree verification protocol",
        "Privacy-preserving decentralized voting infrastructure"
      ],
    },
    {
      id: "health",
      command: "$ ./run --track=healthtech",
      title: "HealthTech & Bio-Informatics",
      tagline: "Remote Diagnostics, Predictive Triage & Patient Security",
      icon: HeartPulse,
      bounty: "₹8,000 Bounty",
      techStack: ["Computer Vision", "FHIR APIs", "Edge ML", "Bio-Sensors"],
      description: "Revolutionize healthcare accessibility and predictive clinical diagnostics. Build AI tools for rural tele-health, automated medical imaging triage, or tamper-proof health records.",
      sampleProblems: [
        "Low-bandwidth remote ECG & vital monitoring for rural clinics",
        "AI-assisted automated X-ray and CT scan abnormality detector",
        "Cryptographically secure personal health record wallet"
      ],
    },
    {
      id: "iot",
      command: "$ ./run --track=iot_smartcity",
      title: "Smart Cities & Clean Energy IoT",
      tagline: "Connected Sensors, Grid Optimization & Environmental Monitoring",
      icon: Cpu,
      bounty: "₹7,000 Bounty",
      techStack: ["ESP32 / Arduino", "MQTT", "Time-Series DB", "Edge AI"],
      description: "Merge physical hardware with cloud intelligence. Engineer high-impact systems for municipal water management, dynamic traffic congestion relief, or renewable microgrids.",
      sampleProblems: [
        "Dynamic traffic light timing using real-time camera edge feeds",
        "Solar microgrid load balancer with predictive power allocation",
        "Automated industrial leak & air quality monitoring array"
      ],
    },
    {
      id: "fintech",
      command: "$ ./run --track=cyber_sec",
      title: "FinTech & Cyber Defense",
      tagline: "Fraud Interception, Secure Payments & Algorithmic Security",
      icon: Shield,
      bounty: "₹6,000 Bounty",
      techStack: ["Graph Neural Nets", "OAuth 2.1", "WebAuthn", "Kafka"],
      description: "Defend against sophisticated cyber attacks and modernize financial technology. Build real-time anomaly detection pipelines, anti-phishing shields, or automated KYC systems.",
      sampleProblems: [
        "Real-time UPI transaction fraud detection using graph embeddings",
        "Passwordless biometric authentication with zero credential leakage",
        "Automated compliance and AML auditor for micro-financers"
      ],
    },
    {
      id: "open",
      command: "$ ./run --track=moonshots",
      title: "Open Innovation & Moonshots",
      tagline: "EdTech, GovTech, SpaceTech & Unconventional Breakthroughs",
      icon: Sparkles,
      bounty: "₹4,000 Bounty",
      techStack: ["React", "Flutter", "FastAPI", "WebSockets", "Cloud"],
      description: "Have a radical concept that transcends defined boundaries? Build whatever solves a significant bottleneck in education, accessibility, governance, or developer tooling.",
      sampleProblems: [
        "Real-time sign language to speech translation mobile app",
        "Gamified coding platform for rural school children without computers",
        "Public transit schedule tracker with crowd-sourced GPS telemetry"
      ],
    },
  ];

  return (
    <section id="tracks" className="relative py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-600/10 blur-[160px] pointer-events-none -z-10 rounded-full" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>// CHALLENGE_DOMAINS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight leading-tight">
          Challenge{" "}
          <span className="font-mono text-emerald-400 drop-shadow-[0_0_20px_rgba(34,197,94,0.6)]">
            Tracks & Bounties
          </span>
        </h2>
        <p className="text-white/60 font-mono text-xs sm:text-sm mt-2 max-w-xl mx-auto">
          Choose your sector, architect your solution, and battle for dedicated track bounties alongside the main grand prize!
        </p>
      </div>

      {/* Bento Grid: 6 Track Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracks.map((track) => {
          const Icon = track.icon;
          const isExpanded = expandedTrack === track.id;

          return (
            <div
              key={track.id}
              className="group relative rounded-none bg-[#050b07] border border-emerald-500/25 hover:border-emerald-400 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-950/50 hover:-translate-y-1"
            >
              <TechCorner position="tr" />

              <div>
                {/* Command & Bounty Row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-black border border-emerald-500/40 text-emerald-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 text-xs font-mono font-bold bg-amber-500/15 text-amber-300 border border-amber-500/40">
                    {track.bounty}
                  </span>
                </div>

                <div className="text-[11px] font-mono text-emerald-400/80 mb-2">
                  {track.command}
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                  {track.title}
                </h3>
                <p className="text-xs font-mono text-white/50 mb-4 uppercase tracking-wider">
                  {track.tagline}
                </p>
                <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed mb-6">
                  {track.description}
                </p>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {track.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-[10px] font-mono bg-black/60 text-emerald-300 border border-emerald-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Expanded Problem Statements */}
                {isExpanded && (
                  <div className="pt-4 border-t border-emerald-500/20 space-y-2 mb-4 animate-fade-in">
                    <span className="text-[11px] font-mono uppercase text-emerald-400 font-bold block">
                      // SAMPLE_PROBLEM_STATEMENTS:
                    </span>
                    {track.sampleProblems.map((prob, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-white/80 font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{prob}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Expand Toggle Button */}
              <button
                onClick={() => setExpandedTrack(isExpanded ? null : track.id)}
                className="w-full mt-2 py-2.5 px-4 bg-black/70 hover:bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-300 hover:text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer uppercase tracking-wider"
              >
                <span>{isExpanded ? "[-] Hide Details" : "[+] View Problem Statements"}</span>
                {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
