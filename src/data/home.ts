// ─────────────────────────────────────────────────────────────
// Home page content, per locale. Source language is FR; EN is the
// x-default. IT/DE/ES are added here once translated.
// Fields that may contain <em> are rendered with set:html in the page.
// Photos reuse the verified Unsplash IDs from the gabarit (HTTP 200).
// ─────────────────────────────────────────────────────────────
import type { Locale, SectionKey } from '../i18n/config';

export interface Coverline { t: string; s: string; }
export interface Entry {
  img: string; alt: string; num: string;
  reg: string; cat: string; title: string; place: string; text: string; read: string;
  section: SectionKey;
}
export interface Region { ix: string; name: string; desc: string; count: string; section: SectionKey; }

export interface HomeContent {
  title: string;
  description: string;
  hero: {
    issue: string;
    sub: string;
    img: string;
    alt: string;
    coverlines: Coverline[];
    coverKicker: string;
    coverBig: string;
    coverDeck: string;
  };
  lead: {
    kicker: string;
    h2: string;
    byline: string;
    body: string;
    read: string;
    img: string;
    alt: string;
    tag: string;
    cap: string;
  };
  carnet: {
    label: string;
    heading: string;
    entries: Entry[];
  };
  regions: {
    label: string;
    heading: string;
    items: Region[];
  };
  band: {
    label: string;
    q: string;
    fr: string;
    sig: string;
  };
}

const HERO_IMG = 'https://images.unsplash.com/photo-1535928021132-3dfd912533d7?fm=jpg&q=72&w=2200&auto=format&fit=crop';
const LEAD_IMG = 'https://images.unsplash.com/photo-1600762849691-4b51bc94009c?fm=jpg&q=74&w=1600&auto=format&fit=crop';
const C1 = 'https://images.unsplash.com/photo-1597512432969-dd65354dba02?fm=jpg&q=74&w=900&auto=format&fit=crop';
const C2 = 'https://images.unsplash.com/photo-1665237592603-b03f244e1496?fm=jpg&q=74&w=900&auto=format&fit=crop';
const C3 = 'https://images.unsplash.com/photo-1604948559069-3287d5c5a6e5?fm=jpg&q=74&w=900&auto=format&fit=crop';
const C4 = 'https://images.unsplash.com/photo-1587579785043-eccb9f70391d?fm=jpg&q=74&w=900&auto=format&fit=crop';
const C5 = 'https://images.unsplash.com/photo-1597824854158-9226c52cd21b?fm=jpg&q=74&w=900&auto=format&fit=crop';
const C6 = 'https://images.unsplash.com/photo-1715792001784-708b1d2c0bcd?fm=jpg&q=74&w=900&auto=format&fit=crop';

