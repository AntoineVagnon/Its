import { describe, test, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Scaffolding', () => {
  const globalsCss = fs.readFileSync(
    path.resolve(__dirname, '../app/globals.css'),
    'utf-8'
  );

  test('globals.css contains @import "tailwindcss"', () => {
    expect(globalsCss).toContain('@import "tailwindcss"');
  });

  test('globals.css defines --color-its-gold: #EABB00', () => {
    expect(globalsCss).toContain('--color-its-gold: #EABB00');
  });

  test('globals.css defines all 9 design token colors', () => {
    const tokens = [
      '--color-its-navy',
      '--color-its-navy-light',
      '--color-its-gold',
      '--color-its-gold-dark',
      '--color-its-gold-light',
      '--color-its-blue',
      '--color-its-surface',
      '--color-its-text',
      '--color-its-muted',
    ];
    for (const token of tokens) {
      expect(globalsCss).toContain(token);
    }
  });

  test('next.config.ts exports output: "export"', async () => {
    const configContent = fs.readFileSync(
      path.resolve(__dirname, '../../next.config.ts'),
      'utf-8'
    );
    expect(configContent).toContain("output: 'export'");
  });
});
