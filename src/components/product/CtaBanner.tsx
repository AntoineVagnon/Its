'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/Button';

export function CtaBanner() {
  const t = useTranslations('Geodet');
  const locale = useLocale();

  return (
    <section className="bg-its-gold py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-its-navy mb-6">
          {t('ctaBanner.heading')}
        </h2>
        <Button variant="dark" href={`/${locale}/kontakt`}>
          {t('ctaBanner.cta')}
        </Button>
      </div>
    </section>
  );
}