export const home: Partial<Record<Locale, HomeContent>> = {
  en: {
    title: 'The South of France — A journal of the Mediterranean',
    description:
      'An independent editorial journal of the Mediterranean South of France — Provence, the Côte d’Azur, Languedoc and the Camargue. Hotels, tables, vineyards and the places we return to.',
    hero: {
      issue: 'Issue N° 09 · Spring 2026',
      sub: 'A journal of the Mediterranean',
      img: HERO_IMG,
      alt: 'The Mediterranean near Villefranche-sur-Mer',
      coverlines: [
        { t: 'The Îles d’Or', s: '48 hours · Hyères' },
        { t: '<em>Villa Gallici</em>', s: 'A night in Aix' },
        { t: 'Trévallon', s: 'Cult wines · Alpilles' },
        { t: 'The Esterel', s: 'Ten secret coves' },
      ],
      coverKicker: 'Cover Story · No 09',
      coverBig: 'La Belle Vie',
      coverDeck: 'Forty-eight hours on the Îles d’Or, where summer never ends.',
    },
    lead: {
      kicker: 'The Grand Report · Le grand reportage',
      h2: 'Forty-eight hours on the <em>Îles d’Or</em>, where summer never ends.',
      byline: 'Words — The Editors · Hyères, Var',
      body:
        'There is a stretch of the Var coast where the mainland loosens its grip and three islands float just offshore — Porquerolles, Port-Cros, Le Levant. We took the first boat out of La Tour Fondue, a notebook, and no return ticket. What we found was the South as it was promised: pine, salt, and the long afternoon light that painters chase and never quite catch.',
      read: 'Read the report — lire le reportage',
      img: LEAD_IMG,
      alt: 'A hilltop village in Provence',
      tag: 'Cover Story · N° 09',
      cap: 'Gordes at first light, Vaucluse — photograph by our editors.',
    },
    carnet: {
      label: 'The Spring Carnet · Carnet de printemps',
      heading: 'Six <em>discoveries</em> our editors keep returning to.',
      entries: [
        { img: C1, alt: 'A Provence village house under blue sky', num: 'I', reg: 'Provence', cat: 'Stay', title: 'Hôtel Crillon le Brave', place: 'Crillon-le-Brave · Vaucluse', text: 'A perched village reimagined as a single hotel. Stone, lavender, and a pool above Mont Ventoux — the kind of place that ruins you for ordinary hotels.', read: 'Read the review', section: 'stays' },
        { img: C2, alt: 'A Mediterranean harbour at golden hour', num: 'II', reg: 'Languedoc', cat: 'Table', title: 'La Table de Castigno', place: 'Assignan · Hérault', text: 'A two-star table inside a wine-village resort, where Vincent Farges plays with the Languedoc’s bounty. The most quietly inventive kitchen west of Marseille.', read: 'Read the review', section: 'the-table' },
        { img: C3, alt: 'Rocky red cliffs above the sea, the Esterel', num: 'III', reg: 'Alpilles', cat: 'Vintner', title: 'Domaine de Trévallon', place: 'Saint-Étienne-du-Grès', text: 'Eloi Dürrbach’s mythical estate at the foot of the Alpilles. Forty years of biodynamic farming, and reds that age for thirty. Tastings by appointment.', read: 'Read the report', section: 'the-table' },
        { img: C4, alt: 'A coastal village on the French Riviera', num: 'IV', reg: 'Côte d’Azur', cat: 'Stay', title: 'Hôtel Les Roches Rouges', place: 'Saint-Raphaël · Var', text: 'A 1950s seaside hotel rescued from kitsch — bare terrazzo, a saltwater pool cut into the rock, and the red Esterel falling straight into the blue.', read: 'Read the review', section: 'stays' },
        { img: C5, alt: 'A perched Provence village seen from above', num: 'V', reg: 'Haute-Provence', cat: 'Table', title: 'La Bastide de Moustiers', place: 'Moustiers-Sainte-Marie · Alpes-de-Haute-Provence', text: 'Alain Ducasse’s country inn below the gorges du Verdon. A kitchen garden, a handful of rooms, and cooking that tastes of exactly where you are.', read: 'Read the review', section: 'the-table' },
        { img: C6, alt: 'A countryside farmhouse among wildflowers', num: 'VI', reg: 'Camargue', cat: 'Stay', title: 'Le Mas de Peint', place: 'Le Sambuc · Bouches-du-Rhône', text: 'A working rice and bull farm turned discreet hotel deep in the delta. Horses at dawn, salt on the wind, and the wide pink light the painters came for.', read: 'Read the report', section: 'stays' },
      ],
    },
    regions: {
      label: 'Five coasts, one light · Cinq pays, une lumière',
      heading: 'Where shall we <em>wander</em> next?',
      items: [
        { ix: 'I', name: 'Provence', desc: 'Lavender, ochre and the back roads of the Luberon.', count: '38 addresses', section: 'provence' },
        { ix: 'II', name: 'Côte d’Azur', desc: 'From Cassis to Menton, the sea at its most theatrical.', count: '44 addresses', section: 'french-riviera' },
        { ix: 'III', name: 'Languedoc', desc: 'Wild vineyards, Cathar stone and an emptier shore.', count: '26 addresses', section: 'languedoc' },
        { ix: 'IV', name: 'Camargue', desc: 'Salt flats, white horses and the wide pink light.', count: '19 addresses', section: 'camargue' },
      ],
    },
    band: {
      label: 'Our promise · Notre promesse',
      q: 'We write only about places we have paid for, slept in, and would <em>return to.</em>',
      fr: 'Nous y allons nous-mêmes, et nous écrivons ce que nous avons vu.',
      sig: 'The Editors · Marseille',
    },
  },

  fr: {
    title: 'The South of France — Un journal de la Méditerranée',
    description:
      'Un journal éditorial indépendant du Sud de la France méditerranéen — Provence, Côte d’Azur, Languedoc et Camargue. Hôtels, tables, vignobles et les adresses où l’on revient.',
    hero: {
      issue: 'Numéro N° 09 · Printemps 2026',
      sub: 'Un journal de la Méditerranée',
      img: HERO_IMG,
      alt: 'La Méditerranée près de Villefranche-sur-Mer',
      coverlines: [
        { t: 'Les Îles d’Or', s: '48 heures · Hyères' },
        { t: '<em>Villa Gallici</em>', s: 'Une nuit à Aix' },
        { t: 'Trévallon', s: 'Vins cultes · Alpilles' },
        { t: 'L’Esterel', s: 'Dix criques secrètes' },
      ],
      coverKicker: 'À la une · No 09',
      coverBig: 'La Belle Vie',
      coverDeck: 'Quarante-huit heures sur les Îles d’Or, là où l’été ne finit jamais.',
    },
    lead: {
      kicker: 'Le grand reportage · The Grand Report',
      h2: 'Quarante-huit heures sur les <em>Îles d’Or</em>, là où l’été ne finit jamais.',
      byline: 'Texte — La rédaction · Hyères, Var',
      body:
        'Il existe une portion de la côte varoise où le continent desserre son étreinte et où trois îles flottent juste au large — Porquerolles, Port-Cros, Le Levant. Nous avons pris le premier bateau de La Tour Fondue, un carnet, et aucun billet de retour. Ce que nous avons trouvé, c’est le Sud tel qu’il était promis : le pin, le sel, et cette longue lumière d’après-midi que les peintres poursuivent sans jamais tout à fait la saisir.',
      read: 'Lire le reportage — read the report',
      img: LEAD_IMG,
      alt: 'Un village perché de Provence',
      tag: 'À la une · N° 09',
      cap: 'Gordes aux premières lueurs, Vaucluse — photographie de la rédaction.',
    },
    carnet: {
      label: 'Le carnet de printemps · The Spring Carnet',
      heading: 'Six <em>découvertes</em> où notre rédaction revient sans cesse.',
      entries: [
        { img: C1, alt: 'Une maison de village de Provence sous le ciel bleu', num: 'I', reg: 'Provence', cat: 'Séjour', title: 'Hôtel Crillon le Brave', place: 'Crillon-le-Brave · Vaucluse', text: 'Un village perché réinventé en un seul hôtel. La pierre, la lavande et une piscine au-dessus du mont Ventoux — le genre d’adresse qui vous gâche les hôtels ordinaires.', read: 'Lire la critique', section: 'stays' },
        { img: C2, alt: 'Un port méditerranéen à l’heure dorée', num: 'II', reg: 'Languedoc', cat: 'Table', title: 'La Table de Castigno', place: 'Assignan · Hérault', text: 'Une table deux étoiles au cœur d’un village-vignoble, où Vincent Farges joue des trésors du Languedoc. La cuisine la plus discrètement inventive à l’ouest de Marseille.', read: 'Lire la critique', section: 'the-table' },
        { img: C3, alt: 'Falaises rouges au-dessus de la mer, l’Esterel', num: 'III', reg: 'Alpilles', cat: 'Vigneron', title: 'Domaine de Trévallon', place: 'Saint-Étienne-du-Grès', text: 'Le domaine mythique d’Eloi Dürrbach au pied des Alpilles. Quarante ans de biodynamie et des rouges qui vieillissent trente ans. Dégustations sur rendez-vous.', read: 'Lire le reportage', section: 'the-table' },
        { img: C4, alt: 'Un village côtier de la Côte d’Azur', num: 'IV', reg: 'Côte d’Azur', cat: 'Séjour', title: 'Hôtel Les Roches Rouges', place: 'Saint-Raphaël · Var', text: 'Un hôtel balnéaire des années 1950 sauvé du kitsch — terrazzo nu, une piscine d’eau de mer taillée dans la roche, et l’Esterel rouge plongeant droit dans le bleu.', read: 'Lire la critique', section: 'stays' },
        { img: C5, alt: 'Un village perché de Provence vu d’en haut', num: 'V', reg: 'Haute-Provence', cat: 'Table', title: 'La Bastide de Moustiers', place: 'Moustiers-Sainte-Marie · Alpes-de-Haute-Provence', text: 'L’auberge de campagne d’Alain Ducasse sous les gorges du Verdon. Un potager, une poignée de chambres, et une cuisine qui a le goût exact de l’endroit.', read: 'Lire la critique', section: 'the-table' },
        { img: C6, alt: 'Un mas de campagne parmi les fleurs sauvages', num: 'VI', reg: 'Camargue', cat: 'Séjour', title: 'Le Mas de Peint', place: 'Le Sambuc · Bouches-du-Rhône', text: 'Une exploitation de riz et de taureaux devenue hôtel discret au cœur du delta. Les chevaux à l’aube, le sel dans le vent, et la vaste lumière rose venue chercher les peintres.', read: 'Lire le reportage', section: 'stays' },
      ],
    },
    regions: {
      label: 'Cinq pays, une lumière · Five coasts, one light',
      heading: 'Où irons-nous <em>flâner</em> ensuite ?',
      items: [
        { ix: 'I', name: 'Provence', desc: 'La lavande, l’ocre et les routes secondaires du Luberon.', count: '38 adresses', section: 'provence' },
        { ix: 'II', name: 'Côte d’Azur', desc: 'De Cassis à Menton, la mer dans sa version la plus théâtrale.', count: '44 adresses', section: 'french-riviera' },
        { ix: 'III', name: 'Languedoc', desc: 'Vignes sauvages, pierre cathare et un rivage plus désert.', count: '26 adresses', section: 'languedoc' },
        { ix: 'IV', name: 'Camargue', desc: 'Salins, chevaux blancs et la vaste lumière rose.', count: '19 adresses', section: 'camargue' },
      ],
    },
    band: {
      label: 'Notre promesse · Our promise',
      q: 'Nous n’écrivons que sur des lieux que nous avons payés, où nous avons dormi, et où nous <em>reviendrions.</em>',
      fr: 'We go ourselves, and we write down what we saw.',
      sig: 'La rédaction · Marseille',
    },
  },

  it: {
    title: 'The South of France — Una rivista del Mediterraneo',
    description:
      'Una rivista editoriale indipendente del Sud della Francia mediterranea — Provence, Côte d’Azur, Languedoc e Camargue. Hotel, tavole, vigneti e i luoghi a cui torniamo.',
    hero: {
      issue: 'Numero N° 09 · Primavera 2026',
      sub: 'Una rivista del Mediterraneo',
      img: HERO_IMG,
      alt: 'Il Mediterraneo presso Villefranche-sur-Mer',
      coverlines: [
        { t: 'Le Îles d’Or', s: '48 ore · Hyères' },
        { t: '<em>Villa Gallici</em>', s: 'Una notte ad Aix' },
        { t: 'Trévallon', s: 'Vini di culto · Alpilles' },
        { t: 'L’Esterel', s: 'Dieci cale segrete' },
      ],
      coverKicker: 'In copertina · No 09',
      coverBig: 'La Belle Vie',
      coverDeck: 'Quarantotto ore sulle Îles d’Or, dove l’estate non finisce mai.',
    },
    lead: {
      kicker: 'Il grande reportage · Le grand reportage',
      h2: 'Quarantotto ore sulle <em>Îles d’Or</em>, dove l’estate non finisce mai.',
      byline: 'Testo — La redazione · Hyères, Var',
      body:
        'C’è un tratto della costa del Var dove la terraferma allenta la presa e tre isole galleggiano poco al largo — Porquerolles, Port-Cros, Le Levant. Abbiamo preso il primo battello da La Tour Fondue, un taccuino e nessun biglietto di ritorno. Ciò che abbiamo trovato è il Sud così come era stato promesso: pino, sale e quella lunga luce pomeridiana che i pittori inseguono senza mai del tutto coglierla.',
      read: 'Leggi il reportage — lire le reportage',
      img: LEAD_IMG,
      alt: 'Un villaggio arroccato della Provence',
      tag: 'In copertina · N° 09',
      cap: 'Gordes alle prime luci, Vaucluse — fotografia della redazione.',
    },
    carnet: {
      label: 'Il taccuino di primavera · Carnet de printemps',
      heading: 'Sei <em>scoperte</em> a cui la nostra redazione continua a tornare.',
      entries: [
        { img: C1, alt: 'A Provence village house under blue sky', num: 'I', reg: 'Provence', cat: 'Soggiorno', title: 'Hôtel Crillon le Brave', place: 'Crillon-le-Brave · Vaucluse', text: 'Un villaggio arroccato reinventato come un unico hotel. Pietra, lavanda e una piscina sopra il Mont Ventoux — il genere di luogo che vi rovina gli hotel ordinari.', read: 'Leggi la recensione', section: 'stays' },
        { img: C2, alt: 'A Mediterranean harbour at golden hour', num: 'II', reg: 'Languedoc', cat: 'Tavola', title: 'La Table de Castigno', place: 'Assignan · Hérault', text: 'Una tavola due stelle nel cuore di un resort fra le vigne, dove Vincent Farges gioca con i tesori del Languedoc. La cucina più silenziosamente inventiva a ovest di Marsiglia.', read: 'Leggi la recensione', section: 'the-table' },
        { img: C3, alt: 'Rocky red cliffs above the sea, the Esterel', num: 'III', reg: 'Alpilles', cat: 'Vignaiolo', title: 'Domaine de Trévallon', place: 'Saint-Étienne-du-Grès', text: 'La tenuta mitica di Eloi Dürrbach ai piedi delle Alpilles. Quarant’anni di biodinamica e rossi che invecchiano trent’anni. Degustazioni su appuntamento.', read: 'Leggi il reportage', section: 'the-table' },
        { img: C4, alt: 'A coastal village on the French Riviera', num: 'IV', reg: 'Côte d’Azur', cat: 'Soggiorno', title: 'Hôtel Les Roches Rouges', place: 'Saint-Raphaël · Var', text: 'Un albergo balneare degli anni Cinquanta strappato al kitsch — terrazzo nudo, una piscina d’acqua di mare scavata nella roccia e l’Esterel rosso che precipita dritto nel blu.', read: 'Leggi la recensione', section: 'stays' },
        { img: C5, alt: 'A perched Provence village seen from above', num: 'V', reg: 'Haute-Provence', cat: 'Tavola', title: 'La Bastide de Moustiers', place: 'Moustiers-Sainte-Marie · Alpes-de-Haute-Provence', text: 'La locanda di campagna di Alain Ducasse sotto le gole del Verdon. Un orto, una manciata di camere e una cucina che ha il sapore esatto del luogo in cui ci si trova.', read: 'Leggi la recensione', section: 'the-table' },
        { img: C6, alt: 'A countryside farmhouse among wildflowers', num: 'VI', reg: 'Camargue', cat: 'Soggiorno', title: 'Le Mas de Peint', place: 'Le Sambuc · Bouches-du-Rhône', text: 'Un’azienda di riso e tori trasformata in hotel discreto nel cuore del delta. Cavalli all’alba, sale nel vento e l’ampia luce rosa per cui vennero i pittori.', read: 'Leggi il reportage', section: 'stays' },
      ],
    },
    regions: {
      label: 'Cinque coste, una luce · Cinq pays, une lumière',
      heading: 'Dove andremo a <em>vagabondare</em> la prossima volta?',
      items: [
        { ix: 'I', name: 'Provence', desc: 'Lavanda, ocra e le strade secondarie del Luberon.', count: '38 indirizzi', section: 'provence' },
        { ix: 'II', name: 'Côte d’Azur', desc: 'Da Cassis a Menton, il mare nella sua versione più teatrale.', count: '44 indirizzi', section: 'french-riviera' },
        { ix: 'III', name: 'Languedoc', desc: 'Vigne selvagge, pietra catara e una costa più deserta.', count: '26 indirizzi', section: 'languedoc' },
        { ix: 'IV', name: 'Camargue', desc: 'Saline, cavalli bianchi e l’ampia luce rosa.', count: '19 indirizzi', section: 'camargue' },
      ],
    },
    band: {
      label: 'La nostra promessa · Notre promesse',
      q: 'Scriviamo solo di luoghi che abbiamo pagato, in cui abbiamo dormito e a cui <em>torneremmo.</em>',
      fr: 'Andiamo noi stessi, e scriviamo ciò che abbiamo visto.',
      sig: 'La redazione · Marsiglia',
    },
  },

  de: {
    title: 'The South of France — Ein Journal des Mittelmeers',
    description:
      'Ein unabhängiges redaktionelles Journal des mediterranen Südfrankreich — Provence, Côte d’Azur, Languedoc und Camargue. Hotels, Tafeln, Weingüter und die Orte, an die wir zurückkehren.',
    hero: {
      issue: 'Ausgabe N° 09 · Frühjahr 2026',
      sub: 'Ein Journal des Mittelmeers',
      img: HERO_IMG,
      alt: 'Das Mittelmeer bei Villefranche-sur-Mer',
      coverlines: [
        { t: 'Die Îles d’Or', s: '48 Stunden · Hyères' },
        { t: '<em>Villa Gallici</em>', s: 'Eine Nacht in Aix' },
        { t: 'Trévallon', s: 'Kultweine · Alpilles' },
        { t: 'Der Esterel', s: 'Zehn geheime Buchten' },
      ],
      coverKicker: 'Titelgeschichte · No 09',
      coverBig: 'La Belle Vie',
      coverDeck: 'Achtundvierzig Stunden auf den Îles d’Or, wo der Sommer niemals endet.',
    },
    lead: {
      kicker: 'Die große Reportage · Le grand reportage',
      h2: 'Achtundvierzig Stunden auf den <em>Îles d’Or</em>, wo der Sommer niemals endet.',
      byline: 'Text — Die Redaktion · Hyères, Var',
      body:
        'Es gibt einen Abschnitt der Var-Küste, an dem das Festland seinen Griff lockert und drei Inseln dicht vor der Küste schweben — Porquerolles, Port-Cros, Le Levant. Wir nahmen das erste Boot von La Tour Fondue, ein Notizbuch und kein Rückfahrticket. Was wir fanden, war der Süden, wie er versprochen war: Pinien, Salz und jenes lange Nachmittagslicht, dem die Maler nachjagen und das sie nie ganz einfangen.',
      read: 'Die Reportage lesen — lire le reportage',
      img: LEAD_IMG,
      alt: 'Ein auf einem Hügel thronendes Dorf der Provence',
      tag: 'Titelgeschichte · N° 09',
      cap: 'Gordes im ersten Licht, Vaucluse — Fotografie der Redaktion.',
    },
    carnet: {
      label: 'Das Frühjahrs-Carnet · Carnet de printemps',
      heading: 'Sechs <em>Entdeckungen</em>, zu denen unsere Redaktion immer wieder zurückkehrt.',
      entries: [
        { img: C1, alt: 'A Provence village house under blue sky', num: 'I', reg: 'Provence', cat: 'Aufenthalt', title: 'Hôtel Crillon le Brave', place: 'Crillon-le-Brave · Vaucluse', text: 'Ein auf einem Hügel thronendes Dorf, neu erdacht als ein einziges Hotel. Stein, Lavendel und ein Pool über dem Mont Ventoux — die Art von Ort, die einem gewöhnliche Hotels verdirbt.', read: 'Die Kritik lesen', section: 'stays' },
        { img: C2, alt: 'A Mediterranean harbour at golden hour', num: 'II', reg: 'Languedoc', cat: 'Tafel', title: 'La Table de Castigno', place: 'Assignan · Hérault', text: 'Eine Zwei-Sterne-Tafel im Herzen eines Winzerdorf-Resorts, in dem Vincent Farges mit den Schätzen des Languedoc spielt. Die leiseste erfinderische Küche westlich von Marseille.', read: 'Die Kritik lesen', section: 'the-table' },
        { img: C3, alt: 'Rocky red cliffs above the sea, the Esterel', num: 'III', reg: 'Alpilles', cat: 'Winzer', title: 'Domaine de Trévallon', place: 'Saint-Étienne-du-Grès', text: 'Das mythische Weingut von Eloi Dürrbach am Fuße der Alpilles. Vierzig Jahre Biodynamik und Rotweine, die dreißig Jahre reifen. Verkostungen nach Vereinbarung.', read: 'Die Reportage lesen', section: 'the-table' },
        { img: C4, alt: 'A coastal village on the French Riviera', num: 'IV', reg: 'Côte d’Azur', cat: 'Aufenthalt', title: 'Hôtel Les Roches Rouges', place: 'Saint-Raphaël · Var', text: 'Ein Strandhotel der 1950er-Jahre, dem Kitsch entrissen — nackter Terrazzo, ein in den Fels geschnittenes Salzwasserbecken und der rote Esterel, der schnurstracks ins Blau stürzt.', read: 'Die Kritik lesen', section: 'stays' },
        { img: C5, alt: 'A perched Provence village seen from above', num: 'V', reg: 'Haute-Provence', cat: 'Tafel', title: 'La Bastide de Moustiers', place: 'Moustiers-Sainte-Marie · Alpes-de-Haute-Provence', text: 'Der Landgasthof von Alain Ducasse unterhalb der Schluchten des Verdon. Ein Gemüsegarten, eine Handvoll Zimmer und eine Küche, die genau nach dem Ort schmeckt, an dem man ist.', read: 'Die Kritik lesen', section: 'the-table' },
        { img: C6, alt: 'A countryside farmhouse among wildflowers', num: 'VI', reg: 'Camargue', cat: 'Aufenthalt', title: 'Le Mas de Peint', place: 'Le Sambuc · Bouches-du-Rhône', text: 'Ein bewirtschafteter Reis- und Stierhof, verwandelt in ein verschwiegenes Hotel tief im Delta. Pferde im Morgengrauen, Salz im Wind und das weite rosa Licht, für das die Maler kamen.', read: 'Die Reportage lesen', section: 'stays' },
      ],
    },
    regions: {
      label: 'Fünf Küsten, ein Licht · Cinq pays, une lumière',
      heading: 'Wohin sollen wir als Nächstes <em>streifen</em>?',
      items: [
        { ix: 'I', name: 'Provence', desc: 'Lavendel, Ocker und die Nebenstraßen des Luberon.', count: '38 Adressen', section: 'provence' },
        { ix: 'II', name: 'Côte d’Azur', desc: 'Von Cassis bis Menton, das Meer in seiner theatralischsten Gestalt.', count: '44 Adressen', section: 'french-riviera' },
        { ix: 'III', name: 'Languedoc', desc: 'Wilde Weinberge, katharischer Stein und eine leerere Küste.', count: '26 Adressen', section: 'languedoc' },
        { ix: 'IV', name: 'Camargue', desc: 'Salzgärten, weiße Pferde und das weite rosa Licht.', count: '19 Adressen', section: 'camargue' },
      ],
    },
    band: {
      label: 'Unser Versprechen · Notre promesse',
      q: 'Wir schreiben nur über Orte, die wir bezahlt haben, in denen wir geschlafen haben und an die wir <em>zurückkehren würden.</em>',
      fr: 'Wir gehen selbst hin und schreiben auf, was wir gesehen haben.',
      sig: 'Die Redaktion · Marseille',
    },
  },

  es: {
    title: 'The South of France — Una revista del Mediterráneo',
    description:
      'Una revista editorial independiente del Sur de Francia mediterráneo — Provence, Côte d’Azur, Languedoc y Camargue. Hoteles, mesas, viñedos y los lugares a los que volvemos.',
    hero: {
      issue: 'Número N° 09 · Primavera 2026',
      sub: 'Una revista del Mediterráneo',
      img: HERO_IMG,
      alt: 'El Mediterráneo cerca de Villefranche-sur-Mer',
      coverlines: [
        { t: 'Las Îles d’Or', s: '48 horas · Hyères' },
        { t: '<em>Villa Gallici</em>', s: 'Una noche en Aix' },
        { t: 'Trévallon', s: 'Vinos de culto · Alpilles' },
        { t: 'El Esterel', s: 'Diez calas secretas' },
      ],
      coverKicker: 'En portada · No 09',
      coverBig: 'La Belle Vie',
      coverDeck: 'Cuarenta y ocho horas en las Îles d’Or, donde el verano no termina nunca.',
    },
    lead: {
      kicker: 'El gran reportaje · Le grand reportage',
      h2: 'Cuarenta y ocho horas en las <em>Îles d’Or</em>, donde el verano no termina nunca.',
      byline: 'Texto — La redacción · Hyères, Var',
      body:
        'Hay un tramo de la costa del Var donde la tierra firme afloja su abrazo y tres islas flotan justo frente al litoral — Porquerolles, Port-Cros, Le Levant. Tomamos el primer barco desde La Tour Fondue, un cuaderno y ningún billete de vuelta. Lo que encontramos fue el Sur tal como había sido prometido: pino, sal y esa larga luz de la tarde que los pintores persiguen sin llegar jamás a atraparla del todo.',
      read: 'Leer el reportaje — lire le reportage',
      img: LEAD_IMG,
      alt: 'Un pueblo encaramado de la Provence',
      tag: 'En portada · N° 09',
      cap: 'Gordes al despuntar el día, Vaucluse — fotografía de la redacción.',
    },
    carnet: {
      label: 'El cuaderno de primavera · Carnet de printemps',
      heading: 'Seis <em>descubrimientos</em> a los que nuestra redacción no deja de volver.',
      entries: [
        { img: C1, alt: 'A Provence village house under blue sky', num: 'I', reg: 'Provence', cat: 'Estancia', title: 'Hôtel Crillon le Brave', place: 'Crillon-le-Brave · Vaucluse', text: 'Un pueblo encaramado reinventado como un único hotel. Piedra, lavanda y una piscina sobre el Mont Ventoux — la clase de lugar que te estropea los hoteles corrientes.', read: 'Leer la reseña', section: 'stays' },
        { img: C2, alt: 'A Mediterranean harbour at golden hour', num: 'II', reg: 'Languedoc', cat: 'Mesa', title: 'La Table de Castigno', place: 'Assignan · Hérault', text: 'Una mesa de dos estrellas en el corazón de un resort entre viñas, donde Vincent Farges juega con los tesoros del Languedoc. La cocina más calladamente inventiva al oeste de Marsella.', read: 'Leer la reseña', section: 'the-table' },
        { img: C3, alt: 'Rocky red cliffs above the sea, the Esterel', num: 'III', reg: 'Alpilles', cat: 'Vinatero', title: 'Domaine de Trévallon', place: 'Saint-Étienne-du-Grès', text: 'La finca mítica de Eloi Dürrbach al pie de las Alpilles. Cuarenta años de biodinámica y tintos que envejecen treinta años. Catas con cita previa.', read: 'Leer el reportaje', section: 'the-table' },
        { img: C4, alt: 'A coastal village on the French Riviera', num: 'IV', reg: 'Côte d’Azur', cat: 'Estancia', title: 'Hôtel Les Roches Rouges', place: 'Saint-Raphaël · Var', text: 'Un hotel de playa de los años cincuenta rescatado del kitsch — terrazo desnudo, una piscina de agua de mar tallada en la roca y el Esterel rojo cayendo en picado sobre el azul.', read: 'Leer la reseña', section: 'stays' },
        { img: C5, alt: 'A perched Provence village seen from above', num: 'V', reg: 'Haute-Provence', cat: 'Mesa', title: 'La Bastide de Moustiers', place: 'Moustiers-Sainte-Marie · Alpes-de-Haute-Provence', text: 'La posada de campo de Alain Ducasse bajo las gargantas del Verdon. Un huerto, un puñado de habitaciones y una cocina que sabe exactamente al lugar en el que estás.', read: 'Leer la reseña', section: 'the-table' },
        { img: C6, alt: 'A countryside farmhouse among wildflowers', num: 'VI', reg: 'Camargue', cat: 'Estancia', title: 'Le Mas de Peint', place: 'Le Sambuc · Bouches-du-Rhône', text: 'Una explotación de arroz y toros convertida en hotel discreto en lo hondo del delta. Caballos al alba, sal en el viento y la amplia luz rosada que vinieron a buscar los pintores.', read: 'Leer el reportaje', section: 'stays' },
      ],
    },
    regions: {
      label: 'Cinco costas, una luz · Cinq pays, une lumière',
      heading: '¿Adónde iremos a <em>vagar</em> la próxima vez?',
      items: [
        { ix: 'I', name: 'Provence', desc: 'Lavanda, ocre y las carreteras secundarias del Luberon.', count: '38 direcciones', section: 'provence' },
        { ix: 'II', name: 'Côte d’Azur', desc: 'De Cassis a Menton, el mar en su versión más teatral.', count: '44 direcciones', section: 'french-riviera' },
        { ix: 'III', name: 'Languedoc', desc: 'Viñas salvajes, piedra cátara y una orilla más desierta.', count: '26 direcciones', section: 'languedoc' },
        { ix: 'IV', name: 'Camargue', desc: 'Salinas, caballos blancos y la amplia luz rosada.', count: '19 direcciones', section: 'camargue' },
      ],
    },
    band: {
      label: 'Nuestra promesa · Notre promesse',
      q: 'Solo escribimos sobre lugares que hemos pagado, en los que hemos dormido y a los que <em>volveríamos.</em>',
      fr: 'Vamos nosotros mismos, y escribimos lo que hemos visto.',
      sig: 'La redacción · Marsella',
    },
  },
};
