// ─────────────────────────────────────────────────────────────
// Legal & Privacy content, keyed by locale.
// CRITICAL: no real legal/company data is invented here. Every concrete
// legal-entity fact is the literal placeholder string `[À COMPLÉTER]`.
// ─────────────────────────────────────────────────────────────
import type { Locale } from '../i18n/config';

const PLACEHOLDER = '[À COMPLÉTER]';

// A single definition row: term + value. `placeholder` marks the value
// as factual-to-be-filled so the component can wrap it in the .ph chip.
export interface LegalDef { dt: string; dd: string; placeholder?: boolean }

// A block inside a section: a paragraph (may contain <em>/<strong>/<a>),
// an unordered list, or a definition list.
export type LegalBlock =
  | { kind: 'p'; html: string }
  | { kind: 'ul'; items: string[] }
  | { kind: 'dl'; rows: LegalDef[] };

export interface LegalSection {
  id: string; // anchor id, also used by the TOC
  no: string;
  h2: string; // may contain <em>
  frH: string; // French sub-heading
  tocLabel: string;
  blocks: LegalBlock[];
}

export interface LegalContent {
  title: string;
  description: string;
  headLabel: string;
  h1: string; // may contain <em>
  updated: string; // text around the placeholder date
  updatedDate: string; // the placeholder date itself (rendered as a .ph chip)
  tocTitle: string;
  sections: LegalSection[];
}

