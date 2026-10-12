'use client';

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Clock,
  Calendar,
  Layers,
  Sparkles,
  Search,
} from 'lucide-react';
import { blogCategories, blogPosts } from '@/data/blogData';

export default function BlogGrid({
  activeCategory = 'All Articles',
  setActiveCategory,
  searchQuery = '',
  setSearchQuery,
}) {
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === 'All Articles' || post.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="articles"
      className="relative w-full py-16 sm:py-24 bg-white font-sans text-[#06182f] overflow-hidden"
    >
      <div className="max-w-[1420px] w-[92%] mx-auto relative z-10">
        {/* ========================================================================= */}
        {/* Header & Filter Pills Row                                                 */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 pb-8 border-b border-[#06182f]/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f57e20]/10 border border-[#f57e20]/25 text-[#f57e20] text-xs font-bold font-mono uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>EXPLORE ARTICLES</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#06182f] tracking-tight">
              Latest Insights &amp;{' '}
              <span className="text-[#f57e20]">Engineering Articles</span>
            </h2>
            <p className="text-sm font-medium text-[#64748B] max-w-lg mt-3">
              Showing{' '}
              <span className="font-bold text-[#06182f] font-mono">
                {filteredPosts.length}
              </span>{' '}
              articles in{' '}
              <span className="font-bold text-[#06182f]">{activeCategory}</span>.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2.5 items-center">
            {blogCategories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory?.(cat)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 border cursor-pointer select-none ${
                    isActive
                      ? 'bg-[#f57e20] text-white border-[#f57e20] shadow-[0_6px_20px_rgba(245,126,32,0.35)] scale-[1.02]'
                      : 'bg-white hover:bg-[#F8FAFC] text-[#06182f] border-[#06182f]/10 hover:border-[#f57e20]/50 shadow-xs'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isActive ? 'bg-white' : 'bg-[#f57e20]'
                    }`}
                  />
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Articles Grid (Responsive 3 Columns)                                      */}
        {/* ========================================================================= */}
        {filteredPosts.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredPosts.map((post) => (
                <motion.article
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 40, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative bg-white rounded-[24px] border border-[#06182f]/[0.08] hover:border-[#f57e20]/50 shadow-[0_6px_25px_rgba(6,24,47,0.04)] hover:shadow-[0_20px_50px_rgba(6,24,47,0.12)] transition-all duration-500 overflow-hidden flex flex-col justify-between hover:-translate-y-2"
                >
                  {/* Top Glowing Brand Accent Line */}
                  <div className="absolute top-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#f57e20] via-[#FFA84A] to-[#f57e20] group-hover:w-full transition-all duration-500 ease-out z-20" />

                  {/* Card Body */}
                  <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Meta: Category & Read Time */}
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full bg-[#f57e20]/10 text-[#f57e20] text-xs font-mono font-bold tracking-wider uppercase">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-[#64748B] font-mono">
                          <Clock className="w-3.5 h-3.5 text-[#f57e20]" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <Link href={`/blog/${post.slug}`} className="block group/title">
                        <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#06182f] tracking-tight group-hover/title:text-[#f57e20] transition-colors duration-300 mb-3 line-clamp-2">
                          {post.title}
                        </h3>
                      </Link>

                      {/* Excerpt */}
                      <p className="font-body text-[#64748B] text-sm leading-relaxed mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Footer: Tags & Read Link */}
                    <div>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-md bg-[#06182f]/[0.04] text-[11px] font-mono text-[#06182f]/70"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Author & Action Link */}
                      <div className="pt-4 border-t border-[#06182f]/[0.06] flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-[#f57e20]/10 border border-[#f57e20]/20 flex items-center justify-center text-xs font-bold text-[#f57e20]">
                            {post.author.name.charAt(0)}
                          </div>
                          <div>
                            <div className="text-xs font-bold text-[#06182f]">
                              {post.author.name}
                            </div>
                            <div className="text-[11px] text-[#64748B]">
                              {post.date}
                            </div>
                          </div>
                        </div>

                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#f57e20] hover:text-[#06182f] group-hover:translate-x-1 transition-all cursor-pointer select-none"
                        >
                          <span>Read</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* Empty Search / Filter State */
          <div className="text-center py-16 px-4 bg-[#F8FAFC] rounded-3xl border border-[#06182f]/[0.08] max-w-xl mx-auto">
            <Search className="w-10 h-10 text-[#64748B] mx-auto mb-4 opacity-50" />
            <h3 className="font-heading font-bold text-xl text-[#06182f] mb-2">
              No matching articles found
            </h3>
            <p className="text-sm text-[#64748B] mb-6">
              We couldn't find any articles matching "{searchQuery}". Try
              adjusting your search keyword or selected category.
            </p>
            <button
              onClick={() => {
                setActiveCategory?.('All Articles');
                setSearchQuery?.('');
              }}
              className="px-6 py-2.5 rounded-full bg-[#f57e20] text-white font-bold text-xs hover:bg-[#06182f] transition-all cursor-pointer shadow-xs"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
