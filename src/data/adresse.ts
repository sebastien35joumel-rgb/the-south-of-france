// ─────────────────────────────────────────────────────────────
// "Address book" entries — hotels and tables nested under a region
// or under stays / the-table. Keyed first by a stable entry slug,
// then by locale. Fields with markup are rendered set:html.
// All establishments are real; no telephone numbers are invented.
// ─────────────────────────────────────────────────────────────
import type { Locale, SectionKey } from '../i18n/config';

export interface AdresseFact { k: string; v: string; }
export interface AdresseBodyBlock { type: 'h2' | 'h3' | 'p'; html: string; lede?: boolean; }
export interface AdressePcardRow { k: string; v: string; } // v may contain markup
export interface AdresseGalleryItem { img: string; alt: string; wide?: boolean; }
export interface AdresseNearby { href: SectionKey; img: string; alt: string; rk: string; title: string; place: string; }

export interface AdresseContent {
  title: string;
  description: string;
  // hero
  heroImg: string;
  heroAlt: string;
  crumb: SectionKey[];      // breadcrumb trail of region/section keys (after the home root)
  cat: string;              // e.g. "Stay · Hotel"
  h1: string;               // may contain <em>
  loc: string;              // location line
  stars: number;            // star count
  // quick facts bar
  facts: AdresseFact[];
  // body
  bodyKicker: string;
  bodyH2: string;           // may contain <em>
  body: AdresseBodyBlock[];
  verdictLabel: string;
  verdictText: string;
  // practical card (sticky)
  pcardLabel: string;
  pcardName: string;
  pcardRows: AdressePcardRow[];
  pcardCta: string;
  mapLabel: string;
  // gallery
  galleryLabel: string;
  gallery: AdresseGalleryItem[];
  // nearby
  nearbyLabel: string;
  nearbyHeading: string;    // may contain <em>
  nearby: AdresseNearby[];
}

// Verified Unsplash IDs reused from the source mockup only.
const HERO = 'https://images.unsplash.com/photo-1597512432969-dd65354dba02?fm=jpg&q=76&w=2200&auto=format&fit=crop';
const G1 = 'https://images.unsplash.com/photo-1600762849691-4b51bc94009c?fm=jpg&q=74&w=1200&auto=format&fit=crop';
const G2 = 'https://images.unsplash.com/photo-1673423050661-134515109330?fm=jpg&q=74&w=800&auto=format&fit=crop';
const G3 = 'https://images.unsplash.com/photo-1446155844149-5ac83a06ca74?fm=jpg&q=74&w=800&auto=format&fit=crop';
const G4 = 'https://images.unsplash.com/photo-1715792001784-708b1d2c0bcd?fm=jpg&q=74&w=800&auto=format&fit=crop';
const G5 = 'https://images.unsplash.com/photo-1587579785043-eccb9f70391d?fm=jpg&q=74&w=800&auto=format&fit=crop';
const N1 = 'https://images.unsplash.com/photo-1715792001784-708b1d2c0bcd?fm=jpg&q=74&w=900&auto=format&fit=crop';
const N2 = 'https://images.unsplash.com/photo-1604948559069-3287d5c5a6e5?fm=jpg&q=74&w=900&auto=format&fit=crop';
const N3 = 'https://images.unsplash.com/photo-1597824854158-9226c52cd21b?fm=jpg&q=74&w=900&auto=format&fit=crop';

