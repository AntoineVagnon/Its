import { Icon } from '@iconify/react';

export function TerrainProfileVisual() {
  const points = [40, 55, 30, 70, 85, 60, 45, 75, 50, 35];
  const w = 200;
  const h = 80;
  const xs = points.map((_, i) => (i / (points.length - 1)) * w);
  const ys = points.map((p) => h - (p / 100) * h);
  const polyline = xs.map((x, i) => `${x},${ys[i]}`).join(' ');

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        <span className="ml-2 text-xs text-gray-500 font-mono">Uzdužni profil — ruta A</span>
      </div>
      <div className="bg-its-dark/60 rounded-xl border border-white/10 p-3 mb-4 overflow-hidden">
        <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-20">
          <defs>
            <linearGradient id="profGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FACC15" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FACC15" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon
            points={`0,${h} ${polyline} ${w},${h}`}
            fill="url(#profGrad)"
          />
          <polyline
            points={polyline}
            fill="none"
            stroke="#FACC15"
            strokeWidth="1.5"
          />
          {xs.map((x, i) => (
            <circle key={i} cx={x} cy={ys[i]} r="2" fill="#FACC15" opacity="0.7" />
          ))}
        </svg>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {['Δh: 55m', 'L: 1.24km', 'Tačaka: 10'].map((stat) => (
          <div key={stat} className="bg-white/5 rounded-lg px-2 py-1.5 text-center border border-white/[0.06]">
            <span className="text-[10px] font-mono text-gray-400">{stat}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FlexImportVisual() {
  const sources = [
    { label: 'Geodet', color: 'bg-its-accent/30', active: true },
    { label: 'ASCII', color: 'bg-its-blue/30', active: true },
    { label: 'Topcon', color: 'bg-purple-400/20', active: true },
    { label: 'Leica', color: 'bg-green-400/20', active: false },
  ];
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        <span className="ml-2 text-xs text-gray-500 font-mono">Import podataka</span>
      </div>
      <div className="space-y-2 mb-4">
        {sources.map((s) => (
          <div key={s.label} className="flex items-center gap-3 bg-white/5 rounded-lg px-3 py-2 border border-white/[0.06]">
            <div className={`w-2 h-2 rounded-full ${s.active ? 'bg-green-400' : 'bg-gray-600'}`} />
            <span className="text-xs text-gray-300 flex-1">{s.label}</span>
            <div className={`h-1.5 w-20 rounded-full ${s.color}`} />
          </div>
        ))}
      </div>
      <div className="bg-its-accent/10 rounded-xl px-4 py-2.5 border border-its-accent/20 flex items-center justify-between">
        <span className="text-xs font-medium text-its-accent">Uvezi podatke</span>
        <Icon icon="solar:import-linear" width={14} className="text-its-accent" />
      </div>
    </div>
  );
}

export function ProfileExportVisual() {
  const formats = ['DXF', 'PDF', 'XLSX'];
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        <span className="ml-2 text-xs text-gray-500 font-mono">Eksport rezultata</span>
      </div>
      <div className="bg-its-dark/60 rounded-xl border border-white/10 p-4 mb-4">
        <div className="flex gap-1 mb-3">
          {[60, 80, 50, 90, 70].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col justify-end">
              <div className="bg-its-accent/30 rounded-sm" style={{ height: `${h * 0.5}px` }} />
            </div>
          ))}
        </div>
        <div className="h-px bg-its-accent/20 mb-2" />
        <div className="flex justify-between">
          {['0m', '250m', '500m', '750m', '1km'].map((l) => (
            <span key={l} className="text-[8px] font-mono text-gray-600">{l}</span>
          ))}
        </div>
      </div>
      <div className="flex gap-2">
        {formats.map((fmt) => (
          <button key={fmt} className="flex-1 bg-white/5 border border-white/10 rounded-lg py-2 text-[11px] font-mono text-gray-400 hover:border-its-accent/30 hover:text-its-accent transition-colors">
            {fmt}
          </button>
        ))}
      </div>
    </div>
  );
}
