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
  TerrainProfileVisual,
  FlexImportVisual,
  ProfileExportVisual,
} from '@/components/product/visuals/GeodetProfiliVisuals';

const VISUALS = [
  <TerrainProfileVisual key="terrain" />,
  <FlexImportVisual key="import" />,
  <ProfileExportVisual key="export" />,
];

const CLIENTS = ['BNPro d.o.o.', 'Geomap d.o.o.', 'IPSA Institut', 'GeoTerra d.o.o.', 'KantGEO'];

const RELATED = [
  { key: 'geodet', icon: 'solar:map-point-linear', href: '/proizvodi/geodet', namespaceKey: 'geodet' },
  { key: 'proman', icon: 'solar:document-text-linear', href: '/proizvodi/proman', namespaceKey: 'proman' },
  { key: 'dkv-pro', icon: 'solar:bolt-linear', href: '/proizvodi/dkv-pro', namespaceKey: 'dkv-pro' },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'GeodetProfili' });
  return productMetadata({ locale, title: t('heading'), description: t('description'), path: '/proizvodi/geodet-profili/' });
}

export default async function GeodetProfiliPage({
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
        <ProductHero namespace="GeodetProfili" />
        <ValueProps namespace="GeodetProfili" />
        <FeatureBlocks namespace="GeodetProfili" visuals={VISUALS} />
        <PricingCards namespace="GeodetProfili" />
        <ClientLogos namespace="GeodetProfili" clients={CLIENTS} />
        <RelatedProducts namespace="GeodetProfili" products={RELATED} />
        <CtaBanner namespace="GeodetProfili" />
      </main>
      <Footer />
    </>
  );
}
