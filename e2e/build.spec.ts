import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve(__dirname, '../out');

test.describe('Static Build Output', () => {
  test('out/bs/index.html exists', () => {
    expect(fs.existsSync(path.join(outDir, 'bs/index.html'))).toBe(true);
  });

  test('out/en/index.html exists', () => {
    expect(fs.existsSync(path.join(outDir, 'en/index.html'))).toBe(true);
  });

  test('out/bs/proizvodi/geodet/index.html exists', () => {
    expect(fs.existsSync(path.join(outDir, 'bs/proizvodi/geodet/index.html'))).toBe(true);
  });

  test('out/bs/kontakt/index.html exists', () => {
    expect(fs.existsSync(path.join(outDir, 'bs/kontakt/index.html'))).toBe(true);
  });

  test('out/en/proizvodi/geodet/index.html exists', () => {
    expect(fs.existsSync(path.join(outDir, 'en/proizvodi/geodet/index.html'))).toBe(true);
  });

  test('out/en/kontakt/index.html exists', () => {
    expect(fs.existsSync(path.join(outDir, 'en/kontakt/index.html'))).toBe(true);
  });
});
