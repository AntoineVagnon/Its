import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from '../Button';

describe('Button', () => {
  test('renders primary variant with gold background classes', () => {
    render(<Button>Click me</Button>);
    const btn = screen.getByRole('button', { name: 'Click me' });
    expect(btn.className).toContain('bg-its-gold');
  });

  test('renders ghost variant with border classes', () => {
    render(<Button variant="ghost">Ghost</Button>);
    const btn = screen.getByRole('button', { name: 'Ghost' });
    expect(btn.className).toContain('border');
    expect(btn.className).toContain('bg-white/10');
  });

  test('renders link variant with blue text', () => {
    render(<Button variant="link">Link</Button>);
    const btn = screen.getByRole('button', { name: 'Link' });
    expect(btn.className).toContain('text-its-blue');
  });

  test('renders as <a> when href provided', () => {
    render(<Button href="/test">Link btn</Button>);
    const el = screen.getByRole('link', { name: 'Link btn' });
    expect(el.tagName).toBe('A');
    expect(el).toHaveAttribute('href', '/test');
  });

  test('renders as <button> when no href', () => {
    render(<Button>Btn</Button>);
    const el = screen.getByRole('button', { name: 'Btn' });
    expect(el.tagName).toBe('BUTTON');
  });

  test('applies custom className via cn()', () => {
    render(<Button className="mt-4">Styled</Button>);
    const btn = screen.getByRole('button', { name: 'Styled' });
    expect(btn.className).toContain('mt-4');
  });
});
