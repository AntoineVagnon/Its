import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LogoStrip } from '../LogoStrip';

describe('LogoStrip', () => {
  const logos = ['IBM', 'MICROSOFT', 'HCL'];

  test('renders all provided logo names', () => {
    render(<LogoStrip logos={logos} />);
    for (const name of logos) {
      expect(screen.getByText(name)).toBeInTheDocument();
    }
  });

  test('light variant uses text-white', () => {
    render(<LogoStrip logos={logos} variant="light" />);
    const el = screen.getByText('IBM');
    expect(el.className).toContain('text-white');
  });

  test('dark variant uses text-white/30', () => {
    render(<LogoStrip logos={logos} variant="dark" />);
    const el = screen.getByText('IBM');
    expect(el.className).toContain('text-white/30');
  });
});
