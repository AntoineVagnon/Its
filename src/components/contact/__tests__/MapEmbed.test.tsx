import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MapEmbed } from '../MapEmbed';

describe('MapEmbed', () => {
  test('renders map placeholder container', () => {
    render(<MapEmbed />);
    expect(screen.getByTestId('map-placeholder')).toBeInTheDocument();
  });

  test('renders pulsing pin marker icon', () => {
    const { container } = render(<MapEmbed />);
    const icon = container.querySelector('[data-icon="solar:map-point-linear"]');
    expect(icon).toBeInTheDocument();
    const ping = container.querySelector('.animate-ping');
    expect(ping).toBeInTheDocument();
  });
});
