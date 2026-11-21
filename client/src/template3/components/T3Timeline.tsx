import React, { useState } from "react";
import { Clock, Calendar, MapPin, Coffee, Utensils, Award, Zap, Code, CheckCircle } from "lucide-react";

interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  location: string;
  type: "keynote" | "code" | "food" | "mentor" | "awards";
  icon: any;
}

export default function T3Timeline() {
  const [activeDay, setActiveDay] = useState<"day1" | "day2">("day1");

  const day1Events: TimelineEvent[] = [
    {
      time: "08:30 AM",
      title: "Check-in & Badge Distribution",
      description: "Arrival at RIET Campus, physical verification of team college IDs, and welcome swag kit distribution.",
      location: "Campus Central Foyer",
      type: "keynote",
      icon: CheckCircle,
    },
    {
      time: "10:00 AM",
      title: "Grand Opening Ceremony & Challenge Briefing",
      description: "Inaugural address by college leadership, keynote speaker session, and unveiling of challenge problem statements.",
      location: "Main Auditorium",
      type: "keynote",
      icon: Zap,
    },
    {
      time: "11:00 AM",
      title: "⚡ 24-Hour Hackathon Commences",
      description: "Hack clocks start ticking! Teams set up dev environments, initialize GitHub repos, and begin coding.",
      location: "Hack Labs A, B & C",
      type: "code",
      icon: Code,
    },
    {
      time: "01:30 PM",
      title: "Networking Lunch & Refreshments",
      description: "Buffet lunch served to all hackathon teams with high-energy hydration stations.",
      location: "College Dining Hall",
      type: "food",
      icon: Utensils,
    },
    {
      time: "05:00 PM",
      title: "Mentorship Sprint 1: Architecture Review",
      description: "Industry architects conduct 1-on-1 table visits to evaluate system design, tech stack, and scalability.",
      location: "Hack Stations",
      type: "mentor",
      icon: Award,
    },
    {
      time: "08:30 PM",
      title: "Dinner & Fueling Round",
      description: "Hot dinner served to energize hackers for the night sprint.",
      location: "College Dining Hall",
      type: "food",
      icon: Utensils,
    },
    {
      time: "11:30 PM",
      title: "Midnight Energizer & Acoustic Chill",
      description: "Cold coffee, snacks, Red Bull, and acoustic campus jamming to refresh tired minds.",
      location: "Recreation Lawn",
      type: "food",
      icon: Coffee,
    },
  ];

  const day2Events: TimelineEvent[] = [
    {
      time: "02:30 AM",
      title: "Midnight Deep Coding Marathon",
      description: "Peak development hours. Mentors available on standby on official Discord and in-person labs.",
      location: "Hack Labs",
      type: "code",
      icon: Code,
    },
    {
      time: "07:30 AM",
      title: "Morning Breakfast & Coffee Bar",
      description: "Fresh breakfast and coffee bar opens to fuel final polishing and bug fixes.",
      location: "Dining Hall",
      type: "food",
      icon: Utensils,
    },
    {
      time: "09:30 AM",
      title: "Mentorship Sprint 2: Pitch Dry-Runs",
      description: "Mentors review slide decks and live prototypes to prepare teams for final stage evaluation.",
      location: "Hack Labs",
      type: "mentor",
      icon: Award,
    },
    {
      time: "11:00 AM",
      title: "🛑 Code Freeze & Repository Lock",
      description: "All GitHub commits stop! Teams submit final repository links, live URLs, and demo videos.",
      location: "Central Submission Portal",
      type: "code",
      icon: Zap,
    },
    {
      time: "12:00 PM",
      title: "Grand Stage Pitching & Jury Evaluation",
      description: "Top shortlisted finalist teams present live product demonstrations before the expert panel.",
      location: "Main Auditorium",
      type: "keynote",
      icon: Award,
    },
    {
      time: "03:30 PM",
      title: "Valedictory & ₹50,000+ Prize Ceremony",
      description: "Announcement of winners, trophy presentation, cash distribution, and closing celebration.",
      location: "Main Auditorium",
      type: "awards",
      icon: Award,
    },
  ];

  const events = activeDay === "day1" ? day1Events : day2Events;

  return (
    <section id="schedule" className="relative py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[400px] bg-cyan-600/10 blur-[150px] pointer-events-none -z-10 rounded-full" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
          <Clock className="w-3.5 h-3.5" />
          <span>24-Hour Non-Stop Itinerary</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Event{" "}
          <span className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400">
            Timeline & Schedule
          </span>
        </h2>
        <p className="text-white/60 text-sm sm:text-base mt-3 max-w-xl mx-auto">
          Every milestone meticulously planned to give you the ultimate 24-hour innovation experience.
        </p>
      </div>

      {/* Day Selector Segmented Toggle */}
      <div className="flex items-center justify-center mb-12">
        <div className="flex items-center p-1 rounded-full bg-[#070b1a] border border-white/15 shadow-xl">
          <button
            onClick={() => setActiveDay("day1")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-mono font-bold transition-all cursor-pointer ${
              activeDay === "day1"
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
                : "text-white/60 hover:text-white"
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>DAY 1: 17 DEC 2026</span>
          </button>
          <button
            onClick={() => setActiveDay("day2")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-mono font-bold transition-all cursor-pointer ${
              activeDay === "day2"
                ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/30"
                : "text-white/60 hover:text-white"
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>DAY 2: 18 DEC 2026</span>
          </button>
        </div>
      </div>

      {/* Laser Interactive Timeline Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Central Laser Line */}
        <div className="absolute top-4 bottom-4 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-400 via-violet-500 to-fuchsia-400 opacity-40 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />

        <div className="space-y-6 sm:space-y-8">
          {events.map((event, idx) => {
            const Icon = event.icon;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={idx}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 ${
                  isEven ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Content Card */}
                <div className={`w-full sm:w-[calc(50%-2rem)] pl-12 sm:pl-0 ${isEven ? "sm:text-right" : "sm:text-left"}`}>
                  <div className="group rounded-2xl bg-[#070b1a]/90 backdrop-blur-xl border border-white/10 hover:border-cyan-400/40 p-5 shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <div className={`flex items-center gap-2 mb-2 ${isEven ? "sm:justify-end" : "sm:justify-start"}`}>
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 text-xs font-mono font-bold border border-cyan-500/30">
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] font-mono text-white/50">
                        <MapPin className="w-3 h-3 text-fuchsia-400" />
                        {event.location}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/65 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Laser Pin Node */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-5 sm:top-auto flex items-center justify-center w-8 h-8 rounded-full bg-[#080c1f] border-2 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.8)] z-10">
                  <Icon className="w-3.5 h-3.5 text-cyan-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
