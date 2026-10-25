'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Lightbulb,
  FileText,
  Palette,
  Code2,
  CheckCircle2,
  Rocket,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Sparkles,
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// 6 Structured Process Stages mapped DIRECTLY to the illuminated zigzag line waypoints in public/journey-bg.jpg
const journeyStages = [
  {
    step: '01',
    title: 'Understand',
    tagline: 'Discovery & Scope',
    shortDesc: 'Analyze ideas, goals & requirements in detail.',
    points: [
      'Requirement analysis & scope definition',
      'Business goal & stakeholder mapping',
      'Market & competitor research',
    ],
    icon: Lightbulb,
    image: '/journey/stage-1-hd.png',
    // Exact percentage coordinates on the illuminated zigzag line in journey-bg.jpg (16:9)
    xPercent: 42.5,
    yPercent: 87.5,
    blockSide: 'left', // Small block placed on the LEFT of the waypoint
    elevation: '1,200 m',
  },
  {
    step: '02',
    title: 'Plan',
    tagline: 'Strategic Architecture',
    shortDesc: 'Roadmap, tech stack & scalability blueprint.',
    points: [
      'Project planning & sprint milestones',
      'Modern technology stack selection',
      'Risk assessment & architecture',
    ],
    icon: FileText,
    image: '/journey/stage-2-hd.png',
    xPercent: 57.0,
    yPercent: 79.5,
    blockSide: 'right', // Small block placed on the RIGHT of the waypoint
    elevation: '2,400 m',
  },
  {
    step: '03',
    title: 'Design',
    tagline: 'UI/UX & Prototypes',
    shortDesc: 'Intuitive wireframes & interactive mockups.',
    points: [
      'Intuitive UI/UX wireframes & layouts',
      'Brand consistency & design system',
      'Interactive high-fidelity prototypes',
    ],
    icon: Palette,
    image: '/journey/stage-3-hd.png',
    xPercent: 54.4,
    yPercent: 71.5,
    blockSide: 'left', // Small block placed on the LEFT of the waypoint
    elevation: '3,800 m',
  },
  {
    step: '04',
    title: 'Develop',
    tagline: 'Clean Code & Sprints',
    shortDesc: 'Secure, modern agile full-stack engineering.',
    points: [
      'Agile sprints & weekly demo builds',
      'Clean, secure & scalable codebase',
      'Continuous integration & delivery',
    ],
    icon: Code2,
    image: '/journey/stage-4-hd.png',
    xPercent: 63.8,
    yPercent: 62.5,
    blockSide: 'right', // Small block placed on the RIGHT of the waypoint
    elevation: '5,100 m',
  },
  {
    step: '05',
    title: 'Test',
    tagline: 'QA & Security',
    shortDesc: 'End-to-end automated tests & audit checks.',
    points: [
      'Automated & manual QA verification',
      'Speed, responsiveness & SEO tuning',
      'Vulnerability & security penetration',
    ],
    icon: CheckCircle2,
    image: '/journey/stage-5-hd.png',
    xPercent: 63.0,
    yPercent: 45.5,
    blockSide: 'left', // Small block placed on the LEFT of the waypoint
    elevation: '6,600 m',
  },
  {
    step: '06',
    title: 'Launch & Support',
    tagline: 'Digital Summit',
    shortDesc: 'Zero-downtime deployment & ongoing SLA.',
    points: [
      'Zero-downtime production deployment',
      'Team training & documentation handover',
      '24/7 SLA maintenance & scaling',
    ],
    icon: Rocket,
    image: '/journey/stage-6-hd.png',
    xPercent: 74.2,
    yPercent: 25.8,
    blockSide: 'right', // Small block placed on the RIGHT of the waypoint
    elevation: '8,848 m (Summit)',
    isSummit: true,
  },
];

