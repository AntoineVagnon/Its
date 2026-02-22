'use client';

import { useTranslations } from 'next-intl';
import { Icon } from '@iconify/react';
import { COMPANY } from '@/lib/constants';

const infoItems = [
  {
    icon: 'solar:map-point-linear',
    labelKey: 'address',
    lines: [COMPANY.address, COMPANY.city],
  },
  {
    icon: 'solar:phone-linear',
    labelKey: 'phoneLabel',
    lines: [COMPANY.phone, COMPANY.viber],
  },
  {
    icon: 'solar:letter-linear',
    labelKey: 'emailLabel',
    lines: [COMPANY.email],
  },
  {
    icon: 'solar:clock-circle-linear',
    labelKey: 'hours',
    lines: [COMPANY.hours],
  },
];

export function ContactInfo() {
  const t = useTranslations('Contact');

  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
      <h3 className="text-lg font-medium tracking-tight text-its-navy mb-6">
        {t('info.heading')}
      </h3>
      <ul className="space-y-6">
        {infoItems.map((item) => (
          <li key={item.labelKey} className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
              <Icon icon={item.icon} className="text-its-navy" width={18} />
            </div>
            <div>
              <p className="text-xs font-medium text-its-muted uppercase tracking-wide mb-1">
                {t(`info.${item.labelKey}`)}
              </p>
              <p className="text-sm font-normal text-its-navy">
                {item.lines.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < item.lines.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
