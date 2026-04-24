import type { Metadata } from 'next';

export function productMetadata({
  locale,
  title,
  description,
  path,
}: {
  locale: string;
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = `${title} | iT Systems`;
  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: {
        bs: `/bs${path}`,
        en: `/en${path}`,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      type: 'website',
      siteName: 'iT Systems',
      locale: locale === 'bs' ? 'bs_BA' : 'en_US',
      url: `/${locale}${path}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
  };
}
