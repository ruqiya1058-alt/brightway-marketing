import {
  ServiceItem,
  IndustryItem,
  PortfolioCaseStudy,
  Testimonial,
  PricingPlan,
  BlogPost,
  FAQItem
} from '../types';

export const COMPANY_INFO = {
  name: "BrightWay Marketing",
  tagline: "Grow Smarter. Market Better. Succeed Faster.",
  phone: "0371-6481314",
  phoneFormatted: "0371-6481314",
  phoneTel: "tel:03716481314",
  whatsappNumber: "03716481314",
  email: "brightway6789@gmail.com",
  address: "Dera Ghazi Khan, Punjab, Pakistan",
  workingHours: "Mon - Sat: 9:00 AM - 7:00 PM",
  primaryCta: "Get Free Consultation",
  secondaryCta: "Chat on WhatsApp",
  stats: {
    projects: "500+",
    clients: "300+",
    satisfaction: "95%",
    industries: "20+",
    avgRoas: "4.2x",
    leadsGenerated: "1.2M+"
  }
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "digital-marketing-strategy",
    title: "Digital Marketing Strategy",
    category: "consulting",
    icon: "Compass",
    shortDesc: "Custom roadmap designed to turn online traffic into loyal, high-paying customers.",
    fullDesc: "We craft data-backed multi-channel digital strategies aligned with your specific business growth milestones. From market positioning to funnel architecture, we map out every conversion touchpoint.",
    keyBenefits: ["360° Market & Competitor Audit", "High-Converting Sales Funnel Architecture", "Clear KPI Roadmap & Budget Optimization"],
    deliverables: ["Comprehensive Growth Blueprint PDF", "Competitor Matrix Analysis", "12-Month Channel Marketing Calendar"],
    estimatedTimeline: "1 - 2 Weeks",
    popularFor: "Startups & Growing Businesses"
  },
  {
    id: "website-design",
    title: "Website Design",
    category: "web",
    icon: "Layout",
    shortDesc: "Aesthetic, conversion-focused UI/UX layouts crafted to mesmerize and convert.",
    fullDesc: "We design custom, Apple/Stripe-grade website layouts tailored to elevate brand prestige and drive user action across desktop and mobile devices.",
    keyBenefits: ["Awwwards-Level Custom UI/UX", "Mobile-First Fluid Responsiveness", "Psychology-Driven CTA Placement"],
    deliverables: ["Interactive Figma Prototypes", "Custom Style Guide & UI Kit", "Conversion Rate Optimized Wireframes"],
    estimatedTimeline: "2 - 3 Weeks",
    popularFor: "Brands seeking luxury digital presence"
  },
  {
    id: "custom-website-development",
    title: "Custom Website Development",
    category: "web",
    icon: "Code2",
    shortDesc: "Ultra-fast, custom code React & Node.js web applications with lightning speed.",
    fullDesc: "High-performance bespoke website development engineered with state-of-the-art frameworks (React, Vite, Next, Tailwind) for 100/100 Google PageSpeed performance.",
    keyBenefits: ["Sub-second Page Load Times", "Custom Interactive Features & Forms", "Scalable Clean Architecture"],
    deliverables: ["Full Production Codebase", "Admin CMS Panel Setup", "Core Web Vitals 95+ Guarantee"],
    estimatedTimeline: "3 - 5 Weeks",
    popularFor: "Corporate companies & Enterprise clients"
  },
  {
    id: "wordpress-development",
    title: "WordPress Development",
    category: "web",
    icon: "Globe",
    shortDesc: "Easy-to-manage, custom-built WordPress websites with elementor / custom block control.",
    fullDesc: "Bespoke WordPress development without bloated themes or slow plugins. Built with custom Gutenberg/Elementor blocks, enterprise security, and effortless content management.",
    keyBenefits: ["Easy In-House Drag-and-Drop Editing", "Fortified Security Configuration", "Built-In SEO Foundations"],
    deliverables: ["Custom WordPress Theme", "Elementor Pro Configuration", "Video Training Manual for Staff"],
    estimatedTimeline: "2 - 3 Weeks",
    popularFor: "Local Businesses, Clinics & Schools"
  },
  {
    id: "landing-page-design",
    title: "Landing Page Design",
    category: "web",
    icon: "Zap",
    shortDesc: "Laser-focused sales landing pages engineered specifically to boost PPC & ad conversions.",
    fullDesc: "High-converting single-purpose landing pages designed around persuasive copywriting, social proof highlights, and frictionless lead capture forms.",
    keyBenefits: ["Double or Triple Ad Conversion Rates", "Fast Mobile Loading Speed", "Instant CRM & WhatsApp Integration"],
    deliverables: ["High-Converting Landing Page", "A/B Testing Framework Setup", "Lead Automation & Notification System"],
    estimatedTimeline: "5 - 7 Days",
    popularFor: "Google Ads & Meta Ads Campaigns"
  },
  {
    id: "e-commerce-website-development",
    title: "E-Commerce Website Development",
    category: "web",
    icon: "ShoppingBag",
    shortDesc: "High-volume online storefronts designed for maximum cart conversions and seamless checkout.",
    fullDesc: "Custom Shopify, WooCommerce, and React E-commerce platforms built to handle heavy traffic, express checkout options, automated cart recovery, and inventory synchronization.",
    keyBenefits: ["Express One-Page Checkout", "Automated Abandoned Cart Emails & SMS", "Integrated Payment Gateways & Cash on Delivery"],
    deliverables: ["Complete Storefront Setup", "Product Catalog Organization", "Payment & Shipping Integration"],
    estimatedTimeline: "3 - 5 Weeks",
    popularFor: "Retail & Fashion Brands"
  },
  {
    id: "search-engine-optimization",
    title: "Search Engine Optimization (SEO)",
    category: "seo",
    icon: "Search",
    shortDesc: "Rank #1 on Google for high-intent keywords that drive targeted organic sales.",
    fullDesc: "Data-driven SEO strategies including comprehensive keyword research, content architecture, high-authority backlink outreach, and continuous SERP tracking.",
    keyBenefits: ["Consistent Stream of Free Organic Leads", "Outrank Competitors for Buying Keywords", "Long-Term Digital Equity & Authority"],
    deliverables: ["Monthly SEO Performance Reports", "Targeted Keyword Map", "High-DA Backlink Placements"],
    estimatedTimeline: "3 - 6 Months Continuous",
    popularFor: "Businesses seeking sustainable growth"
  },
  {
    id: "local-seo",
    title: "Local SEO",
    category: "seo",
    icon: "MapPin",
    shortDesc: "Dominate Google Maps and local search results in your city or region.",
    fullDesc: "Optimization for Google Business Profile, local citations, geotagged photos, and customer review acceleration so local buyers call you first.",
    keyBenefits: ["Top 3 Google Map Pack Ranking", "Direct Phone Calls & Driving Directions", "Increased Local Customer Foot Traffic"],
    deliverables: ["Fully Optimized Google Business Profile", "50+ Quality Local Directory Citations", "Automated Review Request Funnel"],
    estimatedTimeline: "2 - 4 Weeks Initial",
    popularFor: "Restaurants, Clinics, Salons & Real Estate"
  },
  {
    id: "technical-seo",
    title: "Technical SEO",
    category: "seo",
    icon: "Cpu",
    shortDesc: "Fix backend indexing errors, crawling issues, and site speed bottlenecks.",
    fullDesc: "In-depth technical audits fixing XML sitemaps, canonical tags, schema markup, Core Web Vitals, site architecture, and indexation errors.",
    keyBenefits: ["Faster Search Engine Crawling & Indexing", "Enhanced Core Web Vitals Pass Rates", "Eliminate Duplicate Content Penalty Risks"],
    deliverables: ["Technical Audit Fix Log", "Schema Markup Implementation", "Robots.txt & Sitemap Re-Indexing"],
    estimatedTimeline: "1 - 2 Weeks",
    popularFor: "Large Websites & E-Commerce Stores"
  },
  {
    id: "google-ads-ppc",
    title: "Google Ads (PPC)",
    category: "ads",
    icon: "Target",
    shortDesc: "Instant top-of-page Google visibility for customers actively searching to buy.",
    fullDesc: "Hyper-targeted Google Search, Shopping, and Display campaigns engineered for low cost-per-click and maximum conversion rates.",
    keyBenefits: ["Immediate Inquiries Within 24 Hours", "Pay Only for Genuine Clicks", "Negatives Keyword Shield Against Wasted Budget"],
    deliverables: ["Google Ads Campaign Build", "High-Converting Ad Copy & Assets", "Conversion Tracking & GA4 Setup"],
    estimatedTimeline: "Campaign Launch in 3 Days",
    popularFor: "High-intent lead generation & E-commerce"
  },
  {
    id: "facebook-ads",
    title: "Facebook Ads",
    category: "ads",
    icon: "Facebook",
    shortDesc: "Laser-targeted demographic ad funnels capturing qualified buyers on Facebook.",
    fullDesc: "Custom audience targeting, dynamic creative testing, retargeting funnels, and lookalike modeling designed to scale sales predictably.",
    keyBenefits: ["High ROI Prospecting & Retargeting", "Custom Eye-Catching Ad Creatives", "Direct Lead Form Integration"],
    deliverables: ["Meta Ad Manager Structure", "Video & Image Ad Creatives", "A/B Audience Testing Matrix"],
    estimatedTimeline: "3 - 5 Days Launch",
    popularFor: "E-commerce, Local Services & B2C Brands"
  },
  {
    id: "instagram-marketing",
    title: "Instagram Marketing",
    category: "social",
    icon: "Instagram",
    shortDesc: "Aesthetic feed design, engaging viral reels, and targeted DM lead campaigns.",
    fullDesc: "Turn Instagram into your highest converting brand showroom through sleek aesthetic grids, viral short reels, story interactions, and automated DM chat triggers.",
    keyBenefits: ["Luxury Brand Image Elevation", "Viral Reach & Engagement Growth", "Automated DM Sales Funnels"],
    deliverables: ["Monthly Content Calendar (30 Posts/Reels)", "Custom Story Highlights & Bio Setup", "Community & DM Management"],
    estimatedTimeline: "Monthly Recurring",
    popularFor: "Fashion, Restaurants, Salons & Real Estate"
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    category: "social",
    icon: "Share2",
    shortDesc: "End-to-end content creation, posting, scheduling, and active community management.",
    fullDesc: "Complete social presence handling across Facebook, Instagram, LinkedIn, and TikTok. We handle strategy, copywriting, design, scheduling, and analytics.",
    keyBenefits: ["Consistent High-Quality Brand Voice", "Save 40+ Hours of In-House Labor Monthly", "Active Audience Growth & Engagement"],
    deliverables: ["Monthly Strategic Content Grid", "Engaging Copywriting & Visual Assets", "Monthly Performance & Insights Deck"],
    estimatedTimeline: "Monthly Service",
    popularFor: "Corporate Companies, Clinics & Schools"
  },
  {
    id: "tiktok-marketing",
    title: "TikTok Marketing",
    category: "social",
    icon: "Video",
    shortDesc: "Viral short-form video strategies capturing Gen Z and millennial buyers.",
    fullDesc: "Trend hijacking, authentic UGC creator styling, viral scriptwriting, and TikTok Ads targeting high-converting visual products.",
    keyBenefits: ["Massive Explosive Organic Reach", "High Engagement Among Younger Demographics", "TikTok Shop Sales Acceleration"],
    deliverables: ["Custom TikTok Script Pack", "Professional Video Editing & Effects", "TikTok Ad Account Setup & Management"],
    estimatedTimeline: "Monthly Service",
    popularFor: "E-Commerce, Fashion, Cafes & Lifestyle"
  },
  {
    id: "linkedin-marketing",
    title: "LinkedIn Marketing",
    category: "social",
    icon: "Linkedin",
    shortDesc: "B2B lead generation, thought leadership positioning, and corporate outreach.",
    fullDesc: "Position your key executives as industry authority figures while executing strategic outreach campaigns targeting C-suite decision makers.",
    keyBenefits: ["Direct Access to High-Ticket Decision Makers", "Corporate Authority & B2B Trust", "High-Value Contract Pipeline"],
    deliverables: ["Executive Profile Optimization", "Weekly Thought Leadership Articles", "B2B Outreach Sequence Architecture"],
    estimatedTimeline: "Monthly Service",
    popularFor: "B2B Agencies, Manufacturers & Consultants"
  },
  {
    id: "youtube-marketing",
    title: "YouTube Marketing",
    category: "social",
    icon: "Youtube",
    shortDesc: "Long-form channel optimization, video SEO, thumbnails, and YouTube Ads.",
    fullDesc: "Establish long-term video authority with search-optimized channel setups, click-grabbing custom thumbnails, video SEO tags, and targeted pre-roll video ads.",
    keyBenefits: ["Evergreen High-Trust Video Content", "High Click-Through Rate Thumbnails", "Targeted Video Ad Placement"],
    deliverables: ["Channel Branding & SEO Setup", "Custom High-CTR Thumbnails", "Video Script & Description Templates"],
    estimatedTimeline: "Monthly Service",
    popularFor: "Educators, Schools, Tech & Corporate"
  },
  {
    id: "ai-marketing-solutions",
    title: "AI Marketing Solutions",
    category: "ai",
    icon: "Sparkles",
    shortDesc: "Next-gen AI chatbots, predictive analytics, and automated personalization.",
    fullDesc: "Leverage cutting-edge AI models (Gemini, Custom AI Agents) to automate lead qualification, answer customer questions 24/7, and personalize marketing journeys.",
    keyBenefits: ["24/7 Automated Lead Qualification", "Predictive Customer Churn & Conversion AI", "Instant Instant AI Customer Support"],
    deliverables: ["Custom Trained AI Website Bot", "AI Personalization Workflow", "AI Ad & Content Generator Integration"],
    estimatedTimeline: "1 - 2 Weeks",
    popularFor: "Forward-thinking Startups & E-commerce"
  },
  {
    id: "marketing-automation",
    title: "Marketing Automation",
    category: "ai",
    icon: "Workflow",
    shortDesc: "Automate email sequences, WhatsApp drips, CRM syncing, and lead scoring.",
    fullDesc: "Connect your ads, website forms, WhatsApp, and CRM (HubSpot, Zapier, Make) into automated sales sequences that convert leads while you sleep.",
    keyBenefits: ["Zero Delayed Follow-ups", "Seamless CRM Data Synchronization", "Nurture Cold Leads into Warm Buyers"],
    deliverables: ["Zapier/Make Automation Blueprints", "Multi-Step WhatsApp & Email Drips", "CRM Lead Stage Pipeline Setup"],
    estimatedTimeline: "1 - 2 Weeks",
    popularFor: "Real Estate, Clinics & Educational Institutes"
  },
  {
    id: "branding-and-identity",
    title: "Branding & Logo Design",
    category: "branding",
    icon: "Palette",
    shortDesc: "Memorable visual brand identities, logo suites, color guidelines, and brand books.",
    fullDesc: "Craft a prestige brand identity thatCommands higher pricing, instills immediate buyer confidence, and sets you apart from competitors.",
    keyBenefits: ["Prestige Visual Brand Perception", "Cohesive Across All Media Formats", "Vector Scalable Assets Ready for Print"],
    deliverables: ["Primary & Secondary Logo Suite", "Comprehensive Brand Guidelines PDF", "Color Palette & Typography System"],
    estimatedTimeline: "2 - 3 Weeks",
    popularFor: "New Businesses & Rebranding Projects"
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    category: "branding",
    icon: "Image",
    shortDesc: "Eye-catching social media graphics, ad creatives, flyers, banners, and brochures.",
    fullDesc: "High-impact visual collateral engineered to stop scroll inertia on social media and project executive quality across physical print items.",
    keyBenefits: ["Scroll-Stopping Visual Appeal", "Consistent Brand Standard Execution", "Print & Digital Ready File Formats"],
    deliverables: ["Social Media Post Kits", "Banner & Billboard Artwork", "Corporate Brochure & Flyer Designs"],
    estimatedTimeline: "3 - 5 Days",
    popularFor: "Ongoing Marketing Collateral"
  },
  {
    id: "content-marketing-copywriting",
    title: "Content Marketing & Copywriting",
    category: "seo",
    icon: "FileText",
    shortDesc: "Persuasive sales copy, blog posts, whitepapers, and ad scripts that sell.",
    fullDesc: "Words that convert. We write hypnotic sales copy, SEO-optimized articles, email newsletters, and video scripts crafted using psychological conversion triggers.",
    keyBenefits: ["Higher Conversion Rates on Sales Pages", "Engaging Articles That Drive Organic Search", "Persuasive Ad Copy That Lowers CAC"],
    deliverables: ["Sales Page Copy", "Monthly SEO Blog Articles", "Ad Copy Variant Packs"],
    estimatedTimeline: "3 - 5 Days per Asset",
    popularFor: "All Businesses Seeking Higher Sales"
  },
  {
    id: "email-marketing",
    title: "Email Marketing",
    category: "social",
    icon: "Mail",
    shortDesc: "Automated welcome flows, promotional campaigns, and customer retention newsletters.",
    fullDesc: "Turn subscriber lists into predictable revenue. We design responsive email templates, write high-open-rate subject lines, and build automated flows.",
    keyBenefits: ["High Inbox Placement & Open Rates", "Automated Revenue Channel", "Deeper Customer Lifetime Value (LTV)"],
    deliverables: ["Klaviyo / Mailchimp Setup", "Custom HTML Email Templates", "5-Step Automated Welcome Flow"],
    estimatedTimeline: "1 - 2 Weeks Setup",
    popularFor: "E-Commerce Stores & B2B Services"
  },
  {
    id: "video-editing-reels",
    title: "Video Editing & Short Form Reels",
    category: "branding",
    icon: "Film",
    shortDesc: "High-energy reels, shorts, TikToks, and promo videos with kinetic captions.",
    fullDesc: "Transform raw footage into viral short-form video content complete with engaging dynamic captions, sound effects, motion graphics, and color grading.",
    keyBenefits: ["Massive Social Media Engagement", "Professional Brand Presentation", "Retain Viewer Attention to the Last Second"],
    deliverables: ["1080x1920 Vertical Short Videos", "Custom Subtitles & Animations", "Licensed Background Audio Tracks"],
    estimatedTimeline: "3 - 5 Days Batch",
    popularFor: "Influencers, Salons, Real Estate & Cafes"
  },
  {
    id: "web-hosting-domain",
    title: "Web Hosting & Maintenance",
    category: "hosting",
    icon: "Server",
    shortDesc: "Ultra-secure cloud hosting, daily backups, speed monitoring, and 24/7 uptime.",
    fullDesc: "Enterprise-grade Cloud Run and CDN hosting with zero downtime guarantees, SSL certificates, automated daily backups, and malware protection.",
    keyBenefits: ["99.99% Guaranteed Server Uptime", "Automated Daily Cloud Backups", "24/7 Security Shield & Malware Protection"],
    deliverables: ["SSL Certificate Installation", "Global CDN Acceleration", "24/7 Technical Support SLA"],
    estimatedTimeline: "Instant Setup",
    popularFor: "All Mission-Critical Websites"
  },
  {
    id: "speed-optimization",
    title: "Speed Optimization",
    category: "hosting",
    icon: "Gauge",
    shortDesc: "Accelerate slow loading websites to achieve under 1.5 second load times.",
    fullDesc: "Eliminate speed bottlenecks through image compression, script deferral, code minification, database cleanup, and server caching rules.",
    keyBenefits: ["Google PageSpeed Score 90+", "Lower Bounce Rates & Higher Sales", "Better Google Search Rankings"],
    deliverables: ["Before vs After Speed Report", "Code Minification & Deferral", "Image Optimization Pipeline"],
    estimatedTimeline: "24 - 48 Hours",
    popularFor: "Slow Loading WordPress & Custom Sites"
  },
  {
    id: "analytics-reporting",
    title: "Analytics & Conversion Reporting",
    category: "consulting",
    icon: "BarChart3",
    shortDesc: "GA4, Google Tag Manager, heatmaps, and transparent monthly ROI dashboards.",
    fullDesc: "Gain total clarity on your marketing investment with custom Looker Studio dashboards tracking revenue, lead source, cost per acquisition, and customer path.",
    keyBenefits: ["100% Data Transparency", "Identify Profitable vs Wasted Channels", "Real-Time ROI Metrics at a Glance"],
    deliverables: ["GA4 & GTM Custom Setup", "Live Interactive Dashboard", "Monthly Strategy Call"],
    estimatedTimeline: "3 - 5 Days Setup",
    popularFor: "Data-driven Decision Makers"
  },
  {
    id: "cro-conversion-rate-optimization",
    title: "Conversion Rate Optimization (CRO)",
    category: "consulting",
    icon: "TrendingUp",
    shortDesc: "Turn existing website traffic into 2x or 3x more paying customers.",
    fullDesc: "Through heatmap analysis, user session recordings, and A/B split testing, we eliminate conversion friction points on your website to double leads without increasing ad spend.",
    keyBenefits: ["Extract More Revenue from Existing Traffic", "Lower Customer Acquisition Costs", "Data-Backed User UX Tweaks"],
    deliverables: ["Heatmap & UX Breakdown Report", "A/B Testing Experiments", "Checkout & Form Optimization"],
    estimatedTimeline: "Continuous Monthly",
    popularFor: "High-Traffic Websites & E-Commerce"
  },
  {
    id: "digital-marketing-training",
    title: "Digital Marketing Training",
    category: "consulting",
    icon: "GraduationCap",
    shortDesc: "Empower your internal team with hands-on corporate digital marketing workshops.",
    fullDesc: "Tailored training programs for corporate teams and business owners covering SEO execution, Google & Meta Ad management, AI marketing tools, and analytics.",
    keyBenefits: ["Build Skilled In-House Capabilities", "Customized Curriculum for Your Industry", "Post-Training Support & Resources"],
    deliverables: ["Custom Training Slide Decks", "Practical Tool SOPs & Checklists", "Certificate of Completion"],
    estimatedTimeline: "1 to 3 Day Workshops",
    popularFor: "Corporate Teams & Schools"
  }
];

