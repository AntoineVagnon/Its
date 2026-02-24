'use client';

import { useTranslations } from 'next-intl';

export function WhyUs() {
  const t = useTranslations('WhyUs');

  return (
    <section id="o-nama" className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 grid grid-cols-2 gap-6">
          <div className="bg-its-accent/10 backdrop-blur-sm p-6 rounded-2xl border border-its-accent/20 col-span-2 sm:col-span-1 lg:col-span-2">
            <div className="text-4xl font-bold tracking-tight text-its-accent mb-2">
              {t('stats.years.value')}
            </div>
            <div className="text-sm font-medium text-gray-300">
              {t('stats.years.label')}
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 col-span-1">
            <div className="text-4xl font-bold tracking-tight text-white mb-2">
              {t('stats.clients.value')}
            </div>
            <div className="text-sm font-medium text-gray-400">
              {t('stats.clients.label')}
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 col-span-1">
            <div className="text-4xl font-bold tracking-tight text-its-accent mb-2">
              {t('stats.products.value')}
            </div>
            <div className="text-sm font-medium text-gray-400">
              {t('stats.products.label')}
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <h2 className="text-4xl font-bold tracking-tight text-white mb-6">
            {t('heading')}
          </h2>
          <div className="space-y-4 text-lg font-light text-gray-400 leading-relaxed">
            <p>{t('description1')}</p>
            <p>{t('description2')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
