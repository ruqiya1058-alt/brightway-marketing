import React, { useState } from 'react';
import {
  Search,
  Compass,
  Layout,
  Code2,
  Globe,
  Zap,
  ShoppingBag,
  Target,
  Facebook,
  Instagram,
  Share2,
  Video,
  Linkedin,
  Youtube,
  Sparkles,
  Workflow,
  Palette,
  Image,
  FileText,
  Mail,
  Film,
  Server,
  Gauge,
  BarChart3,
  TrendingUp,
  GraduationCap,
  ArrowRight,
  Filter,
  CheckCircle2,
  Cpu,
  MapPin
} from 'lucide-react';
import { SERVICES_LIST } from '../data/agencyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenConsultationModal: (preselectedService?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenConsultationModal
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'web', label: 'Web & App Development' },
    { id: 'ads', label: 'Google & Meta Ads' },
    { id: 'seo', label: 'SEO & Organic Rank' },
    { id: 'social', label: 'Social Media & Video' },
    { id: 'ai', label: 'AI & Automation' },
    { id: 'branding', label: 'Branding & Creatives' },
    { id: 'hosting', label: 'Hosting & Speed' },
    { id: 'consulting', label: 'Consulting & Training' }
  ];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-6 h-6 text-[#00C2FF]" />;
      case 'Layout': return <Layout className="w-6 h-6 text-[#00C2FF]" />;
      case 'Code2': return <Code2 className="w-6 h-6 text-[#00C2FF]" />;
      case 'Globe': return <Globe className="w-6 h-6 text-[#00C2FF]" />;
      case 'Zap': return <Zap className="w-6 h-6 text-amber-400" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6 text-[#18C37E]" />;
      case 'Search': return <Search className="w-6 h-6 text-[#00C2FF]" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-[#18C37E]" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-[#00C2FF]" />;
      case 'Target': return <Target className="w-6 h-6 text-red-400" />;
      case 'Facebook': return <Facebook className="w-6 h-6 text-blue-500" />;
      case 'Instagram': return <Instagram className="w-6 h-6 text-pink-500" />;
      case 'Share2': return <Share2 className="w-6 h-6 text-[#00C2FF]" />;
      case 'Video': return <Video className="w-6 h-6 text-red-500" />;
      case 'Linkedin': return <Linkedin className="w-6 h-6 text-blue-400" />;
      case 'Youtube': return <Youtube className="w-6 h-6 text-red-600" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-amber-300" />;
      case 'Workflow': return <Workflow className="w-6 h-6 text-[#18C37E]" />;
      case 'Palette': return <Palette className="w-6 h-6 text-[#00C2FF]" />;
      case 'Image': return <Image className="w-6 h-6 text-[#00C2FF]" />;
      case 'FileText': return <FileText className="w-6 h-6 text-slate-300" />;
      case 'Mail': return <Mail className="w-6 h-6 text-[#18C37E]" />;
      case 'Film': return <Film className="w-6 h-6 text-indigo-400" />;
      case 'Server': return <Server className="w-6 h-6 text-emerald-400" />;
      case 'Gauge': return <Gauge className="w-6 h-6 text-amber-400" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-[#00C2FF]" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-[#18C37E]" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-[#00C2FF]" />;
      default: return <Sparkles className="w-6 h-6 text-[#00C2FF]" />;
    }
  };

  const filteredServices = SERVICES_LIST.filter((service) => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.popularFor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 text-xs text-[#00C2FF] font-semibold border border-slate-700">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Digital Solutions Suite</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            High-Impact Services Designed to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] via-[#0B63F6] to-[#18C37E]">
              Accelerate Revenue
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Every service card represents a battle-tested channel engineered to convert cold visitors into high-paying clients.
          </p>
        </div>

        {/* Search Bar & Category Filter Pills */}
        <div className="space-y-6 mb-12">
          
          {/* Search Input */}
          <div className="max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search 35+ digital marketing services (e.g. SEO, Google Ads, TikTok, AI)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-slate-950 border border-slate-800 rounded-2xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00C2FF] transition-all shadow-inner"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 border ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-[#0B63F6] to-[#00C2FF] text-white border-transparent shadow-lg shadow-blue-500/20'
                    : 'bg-slate-950/80 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-slate-950 p-6 rounded-3xl border border-slate-800/80 hover:border-blue-500/50 hover:bg-slate-950/90 transition-all duration-300 group hover:-translate-y-1.5 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Header: Icon & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getServiceIcon(service.icon)}
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 bg-slate-900 px-2.5 py-1 rounded-full border border-slate-800">
                    {service.popularFor}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00C2FF] transition-colors">
                  {service.title}
                </h3>

                {/* Short Benefit-Focused Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                {/* Key Benefits List */}
                <ul className="space-y-1.5 mb-6">
                  {service.keyBenefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="text-[11px] text-slate-400 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#18C37E] shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-slate-900 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectService(service)}
                  className="text-xs font-semibold text-[#00C2FF] hover:text-white transition flex items-center gap-1 group/btn"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onOpenConsultationModal(service.title)}
                  className="px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-[#0B63F6] border border-slate-700 transition shadow-sm"
                >
                  Request Quote
                </button>
              </div>

            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-slate-950 rounded-3xl border border-slate-800">
            <Search className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white">No matching services found</h3>
            <p className="text-xs text-slate-400 mt-1">Try resetting your search query or choosing another category.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-[#0B63F6] text-white rounded-xl text-xs font-bold"
            >
              View All Services
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
