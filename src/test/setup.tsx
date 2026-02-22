import '@testing-library/jest-dom';
import { vi } from 'vitest';
import messages from '../messages/bs.json';

// Mock next-intl
vi.mock('next-intl', () => ({
  useTranslations: (namespace?: string) => {
    return (key: string, params?: Record<string, unknown>) => {
      const ns = namespace ? (messages as Record<string, unknown>)[namespace] : messages;
      const keys = key.split('.');
      let value: unknown = ns;
      for (const k of keys) {
        value = (value as Record<string, unknown>)?.[k];
      }
      let result = (value as string) ?? key;
      if (params) {
        for (const [k, v] of Object.entries(params)) {
          result = result.replace(`{${k}}`, String(v));
        }
      }
      return result;
    };
  },
  useLocale: () => 'bs',
}));

// Mock next/navigation
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    back: vi.fn(),
  }),
  usePathname: () => '/bs/',
  useParams: () => ({ locale: 'bs' }),
}));

// Mock @iconify/react
vi.mock('@iconify/react', () => ({
  Icon: ({ icon, ...props }: { icon: string; [key: string]: unknown }) => {
    const spanProps: Record<string, unknown> = { 'data-icon': icon };
    if (props.width) spanProps['data-width'] = props.width;
    if (props.className) spanProps.className = props.className;
    return <span {...spanProps} />;
  },
}));

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: new Proxy(
    {},
    {
      get: (_target, prop) => {
        if (prop === 'div' || prop === 'section' || prop === 'nav' || prop === 'header' || prop === 'span') {
          return ({ children, ...props }: { children?: React.ReactNode; [key: string]: unknown }) => {
            const validProps: Record<string, unknown> = {};
            for (const [key, value] of Object.entries(props)) {
              if (!key.startsWith('while') && !key.startsWith('initial') && !key.startsWith('animate') && !key.startsWith('exit') && !key.startsWith('transition') && !key.startsWith('variants')) {
                validProps[key] = value;
              }
            }
            const Tag = prop as string;
            return <Tag {...validProps}>{children}</Tag>;
          };
        }
        return prop;
      },
    }
  ),
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  useInView: () => true,
}));
