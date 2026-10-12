'use client';

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  HeartPulse,
  GraduationCap,
  Building2,
  DollarSign,
  ShoppingCart,
  Factory,
  Hotel,
  Cpu,
  Rocket,
  Briefcase,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { industriesData } from '@/data/servicesData';

const industryIcons = {
  healthcare: HeartPulse,
  education: GraduationCap,
  'real-estate': Building2,
  finance: DollarSign,
  'e-commerce': ShoppingCart,
  manufacturing: Factory,
  hospitality: Hotel,
  technology: Cpu,
  startups: Rocket,
  'professional-services': Briefcase,
};

export default function IndustriesServedSection() {
  const [activeIndustryId, setActiveIndustryId] = useState(industriesData[0].id);
  const sectionRef = useRef(null);
  const previewRef = useRef(null);

  const activeIndustry =
    industriesData.find((ind) => ind.id === activeIndustryId) || industriesData[0];
  const ActiveIcon = industryIcons[activeIndustry.id] || Sparkles;

  // Smooth transition for preview panel on industry change
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.fromTo(
      previewRef.current,
      { opacity: 0.6, scale: 0.97, y: 15 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'power3.out' }
    );
  }, [activeIndustryId]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-[#071A2F] text-white overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] rounded-full bg-[#F47B20]/10 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-[600px] h-[600px] rounded-full bg-[#00A3FF]/10 blur-[160px] pointer-events-none" />

      <div className="max-w-[88rem] w-full mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono-tech uppercase tracking-widest text-[#F47B20] font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-[#F47B20]" />
            <span>CROSS-DOMAIN EXPERTISE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-white mb-4">
            Solutions For Every Industry
          </h2>
          <p className="text-white/70 font-body text-base sm:text-lg">
            Deep domain knowledge tailored to sector compliance, customer behaviors, and monetization models.
          </p>
        </div>

        {/* Interactive Layout: List on Left, Dynamic Preview on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: 10 Interactive Industry Selectors */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {industriesData.map((ind) => {
              const Icon = industryIcons[ind.id] || Sparkles;
              const isActive = ind.id === activeIndustryId;

              return (
                <div
                  key={ind.id}
                  onMouseEnter={() => setActiveIndustryId(ind.id)}
                  onClick={() => setActiveIndustryId(ind.id)}
                  className={`group p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-[#F47B20] text-white border-[#F47B20] shadow-[0_10px_30px_rgba(244,123,32,0.4)] translate-x-1.5'
                      : 'bg-white/[0.04] text-white/80 border-white/10 hover:border-[#F47B20]/50 hover:bg-white/[0.08]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-white/5 text-[#F47B20] group-hover:bg-[#F47B20]/20'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-base sm:text-lg font-heading font-bold">
                        {ind.name}
                      </div>
                      <div
                        className={`text-[10px] font-mono-tech ${
                          isActive ? 'text-white/80' : 'text-white/40'
                        }`}
                      >
                        {ind.tag}
                      </div>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? 'translate-x-1 text-white' : 'text-white/20 group-hover:text-white/60'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Right Column: Large Dynamic Visual Area */}
          <div className="lg:col-span-5 relative">
            <div
              ref={previewRef}
              className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0B2544] via-[#091F38] to-[#071A2F] border border-white/15 shadow-[0_30px_80px_rgba(0,0,0,0.5)] flex flex-col justify-between min-h-[420px] overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#F47B20]/20 blur-[90px] pointer-events-none" />

              <div>
                {/* Active Icon & Category */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#F47B20]/15 border border-[#F47B20]/30 text-[#F47B20] flex items-center justify-center shadow-[0_0_20px_rgba(244,123,32,0.3)]">
                    <ActiveIcon className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-mono-tech border border-white/10">
                    {activeIndustry.tag}
                  </span>
                </div>

                {/* Industry Title */}
                <h3 className="text-3xl sm:text-4xl font-heading font-black text-white mb-4">
                  {activeIndustry.name}
                </h3>

                {/* Description */}
                <p className="text-base text-white/80 font-body leading-relaxed mb-8">
                  {activeIndustry.description}
                </p>
              </div>

              {/* Verified Result Metric */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-mono-tech text-white/50 uppercase">
                    Industry Benchmark
                  </div>
                  <div className="text-xl font-heading font-extrabold text-[#F47B20] mt-0.5">
                    {activeIndustry.stat}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono-tech text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
