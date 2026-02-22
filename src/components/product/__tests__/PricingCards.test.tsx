import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PricingCards } from '../PricingCards';

describe('PricingCards', () => {
  test('renders Standard card with "1.000 €" price', () => {
    render(<PricingCards locale="bs" />);
    expect(screen.getByText('1.000 €')).toBeInTheDocument();
  });

  test('renders Premium card with "1.200 €" price', () => {
    render(<PricingCards locale="bs" />);
    expect(screen.getByText('1.200 €')).toBeInTheDocument();
  });

  test('Premium card has "Preporučeno" badge', () => {
    render(<PricingCards locale="bs" />);
    expect(screen.getByText('Preporučeno')).toBeInTheDocument();
  });

  test('both cards have "Zatražite ponudu" CTA', () => {
    render(<PricingCards locale="bs" />);
    const ctas = screen.getAllByText('Zatražite ponudu');
    expect(ctas).toHaveLength(2);
  });

  test('Standard has 3 feature items', () => {
    render(<PricingCards locale="bs" />);
    expect(screen.getByText('Osnovne funkcionalnosti aplikacije')).toBeInTheDocument();
    expect(screen.getByText('Modul za transformaciju koordinata')).toBeInTheDocument();
    expect(screen.getByText('USB HardLock zaštita')).toBeInTheDocument();
  });

  test('Premium has 3 feature items including "GPS Modul"', () => {
    render(<PricingCards locale="bs" />);
    expect(screen.getByText('GPS Modul za izvještaje')).toBeInTheDocument();
    expect(screen.getByText('Google Earth KML eksport modul')).toBeInTheDocument();
  });
});
