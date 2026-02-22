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
      <div className="bg-white rounded-2xl p-12 border border-gray-100 shadow-sm text-center" data-testid="success-message">
        <div className="w-16 h-16 rounded-full bg-its-gold-light mx-auto mb-6 flex items-center justify-center">
          <Icon icon="solar:check-circle-linear" width={32} className="text-its-gold" />
        </div>
        <h3 className="text-2xl font-semibold tracking-tight text-its-navy mb-3">
          {t('success.heading')}
        </h3>
        <p className="text-base font-light text-its-muted">
          {t('success.message')}
        </p>
      </div>
    );
  }

  const subjectOptions = ['inquiry', 'support', 'partnership', 'other'] as const;

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-medium text-its-navy mb-2 uppercase tracking-wide">
            {t('form.name')}
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-its-gold focus:ring-1 focus:ring-its-gold transition-colors"
            placeholder={t('form.namePlaceholder')}
          />
          {errors.name && (
            <p className="text-xs text-red-500 mt-1" role="alert">{errors.name}</p>
          )}
        </div>
        <div>
          <label className="block text-xs font-medium text-its-navy mb-2 uppercase tracking-wide">
            {t('form.email')}
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-its-gold focus:ring-1 focus:ring-its-gold transition-colors"
            placeholder={t('form.emailPlaceholder')}
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1" role="alert">{errors.email}</p>
          )}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-medium text-its-navy mb-2 uppercase tracking-wide">
            {t('form.phone')}
          </label>
          <input
            type="text"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-its-gold focus:ring-1 focus:ring-its-gold transition-colors"
            placeholder={t('form.phonePlaceholder')}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-its-navy mb-2 uppercase tracking-wide">
            {t('form.subject')}
          </label>
          <div className="relative">
            <select
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm appearance-none focus:outline-none focus:border-its-gold focus:ring-1 focus:ring-its-gold transition-colors text-its-text"
            >
              {subjectOptions.map((opt) => (
                <option key={opt} value={opt}>
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
        <label className="block text-xs font-medium text-its-navy mb-2 uppercase tracking-wide">
          {t('form.message')}
        </label>
        <textarea
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-its-gold focus:ring-1 focus:ring-its-gold transition-colors resize-none"
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
          <div className="w-4 h-4 rounded border border-gray-300 bg-white peer-checked:bg-its-gold peer-checked:border-its-gold transition-colors" />
        </div>
        <span className="text-xs font-light text-its-muted leading-relaxed select-none">
          {t('form.privacy')}
        </span>
      </label>
      <Button type="submit" className="w-full sm:w-auto px-8">
        {t('form.submit')}
      </Button>
      <p className="text-xs font-light text-gray-400 mt-4">
        {t('form.recaptcha')}
      </p>
    </form>
  );
}
