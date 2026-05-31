// ─────────────────────────────────────────────────────────────
// Long-form editorial article (nested under a region).
// Fully written EN + FR. Fields with markup are rendered set:html.
// ─────────────────────────────────────────────────────────────
import type { Locale, SectionKey } from '../i18n/config';

export interface ArticleBlock {
  type: 'p' | 'h2' | 'pull' | 'inset' | 'fullbleed';
  // p / h2
  html?: string;        // body HTML (may contain <em>, <a class="inline">)
  lede?: boolean;       // drop-cap on the first paragraph
  num?: string;         // section numeral on h2, e.g. "I."
  // pull
  quote?: string;
  src?: string;
  // inset / fullbleed
  img?: string;
  alt?: string;
  caption?: string;
}

export interface ArticlePratiqueRow { k: string; v: string; } // v may contain markup
export interface ArticleRelated { href: SectionKey; img: string; alt: string; rk: string; title: string; }

export interface ArticleContent {
  title: string;
  description: string;
  // hero
  heroImg: string;
  heroAlt: string;
  heroCredit: string;
  kicker: string;
  h1: string;          // may contain <em>
  deck: string;
  crumbRegion: SectionKey; // which region this article lives under (for the byline crumb / breadcrumb intent)
  // meta bar
  by: string;          // may contain <b>, <em>
  metaInfo: string[];  // e.g. ["Spring 2026", "12 min read"]
  shareLabel: string;
  shareLinks: { label: string; href: string }[];
  // body
  blocks: ArticleBlock[];
  // practical carnet
  pratiqueLabel: string;
  pratiqueHeading: string; // may contain <em>
  pratiqueRows: ArticlePratiqueRow[];
  // author
  authorLabel: string;
  authorInitial: string;
  authorName: string;
  authorRole: string;
  authorBio: string;
  authorMore: string;
  // related
  relatedLabel: string;
  relatedHeading: string;  // may contain <em>
  related: ArticleRelated[];
}

// Verified Unsplash IDs reused from the source mockup only.
const HERO = 'https://images.unsplash.com/photo-1604948559069-3287d5c5a6e5?fm=jpg&q=76&w=2200&auto=format&fit=crop';
const INSET = 'https://images.unsplash.com/photo-1665237592603-b03f244e1496?fm=jpg&q=74&w=1400&auto=format&fit=crop';
const FULLBLEED = 'https://images.unsplash.com/photo-1535928021132-3dfd912533d7?fm=jpg&q=76&w=2400&auto=format&fit=crop';
const R1 = 'https://images.unsplash.com/photo-1600762849691-4b51bc94009c?fm=jpg&q=74&w=900&auto=format&fit=crop';
const R2 = 'https://images.unsplash.com/photo-1587579785043-eccb9f70391d?fm=jpg&q=74&w=900&auto=format&fit=crop';
const R3 = 'https://images.unsplash.com/photo-1673423050661-134515109330?fm=jpg&q=74&w=900&auto=format&fit=crop';

