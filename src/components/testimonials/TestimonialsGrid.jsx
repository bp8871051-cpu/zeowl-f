'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const mockTestimonials = [
  {
    id: 1,
    name: 'Jay Patel',
    role: 'Founder, Patel Construction',
    avatar: '/testimonials/avatar-jay.jpg',
    rating: 5,
    content:
      'Zeowl Infotech delivered our website with excellent quality and on time. Their team is professional, responsive and truly understands business needs.',
  },
  {
    id: 2,
    name: 'Priya Shah',
    role: 'Director, Meridian Estates',
    avatar: '/testimonials/avatar-priya.jpg',
    rating: 5,
    content:
      'Working with Zeowl was a great experience. They built a powerful and user-friendly solution for our business. Highly recommended!',
    featured: true,
  },
  {
    id: 3,
    name: 'Karan Desai',
    role: 'CEO, Digital Creators',
    avatar: '/testimonials/avatar-karan.jpg',
    rating: 5,
    content:
      'Excellent communication, creative design and technical expertise. Zeowl Infotech is a reliable partner for any digital project.',
  },
  {
    id: 4,
    name: 'Rahul Mehta',
    role: 'Business Owner, Mehta Logistics',
    avatar: '/testimonials/avatar-rahul.jpg',
    rating: 5,
    content:
      'Amazing team to work with! They delivered exactly what we needed and more. Their post-launch support and communication are second to none.',
  },
  {
    id: 5,
    name: 'Ananya Sharma',
    role: 'Product Lead, TechNova',
    avatar: '/testimonials/avatar-priya.jpg',
    rating: 5,
    content:
      'Zeowl transformed our outdated mobile app into an intuitive, high-speed modern digital experience. Our user retention has increased by over 40%.',
  },
];

export default function TestimonialsGrid() {
  const [items, setItems] = useState(mockTestimonials);
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  // 3 visible cards window
  const visibleCards = [
    items[startIndex % items.length],
    items[(startIndex + 1) % items.length],
    items[(startIndex + 2) % items.length],
  ];

  return (
    <section className="relative w-full pt-16 pb-4 sm:pt-20 sm:pb-6 lg:pt-24 lg:pb-8 bg-white overflow-hidden font-sans">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* ======================================================== */}
        {/* Header Row: Eyebrow, Heading, Description & Arrows       */}
        {/* ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl text-left">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-[#FF7900]" />
              <span className="text-[#FF7900] font-bold text-xs sm:text-sm uppercase tracking-[0.25em]">
                CLIENT FEEDBACK
              </span>
              <span className="w-8 h-[2px] bg-[#FF7900]" />
            </div>

            {/* Main Heading */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-black text-[#0A1C30] tracking-tight leading-[1.15] mb-4">
              What Our <span className="text-[#FF7900]">Clients</span> Say
            </h2>

            {/* Subtitle */}
            <p className="font-body text-[#475569] text-base sm:text-lg leading-relaxed font-normal">
              We&apos;re proud to have worked with amazing businesses and individuals.
              Here&apos;s what they have to say about their experience with Zeowl Infotech.
            </p>
          </div>

          {/* Slider Arrows */}
          <div className="flex items-center gap-3 self-start md:self-end shrink-0">
            <button
              onClick={handlePrev}
              type="button"
              className="w-12 h-12 rounded-full border border-slate-300 bg-white text-[#0A1C30] flex items-center justify-center hover:border-[#FF7900] hover:text-[#FF7900] hover:bg-orange-50/50 transition-all duration-300 shadow-xs cursor-pointer active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button
              onClick={handleNext}
              type="button"
              className="w-12 h-12 rounded-full bg-[#FF7900] text-white flex items-center justify-center hover:bg-[#0A1C30] transition-all duration-300 shadow-[0_6px_20px_rgba(255,121,0,0.35)] cursor-pointer active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* Testimonials Cards Grid (3 Visible Cards)                */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {visibleCards.map((card, index) => {
            const isCenter = index === 1;
            return (
              <div
                key={`${card.id}-${index}`}
                className={`relative flex flex-col justify-between bg-white rounded-2xl p-7 sm:p-8 transition-all duration-300 group ${
                  isCenter
                    ? 'shadow-[0_20px_50px_rgba(255,121,0,0.12)] border-2 border-[#FF7900]/30 -translate-y-1'
                    : 'shadow-[0_10px_35px_rgba(10,28,48,0.06)] border border-slate-100 hover:shadow-[0_15px_40px_rgba(10,28,48,0.1)] hover:-translate-y-1'
                }`}
              >
                {/* Watermark Quote Mark in Bottom Right */}
                <div
                  className="absolute bottom-4 right-6 text-slate-100 group-hover:text-orange-50 text-8xl font-serif font-black select-none pointer-events-none transition-colors duration-300 leading-none"
                  aria-hidden="true"
                >
                  &rdquo;
                </div>

                <div>
                  {/* Top Quote Icon & 5 Star Rating */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <span className="text-[#FF7900] text-5xl font-serif leading-none select-none">
                      &ldquo;
                    </span>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(card.rating || 5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#FF7900] text-[#FF7900]"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-[#334155] text-base leading-relaxed mb-8 relative z-10 font-normal">
                    {card.content}
                  </p>
                </div>

                {/* Author Profile Row */}
                <div className="flex items-center gap-3.5 pt-5 border-t border-slate-100 relative z-10">
                  <img
                    src={card.avatar}
                    alt={card.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-slate-100 shadow-xs"
                  />
                  <div>
                    <h3 className="font-heading font-bold text-[#0A1C30] text-base leading-snug">
                      {card.name}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm font-normal">
                      {card.role}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
