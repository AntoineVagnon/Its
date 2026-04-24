import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve(__dirname, '../out');

const LOCALES = ['bs', 'en'] as const;
const PRODUCT_PAGES = [
  'geodet',
  'geodet-profili',
  'proman',
  'dkv-pro',
  'ervip',
  'help-desk',
] as const;

test.describe('Static Build Output', () => {
  for (const locale of LOCALES) {
    test(`out/${locale}/index.html exists`, () => {
      expect(fs.existsSync(path.join(outDir, `${locale}/index.html`))).toBe(true);
    });

    test(`out/${locale}/kontakt/index.html exists`, () => {
      expect(fs.existsSync(path.join(outDir, `${locale}/kontakt/index.html`))).toBe(true);
    });

    for (const product of PRODUCT_PAGES) {
      test(`out/${locale}/proizvodi/${product}/index.html exists`, () => {
        expect(fs.existsSync(path.join(outDir, `${locale}/proizvodi/${product}/index.html`))).toBe(true);
      });
    }
  }
});
