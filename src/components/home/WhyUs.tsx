'use client';

import { useTranslations } from 'next-intl';

export function WhyUs() {
  const t = useTranslations('WhyUs');

  return (
    <section id="o-nama" className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm col-span-2 sm:col-span-1 lg:col-span-2">
            <div className="text-4xl font-semibold tracking-tight text-its-gold mb-2">
              {t('stats.years.value')}
            </div>
            <div className="text-sm font-medium text-its-navy">
              {t('stats.years.label')}
            </div>
          </div>
          <div className="bg-its-navy p-6 rounded-xl border border-transparent shadow-sm col-span-1">
            <div className="text-4xl font-semibold tracking-tight text-white mb-2">
              {t('stats.clients.value')}
            </div>
            <div className="text-sm font-medium text-gray-300">
              {t('stats.clients.label')}
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm col-span-1">
            <div className="text-4xl font-semibold tracking-tight text-its-gold mb-2">
              {t('stats.products.value')}
            </div>
            <div className="text-sm font-medium text-its-navy">
              {t('stats.products.label')}
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <h2 className="text-3xl font-semibold tracking-tight text-its-navy mb-6">
            {t('heading')}
          </h2>
          <div className="space-y-4 text-base font-light text-its-muted leading-relaxed">
            <p>{t('description1')}</p>
            <p>{t('description2')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
