import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from '../Hero';

describe('Hero', () => {
  test('renders headline with "softverska rješenja" highlighted in gold', () => {
    render(<Hero />);
    const highlight = screen.getByText('softverska rješenja');
    expect(highlight).toBeInTheDocument();
    expect(highlight.className).toContain('text-its-gold');
  });

  test('renders subtitle about 10+ years', () => {
    render(<Hero />);
    expect(screen.getByText(/Više od 10 godina/)).toBeInTheDocument();
  });

  test('renders "Pogledajte proizvode" ghost button', () => {
    render(<Hero />);
    expect(screen.getByText('Pogledajte proizvode')).toBeInTheDocument();
  });

  test('renders "Zatražite ponudu" primary button', () => {
    render(<Hero />);
    expect(screen.getByText('Zatražite ponudu')).toBeInTheDocument();
  });

  test('renders partner names (IBM, MICROSOFT, HCL, etc.)', () => {
    render(<Hero />);
    expect(screen.getByText('IBM')).toBeInTheDocument();
    expect(screen.getByText('MICROSOFT')).toBeInTheDocument();
    expect(screen.getByText('HCL')).toBeInTheDocument();
  });

  test('has navy background class', () => {
    const { container } = render(<Hero />);
    const section = container.querySelector('section');
    expect(section?.className).toContain('bg-its-navy');
  });
});
