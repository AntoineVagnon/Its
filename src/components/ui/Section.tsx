import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type SectionVariant = 'default' | 'white' | 'navy';

interface SectionProps {
  children: ReactNode;
  variant?: SectionVariant;
  id?: string;
  className?: string;
  fullWidth?: boolean;
}

const variantClasses: Record<SectionVariant, string> = {
  default: 'bg-its-surface',
  white: 'bg-white border-y border-gray-100',
  navy: 'bg-its-navy text-white',
};

export function Section({
  children,
  variant = 'default',
  id,
  className,
  fullWidth = false,
}: SectionProps) {
  return (
    <section id={id} className={cn('py-24', variantClasses[variant], className)}>
      {fullWidth ? (
        children
      ) : (
        <div className="max-w-7xl mx-auto px-6">{children}</div>
      )}
    </section>
  );
}
