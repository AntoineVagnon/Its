import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FeatureBlocks, GEODET_VISUALS } from '../FeatureBlocks';

describe('FeatureBlocks', () => {
  test('renders 3 feature block headings', () => {
    render(<FeatureBlocks visuals={GEODET_VISUALS} />);
    expect(screen.getByText('Transformacija koordinata u sekundi')).toBeInTheDocument();
    expect(screen.getByText('Automatsko generisanje GPS izvještaja')).toBeInTheDocument();
    expect(screen.getByText('Direktna integracija sa CAD alatima')).toBeInTheDocument();
  });

  test('renders bullet points for each block', () => {
    render(<FeatureBlocks visuals={GEODET_VISUALS} />);
    expect(screen.getByText(/WGS84, Gauss-Krüger/)).toBeInTheDocument();
    expect(screen.getByText(/Batch obrada/)).toBeInTheDocument();
    expect(screen.getByText(/Leica, Trimble/)).toBeInTheDocument();
    expect(screen.getByText(/AutoCAD, ZWCAD, BricsCAD/)).toBeInTheDocument();
  });

  test('renders all 3 visuals', () => {
    const { container } = render(<FeatureBlocks visuals={GEODET_VISUALS} />);
    const backdrops = container.querySelectorAll('[class*="backdrop-blur"]');
    expect(backdrops.length).toBeGreaterThanOrEqual(3);
  });

  test('second block is reversed (text on right)', () => {
    const { container } = render(<FeatureBlocks visuals={GEODET_VISUALS} />);
    const reversedDivs = container.querySelectorAll('.lg\\:order-2');
    expect(reversedDivs.length).toBeGreaterThanOrEqual(1);
  });

  test('accepts custom namespace', () => {
    render(<FeatureBlocks namespace="Geodet" visuals={GEODET_VISUALS} />);
    expect(screen.getByText('Transformacija koordinata u sekundi')).toBeInTheDocument();
  });
});
