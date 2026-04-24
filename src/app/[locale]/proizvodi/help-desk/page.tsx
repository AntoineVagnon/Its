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
  TicketingVisual,
  SlaVisual,
  CustomerPortalVisual,
} from '@/components/product/visuals/HelpDeskVisuals';

const VISUALS = [
  <TicketingVisual key="tickets" />,
  <SlaVisual key="sla" />,
  <CustomerPortalVisual key="portal" />,
];

const CLIENTS = ['BH Telecom', 'Payten', 'ArcelorMittal', 'Ministarstvo rada FBiH', 'IPSA Institut'];

const RELATED = [
  { key: 'proman', icon: 'solar:document-text-linear', href: '/proizvodi/proman', namespaceKey: 'proman' },
  { key: 'ervip', icon: 'solar:clock-circle-linear', href: '/proizvodi/ervip', namespaceKey: 'ervip' },
  { key: 'geodet', icon: 'solar:map-point-linear', href: '/proizvodi/geodet', namespaceKey: 'geodet' },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'HelpDesk' });
  return productMetadata({ locale, title: t('heading'), description: t('description'), path: '/proizvodi/help-desk/' });
}

export default async function HelpDeskPage({
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
        <ProductHero namespace="HelpDesk" />
        <ValueProps namespace="HelpDesk" />
        <FeatureBlocks namespace="HelpDesk" visuals={VISUALS} />
        <PricingCards namespace="HelpDesk" />
        <ClientLogos namespace="HelpDesk" clients={CLIENTS} />
        <RelatedProducts namespace="HelpDesk" products={RELATED} />
        <CtaBanner namespace="HelpDesk" />
      </main>
      <Footer />
    </>
  );
}
