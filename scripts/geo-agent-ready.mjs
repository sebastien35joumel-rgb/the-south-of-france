// geo-agent-ready.mjs — rend un site STATIQUE « agent-ready » (GEO) après le build.
//
// Équivalent maison du plugin WordPress « WP Agent Ready », pour les ~40 sites
// Astro/Cloudflare du réseau (le plugin ne couvre que WordPress).
//
// Ce que le script pose, à partir du dossier `dist/` déjà buildé :
//   1) Une version Markdown de chaque page      ->  /about/  ->  /about.md
//   2) <link rel="alternate" type="text/markdown"> dans le <head> de chaque page HTML
//   3) /llms.txt à la racine (format llmstxt.org : H1 + blockquote + liens .md)
//
// Usage :
//   node ../geo-agent-ready.mjs --dist ./dist --site https://exemple.com [--name "Nom du site"] [--dry]
//
// Idempotent : relançable après chaque build (il régénère tout, n'empile rien).
//
// NOTE architecture : un site statique ne peut PAS faire de négociation de contenu
// (Accept: text/markdown / détection User-Agent) — ça demande un Worker. Les URLs .md
// + le <link rel=alternate> + llms.txt sont la voie découvrable standard et suffisent
// aux crawlers qui suivent la spec. Le Worker de négociation est une étape ultérieure.

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import TurndownService from 'turndown';

const args = process.argv.slice(2);
const val = (flag, def = null) => {
  const i = args.indexOf(flag);
  return i !== -1 && args[i + 1] ? args[i + 1] : def;
};
const DIST = val('--dist', './dist');
const SITE = (val('--site') || '').replace(/\/$/, '');
const DRY = args.includes('--dry');
let SITE_NAME = val('--name');

if (!SITE) {
  console.error('❌ --site est obligatoire.  Ex: node geo-agent-ready.mjs --dist ./dist --site https://exemple.com');
  process.exit(1);
}

const td = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced', bulletListMarker: '-' });
// Les liens/images relatifs doivent devenir absolus pour être exploitables hors site.
td.addRule('absolutise', {
  filter: ['a', 'img'],
  replacement(content, node) {
    const isImg = node.nodeName === 'IMG';
    let url = node.getAttribute(isImg ? 'src' : 'href') || '';
    if (url.startsWith('/')) url = SITE + url;
    if (isImg) {
      const alt = node.getAttribute('alt') || '';
      return url ? `![${alt}](${url})` : '';
    }
    if (!url || url.startsWith('#')) return content;
    return content ? `[${content}](${url})` : '';
  },
});

// --- HTML -> texte utile -----------------------------------------------------
// Pas de <main> garanti sur les sites du réseau (layouts en <slot/> nu) : on prend
// le <body> et on retire le chrome (header/footer/nav) + le non-contenu.
function extractBody(html) {
  const m = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let body = m ? m[1] : html;
  const strip = (tag) => {
    body = body.replace(new RegExp(`<${tag}\\b[^>]*>[\\s\\S]*?<\\/${tag}>`, 'gi'), '');
  };
  ['script', 'style', 'noscript', 'svg', 'header', 'footer', 'nav', 'form', 'template', 'iframe'].forEach(strip);
  return body;
}

const meta = (html, name) => {
  // On capture le guillemet ouvrant, puis on ferme sur LE MÊME (backreference \1).
  // Piège : [^"']* s'arrête à la PREMIÈRE apostrophe. En français, « multiple d'EBE »
  // dans un attribut en guillemets doubles tronquait toutes les descriptions à
  // « multiple d ». Les agents IA lisaient des phrases coupées en plein milieu.
  const re = new RegExp(`<meta[^>]+name=["']${name}["'][^>]*content=(["'])([\\s\\S]*?)\\1`, 'i');
  const m = html.match(re);
  return m ? m[2] : '';
};
const titleOf = (html) => {
  const m = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return m ? m[1].replace(/\s+/g, ' ').trim() : '';
};
const decode = (s) =>
  s.replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n))
   .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)))
   .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
   .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ');

