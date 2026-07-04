// ─────────────────────────────────────────────────────────────
// The South of France — "Plan my trip" lead-capture content.
// A visitor describes their trip → we connect them with a partner
// travel advisor. Sent via FormSubmit (contact@newp.fr). Localised.
// Reference layout: allovoyages.fr /organiser-mon-voyage/.
// ─────────────────────────────────────────────────────────────
import type { Locale } from '../i18n/config';

export interface TripLeadContent {
  title: string;
  description: string;
  crumbHome: string;
  eyebrow: string;
  h1: string;
  lede: string; // may contain <strong>
  points: string[];
  // form
  destinationLabel: string;
  destinationPlaceholder: string;
  periodLabel: string;
  periodPlaceholder: string;
  travellersLabel: string;
  travellers: { one: string; two: string; family: string; group: string };
  budgetLabel: string;
  budget: { under: string; low: string; mid: string; over: string; tbd: string };
  firstNameLabel: string;
  firstNamePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phoneHint: string;
  phonePlaceholder: string;
  wishesLabel: string;
  wishesHint: string;
  wishesPlaceholder: string;
  consentBefore: string; // text before the privacy-policy link
  consentLink: string;   // link text
  consentAfter: string;  // text after the link (e.g. a full stop)
  submit: string;
  fine: string;
}

