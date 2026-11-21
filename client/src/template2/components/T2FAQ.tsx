import React, { useState } from "react";
import { HelpCircle, ChevronDown, Terminal, MessageCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: "general" | "reg" | "stay" | "rules";
}

export default function T2FAQ() {
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
    { id: "all", label: "// ALL_QUERIES" },
    { id: "general", label: "// GENERAL" },
    { id: "reg", label: "// REGISTRATION" },
    { id: "stay", label: "// LOGISTICS_STAY" },
    { id: "rules", label: "// RULES_CODE" },
  ];

  const filteredFaqs = selectedCategory === "all"
    ? faqs
    : faqs.filter((f) => f.category === selectedCategory);

  return (
    <section id="faq" className="relative py-24 px-4 sm:px-6 max-w-5xl mx-auto">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-600/10 blur-[150px] pointer-events-none -z-10 rounded-full" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>// KNOWLEDGE_BASE_FAQ</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight leading-tight">
          Frequently Asked{" "}
          <span className="font-mono text-emerald-400 drop-shadow-[0_0_20px_rgba(34,197,94,0.6)]">
            Questions
          </span>
        </h2>
        <p className="text-white/60 font-mono text-xs sm:text-sm mt-2 max-w-xl mx-auto">
          Everything you need to know about the registration, campus logistics, judging, and prizes.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 text-xs font-mono transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-400 font-bold"
                : "bg-black/60 text-white/60 hover:text-emerald-300 hover:bg-emerald-950/20 border border-emerald-500/20"
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
              className={`border transition-all duration-300 ${
                isOpen
                  ? "bg-[#050b07] border-emerald-400 shadow-xl shadow-emerald-950/30"
                  : "bg-[#030604] hover:bg-[#050b07] border-emerald-500/20"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <span className="text-sm sm:text-base font-bold text-white font-mono leading-snug">
                  {faq.question}
                </span>
                <div className={`p-1.5 border shrink-0 transition-transform ${
                  isOpen ? "bg-emerald-500/20 border-emerald-400 text-emerald-300 rotate-180" : "bg-black/60 border-emerald-500/30 text-emerald-400"
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-white/70 leading-relaxed border-t border-emerald-500/15 pt-3 font-sans">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Help Desk Callout */}
      <div className="mt-12 text-center p-6 bg-[#040805] border border-emerald-500/30">
        <p className="text-xs sm:text-sm text-white/70 font-sans mb-3">
          Have a specific query not listed here? Our organizing committee is here to assist!
        </p>
        <a
          href="mailto:hackathon@rietjaipur.ac.in"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 hover:text-emerald-300 transition-colors uppercase tracking-wider"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Email Us: hackathon@rietjaipur.ac.in</span>
        </a>
      </div>
    </section>
  );
}
