import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { MapEmbed } from '@/components/contact/MapEmbed';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Contact' });
  return {
    title: `${t('heading')} | iT Systems`,
    description: t('subtitle'),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Contact');

  return (
    <>
      <Header />
      <main>
        <section className="py-24 pt-32 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-white mb-3">
              {t('heading')}
            </h1>
            <p className="text-lg font-light text-gray-400">
              {t('subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2 space-y-8">
              <ContactInfo />
              <MapEmbed />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
