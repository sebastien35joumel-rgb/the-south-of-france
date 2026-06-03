// ─────────────────────────────────────────────────────────────
// Contact page content, keyed by locale.
// EN is faithful to the gabarit; FR is a same-register translation.
// No email addresses are displayed: every channel routes through the form.
// ─────────────────────────────────────────────────────────────
import type { Locale } from '../i18n/config';

export interface ContactWay { title: string; text: string; }
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
  sending: string;
  success: string;
  error: string;
  note: string;
}

// FormSubmit — the same no-backend service we use on our other sites.
// No API key: the form simply POSTs to formsubmit.co/<email>. On the FIRST
// real submission FormSubmit emails this address a one-time activation link;
// click it once and the endpoint stays live for good. The address lives only
// in the form's POST target — it is never shown to the reader.
export const FORMSUBMIT_EMAIL = 'contact@newp.fr';
export const FORMSUBMIT_ACTION = `https://formsubmit.co/${FORMSUBMIT_EMAIL}`;

export interface ContactContent {
  title: string;
  description: string;
  headLabel: string;
  h1: string; // may contain <em>
  deck: string;
  ways: ContactWay[];
  form: ContactForm;
  bandLabel: string;
  bandQ: string; // may contain <em>
  bandFr: string;
}

export const contact: Partial<Record<Locale, ContactContent>> = {
  en: {
    title: 'Contact — The South of France',
    description:
      'Write to the editors of The South of France — story tips, address suggestions and press enquiries.',
    headLabel: 'Say hello · Écrivez-nous',
    h1: 'Write to the <em>editors</em>',
    deck: 'A secret cove, a table worth the detour, a question about an issue — we read every letter.',
    ways: [
      {
        title: 'A story or an address',
        text: 'You know a place we should write about — or one we got wrong. This is the letter we open first. Use the form and pick the subject.',
      },
      {
        title: 'Press & rights',
        text: 'Syndication, image licensing and reprints from the print edition — choose “Press & rights” in the form below.',
      },
    ],
    form: {
      nameLabel: 'Your name',
      namePlaceholder: 'Jean Dupont',
      emailLabel: 'Your email',
      emailPlaceholder: 'vous@exemple.fr',
      subjectLabel: 'What is this about?',
      subjectOptions: [
        'A story or an address',
        'Press & rights',
        'Subscriptions & the print edition',
        'Something else',
      ],
      messageLabel: 'Your letter',
      messagePlaceholder: 'Tell us where to go next…',
      submit: 'Send the letter →',
      sending: 'Sending…',
      success: 'Thank you — your letter is on its way. We read every one.',
      error: 'Something went wrong. Please try again in a moment.',
      note: 'We answer in French or in English — whichever you write in.',
    },
    bandLabel: 'The editors · La rédaction',
    bandQ: 'Write to us. We read every letter — and we still answer by <em>hand.</em>',
    bandFr: 'One reply, from a real person.',
  },
  fr: {
    title: 'Contact — The South of France',
    description:
      'Écrivez à la rédaction de The South of France — idées de sujets, adresses à nous souffler, demandes presse.',
    headLabel: 'Écrivez-nous · Say hello',
    h1: 'Écrivez à la <em>rédaction</em>',
    deck: 'Une calanque secrète, une table qui vaut le détour, une question sur un numéro — nous lisons chaque lettre.',
    ways: [
      {
        title: 'Un sujet ou une adresse',
        text: 'Vous connaissez un lieu dont nous devrions parler — ou un que nous avons mal jugé. C’est la lettre que nous ouvrons en premier. Utilisez le formulaire et choisissez le sujet.',
      },
      {
        title: 'Presse & droits',
        text: 'Syndication, licence d’images et reprises de l’édition imprimée — choisissez « Presse & droits » dans le formulaire ci-dessous.',
      },
    ],
    form: {
      nameLabel: 'Votre nom',
      namePlaceholder: 'Jean Dupont',
      emailLabel: 'Votre courriel',
      emailPlaceholder: 'vous@exemple.fr',
      subjectLabel: 'À quel sujet ?',
      subjectOptions: [
        'Un sujet ou une adresse',
        'Presse & droits',
        'Abonnements & édition imprimée',
        'Autre chose',
      ],
      messageLabel: 'Votre lettre',
      messagePlaceholder: 'Dites-nous où aller ensuite…',
      submit: 'Envoyer la lettre →',
      sending: 'Envoi…',
      success: 'Merci — votre lettre est en route. Nous les lisons toutes.',
      error: 'Une erreur est survenue. Merci de réessayer dans un instant.',
      note: 'Nous répondons en français ou en anglais — selon la langue de votre lettre.',
    },
    bandLabel: 'La rédaction · The editors',
    bandQ: 'Écrivez-nous. Nous lisons chaque lettre — et nous répondons encore à la <em>main.</em>',
    bandFr: 'Une réponse, écrite par une vraie personne.',
  },
  it: {
    title: 'Contatti — The South of France',
    description:
      'Scrivete alla redazione di The South of France — proposte di reportage, indirizzi da segnalare, richieste stampa.',
    headLabel: 'Scriveteci · Écrivez-nous',
    h1: 'Scrivete alla <em>redazione</em>',
    deck: 'Una cala segreta, una tavola che vale la deviazione, una domanda su un numero — leggiamo ogni lettera.',
    ways: [
      {
        title: 'Un reportage o un indirizzo',
        text: 'Conoscete un luogo di cui dovremmo scrivere — o uno che abbiamo giudicato male. È la lettera che apriamo per prima. Usate il modulo e scegliete l’argomento.',
      },
      {
        title: 'Stampa & diritti',
        text: 'Sindacazione, licenze di immagini e riproduzioni dall’edizione a stampa — scegliete « Stampa & diritti » nel modulo qui sotto.',
      },
    ],
    form: {
      nameLabel: 'Il vostro nome',
      namePlaceholder: 'Jean Dupont',
      emailLabel: 'La vostra email',
      emailPlaceholder: 'vous@exemple.fr',
      subjectLabel: 'Di che cosa si tratta?',
      subjectOptions: [
        'Un reportage o un indirizzo',
        'Stampa & diritti',
        'Abbonamenti & edizione a stampa',
        'Altro',
      ],
      messageLabel: 'La vostra lettera',
      messagePlaceholder: 'Diteci dove andare la prossima volta…',
      submit: 'Inviare la lettera →',
      sending: 'Invio…',
      success: 'Grazie — la vostra lettera è in viaggio. Le leggiamo tutte.',
      error: 'Qualcosa è andato storto. Riprovate tra un istante.',
      note: 'Rispondiamo in francese o in inglese — nella lingua in cui scrivete.',
    },
    bandLabel: 'La redazione · La rédaction',
    bandQ: 'Scriveteci. Leggiamo ogni lettera — e rispondiamo ancora a <em>mano.</em>',
    bandFr: 'Una risposta, scritta da una persona vera.',
  },
  de: {
    title: 'Kontakt — The South of France',
    description:
      'Schreiben Sie der Redaktion von The South of France — Themenhinweise, Adressvorschläge, Presseanfragen.',
    headLabel: 'Schreiben Sie uns · Écrivez-nous',
    h1: 'Schreiben Sie der <em>Redaktion</em>',
    deck: 'Eine geheime Bucht, ein Tisch, der den Umweg wert ist, eine Frage zu einer Ausgabe — wir lesen jeden Brief.',
    ways: [
      {
        title: 'Eine Geschichte oder eine Adresse',
        text: 'Sie kennen einen Ort, über den wir schreiben sollten — oder einen, den wir falsch eingeschätzt haben. Diesen Brief öffnen wir zuerst. Nutzen Sie das Formular und wählen Sie das Thema.',
      },
      {
        title: 'Presse & Rechte',
        text: 'Syndizierung, Bildlizenzen und Nachdrucke aus der Printausgabe — wählen Sie im Formular unten „Presse & Rechte“.',
      },
    ],
    form: {
      nameLabel: 'Ihr Name',
      namePlaceholder: 'Jean Dupont',
      emailLabel: 'Ihre E-Mail',
      emailPlaceholder: 'vous@exemple.fr',
      subjectLabel: 'Worum geht es?',
      subjectOptions: [
        'Eine Geschichte oder eine Adresse',
        'Presse & Rechte',
        'Abonnements & Printausgabe',
        'Etwas anderes',
      ],
      messageLabel: 'Ihr Brief',
      messagePlaceholder: 'Sagen Sie uns, wohin als Nächstes…',
      submit: 'Den Brief senden →',
      sending: 'Wird gesendet…',
      success: 'Danke — Ihr Brief ist unterwegs. Wir lesen jeden einzelnen.',
      error: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es gleich noch einmal.',
      note: 'Wir antworten auf Französisch oder Englisch — je nachdem, worin Sie schreiben.',
    },
    bandLabel: 'Die Redaktion · La rédaction',
    bandQ: 'Schreiben Sie uns. Wir lesen jeden Brief — und antworten noch von <em>Hand.</em>',
    bandFr: 'Eine Antwort, von einem echten Menschen.',
  },
  es: {
    title: 'Contacto — The South of France',
    description:
      'Escriba a la redacción de The South of France — ideas de temas, direcciones que sugerirnos, consultas de prensa.',
    headLabel: 'Escríbanos · Écrivez-nous',
    h1: 'Escriba a la <em>redacción</em>',
    deck: 'Una cala secreta, una mesa que merece el rodeo, una pregunta sobre un número — leemos cada carta.',
    ways: [
      {
        title: 'Un tema o una dirección',
        text: 'Conoce un lugar del que deberíamos escribir — o uno que juzgamos mal. Es la carta que abrimos primero. Use el formulario y elija el asunto.',
      },
      {
        title: 'Prensa & derechos',
        text: 'Sindicación, licencia de imágenes y reproducciones de la edición impresa — elija « Prensa & derechos » en el formulario de abajo.',
      },
    ],
    form: {
      nameLabel: 'Su nombre',
      namePlaceholder: 'Jean Dupont',
      emailLabel: 'Su correo electrónico',
      emailPlaceholder: 'vous@exemple.fr',
      subjectLabel: '¿Sobre qué trata?',
      subjectOptions: [
        'Un tema o una dirección',
        'Prensa & derechos',
        'Suscripciones & edición impresa',
        'Otra cosa',
      ],
      messageLabel: 'Su carta',
      messagePlaceholder: 'Díganos adónde ir la próxima vez…',
      submit: 'Enviar la carta →',
      sending: 'Enviando…',
      success: 'Gracias — su carta está en camino. Las leemos todas.',
      error: 'Algo salió mal. Vuelva a intentarlo en un momento.',
      note: 'Respondemos en francés o en inglés — según la lengua en que escriba.',
    },
    bandLabel: 'La redacción · La rédaction',
    bandQ: 'Escríbanos. Leemos cada carta — y todavía respondemos a <em>mano.</em>',
    bandFr: 'Una respuesta, escrita por una persona real.',
  },
};
