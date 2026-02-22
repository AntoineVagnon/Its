import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProductHero } from '../ProductHero';

describe('ProductHero', () => {
  test('renders breadcrumb (Početna > Proizvodi > Geodezija)', () => {
    render(<ProductHero locale="bs" />);
    expect(screen.getByText('Početna')).toBeInTheDocument();
    expect(screen.getByText('Proizvodi')).toBeInTheDocument();
    // "Geodezija" appears in both breadcrumb and category pill
    const geodezija = screen.getAllByText('Geodezija');
    expect(geodezija.length).toBeGreaterThanOrEqual(1);
  });

  test('renders "Geodet" heading', () => {
    render(<ProductHero locale="bs" />);
    expect(screen.getByRole('heading', { name: 'Geodet' })).toBeInTheDocument();
  });

  test('renders product description', () => {
    render(<ProductHero locale="bs" />);
    expect(screen.getByText(/Vodeća aplikacija za automatsku obradu/)).toBeInTheDocument();
  });

  test('renders "Preuzmite demo" ghost button', () => {
    render(<ProductHero locale="bs" />);
    expect(screen.getByText('Preuzmite demo')).toBeInTheDocument();
  });

  test('renders "Zatražite ponudu" primary button', () => {
    render(<ProductHero locale="bs" />);
    expect(screen.getByText('Zatražite ponudu')).toBeInTheDocument();
  });

  test('renders abstract app mockup visual', () => {
    const { container } = render(<ProductHero locale="bs" />);
    // Arbitrary value class needs double escaping in querySelector
    const mockup = container.querySelector('[class*="aspect-"]');
    expect(mockup).toBeInTheDocument();
  });
});
