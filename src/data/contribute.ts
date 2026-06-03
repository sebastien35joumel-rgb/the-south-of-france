// ─────────────────────────────────────────────────────────────
// "Write for us" (one-off guest article) and "Become an occasional
// contributor" pages. Keyed by section, then locale.
//
// IMPORTANT — the contributor page carries deliberate guard-rails so the
// arrangement reads as what it is: an occasional, unpaid, independent
// contribution with no subordination, no quota and no promise of a
// recurring collaboration (i.e. nothing that could be mistaken for
// disguised salaried work). Do not soften these.
// ─────────────────────────────────────────────────────────────
import type { Locale, SectionKey } from '../i18n/config';

export interface ContributeStep { no: string; title: string; text: string; }

export interface ContributeContent {
  title: string;
  description: string;
  heroImg: string;
  heroAlt: string;
  crumb: string;
  h1: string;        // may contain <em>
  lede: string;      // may contain <em>
  introCols: string[];
  stepsLabel: string;
  stepsHeading: string; // may contain <em>
  steps: ContributeStep[];
  guardLabel: string;
  guardHeading: string; // may contain <em>
  guardIntro: string;
  guards: string[];
  ctaLabel: string;
  ctaHeading: string;   // may contain <em>
  ctaText: string;
  ctaButton: string;
  ctaSection: SectionKey;
}

const HERO_WRITE =
  'https://images.unsplash.com/photo-1597512432969-dd65354dba02?fm=jpg&q=76&w=2200&auto=format&fit=crop';
const HERO_CONTRIB =
  'https://images.unsplash.com/photo-1535928021132-3dfd912533d7?fm=jpg&q=76&w=2200&auto=format&fit=crop';

type CKey = 'contribute' | 'become-contributor';

