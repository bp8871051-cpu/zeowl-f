'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import ContactSection from '@/components/contact/ContactSection';
import ContactConnectSection from '@/components/contact/ContactConnectSection';
import ContactFAQ from '@/components/contact/ContactFAQ';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactPage() {
  useEffect(() => {
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => clearTimeout(refreshTimer);
  }, []);

  return (
    <div className="w-full bg-white text-[#06182f] overflow-x-hidden min-h-screen">
      {/* 1. Main Hero Contact Section (with the custom 3D glass background /contact-bg.png) */}
      <ContactSection isTopSection={true} />

      {/* 2. Connect Section: Choose How to Connect With Us */}
      <ContactConnectSection />

      {/* 3. Common Questions / FAQ Accordion */}
      <ContactFAQ />
    </div>
  );
}
