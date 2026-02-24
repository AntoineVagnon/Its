import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProductHero } from '../ProductHero';

describe('ProductHero', () => {
  test('renders breadcrumb (Početna > Proizvodi > Geodezija)', () => {
    render(<ProductHero />);
    expect(screen.getByText('Početna')).toBeInTheDocument();
    expect(screen.getByText('Proizvodi')).toBeInTheDocument();
    // "Geodezija" appears in both breadcrumb and category pill
    const geodezija = screen.getAllByText('Geodezija');
    expect(geodezija.length).toBeGreaterThanOrEqual(1);
  });

  test('renders "Geodet" heading', () => {
    render(<ProductHero />);
    expect(screen.getByRole('heading', { name: 'Geodet' })).toBeInTheDocument();
  });

  test('renders product description', () => {
    render(<ProductHero />);
    expect(screen.getByText(/Vodeća aplikacija za automatsku obradu/)).toBeInTheDocument();
  });

  test('renders "Preuzmite demo" ghost button', () => {
    render(<ProductHero />);
    expect(screen.getByText('Preuzmite demo')).toBeInTheDocument();
  });

  test('renders "Zatražite ponudu" primary button', () => {
    render(<ProductHero />);
    expect(screen.getByText('Zatražite ponudu')).toBeInTheDocument();
  });

  test('renders glass UI mockup visual', () => {
    const { container } = render(<ProductHero />);
    const mockup = container.querySelector('[class*="backdrop-blur"]');
    expect(mockup).toBeInTheDocument();
  });
});
