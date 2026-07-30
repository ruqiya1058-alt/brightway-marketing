import React from 'react';
import { COMPANY_INFO, FAQ_LIST } from '../data/agencyData';

export const SeoSchemas: React.FC = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": COMPANY_INFO.name,
    "url": "https://brightwaymarketing.com",
    "logo": "https://brightwaymarketing.com/logo.png",
    "description": "Full-Service Digital Marketing Agency specializing in Website Design, SEO, Google Ads, Social Media Marketing, and AI Growth Strategies.",
    "telephone": COMPANY_INFO.phone,
    "email": COMPANY_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "BrightWay Digital Hub",
      "addressLocality": "Dera Ghazi Khan",
      "addressRegion": "Punjab",
      "addressCountry": "PK"
    },
    "sameAs": [
      "https://facebook.com/brightwaymarketing",
      "https://instagram.com/brightwaymarketing",
      "https://linkedin.com/company/brightwaymarketing",
      "https://youtube.com/c/brightwaymarketing"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": COMPANY_INFO.name,
    "image": "https://brightwaymarketing.com/office.jpg",
    "telephone": COMPANY_INFO.phone,
    "email": COMPANY_INFO.email,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "BrightWay Digital Hub",
      "addressLocality": "Dera Ghazi Khan",
      "addressRegion": "Punjab",
      "addressCountry": "PK"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "19:00"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_LIST.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
};
