import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ClientLogos } from '../ClientLogos';

const CLIENTS = ['BNPro d.o.o.', 'BH Telecom', 'Elektroprivreda BiH'];

describe('ClientLogos', () => {
  test('renders section heading from translations', () => {
    render(<ClientLogos clients={CLIENTS} />);
    expect(screen.getByText('Koriste Geodet')).toBeInTheDocument();
  });

  test('renders all passed client names', () => {
    render(<ClientLogos clients={CLIENTS} />);
    expect(screen.getByText('BNPro d.o.o.')).toBeInTheDocument();
    expect(screen.getByText('BH Telecom')).toBeInTheDocument();
    expect(screen.getByText('Elektroprivreda BiH')).toBeInTheDocument();
  });

  test('client names rendered in uppercase style', () => {
    const { container } = render(<ClientLogos clients={CLIENTS} />);
    const spans = container.querySelectorAll('span.uppercase');
    expect(spans.length).toBe(CLIENTS.length);
  });

  test('accepts custom namespace', () => {
    render(<ClientLogos namespace="DkvPro" clients={['Elektroprijenos BiH']} />);
    expect(screen.getByText('Koriste DKV-PRO')).toBeInTheDocument();
    expect(screen.getByText('Elektroprijenos BiH')).toBeInTheDocument();
  });
});
