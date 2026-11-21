import React from "react";
import { Sparkles, Heart, Github, Twitter, Instagram, Linkedin } from "lucide-react";

export default function T3Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#060714] relative overflow-hidden py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 to-fuchsia-500 p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#0a0a14] rounded-[10px] flex items-center justify-center overflow-hidden">
                  <img src="/rietlogo.png" alt="RIET Logo" className="w-6 h-6 object-contain" />
                </div>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white font-sans flex items-baseline">
                <span>ENIGMA</span>
                <span className="text-2xl font-black text-violet-400 scale-y-130 inline-block origin-bottom">2.0</span>
              </span>
            </div>
            <p className="text-white/60 text-sm max-w-sm leading-relaxed mb-6">
              The flagship 24-hour national hackathon by Rajasthan Institute of Engineering & Technology, Jaipur. Bringing together visionaries, coders, and makers to pioneer the next wave of tech innovation.
            </p>
            <div className="flex items-center gap-3 text-white/60">
              <a href="#" className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center hover:text-white hover:bg-violet-600/20 hover:border-violet-500/40 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center hover:text-white hover:bg-violet-600/20 hover:border-violet-500/40 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center hover:text-white hover:bg-violet-600/20 hover:border-violet-500/40 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center hover:text-white hover:bg-violet-600/20 hover:border-violet-500/40 transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-violet-300 font-semibold mb-4">
              Explore Event
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><a href="#overview" className="hover:text-white transition-colors">Event Overview</a></li>
              <li><a href="#highlights" className="hover:text-white transition-colors">Why Join Us</a></li>
              <li><a href="#tracks" className="hover:text-white transition-colors">Problem Tracks</a></li>
              <li><a href="#timeline" className="hover:text-white transition-colors">24h Schedule</a></li>
              <li><a href="#prizes" className="hover:text-white transition-colors">Prizes & Bounties</a></li>
              <li><a href="#rules" className="hover:text-white transition-colors">Official Rulebook</a></li>
            </ul>
          </div>

          {/* Venue & Organization */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-fuchsia-300 font-semibold mb-4">
              Venue & Host
            </h4>
            <p className="text-xs text-white/70 leading-relaxed mb-3">
              Rajasthan Institute of Engineering & Technology (RIET), Bhankrota, Ajmer Road, Jaipur, Rajasthan 302026.
            </p>
            <p className="text-xs text-white/50 font-mono">
              Direct Contact: <br />
              <a href="mailto:enigma@rietjaipur.ac.in" className="text-violet-300 hover:underline">
                enigma@rietjaipur.ac.in
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © 2026 ENIGMA2.0 Hackathon • Rajasthan Institute of Engineering and Technology. All rights reserved.
          </div>
          <div className="flex items-center gap-1 font-mono">
            Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 mx-0.5" /> by Team RIET Enigma
          </div>
        </div>
      </div>
    </footer>
  );
}
