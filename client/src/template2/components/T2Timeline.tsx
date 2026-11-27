import React, { useState } from "react";
import { Clock, Calendar, MapPin, Coffee, Utensils, Award, Zap, Code, CheckCircle, Terminal } from "lucide-react";

interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  location: string;
  code: string;
  icon: any;
}

export default function T2Timeline() {
  const [activeDay, setActiveDay] = useState<"day1" | "day2">("day1");

  const day1Events: TimelineEvent[] = [
    {
      time: "09:00 AM",
      code: "MILESTONE_01 // INTAKE",
      title: "Registration, Check-in & Reporting",
      description: "Welcome hackers! Get your registration kit, badges, explore the venue, and meet the team.",
      location: "RIET, SGI Main Gate",
      icon: CheckCircle,
    },
    {
      time: "11:00 AM",
      code: "MILESTONE_02 // KEYNOTE",
      title: "Orientation & Inaugural Ceremony",
      description: "Learn about event rules, guidelines, and get inspired by keynote speakers.",
      location: "SGI Main Ground",
      icon: Zap,
    },
    {
      time: "12:00 PM",
      code: "MILESTONE_03 // CODE_START",
      title: "⚡ Hackathon Coding Begins!",
      description: "Start building your ideas. Let the creative 24-hour journey begin!",
      location: "Code Rooms",
      icon: Code,
    },
    {
      time: "01:00 PM",
      code: "MILESTONE_04 // FUEL_01",
      title: "Lunch Break",
      description: "Refuel with delicious food and refreshments.",
      location: "Food Court",
      icon: Utensils,
    },
    {
      time: "05:00 PM",
      code: "MILESTONE_05 // MENTOR_01",
      title: "Mentorship Round",
      description: "Get expert guidance and feedback from industry professionals.",
      location: "Code Rooms",
      icon: Award,
    },
    {
      time: "07:00 PM",
      code: "MILESTONE_06 // CULTURE",
      title: "Cultural Break (Band Performance & DJ Night)",
      description: "Live band performance followed by an energetic DJ night! Unwind, dance, and celebrate with fellow hackers.",
      location: "SGI Main Ground",
      icon: Zap,
    },
    {
      time: "09:00 PM",
      code: "MILESTONE_07 // FUEL_02",
      title: "Dinner Break",
      description: "Energy boost! Grab dinner and recharge.",
      location: "Food Court",
      icon: Utensils,
    },
  ];

  const day2Events: TimelineEvent[] = [
    {
      time: "08:00 AM",
      code: "MILESTONE_08 // FUEL_03",
      title: "Breakfast",
      description: "Start your final day with energy and enthusiasm.",
      location: "Food Court",
      icon: Utensils,
    },
    {
      time: "09:00 AM",
      code: "MILESTONE_09 // CODE_SPRINT",
      title: "Final Coding Sprint & Submissions",
      description: "Last hours to polish your project, push final commits, and submit. Make it count!",
      location: "Code Rooms",
      icon: Code,
    },
    {
      time: "11:00 AM",
      code: "MILESTONE_10 // EVALUATION",
      title: "Project Evaluation & Judging",
      description: "Expert panel evaluates all submissions based on innovation, design, and impact.",
      location: "Code Rooms",
      icon: Award,
    },
    {
      time: "12:00 PM",
      code: "MILESTONE_11 // PODIUM",
      title: "Winner Announcements, Prize Ceremony & Closing",
      description: "Celebrate achievements! Winner announcements, awards ceremony, and grand closing remarks.",
      location: "SGI Main Ground",
      icon: Award,
    },
  ];

  const events = activeDay === "day1" ? day1Events : day2Events;

  return (
    <section id="schedule" className="relative py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[350px] bg-emerald-600/10 blur-[160px] pointer-events-none -z-10 rounded-full" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
          <Clock className="w-3.5 h-3.5" />
          <span>// 24H_CHRONO_ITINERARY</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight leading-tight">
          Event{" "}
          <span className="font-mono text-emerald-400 drop-shadow-[0_0_20px_rgba(34,197,94,0.6)]">
            Timeline & Schedule
          </span>
        </h2>
        <p className="text-white/60 font-mono text-xs sm:text-sm mt-2 max-w-xl mx-auto">
          Every milestone meticulously planned to give you the ultimate 24-hour innovation experience.
        </p>
      </div>

      {/* Day Selector Segmented Toggle */}
      <div className="flex items-center justify-center mb-12">
        <div className="flex items-center p-1 bg-[#040805] border border-emerald-500/30">
          <button
            onClick={() => setActiveDay("day1")}
            className={`flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-mono font-bold transition-all cursor-pointer ${
              activeDay === "day1"
                ? "bg-emerald-400 text-black shadow-md shadow-emerald-500/30"
                : "text-white/60 hover:text-emerald-300"
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>DAY 1: 17 DEC 2026</span>
          </button>
          <button
            onClick={() => setActiveDay("day2")}
            className={`flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-mono font-bold transition-all cursor-pointer ${
              activeDay === "day2"
                ? "bg-emerald-400 text-black shadow-md shadow-emerald-500/30"
                : "text-white/60 hover:text-emerald-300"
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>DAY 2: 18 DEC 2026</span>
          </button>
        </div>
      </div>

      {/* Laser Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Central Laser Line */}
        <div className="absolute top-4 bottom-4 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-emerald-400 via-cyan-400 to-emerald-500 opacity-60 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />

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
                  <div className="group rounded-none bg-[#050b07] border border-emerald-500/25 hover:border-emerald-400 p-5 shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <div className={`flex items-center gap-2 mb-1.5 ${isEven ? "sm:justify-end" : "sm:justify-start"}`}>
                      <span className="px-2.5 py-0.5 bg-emerald-500/15 text-emerald-300 text-xs font-mono font-bold border border-emerald-500/40">
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] font-mono text-white/50">
                        <MapPin className="w-3 h-3 text-emerald-400" />
                        {event.location}
                      </span>
                    </div>

                    <div className="text-[10px] font-mono text-emerald-400/70 mb-1">
                      {event.code}
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/65 leading-relaxed font-sans">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Laser Node */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-5 sm:top-auto flex items-center justify-center w-8 h-8 bg-black border-2 border-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.9)] z-10">
                  <Icon className="w-3.5 h-3.5 text-emerald-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
