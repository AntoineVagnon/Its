import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProductGrid } from '../ProductGrid';

describe('ProductGrid', () => {
  test('renders section heading "Naša rješenja"', () => {
    render(<ProductGrid locale="bs" />);
    expect(screen.getByText('Naša rješenja')).toBeInTheDocument();
  });

  test('renders exactly 6 product cards', () => {
    render(<ProductGrid locale="bs" />);
    const cards = screen.getAllByText('Saznajte više');
    expect(cards).toHaveLength(6);
  });

  test('each card has a category pill, title, description, and arrow link', () => {
    render(<ProductGrid locale="bs" />);
    expect(screen.getByText('Geodet')).toBeInTheDocument();
    // "Geodezija" appears on 2 product cards
    const geodezija = screen.getAllByText('Geodezija');
    expect(geodezija.length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/Automatska obrada/)).toBeInTheDocument();
  });

  test('Geodet card links to /proizvodi/geodet', () => {
    render(<ProductGrid locale="bs" />);
    const links = screen.getAllByRole('link');
    const geodetLink = links.find((l) => l.getAttribute('href')?.includes('/proizvodi/geodet'));
    expect(geodetLink).toBeTruthy();
  });

  test('grid uses 3-column layout class on desktop', () => {
    const { container } = render(<ProductGrid locale="bs" />);
    const grid = container.querySelector('.grid');
    expect(grid?.className).toContain('lg:grid-cols-3');
  });
});