// --- Parcours du dist --------------------------------------------------------
// Deux formats de build coexistent dans le réseau :
//   build.format 'directory' -> dist/about/index.html   (URL /about/)
//   build.format 'file'      -> dist/about.html         (URL /about)
// Il faut couvrir les deux, sinon on ne convertit que la home (piège vécu 2026-07-16
// sur equipements-bateaux et mamanpoulpe : 1 seul .md généré au lieu de tout le site).
const SKIP_HTML = new Set(['404.html']);
function walk(dir, out = []) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (e.endsWith('.html') && !SKIP_HTML.has(e)) out.push(p);
  }
  return out;
}

// dist/index.html -> { url:'/',        md:'/index.md'  }
// dist/a/index.html -> { url:'/a/',    md:'/a.md'      }
// dist/a.html       -> { url:'/a',     md:'/a.md'      }
function pathsFor(file) {
  const parts = relative(DIST, file).split(sep);
  const base = parts.pop();
  if (base === 'index.html') {
    const rel = parts.join('/');
    return { urlPath: rel ? `/${rel}/` : '/', mdPath: rel ? `/${rel}.md` : '/index.md' };
  }
  const stem = base.replace(/\.html$/, '');
  const rel = [...parts, stem].join('/');
  return { urlPath: `/${rel}`, mdPath: `/${rel}.md` };
}

// Garde-fou anti-dist-périmé.
//
// Ce script ne build pas : il réécrit le HTML déjà présent dans dist/. Lancé sans
// `astro build` devant, il repeint donc un vieux build, qui part ensuite en prod.
// Vécu le 09/07/2026 sur assistance-informatique-nice.com : 3 balises de
// vérification netlinking ajoutées au layout sont restées absentes du site
// pendant une semaine, alors que le code source était juste et poussé.
//
// Repère de la date du build : les assets hashés de dist/_astro/, qu'on ne touche
// jamais. Surtout pas les .html — ce script réécrit leur mtime à chaque passage,
// donc ils paraissent frais même quand leur contenu est périmé.
const newestMtime = (path) => {
  try {
    const st = statSync(path);
    if (!st.isDirectory()) return st.mtimeMs;
    return readdirSync(path).reduce((max, e) => Math.max(max, newestMtime(join(path, e))), 0);
  } catch {
    return 0; // chemin absent : ne compte pas
  }
};

const buildTime = newestMtime(join(DIST, '_astro'));
const srcTime = Math.max(newestMtime('src'), newestMtime('astro.config.mjs'));

if (buildTime && srcTime > buildTime && !args.includes('--force')) {
  const mins = Math.round((srcTime - buildTime) / 60000);
  const age = mins >= 1440 ? `${Math.round(mins / 1440)} j` : mins >= 60 ? `${Math.round(mins / 60)} h` : `${mins} min`;
  console.error(`❌ dist/ est périmé : les sources ont ${age} d'avance sur le build.`);
  console.error('   Ce script ne build pas, il ne ferait que repeindre un vieux HTML.');
  console.error('   Lance `npm run build` (astro build + geo), pas `npm run geo` seul.');
  console.error('   (--force pour passer outre en connaissance de cause)');
  process.exit(1);
}

const files = walk(DIST);
if (!files.length) {
  console.error(`❌ Aucun .html trouvé dans ${DIST} — le site est-il bien buildé ?`);
  process.exit(1);
}

const pages = [];
for (const file of files) {
  const html = readFileSync(file, 'utf8');
  const { urlPath, mdPath } = pathsFor(file);

  const title = decode(titleOf(html));
  const desc = decode(meta(html, 'description'));

  let md;
  try {
    md = td.turndown(extractBody(html)).replace(/\n{3,}/g, '\n\n').trim();
  } catch (e) {
    console.warn(`  ⚠ conversion échouée, page ignorée : ${urlPath} (${e.message})`);
    continue;
  }
  if (!md) {
    console.warn(`  ⚠ contenu vide après extraction, page ignorée : ${urlPath}`);
    continue;
  }

  // Le corps porte déjà son propre H1 dans la quasi-totalité des cas : ne pas en
  // ajouter un second (deux H1 = structure ambiguë pour un LLM qui parse le doc).
  // (chercher partout, pas seulement en tête : un fil d'Ariane précède souvent le H1)
  const hasOwnH1 = /^#\s+\S/m.test(md);
  const header = [
    hasOwnH1 ? '' : `# ${title || urlPath}\n`,
    desc ? `> ${desc}\n` : '',
    `\n*Source : ${SITE}${urlPath}*\n`,
    '\n---\n',
  ].join('');
  pages.push({ urlPath, mdPath, title, desc, body: `${header}\n${md}\n`, file, html });
}

