'use client';

import React, { useState, useRef } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function ServiceFAQ({ service }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = service.faq;

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="relative w-full py-24 lg:py-36 bg-[#FFFFFF] text-[#071D35] overflow-hidden border-t border-[#071D35]/10">
      <div className="max-w-[88rem] w-full mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT: Heading & Context */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#071D35]/5 border border-[#071D35]/10 text-xs font-mono-tech uppercase tracking-widest text-[#071D35] font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-[#F58220]" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-[#071D35] leading-tight mb-6">
              HAVE QUESTIONS? <br />
              <span className="text-[#F58220]">WE'VE GOT ANSWERS.</span>
            </h2>

            <p className="text-base text-[#071D35]/70 font-body leading-relaxed mb-8 max-w-md">
              Everything you need to know about our {service.title.toLowerCase()} process, pricing philosophy, deliverables, and engineering standards.
            </p>

            <div className="p-6 rounded-2xl bg-[#F7F7F4] border border-[#071D35]/8">
              <div className="text-xs font-mono-tech text-[#F58220] font-bold uppercase tracking-wider mb-2">
                NEED A CUSTOM INQUIRY?
              </div>
              <p className="text-xs sm:text-sm text-[#071D35]/80 font-body mb-4">
                Have a specialized compliance, timeline, or enterprise architectural question?
              </p>
              <a
                href="#contact"
                className="inline-flex items-center text-xs font-button font-bold text-[#071D35] hover:text-[#F58220] transition-colors"
              >
                <span>Talk to a senior engineer directly →</span>
              </a>
            </div>
          </div>

          {/* RIGHT: Accordion */}
          <div className="lg:col-span-7 divide-y divide-[#071D35]/10 border-y border-[#071D35]/10">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.q}
                  className="py-6 sm:py-7 transition-colors duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-6 text-left group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F58220] rounded-lg"
                  >
                    <span className="text-lg sm:text-xl font-heading font-bold text-[#071D35] group-hover:text-[#F58220] transition-colors">
                      {faq.q}
                    </span>

                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                        isOpen
                          ? 'bg-[#F58220] text-white border-[#F58220] rotate-180 shadow-md'
                          : 'bg-[#F7F7F4] text-[#071D35]/60 border-[#071D35]/10 group-hover:border-[#F58220]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out overflow-hidden ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100 pt-4'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm sm:text-base text-[#071D35]/75 font-body leading-relaxed max-w-2xl pr-8">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
