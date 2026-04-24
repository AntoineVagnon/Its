'use client';

import { useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface ClientLogosProps {
  namespace?: string;
  clients: string[];
}

export function ClientLogos({ namespace = 'Geodet', clients }: ClientLogosProps) {
  const t = useTranslations(namespace);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 border-t border-white/5">
      <ScrollReveal>
        <p className="text-xs font-medium tracking-widest text-gray-500 uppercase text-center mb-10">
          {t('clients.heading')}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {clients.map((name) => (
            <span
              key={name}
              className="text-sm font-semibold tracking-widest text-gray-500 hover:text-gray-300 transition-colors uppercase"
            >
              {name}
            </span>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
