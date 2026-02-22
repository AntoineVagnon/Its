import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['bs', 'en'],
  defaultLocale: 'bs',
});

export const locales = routing.locales;
export const defaultLocale = routing.defaultLocale;
