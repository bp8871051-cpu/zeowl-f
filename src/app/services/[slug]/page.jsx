import React from 'react';
import { notFound } from 'next/navigation';
import ServiceDetailClient from '@/components/services/detail/ServiceDetailClient';
import { getServiceBySlug, SERVICE_ORDER } from '@/data/servicesDetailData';

export function generateStaticParams() {
  const slugs = [
    ...SERVICE_ORDER,
    'ui-ux-design',
    'ui-ux-graphic-design',
    'web-dev',
    'mobile-apps',
    'social-media',
    'ai-solutions',
    'custom-software',
    'seo-marketing',
  ];

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service | Zeowl Infotech',
      description: 'Enterprise digital engineering and creative technology solutions.',
    };
  }

  return {
    title: `${service.title} | Zeowl Infotech`,
    description: service.heroDescription,
    keywords: [
      service.title,
      'Zeowl Infotech',
      'Digital Agency',
      'Technology Studio',
      'Software Solutions',
      ...service.heroFloatingBadges.map((b) => b.text),
    ],
    openGraph: {
      title: `${service.title} | Zeowl Infotech`,
      description: service.heroDescription,
      type: 'article',
      url: `https://zeowl.com/services/${service.slug}`,
      siteName: 'Zeowl Infotech',
      images: [
        {
          url: service.capabilities[0]?.image || '/logo/zeowl-logo.png',
          width: 1200,
          height: 630,
          alt: `${service.title} - Zeowl Infotech`,
        },
      ],
    },
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} />;
}
