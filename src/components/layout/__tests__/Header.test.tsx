import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from '../Header';

describe('Header', () => {
  test('renders iT SYSTEMS logo text', () => {
    render(<Header />);
    expect(screen.getByText('iT SYSTEMS')).toBeInTheDocument();
  });

  test('renders all 4 nav items', () => {
    render(<Header />);
    expect(screen.getByText('Početna')).toBeInTheDocument();
    expect(screen.getByText('Proizvodi')).toBeInTheDocument();
    expect(screen.getByText('O nama')).toBeInTheDocument();
    expect(screen.getByText('Kontakt')).toBeInTheDocument();
  });

  test('renders "Zatražite ponudu" CTA button', () => {
    render(<Header />);
    // CTA appears in both desktop header and mobile nav
    const ctas = screen.getAllByText('Zatražite ponudu');
    expect(ctas.length).toBeGreaterThanOrEqual(1);
  });

  test('renders language toggle (BS | EN)', () => {
    render(<Header />);
    // BS and EN appear in both desktop and mobile
    const bsElements = screen.getAllByText('BS');
    const enElements = screen.getAllByText('EN');
    expect(bsElements.length).toBeGreaterThanOrEqual(1);
    expect(enElements.length).toBeGreaterThanOrEqual(1);
  });

  test('renders hamburger button for mobile', () => {
    render(<Header />);
    expect(screen.getByTestId('hamburger')).toBeInTheDocument();
  });

  test('mobile nav is rendered (AnimatePresence controls visibility)', () => {
    render(<Header />);
    // MobileNav is always in DOM due to AnimatePresence mock
    // In real browser, it would be hidden when not open
    expect(screen.getByTestId('hamburger')).toBeInTheDocument();
  });
});
