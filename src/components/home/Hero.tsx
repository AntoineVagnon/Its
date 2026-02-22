import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { LogoStrip } from '@/components/ui/LogoStrip';
import { PARTNERS } from '@/lib/constants';

export function Hero({ locale }: { locale: string }) {
  const t = useTranslations('Hero');

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-its-navy overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
          {t('headline')}{' '}
          <span className="text-its-gold">{t('headlineHighlight')}</span>
        </h1>
        <p className="text-base md:text-lg font-light text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t('subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="ghost" href={`/${locale}/#proizvodi`}>
            {t('ctaProducts')}
          </Button>
          <Button href={`/${locale}/kontakt`}>
            {t('ctaQuote')}
          </Button>
        </div>
      </div>

      <div className="mt-20 border-t border-white/10 pt-10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-medium text-gray-500 text-center tracking-wide uppercase mb-6">
            {t('partnersLabel')}
          </p>
          <LogoStrip logos={PARTNERS} variant="light" />
        </div>
      </div>
    </section>
  );
}
