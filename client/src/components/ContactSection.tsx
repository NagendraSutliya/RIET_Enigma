import { Phone, Mail, User, GraduationCap } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

// Faculty Coordinators
const facultyCoordinators = [
  {
    name: "Anshul Mathur",
    post: "Head, Training & Placement Office",
    image: "/anshul_mathur.jpg",
  },
  {
    name: "Shivam Negi",
    post: "Assistant Professor (Computer Science)",
    image: "/shivam_negi.jpg",
  },
  {
    name: "Nagendra Kumar Sutliya",
    post: "Assistant Professor (Computer Science)",
    image: "/nagendra_sutliya.jpg",
  },
];

// Student Coordinators
const studentCoordinators = [
  { name: "Naman Gupta", phone: "+91 90395 99101" },
  { name: "Abhinandan", phone: "+91 83404 92369" },
  { name: "Shreya Khandelwal", phone: "+91 74268 53859" },
  { name: "Adarsh Kumar Jha", phone: "+91 99343 00382" },
  { name: "Prince Kumar", phone: "+91 91427 99383" },
  { name: "Nitin Rajawat", phone: "+91 80786 76158" },
];

export default function ContactSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section id="contact" ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden">
      <div className="hidden lg:block">
        <div className="absolute left-8 top-0 w-px h-full bg-border" />
        <div className="absolute right-8 top-0 w-px h-full bg-border" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-12 sm:mb-16 transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-3 sm:mb-4 animate-pulse">
            <span className="text-primary">{"// "}</span>Contact
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-foreground">
            For Queries & Collaboration
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 sm:mt-4 max-w-2xl mx-auto">
            Reach out to our faculty and student coordinators for any questions, guidance, or support.
          </p>
        </div>

        {/* Faculty Coordinators Section */}
        <div className={`max-w-4xl mx-auto mb-14 sm:mb-16 transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="flex items-center justify-center gap-2.5 mb-6 sm:mb-8">
            <GraduationCap className="w-5 h-5 text-primary" />
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground">
              Faculty Coordinators
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {facultyCoordinators.map((faculty, idx) => (
              <div
                key={idx}
                className="bg-card/40 border border-border p-6 sm:p-8 text-center group hover:border-primary/50 transition-all duration-300 shadow-sm relative overflow-hidden"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center text-primary mb-4 overflow-hidden group-hover:scale-105 transition-transform duration-300 shadow-md">
                  {faculty.image ? (
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <User className="w-10 h-10 text-primary/70" />
                  )}
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {faculty.name}
                </h4>
                <p className="text-xs sm:text-sm font-mono text-muted-foreground mt-1.5 leading-snug">
                  {faculty.post}
                </p>
                <div className="mt-4 h-px w-8 mx-auto bg-border group-hover:bg-primary transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Student Coordinators Section */}
        <div className={`max-w-4xl mx-auto transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="flex items-center justify-center gap-2.5 mb-6 sm:mb-8">
            <Phone className="w-4 h-4 text-primary" />
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground">
              Student Coordinators
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {studentCoordinators.map((contact, idx) => (
              <div
                key={contact.phone}
                className={`bg-background p-6 sm:p-8 text-left group transition-opacity duration-700 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: isVisible ? `${idx * 80}ms` : "0ms" }}
              >
                <div className="flex items-center gap-2 text-primary mb-3">
                  <Phone className="w-4 h-4" />
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.15em] text-muted-foreground">Coordinator</span>
                </div>
                <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {contact.name}
                </p>
                <a
                  href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
                >
                  {contact.phone}
                </a>
                <div className="mt-4 h-px w-8 bg-border group-hover:bg-primary transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Email & WhatsApp Channels */}
        <div className={`mt-10 sm:mt-12 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <a
            href="mailto:enigma@rietjaipur.ac.in"
            className="p-5 bg-background border border-border hover:border-primary/50 flex items-center justify-between group transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Official Email</p>
                <p className="text-sm font-semibold text-foreground font-mono group-hover:text-primary transition-colors">enigma@rietjaipur.ac.in</p>
              </div>
            </div>
            <span className="text-xs font-mono text-muted-foreground group-hover:text-primary">Send Email →</span>
          </a>

          <a
            href="https://chat.whatsapp.com/Edu1sqGp4HFHzk3t9A0VUG?s=cl&p=a&iam=2"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 bg-emerald-950/20 border border-emerald-500/30 hover:border-emerald-500/60 flex items-center justify-between group transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                <FaWhatsapp className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-emerald-400/80">Hacker Community</p>
                <p className="text-sm font-semibold text-foreground font-mono group-hover:text-emerald-300 transition-colors">WhatsApp Group</p>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-400 group-hover:underline">Join Group →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