export const contribute: Record<CKey, Partial<Record<Locale, ContributeContent>>> = {
  // ── Write a guest article (one-off pitch) ──────────────────
  contribute: {
    en: {
      title: 'Write a guest article — The South of France',
      description:
        'Pitch a one-off article to The South of France. We commission occasionally, never buy coverage, and keep editorial control.',
      heroImg: HERO_WRITE,
      heroAlt: 'A desk by an open southern window',
      crumb: 'Write for us',
      h1: 'Write a <em>guest article</em>',
      lede: 'Now and then, a place is best told by the person who knows it — so we open the pages to the occasional outside voice.',
      introCols: [
        'We are a small desk with a fixed idea of the South, and we cannot be everywhere. When a reader knows a valley, a table or a craft better than we ever will, we would rather print their account than a thinner one of our own. This page is how that conversation starts.',
        'It is not a call for volume. We publish a handful of guest pieces a year, chosen the way we choose everything else — because the place earns it, and because the writing is honest. We do not buy articles, we do not run sponsored copy, and we never sell a link or a mention inside a story.',
      ],
      stepsLabel: 'How it works · Comment faire',
      stepsHeading: 'Four <em>steps</em>',
      steps: [
        { no: 'I', title: 'Read us first', text: 'A page or two will tell you the voice: first person plural, slow, specific, and only about places we have actually been. If that is not your register, this is not the right home for the piece.' },
        { no: 'II', title: 'Send a pitch, not a manuscript', text: 'A hundred and fifty words is plenty: the place, why it matters now, and why you are the one to write it. A finished article is harder for us to shape than an idea.' },
        { no: 'III', title: 'Tell us who you are', text: 'A line on your connection to the subject — and, plainly, any interest you have in it. We can write about a place a friend runs; we just say so.' },
        { no: 'IV', title: 'If it fits, we commission it', text: 'We agree the angle, the length and a date together. From there the desk edits as it would any piece, and decides when — or whether — it runs.' },
      ],
      guardLabel: 'The fine print · Les règles',
      guardHeading: 'What this <em>is</em> — and is not',
      guardIntro: 'So there is no misunderstanding, a guest article is a one-off, unpaid contribution. It carries none of the trappings of a job:',
      guards: [
        'It is a single, occasional piece — not a position, a retainer or a standing arrangement.',
        'It is unpaid on both sides: we pay no fee, and we accept no payment, gift or comped stay in exchange for coverage.',
        'There is no schedule, no quota and no obligation — for you or for us — to follow it with anything more.',
        'Editorial control stays with the desk: we may edit, cut, hold or decline, and we cannot promise a reply to every pitch.',
        'You keep authorship of your text; by sending it you grant us the right to publish and translate it across our editions.',
        'This page is an invitation to propose a piece — not an offer of employment, a contract, or a promise of ongoing collaboration.',
      ],
      ctaLabel: 'Ready · Prêt',
      ctaHeading: 'Have a <em>place</em> in mind?',
      ctaText: 'Send your pitch to the editors. One paragraph is enough to start.',
      ctaButton: 'Write to the editors',
      ctaSection: 'contact',
    },
    fr: {
      title: 'Rédiger un article invité — The South of France',
      description:
        'Proposez un article ponctuel à The South of France. Nous commandons rarement, n’achetons jamais de contenu et gardons la main éditoriale.',
      heroImg: HERO_WRITE,
      heroAlt: 'Un bureau près d’une fenêtre du Sud',
      crumb: 'Écrire pour nous',
      h1: 'Rédiger un <em>article invité</em>',
      lede: 'Parfois, un lieu se raconte mieux par celui qui le connaît — alors nous ouvrons nos pages, de loin en loin, à une voix extérieure.',
      introCols: [
        'Nous sommes une petite rédaction avec une idée arrêtée du Sud, et nous ne pouvons pas être partout. Quand un lecteur connaît une vallée, une table ou un métier mieux que nous ne le ferons jamais, nous préférons publier son récit plutôt qu’un autre, plus mince, signé de nous. Cette page est le début de cette conversation.',
        'Ce n’est pas un appel au volume. Nous publions une poignée d’articles invités par an, choisis comme tout le reste — parce que le lieu le mérite, et parce que l’écriture est honnête. Nous n’achetons pas d’articles, ne publions aucun contenu sponsorisé, et ne vendons jamais un lien ni une mention au sein d’un récit.',
      ],
      stepsLabel: 'Comment faire · How it works',
      stepsHeading: 'Quatre <em>étapes</em>',
      steps: [
        { no: 'I', title: 'Lisez-nous d’abord', text: 'Une page ou deux suffisent à saisir la voix : un « nous » posé, lent, précis, et seulement des lieux où nous sommes vraiment allés. Si ce n’est pas votre registre, ce n’est pas la bonne maison pour le texte.' },
        { no: 'II', title: 'Envoyez une idée, pas un manuscrit', text: 'Cent cinquante mots suffisent : le lieu, pourquoi maintenant, et pourquoi vous. Un article fini est plus difficile à façonner pour nous qu’une idée.' },
        { no: 'III', title: 'Dites-nous qui vous êtes', text: 'Une ligne sur votre lien avec le sujet — et, clairement, l’intérêt éventuel que vous y avez. Nous pouvons parler d’un lieu tenu par un ami ; nous le disons simplement.' },
        { no: 'IV', title: 'Si cela colle, nous commandons', text: 'Nous fixons ensemble l’angle, la longueur et une date. Ensuite la rédaction édite comme n’importe quel texte, et décide quand — ou si — il paraît.' },
      ],
      guardLabel: 'Les règles · The fine print',
      guardHeading: 'Ce que c’<em>est</em> — et n’est pas',
      guardIntro: 'Pour qu’il n’y ait pas de malentendu, un article invité est une contribution ponctuelle et bénévole. Il n’a aucun des attributs d’un emploi :',
      guards: [
        'C’est un texte unique et occasionnel — pas un poste, pas un forfait, pas un arrangement durable.',
        'Il est bénévole des deux côtés : nous ne versons aucune rémunération, et nous n’acceptons ni paiement, ni cadeau, ni séjour offert en échange d’une parution.',
        'Il n’y a ni calendrier, ni quota, ni obligation — pour vous comme pour nous — d’y donner la moindre suite.',
        'La main éditoriale reste à la rédaction : nous pouvons éditer, couper, différer ou refuser, et nous ne pouvons promettre une réponse à chaque proposition.',
        'Vous conservez la paternité de votre texte ; en nous l’envoyant, vous nous accordez le droit de le publier et de le traduire dans nos éditions.',
        'Cette page est une invitation à proposer un texte — non une offre d’emploi, un contrat, ou une promesse de collaboration suivie.',
      ],
      ctaLabel: 'Prêt · Ready',
      ctaHeading: 'Un <em>lieu</em> en tête ?',
      ctaText: 'Envoyez votre idée à la rédaction. Un paragraphe suffit pour commencer.',
      ctaButton: 'Écrire à la rédaction',
      ctaSection: 'contact',
    },
    it: {
      title: 'Scrivere un articolo ospite — The South of France',
      description:
        'Proponi un articolo occasionale a The South of France. Commissioniamo di rado, non compriamo contenuti e manteniamo il controllo editoriale.',
      heroImg: HERO_WRITE,
      heroAlt: 'Una scrivania accanto a una finestra del Sud',
      crumb: 'Scrivi per noi',
      h1: 'Scrivere un <em>articolo ospite</em>',
      lede: 'A volte un luogo si racconta meglio attraverso chi lo conosce — così, di tanto in tanto, apriamo le pagine a una voce esterna.',
      introCols: [
        'Siamo una piccola redazione con un’idea precisa del Sud, e non possiamo essere ovunque. Quando un lettore conosce una valle, una tavola o un mestiere meglio di quanto faremo mai, preferiamo pubblicare il suo racconto piuttosto che uno più tenue firmato da noi. Questa pagina è l’inizio di quella conversazione.',
        'Non è un appello al volume. Pubblichiamo una manciata di articoli ospiti all’anno, scelti come tutto il resto — perché il luogo se lo merita, e perché la scrittura è onesta. Non compriamo articoli, non pubblichiamo contenuti sponsorizzati e non vendiamo mai un link o una menzione dentro un racconto.',
      ],
      stepsLabel: 'Come funziona · Comment faire',
      stepsHeading: 'Quattro <em>passi</em>',
      steps: [
        { no: 'I', title: 'Leggeteci prima', text: 'Una pagina o due bastano a cogliere la voce: un « noi » posato, lento, preciso, e solo luoghi dove siamo stati davvero. Se non è il vostro registro, non è la casa giusta per il testo.' },
        { no: 'II', title: 'Inviate un’idea, non un manoscritto', text: 'Centocinquanta parole bastano: il luogo, perché ora e perché voi. Un articolo finito è più difficile da modellare di un’idea.' },
        { no: 'III', title: 'Diteci chi siete', text: 'Una riga sul vostro legame con il tema — e, chiaramente, l’eventuale interesse che vi avete. Possiamo raccontare un luogo gestito da un amico; lo diciamo e basta.' },
        { no: 'IV', title: 'Se è in linea, commissioniamo', text: 'Concordiamo insieme taglio, lunghezza e una data. Da lì la redazione edita come qualsiasi testo e decide quando — o se — esce.' },
      ],
      guardLabel: 'Le regole · The fine print',
      guardHeading: 'Che cosa <em>è</em> — e non è',
      guardIntro: 'Perché non vi siano equivoci, un articolo ospite è un contributo occasionale e gratuito. Non ha nessuno dei tratti di un impiego:',
      guards: [
        'È un testo unico e occasionale — non un posto, non un forfait, non un accordo duraturo.',
        'È gratuito da entrambe le parti: non versiamo alcun compenso e non accettiamo pagamenti, regali o soggiorni offerti in cambio di una pubblicazione.',
        'Non c’è calendario, né quota, né obbligo — per voi come per noi — di darvi alcun seguito.',
        'Il controllo editoriale resta alla redazione: possiamo editare, tagliare, rinviare o rifiutare, e non possiamo promettere una risposta a ogni proposta.',
        'Conservate la paternità del testo; inviandocelo ci accordate il diritto di pubblicarlo e tradurlo nelle nostre edizioni.',
        'Questa pagina è un invito a proporre un testo — non un’offerta di lavoro, un contratto o una promessa di collaborazione continuativa.',
      ],
      ctaLabel: 'Pronti · Ready',
      ctaHeading: 'Avete un <em>luogo</em> in mente?',
      ctaText: 'Inviate la vostra idea alla redazione. Un paragrafo basta per cominciare.',
      ctaButton: 'Scrivere alla redazione',
      ctaSection: 'contact',
    },
    de: {
      title: 'Einen Gastbeitrag schreiben — The South of France',
      description:
        'Schlagen Sie The South of France einen einmaligen Beitrag vor. Wir beauftragen selten, kaufen keine Berichterstattung und behalten die redaktionelle Hoheit.',
      heroImg: HERO_WRITE,
      heroAlt: 'Ein Schreibtisch an einem offenen Fenster des Südens',
      crumb: 'Für uns schreiben',
      h1: 'Einen <em>Gastbeitrag</em> schreiben',
      lede: 'Manchmal erzählt sich ein Ort am besten durch den, der ihn kennt — darum öffnen wir unsere Seiten hin und wieder einer Stimme von außen.',
      introCols: [
        'Wir sind eine kleine Redaktion mit einer festen Vorstellung vom Süden und können nicht überall sein. Wenn ein Leser ein Tal, einen Tisch oder ein Handwerk besser kennt, als wir es je werden, drucken wir lieber seinen Bericht als einen dünneren von uns. Diese Seite ist der Anfang dieses Gesprächs.',
        'Es ist kein Aufruf zur Menge. Wir veröffentlichen eine Handvoll Gastbeiträge im Jahr, ausgewählt wie alles andere — weil der Ort es verdient und weil das Schreiben ehrlich ist. Wir kaufen keine Artikel, veröffentlichen keine bezahlten Inhalte und verkaufen nie einen Link oder eine Erwähnung in einem Text.',
      ],
      stepsLabel: 'So geht es · Comment faire',
      stepsHeading: 'Vier <em>Schritte</em>',
      steps: [
        { no: 'I', title: 'Lesen Sie uns zuerst', text: 'Eine Seite oder zwei zeigen den Ton: ein ruhiges „Wir“, langsam, genau, und nur Orte, an denen wir tatsächlich waren. Ist das nicht Ihr Register, ist dies nicht das richtige Zuhause für den Text.' },
        { no: 'II', title: 'Schicken Sie eine Idee, kein Manuskript', text: 'Hundertfünfzig Wörter genügen: der Ort, warum jetzt und warum Sie. Ein fertiger Artikel lässt sich schwerer formen als eine Idee.' },
        { no: 'III', title: 'Sagen Sie, wer Sie sind', text: 'Eine Zeile zu Ihrer Verbindung zum Thema — und, klar, zu jedem Interesse, das Sie daran haben. Wir dürfen über einen Ort schreiben, den ein Freund führt; wir sagen es nur.' },
        { no: 'IV', title: 'Passt es, beauftragen wir', text: 'Wir vereinbaren gemeinsam Blickwinkel, Länge und ein Datum. Danach redigiert die Redaktion wie jeden Text und entscheidet, wann — oder ob — er erscheint.' },
      ],
      guardLabel: 'Das Kleingedruckte · The fine print',
      guardHeading: 'Was es <em>ist</em> — und nicht ist',
      guardIntro: 'Damit kein Missverständnis entsteht: Ein Gastbeitrag ist ein einmaliger, unbezahlter Beitrag. Er trägt keines der Merkmale einer Anstellung:',
      guards: [
        'Es ist ein einzelner, gelegentlicher Text — keine Stelle, kein Pauschalvertrag, keine dauerhafte Vereinbarung.',
        'Er ist auf beiden Seiten unbezahlt: Wir zahlen kein Honorar und nehmen keine Zahlung, kein Geschenk und keinen geschenkten Aufenthalt für eine Veröffentlichung an.',
        'Es gibt keinen Zeitplan, keine Quote und keine Pflicht — für Sie wie für uns — irgendetwas folgen zu lassen.',
        'Die redaktionelle Hoheit bleibt bei der Redaktion: Wir dürfen redigieren, kürzen, zurückstellen oder ablehnen, und wir können nicht auf jede Anfrage eine Antwort zusagen.',
        'Sie behalten die Urheberschaft an Ihrem Text; mit dem Einsenden räumen Sie uns das Recht ein, ihn in unseren Ausgaben zu veröffentlichen und zu übersetzen.',
        'Diese Seite ist eine Einladung, einen Text vorzuschlagen — kein Stellenangebot, kein Vertrag und kein Versprechen fortlaufender Zusammenarbeit.',
      ],
      ctaLabel: 'Bereit · Ready',
      ctaHeading: 'Einen <em>Ort</em> im Sinn?',
      ctaText: 'Schicken Sie Ihre Idee an die Redaktion. Ein Absatz genügt für den Anfang.',
      ctaButton: 'An die Redaktion schreiben',
      ctaSection: 'contact',
    },
    es: {
      title: 'Escribir un artículo invitado — The South of France',
      description:
        'Propón un artículo puntual a The South of France. Encargamos pocas veces, no compramos contenido y conservamos el control editorial.',
      heroImg: HERO_WRITE,
      heroAlt: 'Un escritorio junto a una ventana del Sur',
      crumb: 'Escribe para nosotros',
      h1: 'Escribir un <em>artículo invitado</em>',
      lede: 'A veces un lugar se cuenta mejor a través de quien lo conoce — por eso abrimos nuestras páginas, de tanto en tanto, a una voz de fuera.',
      introCols: [
        'Somos una redacción pequeña con una idea fija del Sur, y no podemos estar en todas partes. Cuando un lector conoce un valle, una mesa o un oficio mejor de lo que lo haremos nunca, preferimos publicar su relato antes que otro más pobre firmado por nosotros. Esta página es el comienzo de esa conversación.',
        'No es una llamada al volumen. Publicamos un puñado de artículos invitados al año, elegidos como todo lo demás — porque el lugar lo merece y porque la escritura es honesta. No compramos artículos, no publicamos contenido patrocinado y nunca vendemos un enlace ni una mención dentro de un relato.',
      ],
      stepsLabel: 'Cómo funciona · Comment faire',
      stepsHeading: 'Cuatro <em>pasos</em>',
      steps: [
        { no: 'I', title: 'Léenos primero', text: 'Una página o dos bastan para captar la voz: un « nosotros » sereno, lento, preciso, y solo lugares donde hemos estado de verdad. Si no es tu registro, esta no es la casa adecuada para el texto.' },
        { no: 'II', title: 'Envía una idea, no un manuscrito', text: 'Ciento cincuenta palabras bastan: el lugar, por qué ahora y por qué tú. Un artículo terminado es más difícil de moldear que una idea.' },
        { no: 'III', title: 'Dinos quién eres', text: 'Una línea sobre tu vínculo con el tema — y, claramente, el interés que puedas tener en él. Podemos hablar de un lugar que lleva un amigo; simplemente lo decimos.' },
        { no: 'IV', title: 'Si encaja, lo encargamos', text: 'Acordamos juntos el enfoque, la extensión y una fecha. A partir de ahí la redacción edita como cualquier texto y decide cuándo — o si — se publica.' },
      ],
      guardLabel: 'La letra pequeña · The fine print',
      guardHeading: 'Lo que <em>es</em> — y no es',
      guardIntro: 'Para que no haya malentendidos, un artículo invitado es una contribución puntual y gratuita. No tiene ninguno de los rasgos de un empleo:',
      guards: [
        'Es un texto único y ocasional — no un puesto, ni un contrato a tanto alzado, ni un acuerdo duradero.',
        'Es gratuito por ambas partes: no pagamos honorarios y no aceptamos pago, regalo ni estancia regalada a cambio de una publicación.',
        'No hay calendario, ni cuota, ni obligación — para ti ni para nosotros — de darle continuidad alguna.',
        'El control editorial queda en la redacción: podemos editar, recortar, aplazar o rechazar, y no podemos prometer respuesta a cada propuesta.',
        'Conservas la autoría de tu texto; al enviárnoslo nos concedes el derecho de publicarlo y traducirlo en nuestras ediciones.',
        'Esta página es una invitación a proponer un texto — no una oferta de empleo, un contrato ni una promesa de colaboración continuada.',
      ],
      ctaLabel: 'Listo · Ready',
      ctaHeading: '¿Tienes un <em>lugar</em> en mente?',
      ctaText: 'Envía tu idea a la redacción. Un párrafo basta para empezar.',
      ctaButton: 'Escribir a la redacción',
      ctaSection: 'contact',
    },
  },

  // ── Become an occasional contributor (the model + guard-rails) ──
  'become-contributor': {
    en: {
      title: 'Become an occasional contributor — The South of France',
      description:
        'How occasional contribution works at The South of France: unpaid, independent, with no subordination, no quota and no promise of recurring work.',
      heroImg: HERO_CONTRIB,
      heroAlt: 'A southern terrace at the end of the day',
      crumb: 'Become a contributor',
      h1: 'Become an <em>occasional</em> contributor',
      lede: 'A handful of people outside the desk write for us now and then. Here is exactly what that is — and, just as clearly, what it is not.',
      introCols: [
        'The South of France is written mostly by its editors. But the region is larger than any small desk, and some of its best knowledge sits with the people who live a single corner of it well: a grower, a diver, a bookseller, a jeweller. From time to time we ask one of them to write — once, about the thing they know.',
        'We want to be plain about the terms, because goodwill should never become someone’s unpaid second job. Occasional contribution here is exactly that: occasional. It is a guest seat at the table, offered and accepted freely, with nothing owed in either direction afterwards.',
      ],
      stepsLabel: 'The model · Le principe',
      stepsHeading: 'How it <em>works</em>',
      steps: [
        { no: 'I', title: 'Occasional by design', text: 'A contribution is a single piece, written when something is genuinely worth it. There is no series to feed and no next instalment expected.' },
        { no: 'II', title: 'Unpaid and independent', text: 'No fee changes hands, in either direction. You write as yourself, on your own time, with no instruction on how, when or how much to produce.' },
        { no: 'III', title: 'You write what you know', text: 'Your corner of the South, your craft, your obsession. We are interested precisely because it is yours, not ours.' },
        { no: 'IV', title: 'The desk edits and decides', text: 'We shape the text, choose the moment, and remain responsible for what appears. Publication is our call, never an obligation.' },
      ],
      guardLabel: 'In plain terms · Pour être clair',
      guardHeading: 'The <em>guard-rails</em>',
      guardIntro: 'To keep this honest — for you and for us — every occasional contribution is bound by the same simple terms:',
      guards: [
        'It is voluntary, occasional and unpaid: no salary, no fee, no payment in kind, no comped stays.',
        'There is no relationship of subordination: no hours, no workplace, no instructions on output, no quota.',
        'No one commits to volume, frequency or duration — not you, and not us.',
        'As a rule, one article per contributor; any continuation is decided case by case and is never promised in advance.',
        'The editorial desk alone decides on publication, edits and timing, and may decline a piece at any stage.',
        'You keep authorship of your work and may publish it elsewhere; you grant us the right to publish and translate it.',
        'This page describes a practice — it is not a job offer, an employment contract, or a promise of recurring or ongoing collaboration.',
      ],
      ctaLabel: 'Interested · Intéressé',
      ctaHeading: 'Think you have <em>one piece</em> in you?',
      ctaText: 'Tell the editors who you are and what you would write — once. We read every note.',
      ctaButton: 'Write to the editors',
      ctaSection: 'contact',
    },
    fr: {
      title: 'Devenir contributeur occasionnel — The South of France',
      description:
        'Comment fonctionne la contribution occasionnelle à The South of France : bénévole, indépendante, sans lien de subordination, sans quota ni promesse de collaboration récurrente.',
      heroImg: HERO_CONTRIB,
      heroAlt: 'Une terrasse du Sud en fin de journée',
      crumb: 'Devenir contributeur',
      h1: 'Devenir contributeur <em>occasionnel</em>',
      lede: 'Quelques personnes extérieures à la rédaction écrivent pour nous, de loin en loin. Voici précisément ce que c’est — et, tout aussi clairement, ce que ce n’est pas.',
      introCols: [
        'The South of France est écrit pour l’essentiel par sa rédaction. Mais la région est plus vaste qu’une petite équipe, et une partie de ses meilleurs savoirs tient à ceux qui en vivent bien un seul coin : un vigneron, une plongeuse, un libraire, une joaillière. De temps en temps, nous demandons à l’un d’eux d’écrire — une fois, sur ce qu’il connaît.',
        'Nous tenons à être clairs sur les termes, car la bonne volonté ne doit jamais devenir le second emploi non payé de quelqu’un. La contribution occasionnelle, ici, est exactement cela : occasionnelle. Une place d’invité à la table, offerte et acceptée librement, sans que rien ne soit dû ensuite, dans un sens comme dans l’autre.',
      ],
      stepsLabel: 'Le principe · The model',
      stepsHeading: 'Comment ça <em>marche</em>',
      steps: [
        { no: 'I', title: 'Occasionnel par nature', text: 'Une contribution est un texte unique, écrit quand quelque chose le mérite vraiment. Aucune série à alimenter, aucun épisode suivant attendu.' },
        { no: 'II', title: 'Bénévole et indépendant', text: 'Aucune rémunération ne circule, dans un sens ni dans l’autre. Vous écrivez en votre nom, sur votre temps, sans consigne sur la manière, le moment ou la quantité à produire.' },
        { no: 'III', title: 'Vous écrivez ce que vous connaissez', text: 'Votre coin du Sud, votre métier, votre obsession. Cela nous intéresse précisément parce que c’est le vôtre, pas le nôtre.' },
        { no: 'IV', title: 'La rédaction édite et décide', text: 'Nous façonnons le texte, choisissons le moment, et restons responsables de ce qui paraît. La publication relève de nous, jamais d’une obligation.' },
      ],
      guardLabel: 'Pour être clair · In plain terms',
      guardHeading: 'Les <em>garde-fous</em>',
      guardIntro: 'Pour que cela reste honnête — pour vous comme pour nous — toute contribution occasionnelle est tenue par les mêmes termes simples :',
      guards: [
        'Elle est bénévole, occasionnelle et non rémunérée : aucun salaire, aucun cachet, aucun paiement en nature, aucun séjour offert.',
        'Il n’existe aucun lien de subordination : pas d’horaires, pas de lieu de travail, aucune consigne de production, aucun quota.',
        'Personne ne s’engage sur un volume, une fréquence ou une durée — ni vous, ni nous.',
        'En principe, un seul article par contributeur ; toute suite éventuelle se décide au cas par cas et n’est jamais promise à l’avance.',
        'La rédaction est seule à décider de la publication, des coupes et du calendrier, et peut refuser un texte à tout moment.',
        'Vous conservez la paternité de votre texte et pouvez le publier ailleurs ; vous nous accordez le droit de le publier et de le traduire.',
        'Cette page décrit une pratique — ce n’est ni une offre d’emploi, ni un contrat de travail, ni une promesse de collaboration récurrente ou suivie.',
      ],
      ctaLabel: 'Intéressé · Interested',
      ctaHeading: 'Un <em>seul texte</em> en vous ?',
      ctaText: 'Dites à la rédaction qui vous êtes et ce que vous écririez — une fois. Nous lisons chaque message.',
      ctaButton: 'Écrire à la rédaction',
      ctaSection: 'contact',
    },
    it: {
      title: 'Diventare collaboratore occasionale — The South of France',
      description:
        'Come funziona la collaborazione occasionale a The South of France: volontaria, indipendente, senza vincolo di subordinazione, senza quota né promessa di collaborazione ricorrente.',
      heroImg: HERO_CONTRIB,
      heroAlt: 'Una terrazza del Sud a fine giornata',
      crumb: 'Diventare collaboratore',
      h1: 'Diventare collaboratore <em>occasionale</em>',
      lede: 'Alcune persone esterne alla redazione scrivono per noi, di tanto in tanto. Ecco esattamente che cos’è — e, con altrettanta chiarezza, che cosa non è.',
      introCols: [
        'The South of France è scritto in gran parte dalla sua redazione. Ma la regione è più vasta di una piccola squadra, e una parte del suo sapere migliore appartiene a chi ne vive bene un solo angolo: un vignaiolo, una subacquea, un libraio, una gioielliera. Di tanto in tanto chiediamo a uno di loro di scrivere — una volta, su ciò che conosce.',
        'Vogliamo essere chiari sui termini, perché la buona volontà non deve mai diventare il secondo lavoro non pagato di qualcuno. La collaborazione occasionale, qui, è esattamente questo: occasionale. Un posto da ospite alla tavola, offerto e accettato liberamente, senza che nulla sia dovuto poi, in un senso o nell’altro.',
      ],
      stepsLabel: 'Il principio · The model',
      stepsHeading: 'Come <em>funziona</em>',
      steps: [
        { no: 'I', title: 'Occasionale per natura', text: 'Una collaborazione è un testo unico, scritto quando qualcosa lo merita davvero. Nessuna serie da alimentare, nessun episodio successivo atteso.' },
        { no: 'II', title: 'Volontario e indipendente', text: 'Nessun compenso circola, in un senso o nell’altro. Scrivete a vostro nome, nel vostro tempo, senza indicazioni su come, quando o quanto produrre.' },
        { no: 'III', title: 'Scrivete ciò che conoscete', text: 'Il vostro angolo del Sud, il vostro mestiere, la vostra ossessione. Ci interessa proprio perché è vostro, non nostro.' },
        { no: 'IV', title: 'La redazione edita e decide', text: 'Modelliamo il testo, scegliamo il momento e restiamo responsabili di ciò che esce. La pubblicazione spetta a noi, mai un obbligo.' },
      ],
      guardLabel: 'Per essere chiari · In plain terms',
      guardHeading: 'Le <em>tutele</em>',
      guardIntro: 'Perché resti onesto — per voi e per noi — ogni collaborazione occasionale è vincolata agli stessi termini semplici:',
      guards: [
        'È volontaria, occasionale e non retribuita: nessuno stipendio, nessun cachet, nessun pagamento in natura, nessun soggiorno offerto.',
        'Non esiste alcun vincolo di subordinazione: niente orari, niente luogo di lavoro, nessuna indicazione di produzione, nessuna quota.',
        'Nessuno si impegna su volume, frequenza o durata — né voi, né noi.',
        'Di norma, un solo articolo per collaboratore; ogni eventuale seguito si decide caso per caso e non è mai promesso in anticipo.',
        'La sola redazione decide pubblicazione, tagli e tempi, e può rifiutare un testo in qualsiasi momento.',
        'Conservate la paternità del testo e potete pubblicarlo altrove; ci accordate il diritto di pubblicarlo e tradurlo.',
        'Questa pagina descrive una prassi — non è un’offerta di lavoro, un contratto di impiego, né una promessa di collaborazione ricorrente o continuativa.',
      ],
      ctaLabel: 'Interessati · Interested',
      ctaHeading: 'Avete <em>un testo</em> dentro?',
      ctaText: 'Dite alla redazione chi siete e cosa scrivereste — una volta. Leggiamo ogni messaggio.',
      ctaButton: 'Scrivere alla redazione',
      ctaSection: 'contact',
    },
    de: {
      title: 'Gelegentlich mitwirken — The South of France',
      description:
        'Wie gelegentliche Mitarbeit bei The South of France funktioniert: freiwillig, unabhängig, ohne Weisungsverhältnis, ohne Quote und ohne Versprechen wiederkehrender Arbeit.',
      heroImg: HERO_CONTRIB,
      heroAlt: 'Eine Terrasse des Südens am Ende des Tages',
      crumb: 'Mitwirken',
      h1: 'Gelegentlich <em>mitwirken</em>',
      lede: 'Eine Handvoll Menschen außerhalb der Redaktion schreibt hin und wieder für uns. Hier steht genau, was das ist — und ebenso klar, was es nicht ist.',
      introCols: [
        'The South of France wird größtenteils von seiner Redaktion geschrieben. Doch die Region ist größer als jede kleine Redaktion, und ein Teil ihres besten Wissens liegt bei denen, die einen einzigen Winkel gut leben: ein Winzer, eine Taucherin, ein Buchhändler, eine Juwelierin. Von Zeit zu Zeit bitten wir eine dieser Personen zu schreiben — einmal, über das, was sie kennt.',
        'Wir wollen bei den Bedingungen deutlich sein, denn guter Wille darf nie zum unbezahlten Zweitjob eines Menschen werden. Gelegentliche Mitarbeit ist hier genau das: gelegentlich. Ein Gastplatz am Tisch, frei angeboten und frei angenommen, ohne dass danach in irgendeine Richtung etwas geschuldet wäre.',
      ],
      stepsLabel: 'Das Prinzip · The model',
      stepsHeading: 'Wie es <em>läuft</em>',
      steps: [
        { no: 'I', title: 'Gelegentlich von Natur aus', text: 'Ein Beitrag ist ein einzelner Text, geschrieben, wenn etwas es wirklich wert ist. Keine Serie zu füttern, keine nächste Folge erwartet.' },
        { no: 'II', title: 'Unbezahlt und unabhängig', text: 'Kein Honorar wechselt die Hand, in keine Richtung. Sie schreiben als Sie selbst, in Ihrer Zeit, ohne Vorgabe zu Art, Zeitpunkt oder Menge.' },
        { no: 'III', title: 'Sie schreiben, was Sie kennen', text: 'Ihr Winkel des Südens, Ihr Handwerk, Ihre Obsession. Es interessiert uns gerade, weil es Ihres ist, nicht unseres.' },
        { no: 'IV', title: 'Die Redaktion redigiert und entscheidet', text: 'Wir formen den Text, wählen den Moment und bleiben verantwortlich für das, was erscheint. Die Veröffentlichung ist unsere Entscheidung, nie eine Pflicht.' },
      ],
      guardLabel: 'Klar gesagt · In plain terms',
      guardHeading: 'Die <em>Leitplanken</em>',
      guardIntro: 'Damit es ehrlich bleibt — für Sie und für uns — gilt für jede gelegentliche Mitarbeit dasselbe einfache Regelwerk:',
      guards: [
        'Sie ist freiwillig, gelegentlich und unbezahlt: kein Gehalt, kein Honorar, keine Sachleistung, keine geschenkten Aufenthalte.',
        'Es besteht kein Weisungsverhältnis: keine Arbeitszeiten, kein Arbeitsort, keine Vorgaben zur Leistung, keine Quote.',
        'Niemand verpflichtet sich auf Umfang, Häufigkeit oder Dauer — weder Sie noch wir.',
        'In der Regel ein Beitrag pro Mitwirkendem; jede Fortsetzung wird im Einzelfall entschieden und nie im Voraus zugesagt.',
        'Allein die Redaktion entscheidet über Veröffentlichung, Kürzungen und Zeitpunkt und kann einen Text jederzeit ablehnen.',
        'Sie behalten die Urheberschaft und dürfen den Text anderswo veröffentlichen; Sie räumen uns das Recht ein, ihn zu veröffentlichen und zu übersetzen.',
        'Diese Seite beschreibt eine Praxis — sie ist kein Stellenangebot, kein Arbeitsvertrag und kein Versprechen wiederkehrender oder fortlaufender Zusammenarbeit.',
      ],
      ctaLabel: 'Interessiert · Interested',
      ctaHeading: 'Steckt <em>ein Text</em> in Ihnen?',
      ctaText: 'Sagen Sie der Redaktion, wer Sie sind und was Sie schreiben würden — einmal. Wir lesen jede Nachricht.',
      ctaButton: 'An die Redaktion schreiben',
      ctaSection: 'contact',
    },
    es: {
      title: 'Colaborar de forma ocasional — The South of France',
      description:
        'Cómo funciona la colaboración ocasional en The South of France: voluntaria, independiente, sin vínculo de subordinación, sin cuota ni promesa de colaboración recurrente.',
      heroImg: HERO_CONTRIB,
      heroAlt: 'Una terraza del Sur al final del día',
      crumb: 'Colaborar',
      h1: 'Colaborar de forma <em>ocasional</em>',
      lede: 'Unas pocas personas ajenas a la redacción escriben para nosotros, de tanto en tanto. Esto es exactamente lo que es — y, con la misma claridad, lo que no es.',
      introCols: [
        'The South of France lo escribe en su mayor parte su redacción. Pero la región es más amplia que cualquier equipo pequeño, y parte de su mejor conocimiento está en quienes viven bien un solo rincón: un viticultor, una buceadora, un librero, una joyera. De vez en cuando pedimos a uno de ellos que escriba — una vez, sobre lo que conoce.',
        'Queremos ser claros con las condiciones, porque la buena voluntad nunca debe convertirse en el segundo empleo no pagado de nadie. La colaboración ocasional, aquí, es exactamente eso: ocasional. Un asiento de invitado a la mesa, ofrecido y aceptado libremente, sin que después se deba nada en ningún sentido.',
      ],
      stepsLabel: 'El principio · The model',
      stepsHeading: 'Cómo <em>funciona</em>',
      steps: [
        { no: 'I', title: 'Ocasional por naturaleza', text: 'Una colaboración es un texto único, escrito cuando algo lo merece de verdad. No hay serie que alimentar ni siguiente entrega esperada.' },
        { no: 'II', title: 'Voluntario e independiente', text: 'No circula ningún pago, en ningún sentido. Escribes en tu nombre, en tu tiempo, sin instrucción sobre cómo, cuándo o cuánto producir.' },
        { no: 'III', title: 'Escribes lo que conoces', text: 'Tu rincón del Sur, tu oficio, tu obsesión. Nos interesa precisamente porque es tuyo, no nuestro.' },
        { no: 'IV', title: 'La redacción edita y decide', text: 'Damos forma al texto, elegimos el momento y seguimos siendo responsables de lo que aparece. La publicación es decisión nuestra, nunca una obligación.' },
      ],
      guardLabel: 'Para ser claros · In plain terms',
      guardHeading: 'Las <em>garantías</em>',
      guardIntro: 'Para que siga siendo honesto — para ti y para nosotros — toda colaboración ocasional se rige por los mismos términos sencillos:',
      guards: [
        'Es voluntaria, ocasional y no remunerada: ningún salario, ningún caché, ningún pago en especie, ninguna estancia regalada.',
        'No existe ningún vínculo de subordinación: sin horarios, sin lugar de trabajo, sin instrucciones de producción, sin cuota.',
        'Nadie se compromete a un volumen, una frecuencia o una duración — ni tú, ni nosotros.',
        'Por norma, un solo artículo por colaborador; cualquier continuación se decide caso por caso y nunca se promete de antemano.',
        'Solo la redacción decide la publicación, los recortes y el calendario, y puede rechazar un texto en cualquier momento.',
        'Conservas la autoría de tu texto y puedes publicarlo en otro lugar; nos concedes el derecho de publicarlo y traducirlo.',
        'Esta página describe una práctica — no es una oferta de empleo, un contrato de trabajo, ni una promesa de colaboración recurrente o continuada.',
      ],
      ctaLabel: 'Interesado · Interested',
      ctaHeading: '¿Crees que tienes <em>un texto</em>?',
      ctaText: 'Cuéntale a la redacción quién eres y qué escribirías — una vez. Leemos cada mensaje.',
      ctaButton: 'Escribir a la redacción',
      ctaSection: 'contact',
    },
  },
};
