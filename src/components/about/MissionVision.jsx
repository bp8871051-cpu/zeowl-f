'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Crisp, bespoke SVG icons matching the mockup exactly
function TargetMissionIcon({ className = 'w-11 h-11 text-[#F57E20]' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer Ring */}
      <circle
        cx="20"
        cy="24"
        r="14"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner Ring */}
      <circle
        cx="20"
        cy="24"
        r="8"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Bullseye Center */}
      <circle cx="20" cy="24" r="2.8" fill="currentColor" />
      {/* Dart / Arrow shaft pointing directly into bullseye */}
      <path
        d="M36 8L22 22"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Arrow Head / Flights */}
      <path
        d="M28 8H36V16"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function VisionEyeIcon({ className = 'w-11 h-11 text-[#F57E20]' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Almond-shaped Eye Outline */}
      <path
        d="M4 22C4 22 11 11 22 11C33 11 40 22 40 22C40 22 33 33 22 33C11 33 4 22 4 22Z"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Iris Ring */}
      <circle cx="22" cy="22" r="6" stroke="currentColor" strokeWidth="2.8" />
      {/* Pupil Dot */}
      <circle cx="22" cy="22" r="2.8" fill="currentColor" />
    </svg>
  );
}

export default function MissionVision() {
  const containerRef = useRef(null);
  const leftColRef = useRef(null);
  const cardsRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (prefersReducedMotion) return;

      // Left column entrance: smooth slide-in from left
      if (leftColRef.current) {
        gsap.fromTo(
          leftColRef.current.children,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.14,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: leftColRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      // Right column cards: ZOOM IN animation as requested in the design mockup
      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        gsap.fromTo(
          cards,
          {
            scale: 0.8,
            opacity: 0,
            y: 20,
          },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      id="mission-vision"
      ref={containerRef}
      className="relative w-full py-20 lg:py-28 bg-[#F8FAFC] font-sans overflow-hidden"
    >
      {/* Ambient soft background lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-[#F57E20]/[0.025] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[450px] h-[350px] bg-[#06182F]/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: Section Title & Mission/Vision Summary     */}
          {/* ======================================================== */}
          <div ref={leftColRef} className="lg:col-span-5 flex flex-col items-start">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#06182F] tracking-tight leading-[1.2]">
              Our Mission & Vision
            </h2>

            {/* Orange Accent Bar */}
            <div className="w-12 h-1 bg-[#F57E20] rounded-full mt-3 mb-5" />

            {/* Description matching user mockup */}
            <p className="font-body text-[#566579] text-base sm:text-lg leading-relaxed font-normal max-w-md">
              We aim to create a smarter, digital future for businesses through
              innovation, creativity and technology.
            </p>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: 2 Cards with "Zoom In" Entrance Animation */}
          {/* ======================================================== */}
          <div
            ref={cardsRef}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-7"
          >
            {/* CARD 1: Our Mission */}
            <div className="group relative bg-white rounded-2xl sm:rounded-[22px] p-7 sm:p-8 lg:p-9 border border-[#06182F]/[0.06] hover:border-[#F57E20]/40 shadow-[0_4px_25px_rgba(6,24,47,0.05)] hover:shadow-[0_20px_45px_rgba(6,24,47,0.09)] transition-all duration-400 hover:-translate-y-1.5 flex flex-col justify-start">
              {/* Target Bullseye Icon in Orange */}
              <div className="mb-4 inline-block transform group-hover:scale-105 transition-transform duration-300">
                <TargetMissionIcon className="w-10 h-10 sm:w-11 sm:h-11 text-[#F57E20]" />
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl lg:text-[22px] font-bold text-[#06182F] mb-3 tracking-tight">
                Our Mission
              </h3>

              {/* Description */}
              <p className="font-body text-[#566579] text-sm sm:text-[15px] leading-[1.7] font-normal">
                To deliver innovative and high-quality digital solutions that
                help businesses grow and succeed globally.
              </p>
            </div>

            {/* CARD 2: Our Vision */}
            <div className="group relative bg-white rounded-2xl sm:rounded-[22px] p-7 sm:p-8 lg:p-9 border border-[#06182F]/[0.06] hover:border-[#F57E20]/40 shadow-[0_4px_25px_rgba(6,24,47,0.05)] hover:shadow-[0_20px_45px_rgba(6,24,47,0.09)] transition-all duration-400 hover:-translate-y-1.5 flex flex-col justify-start">
              {/* Eye Icon in Orange */}
              <div className="mb-4 inline-block transform group-hover:scale-105 transition-transform duration-300">
                <VisionEyeIcon className="w-10 h-10 sm:w-11 sm:h-11 text-[#F57E20]" />
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl lg:text-[22px] font-bold text-[#06182F] mb-3 tracking-tight">
                Our Vision
              </h3>

              {/* Description */}
              <p className="font-body text-[#566579] text-sm sm:text-[15px] leading-[1.7] font-normal">
                To be a trusted global partner known for innovation, reliability
                and creating real value through technology.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
