import React from "react";
import { MapPin, Phone, Mail, Navigation, ExternalLink, ShieldCheck, Heart } from "lucide-react";

export default function T3VenueContact() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Venue Details Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-violet-600 to-fuchsia-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-violet-600/30">
              <MapPin className="w-6 h-6" />
            </div>

            <span className="text-xs font-mono uppercase tracking-widest text-violet-400 font-bold">
              Official Hackathon Venue
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-4">
              Rajasthan Institute of Engineering and Technology
            </h3>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
              Located on Ajmer Road in Jaipur, Rajasthan. The RIET campus features state-of-the-art computer labs, high-bandwidth fiber backbones, air-conditioned auditoriums, sports facilities, and lush lawns.
            </p>

            <div className="space-y-3.5 mb-8 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <Navigation className="w-4 h-4 text-violet-400 mt-1 shrink-0" />
                <span>Bhankrota, Ajmer Road, Jaipur, Rajasthan 302026</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-fuchsia-400 shrink-0" />
                <a href="mailto:enigma@rietjaipur.ac.in" className="hover:text-white transition-colors">
                  enigma@rietjaipur.ac.in
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+91 98290 XXXXX / Student Lead Helpdesk</span>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Rajasthan+Institute+of+Engineering+and+Technology+Jaipur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/15 text-sm font-medium text-white transition-all hover:scale-[1.02]"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-4 h-4 opacity-70" />
            </a>
          </div>

          {/* Guidelines & Safety Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-violet-950/20 via-black/40 to-fuchsia-950/20 border border-violet-500/20 backdrop-blur-xl shadow-2xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white mb-6 shadow-lg shadow-emerald-600/30">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
                Campus Guidelines & Safety
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-4">
                Safe, Inclusive & Welcoming
              </h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
                ENIGMA2.0 adheres to a strict Code of Conduct. We ensure 24/7 on-campus security surveillance, women's grievance and safety committees, trained medical personnel on site, and emergency helpline services.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  "24/7 Security & CCTV",
                  "Dedicated Girls Rest Zone",
                  "First-Aid & Medical Staff",
                  "Inclusive Code of Conduct",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-mono text-white/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/50 font-mono">
              <span>All registered participants covered</span>
              <span className="text-violet-300">#BuildWithEnigma</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
