import { Icon } from '@iconify/react';

export function BiometricVisual() {
  const scans = [
    { name: 'Hodžić M.', time: '08:03', type: 'Otisak prsta', ok: true },
    { name: 'Kovač S.', time: '08:07', type: 'Kartica', ok: true },
    { name: 'Begić A.', time: '08:11', type: 'Otisak prsta', ok: true },
  ];
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        <span className="ml-2 text-xs text-gray-500 font-mono">Terminal T-01 — Ulaz</span>
      </div>
      <div className="space-y-2 mb-4">
        {scans.map((s) => (
          <div key={s.name} className="flex items-center gap-3 bg-white/5 rounded-lg px-3 py-2 border border-white/[0.06]">
            <div className="w-7 h-7 rounded-lg bg-its-accent/15 flex items-center justify-center shrink-0">
              <Icon icon={s.type === 'Kartica' ? 'solar:card-linear' : 'solar:fingerprint-linear'} width={14} className="text-its-accent/70" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] text-white">{s.name}</p>
              <p className="text-[9px] text-gray-500">{s.type}</p>
            </div>
            <div className="text-right">
              <p className="text-[11px] font-mono text-gray-300">{s.time}</p>
              <div className="flex justify-end mt-0.5">
                <div className="w-3.5 h-3.5 rounded-full bg-green-500/20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-its-accent/10 rounded-xl px-4 py-2.5 border border-its-accent/20">
        <span className="text-xs text-its-accent">Danas: 47 dolazaka evidentirana</span>
      </div>
    </div>
  );
}

export function HoursCalcVisual() {
  const days = ['P', 'U', 'S', 'Č', 'P'];
  const hours = [8.5, 8, 9, 8.5, 8];
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        <span className="ml-2 text-xs text-gray-500 font-mono">Sedmični pregled — Tjedna 17</span>
      </div>
      <div className="flex items-end gap-2 mb-3 h-20">
        {days.map((d, i) => (
          <div key={d} className="flex-1 flex flex-col items-center gap-1">
            <span className="text-[9px] font-mono text-gray-500">{hours[i]}h</span>
            <div
              className="w-full rounded-t-sm"
              style={{
                height: `${(hours[i] / 10) * 60}px`,
                background: hours[i] > 8 ? 'rgba(250,204,21,0.4)' : 'rgba(250,204,21,0.2)',
              }}
            />
            <span className="text-[9px] text-gray-600">{d}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {['Redovnih: 40h', 'Prekovr: 2h', 'Godišnji: 0'].map((s) => (
          <div key={s} className="bg-white/5 rounded-lg px-2 py-1.5 text-center border border-white/[0.06]">
            <span className="text-[9px] font-mono text-gray-400">{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AccessControlVisual() {
  const zones = [
    { name: 'Ulaz / Izlaz', level: 'Svi zaposleni', open: true },
    { name: 'Server soba', level: 'Nivo 3+', open: false },
    { name: 'Uprava', level: 'Nivo 2+', open: false },
  ];
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        <span className="ml-2 text-xs text-gray-500 font-mono">Kontrola pristupa — zone</span>
      </div>
      <div className="space-y-2 mb-4">
        {zones.map((z) => (
          <div key={z.name} className="flex items-center gap-3 bg-white/5 rounded-lg px-3 py-2 border border-white/[0.06]">
            <Icon
              icon={z.open ? 'solar:lock-unlocked-linear' : 'solar:lock-linear'}
              width={14}
              className={z.open ? 'text-green-400' : 'text-its-accent/70'}
            />
            <div className="flex-1">
              <p className="text-[11px] text-white">{z.name}</p>
              <p className="text-[9px] text-gray-500">{z.level}</p>
            </div>
            <div className={`w-2 h-2 rounded-full ${z.open ? 'bg-green-400/70' : 'bg-yellow-400/50'}`} />
          </div>
        ))}
      </div>
      <div className="bg-white/5 rounded-xl px-4 py-2.5 border border-white/10 flex items-center justify-between">
        <span className="text-xs text-gray-500">3 zone aktivne</span>
        <span className="text-xs font-mono text-its-accent">+2 terminala</span>
      </div>
    </div>
  );
}
