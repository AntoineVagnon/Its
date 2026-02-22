import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SocialProof } from '../SocialProof';

describe('SocialProof', () => {
  test('renders "50+ organizacija" heading', () => {
    render(<SocialProof />);
    expect(screen.getByText(/50\+ organizacija/)).toBeInTheDocument();
  });

  test('renders all client names', () => {
    render(<SocialProof />);
    expect(screen.getByText('ELEKTROPRIVREDA BIH')).toBeInTheDocument();
    expect(screen.getByText('BHTELECOM')).toBeInTheDocument();
    expect(screen.getByText('MINISTARSTVO RADA')).toBeInTheDocument();
    expect(screen.getByText('ARCELORMITTAL')).toBeInTheDocument();
    expect(screen.getByText('PAYTEN')).toBeInTheDocument();
  });
});
