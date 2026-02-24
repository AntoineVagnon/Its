'use client';

import { useTranslations } from 'next-intl';
import { Icon } from '@iconify/react';

const features = [
  { key: 'instruments', icon: 'solar:devices-linear' },
  { key: 'forms', icon: 'solar:document-add-linear' },
  { key: 'cad', icon: 'solar:pen-new-square-linear' },
] as const;

export function ValueProps() {
  const t = useTranslations('Geodet');

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-3 gap-10">
        {features.map((f) => (
          <div key={f.key} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-its-accent/20 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-its-accent/10 flex items-center justify-center mb-5">
              <Icon icon={f.icon} width={24} className="text-its-accent" />
            </div>
            <h4 className="text-lg font-medium tracking-tight text-white mb-2">
              {t(`features.${f.key}.title`)}
            </h4>
            <p className="text-sm font-light text-gray-400">
              {t(`features.${f.key}.description`)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
