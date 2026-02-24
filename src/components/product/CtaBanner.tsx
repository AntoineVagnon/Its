'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/Button';

export function CtaBanner() {
  const t = useTranslations('Geodet');
  const locale = useLocale();

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Accent background */}
      <div className="absolute inset-0 bg-gradient-to-r from-its-accent/10 via-its-accent/5 to-transparent" />
      <div className="absolute inset-0 border-y border-its-accent/20" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
          {t('ctaBanner.heading')}
        </h2>
        <Button href={`/${locale}/kontakt`}>
          {t('ctaBanner.cta')}
        </Button>
      </div>
    </section>
  );
}
