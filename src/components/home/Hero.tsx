'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { LogoStrip } from '@/components/ui/LogoStrip';
import { PARTNERS } from '@/lib/constants';

export function Hero() {
  const t = useTranslations('Hero');
  const locale = useLocale();

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-its-dark overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Animated glow orbs */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-its-accent/10 blur-[160px] animate-glow-drift" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-its-blue/10 blur-[140px] animate-pulse-soft" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-its-accent/5 blur-[120px] animate-spin-slow" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
              {t('headline')}{' '}
              <span className="text-its-accent">{t('headlineHighlight')}</span>
            </h1>
            <p className="text-lg md:text-xl font-light text-gray-400 mb-10 max-w-xl leading-relaxed">
              {t('subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
              <Button href={`/${locale}/kontakt`}>
                {t('ctaQuote')}
              </Button>
              <Button variant="ghost" href={`/${locale}/#proizvodi`}>
                {t('ctaProducts')}
              </Button>
            </div>
          </div>

          {/* Floating abstract dashboard */}
          <div className="hidden lg:block relative">
            <div className="animate-float">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl">
                {/* Dashboard header */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green-400/60" />
                  <div className="ml-auto w-24 h-2 bg-white/10 rounded-full" />
                </div>
                {/* Chart area */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-its-accent/10 rounded-xl p-4 border border-its-accent/20">
                    <div className="text-2xl font-bold text-its-accent">50+</div>
                    <div className="text-xs text-gray-500 mt-1">Clients</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="text-2xl font-bold text-white">7</div>
                    <div className="text-xs text-gray-500 mt-1">Products</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="text-2xl font-bold text-white">10+</div>
                    <div className="text-xs text-gray-500 mt-1">Years</div>
                  </div>
                </div>
                {/* Bar chart mockup */}
                <div className="flex items-end gap-2 h-24">
                  {[40, 65, 50, 80, 60, 90, 75, 85].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-md transition-all"
                      style={{
                        height: `${h}%`,
                        background: i === 5 ? '#FACC15' : 'rgba(255,255,255,0.08)',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Small floating card */}
            <div className="absolute -bottom-4 -left-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 shadow-lg animate-float" style={{ animationDelay: '-3s' }}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 8l3 3 5-5" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <div className="text-xs font-medium text-white">System Online</div>
                  <div className="text-[10px] text-gray-500">99.9% uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 border-t border-white/10 pt-10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-medium text-gray-600 text-center tracking-wide uppercase mb-6">
            {t('partnersLabel')}
          </p>
          <LogoStrip logos={PARTNERS} variant="light" />
        </div>
      </div>
    </section>
  );
}
