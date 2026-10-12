'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How quickly can Zeowl start on our project?',
    answer:
      'We typically kick off within 3 to 7 business days following our initial discovery call and scope alignment. If you have an urgent timeline or MVP deadline, let us know and we can expedite our onboarding.',
  },
  {
    question: 'Do you sign Non-Disclosure Agreements (NDAs)?',
    answer:
      'Yes, absolutely. We prioritize your intellectual property and confidential data. We are happy to execute our mutual NDA or review your company’s standard NDA before any project details are shared.',
  },
  {
    question: 'How do you price projects (Fixed Price vs. Dedicated Team)?',
    answer:
      'We offer flexible engagement models tailored to your requirements: 1) Fixed-Price Milestones for projects with well-defined specs, 2) Dedicated Monthly Engineering Teams for scaling startups and ongoing development, or 3) Time & Materials for evolving R&D initiatives.',
  },
  {
    question: 'Who will I be communicating with on a daily basis?',
    answer:
      'You get direct, transparent access to your dedicated Technical Lead and Project Manager via Slack, Microsoft Teams, or WhatsApp. We conduct weekly sprint reviews, asynchronous Loom updates, and bi-weekly demo calls.',
  },
  {
    question: 'Do you provide maintenance and support after launch?',
    answer:
      'Yes! Every project includes a 30-day post-launch warranty period for bug fixes and stability checks. Afterward, we offer flexible SLA-backed maintenance and continuous feature development retainers.',
  },
  {
    question: 'Who owns the intellectual property and code repository?',
    answer:
      'You own 100% of the code, intellectual property, design assets, and deployment environments upon milestone completion. We do not retain proprietary lock-in on your codebase.',
  },
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-white font-sans border-t border-neutral-100">
      <div className="max-w-[1100px] w-[92%] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f57e20]/10 border border-[#f57e20]/25 text-xs font-bold text-[#f57e20] uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>COMMON QUESTIONS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-[#06182F] tracking-tight mb-4">
            Everything You Need To Know
          </h2>
          <p className="font-body text-[#475569] text-base">
            Have questions before reaching out? Here are answers to the most common inquiries from prospective clients.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? 'bg-[#FCFBF9] border-[#f57e20]/40 shadow-sm'
                    : 'bg-white border-neutral-200/80 hover:border-neutral-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="font-heading text-base sm:text-lg font-bold text-[#06182F]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#f57e20] text-white rotate-180'
                        : 'bg-neutral-100 text-[#64748B]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base font-body text-[#475569] leading-relaxed border-t border-neutral-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
