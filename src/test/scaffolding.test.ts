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

  test('globals.css defines --color-its-accent: #FACC15', () => {
    expect(globalsCss).toContain('--color-its-accent: #FACC15');
  });

  test('globals.css defines all design token colors', () => {
    const tokens = [
      '--color-its-dark',
      '--color-its-dark-light',
      '--color-its-dark-card',
      '--color-its-accent',
      '--color-its-accent-dark',
      '--color-its-accent-light',
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