export const INDUSTRIES_LIST: IndustryItem[] = [
  {
    id: "restaurants-cafes",
    name: "Restaurants & Cafés",
    icon: "Utensils",
    description: "Fill tables, boost food delivery orders, and make your food go viral on Instagram & TikTok.",
    commonChallenges: ["High competition", "Dependence on aggregator commission", "Empty slow weekday tables"],
    brightWaySolution: "Geotagged Meta Ads + Viral Reels + Local SEO Map Pack optimization driving direct table reservations.",
    typicalRoi: "+320% Weekend Bookings"
  },
  {
    id: "schools-colleges",
    name: "Schools & Colleges",
    icon: "GraduationCap",
    description: "Drive qualified student admissions and build parental trust with prestige digital branding.",
    commonChallenges: ["High cost per admission lead", "Low conversion from inquiries to enrollments", "Seasonal admissions rush"],
    brightWaySolution: "High-intent Google Search campaigns + Virtual Campus Video Tours + Automated WhatsApp Lead Nurturing.",
    typicalRoi: "+180% Qualified Admissions"
  },
  {
    id: "clinics-hospitals-doctors",
    name: "Clinics, Hospitals & Doctors",
    icon: "Stethoscope",
    description: "Attract local patients for high-value consultations, surgeries, and specialized medical treatments.",
    commonChallenges: ["Strict healthcare ad policies", "Building patient trust online", "High appointment cancellation rates"],
    brightWaySolution: "Compliant Local SEO + Educational Video Content + Instant WhatsApp Booking Confirmation Automations.",
    typicalRoi: "+250% Monthly Patient Appointments"
  },
  {
    id: "real-estate-construction",
    name: "Real Estate & Construction",
    icon: "Building2",
    description: "Generate high-net-worth property buyer leads, site visits, and project pre-launch bookings.",
    commonChallenges: ["Junk lead inquiries", "Long decision sales cycles", "Skepticism about developer credibility"],
    brightWaySolution: "Targeted Meta Lead Ads + 3D Virtual Tour Landing Pages + Automated SMS/Call Lead Qualification.",
    typicalRoi: "+$2.4M Property Sales Pipeline"
  },
  {
    id: "e-commerce-retail",
    name: "E-Commerce & Retail",
    icon: "ShoppingBag",
    description: "Scale online store orders with high ROAS Google Shopping, Meta Ads, and Email Automation.",
    commonChallenges: ["High cart abandonment", "Rising ad costs", "Low repeat customer rate"],
    brightWaySolution: "Shopify Speed Optimization + Dynamic Product Retargeting Ads + Klaviyo Abandoned Cart Flows.",
    typicalRoi: "4.8x Average Return on Ad Spend"
  },
  {
    id: "agri-business-manufacturing",
    name: "Agri Business & Manufacturing",
    icon: "Tractor",
    description: "Connect directly with global exporters, distributors, and B2B buyers seeking quality products.",
    commonChallenges: ["Outdated legacy websites", "Lack of overseas buyer visibility", "Difficult B2B deal closing"],
    brightWaySolution: "Multilingual B2B Website + LinkedIn Outreach Strategy + Targeted Google Search Ads in Target Export Countries.",
    typicalRoi: "+45% Overseas Distributor Inquiries"
  },
  {
    id: "beauty-salons-spas",
    name: "Beauty Salons & Spas",
    icon: "Sparkles",
    description: "Keep appointment calendars booked solid with transformation reels and local geo-fenced offers.",
    commonChallenges: ["Last-minute cancellations", "Price shopping customers", "Inconsistent weekday appointments"],
    brightWaySolution: "Before & After Instagram Showcase + Automated Deposit Booking Engine + Local Search Ads.",
    typicalRoi: "+210% Repeat Member Bookings"
  },
  {
    id: "corporate-service-providers",
    name: "Corporate & Service Providers",
    icon: "Briefcase",
    description: "Establish industry thought leadership and secure retainer contracts with high-ticket clients.",
    commonChallenges: ["Inability to differentiate from competitors", "Shortage of high-intent B2B leads"],
    brightWaySolution: "Prestige Executive Branding + High-Converting Case Study Funnels + B2B Account Based Marketing.",
    typicalRoi: "+150% Corporate Retainer Pipeline"
  }
];

