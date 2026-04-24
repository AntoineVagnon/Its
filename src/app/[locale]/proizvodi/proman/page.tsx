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
  ProtocolVisual,
  ArchiveSearchVisual,
  WorkflowVisual,
} from '@/components/product/visuals/ProManVisuals';

const VISUALS = [
  <ProtocolVisual key="protocol" />,
  <ArchiveSearchVisual key="archive" />,
  <WorkflowVisual key="workflow" />,
];

const CLIENTS = ['Općina Bosanska Krupa', 'BH Telecom', 'Ministarstvo rada FBiH', 'KJKP Rad', 'Unsko-sanski kanton'];

const RELATED = [
  { key: 'help-desk', icon: 'solar:headphones-round-linear', href: '/proizvodi/help-desk', namespaceKey: 'help-desk' },
  { key: 'ervip', icon: 'solar:clock-circle-linear', href: '/proizvodi/ervip', namespaceKey: 'ervip' },
  { key: 'geodet', icon: 'solar:map-point-linear', href: '/proizvodi/geodet', namespaceKey: 'geodet' },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ProMan' });
  return productMetadata({ locale, title: t('heading'), description: t('description'), path: '/proizvodi/proman/' });
}

export default async function ProManPage({
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
        <ProductHero namespace="ProMan" />
        <ValueProps namespace="ProMan" />
        <FeatureBlocks namespace="ProMan" visuals={VISUALS} />
        <PricingCards namespace="ProMan" />
        <ClientLogos namespace="ProMan" clients={CLIENTS} />
        <RelatedProducts namespace="ProMan" products={RELATED} />
        <CtaBanner namespace="ProMan" />
      </main>
      <Footer />
    </>
  );
}
