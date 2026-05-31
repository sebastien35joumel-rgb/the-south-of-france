// ─────────────────────────────────────────────────────────────
// Contact page content, keyed by locale.
// EN is faithful to the gabarit; FR is a same-register translation.
// Email channels and the Marseille office are kept verbatim.
// ─────────────────────────────────────────────────────────────
import type { Locale } from '../i18n/config';

export interface ContactWay { title: string; text: string; email: string; }
export interface ContactAddress { city: string; lines: string[]; }
export interface ContactForm {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  subjectLabel: string;
  subjectOptions: string[];
  messageLabel: string;
  messagePlaceholder: string;
  submit: string;
  note: string;
}

export interface ContactContent {
  title: string;
  description: string;
  headLabel: string;
  h1: string; // may contain <em>
  deck: string;
  ways: ContactWay[];
  address: ContactAddress;
  form: ContactForm;
  bandLabel: string;
  bandQ: string; // may contain <em>
  bandFr: string;
}

export const contact: Partial<Record<Locale, ContactContent>> = {
  en: {
    title: 'Contact — The South of France',
    description:
      'Write to the editors of The South of France — story tips, address suggestions, press and partnerships.',
    headLabel: 'Say hello · Écrivez-nous',
    h1: 'Write to the <em>editors</em>',
    deck: 'A secret cove, a table worth the detour, a question about an issue — we read every letter.',
    ways: [
      {
        title: 'A story or an address',
        text: 'You know a place we should write about — or one we got wrong. This is the letter we open first.',
        email: 'editors@the-south-of-france.com',
      },
      {
        title: 'Press & rights',
        text: 'Syndication, image licensing and reprints from the print edition.',
        email: 'press@the-south-of-france.com',
      },
      {
        title: 'Partnerships',
        text: 'We carry no advertising in disguise. We do work with a small number of aligned partners — clearly labelled, never in our reviews.',
        email: 'partners@the-south-of-france.com',
      },
    ],
    address: {
      city: 'The office',
      lines: ['La Rédaction — The South of France', 'Le Panier, 13002 Marseille', 'France'],
    },
    form: {
      nameLabel: 'Your name',
      namePlaceholder: 'Jean Dupont',
      emailLabel: 'Your email',
      emailPlaceholder: 'vous@exemple.fr',
      subjectLabel: 'What is this about?',
      subjectOptions: [
        'A story or an address',
        'Press & rights',
        'Partnerships',
        'Subscriptions & the print edition',
        'Something else',
      ],
      messageLabel: 'Your letter',
      messagePlaceholder: 'Tell us where to go next…',
      submit: 'Send the letter →',
      note: 'We answer in French or in English — whichever you write in.',
    },
    bandLabel: 'Our promise · Notre promesse',
    bandQ: 'We write only about places we have paid for, slept in, and would <em>return to.</em>',
    bandFr: 'Aucune publicité déguisée, aucun séjour offert.',
  },
  fr: {
    title: 'Contact — The South of France',
    description:
      'Écrivez à la rédaction de The South of France — idées de sujets, adresses à nous souffler, presse et partenariats.',
    headLabel: 'Écrivez-nous · Say hello',
    h1: 'Écrivez à la <em>rédaction</em>',
    deck: 'Une calanque secrète, une table qui vaut le détour, une question sur un numéro — nous lisons chaque lettre.',
    ways: [
      {
        title: 'Un sujet ou une adresse',
        text: 'Vous connaissez un lieu dont nous devrions parler — ou un que nous avons mal jugé. C’est la lettre que nous ouvrons en premier.',
        email: 'editors@the-south-of-france.com',
      },
      {
        title: 'Presse & droits',
        text: 'Syndication, licence d’images et reprises de l’édition imprimée.',
        email: 'press@the-south-of-france.com',
      },
      {
        title: 'Partenariats',
        text: 'Nous ne portons aucune publicité déguisée. Nous travaillons avec un petit nombre de partenaires alignés — clairement identifiés, jamais dans nos critiques.',
        email: 'partners@the-south-of-france.com',
      },
    ],
    address: {
      city: 'Le bureau',
      lines: ['La Rédaction — The South of France', 'Le Panier, 13002 Marseille', 'France'],
    },
    form: {
      nameLabel: 'Votre nom',
      namePlaceholder: 'Jean Dupont',
      emailLabel: 'Votre courriel',
      emailPlaceholder: 'vous@exemple.fr',
      subjectLabel: 'À quel sujet ?',
      subjectOptions: [
        'Un sujet ou une adresse',
        'Presse & droits',
        'Partenariats',
        'Abonnements & édition imprimée',
        'Autre chose',
      ],
      messageLabel: 'Votre lettre',
      messagePlaceholder: 'Dites-nous où aller ensuite…',
      submit: 'Envoyer la lettre →',
      note: 'Nous répondons en français ou en anglais — selon la langue de votre lettre.',
    },
    bandLabel: 'Notre promesse · Our promise',
    bandQ: 'Nous n’écrivons que sur les lieux que nous avons payés, où nous avons dormi, et où nous <em>reviendrions.</em>',
    bandFr: 'No advertising in disguise, no comped stays.',
  },
  it: {
    title: 'Contatti — The South of France',
    description:
      'Scrivete alla redazione di The South of France — proposte di reportage, indirizzi da segnalare, stampa e collaborazioni.',
    headLabel: 'Scriveteci · Écrivez-nous',
    h1: 'Scrivete alla <em>redazione</em>',
    deck: 'Una cala segreta, una tavola che vale la deviazione, una domanda su un numero — leggiamo ogni lettera.',
    ways: [
      {
        title: 'Un reportage o un indirizzo',
        text: 'Conoscete un luogo di cui dovremmo scrivere — o uno che abbiamo giudicato male. È la lettera che apriamo per prima.',
        email: 'editors@the-south-of-france.com',
      },
      {
        title: 'Stampa & diritti',
        text: 'Sindacazione, licenze di immagini e riproduzioni dall’edizione a stampa.',
        email: 'press@the-south-of-france.com',
      },
      {
        title: 'Collaborazioni',
        text: 'Non ospitiamo alcuna pubblicità mascherata. Lavoriamo con un piccolo numero di partner affini — chiaramente indicati, mai nelle nostre recensioni.',
        email: 'partners@the-south-of-france.com',
      },
    ],
    address: {
      city: 'L’ufficio',
      lines: ['La Rédaction — The South of France', 'Le Panier, 13002 Marseille', 'France'],
    },
    form: {
      nameLabel: 'Il vostro nome',
      namePlaceholder: 'Jean Dupont',
      emailLabel: 'La vostra email',
      emailPlaceholder: 'vous@exemple.fr',
      subjectLabel: 'Di che cosa si tratta?',
      subjectOptions: [
        'Un reportage o un indirizzo',
        'Stampa & diritti',
        'Collaborazioni',
        'Abbonamenti & edizione a stampa',
        'Altro',
      ],
      messageLabel: 'La vostra lettera',
      messagePlaceholder: 'Diteci dove andare la prossima volta…',
      submit: 'Inviare la lettera →',
      note: 'Rispondiamo in francese o in inglese — nella lingua in cui scrivete.',
    },
    bandLabel: 'La nostra promessa · Notre promesse',
    bandQ: 'Scriviamo soltanto dei luoghi che abbiamo pagato, dove abbiamo dormito e dove <em>torneremmo.</em>',
    bandFr: 'Aucune publicité déguisée, aucun séjour offert.',
  },
  de: {
    title: 'Kontakt — The South of France',
    description:
      'Schreiben Sie der Redaktion von The South of France — Themenhinweise, Adressvorschläge, Presse und Partnerschaften.',
    headLabel: 'Schreiben Sie uns · Écrivez-nous',
    h1: 'Schreiben Sie der <em>Redaktion</em>',
    deck: 'Eine geheime Bucht, ein Tisch, der den Umweg wert ist, eine Frage zu einer Ausgabe — wir lesen jeden Brief.',
    ways: [
      {
        title: 'Eine Geschichte oder eine Adresse',
        text: 'Sie kennen einen Ort, über den wir schreiben sollten — oder einen, den wir falsch eingeschätzt haben. Diesen Brief öffnen wir zuerst.',
        email: 'editors@the-south-of-france.com',
      },
      {
        title: 'Presse & Rechte',
        text: 'Syndizierung, Bildlizenzen und Nachdrucke aus der Printausgabe.',
        email: 'press@the-south-of-france.com',
      },
      {
        title: 'Partnerschaften',
        text: 'Wir führen keine verkappte Werbung. Wir arbeiten mit einer kleinen Zahl passender Partner zusammen — klar gekennzeichnet, nie in unseren Kritiken.',
        email: 'partners@the-south-of-france.com',
      },
    ],
    address: {
      city: 'Das Büro',
      lines: ['La Rédaction — The South of France', 'Le Panier, 13002 Marseille', 'France'],
    },
    form: {
      nameLabel: 'Ihr Name',
      namePlaceholder: 'Jean Dupont',
      emailLabel: 'Ihre E-Mail',
      emailPlaceholder: 'vous@exemple.fr',
      subjectLabel: 'Worum geht es?',
      subjectOptions: [
        'Eine Geschichte oder eine Adresse',
        'Presse & Rechte',
        'Partnerschaften',
        'Abonnements & Printausgabe',
        'Etwas anderes',
      ],
      messageLabel: 'Ihr Brief',
      messagePlaceholder: 'Sagen Sie uns, wohin als Nächstes…',
      submit: 'Den Brief senden →',
      note: 'Wir antworten auf Französisch oder Englisch — je nachdem, worin Sie schreiben.',
    },
    bandLabel: 'Unser Versprechen · Notre promesse',
    bandQ: 'Wir schreiben nur über Orte, die wir bezahlt haben, in denen wir geschlafen haben und zu denen wir <em>zurückkehren würden.</em>',
    bandFr: 'Aucune publicité déguisée, aucun séjour offert.',
  },
  es: {
    title: 'Contacto — The South of France',
    description:
      'Escriba a la redacción de The South of France — ideas de temas, direcciones que sugerirnos, prensa y colaboraciones.',
    headLabel: 'Escríbanos · Écrivez-nous',
    h1: 'Escriba a la <em>redacción</em>',
    deck: 'Una cala secreta, una mesa que merece el rodeo, una pregunta sobre un número — leemos cada carta.',
    ways: [
      {
        title: 'Un tema o una dirección',
        text: 'Conoce un lugar del que deberíamos escribir — o uno que juzgamos mal. Es la carta que abrimos primero.',
        email: 'editors@the-south-of-france.com',
      },
      {
        title: 'Prensa & derechos',
        text: 'Sindicación, licencia de imágenes y reproducciones de la edición impresa.',
        email: 'press@the-south-of-france.com',
      },
      {
        title: 'Colaboraciones',
        text: 'No publicamos ninguna publicidad encubierta. Trabajamos con un pequeño número de socios afines — claramente identificados, nunca en nuestras reseñas.',
        email: 'partners@the-south-of-france.com',
      },
    ],
    address: {
      city: 'La oficina',
      lines: ['La Rédaction — The South of France', 'Le Panier, 13002 Marseille', 'France'],
    },
    form: {
      nameLabel: 'Su nombre',
      namePlaceholder: 'Jean Dupont',
      emailLabel: 'Su correo electrónico',
      emailPlaceholder: 'vous@exemple.fr',
      subjectLabel: '¿Sobre qué trata?',
      subjectOptions: [
        'Un tema o una dirección',
        'Prensa & derechos',
        'Colaboraciones',
        'Suscripciones & edición impresa',
        'Otra cosa',
      ],
      messageLabel: 'Su carta',
      messagePlaceholder: 'Díganos adónde ir la próxima vez…',
      submit: 'Enviar la carta →',
      note: 'Respondemos en francés o en inglés — según la lengua en que escriba.',
    },
    bandLabel: 'Nuestra promesa · Notre promesse',
    bandQ: 'Solo escribimos sobre los lugares que hemos pagado, donde hemos dormido y a los que <em>volveríamos.</em>',
    bandFr: 'Aucune publicité déguisée, aucun séjour offert.',
  },
};
