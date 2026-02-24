'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Icon } from '@iconify/react';
import { COMPANY, SOCIAL_LINKS } from '@/lib/constants';

export function Footer() {
  const t = useTranslations('Footer');
  const locale = useLocale();

  return (
    <footer className="bg-its-dark-light/50 pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-its-accent to-its-accent-dark flex items-center justify-center">
                <div className="w-2 h-2 bg-its-dark rounded-full" />
              </div>
              <span className="text-xl font-semibold tracking-tighter text-white">
                {COMPANY.displayName}
              </span>
            </div>
            <p className="text-sm font-light text-gray-400 leading-relaxed mb-6">
              {t('description')}
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-its-accent hover:text-its-dark hover:border-its-accent transition-all"
                >
                  <Icon icon={link.icon} width={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium tracking-tight text-white mb-6 uppercase">
              {t('quickLinks')}
            </h4>
            <ul className="space-y-3">
              {([
                { key: 'home', href: `/${locale}/` },
                { key: 'products', href: `/${locale}/#proizvodi` },
                { key: 'about', href: `/${locale}/#o-nama` },
                { key: 'quote', href: `/${locale}/kontakt` },
              ] as const).map((item) => (
                <li key={item.key}>
                  <a href={item.href} className="text-sm font-light text-gray-400 hover:text-its-accent transition-colors">
                    {t(`links.${item.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-sm font-medium tracking-tight text-white mb-6 uppercase">
              {t('solutions')}
            </h4>
            <ul className="space-y-3">
              {([
                { key: 'geodet', href: `/${locale}/proizvodi/geodet` },
                { key: 'proman', href: `/${locale}/kontakt` },
                { key: 'dkv', href: `/${locale}/kontakt` },
                { key: 'ervip', href: `/${locale}/kontakt` },
                { key: 'helpdesk', href: `/${locale}/kontakt` },
              ] as const).map((item) => (
                <li key={item.key}>
                  <a href={item.href} className="text-sm font-light text-gray-400 hover:text-its-accent transition-colors">
                    {t(`solutionItems.${item.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-medium tracking-tight text-white mb-6 uppercase">
              {t('newsletter')}
            </h4>
            <p className="text-sm font-light text-gray-400 mb-4">
              {t('newsletterText')}
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder={t('newsletterPlaceholder')}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-its-accent transition-colors"
              />
              <button
                type="submit"
                className="bg-its-accent text-its-dark px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-its-accent-dark transition-colors shrink-0"
              >
                {t('newsletterSubmit')}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex items-center justify-center">
          <p className="text-xs font-light text-gray-500">
            {t('copyright', { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
}
