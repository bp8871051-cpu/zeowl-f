'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Code,
  Cpu,
  Palette,
  ArrowRight,
  CheckCircle2,
  Activity,
  Layers,
  Sparkles,
  BarChart2,
  Workflow,
  ShieldCheck,
} from 'lucide-react';
import { featuredServicesData } from '@/data/servicesData';
import MagneticButton from './MagneticButton';

export default function FeaturedServicesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);
  const panelsContainerRef = useRef(null);
  const textContentRef = useRef(null);
  const visualContentRef = useRef(null);

  const current = featuredServicesData[activeTab];

  // GSAP animation when activeTab changes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.fromTo(
      textContentRef.current,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' }
    );

    gsap.fromTo(
      visualContentRef.current,
      { opacity: 0, scale: 0.94, rotateY: 8 },
      { opacity: 1, scale: 1, rotateY: 0, duration: 0.7, ease: 'expo.out' }
    );
  }, [activeTab]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-[#071A2F] text-white overflow-hidden"
    >
      {/* Dynamic Background Glows based on tab */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div
          className="absolute -top-40 -left-40 w-[650px] h-[650px] rounded-full blur-[160px] opacity-25 transition-all duration-1000"
          style={{
            background:
              activeTab === 0
                ? 'radial-gradient(circle, #00A3FF 0%, transparent 70%)'
                : activeTab === 1
                ? 'radial-gradient(circle, #F47B20 0%, transparent 70%)'
                : 'radial-gradient(circle, #A855F7 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[650px] h-[650px] rounded-full blur-[160px] opacity-20"
          style={{
            background: 'radial-gradient(circle, #F47B20 0%, transparent 70%)',
          }}
        />

        {/* Ambient Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-[88rem] w-full mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono-tech uppercase tracking-widest text-[#F47B20] font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#F47B20]" />
            <span>FEATURED HIGHLIGHTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-white mb-4">
            Digital Solutions Built Around Your Goals
          </h2>
          <p className="text-white/70 font-body text-base sm:text-lg">
            High-leverage engineering blocks calibrated for rapid velocity and resilient scalability.
          </p>

          {/* Interactive Tab Switcher */}
          <div className="mt-10 inline-flex flex-wrap justify-center p-1.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-xl">
            {featuredServicesData.map((item, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  className={`px-5 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-button font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#F47B20] text-white shadow-[0_4px_20px_rgba(244,123,32,0.4)]'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Featured Panel */}
        <div
          ref={panelsContainerRef}
          className="relative rounded-3xl bg-gradient-to-br from-[#09223F]/90 via-[#0B2A4E]/80 to-[#071A2F]/90 border border-white/15 backdrop-blur-2xl shadow-[0_30px_90px_rgba(0,0,0,0.5)] p-8 sm:p-12 lg:p-16 overflow-hidden"
        >
          {/* Subtle Top Indicator Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F47B20] to-transparent opacity-80" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Content Column */}
            <div ref={textContentRef} className="lg:col-span-6 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-xs font-mono-tech text-[#F47B20] font-semibold tracking-wider uppercase mb-3">
                <span className="w-2 h-2 rounded-full bg-[#F47B20] animate-pulse" />
                <span>{current.category}</span>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-[1.15] mb-6">
                {current.tagline}
              </h3>

              <p className="text-base sm:text-lg text-white/75 font-body leading-relaxed mb-8">
                {current.description}
              </p>

              {/* Metric Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center gap-4 mb-8 w-fit">
                <div className="text-3xl sm:text-4xl font-heading font-black text-[#F47B20]">
                  {current.metrics.value}
                </div>
                <div className="text-xs sm:text-sm text-white/80 font-body">
                  {current.metrics.label}
                </div>
              </div>

              {/* Technology Tags */}
              <div className="mb-10">
                <div className="text-xs font-mono-tech text-white/40 uppercase tracking-widest mb-3">
                  Core Technologies
                </div>
                <div className="flex flex-wrap gap-2">
                  {current.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-lg bg-white/10 text-white/90 text-xs font-mono-tech border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <MagneticButton
                  href={current.link}
                  className="px-7 py-3.5 bg-[#F47B20] hover:bg-[#ff8930] text-white rounded-full shadow-[0_10px_30px_rgba(244,123,32,0.35)] flex items-center gap-2 text-sm sm:text-base group"
                >
                  <span>Explore {current.category}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </MagneticButton>
              </div>
            </div>

            {/* Right Visual Column */}
            <div
              ref={visualContentRef}
              className="lg:col-span-6 relative flex items-center justify-center"
            >
              {activeTab === 0 && (
                /* WEB & SOFTWARE VISUAL: Code Canvas & System Architecture */
                <div className="w-full max-w-lg aspect-[4/3] rounded-2xl bg-[#030E1C] border border-white/15 p-6 shadow-2xl flex flex-col justify-between font-mono-tech text-xs relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/80" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-white/40 text-[11px]">web-platform-runtime.ts</span>
                    <span className="text-[#F47B20] font-semibold text-[10px]">99.99% SLA</span>
                  </div>

                  <div className="space-y-2 py-4 text-white/80 leading-relaxed">
                    <p className="text-white/40">// Zero latency enterprise pipeline</p>
                    <p>
                      <span className="text-purple-400">export const</span>{' '}
                      <span className="text-blue-400">createPlatform</span> ={' '}
                      <span className="text-yellow-400">async</span> () =&gt; {'{'}
                    </p>
                    <p className="pl-4">
                      <span className="text-white/60">framework:</span>{' '}
                      <span className="text-emerald-400">'Next.js App Router'</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-white/60">database:</span>{' '}
                      <span className="text-blue-300">'PostgreSQL High-Availability'</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-white/60">edgeRuntime:</span>{' '}
                      <span className="text-[#F47B20]">true</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-white/60">medianResponse:</span>{' '}
                      <span className="text-emerald-400">'38ms'</span>
                    </p>
                    <p>{'}'};</p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px]">
                    <span className="text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      Turbopack Cluster Active
                    </span>
                    <span className="text-white/40">HTTP/3 Quic Ready</span>
                  </div>
                </div>
              )}

              {activeTab === 1 && (
                /* AI & AUTOMATION VISUAL: Neural Nodes & Workflow Pipeline */
                <div className="w-full max-w-lg aspect-[4/3] rounded-2xl bg-[#030E1C] border border-white/15 p-6 shadow-2xl flex flex-col justify-between font-mono-tech text-xs relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2 text-white/80">
                      <Workflow className="w-4 h-4 text-[#F47B20]" />
                      <span className="font-bold">Autonomous Orchestration</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px]">
                      RUNNING
                    </span>
                  </div>

                  {/* Flow pipeline nodes */}
                  <div className="space-y-3 py-3">
                    <div className="p-3 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-400" />
                        <span className="text-white/90">Event Trigger: Customer Inbound</span>
                      </div>
                      <span className="text-white/40 text-[10px]">Webhook</span>
                    </div>

                    <div className="flex justify-center -my-1 text-[#F47B20]">↓</div>

                    <div className="p-3 rounded-xl bg-[#F47B20]/15 border border-[#F47B20]/30 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-[#F47B20] animate-spin" />
                        <span className="text-white font-semibold">LLM Triage &amp; Vector Lookup</span>
                      </div>
                      <span className="text-[#F47B20] text-[10px]">GPT-4o</span>
                    </div>

                    <div className="flex justify-center -my-1 text-[#F47B20]">↓</div>

                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span className="text-white/90">Automated Resolution &amp; Sync</span>
                      </div>
                      <span className="text-emerald-400 text-[10px]">65% Cost Saved</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 text-white/50 text-[11px] flex justify-between">
                    <span>1,420 workflows processed today</span>
                    <span className="text-[#F47B20]">0 human errors</span>
                  </div>
                </div>
              )}

              {activeTab === 2 && (
                /* DESIGN & MARKETING VISUAL: Growth Analytics & Funnel Gauge */
                <div className="w-full max-w-lg aspect-[4/3] rounded-2xl bg-[#030E1C] border border-white/15 p-6 shadow-2xl flex flex-col justify-between font-mono-tech text-xs relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2 text-white/80">
                      <BarChart2 className="w-4 h-4 text-[#F47B20]" />
                      <span className="font-bold">Conversion Engine Analytics</span>
                    </div>
                    <span className="text-[#F47B20] text-[11px] font-bold">4.2x ROAS</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 py-4">
                    <div className="p-4 rounded-xl bg-white/[0.05] border border-white/10">
                      <div className="text-[11px] text-white/50 mb-1">CTR Lift</div>
                      <div className="text-2xl font-heading font-extrabold text-white">+240%</div>
                      <div className="text-[10px] text-emerald-400 mt-1">▲ vs industry avg</div>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.05] border border-white/10">
                      <div className="text-[11px] text-white/50 mb-1">Cost Per Acquisition</div>
                      <div className="text-2xl font-heading font-extrabold text-[#F47B20]">-48%</div>
                      <div className="text-[10px] text-emerald-400 mt-1">▼ highly efficient</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F47B20]/10 border border-[#F47B20]/20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Palette className="w-4 h-4 text-[#F47B20]" />
                      <span className="text-white text-xs font-semibold">Design System Tokenization</span>
                    </div>
                    <span className="text-[10px] text-white/60">Figma to Code</span>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex justify-between text-white/40 text-[11px]">
                    <span>Real-time attribution model</span>
                    <span className="text-emerald-400">High Intent Funnels</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
