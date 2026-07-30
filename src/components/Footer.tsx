import React, { useState } from 'react';
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Video,
  Youtube,
  Send,
  CheckCircle2,
  ArrowUp
} from 'lucide-react';
import { COMPANY_INFO } from '../data/agencyData';

interface FooterProps {
  onOpenConsultationModal: (service?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultationModal }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setNewsletterSubscribed(false);
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-xs pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand Column (Span 2 on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0B63F6] via-[#00C2FF] to-[#18C37E] p-[2px]">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#00C2FF]" />
                </div>
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight">
                Bright<span className="text-[#00C2FF]">Way</span>
              </span>
            </div>

            <p className="text-slate-300 font-semibold text-sm">
              {COMPANY_INFO.tagline}
            </p>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              BrightWay Marketing is an award-winning full-service digital marketing agency engineering growth for startups, local businesses, schools, clinics, real estate firms, and corporate brands globally.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-slate-900 hover:bg-[#0B63F6] text-slate-300 hover:text-white rounded-xl transition border border-slate-800"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-slate-900 hover:bg-pink-600 text-slate-300 hover:text-white rounded-xl transition border border-slate-800"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white rounded-xl transition border border-slate-800"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-xl transition border border-slate-800"
                aria-label="TikTok"
              >
                <Video className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-slate-900 hover:bg-red-600 text-slate-300 hover:text-white rounded-xl transition border border-slate-800"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Services */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">Services</p>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => onOpenConsultationModal('Website Design')} className="hover:text-[#00C2FF] transition">
                  Website Design
                </button>
              </li>
              <li>
                <button onClick={() => onOpenConsultationModal('SEO Services')} className="hover:text-[#00C2FF] transition">
                  Search Engine Optimization (SEO)
                </button>
              </li>
              <li>
                <button onClick={() => onOpenConsultationModal('Google Ads')} className="hover:text-[#00C2FF] transition">
                  Google Ads (PPC)
                </button>
              </li>
              <li>
                <button onClick={() => onOpenConsultationModal('Facebook Ads')} className="hover:text-[#00C2FF] transition">
                  Facebook & Instagram Ads
                </button>
              </li>
              <li>
                <button onClick={() => onOpenConsultationModal('Social Media Management')} className="hover:text-[#00C2FF] transition">
                  Social Media Marketing
                </button>
              </li>
              <li>
                <button onClick={() => onOpenConsultationModal('AI Marketing')} className="hover:text-[#00C2FF] transition">
                  AI Marketing Solutions
                </button>
              </li>
              <li>
                <button onClick={() => onOpenConsultationModal('Branding')} className="hover:text-[#00C2FF] transition">
                  Branding & Logo Design
                </button>
              </li>
              <li>
                <button onClick={() => onOpenConsultationModal('Web Hosting')} className="hover:text-[#00C2FF] transition">
                  Web Hosting & Speed
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">Contact Us</p>
            <div className="space-y-3 text-slate-300">
              <a
                href={COMPANY_INFO.phoneTel}
                className="flex items-center gap-2.5 text-slate-200 hover:text-[#18C37E] font-semibold transition"
              >
                <Phone className="w-4 h-4 text-[#18C37E] shrink-0" />
                <span>Phone: {COMPANY_INFO.phoneFormatted}</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-[#00C2FF] transition"
              >
                <Mail className="w-4 h-4 text-[#00C2FF] shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </a>

              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">Growth Newsletter</p>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Subscribe to get weekly digital marketing tips, AI growth prompts & ad strategies directly in your inbox.
            </p>

            {newsletterSubscribed ? (
              <div className="p-3 bg-emerald-950/80 border border-emerald-500/40 rounded-xl text-emerald-400 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#18C37E]" />
                <span>Subscribed! Welcome to BrightWay.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00C2FF]"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 bg-gradient-to-r from-[#0B63F6] to-[#00C2FF] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-md"
                >
                  <span>Subscribe Free</span>
                  <Send className="w-3 h-3" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© 2026 {COMPANY_INFO.name}. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-lg border border-slate-800 flex items-center gap-1"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
