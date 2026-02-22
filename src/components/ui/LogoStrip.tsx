import { cn } from '@/lib/utils';

interface LogoStripProps {
  logos: string[];
  variant?: 'light' | 'dark';
  className?: string;
}

export function LogoStrip({ logos, variant = 'dark', className }: LogoStripProps) {
  return (
    <div
      className={cn(
        'flex flex-wrap justify-center items-center gap-10 md:gap-16',
        variant === 'light' ? 'opacity-50 grayscale' : '',
        className
      )}
    >
      {logos.map((name) => (
        <span
          key={name}
          className={cn(
            'text-xl font-medium tracking-tighter',
            variant === 'light' ? 'text-white' : 'text-gray-300'
          )}
        >
          {name}
        </span>
      ))}
    </div>
  );
}
