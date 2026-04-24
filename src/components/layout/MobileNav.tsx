'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { NAV_ITEMS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { LanguageToggle } from './LanguageToggle';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  locale: string;
  activeKey?: string | null;
}

export function MobileNav({ isOpen, onClose, locale, activeKey }: MobileNavProps) {
  const t = useTranslations('Header');

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-its-dark/95 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          data-testid="mobile-nav"
        >
          <div className="px-6 py-6 space-y-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.key}
                href={`/${locale}${item.href}`}
                onClick={onClose}
                className={cn(
                  'block text-sm py-2',
                  activeKey === item.key
                    ? 'font-semibold text-its-accent'
                    : 'font-medium text-white'
                )}
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
            <Button href={`/${locale}/kontakt`} className="w-full mt-4">
              {t('cta')}
            </Button>
            <LanguageToggle className="justify-center pt-4" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
