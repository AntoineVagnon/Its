import { describe, test, expect } from 'vitest';
import bs from '@/messages/bs.json';
import en from '@/messages/en.json';

function getAllKeys(obj: Record<string, unknown>, prefix = ''): string[] {
  const keys: string[] = [];
  for (const key of Object.keys(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      keys.push(...getAllKeys(obj[key] as Record<string, unknown>, fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
}

function getAllValues(obj: Record<string, unknown>): string[] {
  const values: string[] = [];
  for (const value of Object.values(obj)) {
    if (typeof value === 'string') {
      values.push(value);
    } else if (typeof value === 'object' && value !== null) {
      values.push(...getAllValues(value as Record<string, unknown>));
    }
  }
  return values;
}

describe('i18n routing', () => {
  test('routing.ts exports locales ["bs", "en"] and defaultLocale "bs"', async () => {
    const { locales, defaultLocale } = await import('@/i18n/routing');
    expect(locales).toEqual(['bs', 'en']);
    expect(defaultLocale).toBe('bs');
  });
});

describe('Translation files', () => {
  test('bs.json is valid JSON and has all required namespaces', () => {
    const namespaces = ['Header', 'Hero', 'Products', 'WhyUs', 'News', 'Geodet', 'GeodetProfili', 'ProMan', 'DkvPro', 'Ervip', 'HelpDesk', 'Contact', 'Footer', 'SocialProof'];
    for (const ns of namespaces) {
      expect(bs).toHaveProperty(ns);
    }
  });

  test('en.json is valid JSON and has all required namespaces', () => {
    const namespaces = ['Header', 'Hero', 'Products', 'WhyUs', 'News', 'Geodet', 'GeodetProfili', 'ProMan', 'DkvPro', 'Ervip', 'HelpDesk', 'Contact', 'Footer', 'SocialProof'];
    for (const ns of namespaces) {
      expect(en).toHaveProperty(ns);
    }
  });

  test('bs.json and en.json have identical key structures', () => {
    const bsKeys = getAllKeys(bs as Record<string, unknown>).sort();
    const enKeys = getAllKeys(en as Record<string, unknown>).sort();
    expect(bsKeys).toEqual(enKeys);
  });

  test('bs.json contains proper Bosnian diacritics (č, š, ž, ć, đ)', () => {
    const allText = JSON.stringify(bs);
    expect(allText).toContain('č');
    expect(allText).toContain('š');
    expect(allText).toContain('ž');
    expect(allText).toContain('ć');
  });

  test('no translation values are empty strings', () => {
    const bsValues = getAllValues(bs as Record<string, unknown>);
    const enValues = getAllValues(en as Record<string, unknown>);
    for (const v of bsValues) {
      expect(v.length).toBeGreaterThan(0);
    }
    for (const v of enValues) {
      expect(v.length).toBeGreaterThan(0);
    }
  });
});
