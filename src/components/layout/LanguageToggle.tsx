'use client';

import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function LanguageToggle({ className }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();

  const switchedPath = (target: string) => {
    const segments = pathname.split('/');
    segments[1] = target;
    return segments.join('/');
  };

  return (
    <div className={cn('flex items-center gap-2 text-xs font-medium text-gray-400', className)}>
      {locale === 'bs' ? (
        <span className="text-white">BS</span>
      ) : (
        <a href={switchedPath('bs')} className="hover:text-white transition-colors">
          BS
        </a>
      )}
      <span>|</span>
      {locale === 'en' ? (
        <span className="text-white">EN</span>
      ) : (
        <a href={switchedPath('en')} className="hover:text-white transition-colors">
          EN
        </a>
      )}
    </div>
  );
}
