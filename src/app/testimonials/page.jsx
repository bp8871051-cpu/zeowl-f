'use client';

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import TestimonialsHero from '@/components/testimonials/TestimonialsHero';
import TrustedLogosSection from '@/components/testimonials/TrustedLogosSection';
import TestimonialsGrid from '@/components/testimonials/TestimonialsGrid';
import TestimonialsCTA from '@/components/testimonials/TestimonialsCTA';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TestimonialsPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="w-full bg-white text-[#0A1C30] overflow-x-hidden min-h-screen">
      {/* 1. Client Testimonials Hero with User-Provided Artwork Background */}
      <TestimonialsHero />

      {/* 2. Trusted by Businesses Worldwide Logo Strip */}
      <TrustedLogosSection />

      {/* 3. Client Feedback 3-Card Grid / Interactive Carousel */}
      <TestimonialsGrid />

      {/* 4. Bottom Let's Build Something Great Wave CTA */}
      <TestimonialsCTA />
    </main>
  );
}
