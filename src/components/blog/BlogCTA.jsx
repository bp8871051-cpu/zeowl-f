'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Lightbulb, Settings, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';

const valuePillars = [
  {
    icon: Lightbulb,
    title: 'Practical Insights',
    description: 'Real-world technology and business insights you can actually apply.',
  },
  {
    icon: Settings,
    title: 'Future Ready',
    description: 'Stay updated with emerging technologies, AI and digital trends.',
  },
  {
    icon: TrendingUp,
    title: 'Business Focused',
    description: 'We focus on technology that creates measurable business value.',
  },
];

export default function BlogCTA() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-white font-sans text-[#06182f] overflow-hidden">
      <div className="max-w-[1420px] w-[92%] mx-auto relative z-10 flex flex-col gap-10 lg:gap-12">
        {/* ========================================================================= */}
        {/* 1. TOP ROW: "WHY ZEOWL INSIGHTS" + 3 FEATURE PILLARS                      */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
        >
          {/* Left: Heading & Eyebrow */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <div className="flex items-center gap-2 mb-2 select-none">
              <span className="text-[#f57e20] text-xs font-mono font-bold tracking-wider uppercase">
                WHY ZEOWL INSIGHTS
              </span>
              <span className="w-8 h-[2px] bg-[#f57e20] rounded-full inline-block" />
            </div>

            <h3 className="font-heading font-black text-3xl sm:text-4xl text-[#06182f] tracking-tight leading-[1.12]">
              Learn. Build. <br />
              <span className="text-[#f57e20]">Grow Smarter.</span>
            </h3>
          </div>

          {/* Right: 3 Value Pillar Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {valuePillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-[#06182f]/[0.06] hover:border-[#f57e20]/40 shadow-xs hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-full bg-white border border-[#06182f]/[0.08] shadow-xs flex items-center justify-center text-[#f57e20] shrink-0 group-hover:scale-110 group-hover:bg-[#f57e20] group-hover:text-white transition-all duration-300">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm sm:text-base text-[#06182f] mb-1">
                      {pillar.title}
                    </h4>
                    <p className="font-body text-xs sm:text-[13px] text-[#64748B] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* 2. BOTTOM BANNER: "Get Digital Insights." WITH ARTWORK BACKGROUND         */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[24px] sm:rounded-[30px] overflow-hidden border border-[#06182f]/10 shadow-[0_20px_50px_rgba(6,24,47,0.18)] min-h-[140px] sm:min-h-[155px] p-6 sm:p-8 lg:p-10 flex items-center bg-[#06182f]"
        >
          {/* Panoramic Energy Trail & Origami Paper Airplane Artwork Background */}
          <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
            <Image
              src="/blog/digital-insights-bg.png"
              alt="Digital Insights Energy Wave with Paper Airplane Background"
              fill
              priority
              sizes="(max-width: 1440px) 100vw, 1420px"
              className="object-cover object-center select-none filter contrast-[1.05]"
            />
            {/* Ambient Dark Gradient Overlays for maximum text & form contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#06182f]/95 via-[#06182f]/70 to-[#06182f]/20 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06182f]/85 via-transparent to-[#06182f]/30 pointer-events-none" />
          </div>

          {/* Banner Content Container */}
          <div className="relative z-10 w-full flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8">
            {/* Left: Heading & Subtitle */}
            <div className="text-left max-w-xl">
              <h3 className="font-heading font-black text-2xl sm:text-3xl lg:text-[32px] text-white tracking-tight leading-snug drop-shadow-sm">
                Get Digital Insights.
              </h3>
              <p className="font-body text-white/85 text-xs sm:text-sm lg:text-[15px] leading-relaxed mt-1.5 font-normal drop-shadow-sm">
                Receive useful technology, AI and business insights directly in your inbox.
              </p>
            </div>

            {/* Right: Newsletter Input Form */}
            <div className="flex flex-col items-center lg:items-end w-full lg:w-auto">
              {subscribed ? (
                <div className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500/25 border border-emerald-400/40 text-emerald-100 text-xs sm:text-sm font-bold backdrop-blur-md">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Subscribed successfully! Watch your inbox.</span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full sm:w-[260px] md:w-[290px] lg:w-[320px] px-5 py-3.5 rounded-full bg-white text-[#06182f] placeholder-[#94A3B8] text-xs sm:text-sm outline-none shadow-md font-medium border border-transparent focus:border-[#f57e20] transition-colors"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#f57e20] hover:bg-white text-white hover:text-[#06182f] font-bold text-xs sm:text-sm rounded-full shadow-[0_8px_20px_rgba(245,126,32,0.4)] transition-all duration-300 group cursor-pointer shrink-0 hover:scale-[1.02]"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
              <span className="text-white/70 text-[11px] font-medium mt-2 select-none">
                No spam. Only useful insights.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
