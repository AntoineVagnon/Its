import { setRequestLocale } from 'next-intl/server';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { SocialProof } from '@/components/home/SocialProof';
import { ProductGrid } from '@/components/home/ProductGrid';
import { WhyUs } from '@/components/home/WhyUs';
import { LatestNews } from '@/components/home/LatestNews';

export default async function HomePage({
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
        <Hero />
        <SocialProof />
        <ProductGrid />
        <WhyUs />
        <LatestNews />
      </main>
      <Footer />
    </>
  );
}
