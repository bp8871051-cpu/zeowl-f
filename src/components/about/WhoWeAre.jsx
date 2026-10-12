'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WhoWeAre() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (prefersReducedMotion) return;

      // Right Content: Fade In Up animation (per mockup annotation)
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.95,
            stagger: 0.14,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="who-we-are"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 font-sans overflow-hidden bg-white bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: "url('/about/who-we-are-banner.png')",
      }}
    >
      {/* Ambient subtle glow for depth */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[400px] h-[350px] bg-[#F57E20]/[0.025] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* ======================================================== */}
          {/* LEFT: Spacer allowing the background team photo to show  */}
          {/* Floating image card has been removed as requested        */}
          {/* ======================================================== */}
          <div className="hidden lg:block lg:col-span-6 min-h-[440px] pointer-events-none" />

          {/* ======================================================== */}
          {/* RIGHT: Content Redesign (Animation: Fade In Up)          */}
          {/* ======================================================== */}
          <div
            ref={contentRef}
            className="lg:col-span-6 flex flex-col items-start pl-0 lg:pl-6 relative bg-white/95 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none p-6 sm:p-8 lg:p-0 rounded-2xl lg:rounded-none border border-slate-100 lg:border-none shadow-xl lg:shadow-none"
          >
            {/* Soft decorative quotation watermark mark in top-right */}
            <div
              className="absolute -top-6 right-2 sm:right-6 text-7xl sm:text-8xl font-serif text-[#F57E20]/15 select-none pointer-events-none leading-none"
              aria-hidden="true"
            >
              “
            </div>

            {/* Small Orange Accent Bar */}
            <div className="w-12 h-1 bg-[#F57E20] rounded-full mb-3" />

            {/* Subtitle: Our Story */}
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#06182F] tracking-tight mb-2">
              Our Story
            </h3>

            {/* Main Title: From a Vision to a Digital Partner */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#06182F] tracking-tight leading-[1.15] mb-5">
              From a Vision to a{' '}
              <span className="text-[#F57E20] block sm:inline">Digital Partner</span>
            </h2>

            {/* Description matching user mockup */}
            <p className="font-body text-[#566579] text-base sm:text-[17px] leading-[1.8] font-normal mb-8 max-w-xl">
              Zeowl Infotech was founded with a simple vision — to help businesses
              grow with the power of technology. What started as a passionate team
              of developers and designers has now grown into a full-service IT
              company delivering innovative and result-driven digital solutions.
            </p>

            {/* CTA Button: Know More → */}
            <a
              href="#mission-vision"
              className="font-button inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#F57E20] hover:bg-[#06182F] text-white font-bold text-sm sm:text-base rounded-xl shadow-[0_10px_25px_rgba(245,126,32,0.35)] hover:shadow-[0_10px_25px_rgba(6,24,47,0.3)] transition-all duration-300 group cursor-pointer"
            >
              <span>Know More</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
