import React, { useState } from "react";
import { Calendar, Clock, MapPin, Sparkles, CheckCircle, Flag, Coffee, Code2, Users, Award } from "lucide-react";

export default function T3Timeline() {
  const [activeDay, setActiveDay] = useState<"day1" | "day2">("day1");

  const scheduleDay1 = [
    {
      time: "08:30 AM – 10:00 AM",
      title: "Hacker Check-in & Welcome Kit Distribution",
      desc: "Arrive at RIET campus, complete biometric/QR verification, collect official ENIGMA2.0 hacker kits and badges.",
      location: "Main Reception & Registration Desk",
      icon: Users,
      badge: "Arrival",
    },
    {
      time: "10:00 AM – 11:00 AM",
      title: "Grand Opening Ceremony & Keynotes",
      desc: "Welcome address by college leadership, hackathon briefing, problem statement release, and rules overview.",
      location: "Auditorium A",
      icon: Flag,
      badge: "Ceremony",
    },
    {
      time: "11:00 AM SHARP",
      title: "🚀 Hacking Commences! (24-Hour Timer Starts)",
      desc: "Teams settle into labs, configure environments, create git repositories, and start ideating.",
      location: "Central Hack Arena & Labs",
      icon: Code2,
      badge: "Hacking Begins",
    },
    {
      time: "01:30 PM – 02:30 PM",
      title: "Buffet Lunch & Sponsor Meet & Greet",
      desc: "Complimentary lunch served in the campus cafeteria. Networking booths open.",
      location: "Cafeteria & Lawn",
      icon: Coffee,
      badge: "Meal",
    },
    {
      time: "04:30 PM – 06:30 PM",
      title: "Mentorship Review Round 1 (Architecture & Feasibility)",
      desc: "Industry mentors visit each table to review architecture diagrams, UX wireframes, and offer technical advice.",
      location: "Hack Arena",
      icon: CheckCircle,
      badge: "Mentorship",
    },
    {
      time: "08:30 PM – 09:30 PM",
      title: "Dinner & Energy Refresh",
      desc: "Hot dinner buffet, coffee bars open.",
      location: "Cafeteria",
      icon: Coffee,
      badge: "Meal",
    },
    {
      time: "11:30 PM – Midnight",
      title: "Midnight Snacks & Esports Gaming Break",
      desc: "Fresh pizza boxes, RedBull cans, and a fun multiplayer gaming lounge to blow off steam.",
      location: "Activity Hall",
      icon: Sparkles,
      badge: "Midnight Fuel",
    },
  ];

  const scheduleDay2 = [
    {
      time: "01:00 AM – 06:00 AM",
      title: "Midnight Deep Coding Sprint",
      desc: "Core coding phase. Mentors on stand-by, 24/7 technical team active, snack bars open.",
      location: "Hack Arena",
      icon: Code2,
      badge: "Deep Work",
    },
    {
      time: "07:30 AM – 08:30 AM",
      title: "Breakfast & Fresh Morning Brew",
      desc: "Piping hot breakfast, tea, and coffee to kickstart the final hours.",
      location: "Cafeteria",
      icon: Coffee,
      badge: "Meal",
    },
    {
      time: "09:00 AM – 10:30 AM",
      title: "Mentorship Review Round 2 (Working Prototype & Polish)",
      desc: "Second evaluation round focusing on core functionality, test cases, and presentation pitch tips.",
      location: "Hack Arena",
      icon: CheckCircle,
      badge: "Mentorship",
    },
    {
      time: "11:00 AM SHARP",
      title: "🛑 Code Freeze & Final Submission",
      desc: "All repositories must be pushed and GitHub/Devpost submission links finalized. No further commits allowed.",
      location: "Online Portal",
      icon: Flag,
      badge: "Code Freeze",
    },
    {
      time: "11:30 AM – 01:30 PM",
      title: "Grand Jury Pitching & Live Demonstrations",
      desc: "Top shortlisted teams present their working prototypes on stage in front of the judge panel.",
      location: "Main Stage / Auditorium",
      icon: Users,
      badge: "Demos",
    },
    {
      time: "02:30 PM – 04:00 PM",
      title: "Valedictory Ceremony, Awards & Prize Distribution",
      desc: "Announcement of winners, distribution of ₹1,00,000+ prizes, certificates, and closing photo sessions.",
      location: "Auditorium A",
      icon: Award,
      badge: "Awards",
    },
  ];

  const currentSchedule = activeDay === "day1" ? scheduleDay1 : scheduleDay2;

  return (
    <section id="timeline" className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Clock className="w-3.5 h-3.5 text-violet-400" />
            <span>24-Hour Schedule</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            The Event{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
              Timeline
            </span>
          </h2>
          <p className="text-white/60 text-base">
            Every milestone carefully timed so you make the most of your 24 hours.
          </p>
        </div>

        {/* Day 1 / Day 2 Tab Selector */}
        <div className="flex justify-center mb-12">
          <div className="p-1 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl flex items-center gap-2">
            <button
              onClick={() => setActiveDay("day1")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeDay === "day1"
                  ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-600/30"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Day 1 — Dec 17 (Kickoff & Sprint)</span>
            </button>
            <button
              onClick={() => setActiveDay("day2")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeDay === "day2"
                  ? "bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white shadow-lg shadow-fuchsia-600/30"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Day 2 — Dec 18 (Demos & Awards)</span>
            </button>
          </div>
        </div>

        {/* Timeline Cards */}
        <div className="space-y-4 relative">
          <div className="absolute left-6 top-4 bottom-4 w-px bg-gradient-to-b from-violet-500/40 via-fuchsia-500/40 to-transparent hidden sm:block" />

          {currentSchedule.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-violet-500/30 transition-all hover:bg-white/[0.05] group"
              >
                {/* Time Indicator Marker */}
                <div className="sm:w-12 sm:h-12 w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center shrink-0 text-violet-300 group-hover:scale-110 group-hover:bg-violet-600/30 transition-all">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-mono font-bold text-violet-400 bg-violet-500/10 px-2.5 py-0.5 rounded-full border border-violet-500/20">
                      {item.time}
                    </span>
                    <span className="text-[11px] font-mono text-white/50 bg-white/[0.04] px-2 py-0.5 rounded-md flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-fuchsia-400" />
                      {item.location}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-violet-200 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-white/70 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
