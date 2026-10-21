'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutHero() {
  const containerRef = useRef(null);
  const labelRef = useRef(null);
  const breadcrumbRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const highlightsRef = useRef(null);
  const buttonsRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (prefersReducedMotion) return;

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 1. Label and Breadcrumb reveal
      if (labelRef.current && breadcrumbRef.current) {
        tl.fromTo(
          [labelRef.current, breadcrumbRef.current],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, delay: 0.1 }
        );
      }

      // 2. Heading: Animate each line separately with clip-path
      const lines = headingRef.current?.querySelectorAll('.split-line');
      if (lines && lines.length > 0) {
        tl.fromTo(
          lines,
          {
            opacity: 0,
            y: 70,
            clipPath: 'inset(100% 0 0 0)',
          },
          {
            opacity: 1,
            y: 0,
            clipPath: 'inset(0% 0 0 0)',
            duration: 1.1,
            stagger: 0.16,
          },
          '-=0.2'
        );
      }

      // 3. Paragraph: Reveal after heading
      if (paraRef.current) {
        tl.fromTo(
          paraRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        );
      }

      // 4. Trust Highlights: Reveal sequentially
      if (highlightsRef.current) {
        tl.fromTo(
          highlightsRef.current.children,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.65, stagger: 0.1 },
          '-=0.5'
        );
      }

      // 5. Buttons: Reveal sequentially
      if (buttonsRef.current) {
        tl.fromTo(
          buttonsRef.current.children,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.15 },
          '-=0.45'
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="about-hero"
      className="relative w-full min-h-[640px] sm:min-h-[700px] lg:min-h-[780px] xl:min-h-[840px] flex items-center overflow-hidden bg-white text-[#06182f] pt-10 sm:pt-14 lg:pt-16 pb-16 sm:pb-20 font-sans"
    >
      {/* ======================================================== */}
      {/* 1. HIGH-DEFINITION 3D ABOUT HERO BACKGROUND ARTWORK      */}
      {/* Left: Clean white backdrop | Right: 3D Office Brand Wall */}
      {/* ======================================================== */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0">
        <Image
          src="/about/about-hero-bg.png"
          alt="Zeowl Infotech Corporate Office & 3D Brand Wall"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[75%_center] lg:object-center select-none filter contrast-[1.02] opacity-40 sm:opacity-65 lg:opacity-100 transition-opacity duration-300"
        />

        {/* Soft edge blend overlays for seamless integration */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white via-white/90 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-white via-white/95 to-transparent pointer-events-none" />

        {/* Responsive mobile/tablet background protective overlay for pristine text readability */}
        <div className="absolute inset-0 bg-white/80 sm:bg-white/60 lg:bg-transparent pointer-events-none" />

        {/* Directional gradient mask: vertical blend on mobile, horizontal on desktop */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/70 lg:bg-gradient-to-r lg:from-white/95 lg:via-white/70 lg:to-transparent pointer-events-none" />

        {/* Ambient warm glow behind the corporate logo area */}
        <div
          className="absolute right-10 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full pointer-events-none blur-[140px] -z-10 opacity-30"
          style={{
            background:
              'radial-gradient(circle, rgba(245,126,32,0.35) 0%, rgba(6,24,47,0.08) 60%, transparent 80%)',
          }}
        />
      </div>

      {/* ======================================================== */}
      {/* 2. FOREGROUND CONTENT CONTAINER                           */}
      {/* ======================================================== */}
      <div className="max-w-[1420px] w-[92%] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Typography, Breadcrumb, CTAs */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            
            {/* Small Orange / Brand Accent Label */}
            <div
              ref={labelRef}
              className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#F57E20]/10 border border-[#F57E20]/25 text-[#F57E20] text-[11px] sm:text-xs font-bold font-mono tracking-wider uppercase mb-4 w-fit select-none backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-[#F57E20] animate-pulse" />
              <span>ABOUT US • ZEOWL INFOTECH</span>
            </div>

            {/* Breadcrumb: Home → About Us */}
            <div
              ref={breadcrumbRef}
              className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm font-medium text-[#06182F]/70 mb-4 sm:mb-5"
            >
              <Link
                href="/"
                className="hover:text-[#F57E20] transition-colors duration-200 cursor-pointer"
              >
                Home
              </Link>
              <span className="text-[#F57E20] font-bold">→</span>
              <span className="text-[#06182F] font-semibold">About Us</span>
            </div>

            {/* Large Premium Responsive Heading */}
            <h1
              ref={headingRef}
              className="font-heading font-black tracking-[-0.03em] leading-[1.08] sm:leading-[1.05] text-[30px] sm:text-[42px] md:text-[52px] lg:text-[58px] xl:text-[66px] text-[#06182F] mb-5 sm:mb-6 text-center lg:text-left"
            >
              <span className="block overflow-hidden pb-1">
                <span className="split-line block">Driven by Ideas.</span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span className="split-line block">
                  Built for <span className="text-[#F57E20]">Tomorrow.</span>
                </span>
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p
              ref={paraRef}
              className="font-body text-[#475569] text-[15px] sm:text-[17px] md:text-[18px] leading-[1.65] max-w-xl mb-6 sm:mb-7 font-normal text-center lg:text-left mx-auto lg:mx-0"
            >
              We transform ideas into powerful digital solutions that help
              businesses grow, automate processes and stay ahead in an evolving
              digital world.
            </p>

            {/* Quick Trust Highlights */}
            <div
              ref={highlightsRef}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs sm:text-sm font-semibold text-[#06182F]/85 mb-7 sm:mb-8"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F57E20] shrink-0" />
                <span>50+ High-Impact Deployments</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F57E20] shrink-0" />
                <span>Dedicated Tech Architects</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F57E20] shrink-0" />
                <span>Scalable Cloud Architecture</span>
              </div>
            </div>

            {/* Two CTA Buttons */}
            <div
              ref={buttonsRef}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-3.5 w-full"
            >
              <a
                href="#who-we-are"
                className="font-button inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-[#F57E20] text-white font-bold text-sm sm:text-base rounded-full shadow-lg shadow-[#F57E20]/30 hover:bg-[#06182F] hover:shadow-[#06182F]/25 transition-all duration-300 group cursor-pointer hover:scale-[1.02]"
              >
                <span>Our Story</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <Link
                href="/contact"
                className="font-button inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-7 sm:py-4 bg-white text-[#06182F] border border-[#06182F]/20 font-semibold text-sm sm:text-base rounded-full shadow-sm hover:border-[#F57E20] hover:text-[#F57E20] hover:bg-[#F57E20]/5 transition-all duration-300 cursor-pointer group"
              >
                <Sparkles className="w-4 h-4 text-[#F57E20]" />
                <span>Contact Us</span>
              </Link>
            </div>

          </div>

          {/* Right Column: Spacer on Desktop so the 3D office logo wall artwork is crisp & prominent */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6 pointer-events-none" />

        </div>
      </div>
    </section>
  );
}
