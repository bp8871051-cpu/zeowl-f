'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function PortfolioCTA() {
  return (
    <section className="relative w-full py-20 lg:py-28 bg-white font-sans text-[#06182f] overflow-hidden">
      <div className="max-w-[1360px] w-[92%] mx-auto relative z-10">
        <div className="relative rounded-[32px] overflow-hidden border border-white/20 shadow-[0_25px_60px_rgba(6,24,47,0.25)] min-h-[460px] lg:min-h-[520px] flex items-center p-8 sm:p-12 lg:p-16">
          {/* ========================================================================= */}
          {/* BACKGROUND MOUNTAIN, GLOWING LIGHT TRAIL & PAPER AIRPLANE ARTWORK          */}
          {/* ========================================================================= */}
          <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
            <Image
              src="/portfolio/lets-build-bg.png"
              alt="Let's Build Together Mountain Landscape Artwork"
              fill
              priority
              sizes="(max-width: 1400px) 100vw, 1360px"
              className="object-cover object-right lg:object-center select-none filter contrast-[1.05]"
            />
            {/* Lighter overlays so the mountain scenery, starry sky, and winding glow shine through on the left */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#06182f]/70 via-[#06182f]/40 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06182f]/60 via-transparent to-[#06182f]/20 pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-2xl text-left">
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#06182f]/50 border border-white/20 text-[#f57e20] text-xs font-bold font-mono tracking-wider uppercase mb-5 backdrop-blur-md shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#f57e20]" />
              <span>LET'S BUILD TOGETHER</span>
            </div>

            {/* Heading */}
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.12] mb-5 drop-shadow-[0_4px_14px_rgba(6,24,47,0.7)]">
              Ready to Turn Your Vision Into{' '}
              <span className="text-[#f57e20]">Real Impact?</span>
            </h2>

            {/* Description */}
            <p className="font-body text-white text-base sm:text-lg leading-relaxed mb-8 drop-shadow-[0_2px_8px_rgba(6,24,47,0.7)] font-medium">
              Whether you need an MVP built from scratch, a full-scale web application,
              or an enterprise automation pipeline—our engineering team is ready to deliver.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#f57e20] hover:bg-white text-white hover:text-[#06182f] font-bold text-sm sm:text-base rounded-full shadow-[0_10px_25px_rgba(245,126,32,0.45)] transition-all duration-300 group cursor-pointer"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-4 bg-[#06182f]/45 hover:bg-[#06182f]/70 text-white border border-white/25 font-semibold text-sm sm:text-base rounded-full backdrop-blur-md transition-all duration-300 cursor-pointer shadow-sm"
              >
                <span>Explore All Services</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
