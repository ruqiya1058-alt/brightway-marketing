import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  Calendar,
  Clock,
  Send,
  Sparkles,
  Phone,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ConsultationFormData } from '../types';
import { COMPANY_INFO, SERVICES_LIST } from '../data/agencyData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialService
}) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phone: '',
    businessName: '',
    industry: 'Restaurant / Cafe',
    servicesNeeded: initialService ? [initialService] : ['Website Design'],
    estimatedBudget: '$1,000 - $3,000',
    preferredDate: '2026-08-01',
    preferredTime: '10:00 AM',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleService = (title: string) => {
    setFormData((prev) => {
      const exists = prev.servicesNeeded.includes(title);
      if (exists) {
        return { ...prev, servicesNeeded: prev.servicesNeeded.filter((s) => s !== title) };
      } else {
        return { ...prev, servicesNeeded: [...prev.servicesNeeded, title] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      } catch (e) {
        // ignore
      }
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative space-y-6 shadow-2xl animate-scaleUp text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white bg-slate-800 rounded-xl"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Header */}
            <div className="space-y-2 mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B63F6]/20 border border-[#0B63F6] text-[#00C2FF] font-bold text-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Free 30-Minute Growth Strategy Discovery</span>
              </div>
              <h2 className="text-2xl font-extrabold text-white">Book Free Consultation</h2>
              <p className="text-xs text-slate-400">
                Let's discuss your business targets and map out a custom digital strategy that generates leads and sales.
              </p>
            </div>

            {/* Step Wizard Buttons */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6 text-xs">
              <span className={`font-bold ${step === 1 ? 'text-[#00C2FF]' : 'text-slate-500'}`}>
                1. Select Services
              </span>
              <span className={`font-bold ${step === 2 ? 'text-[#00C2FF]' : 'text-slate-500'}`}>
                2. Business Details
              </span>
              <span className={`font-bold ${step === 3 ? 'text-[#00C2FF]' : 'text-slate-500'}`}>
                3. Date & Contact
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Step 1: Select Services */}
              {step === 1 && (
                <div className="space-y-4 animate-fadeIn">
                  <p className="text-xs font-bold text-slate-300">Which services are you interested in?</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-60 overflow-y-auto pr-1">
                    {SERVICES_LIST.slice(0, 15).map((s) => {
                      const selected = formData.servicesNeeded.includes(s.title);
                      return (
                        <button
                          type="button"
                          key={s.id}
                          onClick={() => toggleService(s.title)}
                          className={`p-2.5 rounded-xl text-xs text-left font-medium border transition ${
                            selected
                              ? 'bg-[#0B63F6]/20 border-[#00C2FF] text-white font-bold'
                              : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="line-clamp-1">{s.title}</span>
                            {selected && <CheckCircle2 className="w-3.5 h-3.5 text-[#18C37E] shrink-0" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-3 bg-gradient-to-r from-[#0B63F6] to-[#00C2FF] text-white rounded-xl text-xs font-bold flex items-center gap-2"
                    >
                      <span>Next: Business Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Business & Budget */}
              {step === 2 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Company / Business Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Grand Bistro / Apex Clinic"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-[#00C2FF]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Industry Sector *</label>
                      <select
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-[#00C2FF]"
                      >
                        <option value="Restaurant / Cafe">Restaurant / Cafe</option>
                        <option value="School / College">School / College</option>
                        <option value="Clinic / Hospital">Clinic / Hospital</option>
                        <option value="Real Estate">Real Estate</option>
                        <option value="E-commerce">E-Commerce</option>
                        <option value="Agri / Manufacturing">Agri / Manufacturing</option>
                        <option value="Corporate / Other">Corporate / Service Provider</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Estimated Monthly Marketing Budget</label>
                    <select
                      value={formData.estimatedBudget}
                      onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-[#00C2FF]"
                    >
                      <option value="Under $1,000">Under $1,000 / month</option>
                      <option value="$1,000 - $3,000">$1,000 - $3,000 / month</option>
                      <option value="$3,000 - $10,000">$3,000 - $10,000 / month</option>
                      <option value="$10,000+">$10,000+ Enterprise Scale</option>
                    </select>
                  </div>

                  <div className="pt-2 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-2.5 bg-slate-800 text-slate-300 rounded-xl text-xs font-semibold"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-6 py-2.5 bg-gradient-to-r from-[#0B63F6] to-[#00C2FF] text-white rounded-xl text-xs font-bold flex items-center gap-2"
                    >
                      <span>Next: Contact Info</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Date, Time & Contact Info */}
              {step === 3 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-[#00C2FF]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="0371-6481314"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-[#00C2FF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@mybusiness.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-[#00C2FF]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Preferred Time slot</label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-[#00C2FF]"
                      >
                        <option value="10:00 AM">Morning (10:00 AM)</option>
                        <option value="02:00 PM">Afternoon (02:00 PM)</option>
                        <option value="05:00 PM">Evening (05:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Specific Goals or Notes</label>
                    <textarea
                      rows={2}
                      placeholder="Tell us a bit about your current marketing goals or hurdles..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-[#00C2FF]"
                    />
                  </div>

                  <div className="pt-2 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-4 py-2.5 bg-slate-800 text-slate-300 rounded-xl text-xs font-semibold"
                    >
                      Back
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3.5 bg-gradient-to-r from-[#0B63F6] via-[#00C2FF] to-[#18C37E] text-white font-bold text-xs rounded-xl shadow-lg shadow-blue-500/25 flex items-center gap-2 hover:opacity-95"
                    >
                      {isSubmitting ? (
                        <span>Reserving Strategy Call...</span>
                      ) : (
                        <>
                          <span>Confirm Consultation Booking</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-8 space-y-6 animate-scaleUp">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-[#18C37E] flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-white">Consultation Booking Confirmed!</h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                Thank you <span className="font-bold text-[#00C2FF]">{formData.fullName}</span>! Our senior marketing strategist will review your business details and contact you at <span className="font-bold text-emerald-400">{formData.phone}</span>.
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 max-w-md mx-auto text-xs text-slate-400 space-y-2 text-left">
              <div className="flex justify-between">
                <span>Selected Services:</span>
                <span className="font-bold text-white">{formData.servicesNeeded.join(', ')}</span>
              </div>
              <div className="flex justify-between">
                <span>Business Name:</span>
                <span className="font-bold text-white">{formData.businessName}</span>
              </div>
              <div className="flex justify-between">
                <span>Call Slot:</span>
                <span className="font-bold text-emerald-400">{formData.preferredTime}</span>
              </div>
            </div>

            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={onClose}
                className="px-8 py-3 bg-[#0B63F6] text-white rounded-xl text-xs font-bold"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
