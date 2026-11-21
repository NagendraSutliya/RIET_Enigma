import React, { useState } from "react";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";

export default function T3FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is ENIGMA2.0 and who is eligible to participate?",
      a: "ENIGMA2.0 is the flagship 24-hour national hackathon hosted by Rajasthan Institute of Engineering and Technology (RIET), Jaipur on 17-18 December 2026. Any undergraduate, postgraduate, or diploma student enrolled in an accredited educational institution across India is eligible to form a team and apply.",
    },
    {
      q: "Is there any registration fee?",
      a: "No! Participation in ENIGMA2.0 is 100% free of charge. Selected teams receive complimentary meals, snacks, RedBull drinks, hacker kits, Wi-Fi access, and stay accommodations at the RIET campus throughout the 24 hours.",
    },
    {
      q: "What is the allowed team size?",
      a: "Teams can have between 2 to 4 members. Inter-college and inter-branch teams are completely welcome! Solo hackers are encouraged to join our Discord/WhatsApp community to find teammates before registration closes.",
    },
    {
      q: "What accommodations and facilities are provided on campus?",
      a: "Outstation and local participants will have access to air-conditioned coding labs, continuous high-speed Wi-Fi, separate secure rest zones for boys and girls, 24/7 security, medical first-aid, washrooms, and continuous food & coffee stations.",
    },
    {
      q: "What should each participant bring along?",
      a: "Every hacker must carry their valid College ID card, a personal laptop with charger, power extension strip, any specialized hardware (e.g. ESP32, sensors) if competing in the IoT track, and personal toiletries/jacket for the overnight stay.",
    },
    {
      q: "I am a first-year student / beginner. Can I still win?",
      a: "Absolutely! ENIGMA2.0 welcomes hackers of all skill levels. We have dedicated industry mentors conducting architectural reviews and technical office hours, plus a dedicated 'Best Freshman Team' cash prize.",
    },
    {
      q: "Can we start building our project beforehand?",
      a: "No. All code, wireframes, and prototypes must be authored during the 24-hour hackathon window starting 11:00 AM on December 17, 2026. You can use open-source libraries, public APIs, and pre-trained foundation models.",
    },
  ];

  return (
    <section id="faqs" className="py-20 relative overflow-hidden bg-black/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-mono uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-violet-400" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
              Questions
            </span>
          </h2>
          <p className="text-white/60 text-base">
            Everything you need to know about participating, staying, and competing in ENIGMA2.0.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white/[0.03] border border-white/10 hover:border-violet-500/30 transition-all overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-white hover:text-violet-200 transition-colors"
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-violet-600/30 text-violet-300 border-violet-500/40" : "text-white/60"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-white/70 leading-relaxed border-t border-white/5 pt-4 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