export const WHY_CHOOSE_US_CARDS = [
  {
    title: "Experienced Experts",
    icon: "Award",
    desc: "10+ years of battle-tested marketing experience delivering proven growth across diverse industries."
  },
  {
    title: "Creative Design Team",
    icon: "Palette",
    desc: "World-class visual storytellers crafting high-converting, Apple/Stripe-level designs that build instant trust."
  },
  {
    title: "Affordable & Transparent Pricing",
    icon: "DollarSign",
    desc: "No hidden setup fees or tricky contracts. Honest, ROI-driven packages tailored to your exact budget scale."
  },
  {
    title: "Transparent Communication",
    icon: "MessageSquare",
    desc: "Direct access to dedicated project managers with weekly Slack/WhatsApp updates and clear progress reporting."
  },
  {
    title: "Latest AI Technology",
    icon: "Cpu",
    desc: "We leverage state-of-the-art AI models (Gemini, Automation Bots) to optimize ad spend and personalize messaging."
  },
  {
    title: "ROI-Focused Campaigns",
    icon: "TrendingUp",
    desc: "We don't care about vanity likes. Our sole metric of success is measurable leads, phone calls, and revenue growth."
  },
  {
    title: "Fast Project Delivery",
    icon: "Zap",
    desc: "Rapid deployment workflows that get your campaigns live in days, not months, driving immediate speed to market."
  },
  {
    title: "100% Custom Solutions",
    icon: "Sliders",
    desc: "Zero cookie-cutter templates. Every campaign strategy and website architecture is custom built for your business."
  },
  {
    title: "24/7 Technical Support",
    icon: "Clock",
    desc: "Round-the-clock server monitoring, website maintenance, and instant troubleshooting whenever you need us."
  },
  {
    title: "Dedicated Account Manager",
    icon: "UserCheck",
    desc: "A single senior strategist who understands your business deeply and drives continuous campaign improvements."
  },
  {
    title: "Data-Driven Decisions",
    icon: "BarChart3",
    desc: "Every design tweak and keyword strategy is backed by deep analytics, user heatmaps, and A/B split tests."
  },
  {
    title: "Long-Term Partnership",
    icon: "Handshake",
    desc: "We treat your business like our own, scaling with you as your strategic digital marketing growth partner."
  }
];