export const adresses: Record<string, Partial<Record<Locale, AdresseContent>>> = {
  'crillon-le-brave': {
  en: {
    title: 'Hôtel Crillon le Brave — The South of France',
    description:
      'A whole Vaucluse village knitted into a single country hotel above Mont Ventoux — our review, the verdict, the practical details and what to see nearby.',
    heroImg: HERO,
    heroAlt: 'A Provence village house under blue sky',
    crumb: ['provence', 'stays'],
    cat: 'Stay · Hotel',
    h1: 'Hôtel Crillon le Brave',
    loc: 'Crillon-le-Brave · Vaucluse',
    stars: 5,
    facts: [
      { k: 'Type', v: 'Country hotel' },
      { k: 'Best season', v: 'May – October' },
      { k: 'From', v: '€320 / night' },
      { k: 'Rooms', v: '34' },
      { k: 'Good for', v: 'A slow weekend' },
    ],
    bodyKicker: 'The Review · Notre avis',
    bodyH2: 'A whole village turned, gently, into a <em>hotel</em>.',
    body: [
      {
        type: 'p',
        lede: true,
        html:
          'There are hotels that occupy a building, and then there is Crillon le Brave, which occupies a village. Two dozen houses at the top of a hill in the Vaucluse, joined by stepped lanes and walled gardens, have been knitted together over thirty years into one of the most quietly assured addresses in Provence. You do not check in so much as move in.',
      },
      {
        type: 'p',
        html:
          'The rooms are what the French call <em>sobre</em> in the best sense — lime-washed walls, antique linen, a few good pieces and nothing that shouts. The point is not the room. The point is the terrace beyond it, and the view across the plain to Mont Ventoux, which turns rose at six and indigo by nine.',
      },
      { type: 'h3', html: 'The table' },
      {
        type: 'p',
        html:
          'Dinner is taken in the old bistro or, in summer, on the terrace under the planes. The kitchen keeps it local and unfussy: vegetables from the kitchen garden, lamb from the Alpilles, a wine list that finally does the southern Rône justice. Breakfast — figs, honey, warm fougasse — is reason enough to stay a second night. Read our full <a class="inline" href="/en/the-table/provence-table-guide/">Provence table guide</a>.',
      },
      { type: 'h3', html: 'Getting there' },
      {
        type: 'p',
        html:
          'Crillon-le-Brave is forty minutes from Avignon TGV and a world away from anywhere. Come by car; the back roads through Bedoin and the vineyards are half the pleasure. See also our <a class="inline" href="/en/provence/luberon-weekend/">weekend in the Luberon</a>.',
      },
    ],
    verdictLabel: 'The verdict · En un mot',
    verdictText:
      '“The kind of place that ruins you, gently, for ordinary hotels. Come for two nights; you will wish you had booked three.”',
    pcardLabel: 'The Address · L’adresse',
    pcardName: 'Hôtel Crillon le Brave',
    pcardRows: [
      { k: 'Address', v: 'Place de l’Église, 84410 Crillon-le-Brave, Vaucluse' },
      { k: 'Telephone', v: '+33&nbsp;4&nbsp;90&nbsp;65&nbsp;61&nbsp;61' },
      { k: 'Website', v: '<a href="#">crillonlebrave·com</a>' },
      { k: 'Open', v: 'Mid-March to early January' },
    ],
    pcardCta: 'Check availability',
    mapLabel: 'Crillon-le-Brave, Vaucluse',
    galleryLabel: 'The Gallery · En images',
    gallery: [
      { img: G1, alt: 'The village at first light', wide: true },
      { img: G2, alt: 'Stepped lanes of the village' },
      { img: G3, alt: 'A tree beside an old stone wall' },
      { img: G4, alt: 'The garden in bloom' },
      { img: G5, alt: 'A village street at dusk' },
    ],
    nearbyLabel: 'Nearby · À proximité',
    nearbyHeading: 'While you are in the <em>Vaucluse</em>',
    nearby: [
      { href: 'provence', img: N1, alt: 'The ochre trail at Roussillon', rk: 'Walk · 25 min', title: 'The ochre trail at Roussillon', place: 'Roussillon · Vaucluse' },
      { href: 'provence', img: N2, alt: 'Domaine de Trévallon', rk: 'Wine · 40 min', title: 'Domaine de Trévallon', place: 'Saint-Étienne-du-Grès' },
      { href: 'provence', img: N3, alt: 'The Sunday market', rk: 'Market · 30 min', title: 'L’Isle-sur-la-Sorgue', place: 'Sunday antiques market' },
    ],
  },
  fr: {
    title: 'Hôtel Crillon le Brave — The South of France',
    description:
      'Tout un village du Vaucluse tissé en un seul hôtel de campagne au-dessus du mont Ventoux — notre avis, le verdict, les informations pratiques et que voir aux alentours.',
    heroImg: HERO,
    heroAlt: 'Une maison de village de Provence sous le ciel bleu',
    crumb: ['provence', 'stays'],
    cat: 'Séjour · Hôtel',
    h1: 'Hôtel Crillon le Brave',
    loc: 'Crillon-le-Brave · Vaucluse',
    stars: 5,
    facts: [
      { k: 'Type', v: 'Hôtel de campagne' },
      { k: 'Saison idéale', v: 'Mai – octobre' },
      { k: 'À partir de', v: '320 € / nuit' },
      { k: 'Chambres', v: '34' },
      { k: 'Idéal pour', v: 'Un week-end au ralenti' },
    ],
    bodyKicker: 'Notre avis · The Review',
    bodyH2: 'Tout un village transformé, doucement, en <em>hôtel</em>.',
    body: [
      {
        type: 'p',
        lede: true,
        html:
          'Il y a des hôtels qui occupent un bâtiment, et puis il y a Crillon le Brave, qui occupe un village. Deux douzaines de maisons en haut d’une colline du Vaucluse, reliées par des ruelles en escalier et des jardins clos, ont été tissées ensemble en trente ans pour former l’une des adresses les plus discrètement sûres de Provence. On n’y prend pas une chambre, on y emménage.',
      },
      {
        type: 'p',
        html:
          'Les chambres sont ce que les Français appellent <em>sobre</em> au meilleur sens — murs à la chaux, linge ancien, quelques belles pièces et rien qui ne crie. Le sujet n’est pas la chambre. Le sujet, c’est la terrasse au-delà, et la vue sur la plaine jusqu’au mont Ventoux, qui vire au rose à six heures et à l’indigo à neuf.',
      },
      { type: 'h3', html: 'La table' },
      {
        type: 'p',
        html:
          'Le dîner se prend dans l’ancien bistrot ou, l’été, sur la terrasse sous les platanes. La cuisine reste locale et sans chichis : légumes du potager, agneau des Alpilles, une carte des vins qui rend enfin justice au Rhône méridional. Le petit-déjeuner — figues, miel, fougasse tiède — suffit à justifier une seconde nuit. Lisez notre <a class="inline" href="/fr/la-table/provence-table-guide/">guide des tables de Provence</a>.',
      },
      { type: 'h3', html: 'Y aller' },
      {
        type: 'p',
        html:
          'Crillon-le-Brave est à quarante minutes de la gare TGV d’Avignon et à mille lieues de tout. Venez en voiture ; les routes secondaires par Bédoin et les vignes font la moitié du plaisir. Voir aussi notre <a class="inline" href="/fr/provence/luberon-weekend/">week-end dans le Luberon</a>.',
      },
    ],
    verdictLabel: 'En un mot · The verdict',
    verdictText:
      '« Le genre d’endroit qui vous gâche, doucement, tous les hôtels ordinaires. Venez pour deux nuits ; vous regretterez de ne pas en avoir réservé trois. »',
    pcardLabel: 'L’adresse · The Address',
    pcardName: 'Hôtel Crillon le Brave',
    pcardRows: [
      { k: 'Adresse', v: 'Place de l’Église, 84410 Crillon-le-Brave, Vaucluse' },
      { k: 'Téléphone', v: '+33&nbsp;4&nbsp;90&nbsp;65&nbsp;61&nbsp;61' },
      { k: 'Site web', v: '<a href="#">crillonlebrave·com</a>' },
      { k: 'Ouverture', v: 'De mi-mars à début janvier' },
    ],
    pcardCta: 'Vérifier les disponibilités',
    mapLabel: 'Crillon-le-Brave, Vaucluse',
    galleryLabel: 'En images · The Gallery',
    gallery: [
      { img: G1, alt: 'Le village aux premières lueurs', wide: true },
      { img: G2, alt: 'Les ruelles en escalier du village' },
      { img: G3, alt: 'Un arbre près d’un vieux mur de pierre' },
      { img: G4, alt: 'Le jardin en fleurs' },
      { img: G5, alt: 'Une rue du village au crépuscule' },
    ],
    nearbyLabel: 'À proximité · Nearby',
    nearbyHeading: 'Pendant votre séjour dans le <em>Vaucluse</em>',
    nearby: [
      { href: 'provence', img: N1, alt: 'Le sentier des ocres de Roussillon', rk: 'Balade · 25 min', title: 'Le sentier des ocres de Roussillon', place: 'Roussillon · Vaucluse' },
      { href: 'provence', img: N2, alt: 'Domaine de Trévallon', rk: 'Vins · 40 min', title: 'Domaine de Trévallon', place: 'Saint-Étienne-du-Grès' },
      { href: 'provence', img: N3, alt: 'Le marché du dimanche', rk: 'Marché · 30 min', title: 'L’Isle-sur-la-Sorgue', place: 'Marché des antiquaires du dimanche' },
    ],
  },
  it: {
    title: 'Hôtel Crillon le Brave — The South of France',
    description:
      'Un intero villaggio del Vaucluse intrecciato in un solo hotel di campagna sopra il Mont Ventoux — la nostra recensione, il verdetto, le informazioni pratiche e cosa vedere nei dintorni.',
    heroImg: HERO,
    heroAlt: 'Una casa di villaggio di Provenza sotto il cielo azzurro',
    crumb: ['provence', 'stays'],
    cat: 'Soggiorno · Hotel',
    h1: 'Hôtel Crillon le Brave',
    loc: 'Crillon-le-Brave · Vaucluse',
    stars: 5,
    facts: [
      { k: 'Tipo', v: 'Hotel di campagna' },
      { k: 'Stagione ideale', v: 'Maggio – ottobre' },
      { k: 'A partire da', v: '320 € / notte' },
      { k: 'Camere', v: '34' },
      { k: 'Ideale per', v: 'Un fine settimana lento' },
    ],
    bodyKicker: 'La recensione · Notre avis',
    bodyH2: 'Un intero villaggio trasformato, con dolcezza, in <em>hotel</em>.',
    body: [
      {
        type: 'p',
        lede: true,
        html:
          'Ci sono hotel che occupano un edificio, e poi c’è Crillon le Brave, che occupa un villaggio. Due dozzine di case in cima a una collina del Vaucluse, unite da viuzze a gradini e giardini cinti da muri, sono state intrecciate insieme in trent’anni fino a formare uno degli indirizzi più discretamente sicuri di Provenza. Non ci si limita a fare il check-in: ci si trasferisce.',
      },
      {
        type: 'p',
        html:
          'Le camere sono ciò che i francesi chiamano <em>sobre</em> nel senso migliore — pareti a calce, biancheria antica, pochi bei pezzi e nulla che gridi. Il punto non è la camera. Il punto è la terrazza al di là, e la vista sulla pianura fino al Mont Ventoux, che vira al rosa alle sei e all’indaco alle nove.',
      },
      { type: 'h3', html: 'La tavola' },
      {
        type: 'p',
        html:
          'La cena si prende nel vecchio bistrot o, d’estate, sulla terrazza sotto i platani. La cucina resta locale e senza fronzoli: verdure dell’orto, agnello delle Alpilles, una carta dei vini che rende finalmente giustizia al Rodano meridionale. La colazione — fichi, miele, fougasse calda — è motivo sufficiente per fermarsi una seconda notte. Leggete la nostra <a class="inline" href="/it/la-tavola/provence-table-guide/">guida alle tavole di Provenza</a>.',
      },
      { type: 'h3', html: 'Come arrivare' },
      {
        type: 'p',
        html:
          'Crillon-le-Brave è a quaranta minuti dalla stazione TGV di Avignone e a un mondo di distanza da tutto. Venite in auto; le strade secondarie attraverso Bédoin e i vigneti sono metà del piacere. Vedete anche il nostro <a class="inline" href="/it/provenza/luberon-weekend/">fine settimana nel Luberon</a>.',
      },
    ],
    verdictLabel: 'Il verdetto · En un mot',
    verdictText:
      '«Il genere di posto che vi rovina, con dolcezza, tutti gli hotel ordinari. Venite per due notti; rimpiangerete di non averne prenotate tre.»',
    pcardLabel: 'L’indirizzo · L’adresse',
    pcardName: 'Hôtel Crillon le Brave',
    pcardRows: [
      { k: 'Indirizzo', v: 'Place de l’Église, 84410 Crillon-le-Brave, Vaucluse' },
      { k: 'Telefono', v: '+33&nbsp;4&nbsp;90&nbsp;65&nbsp;61&nbsp;61' },
      { k: 'Sito web', v: '<a href="#">crillonlebrave·com</a>' },
      { k: 'Apertura', v: 'Da metà marzo a inizio gennaio' },
    ],
    pcardCta: 'Verifica disponibilità',
    mapLabel: 'Crillon-le-Brave, Vaucluse',
    galleryLabel: 'La galleria · En images',
    gallery: [
      { img: G1, alt: 'Il villaggio alle prime luci', wide: true },
      { img: G2, alt: 'Le viuzze a gradini del villaggio' },
      { img: G3, alt: 'Un albero accanto a un vecchio muro di pietra' },
      { img: G4, alt: 'Il giardino in fiore' },
      { img: G5, alt: 'Una via del villaggio al crepuscolo' },
    ],
    nearbyLabel: 'Nei dintorni · À proximité',
    nearbyHeading: 'Mentre siete nel <em>Vaucluse</em>',
    nearby: [
      { href: 'provence', img: N1, alt: 'Il sentiero delle ocre di Roussillon', rk: 'Passeggiata · 25 min', title: 'Il sentiero delle ocre di Roussillon', place: 'Roussillon · Vaucluse' },
      { href: 'provence', img: N2, alt: 'Domaine de Trévallon', rk: 'Vini · 40 min', title: 'Domaine de Trévallon', place: 'Saint-Étienne-du-Grès' },
      { href: 'provence', img: N3, alt: 'Il mercato della domenica', rk: 'Mercato · 30 min', title: 'L’Isle-sur-la-Sorgue', place: 'Mercato dell’antiquariato della domenica' },
    ],
  },
  de: {
    title: 'Hôtel Crillon le Brave — The South of France',
    description:
      'Ein ganzes Dorf des Vaucluse, verwoben zu einem einzigen Landhotel über dem Mont Ventoux — unsere Rezension, das Urteil, die praktischen Angaben und was es in der Nähe zu sehen gibt.',
    heroImg: HERO,
    heroAlt: 'Ein provenzalisches Dorfhaus unter blauem Himmel',
    crumb: ['provence', 'stays'],
    cat: 'Aufenthalt · Hotel',
    h1: 'Hôtel Crillon le Brave',
    loc: 'Crillon-le-Brave · Vaucluse',
    stars: 5,
    facts: [
      { k: 'Art', v: 'Landhotel' },
      { k: 'Beste Saison', v: 'Mai – Oktober' },
      { k: 'Ab', v: '320 € / Nacht' },
      { k: 'Zimmer', v: '34' },
      { k: 'Ideal für', v: 'Ein langsames Wochenende' },
    ],
    bodyKicker: 'Die Rezension · Notre avis',
    bodyH2: 'Ein ganzes Dorf, sanft in ein <em>Hotel</em> verwandelt.',
    body: [
      {
        type: 'p',
        lede: true,
        html:
          'Es gibt Hotels, die ein Gebäude einnehmen, und dann gibt es Crillon le Brave, das ein Dorf einnimmt. Zwei Dutzend Häuser auf einem Hügel im Vaucluse, durch gestufte Gassen und ummauerte Gärten verbunden, wurden über dreißig Jahre zu einer der leise selbstgewissesten Adressen der Provence verwoben. Man checkt nicht so sehr ein, als dass man einzieht.',
      },
      {
        type: 'p',
        html:
          'Die Zimmer sind, was die Franzosen im besten Sinne <em>sobre</em> nennen — kalkgetünchte Wände, antikes Leinen, einige gute Stücke und nichts, das laut ist. Worauf es ankommt, ist nicht das Zimmer. Worauf es ankommt, ist die Terrasse dahinter und der Blick über die Ebene zum Mont Ventoux, der sich um sechs rosa und um neun indigoblau färbt.',
      },
      { type: 'h3', html: 'Der Tisch' },
      {
        type: 'p',
        html:
          'Das Abendessen nimmt man im alten Bistro oder, im Sommer, auf der Terrasse unter den Platanen ein. Die Küche bleibt lokal und unaufgeregt: Gemüse aus dem Küchengarten, Lamm aus den Alpilles, eine Weinkarte, die der südlichen Rhône endlich gerecht wird. Das Frühstück — Feigen, Honig, warme Fougasse — ist Grund genug für eine zweite Nacht. Lesen Sie unseren ausführlichen <a class="inline" href="/de/am-tisch/provence-table-guide/">Tafelführer für die Provence</a>.',
      },
      { type: 'h3', html: 'Anreise' },
      {
        type: 'p',
        html:
          'Crillon-le-Brave liegt vierzig Minuten vom TGV-Bahnhof Avignon und eine Welt von allem entfernt. Kommen Sie mit dem Auto; die Nebenstraßen durch Bédoin und die Weinberge sind die halbe Freude. Siehe auch unser <a class="inline" href="/de/provence/luberon-weekend/">Wochenende im Luberon</a>.',
      },
    ],
    verdictLabel: 'Das Urteil · En un mot',
    verdictText:
      '„Die Art Ort, die einem gewöhnliche Hotels sanft verdirbt. Kommen Sie für zwei Nächte; Sie werden sich wünschen, drei gebucht zu haben.“',
    pcardLabel: 'Die Adresse · L’adresse',
    pcardName: 'Hôtel Crillon le Brave',
    pcardRows: [
      { k: 'Anschrift', v: 'Place de l’Église, 84410 Crillon-le-Brave, Vaucluse' },
      { k: 'Telefon', v: '+33&nbsp;4&nbsp;90&nbsp;65&nbsp;61&nbsp;61' },
      { k: 'Website', v: '<a href="#">crillonlebrave·com</a>' },
      { k: 'Geöffnet', v: 'Mitte März bis Anfang Januar' },
    ],
    pcardCta: 'Verfügbarkeit prüfen',
    mapLabel: 'Crillon-le-Brave, Vaucluse',
    galleryLabel: 'Die Galerie · En images',
    gallery: [
      { img: G1, alt: 'Das Dorf im ersten Licht', wide: true },
      { img: G2, alt: 'Die gestuften Gassen des Dorfes' },
      { img: G3, alt: 'Ein Baum an einer alten Steinmauer' },
      { img: G4, alt: 'Der Garten in voller Blüte' },
      { img: G5, alt: 'Eine Dorfstraße in der Dämmerung' },
    ],
    nearbyLabel: 'In der Nähe · À proximité',
    nearbyHeading: 'Während Sie im <em>Vaucluse</em> sind',
    nearby: [
      { href: 'provence', img: N1, alt: 'Der Ockerpfad von Roussillon', rk: 'Spaziergang · 25 Min.', title: 'Der Ockerpfad von Roussillon', place: 'Roussillon · Vaucluse' },
      { href: 'provence', img: N2, alt: 'Domaine de Trévallon', rk: 'Wein · 40 Min.', title: 'Domaine de Trévallon', place: 'Saint-Étienne-du-Grès' },
      { href: 'provence', img: N3, alt: 'Der Sonntagsmarkt', rk: 'Markt · 30 Min.', title: 'L’Isle-sur-la-Sorgue', place: 'Antikmarkt am Sonntag' },
    ],
  },
  es: {
    title: 'Hôtel Crillon le Brave — The South of France',
    description:
      'Todo un pueblo del Vaucluse entretejido en un solo hotel rural por encima del Mont Ventoux — nuestra reseña, el veredicto, los datos prácticos y qué ver en los alrededores.',
    heroImg: HERO,
    heroAlt: 'Una casa de pueblo de Provenza bajo el cielo azul',
    crumb: ['provence', 'stays'],
    cat: 'Estancia · Hotel',
    h1: 'Hôtel Crillon le Brave',
    loc: 'Crillon-le-Brave · Vaucluse',
    stars: 5,
    facts: [
      { k: 'Tipo', v: 'Hotel rural' },
      { k: 'Mejor temporada', v: 'Mayo – octubre' },
      { k: 'Desde', v: '320 € / noche' },
      { k: 'Habitaciones', v: '34' },
      { k: 'Ideal para', v: 'Un fin de semana sin prisa' },
    ],
    bodyKicker: 'La reseña · Notre avis',
    bodyH2: 'Todo un pueblo convertido, con suavidad, en <em>hotel</em>.',
    body: [
      {
        type: 'p',
        lede: true,
        html:
          'Hay hoteles que ocupan un edificio, y luego está Crillon le Brave, que ocupa un pueblo. Dos docenas de casas en lo alto de una colina del Vaucluse, unidas por callejones escalonados y jardines amurallados, se han entretejido a lo largo de treinta años hasta formar una de las direcciones más discretamente seguras de Provenza. Uno no tanto se registra como se instala.',
      },
      {
        type: 'p',
        html:
          'Las habitaciones son lo que los franceses llaman <em>sobre</em> en el mejor sentido — paredes encaladas, ropa de cama antigua, unas pocas buenas piezas y nada que grite. Lo importante no es la habitación. Lo importante es la terraza más allá, y la vista sobre la llanura hasta el Mont Ventoux, que vira al rosa a las seis y al índigo a las nueve.',
      },
      { type: 'h3', html: 'La mesa' },
      {
        type: 'p',
        html:
          'La cena se toma en el viejo bistró o, en verano, en la terraza bajo los plátanos. La cocina se mantiene local y sin alardes: verduras del huerto, cordero de los Alpilles, una carta de vinos que por fin hace justicia al Ródano meridional. El desayuno — higos, miel, fougasse caliente — basta como razón para quedarse una segunda noche. Lea nuestra completa <a class="inline" href="/es/la-mesa/provence-table-guide/">guía de mesas de Provenza</a>.',
      },
      { type: 'h3', html: 'Cómo llegar' },
      {
        type: 'p',
        html:
          'Crillon-le-Brave está a cuarenta minutos de la estación TGV de Aviñón y a un mundo de distancia de todo. Venga en coche; las carreteras secundarias por Bédoin y los viñedos son la mitad del placer. Vea también nuestro <a class="inline" href="/es/provenza/luberon-weekend/">fin de semana en el Luberon</a>.',
      },
    ],
    verdictLabel: 'El veredicto · En un mot',
    verdictText:
      '«El tipo de lugar que te estropea, con suavidad, todos los hoteles corrientes. Venga para dos noches; lamentará no haber reservado tres.»',
    pcardLabel: 'La dirección · L’adresse',
    pcardName: 'Hôtel Crillon le Brave',
    pcardRows: [
      { k: 'Dirección', v: 'Place de l’Église, 84410 Crillon-le-Brave, Vaucluse' },
      { k: 'Teléfono', v: '+33&nbsp;4&nbsp;90&nbsp;65&nbsp;61&nbsp;61' },
      { k: 'Sitio web', v: '<a href="#">crillonlebrave·com</a>' },
      { k: 'Abierto', v: 'De mediados de marzo a principios de enero' },
    ],
    pcardCta: 'Consultar disponibilidad',
    mapLabel: 'Crillon-le-Brave, Vaucluse',
    galleryLabel: 'La galería · En images',
    gallery: [
      { img: G1, alt: 'El pueblo a las primeras luces', wide: true },
      { img: G2, alt: 'Los callejones escalonados del pueblo' },
      { img: G3, alt: 'Un árbol junto a un viejo muro de piedra' },
      { img: G4, alt: 'El jardín en flor' },
      { img: G5, alt: 'Una calle del pueblo al crepúsculo' },
    ],
    nearbyLabel: 'Cerca · À proximité',
    nearbyHeading: 'Mientras esté en el <em>Vaucluse</em>',
    nearby: [
      { href: 'provence', img: N1, alt: 'El sendero de los ocres de Roussillon', rk: 'Paseo · 25 min', title: 'El sendero de los ocres de Roussillon', place: 'Roussillon · Vaucluse' },
      { href: 'provence', img: N2, alt: 'Domaine de Trévallon', rk: 'Vino · 40 min', title: 'Domaine de Trévallon', place: 'Saint-Étienne-du-Grès' },
      { href: 'provence', img: N3, alt: 'El mercado del domingo', rk: 'Mercado · 30 min', title: 'L’Isle-sur-la-Sorgue', place: 'Mercado de antigüedades del domingo' },
    ],
  },
  },

  'la-colombe-d-or': {
  en: {
    title: 'La Colombe d’Or — The South of France',
    description:
      'A village inn on the Riviera hills where the walls hold Picassos and Mirós — our review, the verdict, the practical details and what to see nearby.',
    heroImg: HERO,
    heroAlt: 'A hillside village on the Riviera under blue sky',
    crumb: ['french-riviera', 'stays'],
    cat: 'Stay · Hotel',
    h1: 'La Colombe d’Or',
    loc: 'Saint-Paul-de-Vence · Alpes-Maritimes',
    stars: 4,
    facts: [
      { k: 'Type', v: 'Village inn' },
      { k: 'Best season', v: 'April – October' },
      { k: 'From', v: '€430 / night' },
      { k: 'Rooms', v: '25' },
      { k: 'Good for', v: 'Art lovers' },
    ],
    bodyKicker: 'The Review · Notre avis',
    bodyH2: 'The inn where the artists paid in <em>paintings</em>.',
    body: [
      {
        type: 'p',
        lede: true,
        html:
          'Some hotels hang prints in the corridor. At La Colombe d’Or a Léger faces you at breakfast and a Calder turns slowly above the pool. In the lean years between the wars the painters of the coast — Picasso, Miró, Braque — settled their bills with canvases, and the family never sold a single one. The result is a village inn with the wall-power of a small museum and the manners of a friend’s house.',
      },
      {
        type: 'p',
        html:
          'The rooms are few and deliberately plain: terracotta floors, white walls, shutters thrown open onto fig trees. You do not come for the marble bathroom. You come for the terrace, where the same families have eaten the same loup grillé under the same fig tree for three generations.',
      },
      { type: 'h3', html: 'The table' },
      {
        type: 'p',
        html:
          'Lunch is the thing — the famous hors-d’œuvre trolley, a glass of cold Bandol rosé, the long Provençal afternoon. Book the terrace and surrender the rest of the day. See our <a class="inline" href="/en/the-table/riviera-table-guide/">Riviera table guide</a>.',
      },
      { type: 'h3', html: 'Getting there' },
      {
        type: 'p',
        html:
          'Saint-Paul-de-Vence is twenty-five minutes inland from Nice, hung on its ridge above the orange groves. Come by car and arrive before noon, when the village is still its own. See also our <a class="inline" href="/en/french-riviera/riviera-in-three-days/">Riviera in three days</a>.',
      },
    ],
    verdictLabel: 'The verdict · En un mot',
    verdictText:
      '“A working museum where you are allowed to spend the night. Come for lunch; stay because you cannot bear to leave.”',
    pcardLabel: 'The Address · L’adresse',
    pcardName: 'La Colombe d’Or',
    pcardRows: [
      { k: 'Address', v: 'Place du Général de Gaulle, 06570 Saint-Paul-de-Vence' },
      { k: 'Website', v: '<a href="#">la-colombe-dor·com</a>' },
      { k: 'Open', v: 'Mid-December to late October' },
      { k: 'Reservations', v: 'Essential, well ahead' },
    ],
    pcardCta: 'Check availability',
    mapLabel: 'Saint-Paul-de-Vence, Alpes-Maritimes',
    galleryLabel: 'The Gallery · En images',
    gallery: [
      { img: G1, alt: 'The hill village at first light', wide: true },
      { img: G2, alt: 'A stepped lane in the old village' },
      { img: G3, alt: 'A fig tree by an old stone wall' },
      { img: G4, alt: 'The garden terrace' },
      { img: G5, alt: 'A village street at dusk' },
    ],
    nearbyLabel: 'Nearby · À proximité',
    nearbyHeading: 'While you are above <em>Nice</em>',
    nearby: [
      { href: 'french-riviera', img: N1, alt: 'Fondation Maeght', rk: 'Art · 10 min', title: 'Fondation Maeght', place: 'Saint-Paul-de-Vence' },
      { href: 'french-riviera', img: N2, alt: 'The Matisse Chapel', rk: 'Art · 15 min', title: 'Chapelle du Rosaire', place: 'Vence' },
      { href: 'french-riviera', img: N3, alt: 'The village ramparts', rk: 'Walk · 5 min', title: 'The ramparts walk', place: 'Saint-Paul-de-Vence' },
    ],
  },
  fr: {
    title: 'La Colombe d’Or — The South of France',
    description:
      'Une auberge de village sur les collines de la Riviera où les murs portent des Picasso et des Miró — notre avis, le verdict, les informations pratiques et que voir aux alentours.',
    heroImg: HERO,
    heroAlt: 'Un village perché de la Riviera sous le ciel bleu',
    crumb: ['french-riviera', 'stays'],
    cat: 'Séjour · Hôtel',
    h1: 'La Colombe d’Or',
    loc: 'Saint-Paul-de-Vence · Alpes-Maritimes',
    stars: 4,
    facts: [
      { k: 'Type', v: 'Auberge de village' },
      { k: 'Saison idéale', v: 'Avril – octobre' },
      { k: 'À partir de', v: '430 € / nuit' },
      { k: 'Chambres', v: '25' },
      { k: 'Idéal pour', v: 'Les amateurs d’art' },
    ],
    bodyKicker: 'Notre avis · The Review',
    bodyH2: 'L’auberge où les artistes payaient en <em>tableaux</em>.',
    body: [
      {
        type: 'p',
        lede: true,
        html:
          'Certains hôtels accrochent des reproductions dans le couloir. À La Colombe d’Or, un Léger vous fait face au petit-déjeuner et un Calder tourne lentement au-dessus de la piscine. Dans les années maigres de l’entre-deux-guerres, les peintres de la côte — Picasso, Miró, Braque — réglaient leur note en toiles, et la famille n’en a jamais vendu une seule. Il en résulte une auberge de village qui a la puissance murale d’un petit musée et les manières d’une maison d’ami.',
      },
      {
        type: 'p',
        html:
          'Les chambres sont peu nombreuses et volontairement simples : tomettes, murs blancs, volets ouverts sur les figuiers. On ne vient pas pour la salle de bains en marbre. On vient pour la terrasse, où les mêmes familles mangent le même loup grillé sous le même figuier depuis trois générations.',
      },
      { type: 'h3', html: 'La table' },
      {
        type: 'p',
        html:
          'Le déjeuner est l’essentiel — le fameux chariot de hors-d’œuvre, un verre de bandol rosé bien frais, le long après-midi provençal. Réservez la terrasse et abandonnez le reste de la journée. Voir notre <a class="inline" href="/fr/la-table/riviera-table-guide/">guide des tables de la Riviera</a>.',
      },
      { type: 'h3', html: 'Y aller' },
      {
        type: 'p',
        html:
          'Saint-Paul-de-Vence est à vingt-cinq minutes dans les terres au-dessus de Nice, accroché sur sa crête au-dessus des orangers. Venez en voiture et arrivez avant midi, quand le village est encore à lui seul. Voir aussi notre <a class="inline" href="/fr/cote-d-azur/riviera-in-three-days/">Riviera en trois jours</a>.',
      },
    ],
    verdictLabel: 'En un mot · The verdict',
    verdictText:
      '« Un musée vivant où l’on a le droit de passer la nuit. Venez déjeuner ; restez parce que vous ne pouvez plus partir. »',
    pcardLabel: 'L’adresse · The Address',
    pcardName: 'La Colombe d’Or',
    pcardRows: [
      { k: 'Adresse', v: 'Place du Général de Gaulle, 06570 Saint-Paul-de-Vence' },
      { k: 'Site web', v: '<a href="#">la-colombe-dor·com</a>' },
      { k: 'Ouverture', v: 'De mi-décembre à fin octobre' },
      { k: 'Réservation', v: 'Indispensable, bien à l’avance' },
    ],
    pcardCta: 'Vérifier les disponibilités',
    mapLabel: 'Saint-Paul-de-Vence, Alpes-Maritimes',
    galleryLabel: 'En images · The Gallery',
    gallery: [
      { img: G1, alt: 'Le village perché aux premières lueurs', wide: true },
      { img: G2, alt: 'Une ruelle en escalier du vieux village' },
      { img: G3, alt: 'Un figuier près d’un vieux mur de pierre' },
      { img: G4, alt: 'La terrasse du jardin' },
      { img: G5, alt: 'Une rue du village au crépuscule' },
    ],
    nearbyLabel: 'À proximité · Nearby',
    nearbyHeading: 'Pendant votre séjour au-dessus de <em>Nice</em>',
    nearby: [
      { href: 'french-riviera', img: N1, alt: 'Fondation Maeght', rk: 'Art · 10 min', title: 'Fondation Maeght', place: 'Saint-Paul-de-Vence' },
      { href: 'french-riviera', img: N2, alt: 'La chapelle Matisse', rk: 'Art · 15 min', title: 'Chapelle du Rosaire', place: 'Vence' },
      { href: 'french-riviera', img: N3, alt: 'Les remparts du village', rk: 'Balade · 5 min', title: 'Le chemin de ronde', place: 'Saint-Paul-de-Vence' },
    ],
  },
  it: {
    title: 'La Colombe d’Or — The South of France',
    description:
      'Una locanda di villaggio sulle colline della Riviera dove le pareti custodiscono Picasso e Miró — la nostra recensione, il verdetto, le informazioni pratiche e cosa vedere nei dintorni.',
    heroImg: HERO,
    heroAlt: 'Un villaggio arroccato della Riviera sotto il cielo azzurro',
    crumb: ['french-riviera', 'stays'],
    cat: 'Soggiorno · Hotel',
    h1: 'La Colombe d’Or',
    loc: 'Saint-Paul-de-Vence · Alpes-Maritimes',
    stars: 4,
    facts: [
      { k: 'Tipo', v: 'Locanda di villaggio' },
      { k: 'Stagione ideale', v: 'Aprile – ottobre' },
      { k: 'A partire da', v: '430 € / notte' },
      { k: 'Camere', v: '25' },
      { k: 'Ideale per', v: 'Gli amanti dell’arte' },
    ],
    bodyKicker: 'La recensione · Notre avis',
    bodyH2: 'La locanda dove gli artisti pagavano in <em>quadri</em>.',
    body: [
      {
        type: 'p',
        lede: true,
        html:
          'Certi hotel appendono stampe nel corridoio. Alla Colombe d’Or un Léger vi guarda a colazione e un Calder gira lentamente sopra la piscina. Negli anni magri tra le due guerre i pittori della costa — Picasso, Miró, Braque — saldavano il conto con le tele, e la famiglia non ne ha mai venduta una. Ne risulta una locanda di villaggio con la forza murale di un piccolo museo e i modi di una casa di amici.',
      },
      {
        type: 'p',
        html:
          'Le camere sono poche e volutamente semplici: pavimenti in cotto, pareti bianche, persiane aperte sui fichi. Non si viene per il bagno in marmo. Si viene per la terrazza, dove le stesse famiglie mangiano lo stesso loup grillé sotto lo stesso fico da tre generazioni.',
      },
      { type: 'h3', html: 'La tavola' },
      {
        type: 'p',
        html:
          'Il pranzo è la cosa — il celebre carrello degli antipasti, un bicchiere di bandol rosato ben freddo, il lungo pomeriggio provenzale. Prenotate la terrazza e abbandonate il resto della giornata. Vedete la nostra <a class="inline" href="/it/la-tavola/riviera-table-guide/">guida alle tavole della Riviera</a>.',
      },
      { type: 'h3', html: 'Come arrivare' },
      {
        type: 'p',
        html:
          'Saint-Paul-de-Vence è a venticinque minuti nell’entroterra sopra Nizza, sospesa sul suo crinale sopra gli aranceti. Venite in auto e arrivate prima di mezzogiorno, quando il villaggio è ancora se stesso. Vedete anche la nostra <a class="inline" href="/it/costa-azzurra/riviera-in-three-days/">Riviera in tre giorni</a>.',
      },
    ],
    verdictLabel: 'Il verdetto · En un mot',
    verdictText:
      '«Un museo vivo in cui vi è permesso passare la notte. Venite a pranzo; restate perché non riuscite ad andarvene.»',
    pcardLabel: 'L’indirizzo · L’adresse',
    pcardName: 'La Colombe d’Or',
    pcardRows: [
      { k: 'Indirizzo', v: 'Place du Général de Gaulle, 06570 Saint-Paul-de-Vence' },
      { k: 'Sito web', v: '<a href="#">la-colombe-dor·com</a>' },
      { k: 'Apertura', v: 'Da metà dicembre a fine ottobre' },
      { k: 'Prenotazione', v: 'Indispensabile, con largo anticipo' },
    ],
    pcardCta: 'Verifica disponibilità',
    mapLabel: 'Saint-Paul-de-Vence, Alpes-Maritimes',
    galleryLabel: 'La galleria · En images',
    gallery: [
      { img: G1, alt: 'Il villaggio arroccato alle prime luci', wide: true },
      { img: G2, alt: 'Una viuzza a gradini del vecchio villaggio' },
      { img: G3, alt: 'Un fico accanto a un vecchio muro di pietra' },
      { img: G4, alt: 'La terrazza del giardino' },
      { img: G5, alt: 'Una via del villaggio al crepuscolo' },
    ],
    nearbyLabel: 'Nei dintorni · À proximité',
    nearbyHeading: 'Mentre siete sopra <em>Nizza</em>',
    nearby: [
      { href: 'french-riviera', img: N1, alt: 'Fondation Maeght', rk: 'Arte · 10 min', title: 'Fondation Maeght', place: 'Saint-Paul-de-Vence' },
      { href: 'french-riviera', img: N2, alt: 'La cappella di Matisse', rk: 'Arte · 15 min', title: 'Chapelle du Rosaire', place: 'Vence' },
      { href: 'french-riviera', img: N3, alt: 'I bastioni del villaggio', rk: 'Passeggiata · 5 min', title: 'Il cammino di ronda', place: 'Saint-Paul-de-Vence' },
    ],
  },
  de: {
    title: 'La Colombe d’Or — The South of France',
    description:
      'Ein Dorfgasthof in den Hügeln der Riviera, dessen Wände Picassos und Mirós tragen — unsere Rezension, das Urteil, die praktischen Angaben und was es in der Nähe zu sehen gibt.',
    heroImg: HERO,
    heroAlt: 'Ein Bergdorf der Riviera unter blauem Himmel',
    crumb: ['french-riviera', 'stays'],
    cat: 'Aufenthalt · Hotel',
    h1: 'La Colombe d’Or',
    loc: 'Saint-Paul-de-Vence · Alpes-Maritimes',
    stars: 4,
    facts: [
      { k: 'Art', v: 'Dorfgasthof' },
      { k: 'Beste Saison', v: 'April – Oktober' },
      { k: 'Ab', v: '430 € / Nacht' },
      { k: 'Zimmer', v: '25' },
      { k: 'Ideal für', v: 'Kunstliebhaber' },
    ],
    bodyKicker: 'Die Rezension · Notre avis',
    bodyH2: 'Der Gasthof, in dem die Künstler in <em>Bildern</em> bezahlten.',
    body: [
      {
        type: 'p',
        lede: true,
        html:
          'Manche Hotels hängen Drucke in den Flur. In der Colombe d’Or sieht Sie ein Léger beim Frühstück an, und ein Calder dreht sich langsam über dem Pool. In den mageren Jahren zwischen den Kriegen beglichen die Maler der Küste — Picasso, Miró, Braque — ihre Rechnung mit Leinwänden, und die Familie hat keine einzige verkauft. Das Ergebnis ist ein Dorfgasthof mit der Wandkraft eines kleinen Museums und den Manieren eines Freundeshauses.',
      },
      {
        type: 'p',
        html:
          'Die Zimmer sind wenige und bewusst schlicht: Terrakottaböden, weiße Wände, Läden geöffnet zu den Feigenbäumen. Man kommt nicht für das Marmorbad. Man kommt für die Terrasse, wo dieselben Familien seit drei Generationen denselben loup grillé unter demselben Feigenbaum essen.',
      },
      { type: 'h3', html: 'Der Tisch' },
      {
        type: 'p',
        html:
          'Das Mittagessen ist die Sache — der berühmte Vorspeisenwagen, ein Glas gut gekühlter Bandol-Rosé, der lange provenzalische Nachmittag. Reservieren Sie die Terrasse und geben Sie den Rest des Tages auf. Siehe unseren <a class="inline" href="/de/am-tisch/riviera-table-guide/">Tafelführer der Riviera</a>.',
      },
      { type: 'h3', html: 'Anreise' },
      {
        type: 'p',
        html:
          'Saint-Paul-de-Vence liegt fünfundzwanzig Minuten im Hinterland über Nizza, auf seinem Grat über den Orangenhainen. Kommen Sie mit dem Auto und treffen Sie vor Mittag ein, wenn das Dorf noch sich selbst gehört. Siehe auch unsere <a class="inline" href="/de/cote-d-azur/riviera-in-three-days/">Riviera in drei Tagen</a>.',
      },
    ],
    verdictLabel: 'Das Urteil · En un mot',
    verdictText:
      '„Ein lebendiges Museum, in dem man übernachten darf. Kommen Sie zum Mittagessen; bleiben Sie, weil Sie nicht gehen können.“',
    pcardLabel: 'Die Adresse · L’adresse',
    pcardName: 'La Colombe d’Or',
    pcardRows: [
      { k: 'Anschrift', v: 'Place du Général de Gaulle, 06570 Saint-Paul-de-Vence' },
      { k: 'Website', v: '<a href="#">la-colombe-dor·com</a>' },
      { k: 'Geöffnet', v: 'Mitte Dezember bis Ende Oktober' },
      { k: 'Reservierung', v: 'Unerlässlich, weit im Voraus' },
    ],
    pcardCta: 'Verfügbarkeit prüfen',
    mapLabel: 'Saint-Paul-de-Vence, Alpes-Maritimes',
    galleryLabel: 'Die Galerie · En images',
    gallery: [
      { img: G1, alt: 'Das Bergdorf im ersten Licht', wide: true },
      { img: G2, alt: 'Eine gestufte Gasse im alten Dorf' },
      { img: G3, alt: 'Ein Feigenbaum an einer alten Steinmauer' },
      { img: G4, alt: 'Die Gartenterrasse' },
      { img: G5, alt: 'Eine Dorfstraße in der Dämmerung' },
    ],
    nearbyLabel: 'In der Nähe · À proximité',
    nearbyHeading: 'Während Sie über <em>Nizza</em> sind',
    nearby: [
      { href: 'french-riviera', img: N1, alt: 'Fondation Maeght', rk: 'Kunst · 10 Min.', title: 'Fondation Maeght', place: 'Saint-Paul-de-Vence' },
      { href: 'french-riviera', img: N2, alt: 'Die Matisse-Kapelle', rk: 'Kunst · 15 Min.', title: 'Chapelle du Rosaire', place: 'Vence' },
      { href: 'french-riviera', img: N3, alt: 'Die Dorfmauern', rk: 'Spaziergang · 5 Min.', title: 'Der Wehrgang', place: 'Saint-Paul-de-Vence' },
    ],
  },
  es: {
    title: 'La Colombe d’Or — The South of France',
    description:
      'Una posada de pueblo en las colinas de la Riviera donde las paredes guardan Picassos y Mirós — nuestra reseña, el veredicto, los datos prácticos y qué ver en los alrededores.',
    heroImg: HERO,
    heroAlt: 'Un pueblo encaramado de la Riviera bajo el cielo azul',
    crumb: ['french-riviera', 'stays'],
    cat: 'Estancia · Hotel',
    h1: 'La Colombe d’Or',
    loc: 'Saint-Paul-de-Vence · Alpes-Maritimes',
    stars: 4,
    facts: [
      { k: 'Tipo', v: 'Posada de pueblo' },
      { k: 'Mejor temporada', v: 'Abril – octubre' },
      { k: 'Desde', v: '430 € / noche' },
      { k: 'Habitaciones', v: '25' },
      { k: 'Ideal para', v: 'Amantes del arte' },
    ],
    bodyKicker: 'La reseña · Notre avis',
    bodyH2: 'La posada donde los artistas pagaban en <em>cuadros</em>.',
    body: [
      {
        type: 'p',
        lede: true,
        html:
          'Algunos hoteles cuelgan láminas en el pasillo. En La Colombe d’Or un Léger te mira durante el desayuno y un Calder gira despacio sobre la piscina. En los años flacos de entreguerras, los pintores de la costa — Picasso, Miró, Braque — saldaban su cuenta con lienzos, y la familia nunca vendió ni uno. El resultado es una posada de pueblo con la fuerza mural de un pequeño museo y los modales de la casa de un amigo.',
      },
      {
        type: 'p',
        html:
          'Las habitaciones son pocas y deliberadamente sencillas: suelos de barro, paredes blancas, contraventanas abiertas a las higueras. No se viene por el baño de mármol. Se viene por la terraza, donde las mismas familias comen el mismo loup grillé bajo la misma higuera desde hace tres generaciones.',
      },
      { type: 'h3', html: 'La mesa' },
      {
        type: 'p',
        html:
          'El almuerzo es lo importante — el famoso carrito de entremeses, una copa de bandol rosado bien frío, la larga tarde provenzal. Reserve la terraza y entregue el resto del día. Vea nuestra <a class="inline" href="/es/la-mesa/riviera-table-guide/">guía de mesas de la Riviera</a>.',
      },
      { type: 'h3', html: 'Cómo llegar' },
      {
        type: 'p',
        html:
          'Saint-Paul-de-Vence está a veinticinco minutos tierra adentro sobre Niza, colgada en su cresta por encima de los naranjos. Venga en coche y llegue antes del mediodía, cuando el pueblo aún es suyo. Vea también nuestra <a class="inline" href="/es/costa-azul/riviera-in-three-days/">Riviera en tres días</a>.',
      },
    ],
    verdictLabel: 'El veredicto · En un mot',
    verdictText:
      '«Un museo vivo donde se permite pasar la noche. Venga a almorzar; quédese porque no puede marcharse.»',
    pcardLabel: 'La dirección · L’adresse',
    pcardName: 'La Colombe d’Or',
    pcardRows: [
      { k: 'Dirección', v: 'Place du Général de Gaulle, 06570 Saint-Paul-de-Vence' },
      { k: 'Sitio web', v: '<a href="#">la-colombe-dor·com</a>' },
      { k: 'Abierto', v: 'De mediados de diciembre a finales de octubre' },
      { k: 'Reserva', v: 'Imprescindible, con mucha antelación' },
    ],
    pcardCta: 'Consultar disponibilidad',
    mapLabel: 'Saint-Paul-de-Vence, Alpes-Maritimes',
    galleryLabel: 'La galería · En images',
    gallery: [
      { img: G1, alt: 'El pueblo encaramado a las primeras luces', wide: true },
      { img: G2, alt: 'Un callejón escalonado del viejo pueblo' },
      { img: G3, alt: 'Una higuera junto a un viejo muro de piedra' },
      { img: G4, alt: 'La terraza del jardín' },
      { img: G5, alt: 'Una calle del pueblo al crepúsculo' },
    ],
    nearbyLabel: 'Cerca · À proximité',
    nearbyHeading: 'Mientras esté por encima de <em>Niza</em>',
    nearby: [
      { href: 'french-riviera', img: N1, alt: 'Fondation Maeght', rk: 'Arte · 10 min', title: 'Fondation Maeght', place: 'Saint-Paul-de-Vence' },
      { href: 'french-riviera', img: N2, alt: 'La capilla de Matisse', rk: 'Arte · 15 min', title: 'Chapelle du Rosaire', place: 'Vence' },
      { href: 'french-riviera', img: N3, alt: 'Las murallas del pueblo', rk: 'Paseo · 5 min', title: 'El camino de ronda', place: 'Saint-Paul-de-Vence' },
    ],
  },
  },

  'oustau-de-baumaniere': {
  en: {
    title: 'L’Oustau de Baumanière — The South of France',
    description:
      'A legendary table in a rock valley below Les Baux, where Provence has been cooked at the highest level for seventy years — our review, the verdict and what to see nearby.',
    heroImg: HERO,
    heroAlt: 'A stone valley beneath the village of Les Baux',
    crumb: ['provence', 'the-table'],
    cat: 'Table · Restaurant',
    h1: 'L’Oustau de Baumanière',
    loc: 'Les Baux-de-Provence · Bouches-du-Rhône',
    stars: 3,
    facts: [
      { k: 'Type', v: 'Gastronomic' },
      { k: 'Best season', v: 'April – October' },
      { k: 'Menu from', v: '€220' },
      { k: 'Covers', v: 'Around 60' },
      { k: 'Good for', v: 'A long lunch' },
    ],
    bodyKicker: 'The Review · Notre avis',
    bodyH2: 'Provence cooked at the <em>summit</em>, under the rocks of Les Baux.',
    body: [
      {
        type: 'p',
        lede: true,
        html:
          'At the foot of the bone-white cliffs that hold Les Baux, in the green hollow the locals call the Val d’Enfer, sits one of the great tables of the south. Founded by Raymond Thuilier in 1945 and now in the hands of Glenn Viel, the Oustau has carried Provence to the top of French cooking for three generations — and, remarkably, still feels like a farmhouse where someone happens to cook very, very well.',
      },
      {
        type: 'p',
        html:
          'The kitchen reads its own garden first. Vegetables an hour out of the soil, olive oil from the valley, lamb from the Alpilles, herbs you can smell from the terrace. It is precise, modern, occasionally playful — but never forgets that it stands in Provence and answers to it.',
      },
      { type: 'h3', html: 'The setting' },
      {
        type: 'p',
        html:
          'Lunch on the terrace, under the planes and the cliff, is the version to book. There are rooms, too, scattered across the estate, if one bottle leads to another. Read our full <a class="inline" href="/en/the-table/provence-table-guide/">Provence table guide</a>.',
      },
      { type: 'h3', html: 'Getting there' },
      {
        type: 'p',
        html:
          'The valley is twenty minutes from Saint-Rémy-de-Provence and forty from Avignon TGV. Come by car, and walk up to the dead village of Les Baux before you eat. See also our <a class="inline" href="/en/provence/alpilles-weekend/">weekend in the Alpilles</a>.',
      },
    ],
    verdictLabel: 'The verdict · En un mot',
    verdictText:
      '“A monument that never turned cold. Book lunch on the terrace and give the afternoon to it; nothing else will measure up that day.”',
    pcardLabel: 'The Address · L’adresse',
    pcardName: 'L’Oustau de Baumanière',
    pcardRows: [
      { k: 'Address', v: 'Mas de Baumanière, 13520 Les Baux-de-Provence' },
      { k: 'Website', v: '<a href="#">baumaniere·com</a>' },
      { k: 'Open', v: 'Closed in winter; lunch & dinner' },
      { k: 'Reservations', v: 'Essential, well ahead' },
    ],
    pcardCta: 'Book a table',
    mapLabel: 'Les Baux-de-Provence, Bouches-du-Rhône',
    galleryLabel: 'The Gallery · En images',
    gallery: [
      { img: G1, alt: 'The valley at first light', wide: true },
      { img: G2, alt: 'The white cliffs of Les Baux' },
      { img: G3, alt: 'An olive tree by a stone wall' },
      { img: G4, alt: 'The garden in bloom' },
      { img: G5, alt: 'The terrace at dusk' },
    ],
    nearbyLabel: 'Nearby · À proximité',
    nearbyHeading: 'While you are in the <em>Alpilles</em>',
    nearby: [
      { href: 'provence', img: N1, alt: 'Carrières des Lumières', rk: 'Art · 5 min', title: 'Carrières des Lumières', place: 'Les Baux-de-Provence' },
      { href: 'provence', img: N2, alt: 'Glanum', rk: 'Ruins · 20 min', title: 'The ruins of Glanum', place: 'Saint-Rémy-de-Provence' },
      { href: 'provence', img: N3, alt: 'The Saturday market', rk: 'Market · 20 min', title: 'Saint-Rémy-de-Provence', place: 'Saturday market' },
    ],
  },
  fr: {
    title: 'L’Oustau de Baumanière — The South of France',
    description:
      'Une table légendaire dans un vallon de roche sous Les Baux, où la Provence se cuisine au plus haut niveau depuis soixante-dix ans — notre avis, le verdict et que voir aux alentours.',
    heroImg: HERO,
    heroAlt: 'Un vallon de pierre sous le village des Baux',
    crumb: ['provence', 'the-table'],
    cat: 'Table · Restaurant',
    h1: 'L’Oustau de Baumanière',
    loc: 'Les Baux-de-Provence · Bouches-du-Rhône',
    stars: 3,
    facts: [
      { k: 'Type', v: 'Gastronomique' },
      { k: 'Saison idéale', v: 'Avril – octobre' },
      { k: 'Menu à partir de', v: '220 €' },
      { k: 'Couverts', v: 'Une soixantaine' },
      { k: 'Idéal pour', v: 'Un long déjeuner' },
    ],
    bodyKicker: 'Notre avis · The Review',
    bodyH2: 'La Provence cuisinée au <em>sommet</em>, sous les rochers des Baux.',
    body: [
      {
        type: 'p',
        lede: true,
        html:
          'Au pied des falaises d’un blanc d’os qui portent Les Baux, dans le creux vert que l’on appelle ici le Val d’Enfer, se tient l’une des grandes tables du Sud. Fondé par Raymond Thuilier en 1945 et aujourd’hui entre les mains de Glenn Viel, l’Oustau porte la Provence au sommet de la cuisine française depuis trois générations — et, chose remarquable, garde encore l’air d’un mas où quelqu’un se trouve cuisiner très, très bien.',
      },
      {
        type: 'p',
        html:
          'La cuisine lit d’abord son propre jardin. Légumes sortis de terre depuis une heure, huile d’olive du vallon, agneau des Alpilles, herbes que l’on sent depuis la terrasse. C’est précis, moderne, parfois joueur — mais cela n’oublie jamais qu’il se tient en Provence et lui répond.',
      },
      { type: 'h3', html: 'Le cadre' },
      {
        type: 'p',
        html:
          'Le déjeuner sur la terrasse, sous les platanes et la falaise, est la version à réserver. Il y a aussi des chambres, dispersées dans le domaine, si une bouteille en appelle une autre. Lisez notre <a class="inline" href="/fr/la-table/provence-table-guide/">guide des tables de Provence</a>.',
      },
      { type: 'h3', html: 'Y aller' },
      {
        type: 'p',
        html:
          'Le vallon est à vingt minutes de Saint-Rémy-de-Provence et à quarante de la gare TGV d’Avignon. Venez en voiture, et montez au village mort des Baux avant de passer à table. Voir aussi notre <a class="inline" href="/fr/provence/alpilles-weekend/">week-end dans les Alpilles</a>.',
      },
    ],
    verdictLabel: 'En un mot · The verdict',
    verdictText:
      '« Un monument qui n’a jamais refroidi. Réservez le déjeuner sur la terrasse et donnez-lui l’après-midi ; rien d’autre ne tiendra la comparaison ce jour-là. »',
    pcardLabel: 'L’adresse · The Address',
    pcardName: 'L’Oustau de Baumanière',
    pcardRows: [
      { k: 'Adresse', v: 'Mas de Baumanière, 13520 Les Baux-de-Provence' },
      { k: 'Site web', v: '<a href="#">baumaniere·com</a>' },
      { k: 'Ouverture', v: 'Fermé l’hiver ; déjeuner & dîner' },
      { k: 'Réservation', v: 'Indispensable, bien à l’avance' },
    ],
    pcardCta: 'Réserver une table',
    mapLabel: 'Les Baux-de-Provence, Bouches-du-Rhône',
    galleryLabel: 'En images · The Gallery',
    gallery: [
      { img: G1, alt: 'Le vallon aux premières lueurs', wide: true },
      { img: G2, alt: 'Les falaises blanches des Baux' },
      { img: G3, alt: 'Un olivier près d’un mur de pierre' },
      { img: G4, alt: 'Le jardin en fleurs' },
      { img: G5, alt: 'La terrasse au crépuscule' },
    ],
    nearbyLabel: 'À proximité · Nearby',
    nearbyHeading: 'Pendant votre séjour dans les <em>Alpilles</em>',
    nearby: [
      { href: 'provence', img: N1, alt: 'Carrières des Lumières', rk: 'Art · 5 min', title: 'Carrières des Lumières', place: 'Les Baux-de-Provence' },
      { href: 'provence', img: N2, alt: 'Glanum', rk: 'Ruines · 20 min', title: 'Les ruines de Glanum', place: 'Saint-Rémy-de-Provence' },
      { href: 'provence', img: N3, alt: 'Le marché du samedi', rk: 'Marché · 20 min', title: 'Saint-Rémy-de-Provence', place: 'Marché du samedi' },
    ],
  },
  it: {
    title: 'L’Oustau de Baumanière — The South of France',
    description:
      'Una tavola leggendaria in un vallone di roccia sotto Les Baux, dove la Provenza si cucina al massimo livello da settant’anni — la nostra recensione, il verdetto e cosa vedere nei dintorni.',
    heroImg: HERO,
    heroAlt: 'Un vallone di pietra sotto il villaggio di Les Baux',
    crumb: ['provence', 'the-table'],
    cat: 'Tavola · Ristorante',
    h1: 'L’Oustau de Baumanière',
    loc: 'Les Baux-de-Provence · Bouches-du-Rhône',
    stars: 3,
    facts: [
      { k: 'Tipo', v: 'Gastronomico' },
      { k: 'Stagione ideale', v: 'Aprile – ottobre' },
      { k: 'Menu da', v: '220 €' },
      { k: 'Coperti', v: 'Una sessantina' },
      { k: 'Ideale per', v: 'Un lungo pranzo' },
    ],
    bodyKicker: 'La recensione · Notre avis',
    bodyH2: 'La Provenza cucinata al <em>vertice</em>, sotto le rocce di Les Baux.',
    body: [
      {
        type: 'p',
        lede: true,
        html:
          'Ai piedi delle falesie bianche come l’osso che reggono Les Baux, nella conca verde che qui chiamano Val d’Enfer, si trova una delle grandi tavole del Sud. Fondato da Raymond Thuilier nel 1945 e oggi nelle mani di Glenn Viel, l’Oustau porta la Provenza al vertice della cucina francese da tre generazioni — e, cosa notevole, conserva ancora l’aria di un casale dove qualcuno per caso cucina molto, molto bene.',
      },
      {
        type: 'p',
        html:
          'La cucina legge prima il proprio orto. Verdure uscite dalla terra da un’ora, olio d’oliva del vallone, agnello delle Alpilles, erbe che si sentono dalla terrazza. È precisa, moderna, a volte giocosa — ma non dimentica mai di trovarsi in Provenza e di risponderle.',
      },
      { type: 'h3', html: 'La cornice' },
      {
        type: 'p',
        html:
          'Il pranzo sulla terrazza, sotto i platani e la falesia, è la versione da prenotare. Ci sono anche camere, sparse nella tenuta, se una bottiglia ne richiama un’altra. Leggete la nostra <a class="inline" href="/it/la-tavola/provence-table-guide/">guida alle tavole di Provenza</a>.',
      },
      { type: 'h3', html: 'Come arrivare' },
      {
        type: 'p',
        html:
          'Il vallone è a venti minuti da Saint-Rémy-de-Provence e a quaranta dalla stazione TGV di Avignone. Venite in auto e salite al villaggio morto di Les Baux prima di mettervi a tavola. Vedete anche il nostro <a class="inline" href="/it/provenza/alpilles-weekend/">fine settimana nelle Alpilles</a>.',
      },
    ],
    verdictLabel: 'Il verdetto · En un mot',
    verdictText:
      '«Un monumento che non si è mai raffreddato. Prenotate il pranzo sulla terrazza e dedicategli il pomeriggio; nient’altro reggerà il confronto quel giorno.»',
    pcardLabel: 'L’indirizzo · L’adresse',
    pcardName: 'L’Oustau de Baumanière',
    pcardRows: [
      { k: 'Indirizzo', v: 'Mas de Baumanière, 13520 Les Baux-de-Provence' },
      { k: 'Sito web', v: '<a href="#">baumaniere·com</a>' },
      { k: 'Apertura', v: 'Chiuso d’inverno; pranzo e cena' },
      { k: 'Prenotazione', v: 'Indispensabile, con largo anticipo' },
    ],
    pcardCta: 'Prenota un tavolo',
    mapLabel: 'Les Baux-de-Provence, Bouches-du-Rhône',
    galleryLabel: 'La galleria · En images',
    gallery: [
      { img: G1, alt: 'Il vallone alle prime luci', wide: true },
      { img: G2, alt: 'Le falesie bianche di Les Baux' },
      { img: G3, alt: 'Un ulivo accanto a un muro di pietra' },
      { img: G4, alt: 'Il giardino in fiore' },
      { img: G5, alt: 'La terrazza al crepuscolo' },
    ],
    nearbyLabel: 'Nei dintorni · À proximité',
    nearbyHeading: 'Mentre siete nelle <em>Alpilles</em>',
    nearby: [
      { href: 'provence', img: N1, alt: 'Carrières des Lumières', rk: 'Arte · 5 min', title: 'Carrières des Lumières', place: 'Les Baux-de-Provence' },
      { href: 'provence', img: N2, alt: 'Glanum', rk: 'Rovine · 20 min', title: 'Le rovine di Glanum', place: 'Saint-Rémy-de-Provence' },
      { href: 'provence', img: N3, alt: 'Il mercato del sabato', rk: 'Mercato · 20 min', title: 'Saint-Rémy-de-Provence', place: 'Mercato del sabato' },
    ],
  },
  de: {
    title: 'L’Oustau de Baumanière — The South of France',
    description:
      'Eine legendäre Tafel in einem Felstal unterhalb von Les Baux, wo die Provence seit siebzig Jahren auf höchstem Niveau gekocht wird — unsere Rezension, das Urteil und was es in der Nähe zu sehen gibt.',
    heroImg: HERO,
    heroAlt: 'Ein Steintal unterhalb des Dorfes Les Baux',
    crumb: ['provence', 'the-table'],
    cat: 'Tafel · Restaurant',
    h1: 'L’Oustau de Baumanière',
    loc: 'Les Baux-de-Provence · Bouches-du-Rhône',
    stars: 3,
    facts: [
      { k: 'Art', v: 'Gastronomisch' },
      { k: 'Beste Saison', v: 'April – Oktober' },
      { k: 'Menü ab', v: '220 €' },
      { k: 'Gedecke', v: 'Etwa 60' },
      { k: 'Ideal für', v: 'Ein langes Mittagessen' },
    ],
    bodyKicker: 'Die Rezension · Notre avis',
    bodyH2: 'Die Provence auf dem <em>Gipfel</em> gekocht, unter den Felsen von Les Baux.',
    body: [
      {
        type: 'p',
        lede: true,
        html:
          'Am Fuß der knochenweißen Felswände, die Les Baux tragen, in der grünen Mulde, die man hier Val d’Enfer nennt, liegt eine der großen Tafeln des Südens. 1945 von Raymond Thuilier gegründet und heute in den Händen von Glenn Viel, trägt das Oustau die Provence seit drei Generationen an die Spitze der französischen Küche — und wirkt erstaunlicherweise noch immer wie ein Gehöft, in dem jemand zufällig sehr, sehr gut kocht.',
      },
      {
        type: 'p',
        html:
          'Die Küche liest zuerst ihren eigenen Garten. Gemüse, das seit einer Stunde aus der Erde ist, Olivenöl aus dem Tal, Lamm aus den Alpilles, Kräuter, die man von der Terrasse riecht. Es ist präzise, modern, gelegentlich verspielt — vergisst aber nie, dass es in der Provence steht und ihr antwortet.',
      },
      { type: 'h3', html: 'Der Rahmen' },
      {
        type: 'p',
        html:
          'Das Mittagessen auf der Terrasse, unter den Platanen und der Felswand, ist die Version, die man buchen sollte. Es gibt auch Zimmer, über das Anwesen verstreut, falls eine Flasche die nächste ruft. Lesen Sie unseren <a class="inline" href="/de/am-tisch/provence-table-guide/">Tafelführer für die Provence</a>.',
      },
      { type: 'h3', html: 'Anreise' },
      {
        type: 'p',
        html:
          'Das Tal liegt zwanzig Minuten von Saint-Rémy-de-Provence und vierzig vom TGV-Bahnhof Avignon. Kommen Sie mit dem Auto und steigen Sie zum toten Dorf Les Baux hinauf, bevor Sie sich zu Tisch setzen. Siehe auch unser <a class="inline" href="/de/provence/alpilles-weekend/">Wochenende in den Alpilles</a>.',
      },
    ],
    verdictLabel: 'Das Urteil · En un mot',
    verdictText:
      '„Ein Monument, das nie kalt wurde. Buchen Sie das Mittagessen auf der Terrasse und geben Sie ihm den Nachmittag; nichts anderes hält an diesem Tag mit.“',
    pcardLabel: 'Die Adresse · L’adresse',
    pcardName: 'L’Oustau de Baumanière',
    pcardRows: [
      { k: 'Anschrift', v: 'Mas de Baumanière, 13520 Les Baux-de-Provence' },
      { k: 'Website', v: '<a href="#">baumaniere·com</a>' },
      { k: 'Geöffnet', v: 'Im Winter geschlossen; Mittag & Abend' },
      { k: 'Reservierung', v: 'Unerlässlich, weit im Voraus' },
    ],
    pcardCta: 'Tisch reservieren',
    mapLabel: 'Les Baux-de-Provence, Bouches-du-Rhône',
    galleryLabel: 'Die Galerie · En images',
    gallery: [
      { img: G1, alt: 'Das Tal im ersten Licht', wide: true },
      { img: G2, alt: 'Die weißen Felsen von Les Baux' },
      { img: G3, alt: 'Ein Olivenbaum an einer Steinmauer' },
      { img: G4, alt: 'Der Garten in voller Blüte' },
      { img: G5, alt: 'Die Terrasse in der Dämmerung' },
    ],
    nearbyLabel: 'In der Nähe · À proximité',
    nearbyHeading: 'Während Sie in den <em>Alpilles</em> sind',
    nearby: [
      { href: 'provence', img: N1, alt: 'Carrières des Lumières', rk: 'Kunst · 5 Min.', title: 'Carrières des Lumières', place: 'Les Baux-de-Provence' },
      { href: 'provence', img: N2, alt: 'Glanum', rk: 'Ruinen · 20 Min.', title: 'Die Ruinen von Glanum', place: 'Saint-Rémy-de-Provence' },
      { href: 'provence', img: N3, alt: 'Der Samstagsmarkt', rk: 'Markt · 20 Min.', title: 'Saint-Rémy-de-Provence', place: 'Samstagsmarkt' },
    ],
  },
  es: {
    title: 'L’Oustau de Baumanière — The South of France',
    description:
      'Una mesa legendaria en un valle de roca bajo Les Baux, donde la Provenza se cocina al más alto nivel desde hace setenta años — nuestra reseña, el veredicto y qué ver en los alrededores.',
    heroImg: HERO,
    heroAlt: 'Un valle de piedra bajo el pueblo de Les Baux',
    crumb: ['provence', 'the-table'],
    cat: 'Mesa · Restaurante',
    h1: 'L’Oustau de Baumanière',
    loc: 'Les Baux-de-Provence · Bouches-du-Rhône',
    stars: 3,
    facts: [
      { k: 'Tipo', v: 'Gastronómico' },
      { k: 'Mejor temporada', v: 'Abril – octubre' },
      { k: 'Menú desde', v: '220 €' },
      { k: 'Cubiertos', v: 'Unos 60' },
      { k: 'Ideal para', v: 'Un almuerzo largo' },
    ],
    bodyKicker: 'La reseña · Notre avis',
    bodyH2: 'La Provenza cocinada en la <em>cumbre</em>, bajo las rocas de Les Baux.',
    body: [
      {
        type: 'p',
        lede: true,
        html:
          'Al pie de los acantilados blancos como el hueso que sostienen Les Baux, en la hondonada verde que aquí llaman Val d’Enfer, se encuentra una de las grandes mesas del Sur. Fundado por Raymond Thuilier en 1945 y hoy en manos de Glenn Viel, el Oustau lleva la Provenza a la cima de la cocina francesa desde hace tres generaciones — y, sorprendentemente, todavía tiene el aire de un caserío donde alguien resulta cocinar muy, muy bien.',
      },
      {
        type: 'p',
        html:
          'La cocina lee primero su propio huerto. Verduras salidas de la tierra hace una hora, aceite de oliva del valle, cordero de los Alpilles, hierbas que se huelen desde la terraza. Es precisa, moderna, a veces juguetona — pero nunca olvida que está en Provenza y le responde.',
      },
      { type: 'h3', html: 'El marco' },
      {
        type: 'p',
        html:
          'El almuerzo en la terraza, bajo los plátanos y el acantilado, es la versión que conviene reservar. También hay habitaciones, repartidas por la finca, si una botella llama a otra. Lea nuestra <a class="inline" href="/es/la-mesa/provence-table-guide/">guía de mesas de Provenza</a>.',
      },
      { type: 'h3', html: 'Cómo llegar' },
      {
        type: 'p',
        html:
          'El valle está a veinte minutos de Saint-Rémy-de-Provence y a cuarenta de la estación TGV de Aviñón. Venga en coche y suba al pueblo muerto de Les Baux antes de sentarse a la mesa. Vea también nuestro <a class="inline" href="/es/provenza/alpilles-weekend/">fin de semana en los Alpilles</a>.',
      },
    ],
    verdictLabel: 'El veredicto · En un mot',
    verdictText:
      '«Un monumento que nunca se enfrió. Reserve el almuerzo en la terraza y entréguele la tarde; nada más estará a la altura ese día.»',
    pcardLabel: 'La dirección · L’adresse',
    pcardName: 'L’Oustau de Baumanière',
    pcardRows: [
      { k: 'Dirección', v: 'Mas de Baumanière, 13520 Les Baux-de-Provence' },
      { k: 'Sitio web', v: '<a href="#">baumaniere·com</a>' },
      { k: 'Abierto', v: 'Cerrado en invierno; almuerzo y cena' },
      { k: 'Reserva', v: 'Imprescindible, con mucha antelación' },
    ],
    pcardCta: 'Reservar una mesa',
    mapLabel: 'Les Baux-de-Provence, Bouches-du-Rhône',
    galleryLabel: 'La galería · En images',
    gallery: [
      { img: G1, alt: 'El valle a las primeras luces', wide: true },
      { img: G2, alt: 'Los acantilados blancos de Les Baux' },
      { img: G3, alt: 'Un olivo junto a un muro de piedra' },
      { img: G4, alt: 'El jardín en flor' },
      { img: G5, alt: 'La terraza al crepúsculo' },
    ],
    nearbyLabel: 'Cerca · À proximité',
    nearbyHeading: 'Mientras esté en los <em>Alpilles</em>',
    nearby: [
      { href: 'provence', img: N1, alt: 'Carrières des Lumières', rk: 'Arte · 5 min', title: 'Carrières des Lumières', place: 'Les Baux-de-Provence' },
      { href: 'provence', img: N2, alt: 'Glanum', rk: 'Ruinas · 20 min', title: 'Las ruinas de Glanum', place: 'Saint-Rémy-de-Provence' },
      { href: 'provence', img: N3, alt: 'El mercado del sábado', rk: 'Mercado · 20 min', title: 'Saint-Rémy-de-Provence', place: 'Mercado del sábado' },
    ],
  },
  },

  'la-chevre-d-or': {
  en: {
    title: 'La Chèvre d’Or — The South of France',
    description:
      'A table built into the cliff at Èze, six hundred feet above the Mediterranean — our review, the verdict, the practical details and what to see nearby.',
    heroImg: HERO,
    heroAlt: 'A cliff village above the Mediterranean',
    crumb: ['french-riviera', 'the-table'],
    cat: 'Table · Restaurant',
    h1: 'La Chèvre d’Or',
    loc: 'Èze · Alpes-Maritimes',
    stars: 2,
    facts: [
      { k: 'Type', v: 'Gastronomic' },
      { k: 'Best season', v: 'May – September' },
      { k: 'Menu from', v: '€180' },
      { k: 'Covers', v: 'Around 40' },
      { k: 'Good for', v: 'A view you will not forget' },
    ],
    bodyKicker: 'The Review · Notre avis',
    bodyH2: 'A table hung between the village and the <em>sea</em>.',
    body: [
      {
        type: 'p',
        lede: true,
        html:
          'Èze is a medieval village welded to a pinnacle of rock, and La Chèvre d’Or is welded to Èze. The terrace falls away beneath your feet to the Mediterranean, six hundred feet down, with Cap Ferrat to the left and, on a clear day, Corsica somewhere out past the haze. It is, frankly, one of the great views from any table in Europe — and the kitchen has the nerve to match it.',
      },
      {
        type: 'p',
        html:
          'The cooking is Riviera fine dining at its most polished: line-caught fish, vegetables from the hills behind, sauces of real precision. It is not cheap and does not pretend to be. What you are buying is an afternoon you will describe to people for years.',
      },
      { type: 'h3', html: 'The setting' },
      {
        type: 'p',
        html:
          'Go for lunch, when the light is on the water and the village is yours before the coaches arrive. There are rooms scattered down the lanes if you would rather not drive afterwards. See our <a class="inline" href="/en/the-table/riviera-table-guide/">Riviera table guide</a>.',
      },
      { type: 'h3', html: 'Getting there' },
      {
        type: 'p',
        html:
          'Èze sits on the Moyenne Corniche between Nice and Monaco, twenty minutes from either. Park below and climb the lanes on foot — there is no other way in. See also our <a class="inline" href="/en/french-riviera/riviera-in-three-days/">Riviera in three days</a>.',
      },
    ],
    verdictLabel: 'The verdict · En un mot',
    verdictText:
      '“You pay for the view and stay for the cooking. Book lunch, sit by the rail, and let the afternoon fall away with the cliff.”',
    pcardLabel: 'The Address · L’adresse',
    pcardName: 'La Chèvre d’Or',
    pcardRows: [
      { k: 'Address', v: 'Rue du Barri, 06360 Èze' },
      { k: 'Website', v: '<a href="#">chevredor·com</a>' },
      { k: 'Open', v: 'Closed in winter; lunch & dinner' },
      { k: 'Reservations', v: 'Essential, well ahead' },
    ],
    pcardCta: 'Book a table',
    mapLabel: 'Èze, Alpes-Maritimes',
    galleryLabel: 'The Gallery · En images',
    gallery: [
      { img: G1, alt: 'The cliff village at first light', wide: true },
      { img: G2, alt: 'A stepped lane in the old village' },
      { img: G3, alt: 'A pine above the sea' },
      { img: G4, alt: 'The exotic garden' },
      { img: G5, alt: 'The coast at dusk' },
    ],
    nearbyLabel: 'Nearby · À proximité',
    nearbyHeading: 'While you are above <em>the Corniche</em>',
    nearby: [
      { href: 'french-riviera', img: N1, alt: 'The exotic garden of Èze', rk: 'Walk · 5 min', title: 'Jardin Exotique d’Èze', place: 'Èze' },
      { href: 'french-riviera', img: N2, alt: 'Villa Ephrussi de Rothschild', rk: 'Garden · 20 min', title: 'Villa Ephrussi de Rothschild', place: 'Saint-Jean-Cap-Ferrat' },
      { href: 'french-riviera', img: N3, alt: 'The Nietzsche path', rk: 'Walk · on foot', title: 'The Nietzsche path', place: 'Èze-sur-Mer' },
    ],
  },
  fr: {
    title: 'La Chèvre d’Or — The South of France',
    description:
      'Une table accrochée à la falaise d’Èze, à deux cents mètres au-dessus de la Méditerranée — notre avis, le verdict, les informations pratiques et que voir aux alentours.',
    heroImg: HERO,
    heroAlt: 'Un village perché au-dessus de la Méditerranée',
    crumb: ['french-riviera', 'the-table'],
    cat: 'Table · Restaurant',
    h1: 'La Chèvre d’Or',
    loc: 'Èze · Alpes-Maritimes',
    stars: 2,
    facts: [
      { k: 'Type', v: 'Gastronomique' },
      { k: 'Saison idéale', v: 'Mai – septembre' },
      { k: 'Menu à partir de', v: '180 €' },
      { k: 'Couverts', v: 'Une quarantaine' },
      { k: 'Idéal pour', v: 'Une vue inoubliable' },
    ],
    bodyKicker: 'Notre avis · The Review',
    bodyH2: 'Une table suspendue entre le village et la <em>mer</em>.',
    body: [
      {
        type: 'p',
        lede: true,
        html:
          'Èze est un village médiéval soudé à un piton de roche, et La Chèvre d’Or est soudée à Èze. La terrasse plonge sous vos pieds vers la Méditerranée, deux cents mètres plus bas, avec le cap Ferrat à gauche et, par temps clair, la Corse quelque part au-delà de la brume. C’est, franchement, l’une des grandes vues de toutes les tables d’Europe — et la cuisine a le cran d’en être à la hauteur.',
      },
      {
        type: 'p',
        html:
          'La cuisine est la haute gastronomie de la Riviera dans ce qu’elle a de plus poli : poissons de ligne, légumes des collines derrière, sauces d’une vraie précision. Ce n’est pas donné et cela ne prétend pas l’être. Ce que vous achetez, c’est un après-midi que vous raconterez pendant des années.',
      },
      { type: 'h3', html: 'Le cadre' },
      {
        type: 'p',
        html:
          'Allez-y pour le déjeuner, quand la lumière est sur l’eau et que le village est à vous avant l’arrivée des cars. Des chambres sont dispersées dans les ruelles si vous préférez ne pas reprendre la route ensuite. Voir notre <a class="inline" href="/fr/la-table/riviera-table-guide/">guide des tables de la Riviera</a>.',
      },
      { type: 'h3', html: 'Y aller' },
      {
        type: 'p',
        html:
          'Èze est sur la Moyenne Corniche entre Nice et Monaco, à vingt minutes de l’une comme de l’autre. Garez-vous en contrebas et montez les ruelles à pied — il n’y a pas d’autre accès. Voir aussi notre <a class="inline" href="/fr/cote-d-azur/riviera-in-three-days/">Riviera en trois jours</a>.',
      },
    ],
    verdictLabel: 'En un mot · The verdict',
    verdictText:
      '« On paie pour la vue et on reste pour la cuisine. Réservez le déjeuner, installez-vous au bord du parapet, et laissez l’après-midi tomber avec la falaise. »',
    pcardLabel: 'L’adresse · The Address',
    pcardName: 'La Chèvre d’Or',
    pcardRows: [
      { k: 'Adresse', v: 'Rue du Barri, 06360 Èze' },
      { k: 'Site web', v: '<a href="#">chevredor·com</a>' },
      { k: 'Ouverture', v: 'Fermé l’hiver ; déjeuner & dîner' },
      { k: 'Réservation', v: 'Indispensable, bien à l’avance' },
    ],
    pcardCta: 'Réserver une table',
    mapLabel: 'Èze, Alpes-Maritimes',
    galleryLabel: 'En images · The Gallery',
    gallery: [
      { img: G1, alt: 'Le village perché aux premières lueurs', wide: true },
      { img: G2, alt: 'Une ruelle en escalier du vieux village' },
      { img: G3, alt: 'Un pin au-dessus de la mer' },
      { img: G4, alt: 'Le jardin exotique' },
      { img: G5, alt: 'La côte au crépuscule' },
    ],
    nearbyLabel: 'À proximité · Nearby',
    nearbyHeading: 'Pendant votre séjour au-dessus de <em>la Corniche</em>',
    nearby: [
      { href: 'french-riviera', img: N1, alt: 'Le jardin exotique d’Èze', rk: 'Balade · 5 min', title: 'Jardin Exotique d’Èze', place: 'Èze' },
      { href: 'french-riviera', img: N2, alt: 'Villa Ephrussi de Rothschild', rk: 'Jardin · 20 min', title: 'Villa Ephrussi de Rothschild', place: 'Saint-Jean-Cap-Ferrat' },
      { href: 'french-riviera', img: N3, alt: 'Le sentier Nietzsche', rk: 'Balade · à pied', title: 'Le sentier Nietzsche', place: 'Èze-sur-Mer' },
    ],
  },
  it: {
    title: 'La Chèvre d’Or — The South of France',
    description:
      'Una tavola aggrappata alla falesia di Èze, duecento metri sopra il Mediterraneo — la nostra recensione, il verdetto, le informazioni pratiche e cosa vedere nei dintorni.',
    heroImg: HERO,
    heroAlt: 'Un villaggio a picco sul Mediterraneo',
    crumb: ['french-riviera', 'the-table'],
    cat: 'Tavola · Ristorante',
    h1: 'La Chèvre d’Or',
    loc: 'Èze · Alpes-Maritimes',
    stars: 2,
    facts: [
      { k: 'Tipo', v: 'Gastronomico' },
      { k: 'Stagione ideale', v: 'Maggio – settembre' },
      { k: 'Menu da', v: '180 €' },
      { k: 'Coperti', v: 'Una quarantina' },
      { k: 'Ideale per', v: 'Una vista indimenticabile' },
    ],
    bodyKicker: 'La recensione · Notre avis',
    bodyH2: 'Una tavola sospesa tra il villaggio e il <em>mare</em>.',
    body: [
      {
        type: 'p',
        lede: true,
        html:
          'Èze è un villaggio medievale saldato a un picco di roccia, e La Chèvre d’Or è saldata a Èze. La terrazza precipita sotto i vostri piedi verso il Mediterraneo, duecento metri più in basso, con il Cap Ferrat a sinistra e, nelle giornate limpide, la Corsica da qualche parte oltre la foschia. È, francamente, una delle grandi viste da una tavola d’Europa — e la cucina ha il coraggio di esserne all’altezza.',
      },
      {
        type: 'p',
        html:
          'La cucina è l’alta gastronomia della Riviera nella sua forma più rifinita: pesce di lenza, verdure delle colline alle spalle, salse di vera precisione. Non è economica e non finge di esserlo. Ciò che comprate è un pomeriggio che racconterete per anni.',
      },
      { type: 'h3', html: 'La cornice' },
      {
        type: 'p',
        html:
          'Andateci a pranzo, quando la luce è sull’acqua e il villaggio è vostro prima dell’arrivo dei pullman. Ci sono camere sparse lungo le viuzze se preferite non rimettervi in strada dopo. Vedete la nostra <a class="inline" href="/it/la-tavola/riviera-table-guide/">guida alle tavole della Riviera</a>.',
      },
      { type: 'h3', html: 'Come arrivare' },
      {
        type: 'p',
        html:
          'Èze si trova sulla Moyenne Corniche tra Nizza e Monaco, a venti minuti dall’una e dall’altra. Parcheggiate in basso e salite le viuzze a piedi — non c’è altro accesso. Vedete anche la nostra <a class="inline" href="/it/costa-azzurra/riviera-in-three-days/">Riviera in tre giorni</a>.',
      },
    ],
    verdictLabel: 'Il verdetto · En un mot',
    verdictText:
      '«Si paga per la vista e si resta per la cucina. Prenotate il pranzo, sedetevi al parapetto e lasciate che il pomeriggio precipiti con la falesia.»',
    pcardLabel: 'L’indirizzo · L’adresse',
    pcardName: 'La Chèvre d’Or',
    pcardRows: [
      { k: 'Indirizzo', v: 'Rue du Barri, 06360 Èze' },
      { k: 'Sito web', v: '<a href="#">chevredor·com</a>' },
      { k: 'Apertura', v: 'Chiuso d’inverno; pranzo e cena' },
      { k: 'Prenotazione', v: 'Indispensabile, con largo anticipo' },
    ],
    pcardCta: 'Prenota un tavolo',
    mapLabel: 'Èze, Alpes-Maritimes',
    galleryLabel: 'La galleria · En images',
    gallery: [
      { img: G1, alt: 'Il villaggio a picco alle prime luci', wide: true },
      { img: G2, alt: 'Una viuzza a gradini del vecchio villaggio' },
      { img: G3, alt: 'Un pino sopra il mare' },
      { img: G4, alt: 'Il giardino esotico' },
      { img: G5, alt: 'La costa al crepuscolo' },
    ],
    nearbyLabel: 'Nei dintorni · À proximité',
    nearbyHeading: 'Mentre siete sopra <em>la Corniche</em>',
    nearby: [
      { href: 'french-riviera', img: N1, alt: 'Il giardino esotico di Èze', rk: 'Passeggiata · 5 min', title: 'Jardin Exotique d’Èze', place: 'Èze' },
      { href: 'french-riviera', img: N2, alt: 'Villa Ephrussi de Rothschild', rk: 'Giardino · 20 min', title: 'Villa Ephrussi de Rothschild', place: 'Saint-Jean-Cap-Ferrat' },
      { href: 'french-riviera', img: N3, alt: 'Il sentiero Nietzsche', rk: 'Passeggiata · a piedi', title: 'Il sentiero Nietzsche', place: 'Èze-sur-Mer' },
    ],
  },
  de: {
    title: 'La Chèvre d’Or — The South of France',
    description:
      'Eine Tafel, in den Fels von Èze gebaut, zweihundert Meter über dem Mittelmeer — unsere Rezension, das Urteil, die praktischen Angaben und was es in der Nähe zu sehen gibt.',
    heroImg: HERO,
    heroAlt: 'Ein Felsendorf über dem Mittelmeer',
    crumb: ['french-riviera', 'the-table'],
    cat: 'Tafel · Restaurant',
    h1: 'La Chèvre d’Or',
    loc: 'Èze · Alpes-Maritimes',
    stars: 2,
    facts: [
      { k: 'Art', v: 'Gastronomisch' },
      { k: 'Beste Saison', v: 'Mai – September' },
      { k: 'Menü ab', v: '180 €' },
      { k: 'Gedecke', v: 'Etwa 40' },
      { k: 'Ideal für', v: 'Eine unvergessliche Aussicht' },
    ],
    bodyKicker: 'Die Rezension · Notre avis',
    bodyH2: 'Eine Tafel, aufgehängt zwischen Dorf und <em>Meer</em>.',
    body: [
      {
        type: 'p',
        lede: true,
        html:
          'Èze ist ein mittelalterliches Dorf, verschweißt mit einer Felsnadel, und La Chèvre d’Or ist mit Èze verschweißt. Die Terrasse fällt unter Ihren Füßen zum Mittelmeer ab, zweihundert Meter tief, mit dem Cap Ferrat zur Linken und, an klaren Tagen, Korsika irgendwo hinter dem Dunst. Es ist, offen gesagt, eine der großen Aussichten von einer Tafel in Europa — und die Küche hat den Mut, ihr zu entsprechen.',
      },
      {
        type: 'p',
        html:
          'Die Küche ist die feinste Gastronomie der Riviera in ihrer poliertesten Form: Fisch von der Angel, Gemüse aus den Hügeln dahinter, Saucen von echter Präzision. Sie ist nicht billig und gibt nicht vor, es zu sein. Was Sie kaufen, ist ein Nachmittag, von dem Sie noch Jahre erzählen werden.',
      },
      { type: 'h3', html: 'Der Rahmen' },
      {
        type: 'p',
        html:
          'Gehen Sie zum Mittagessen, wenn das Licht auf dem Wasser liegt und das Dorf Ihnen gehört, bevor die Reisebusse kommen. Über die Gassen verteilt gibt es Zimmer, falls Sie danach lieber nicht fahren möchten. Siehe unseren <a class="inline" href="/de/am-tisch/riviera-table-guide/">Tafelführer der Riviera</a>.',
      },
      { type: 'h3', html: 'Anreise' },
      {
        type: 'p',
        html:
          'Èze liegt an der Moyenne Corniche zwischen Nizza und Monaco, zwanzig Minuten von beiden. Parken Sie unten und steigen Sie die Gassen zu Fuß hinauf — einen anderen Zugang gibt es nicht. Siehe auch unsere <a class="inline" href="/de/cote-d-azur/riviera-in-three-days/">Riviera in drei Tagen</a>.',
      },
    ],
    verdictLabel: 'Das Urteil · En un mot',
    verdictText:
      '„Man zahlt für die Aussicht und bleibt für die Küche. Buchen Sie das Mittagessen, setzen Sie sich ans Geländer und lassen Sie den Nachmittag mit der Felswand fallen.“',
    pcardLabel: 'Die Adresse · L’adresse',
    pcardName: 'La Chèvre d’Or',
    pcardRows: [
      { k: 'Anschrift', v: 'Rue du Barri, 06360 Èze' },
      { k: 'Website', v: '<a href="#">chevredor·com</a>' },
      { k: 'Geöffnet', v: 'Im Winter geschlossen; Mittag & Abend' },
      { k: 'Reservierung', v: 'Unerlässlich, weit im Voraus' },
    ],
    pcardCta: 'Tisch reservieren',
    mapLabel: 'Èze, Alpes-Maritimes',
    galleryLabel: 'Die Galerie · En images',
    gallery: [
      { img: G1, alt: 'Das Felsendorf im ersten Licht', wide: true },
      { img: G2, alt: 'Eine gestufte Gasse im alten Dorf' },
      { img: G3, alt: 'Eine Pinie über dem Meer' },
      { img: G4, alt: 'Der exotische Garten' },
      { img: G5, alt: 'Die Küste in der Dämmerung' },
    ],
    nearbyLabel: 'In der Nähe · À proximité',
    nearbyHeading: 'Während Sie über <em>der Corniche</em> sind',
    nearby: [
      { href: 'french-riviera', img: N1, alt: 'Der exotische Garten von Èze', rk: 'Spaziergang · 5 Min.', title: 'Jardin Exotique d’Èze', place: 'Èze' },
      { href: 'french-riviera', img: N2, alt: 'Villa Ephrussi de Rothschild', rk: 'Garten · 20 Min.', title: 'Villa Ephrussi de Rothschild', place: 'Saint-Jean-Cap-Ferrat' },
      { href: 'french-riviera', img: N3, alt: 'Der Nietzsche-Pfad', rk: 'Spaziergang · zu Fuß', title: 'Der Nietzsche-Pfad', place: 'Èze-sur-Mer' },
    ],
  },
  es: {
    title: 'La Chèvre d’Or — The South of France',
    description:
      'Una mesa encajada en el acantilado de Èze, doscientos metros sobre el Mediterráneo — nuestra reseña, el veredicto, los datos prácticos y qué ver en los alrededores.',
    heroImg: HERO,
    heroAlt: 'Un pueblo en el acantilado sobre el Mediterráneo',
    crumb: ['french-riviera', 'the-table'],
    cat: 'Mesa · Restaurante',
    h1: 'La Chèvre d’Or',
    loc: 'Èze · Alpes-Maritimes',
    stars: 2,
    facts: [
      { k: 'Tipo', v: 'Gastronómico' },
      { k: 'Mejor temporada', v: 'Mayo – septiembre' },
      { k: 'Menú desde', v: '180 €' },
      { k: 'Cubiertos', v: 'Unos 40' },
      { k: 'Ideal para', v: 'Una vista inolvidable' },
    ],
    bodyKicker: 'La reseña · Notre avis',
    bodyH2: 'Una mesa suspendida entre el pueblo y el <em>mar</em>.',
    body: [
      {
        type: 'p',
        lede: true,
        html:
          'Èze es un pueblo medieval soldado a un pináculo de roca, y La Chèvre d’Or está soldada a Èze. La terraza se desploma bajo sus pies hacia el Mediterráneo, doscientos metros más abajo, con el Cap Ferrat a la izquierda y, en un día claro, Córcega en algún lugar más allá de la bruma. Es, francamente, una de las grandes vistas desde cualquier mesa de Europa — y la cocina tiene el valor de estar a su altura.',
      },
      {
        type: 'p',
        html:
          'La cocina es la alta gastronomía de la Riviera en su forma más pulida: pescado de anzuelo, verduras de las colinas de detrás, salsas de verdadera precisión. No es barata y no pretende serlo. Lo que compra es una tarde que contará durante años.',
      },
      { type: 'h3', html: 'El marco' },
      {
        type: 'p',
        html:
          'Vaya a almorzar, cuando la luz está sobre el agua y el pueblo es suyo antes de que lleguen los autocares. Hay habitaciones repartidas por los callejones si prefiere no conducir después. Vea nuestra <a class="inline" href="/es/la-mesa/riviera-table-guide/">guía de mesas de la Riviera</a>.',
      },
      { type: 'h3', html: 'Cómo llegar' },
      {
        type: 'p',
        html:
          'Èze está en la Moyenne Corniche entre Niza y Mónaco, a veinte minutos de cualquiera de las dos. Aparque abajo y suba los callejones a pie — no hay otro acceso. Vea también nuestra <a class="inline" href="/es/costa-azul/riviera-in-three-days/">Riviera en tres días</a>.',
      },
    ],
    verdictLabel: 'El veredicto · En un mot',
    verdictText:
      '«Se paga por la vista y se queda por la cocina. Reserve el almuerzo, siéntese junto a la baranda y deje que la tarde caiga con el acantilado.»',
    pcardLabel: 'La dirección · L’adresse',
    pcardName: 'La Chèvre d’Or',
    pcardRows: [
      { k: 'Dirección', v: 'Rue du Barri, 06360 Èze' },
      { k: 'Sitio web', v: '<a href="#">chevredor·com</a>' },
      { k: 'Abierto', v: 'Cerrado en invierno; almuerzo y cena' },
      { k: 'Reserva', v: 'Imprescindible, con mucha antelación' },
    ],
    pcardCta: 'Reservar una mesa',
    mapLabel: 'Èze, Alpes-Maritimes',
    galleryLabel: 'La galería · En images',
    gallery: [
      { img: G1, alt: 'El pueblo del acantilado a las primeras luces', wide: true },
      { img: G2, alt: 'Un callejón escalonado del viejo pueblo' },
      { img: G3, alt: 'Un pino sobre el mar' },
      { img: G4, alt: 'El jardín exótico' },
      { img: G5, alt: 'La costa al crepúsculo' },
    ],
    nearbyLabel: 'Cerca · À proximité',
    nearbyHeading: 'Mientras esté por encima de <em>la Corniche</em>',
    nearby: [
      { href: 'french-riviera', img: N1, alt: 'El jardín exótico de Èze', rk: 'Paseo · 5 min', title: 'Jardin Exotique d’Èze', place: 'Èze' },
      { href: 'french-riviera', img: N2, alt: 'Villa Ephrussi de Rothschild', rk: 'Jardín · 20 min', title: 'Villa Ephrussi de Rothschild', place: 'Saint-Jean-Cap-Ferrat' },
      { href: 'french-riviera', img: N3, alt: 'El sendero Nietzsche', rk: 'Paseo · a pie', title: 'El sendero Nietzsche', place: 'Èze-sur-Mer' },
    ],
  },
  },

  'mas-de-peint': {
  en: {
    title: 'Le Mas de Peint — The South of France',
    description:
      'A working Camargue rice farm that takes a handful of guests, deep in the delta among the bulls and the horses — our review, the verdict and what to see nearby.',
    heroImg: HERO,
    heroAlt: 'A Camargue farmhouse among reeds and water',
    crumb: ['camargue', 'stays'],
    cat: 'Stay · Guest house',
    h1: 'Le Mas de Peint',
    loc: 'Le Sambuc · Arles · Bouches-du-Rhône',
    stars: 4,
    facts: [
      { k: 'Type', v: 'Farm guest house' },
      { k: 'Best season', v: 'April – October' },
      { k: 'From', v: '€260 / night' },
      { k: 'Rooms', v: '13' },
      { k: 'Good for', v: 'The real Camargue' },
    ],
    bodyKicker: 'The Review · Notre avis',
    bodyH2: 'A working farm that lets you stay in the <em>delta</em>.',
    body: [
      {
        type: 'p',
        lede: true,
        html:
          'Le Mas de Peint is not a hotel pretending to be a farm. It is a farm — a large estate in the heart of the Camargue, raising rice, black bulls and the white horses of the delta — that happens to keep thirteen rooms for guests. You wake to the work of the place: the gardians riding out, the bulls in the far fields, the flat silver light coming off the marsh.',
      },
      {
        type: 'p',
        html:
          'The house itself is an eighteenth-century mas, restored with great restraint — bleached wood, white walls, copper in the kitchen. Dinner is taken at the long table, from the farm and the garden. It is quiet in a way that the coast, an hour south, has long forgotten how to be.',
      },
      { type: 'h3', html: 'The land' },
      {
        type: 'p',
        html:
          'Ride out with the gardians, or take the little pool and a book and watch the flamingos work the lagoon. The sea at Beauduc is a long sandy hour away. Read our full <a class="inline" href="/en/camargue/camargue-guide/">Camargue guide</a>.',
      },
      { type: 'h3', html: 'Getting there' },
      {
        type: 'p',
        html:
          'The mas is twenty kilometres south of Arles, down the road to Salin-de-Giraud. Come by car; there is no other way to reach the delta. See also our <a class="inline" href="/en/camargue/arles-in-a-weekend/">Arles in a weekend</a>.',
      },
    ],
    verdictLabel: 'The verdict · En un mot',
    verdictText:
      '“The Camargue without the costume. Stay two nights, ride out once, and let the delta slow you to its own pace.”',
    pcardLabel: 'The Address · L’adresse',
    pcardName: 'Le Mas de Peint',
    pcardRows: [
      { k: 'Address', v: 'Le Sambuc, 13200 Arles' },
      { k: 'Website', v: '<a href="#">masdepeint·com</a>' },
      { k: 'Open', v: 'Spring to autumn' },
      { k: 'Reservations', v: 'By the night; book ahead' },
    ],
    pcardCta: 'Check availability',
    mapLabel: 'Le Sambuc, Arles, Bouches-du-Rhône',
    galleryLabel: 'The Gallery · En images',
    gallery: [
      { img: G1, alt: 'The delta at first light', wide: true },
      { img: G2, alt: 'The farmhouse courtyard' },
      { img: G3, alt: 'A horse in the reeds' },
      { img: G4, alt: 'The garden and pool' },
      { img: G5, alt: 'The marsh at dusk' },
    ],
    nearbyLabel: 'Nearby · À proximité',
    nearbyHeading: 'While you are in the <em>Camargue</em>',
    nearby: [
      { href: 'camargue', img: N1, alt: 'The ornithological park', rk: 'Birds · 20 min', title: 'Pont de Gau bird park', place: 'Saintes-Maries-de-la-Mer' },
      { href: 'camargue', img: N2, alt: 'The salt flats of Salin-de-Giraud', rk: 'Drive · 25 min', title: 'The pink salt flats', place: 'Salin-de-Giraud' },
      { href: 'camargue', img: N3, alt: 'The Roman heart of Arles', rk: 'Town · 25 min', title: 'Roman Arles', place: 'Arles' },
    ],
  },
  fr: {
    title: 'Le Mas de Peint — The South of France',
    description:
      'Une véritable exploitation rizicole de Camargue qui reçoit une poignée d’hôtes, au cœur du delta parmi les taureaux et les chevaux — notre avis, le verdict et que voir aux alentours.',
    heroImg: HERO,
    heroAlt: 'Un mas de Camargue parmi les roseaux et l’eau',
    crumb: ['camargue', 'stays'],
    cat: 'Séjour · Maison d’hôtes',
    h1: 'Le Mas de Peint',
    loc: 'Le Sambuc · Arles · Bouches-du-Rhône',
    stars: 4,
    facts: [
      { k: 'Type', v: 'Maison d’hôtes à la ferme' },
      { k: 'Saison idéale', v: 'Avril – octobre' },
      { k: 'À partir de', v: '260 € / nuit' },
      { k: 'Chambres', v: '13' },
      { k: 'Idéal pour', v: 'La vraie Camargue' },
    ],
    bodyKicker: 'Notre avis · The Review',
    bodyH2: 'Une exploitation en activité qui vous loge dans le <em>delta</em>.',
    body: [
      {
        type: 'p',
        lede: true,
        html:
          'Le Mas de Peint n’est pas un hôtel qui joue à la ferme. C’est une ferme — un grand domaine au cœur de la Camargue, qui élève du riz, des taureaux noirs et les chevaux blancs du delta — qui se trouve garder treize chambres pour ses hôtes. On se réveille au travail du lieu : les gardians qui partent à cheval, les taureaux dans les prés du fond, la lumière d’argent plate qui monte du marais.',
      },
      {
        type: 'p',
        html:
          'La maison elle-même est un mas du XVIIIᵉ siècle, restauré avec une grande retenue — bois blanchi, murs blancs, cuivre à la cuisine. Le dîner se prend à la grande table, de la ferme et du jardin. C’est calme d’une manière que la côte, à une heure au sud, a depuis longtemps oublié d’être.',
      },
      { type: 'h3', html: 'La terre' },
      {
        type: 'p',
        html:
          'Partez à cheval avec les gardians, ou prenez la petite piscine et un livre et regardez les flamants travailler la lagune. La mer à Beauduc est à une longue heure de sable. Lisez notre <a class="inline" href="/fr/camargue/camargue-guide/">guide de la Camargue</a>.',
      },
      { type: 'h3', html: 'Y aller' },
      {
        type: 'p',
        html:
          'Le mas est à vingt kilomètres au sud d’Arles, sur la route de Salin-de-Giraud. Venez en voiture ; il n’y a pas d’autre moyen d’atteindre le delta. Voir aussi notre <a class="inline" href="/fr/camargue/arles-in-a-weekend/">Arles en un week-end</a>.',
      },
    ],
    verdictLabel: 'En un mot · The verdict',
    verdictText:
      '« La Camargue sans le costume. Restez deux nuits, montez à cheval une fois, et laissez le delta vous régler sur son propre rythme. »',
    pcardLabel: 'L’adresse · The Address',
    pcardName: 'Le Mas de Peint',
    pcardRows: [
      { k: 'Adresse', v: 'Le Sambuc, 13200 Arles' },
      { k: 'Site web', v: '<a href="#">masdepeint·com</a>' },
      { k: 'Ouverture', v: 'Du printemps à l’automne' },
      { k: 'Réservation', v: 'À la nuit ; réservez à l’avance' },
    ],
    pcardCta: 'Vérifier les disponibilités',
    mapLabel: 'Le Sambuc, Arles, Bouches-du-Rhône',
    galleryLabel: 'En images · The Gallery',
    gallery: [
      { img: G1, alt: 'Le delta aux premières lueurs', wide: true },
      { img: G2, alt: 'La cour du mas' },
      { img: G3, alt: 'Un cheval dans les roseaux' },
      { img: G4, alt: 'Le jardin et la piscine' },
      { img: G5, alt: 'Le marais au crépuscule' },
    ],
    nearbyLabel: 'À proximité · Nearby',
    nearbyHeading: 'Pendant votre séjour en <em>Camargue</em>',
    nearby: [
      { href: 'camargue', img: N1, alt: 'Le parc ornithologique', rk: 'Oiseaux · 20 min', title: 'Parc ornithologique du Pont de Gau', place: 'Saintes-Maries-de-la-Mer' },
      { href: 'camargue', img: N2, alt: 'Les salins de Salin-de-Giraud', rk: 'Route · 25 min', title: 'Les salins roses', place: 'Salin-de-Giraud' },
      { href: 'camargue', img: N3, alt: 'Le cœur romain d’Arles', rk: 'Ville · 25 min', title: 'Arles la romaine', place: 'Arles' },
    ],
  },
  it: {
    title: 'Le Mas de Peint — The South of France',
    description:
      'Una vera azienda risicola della Camargue che accoglie una manciata di ospiti, nel cuore del delta tra i tori e i cavalli — la nostra recensione, il verdetto e cosa vedere nei dintorni.',
    heroImg: HERO,
    heroAlt: 'Un mas della Camargue tra canne e acqua',
    crumb: ['camargue', 'stays'],
    cat: 'Soggiorno · Casa per ospiti',
    h1: 'Le Mas de Peint',
    loc: 'Le Sambuc · Arles · Bouches-du-Rhône',
    stars: 4,
    facts: [
      { k: 'Tipo', v: 'Casa per ospiti in fattoria' },
      { k: 'Stagione ideale', v: 'Aprile – ottobre' },
      { k: 'A partire da', v: '260 € / notte' },
      { k: 'Camere', v: '13' },
      { k: 'Ideale per', v: 'La vera Camargue' },
    ],
    bodyKicker: 'La recensione · Notre avis',
    bodyH2: 'Un’azienda in attività che vi ospita nel <em>delta</em>.',
    body: [
      {
        type: 'p',
        lede: true,
        html:
          'Le Mas de Peint non è un hotel che gioca a fare la fattoria. È una fattoria — una grande tenuta nel cuore della Camargue, che alleva riso, tori neri e i cavalli bianchi del delta — che per caso tiene tredici camere per gli ospiti. Ci si sveglia con il lavoro del luogo: i gardian che escono a cavallo, i tori nei campi lontani, la luce d’argento piatta che sale dalla palude.',
      },
      {
        type: 'p',
        html:
          'La casa stessa è un mas del Settecento, restaurato con grande misura — legno sbiancato, pareti bianche, rame in cucina. La cena si prende al grande tavolo, dalla fattoria e dall’orto. È silenzioso in un modo che la costa, a un’ora più a sud, ha da tempo dimenticato.',
      },
      { type: 'h3', html: 'La terra' },
      {
        type: 'p',
        html:
          'Uscite a cavallo con i gardian, o prendete la piccola piscina e un libro e guardate i fenicotteri lavorare la laguna. Il mare di Beauduc è a una lunga ora di sabbia. Leggete la nostra <a class="inline" href="/it/camargue/camargue-guide/">guida della Camargue</a>.',
      },
      { type: 'h3', html: 'Come arrivare' },
      {
        type: 'p',
        html:
          'Il mas è a venti chilometri a sud di Arles, sulla strada per Salin-de-Giraud. Venite in auto; non c’è altro modo per raggiungere il delta. Vedete anche la nostra <a class="inline" href="/it/camargue/arles-in-a-weekend/">Arles in un fine settimana</a>.',
      },
    ],
    verdictLabel: 'Il verdetto · En un mot',
    verdictText:
      '«La Camargue senza il costume. Fermatevi due notti, uscite a cavallo una volta, e lasciate che il delta vi regoli sul suo ritmo.»',
    pcardLabel: 'L’indirizzo · L’adresse',
    pcardName: 'Le Mas de Peint',
    pcardRows: [
      { k: 'Indirizzo', v: 'Le Sambuc, 13200 Arles' },
      { k: 'Sito web', v: '<a href="#">masdepeint·com</a>' },
      { k: 'Apertura', v: 'Dalla primavera all’autunno' },
      { k: 'Prenotazione', v: 'A notte; prenotate in anticipo' },
    ],
    pcardCta: 'Verifica disponibilità',
    mapLabel: 'Le Sambuc, Arles, Bouches-du-Rhône',
    galleryLabel: 'La galleria · En images',
    gallery: [
      { img: G1, alt: 'Il delta alle prime luci', wide: true },
      { img: G2, alt: 'Il cortile del mas' },
      { img: G3, alt: 'Un cavallo tra le canne' },
      { img: G4, alt: 'Il giardino e la piscina' },
      { img: G5, alt: 'La palude al crepuscolo' },
    ],
    nearbyLabel: 'Nei dintorni · À proximité',
    nearbyHeading: 'Mentre siete in <em>Camargue</em>',
    nearby: [
      { href: 'camargue', img: N1, alt: 'Il parco ornitologico', rk: 'Uccelli · 20 min', title: 'Parco ornitologico del Pont de Gau', place: 'Saintes-Maries-de-la-Mer' },
      { href: 'camargue', img: N2, alt: 'Le saline di Salin-de-Giraud', rk: 'Strada · 25 min', title: 'Le saline rosa', place: 'Salin-de-Giraud' },
      { href: 'camargue', img: N3, alt: 'Il cuore romano di Arles', rk: 'Città · 25 min', title: 'Arles romana', place: 'Arles' },
    ],
  },
  de: {
    title: 'Le Mas de Peint — The South of France',
    description:
      'Ein arbeitender Reishof der Camargue, der eine Handvoll Gäste aufnimmt, tief im Delta zwischen Stieren und Pferden — unsere Rezension, das Urteil und was es in der Nähe zu sehen gibt.',
    heroImg: HERO,
    heroAlt: 'Ein Gehöft der Camargue zwischen Schilf und Wasser',
    crumb: ['camargue', 'stays'],
    cat: 'Aufenthalt · Gästehaus',
    h1: 'Le Mas de Peint',
    loc: 'Le Sambuc · Arles · Bouches-du-Rhône',
    stars: 4,
    facts: [
      { k: 'Art', v: 'Gästehaus auf dem Hof' },
      { k: 'Beste Saison', v: 'April – Oktober' },
      { k: 'Ab', v: '260 € / Nacht' },
      { k: 'Zimmer', v: '13' },
      { k: 'Ideal für', v: 'Die echte Camargue' },
    ],
    bodyKicker: 'Die Rezension · Notre avis',
    bodyH2: 'Ein arbeitender Hof, der Sie im <em>Delta</em> wohnen lässt.',
    body: [
      {
        type: 'p',
        lede: true,
        html:
          'Le Mas de Peint ist kein Hotel, das einen Hof spielt. Es ist ein Hof — ein großes Gut im Herzen der Camargue, das Reis, schwarze Stiere und die weißen Pferde des Deltas züchtet — der zufällig dreizehn Zimmer für Gäste bereithält. Man erwacht zur Arbeit des Ortes: die Gardians, die ausreiten, die Stiere auf den fernen Feldern, das flache silberne Licht, das vom Sumpf aufsteigt.',
      },
      {
        type: 'p',
        html:
          'Das Haus selbst ist ein Mas aus dem 18. Jahrhundert, mit großer Zurückhaltung restauriert — gebleichtes Holz, weiße Wände, Kupfer in der Küche. Das Abendessen nimmt man an der langen Tafel ein, vom Hof und aus dem Garten. Es ist still auf eine Weise, die die Küste eine Stunde südlich längst verlernt hat.',
      },
      { type: 'h3', html: 'Das Land' },
      {
        type: 'p',
        html:
          'Reiten Sie mit den Gardians aus, oder nehmen Sie den kleinen Pool und ein Buch und sehen Sie den Flamingos zu, wie sie die Lagune abarbeiten. Das Meer bei Beauduc ist eine lange sandige Stunde entfernt. Lesen Sie unseren <a class="inline" href="/de/camargue/camargue-guide/">Camargue-Führer</a>.',
      },
      { type: 'h3', html: 'Anreise' },
      {
        type: 'p',
        html:
          'Der Mas liegt zwanzig Kilometer südlich von Arles, an der Straße nach Salin-de-Giraud. Kommen Sie mit dem Auto; einen anderen Weg ins Delta gibt es nicht. Siehe auch unser <a class="inline" href="/de/camargue/arles-in-a-weekend/">Arles an einem Wochenende</a>.',
      },
    ],
    verdictLabel: 'Das Urteil · En un mot',
    verdictText:
      '„Die Camargue ohne das Kostüm. Bleiben Sie zwei Nächte, reiten Sie einmal aus, und lassen Sie das Delta Sie auf sein eigenes Tempo bringen.“',
    pcardLabel: 'Die Adresse · L’adresse',
    pcardName: 'Le Mas de Peint',
    pcardRows: [
      { k: 'Anschrift', v: 'Le Sambuc, 13200 Arles' },
      { k: 'Website', v: '<a href="#">masdepeint·com</a>' },
      { k: 'Geöffnet', v: 'Frühling bis Herbst' },
      { k: 'Reservierung', v: 'Pro Nacht; im Voraus buchen' },
    ],
    pcardCta: 'Verfügbarkeit prüfen',
    mapLabel: 'Le Sambuc, Arles, Bouches-du-Rhône',
    galleryLabel: 'Die Galerie · En images',
    gallery: [
      { img: G1, alt: 'Das Delta im ersten Licht', wide: true },
      { img: G2, alt: 'Der Innenhof des Gehöfts' },
      { img: G3, alt: 'Ein Pferd im Schilf' },
      { img: G4, alt: 'Der Garten und der Pool' },
      { img: G5, alt: 'Der Sumpf in der Dämmerung' },
    ],
    nearbyLabel: 'In der Nähe · À proximité',
    nearbyHeading: 'Während Sie in der <em>Camargue</em> sind',
    nearby: [
      { href: 'camargue', img: N1, alt: 'Der Vogelpark', rk: 'Vögel · 20 Min.', title: 'Vogelpark Pont de Gau', place: 'Saintes-Maries-de-la-Mer' },
      { href: 'camargue', img: N2, alt: 'Die Salinen von Salin-de-Giraud', rk: 'Fahrt · 25 Min.', title: 'Die rosa Salinen', place: 'Salin-de-Giraud' },
      { href: 'camargue', img: N3, alt: 'Das römische Herz von Arles', rk: 'Stadt · 25 Min.', title: 'Das römische Arles', place: 'Arles' },
    ],
  },
  es: {
    title: 'Le Mas de Peint — The South of France',
    description:
      'Una auténtica explotación arrocera de la Camarga que acoge a un puñado de huéspedes, en el corazón del delta entre los toros y los caballos — nuestra reseña, el veredicto y qué ver en los alrededores.',
    heroImg: HERO,
    heroAlt: 'Una alquería de la Camarga entre cañas y agua',
    crumb: ['camargue', 'stays'],
    cat: 'Estancia · Casa de huéspedes',
    h1: 'Le Mas de Peint',
    loc: 'Le Sambuc · Arles · Bouches-du-Rhône',
    stars: 4,
    facts: [
      { k: 'Tipo', v: 'Casa de huéspedes en granja' },
      { k: 'Mejor temporada', v: 'Abril – octubre' },
      { k: 'Desde', v: '260 € / noche' },
      { k: 'Habitaciones', v: '13' },
      { k: 'Ideal para', v: 'La Camarga auténtica' },
    ],
    bodyKicker: 'La reseña · Notre avis',
    bodyH2: 'Una explotación en activo que lo aloja en el <em>delta</em>.',
    body: [
      {
        type: 'p',
        lede: true,
        html:
          'Le Mas de Peint no es un hotel que juega a ser granja. Es una granja — una gran finca en el corazón de la Camarga, que cría arroz, toros negros y los caballos blancos del delta — que resulta guardar trece habitaciones para los huéspedes. Uno se despierta con el trabajo del lugar: los gardianes saliendo a caballo, los toros en los campos lejanos, la luz plana de plata que sube de la marisma.',
      },
      {
        type: 'p',
        html:
          'La casa en sí es una alquería del siglo XVIII, restaurada con gran contención — madera blanqueada, paredes blancas, cobre en la cocina. La cena se toma en la gran mesa, de la granja y del huerto. Es tranquilo de una manera que la costa, una hora al sur, hace tiempo olvidó cómo ser.',
      },
      { type: 'h3', html: 'La tierra' },
      {
        type: 'p',
        html:
          'Salga a caballo con los gardianes, o tome la pequeña piscina y un libro y observe a los flamencos trabajar la laguna. El mar de Beauduc está a una larga hora de arena. Lea nuestra <a class="inline" href="/es/camarga/camargue-guide/">guía de la Camarga</a>.',
      },
      { type: 'h3', html: 'Cómo llegar' },
      {
        type: 'p',
        html:
          'La alquería está a veinte kilómetros al sur de Arlés, por la carretera de Salin-de-Giraud. Venga en coche; no hay otra manera de alcanzar el delta. Vea también nuestra <a class="inline" href="/es/camarga/arles-in-a-weekend/">Arlés en un fin de semana</a>.',
      },
    ],
    verdictLabel: 'El veredicto · En un mot',
    verdictText:
      '«La Camarga sin el disfraz. Quédese dos noches, salga a caballo una vez, y deje que el delta lo ajuste a su propio ritmo.»',
    pcardLabel: 'La dirección · L’adresse',
    pcardName: 'Le Mas de Peint',
    pcardRows: [
      { k: 'Dirección', v: 'Le Sambuc, 13200 Arles' },
      { k: 'Sitio web', v: '<a href="#">masdepeint·com</a>' },
      { k: 'Abierto', v: 'De primavera a otoño' },
      { k: 'Reserva', v: 'Por noche; reserve con antelación' },
    ],
    pcardCta: 'Consultar disponibilidad',
    mapLabel: 'Le Sambuc, Arles, Bouches-du-Rhône',
    galleryLabel: 'La galería · En images',
    gallery: [
      { img: G1, alt: 'El delta a las primeras luces', wide: true },
      { img: G2, alt: 'El patio de la alquería' },
      { img: G3, alt: 'Un caballo entre las cañas' },
      { img: G4, alt: 'El jardín y la piscina' },
      { img: G5, alt: 'La marisma al crepúsculo' },
    ],
    nearbyLabel: 'Cerca · À proximité',
    nearbyHeading: 'Mientras esté en la <em>Camarga</em>',
    nearby: [
      { href: 'camargue', img: N1, alt: 'El parque ornitológico', rk: 'Aves · 20 min', title: 'Parque ornitológico de Pont de Gau', place: 'Saintes-Maries-de-la-Mer' },
      { href: 'camargue', img: N2, alt: 'Las salinas de Salin-de-Giraud', rk: 'Ruta · 25 min', title: 'Las salinas rosas', place: 'Salin-de-Giraud' },
      { href: 'camargue', img: N3, alt: 'El corazón romano de Arlés', rk: 'Ciudad · 25 min', title: 'Arlés la romana', place: 'Arles' },
    ],
  },
  },

  'chateau-les-carrasses': {
  en: {
    title: 'Château Les Carrasses — The South of France',
    description:
      'A nineteenth-century wine estate near Béziers turned into villas, pool and a bistro among the vines — our review, the verdict and what to see nearby.',
    heroImg: HERO,
    heroAlt: 'A wine château among Languedoc vineyards',
    crumb: ['languedoc', 'stays'],
    cat: 'Stay · Wine estate',
    h1: 'Château Les Carrasses',
    loc: 'Capestang · Hérault',
    stars: 4,
    facts: [
      { k: 'Type', v: 'Wine-estate hotel' },
      { k: 'Best season', v: 'May – October' },
      { k: 'From', v: '€240 / night' },
      { k: 'Rooms', v: '28 rooms & villas' },
      { k: 'Good for', v: 'Families and long stays' },
    ],
    bodyKicker: 'The Review · Notre avis',
    bodyH2: 'A wine estate that learned to keep <em>guests</em>.',
    body: [
      {
        type: 'p',
        lede: true,
        html:
          'Les Carrasses is a grand nineteenth-century wine château that sat empty for decades and was brought back, room by room, into one of the most relaxed places to stay in the Languedoc. The estate still makes wine; the courtyards and outbuildings have become rooms and self-catering villas, ranged around a long pool that looks straight out over its own vineyards to the hills.',
      },
      {
        type: 'p',
        html:
          'It is not a hushed, hands-off sort of hotel — there are children in the pool and bicycles against the wall — but the bones are serious: high ceilings, stone floors, the slow Languedoc light. You can cook for yourself or hand the evening to the bistro; either way the wine comes from the gate.',
      },
      { type: 'h3', html: 'The table' },
      {
        type: 'p',
        html:
          'The bistro sets up in the old chai and on the terrace, simple and southern: charcuterie, grilled fish, the estate’s own bottles. Read our full <a class="inline" href="/en/languedoc/languedoc-guide/">Languedoc guide</a>.',
      },
      { type: 'h3', html: 'Getting there' },
      {
        type: 'p',
        html:
          'The château is twenty minutes inland from Béziers, between Capestang and the Canal du Midi. Come by car — the vineyards and the canal are the reason to have one here. See also our <a class="inline" href="/en/languedoc/canal-du-midi-velo/">Canal du Midi by bicycle</a>.',
      },
    ],
    verdictLabel: 'The verdict · En un mot',
    verdictText:
      '“A grown-up holiday house with a vineyard attached. Take a villa for a week, ride the canal, and drink what grows over the wall.”',
    pcardLabel: 'The Address · L’adresse',
    pcardName: 'Château Les Carrasses',
    pcardRows: [
      { k: 'Address', v: 'Route de Capestang, 34310 Capestang, Hérault' },
      { k: 'Website', v: '<a href="#">lescarrasses·com</a>' },
      { k: 'Open', v: 'Most of the year' },
      { k: 'Reservations', v: 'By night or by week' },
    ],
    pcardCta: 'Check availability',
    mapLabel: 'Capestang, Hérault',
    galleryLabel: 'The Gallery · En images',
    gallery: [
      { img: G1, alt: 'The château among the vines', wide: true },
      { img: G2, alt: 'A courtyard of the estate' },
      { img: G3, alt: 'A cypress by an old wall' },
      { img: G4, alt: 'The pool above the vineyards' },
      { img: G5, alt: 'The vines at dusk' },
    ],
    nearbyLabel: 'Nearby · À proximité',
    nearbyHeading: 'While you are near the <em>Canal du Midi</em>',
    nearby: [
      { href: 'languedoc', img: N1, alt: 'The Canal du Midi', rk: 'Cycle · 10 min', title: 'The Canal du Midi towpath', place: 'Capestang' },
      { href: 'languedoc', img: N2, alt: 'The walls of Carcassonne', rk: 'Drive · 50 min', title: 'The medieval city', place: 'Carcassonne' },
      { href: 'languedoc', img: N3, alt: 'The cathedral of Béziers', rk: 'Town · 20 min', title: 'Saint-Nazaire cathedral', place: 'Béziers' },
    ],
  },
  fr: {
    title: 'Château Les Carrasses — The South of France',
    description:
      'Un domaine viticole du XIXᵉ siècle près de Béziers devenu villas, piscine et bistrot au milieu des vignes — notre avis, le verdict et que voir aux alentours.',
    heroImg: HERO,
    heroAlt: 'Un château viticole parmi les vignes du Languedoc',
    crumb: ['languedoc', 'stays'],
    cat: 'Séjour · Domaine viticole',
    h1: 'Château Les Carrasses',
    loc: 'Capestang · Hérault',
    stars: 4,
    facts: [
      { k: 'Type', v: 'Hôtel de domaine viticole' },
      { k: 'Saison idéale', v: 'Mai – octobre' },
      { k: 'À partir de', v: '240 € / nuit' },
      { k: 'Chambres', v: '28 chambres & villas' },
      { k: 'Idéal pour', v: 'Familles et longs séjours' },
    ],
    bodyKicker: 'Notre avis · The Review',
    bodyH2: 'Un domaine viticole qui a appris à garder ses <em>hôtes</em>.',
    body: [
      {
        type: 'p',
        lede: true,
        html:
          'Les Carrasses est un grand château viticole du XIXᵉ siècle resté vide pendant des décennies, ramené pièce par pièce à l’un des séjours les plus détendus du Languedoc. Le domaine fait toujours du vin ; les cours et les dépendances sont devenues des chambres et des villas indépendantes, disposées autour d’une longue piscine qui regarde droit ses propres vignes jusqu’aux collines.',
      },
      {
        type: 'p',
        html:
          'Ce n’est pas un hôtel feutré où l’on ne touche à rien — il y a des enfants dans la piscine et des vélos contre le mur — mais l’ossature est sérieuse : hauts plafonds, sols de pierre, la lumière lente du Languedoc. On peut cuisiner soi-même ou confier la soirée au bistrot ; dans les deux cas, le vin vient de la grille.',
      },
      { type: 'h3', html: 'La table' },
      {
        type: 'p',
        html:
          'Le bistrot s’installe dans l’ancien chai et sur la terrasse, simple et méridional : charcuterie, poisson grillé, les bouteilles du domaine. Lisez notre <a class="inline" href="/fr/languedoc/languedoc-guide/">guide du Languedoc</a>.',
      },
      { type: 'h3', html: 'Y aller' },
      {
        type: 'p',
        html:
          'Le château est à vingt minutes dans les terres au-dessus de Béziers, entre Capestang et le canal du Midi. Venez en voiture — les vignes et le canal sont la raison d’en avoir une ici. Voir aussi notre <a class="inline" href="/fr/languedoc/canal-du-midi-velo/">canal du Midi à vélo</a>.',
      },
    ],
    verdictLabel: 'En un mot · The verdict',
    verdictText:
      '« Une maison de vacances pour adultes avec une vigne en prime. Prenez une villa pour une semaine, longez le canal, et buvez ce qui pousse par-dessus le mur. »',
    pcardLabel: 'L’adresse · The Address',
    pcardName: 'Château Les Carrasses',
    pcardRows: [
      { k: 'Adresse', v: 'Route de Capestang, 34310 Capestang, Hérault' },
      { k: 'Site web', v: '<a href="#">lescarrasses·com</a>' },
      { k: 'Ouverture', v: 'Presque toute l’année' },
      { k: 'Réservation', v: 'À la nuit ou à la semaine' },
    ],
    pcardCta: 'Vérifier les disponibilités',
    mapLabel: 'Capestang, Hérault',
    galleryLabel: 'En images · The Gallery',
    gallery: [
      { img: G1, alt: 'Le château parmi les vignes', wide: true },
      { img: G2, alt: 'Une cour du domaine' },
      { img: G3, alt: 'Un cyprès près d’un vieux mur' },
      { img: G4, alt: 'La piscine au-dessus des vignes' },
      { img: G5, alt: 'Les vignes au crépuscule' },
    ],
    nearbyLabel: 'À proximité · Nearby',
    nearbyHeading: 'Pendant votre séjour près du <em>canal du Midi</em>',
    nearby: [
      { href: 'languedoc', img: N1, alt: 'Le canal du Midi', rk: 'Vélo · 10 min', title: 'Le chemin de halage du canal du Midi', place: 'Capestang' },
      { href: 'languedoc', img: N2, alt: 'Les remparts de Carcassonne', rk: 'Route · 50 min', title: 'La cité médiévale', place: 'Carcassonne' },
      { href: 'languedoc', img: N3, alt: 'La cathédrale de Béziers', rk: 'Ville · 20 min', title: 'Cathédrale Saint-Nazaire', place: 'Béziers' },
    ],
  },
  it: {
    title: 'Château Les Carrasses — The South of France',
    description:
      'Una tenuta vinicola dell’Ottocento vicino a Béziers trasformata in ville, piscina e bistrot tra le vigne — la nostra recensione, il verdetto e cosa vedere nei dintorni.',
    heroImg: HERO,
    heroAlt: 'Uno château vinicolo tra le vigne della Linguadoca',
    crumb: ['languedoc', 'stays'],
    cat: 'Soggiorno · Tenuta vinicola',
    h1: 'Château Les Carrasses',
    loc: 'Capestang · Hérault',
    stars: 4,
    facts: [
      { k: 'Tipo', v: 'Hotel di tenuta vinicola' },
      { k: 'Stagione ideale', v: 'Maggio – ottobre' },
      { k: 'A partire da', v: '240 € / notte' },
      { k: 'Camere', v: '28 camere e ville' },
      { k: 'Ideale per', v: 'Famiglie e lunghi soggiorni' },
    ],
    bodyKicker: 'La recensione · Notre avis',
    bodyH2: 'Una tenuta vinicola che ha imparato a tenere gli <em>ospiti</em>.',
    body: [
      {
        type: 'p',
        lede: true,
        html:
          'Les Carrasses è un grande château vinicolo dell’Ottocento rimasto vuoto per decenni e riportato, stanza per stanza, a uno dei soggiorni più rilassati della Linguadoca. La tenuta produce ancora vino; le corti e le dipendenze sono diventate camere e ville indipendenti, disposte intorno a una lunga piscina che guarda dritta le proprie vigne fino alle colline.',
      },
      {
        type: 'p',
        html:
          'Non è un hotel ovattato in cui non si tocca nulla — ci sono bambini in piscina e biciclette contro il muro — ma l’ossatura è seria: soffitti alti, pavimenti in pietra, la luce lenta della Linguadoca. Si può cucinare da soli o affidare la serata al bistrot; in entrambi i casi il vino viene dal cancello.',
      },
      { type: 'h3', html: 'La tavola' },
      {
        type: 'p',
        html:
          'Il bistrot si allestisce nella vecchia cantina e sulla terrazza, semplice e meridionale: salumi, pesce alla griglia, le bottiglie della tenuta. Leggete la nostra <a class="inline" href="/it/linguadoca/languedoc-guide/">guida della Linguadoca</a>.',
      },
      { type: 'h3', html: 'Come arrivare' },
      {
        type: 'p',
        html:
          'Lo château è a venti minuti nell’entroterra sopra Béziers, tra Capestang e il Canal du Midi. Venite in auto — le vigne e il canale sono la ragione per averne una qui. Vedete anche il nostro <a class="inline" href="/it/linguadoca/canal-du-midi-velo/">Canal du Midi in bicicletta</a>.',
      },
    ],
    verdictLabel: 'Il verdetto · En un mot',
    verdictText:
      '«Una casa per vacanze da adulti con una vigna in omaggio. Prendete una villa per una settimana, costeggiate il canale e bevete ciò che cresce oltre il muro.»',
    pcardLabel: 'L’indirizzo · L’adresse',
    pcardName: 'Château Les Carrasses',
    pcardRows: [
      { k: 'Indirizzo', v: 'Route de Capestang, 34310 Capestang, Hérault' },
      { k: 'Sito web', v: '<a href="#">lescarrasses·com</a>' },
      { k: 'Apertura', v: 'Quasi tutto l’anno' },
      { k: 'Prenotazione', v: 'A notte o a settimana' },
    ],
    pcardCta: 'Verifica disponibilità',
    mapLabel: 'Capestang, Hérault',
    galleryLabel: 'La galleria · En images',
    gallery: [
      { img: G1, alt: 'Lo château tra le vigne', wide: true },
      { img: G2, alt: 'Una corte della tenuta' },
      { img: G3, alt: 'Un cipresso accanto a un vecchio muro' },
      { img: G4, alt: 'La piscina sopra le vigne' },
      { img: G5, alt: 'Le vigne al crepuscolo' },
    ],
    nearbyLabel: 'Nei dintorni · À proximité',
    nearbyHeading: 'Mentre siete vicino al <em>Canal du Midi</em>',
    nearby: [
      { href: 'languedoc', img: N1, alt: 'Il Canal du Midi', rk: 'Bici · 10 min', title: 'L’alzaia del Canal du Midi', place: 'Capestang' },
      { href: 'languedoc', img: N2, alt: 'Le mura di Carcassonne', rk: 'Strada · 50 min', title: 'La città medievale', place: 'Carcassonne' },
      { href: 'languedoc', img: N3, alt: 'La cattedrale di Béziers', rk: 'Città · 20 min', title: 'Cattedrale Saint-Nazaire', place: 'Béziers' },
    ],
  },
  de: {
    title: 'Château Les Carrasses — The South of France',
    description:
      'Ein Weingut aus dem 19. Jahrhundert bei Béziers, verwandelt in Villen, Pool und ein Bistro zwischen den Reben — unsere Rezension, das Urteil und was es in der Nähe zu sehen gibt.',
    heroImg: HERO,
    heroAlt: 'Ein Weinschloss zwischen den Weinbergen des Languedoc',
    crumb: ['languedoc', 'stays'],
    cat: 'Aufenthalt · Weingut',
    h1: 'Château Les Carrasses',
    loc: 'Capestang · Hérault',
    stars: 4,
    facts: [
      { k: 'Art', v: 'Weingut-Hotel' },
      { k: 'Beste Saison', v: 'Mai – Oktober' },
      { k: 'Ab', v: '240 € / Nacht' },
      { k: 'Zimmer', v: '28 Zimmer & Villen' },
      { k: 'Ideal für', v: 'Familien und lange Aufenthalte' },
    ],
    bodyKicker: 'Die Rezension · Notre avis',
    bodyH2: 'Ein Weingut, das gelernt hat, <em>Gäste</em> zu behalten.',
    body: [
      {
        type: 'p',
        lede: true,
        html:
          'Les Carrasses ist ein großes Weinschloss aus dem 19. Jahrhundert, das jahrzehntelang leer stand und Zimmer für Zimmer zu einer der entspanntesten Adressen des Languedoc zurückgebracht wurde. Das Gut macht noch immer Wein; die Höfe und Nebengebäude sind zu Zimmern und Ferienvillen geworden, gruppiert um einen langen Pool, der geradewegs über die eigenen Weinberge bis zu den Hügeln blickt.',
      },
      {
        type: 'p',
        html:
          'Es ist kein gedämpftes Hotel zum Nichtanfassen — Kinder im Pool, Fahrräder an der Wand — aber das Gerüst ist ernsthaft: hohe Decken, Steinböden, das langsame Licht des Languedoc. Man kann selbst kochen oder den Abend dem Bistro überlassen; so oder so kommt der Wein vom Tor.',
      },
      { type: 'h3', html: 'Der Tisch' },
      {
        type: 'p',
        html:
          'Das Bistro richtet sich im alten Weinkeller und auf der Terrasse ein, einfach und südlich: Charcuterie, gegrillter Fisch, die eigenen Flaschen des Guts. Lesen Sie unseren <a class="inline" href="/de/languedoc/languedoc-guide/">Languedoc-Führer</a>.',
      },
      { type: 'h3', html: 'Anreise' },
      {
        type: 'p',
        html:
          'Das Schloss liegt zwanzig Minuten im Hinterland über Béziers, zwischen Capestang und dem Canal du Midi. Kommen Sie mit dem Auto — die Weinberge und der Kanal sind der Grund, hier eines zu haben. Siehe auch unseren <a class="inline" href="/de/languedoc/canal-du-midi-velo/">Canal du Midi mit dem Fahrrad</a>.',
      },
    ],
    verdictLabel: 'Das Urteil · En un mot',
    verdictText:
      '„Ein erwachsenes Ferienhaus mit angeschlossenem Weinberg. Nehmen Sie eine Villa für eine Woche, fahren Sie am Kanal entlang und trinken Sie, was über die Mauer wächst.“',
    pcardLabel: 'Die Adresse · L’adresse',
    pcardName: 'Château Les Carrasses',
    pcardRows: [
      { k: 'Anschrift', v: 'Route de Capestang, 34310 Capestang, Hérault' },
      { k: 'Website', v: '<a href="#">lescarrasses·com</a>' },
      { k: 'Geöffnet', v: 'Fast das ganze Jahr' },
      { k: 'Reservierung', v: 'Pro Nacht oder pro Woche' },
    ],
    pcardCta: 'Verfügbarkeit prüfen',
    mapLabel: 'Capestang, Hérault',
    galleryLabel: 'Die Galerie · En images',
    gallery: [
      { img: G1, alt: 'Das Schloss zwischen den Reben', wide: true },
      { img: G2, alt: 'Ein Hof des Guts' },
      { img: G3, alt: 'Eine Zypresse an einer alten Mauer' },
      { img: G4, alt: 'Der Pool über den Weinbergen' },
      { img: G5, alt: 'Die Reben in der Dämmerung' },
    ],
    nearbyLabel: 'In der Nähe · À proximité',
    nearbyHeading: 'Während Sie nahe dem <em>Canal du Midi</em> sind',
    nearby: [
      { href: 'languedoc', img: N1, alt: 'Der Canal du Midi', rk: 'Rad · 10 Min.', title: 'Der Treidelpfad des Canal du Midi', place: 'Capestang' },
      { href: 'languedoc', img: N2, alt: 'Die Mauern von Carcassonne', rk: 'Fahrt · 50 Min.', title: 'Die mittelalterliche Stadt', place: 'Carcassonne' },
      { href: 'languedoc', img: N3, alt: 'Die Kathedrale von Béziers', rk: 'Stadt · 20 Min.', title: 'Kathedrale Saint-Nazaire', place: 'Béziers' },
    ],
  },
  es: {
    title: 'Château Les Carrasses — The South of France',
    description:
      'Una finca vinícola del siglo XIX cerca de Béziers convertida en villas, piscina y un bistró entre las viñas — nuestra reseña, el veredicto y qué ver en los alrededores.',
    heroImg: HERO,
    heroAlt: 'Un château vinícola entre los viñedos del Languedoc',
    crumb: ['languedoc', 'stays'],
    cat: 'Estancia · Finca vinícola',
    h1: 'Château Les Carrasses',
    loc: 'Capestang · Hérault',
    stars: 4,
    facts: [
      { k: 'Tipo', v: 'Hotel de finca vinícola' },
      { k: 'Mejor temporada', v: 'Mayo – octubre' },
      { k: 'Desde', v: '240 € / noche' },
      { k: 'Habitaciones', v: '28 habitaciones y villas' },
      { k: 'Ideal para', v: 'Familias y estancias largas' },
    ],
    bodyKicker: 'La reseña · Notre avis',
    bodyH2: 'Una finca vinícola que aprendió a quedarse con sus <em>huéspedes</em>.',
    body: [
      {
        type: 'p',
        lede: true,
        html:
          'Les Carrasses es un gran château vinícola del siglo XIX que estuvo vacío durante décadas y fue devuelto, habitación a habitación, a una de las estancias más relajadas del Languedoc. La finca sigue haciendo vino; los patios y las dependencias se han convertido en habitaciones y villas independientes, dispuestas en torno a una larga piscina que mira de frente sus propios viñedos hasta las colinas.',
      },
      {
        type: 'p',
        html:
          'No es un hotel silencioso donde no se toca nada — hay niños en la piscina y bicicletas contra el muro — pero la estructura es seria: techos altos, suelos de piedra, la luz lenta del Languedoc. Se puede cocinar uno mismo o confiar la noche al bistró; en cualquier caso el vino viene de la verja.',
      },
      { type: 'h3', html: 'La mesa' },
      {
        type: 'p',
        html:
          'El bistró se instala en la antigua bodega y en la terraza, sencillo y meridional: charcutería, pescado a la brasa, las botellas de la finca. Lea nuestra <a class="inline" href="/es/languedoc/languedoc-guide/">guía del Languedoc</a>.',
      },
      { type: 'h3', html: 'Cómo llegar' },
      {
        type: 'p',
        html:
          'El château está a veinte minutos tierra adentro sobre Béziers, entre Capestang y el Canal du Midi. Venga en coche — los viñedos y el canal son la razón para tener uno aquí. Vea también nuestro <a class="inline" href="/es/languedoc/canal-du-midi-velo/">Canal du Midi en bicicleta</a>.',
      },
    ],
    verdictLabel: 'El veredicto · En un mot',
    verdictText:
      '«Una casa de vacaciones para adultos con un viñedo de regalo. Tome una villa por una semana, recorra el canal y beba lo que crece al otro lado del muro.»',
    pcardLabel: 'La dirección · L’adresse',
    pcardName: 'Château Les Carrasses',
    pcardRows: [
      { k: 'Dirección', v: 'Route de Capestang, 34310 Capestang, Hérault' },
      { k: 'Sitio web', v: '<a href="#">lescarrasses·com</a>' },
      { k: 'Abierto', v: 'Casi todo el año' },
      { k: 'Reserva', v: 'Por noche o por semana' },
    ],
    pcardCta: 'Consultar disponibilidad',
    mapLabel: 'Capestang, Hérault',
    galleryLabel: 'La galería · En images',
    gallery: [
      { img: G1, alt: 'El château entre las viñas', wide: true },
      { img: G2, alt: 'Un patio de la finca' },
      { img: G3, alt: 'Un ciprés junto a un viejo muro' },
      { img: G4, alt: 'La piscina sobre los viñedos' },
      { img: G5, alt: 'Las viñas al crepúsculo' },
    ],
    nearbyLabel: 'Cerca · À proximité',
    nearbyHeading: 'Mientras esté cerca del <em>Canal du Midi</em>',
    nearby: [
      { href: 'languedoc', img: N1, alt: 'El Canal du Midi', rk: 'Bici · 10 min', title: 'El camino de sirga del Canal du Midi', place: 'Capestang' },
      { href: 'languedoc', img: N2, alt: 'Las murallas de Carcassonne', rk: 'Ruta · 50 min', title: 'La ciudad medieval', place: 'Carcassonne' },
      { href: 'languedoc', img: N3, alt: 'La catedral de Béziers', rk: 'Ciudad · 20 min', title: 'Catedral Saint-Nazaire', place: 'Béziers' },
    ],
  },
  },
};

// Backward-compatible single-entry export (the original Crillon page).
export const adresse = adresses['crillon-le-brave'];
