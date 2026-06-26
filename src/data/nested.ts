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
  { kind: 'article', parent: 'provence', entry: 'gordes-senanque' },
  { kind: 'article', parent: 'provence', entry: 'gorges-du-verdon' },
  { kind: 'article', parent: 'french-riviera', entry: 'saint-paul-de-vence' },
  { kind: 'article', parent: 'provence', entry: 'calanques-de-cassis' },
  { kind: 'article', parent: 'languedoc', entry: 'pont-du-gard-nimes' },
  { kind: 'article', parent: 'french-riviera', entry: 'menton-gardens-lemon' },
  { kind: 'article', parent: 'provence', entry: 'aix-en-provence' },
  { kind: 'article', parent: 'provence', entry: 'avignon-palais-des-papes' },
  { kind: 'article', parent: 'provence', entry: 'marseille-vieux-port' },
  { kind: 'article', parent: 'provence', entry: 'isle-sur-la-sorgue' },
  { kind: 'article', parent: 'provence', entry: 'mont-ventoux' },
  { kind: 'article', parent: 'french-riviera', entry: 'nice-vieux-nice' },
  { kind: 'article', parent: 'french-riviera', entry: 'antibes-picasso' },
  { kind: 'article', parent: 'french-riviera', entry: 'grasse-perfume' },
  { kind: 'article', parent: 'french-riviera', entry: 'villefranche-sur-mer' },
  { kind: 'article', parent: 'french-riviera', entry: 'saint-tropez' },
  { kind: 'article', parent: 'french-riviera', entry: 'cannes-film-festival' },
  { kind: 'article', parent: 'languedoc', entry: 'carcassonne' },
  { kind: 'article', parent: 'languedoc', entry: 'sete-port' },
  { kind: 'article', parent: 'languedoc', entry: 'collioure' },
  { kind: 'article', parent: 'camargue', entry: 'saintes-maries-de-la-mer' },
  { kind: 'article', parent: 'camargue', entry: 'pont-de-gau-flamingos' },
  // ── New destination pages ──
  { kind: 'article', parent: 'provence', entry: 'les-baux-de-provence' },
  { kind: 'article', parent: 'provence', entry: 'saint-remy-de-provence' },
  { kind: 'article', parent: 'french-riviera', entry: 'cap-ferrat-ephrussi' },
  { kind: 'article', parent: 'languedoc', entry: 'uzes' },
  { kind: 'article', parent: 'provence', entry: 'lourmarin' },
  // ── SEO blog guides (low-KD long-tail) ──
  { kind: 'article', parent: 'things-to-do', entry: 'south-of-france-in-october' },
  { kind: 'adresse', parent: 'stays', entry: 'crillon-le-brave' },
  { kind: 'adresse', parent: 'stays', entry: 'la-colombe-d-or' },
  { kind: 'adresse', parent: 'the-table', entry: 'oustau-de-baumaniere' },
  { kind: 'adresse', parent: 'the-table', entry: 'la-chevre-d-or' },
  { kind: 'adresse', parent: 'stays', entry: 'mas-de-peint' },
  { kind: 'adresse', parent: 'stays', entry: 'chateau-les-carrasses' },
];
