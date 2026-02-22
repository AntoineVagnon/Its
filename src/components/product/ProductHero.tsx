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
              <Button variant="ghost" href="#">
                {t('ctaDemo')}
              </Button>
              <Button href={`/${locale}/kontakt`}>
                {t('ctaQuote')}
              </Button>
            </div>
          </div>
          <div className="bg-its-navy-light rounded-2xl border border-white/10 aspect-[4/3] flex items-center justify-center relative overflow-hidden shadow-2xl">
            <div className="w-3/4 h-3/4 bg-white/5 rounded-lg border border-white/10 p-4 flex flex-col gap-3">
              <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="w-16 h-2 rounded bg-white/20 ml-2" />
              </div>
              <div className="flex gap-3 h-full">
                <div className="w-1/4 bg-white/5 rounded" />
                <div className="w-3/4 flex flex-col gap-2">
                  <div className="w-full h-8 bg-white/10 rounded" />
                  <div className="w-full h-full bg-white/5 rounded flex items-center justify-center relative overflow-hidden">
                    <div className="w-[150%] h-[1px] bg-white/10 absolute rotate-45" />
                    <div className="w-[150%] h-[1px] bg-white/10 absolute -rotate-45" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
