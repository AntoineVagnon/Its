import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ValueProps } from '../ValueProps';

describe('ValueProps', () => {
  test('renders 3 value prop cards', () => {
    render(<ValueProps />);
    const titles = [
      screen.getByText('Podrška za instrumente'),
      screen.getByText('Automatski obrasci'),
      screen.getByText('CAD Integracija'),
    ];
    expect(titles).toHaveLength(3);
  });

  test('first card mentions instrument support (Topcon, Leica, etc.)', () => {
    render(<ValueProps />);
    expect(screen.getByText(/Topcon, Leica/)).toBeInTheDocument();
  });

  test('second card mentions automatic forms (TZ, O1i2, etc.)', () => {
    render(<ValueProps />);
    expect(screen.getByText(/TZ, O1i2/)).toBeInTheDocument();
  });

  test('third card mentions CAD integration (AutoCAD, ZWCAD, etc.)', () => {
    render(<ValueProps />);
    expect(screen.getByText(/AutoCAD, ZWCAD/)).toBeInTheDocument();
  });
});
