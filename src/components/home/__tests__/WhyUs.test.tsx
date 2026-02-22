import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { WhyUs } from '../WhyUs';

describe('WhyUs', () => {
  test('renders stat "10+" with "Godina iskustva"', () => {
    render(<WhyUs />);
    expect(screen.getByText('10+')).toBeInTheDocument();
    expect(screen.getByText('Godina iskustva')).toBeInTheDocument();
  });

  test('renders stat "50+" with "Klijenata"', () => {
    render(<WhyUs />);
    expect(screen.getByText('50+')).toBeInTheDocument();
    expect(screen.getByText('Klijenata')).toBeInTheDocument();
  });

  test('renders stat "7" with "Proizvoda"', () => {
    render(<WhyUs />);
    expect(screen.getByText('7')).toBeInTheDocument();
    expect(screen.getByText('Proizvoda')).toBeInTheDocument();
  });

  test('renders company philosophy paragraphs', () => {
    render(<WhyUs />);
    expect(screen.getByText(/sistem integrator/)).toBeInTheDocument();
    expect(screen.getByText(/kupac na prvom mjestu/)).toBeInTheDocument();
  });
});
