import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, Phone, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/agencyData';

interface WhatsAppWidgetProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({ isOpen, onToggle }) => {
  const [customMsg, setCustomMsg] = useState('');

  const quickPrompts = [
    "Hi BrightWay Team, I'd like a free consultation for my business.",
    "I need a quote for Website Design & SEO optimization.",
    "I'm interested in Google & Facebook Ads lead generation.",
    "Can you audit my website speed and local search ranking?"
  ];

  const sendWhatsApp = (message: string) => {
    const encoded = encodeURIComponent(message || "Hi BrightWay Marketing, I'd like a free consultation.");
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Floating Trigger Button */}
      <button
        onClick={onToggle}
        className="relative group p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl shadow-emerald-500/40 transition-transform active:scale-95 flex items-center justify-center"
        aria-label="WhatsApp Live Chat"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-slate-900 animate-ping" />
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Popover Chat Launcher */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-2xl space-y-4 animate-scaleUp text-white">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>{COMPANY_INFO.name}</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </h4>
                <p className="text-[10px] text-emerald-400 font-semibold">Online • Typically replies in 5 mins</p>
              </div>
            </div>

            <button
              onClick={onToggle}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-800 rounded-lg"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Body Greeting */}
          <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 space-y-2 text-xs text-slate-300">
            <p className="font-semibold text-white">👋 Hello there!</p>
            <p>Welcome to BrightWay Marketing. How can we help grow your business today?</p>
          </div>

          {/* Quick Prompts */}
          <div className="space-y-1.5">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Quick Inquiries:</p>
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => sendWhatsApp(prompt)}
                className="w-full text-left p-2.5 bg-slate-950 hover:bg-emerald-950/60 border border-slate-800 hover:border-emerald-500/40 rounded-xl text-[11px] text-slate-300 hover:text-emerald-400 transition"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Custom Message Input */}
          <div className="space-y-2 pt-1 border-t border-slate-800">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendWhatsApp(customMsg)}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
              />
              <button
                onClick={() => sendWhatsApp(customMsg)}
                className="p-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-xl shrink-0 transition"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
              <span>Or call directly:</span>
              <a href={COMPANY_INFO.phoneTel} className="text-[#18C37E] font-bold flex items-center gap-1">
                <Phone className="w-3 h-3" /> {COMPANY_INFO.phoneFormatted}
              </a>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
