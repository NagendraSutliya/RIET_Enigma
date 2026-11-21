import React from "react";
import { Users, Linkedin, Twitter, Award, Terminal } from "lucide-react";
import { TechCorner } from "@/components/TechDecorations";

interface SpeakerItem {
  name: string;
  role: string;
  company: string;
  specialization: string;
  image: string;
  linkedin: string;
  twitter: string;
  bio: string;
  telemetry: string;
}

export default function T2Speakers() {
  const speakers: SpeakerItem[] = [
    {
      name: "Dr. Aarav Sharma",
      role: "Chief AI Scientist",
      company: "NeuralCloud Labs",
      specialization: "LLMs & Agentic AI",
      image: "/attached_assets/generated_images/Male_developer_speaker_headshot_dd4fee6e.png",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      bio: "12+ years in deep learning and autonomous systems. Former research lead at top Silicon Valley AI collectives.",
      telemetry: "DOSSIER://01_NEURAL",
    },
    {
      name: "Priya Venkatesh",
      role: "VP of Engineering",
      company: "BlockScale Systems",
      specialization: "ZK-Crypto & EVM Arch",
      image: "/attached_assets/generated_images/Female_engineer_speaker_headshot_28df80eb.png",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      bio: "Core contributor to open-source cryptographic frameworks and zero-knowledge scalable rollup architecture.",
      telemetry: "DOSSIER://02_BLOCKCHAIN",
    },
    {
      name: "Rohan Mathur",
      role: "Principal Cloud Architect",
      company: "AWS Ecosystem & Angel",
      specialization: "Distributed Systems & K8s",
      image: "/attached_assets/generated_images/Senior_tech_judge_headshot_341a1309.png",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      bio: "Mentored 100+ hackathons globally. Specializes in taking proof-of-concepts into resilient production environments.",
      telemetry: "DOSSIER://03_DISTRIBUTED",
    },
    {
      name: "Ananya Deshmukh",
      role: "Head of Product & Design",
      company: "InnovateHQ (Forbes 30U30)",
      specialization: "Human-Centered UX & Demos",
      image: "/attached_assets/generated_images/Young_female_coder_headshot_65c04cf3.png",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      bio: "Product strategist focused on interface aesthetics, micro-interactions, and high-conversion UX design.",
      telemetry: "DOSSIER://04_PRODUCT",
    },
  ];

  return (
    <section id="speakers" className="relative py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-emerald-600/10 blur-[160px] pointer-events-none -z-10 rounded-full" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
          <Award className="w-3.5 h-3.5" />
          <span>// JURY_AND_MENTORS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight leading-tight">
          Mentorship from{" "}
          <span className="font-mono text-emerald-400 drop-shadow-[0_0_20px_rgba(34,197,94,0.6)]">
            Tech Leaders
          </span>
        </h2>
        <p className="text-white/60 font-mono text-xs sm:text-sm mt-2 max-w-xl mx-auto">
          Get your code, system architecture, and pitches reviewed 1-on-1 by veteran engineers, founders, and venture scouts.
        </p>
      </div>

      {/* 4 Speaker Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {speakers.map((speaker, idx) => (
          <div
            key={idx}
            className="group relative rounded-none bg-[#050b07] border border-emerald-500/25 hover:border-emerald-400 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-950/50 hover:-translate-y-1.5"
          >
            <TechCorner position="tl" />

            <div>
              <div className="text-[9px] font-mono text-emerald-400/60 mb-3 text-center">
                {speaker.telemetry}
              </div>

              {/* Image with Matrix Green Border */}
              <div className="relative w-28 h-28 mx-auto mb-5 p-1 bg-black border border-emerald-500/40 group-hover:border-emerald-400 shadow-md group-hover:shadow-[0_0_15px_rgba(52,211,153,0.4)] transition-all">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover object-center filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Speaker Details */}
              <div className="text-center">
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {speaker.name}
                </h3>
                <div className="text-xs font-mono text-emerald-400 font-semibold mt-0.5">
                  {speaker.role}
                </div>
                <div className="text-[11px] font-mono text-white/50 mb-3">
                  {speaker.company}
                </div>

                <div className="inline-block px-2.5 py-1 bg-black/60 border border-emerald-500/20 text-[10px] font-mono text-emerald-300 mb-3">
                  {speaker.specialization}
                </div>

                <p className="text-xs text-white/60 font-sans leading-relaxed">
                  {speaker.bio}
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-5 pt-4 border-t border-emerald-500/20 flex items-center justify-center gap-3">
              <a
                href={speaker.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-black/60 hover:bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={speaker.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-black/60 hover:bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
