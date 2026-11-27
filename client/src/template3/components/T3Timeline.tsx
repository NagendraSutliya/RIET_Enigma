import React, { useState } from "react";
import { Calendar, Clock, MapPin, Sparkles, CheckCircle, Flag, Coffee, Code2, Users, Award } from "lucide-react";

export default function T3Timeline() {
  const [activeDay, setActiveDay] = useState<"day1" | "day2">("day1");

  const scheduleDay1 = [
    {
      time: "09:00 AM – 11:00 AM",
      title: "Registration, Check-in & Reporting",
      desc: "Welcome hackers! Get your registration kit, badges, explore the venue, and meet the team.",
      location: "RIET, SGI Main Gate",
      icon: Users,
      badge: "Arrival",
    },
    {
      time: "11:00 AM – 12:00 PM",
      title: "Orientation & Inaugural Ceremony",
      desc: "Learn about event rules, guidelines, and get inspired by keynote speakers.",
      location: "SGI Main Ground",
      icon: Flag,
      badge: "Ceremony",
    },
    {
      time: "12:00 PM – 01:00 PM",
      title: "🚀 Hackathon Coding Begins!",
      desc: "Start building your ideas. Let the creative 24-hour journey begin!",
      location: "Code Rooms",
      icon: Code2,
      badge: "Hacking Begins",
    },
    {
      time: "01:00 PM – 02:00 PM",
      title: "Lunch Break",
      desc: "Refuel with delicious food and refreshments.",
      location: "Food Court",
      icon: Coffee,
      badge: "Meal",
    },
    {
      time: "05:00 PM – 07:00 PM",
      title: "Mentorship Round",
      desc: "Get expert guidance and feedback from industry professionals.",
      location: "Code Rooms",
      icon: CheckCircle,
      badge: "Mentorship",
    },
    {
      time: "07:00 PM – 09:00 PM",
      title: "Cultural Break (Band Performance & DJ Night)",
      desc: "Live band performance followed by an energetic DJ night! Unwind, dance, and celebrate with fellow hackers.",
      location: "SGI Main Ground",
      icon: Sparkles,
      badge: "Cultural Night",
    },
    {
      time: "09:00 PM – 10:00 PM",
      title: "Dinner Break",
      desc: "Energy boost! Grab dinner and recharge.",
      location: "Food Court",
      icon: Coffee,
      badge: "Meal",
    },
  ];

  const scheduleDay2 = [
    {
      time: "08:00 AM – 09:00 AM",
      title: "Breakfast",
      desc: "Start your final day with energy and enthusiasm.",
      location: "Food Court",
      icon: Coffee,
      badge: "Meal",
    },
    {
      time: "09:00 AM – 11:00 AM",
      title: "Final Coding Sprint & Submissions",
      desc: "Last hours to polish your project, push final commits, and submit. Make it count!",
      location: "Code Rooms",
      icon: Code2,
      badge: "Submission",
    },
    {
      time: "11:00 AM – 12:00 PM",
      title: "Project Evaluation & Judging",
      desc: "Expert panel evaluates all submissions based on innovation, design, and impact.",
      location: "Code Rooms",
      icon: CheckCircle,
      badge: "Judging",
    },
    {
      time: "12:00 PM – 01:00 PM",
      title: "Winner Announcements, Prize Ceremony & Closing",
      desc: "Celebrate achievements! Winner announcements, awards ceremony, and grand closing remarks.",
      location: "SGI Main Ground",
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
