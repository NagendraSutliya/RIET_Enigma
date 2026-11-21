import React, { useState } from "react";
import { X, Sparkles, CheckCircle, ArrowRight, ShieldAlert } from "lucide-react";

interface T3RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function T3RegistrationModal({ isOpen, onClose }: T3RegistrationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    teamName: "",
    leaderName: "",
    email: "",
    phone: "",
    college: "",
    track: "AI & Autonomous Agents",
    teamSize: "4",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-[#0c0e22] border border-violet-500/30 shadow-2xl shadow-violet-950/50 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Application Received!</h3>
            <p className="text-white/70 text-sm mb-6 max-w-sm mx-auto">
              Thank you for registering team <span className="text-violet-300 font-semibold">{formData.teamName}</span> for ENIGMA2.0. Shortlist confirmations and verification tokens will be sent to <span className="text-white font-mono">{formData.email}</span>.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl font-medium text-sm text-white bg-violet-600 hover:bg-violet-500 transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono uppercase tracking-widest text-violet-400 font-semibold">
                ENIGMA2.0 Registration
              </span>
            </div>
            <h3 className="text-2xl font-extrabold text-white mb-2">Register Your Team</h3>
            <p className="text-white/60 text-xs sm:text-sm mb-6">
              Fill in your team details below. Free participation, meals & kits included.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-white/70 mb-1">Team Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Neural Ninjas"
                  value={formData.teamName}
                  onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-white text-sm focus:outline-none focus:border-violet-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-white/70 mb-1">Team Leader Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.leaderName}
                    onChange={(e) => setFormData({ ...formData, leaderName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-white text-sm focus:outline-none focus:border-violet-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-white/70 mb-1">Leader Email</label>
                  <input
                    type="email"
                    required
                    placeholder="leader@college.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-white text-sm focus:outline-none focus:border-violet-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-white/70 mb-1">WhatsApp / Phone</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-white text-sm focus:outline-none focus:border-violet-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-white/70 mb-1">Team Size</label>
                  <select
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#12142e] border border-white/15 text-white text-sm focus:outline-none focus:border-violet-500 transition-colors"
                  >
                    <option value="2">2 Members</option>
                    <option value="3">3 Members</option>
                    <option value="4">4 Members (Recommended)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-white/70 mb-1">College / University Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajasthan Institute of Engineering & Technology"
                  value={formData.college}
                  onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-white text-sm focus:outline-none focus:border-violet-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-white/70 mb-1">Preferred Track</label>
                <select
                  value={formData.track}
                  onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#12142e] border border-white/15 text-white text-sm focus:outline-none focus:border-violet-500 transition-colors"
                >
                  <option value="AI & Autonomous Agents">AI & Autonomous Agents</option>
                  <option value="Web3 & Decentralized Systems">Web3 & Decentralized Systems</option>
                  <option value="IoT, Robotics & Edge Computing">IoT, Robotics & Edge Computing</option>
                  <option value="HealthTech & Bio-Informatics">HealthTech & Bio-Informatics</option>
                  <option value="FinTech & Open Commerce">FinTech & Open Commerce</option>
                  <option value="Open Innovation & Green Tech">Open Innovation & Green Tech</option>
                </select>
              </div>

              <p className="text-[11px] text-white/50 leading-relaxed pt-1">
                By submitting, you agree to the ENIGMA2.0 Code of Conduct and confirm that all members are active students.
              </p>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 shadow-lg shadow-violet-600/30 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Submit Hackathon Registration</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
