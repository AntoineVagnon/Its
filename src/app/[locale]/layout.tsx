import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';
import '@/app/globals.css';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Hero' });

  const title = locale === 'bs'
    ? 'iT Systems | Softverska rješenja'
    : 'iT Systems | Software Solutions';
  const description = t('subtitle');

  return {
    title,
    description,
    metadataBase: new URL('https://its.ba'),
    alternates: {
      canonical: `/${locale}/`,
      languages: {
        bs: '/bs/',
        en: '/en/',
      },
    },
    openGraph: {
      title,
      description,
      type: 'website',
      siteName: 'iT Systems',
      locale: locale === 'bs' ? 'bs_BA' : 'en_US',
      url: `/${locale}/`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.variable}>
      <body className="bg-its-dark text-its-text font-sans antialiased selection:bg-its-accent selection:text-its-dark">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
