'use client';

import { useTranslations } from 'next-intl';

const newsImages: Record<string, string> = {
  news1: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
  news2: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80',
  news3: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
};

export function LatestNews() {
  const t = useTranslations('News');
  const newsKeys = ['news1', 'news2', 'news3'] as const;

  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-white">
            {t('heading')}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {newsKeys.map((key) => (
            <div key={key} className="group block bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="aspect-[16/9] overflow-hidden relative">
                <img
                  src={newsImages[key]}
                  alt={t(`items.${key}.imageAlt`)}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-its-accent mb-2 block">
                  {t(`items.${key}.date`)}
                </span>
                <h3 className="text-lg font-medium tracking-tight text-white mb-2 group-hover:text-its-accent transition-colors">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="text-sm font-light text-gray-400 line-clamp-2">
                  {t(`items.${key}.excerpt`)}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
