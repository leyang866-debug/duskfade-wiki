/** i18n routing — English has no prefix; all other supported locales do. */

export const locales = ['en', 'zh', 'es', 'fr'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  zh: '简体中文',
  es: 'Español',
  fr: 'Français',
};

export function isDefaultLocale(locale: string): boolean {
  return locale === defaultLocale;
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
