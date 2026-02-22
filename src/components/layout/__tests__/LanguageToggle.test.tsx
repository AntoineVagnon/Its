import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LanguageToggle } from '../LanguageToggle';

describe('LanguageToggle', () => {
  test('renders BS and EN options', () => {
    render(<LanguageToggle />);
    expect(screen.getByText('BS')).toBeInTheDocument();
    expect(screen.getByText('EN')).toBeInTheDocument();
  });

  test('current locale (bs) is visually emphasized (darker text)', () => {
    render(<LanguageToggle />);
    const bs = screen.getByText('BS');
    expect(bs.className).toContain('text-its-navy');
  });

  test('other locale is a clickable link', () => {
    render(<LanguageToggle />);
    const en = screen.getByText('EN');
    expect(en.tagName).toBe('A');
  });
});
