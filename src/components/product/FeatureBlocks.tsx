'use client';

import { useTranslations } from 'next-intl';
import { Icon } from '@iconify/react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

function CoordTransformVisual() {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        <span className="ml-2 text-xs text-gray-500 font-mono">KOORDTRANS v4.2</span>
      </div>
      <div
        className="relative h-40 bg-its-dark/60 rounded-xl border border-white/10 overflow-hidden mb-4"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      >
        <div className="absolute left-[25%] top-[30%] w-3 h-3 bg-its-accent rounded-full shadow-lg shadow-its-accent/50" />
        <div className="absolute left-[65%] top-[65%] w-3 h-3 bg-its-blue rounded-full shadow-lg shadow-its-blue/50" />
        <svg className="absolute inset-0 w-full h-full">
          <line
            x1="27%" y1="34%"
            x2="65%" y2="65%"
            stroke="#FACC15"
            strokeWidth="1.5"
            strokeDasharray="5 4"
            opacity="0.5"
          />
        </svg>
        <span className="absolute left-[22%] top-[18%] text-[9px] font-mono text-its-accent/80">WGS84</span>
        <span className="absolute left-[63%] top-[72%] text-[9px] font-mono text-its-blue/80">D-48</span>
      </div>
      <div className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-2.5 border border-white/10">
        <span className="text-xs text-gray-400">100+ datuma predefinisano</span>
        <div className="flex gap-1.5">
          <div className="w-16 h-3.5 bg-its-accent/25 rounded-full" />
          <div className="w-8 h-3.5 bg-white/10 rounded-full" />
        </div>
      </div>
    </div>
  );
}

function GpsReportVisual() {
  const rows = [
    { label: 'Točka', value: 'T-001', ok: true },
    { label: 'Datum', value: '15.04.2025', ok: true },
    { label: 'φ (N)', value: "44°32'18.234\"", ok: true },
    { label: 'λ (E)', value: "18°11'42.891\"", ok: true },
    { label: 'H (m)', value: '487.23 m', ok: true },
  ];
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        <span className="ml-2 text-xs text-gray-500 font-mono">GPS izvještaj — GNSS 1</span>
      </div>
      <div className="space-y-1.5 mb-4">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-1.5 border border-white/[0.06]"
          >
            <span className="text-[11px] text-gray-500">{row.label}</span>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-white">{row.value}</span>
              {row.ok && (
                <div className="w-3.5 h-3.5 rounded-full bg-green-500/20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between bg-its-accent/10 rounded-xl px-4 py-2.5 border border-its-accent/20">
        <span className="text-xs font-medium text-its-accent">Excel eksport</span>
        <Icon icon="solar:export-linear" width={14} className="text-its-accent" />
      </div>
    </div>
  );
}

function CadExportVisual() {
  const apps = ['AutoCAD', 'ZWCAD', 'BricsCAD', 'Google Earth'];
  const formats = ['DXF', 'DWG', 'KML', 'SHP', 'PDF', 'DGN'];
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        <span className="ml-2 text-xs text-gray-500 font-mono">CAD eksport</span>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {formats.map((fmt) => (
          <div
            key={fmt}
            className="bg-white/5 rounded-lg py-2 border border-white/10 text-center"
          >
            <span className="text-[10px] font-mono text-gray-400">{fmt}</span>
          </div>
        ))}
      </div>
      <div className="space-y-1.5">
        {apps.map((app) => (
          <div
            key={app}
            className="flex items-center gap-2.5 bg-white/5 rounded-lg px-3 py-2 border border-white/[0.06]"
          >
            <div className="w-5 h-5 rounded-md bg-its-accent/15 flex items-center justify-center shrink-0">
              <div className="w-2 h-2 bg-its-accent/60 rounded-sm" />
            </div>
            <span className="text-[11px] text-gray-300">{app}</span>
            <div className="ml-auto w-2 h-2 rounded-full bg-green-400/70" />
          </div>
        ))}
      </div>
    </div>
  );
}

export const GEODET_VISUALS = [
  <CoordTransformVisual key="coord" />,
  <GpsReportVisual key="gps" />,
  <CadExportVisual key="cad" />,
];

const FEATURE_KEYS = ['fb1', 'fb2', 'fb3'] as const;

interface FeatureBlocksProps {
  namespace?: string;
  visuals?: React.ReactNode[];
}

export function FeatureBlocks({ namespace = 'Geodet', visuals = GEODET_VISUALS }: FeatureBlocksProps) {
  const t = useTranslations(namespace);

  return (
    <section className="max-w-7xl mx-auto px-6 py-8 border-t border-white/5">
      <div className="space-y-28">
        {FEATURE_KEYS.map((key, i) => {
          const isReversed = i % 2 === 1;
          return (
            <ScrollReveal key={key}>
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className={isReversed ? 'lg:order-2' : ''}>
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-4">
                    {t(`featureBlocks.${key}.heading`)}
                  </h3>
                  <p className="text-base font-light text-gray-400 leading-relaxed mb-6">
                    {t(`featureBlocks.${key}.description`)}
                  </p>
                  <ul className="space-y-3">
                    {(['p1', 'p2', 'p3'] as const).map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-gray-300">
                        <span className="w-5 h-5 rounded-full bg-its-accent/10 border border-its-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Icon icon="solar:check-circle-linear" width={12} className="text-its-accent" />
                        </span>
                        {t(`featureBlocks.${key}.points.${p}`)}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={isReversed ? 'lg:order-1' : ''}>
                  {visuals[i]}
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
