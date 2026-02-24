import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';

interface CardProps {
  icon: string;
  category: string;
  title: string;
  description: string;
  linkText: string;
  href?: string;
  className?: string;
}

export function Card({
  icon,
  category,
  title,
  description,
  linkText,
  href = '#',
  className,
}: CardProps) {
  return (
    <a
      href={href}
      className={cn(
        'block group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-its-accent/30 hover:bg-white/[0.08] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden',
        className
      )}
    >
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-its-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
      <div className="bg-its-accent/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-its-accent/20 transition-colors">
        <Icon icon={icon} width={24} height={24} className="text-its-accent" />
      </div>
      <span className="inline-block px-2.5 py-1 bg-white/10 text-gray-400 text-xs font-medium rounded-md mb-4">
        {category}
      </span>
      <h3 className="text-xl font-medium tracking-tight text-white mb-2">
        {title}
      </h3>
      <p className="text-sm font-light text-gray-400 mb-6 line-clamp-2">
        {description}
      </p>
      <div className="flex items-center text-sm font-medium text-its-accent group-hover:text-its-accent-dark transition-colors">
        {linkText}
        <Icon icon="solar:arrow-right-linear" width={16} className="ml-1" />
      </div>
    </a>
  );
}
