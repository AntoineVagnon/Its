import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { productMetadata } from '@/lib/metadata';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProductHero } from '@/components/product/ProductHero';
import { ValueProps } from '@/components/product/ValueProps';
import { FeatureBlocks } from '@/components/product/FeatureBlocks';
import { PricingCards } from '@/components/product/PricingCards';
import { ClientLogos } from '@/components/product/ClientLogos';
import { RelatedProducts } from '@/components/product/RelatedProducts';
import { CtaBanner } from '@/components/product/CtaBanner';

const GEODET_CLIENTS = ['BNPro d.o.o.', 'BH Telecom', 'Elektroprivreda BiH', 'Geomap d.o.o.', 'IPSA Institut'];

const GEODET_RELATED = [
  { key: 'geodet-profili', icon: 'solar:graph-up-linear', href: '/proizvodi/geodet-profili', namespaceKey: 'geodet-profili' },
  { key: 'proman', icon: 'solar:document-text-linear', href: '/proizvodi/proman', namespaceKey: 'proman' },
  { key: 'dkv-pro', icon: 'solar:bolt-linear', href: '/proizvodi/dkv-pro', namespaceKey: 'dkv-pro' },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Geodet' });
  return productMetadata({ locale, title: t('heading'), description: t('description'), path: '/proizvodi/geodet/' });
}

export default async function GeodetPage({
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
        <ProductHero namespace="Geodet" />
        <ValueProps namespace="Geodet" />
        <FeatureBlocks namespace="Geodet" />
        <PricingCards namespace="Geodet" />
        <ClientLogos namespace="Geodet" clients={GEODET_CLIENTS} />
        <RelatedProducts namespace="Geodet" products={GEODET_RELATED} />
        <CtaBanner namespace="Geodet" />
      </main>
      <Footer />
    </>
  );
}
