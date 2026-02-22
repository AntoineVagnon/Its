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
    <div className={cn('flex items-center gap-2 text-xs font-medium text-its-muted', className)}>
      {locale === 'bs' ? (
        <span className="text-its-navy">BS</span>
      ) : (
        <a href={switchedPath('bs')} className="hover:text-its-navy transition-colors">
          BS
        </a>
      )}
      <span>|</span>
      {locale === 'en' ? (
        <span className="text-its-navy">EN</span>
      ) : (
        <a href={switchedPath('en')} className="hover:text-its-navy transition-colors">
          EN
        </a>
      )}
    </div>
  );
}
