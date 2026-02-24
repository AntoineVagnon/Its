'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/Button';

export function PricingCards() {
  const t = useTranslations('Geodet');
  const locale = useLocale();

  const standardFeatures = ['basicFeatures', 'coordinateTransformation', 'usbHardlock'] as const;
  const premiumFeatures = ['allStandard', 'gpsModule', 'googleEarthKml'] as const;

  return (
    <div className="max-w-4xl mx-auto px-6 pb-24">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold tracking-tight text-white mb-3">
          {t('pricing.heading')}
        </h3>
        <p className="text-base font-light text-gray-400">
          {t('pricing.subtitle')}
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Standard */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 flex flex-col">
          <h4 className="text-lg font-medium tracking-tight text-white mb-2">
            {t('pricing.standard.name')}
          </h4>
          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-3xl font-bold tracking-tight text-white">
              {t('pricing.standard.price')}
            </span>
            <span className="text-sm font-light text-gray-400">
              {t('pricing.perLicense')}
            </span>
          </div>
          <ul className="space-y-4 mb-8 flex-1">
            {standardFeatures.map((key) => (
              <li key={key} className="flex items-start gap-3 text-sm font-light text-gray-300">
                <Icon icon="solar:check-circle-linear" className="text-its-accent mt-0.5 shrink-0" width={18} />
                {t(`pricing.standard.features.${key}`)}
              </li>
            ))}
          </ul>
          <Button variant="outline" href={`/${locale}/kontakt`} className="w-full py-2.5">
            {t('ctaQuote')}
          </Button>
        </div>

        {/* Premium */}
        <div className="bg-its-dark-card rounded-2xl p-8 border-2 border-its-accent/30 shadow-lg shadow-its-accent/5 flex flex-col relative">
          <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-its-accent text-its-dark text-xs font-semibold px-3 py-1 rounded-full">
            {t('pricing.recommended')}
          </div>
          <h4 className="text-lg font-medium tracking-tight text-white mb-2">
            {t('pricing.premium.name')}
          </h4>
          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-3xl font-bold tracking-tight text-its-accent">
              {t('pricing.premium.price')}
            </span>
            <span className="text-sm font-light text-gray-400">
              {t('pricing.perLicense')}
            </span>
          </div>
          <ul className="space-y-4 mb-8 flex-1">
            {premiumFeatures.map((key, i) => (
              <li
                key={key}
                className={`flex items-start gap-3 text-sm ${i === 0 ? 'font-light text-gray-300' : 'font-medium text-white'}`}
              >
                <Icon icon="solar:check-circle-linear" className="text-its-accent mt-0.5 shrink-0" width={18} />
                {t(`pricing.premium.features.${key}`)}
              </li>
            ))}
          </ul>
          <Button href={`/${locale}/kontakt`} className="w-full py-2.5">
            {t('ctaQuote')}
          </Button>
        </div>
      </div>
    </div>
  );
}
