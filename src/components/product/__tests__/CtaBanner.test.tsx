import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CtaBanner } from '../CtaBanner';

describe('CtaBanner', () => {
  test('renders heading about modernizing geodetic processes', () => {
    render(<CtaBanner locale="bs" />);
    expect(screen.getByText(/modernizirate vaše geodetske procese/)).toBeInTheDocument();
  });

  test('renders "Kontaktirajte nas" CTA button', () => {
    render(<CtaBanner locale="bs" />);
    expect(screen.getByText('Kontaktirajte nas')).toBeInTheDocument();
  });

  test('has gold background', () => {
    const { container } = render(<CtaBanner locale="bs" />);
    const section = container.querySelector('section');
    expect(section?.className).toContain('bg-its-gold');
  });
});
