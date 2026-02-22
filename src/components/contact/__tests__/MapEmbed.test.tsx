import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MapEmbed } from '../MapEmbed';

describe('MapEmbed', () => {
  test('renders map embed container', () => {
    render(<MapEmbed />);
    expect(screen.getByTestId('map-embed')).toBeInTheDocument();
  });

  test('renders Google Maps iframe with correct src', () => {
    render(<MapEmbed />);
    const iframe = screen.getByTitle('iT Systems office location');
    expect(iframe).toBeInTheDocument();
    expect(iframe.tagName).toBe('IFRAME');
    expect(iframe.getAttribute('src')).toContain('google.com/maps');
    expect(iframe.getAttribute('src')).toContain('Paromlinska');
  });
});