export const PROCESS_STEPS = [
  {
    stepNumber: 1,
    title: "Free Consultation",
    shortDesc: "We discuss your business goals, target audience, and current marketing roadblocks over a 30-min strategy call.",
    details: "In-depth discovery call to understand your growth targets, current unit economics, and competitive environment.",
    timeframe: "Day 1",
    deliverable: "Custom Discovery Notes & Initial Audit"
  },
  {
    stepNumber: 2,
    title: "Business & Market Analysis",
    shortDesc: "Our research team analyzes your top competitors, keyword opportunities, and conversion funnel gaps.",
    details: "Deep dive audit examining competitor ad strategies, organic SERP positions, website friction points, and customer personas.",
    timeframe: "Day 2 - 3",
    deliverable: "Competitor Benchmark & Opportunity Report"
  },
  {
    stepNumber: 3,
    title: "Custom Marketing Strategy",
    shortDesc: "We craft a tailored roadmap outlining exact channel tactics, budget allocations, and conversion targets.",
    details: "Formulating multi-channel marketing campaigns, campaign structures, key ad creatives, and high-converting offer hooks.",
    timeframe: "Day 4 - 5",
    deliverable: "360° Growth Strategy Blueprint"
  },
  {
    stepNumber: 4,
    title: "Design & Development",
    shortDesc: "Our creative team builds high-converting landing pages, ad creatives, copy, and tracking setups.",
    details: "Designing modern visual assets, writing psychological sales copy, building fast landing pages, and setting up GA4 & pixels.",
    timeframe: "Week 2",
    deliverable: "Production-Ready Assets & Tech Setup"
  },
  {
    stepNumber: 5,
    title: "Campaign Launch",
    shortDesc: "We push campaigns live across selected channels (Google, Meta, SEO, Social) with active live monitoring.",
    details: "Soft launch testing followed by budget scaling across validated high-performing ad sets and search keywords.",
    timeframe: "Week 3",
    deliverable: "Live Campaign Execution & Active Leads"
  },
  {
    stepNumber: 6,
    title: "Optimization & A/B Testing",
    shortDesc: "Continuous data monitoring, ad creative rotation, and bid adjustments to maximize Return on Ad Spend (ROAS).",
    details: "Daily monitoring of cost per acquisition (CPA), heatmaps, negative keywords, and landing page conversion tweaks.",
    timeframe: "Ongoing Weekly",
    deliverable: "Weekly Optimization Logs & A/B Test Results"
  },
  {
    stepNumber: 7,
    title: "Growth & Scaling",
    shortDesc: "Reinvesting profits into winning channels to scale lead volume, market share, and revenue predictably.",
    details: "Expanding into additional marketing channels, launching retargeting funnels, and scaling monthly budget profitably.",
    timeframe: "Long-Term",
    deliverable: "Predictable Monthly Revenue Growth"
  }
];

