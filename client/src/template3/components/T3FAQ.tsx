import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, MessageCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: "general" | "reg" | "stay" | "rules";
}

export default function T3FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const faqs: FAQItem[] = [
    {
      category: "general",
      question: "Who is eligible to participate in ENIGMA2.0?",
      answer: "Any currently enrolled undergraduate, postgraduate, or diploma student from any recognized college or university across India is eligible. Cross-college and cross-specialization teams are fully permitted.",
    },
    {
      category: "reg",
      question: "Is there any registration or participation fee?",
      answer: "No, participation in ENIGMA2.0 is 100% completely FREE! Shortlisted teams will receive full campus entry, meals, Wi-Fi, mentorship, swags, and accommodation at zero cost.",
    },
    {
      category: "reg",
      question: "What is the team size requirement?",
      answer: "Teams must have between 2 and 4 members. Solo participation is not permitted to foster collaborative development and real-world team dynamics.",
    },
    {
      category: "stay",
      question: "Will accommodation and food be provided during the 24 hours?",
      answer: "Yes! High-speed Wi-Fi, AC hack labs, power strips, overnight resting zones, and all meals (lunch, dinner, midnight coffee/energy snacks, and breakfast) are provided on the RIET Jaipur campus.",
    },
    {
      category: "rules",
      question: "Can we start building our project before the event?",
      answer: "No. All core application code, databases, and architectures must be initiated after the 24-hour timer starts on Dec 17, 11:00 AM. You are allowed to use standard open-source libraries, UI components, and public APIs.",
    },
    {
      category: "rules",
      question: "Are AI tools like ChatGPT or GitHub Copilot allowed?",
      answer: "Yes, standard AI dev tools are allowed for productivity and debugging. However, your team must be able to explain all architecture, algorithms, and system logic during jury evaluation.",
    },
    {
      category: "stay",
      question: "How do we travel to the RIET Jaipur campus?",
      answer: "RIET is located at Bhankrota on Ajmer Road, Jaipur. It is approximately 12 km from Jaipur Junction Railway Station and 14 km from Jaipur International Airport. App-based cabs (Ola/Uber) and city buses are readily available 24/7.",
    },
    {
      category: "general",
      question: "Will all participants receive certificates?",
      answer: "Yes! Every participant who submits an MVP and pitches before the jury will receive an official National Level Certificate of Participation along with swags and partner vouchers.",
    },
  ];

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "general", label: "General" },
    { id: "reg", label: "Registration" },
    { id: "stay", label: "Food & Stay" },
    { id: "rules", label: "Rules & Code" },
  ];

  const filteredFaqs = selectedCategory === "all"
    ? faqs
    : faqs.filter((f) => f.category === selectedCategory);

  return (
    <section id="faq" className="relative py-24 px-4 sm:px-6 max-w-5xl mx-auto">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-violet-600/10 blur-[150px] pointer-events-none -z-10 rounded-full" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-mono uppercase tracking-wider mb-4">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Got Questions?</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Frequently Asked{" "}
          <span className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-fuchsia-400">
            Questions
          </span>
        </h2>
        <p className="text-white/60 text-sm sm:text-base mt-3 max-w-xl mx-auto">
          Everything you need to know about the registration, campus logistics, judging, and prizes.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? "bg-gradient-to-r from-cyan-500/25 to-violet-500/25 text-cyan-300 border border-cyan-400/40 shadow-sm"
                : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/5"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "bg-[#070b1a]/95 border-cyan-500/40 shadow-xl shadow-cyan-950/20"
                  : "bg-white/[0.02] hover:bg-white/[0.04] border-white/10"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <span className="text-sm sm:text-base font-bold text-white leading-snug">
                  {faq.question}
                </span>
                <div className={`p-1.5 rounded-full border shrink-0 transition-transform ${
                  isOpen ? "bg-cyan-500/20 border-cyan-500/40 text-cyan-300 rotate-180" : "bg-white/5 border-white/10 text-white/60"
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-white/70 leading-relaxed border-t border-white/5 pt-3 animate-fade-in font-sans">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still Have Questions Box */}
      <div className="mt-12 text-center p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
        <p className="text-xs sm:text-sm text-white/70 mb-3">
          Have a specific query not listed here? Our organizing committee is here to assist!
        </p>
        <a
          href="mailto:hackathon@rietjaipur.ac.in"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Email Us: hackathon@rietjaipur.ac.in</span>
        </a>
      </div>
    </section>
  );
}
