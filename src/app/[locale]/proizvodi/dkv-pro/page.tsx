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
import {
  ElectrocalcVisual,
  RouteProfileVisual,
  TechDocsVisual,
} from '@/components/product/visuals/DkvProVisuals';

const VISUALS = [
  <ElectrocalcVisual key="calc" />,
  <RouteProfileVisual key="route" />,
  <TechDocsVisual key="docs" />,
];

const CLIENTS = ['Elektroprivreda BiH', 'Elektroprijenos BiH', 'JP Elektroprivreda HZ HB', 'Elektrodistribucija Sarajevo'];

const RELATED = [
  { key: 'proman', icon: 'solar:document-text-linear', href: '/proizvodi/proman', namespaceKey: 'proman' },
  { key: 'geodet', icon: 'solar:map-point-linear', href: '/proizvodi/geodet', namespaceKey: 'geodet' },
  { key: 'ervip', icon: 'solar:clock-circle-linear', href: '/proizvodi/ervip', namespaceKey: 'ervip' },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'DkvPro' });
  return productMetadata({ locale, title: t('heading'), description: t('description'), path: '/proizvodi/dkv-pro/' });
}

export default async function DkvProPage({
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
        <ProductHero namespace="DkvPro" />
        <ValueProps namespace="DkvPro" />
        <FeatureBlocks namespace="DkvPro" visuals={VISUALS} />
        <PricingCards namespace="DkvPro" />
        <ClientLogos namespace="DkvPro" clients={CLIENTS} />
        <RelatedProducts namespace="DkvPro" products={RELATED} />
        <CtaBanner namespace="DkvPro" />
      </main>
      <Footer />
    </>
  );
}