export const PORTFOLIO_CASE_STUDIES: PortfolioCaseStudy[] = [
  {
    id: "gourmet-bistro-redesign",
    title: "Fine Dining Restaurant Digital Transformation",
    category: "Website Design",
    industry: "Restaurants & Hospitality",
    clientName: "The Grand Bistro",
    image: "/src/assets/images/case_study_showcase_1785387991346.jpg",
    shortDesc: "Complete website redesign with online table reservation engine, interactive menu, and geotagged Instagram reels campaign.",
    fullDesc: "The Grand Bistro suffered from empty weekday tables and heavy reliance on food aggregators charging 30% commissions. BrightWay created a luxury, mouth-watering website with instant WhatsApp table reservations and local geo-fenced Instagram ads.",
    challenge: "High reliance on third-party aggregators and 40% empty seats on Tuesday-Thursday evenings.",
    solution: "Custom React table booking website, Google Business Profile local SEO map pack push, and local food influencer reels.",
    results: [
      { label: "Direct Reservations", value: "+340%", change: "vs previous quarter" },
      { label: "Commission Saved", value: "$4,200/mo", change: "eliminated fees" },
      { label: "Google Map Ranking", value: "#1 Spot", change: "in 10km radius" }
    ],
    beforeAfterMetric: {
      beforeLabel: "Old Monthly Online Table Bookings",
      beforeVal: "38 Bookings/mo",
      afterLabel: "New BrightWay System Monthly Bookings",
      afterVal: "167 Bookings/mo"
    }
  },
  {
    id: "med-care-clinic-seo",
    title: "Multi-Specialty Medical Clinic Local SEO & Google Ads",
    category: "SEO Campaigns",
    industry: "Clinics & Healthcare",
    clientName: "Apex Healthcare Clinic",
    image: "/src/assets/images/analytics_dashboard_preview_1785387973223.jpg",
    shortDesc: "Local SEO optimization & Google Search Ads campaign driving high-ticket patient appointments.",
    fullDesc: "Apex Healthcare needed a steady flow of patient inquiries for specialist consultations (Dermatology & Orthopedics). BrightWay built compliant Google Search PPC ads and dominated the Local Map Pack.",
    challenge: "High ad costs per click with low appointment phone call conversions.",
    solution: "Dedicated fast mobile landing pages with direct click-to-call phone buttons and instant WhatsApp consultation booking.",
    results: [
      { label: "Monthly Patient Leads", value: "240+", change: "verified inquiries" },
      { label: "Cost Per Appointment", value: "-52%", change: "reduced ad cost" },
      { label: "Google Map Views", value: "45,000+", change: "monthly impressions" }
    ],
    beforeAfterMetric: {
      beforeLabel: "Ad Cost Per Patient Call",
      beforeVal: "$42 per call",
      afterLabel: "BrightWay Optimized Cost Per Call",
      afterVal: "$18 per call"
    }
  },
  {
    id: "oakwood-villas-meta-ads",
    title: "Luxury Real Estate Lead Generation Campaign",
    category: "Facebook Ads",
    industry: "Real Estate & Property",
    clientName: "Oakwood Luxury Villas",
    image: "/src/assets/images/hero_workspace_mockup_1785387946277.jpg",
    shortDesc: "High-ticket Facebook & Instagram video ads generating qualified luxury villa buyers.",
    fullDesc: "Oakwood Villas launched a premier residential villa project and needed genuine high-net-worth buyer leads instead of casual inquiry clicks.",
    challenge: "Low-quality leads that failed broker phone screening.",
    solution: "Custom multi-step Facebook Lead Form with salary & timeline qualification questions + 3D video walk-through landing page.",
    results: [
      { label: "Property Pipeline", value: "$3.8M", change: "in closed sales" },
      { label: "Qualified Site Visits", value: "84 Visits", change: "within 60 days" },
      { label: "ROAS on Ad Spend", value: "11.4x", change: "overall campaign return" }
    ],
    beforeAfterMetric: {
      beforeLabel: "Qualified Lead Rate",
      beforeVal: "8%",
      afterLabel: "BrightWay Qualified Lead Rate",
      afterVal: "64%"
    }
  },
  {
    id: "prestige-academy-admissions",
    title: "Private School Admissions Strategy & Website",
    category: "Landing Pages",
    industry: "Schools & Education",
    clientName: "Horizon International Academy",
    image: "/src/assets/images/office_team_meeting_1785387959580.jpg",
    shortDesc: "Admissions campaign combining Google Search ads, virtual tour landing pages, and WhatsApp automation.",
    fullDesc: "Horizon Academy wanted to fill 150 student seats before the academic year deadline. BrightWay delivered a modern virtual campus experience and automated parent follow-up sequences.",
    challenge: "High parent drop-off between inquiry form submission and school tour visits.",
    solution: "Automated instant WhatsApp message sending parents a campus video guide and instant tour scheduling calendar.",
    results: [
      { label: "Admissions Filled", value: "100%", change: "capacity reached" },
      { label: "Parent Tour Visits", value: "+210%", change: "vs last year" },
      { label: "Cost Per Student Lead", value: "-38%", change: "ad efficiency" }
    ]
  }
];

