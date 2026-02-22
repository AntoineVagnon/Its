import { useTranslations } from 'next-intl';
import { Icon } from '@iconify/react';
import { COMPANY, SOCIAL_LINKS } from '@/lib/constants';

export function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-its-navy pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <span className="text-xl font-medium tracking-tighter text-white block mb-6">
              {COMPANY.displayName}
            </span>
            <p className="text-sm font-light text-gray-400 leading-relaxed mb-6">
              {t('description')}
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-its-gold hover:text-its-navy transition-colors"
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
              {(['home', 'products', 'services', 'about', 'quote'] as const).map((key) => (
                <li key={key}>
                  <a href="#" className="text-sm font-light text-gray-400 hover:text-white transition-colors">
                    {t(`links.${key}`)}
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
              {(['geodet', 'proman', 'dkv', 'ervip', 'helpdesk'] as const).map((key) => (
                <li key={key}>
                  <a href="#" className="text-sm font-light text-gray-400 hover:text-its-gold transition-colors">
                    {t(`solutionItems.${key}`)}
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
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-its-gold transition-colors"
              />
              <button
                type="button"
                className="bg-its-gold text-its-navy px-4 py-2 rounded-lg text-sm font-medium hover:bg-its-gold-dark transition-colors"
              >
                {t('newsletterSubmit')}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-light text-gray-500">
            {t('copyright', { year: new Date().getFullYear() })}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs font-light text-gray-500 hover:text-white transition-colors">
              {t('privacy')}
            </a>
            <a href="#" className="text-xs font-light text-gray-500 hover:text-white transition-colors">
              {t('terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
