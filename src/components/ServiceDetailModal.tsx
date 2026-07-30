import React from 'react';
import { X, CheckCircle2, Clock, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenConsultationModal: (serviceName?: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenConsultationModal
}) => {
  if (!service) return null;

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

        {/* Header */}
        <div className="space-y-2">
          <span className="px-3 py-1 rounded-full bg-[#0B63F6]/20 border border-[#0B63F6] text-[#00C2FF] font-bold text-xs">
            {service.popularFor}
          </span>
          <h2 className="text-2xl font-extrabold text-white">{service.title}</h2>
          <p className="text-xs text-slate-400 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            <span>Estimated Execution Timeline: {service.estimatedTimeline}</span>
          </p>
        </div>

        {/* Service Full Overview */}
        <div className="space-y-4 text-xs text-slate-300">
          <p className="leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800">
            {service.fullDesc}
          </p>

          {/* Key Benefits */}
          <div className="space-y-2">
            <p className="font-bold text-white uppercase tracking-wider">Key Strategic Benefits:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.keyBenefits.map((benefit, idx) => (
                <div key={idx} className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#18C37E] shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div className="space-y-2">
            <p className="font-bold text-[#00C2FF] uppercase tracking-wider">Concrete Deliverables You Receive:</p>
            <ul className="space-y-1.5 bg-slate-950 p-4 rounded-xl border border-slate-800">
              {service.deliverables.map((del, idx) => (
                <li key={idx} className="flex items-center gap-2 text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00C2FF]" />
                  <span>{del}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-[#18C37E]" /> Includes 100% Satisfaction Guarantee
          </span>

          <button
            onClick={() => {
              onClose();
              onOpenConsultationModal(service.title);
            }}
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#0B63F6] via-[#00C2FF] to-[#18C37E] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-lg"
          >
            <span>Request Quote for {service.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
