'use client';

import React from 'react';

const clientBrands = [
  { name: 'TATA', style: 'font-black tracking-widest text-lg sm:text-xl font-sans' },
  { name: 'adani', style: 'font-bold tracking-tight text-xl sm:text-2xl font-sans lowercase' },
  { name: 'Infosys', style: 'font-medium tracking-tight text-xl sm:text-2xl font-serif' },
  { name: 'LARSEN & TOUBRO', style: 'font-extrabold tracking-wider text-xs sm:text-sm uppercase' },
  { name: 'Reliance Industries Limited', style: 'font-bold text-xs sm:text-sm tracking-normal' },
  { name: 'wipro', style: 'font-semibold tracking-wider text-lg sm:text-xl lowercase' },
  { name: 'Mahindra', style: 'font-bold tracking-normal text-base sm:text-lg' },
  { name: 'Jio', style: 'font-black tracking-tighter text-xl sm:text-2xl italic' },
  { name: 'DHL', style: 'font-black italic tracking-widest text-xl sm:text-2xl text-red-600' },
  { name: 'SIEMENS', style: 'font-black tracking-widest text-sm sm:text-base uppercase text-teal-700' },
];

export default function TrustedLogosSection() {
  return (
    <section className="relative w-full py-10 sm:py-14 bg-white border-y border-slate-100 overflow-hidden font-sans">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="w-8 h-[1.5px] bg-[#FF7900]" />
          <span className="text-[#FF7900] font-bold text-xs sm:text-xs uppercase tracking-[0.25em]">
            TRUSTED BY BUSINESSES WORLDWIDE
          </span>
          <span className="w-8 h-[1.5px] bg-[#FF7900]" />
        </div>

        {/* Brand Logos Row */}
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-6 sm:gap-8 lg:gap-10 opacity-70 hover:opacity-100 transition-opacity duration-300">
          {clientBrands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center py-2 px-3 text-[#0F2D59] hover:text-[#FF7900] transition-colors duration-200 select-none cursor-default grayscale hover:grayscale-0"
              title={brand.name}
            >
              <span className={brand.style}>{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
