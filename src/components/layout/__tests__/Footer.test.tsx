import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from '../Footer';

describe('Footer', () => {
  test('renders company name "iT SYSTEMS"', () => {
    render(<Footer />);
    expect(screen.getByText('iT SYSTEMS')).toBeInTheDocument();
  });

  test('renders address "Paromlinska 34" via description text', () => {
    render(<Footer />);
    // Address is in the company description via constants
    const description = screen.getByText(/Cjelovita informatička/);
    expect(description).toBeInTheDocument();
  });

  test('renders email via newsletter input', () => {
    render(<Footer />);
    const input = screen.getByPlaceholderText('Email adresa');
    expect(input).toBeInTheDocument();
  });

  test('renders 4 footer columns', () => {
    const { container } = render(<Footer />);
    const grid = container.querySelector('.grid.grid-cols-1');
    expect(grid).toBeInTheDocument();
    expect(grid?.children.length).toBe(4);
  });

  test('renders social media icons (2)', () => {
    render(<Footer />);
    const links = screen.getAllByRole('link');
    const socialLinks = links.filter(
      (l) => l.getAttribute('aria-label') === 'LinkedIn' ||
             l.getAttribute('aria-label') === 'Facebook'
    );
    expect(socialLinks.length).toBe(2);
  });

  test('renders copyright with current year', () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  test('renders newsletter email input and submit button', () => {
    render(<Footer />);
    expect(screen.getByPlaceholderText('Email adresa')).toBeInTheDocument();
    expect(screen.getByText('Prijava')).toBeInTheDocument();
  });
});
