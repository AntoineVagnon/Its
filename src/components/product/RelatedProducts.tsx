'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Card } from '@/components/ui/Card';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface RelatedProduct {
  key: string;
  icon: string;
  href: string;
  namespaceKey: string;
}

interface RelatedProductsProps {
  namespace?: string;
  products: RelatedProduct[];
}

export function RelatedProducts({ namespace = 'Geodet', products }: RelatedProductsProps) {
  const t = useTranslations(namespace);
  const locale = useLocale();

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 border-t border-white/5">
      <ScrollReveal>
        <h2 className="text-2xl font-bold tracking-tight text-white mb-10">
          {t('relatedProducts.heading')}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <Card
              key={p.key}
              icon={p.icon}
              category={t(`relatedProducts.items.${p.key}.category`)}
              title={t(`relatedProducts.items.${p.key}.title`)}
              description={t(`relatedProducts.items.${p.key}.description`)}
              linkText={t('relatedProducts.learnMore')}
              href={`/${locale}${p.href}`}
            />
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
