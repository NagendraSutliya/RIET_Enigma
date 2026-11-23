import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { TechCorner } from "./TechDecorations";
import { ChevronRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const faqs = [
  { question: "Who can participate in Enigma2.0?", answer: "Enigma2.0 is open to all students currently enrolled in any recognized educational institution. Teams must have 1-6 members. We welcome beginners as well as experienced hackers!" },
  { question: "Is there an official WhatsApp group or community?", answer: "Yes! You can join our official WhatsApp community group for live updates, announcements, and team pairing: https://chat.whatsapp.com/Edu1sqGp4HFHzk3t9A0VUG?s=cl&p=a&iam=2" },
  { question: "What should I bring?", answer: "Bring your laptop, chargers, a valid student ID, and any hardware you plan to use. We'll provide internet, power outlets, and workspaces. Don't forget your enthusiasm and creativity!" },
  { 
    question: "Is there any registration fee?", 
    answer: "The base registration fee is ₹100 per participant, which covers hackathon entry, workstation access, high-speed Wi-Fi, and basic required items / essentials. Additionally, an optional food pass of ₹400 per participant is available to cover complete 24-hour meals (lunch, dinner, breakfast) and refreshments throughout the event." 
  },
  { question: "What are the judging criteria?", answer: "Projects will be judged on innovation (30%), technical implementation (30%), design & user experience (20%), impact & feasibility (15%), and presentation (5%). Make sure your solution is both creative and practical!" },
  { question: "What if I'm a beginner?", answer: "Perfect! We encourage beginners to participate. We'll have workshops, mentors, and resources to help you learn and build your project. Every expert was once a beginner!" },
  { question: "Can I start working on my project before the hackathon?", answer: "No, all code must be written during the hackathon. However, you can come with ideas and do research beforehand. Any pre-written code will lead to disqualification." },
  { question: "How do I submit my project?", answer: "Project submissions will be done through our online portal. You'll need to submit your code repository (GitHub), a demo video (max 3 minutes), and a brief presentation. Detailed guidelines will be provided at the event." },
  { question: "When and where is the event?", answer: "Enigma2.0 will be held on 17-18 December 2026 at Rajasthan Institute of Engineering and Technology, Bhankrota, Jaipur, Rajasthan." },
];

export default function FAQSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden">
      {/* Tech decorations - hidden on mobile */}
      <div className="hidden sm:block">
        <TechCorner position="tl" />
        <TechCorner position="br" />
      </div>
      
      {/* Side lines - hidden on mobile */}
      <div className="hidden lg:block">
        <div className="absolute left-8 top-0 w-px h-full bg-border" />
        <div className="absolute right-8 top-0 w-px h-full bg-border" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-10 sm:mb-16 transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-2 sm:mb-3">
            <span className="text-primary">?</span> FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-foreground">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-px bg-border">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className={`bg-background transition-all duration-500 group ${isVisible ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: isVisible ? `${index * 40}ms` : "0ms" }}
            >
              <summary className="cursor-pointer py-3 sm:py-4 px-4 sm:px-5 text-xs sm:text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-2">
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-primary transition-transform group-open:rotate-90 flex-shrink-0" />
                <span className="text-left">{faq.question}</span>
              </summary>
              <div className="px-4 sm:px-5 pb-3 sm:pb-4 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border pt-3 ml-5 sm:ml-6">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        <div className={`mt-8 sm:mt-12 text-center transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">Still have questions?</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:enigma@rietjaipur.ac.in"
              className="inline-block text-[10px] sm:text-xs font-mono uppercase tracking-[0.15em] sm:tracking-[0.2em] text-foreground border border-border px-5 sm:px-6 py-2.5 sm:py-3 hover:border-primary hover:text-primary transition-colors touch-target"
            >
              Email Us (enigma@rietjaipur.ac.in)
            </a>
            <a
              href="https://chat.whatsapp.com/Edu1sqGp4HFHzk3t9A0VUG?s=cl&p=a&iam=2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.15em] sm:tracking-[0.2em] text-emerald-300 border border-emerald-500/40 bg-emerald-500/10 px-5 sm:px-6 py-2.5 sm:py-3 hover:bg-emerald-500/20 transition-colors touch-target"
            >
              <FaWhatsapp className="w-3.5 h-3.5" />
              Join WhatsApp Group
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
