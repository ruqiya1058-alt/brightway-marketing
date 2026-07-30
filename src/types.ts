export interface ServiceItem {
  id: string;
  title: string;
  category: 'web' | 'ads' | 'seo' | 'social' | 'ai' | 'branding' | 'hosting' | 'consulting';
  icon: string;
  shortDesc: string;
  fullDesc: string;
  keyBenefits: string[];
  deliverables: string[];
  estimatedTimeline: string;
  popularFor: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  icon: string;
  description: string;
  commonChallenges: string[];
  brightWaySolution: string;
  typicalRoi: string;
}

export interface PortfolioCaseStudy {
  id: string;
  title: string;
  category: 'Website Design' | 'SEO Campaigns' | 'Google Ads' | 'Facebook Ads' | 'Brand Identity' | 'Landing Pages' | 'Social Media Designs' | 'Video Editing';
  industry: string;
  clientName: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  challenge: string;
  solution: string;
  results: {
    label: string;
    value: string;
    change: string;
  }[];
  beforeAfterMetric?: {
    beforeLabel: string;
    beforeVal: string;
    afterLabel: string;
    afterVal: string;
  };
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  businessName: string;
  industryRole: 'Restaurant Owner' | 'School Director' | 'Doctor / Clinic Head' | 'Real Estate Consultant' | 'E-commerce Founder' | 'Manufacturer';
  avatar: string;
  content: string;
  rating: number;
  resultsAchieved: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  monthlyPrice: number;
  yearlyPriceMonthly: number;
  shortDesc: string;
  targetAudience: string;
  features: string[];
  nonIncluded?: string[];
  ctaText: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'SEO Tips' | 'Google Ads' | 'Social Media' | 'Website Design' | 'AI Marketing' | 'Business Growth';
  author: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  tags: string[];
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Website Design' | 'SEO' | 'Google Ads' | 'Facebook Ads' | 'Hosting' | 'Maintenance' | 'Timeline' | 'Pricing' | 'Consultation' | 'Support';
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  businessName: string;
  industry: string;
  servicesNeeded: string[];
  estimatedBudget: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}

export interface AuditReportResult {
  url: string;
  industry: string;
  overallScore: number;
  speedScore: number;
  seoScore: number;
  mobileScore: number;
  conversionScore: number;
  criticalIssues: string[];
  quickWins: string[];
  recommendedStrategy: string;
}
