'use client';

import { useState, FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/Button';

export function ContactForm() {
  const t = useTranslations('Contact');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'inquiry',
    message: '',
    privacy: false,
  });

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = t('form.validationRequired');
    if (!formData.email.trim()) {
      newErrors.email = t('form.validationRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('form.validationEmail');
    }
    if (!formData.privacy) newErrors.privacy = t('form.validationRequired');
    return newErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10 text-center" data-testid="success-message">
        <div className="w-16 h-16 rounded-full bg-its-accent/10 mx-auto mb-6 flex items-center justify-center">
          <Icon icon="solar:check-circle-linear" width={32} className="text-its-accent" />
        </div>
        <h3 className="text-2xl font-bold tracking-tight text-white mb-3">
          {t('success.heading')}
        </h3>
        <p className="text-base font-light text-gray-400">
          {t('success.message')}
        </p>
      </div>
    );
  }

  const subjectOptions = ['inquiry', 'support', 'partnership', 'other'] as const;

  const inputClasses = 'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-its-accent focus:ring-1 focus:ring-its-accent/50 transition-colors';

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-medium text-gray-300 mb-2 uppercase tracking-wide">
            {t('form.name')}
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={inputClasses}
            placeholder={t('form.namePlaceholder')}
          />
          {errors.name && (
            <p className="text-xs text-red-400 mt-1" role="alert">{errors.name}</p>
          )}
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-300 mb-2 uppercase tracking-wide">
            {t('form.email')}
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={inputClasses}
            placeholder={t('form.emailPlaceholder')}
          />
          {errors.email && (
            <p className="text-xs text-red-400 mt-1" role="alert">{errors.email}</p>
          )}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-medium text-gray-300 mb-2 uppercase tracking-wide">
            {t('form.phone')}
          </label>
          <input
            type="text"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={inputClasses}
            placeholder={t('form.phonePlaceholder')}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-300 mb-2 uppercase tracking-wide">
            {t('form.subject')}
          </label>
          <div className="relative">
            <select
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className={`${inputClasses} appearance-none`}
            >
              {subjectOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-its-dark text-white">
                  {t(`form.subjectOptions.${opt}`)}
                </option>
              ))}
            </select>
            <Icon
              icon="solar:alt-arrow-down-linear"
              className="absolute right-4 top-3.5 text-gray-400 pointer-events-none"
              width={16}
            />
          </div>
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-300 mb-2 uppercase tracking-wide">
          {t('form.message')}
        </label>
        <textarea
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`${inputClasses} resize-none`}
          placeholder={t('form.messagePlaceholder')}
        />
      </div>
      <label className="flex items-start gap-3 cursor-pointer group">
        <div className="relative flex items-center justify-center mt-0.5">
          <input
            type="checkbox"
            checked={formData.privacy}
            onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
            className="peer sr-only"
          />
          <div className="w-4 h-4 rounded border border-white/20 bg-white/5 peer-checked:bg-its-accent peer-checked:border-its-accent transition-colors flex items-center justify-center">
            {formData.privacy && (
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none" className="text-its-dark">
                <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
        </div>
        <span className="text-xs font-light text-gray-400 leading-relaxed select-none">
          {t('form.privacy')}
        </span>
      </label>
      {errors.privacy && (
        <p className="text-xs text-red-400 -mt-4" role="alert">{errors.privacy}</p>
      )}
      <Button type="submit" className="w-full sm:w-auto px-8">
        {t('form.submit')}
      </Button>
    </form>
  );
}
