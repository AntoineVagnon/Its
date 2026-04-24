import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RelatedProducts } from '../RelatedProducts';

const PRODUCTS = [
  { key: 'geodet-profili', icon: 'solar:graph-up-linear', href: '/proizvodi/geodet-profili', namespaceKey: 'geodet-profili' },
  { key: 'proman', icon: 'solar:document-text-linear', href: '/proizvodi/proman', namespaceKey: 'proman' },
  { key: 'dkv-pro', icon: 'solar:bolt-linear', href: '/proizvodi/dkv-pro', namespaceKey: 'dkv-pro' },
];

describe('RelatedProducts', () => {
  test('renders section heading', () => {
    render(<RelatedProducts products={PRODUCTS} />);
    expect(screen.getByText('Srodni proizvodi')).toBeInTheDocument();
  });

  test('renders a card for each related product', () => {
    render(<RelatedProducts products={PRODUCTS} />);
    expect(screen.getByText('Geodet Profili')).toBeInTheDocument();
    expect(screen.getByText('ProMan')).toBeInTheDocument();
    expect(screen.getByText('DKV-PRO')).toBeInTheDocument();
  });

  test('each card has "Saznajte više" link text', () => {
    render(<RelatedProducts products={PRODUCTS} />);
    const links = screen.getAllByText('Saznajte više');
    expect(links).toHaveLength(3);
  });

  test('card links include locale prefix', () => {
    const { container } = render(<RelatedProducts products={PRODUCTS} />);
    const anchors = container.querySelectorAll('a');
    const hrefs = Array.from(anchors).map((a) => a.getAttribute('href'));
    expect(hrefs.some((h) => h?.includes('/bs/'))).toBe(true);
  });

  test('renders category labels for each card', () => {
    render(<RelatedProducts products={PRODUCTS} />);
    expect(screen.getByText('Geodezija')).toBeInTheDocument();
    expect(screen.getByText('Dokumenti')).toBeInTheDocument();
    expect(screen.getByText('Dalekovodi')).toBeInTheDocument();
  });
});
