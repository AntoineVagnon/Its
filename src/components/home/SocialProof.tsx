'use client';

import { useTranslations } from 'next-intl';
import { LogoStrip } from '@/components/ui/LogoStrip';
import { CLIENTS } from '@/lib/constants';

export function SocialProof() {
  const t = useTranslations('SocialProof');

  return (
    <div className="bg-white py-10 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm font-medium text-its-muted text-center mb-8">
          {t('heading')}
        </p>
        <LogoStrip logos={CLIENTS} variant="dark" className="md:gap-16" />
      </div>
    </div>
  );
}