export const article: Partial<Record<Locale, ArticleContent>> = {
  en: {
    title: "Forty-Eight Hours on the Îles d'Or — The South of France",
    description:
      'Three islands off the Var coast, a notebook, and no return ticket. A slow weekend on Porquerolles, Port-Cros and Le Levant — the South as it was promised.',
    heroImg: HERO,
    heroAlt: 'Pine-clad cliffs falling into the Mediterranean',
    heroCredit: 'Photograph — Port-Cros, Var',
    kicker: 'The Grand Report · Var',
    h1: "Forty-Eight Hours on the <em>Îles d’Or</em>",
    deck: 'Three islands off the Var coast, a notebook, and no return ticket. A slow weekend on Porquerolles, Port-Cros and Le Levant — the South as it was promised.',
    crumbRegion: 'provence',
    by: 'By <b>The Editors</b> — <em>Hyères, Var</em>',
    metaInfo: ['Spring 2026', '12 min read'],
    shareLabel: 'Share',
    shareLinks: [
      { label: 'Link', href: '#' },
      { label: 'Mail', href: '#' },
    ],
    blocks: [
      {
        type: 'p',
        lede: true,
        html:
          'There is a stretch of the Var coast where the mainland loosens its grip and three islands float just offshore. Porquerolles, Port-Cros, Le Levant — the Îles d’Or, named for the way the schist catches the late sun and turns, briefly, to gold. We took the first boat out of La Tour Fondue with a notebook and no return ticket, and came back two days later convinced we had found the South as it was promised: pine, salt, and the long afternoon light that painters chase and never quite catch.',
      },
      {
        type: 'p',
        html:
          'The crossing takes twenty minutes. Long enough to watch the peninsula shrink, not long enough to lose the smell of the land. By the time the ferry rounds the breakwater at Porquerolles, the village has arranged itself like a stage set — a square of plane trees, a church the colour of bone, bicycles leaning where cars should be. There are no cars. That single fact rearranges everything that follows.',
      },
      { type: 'h2', num: 'I.', html: 'Porquerolles, on two wheels' },
      {
        type: 'p',
        html:
          'We hired bicycles before we had unpacked. The island is barely seven kilometres end to end, and every worthwhile thing on it — the lighthouse, the vineyards, the three great beaches of the north shore — is reachable on a rented bike with a basket and questionable brakes. The path to the <a class="inline" href="#">Plage Notre-Dame</a> runs through umbrella pines and the dry rattle of cicadas; it has twice been voted the most beautiful beach in Europe, a title it wears without the slightest crowd to justify it in May.',
      },
      {
        type: 'p',
        html:
          'Inland, the <a class="inline" href="#">Domaine de la Courtade</a> presses one of Provence’s most serious rosés on terraces the colour of terracotta. We tasted at a trestle table under a fig tree, the winemaker pouring with one eye on a thunderhead far out to sea that never arrived.',
      },
      {
        type: 'pull',
        quote: '“On the Îles d’Or, the absence of the car is not a restriction. It is the whole point.”',
        src: 'From the notebook · Day one',
      },
      {
        type: 'inset',
        img: INSET,
        alt: 'A small Mediterranean harbour in the golden hour',
        caption: 'The old harbour at dusk — the last ferry has gone, and the island exhales.',
      },
      { type: 'h2', num: 'II.', html: 'Port-Cros, the wild one' },
      {
        type: 'p',
        html:
          'If Porquerolles is the island that lets you in, Port-Cros is the one that asks you to behave. It is a national park — the first marine park in Europe — and it shows in the discipline of the place: marked trails, no fires, a snorkelling route staked out between two coves where the grouper have learned they are safe. We walked the <a class="inline" href="#">Vallon de la Solède</a> in the cool of the morning, the maquis closing overhead, and arrived at Port-Cros village to find perhaps forty people and one restaurant doing exactly what it should.',
      },
      {
        type: 'p',
        html:
          'Lunch was a whole sea bream, grilled, with nothing on it but oil and a wedge of lemon, eaten with the boat tugging at its line a metre below the terrace. It is the kind of meal that makes you suspicious of every complicated dish you have ever paid for.',
      },
      {
        type: 'fullbleed',
        img: FULLBLEED,
        alt: 'The Mediterranean at sunset',
        caption: 'Sunset from the western point — the schist turns gold, and the islands earn their name.',
      },
      { type: 'h2', num: 'III.', html: 'Le Levant, and the art of leaving' },
      {
        type: 'p',
        html:
          'The third island we admired mostly from the water. Le Levant is shared between the French navy and one of the oldest naturist communities in the country, which makes for an unlikely neighbourliness and a coastline best appreciated from the deck of a small boat. We hired one for the last afternoon — a wooden <em>pointu</em> with an outboard and a skipper who had been making this loop for thirty years — and let him show us the calanques the trail map leaves out.',
      },
      {
        type: 'p',
        html:
          'By six we were back at the quay on Porquerolles, salt-stiff and sun-stupid, watching the day-trippers file onto the ferry. We stayed. There is a particular pleasure in being on an island when the last boat leaves without you: the light softens, the village empties, and for a few hours the place belongs to the people who chose to remain.',
      },
    ],
    pratiqueLabel: 'The Practical Carnet · Carnet pratique',
    pratiqueHeading: 'Plan the <em>crossing</em>',
    pratiqueRows: [
      { k: 'Getting there', v: 'Ferries to Porquerolles depart <b>La Tour Fondue</b> (Giens peninsula), year-round, 20&nbsp;min. Port-Cros and Le Levant from Hyères or Le Lavandou.' },
      { k: 'When to go', v: 'May–June and September. July–August the day-boats arrive in force; come midweek or stay the night.' },
      { k: 'Where to stay', v: '<b>Le Mas du Langoustier</b>, Porquerolles — a pink hotel at the island’s wild western end, half-board, no neighbours.' },
      { k: 'The table', v: '<b>La Pinde</b>, Port-Cros — whatever came off the boat that morning, grilled. Reserve by phone.' },
      { k: 'Read next', v: '<a href="#">The Var coast, end to end</a> · <a href="#">Where to drink rosé in Provence</a>' },
    ],
    authorLabel: 'About the Author · L’auteur',
    authorInitial: 'E',
    authorName: 'Élise Marchand',
    authorRole: 'Travel Editor — based in Marseille',
    authorBio:
      'Élise has been driving the back roads of the Midi for the journal since its first issue. She pays for her own rooms and her own lunches — and only writes about the places she would return to.',
    authorMore: 'More by Élise Marchand — voir ses articles',
    relatedLabel: 'Continue reading · À lire ensuite',
    relatedHeading: 'More from the <em>South</em>',
    related: [
      { href: 'provence', img: R1, alt: 'A hilltop village in Provence', rk: 'Provence', title: 'A weekend in the Luberon, village by village' },
      { href: 'french-riviera', img: R2, alt: 'A village on the French Riviera', rk: 'Côte d’Azur', title: 'Cassis and the calanques, on foot and by boat' },
      { href: 'the-table', img: R3, alt: 'A hillside village among trees', rk: 'The Table', title: 'Six tables worth the detour this spring' },
    ],
  },
  fr: {
    title: "Quarante-huit heures sur les Îles d’Or — The South of France",
    description:
      'Trois îles au large du Var, un carnet, et pas de billet de retour. Un week-end au ralenti à Porquerolles, Port-Cros et Le Levant — le Sud tel qu’on l’avait promis.',
    heroImg: HERO,
    heroAlt: 'Falaises couvertes de pins plongeant dans la Méditerranée',
    heroCredit: 'Photographie — Port-Cros, Var',
    kicker: 'Le grand reportage · Var',
    h1: 'Quarante-huit heures sur les <em>Îles d’Or</em>',
    deck: 'Trois îles au large du Var, un carnet, et pas de billet de retour. Un week-end au ralenti à Porquerolles, Port-Cros et Le Levant — le Sud tel qu’on l’avait promis.',
    crumbRegion: 'provence',
    by: 'Par <b>la rédaction</b> — <em>Hyères, Var</em>',
    metaInfo: ['Printemps 2026', '12 min de lecture'],
    shareLabel: 'Partager',
    shareLinks: [
      { label: 'Lien', href: '#' },
      { label: 'Courriel', href: '#' },
    ],
    blocks: [
      {
        type: 'p',
        lede: true,
        html:
          'Il y a un morceau de côte varoise où le continent desserre son étreinte et où trois îles flottent juste au large. Porquerolles, Port-Cros, Le Levant — les Îles d’Or, nommées ainsi pour la manière dont le schiste capte le soleil tardif et vire, un instant, à l’or. Nous avons pris le premier bateau de La Tour Fondue avec un carnet et sans billet de retour, et nous sommes revenus deux jours plus tard convaincus d’avoir trouvé le Sud tel qu’on l’avait promis : le pin, le sel, et cette longue lumière d’après-midi que les peintres poursuivent sans jamais tout à fait l’attraper.',
      },
      {
        type: 'p',
        html:
          'La traversée dure vingt minutes. Assez pour voir la presqu’île rétrécir, pas assez pour perdre l’odeur de la terre. Quand le ferry contourne la digue de Porquerolles, le village s’est déjà disposé comme un décor de théâtre — une place de platanes, une église couleur d’os, des vélos appuyés là où devraient être les voitures. Il n’y a pas de voitures. Ce seul fait réorganise tout le reste.',
      },
      { type: 'h2', num: 'I.', html: 'Porquerolles, à deux roues' },
      {
        type: 'p',
        html:
          'Nous avons loué des vélos avant même d’avoir défait nos sacs. L’île fait à peine sept kilomètres de bout en bout, et tout ce qui mérite le détour — le phare, les vignes, les trois grandes plages de la côte nord — se rejoint sur un vélo de location à panier et aux freins douteux. Le chemin de la <a class="inline" href="#">plage Notre-Dame</a> file sous les pins parasols et le crissement sec des cigales ; elle a été élue deux fois plus belle plage d’Europe, un titre qu’elle porte sans la moindre foule pour le justifier en mai.',
      },
      {
        type: 'p',
        html:
          'À l’intérieur des terres, le <a class="inline" href="#">Domaine de la Courtade</a> presse l’un des rosés les plus sérieux de Provence sur des terrasses couleur terracotta. Nous avons dégusté à une table à tréteaux sous un figuier, le vigneron versant un œil rivé sur un orage au loin, sur la mer, qui n’est jamais arrivé.',
      },
      {
        type: 'pull',
        quote: '« Sur les Îles d’Or, l’absence de la voiture n’est pas une contrainte. C’est tout l’intérêt. »',
        src: 'Extrait du carnet · Jour un',
      },
      {
        type: 'inset',
        img: INSET,
        alt: 'Un petit port méditerranéen à l’heure dorée',
        caption: 'Le vieux port au crépuscule — le dernier ferry est parti, et l’île respire.',
      },
      { type: 'h2', num: 'II.', html: 'Port-Cros, la sauvage' },
      {
        type: 'p',
        html:
          'Si Porquerolles est l’île qui vous laisse entrer, Port-Cros est celle qui vous demande de bien vous tenir. C’est un parc national — le premier parc marin d’Europe — et cela se sent dans la discipline du lieu : sentiers balisés, pas de feux, un parcours de plongée tracé entre deux criques où les mérous ont appris qu’ils étaient en sécurité. Nous avons remonté le <a class="inline" href="#">vallon de la Solède</a> dans la fraîcheur du matin, le maquis se refermant au-dessus de nous, pour arriver au village de Port-Cros et y trouver peut-être quarante personnes et un seul restaurant faisant exactement ce qu’il fallait.',
      },
      {
        type: 'p',
        html:
          'Le déjeuner fut une daurade entière, grillée, avec pour seul accompagnement de l’huile et un quartier de citron, mangée tandis que le bateau tirait sur son amarre un mètre sous la terrasse. C’est le genre de repas qui vous rend suspicieux envers chaque plat compliqué que vous avez jamais payé.',
      },
      {
        type: 'fullbleed',
        img: FULLBLEED,
        alt: 'La Méditerranée au coucher du soleil',
        caption: 'Coucher de soleil depuis la pointe ouest — le schiste vire à l’or, et les îles méritent leur nom.',
      },
      { type: 'h2', num: 'III.', html: 'Le Levant, et l’art de partir' },
      {
        type: 'p',
        html:
          'La troisième île, nous l’avons surtout admirée depuis l’eau. Le Levant est partagé entre la marine française et l’une des plus anciennes communautés naturistes du pays, ce qui fait un voisinage improbable et un littoral qu’on apprécie mieux depuis le pont d’un petit bateau. Nous en avons loué un pour le dernier après-midi — un <em>pointu</em> en bois à moteur hors-bord, mené par un patron qui faisait cette boucle depuis trente ans — et nous l’avons laissé nous montrer les calanques que la carte des sentiers oublie.',
      },
      {
        type: 'p',
        html:
          'À six heures, nous étions de retour au quai de Porquerolles, raidis de sel et hébétés de soleil, à regarder les excursionnistes s’engouffrer dans le ferry. Nous sommes restés. Il y a un plaisir particulier à être sur une île quand le dernier bateau part sans vous : la lumière s’adoucit, le village se vide, et pendant quelques heures le lieu appartient à ceux qui ont choisi de rester.',
      },
    ],
    pratiqueLabel: 'Le carnet pratique · The Practical Carnet',
    pratiqueHeading: 'Préparer la <em>traversée</em>',
    pratiqueRows: [
      { k: 'Y aller', v: 'Les ferries pour Porquerolles partent de <b>La Tour Fondue</b> (presqu’île de Giens), toute l’année, 20&nbsp;min. Port-Cros et Le Levant depuis Hyères ou Le Lavandou.' },
      { k: 'Quand venir', v: 'Mai–juin et septembre. En juillet–août, les bateaux du jour débarquent en nombre ; venez en semaine ou restez la nuit.' },
      { k: 'Où dormir', v: '<b>Le Mas du Langoustier</b>, Porquerolles — un hôtel rose à la pointe ouest et sauvage de l’île, demi-pension, aucun voisin.' },
      { k: 'La table', v: '<b>La Pinde</b>, Port-Cros — ce qui est sorti du bateau le matin même, grillé. Réservation par téléphone.' },
      { k: 'À lire ensuite', v: '<a href="#">La côte varoise, d’un bout à l’autre</a> · <a href="#">Où boire du rosé en Provence</a>' },
    ],
    authorLabel: 'L’auteur · About the Author',
    authorInitial: 'E',
    authorName: 'Élise Marchand',
    authorRole: 'Rédactrice voyage — basée à Marseille',
    authorBio:
      'Élise sillonne les routes secondaires du Midi pour le journal depuis le tout premier numéro. Elle paie ses propres chambres et ses propres déjeuners — et n’écrit que sur les lieux où elle reviendrait.',
    authorMore: 'Tous les articles d’Élise Marchand — more by the author',
    relatedLabel: 'À lire ensuite · Continue reading',
    relatedHeading: 'Encore un peu de <em>Sud</em>',
    related: [
      { href: 'provence', img: R1, alt: 'Un village perché de Provence', rk: 'Provence', title: 'Un week-end dans le Luberon, de village en village' },
      { href: 'french-riviera', img: R2, alt: 'Un village de la Côte d’Azur', rk: 'Côte d’Azur', title: 'Cassis et les calanques, à pied et en bateau' },
      { href: 'the-table', img: R3, alt: 'Un village à flanc de colline parmi les arbres', rk: 'La Table', title: 'Six tables qui valent le détour ce printemps' },
    ],
  },
  it: {
    title: "Quarantotto ore sulle Îles d'Or — The South of France",
    description:
      'Tre isole al largo della costa del Var, un taccuino e nessun biglietto di ritorno. Un fine settimana lento a Porquerolles, Port-Cros e Le Levant — il Sud come era stato promesso.',
    heroImg: HERO,
    heroAlt: 'Scogliere coperte di pini che precipitano nel Mediterraneo',
    heroCredit: 'Fotografia — Port-Cros, Var',
    kicker: 'Il grande reportage · Var',
    h1: 'Quarantotto ore sulle <em>Îles d’Or</em>',
    deck: 'Tre isole al largo della costa del Var, un taccuino e nessun biglietto di ritorno. Un fine settimana lento a Porquerolles, Port-Cros e Le Levant — il Sud come era stato promesso.',
    crumbRegion: 'provence',
    by: 'Di <b>la redazione</b> — <em>Hyères, Var</em>',
    metaInfo: ['Primavera 2026', '12 min di lettura'],
    shareLabel: 'Condividi',
    shareLinks: [
      { label: 'Link', href: '#' },
      { label: 'Email', href: '#' },
    ],
    blocks: [
      {
        type: 'p',
        lede: true,
        html:
          'C’è un tratto della costa del Var dove la terraferma allenta la presa e tre isole galleggiano appena al largo. Porquerolles, Port-Cros, Le Levant — le Îles d’Or, così chiamate per il modo in cui lo scisto cattura il sole tardivo e vira, per un istante, all’oro. Abbiamo preso il primo battello da La Tour Fondue con un taccuino e senza biglietto di ritorno, e siamo tornati due giorni dopo convinti di aver trovato il Sud come era stato promesso: pino, sale e quella lunga luce pomeridiana che i pittori inseguono senza mai del tutto catturarla.',
      },
      {
        type: 'p',
        html:
          'La traversata dura venti minuti. Abbastanza per veder rimpicciolire la penisola, non abbastanza per perdere l’odore della terra. Quando il traghetto aggira il frangiflutti di Porquerolles, il villaggio si è già disposto come una scenografia — una piazza di platani, una chiesa color osso, biciclette appoggiate dove dovrebbero esserci le auto. Non ci sono auto. Questo solo fatto riorganizza tutto ciò che segue.',
      },
      { type: 'h2', num: 'I.', html: 'Porquerolles, su due ruote' },
      {
        type: 'p',
        html:
          'Abbiamo noleggiato le biciclette ancora prima di aver disfatto le valigie. L’isola misura appena sette chilometri da un capo all’altro, e tutto ciò che vale la pena — il faro, le vigne, le tre grandi spiagge della costa nord — si raggiunge su una bici a noleggio con cestino e freni dubbi. Il sentiero per la <a class="inline" href="#">Plage Notre-Dame</a> corre tra i pini marittimi e il secco frinire delle cicale; è stata eletta due volte la spiaggia più bella d’Europa, un titolo che porta senza la minima folla a giustificarlo a maggio.',
      },
      {
        type: 'p',
        html:
          'Nell’entroterra, il <a class="inline" href="#">Domaine de la Courtade</a> produce uno dei rosati più seri di Provenza su terrazze color terracotta. Abbiamo degustato a un tavolo da cavalletto sotto un fico, con il vignaiolo che versava tenendo un occhio su un temporale lontano in mare aperto che non arrivò mai.',
      },
      {
        type: 'pull',
        quote: '«Sulle Îles d’Or, l’assenza dell’auto non è una restrizione. È tutto il senso.»',
        src: 'Dal taccuino · Giorno uno',
      },
      {
        type: 'inset',
        img: INSET,
        alt: 'Un piccolo porto mediterraneo nell’ora dorata',
        caption: 'Il vecchio porto al crepuscolo — l’ultimo traghetto è partito, e l’isola respira.',
      },
      { type: 'h2', num: 'II.', html: 'Port-Cros, la selvaggia' },
      {
        type: 'p',
        html:
          'Se Porquerolles è l’isola che vi lascia entrare, Port-Cros è quella che vi chiede di comportarvi bene. È un parco nazionale — il primo parco marino d’Europa — e lo si sente nella disciplina del luogo: sentieri segnalati, niente fuochi, un percorso di snorkeling tracciato tra due calette dove le cernie hanno imparato di essere al sicuro. Abbiamo risalito il <a class="inline" href="#">Vallon de la Solède</a> nel fresco del mattino, la macchia che si chiudeva sopra di noi, per arrivare al villaggio di Port-Cros e trovarvi forse quaranta persone e un solo ristorante che faceva esattamente ciò che doveva.',
      },
      {
        type: 'p',
        html:
          'Il pranzo fu un’orata intera, alla griglia, con nient’altro che olio e uno spicchio di limone, mangiata mentre la barca tirava sull’ormeggio un metro sotto la terrazza. È il genere di pasto che vi rende sospettosi verso ogni piatto complicato che abbiate mai pagato.',
      },
      {
        type: 'fullbleed',
        img: FULLBLEED,
        alt: 'Il Mediterraneo al tramonto',
        caption: 'Tramonto dalla punta occidentale — lo scisto vira all’oro, e le isole meritano il loro nome.',
      },
      { type: 'h2', num: 'III.', html: 'Le Levant, e l’arte di andarsene' },
      {
        type: 'p',
        html:
          'La terza isola l’abbiamo ammirata soprattutto dall’acqua. Le Levant è condivisa tra la marina francese e una delle più antiche comunità naturiste del paese, il che crea un vicinato improbabile e una costa che si apprezza meglio dal ponte di una piccola barca. Ne abbiamo noleggiata una per l’ultimo pomeriggio — un <em>pointu</em> di legno con fuoribordo e uno skipper che faceva questo giro da trent’anni — e l’abbiamo lasciato mostrarci le calanque che la mappa dei sentieri tralascia.',
      },
      {
        type: 'p',
        html:
          'Per le sei eravamo di nuovo al molo di Porquerolles, irrigiditi dal sale e storditi dal sole, a guardare i gitanti incolonnarsi sul traghetto. Siamo rimasti. C’è un piacere particolare nello stare su un’isola quando l’ultima barca parte senza di voi: la luce si addolcisce, il villaggio si svuota, e per qualche ora il luogo appartiene a chi ha scelto di restare.',
      },
    ],
    pratiqueLabel: 'Il carnet pratico · Carnet pratique',
    pratiqueHeading: 'Preparare la <em>traversata</em>',
    pratiqueRows: [
      { k: 'Come arrivare', v: 'I traghetti per Porquerolles partono da <b>La Tour Fondue</b> (penisola di Giens), tutto l’anno, 20&nbsp;min. Port-Cros e Le Levant da Hyères o Le Lavandou.' },
      { k: 'Quando andare', v: 'Maggio–giugno e settembre. A luglio–agosto i battelli del giorno arrivano in massa; venite infrasettimanale o fermatevi la notte.' },
      { k: 'Dove dormire', v: '<b>Le Mas du Langoustier</b>, Porquerolles — un hotel rosa all’estremità occidentale e selvaggia dell’isola, mezza pensione, nessun vicino.' },
      { k: 'La tavola', v: '<b>La Pinde</b>, Port-Cros — qualunque cosa sia scesa dalla barca quella mattina, alla griglia. Prenotazione telefonica.' },
      { k: 'Da leggere poi', v: '<a href="#">La costa del Var, da un capo all’altro</a> · <a href="#">Dove bere rosato in Provenza</a>' },
    ],
    authorLabel: 'L’autrice · L’auteur',
    authorInitial: 'E',
    authorName: 'Élise Marchand',
    authorRole: 'Redattrice di viaggio — con base a Marsiglia',
    authorBio:
      'Élise percorre le strade secondarie del Midi per il giornale fin dal primo numero. Paga di tasca propria le camere e i pranzi — e scrive solo dei luoghi dove tornerebbe.',
    authorMore: 'Tutti gli articoli di Élise Marchand — more by the author',
    relatedLabel: 'Continua a leggere · Continue reading',
    relatedHeading: 'Ancora un po’ di <em>Sud</em>',
    related: [
      { href: 'provence', img: R1, alt: 'Un villaggio arroccato di Provenza', rk: 'Provenza', title: 'Un fine settimana nel Luberon, villaggio dopo villaggio' },
      { href: 'french-riviera', img: R2, alt: 'Un villaggio della Costa Azzurra', rk: 'Costa Azzurra', title: 'Cassis e le calanque, a piedi e in barca' },
      { href: 'the-table', img: R3, alt: 'Un villaggio sul fianco della collina tra gli alberi', rk: 'La Tavola', title: 'Sei tavole che valgono la deviazione questa primavera' },
    ],
  },
  de: {
    title: "Achtundvierzig Stunden auf den Îles d'Or — The South of France",
    description:
      'Drei Inseln vor der Küste des Var, ein Notizbuch und kein Rückfahrticket. Ein langsames Wochenende auf Porquerolles, Port-Cros und Le Levant — der Süden, wie er versprochen war.',
    heroImg: HERO,
    heroAlt: 'Kiefernbewachsene Klippen, die ins Mittelmeer abfallen',
    heroCredit: 'Fotografie — Port-Cros, Var',
    kicker: 'Die große Reportage · Var',
    h1: 'Achtundvierzig Stunden auf den <em>Îles d’Or</em>',
    deck: 'Drei Inseln vor der Küste des Var, ein Notizbuch und kein Rückfahrticket. Ein langsames Wochenende auf Porquerolles, Port-Cros und Le Levant — der Süden, wie er versprochen war.',
    crumbRegion: 'provence',
    by: 'Von <b>der Redaktion</b> — <em>Hyères, Var</em>',
    metaInfo: ['Frühjahr 2026', '12 Min. Lesezeit'],
    shareLabel: 'Teilen',
    shareLinks: [
      { label: 'Link', href: '#' },
      { label: 'E-Mail', href: '#' },
    ],
    blocks: [
      {
        type: 'p',
        lede: true,
        html:
          'Es gibt einen Abschnitt der Var-Küste, wo das Festland seinen Griff lockert und drei Inseln knapp vor der Küste treiben. Porquerolles, Port-Cros, Le Levant — die Îles d’Or, benannt danach, wie der Schiefer die späte Sonne einfängt und sich kurz in Gold verwandelt. Wir nahmen das erste Boot von La Tour Fondue mit einem Notizbuch und ohne Rückfahrticket und kehrten zwei Tage später in der Überzeugung zurück, den Süden gefunden zu haben, wie er versprochen war: Kiefer, Salz und jenes lange Nachmittagslicht, dem Maler nachjagen und es nie ganz einfangen.',
      },
      {
        type: 'p',
        html:
          'Die Überfahrt dauert zwanzig Minuten. Lang genug, um die Halbinsel schrumpfen zu sehen, nicht lang genug, um den Geruch des Landes zu verlieren. Wenn die Fähre die Mole von Porquerolles umrundet, hat sich das Dorf bereits wie ein Bühnenbild geordnet — ein Platz mit Platanen, eine knochenfarbene Kirche, Fahrräder, die dort lehnen, wo Autos stehen sollten. Es gibt keine Autos. Diese eine Tatsache ordnet alles Folgende neu.',
      },
      { type: 'h2', num: 'I.', html: 'Porquerolles, auf zwei Rädern' },
      {
        type: 'p',
        html:
          'Wir mieteten Fahrräder, noch bevor wir ausgepackt hatten. Die Insel misst kaum sieben Kilometer von einem Ende zum anderen, und alles Lohnenswerte darauf — der Leuchtturm, die Weinberge, die drei großen Strände der Nordküste — ist auf einem geliehenen Rad mit Korb und fragwürdigen Bremsen erreichbar. Der Weg zur <a class="inline" href="#">Plage Notre-Dame</a> führt durch Schirmkiefern und das trockene Zirpen der Zikaden; sie wurde zweimal zum schönsten Strand Europas gewählt, ein Titel, den sie im Mai ohne die geringste Menschenmenge zur Rechtfertigung trägt.',
      },
      {
        type: 'p',
        html:
          'Im Landesinneren keltert die <a class="inline" href="#">Domaine de la Courtade</a> einen der ernsthaftesten Rosés der Provence auf Terrassen in Terrakottafarbe. Wir verkosteten an einem Bocktisch unter einem Feigenbaum, während der Winzer einschenkte, ein Auge auf ein fernes Gewitter weit draußen auf dem Meer, das nie kam.',
      },
      {
        type: 'pull',
        quote: '„Auf den Îles d’Or ist die Abwesenheit des Autos keine Einschränkung. Sie ist der ganze Sinn der Sache.“',
        src: 'Aus dem Notizbuch · Tag eins',
      },
      {
        type: 'inset',
        img: INSET,
        alt: 'Ein kleiner Mittelmeerhafen in der goldenen Stunde',
        caption: 'Der alte Hafen in der Dämmerung — die letzte Fähre ist fort, und die Insel atmet aus.',
      },
      { type: 'h2', num: 'II.', html: 'Port-Cros, die Wilde' },
      {
        type: 'p',
        html:
          'Wenn Porquerolles die Insel ist, die einen einlässt, dann ist Port-Cros jene, die einen bittet, sich zu benehmen. Es ist ein Nationalpark — der erste Meerespark Europas — und das zeigt sich in der Disziplin des Ortes: markierte Wege, kein Feuer, eine Schnorchelroute zwischen zwei Buchten abgesteckt, wo die Zackenbarsche gelernt haben, dass sie sicher sind. Wir gingen das <a class="inline" href="#">Vallon de la Solède</a> in der Kühle des Morgens hinauf, die Macchia schloss sich über uns, und kamen im Dorf Port-Cros an, wo wir vielleicht vierzig Menschen und ein einziges Restaurant fanden, das genau das tat, was es sollte.',
      },
      {
        type: 'p',
        html:
          'Das Mittagessen war eine ganze Dorade, gegrillt, mit nichts darauf als Öl und einer Zitronenspalte, gegessen, während das Boot einen Meter unter der Terrasse an seiner Leine zog. Es ist die Art Mahlzeit, die einen misstrauisch macht gegenüber jedem komplizierten Gericht, für das man je bezahlt hat.',
      },
      {
        type: 'fullbleed',
        img: FULLBLEED,
        alt: 'Das Mittelmeer bei Sonnenuntergang',
        caption: 'Sonnenuntergang von der Westspitze — der Schiefer wird golden, und die Inseln verdienen ihren Namen.',
      },
      { type: 'h2', num: 'III.', html: 'Le Levant, und die Kunst des Abschieds' },
      {
        type: 'p',
        html:
          'Die dritte Insel bewunderten wir vor allem vom Wasser aus. Le Levant teilen sich die französische Marine und eine der ältesten Naturisten-Gemeinschaften des Landes, was eine unwahrscheinliche Nachbarschaft ergibt und eine Küste, die man am besten vom Deck eines kleinen Bootes aus genießt. Wir mieteten eines für den letzten Nachmittag — ein hölzernes <em>pointu</em> mit Außenbordmotor und einem Skipper, der diese Runde seit dreißig Jahren fuhr — und ließen ihn uns die Calanques zeigen, die die Wanderkarte auslässt.',
      },
      {
        type: 'p',
        html:
          'Um sechs waren wir zurück am Kai von Porquerolles, salzsteif und sonnenbenommen, und sahen den Tagesausflüglern zu, wie sie sich auf die Fähre reihten. Wir blieben. Es liegt ein eigener Reiz darin, auf einer Insel zu sein, wenn das letzte Boot ohne einen ablegt: Das Licht wird weicher, das Dorf leert sich, und für ein paar Stunden gehört der Ort denen, die zu bleiben gewählt haben.',
      },
    ],
    pratiqueLabel: 'Das praktische Notizbuch · Carnet pratique',
    pratiqueHeading: 'Die <em>Überfahrt</em> planen',
    pratiqueRows: [
      { k: 'Anreise', v: 'Fähren nach Porquerolles legen von <b>La Tour Fondue</b> (Halbinsel Giens) ab, ganzjährig, 20&nbsp;Min. Port-Cros und Le Levant ab Hyères oder Le Lavandou.' },
      { k: 'Wann hin', v: 'Mai–Juni und September. Im Juli–August kommen die Tagesboote in Scharen; reisen Sie unter der Woche oder bleiben Sie über Nacht.' },
      { k: 'Wo übernachten', v: '<b>Le Mas du Langoustier</b>, Porquerolles — ein rosa Hotel am wilden Westende der Insel, Halbpension, keine Nachbarn.' },
      { k: 'Der Tisch', v: '<b>La Pinde</b>, Port-Cros — was an jenem Morgen vom Boot kam, gegrillt. Reservierung per Telefon.' },
      { k: 'Weiterlesen', v: '<a href="#">Die Var-Küste, von einem Ende zum anderen</a> · <a href="#">Wo man in der Provence Rosé trinkt</a>' },
    ],
    authorLabel: 'Die Autorin · L’auteur',
    authorInitial: 'E',
    authorName: 'Élise Marchand',
    authorRole: 'Reiseredakteurin — mit Sitz in Marseille',
    authorBio:
      'Élise fährt für das Journal seit der ersten Ausgabe die Nebenstraßen des Midi ab. Sie bezahlt ihre Zimmer und ihre Mittagessen selbst — und schreibt nur über Orte, an die sie zurückkehren würde.',
    authorMore: 'Mehr von Élise Marchand — more by the author',
    relatedLabel: 'Weiterlesen · Continue reading',
    relatedHeading: 'Noch ein wenig <em>Süden</em>',
    related: [
      { href: 'provence', img: R1, alt: 'Ein hoch gelegenes Dorf in der Provence', rk: 'Provence', title: 'Ein Wochenende im Luberon, Dorf für Dorf' },
      { href: 'french-riviera', img: R2, alt: 'Ein Dorf an der Côte d’Azur', rk: 'Côte d’Azur', title: 'Cassis und die Calanques, zu Fuß und per Boot' },
      { href: 'the-table', img: R3, alt: 'Ein Dorf am Hang zwischen Bäumen', rk: 'Der Tisch', title: 'Sechs Tische, die diesen Frühling den Umweg wert sind' },
    ],
  },
  es: {
    title: "Cuarenta y ocho horas en las Îles d'Or — The South of France",
    description:
      'Tres islas frente a la costa del Var, un cuaderno y ningún billete de vuelta. Un fin de semana sin prisa en Porquerolles, Port-Cros y Le Levant — el Sur tal como se prometió.',
    heroImg: HERO,
    heroAlt: 'Acantilados cubiertos de pinos que caen al Mediterráneo',
    heroCredit: 'Fotografía — Port-Cros, Var',
    kicker: 'El gran reportaje · Var',
    h1: 'Cuarenta y ocho horas en las <em>Îles d’Or</em>',
    deck: 'Tres islas frente a la costa del Var, un cuaderno y ningún billete de vuelta. Un fin de semana sin prisa en Porquerolles, Port-Cros y Le Levant — el Sur tal como se prometió.',
    crumbRegion: 'provence',
    by: 'Por <b>la redacción</b> — <em>Hyères, Var</em>',
    metaInfo: ['Primavera 2026', '12 min de lectura'],
    shareLabel: 'Compartir',
    shareLinks: [
      { label: 'Enlace', href: '#' },
      { label: 'Correo', href: '#' },
    ],
    blocks: [
      {
        type: 'p',
        lede: true,
        html:
          'Hay un tramo de la costa del Var donde el continente afloja su abrazo y tres islas flotan apenas frente a la orilla. Porquerolles, Port-Cros, Le Levant — las Îles d’Or, llamadas así por la manera en que el esquisto capta el sol tardío y vira, por un instante, al oro. Tomamos el primer barco desde La Tour Fondue con un cuaderno y sin billete de vuelta, y regresamos dos días después convencidos de haber encontrado el Sur tal como se prometió: pino, sal y esa larga luz de la tarde que los pintores persiguen sin llegar nunca a atraparla del todo.',
      },
      {
        type: 'p',
        html:
          'La travesía dura veinte minutos. Lo bastante para ver encogerse la península, no lo bastante para perder el olor de la tierra. Cuando el ferry rodea el espigón de Porquerolles, el pueblo ya se ha dispuesto como un decorado de teatro — una plaza de plátanos, una iglesia color hueso, bicicletas apoyadas donde deberían estar los coches. No hay coches. Ese solo hecho reorganiza todo lo que sigue.',
      },
      { type: 'h2', num: 'I.', html: 'Porquerolles, sobre dos ruedas' },
      {
        type: 'p',
        html:
          'Alquilamos bicicletas antes incluso de deshacer las maletas. La isla mide apenas siete kilómetros de un extremo a otro, y todo lo que vale la pena en ella — el faro, los viñedos, las tres grandes playas de la costa norte — se alcanza en una bici de alquiler con cesta y frenos dudosos. El camino a la <a class="inline" href="#">Plage Notre-Dame</a> discurre entre pinos piñoneros y el seco chirriar de las cigarras; ha sido elegida dos veces la playa más hermosa de Europa, un título que luce sin la menor multitud que lo justifique en mayo.',
      },
      {
        type: 'p',
        html:
          'Tierra adentro, el <a class="inline" href="#">Domaine de la Courtade</a> elabora uno de los rosados más serios de Provenza en terrazas color terracota. Catamos en una mesa de caballetes bajo una higuera, mientras el viñador servía con un ojo puesto en una tormenta lejana, mar adentro, que nunca llegó.',
      },
      {
        type: 'pull',
        quote: '«En las Îles d’Or, la ausencia del coche no es una restricción. Es todo el sentido.»',
        src: 'Del cuaderno · Día uno',
      },
      {
        type: 'inset',
        img: INSET,
        alt: 'Un pequeño puerto mediterráneo en la hora dorada',
        caption: 'El viejo puerto al crepúsculo — el último ferry ha partido, y la isla respira.',
      },
      { type: 'h2', num: 'II.', html: 'Port-Cros, la salvaje' },
      {
        type: 'p',
        html:
          'Si Porquerolles es la isla que te deja entrar, Port-Cros es la que te pide comportarte. Es un parque nacional — el primer parque marino de Europa — y se nota en la disciplina del lugar: senderos balizados, sin fuegos, una ruta de buceo con tubo trazada entre dos calas donde los meros han aprendido que están a salvo. Subimos el <a class="inline" href="#">Vallon de la Solède</a> en la frescura de la mañana, el monte bajo cerrándose sobre nosotros, para llegar al pueblo de Port-Cros y encontrar quizá cuarenta personas y un único restaurante haciendo exactamente lo que debía.',
      },
      {
        type: 'p',
        html:
          'El almuerzo fue una dorada entera, a la parrilla, con nada más que aceite y un gajo de limón, comida mientras el barco tiraba de su amarre un metro bajo la terraza. Es el tipo de comida que te vuelve receloso de cada plato complicado que has pagado en tu vida.',
      },
      {
        type: 'fullbleed',
        img: FULLBLEED,
        alt: 'El Mediterráneo al atardecer',
        caption: 'Atardecer desde la punta occidental — el esquisto vira al oro, y las islas merecen su nombre.',
      },
      { type: 'h2', num: 'III.', html: 'Le Levant, y el arte de partir' },
      {
        type: 'p',
        html:
          'La tercera isla la admiramos sobre todo desde el agua. Le Levant se reparte entre la marina francesa y una de las comunidades naturistas más antiguas del país, lo que crea una vecindad improbable y un litoral que se aprecia mejor desde la cubierta de un pequeño barco. Alquilamos uno para la última tarde — un <em>pointu</em> de madera con motor fueraborda y un patrón que llevaba treinta años haciendo este recorrido — y lo dejamos mostrarnos las calas que el mapa de senderos pasa por alto.',
      },
      {
        type: 'p',
        html:
          'A las seis estábamos de vuelta en el muelle de Porquerolles, rígidos de sal y aturdidos de sol, viendo a los excursionistas formar fila hacia el ferry. Nos quedamos. Hay un placer particular en estar en una isla cuando el último barco parte sin uno: la luz se suaviza, el pueblo se vacía, y durante unas horas el lugar pertenece a quienes eligieron quedarse.',
      },
    ],
    pratiqueLabel: 'El cuaderno práctico · Carnet pratique',
    pratiqueHeading: 'Preparar la <em>travesía</em>',
    pratiqueRows: [
      { k: 'Cómo llegar', v: 'Los ferris a Porquerolles salen de <b>La Tour Fondue</b> (península de Giens), todo el año, 20&nbsp;min. Port-Cros y Le Levant desde Hyères o Le Lavandou.' },
      { k: 'Cuándo ir', v: 'Mayo–junio y septiembre. En julio–agosto los barcos del día llegan en masa; venga entre semana o quédese a dormir.' },
      { k: 'Dónde dormir', v: '<b>Le Mas du Langoustier</b>, Porquerolles — un hotel rosa en el extremo occidental y salvaje de la isla, media pensión, sin vecinos.' },
      { k: 'La mesa', v: '<b>La Pinde</b>, Port-Cros — lo que bajara del barco esa mañana, a la parrilla. Reserva por teléfono.' },
      { k: 'Leer después', v: '<a href="#">La costa del Var, de punta a punta</a> · <a href="#">Dónde beber rosado en Provenza</a>' },
    ],
    authorLabel: 'La autora · L’auteur',
    authorInitial: 'E',
    authorName: 'Élise Marchand',
    authorRole: 'Redactora de viajes — con base en Marsella',
    authorBio:
      'Élise recorre las carreteras secundarias del Midi para el diario desde su primer número. Paga sus propias habitaciones y sus propios almuerzos — y solo escribe sobre los lugares a los que volvería.',
    authorMore: 'Todos los artículos de Élise Marchand — more by the author',
    relatedLabel: 'Seguir leyendo · Continue reading',
    relatedHeading: 'Un poco más de <em>Sur</em>',
    related: [
      { href: 'provence', img: R1, alt: 'Un pueblo encaramado de Provenza', rk: 'Provenza', title: 'Un fin de semana en el Luberon, pueblo a pueblo' },
      { href: 'french-riviera', img: R2, alt: 'Un pueblo de la Costa Azul', rk: 'Costa Azul', title: 'Cassis y las calas, a pie y en barco' },
      { href: 'the-table', img: R3, alt: 'Un pueblo en la ladera entre los árboles', rk: 'La Mesa', title: 'Seis mesas que merecen el desvío esta primavera' },
    ],
  },
};
