'use client';

import { useTranslations } from 'next-intl';
import { Icon } from '@iconify/react';

const newsImages: Record<string, string> = {
  news1: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
  news2: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80',
  news3: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
};

export function LatestNews() {
  const t = useTranslations('News');
  const newsKeys = ['news1', 'news2', 'news3'] as const;

  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-its-navy">
            {t('heading')}
          </h2>
          <a
            href="#"
            className="hidden sm:flex items-center text-sm font-medium text-its-blue hover:text-its-navy transition-colors"
          >
            {t('allNews')}
            <Icon icon="solar:arrow-right-linear" width={16} className="ml-1" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {newsKeys.map((key) => (
            <a key={key} href="#" className="group block">
              <div className="aspect-[16/9] rounded-xl mb-4 overflow-hidden border border-gray-100 relative">
                <img
                  src={newsImages[key]}
                  alt={t(`items.${key}.imageAlt`)}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-xs font-medium text-its-gold mb-2 block">
                {t(`items.${key}.date`)}
              </span>
              <h3 className="text-lg font-medium tracking-tight text-its-navy mb-2 group-hover:text-its-blue transition-colors">
                {t(`items.${key}.title`)}
              </h3>
              <p className="text-sm font-light text-its-muted line-clamp-2">
                {t(`items.${key}.excerpt`)}
              </p>
            </a>
          ))}
        </div>

        <a
          href="#"
          className="sm:hidden mt-8 flex items-center justify-center text-sm font-medium text-its-blue"
        >
          {t('allNews')}
          <Icon icon="solar:arrow-right-linear" width={16} className="ml-1" />
        </a>
      </div>
    </section>
  );
}