// Nom du site : déduit du <title> de la home si non fourni (« X — baseline » -> « X »).
if (!SITE_NAME) {
  const home = pages.find((p) => p.urlPath === '/');
  // Couper UNIQUEMENT sur un tiret cadratin/demi-cadratin/pipe entouré d'espaces.
  // Piège : la classe [—|–|-] inclut le trait d'union, donc une marque qui en contient
  // un est amputée — « Cession-Affaire — Transmission… » donnait « Cession ».
  // (« · » est le séparateur de titre de sornettes.com — sans lui, SITE_NAME vaut
  //  le titre entier et le nettoyage des libellés du llms.txt ne retire rien.)
  SITE_NAME = home?.title?.split(/\s+[—–|·]\s+/)[0].trim() || SITE.replace(/^https?:\/\//, '');
}

if (DRY) {
  console.log(`(dry-run) ${pages.length} page(s) seraient converties pour ${SITE} :`);
  pages.slice(0, 10).forEach((p) => console.log(`  ${p.urlPath.padEnd(40)} -> ${p.mdPath}`));
  if (pages.length > 10) console.log(`  … +${pages.length - 10}`);
  process.exit(0);
}

// 1) écrire les .md
for (const p of pages) writeFileSync(join(DIST, p.mdPath.replace(/^\//, '')), p.body, 'utf8');

// 2) injecter <link rel="alternate"> dans le <head> (idempotent : on retire l'ancien d'abord)
let injected = 0;
for (const p of pages) {
  let html = p.html.replace(/\s*<link rel="alternate" type="text\/markdown"[^>]*>/gi, '');
  const tag = `<link rel="alternate" type="text/markdown" href="${SITE}${p.mdPath}">`;
  if (/<\/head>/i.test(html)) {
    html = html.replace(/<\/head>/i, `  ${tag}\n</head>`);
    writeFileSync(p.file, html, 'utf8');
    injected++;
  }
}

// 3) llms.txt (format llmstxt.org)
const home = pages.find((p) => p.urlPath === '/');
const rest = pages.filter((p) => p.urlPath !== '/').sort((a, b) => a.urlPath.localeCompare(b.urlPath));
const groupOf = (u) => {
  const seg = u.split('/').filter(Boolean);
  return seg.length > 1 ? seg[0] : 'Pages';
};
const groups = new Map();
for (const p of rest) {
  const g = groupOf(p.urlPath);
  if (!groups.has(g)) groups.set(g, []);
  groups.get(g).push(p);
}

let llms = `# ${SITE_NAME}\n\n`;
if (home?.desc) llms += `> ${home.desc}\n\n`;
llms += `Version Markdown de chaque page : ajouter \`.md\` à l'URL (ex. ${SITE}/about.md).\n\n`;
for (const [g, items] of [...groups].sort((a, b) => a[0].localeCompare(b[0]))) {
  llms += `## ${g.charAt(0).toUpperCase() + g.slice(1)}\n\n`;
  // Retirer le suffixe de marque «  — Nom du site » répété dans chaque <title>.
  // Séparateur entouré d'espaces uniquement (même piège que SITE_NAME : un `-` collé
  // appartient à la marque). Couvre — – | · pour tout le réseau.
  const label = (t) => (t || '').replace(new RegExp(`\\s+[—–|·]\\s+${SITE_NAME.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*$`, 'i'), '').trim();
  for (const p of items) llms += `- [${label(p.title) || p.urlPath}](${SITE}${p.mdPath})${p.desc ? `: ${p.desc}` : ''}\n`;
  llms += '\n';
}
writeFileSync(join(DIST, 'llms.txt'), llms, 'utf8');

console.log(`✅ GEO agent-ready — ${SITE}`);
console.log(`   ${pages.length} fichier(s) .md générés`);
console.log(`   ${injected} <link rel="alternate"> injectés`);
console.log(`   llms.txt écrit (${groups.size} section(s))`);
console.log(`   → vérifie après déploiement :`);
console.log(`      curl -s ${SITE}/llms.txt | head`);
console.log(`      curl -sI ${SITE}/about.md   (attendu : content-type text/markdown)`);
