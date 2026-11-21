import React from "react";
import { Users, Linkedin, Twitter, ExternalLink, Sparkles, Award } from "lucide-react";

interface SpeakerItem {
  name: string;
  role: string;
  company: string;
  specialization: string;
  image: string;
  linkedin: string;
  twitter: string;
  bio: string;
}

export default function T3Speakers() {
  const speakers: SpeakerItem[] = [
    {
      name: "Dr. Aarav Sharma",
      role: "Chief AI Scientist",
      company: "NeuralCloud Labs",
      specialization: "Large Language Models & Agentic AI",
      image: "/attached_assets/generated_images/Male_developer_speaker_headshot_dd4fee6e.png",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      bio: "12+ years in deep learning and autonomous systems. Former research lead at top Silicon Valley AI collectives.",
    },
    {
      name: "Priya Venkatesh",
      role: "VP of Engineering",
      company: "BlockScale Systems",
      specialization: "ZK-Cryptography & EVM Architecture",
      image: "/attached_assets/generated_images/Female_engineer_speaker_headshot_28df80eb.png",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      bio: "Core contributor to open-source cryptographic frameworks and zero-knowledge scalable rollup architecture.",
    },
    {
      name: "Rohan Mathur",
      role: "Principal Cloud Architect",
      company: "AWS Ecosystem & Angel Investor",
      specialization: "Distributed Systems & Kubernetes",
      image: "/attached_assets/generated_images/Senior_tech_judge_headshot_341a1309.png",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      bio: "Mentored 100+ hackathons globally. Specializes in taking proof-of-concepts into resilient production environments.",
    },
    {
      name: "Ananya Deshmukh",
      role: "Head of Product & Design",
      company: "InnovateHQ (Forbes 30U30)",
      specialization: "Human-Centered UX & Rapid Prototyping",
      image: "/attached_assets/generated_images/Young_female_coder_headshot_65c04cf3.png",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      bio: "Product strategist focused on interface aesthetics, micro-interactions, and high-conversion UX design.",
    },
  ];

  return (
    <section id="speakers" className="relative py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-600/10 blur-[160px] pointer-events-none -z-10 rounded-full" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
          <Award className="w-3.5 h-3.5" />
          <span>Industry Mentors & Jury</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Mentorship from{" "}
          <span className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400">
            Tech Leaders
          </span>
        </h2>
        <p className="text-white/60 text-sm sm:text-base mt-3 max-w-xl mx-auto">
          Get your code, system architecture, and pitches reviewed 1-on-1 by veteran engineers, founders, and venture scouts.
        </p>
      </div>

      {/* 4 Speaker Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {speakers.map((speaker, idx) => (
          <div
            key={idx}
            className="group relative rounded-3xl bg-[#070b1a]/90 backdrop-blur-2xl border border-white/10 hover:border-cyan-400/40 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/40 hover:-translate-y-1.5"
          >
            <div>
              {/* Image with Holographic Ring */}
              <div className="relative w-28 h-28 mx-auto mb-5 rounded-2xl overflow-hidden p-1 bg-gradient-to-tr from-cyan-400 via-violet-500 to-fuchsia-500 shadow-xl group-hover:shadow-cyan-500/30 transition-shadow">
                <div className="w-full h-full rounded-[14px] overflow-hidden bg-black">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                  />
                </div>
              </div>

              {/* Speaker Details */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {speaker.name}
                </h3>
                <div className="text-xs font-mono text-cyan-400 font-semibold mt-0.5">
                  {speaker.role}
                </div>
                <div className="text-[11px] font-mono text-white/50 mb-3">
                  {speaker.company}
                </div>

                <div className="inline-block px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-fuchsia-300 mb-3">
                  {speaker.specialization}
                </div>

                <p className="text-xs text-white/65 leading-relaxed">
                  {speaker.bio}
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-center gap-3">
              <a
                href={speaker.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
              </a>
              <a
                href={speaker.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 text-cyan-400" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
