import { Icon } from '@iconify/react';

export function ElectrocalcVisual() {
  const params = [
    { label: 'Napon', value: '110 kV', ok: true },
    { label: 'Raspon', value: '320 m', ok: true },
    { label: 'Provjes', value: '8.42 m', ok: true },
    { label: 'Meh. napon', value: '98.3 MPa', ok: true },
  ];
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        <span className="ml-2 text-xs text-gray-500 font-mono">Elektro-mehanički proračun</span>
      </div>
      <div className="space-y-1.5 mb-4">
        {params.map((p) => (
          <div key={p.label} className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-1.5 border border-white/[0.06]">
            <span className="text-[11px] text-gray-500">{p.label}</span>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-white">{p.value}</span>
              <div className="w-3.5 h-3.5 rounded-full bg-green-500/20 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-its-accent/10 rounded-xl px-4 py-2.5 border border-its-accent/20 flex items-center justify-between">
        <span className="text-xs font-medium text-its-accent">Proračun u toku</span>
        <Icon icon="solar:bolt-linear" width={14} className="text-its-accent" />
      </div>
    </div>
  );
}

export function RouteProfileVisual() {
  const towers = [12, 45, 25, 60, 38, 55, 20, 42];
  const w = 200;
  const h = 70;

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        <span className="ml-2 text-xs text-gray-500 font-mono">Profil trase — DV 110kV</span>
      </div>
      <div className="bg-its-dark/60 rounded-xl border border-white/10 p-3 mb-4">
        <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-16">
          <polyline
            points={towers.map((y, i) => `${(i / (towers.length - 1)) * w},${h - (y / 100) * h}`).join(' ')}
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
          {towers.map((y, i) => {
            const x = (i / (towers.length - 1)) * w;
            const cy = h - (y / 100) * h;
            return (
              <g key={i}>
                <line x1={x} y1={cy} x2={x} y2={h} stroke="#FACC15" strokeWidth="1" opacity="0.4" />
                <rect x={x - 2} y={cy - 4} width={4} height={4} fill="#FACC15" opacity="0.7" />
              </g>
            );
          })}
          <line x1="0" y1={h - 1} x2={w} y2={h - 1} stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        </svg>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {['Stupova: 8', 'Dužina: 5.2km', 'Napon: 110kV'].map((s) => (
          <div key={s} className="bg-white/5 rounded-lg px-2 py-1.5 text-center border border-white/[0.06]">
            <span className="text-[9px] font-mono text-gray-400">{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TechDocsVisual() {
  const docs = ['Tehnički opis', 'Montažna tabela', 'Specifikacija materijala', 'Situacioni plan'];
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        <span className="ml-2 text-xs text-gray-500 font-mono">Projektna dokumentacija</span>
      </div>
      <div className="space-y-2 mb-4">
        {docs.map((doc) => (
          <div key={doc} className="flex items-center gap-3 bg-white/5 rounded-lg px-3 py-2 border border-white/[0.06]">
            <Icon icon="solar:file-text-linear" width={13} className="text-its-accent/70 shrink-0" />
            <span className="text-[11px] text-gray-300 flex-1">{doc}</span>
            <div className="w-2 h-2 rounded-full bg-green-400/70" />
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <div className="flex-1 bg-its-accent/10 border border-its-accent/20 rounded-xl px-3 py-2 flex items-center gap-2">
          <Icon icon="solar:export-linear" width={12} className="text-its-accent" />
          <span className="text-[11px] font-medium text-its-accent">Generiši PDF</span>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 flex items-center gap-2">
          <Icon icon="solar:document-text-linear" width={12} className="text-gray-400" />
          <span className="text-[11px] text-gray-400">Word</span>
        </div>
      </div>
    </div>
  );
}
