import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from '../Card';

describe('Card', () => {
  const props = {
    icon: 'solar:map-point-linear',
    category: 'Geodezija',
    title: 'Geodet',
    description: 'Automatska obrada geodetskih podataka.',
    linkText: 'Saznajte više',
    href: '/proizvodi/geodet',
  };

  test('renders title, description, category pill', () => {
    render(<Card {...props} />);
    expect(screen.getByText('Geodet')).toBeInTheDocument();
    expect(screen.getByText('Automatska obrada geodetskih podataka.')).toBeInTheDocument();
    expect(screen.getByText('Geodezija')).toBeInTheDocument();
  });

  test('renders icon from @iconify/react', () => {
    const { container } = render(<Card {...props} />);
    const icon = container.querySelector('[data-icon="solar:map-point-linear"]');
    expect(icon).toBeInTheDocument();
  });

  test('renders "Saznajte više" link text', () => {
    render(<Card {...props} />);
    expect(screen.getByText('Saznajte više')).toBeInTheDocument();
  });

  test('has hover animation classes (group, transition)', () => {
    render(<Card {...props} />);
    const link = screen.getByRole('link');
    expect(link.className).toContain('group');
    expect(link.className).toContain('transition');
  });
});
