'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/Button';

export function ProductHero() {
  const t = useTranslations('Geodet');
  const locale = useLocale();

  return (
    <div className="bg-its-navy text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-2 text-xs font-medium text-gray-400 mb-6">
          <a href={`/${locale}/`} className="hover:text-white transition-colors">
            {t('breadcrumb.home')}
          </a>
          <span>/</span>
          <a href={`/${locale}/#proizvodi`} className="hover:text-white transition-colors">
            {t('breadcrumb.products')}
          </a>
          <span>/</span>
          <span className="text-its-gold">{t('breadcrumb.geodezija')}</span>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-2.5 py-1 bg-white/10 text-its-gold text-xs font-medium rounded-md mb-4">
              {t('category')}
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              {t('heading')}
            </h1>
            <p className="text-lg font-light text-gray-300 mb-8 leading-relaxed">
              {t('description')}
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" href={`/${locale}/kontakt`}>
                {t('ctaDemo')}
              </Button>
              <Button href={`/${locale}/kontakt`}>
                {t('ctaQuote')}
              </Button>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 aspect-[4/3] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
              alt={t('heroImageAlt')}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
