'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Clock,
} from 'lucide-react';

// Social Icon SVGs
function LinkedInIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}


// Framer motion variants
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Our Process', href: '/process' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const servicesList = [
  { name: 'Web Development', href: '/services/web-development' },
  { name: 'UI/UX & Graphic Design', href: '/services/ui-ux-design' },
  { name: 'Software Development', href: '/services/software-development' },
  { name: 'Digital Marketing', href: '/services/digital-marketing' },
  { name: 'App Development', href: '/services/app-development' },
  { name: 'Social Media Marketing', href: '/services/social-media-marketing' },
  { name: 'Video Editing', href: '/services/video-editing' },
  { name: 'AI Automation', href: '/services/ai-automation' },
  { name: 'Branding', href: '/services/branding' },
  { name: 'Influencer Marketing', href: '/services/influencer-marketing' },
];

const socialLinks = [
  { name: 'LinkedIn', icon: LinkedInIcon, href: 'https://linkedin.com' },
  { name: 'Instagram', icon: InstagramIcon, href: 'https://instagram.com' },
  { name: 'Facebook', icon: FacebookIcon, href: 'https://facebook.com' },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative w-full bg-[#040D1A] text-white overflow-hidden font-sans border-t border-white/10">
      {/* ======================================================== */}
      {/* 1. FOOTER BACKGROUND IMAGE LAYER                         */}
      {/* Rich glowing waves & golden ribbon flows at the bottom   */}
      {/* ======================================================== */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <img
          src="/footer-bg.png"
          alt="Zeowl Footer Wave Background"
          className="w-full h-full object-cover object-bottom block opacity-35"
          loading="lazy"
        />
      </div>

      {/* ======================================================== */}
      {/* 2. TRANSLUCENT OVERLAY LAYER                             */}
      {/* Deep contrast behind text, letting glowing waves shine    */}
      {/* ======================================================== */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040D1A]/98 via-[#040D1A]/85 to-[#040D1A]/40 pointer-events-none z-10" />

      {/* Subtle glowing accent highlight at top border */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF7900]/50 to-transparent pointer-events-none z-10" />

      {/* ======================================================== */}
      {/* 3. MAIN FOOTER CONTENT (4 COLUMNS DESKTOP)               */}
      {/* ======================================================== */}
      <div className="max-w-[1420px] w-[92%] mx-auto relative z-20 pt-14 sm:pt-18 lg:pt-22 pb-12 sm:pb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12"
        >
          {/* ---------------------------------------------------- */}
          {/* COLUMN 1: BRAND IDENTITY & SOCIALS (4 Cols)          */}
          {/* ---------------------------------------------------- */}
          <motion.div variants={fadeInUp} className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-4">
            {/* Logo - User Official Zeowl Logo */}
            <Link href="/" className="inline-block mb-5 group focus:outline-none">
              <div className="relative">
                <img
                  src="/logo/zeowl-footer-logo.png"
                  alt="Zeowl Infotech"
                  className="h-20 sm:h-24 md:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] filter drop-shadow-[0_4px_16px_rgba(245,126,32,0.2)]"
                />
              </div>
            </Link>

            {/* Company Description */}
            <p className="text-[#CBD5E1] text-[14.5px] sm:text-[15px] leading-[1.75] max-w-sm mb-6 font-normal">
              Turning ideas into powerful digital solutions that help ambitious businesses scale, automate workflows and engineer future-ready products.
            </p>

            {/* Social Media Glass Icons with hover glow */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow Zeowl Infotech on ${social.name}`}
                    className="w-10 h-10 rounded-full bg-white/10 border border-white/20 hover:border-[#FF7900] hover:bg-[#FF7900] text-white hover:text-white backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-[0_4px_16px_rgba(255,121,0,0.45)] hover:-translate-y-1 hover:scale-110 group cursor-pointer focus:outline-none"
                  >
                    <IconComponent className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* ---------------------------------------------------- */}
          {/* COLUMNS 2 & 3: QUICK LINKS & OUR SERVICES            */}
          {/* (Smart 2-col layout on mobile for clean scannability)*/}
          {/* ---------------------------------------------------- */}
          <div className="col-span-1 md:col-span-2 lg:col-span-5 grid grid-cols-2 gap-6 sm:gap-8 lg:gap-8">
            {/* COLUMN 2: QUICK LINKS */}
            <motion.div variants={fadeInUp} className="flex flex-col items-start">
              <h4 className="text-white text-[17px] font-bold tracking-tight">
                Quick Links
              </h4>
              {/* Minimal Orange Underline Accent */}
              <div className="w-8 h-[2.5px] bg-gradient-to-r from-[#FF7900] to-[#FFA726] rounded-full mt-2.5 mb-5" />

              <ul className="space-y-2.5 w-full">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center justify-between text-[14px] sm:text-[14.5px] text-[#E2E8F0] hover:text-[#FF7900] font-normal transition-all duration-300"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#FF7900]/70 group-hover:text-[#FF7900] group-hover:translate-x-1 transition-all duration-300 shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* COLUMN 3: OUR SERVICES */}
            <motion.div variants={fadeInUp} className="flex flex-col items-start">
              <h4 className="text-white text-[17px] font-bold tracking-tight">
                Our Services
              </h4>
              {/* Minimal Orange Underline Accent */}
              <div className="w-8 h-[2.5px] bg-gradient-to-r from-[#FF7900] to-[#FFA726] rounded-full mt-2.5 mb-5" />

              <ul className="grid grid-cols-1 gap-2.5 w-full">
                {servicesList.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="group flex items-center justify-between text-[14px] sm:text-[14.5px] text-[#E2E8F0] hover:text-[#FF7900] font-normal transition-all duration-300"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {service.name}
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#FF7900]/70 group-hover:text-[#FF7900] group-hover:translate-x-1 transition-all duration-300 shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* ---------------------------------------------------- */}
          {/* COLUMN 4: GET IN TOUCH, BUSINESS HOURS & TAGLINE     */}
          {/* ---------------------------------------------------- */}
          <motion.div variants={fadeInUp} className="lg:col-span-3 flex flex-col items-start justify-between">
            <div className="w-full">
              <h4 className="text-white text-[17px] font-bold tracking-tight">
                Get In Touch
              </h4>
              {/* Minimal Orange Underline Accent */}
              <div className="w-8 h-[2.5px] bg-gradient-to-r from-[#FF7900] to-[#FFA726] rounded-full mt-2.5 mb-5" />

              {/* Contact Information List */}
              <ul className="space-y-4 w-full">
                {/* Phone Numbers */}
                <li>
                  <div className="flex items-start gap-3.5 text-[14px] sm:text-[14.5px] text-[#FFFFFF]">
                    <div className="w-10 h-10 rounded-full bg-[#FF7900]/20 border border-[#FF7900]/40 flex items-center justify-center text-[#FF7900] shadow-sm shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <a
                        href="tel:+916352524266"
                        className="font-semibold tracking-wide text-white hover:text-[#FF7900] transition-colors duration-200"
                      >
                        +91 63525 24266
                      </a>
                      <a
                        href="tel:+916351112096"
                        className="font-semibold tracking-wide text-white hover:text-[#FF7900] transition-colors duration-200"
                      >
                        +91 63511 12096
                      </a>
                    </div>
                  </div>
                </li>

                {/* Email */}
                <li>
                  <a
                    href="mailto:info.zeowlinfotech@gmail.com"
                    className="group flex items-center gap-3.5 text-[14px] sm:text-[14.5px] text-[#FFFFFF] hover:text-[#FF7900] transition-colors duration-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#168CFF]/20 border border-[#168CFF]/40 flex items-center justify-center text-[#38BDF8] group-hover:text-white group-hover:bg-[#168CFF] transition-all duration-300 shadow-sm shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="font-medium tracking-wide break-all text-white group-hover:text-[#FF7900] transition-colors">
                      info.zeowlinfotech@gmail.com
                    </span>
                  </a>
                </li>

                {/* Location */}
                <li className="flex items-center gap-3.5 text-[14px] sm:text-[14.5px] text-[#FFFFFF]">
                  <div className="w-10 h-10 rounded-full bg-[#FF7900]/20 border border-[#FF7900]/40 flex items-center justify-center text-[#FF7900] shadow-sm shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="font-medium leading-snug text-white">
                    Vadodara, Gujarat, India
                  </span>
                </li>

                {/* Business Hours */}
                <li className="flex items-center gap-3.5 text-[14px] sm:text-[14.5px] text-[#CBD5E1]">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-slate-300 shadow-sm shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span className="text-[13px] sm:text-[13.5px] leading-snug text-slate-300">
                    Mon - Sat: 9:00 AM - 7:00 PM IST
                  </span>
                </li>
              </ul>
            </div>

            {/* 4. DECORATIVE TAGLINE: "Build • Automate • Grow" */}
            <div className="mt-8 pt-4 w-full flex items-center justify-start lg:justify-end">
              <div className="inline-flex flex-col items-start lg:items-end select-none">
                <div className="flex items-center gap-2">
                  <span
                    className="text-[#FF7900] text-2xl sm:text-3xl leading-none drop-shadow-[0_2px_12px_rgba(255,121,0,0.4)]"
                    style={{
                      fontFamily: 'var(--font-caveat), "Caveat", cursive',
                      fontWeight: 700,
                    }}
                  >
                    Build • Automate • Grow
                  </span>
                </div>
                {/* Minimal Curved Hand-drawn Accent Line */}
                <svg
                  viewBox="0 0 120 18"
                  className="w-28 sm:w-32 mt-1 text-[#FF7900]"
                  fill="none"
                >
                  <path
                    d="M 3 12 C 40 4, 80 15, 115 5"
                    stroke="#FF7900"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 108 2 L 117 5 L 112 12"
                    stroke="#FF7900"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ======================================================== */}
        {/* 5. THIN SUBTLE DIVIDER                                   */}
        {/* ======================================================== */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 via-[#FF7900]/40 to-transparent my-10 sm:my-12" />

        {/* ======================================================== */}
        {/* 6. BOTTOM BAR: COPYRIGHT & LEGAL LINKS                   */}
        {/* ======================================================== */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#CBD5E1] font-normal">
          {/* Left: Copyright */}
          <div>
            © {new Date().getFullYear()}{' '}
            <span className="text-white font-semibold">Zeowl Infotech</span>. All
            Rights Reserved.
          </div>

          {/* Right: Legal Links with Vertical Dividers */}
          <div className="flex items-center flex-wrap justify-center gap-y-2">
            <Link
              href="#privacy"
              className="hover:text-[#FF7900] transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <span className="w-[1px] h-3 bg-white/20 mx-3" />
            <Link
              href="#terms"
              className="hover:text-[#FF7900] transition-colors duration-200"
            >
              Terms & Conditions
            </Link>
            <span className="w-[1px] h-3 bg-white/20 mx-3" />
            <Link
              href="#sitemap"
              className="hover:text-[#FF7900] transition-colors duration-200"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
