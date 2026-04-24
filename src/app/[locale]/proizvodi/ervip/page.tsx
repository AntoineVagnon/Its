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
  BiometricVisual,
  HoursCalcVisual,
  AccessControlVisual,
} from '@/components/product/visuals/ErvipVisuals';

const VISUALS = [
  <BiometricVisual key="biometric" />,
  <HoursCalcVisual key="hours" />,
  <AccessControlVisual key="access" />,
];

const CLIENTS = ['ArcelorMittal', 'KJKP ViK', 'BH Telecom', 'Payten', 'Bingo d.o.o.'];

const RELATED = [
  { key: 'proman', icon: 'solar:document-text-linear', href: '/proizvodi/proman', namespaceKey: 'proman' },
  { key: 'help-desk', icon: 'solar:headphones-round-linear', href: '/proizvodi/help-desk', namespaceKey: 'help-desk' },
  { key: 'dkv-pro', icon: 'solar:bolt-linear', href: '/proizvodi/dkv-pro', namespaceKey: 'dkv-pro' },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Ervip' });
  return productMetadata({ locale, title: t('heading'), description: t('description'), path: '/proizvodi/ervip/' });
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
        <FeatureBlocks namespace="Ervip" visuals={VISUALS} />
        <PricingCards namespace="Ervip" />
        <ClientLogos namespace="Ervip" clients={CLIENTS} />
        <RelatedProducts namespace="Ervip" products={RELATED} />
        <CtaBanner namespace="Ervip" />
      </main>
      <Footer />
    </>
  );
}
