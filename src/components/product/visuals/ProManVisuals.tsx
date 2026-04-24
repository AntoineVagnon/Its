import { Icon } from '@iconify/react';

export function ProtocolVisual() {
  const docs = [
    { num: 'PR-2025-0847', label: 'Zahtjev za nabavku', status: 'aktivan', color: 'bg-its-accent/20 text-its-accent' },
    { num: 'PR-2025-0846', label: 'Izlazni dopis', status: 'zatvoren', color: 'bg-green-500/20 text-green-400' },
    { num: 'PR-2025-0845', label: 'Interna odluka', status: 'aktivan', color: 'bg-its-accent/20 text-its-accent' },
  ];
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        <span className="ml-2 text-xs text-gray-500 font-mono">Protokol — 2025</span>
      </div>
      <div className="space-y-2 mb-4">
        {docs.map((d) => (
          <div key={d.num} className="bg-white/5 rounded-xl px-3 py-2.5 border border-white/[0.06]">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-mono text-gray-500">{d.num}</span>
              <span className={`text-[9px] px-2 py-0.5 rounded-full font-medium ${d.color}`}>
                {d.status}
              </span>
            </div>
            <p className="text-xs text-gray-300">{d.label}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 bg-white/5 rounded-xl px-4 py-2.5 border border-white/10">
        <Icon icon="solar:document-add-linear" width={14} className="text-its-accent" />
        <span className="text-xs text-gray-400">Novi unos u protokol</span>
      </div>
    </div>
  );
}

export function ArchiveSearchVisual() {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        <span className="ml-2 text-xs text-gray-500 font-mono">Digitalni arhiv</span>
      </div>
      <div className="flex items-center gap-2 bg-white/5 rounded-xl px-3 py-2 border border-white/10 mb-4">
        <Icon icon="solar:magnifer-linear" width={13} className="text-gray-500" />
        <span className="text-xs text-gray-600 font-mono">Pretraga arhive...</span>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-3">
        {['2025 / Q1', '2025 / Q2', '2024 / Ugovori', '2024 / Rješenja'].map((folder) => (
          <div key={folder} className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2 border border-white/[0.06]">
            <Icon icon="solar:folder-linear" width={12} className="text-its-accent/70" />
            <span className="text-[10px] text-gray-400">{folder}</span>
          </div>
        ))}
      </div>
      <div className="bg-its-accent/10 rounded-xl px-4 py-2.5 border border-its-accent/20 flex items-center justify-between">
        <span className="text-xs text-its-accent">1.240 dokumenata</span>
        <div className="flex gap-1">
          <div className="w-12 h-2 bg-its-accent/30 rounded-full" />
          <div className="w-6 h-2 bg-white/10 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function WorkflowVisual() {
  const steps = [
    { label: 'Zaprimljeno', done: true },
    { label: 'U obradi', done: true },
    { label: 'Odobrenje', done: false },
    { label: 'Završeno', done: false },
  ];
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        <span className="ml-2 text-xs text-gray-500 font-mono">Upravljanje procesom</span>
      </div>
      <div className="relative mb-5">
        <div className="absolute top-3.5 left-3.5 right-3.5 h-px bg-white/10" />
        <div className="flex justify-between relative">
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center border ${
                s.done
                  ? 'bg-its-accent/20 border-its-accent/40'
                  : 'bg-white/5 border-white/20'
              }`}>
                {s.done
                  ? <Icon icon="solar:check-circle-linear" width={14} className="text-its-accent" />
                  : <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                }
              </div>
              <span className="text-[9px] text-gray-500 text-center leading-tight w-12">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-1.5">
        {['Referent: M. Hodžić', 'Rok: 28.04.2025', 'Prioritet: srednji'].map((info) => (
          <div key={info} className="flex items-center gap-2 text-[11px] text-gray-500">
            <div className="w-1 h-1 rounded-full bg-gray-600" />
            {info}
          </div>
        ))}
      </div>
    </div>
  );
}
