import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProductHero } from '@/components/product/ProductHero';
import { ValueProps } from '@/components/product/ValueProps';
import { PricingCards } from '@/components/product/PricingCards';
import { CtaBanner } from '@/components/product/CtaBanner';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Ervip' });
  return {
    title: `${t('heading')} | iT Systems`,
    description: t('description'),
  };
}

export default async function ErvipPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <ProductHero namespace="Ervip" />
        <ValueProps namespace="Ervip" />
        <PricingCards namespace="Ervip" />
        <CtaBanner namespace="Ervip" />
      </main>
      <Footer />
    </>
  );
}
