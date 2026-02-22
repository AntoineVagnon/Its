'use client';

import { useTranslations } from 'next-intl';
import { Icon } from '@iconify/react';

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
              <div className="aspect-[16/9] bg-gray-50 rounded-xl mb-4 overflow-hidden border border-gray-100 relative">
                <div className="absolute inset-0 bg-its-navy/5 group-hover:bg-transparent transition-colors" />
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
