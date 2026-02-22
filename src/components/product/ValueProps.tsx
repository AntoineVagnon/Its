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
          <div key={f.key}>
            <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center mb-5">
              <Icon icon={f.icon} width={20} className="text-its-navy" />
            </div>
            <h4 className="text-base font-medium tracking-tight text-its-navy mb-2">
              {t(`features.${f.key}.title`)}
            </h4>
            <p className="text-sm font-light text-its-muted">
              {t(`features.${f.key}.description`)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
