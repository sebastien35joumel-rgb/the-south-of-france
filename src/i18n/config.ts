// ─────────────────────────────────────────────────────────────
// The South of France — i18n configuration
// Single source of truth for locales, translated slugs and UI chrome.
// ─────────────────────────────────────────────────────────────

export const SITE_URL = 'https://the-south-of-france.com';

export const locales = ['en', 'fr', 'it', 'de', 'es'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

// Only locales whose pages are actually published. hreflang + the language
// switcher are built from THIS list, so we never emit alternates to 404s.
// Add 'it', 'de', 'es' here once their pages exist.
export const liveLocales: Locale[] = ['en', 'fr', 'it', 'de', 'es'];

// <html lang="…"> value per locale.
export const htmlLang: Record<Locale, string> = {
  en: 'en',
  fr: 'fr',
  it: 'it',
  de: 'de',
  es: 'es',
};

// Human label shown in the language switcher.
export const localeLabel: Record<Locale, string> = {
  en: 'EN',
  fr: 'FR',
  it: 'IT',
  de: 'DE',
  es: 'ES',
};

// ── Translated slugs ──────────────────────────────────────────
// Keyed by a stable "section" id. `home` resolves to an empty path.
export type SectionKey =
  | 'home'
  | 'provence'
  | 'french-riviera'
  | 'languedoc'
  | 'camargue'
  | 'the-table'
  | 'stays'
  | 'things-to-do'
  | 'riviera-jewellers'
  | 'journal'
  | 'about'
  | 'contact'
  | 'newsletter'
  | 'contribute'
  | 'become-contributor'
  | 'legal';

export const slugs: Record<SectionKey, Record<Locale, string>> = {
  home: { en: '', fr: '', it: '', de: '', es: '' },
  provence: { en: 'provence', fr: 'provence', it: 'provenza', de: 'provence', es: 'provenza' },
  'french-riviera': { en: 'french-riviera', fr: 'cote-d-azur', it: 'costa-azzurra', de: 'cote-d-azur', es: 'costa-azul' },
  languedoc: { en: 'languedoc', fr: 'languedoc', it: 'linguadoca', de: 'languedoc', es: 'languedoc' },
  camargue: { en: 'camargue', fr: 'camargue', it: 'camargue', de: 'camargue', es: 'camarga' },
  'the-table': { en: 'the-table', fr: 'la-table', it: 'la-tavola', de: 'am-tisch', es: 'la-mesa' },
  stays: { en: 'stays', fr: 'ou-dormir', it: 'dove-dormire', de: 'unterkuenfte', es: 'donde-dormir' },
  'things-to-do': { en: 'things-to-do', fr: 'que-faire', it: 'cosa-fare', de: 'aktivitaeten', es: 'que-hacer' },
  'riviera-jewellers': { en: 'riviera-jewellers', fr: 'joailliers-riviera', it: 'gioiellieri-riviera', de: 'riviera-juweliere', es: 'joyeros-riviera' },
  journal: { en: 'journal', fr: 'journal', it: 'giornale', de: 'journal', es: 'diario' },
  about: { en: 'about', fr: 'a-propos', it: 'chi-siamo', de: 'ueber-uns', es: 'quienes-somos' },
  contact: { en: 'contact', fr: 'contact', it: 'contatti', de: 'kontakt', es: 'contacto' },
  newsletter: { en: 'newsletter', fr: 'newsletter', it: 'newsletter', de: 'newsletter', es: 'newsletter' },
  contribute: { en: 'write-for-us', fr: 'rediger-un-article', it: 'scrivi-per-noi', de: 'fuer-uns-schreiben', es: 'escribe-para-nosotros' },
  'become-contributor': { en: 'become-a-contributor', fr: 'devenir-contributeur', it: 'diventare-collaboratore', de: 'mitwirken', es: 'colaborar-con-nosotros' },
  legal: { en: 'legal', fr: 'mentions-legales', it: 'note-legali', de: 'impressum', es: 'aviso-legal' },
};

// Build the absolute path for a section in a given locale, e.g. "/fr/provence/".
export function localizedPath(locale: Locale, section: SectionKey): string {
  const slug = slugs[section][locale];
  return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

// Absolute URL (used for canonical + hreflang).
export function localizedUrl(locale: Locale, section: SectionKey): string {
  return SITE_URL + localizedPath(locale, section);
}

// hreflang alternates for a section, restricted to published locales.
// Returns [{ hreflang, href }] including the x-default (→ default locale).
export function hreflangAlternates(section: SectionKey) {
  const alts = liveLocales.map((loc) => ({
    hreflang: htmlLang[loc],
    href: localizedUrl(loc, section),
  }));
  alts.push({ hreflang: 'x-default', href: localizedUrl(defaultLocale, section) });
  return alts;
}

// ── Nested content pages (article under a region, address under stays) ──
// Path = /<locale>/<parent-slug>/<entrySlug>/. The entry slug is stable
// across locales (a proper-noun slug), only the parent slug is translated.
export function nestedPath(locale: Locale, parent: SectionKey, entrySlug: string): string {
  return `/${locale}/${slugs[parent][locale]}/${entrySlug}/`;
}
export function nestedUrl(locale: Locale, parent: SectionKey, entrySlug: string): string {
  return SITE_URL + nestedPath(locale, parent, entrySlug);
}
export function nestedAlternates(parent: SectionKey, entrySlug: string) {
  const alts = liveLocales.map((loc) => ({
    hreflang: htmlLang[loc],
    href: nestedUrl(loc, parent, entrySlug),
  }));
  alts.push({ hreflang: 'x-default', href: nestedUrl(defaultLocale, parent, entrySlug) });
  return alts;
}
