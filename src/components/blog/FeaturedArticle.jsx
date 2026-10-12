'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

export default function FeaturedArticle() {
  return (
    <section className="relative w-full pt-2 pb-12 lg:pt-4 lg:pb-16 bg-white font-sans text-white overflow-hidden">
      <div className="max-w-[1420px] w-[92%] mx-auto relative z-10">
        {/* Banner Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden border border-[#06182f]/10 shadow-[0_20px_50px_rgba(6,24,47,0.18)] min-h-[420px] lg:min-h-[460px] flex items-center bg-[#06182f] group"
        >
          {/* ========================================================================= */}
          {/* 1. BACKGROUND AI ROBOT & HOLOGRAPHIC LAPTOP ARTWORK                       */}
          {/* ========================================================================= */}
          <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
            <motion.div
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full"
            >
              <Image
                src="/blog/featured-ai-robot.jpg"
                alt="How AI Automation Is Transforming Modern Businesses"
                fill
                priority
                sizes="(max-width: 1440px) 100vw, 1420px"
                className="object-cover object-left sm:object-left lg:object-left select-none filter contrast-[1.04]"
              />
            </motion.div>

            {/* Gradient Overlays: Keeps robot crisp on the left, dark backdrop for text on the right */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#06182f] via-[#06182f]/80 to-transparent lg:hidden pointer-events-none" />
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-transparent via-[#06182f]/70 via-45% to-[#06182f]/95 pointer-events-none" />
            <div className="hidden lg:block absolute inset-y-0 right-0 w-2/3 bg-gradient-to-r from-transparent via-[#06182f]/90 to-[#06182f] pointer-events-none" />
          </div>

          {/* ========================================================================= */}
          {/* 2. FOREGROUND CONTENT (Positioned on the Right Half)                      */}
          {/* ========================================================================= */}
          <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 items-center p-6 sm:p-10 lg:p-14">
            {/* Left Column Spacer on desktop so the Robot is fully visible */}
            <div className="hidden lg:block lg:col-span-5 pointer-events-none" />

            {/* Right Column: Featured Badges, Title, Excerpt, Author Meta & Action */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 flex flex-col justify-center text-left pl-0 lg:pl-6"
            >
              {/* Top Badges: [FEATURED] pill + Category Label */}
              <div className="flex items-center gap-3 mb-4 select-none">
                <motion.span
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="px-3.5 py-1 rounded-full bg-[#f57e20] text-white text-[11px] sm:text-xs font-mono font-bold tracking-wider uppercase shadow-[0_2px_12px_rgba(245,126,32,0.4)]"
                >
                  FEATURED
                </motion.span>
                <span className="text-white/90 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider">
                  AI &amp; AUTOMATION
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-[1.18] mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
                How AI Automation Is Transforming Modern Businesses
              </h2>

              {/* Description / Excerpt */}
              <p className="font-body text-white/85 text-sm sm:text-base leading-relaxed mb-6 max-w-xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)] font-normal">
                Discover how AI-powered workflows can reduce repetitive work,
                improve efficiency and help businesses scale faster.
              </p>

              {/* Author & Meta Row */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-white/80 font-medium mb-7">
                {/* Author Avatar + Name */}
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#f57e20] text-white flex items-center justify-center text-xs font-black shadow-xs">
                    Z
                  </div>
                  <span className="font-bold text-white tracking-wide">
                    By ZEOWL INFOTECH
                  </span>
                </div>

                <span className="text-white/40 hidden sm:inline">|</span>

                {/* Date */}
                <div className="flex items-center gap-1.5 text-white/80">
                  <Calendar className="w-3.5 h-3.5 text-[#f57e20]" />
                  <span>Oct 7, 2026</span>
                </div>

                <span className="text-white/40 hidden sm:inline">|</span>

                {/* Read Time */}
                <div className="flex items-center gap-1.5 text-white/80">
                  <Clock className="w-3.5 h-3.5 text-[#f57e20]" />
                  <span>8 min read</span>
                </div>
              </div>

              {/* Read Article Button */}
              <div>
                <Link
                  href="/blog/ai-automation-transforming-businesses"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#f57e20] hover:bg-white text-white hover:text-[#06182f] font-bold text-sm sm:text-base rounded-full shadow-[0_10px_25px_rgba(245,126,32,0.4)] transition-all duration-300 group/btn cursor-pointer hover:scale-[1.02]"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5] group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
