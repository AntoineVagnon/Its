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
    'bg-its-accent text-its-dark hover:bg-its-accent-dark shadow-sm shadow-its-accent/20',
  ghost:
    'bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm',
  link: 'text-its-accent hover:text-white',
  outline:
    'border border-white/20 text-white hover:bg-white/5',
  dark: 'bg-its-dark text-white hover:bg-its-dark-light border border-white/10 shadow-sm',
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
    const isExternal = href.startsWith('http');
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
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
