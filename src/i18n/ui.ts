// ─────────────────────────────────────────────────────────────
// The South of France — UI chrome strings (nav + footer) per locale.
// The brand wordmark stays "The South of France" in every language.
// ─────────────────────────────────────────────────────────────
import type { Locale, SectionKey } from './config';

export interface NavItem {
  section: SectionKey;
  label: string;
  sub?: boolean; // rendered greyed (utility link)
}

export interface FooterCol {
  heading: string;
  links: { section: SectionKey; label: string }[];
}

export interface Chrome {
  nav: NavItem[];
  footer: {
    blurb: string;
    sections: FooterCol;
    journal: FooterCol;
    letterHeading: string;
    letterBlurb: string;
    letterPlaceholder: string;
    letterButton: string;
    fineLeft: string;
    fineRight: string;
  };
}

export const chrome: Record<Locale, Chrome> = {
  en: {
    nav: [
      { section: 'provence', label: 'Provence' },
      { section: 'french-riviera', label: 'Côte d’Azur' },
      { section: 'languedoc', label: 'Languedoc' },
      { section: 'camargue', label: 'Camargue' },
      { section: 'journal', label: 'The Journal' },
      { section: 'about', label: 'About', sub: true },
    ],
    footer: {
      blurb:
        'An independent multilingual journal of the Mediterranean. Four issues a year, in print and online — for those who travel the Midi slowly.',
      sections: {
        heading: 'Sections',
        links: [
          { section: 'provence', label: 'Provence' },
          { section: 'french-riviera', label: 'Côte d’Azur' },
          { section: 'languedoc', label: 'Languedoc' },
          { section: 'camargue', label: 'Camargue' },
          { section: 'the-table', label: 'The Table' },
          { section: 'things-to-do', label: 'Things to do' },
        ],
      },
      journal: {
        heading: 'The Journal',
        links: [
          { section: 'about', label: 'About us' },
          { section: 'stays', label: 'The Address Book' },
          { section: 'journal', label: 'Archive' },
          { section: 'contribute', label: 'Write for us' },
          { section: 'newsletter', label: 'Subscribe' },
          { section: 'contact', label: 'Contact' },
        ],
      },
      letterHeading: 'The Letter · La lettre',
      letterBlurb: 'One letter a month, from the road. The next address before anyone else.',
      letterPlaceholder: 'Your email — votre courriel',
      letterButton: 'Join',
      fineLeft: 'An independent journal · Made in the South',
      fineRight: '© MMXXVI · The South of France',
    },
  },
  fr: {
    nav: [
      { section: 'provence', label: 'Provence' },
      { section: 'french-riviera', label: 'Côte d’Azur' },
      { section: 'languedoc', label: 'Languedoc' },
      { section: 'camargue', label: 'Camargue' },
      { section: 'journal', label: 'Le Journal' },
      { section: 'about', label: 'À propos', sub: true },
    ],
    footer: {
      blurb:
        'Un journal indépendant et multilingue de la Méditerranée. Quatre numéros par an, en papier et en ligne — pour celles et ceux qui parcourent le Midi sans se presser.',
      sections: {
        heading: 'Rubriques',
        links: [
          { section: 'provence', label: 'Provence' },
          { section: 'french-riviera', label: 'Côte d’Azur' },
          { section: 'languedoc', label: 'Languedoc' },
          { section: 'camargue', label: 'Camargue' },
          { section: 'the-table', label: 'La Table' },
          { section: 'things-to-do', label: 'Que faire' },
        ],
      },
      journal: {
        heading: 'Le Journal',
        links: [
          { section: 'about', label: 'À propos' },
          { section: 'stays', label: 'Le carnet d’adresses' },
          { section: 'journal', label: 'Archives' },
          { section: 'contribute', label: 'Écrire pour nous' },
          { section: 'newsletter', label: 'S’abonner' },
          { section: 'contact', label: 'Contact' },
        ],
      },
      letterHeading: 'La Lettre · The Letter',
      letterBlurb: 'Une lettre par mois, depuis la route. La prochaine adresse avant tout le monde.',
      letterPlaceholder: 'Votre courriel — your email',
      letterButton: 'Rejoindre',
      fineLeft: 'Un journal indépendant · Fait dans le Sud',
      fineRight: '© MMXXVI · The South of France',
    },
  },
  it: {
    nav: [
      { section: 'provence', label: 'Provence' },
      { section: 'french-riviera', label: 'Côte d’Azur' },
      { section: 'languedoc', label: 'Languedoc' },
      { section: 'camargue', label: 'Camargue' },
      { section: 'journal', label: 'Il Giornale' },
      { section: 'about', label: 'Chi siamo', sub: true },
    ],
    footer: {
      blurb:
        'Una rivista indipendente e multilingue del Mediterraneo. Quattro numeri all’anno, su carta e online — per chi percorre il Midi senza fretta.',
      sections: {
        heading: 'Rubriche',
        links: [
          { section: 'provence', label: 'Provence' },
          { section: 'french-riviera', label: 'Côte d’Azur' },
          { section: 'languedoc', label: 'Languedoc' },
          { section: 'camargue', label: 'Camargue' },
          { section: 'the-table', label: 'La Tavola' },
          { section: 'things-to-do', label: 'Cosa fare' },
        ],
      },
      journal: {
        heading: 'Il Giornale',
        links: [
          { section: 'about', label: 'Chi siamo' },
          { section: 'stays', label: 'Il taccuino d’indirizzi' },
          { section: 'journal', label: 'Archivio' },
          { section: 'contribute', label: 'Scrivi per noi' },
          { section: 'newsletter', label: 'Abbonarsi' },
          { section: 'contact', label: 'Contatti' },
        ],
      },
      letterHeading: 'La Lettera · The Letter',
      letterBlurb: 'Una lettera al mese, dalla strada. Il prossimo indirizzo prima di tutti gli altri.',
      letterPlaceholder: 'La tua email — votre courriel',
      letterButton: 'Iscriviti',
      fineLeft: 'Una rivista indipendente · Fatta nel Sud',
      fineRight: '© MMXXVI · The South of France',
    },
  },
  de: {
    nav: [
      { section: 'provence', label: 'Provence' },
      { section: 'french-riviera', label: 'Côte d’Azur' },
      { section: 'languedoc', label: 'Languedoc' },
      { section: 'camargue', label: 'Camargue' },
      { section: 'journal', label: 'Das Journal' },
      { section: 'about', label: 'Über uns', sub: true },
    ],
    footer: {
      blurb:
        'Ein unabhängiges, mehrsprachiges Journal des Mittelmeers. Vier Ausgaben im Jahr, gedruckt und online — für alle, die den Midi mit Muße bereisen.',
      sections: {
        heading: 'Rubriken',
        links: [
          { section: 'provence', label: 'Provence' },
          { section: 'french-riviera', label: 'Côte d’Azur' },
          { section: 'languedoc', label: 'Languedoc' },
          { section: 'camargue', label: 'Camargue' },
          { section: 'the-table', label: 'Die Tafel' },
          { section: 'things-to-do', label: 'Aktivitäten' },
        ],
      },
      journal: {
        heading: 'Das Journal',
        links: [
          { section: 'about', label: 'Über uns' },
          { section: 'stays', label: 'Das Adressbuch' },
          { section: 'journal', label: 'Archiv' },
          { section: 'contribute', label: 'Für uns schreiben' },
          { section: 'newsletter', label: 'Abonnieren' },
          { section: 'contact', label: 'Kontakt' },
        ],
      },
      letterHeading: 'Der Brief · The Letter',
      letterBlurb: 'Ein Brief im Monat, von unterwegs. Die nächste Adresse vor allen anderen.',
      letterPlaceholder: 'Ihre E-Mail — votre courriel',
      letterButton: 'Beitreten',
      fineLeft: 'Ein unabhängiges Journal · Gemacht im Süden',
      fineRight: '© MMXXVI · The South of France',
    },
  },
  es: {
    nav: [
      { section: 'provence', label: 'Provence' },
      { section: 'french-riviera', label: 'Côte d’Azur' },
      { section: 'languedoc', label: 'Languedoc' },
      { section: 'camargue', label: 'Camargue' },
      { section: 'journal', label: 'El Diario' },
      { section: 'about', label: 'Quiénes somos', sub: true },
    ],
    footer: {
      blurb:
        'Una revista independiente y multilingüe del Mediterráneo. Cuatro números al año, en papel y en línea — para quienes recorren el Midi sin prisa.',
      sections: {
        heading: 'Secciones',
        links: [
          { section: 'provence', label: 'Provence' },
          { section: 'french-riviera', label: 'Côte d’Azur' },
          { section: 'languedoc', label: 'Languedoc' },
          { section: 'camargue', label: 'Camargue' },
          { section: 'the-table', label: 'La Mesa' },
          { section: 'things-to-do', label: 'Qué hacer' },
        ],
      },
      journal: {
        heading: 'El Diario',
        links: [
          { section: 'about', label: 'Quiénes somos' },
          { section: 'stays', label: 'La libreta de direcciones' },
          { section: 'journal', label: 'Archivo' },
          { section: 'contribute', label: 'Escribe para nosotros' },
          { section: 'newsletter', label: 'Suscribirse' },
          { section: 'contact', label: 'Contacto' },
        ],
      },
      letterHeading: 'La Carta · The Letter',
      letterBlurb: 'Una carta al mes, desde el camino. La próxima dirección antes que nadie.',
      letterPlaceholder: 'Tu correo — votre courriel',
      letterButton: 'Unirse',
      fineLeft: 'Una revista independiente · Hecha en el Sur',
      fineRight: '© MMXXVI · The South of France',
    },
  },
};
