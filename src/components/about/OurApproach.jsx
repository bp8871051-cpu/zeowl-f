'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Compass,
  Map,
  Palette,
  Code2,
  Rocket,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    number: '01',
    title: 'Discover',
    icon: Compass,
    description:
      'We begin with deep research into your business goals, target audience, technical constraints, and competitive landscape to establish clear product objectives.',
  },
  {
    number: '02',
    title: 'Strategize',
    icon: Map,
    description:
      'We formulate a comprehensive engineering roadmap, selecting the optimal architecture, defining milestone deliverables, and planning agile sprint cadences.',
  },
  {
    number: '03',
    title: 'Design',
    icon: Palette,
    description:
      'Our UI/UX team transforms wireframes into cohesive, high-fidelity interfaces and interactive prototypes that prioritize frictionless user journeys.',
  },
  {
    number: '04',
    title: 'Develop',
    icon: Code2,
    description:
      'Full-stack engineering utilizing clean, modular code, microservices, robust APIs, and continuous integration pipelines for high performance.',
  },
  {
    number: '05',
    title: 'Deliver',
    icon: Rocket,
    description:
      'End-to-end quality assurance, load testing, security audits, and smooth deployment to production infrastructure with zero disruption.',
  },
  {
    number: '06',
    title: 'Grow',
    icon: TrendingUp,
    description:
      'Continuous technical optimization, telemetry monitoring, iterative enhancements, and proactive support to help your product scale sustainably.',
  },
];

export default function OurApproach() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const stepsGridRef = useRef(null);

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

      // Steps stagger animation with GSAP ScrollTrigger
      if (stepsGridRef.current) {
        const stepCards = stepsGridRef.current.children;
        gsap.fromTo(
          stepCards,
          { y: 50, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            stagger: 0.14,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: stepsGridRef.current,
              start: 'top 80%',
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
      id="our-approach"
      ref={containerRef}
      className="relative w-full py-20 lg:py-32 bg-white font-sans overflow-hidden"
    >
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#06182F06_1px,transparent_1px),linear-gradient(to_bottom,#06182F06_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-[#F57E20]/[0.025] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div
          ref={headerRef}
          className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-[2px] bg-[#F57E20] rounded-full" />
            <span className="text-[#F57E20] uppercase tracking-[0.2em] text-xs font-bold">
              OUR METHODOLOGY
            </span>
            <div className="w-6 h-[2px] bg-[#F57E20] rounded-full" />
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-[#06182F] tracking-tight leading-[1.15] mb-4">
            Our Approach
          </h2>

          <p className="font-body text-[#566579] text-base sm:text-lg leading-relaxed font-normal">
            A structured, collaborative six-step journey from initial concept to
            sustainable digital scale.
          </p>
        </div>

        {/* 6 Steps Grid: 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div
          ref={stepsGridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {steps.map((step, index) => {
            const IconComp = step.icon;
            const isEven = index % 2 === 1;

            return (
              <div
                key={step.number}
                className="group relative bg-[#F7F9FC] rounded-[2rem] p-8 sm:p-9 border border-[#06182F]/[0.08] hover:border-[#F57E20]/50 hover:bg-white shadow-[0_8px_25px_rgba(6,24,47,0.03)] hover:shadow-[0_20px_50px_rgba(245,126,32,0.12)] transition-all duration-400 hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* Step Top Bar: Icon + Number */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-white border border-[#06182F]/[0.08] flex items-center justify-center text-[#F57E20] shadow-[0_4px_15px_rgba(6,24,47,0.05)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#F57E20] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(245,126,32,0.3)]">
                      <IconComp className="w-6 h-6" strokeWidth={1.8} />
                    </div>

                    <span className="font-heading text-3xl sm:text-4xl font-black text-[#06182F]/20 group-hover:text-[#F57E20] transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#06182F] mb-3 tracking-tight flex items-center gap-2">
                    <span>{step.title}</span>
                  </h3>

                  {/* Description */}
                  <p className="font-body text-[#566579] text-sm sm:text-base leading-[1.75] font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="mt-8 pt-4 border-t border-[#06182F]/[0.06] flex items-center justify-between text-xs font-bold text-[#06182F]/40 group-hover:text-[#F57E20] transition-colors">
                  <span className="uppercase tracking-wider">STAGE {step.number}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
