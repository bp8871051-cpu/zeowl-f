'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import {
  Code2,
  Sparkles,
  Layers,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Smartphone,
  Globe,
  BarChart3,
  Terminal,
} from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function ServicesHero() {
  const heroRef = useRef(null);
  const leftContentRef = useRef(null);
  const headingRef = useRef(null);
  const workspaceRef = useRef(null);
  const floatCard1 = useRef(null);
  const floatCard2 = useRef(null);
  const floatCard3 = useRef(null);
  const floatCard4 = useRef(null);
  const svgLinesRef = useRef(null);

  // Counter numbers
  const counterClients = useRef(null);
  const counterProjects = useRef(null);
  const counterSatisfaction = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      // 1. Entrance sequence for text elements
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-stagger-item',
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, delay: 0.2 }
      );

      // 2. Counters animation
      if (counterClients.current) {
        gsap.fromTo(
          { val: 0 },
          { val: 500 },
          {
            val: 500,
            duration: 2.2,
            ease: 'power2.out',
            onUpdate: function () {
              if (counterClients.current) {
                counterClients.current.textContent = Math.floor(this.targets()[0].val) + '+';
              }
            },
          }
        );
      }

      if (counterProjects.current) {
        gsap.fromTo(
          { val: 0 },
          { val: 1000 },
          {
            val: 1000,
            duration: 2.4,
            ease: 'power2.out',
            onUpdate: function () {
              if (counterProjects.current) {
                counterProjects.current.textContent =
                  Math.floor(this.targets()[0].val).toLocaleString() + '+';
              }
            },
          }
        );
      }

      if (counterSatisfaction.current) {
        gsap.fromTo(
          { val: 0 },
          { val: 98 },
          {
            val: 98,
            duration: 2.0,
            ease: 'power2.out',
            onUpdate: function () {
              if (counterSatisfaction.current) {
                counterSatisfaction.current.textContent =
                  Math.floor(this.targets()[0].val) + '%';
              }
            },
          }
        );
      }

      // 3. Workspace 3D entrance
      if (!prefersReducedMotion && workspaceRef.current) {
        gsap.fromTo(
          workspaceRef.current,
          { opacity: 0, scale: 0.9, rotateX: 12, rotateY: -14, y: 40 },
          { opacity: 1, scale: 1, rotateX: 5, rotateY: -6, y: 0, duration: 1.4, ease: 'power4.out', delay: 0.3 }
        );

        // 4. Independent floating motions for cards
        const floatCards = [
          { ref: floatCard1.current, y: 12, duration: 3.2, delay: 0 },
          { ref: floatCard2.current, y: -15, duration: 3.8, delay: 0.4 },
          { ref: floatCard3.current, y: 14, duration: 3.5, delay: 0.8 },
          { ref: floatCard4.current, y: -12, duration: 4.1, delay: 1.2 },
        ];

        floatCards.forEach(({ ref, y, duration, delay }) => {
          if (ref) {
            gsap.to(ref, {
              y: y,
              rotation: y > 0 ? 1.5 : -1.5,
              duration: duration,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
              delay: delay,
            });
          }
        });

        // 5. Subtle mouse parallax on hero visual
        const handleMouseMove = (e) => {
          const { clientX, clientY } = e;
          const xPercent = (clientX / window.innerWidth - 0.5) * 16;
          const yPercent = (clientY / window.innerHeight - 0.5) * 16;

          gsap.to(workspaceRef.current, {
            rotateY: -6 + xPercent * 0.8,
            rotateX: 5 - yPercent * 0.8,
            x: xPercent * 1.2,
            y: yPercent * 1.2,
            duration: 0.8,
            ease: 'power2.out',
          });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-[92vh] flex items-center justify-center pt-12 sm:pt-16 lg:pt-20 pb-20 px-6 lg:px-12 bg-gradient-to-b from-[#071A2F] via-[#09223F] to-[#0B2A4A] text-white overflow-hidden"
    >
      {/* Ambient background glows and grid lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full blur-[140px] opacity-25"
          style={{
            background: 'radial-gradient(circle, #F47B20 0%, rgba(7, 26, 47, 0) 70%)',
          }}
        />
        <div
          className="absolute top-1/3 -right-32 w-[700px] h-[700px] rounded-full blur-[160px] opacity-20"
          style={{
            background: 'radial-gradient(circle, #00A3FF 0%, rgba(7, 26, 47, 0) 70%)',
          }}
        />
        <div
          className="absolute -bottom-40 left-1/3 w-[800px] h-[400px] rounded-full blur-[180px] opacity-20"
          style={{
            background: 'radial-gradient(circle, #F47B20 0%, rgba(7, 26, 47, 0) 75%)',
          }}
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="max-w-[88rem] w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* ========================================================================= */}
        {/* LEFT COLUMN: HERO CONTENT                                                 */}
        {/* ========================================================================= */}
        <div ref={leftContentRef} className="lg:col-span-6 flex flex-col justify-center">
          {/* Eyebrow badge */}
          <div className="hero-stagger-item inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/15 backdrop-blur-md w-fit mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#F47B20] animate-pulse shadow-[0_0_8px_#F47B20]" />
            <span className="text-xs font-mono-tech tracking-wider uppercase text-white/90 font-medium">
              OUR SERVICES
            </span>
          </div>

          {/* Main Heading */}
          <h1
            ref={headingRef}
            className="hero-stagger-item text-4xl sm:text-5xl xl:text-6xl font-heading font-extrabold tracking-tight text-white leading-[1.1] mb-6"
          >
            Powering Businesses <br />
            With <span className="text-[#F47B20] relative inline-block">
              Digital Solutions
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-[#F47B20]/40 -z-10"
                viewBox="0 0 200 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8C50 2 150 2 198 8"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="hero-stagger-item text-base sm:text-lg text-white/75 font-body leading-relaxed max-w-xl mb-9">
            From websites and software to AI automation and digital growth, we build powerful digital solutions that help businesses move faster, work smarter and grow with confidence.
          </p>

          {/* CTA Buttons */}
          <div className="hero-stagger-item flex flex-wrap items-center gap-4 mb-12">
            <MagneticButton
              href="#services-grid"
              className="px-7 py-3.5 bg-[#F47B20] hover:bg-[#ff8930] text-white rounded-full shadow-[0_10px_30px_rgba(244,123,32,0.35)] hover:shadow-[0_15px_35px_rgba(244,123,32,0.5)] transition-all flex items-center gap-2 group text-sm md:text-base"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </MagneticButton>

            <MagneticButton
              href="/contact"
              className="px-7 py-3.5 bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/35 rounded-full backdrop-blur-md transition-all text-sm md:text-base"
            >
              <span>Talk To Our Experts</span>
            </MagneticButton>
          </div>

          {/* Trust Row Counters */}
          <div className="hero-stagger-item pt-8 border-t border-white/10 grid grid-cols-3 gap-4 sm:gap-6">
            <div>
              <div
                ref={counterClients}
                className="text-2xl sm:text-3xl font-heading font-extrabold text-white"
              >
                500+
              </div>
              <div className="text-xs sm:text-sm text-white/60 font-body mt-0.5">
                Happy Clients
              </div>
            </div>

            <div>
              <div
                ref={counterProjects}
                className="text-2xl sm:text-3xl font-heading font-extrabold text-white"
              >
                1,000+
              </div>
              <div className="text-xs sm:text-sm text-white/60 font-body mt-0.5">
                Projects Delivered
              </div>
            </div>

            <div>
              <div
                ref={counterSatisfaction}
                className="text-2xl sm:text-3xl font-heading font-extrabold text-[#F47B20]"
              >
                98%
              </div>
              <div className="text-xs sm:text-sm text-white/60 font-body mt-0.5">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* RIGHT COLUMN: 3D DIGITAL WORKSPACE VISUAL                                 */}
        {/* ========================================================================= */}
        <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] sm:min-h-[540px] lg:min-h-[600px] perspective-[1200px]">
          {/* Animated Orange Connecting SVG Lines */}
          <svg
            ref={svgLinesRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
            viewBox="0 0 600 600"
            fill="none"
          >
            <defs>
              <linearGradient id="heroOrangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F47B20" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#FFA654" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#00A3FF" stopOpacity="0.2" />
              </linearGradient>
              <filter id="glowOrange" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Connecting curve 1: From IDE to AI Node */}
            <path
              d="M 120 180 C 180 120, 320 110, 440 160"
              stroke="url(#heroOrangeGrad)"
              strokeWidth="2"
              strokeDasharray="4 4"
              className="animate-pulse"
            />
            {/* Connecting curve 2: From IDE to Mobile Node */}
            <path
              d="M 160 380 C 220 440, 360 460, 460 390"
              stroke="url(#heroOrangeGrad)"
              strokeWidth="2"
              strokeDasharray="5 3"
            />
            {/* Connecting curve 3: Diagonal cross link */}
            <path
              d="M 110 320 Q 300 280 480 230"
              stroke="#F47B20"
              strokeWidth="1.5"
              strokeOpacity="0.4"
            />
          </svg>

          {/* 3D Workspace Stage */}
          <div
            ref={workspaceRef}
            style={{ transformStyle: 'preserve-3d' }}
            className="relative w-full max-w-[540px] aspect-[4/3] rounded-2xl transition-transform duration-200"
          >
            {/* Center Core: Laptop/Desktop Interface Window */}
            <div className="absolute inset-4 sm:inset-6 bg-[#071A2F]/90 backdrop-blur-xl border border-white/20 rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col z-20">
              {/* Window Header / Window Controls */}
              <div className="px-4 py-3 bg-[#051426]/95 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-2 text-xs font-mono-tech text-white/60 bg-white/5 px-3 py-1 rounded-md border border-white/5">
                  <Globe className="w-3.5 h-3.5 text-[#F47B20]" />
                  <span>zeowl.cloud/production</span>
                </div>
                <div className="w-12 flex justify-end">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                </div>
              </div>

              {/* Window Body: High-tech Dashboard & Code Preview */}
              <div className="flex-1 p-4 grid grid-cols-12 gap-3 text-xs overflow-hidden bg-gradient-to-br from-[#06182F] to-[#0A2645]">
                {/* Left Mini Code Panel */}
                <div className="col-span-7 bg-[#030E1C]/90 rounded-lg p-3 font-mono-tech text-white/80 border border-white/5 flex flex-col justify-between overflow-hidden">
                  <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2 text-[11px] text-white/50">
                    <span className="flex items-center gap-1.5">
                      <Terminal className="w-3 h-3 text-[#F47B20]" />
                      App.engine.tsx
                    </span>
                    <span className="text-[#F47B20] text-[10px]">LIVE</span>
                  </div>
                  <div className="space-y-1 text-[11px] leading-relaxed">
                    <div className="text-white/40">// Zeowl Digital Platform</div>
                    <div>
                      <span className="text-purple-400">const</span>{' '}
                      <span className="text-blue-300">app</span> ={' '}
                      <span className="text-amber-300">await</span>{' '}
                      <span className="text-emerald-400">zeowl.deploy</span>({'{'}
                    </div>
                    <div className="pl-3">
                      <span className="text-white/70">aiAutomation:</span>{' '}
                      <span className="text-[#F47B20]">true</span>,
                    </div>
                    <div className="pl-3">
                      <span className="text-white/70">speedIndex:</span>{' '}
                      <span className="text-emerald-400">'0.4s'</span>,
                    </div>
                    <div className="pl-3">
                      <span className="text-white/70">uptime:</span>{' '}
                      <span className="text-blue-400">'99.99%'</span>
                    </div>
                    <div>{'}'});</div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-emerald-400">
                    <span>✓ Build 0 errors</span>
                    <span className="text-white/40">Next.js v16</span>
                  </div>
                </div>

                {/* Right Mini Live Analytics Gauge */}
                <div className="col-span-5 flex flex-col gap-2.5">
                  <div className="bg-[#030E1C]/90 rounded-lg p-3 border border-white/5 flex-1 flex flex-col justify-between">
                    <div className="flex items-center justify-between text-[11px] text-white/60">
                      <span>Conversion</span>
                      <BarChart3 className="w-3.5 h-3.5 text-[#F47B20]" />
                    </div>
                    <div className="text-lg font-heading font-bold text-white my-1">
                      +185.4%
                    </div>
                    {/* Simulated SVG Sparkline */}
                    <svg className="w-full h-8 overflow-visible" viewBox="0 0 100 30" fill="none">
                      <path
                        d="M 0 25 Q 25 22, 45 14 T 75 10 T 100 3"
                        stroke="#F47B20"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 0 25 Q 25 22, 45 14 T 75 10 T 100 3 L 100 30 L 0 30 Z"
                        fill="url(#sparklineGrad)"
                        opacity="0.25"
                      />
                      <defs>
                        <linearGradient id="sparklineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#F47B20" />
                          <stop offset="100%" stopColor="#F47B20" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  <div className="bg-[#030E1C]/90 rounded-lg p-2.5 border border-white/5 flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-md bg-[#F47B20]/15 flex items-center justify-center text-[#F47B20]">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-white/50">AI Orchestration</div>
                      <div className="text-xs font-semibold text-white">Autonomous</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING CARD 1: Web Development (Top Left) */}
            <div
              ref={floatCard1}
              style={{ transform: 'translateZ(40px)' }}
              className="absolute -top-4 -left-4 sm:-left-8 z-30 px-4 py-3 bg-[#0B233C]/90 backdrop-blur-xl border border-white/20 rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.5)] flex items-center gap-3 hover:border-[#F47B20]/60 transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-[#F47B20]/20 flex items-center justify-center text-[#F47B20] border border-[#F47B20]/30 shadow-[0_0_12px_rgba(244,123,32,0.4)]">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-heading font-bold text-white whitespace-nowrap">
                  Web Development
                </div>
                <div className="text-[10px] text-emerald-400 font-mono-tech flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Ultra Performance
                </div>
              </div>
            </div>

            {/* FLOATING CARD 2: AI Automation (Top Right) */}
            <div
              ref={floatCard2}
              style={{ transform: 'translateZ(55px)' }}
              className="absolute -top-6 -right-2 sm:-right-6 z-30 px-4 py-3 bg-[#091D33]/90 backdrop-blur-xl border border-white/20 rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.5)] flex items-center gap-3 hover:border-[#F47B20]/60 transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30 shadow-[0_0_12px_rgba(59,130,246,0.4)]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-heading font-bold text-white whitespace-nowrap">
                  AI Automation
                </div>
                <div className="text-[10px] text-blue-300 font-mono-tech">
                  Smart Pipelines
                </div>
              </div>
            </div>

            {/* FLOATING CARD 3: UI/UX Design (Bottom Left) */}
            <div
              ref={floatCard3}
              style={{ transform: 'translateZ(50px)' }}
              className="absolute -bottom-6 -left-3 sm:-left-6 z-30 px-4 py-3 bg-[#0A223A]/90 backdrop-blur-xl border border-white/20 rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.5)] flex items-center gap-3 hover:border-[#F47B20]/60 transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 border border-purple-500/30 shadow-[0_0_12px_rgba(168,85,247,0.4)]">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-heading font-bold text-white whitespace-nowrap">
                  UI/UX Design
                </div>
                <div className="text-[10px] text-purple-300 font-mono-tech">
                  Human-Centered
                </div>
              </div>
            </div>

            {/* FLOATING CARD 4: Digital Marketing (Bottom Right) */}
            <div
              ref={floatCard4}
              style={{ transform: 'translateZ(60px)' }}
              className="absolute -bottom-5 -right-3 sm:-right-6 z-30 px-4 py-3 bg-[#0B253F]/90 backdrop-blur-xl border border-white/20 rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.5)] flex items-center gap-3 hover:border-[#F47B20]/60 transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-[#F47B20]/20 flex items-center justify-center text-[#F47B20] border border-[#F47B20]/30 shadow-[0_0_12px_rgba(244,123,32,0.4)]">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-heading font-bold text-white whitespace-nowrap">
                  Digital Marketing
                </div>
                <div className="text-[10px] text-[#F47B20] font-mono-tech">
                  High-Impact ROAS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
