'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  Share2,
  Check,
  BookOpen,
  Sparkles,
  CheckCircle2,
  Quote,
  MessageSquare,
} from 'lucide-react';
import { blogPosts } from '@/data/blogData';
import BlogCTA from '@/components/blog/BlogCTA';

function LinkedInIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterXIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BlogPostClient({ post }) {
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(500, 33);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Find related articles (excluding the current one)
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 3);

  // Find previous and next articles
  const currentIndex = blogPosts.findIndex((p) => p.id === post.id);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <div className="w-full bg-white text-[#06182f] font-sans overflow-x-hidden min-h-screen pt-24 sm:pt-28 lg:pt-32">
      {/* ========================================================================= */}
      {/* 1. ARTICLE HEADER & HERO                                                  */}
      {/* ========================================================================= */}
      <header className="relative w-full py-8 lg:py-12 bg-gradient-to-b from-[#FAFBFD] to-white border-b border-[#06182f]/[0.06]">
        <div className="max-w-[1240px] w-[92%] mx-auto relative z-10">
          {/* Breadcrumb & Back Link */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 text-xs font-mono font-semibold">
            <div className="flex items-center gap-2 text-[#64748B]">
              <Link href="/" className="hover:text-[#f57e20] transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-[#f57e20] transition-colors">
                Blog
              </Link>
              <span>/</span>
              <span className="text-[#f57e20] uppercase">{post.category}</span>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-[#06182f] hover:text-[#f57e20] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all articles</span>
            </Link>
          </div>

          {/* Badges Row */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="px-3.5 py-1.5 rounded-full bg-[#f57e20]/10 border border-[#f57e20]/25 text-[#f57e20] text-xs font-mono font-bold tracking-wider uppercase">
              {post.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#64748B]">
              <Clock className="w-3.5 h-3.5 text-[#f57e20]" />
              <span>{post.readTime}</span>
            </div>
            <span className="text-[#64748B]/40">•</span>
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#64748B]">
              <Calendar className="w-3.5 h-3.5 text-[#f57e20]" />
              <span>{post.date}</span>
            </div>
          </div>

          {/* Main Article Title */}
          <h1 className="font-heading font-black tracking-[-0.03em] leading-[1.1] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-[#06182f] max-w-4xl mb-7">
            {post.title}
          </h1>

          {/* Author Row & Share Action */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[#06182f]/[0.08]">
            {/* Author details */}
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full bg-[#06182f] text-[#f57e20] border-2 border-[#f57e20]/30 flex items-center justify-center font-heading font-black text-lg shadow-sm">
                {post.author.avatar || post.author.name.charAt(0)}
              </div>
              <div>
                <div className="font-heading font-bold text-base text-[#06182f]">
                  {post.author.name}
                </div>
                <div className="text-xs text-[#64748B] font-medium">
                  {post.author.role}
                </div>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-2 select-none">
              <span className="text-xs font-mono font-bold text-[#64748B] mr-1 uppercase">
                Share:
              </span>
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white hover:bg-[#F8FAFC] border border-[#06182f]/10 text-xs font-bold text-[#06182f] transition-all cursor-pointer shadow-xs"
                title="Copy link to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-600">Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-[#f57e20]" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>

              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  post.title
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white hover:bg-[#06182f] hover:text-white border border-[#06182f]/10 text-[#06182f] flex items-center justify-center transition-all cursor-pointer shadow-xs"
                title="Share on X"
              >
                <TwitterXIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  typeof window !== 'undefined' ? window.location.href : ''
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white hover:bg-[#0077b5] hover:text-white border border-[#06182f]/10 text-[#06182f] flex items-center justify-center transition-all cursor-pointer shadow-xs"
                title="Share on LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. COVER IMAGE BANNER                                                     */}
      {/* ========================================================================= */}
      <section className="relative w-full py-8 lg:py-12 bg-white">
        <div className="max-w-[1240px] w-[92%] mx-auto">
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#06182f] border border-[#06182f]/10 shadow-[0_20px_50px_rgba(6,24,47,0.12)]">
            <Image
              src={post.coverImage || '/blog/featured-ai-robot.jpg'}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1240px"
              className="object-cover object-center select-none filter contrast-[1.03]"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. EDITORIAL ARTICLE BODY + STICKY SIDEBAR                                */}
      {/* ========================================================================= */}
      <main className="relative w-full pb-20 lg:pb-28 bg-white">
        <div className="max-w-[1240px] w-[92%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
            {/* ------------------------------------------------------------------- */}
            {/* LEFT: MAIN ARTICLE EDITORIAL CONTENT (8 COLUMNS)                    */}
            {/* ------------------------------------------------------------------- */}
            <article className="lg:col-span-8 flex flex-col">
              {/* Introduction Paragraph */}
              {post.content?.intro && (
                <div className="font-body text-lg sm:text-xl text-[#334155] leading-relaxed mb-10 pb-8 border-b border-[#06182f]/[0.08] font-normal">
                  <p>{post.content.intro}</p>
                </div>
              )}

              {/* Key Takeaways Highlight Box */}
              {post.content?.keyTakeaways && (
                <div className="p-6 sm:p-8 rounded-[24px] bg-gradient-to-br from-[#FFF9F5] via-[#FFFDFB] to-white border border-[#f57e20]/25 shadow-xs mb-12">
                  <div className="flex items-center gap-2 mb-4 text-[#f57e20] font-heading font-black text-sm uppercase tracking-wider font-mono">
                    <Sparkles className="w-4 h-4" />
                    <span>KEY TAKEAWAYS FOR ENGINEERING LEADERS</span>
                  </div>
                  <ul className="space-y-3">
                    {post.content.keyTakeaways.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#06182f] font-medium leading-relaxed">
                        <CheckCircle2 className="w-5 h-5 text-[#f57e20] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Dynamic Article Sections */}
              <div className="space-y-12">
                {post.content?.sections?.map((section, idx) => (
                  <section
                    key={idx}
                    id={`section-${idx}`}
                    className="scroll-mt-32"
                  >
                    <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#06182f] tracking-tight mb-5 leading-tight">
                      {section.heading}
                    </h2>

                    {/* Paragraphs */}
                    <div className="space-y-4 font-body text-base sm:text-lg text-[#334155] leading-relaxed">
                      {section.paragraphs?.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>

                    {/* Bullet Points if any */}
                    {section.bulletPoints && (
                      <div className="my-6 p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-[#06182f]/[0.06]">
                        <ul className="space-y-2.5">
                          {section.bulletPoints.map((bp, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-[#06182f] font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#f57e20] mt-2.5 shrink-0" />
                              <span>{bp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Quote Callout if any */}
                    {section.quote && (
                      <div className="my-8 pl-6 border-l-4 border-[#f57e20] bg-gradient-to-r from-[#f57e20]/[0.04] to-transparent py-4 pr-4 rounded-r-2xl">
                        <div className="flex items-start gap-3">
                          <Quote className="w-6 h-6 text-[#f57e20] shrink-0 mt-1 opacity-70" />
                          <p className="font-heading font-bold text-lg sm:text-xl text-[#06182f] italic leading-snug">
                            "{section.quote}"
                          </p>
                        </div>
                      </div>
                    )}
                  </section>
                ))}
              </div>

              {/* Tags & End Note */}
              <div className="mt-14 pt-8 border-t border-[#06182f]/[0.08]">
                <div className="flex flex-wrap items-center gap-2 mb-8">
                  <span className="text-xs font-mono font-bold uppercase text-[#64748B] mr-2">
                    Tagged In:
                  </span>
                  {post.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-[#06182f]/[0.04] border border-[#06182f]/[0.08] text-xs font-mono font-semibold text-[#06182f]/80"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Previous & Next Article Navigation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {prevPost ? (
                    <Link
                      href={`/blog/${prevPost.slug}`}
                      className="p-5 rounded-2xl border border-[#06182f]/[0.08] hover:border-[#f57e20]/50 bg-white hover:bg-[#F8FAFC] transition-all group flex flex-col justify-between"
                    >
                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#64748B] mb-2 uppercase">
                        <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                        <span>Previous Article</span>
                      </div>
                      <h4 className="font-heading font-bold text-sm sm:text-base text-[#06182f] group-hover:text-[#f57e20] transition-colors line-clamp-2">
                        {prevPost.title}
                      </h4>
                    </Link>
                  ) : <div />}

                  {nextPost ? (
                    <Link
                      href={`/blog/${nextPost.slug}`}
                      className="p-5 rounded-2xl border border-[#06182f]/[0.08] hover:border-[#f57e20]/50 bg-white hover:bg-[#F8FAFC] transition-all group flex flex-col justify-between text-right"
                    >
                      <div className="flex items-center justify-end gap-1.5 text-xs font-mono font-bold text-[#64748B] mb-2 uppercase">
                        <span>Next Article</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                      <h4 className="font-heading font-bold text-sm sm:text-base text-[#06182f] group-hover:text-[#f57e20] transition-colors line-clamp-2">
                        {nextPost.title}
                      </h4>
                    </Link>
                  ) : <div />}
                </div>
              </div>
            </article>

            {/* ------------------------------------------------------------------- */}
            {/* RIGHT: STICKY SIDEBAR (4 COLUMNS)                                   */}
            {/* ------------------------------------------------------------------- */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-8">
                {/* 1. Table of Contents */}
                {post.content?.sections && post.content.sections.length > 0 && (
                  <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#06182f]/[0.08] shadow-xs">
                    <div className="flex items-center gap-2 mb-4 text-[#06182f] font-heading font-bold text-sm uppercase tracking-wider font-mono">
                      <BookOpen className="w-4 h-4 text-[#f57e20]" />
                      <span>Table of Contents</span>
                    </div>
                    <nav className="space-y-2.5">
                      {post.content.sections.map((section, idx) => (
                        <a
                          key={idx}
                          href={`#section-${idx}`}
                          onClick={() => setActiveSection(idx)}
                          className={`block text-xs sm:text-sm font-medium leading-snug transition-colors ${
                            activeSection === idx
                              ? 'text-[#f57e20] font-bold pl-2 border-l-2 border-[#f57e20]'
                              : 'text-[#64748B] hover:text-[#06182f]'
                          }`}
                        >
                          {section.heading}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}

                {/* 2. Author Profile Card */}
                <div className="p-6 rounded-2xl bg-white border border-[#06182f]/[0.08] shadow-xs">
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#06182f] text-[#f57e20] font-heading font-black text-lg flex items-center justify-center">
                      {post.author.avatar || post.author.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-base text-[#06182f]">
                        {post.author.name}
                      </h4>
                      <p className="text-xs text-[#64748B]">
                        {post.author.role}
                      </p>
                    </div>
                  </div>
                  <p className="font-body text-xs text-[#64748B] leading-relaxed mb-4">
                    Specialized engineering practices delivering scalable cloud
                    systems, AI pipelines, and modern web applications for
                    forward-thinking brands.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#f57e20] hover:text-[#06182f] transition-colors"
                  >
                    <span>Connect with Team</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* 3. Need Custom Tech Solutions? Consultation CTA */}
                <div className="p-7 rounded-2xl bg-gradient-to-br from-[#06182f] to-[#0A2647] text-white shadow-md relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#f57e20]/20 rounded-full blur-2xl pointer-events-none" />
                  <span className="px-3 py-1 rounded-full bg-white/10 text-[#f57e20] text-[11px] font-mono font-bold uppercase tracking-wider inline-block mb-3">
                    CONSULTATION
                  </span>
                  <h4 className="font-heading font-black text-xl text-white tracking-tight mb-2">
                    Build Something Extraordinary.
                  </h4>
                  <p className="text-xs text-white/80 leading-relaxed mb-5">
                    Ready to turn ideas into production-ready software? Let's discuss your product roadmap.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-[#f57e20] hover:bg-white text-white hover:text-[#06182f] font-bold text-xs rounded-full transition-all duration-300 shadow-md cursor-pointer"
                  >
                    <span>Start Your Project</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* ========================================================================= */}
      {/* 4. MORE RELATED ARTICLES                                                  */}
      {/* ========================================================================= */}
      {relatedPosts.length > 0 && (
        <section className="relative w-full py-16 sm:py-20 bg-[#FAFBFD] border-t border-[#06182f]/[0.06]">
          <div className="max-w-[1240px] w-[92%] mx-auto">
            <div className="flex items-center justify-between mb-10">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#f57e20]">
                  CONTINUE READING
                </span>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#06182f] tracking-tight mt-1">
                  Related Insights
                </h3>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#f57e20] hover:text-[#06182f] transition-colors"
              >
                <span>View All Articles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  href={`/blog/${related.slug}`}
                  className="group bg-white rounded-2xl border border-[#06182f]/[0.08] hover:border-[#f57e20]/50 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-[#64748B] mb-3">
                      <span className="text-[#f57e20] font-bold uppercase">
                        {related.category}
                      </span>
                      <span>{related.readTime}</span>
                    </div>
                    <h4 className="font-heading font-bold text-base text-[#06182f] group-hover:text-[#f57e20] transition-colors line-clamp-2 mb-2">
                      {related.title}
                    </h4>
                    <p className="text-xs text-[#64748B] line-clamp-2 leading-relaxed">
                      {related.excerpt}
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-[#06182f]/[0.06] flex items-center justify-between text-xs font-bold text-[#f57e20]">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 5. NEWSLETTER / BOTTOM CTA                                                */}
      {/* ========================================================================= */}
      <BlogCTA />
    </div>
  );
}
