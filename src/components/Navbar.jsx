"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Our Process', href: '/process' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? 'py-2 px-3 sm:px-4 md:py-3 md:px-[max(1rem,calc((100%-1340px)/2))]'
          : 'py-0 px-0'
      }`}
    >
      <nav
        className={`relative w-full flex items-center justify-between transition-all duration-500 ease-in-out ${
          scrolled
            ? 'px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 bg-white/95 backdrop-blur-xl rounded-full shadow-[0_12px_40px_rgba(7,26,47,0.12)] border border-white/80'
            : 'px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16 py-3.5 sm:py-4 md:py-4.5 bg-white border-b border-neutral-200/70 shadow-xs'
        }`}
      >
        {/* Left: Logo with proper scale */}
        <Link href="/" className="flex items-center shrink-0 group z-10">
          <img
            src="/logo/ZEOWL.png"
            alt="Zeowl Infotech Logo"
            className="h-10 sm:h-11 md:h-12 lg:h-[48px] xl:h-[52px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </Link>

        {/* Center: Desktop Links (Exactly Centered in the Navbar) */}
        <div className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2 gap-6 xl:gap-8 text-[15px] xl:text-[16px] font-semibold text-[#071A2F]/85 whitespace-nowrap">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== '/' && pathname.startsWith(link.href));

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-all duration-300 relative py-1 group tracking-[-0.01em] hover:-translate-y-0.5 ${
                  isActive ? 'text-[#F47B20]' : 'hover:text-[#F47B20]'
                }`}
              >
                <span>{link.name}</span>
                <span
                  className={`absolute bottom-0 left-0 h-[2.5px] bg-[#F47B20] transition-all duration-300 rounded-full ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Right side spacer to balance layout on desktop, and hamburger on mobile */}
        <div className="flex items-center shrink-0 z-10">
          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full hover:bg-neutral-100 transition-colors focus:outline-none cursor-pointer"
          >
            <span
              className={`w-5 h-0.5 bg-[#071A2F] rounded-full transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-[5px]' : '-translate-y-1'
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-[#071A2F] rounded-full transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-[#071A2F] rounded-full transition-all duration-300 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-[5px]' : 'translate-y-1'
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation (7 Centered Links) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden mt-2 mx-3 p-5 bg-white/95 backdrop-blur-xl border border-neutral-100 rounded-2xl shadow-2xl flex flex-col gap-2"
          >
            {navLinks.map((link, idx) => {
              const isActive =
                pathname === link.href ||
                (link.href !== '/' && pathname.startsWith(link.href));

              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04, duration: 0.25 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 text-base font-semibold rounded-xl transition-all flex items-center justify-between ${
                      isActive
                        ? 'text-[#F47B20] bg-[#F47B20]/10'
                        : 'text-[#071A2F]/85 hover:text-[#F47B20] hover:bg-[#F47B20]/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-[#F47B20] font-bold">→</span>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>

      {/* Header Spacer: Keeps hero backgrounds from starting tucked behind navbar at scroll 0 */}
      <div className="w-full h-[69px] sm:h-[77px] md:h-[85px] xl:h-[89px] shrink-0 pointer-events-none" aria-hidden="true" />
    </>
  );
}
