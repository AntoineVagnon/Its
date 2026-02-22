import { useTranslations } from 'next-intl';
import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/Button';

export function PricingCards({ locale }: { locale: string }) {
  const t = useTranslations('Geodet');

  const standardFeatures = ['basicFeatures', 'coordinateTransformation', 'usbHardlock'] as const;
  const premiumFeatures = ['allStandard', 'gpsModule', 'googleEarthKml'] as const;

  return (
    <div className="max-w-4xl mx-auto px-6 pb-24">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-semibold tracking-tight text-its-navy mb-3">
          {t('pricing.heading')}
        </h3>
        <p className="text-sm font-light text-its-muted">
          {t('pricing.subtitle')}
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Standard */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col">
          <h4 className="text-lg font-medium tracking-tight text-its-navy mb-2">
            {t('pricing.standard.name')}
          </h4>
          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-3xl font-semibold tracking-tight text-its-navy">
              {t('pricing.standard.price')}
            </span>
            <span className="text-sm font-light text-its-muted">
              {t('pricing.perLicense')}
            </span>
          </div>
          <ul className="space-y-4 mb-8 flex-1">
            {standardFeatures.map((key) => (
              <li key={key} className="flex items-start gap-3 text-sm font-light text-its-text">
                <Icon icon="solar:check-circle-linear" className="text-its-blue mt-0.5 shrink-0" width={18} />
                {t(`pricing.standard.features.${key}`)}
              </li>
            ))}
          </ul>
          <Button variant="outline" href={`/${locale}/kontakt`} className="w-full py-2.5">
            {t('ctaQuote')}
          </Button>
        </div>

        {/* Premium */}
        <div className="bg-white rounded-2xl p-8 border-2 border-its-gold shadow-md flex flex-col relative">
          <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-its-gold text-its-navy text-xs font-semibold px-3 py-1 rounded-full">
            {t('pricing.recommended')}
          </div>
          <h4 className="text-lg font-medium tracking-tight text-its-navy mb-2">
            {t('pricing.premium.name')}
          </h4>
          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-3xl font-semibold tracking-tight text-its-navy">
              {t('pricing.premium.price')}
            </span>
            <span className="text-sm font-light text-its-muted">
              {t('pricing.perLicense')}
            </span>
          </div>
          <ul className="space-y-4 mb-8 flex-1">
            {premiumFeatures.map((key, i) => (
              <li
                key={key}
                className={`flex items-start gap-3 text-sm ${i === 0 ? 'font-light text-its-text' : 'font-medium text-its-navy'}`}
              >
                <Icon icon="solar:check-circle-linear" className="text-its-gold mt-0.5 shrink-0" width={18} />
                {t(`pricing.premium.features.${key}`)}
              </li>
            ))}
          </ul>
          <Button variant="dark" href={`/${locale}/kontakt`} className="w-full py-2.5">
            {t('ctaQuote')}
          </Button>
        </div>
      </div>
    </div>
  );
}
