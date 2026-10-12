'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function TestimonialsCTA() {
  return (
    <section className="relative w-full pt-4 sm:pt-6 lg:pt-8 pb-20 sm:pb-24 lg:pb-28 bg-white overflow-hidden font-sans text-center">
      {/* ======================================================== */}
      {/* 1. Fluid Wave Artwork Background                         */}
      {/* ======================================================== */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <img
          src="/testimonials/testimonials-bottom-bg.png"
          alt=""
          className="w-full h-full object-cover object-bottom select-none"
        />
        {/* Soft white overlay for center typographic contrast */}
        <div className="absolute inset-0 bg-white/40 pointer-events-none" />
      </div>

      {/* ======================================================== */}
      {/* 2. Main Content Container                                */}
      {/* ======================================================== */}
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          {/* Main Headline */}
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black text-[#0A1C30] tracking-tight leading-[1.15] mb-4">
            Let&apos;s Build <span className="text-[#FF7900]">Something Great</span>
          </h2>

          {/* Subtitle */}
          <p className="font-body text-[#475569] text-base sm:text-lg lg:text-[19px] leading-relaxed font-normal mb-8 max-w-xl">
            Join our growing list of satisfied clients and take your business to the next level.
          </p>

          {/* Action Button: Get Started Today → */}
          <Link
            href="/contact"
            className="font-button inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-4 bg-[#FF7900] text-white font-bold text-base sm:text-lg rounded-full shadow-[0_12px_30px_rgba(255,121,0,0.4)] hover:bg-[#0A1C30] hover:shadow-[0_15px_35px_rgba(10,28,48,0.25)] transition-all duration-300 group cursor-pointer"
          >
            <span>Get Started Today</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
