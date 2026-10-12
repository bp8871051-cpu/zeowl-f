'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, Play } from 'lucide-react';

export default function TestimonialsHero() {
  return (
    <section className="relative w-full pt-10 sm:pt-14 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 overflow-hidden bg-white text-[#0A1C30] font-sans">
      {/* ======================================================== */}
      {/* 1. Background Artwork Layer (User-Provided Exact Asset)  */}
      {/* ======================================================== */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <img
          src="/testimonials/testimonials-hero-bg.png"
          alt=""
          className="w-full h-full object-cover object-right-top sm:object-right lg:object-center select-none"
        />
        {/* Soft white gradient blend on mobile/left to ensure 100% text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:hidden pointer-events-none" />
      </div>

      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[460px] lg:min-h-[520px]">
          {/* ======================================================== */}
          {/* Left Column: Heading & Value Proposition                 */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-start text-left">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-[#FF7900]" />
              <span className="text-[#FF7900] font-bold text-xs sm:text-sm uppercase tracking-[0.25em]">
                CLIENT TESTIMONIALS
              </span>
              <span className="w-8 h-[2px] bg-[#FF7900]" />
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-black text-[#0A1C30] tracking-tight leading-[1.08] mb-6">
              Building Success <br />
              <span className="text-[#FF7900]">Together</span>
            </h1>

            {/* Subtitle */}
            <p className="font-body text-[#475569] text-base sm:text-lg lg:text-[18px] leading-relaxed font-normal mb-8 max-w-xl">
              Don&apos;t just take our word for it. Here&apos;s what our clients say about
              working with Zeowl Infotech. Real stories. Real results. Real partnerships.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <Link
                href="/contact"
                className="font-button inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 bg-[#FF7900] text-white font-bold text-sm sm:text-base rounded-full shadow-[0_10px_25px_rgba(255,121,0,0.38)] hover:bg-[#0A1C30] hover:shadow-[0_12px_30px_rgba(10,28,48,0.25)] transition-all duration-300 group cursor-pointer"
              >
                <span>Let&apos;s Work Together</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/portfolio"
                className="font-button inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 bg-white text-[#0A1C30] border border-slate-300 font-semibold text-sm sm:text-base rounded-full hover:border-[#FF7900] hover:text-[#FF7900] transition-all duration-300 shadow-xs cursor-pointer"
              >
                <span>View Our Work</span>
              </Link>
            </div>
          </div>

          {/* ======================================================== */}
          {/* Right Column: Floating Testimonial Card & Play Story CTA */}
          {/* ======================================================== */}
          <div className="lg:col-span-6 xl:col-span-7 relative h-full min-h-[360px] sm:min-h-[420px] flex items-center justify-end">
            {/* 1. Floating Testimonial Card (Rahul Mehta) */}
            <div className="relative lg:absolute lg:top-8 lg:left-0 xl:left-8 w-full sm:w-[360px] bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(10,28,48,0.12)] border border-slate-100 transform hover:-translate-y-1 transition-transform duration-300 z-20">
              {/* Quote Icon */}
              <span className="text-[#FF7900] text-4xl sm:text-5xl font-serif leading-none block mb-2 select-none">
                &ldquo;
              </span>

              {/* Quote Body */}
              <p className="text-[#1E293B] text-sm sm:text-[15px] font-medium leading-relaxed mb-5">
                &ldquo;Amazing team to work with! They delivered exactly what we needed
                and more.&rdquo;
              </p>

              {/* Author Row */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <img
                  src="/testimonials/avatar-rahul.jpg"
                  alt="Rahul Mehta"
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#FF7900]/30 shadow-xs"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-[#0A1C30] text-sm leading-tight">
                    Rahul Mehta
                  </h4>
                  <p className="text-slate-500 text-xs font-normal">
                    Business Owner
                  </p>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-0.5 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-[#FF7900] text-[#FF7900]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Floating Video Play Badge & Handwritten Annotation */}
            <div className="hidden sm:flex absolute bottom-8 sm:bottom-12 right-2 sm:right-6 lg:right-4 xl:right-10 items-center gap-3 z-20 bg-white/90 backdrop-blur-md py-2.5 px-4 rounded-full shadow-[0_12px_30px_rgba(0,0,0,0.08)] border border-white">
              <button
                type="button"
                className="w-11 h-11 rounded-full bg-[#FF7900] text-white flex items-center justify-center shadow-[0_6px_20px_rgba(255,121,0,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                aria-label="Watch client success story"
              >
                <Play className="w-5 h-5 fill-white text-white translate-x-0.5" />
              </button>
              <div className="flex flex-col">
                <span className="font-serif italic text-xs text-slate-500 leading-none">
                  Client
                </span>
                <span className="font-bold text-[#0A1C30] text-sm leading-tight">
                  Success Story
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
