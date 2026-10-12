import React from 'react';
import { notFound } from 'next/navigation';
import BlogPostClient from '@/components/blog/detail/BlogPostClient';
import { blogPosts, getPostBySlug } from '@/data/blogData';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Article Not Found | Zeowl Infotech',
      description: 'The requested blog article could not be found.',
    };
  }

  return {
    title: `${post.title} | Zeowl Infotech Blog`,
    description: post.excerpt,
    keywords: [
      post.category,
      ...(post.tags || []),
      'Zeowl Infotech',
      'Technology Insights',
      'Software Engineering',
      'Digital Transformation',
    ],
    openGraph: {
      title: `${post.title} | Zeowl Infotech Blog`,
      description: post.excerpt,
      type: 'article',
      url: `https://zeowl.com/blog/${post.slug}`,
      siteName: 'Zeowl Infotech',
      publishedTime: post.date,
      authors: [post.author?.name || 'Zeowl Tech Team'],
      images: [
        {
          url: post.coverImage || '/logo/zeowl-logo.png',
          width: 1200,
          height: 630,
          alt: `${post.title} - Zeowl Infotech`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage || '/logo/zeowl-logo.png'],
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostClient post={post} />;
}
