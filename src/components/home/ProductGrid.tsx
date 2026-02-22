import { useTranslations } from 'next-intl';
import { Card } from '@/components/ui/Card';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { PRODUCTS } from '@/lib/constants';

export function ProductGrid({ locale }: { locale: string }) {
  const t = useTranslations('Products');

  return (
    <section id="proizvodi" className="py-24 max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-3xl font-semibold tracking-tight text-its-navy mb-4">
          {t('heading')}
        </h2>
        <p className="text-base font-light text-its-muted max-w-2xl">
          {t('subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCTS.map((product, i) => (
          <ScrollReveal key={product.id} delay={i * 0.1}>
            <Card
              icon={product.icon}
              category={t(`categories.${product.categoryKey}`)}
              title={t(`items.${product.id}.title`)}
              description={t(`items.${product.id}.description`)}
              linkText={t('learnMore')}
              href={product.href === '#' ? '#' : `/${locale}${product.href}`}
            />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
