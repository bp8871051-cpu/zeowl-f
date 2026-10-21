'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Clock,
  ChevronDown,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { submitContact } from '@/lib/api';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const serviceOptions = [
  'Website Development',
  'Web Application',
  'Mobile App Development',
  'Software Development',
  'AI Automation',
  'Digital Marketing',
  'UI/UX Design',
  'Branding & Design',
  'Video & Animation',
  'Other',
];

const trustPoints = [
  {
    number: '01',
    title: 'QUICK RESPONSE',
    description: 'We respond within 24 hours.',
  },
  {
    number: '02',
    title: 'FREE CONSULTATION',
    description: 'Discuss your idea with our experts.',
  },
  {
    number: '03',
    title: 'EXPERT GUIDANCE',
    description: 'From idea to execution, we help you choose the right solution.',
  },
];

export default function ContactSection({ isTopSection = false }) {
  const containerRef = useRef(null);
  const leftContentRef = useRef(null);
  const formCardRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Smooth GSAP Entrance Animations
  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (prefersReducedMotion) return;

      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
      });

      // Animate Left Column elements sequentially
      if (leftContentRef.current) {
        const eyebrow = leftContentRef.current.querySelector('.hero-eyebrow');
        const heading = leftContentRef.current.querySelector('.hero-heading');
        const desc = leftContentRef.current.querySelector('.hero-desc');
        const trustCards = leftContentRef.current.querySelectorAll('.trust-card');

        if (eyebrow) {
          tl.fromTo(
            eyebrow,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, delay: 0.1 }
          );
        }

        if (heading) {
          tl.fromTo(
            heading,
            { opacity: 0, y: 35 },
            { opacity: 1, y: 0, duration: 0.85 },
            '-=0.35'
          );
        }

        if (desc) {
          tl.fromTo(
            desc,
            { opacity: 0, y: 25 },
            { opacity: 1, y: 0, duration: 0.7 },
            '-=0.45'
          );
        }

        if (trustCards && trustCards.length > 0) {
          tl.fromTo(
            trustCards,
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.65, stagger: 0.12 },
            '-=0.35'
          );
        }
      }

      // Animate Right Form Card entrance
      if (formCardRef.current) {
        tl.fromTo(
          formCardRef.current,
          { opacity: 0, y: 40, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.9 },
          '-=0.7'
        );
      }
    },
    { scope: containerRef }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      await submitContact(formData);
      setIsSubmitted(true);
    } catch (err) {
      console.error('Contact submission error:', err);
      setErrorMessage(
        err.message ||
          'Unable to submit your inquiry right now. Please try again or email us directly at info.zeowlinfotech@gmail.com'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
    setErrorMessage('');
    setIsSubmitted(false);
  };

  return (
    <section
      id="contact-section"
      ref={containerRef}
      className={`relative w-full ${
        isTopSection
          ? 'pt-10 sm:pt-14 lg:pt-16 pb-16 sm:pb-20 lg:pb-28'
          : 'py-16 sm:py-20 lg:py-28'
      } overflow-hidden font-sans`}
    >
      {/* ======================================================== */}
      {/* 1. EXISTING BACKGROUND LAYER (PRESERVED UNCHANGED)       */}
      {/* Artwork, paper airplane, glass shapes & gradient blend   */}
      {/* ======================================================== */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <img
          src="/contact-bg.png"
          alt="Zeowl Contact Us Background"
          className="w-full h-full object-cover object-[75%_center] lg:object-right-top block opacity-40 sm:opacity-65 lg:opacity-100 transition-opacity duration-300"
          loading="eager"
        />
        {/* Responsive mobile/tablet background protective overlay */}
        <div className="absolute inset-0 bg-white/80 sm:bg-white/60 lg:bg-transparent pointer-events-none" />
        {/* Directional gradient mask: vertical blend on mobile, horizontal on desktop */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/70 lg:bg-gradient-to-r lg:from-white/95 lg:via-white/70 lg:to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </div>

      <div className="max-w-[1400px] w-[92%] mx-auto relative z-10">
        {/* Breadcrumb if top section */}
        {isTopSection && (
          <div className="flex items-center gap-2 text-xs font-semibold text-[#64748B] mb-8 tracking-wider uppercase">
            <Link href="/" className="hover:text-[#f57e20] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#f57e20]">Contact Us</span>
          </div>
        )}

        {/* 2-Column Responsive Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
          {/* ==================================================== */}
          {/* LEFT CONTENT: HEADINGS, INTRO & 3 VALUE POINTS       */}
          {/* ==================================================== */}
          <div ref={leftContentRef} className="lg:col-span-6 xl:col-span-6">
            {/* Small eyebrow */}
            <div className="hero-eyebrow inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#f57e20]/30 shadow-sm text-xs font-bold text-[#f57e20] uppercase tracking-[0.2em] mb-5 backdrop-blur-md font-button">
              <Sparkles className="w-3.5 h-3.5 text-[#f57e20]" />
              <span>CONTACT US</span>
            </div>

            {/* Main heading */}
            <h1 className="hero-heading font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-[#06182f] tracking-tight leading-[1.12] mb-5">
              Let’s Build Something <br className="hidden sm:inline" />
              Great <span className="text-[#f57e20]">Together.</span>
            </h1>

            {/* Description */}
            <p className="hero-desc font-body text-[#475569] text-base sm:text-lg leading-relaxed max-w-xl mb-10">
              Have a project in mind, a business challenge to solve, or simply an idea you want to explore?
              Tell us what you’re looking for. Our team will help you find the right technology, strategy, and solution to turn your idea into real impact.
            </p>

            {/* 3 Compact Trust / Value Points */}
            <div className="space-y-3.5 max-w-xl">
              {trustPoints.map((point) => (
                <div
                  key={point.number}
                  className="trust-card group flex items-start gap-4 p-4 sm:p-4.5 rounded-2xl bg-white/80 backdrop-blur-md border border-neutral-200/80 hover:border-[#f57e20]/50 hover:bg-white transition-all duration-300 shadow-[0_4px_20px_rgba(22,43,83,0.03)] hover:shadow-[0_8px_25px_rgba(249,185,32,0.12)]"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#06182f] text-[#f57e20] font-mono-tech font-bold text-xs flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-300">
                    {point.number}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading text-xs sm:text-sm font-bold uppercase tracking-wider text-[#06182f] group-hover:text-[#f57e20] transition-colors duration-200">
                      {point.title}
                    </h4>
                    <p className="font-body text-xs sm:text-sm text-[#64748B] mt-0.5 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ==================================================== */}
          {/* RIGHT FORM CARD: HIGH-CONVERTING PROJECT INQUIRY     */}
          {/* ==================================================== */}
          <div ref={formCardRef} className="lg:col-span-6 xl:col-span-6">
            <div
              id="contact-form"
              className="relative rounded-[24px] bg-white/95 backdrop-blur-2xl border border-neutral-200/70 shadow-[0_25px_60px_rgba(22,43,83,0.08)] p-6 sm:p-8 lg:p-9 transition-all duration-300"
            >
              {isSubmitted ? (
                /* Success Feedback State */
                <div className="py-10 text-center flex flex-col items-center justify-center">
                  <div className="w-18 h-18 rounded-full bg-[#f57e20]/15 border border-[#f57e20]/30 flex items-center justify-center text-[#f57e20] mb-5 shadow-[0_0_30px_rgba(249,185,32,0.25)]">
                    <CheckCircle2 className="w-9 h-9 text-[#f57e20]" />
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#06182f] mb-2">
                    Inquiry Received!
                  </h3>

                  <p className="font-body text-[#475569] text-sm sm:text-base max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you, <span className="font-semibold text-[#06182f]">{formData.name || 'there'}</span>.
                    Our technical team will review your project details and get back to you shortly within 24 hours.
                  </p>

                  <div className="p-4 rounded-xl bg-[#F7F8FA] border border-neutral-200/70 max-w-sm w-full mb-7 text-left text-xs text-[#475569] space-y-1.5">
                    <div className="font-semibold text-[#06182f]">Inquiry Summary:</div>
                    {formData.service && <div>Service: {formData.service}</div>}
                    <div>Email: {formData.email}</div>
                    {formData.phone && <div>Phone: {formData.phone}</div>}
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="font-button px-6 py-3 rounded-full bg-[#06182f] hover:bg-[#f57e20] text-white hover:text-[#06182f] text-sm font-bold transition-all duration-300 shadow-md cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                /* Active Project Inquiry Form */
                <>
                  <div className="mb-6">
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#06182f] tracking-tight mb-2">
                      Tell Us About Your Project
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-[#64748B] leading-relaxed">
                      Share a few details about your project. We’ll get back to you shortly.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="mb-4 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs sm:text-sm flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    {/* 2-Column Responsive Inputs on Desktop / 1-Column Mobile */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block font-button text-xs font-bold text-[#06182f] uppercase tracking-wider mb-2"
                        >
                          Full Name <span className="text-[#f57e20]">*</span>
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          required
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-[#F7F8FA] hover:bg-neutral-100/70 focus:bg-white border border-neutral-200/90 rounded-xl text-sm font-body text-[#06182f] placeholder-[#94A3B8] focus:outline-none focus:border-[#f57e20] focus:ring-2 focus:ring-[#f57e20]/20 transition-all duration-200"
                        />
                      </div>

                      {/* Business Email */}
                      <div>
                        <label
                          htmlFor="businessEmail"
                          className="block font-button text-xs font-bold text-[#06182f] uppercase tracking-wider mb-2"
                        >
                          Business Email <span className="text-[#f57e20]">*</span>
                        </label>
                        <input
                          id="businessEmail"
                          type="email"
                          required
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-[#F7F8FA] hover:bg-neutral-100/70 focus:bg-white border border-neutral-200/90 rounded-xl text-sm font-body text-[#06182f] placeholder-[#94A3B8] focus:outline-none focus:border-[#f57e20] focus:ring-2 focus:ring-[#f57e20]/20 transition-all duration-200"
                        />
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label
                          htmlFor="phoneNumber"
                          className="block font-button text-xs font-bold text-[#06182f] uppercase tracking-wider mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          id="phoneNumber"
                          type="tel"
                          placeholder="+91 Enter phone number"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-[#F7F8FA] hover:bg-neutral-100/70 focus:bg-white border border-neutral-200/90 rounded-xl text-sm font-body text-[#06182f] placeholder-[#94A3B8] focus:outline-none focus:border-[#f57e20] focus:ring-2 focus:ring-[#f57e20]/20 transition-all duration-200"
                        />
                      </div>

                      {/* Service Dropdown */}
                      <div>
                        <label
                          htmlFor="serviceSelect"
                          className="block font-button text-xs font-bold text-[#06182f] uppercase tracking-wider mb-2"
                        >
                          Service <span className="text-[#f57e20]">*</span>
                        </label>
                        <div className="relative">
                          <select
                            id="serviceSelect"
                            required
                            value={formData.service}
                            onChange={(e) =>
                              setFormData({ ...formData, service: e.target.value })
                            }
                            className="w-full px-4 py-3 bg-[#F7F8FA] hover:bg-neutral-100/70 focus:bg-white border border-neutral-200/90 rounded-xl text-sm font-body text-[#06182f] focus:outline-none focus:border-[#f57e20] focus:ring-2 focus:ring-[#f57e20]/20 transition-all duration-200 appearance-none cursor-pointer pr-10"
                          >
                            <option value="" disabled className="text-[#94A3B8]">
                              Select a service
                            </option>
                            {serviceOptions.map((opt) => (
                              <option key={opt} value={opt} className="text-[#06182f]">
                                {opt}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B] pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {/* Project Message */}
                    <div>
                      <label
                        htmlFor="projectMessage"
                        className="block font-button text-xs font-bold text-[#06182f] uppercase tracking-wider mb-2"
                      >
                        Project Message <span className="text-[#f57e20]">*</span>
                      </label>
                      <textarea
                        id="projectMessage"
                        required
                        rows={4}
                        placeholder="Describe your requirements, goals, budget, or timeline..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-3.5 bg-[#F7F8FA] hover:bg-neutral-100/70 focus:bg-white border border-neutral-200/90 rounded-xl text-sm font-body text-[#06182f] placeholder-[#94A3B8] focus:outline-none focus:border-[#f57e20] focus:ring-2 focus:ring-[#f57e20]/20 transition-all duration-200 resize-none"
                      />
                    </div>

                    {/* CTA & Trust Indicators */}
                    <div className="pt-2 space-y-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="font-button w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#f57e20] hover:bg-[#06182f] text-white font-extrabold text-sm sm:text-base rounded-full shadow-[0_10px_25px_rgba(245,126,32,0.35)] hover:shadow-[0_10px_25px_rgba(6,24,47,0.3)] transition-all duration-300 group cursor-pointer disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                            <span>Submitting Inquiry...</span>
                          </div>
                        ) : (
                          <>
                            <span>Send Project Inquiry</span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </>
                        )}
                      </button>

                      {/* Small Trust & Response Time Notes */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] sm:text-xs text-[#64748B] pt-1">
                        <div className="flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Your information is safe with us.</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#f57e20] shrink-0" />
                          <span>Usually replies within 24 hours</span>
                        </div>
                      </div>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
