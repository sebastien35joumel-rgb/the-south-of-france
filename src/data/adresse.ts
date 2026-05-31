// ─────────────────────────────────────────────────────────────
// Single "address book" entry — a hotel (nested under stays).
// Fully written EN + FR. Fields with markup are rendered set:html.
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

export const adresse: Partial<Record<Locale, AdresseContent>> = {
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
          'Dinner is taken in the old bistro or, in summer, on the terrace under the planes. The kitchen keeps it local and unfussy: vegetables from the kitchen garden, lamb from the Alpilles, a wine list that finally does the southern Rône justice. Breakfast — figs, honey, warm fougasse — is reason enough to stay a second night. Read our full <a class="inline" href="#">Provence table guide</a>.',
      },
      { type: 'h3', html: 'Getting there' },
      {
        type: 'p',
        html:
          'Crillon-le-Brave is forty minutes from Avignon TGV and a world away from anywhere. Come by car; the back roads through Bedoin and the vineyards are half the pleasure. See also our <a class="inline" href="#">weekend in the Luberon</a>.',
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
          'Le dîner se prend dans l’ancien bistrot ou, l’été, sur la terrasse sous les platanes. La cuisine reste locale et sans chichis : légumes du potager, agneau des Alpilles, une carte des vins qui rend enfin justice au Rhône méridional. Le petit-déjeuner — figues, miel, fougasse tiède — suffit à justifier une seconde nuit. Lisez notre <a class="inline" href="#">guide des tables de Provence</a>.',
      },
      { type: 'h3', html: 'Y aller' },
      {
        type: 'p',
        html:
          'Crillon-le-Brave est à quarante minutes de la gare TGV d’Avignon et à mille lieues de tout. Venez en voiture ; les routes secondaires par Bédoin et les vignes font la moitié du plaisir. Voir aussi notre <a class="inline" href="#">week-end dans le Luberon</a>.',
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
          'La cena si prende nel vecchio bistrot o, d’estate, sulla terrazza sotto i platani. La cucina resta locale e senza fronzoli: verdure dell’orto, agnello delle Alpilles, una carta dei vini che rende finalmente giustizia al Rodano meridionale. La colazione — fichi, miele, fougasse calda — è motivo sufficiente per fermarsi una seconda notte. Leggete la nostra <a class="inline" href="#">guida alle tavole di Provenza</a>.',
      },
      { type: 'h3', html: 'Come arrivare' },
      {
        type: 'p',
        html:
          'Crillon-le-Brave è a quaranta minuti dalla stazione TGV di Avignone e a un mondo di distanza da tutto. Venite in auto; le strade secondarie attraverso Bédoin e i vigneti sono metà del piacere. Vedete anche il nostro <a class="inline" href="#">fine settimana nel Luberon</a>.',
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
          'Das Abendessen nimmt man im alten Bistro oder, im Sommer, auf der Terrasse unter den Platanen ein. Die Küche bleibt lokal und unaufgeregt: Gemüse aus dem Küchengarten, Lamm aus den Alpilles, eine Weinkarte, die der südlichen Rhône endlich gerecht wird. Das Frühstück — Feigen, Honig, warme Fougasse — ist Grund genug für eine zweite Nacht. Lesen Sie unseren ausführlichen <a class="inline" href="#">Tafelführer für die Provence</a>.',
      },
      { type: 'h3', html: 'Anreise' },
      {
        type: 'p',
        html:
          'Crillon-le-Brave liegt vierzig Minuten vom TGV-Bahnhof Avignon und eine Welt von allem entfernt. Kommen Sie mit dem Auto; die Nebenstraßen durch Bédoin und die Weinberge sind die halbe Freude. Siehe auch unser <a class="inline" href="#">Wochenende im Luberon</a>.',
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
          'La cena se toma en el viejo bistró o, en verano, en la terraza bajo los plátanos. La cocina se mantiene local y sin alardes: verduras del huerto, cordero de los Alpilles, una carta de vinos que por fin hace justicia al Ródano meridional. El desayuno — higos, miel, fougasse caliente — basta como razón para quedarse una segunda noche. Lea nuestra completa <a class="inline" href="#">guía de mesas de Provenza</a>.',
      },
      { type: 'h3', html: 'Cómo llegar' },
      {
        type: 'p',
        html:
          'Crillon-le-Brave está a cuarenta minutos de la estación TGV de Aviñón y a un mundo de distancia de todo. Venga en coche; las carreteras secundarias por Bédoin y los viñedos son la mitad del placer. Vea también nuestro <a class="inline" href="#">fin de semana en el Luberon</a>.',
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
};
