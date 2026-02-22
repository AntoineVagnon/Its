import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Section } from '../Section';

describe('Section', () => {
  test('renders children with max-w-7xl wrapper', () => {
    const { container } = render(
      <Section>
        <p>Content</p>
      </Section>
    );
    expect(screen.getByText('Content')).toBeInTheDocument();
    expect(container.querySelector('.max-w-7xl')).toBeInTheDocument();
  });

  test('default variant has bg-its-surface', () => {
    const { container } = render(
      <Section>
        <p>Test</p>
      </Section>
    );
    expect(container.firstChild).toHaveClass('bg-its-surface');
  });

  test('white variant has bg-white and border', () => {
    const { container } = render(
      <Section variant="white">
        <p>Test</p>
      </Section>
    );
    expect(container.firstChild).toHaveClass('bg-white');
    expect(container.firstChild).toHaveClass('border-y');
  });

  test('navy variant has bg-its-navy and text-white', () => {
    const { container } = render(
      <Section variant="navy">
        <p>Test</p>
      </Section>
    );
    expect(container.firstChild).toHaveClass('bg-its-navy');
    expect(container.firstChild).toHaveClass('text-white');
  });

  test('applies id prop for anchor navigation', () => {
    const { container } = render(
      <Section id="products">
        <p>Test</p>
      </Section>
    );
    expect(container.querySelector('#products')).toBeInTheDocument();
  });
});
