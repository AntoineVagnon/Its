'use client';

import { useTranslations } from 'next-intl';
import { LogoStrip } from '@/components/ui/LogoStrip';
import { CLIENTS } from '@/lib/constants';

export function SocialProof() {
  const t = useTranslations('SocialProof');

  return (
    <div className="bg-its-dark py-10 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm font-medium text-gray-500 text-center mb-8">
          {t('heading')}
        </p>
        <LogoStrip logos={CLIENTS} variant="dark" className="md:gap-16" />
      </div>
    </div>
  );
}
