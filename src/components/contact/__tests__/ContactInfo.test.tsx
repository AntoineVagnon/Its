import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ContactInfo } from '../ContactInfo';

describe('ContactInfo', () => {
  test('renders address "Paromlinska 34"', () => {
    render(<ContactInfo />);
    expect(screen.getByText(/Paromlinska 34/)).toBeInTheDocument();
  });

  test('renders phone "+387 (0)33 941 461"', () => {
    render(<ContactInfo />);
    expect(screen.getByText(/\+387 \(0\)33 941 461/)).toBeInTheDocument();
  });

  test('renders viber "+387 (0)61 150 009"', () => {
    render(<ContactInfo />);
    expect(screen.getByText(/\+387 \(0\)61 150 009/)).toBeInTheDocument();
  });

  test('renders email "info@its.ba"', () => {
    render(<ContactInfo />);
    expect(screen.getByText('info@its.ba')).toBeInTheDocument();
  });

  test('renders hours "Pon - Pet: 09:00 - 17:00"', () => {
    render(<ContactInfo />);
    expect(screen.getByText('Pon - Pet: 09:00 - 17:00')).toBeInTheDocument();
  });

  test('renders 4 icon containers', () => {
    const { container } = render(<ContactInfo />);
    const icons = container.querySelectorAll('[class*="rounded-xl"][class*="bg-its-accent"]');
    expect(icons.length).toBe(4);
  });
});