export const legal: Partial<Record<Locale, LegalContent>> = {
  en: {
    title: 'Legal & Privacy — The South of France',
    description: 'Legal notice, intellectual property, privacy policy and cookies for The South of France.',
    headLabel: 'The fine print · Informations légales',
    h1: 'Legal & <em>Privacy</em>',
    updated: 'Last updated — ',
    updatedDate: PLACEHOLDER,
    tocTitle: 'On this page',
    sections: [
      {
        id: 'editeur', no: '1', h2: 'Publisher', frH: 'Éditeur du site', tocLabel: '1 · Publisher',
        blocks: [
          { kind: 'p', html: 'This website, <strong>the-south-of-france.com</strong>, is published by:' },
          { kind: 'dl', rows: [
            { dt: 'Company', dd: PLACEHOLDER, placeholder: true },
            { dt: 'Legal form', dd: PLACEHOLDER, placeholder: true },
            { dt: 'Share capital', dd: PLACEHOLDER, placeholder: true },
            { dt: 'Registered office', dd: PLACEHOLDER, placeholder: true },
            { dt: 'SIREN / SIRET', dd: PLACEHOLDER, placeholder: true },
            { dt: 'VAT number', dd: PLACEHOLDER, placeholder: true },
            { dt: 'Publication director', dd: PLACEHOLDER, placeholder: true },
            { dt: 'Contact', dd: '<a class="inl" href="mailto:editors@the-south-of-france.com">editors@the-south-of-france.com</a>' },
          ] },
          { kind: 'p', html: `The publisher is registered with the <span class="ph">${PLACEHOLDER}</span> of <span class="ph">${PLACEHOLDER}</span>.` },
        ],
      },
      {
        id: 'hebergement', no: '2', h2: 'Hosting', frH: 'Hébergeur', tocLabel: '2 · Hosting',
        blocks: [
          { kind: 'p', html: 'The website is hosted by:' },
          { kind: 'dl', rows: [
            { dt: 'Host', dd: PLACEHOLDER, placeholder: true },
            { dt: 'Address', dd: PLACEHOLDER, placeholder: true },
            { dt: 'Phone', dd: PLACEHOLDER, placeholder: true },
          ] },
        ],
      },
      {
        id: 'propriete', no: '3', h2: 'Intellectual property', frH: 'Propriété intellectuelle', tocLabel: '3 · Intellectual property',
        blocks: [
          { kind: 'p', html: 'The entire content of this site — texts, reports, editorial selection, page layout, graphic identity, the wordmark <em>The South of France</em> and its emblem — is protected by copyright and remains the exclusive property of the publisher, unless otherwise stated.' },
          { kind: 'p', html: 'Any reproduction, representation, adaptation or distribution, in whole or in part, by any means whatsoever, without the prior written authorisation of the publisher, is prohibited and constitutes an infringement under articles L.335-2 et seq. of the French Intellectual Property Code.' },
          { kind: 'p', html: 'Quotation is permitted provided the source — <strong>The South of France</strong> — is clearly cited together with a link to the original page.' },
        ],
      },
      {
        id: 'credits', no: '4', h2: 'Image credits', frH: 'Crédits photographiques', tocLabel: '4 · Image credits',
        blocks: [
          { kind: 'p', html: 'Photographs used in these mock-ups are sourced from <a class="inl" href="https://unsplash.com" rel="nofollow noopener">Unsplash</a> under the Unsplash License, which permits commercial use without attribution. Before going live, all images will be self-hosted and optimised.' },
          { kind: 'p', html: 'Photographs commissioned by the journal are credited individually on each page and remain the property of their authors, licensed to the publisher.' },
        ],
      },
      {
        id: 'donnees', no: '5', h2: 'Personal data', frH: 'Données personnelles · RGPD', tocLabel: '5 · Personal data',
        blocks: [
          { kind: 'p', html: 'In accordance with the General Data Protection Regulation (EU 2016/679) and the French <em>Loi Informatique et Libertés</em>, we collect personal data only when you choose to give it to us:' },
          { kind: 'ul', items: [
            '<strong>The Letter</strong> — when you subscribe, we store your email address for the sole purpose of sending the monthly letter. You can unsubscribe at any time via the link in each email.',
            '<strong>Contact</strong> — the name, email and message you send through the contact form are used only to answer you, and kept no longer than necessary.',
          ] },
          { kind: 'p', html: 'Data is never sold or shared with third parties for advertising. You have the right to access, rectify, delete, restrict and port your data, and to object to its processing. To exercise these rights, write to <a class="inl" href="mailto:privacy@the-south-of-france.com">privacy@the-south-of-france.com</a>.' },
          { kind: 'p', html: 'You may also lodge a complaint with the <a class="inl" href="https://www.cnil.fr" rel="nofollow noopener">CNIL</a>, the French data protection authority.' },
          { kind: 'p', html: `Data controller: <span class="ph">${PLACEHOLDER}</span>.` },
        ],
      },
      {
        id: 'cookies', no: '6', h2: 'Cookies', frH: 'Cookies et mesure d’audience', tocLabel: '6 · Cookies',
        blocks: [
          { kind: 'p', html: 'This site keeps cookies to a minimum. We use no advertising trackers and no third-party social cookies.' },
          { kind: 'ul', items: [
            '<strong>Essential cookies</strong> — required for the site to function (language preference, form security). These do not require consent.',
            `<strong>Audience measurement</strong> — <span class="ph">${PLACEHOLDER}</span>, configured to respect your privacy. <span class="ph">${PLACEHOLDER}</span>`,
          ] },
          { kind: 'p', html: 'You can refuse or delete cookies at any time through your browser settings.' },
        ],
      },
      {
        id: 'droit', no: '7', h2: 'Governing law', frH: 'Droit applicable', tocLabel: '7 · Governing law',
        blocks: [
          { kind: 'p', html: 'This legal notice is governed by French law. Any dispute relating to the use of this site falls under the jurisdiction of the French courts, subject to the mandatory rules of consumer protection.' },
        ],
      },
    ],
  },
  fr: {
    title: 'Mentions légales — The South of France',
    description: 'Mentions légales, propriété intellectuelle, politique de confidentialité et cookies pour The South of France.',
    headLabel: 'Informations légales · The fine print',
    h1: 'Mentions <em>légales</em>',
    updated: 'Dernière mise à jour — ',
    updatedDate: PLACEHOLDER,
    tocTitle: 'Sur cette page',
    sections: [
      {
        id: 'editeur', no: '1', h2: 'Éditeur', frH: 'Éditeur du site', tocLabel: '1 · Éditeur',
        blocks: [
          { kind: 'p', html: 'Ce site, <strong>the-south-of-france.com</strong>, est édité par :' },
          { kind: 'dl', rows: [
            { dt: 'Raison sociale', dd: PLACEHOLDER, placeholder: true },
            { dt: 'Forme juridique', dd: PLACEHOLDER, placeholder: true },
            { dt: 'Capital social', dd: PLACEHOLDER, placeholder: true },
            { dt: 'Siège social', dd: PLACEHOLDER, placeholder: true },
            { dt: 'SIREN / SIRET', dd: PLACEHOLDER, placeholder: true },
            { dt: 'Numéro de TVA', dd: PLACEHOLDER, placeholder: true },
            { dt: 'Directeur de publication', dd: PLACEHOLDER, placeholder: true },
            { dt: 'Contact', dd: '<a class="inl" href="mailto:editors@the-south-of-france.com">editors@the-south-of-france.com</a>' },
          ] },
          { kind: 'p', html: `L’éditeur est immatriculé au <span class="ph">${PLACEHOLDER}</span> de <span class="ph">${PLACEHOLDER}</span>.` },
        ],
      },
      {
        id: 'hebergement', no: '2', h2: 'Hébergeur', frH: 'Hébergeur', tocLabel: '2 · Hébergeur',
        blocks: [
          { kind: 'p', html: 'Le site est hébergé par :' },
          { kind: 'dl', rows: [
            { dt: 'Hébergeur', dd: PLACEHOLDER, placeholder: true },
            { dt: 'Adresse', dd: PLACEHOLDER, placeholder: true },
            { dt: 'Téléphone', dd: PLACEHOLDER, placeholder: true },
          ] },
        ],
      },
      {
        id: 'propriete', no: '3', h2: 'Propriété intellectuelle', frH: 'Propriété intellectuelle', tocLabel: '3 · Propriété intellectuelle',
        blocks: [
          { kind: 'p', html: 'L’ensemble du contenu de ce site — textes, reportages, sélection éditoriale, mise en page, identité graphique, le nom <em>The South of France</em> et son emblème — est protégé par le droit d’auteur et demeure la propriété exclusive de l’éditeur, sauf mention contraire.' },
          { kind: 'p', html: 'Toute reproduction, représentation, adaptation ou diffusion, totale ou partielle, par quelque moyen que ce soit, sans autorisation écrite préalable de l’éditeur, est interdite et constitue une contrefaçon au sens des articles L.335-2 et suivants du Code de la propriété intellectuelle.' },
          { kind: 'p', html: 'La citation est autorisée à condition que la source — <strong>The South of France</strong> — soit clairement mentionnée avec un lien vers la page d’origine.' },
        ],
      },
      {
        id: 'credits', no: '4', h2: 'Crédits photographiques', frH: 'Crédits photographiques', tocLabel: '4 · Crédits photographiques',
        blocks: [
          { kind: 'p', html: 'Les photographies utilisées dans ces maquettes proviennent d’<a class="inl" href="https://unsplash.com" rel="nofollow noopener">Unsplash</a> sous licence Unsplash, qui autorise un usage commercial sans attribution. Avant la mise en ligne, toutes les images seront auto-hébergées et optimisées.' },
          { kind: 'p', html: 'Les photographies commandées par le journal sont créditées individuellement sur chaque page et restent la propriété de leurs auteurs, sous licence accordée à l’éditeur.' },
        ],
      },
      {
        id: 'donnees', no: '5', h2: 'Données personnelles', frH: 'Données personnelles · RGPD', tocLabel: '5 · Données personnelles',
        blocks: [
          { kind: 'p', html: 'Conformément au Règlement général sur la protection des données (UE 2016/679) et à la <em>Loi Informatique et Libertés</em>, nous ne collectons de données personnelles que lorsque vous choisissez de nous les confier :' },
          { kind: 'ul', items: [
            '<strong>La Lettre</strong> — lorsque vous vous abonnez, nous conservons votre adresse e-mail dans le seul but de vous envoyer la lettre mensuelle. Vous pouvez vous désabonner à tout moment via le lien présent dans chaque e-mail.',
            '<strong>Contact</strong> — le nom, l’e-mail et le message envoyés via le formulaire de contact ne servent qu’à vous répondre et ne sont pas conservés plus longtemps que nécessaire.',
          ] },
          { kind: 'p', html: 'Vos données ne sont jamais vendues ni partagées avec des tiers à des fins publicitaires. Vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation et de portabilité de vos données, ainsi que d’un droit d’opposition à leur traitement. Pour exercer ces droits, écrivez à <a class="inl" href="mailto:privacy@the-south-of-france.com">privacy@the-south-of-france.com</a>.' },
          { kind: 'p', html: 'Vous pouvez également introduire une réclamation auprès de la <a class="inl" href="https://www.cnil.fr" rel="nofollow noopener">CNIL</a>, l’autorité française de protection des données.' },
          { kind: 'p', html: `Responsable de traitement : <span class="ph">${PLACEHOLDER}</span>.` },
        ],
      },
      {
        id: 'cookies', no: '6', h2: 'Cookies', frH: 'Cookies et mesure d’audience', tocLabel: '6 · Cookies',
        blocks: [
          { kind: 'p', html: 'Ce site limite les cookies au strict minimum. Nous n’utilisons aucun traceur publicitaire ni aucun cookie social tiers.' },
          { kind: 'ul', items: [
            '<strong>Cookies essentiels</strong> — nécessaires au fonctionnement du site (préférence de langue, sécurité des formulaires). Ils ne requièrent pas de consentement.',
            `<strong>Mesure d’audience</strong> — <span class="ph">${PLACEHOLDER}</span>, configuré pour respecter votre vie privée. <span class="ph">${PLACEHOLDER}</span>`,
          ] },
          { kind: 'p', html: 'Vous pouvez refuser ou supprimer les cookies à tout moment depuis les réglages de votre navigateur.' },
        ],
      },
      {
        id: 'droit', no: '7', h2: 'Droit applicable', frH: 'Droit applicable', tocLabel: '7 · Droit applicable',
        blocks: [
          { kind: 'p', html: 'Les présentes mentions légales sont régies par le droit français. Tout litige relatif à l’utilisation de ce site relève de la compétence des tribunaux français, sous réserve des règles impératives de protection des consommateurs.' },
        ],
      },
    ],
  },
  it: {
    title: 'Note legali e Privacy — The South of France',
    description: 'Note legali, proprietà intellettuale, informativa sulla privacy e cookie per The South of France.',
    headLabel: 'Le note in calce · Informations légales',
    h1: 'Note legali e <em>Privacy</em>',
    updated: 'Ultimo aggiornamento — ',
    updatedDate: PLACEHOLDER,
    tocTitle: 'In questa pagina',
    sections: [
      {
        id: 'editeur', no: '1', h2: 'Editore', frH: 'Éditeur du site', tocLabel: '1 · Editore',
        blocks: [
          { kind: 'p', html: 'Questo sito, <strong>the-south-of-france.com</strong>, è pubblicato da:' },
          { kind: 'dl', rows: [
            { dt: 'Ragione sociale', dd: PLACEHOLDER, placeholder: true },
            { dt: 'Forma giuridica', dd: PLACEHOLDER, placeholder: true },
            { dt: 'Capitale sociale', dd: PLACEHOLDER, placeholder: true },
            { dt: 'Sede legale', dd: PLACEHOLDER, placeholder: true },
            { dt: 'SIREN / SIRET', dd: PLACEHOLDER, placeholder: true },
            { dt: 'Numero di partita IVA', dd: PLACEHOLDER, placeholder: true },
            { dt: 'Direttore della pubblicazione', dd: PLACEHOLDER, placeholder: true },
            { dt: 'Contatto', dd: '<a class="inl" href="mailto:editors@the-south-of-france.com">editors@the-south-of-france.com</a>' },
          ] },
          { kind: 'p', html: `L’editore è iscritto presso il <span class="ph">${PLACEHOLDER}</span> di <span class="ph">${PLACEHOLDER}</span>.` },
        ],
      },
      {
        id: 'hebergement', no: '2', h2: 'Hosting', frH: 'Hébergeur', tocLabel: '2 · Hosting',
        blocks: [
          { kind: 'p', html: 'Il sito è ospitato da:' },
          { kind: 'dl', rows: [
            { dt: 'Provider', dd: PLACEHOLDER, placeholder: true },
            { dt: 'Indirizzo', dd: PLACEHOLDER, placeholder: true },
            { dt: 'Telefono', dd: PLACEHOLDER, placeholder: true },
          ] },
        ],
      },
      {
        id: 'propriete', no: '3', h2: 'Proprietà intellettuale', frH: 'Propriété intellectuelle', tocLabel: '3 · Proprietà intellettuale',
        blocks: [
          { kind: 'p', html: 'L’intero contenuto di questo sito — testi, reportage, selezione editoriale, impaginazione, identità grafica, il marchio nominativo <em>The South of France</em> e il suo emblema — è protetto dal diritto d’autore e resta proprietà esclusiva dell’editore, salvo diversa indicazione.' },
          { kind: 'p', html: 'Qualsiasi riproduzione, rappresentazione, adattamento o distribuzione, totale o parziale, con qualsiasi mezzo, senza la previa autorizzazione scritta dell’editore, è vietata e costituisce contraffazione ai sensi degli articoli L.335-2 e seguenti del Codice della proprietà intellettuale francese.' },
          { kind: 'p', html: 'La citazione è consentita a condizione che la fonte — <strong>The South of France</strong> — sia chiaramente indicata insieme a un link alla pagina originale.' },
        ],
      },
      {
        id: 'credits', no: '4', h2: 'Crediti fotografici', frH: 'Crédits photographiques', tocLabel: '4 · Crediti fotografici',
        blocks: [
          { kind: 'p', html: 'Le fotografie utilizzate in questi mock-up provengono da <a class="inl" href="https://unsplash.com" rel="nofollow noopener">Unsplash</a> con licenza Unsplash, che consente l’uso commerciale senza attribuzione. Prima della messa online, tutte le immagini saranno ospitate in proprio e ottimizzate.' },
          { kind: 'p', html: 'Le fotografie commissionate dal giornale sono accreditate individualmente su ciascuna pagina e restano proprietà dei loro autori, su licenza concessa all’editore.' },
        ],
      },
      {
        id: 'donnees', no: '5', h2: 'Dati personali', frH: 'Données personnelles · RGPD', tocLabel: '5 · Dati personali',
        blocks: [
          { kind: 'p', html: 'In conformità al Regolamento generale sulla protezione dei dati (UE 2016/679) e alla <em>Loi Informatique et Libertés</em> francese, raccogliamo dati personali solo quando scegliete di affidarceli:' },
          { kind: 'ul', items: [
            '<strong>La Lettera</strong> — quando vi iscrivete, conserviamo il vostro indirizzo e-mail al solo scopo di inviarvi la lettera mensile. Potete disiscrivervi in qualsiasi momento tramite il link presente in ogni e-mail.',
            '<strong>Contatto</strong> — il nome, l’e-mail e il messaggio inviati tramite il modulo di contatto servono solo a rispondervi e non vengono conservati più a lungo del necessario.',
          ] },
          { kind: 'p', html: 'I dati non vengono mai venduti né condivisi con terzi a fini pubblicitari. Avete diritto di accesso, rettifica, cancellazione, limitazione e portabilità dei vostri dati, nonché di opporvi al loro trattamento. Per esercitare tali diritti, scrivete a <a class="inl" href="mailto:privacy@the-south-of-france.com">privacy@the-south-of-france.com</a>.' },
          { kind: 'p', html: 'Potete inoltre presentare un reclamo alla <a class="inl" href="https://www.cnil.fr" rel="nofollow noopener">CNIL</a>, l’autorità francese per la protezione dei dati.' },
          { kind: 'p', html: `Titolare del trattamento: <span class="ph">${PLACEHOLDER}</span>.` },
        ],
      },
      {
        id: 'cookies', no: '6', h2: 'Cookie', frH: 'Cookies et mesure d’audience', tocLabel: '6 · Cookie',
        blocks: [
          { kind: 'p', html: 'Questo sito riduce i cookie al minimo indispensabile. Non utilizziamo alcun tracker pubblicitario né alcun cookie social di terze parti.' },
          { kind: 'ul', items: [
            '<strong>Cookie essenziali</strong> — necessari al funzionamento del sito (preferenza di lingua, sicurezza dei moduli). Non richiedono consenso.',
            `<strong>Misurazione del pubblico</strong> — <span class="ph">${PLACEHOLDER}</span>, configurato per rispettare la vostra privacy. <span class="ph">${PLACEHOLDER}</span>`,
          ] },
          { kind: 'p', html: 'Potete rifiutare o eliminare i cookie in qualsiasi momento dalle impostazioni del vostro browser.' },
        ],
      },
      {
        id: 'droit', no: '7', h2: 'Legge applicabile', frH: 'Droit applicable', tocLabel: '7 · Legge applicabile',
        blocks: [
          { kind: 'p', html: 'Le presenti note legali sono regolate dal diritto francese. Qualsiasi controversia relativa all’uso di questo sito è di competenza dei tribunali francesi, fatte salve le norme imperative di tutela dei consumatori.' },
        ],
      },
    ],
  },
  de: {
    title: 'Impressum & Datenschutz — The South of France',
    description: 'Impressum, geistiges Eigentum, Datenschutzerklärung und Cookies für The South of France.',
    headLabel: 'Das Kleingedruckte · Informations légales',
    h1: 'Impressum & <em>Datenschutz</em>',
    updated: 'Zuletzt aktualisiert — ',
    updatedDate: PLACEHOLDER,
    tocTitle: 'Auf dieser Seite',
    sections: [
      {
        id: 'editeur', no: '1', h2: 'Herausgeber', frH: 'Éditeur du site', tocLabel: '1 · Herausgeber',
        blocks: [
          { kind: 'p', html: 'Diese Website, <strong>the-south-of-france.com</strong>, wird herausgegeben von:' },
          { kind: 'dl', rows: [
            { dt: 'Firmenname', dd: PLACEHOLDER, placeholder: true },
            { dt: 'Rechtsform', dd: PLACEHOLDER, placeholder: true },
            { dt: 'Stammkapital', dd: PLACEHOLDER, placeholder: true },
            { dt: 'Geschäftssitz', dd: PLACEHOLDER, placeholder: true },
            { dt: 'SIREN / SIRET', dd: PLACEHOLDER, placeholder: true },
            { dt: 'USt-IdNr.', dd: PLACEHOLDER, placeholder: true },
            { dt: 'Verantwortlich für die Veröffentlichung', dd: PLACEHOLDER, placeholder: true },
            { dt: 'Kontakt', dd: '<a class="inl" href="mailto:editors@the-south-of-france.com">editors@the-south-of-france.com</a>' },
          ] },
          { kind: 'p', html: `Der Herausgeber ist beim <span class="ph">${PLACEHOLDER}</span> von <span class="ph">${PLACEHOLDER}</span> eingetragen.` },
        ],
      },
      {
        id: 'hebergement', no: '2', h2: 'Hosting', frH: 'Hébergeur', tocLabel: '2 · Hosting',
        blocks: [
          { kind: 'p', html: 'Die Website wird gehostet von:' },
          { kind: 'dl', rows: [
            { dt: 'Hoster', dd: PLACEHOLDER, placeholder: true },
            { dt: 'Anschrift', dd: PLACEHOLDER, placeholder: true },
            { dt: 'Telefon', dd: PLACEHOLDER, placeholder: true },
          ] },
        ],
      },
      {
        id: 'propriete', no: '3', h2: 'Geistiges Eigentum', frH: 'Propriété intellectuelle', tocLabel: '3 · Geistiges Eigentum',
        blocks: [
          { kind: 'p', html: 'Der gesamte Inhalt dieser Website — Texte, Reportagen, redaktionelle Auswahl, Seitengestaltung, grafische Identität, die Wortmarke <em>The South of France</em> und ihr Emblem — ist urheberrechtlich geschützt und bleibt, sofern nicht anders angegeben, ausschließliches Eigentum des Herausgebers.' },
          { kind: 'p', html: 'Jede vollständige oder teilweise Vervielfältigung, Wiedergabe, Bearbeitung oder Verbreitung, gleich mit welchen Mitteln, ohne vorherige schriftliche Genehmigung des Herausgebers ist untersagt und stellt eine Urheberrechtsverletzung im Sinne der Artikel L.335-2 ff. des französischen Gesetzes über das geistige Eigentum dar.' },
          { kind: 'p', html: 'Das Zitieren ist gestattet, sofern die Quelle — <strong>The South of France</strong> — deutlich angegeben und mit einem Link zur Originalseite versehen wird.' },
        ],
      },
      {
        id: 'credits', no: '4', h2: 'Bildnachweise', frH: 'Crédits photographiques', tocLabel: '4 · Bildnachweise',
        blocks: [
          { kind: 'p', html: 'Die in diesen Mock-ups verwendeten Fotografien stammen von <a class="inl" href="https://unsplash.com" rel="nofollow noopener">Unsplash</a> unter der Unsplash-Lizenz, die eine kommerzielle Nutzung ohne Namensnennung erlaubt. Vor der Veröffentlichung werden alle Bilder selbst gehostet und optimiert.' },
          { kind: 'p', html: 'Vom Journal in Auftrag gegebene Fotografien werden auf jeder Seite einzeln ausgewiesen und bleiben Eigentum ihrer Urheber, lizenziert an den Herausgeber.' },
        ],
      },
      {
        id: 'donnees', no: '5', h2: 'Personenbezogene Daten', frH: 'Données personnelles · RGPD', tocLabel: '5 · Personenbezogene Daten',
        blocks: [
          { kind: 'p', html: 'Gemäß der Datenschutz-Grundverordnung (EU 2016/679) und dem französischen <em>Loi Informatique et Libertés</em> erheben wir personenbezogene Daten nur, wenn Sie sich entscheiden, sie uns anzuvertrauen:' },
          { kind: 'ul', items: [
            '<strong>Der Brief</strong> — wenn Sie sich anmelden, speichern wir Ihre E-Mail-Adresse ausschließlich zum Zweck des Versands des monatlichen Briefes. Sie können sich jederzeit über den Link in jeder E-Mail abmelden.',
            '<strong>Kontakt</strong> — der über das Kontaktformular gesendete Name, die E-Mail und die Nachricht dienen ausschließlich Ihrer Beantwortung und werden nicht länger als nötig aufbewahrt.',
          ] },
          { kind: 'p', html: 'Die Daten werden niemals verkauft oder zu Werbezwecken an Dritte weitergegeben. Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung und Übertragbarkeit Ihrer Daten sowie das Recht, deren Verarbeitung zu widersprechen. Um diese Rechte auszuüben, schreiben Sie an <a class="inl" href="mailto:privacy@the-south-of-france.com">privacy@the-south-of-france.com</a>.' },
          { kind: 'p', html: 'Sie können außerdem eine Beschwerde bei der <a class="inl" href="https://www.cnil.fr" rel="nofollow noopener">CNIL</a>, der französischen Datenschutzbehörde, einreichen.' },
          { kind: 'p', html: `Verantwortlicher für die Verarbeitung: <span class="ph">${PLACEHOLDER}</span>.` },
        ],
      },
      {
        id: 'cookies', no: '6', h2: 'Cookies', frH: 'Cookies et mesure d’audience', tocLabel: '6 · Cookies',
        blocks: [
          { kind: 'p', html: 'Diese Website hält Cookies auf ein Minimum. Wir verwenden keine Werbe-Tracker und keine Social-Cookies von Dritten.' },
          { kind: 'ul', items: [
            '<strong>Notwendige Cookies</strong> — für das Funktionieren der Website erforderlich (Spracheinstellung, Formularsicherheit). Sie bedürfen keiner Einwilligung.',
            `<strong>Reichweitenmessung</strong> — <span class="ph">${PLACEHOLDER}</span>, so konfiguriert, dass Ihre Privatsphäre gewahrt bleibt. <span class="ph">${PLACEHOLDER}</span>`,
          ] },
          { kind: 'p', html: 'Sie können Cookies jederzeit über die Einstellungen Ihres Browsers ablehnen oder löschen.' },
        ],
      },
      {
        id: 'droit', no: '7', h2: 'Anwendbares Recht', frH: 'Droit applicable', tocLabel: '7 · Anwendbares Recht',
        blocks: [
          { kind: 'p', html: 'Dieses Impressum unterliegt französischem Recht. Für jede Streitigkeit im Zusammenhang mit der Nutzung dieser Website sind die französischen Gerichte zuständig, vorbehaltlich der zwingenden Vorschriften zum Verbraucherschutz.' },
        ],
      },
    ],
  },
  es: {
    title: 'Aviso legal y Privacidad — The South of France',
    description: 'Aviso legal, propiedad intelectual, política de privacidad y cookies de The South of France.',
    headLabel: 'La letra pequeña · Informations légales',
    h1: 'Aviso legal y <em>Privacidad</em>',
    updated: 'Última actualización — ',
    updatedDate: PLACEHOLDER,
    tocTitle: 'En esta página',
    sections: [
      {
        id: 'editeur', no: '1', h2: 'Editor', frH: 'Éditeur du site', tocLabel: '1 · Editor',
        blocks: [
          { kind: 'p', html: 'Este sitio web, <strong>the-south-of-france.com</strong>, está editado por:' },
          { kind: 'dl', rows: [
            { dt: 'Razón social', dd: PLACEHOLDER, placeholder: true },
            { dt: 'Forma jurídica', dd: PLACEHOLDER, placeholder: true },
            { dt: 'Capital social', dd: PLACEHOLDER, placeholder: true },
            { dt: 'Domicilio social', dd: PLACEHOLDER, placeholder: true },
            { dt: 'SIREN / SIRET', dd: PLACEHOLDER, placeholder: true },
            { dt: 'Número de IVA', dd: PLACEHOLDER, placeholder: true },
            { dt: 'Director de publicación', dd: PLACEHOLDER, placeholder: true },
            { dt: 'Contacto', dd: '<a class="inl" href="mailto:editors@the-south-of-france.com">editors@the-south-of-france.com</a>' },
          ] },
          { kind: 'p', html: `El editor está inscrito en el <span class="ph">${PLACEHOLDER}</span> de <span class="ph">${PLACEHOLDER}</span>.` },
        ],
      },
      {
        id: 'hebergement', no: '2', h2: 'Alojamiento', frH: 'Hébergeur', tocLabel: '2 · Alojamiento',
        blocks: [
          { kind: 'p', html: 'El sitio está alojado por:' },
          { kind: 'dl', rows: [
            { dt: 'Proveedor', dd: PLACEHOLDER, placeholder: true },
            { dt: 'Dirección', dd: PLACEHOLDER, placeholder: true },
            { dt: 'Teléfono', dd: PLACEHOLDER, placeholder: true },
          ] },
        ],
      },
      {
        id: 'propriete', no: '3', h2: 'Propiedad intelectual', frH: 'Propriété intellectuelle', tocLabel: '3 · Propiedad intelectual',
        blocks: [
          { kind: 'p', html: 'La totalidad del contenido de este sitio — textos, reportajes, selección editorial, maquetación, identidad gráfica, la marca denominativa <em>The South of France</em> y su emblema — está protegida por derechos de autor y sigue siendo propiedad exclusiva del editor, salvo indicación contraria.' },
          { kind: 'p', html: 'Queda prohibida toda reproducción, representación, adaptación o distribución, total o parcial, por cualquier medio, sin la autorización previa por escrito del editor, y constituye una infracción en el sentido de los artículos L.335-2 y siguientes del Código de la Propiedad Intelectual francés.' },
          { kind: 'p', html: 'Se permite la cita siempre que la fuente — <strong>The South of France</strong> — se mencione claramente junto con un enlace a la página original.' },
        ],
      },
      {
        id: 'credits', no: '4', h2: 'Créditos fotográficos', frH: 'Crédits photographiques', tocLabel: '4 · Créditos fotográficos',
        blocks: [
          { kind: 'p', html: 'Las fotografías utilizadas en estas maquetas proceden de <a class="inl" href="https://unsplash.com" rel="nofollow noopener">Unsplash</a> bajo licencia Unsplash, que permite el uso comercial sin atribución. Antes de la puesta en línea, todas las imágenes se alojarán en servidor propio y se optimizarán.' },
          { kind: 'p', html: 'Las fotografías encargadas por el diario se acreditan individualmente en cada página y siguen siendo propiedad de sus autores, con licencia concedida al editor.' },
        ],
      },
      {
        id: 'donnees', no: '5', h2: 'Datos personales', frH: 'Données personnelles · RGPD', tocLabel: '5 · Datos personales',
        blocks: [
          { kind: 'p', html: 'De conformidad con el Reglamento General de Protección de Datos (UE 2016/679) y la <em>Loi Informatique et Libertés</em> francesa, solo recogemos datos personales cuando usted decide confiárnoslos:' },
          { kind: 'ul', items: [
            '<strong>La Carta</strong> — cuando se suscribe, conservamos su dirección de correo electrónico con el único fin de enviarle la carta mensual. Puede darse de baja en cualquier momento mediante el enlace presente en cada correo.',
            '<strong>Contacto</strong> — el nombre, el correo electrónico y el mensaje enviados a través del formulario de contacto solo sirven para responderle y no se conservan más tiempo del necesario.',
          ] },
          { kind: 'p', html: 'Los datos nunca se venden ni se comparten con terceros con fines publicitarios. Tiene derecho a acceder, rectificar, suprimir, limitar y portar sus datos, así como a oponerse a su tratamiento. Para ejercer estos derechos, escriba a <a class="inl" href="mailto:privacy@the-south-of-france.com">privacy@the-south-of-france.com</a>.' },
          { kind: 'p', html: 'También puede presentar una reclamación ante la <a class="inl" href="https://www.cnil.fr" rel="nofollow noopener">CNIL</a>, la autoridad francesa de protección de datos.' },
          { kind: 'p', html: `Responsable del tratamiento: <span class="ph">${PLACEHOLDER}</span>.` },
        ],
      },
      {
        id: 'cookies', no: '6', h2: 'Cookies', frH: 'Cookies et mesure d’audience', tocLabel: '6 · Cookies',
        blocks: [
          { kind: 'p', html: 'Este sitio reduce las cookies al mínimo indispensable. No utilizamos ningún rastreador publicitario ni ninguna cookie social de terceros.' },
          { kind: 'ul', items: [
            '<strong>Cookies esenciales</strong> — necesarias para el funcionamiento del sitio (preferencia de idioma, seguridad de los formularios). No requieren consentimiento.',
            `<strong>Medición de audiencia</strong> — <span class="ph">${PLACEHOLDER}</span>, configurada para respetar su privacidad. <span class="ph">${PLACEHOLDER}</span>`,
          ] },
          { kind: 'p', html: 'Puede rechazar o eliminar las cookies en cualquier momento desde la configuración de su navegador.' },
        ],
      },
      {
        id: 'droit', no: '7', h2: 'Legislación aplicable', frH: 'Droit applicable', tocLabel: '7 · Legislación aplicable',
        blocks: [
          { kind: 'p', html: 'El presente aviso legal se rige por el derecho francés. Cualquier litigio relativo al uso de este sitio es competencia de los tribunales franceses, sin perjuicio de las normas imperativas de protección de los consumidores.' },
        ],
      },
    ],
  },
};
