import { Icon } from '@iconify/react';

export function TicketingVisual() {
  const tickets = [
    { id: '#1042', title: 'Greška pri importu podataka', prio: 'Visok', color: 'text-red-400 bg-red-400/10' },
    { id: '#1041', title: 'Zahtjev za novu licencu', prio: 'Srednji', color: 'text-its-accent bg-its-accent/10' },
    { id: '#1040', title: 'Pitanje o eksportu PDF', prio: 'Nizak', color: 'text-green-400 bg-green-400/10' },
  ];
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        <span className="ml-2 text-xs text-gray-500 font-mono">Aktivni tiketi — Support</span>
      </div>
      <div className="space-y-2 mb-4">
        {tickets.map((t) => (
          <div key={t.id} className="bg-white/5 rounded-xl px-3 py-2.5 border border-white/[0.06]">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-mono text-gray-500">{t.id}</span>
              <span className={`text-[9px] px-2 py-0.5 rounded-full font-medium ${t.color}`}>
                {t.prio}
              </span>
            </div>
            <p className="text-[11px] text-gray-300">{t.title}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between bg-its-accent/10 rounded-xl px-4 py-2.5 border border-its-accent/20">
        <span className="text-xs font-medium text-its-accent">3 otvorena</span>
        <Icon icon="solar:chat-round-dots-linear" width={14} className="text-its-accent" />
      </div>
    </div>
  );
}

export function SlaVisual() {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        <span className="ml-2 text-xs text-gray-500 font-mono">SLA upravljanje</span>
      </div>
      <div className="space-y-3 mb-4">
        {[
          { label: 'Kritično (2h)', pct: 85, color: 'bg-red-400/50' },
          { label: 'Visok (8h)', pct: 60, color: 'bg-its-accent/50' },
          { label: 'Srednji (24h)', pct: 40, color: 'bg-green-400/40' },
        ].map((s) => (
          <div key={s.label}>
            <div className="flex justify-between mb-1">
              <span className="text-[10px] text-gray-500">{s.label}</span>
              <span className="text-[10px] font-mono text-gray-400">{s.pct}% iskorišteno</span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div className={`h-full ${s.color} rounded-full`} style={{ width: `${s.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white/5 rounded-xl px-4 py-2.5 border border-white/10 flex items-center gap-2">
        <Icon icon="solar:bell-linear" width={12} className="text-its-accent/70" />
        <span className="text-xs text-gray-500">Automatska eskalacija aktivna</span>
      </div>
    </div>
  );
}

export function CustomerPortalVisual() {
  const articles = ['Instalacija i aktivacija', 'Reset lozinke', 'Kompatibilnost s Windows 11', 'Izvoz u Excel'];
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        <span className="ml-2 text-xs text-gray-500 font-mono">Korisnički portal — Baza znanja</span>
      </div>
      <div className="flex items-center gap-2 bg-white/5 rounded-xl px-3 py-2 border border-white/10 mb-4">
        <Icon icon="solar:magnifer-linear" width={13} className="text-gray-500" />
        <span className="text-xs text-gray-600 font-mono">Pretraži bazu znanja...</span>
      </div>
      <div className="space-y-2">
        {articles.map((a) => (
          <div key={a} className="flex items-center gap-2.5 bg-white/5 rounded-lg px-3 py-2 border border-white/[0.06]">
            <Icon icon="solar:book-2-linear" width={12} className="text-its-accent/60 shrink-0" />
            <span className="text-[11px] text-gray-300">{a}</span>
            <Icon icon="solar:arrow-right-linear" width={10} className="text-gray-600 ml-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}
