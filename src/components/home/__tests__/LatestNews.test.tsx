import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LatestNews } from '../LatestNews';

describe('LatestNews', () => {
  test('renders 3 news cards', () => {
    render(<LatestNews />);
    const dates = [
      screen.getByText('12. Maj 2025'),
      screen.getByText('05. April 2025'),
      screen.getByText('22. Mart 2025'),
    ];
    expect(dates).toHaveLength(3);
  });

  test('each card has date, title, excerpt', () => {
    render(<LatestNews />);
    expect(screen.getByText('Elektroprijenos BiH odabrao DKV-PRO')).toBeInTheDocument();
    expect(screen.getByText(/Nastavljamo uspješnu saradnju/)).toBeInTheDocument();
  });

  test('renders section heading', () => {
    render(<LatestNews />);
    expect(screen.getByText('Najnovije vijesti')).toBeInTheDocument();
  });
});
