'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/Button';

export function ProductHero() {
  const t = useTranslations('Geodet');
  const locale = useLocale();

  return (
    <div className="bg-its-dark text-white py-20 relative overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      {/* Glow */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-its-accent/8 blur-[160px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-6">
          <a href={`/${locale}/`} className="hover:text-white transition-colors">
            {t('breadcrumb.home')}
          </a>
          <span>/</span>
          <a href={`/${locale}/#proizvodi`} className="hover:text-white transition-colors">
            {t('breadcrumb.products')}
          </a>
          <span>/</span>
          <span className="text-its-accent">{t('breadcrumb.geodezija')}</span>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-its-accent/10 text-its-accent text-xs font-medium rounded-lg mb-4 border border-its-accent/20">
              {t('category')}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {t('heading')}
            </h1>
            <p className="text-lg font-light text-gray-400 mb-8 leading-relaxed">
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
          {/* Abstract glass UI graphic */}
          <div className="hidden lg:block">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-3 h-3 rounded-full bg-red-400/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <div className="w-3 h-3 rounded-full bg-green-400/60" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-its-accent/20 flex items-center justify-center">
                    <div className="w-2 h-2 bg-its-accent rounded-sm" />
                  </div>
                  <div className="flex-1 h-3 bg-white/10 rounded-full" />
                  <div className="w-16 h-3 bg-its-accent/20 rounded-full" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white/40 rounded-sm" />
                  </div>
                  <div className="flex-1 h-3 bg-white/10 rounded-full" />
                  <div className="w-12 h-3 bg-white/10 rounded-full" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white/40 rounded-sm" />
                  </div>
                  <div className="flex-1 h-3 bg-white/10 rounded-full" />
                  <div className="w-20 h-3 bg-white/10 rounded-full" />
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="bg-its-accent/10 rounded-xl p-4 border border-its-accent/20">
                  <div className="text-xs text-gray-500 mb-1">Standard</div>
                  <div className="text-lg font-bold text-its-accent">1,000 &euro;</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-xs text-gray-500 mb-1">Premium</div>
                  <div className="text-lg font-bold text-white">1,200 &euro;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
