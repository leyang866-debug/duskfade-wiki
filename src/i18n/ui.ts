import en from '~/locales/en.json';
import zh from '~/locales/zh.json';
import es from '~/locales/es.json';
import fr from '~/locales/fr.json';
import { defaultLocale, type Locale } from './routing';

const messages: Record<Locale, Record<string, unknown>> = {
  en: en as Record<string, unknown>,
  zh: zh as Record<string, unknown>,
  es: es as Record<string, unknown>,
  fr: fr as Record<string, unknown>,
};

function deepMerge(base: Record<string, unknown>, source: Record<string, unknown>): Record<string, unknown> {
  if (typeof base !== 'object' || base === null) return source;
  if (typeof source !== 'object' || source === null) return base;
  const merged = { ...base };
  for (const [key, value] of Object.entries(source)) {
    const existing = merged[key];
    merged[key] = value && typeof value === 'object' && !Array.isArray(value) && existing && typeof existing === 'object' && !Array.isArray(existing)
      ? deepMerge(existing as Record<string, unknown>, value as Record<string, unknown>)
      : value;
  }
  return merged;
}

export function getUi(locale: string): typeof en {
  if (locale === defaultLocale) return en;
  return deepMerge(en as Record<string, unknown>, locale in messages ? messages[locale as Locale] : {}) as typeof en;
}

export function t(locale: string, key: string): unknown {
  return key.split('.').reduce<unknown>((value, segment) => (
    value && typeof value === 'object' ? (value as Record<string, unknown>)[segment] : undefined
  ), getUi(locale));
}
