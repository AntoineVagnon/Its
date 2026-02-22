import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'ghost' | 'link' | 'outline' | 'dark';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-its-gold text-its-navy hover:bg-its-gold-dark shadow-sm',
  ghost:
    'bg-white/10 text-white border border-white/20 hover:bg-white/20',
  link: 'text-its-blue hover:text-its-navy',
  outline:
    'border border-gray-200 text-its-navy hover:bg-gray-50',
  dark: 'bg-its-navy text-white hover:bg-its-navy-light shadow-sm',
};

export function Button({
  children,
  variant = 'primary',
  href,
  className,
  type = 'button',
  disabled,
  onClick,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium transition-all',
    variantClasses[variant],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
