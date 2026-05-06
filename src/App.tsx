import React, { useEffect } from 'react';
import { Navbar } from '@/src/components/Navbar';
import { Hero } from '@/src/components/Hero';
import { LogoCloud, ProblemSection, SolutionSection } from '@/src/components/LeadGenSections';
import { HowItWorks, CaseStudies, VideoTestimonial, ComparisonTable } from '@/src/components/SocialProofSections';
import { ROICalculator } from '@/src/components/ROICalculator';
import { Pricing, FAQ, FinalCTA, Footer, WhatsAppButton, CookieBanner } from '@/src/components/OtherSections';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Schema.org Markup
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "IAPLAN Consulting",
      "description": "Consultoria de IA para automatización de leads en Meta Ads",
      "provider": {
        "@type": "Organization",
        "name": "IAPLAN"
      },
      "areaServed": "ES",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "IA Sales Agents",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Lead Follow-up Automation"
            }
          }
        ]
      }
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="relative selection:bg-brand/20 selection:text-brand">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      <main>
        <Hero />
        <LogoCloud />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <CaseStudies />
        <VideoTestimonial />
        <ComparisonTable />
        <ROICalculator />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />

      {/* Floating Elements */}
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
}

