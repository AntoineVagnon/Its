import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MobileNav } from '../MobileNav';

describe('MobileNav', () => {
  const defaultProps = {
    isOpen: true,
    onClose: vi.fn(),
    locale: 'bs',
  };

  test('renders all nav items when open', () => {
    render(<MobileNav {...defaultProps} />);
    expect(screen.getByText('Početna')).toBeInTheDocument();
    expect(screen.getByText('Proizvodi')).toBeInTheDocument();
    expect(screen.getByText('O nama')).toBeInTheDocument();
    expect(screen.getByText('Kontakt')).toBeInTheDocument();
  });

  test('renders CTA button when open', () => {
    render(<MobileNav {...defaultProps} />);
    expect(screen.getByText('Zatražite ponudu')).toBeInTheDocument();
  });

  test('renders language toggle when open', () => {
    render(<MobileNav {...defaultProps} />);
    expect(screen.getByText('BS')).toBeInTheDocument();
    expect(screen.getByText('EN')).toBeInTheDocument();
  });

  test('is not visible when closed', () => {
    const { container } = render(
      <MobileNav isOpen={false} onClose={vi.fn()} locale="bs" />
    );
    // AnimatePresence mock renders nothing when isOpen is false
    expect(container.querySelector('[data-testid="mobile-nav"]')).not.toBeInTheDocument();
  });
});
