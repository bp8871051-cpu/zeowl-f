'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Crisp, bespoke SVG icons matching user mockup exactly
function InnovationIcon({ className = 'w-10 h-10 text-[#F57E20]' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M22 6C15.3726 6 10 11.3726 10 18C10 22.3665 12.3333 26.1887 15.8 28.25V31C15.8 32.1 16.7 33 17.8 33H26.2C27.3 33 28.2 32.1 28.2 31V28.25C31.6667 26.1887 34 22.3665 34 18C34 11.3726 28.6274 6 22 6Z"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 37H26"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M19 40H25"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M22 13V18"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ClientCentricIcon({ className = 'w-10 h-10 text-[#F57E20]' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Center Person */}
      <circle cx="22" cy="14" r="5" stroke="currentColor" strokeWidth="2.8" />
      <path
        d="M14 32C14 27.5817 17.5817 24 22 24C26.4183 24 30 27.5817 30 32"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      {/* Left Person */}
      <circle cx="11" cy="16" r="3.8" stroke="currentColor" strokeWidth="2.4" />
      <path
        d="M6 31C6 28.2 8.2 25.8 11 25.8"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {/* Right Person */}
      <circle cx="33" cy="16" r="3.8" stroke="currentColor" strokeWidth="2.4" />
      <path
        d="M33 25.8C35.8 25.8 38 28.2 38 31"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function QualityIcon({ className = 'w-10 h-10 text-[#F57E20]' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="22" cy="22" r="6.5" stroke="currentColor" strokeWidth="2.8" />
      <path
        d="M22 7V11M22 33V37M7 22H11M33 22H37M11.4 11.4L14.2 14.2M29.8 29.8L32.6 32.6M11.4 32.6L14.2 29.8M29.8 14.2L32.6 11.4"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GrowthIcon({ className = 'w-10 h-10 text-[#F57E20]' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Upward trend line and arrow */}
      <path
        d="M10 25L19 16L26 21L36 11"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29 11H36V18"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* 3 Ascending Bar Charts */}
      <rect
        x="8"
        y="28"
        width="5.5"
        height="8"
        rx="2"
        fill="currentColor"
      />
      <rect
        x="18"
        y="23"
        width="5.5"
        height="13"
        rx="2"
        fill="currentColor"
      />
      <rect
        x="28"
        y="18"
        width="5.5"
        height="18"
        rx="2"
        fill="currentColor"
      />
    </svg>
  );
}

const coreValues = [
  {
    id: 'innovation',
    title: 'Innovation',
    description: 'We embrace new ideas and technologies.',
    Icon: InnovationIcon,
  },
  {
    id: 'client-centric',
    title: 'Client-Centric',
    description: "Our clients' success is our priority.",
    Icon: ClientCentricIcon,
  },
  {
    id: 'quality',
    title: 'Quality',
    description: 'We deliver excellence in every project.',
    Icon: QualityIcon,
  },
  {
    id: 'growth',
    title: 'Growth',
    description: 'We believe in long-term relationships and progress.',
    Icon: GrowthIcon,
  },
];

export default function CoreValues() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (prefersReducedMotion) return;

      // Header reveal
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      // Cards staggered reveal (per mockup annotation: Staggered Fade Up)
      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        gsap.fromTo(
          cards,
          {
            y: 45,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.15,
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
      id="core-values"
      ref={containerRef}
      className="relative w-full py-20 lg:py-28 bg-[#F8FAFC] font-sans overflow-hidden"
    >
      {/* Ambient subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#F57E20]/[0.025] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* ======================================================== */}
        {/* Section Header: Our Core Values                          */}
        {/* ======================================================== */}
        <div
          ref={headerRef}
          className="text-center max-w-2xl mx-auto mb-14 flex flex-col items-center"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#06182F] tracking-tight leading-[1.2] mb-3">
            Our Core Values
          </h2>

          {/* Orange Accent Bar */}
          <div className="w-12 h-1 bg-[#F57E20] rounded-full mx-auto mb-4" />

          {/* Subtitle */}
          <p className="font-body text-[#566579] text-base sm:text-lg font-normal leading-relaxed">
            The principles that drive everything we do.
          </p>
        </div>

        {/* ======================================================== */}
        {/* 4 Cards Grid with Staggered Fade Up Entrance             */}
        {/* ======================================================== */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7"
        >
          {coreValues.map(({ id, title, description, Icon }) => (
            <div
              key={id}
              className="group relative bg-white rounded-2xl sm:rounded-[22px] p-7 sm:p-8 border border-[#06182F]/[0.06] hover:border-[#F57E20]/40 shadow-[0_4px_25px_rgba(6,24,47,0.05)] hover:shadow-[0_20px_45px_rgba(6,24,47,0.09)] transition-all duration-400 hover:-translate-y-2 flex flex-col items-center text-center"
            >
              {/* Vibrant Orange Icon */}
              <div className="mb-4 inline-block transform group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-10 h-10 sm:w-11 sm:h-11 text-[#F57E20]" />
              </div>

              {/* Title */}
              <h3 className="font-heading text-xl lg:text-[22px] font-bold text-[#06182F] mb-2.5 tracking-tight">
                {title}
              </h3>

              {/* Description */}
              <p className="font-body text-[#566579] text-sm sm:text-[15px] leading-relaxed font-normal">
                {description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
