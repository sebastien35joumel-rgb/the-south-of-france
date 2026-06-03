// ─────────────────────────────────────────────────────────────
// Single source of truth for nested content pages.
// A nested page lives at /<locale>/<parent-slug>/<entry>/ and is
// either an article (under a region or hub) or an adresse (under a
// region or hub). The entry slug is stable across locales; only the
// parent slug is translated. Consumed by:
//   • pages/[lang]/[section]/[entry].astro  → getStaticPaths
//   • components/pages/Archive.astro         → the complete index
// ─────────────────────────────────────────────────────────────
import type { SectionKey } from '../i18n/config';

export interface NestedEntry {
  kind: 'article' | 'adresse';
  parent: SectionKey;
  entry: string;
}

export const NESTED: NestedEntry[] = [
  { kind: 'article', parent: 'provence', entry: 'iles-d-or' },
  { kind: 'article', parent: 'the-table', entry: 'provence-table-guide' },
  { kind: 'article', parent: 'the-table', entry: 'riviera-table-guide' },
  { kind: 'article', parent: 'camargue', entry: 'camargue-guide' },
  { kind: 'article', parent: 'languedoc', entry: 'languedoc-guide' },
  { kind: 'article', parent: 'provence', entry: 'luberon-weekend' },
  { kind: 'article', parent: 'french-riviera', entry: 'riviera-in-three-days' },
  { kind: 'article', parent: 'provence', entry: 'alpilles-weekend' },
  { kind: 'article', parent: 'camargue', entry: 'arles-in-a-weekend' },
  { kind: 'article', parent: 'languedoc', entry: 'canal-du-midi-velo' },
  { kind: 'article', parent: 'provence', entry: 'roussillon-ochre' },
  { kind: 'article', parent: 'french-riviera', entry: 'eze-village' },
  { kind: 'article', parent: 'camargue', entry: 'aigues-mortes-salt' },
  { kind: 'adresse', parent: 'stays', entry: 'crillon-le-brave' },
  { kind: 'adresse', parent: 'stays', entry: 'la-colombe-d-or' },
  { kind: 'adresse', parent: 'the-table', entry: 'oustau-de-baumaniere' },
  { kind: 'adresse', parent: 'the-table', entry: 'la-chevre-d-or' },
  { kind: 'adresse', parent: 'stays', entry: 'mas-de-peint' },
  { kind: 'adresse', parent: 'stays', entry: 'chateau-les-carrasses' },
];
