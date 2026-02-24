'use client';

import { useTranslations } from 'next-intl';
import { Icon } from '@iconify/react';

const featureIcons: Record<string, string[]> = {
  Geodet: ['solar:devices-linear', 'solar:document-add-linear', 'solar:pen-new-square-linear'],
  GeodetProfili: ['solar:graph-up-linear', 'solar:import-linear', 'solar:export-linear'],
  ProMan: ['solar:document-text-linear', 'solar:archive-linear', 'solar:routing-linear'],
  DkvPro: ['solar:bolt-linear', 'solar:route-linear', 'solar:clipboard-list-linear'],
  Ervip: ['solar:fingerprint-scan-linear', 'solar:clock-circle-linear', 'solar:lock-keyhole-linear'],
  HelpDesk: ['solar:ticket-linear', 'solar:shield-check-linear', 'solar:monitor-linear'],
};

const featureKeys = ['f1', 'f2', 'f3'] as const;

interface ValuePropsProps {
  namespace?: string;
}

export function ValueProps({ namespace = 'Geodet' }: ValuePropsProps) {
  const t = useTranslations(namespace);
  const icons = featureIcons[namespace] || featureIcons.Geodet;

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-3 gap-10">
        {featureKeys.map((key, i) => (
          <div key={key} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-its-accent/20 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-its-accent/10 flex items-center justify-center mb-5">
              <Icon icon={icons[i]} width={24} className="text-its-accent" />
            </div>
            <h4 className="text-lg font-medium tracking-tight text-white mb-2">
              {t(`features.${key}.title`)}
            </h4>
            <p className="text-sm font-light text-gray-400">
              {t(`features.${key}.description`)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
