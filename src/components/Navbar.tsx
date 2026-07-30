import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/agencyData';

interface NavbarProps {
  onOpenConsultationModal: () => void;
  onOpenWhatsAppModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenConsultationModal,
  onOpenWhatsAppModal
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'process', 'portfolio', 'pricing', 'testimonials', 'tools', 'blog', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Process', id: 'process' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Tools & Audit', id: 'tools' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/90 backdrop-blur-md py-3 shadow-lg border-b border-slate-800/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div
            onClick={() => scrollTo('home')}
            className="cursor-pointer flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0B63F6] via-[#00C2FF] to-[#18C37E] p-[2px] shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#00C2FF] animate-pulse" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-white font-sans">
                  Bright<span className="text-[#00C2FF]">Way</span>
                </span>
                <span className="inline-block w-2 h-2 rounded-full bg-[#18C37E] animate-ping" />
              </div>
              <p className="text-[10px] text-slate-400 font-medium tracking-wider uppercase -mt-1 hidden sm:block">
                Digital Marketing Agency
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-800/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-700/50">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  activeSection === link.id
                    ? 'bg-gradient-to-r from-[#0B63F6] to-[#00C2FF] text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700/40'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Right Action Bar */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Phone Button */}
            <a
              href={COMPANY_INFO.phoneTel}
              className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-200 bg-slate-800/60 hover:bg-slate-700/80 border border-slate-700/60 rounded-xl transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#18C37E]" />
              <span>{COMPANY_INFO.phoneFormatted}</span>
            </a>

            {/* WhatsApp Chat */}
            <button
              onClick={onOpenWhatsAppModal}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/30 rounded-xl transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden xl:inline">WhatsApp</span>
            </button>

            {/* Primary CTA */}
            <button
              onClick={onOpenConsultationModal}
              className="relative group overflow-hidden px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#0B63F6] via-[#00C2FF] to-[#18C37E] bg-[length:200%_auto] hover:bg-[position:right_center] transition-all duration-300 shadow-lg shadow-blue-600/25 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                {COMPANY_INFO.primaryCta}
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={COMPANY_INFO.phoneTel}
              className="p-2 bg-slate-800 text-[#18C37E] rounded-lg border border-slate-700"
              aria-label="Call Us"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 bg-slate-800 rounded-lg border border-slate-700 hover:bg-slate-700 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900/98 backdrop-blur-xl border-b border-slate-800 px-4 py-6 shadow-2xl animate-fadeIn">
          <div className="flex flex-col gap-2 mb-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-left px-4 py-3 rounded-xl font-medium text-sm transition ${
                  activeSection === link.id
                    ? 'bg-gradient-to-r from-[#0B63F6] to-[#00C2FF] text-white font-semibold'
                    : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <a
              href={COMPANY_INFO.phoneTel}
              className="flex items-center justify-center gap-2 w-full py-3 bg-slate-800 text-slate-200 rounded-xl font-semibold text-sm border border-slate-700"
            >
              <Phone className="w-4 h-4 text-[#18C37E]" />
              <span>Call: {COMPANY_INFO.phoneFormatted}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhatsAppModal();
              }}
              className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-950/60 text-emerald-400 border border-emerald-500/40 rounded-xl font-semibold text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultationModal();
              }}
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-[#0B63F6] to-[#00C2FF] text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-500/25"
            >
              <span>{COMPANY_INFO.primaryCta}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
