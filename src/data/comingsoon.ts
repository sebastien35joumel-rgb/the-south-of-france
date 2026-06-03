// ─────────────────────────────────────────────────────────────
// "In preparation / Coming soon" pages, keyed by section then locale.
// These sections are linked across the site but not yet written, so
// they render a graceful placeholder (and are noindex'd in the router).
// ─────────────────────────────────────────────────────────────
import type { Locale, SectionKey } from '../i18n/config';

export interface ComingSoonContent {
  title: string;
  description: string;
  crumb: string;
  label: string;       // eyebrow
  h1: string;          // may contain <em>
  lede: string;        // the headline "being written" line
  note: string;        // one paragraph on what is coming
  backSection: SectionKey;
  backLabel: string;
  heroImg: string;
  heroAlt: string;
}

const IMG_TODO =
  'https://images.unsplash.com/photo-1446155844149-5ac83a06ca74?fm=jpg&q=76&w=2200&auto=format&fit=crop';
const IMG_JEW =
  'https://images.unsplash.com/photo-1604948559069-3287d5c5a6e5?fm=jpg&q=76&w=2200&auto=format&fit=crop';

type CSKey = 'things-to-do' | 'riviera-jewellers';

export const comingSoon: Record<CSKey, Partial<Record<Locale, ComingSoonContent>>> = {
  'things-to-do': {
    en: {
      title: 'Things to do — The South of France',
      description: 'Things to do across the South of France — a section we are still writing.',
      crumb: 'Things to do',
      label: 'In preparation · En préparation',
      h1: 'Things <em>to do</em>',
      lede: 'This section is still being written.',
      note: 'Soon: the experiences, gardens and museums we send friends to — visited in person, booked the ordinary way, and worth the detour. We would rather publish it late than publish it from a brochure. While it takes shape, the regions are the best place to start.',
      backSection: 'home',
      backLabel: 'Back to The South of France',
      heroImg: IMG_TODO,
      heroAlt: 'A path through the southern hills',
    },
    fr: {
      title: 'Que faire — The South of France',
      description: 'Que faire dans le Sud de la France — une rubrique encore en cours d’écriture.',
      crumb: 'Que faire',
      label: 'En préparation · In preparation',
      h1: 'Que <em>faire</em>',
      lede: 'Cette rubrique est encore en cours d’écriture.',
      note: 'Bientôt : les expériences, jardins et musées où nous envoyons nos amis — vus sur place, réservés normalement, et qui valent le détour. Nous préférons la publier en retard que la copier d’une brochure. En attendant qu’elle prenne forme, commencez par les régions.',
      backSection: 'home',
      backLabel: 'Retour à The South of France',
      heroImg: IMG_TODO,
      heroAlt: 'Un chemin dans les collines du Sud',
    },
    it: {
      title: 'Cosa fare — The South of France',
      description: 'Cosa fare nel Sud della Francia — una rubrica ancora in scrittura.',
      crumb: 'Cosa fare',
      label: 'In preparazione · En préparation',
      h1: 'Cosa <em>fare</em>',
      lede: 'Questa rubrica è ancora in scrittura.',
      note: 'Presto: le esperienze, i giardini e i musei dove mandiamo gli amici — visti di persona, prenotati nel modo consueto, e che valgono la deviazione. Preferiamo pubblicarla in ritardo piuttosto che copiarla da un dépliant. Nell’attesa, cominciate dalle regioni.',
      backSection: 'home',
      backLabel: 'Torna a The South of France',
      heroImg: IMG_TODO,
      heroAlt: 'Un sentiero tra le colline del Sud',
    },
    de: {
      title: 'Aktivitäten — The South of France',
      description: 'Aktivitäten im Süden Frankreichs — eine Rubrik, die noch entsteht.',
      crumb: 'Aktivitäten',
      label: 'In Vorbereitung · En préparation',
      h1: 'Was man <em>unternimmt</em>',
      lede: 'An dieser Rubrik wird noch geschrieben.',
      note: 'Bald: die Erlebnisse, Gärten und Museen, zu denen wir Freunde schicken — selbst besucht, ganz normal gebucht und den Umweg wert. Lieber spät veröffentlichen als aus einem Prospekt abschreiben. Bis dahin beginnen Sie am besten bei den Regionen.',
      backSection: 'home',
      backLabel: 'Zurück zu The South of France',
      heroImg: IMG_TODO,
      heroAlt: 'Ein Pfad durch die Hügel des Südens',
    },
    es: {
      title: 'Qué hacer — The South of France',
      description: 'Qué hacer en el Sur de Francia — una sección que todavía estamos escribiendo.',
      crumb: 'Qué hacer',
      label: 'En preparación · En préparation',
      h1: 'Qué <em>hacer</em>',
      lede: 'Esta sección todavía se está escribiendo.',
      note: 'Pronto: las experiencias, jardines y museos a los que enviamos a los amigos — vistos en persona, reservados de la forma habitual y que merecen el desvío. Preferimos publicarla tarde antes que copiarla de un folleto. Mientras toma forma, las regiones son el mejor punto de partida.',
      backSection: 'home',
      backLabel: 'Volver a The South of France',
      heroImg: IMG_TODO,
      heroAlt: 'Un sendero por las colinas del Sur',
    },
  },
  'riviera-jewellers': {
    en: {
      title: 'The jewellers of the Riviera — The South of France',
      description: 'A coming guide to the goldsmiths and jewellers of Cannes, Mougins and the Riviera.',
      crumb: 'Riviera Jewellers',
      label: 'In preparation · En préparation',
      h1: 'The jewellers of the <em>Riviera</em>',
      lede: 'This section is still being written.',
      note: 'Soon: a short, opinionated guide to the goldsmiths and jewellers of Cannes, Mougins and the hills behind them — the workshops where a thing is still made, repaired and weighed by hand. We are visiting them one by one before we write a word.',
      backSection: 'french-riviera',
      backLabel: 'Discover the Côte d’Azur',
      heroImg: IMG_JEW,
      heroAlt: 'Light on a southern façade',
    },
    fr: {
      title: 'Les joailliers de la Riviera — The South of France',
      description: 'Un guide à venir des orfèvres et joailliers de Cannes, Mougins et la Riviera.',
      crumb: 'Joailliers de la Riviera',
      label: 'En préparation · In preparation',
      h1: 'Les joailliers de la <em>Riviera</em>',
      lede: 'Cette rubrique est encore en cours d’écriture.',
      note: 'Bientôt : un guide bref et sans détour des orfèvres et joailliers de Cannes, Mougins et de l’arrière-pays — ces ateliers où l’on fabrique, répare et pèse encore à la main. Nous les visitons un à un avant d’en écrire la moindre ligne.',
      backSection: 'french-riviera',
      backLabel: 'Découvrir la Côte d’Azur',
      heroImg: IMG_JEW,
      heroAlt: 'La lumière sur une façade du Sud',
    },
    it: {
      title: 'I gioiellieri della Riviera — The South of France',
      description: 'Una guida in arrivo agli orafi e gioiellieri di Cannes, Mougins e la Riviera.',
      crumb: 'Gioiellieri della Riviera',
      label: 'In preparazione · En préparation',
      h1: 'I gioiellieri della <em>Riviera</em>',
      lede: 'Questa rubrica è ancora in scrittura.',
      note: 'Presto: una guida breve e senza giri di parole agli orafi e gioiellieri di Cannes, Mougins e dell’entroterra — le botteghe dove ancora si crea, si ripara e si pesa a mano. Li visitiamo uno a uno prima di scriverne una riga.',
      backSection: 'french-riviera',
      backLabel: 'Scopri la Costa Azzurra',
      heroImg: IMG_JEW,
      heroAlt: 'La luce su una facciata del Sud',
    },
    de: {
      title: 'Die Juweliere der Riviera — The South of France',
      description: 'Ein kommender Führer zu den Goldschmieden und Juwelieren von Cannes, Mougins und der Riviera.',
      crumb: 'Riviera-Juweliere',
      label: 'In Vorbereitung · En préparation',
      h1: 'Die Juweliere der <em>Riviera</em>',
      lede: 'An dieser Rubrik wird noch geschrieben.',
      note: 'Bald: ein kurzer, klarer Führer zu den Goldschmieden und Juwelieren von Cannes, Mougins und dem Hinterland — den Werkstätten, in denen noch von Hand gefertigt, repariert und gewogen wird. Wir besuchen sie einzeln, bevor wir ein Wort schreiben.',
      backSection: 'french-riviera',
      backLabel: 'Die Côte d’Azur entdecken',
      heroImg: IMG_JEW,
      heroAlt: 'Licht auf einer Fassade des Südens',
    },
    es: {
      title: 'Los joyeros de la Riviera — The South of France',
      description: 'Una guía por venir de los orfebres y joyeros de Cannes, Mougins y la Riviera.',
      crumb: 'Joyeros de la Riviera',
      label: 'En preparación · En préparation',
      h1: 'Los joyeros de la <em>Riviera</em>',
      lede: 'Esta sección todavía se está escribiendo.',
      note: 'Pronto: una guía breve y sin rodeos de los orfebres y joyeros de Cannes, Mougins y el interior — los talleres donde aún se crea, se repara y se pesa a mano. Los visitamos uno a uno antes de escribir una sola línea.',
      backSection: 'french-riviera',
      backLabel: 'Descubrir la Costa Azul',
      heroImg: IMG_JEW,
      heroAlt: 'La luz sobre una fachada del Sur',
    },
  },
};
