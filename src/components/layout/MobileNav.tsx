'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { NAV_ITEMS } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { LanguageToggle } from './LanguageToggle';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  locale: string;
}

export function MobileNav({ isOpen, onClose, locale }: MobileNavProps) {
  const t = useTranslations('Header');

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white border-b border-gray-100 shadow-lg"
          data-testid="mobile-nav"
        >
          <div className="px-6 py-6 space-y-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.key}
                href={`/${locale}${item.href}`}
                onClick={onClose}
                className="block text-sm font-medium text-its-navy py-2"
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