export const tripLead: Record<Locale, TripLeadContent> = {
  en: {
    title: 'Plan my trip — The South of France',
    description:
      'Tell us about your trip in one minute: we connect you with a partner travel advisor who prepares a tailor-made proposal, suited to your wishes and your budget.',
    crumbHome: 'Home',
    eyebrow: 'Travel project',
    h1: 'Plan my trip',
    lede:
      'Describe your project in one minute: we connect you with a <strong>partner travel advisor</strong> who prepares a tailor-made proposal, suited to your wishes and your budget.',
    points: ['✅ Free & no obligation', '✅ A personalised proposal', '✅ One dedicated point of contact'],
    destinationLabel: 'Desired destination',
    destinationPlaceholder: 'Provence, the Riviera, Camargue, or elsewhere…',
    periodLabel: 'Period / dates',
    periodPlaceholder: 'e.g. May 2026, 1 week',
    travellersLabel: 'Travellers',
    travellers: { one: '1 person', two: '2 people', family: 'Family (3–4)', group: 'Group (5+)' },
    budgetLabel: 'Indicative budget / person',
    budget: { under: 'Under €500', low: '€500 – 1000', mid: '€1000 – 2000', over: 'Over €2000', tbd: 'To be defined' },
    firstNameLabel: 'First name',
    firstNamePlaceholder: 'Your first name',
    emailLabel: 'E-mail',
    emailPlaceholder: 'you@email.com',
    phoneLabel: 'Phone',
    phoneHint: '(recommended)',
    phonePlaceholder: 'To be called back sooner',
    wishesLabel: 'Your wishes',
    wishesHint: '(optional)',
    wishesPlaceholder: 'Type of stay, atmosphere, must-sees, constraints…',
    consentBefore:
      'I agree to be contacted by a partner travel advisor about my project, and for my details to be passed on to them for this purpose, in accordance with the ',
    consentLink: 'privacy policy',
    consentAfter: '.',
    submit: 'Get my proposal →',
    fine: 'Free and no obligation. An advisor replies within 48 working hours.',
  },
  fr: {
    title: 'Organiser mon voyage — The South of France',
    description:
      'Décrivez votre projet de voyage en 1 minute : on vous met en relation avec un conseiller voyage partenaire qui prépare une proposition sur mesure, adaptée à vos envies et à votre budget.',
    crumbHome: 'Accueil',
    eyebrow: 'Projet de voyage',
    h1: 'Organiser mon voyage',
    lede:
      'Décrivez votre projet en 1 minute : on vous met en relation avec un <strong>conseiller voyage partenaire</strong> qui prépare une proposition sur mesure, adaptée à vos envies et à votre budget.',
    points: ['✅ Gratuit & sans engagement', '✅ Une proposition personnalisée', '✅ Interlocuteur unique dédié'],
    destinationLabel: 'Destination souhaitée',
    destinationPlaceholder: 'Provence, Côte d’Azur, Camargue, ou ailleurs…',
    periodLabel: 'Période / dates',
    periodPlaceholder: 'ex : mai 2026, 1 semaine',
    travellersLabel: 'Voyageurs',
    travellers: { one: '1 personne', two: '2 personnes', family: 'Famille (3-4)', group: 'Groupe (5+)' },
    budgetLabel: 'Budget indicatif / personne',
    budget: { under: 'Moins de 500 €', low: '500 – 1000 €', mid: '1000 – 2000 €', over: 'Plus de 2000 €', tbd: 'À définir' },
    firstNameLabel: 'Prénom',
    firstNamePlaceholder: 'Votre prénom',
    emailLabel: 'E-mail',
    emailPlaceholder: 'vous@email.com',
    phoneLabel: 'Téléphone',
    phoneHint: '(recommandé)',
    phonePlaceholder: 'Pour être rappelé plus vite',
    wishesLabel: 'Vos envies',
    wishesHint: '(facultatif)',
    wishesPlaceholder: 'Type de séjour, ambiance, incontournables, contraintes…',
    consentBefore:
      'J’accepte d’être recontacté(e) par un conseiller voyage partenaire au sujet de mon projet, et que mes informations lui soient transmises à cette fin, conformément à la ',
    consentLink: 'politique de confidentialité',
    consentAfter: '.',
    submit: 'Recevoir ma proposition →',
    fine: 'Gratuit et sans engagement. Réponse d’un conseiller sous 48 h ouvrées.',
  },
  it: {
    title: 'Organizza il viaggio — The South of France',
    description:
      'Descrivi il tuo progetto di viaggio in 1 minuto: ti mettiamo in contatto con un consulente di viaggio partner che prepara una proposta su misura, adatta ai tuoi desideri e al tuo budget.',
    crumbHome: 'Home',
    eyebrow: 'Progetto di viaggio',
    h1: 'Organizza il viaggio',
    lede:
      'Descrivi il tuo progetto in 1 minuto: ti mettiamo in contatto con un <strong>consulente di viaggio partner</strong> che prepara una proposta su misura, adatta ai tuoi desideri e al tuo budget.',
    points: ['✅ Gratuito e senza impegno', '✅ Una proposta personalizzata', '✅ Un unico referente dedicato'],
    destinationLabel: 'Destinazione desiderata',
    destinationPlaceholder: 'Provenza, Costa Azzurra, Camargue, o altrove…',
    periodLabel: 'Periodo / date',
    periodPlaceholder: 'es. maggio 2026, 1 settimana',
    travellersLabel: 'Viaggiatori',
    travellers: { one: '1 persona', two: '2 persone', family: 'Famiglia (3-4)', group: 'Gruppo (5+)' },
    budgetLabel: 'Budget indicativo / persona',
    budget: { under: 'Meno di 500 €', low: '500 – 1000 €', mid: '1000 – 2000 €', over: 'Oltre 2000 €', tbd: 'Da definire' },
    firstNameLabel: 'Nome',
    firstNamePlaceholder: 'Il tuo nome',
    emailLabel: 'E-mail',
    emailPlaceholder: 'tu@email.com',
    phoneLabel: 'Telefono',
    phoneHint: '(consigliato)',
    phonePlaceholder: 'Per essere richiamato prima',
    wishesLabel: 'I tuoi desideri',
    wishesHint: '(facoltativo)',
    wishesPlaceholder: 'Tipo di soggiorno, atmosfera, tappe imperdibili, vincoli…',
    consentBefore:
      'Accetto di essere ricontattato/a da un consulente di viaggio partner in merito al mio progetto e che i miei dati gli siano trasmessi a tale scopo, in conformità con l’',
    consentLink: 'informativa sulla privacy',
    consentAfter: '.',
    submit: 'Ricevere la mia proposta →',
    fine: 'Gratuito e senza impegno. Un consulente risponde entro 48 ore lavorative.',
  },
  de: {
    title: 'Reise planen — The South of France',
    description:
      'Beschreiben Sie Ihr Reiseprojekt in einer Minute: Wir bringen Sie mit einem Reiseberater-Partner zusammen, der einen maßgeschneiderten Vorschlag erstellt, passend zu Ihren Wünschen und Ihrem Budget.',
    crumbHome: 'Startseite',
    eyebrow: 'Reiseprojekt',
    h1: 'Reise planen',
    lede:
      'Beschreiben Sie Ihr Projekt in einer Minute: Wir bringen Sie mit einem <strong>Reiseberater-Partner</strong> zusammen, der einen maßgeschneiderten Vorschlag erstellt, passend zu Ihren Wünschen und Ihrem Budget.',
    points: ['✅ Kostenlos & unverbindlich', '✅ Ein persönlicher Vorschlag', '✅ Ein fester Ansprechpartner'],
    destinationLabel: 'Gewünschtes Reiseziel',
    destinationPlaceholder: 'Provence, Côte d’Azur, Camargue oder anderswo…',
    periodLabel: 'Zeitraum / Daten',
    periodPlaceholder: 'z. B. Mai 2026, 1 Woche',
    travellersLabel: 'Reisende',
    travellers: { one: '1 Person', two: '2 Personen', family: 'Familie (3-4)', group: 'Gruppe (5+)' },
    budgetLabel: 'Richtbudget / Person',
    budget: { under: 'Unter 500 €', low: '500 – 1000 €', mid: '1000 – 2000 €', over: 'Über 2000 €', tbd: 'Noch offen' },
    firstNameLabel: 'Vorname',
    firstNamePlaceholder: 'Ihr Vorname',
    emailLabel: 'E-Mail',
    emailPlaceholder: 'sie@email.com',
    phoneLabel: 'Telefon',
    phoneHint: '(empfohlen)',
    phonePlaceholder: 'Um schneller zurückgerufen zu werden',
    wishesLabel: 'Ihre Wünsche',
    wishesHint: '(optional)',
    wishesPlaceholder: 'Art des Aufenthalts, Atmosphäre, Höhepunkte, Einschränkungen…',
    consentBefore:
      'Ich bin damit einverstanden, von einem Reiseberater-Partner zu meinem Projekt kontaktiert zu werden und dass meine Angaben zu diesem Zweck an ihn weitergegeben werden, gemäß der ',
    consentLink: 'Datenschutzerklärung',
    consentAfter: '.',
    submit: 'Mein Angebot erhalten →',
    fine: 'Kostenlos und unverbindlich. Ein Berater antwortet innerhalb von 48 Werkstunden.',
  },
  es: {
    title: 'Planificar mi viaje — The South of France',
    description:
      'Describe tu proyecto de viaje en 1 minuto: te ponemos en contacto con un asesor de viajes asociado que prepara una propuesta a medida, adaptada a tus deseos y a tu presupuesto.',
    crumbHome: 'Inicio',
    eyebrow: 'Proyecto de viaje',
    h1: 'Planificar mi viaje',
    lede:
      'Describe tu proyecto en 1 minuto: te ponemos en contacto con un <strong>asesor de viajes asociado</strong> que prepara una propuesta a medida, adaptada a tus deseos y a tu presupuesto.',
    points: ['✅ Gratis y sin compromiso', '✅ Una propuesta personalizada', '✅ Un único interlocutor dedicado'],
    destinationLabel: 'Destino deseado',
    destinationPlaceholder: 'Provenza, Costa Azul, Camarga, u otro lugar…',
    periodLabel: 'Periodo / fechas',
    periodPlaceholder: 'ej.: mayo de 2026, 1 semana',
    travellersLabel: 'Viajeros',
    travellers: { one: '1 persona', two: '2 personas', family: 'Familia (3-4)', group: 'Grupo (5+)' },
    budgetLabel: 'Presupuesto orientativo / persona',
    budget: { under: 'Menos de 500 €', low: '500 – 1000 €', mid: '1000 – 2000 €', over: 'Más de 2000 €', tbd: 'Por definir' },
    firstNameLabel: 'Nombre',
    firstNamePlaceholder: 'Tu nombre',
    emailLabel: 'Correo electrónico',
    emailPlaceholder: 'tu@email.com',
    phoneLabel: 'Teléfono',
    phoneHint: '(recomendado)',
    phonePlaceholder: 'Para que te llamen antes',
    wishesLabel: 'Tus deseos',
    wishesHint: '(opcional)',
    wishesPlaceholder: 'Tipo de estancia, ambiente, imprescindibles, limitaciones…',
    consentBefore:
      'Acepto que un asesor de viajes asociado se ponga en contacto conmigo sobre mi proyecto y que mis datos le sean transmitidos con este fin, de acuerdo con la ',
    consentLink: 'política de privacidad',
    consentAfter: '.',
    submit: 'Recibir mi propuesta →',
    fine: 'Gratis y sin compromiso. Un asesor responde en un plazo de 48 horas hábiles.',
  },
};
