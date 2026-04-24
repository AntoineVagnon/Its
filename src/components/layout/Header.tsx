'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Icon } from '@iconify/react';
import { NAV_ITEMS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { LanguageToggle } from './LanguageToggle';
import { MobileNav } from './MobileNav';

function getActiveKey(pathname: string, locale: string): string | null {
  if (pathname === `/${locale}` || pathname === `/${locale}/`) return 'home';
  if (pathname.startsWith(`/${locale}/proizvodi`)) return 'products';
  if (pathname.startsWith(`/${locale}/kontakt`)) return 'contact';
  return null;
}

export function Header() {
  const t = useTranslations('Header');
  const locale = useLocale();
  const pathname = usePathname();
  const activeKey = getActiveKey(pathname, locale);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <nav
        className={cn(
          'fixed w-full top-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-its-dark/80 backdrop-blur-xl border-b border-white/10'
            : 'bg-transparent'
        )}
        data-testid="header"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <a href={`/${locale}/`} className="flex items-center gap-2.5 text-xl font-semibold tracking-tighter text-white">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-its-accent to-its-accent-dark flex items-center justify-center">
                <div className="w-2 h-2 bg-its-dark rounded-full" />
              </div>
              {t('logo')}
            </a>
            <div className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.key}
                  href={`/${locale}${item.href}`}
                  className={cn(
                    'relative text-sm transition-colors pb-1',
                    activeKey === item.key
                      ? 'font-medium text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-its-accent'
                      : 'font-normal text-gray-400 hover:text-white'
                  )}
                >
                  {t(`nav.${item.key}`)}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <LanguageToggle />
            <Button href={`/${locale}/kontakt`} className="px-5 py-2.5">
              {t('cta')}
            </Button>
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            data-testid="hamburger"
          >
            <Icon icon="solar:hamburger-menu-linear" width={24} height={24} />
          </button>
        </div>
      </nav>
      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} locale={locale} activeKey={activeKey} />
    </>
  );
}
