// ─────────────────────────────────────────────────────────────
// Newsletter ("The Letter") content, keyed by locale.
// Written EN+FR following the bilingual source mock-up.
// ─────────────────────────────────────────────────────────────
import type { Locale } from '../i18n/config';

export interface NewsletterGet { no: string; h3: string; text: string; }

export interface NewsletterContent {
  title: string;
  description: string;
  heroImg: string;
  heroAlt: string;
  heroLabel: string;
  h1: string; // may contain <em>
  deck: string;
  emailPlaceholder: string;
  submit: string;
  fine: string;
  getsLabel: string;
  getsHeading: string; // may contain <em>
  gets: NewsletterGet[];
  sampleImg: string;
  sampleAlt: string;
  sampleLabel: string;
  sampleQuote: string; // may contain <em>
  sampleBody: string;
  sampleSig: string;
}

const HERO_IMG = 'https://images.unsplash.com/photo-1587579785043-eccb9f70391d?fm=jpg&q=76&w=2200&auto=format&fit=crop';
const SAMPLE_IMG = 'https://images.unsplash.com/photo-1597824854158-9226c52cd21b?fm=jpg&q=76&w=1100&auto=format&fit=crop';

export const newsletter: Partial<Record<Locale, NewsletterContent>> = {
  en: {
    title: 'The Letter — The South of France',
    description:
      'One letter a month, from the road. The next Mediterranean address before anyone else — free, bilingual, no advertising.',
    heroImg: HERO_IMG,
    heroAlt: 'A coastal village on the French Riviera at dusk',
    heroLabel: 'The Letter · La lettre',
    h1: 'One letter a month, <em>from the road</em>',
    deck: 'The next Mediterranean address before anyone else — a single hotel, one table, a walk worth the train. No noise, no advertising, written by hand.',
    emailPlaceholder: 'Your email — votre courriel',
    submit: 'Subscribe',
    fine: 'Free · bilingual EN / FR · unsubscribe in one click.',
    getsLabel: 'What lands in your inbox · Ce que vous recevez',
    getsHeading: 'Three things, <em>once a month</em>',
    gets: [
      { no: 'I', h3: 'One address', text: 'A single place we have just been — the room, the table, the view — with everything you need to go yourself. Never more than one.' },
      { no: 'II', h3: 'A short read', text: 'A page from a report in progress, before it appears in the journal. The Midi at the speed of a long letter, not a feed.' },
      { no: 'III', h3: 'The right season', text: 'When to go and when to stay away — the week the lavender turns, the month a village belongs to itself again.' },
    ],
    sampleImg: SAMPLE_IMG,
    sampleAlt: 'A perched Provence village seen from above',
    sampleLabel: 'From last month · La dernière lettre',
    sampleQuote: '“Go to the Luberon in <em>October</em>, when the crowds have gone home.”',
    sampleBody: 'The vines turn first, then the plane trees on the squares. The light goes long and gold, the tables empty, and a perched village like Ménerbes finally belongs to the people who live there. This month: one inn, one table, and the back road between them.',
    sampleSig: '— The Editors, from Gordes',
  },
  fr: {
    title: 'La Lettre — The South of France',
    description:
      'Une lettre par mois, depuis la route. La prochaine adresse méditerranéenne avant tout le monde — gratuite, bilingue, sans publicité.',
    heroImg: HERO_IMG,
    heroAlt: 'Un village côtier de la Côte d’Azur au crépuscule',
    heroLabel: 'La lettre · The Letter',
    h1: 'Une lettre par mois, <em>depuis la route</em>',
    deck: 'La prochaine adresse méditerranéenne avant tout le monde — un seul hôtel, une table, une balade qui vaut le train. Pas de bruit, pas de publicité, écrite à la main.',
    emailPlaceholder: 'Votre courriel — your email',
    submit: 'S’abonner',
    fine: 'Gratuite · bilingue EN / FR · désabonnement en un clic.',
    getsLabel: 'Ce que vous recevez · What lands in your inbox',
    getsHeading: 'Trois choses, <em>une fois par mois</em>',
    gets: [
      { no: 'I', h3: 'Une adresse', text: 'Un seul lieu où nous venons de passer — la chambre, la table, la vue — avec tout ce qu’il faut pour y aller vous-même. Jamais plus d’une.' },
      { no: 'II', h3: 'Une lecture brève', text: 'Une page d’un reportage en cours, avant qu’il ne paraisse dans le journal. Le Midi au rythme d’une longue lettre, pas d’un fil d’actualité.' },
      { no: 'III', h3: 'La bonne saison', text: 'Quand partir et quand s’abstenir — la semaine où la lavande tourne, le mois où un village se retrouve enfin lui-même.' },
    ],
    sampleImg: SAMPLE_IMG,
    sampleAlt: 'Un village perché de Provence vu d’en haut',
    sampleLabel: 'La dernière lettre · From last month',
    sampleQuote: '« Allez dans le Luberon en <em>octobre</em>, quand la foule est rentrée chez elle. »',
    sampleBody: 'Les vignes tournent d’abord, puis les platanes sur les places. La lumière s’allonge et se dore, les tables se vident, et un village perché comme Ménerbes appartient enfin à ceux qui y vivent. Ce mois-ci : une auberge, une table, et la route secondaire entre les deux.',
    sampleSig: '— La rédaction, depuis Gordes',
  },
  it: {
    title: 'La Lettera — The South of France',
    description:
      'Una lettera al mese, dalla strada. Il prossimo indirizzo mediterraneo prima di chiunque altro — gratuita, bilingue, senza pubblicità.',
    heroImg: HERO_IMG,
    heroAlt: 'Un villaggio costiero della Costa Azzurra al crepuscolo',
    heroLabel: 'La Lettera · The Letter',
    h1: 'Una lettera al mese, <em>dalla strada</em>',
    deck: 'Il prossimo indirizzo mediterraneo prima di chiunque altro — un solo hotel, una tavola, una passeggiata che vale il treno. Niente rumore, niente pubblicità, scritta a mano.',
    emailPlaceholder: 'La tua email — your email',
    submit: 'Iscriviti',
    fine: 'Gratuita · bilingue EN / FR · disiscrizione con un clic.',
    getsLabel: 'Ciò che arriva nella tua casella · What lands in your inbox',
    getsHeading: 'Tre cose, <em>una volta al mese</em>',
    gets: [
      { no: 'I', h3: 'Un indirizzo', text: 'Un solo luogo dove siamo appena stati — la camera, la tavola, la vista — con tutto il necessario per andarci da soli. Mai più di uno.' },
      { no: 'II', h3: 'Una lettura breve', text: 'Una pagina di un reportage in corso, prima che esca sul giornale. Il Midi al ritmo di una lunga lettera, non di un feed.' },
      { no: 'III', h3: 'La stagione giusta', text: 'Quando partire e quando astenersi — la settimana in cui la lavanda cambia, il mese in cui un villaggio torna finalmente a sé stesso.' },
    ],
    sampleImg: SAMPLE_IMG,
    sampleAlt: 'Un villaggio arroccato di Provenza visto dall’alto',
    sampleLabel: 'Dall’ultima lettera · From last month',
    sampleQuote: '«Andate nel Luberon a <em>ottobre</em>, quando la folla è tornata a casa.»',
    sampleBody: 'Prima girano le vigne, poi i platani sulle piazze. La luce si allunga e si fa dorata, le tavole si svuotano, e un villaggio arroccato come Ménerbes appartiene finalmente a chi ci vive. Questo mese: una locanda, una tavola, e la strada secondaria tra le due.',
    sampleSig: '— La redazione, da Gordes',
  },
  de: {
    title: 'Der Brief — The South of France',
    description:
      'Ein Brief im Monat, von unterwegs. Die nächste mediterrane Adresse vor allen anderen — kostenlos, zweisprachig, ohne Werbung.',
    heroImg: HERO_IMG,
    heroAlt: 'Ein Küstendorf an der Côte d’Azur in der Dämmerung',
    heroLabel: 'Der Brief · The Letter',
    h1: 'Ein Brief im Monat, <em>von unterwegs</em>',
    deck: 'Die nächste mediterrane Adresse vor allen anderen — ein einziges Hotel, ein Tisch, ein Spaziergang, der die Bahnfahrt wert ist. Kein Lärm, keine Werbung, von Hand geschrieben.',
    emailPlaceholder: 'Ihre E-Mail — your email',
    submit: 'Abonnieren',
    fine: 'Kostenlos · zweisprachig EN / FR · Abmeldung mit einem Klick.',
    getsLabel: 'Was in Ihrem Postfach landet · What lands in your inbox',
    getsHeading: 'Drei Dinge, <em>einmal im Monat</em>',
    gets: [
      { no: 'I', h3: 'Eine Adresse', text: 'Ein einziger Ort, an dem wir gerade waren — das Zimmer, der Tisch, die Aussicht — mit allem, was Sie brauchen, um selbst hinzufahren. Nie mehr als einer.' },
      { no: 'II', h3: 'Eine kurze Lektüre', text: 'Eine Seite aus einer Reportage in Arbeit, bevor sie im Journal erscheint. Der Midi im Tempo eines langen Briefes, nicht eines Feeds.' },
      { no: 'III', h3: 'Die richtige Jahreszeit', text: 'Wann man fahren und wann man fernbleiben sollte — die Woche, in der der Lavendel sich färbt, der Monat, in dem ein Dorf wieder sich selbst gehört.' },
    ],
    sampleImg: SAMPLE_IMG,
    sampleAlt: 'Ein hoch gelegenes Dorf der Provence von oben gesehen',
    sampleLabel: 'Aus dem letzten Brief · From last month',
    sampleQuote: '„Fahren Sie im <em>Oktober</em> in den Luberon, wenn die Menge nach Hause gegangen ist.“',
    sampleBody: 'Zuerst färben sich die Reben, dann die Platanen auf den Plätzen. Das Licht wird lang und golden, die Tische leeren sich, und ein hoch gelegenes Dorf wie Ménerbes gehört endlich denen, die dort leben. Diesen Monat: ein Gasthaus, ein Tisch und die Nebenstraße dazwischen.',
    sampleSig: '— Die Redaktion, aus Gordes',
  },
  es: {
    title: 'La Carta — The South of France',
    description:
      'Una carta al mes, desde la carretera. La próxima dirección mediterránea antes que nadie — gratuita, bilingüe, sin publicidad.',
    heroImg: HERO_IMG,
    heroAlt: 'Un pueblo costero de la Costa Azul al atardecer',
    heroLabel: 'La Carta · The Letter',
    h1: 'Una carta al mes, <em>desde la carretera</em>',
    deck: 'La próxima dirección mediterránea antes que nadie — un solo hotel, una mesa, un paseo que vale el tren. Sin ruido, sin publicidad, escrita a mano.',
    emailPlaceholder: 'Tu correo — your email',
    submit: 'Suscribirse',
    fine: 'Gratuita · bilingüe EN / FR · baja con un solo clic.',
    getsLabel: 'Lo que llega a tu bandeja · What lands in your inbox',
    getsHeading: 'Tres cosas, <em>una vez al mes</em>',
    gets: [
      { no: 'I', h3: 'Una dirección', text: 'Un único lugar donde acabamos de estar — la habitación, la mesa, la vista — con todo lo necesario para ir tú mismo. Nunca más de uno.' },
      { no: 'II', h3: 'Una lectura breve', text: 'Una página de un reportaje en curso, antes de que aparezca en el diario. El Midi al ritmo de una larga carta, no de un feed.' },
      { no: 'III', h3: 'La estación justa', text: 'Cuándo partir y cuándo abstenerse — la semana en que la lavanda cambia, el mes en que un pueblo vuelve por fin a ser suyo.' },
    ],
    sampleImg: SAMPLE_IMG,
    sampleAlt: 'Un pueblo encaramado de Provenza visto desde lo alto',
    sampleLabel: 'De la última carta · From last month',
    sampleQuote: '«Vayan al Luberon en <em>octubre</em>, cuando la multitud ha vuelto a casa.»',
    sampleBody: 'Primero giran las viñas, luego los plátanos de las plazas. La luz se alarga y se dora, las mesas se vacían, y un pueblo encaramado como Ménerbes pertenece por fin a quienes lo habitan. Este mes: una posada, una mesa, y la carretera secundaria entre ambas.',
    sampleSig: '— La redacción, desde Gordes',
  },
};