export default function OurJourneySection() {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-advance climb through the 6 points every 5 seconds
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % journeyStages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  // Entrance animations
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.journey-header-anim',
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const currentStage = journeyStages[activeStep];
  const CurrentIcon = currentStage.icon;

  return (
    <section
      ref={sectionRef}
      id="our-journey"
      className="relative w-full bg-[#040C1A] text-white pt-32 sm:pt-40 lg:pt-44 pb-20 sm:pb-28 overflow-hidden select-none"
    >
      {/* Ambient background glow spots */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[350px] bg-[#f57e20]/8 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#f57e20]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ==========================================================
            SECTION HEADER
            Top padding guarantees navbar NEVER covers or touches it!
            ========================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-2xl flex flex-col items-center md:items-start text-center md:text-left mx-auto md:mx-0">
            {/* Eyebrow */}
            <div className="journey-header-anim inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f57e20]/10 border border-[#f57e20]/30 text-xs font-bold uppercase tracking-[0.2em] text-[#f57e20] font-['Space_Grotesk',sans-serif] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#f57e20]" />
              <span>OUR PROVEN JOURNEY</span>
            </div>

            {/* Main Heading */}
            <h2 className="journey-header-anim text-3xl sm:text-4xl lg:text-5xl font-['Space_Grotesk',sans-serif] font-bold text-white tracking-tight leading-[1.15] mb-4 text-center md:text-left">
              A Structured Process <br className="hidden sm:inline" />
              for Your{' '}
              <span className="bg-gradient-to-r from-[#f57e20] via-[#f57e20] to-[#E06714] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(249,185,32,0.4)]">
                Digital Success
              </span>
            </h2>

            {/* Subtitle */}
            <p className="journey-header-anim text-sm sm:text-base text-white/80 font-['Inter',sans-serif] leading-relaxed text-center md:text-left mx-auto md:mx-0">
              We follow a result-driven approach that ensures clarity, quality and long-term growth for your business.
            </p>
          </div>

          {/* Quick milestone selector tabs */}
          <div className="journey-header-anim flex items-center justify-center gap-2 p-1.5 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-md mx-auto md:mx-0">
            {journeyStages.map((stage, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={`tab-${stage.step}`}
                  onClick={() => {
                    setActiveStep(idx);
                    setIsPlaying(false);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#f57e20] to-[#f57e20] text-[#040C1A] shadow-[0_0_15px_rgba(249,185,32,0.5)]'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                  title={`${stage.step} ${stage.title}`}
                >
                  {stage.step}
                </button>
              );
            })}

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              title={isPlaying ? 'Pause auto-climb' : 'Play auto-climb'}
              className="p-1.5 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors ml-1 cursor-pointer"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* ==========================================================
            THE MOUNTAIN EXPEDITION SHOWCASE
            Displays public/journey-bg.jpg with pristine 16:9 ratio.
            Every point on the image's illuminated zigzag line has its
            own SMALL BLOCK placed directly on the side of that line!
            ========================================================== */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.85)] bg-[#040C1A] min-h-[560px] sm:min-h-[640px] lg:min-h-[720px] aspect-[16/9] flex items-center">
          
          {/* Pristine 16:9 Mountain Image (Native aspect ratio preserved, zero stretching) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
            <img
              src="/journey-bg.jpg"
              alt="Zeowl Mountain Expedition Trail"
              className="w-full h-full object-cover object-[70%_center] lg:object-center"
            />
            {/* Subtle soft dark gradient strictly on the far left so the active card has contrast */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(4,12,26,0.92)_0%,rgba(4,12,26,0.65)_35%,rgba(4,12,26,0.15)_55%,transparent_70%)] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040C1A]/80 via-transparent to-[#040C1A]/30 pointer-events-none" />
          </div>

          {/* ========================================================
              ACTIVE STAGE DETAIL CARD (Positioned on the Left Sky)
              Shows rich deliverables & preview for the currently selected stage
              ======================================================== */}
          <div className="relative z-10 w-full max-w-md lg:max-w-lg px-5 sm:px-8 py-6 pointer-events-auto">
            <div
              className="rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-all duration-300 border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              style={{
                background: 'rgba(5, 17, 33, 0.92)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}
            >
              {/* Card Eyebrow */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#f57e20] animate-pulse" />
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#f57e20]">
                    MILESTONE {currentStage.step} OF 06
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-white/80 border border-white/10">
                  {currentStage.elevation}
                </span>
              </div>

              {/* Title & Icon */}
              <div className="flex items-center gap-3.5 mb-2.5">
                <div className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center text-[#E06714] shadow-md shrink-0">
                  <CurrentIcon className="w-5 h-5 text-[#E06714]" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-['Space_Grotesk',sans-serif] text-white">
                    {currentStage.title}
                  </h3>
                  <p className="text-xs text-[#f57e20] font-['Space_Grotesk',sans-serif] font-medium">
                    {currentStage.tagline}
                  </p>
                </div>
              </div>

              {/* Short Description */}
              <p className="text-xs sm:text-[13px] text-white/85 font-['Inter',sans-serif] leading-relaxed mb-3.5">
                {currentStage.shortDesc}
              </p>

              {/* Deliverables + Thumbnail Split */}
              <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-3.5 pt-3 border-t border-white/10 mb-4">
                <div className="flex-1 min-w-0">
                  <ul className="space-y-1.5">
                    {currentStage.points.map((pt, i) => (
                      <li
                        key={i}
                        className="flex items-start text-[11px] sm:text-xs text-white/90 font-['Inter',sans-serif] leading-tight"
                      >
                        <span className="text-[#f57e20] text-[9px] mr-2 shrink-0 select-none mt-0.5">
                          ◆
                        </span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-full sm:w-[120px] h-[85px] sm:h-auto rounded-xl overflow-hidden border border-white/15 shrink-0 shadow-md relative">
                  <img
                    src={currentStage.image}
                    alt={currentStage.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => {
                      setActiveStep((prev) =>
                        prev === 0 ? journeyStages.length - 1 : prev - 1
                      );
                      setIsPlaying(false);
                    }}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white/80 hover:text-white transition-colors cursor-pointer"
                    title="Previous milestone"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      setActiveStep((prev) => (prev + 1) % journeyStages.length);
                      setIsPlaying(false);
                    }}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white/80 hover:text-white transition-colors cursor-pointer"
                    title="Next milestone"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {currentStage.isSummit ? (
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#f57e20] via-[#f57e20] to-[#E06714] text-[#040C1A] font-['Space_Grotesk',sans-serif] font-bold text-xs hover:shadow-[0_0_15px_rgba(249,185,32,0.6)] hover:scale-105 transition-all cursor-pointer"
                  >
                    <span>Reach The Summit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <button
                    onClick={() => {
                      setActiveStep((prev) => (prev + 1) % journeyStages.length);
                      setIsPlaying(false);
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-[#f57e20] text-white hover:text-[#040C1A] font-['Space_Grotesk',sans-serif] font-bold text-xs transition-all cursor-pointer"
                  >
                    <span>Next: {journeyStages[(activeStep + 1) % journeyStages.length].title}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* ========================================================
              THE 6 WAYPOINTS & SMALL BLOCKS ON THE IMAGE'S ZIGZAG LINE
              Each point on the illuminated line in journey-bg.jpg has its
              own compact, stylish small block placed on its side!
              ======================================================== */}
          {journeyStages.map((stage, idx) => {
            const isSelected = activeStep === idx;
            const IconComponent = stage.icon;
            const isLeft = stage.blockSide === 'left';

            return (
              <div
                key={`mountain-node-${stage.step}`}
                style={{
                  left: `${stage.xPercent}%`,
                  top: `${stage.yPercent}%`,
                }}
                className="absolute z-20 pointer-events-auto"
              >
                {/* 1. WAYPOINT PIN (Directly on top of the glowing dot in the image) */}
                <button
                  onClick={() => {
                    setActiveStep(idx);
                    setIsPlaying(false);
                  }}
                  className="relative -translate-x-1/2 -translate-y-1/2 cursor-pointer focus:outline-none group"
                  title={`Milestone ${stage.step}: ${stage.title} (${stage.elevation})`}
                >
                  {/* Pulsing halo when selected */}
                  {isSelected && (
                    <>
                      <span className="absolute -inset-3.5 rounded-full bg-[#f57e20]/40 animate-ping pointer-events-none" />
                      <span className="absolute -inset-2 rounded-full bg-[#f57e20]/50 blur-sm pointer-events-none" />
                    </>
                  )}

                  {/* Waypoint circle pin */}
                  <div
                    className={`relative flex items-center justify-center rounded-full font-mono font-bold transition-all duration-300 ${
                      isSelected
                        ? 'w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#f57e20] to-[#E06714] text-[#040C1A] text-xs sm:text-sm shadow-[0_0_25px_rgba(249,185,32,1)] scale-110 border-2 border-white'
                        : 'w-6 h-6 sm:w-7 sm:h-7 bg-[#040C1A]/90 hover:bg-[#f57e20] text-white hover:text-[#040C1A] text-[10px] sm:text-xs border border-[#f57e20] shadow-[0_0_12px_rgba(249,185,32,0.5)] hover:scale-110'
                    }`}
                  >
                    <span>{stage.step}</span>
                  </div>
                </button>

                {/* 2. SMALL BLOCK (Placed directly on the side of that line point) */}
                <div
                  onClick={() => {
                    setActiveStep(idx);
                    setIsPlaying(false);
                  }}
                  className={`hidden sm:flex absolute items-center gap-2.5 p-2 sm:p-2.5 rounded-xl sm:rounded-2xl transition-all duration-300 cursor-pointer ${
                    isLeft
                      ? '-translate-x-full -translate-y-1/2 -ml-3 sm:-ml-4'
                      : 'translate-x-3 sm:translate-x-4 -translate-y-1/2'
                  } ${
                    isSelected
                      ? 'bg-[#07192F]/95 border-2 border-[#f57e20] shadow-[0_0_25px_rgba(249,185,32,0.4)] scale-105 z-30'
                      : 'bg-[#07192F]/85 border border-white/15 hover:border-[#f57e20]/60 hover:bg-[#07192F]/95 shadow-[0_10px_25px_rgba(0,0,0,0.6)] z-20'
                  }`}
                  style={{
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    width: 'max-content',
                    maxWidth: '190px',
                  }}
                >
                  {/* Small icon badge */}
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 shadow-sm ${
                      isSelected
                        ? 'bg-[#f57e20] text-[#040C1A]'
                        : 'bg-white/10 text-[#f57e20]'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </div>

                  {/* Title & Short Tag */}
                  <div className="min-w-0 pr-1">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono font-bold text-[#f57e20]">
                        {stage.step}
                      </span>
                      <span className="text-[9px] font-mono text-white/50">
                        {stage.elevation}
                      </span>
                    </div>
                    <div className="text-xs font-bold font-['Space_Grotesk',sans-serif] text-white truncate leading-tight">
                      {stage.title}
                    </div>
                    <div className="text-[10px] text-white/70 font-['Inter',sans-serif] truncate leading-tight">
                      {stage.tagline}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}

        </div>

        {/* ==========================================================
            COMPLETE 6-STAGE ROADMAP (ALL BLOCKS IN CLEAN GRID)
            ========================================================== */}
        <div className="mt-16 sm:mt-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#f57e20] mb-1">
                DETAILED ROADMAP
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk',sans-serif] text-white">
                All 6 Milestones at a Glance
              </h3>
            </div>
            <div className="hidden sm:block text-xs text-white/60 font-mono">
              Basecamp ➔ Digital Summit
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {journeyStages.map((stage, idx) => {
              const StageIcon = stage.icon;
              const isSelected = activeStep === idx;

              return (
                <div
                  key={`card-grid-${stage.step}`}
                  onClick={() => {
                    setActiveStep(idx);
                    setIsPlaying(false);
                  }}
                  className={`group relative rounded-2xl p-5 sm:p-6 transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'border-2 border-[#f57e20] bg-[#07192F] shadow-[0_12px_40px_rgba(249,185,32,0.25)]'
                      : 'border border-white/10 bg-[#07192F]/60 hover:bg-[#07192F]/90 hover:border-white/20 shadow-md'
                  }`}
                  style={{
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#f57e20] group-hover:bg-[#f57e20] group-hover:text-[#040C1A] transition-colors">
                      <StageIcon className="w-5 h-5" />
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono font-bold text-[#f57e20]">
                        {stage.step}
                      </span>
                      <div className="text-[10px] text-white/50 font-mono">
                        {stage.elevation}
                      </div>
                    </div>
                  </div>

                  <h4 className="text-lg font-bold font-['Space_Grotesk',sans-serif] text-white mb-1">
                    {stage.title}
                  </h4>
                  <div className="text-xs text-[#f57e20] font-medium mb-3">
                    {stage.tagline}
                  </div>

                  <p className="text-xs text-white/70 font-['Inter',sans-serif] leading-relaxed mb-4">
                    {stage.shortDesc}
                  </p>

                  <ul className="space-y-1 pt-3 border-t border-white/10">
                    {stage.points.map((pt, i) => (
                      <li
                        key={i}
                        className="flex items-start text-[11px] text-white/80 font-['Inter',sans-serif] leading-tight"
                      >
                        <span className="text-[#f57e20] text-[8px] mr-1.5 mt-0.5 select-none">
                          ◆
                        </span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* ==========================================================
            SUMMIT CALLOUT & CTA SECTION
            ========================================================== */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-white/10 flex flex-col items-center text-center">
          <div className="text-[#f57e20] font-['Caveat',cursive] text-2xl sm:text-3xl font-bold rotate-[-2deg] mb-2 drop-shadow-[0_2px_12px_rgba(249,185,32,0.45)]">
            Not Just Development — A Long-Term Digital Partnership
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-['Space_Grotesk',sans-serif] font-bold text-white mb-4 max-w-xl">
            Ready to Take Your Project From Spark to Summit?
          </h3>

          <p className="text-sm sm:text-base text-white/75 font-['Inter',sans-serif] max-w-lg mb-8">
            Tell us about your project vision and let our expert engineering team map out your blueprint today.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#f57e20] via-[#f57e20] to-[#E06714] text-[#040C1A] font-['Space_Grotesk',sans-serif] font-bold text-sm sm:text-base hover:shadow-[0_0_30px_rgba(249,185,32,0.6)] hover:scale-105 transition-all duration-300 group cursor-pointer"
          >
            <span>Start Your Transformation Journey</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