export const TESTIMONIALS_LIST: Testimonial[] = [
  {
    id: "t1",
    clientName: "Tariq Mahmood",
    role: "Owner & Managing Director",
    businessName: "Spice Garden Restaurant & Cafe",
    industryRole: "Restaurant Owner",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    content: "BrightWay Marketing transformed our restaurant business! Their local SEO and Instagram reels campaign doubled our weekend dining bookings within 30 days. Phone inquiries and direct WhatsApp table reservations have never been higher. Calling 0371-6481314 was the best decision we made for our business!",
    rating: 5,
    resultsAchieved: "+340% Weekend Table Bookings"
  },
  {
    id: "t2",
    clientName: "Dr. Farhan Ali",
    role: "Chief Medical Officer",
    businessName: "CureCare Medical Specialists",
    industryRole: "Doctor / Clinic Head",
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&auto=format&fit=crop&q=80",
    content: "As a specialized medical clinic, trust is everything. BrightWay designed an incredibly clean, professional website and managed our Google Search ads. Our monthly patient appointments increased by over 200%. Their team is transparent, highly responsive, and deeply knowledgeable.",
    rating: 5,
    resultsAchieved: "+210% Monthly Patient Volume"
  },
  {
    id: "t3",
    clientName: "Ayesha Siddiqui",
    role: "Principal & Director",
    businessName: "Beacon Heights Grammar School",
    industryRole: "School Director",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    content: "We hired BrightWay for our annual student admissions drive. Their team created a stunning landing page and ran targeted Facebook & Google Ads. We filled all available admissions seats 2 weeks ahead of our deadline! Exceptional professionalism and strategic vision.",
    rating: 5,
    resultsAchieved: "100% Admissions Seats Filled"
  },
  {
    id: "t4",
    clientName: "Kamran Khan",
    role: "Lead Real Estate Consultant",
    businessName: "Prime City Properties",
    industryRole: "Real Estate Consultant",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    content: "In real estate, lead quality is everything. BrightWay filtered out junk leads and brought us serious property investors ready for site visits. Over $2.5 Million in property sales closed directly from their ad campaign funnels. Couldn't recommend them more!",
    rating: 5,
    resultsAchieved: "$2.5M Property Deals Closed"
  },
  {
    id: "t5",
    clientName: "Zainab Malik",
    role: "Founder & Creative Director",
    businessName: "Luxe Couture Fashion",
    industryRole: "E-commerce Founder",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    content: "Our online store sales exploded after BrightWay redesigned our website and took over our Meta Ads & TikTok marketing. We achieved a 4.8x Return on Ad Spend (ROAS) and automated our customer WhatsApp follow-ups. True masters of e-commerce growth!",
    rating: 5,
    resultsAchieved: "4.8x Average Return on Ad Spend"
  },
  {
    id: "t6",
    clientName: "Bilal Ahmad",
    role: "General Manager",
    businessName: "Apex Agri Exporters",
    industryRole: "Manufacturer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    content: "BrightWay built our B2B export website and executed overseas Google Search Ads. We secured three major distributor contracts in our first two months. Their communication and data-driven reports give us total confidence.",
    rating: 5,
    resultsAchieved: "3 Major International B2B Contracts"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter-plan",
    name: "Starter Plan",
    monthlyPrice: 399,
    yearlyPriceMonthly: 319,
    shortDesc: "Ideal for local businesses & startups wanting to build a strong digital foundation.",
    targetAudience: "Small Businesses, Salons, Local Cafes & Doctors",
    features: [
      "Custom 5-Page Responsive Website",
      "Local SEO & Google Business Profile Setup",
      "Basic Google Ads or Facebook Ads Setup",
      "Social Media Setup (FB & Instagram)",
      "WhatsApp Chat Button Integration",
      "SSL Certificate & Fast Hosting",
      "Monthly Analytics Report"
    ],
    nonIncluded: [
      "AI Marketing Automation",
      "Dedicated Account Manager",
      "Weekly Video Content Editing"
    ],
    ctaText: "Get Free Consultation"
  },
  {
    id: "business-plan",
    name: "Business Growth Plan",
    monthlyPrice: 799,
    yearlyPriceMonthly: 639,
    shortDesc: "Our most popular package designed to scale leads, traffic, and sales aggressively.",
    targetAudience: "Growing Businesses, Clinics, Real Estate & E-commerce Stores",
    features: [
      "Custom 10-Page High-Speed Website or E-Commerce Store",
      "Complete On-Page & Technical SEO Campaign",
      "Google Search PPC + Facebook & Instagram Ad Management",
      "Monthly Social Media Management (15 Posts + 4 Reels)",
      "Automated WhatsApp & Email Lead Capture Funnel",
      "Core Web Vitals 90+ Speed Optimization",
      "Dedicated Account Manager",
      "Bi-Weekly Strategy Calls & Live Performance Dashboard"
    ],
    ctaText: "Get Free Consultation"
  },
  {
    id: "premium-plan",
    name: "Premium Scale Plan",
    badge: "MOST POPULAR",
    isPopular: true,
    monthlyPrice: 1499,
    yearlyPriceMonthly: 1199,
    shortDesc: "Complete 360° marketing takeover for brands seeking dominant market leadership.",
    targetAudience: "Schools, Hospitals, Major Real Estate Developers & Top Brands",
    features: [
      "Bespoke Custom React/WordPress Platform with Advanced UI/UX",
      "Comprehensive SEO Domination (Local, National & Technical)",
      "Multi-Channel Ads (Google PPC, Facebook, Instagram, TikTok & LinkedIn)",
      "Full Social Media Management (30 Custom Posts + 8 Edited Reels)",
      "AI-Powered Chatbot & Automated Sales CRM Integration",
      "Branding Suite: Logo, Color Palette & Graphic Collateral",
      "Conversion Rate Optimization (CRO) & Heatmap Analysis",
      "24/7 Priority Support & Dedicated Senior Strategist"
    ],
    ctaText: "Get Free Consultation"
  },
  {
    id: "enterprise-plan",
    name: "Enterprise Custom Plan",
    badge: "CUSTOM TAILORED",
    monthlyPrice: 2999,
    yearlyPriceMonthly: 2399,
    shortDesc: "Tailored multi-location marketing, custom web software, and full dedicated agency team.",
    targetAudience: "Corporate Enterprises, Multi-Branch Chains & Global Exporters",
    features: [
      "Custom Web & Mobile App Development",
      "Unlimited Multi-Channel PPC Ad Budget Management",
      "Dedicated In-House Marketing Team (Strategist, Designer, Copywriter, Media Buyer)",
      "Custom AI Marketing Workflows & Predictive Analytics",
      "Corporate Video Production & Executive Branding",
      "Custom API Integrations & ERP/CRM Synchronization",
      "Weekly Strategy Workshops & Guaranteed ROI SLAs"
    ],
    ctaText: "Get Free Consultation"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "seo-tips-2026",
    title: "10 Proven SEO Strategies to Rank #1 on Google in 2026",
    category: "SEO Tips",
    author: "Hamza Siddiqui - Head of SEO",
    date: "July 24, 2026",
    readTime: "6 min read",
    excerpt: "Discover the latest search algorithm updates, AI content guidelines, and local SEO tactics that are driving organic traffic today.",
    content: "Search Engine Optimization has evolved drastically in 2026. Search engines prioritize user intent, topical authority, and Core Web Vitals over basic keyword stuffing. Here are 10 actionable tactics to outrank your competitors:\n\n1. Optimize for Core Web Vitals and sub-1 second loading speed.\n2. Claim and structure your Google Business Profile with local citations.\n3. Publish deep, authoritative content answering intent-rich queries.\n4. Leverage AI tools for keyword clustering and content gap discovery.\n5. Implement schema markup for rich snippet display.",
    tags: ["SEO", "Google Ranking", "Organic Traffic", "Local SEO"],
    image: "/src/assets/images/analytics_dashboard_preview_1785387973223.jpg"
  },
  {
    id: "google-ads-roi",
    title: "How to Reduce Google Ads Cost Per Click while Boosting Sales",
    category: "Google Ads",
    author: "Sara Malik - Senior PPC Specialist",
    date: "July 18, 2026",
    readTime: "5 min read",
    excerpt: "Stop wasting ad budget on junk clicks. Learn how negative keyword lists and high Quality Scores slash customer acquisition cost.",
    content: "Unoptimized Google Ads campaigns waste up to 40% of monthly ad budgets on non-converting search terms. By structuring single-theme ad groups, adding negative keywords aggressively, and building dedicated landing pages, you can raise your Quality Score from 5 to 9, cutting cost per click in half.",
    tags: ["PPC", "Google Ads", "Conversion Rate", "ROI"],
    image: "/src/assets/images/hero_workspace_mockup_1785387946277.jpg"
  },
  {
    id: "ai-marketing-trends",
    title: "Leveraging AI Automation to Scale Lead Generation 24/7",
    category: "AI Marketing",
    author: "Zohaib Ahmed - AI Solution Architect",
    date: "July 12, 2026",
    readTime: "7 min read",
    excerpt: "How modern AI chatbots and automated email/WhatsApp sequences nurture leads while your sales team sleeps.",
    content: "In 2026, speed-to-lead is the single biggest predictor of conversion. If a lead waits longer than 5 minutes for a reply, conversion probability drops by 80%. AI chatbots and automated WhatsApp workflows engage visitors instantly, qualify their needs, and book consultations directly onto your calendar.",
    tags: ["AI Marketing", "Automation", "WhatsApp Lead Flow", "Sales CRM"],
    image: "/src/assets/images/case_study_showcase_1785387991346.jpg"
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: "faq-1",
    category: "Website Design",
    question: "How long does it take BrightWay to design and launch a custom website?",
    answer: "A standard custom business website or high-converting landing page takes between 7 to 14 days from initial discovery to live launch. Complex e-commerce stores or custom enterprise platforms typically take 3 to 4 weeks. We prioritize rapid execution without compromising UI/UX quality."
  },
  {
    id: "faq-2",
    category: "SEO",
    question: "How fast can I expect to see results from Search Engine Optimization (SEO)?",
    answer: "Local SEO improvements (such as Google Map Pack rankings) often show measurable visibility boosts within 2 to 4 weeks. Comprehensive organic keyword rankings generally deliver substantial traffic growth within 3 to 6 months as domain authority builds."
  },
  {
    id: "faq-3",
    category: "Google Ads",
    question: "How quickly do Google Ads and Facebook PPC campaigns start generating leads?",
    answer: "PPC ad campaigns generate qualified phone calls, form fills, and WhatsApp inquiries almost immediately—often within 24 to 48 hours of campaign launch. Once your ads go live, interested buyers actively searching for your service will reach out."
  },
  {
    id: "faq-4",
    category: "Facebook Ads",
    question: "What ad budget should I start with for Facebook & Instagram Ads?",
    answer: "We recommend starting with a modest ad spend budget that allows us to test multiple creative variations, demographics, and audience hooks. During your free consultation (call 0371-6481314), we will calculate the ideal ad budget for your specific industry."
  },
  {
    id: "faq-5",
    category: "Hosting",
    question: "Do you provide web hosting, SSL security, and domain registration?",
    answer: "Yes! All our website development packages include high-speed cloud server hosting, SSL certificates, daily backups, global CDN speed acceleration, and continuous uptime monitoring."
  },
  {
    id: "faq-6",
    category: "Maintenance",
    question: "Will I be able to update content on my website after launch?",
    answer: "Absolutely. We build user-friendly administrative dashboards (WordPress, CMS, or custom React admin panels) and provide full video training so your team can easily edit text, post news, add products, or upload images without needing technical coding skills."
  },
  {
    id: "faq-7",
    category: "Timeline",
    question: "What is the process to get started with BrightWay Marketing?",
    answer: "Getting started is seamless: 1) Click 'Get Free Consultation' or call 0371-6481314. 2) We hold a 20-minute strategy discovery call. 3) We deliver a custom proposal and blueprint. 4) Upon agreement, our team kicks off immediate design and execution!"
  },
  {
    id: "faq-8",
    category: "Pricing",
    question: "Are there any hidden costs or surprise recurring fees?",
    answer: "No. BrightWay Marketing believes in 100% transparent, honest pricing. All deliverables, timelines, and payment terms are detailed clearly in our written agreement before work begins."
  },
  {
    id: "faq-9",
    category: "Consultation",
    question: "Is the initial strategy consultation completely free?",
    answer: "Yes! Our initial 30-minute consultation call and preliminary digital audit are 100% free with zero obligation. We evaluate your current online presence and share actionable growth advice."
  },
  {
    id: "faq-10",
    category: "Support",
    question: "How can I contact BrightWay Marketing for ongoing client support?",
    answer: "Every client is assigned a dedicated Account Manager. You can reach us via phone at 0371-6481314, direct WhatsApp chat, email (hello@brightwaymarketing.com), or scheduled video calls."
  }
];
