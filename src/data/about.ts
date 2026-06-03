// ─────────────────────────────────────────────────────────────
// About page content, keyed by locale.
// EN is faithful to the gabarit; FR is a same-register translation.
// ─────────────────────────────────────────────────────────────
import type { Locale } from '../i18n/config';

export interface AboutPrinciple { no: string; title: string; text: string; }
export interface AboutEditor { img: string; alt: string; name: string; role: string; text: string; }
// Occasional contributors are real people who write for us now and then.
// They get an initials monogram (not a stock portrait) and an honest role.
// `text` may contain an inline dofollow link (<a href rel="noopener">).
export interface AboutContributor { initials: string; name: string; role: string; text: string; }

export interface AboutContent {
  title: string;
  description: string;
  heroImg: string;
  heroAlt: string;
  crumb: string;
  h1: string; // may contain <em>
  maniLabel: string;
  maniLede: string; // may contain <em>
  maniCols: string[]; // may contain <strong>
  prinLabel: string;
  prinHeading: string; // may contain <em>
  principles: AboutPrinciple[];
  edsLabel: string;
  edsHeading: string; // may contain <em>
  editors: AboutEditor[];
  contribLabel: string;
  contribHeading: string; // may contain <em>
  contribIntro: string;
  contributors: AboutContributor[];
  contribCta: string; // link to the become-contributor page
  bandLabel: string;
  bandQ: string; // may contain <em>
  bandFr: string;
  bandSig: string;
}

const HERO = 'https://images.unsplash.com/photo-1665237592603-b03f244e1496?fm=jpg&q=76&w=2200&auto=format&fit=crop';
const ED1 = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fm=jpg&q=74&w=400&auto=format&fit=crop';
const ED2 = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fm=jpg&q=74&w=400&auto=format&fit=crop';
const ED3 = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=74&w=400&auto=format&fit=crop';

export const about: Partial<Record<Locale, AboutContent>> = {
  en: {
    title: 'About — The South of France',
    description:
      'Who we are: an independent, bilingual journal of the Mediterranean. We write only about places we have paid for, slept in, and would return to.',
    heroImg: HERO,
    heroAlt: 'A Mediterranean harbour at golden hour',
    crumb: 'About',
    h1: 'A certain idea of the <em>South</em>',
    maniLabel: 'Who we are · Qui nous sommes',
    maniLede:
      'We are an independent journal of the Mediterranean — written by people who live <em>here</em>, for those who travel slowly.',
    maniCols: [
      'The South of France has been described to death. It has sold a million postcards, lent its light to a thousand brands, and become a shorthand for a holiday rather than a place. We started this journal to write about it the way you would describe it to a friend over dinner — honestly, with the names of the people who make it worth the journey.',
      'We publish <strong>four issues a year</strong>, in print and online, in English and in French. Each one gathers a handful of long reports, a season’s worth of tables and stays, and an address book we keep updating long after the issue closes. We are not a listings site. We do not try to cover everything. We go to the places ourselves, and we write only about the ones we would go back to.',
      'Our editors live between Marseille, Aix and the Var. Some were born here; others arrived and never left. What we share is a conviction that the Midi rewards patience — that the best of it is found at the speed of a back road, a long lunch, and an afternoon that goes nowhere in particular.',
      'This is, in the end, a simple promise: to send you only to places we love, and to tell you the truth about them. We go to each one ourselves, and we write down what we saw.',
    ],
    prinLabel: 'How we work · Notre méthode',
    prinHeading: 'Three <em>principles</em>',
    principles: [
      {
        no: 'I',
        title: 'We choose by hand',
        text: 'No algorithm picks these pages. Every address is chosen by an editor who has been there — for the table, the welcome, the way it holds up off-season.',
      },
      {
        no: 'II',
        title: 'We go in person',
        text: 'Nothing in these pages is written from a press kit. If we describe the light on a terrace at six, it is because we were sitting there at six.',
      },
      {
        no: 'III',
        title: 'We write to last',
        text: 'We favour the places that have earned their permanence — the family table, the perched village, the estate that has farmed the same hill for forty years.',
      },
    ],
    edsLabel: 'The masthead · La rédaction',
    edsHeading: 'The <em>editors</em>',
    editors: [
      {
        img: ED1,
        alt: 'Portrait of the editor',
        name: 'Élise Marchand',
        role: 'Editor · Provence',
        text: 'Born in Aix, a former wine writer. Covers the Luberon, the Alpilles and everything that grows between them.',
      },
      {
        img: ED2,
        alt: 'Portrait of the editor',
        name: 'Julien Vasseur',
        role: 'Editor · The Table',
        text: 'Cooked professionally for a decade before he started writing about it. Chases the Midi’s kitchens, from two stars to the harbour shack.',
      },
      {
        img: ED3,
        alt: 'Portrait of the editor',
        name: 'Camille Roux',
        role: 'Editor · The Coast',
        text: 'Photographer and diver, based in the Var. Knows every cove from Cassis to the Esterel, and which ones to keep quiet.',
      },
    ],
    contribLabel: 'From the region · Du terrain',
    contribHeading: 'Occasional <em>contributors</em>',
    contribIntro:
      'A handful of people who live a corner of the South well write for us now and then — once, about the thing they know. They are not on staff; they are friends of the desk.',
    contributors: [
      {
        initials: 'IT',
        name: 'Iwona Trembowska',
        role: 'Occasional contributor · Côte d’Azur',
        text: 'A friend of the desk who lives in Cannes and knows the Riviera from the inside. She points us toward the corners of the coast we would otherwise miss, and writes for us now and then on what she knows first-hand.',
      },
      {
        initials: 'EK',
        name: 'Emilie Keil',
        role: 'Occasional contributor · Mougins',
        text: 'Has lived in Mougins for many years, where she runs the neighbourhood goldsmith <a href="https://maison-or-bijoux-mougins.com/" rel="noopener">Maison Or et Bijoux Mougins</a>. Drawn to precious metals for their history and their lasting worth, she writes for us on craft, patience and the unhurried southern life she chose for her family.',
      },
    ],
    contribCta: 'How occasional contribution works',
    bandLabel: 'Our promise · Notre promesse',
    bandQ: 'We write only about places we have paid for, slept in, and would <em>return to.</em>',
    bandFr:
      'Nous y allons nous-mêmes, et nous écrivons ce que nous avons vu.',
    bandSig: 'The Editors · Marseille',
  },
  fr: {
    title: 'À propos — The South of France',
    description:
      'Qui nous sommes : un journal indépendant et bilingue de la Méditerranée. Nous n’écrivons que sur les lieux que nous avons payés, où nous avons dormi, et où nous reviendrions.',
    heroImg: HERO,
    heroAlt: 'Un port de Méditerranée à l’heure dorée',
    crumb: 'À propos',
    h1: 'Une certaine idée du <em>Sud</em>',
    maniLabel: 'Qui nous sommes · Who we are',
    maniLede:
      'Nous sommes un journal indépendant de la Méditerranée — écrit par des gens qui vivent <em>ici</em>, pour ceux qui voyagent lentement.',
    maniCols: [
      'Le Sud de la France a été décrit jusqu’à l’épuisement. Il a vendu un million de cartes postales, prêté sa lumière à mille marques, et fini par désigner des vacances plutôt qu’un lieu. Nous avons fondé ce journal pour en parler comme on le raconterait à un ami autour d’un dîner — honnêtement, avec le nom des gens qui rendent le voyage justifié.',
      'Nous publions <strong>quatre numéros par an</strong>, en version imprimée et en ligne, en anglais et en français. Chacun réunit une poignée de grands reportages, une saison de tables et de séjours, et un carnet d’adresses que nous continuons d’enrichir longtemps après la clôture du numéro. Nous ne sommes pas un site d’annuaire. Nous ne cherchons pas à tout couvrir. Nous allons nous-mêmes sur place, et nous n’écrivons que sur les lieux où nous reviendrions.',
      'Nos rédacteurs vivent entre Marseille, Aix et le Var. Certains sont nés ici ; d’autres sont arrivés et ne sont jamais repartis. Ce que nous partageons, c’est la conviction que le Midi récompense la patience — que le meilleur s’y trouve à l’allure d’une route secondaire, d’un long déjeuner, et d’un après-midi qui ne mène nulle part en particulier.',
      'Au fond, c’est une promesse simple : ne vous envoyer que dans des lieux que nous aimons, et vous en dire la vérité. Nous allons nous-mêmes sur chacun, et nous écrivons ce que nous avons vu.',
    ],
    prinLabel: 'Notre méthode · How we work',
    prinHeading: 'Trois <em>principes</em>',
    principles: [
      {
        no: 'I',
        title: 'Nous choisissons à la main',
        text: 'Aucun algorithme ne compose ces pages. Chaque adresse est choisie par un rédacteur qui s’y est rendu — pour la table, l’accueil, la façon dont le lieu tient hors saison.',
      },
      {
        no: 'II',
        title: 'Nous y allons en personne',
        text: 'Rien dans ces pages n’est écrit depuis un dossier de presse. Si nous décrivons la lumière sur une terrasse à six heures, c’est que nous y étions assis à six heures.',
      },
      {
        no: 'III',
        title: 'Nous écrivons pour durer',
        text: 'Nous préférons les lieux qui ont gagné leur permanence — la table de famille, le village perché, le domaine qui cultive la même colline depuis quarante ans.',
      },
    ],
    edsLabel: 'La rédaction · The masthead',
    edsHeading: 'La <em>rédaction</em>',
    editors: [
      {
        img: ED1,
        alt: 'Portrait de la rédactrice',
        name: 'Élise Marchand',
        role: 'Rédactrice · Provence',
        text: 'Née à Aix, ancienne plume du vin. Couvre le Luberon, les Alpilles et tout ce qui pousse entre les deux.',
      },
      {
        img: ED2,
        alt: 'Portrait du rédacteur',
        name: 'Julien Vasseur',
        role: 'Rédacteur · La Table',
        text: 'A cuisiné en professionnel pendant dix ans avant d’en écrire. Court les cuisines du Midi, des deux étoiles à la cabane du port.',
      },
      {
        img: ED3,
        alt: 'Portrait de la rédactrice',
        name: 'Camille Roux',
        role: 'Rédactrice · La Côte',
        text: 'Photographe et plongeuse, installée dans le Var. Connaît chaque calanque de Cassis à l’Esterel, et lesquelles taire.',
      },
    ],
    contribLabel: 'Du terrain · From the region',
    contribHeading: 'Contributrices <em>occasionnelles</em>',
    contribIntro:
      'Quelques personnes qui vivent bien un coin du Sud écrivent pour nous, de loin en loin — une fois, sur ce qu’elles connaissent. Elles ne font pas partie de la rédaction ; ce sont des amies de la maison.',
    contributors: [
      {
        initials: 'IT',
        name: 'Iwona Trembowska',
        role: 'Contributrice occasionnelle · Côte d’Azur',
        text: 'Une amie de la rédaction qui vit à Cannes et connaît la Riviera de l’intérieur. Elle nous indique les recoins de la côte que nous manquerions sans elle, et écrit pour nous de temps à autre sur ce qu’elle connaît de première main.',
      },
      {
        initials: 'EK',
        name: 'Emilie Keil',
        role: 'Contributrice occasionnelle · Mougins',
        text: 'Installée à Mougins depuis de nombreuses années, elle y tient l’atelier d’orfèvrerie de quartier <a href="https://maison-or-bijoux-mougins.com/" rel="noopener">Maison Or et Bijoux Mougins</a>. Attachée aux métaux précieux pour leur histoire et leur valeur qui dure, elle écrit pour nous sur le métier, la patience et la douceur de vivre du Sud qu’elle a choisie pour sa famille.',
      },
    ],
    contribCta: 'Comment fonctionne la contribution occasionnelle',
    bandLabel: 'Notre promesse · Our promise',
    bandQ: 'Nous n’écrivons que sur les lieux que nous avons payés, où nous avons dormi, et où nous <em>reviendrions.</em>',
    bandFr:
      'We go ourselves, and we write down what we saw.',
    bandSig: 'La Rédaction · Marseille',
  },
  it: {
    title: 'Chi siamo — The South of France',
    description:
      'Chi siamo: un giornale indipendente e bilingue del Mediterraneo. Scriviamo soltanto dei luoghi che abbiamo pagato, dove abbiamo dormito e dove torneremmo.',
    heroImg: HERO,
    heroAlt: 'Un porto del Mediterraneo nell’ora dorata',
    crumb: 'Chi siamo',
    h1: 'Una certa idea del <em>Sud</em>',
    maniLabel: 'Chi siamo · Qui nous sommes',
    maniLede:
      'Siamo un giornale indipendente del Mediterraneo — scritto da chi vive <em>qui</em>, per chi viaggia lentamente.',
    maniCols: [
      'Il Sud della Francia è stato descritto fino allo sfinimento. Ha venduto un milione di cartoline, prestato la sua luce a mille marchi e finito per indicare una vacanza più che un luogo. Abbiamo fondato questo giornale per raccontarlo come lo si racconterebbe a un amico a cena — con onestà, con il nome delle persone che rendono il viaggio degno di essere fatto.',
      'Pubblichiamo <strong>quattro numeri all’anno</strong>, in stampa e online, in inglese e in francese. Ognuno raccoglie una manciata di lunghi reportage, una stagione di tavole e soggiorni, e una rubrica di indirizzi che continuiamo ad aggiornare molto dopo la chiusura del numero. Non siamo un sito di elenchi. Non cerchiamo di coprire tutto. Andiamo noi stessi sul posto, e scriviamo soltanto dei luoghi dove torneremmo.',
      'I nostri redattori vivono tra Marsiglia, Aix e il Var. Alcuni sono nati qui; altri sono arrivati e non sono mai ripartiti. Ciò che condividiamo è la convinzione che il Midi premia la pazienza — che il meglio si trova all’andatura di una strada secondaria, di un lungo pranzo e di un pomeriggio che non porta in nessun luogo preciso.',
      'In fondo è una promessa semplice: mandarvi solo nei luoghi che amiamo, e dirvene la verità. Andiamo noi stessi in ciascuno, e scriviamo ciò che abbiamo visto.',
    ],
    prinLabel: 'Come lavoriamo · Notre méthode',
    prinHeading: 'Tre <em>principi</em>',
    principles: [
      {
        no: 'I',
        title: 'Scegliamo a mano',
        text: 'Nessun algoritmo compone queste pagine. Ogni indirizzo è scelto da un redattore che ci è stato — per la tavola, l’accoglienza, il modo in cui il luogo regge fuori stagione.',
      },
      {
        no: 'II',
        title: 'Andiamo di persona',
        text: 'Nulla in queste pagine è scritto da un comunicato stampa. Se descriviamo la luce su una terrazza alle sei, è perché eravamo seduti lì alle sei.',
      },
      {
        no: 'III',
        title: 'Scriviamo per durare',
        text: 'Prediligiamo i luoghi che si sono guadagnati la permanenza — la tavola di famiglia, il borgo arroccato, la tenuta che coltiva la stessa collina da quarant’anni.',
      },
    ],
    edsLabel: 'La redazione · La rédaction',
    edsHeading: 'La <em>redazione</em>',
    editors: [
      {
        img: ED1,
        alt: 'Ritratto della redattrice',
        name: 'Élise Marchand',
        role: 'Redattrice · Provence',
        text: 'Nata ad Aix, già firma del vino. Segue il Luberon, le Alpilles e tutto ciò che cresce tra le due.',
      },
      {
        img: ED2,
        alt: 'Ritratto del redattore',
        name: 'Julien Vasseur',
        role: 'Redattore · La Tavola',
        text: 'Ha cucinato da professionista per dieci anni prima di scriverne. Insegue le cucine del Midi, dalle due stelle alla baracca del porto.',
      },
      {
        img: ED3,
        alt: 'Ritratto della redattrice',
        name: 'Camille Roux',
        role: 'Redattrice · La Costa',
        text: 'Fotografa e subacquea, di base nel Var. Conosce ogni cala da Cassis all’Esterel, e quali tacere.',
      },
    ],
    contribLabel: 'Dal territorio · Du terrain',
    contribHeading: 'Collaboratrici <em>occasionali</em>',
    contribIntro:
      'Alcune persone che vivono bene un angolo del Sud scrivono per noi, di tanto in tanto — una volta, su ciò che conoscono. Non fanno parte della redazione; sono amiche della casa.',
    contributors: [
      {
        initials: 'IT',
        name: 'Iwona Trembowska',
        role: 'Collaboratrice occasionale · Costa Azzurra',
        text: 'Un’amica della redazione che vive a Cannes e conosce la Riviera dall’interno. Ci indica gli angoli della costa che altrimenti ci sfuggirebbero e scrive per noi di tanto in tanto su ciò che conosce in prima persona.',
      },
      {
        initials: 'EK',
        name: 'Emilie Keil',
        role: 'Collaboratrice occasionale · Mougins',
        text: 'Vive a Mougins da molti anni, dove gestisce la bottega orafa di quartiere <a href="https://maison-or-bijoux-mougins.com/" rel="noopener">Maison Or et Bijoux Mougins</a>. Legata ai metalli preziosi per la loro storia e il loro valore che dura, scrive per noi di mestiere, pazienza e della dolce vita del Sud che ha scelto per la sua famiglia.',
      },
    ],
    contribCta: 'Come funziona la collaborazione occasionale',
    bandLabel: 'La nostra promessa · Notre promesse',
    bandQ: 'Scriviamo soltanto dei luoghi che abbiamo pagato, dove abbiamo dormito e dove <em>torneremmo.</em>',
    bandFr:
      'Nous y allons nous-mêmes, et nous écrivons ce que nous avons vu.',
    bandSig: 'La Redazione · Marsiglia',
  },
  de: {
    title: 'Über uns — The South of France',
    description:
      'Wer wir sind: ein unabhängiges, zweisprachiges Journal des Mittelmeers. Wir schreiben nur über Orte, die wir bezahlt haben, in denen wir geschlafen haben und zu denen wir zurückkehren würden.',
    heroImg: HERO,
    heroAlt: 'Ein Hafen am Mittelmeer zur goldenen Stunde',
    crumb: 'Über uns',
    h1: 'Eine gewisse Idee vom <em>Süden</em>',
    maniLabel: 'Wer wir sind · Qui nous sommes',
    maniLede:
      'Wir sind ein unabhängiges Journal des Mittelmeers — geschrieben von Menschen, die <em>hier</em> leben, für jene, die langsam reisen.',
    maniCols: [
      'Der Süden Frankreichs ist zu Tode beschrieben worden. Er hat eine Million Postkarten verkauft, sein Licht tausend Marken geliehen und ist zum Sinnbild eines Urlaubs geworden statt eines Ortes. Wir haben dieses Journal gegründet, um darüber so zu schreiben, wie man es einem Freund beim Abendessen erzählen würde — ehrlich, mit den Namen der Menschen, die die Reise lohnenswert machen.',
      'Wir veröffentlichen <strong>vier Ausgaben im Jahr</strong>, gedruckt und online, auf Englisch und auf Französisch. Jede versammelt eine Handvoll langer Reportagen, eine Saison voller Tische und Aufenthalte und ein Adressbuch, das wir lange nach Redaktionsschluss weiter pflegen. Wir sind keine Verzeichnisseite. Wir versuchen nicht, alles abzudecken. Wir gehen selbst hin und schreiben nur über die Orte, zu denen wir zurückkehren würden.',
      'Unsere Redakteure leben zwischen Marseille, Aix und dem Var. Manche wurden hier geboren; andere kamen und blieben für immer. Was wir teilen, ist die Überzeugung, dass der Midi Geduld belohnt — dass sich das Beste im Tempo einer Nebenstraße findet, eines langen Mittagessens und eines Nachmittags, der nirgendwohin im Besonderen führt.',
      'Es ist am Ende ein einfaches Versprechen: Sie nur an Orte zu schicken, die wir lieben, und Ihnen die Wahrheit darüber zu sagen. Wir gehen zu jedem selbst hin und schreiben auf, was wir gesehen haben.',
    ],
    prinLabel: 'Wie wir arbeiten · Notre méthode',
    prinHeading: 'Drei <em>Grundsätze</em>',
    principles: [
      {
        no: 'I',
        title: 'Wir wählen von Hand',
        text: 'Kein Algorithmus stellt diese Seiten zusammen. Jede Adresse wird von einem Redakteur ausgewählt, der dort war — für den Tisch, den Empfang, dafür, wie der Ort außerhalb der Saison besteht.',
      },
      {
        no: 'II',
        title: 'Wir gehen persönlich hin',
        text: 'Nichts auf diesen Seiten ist aus einer Pressemappe geschrieben. Wenn wir das Licht auf einer Terrasse um sechs beschreiben, dann weil wir um sechs dort saßen.',
      },
      {
        no: 'III',
        title: 'Wir schreiben für die Dauer',
        text: 'Wir bevorzugen die Orte, die sich ihre Beständigkeit verdient haben — den Familientisch, das Bergdorf, das Gut, das denselben Hügel seit vierzig Jahren bewirtschaftet.',
      },
    ],
    edsLabel: 'Das Impressum · La rédaction',
    edsHeading: 'Die <em>Redaktion</em>',
    editors: [
      {
        img: ED1,
        alt: 'Porträt der Redakteurin',
        name: 'Élise Marchand',
        role: 'Redakteurin · Provence',
        text: 'In Aix geboren, einst Weinautorin. Sie deckt den Luberon, die Alpilles und alles ab, was dazwischen wächst.',
      },
      {
        img: ED2,
        alt: 'Porträt des Redakteurs',
        name: 'Julien Vasseur',
        role: 'Redakteur · Die Tafel',
        text: 'Kochte ein Jahrzehnt lang professionell, bevor er darüber zu schreiben begann. Er jagt den Küchen des Midi nach, von zwei Sternen bis zur Hafenbude.',
      },
      {
        img: ED3,
        alt: 'Porträt der Redakteurin',
        name: 'Camille Roux',
        role: 'Redakteurin · Die Küste',
        text: 'Fotografin und Taucherin, im Var ansässig. Sie kennt jede Bucht von Cassis bis zum Esterel — und welche man verschweigt.',
      },
    ],
    contribLabel: 'Aus der Region · Du terrain',
    contribHeading: 'Gelegentliche <em>Mitwirkende</em>',
    contribIntro:
      'Eine Handvoll Menschen, die einen Winkel des Südens gut leben, schreibt hin und wieder für uns — einmal, über das, was sie kennt. Sie gehören nicht zur Redaktion; sie sind Freundinnen des Hauses.',
    contributors: [
      {
        initials: 'IT',
        name: 'Iwona Trembowska',
        role: 'Gelegentliche Mitwirkende · Côte d’Azur',
        text: 'Eine Freundin der Redaktion, die in Cannes lebt und die Riviera von innen kennt. Sie weist uns auf die Ecken der Küste hin, die wir sonst übersähen, und schreibt hin und wieder für uns über das, was sie aus erster Hand kennt.',
      },
      {
        initials: 'EK',
        name: 'Emilie Keil',
        role: 'Gelegentliche Mitwirkende · Mougins',
        text: 'Lebt seit vielen Jahren in Mougins, wo sie die Goldschmiede im Viertel <a href="https://maison-or-bijoux-mougins.com/" rel="noopener">Maison Or et Bijoux Mougins</a> führt. Den Edelmetallen wegen ihrer Geschichte und ihres bleibenden Werts verbunden, schreibt sie für uns über Handwerk, Geduld und das gelassene Leben des Südens, das sie für ihre Familie gewählt hat.',
      },
    ],
    contribCta: 'Wie gelegentliche Mitarbeit funktioniert',
    bandLabel: 'Unser Versprechen · Notre promesse',
    bandQ: 'Wir schreiben nur über Orte, die wir bezahlt haben, in denen wir geschlafen haben und zu denen wir <em>zurückkehren würden.</em>',
    bandFr:
      'Nous y allons nous-mêmes, et nous écrivons ce que nous avons vu.',
    bandSig: 'Die Redaktion · Marseille',
  },
  es: {
    title: 'Quiénes somos — The South of France',
    description:
      'Quiénes somos: un diario independiente y bilingüe del Mediterráneo. Solo escribimos sobre los lugares que hemos pagado, donde hemos dormido y a los que volveríamos.',
    heroImg: HERO,
    heroAlt: 'Un puerto del Mediterráneo a la hora dorada',
    crumb: 'Quiénes somos',
    h1: 'Una cierta idea del <em>Sur</em>',
    maniLabel: 'Quiénes somos · Qui nous sommes',
    maniLede:
      'Somos un diario independiente del Mediterráneo — escrito por gente que vive <em>aquí</em>, para quienes viajan despacio.',
    maniCols: [
      'El Sur de Francia ha sido descrito hasta la saciedad. Ha vendido un millón de postales, prestado su luz a mil marcas y acabado por designar unas vacaciones más que un lugar. Fundamos este diario para hablar de él como se lo contarías a un amigo durante una cena — con honestidad, con el nombre de las personas que hacen que el viaje merezca la pena.',
      'Publicamos <strong>cuatro números al año</strong>, en papel y en línea, en inglés y en francés. Cada uno reúne un puñado de largos reportajes, una temporada de mesas y estancias, y una libreta de direcciones que seguimos actualizando mucho después del cierre del número. No somos un sitio de listados. No pretendemos cubrirlo todo. Vamos nosotros mismos al lugar, y solo escribimos sobre aquellos a los que volveríamos.',
      'Nuestros redactores viven entre Marsella, Aix y el Var. Algunos nacieron aquí; otros llegaron y nunca se marcharon. Lo que compartimos es la convicción de que el Midi recompensa la paciencia — que lo mejor se encuentra al ritmo de una carretera secundaria, de una larga comida y de una tarde que no lleva a ningún sitio en particular.',
      'Es, al fin y al cabo, una promesa sencilla: enviarte solo a lugares que amamos, y decirte la verdad sobre ellos. Vamos nosotros mismos a cada uno, y escribimos lo que hemos visto.',
    ],
    prinLabel: 'Cómo trabajamos · Notre méthode',
    prinHeading: 'Tres <em>principios</em>',
    principles: [
      {
        no: 'I',
        title: 'Elegimos a mano',
        text: 'Ningún algoritmo compone estas páginas. Cada dirección la elige un redactor que ha estado allí — por la mesa, la acogida, la forma en que el lugar aguanta fuera de temporada.',
      },
      {
        no: 'II',
        title: 'Vamos en persona',
        text: 'Nada en estas páginas se escribe a partir de un dosier de prensa. Si describimos la luz sobre una terraza a las seis, es porque estábamos sentados allí a las seis.',
      },
      {
        no: 'III',
        title: 'Escribimos para perdurar',
        text: 'Preferimos los lugares que se han ganado su permanencia — la mesa de familia, el pueblo encaramado, la finca que cultiva la misma colina desde hace cuarenta años.',
      },
    ],
    edsLabel: 'La redacción · La rédaction',
    edsHeading: 'La <em>redacción</em>',
    editors: [
      {
        img: ED1,
        alt: 'Retrato de la redactora',
        name: 'Élise Marchand',
        role: 'Redactora · Provence',
        text: 'Nacida en Aix, antigua pluma del vino. Cubre el Luberon, las Alpilles y todo lo que crece entre ambas.',
      },
      {
        img: ED2,
        alt: 'Retrato del redactor',
        name: 'Julien Vasseur',
        role: 'Redactor · La Mesa',
        text: 'Cocinó como profesional durante diez años antes de escribir sobre ello. Persigue las cocinas del Midi, de las dos estrellas a la cabaña del puerto.',
      },
      {
        img: ED3,
        alt: 'Retrato de la redactora',
        name: 'Camille Roux',
        role: 'Redactora · La Costa',
        text: 'Fotógrafa y buceadora, afincada en el Var. Conoce cada cala de Cassis al Esterel, y cuáles callar.',
      },
    ],
    contribLabel: 'Del terreno · Du terrain',
    contribHeading: 'Colaboradoras <em>ocasionales</em>',
    contribIntro:
      'Unas pocas personas que viven bien un rincón del Sur escriben para nosotros, de tanto en tanto — una vez, sobre lo que conocen. No forman parte de la redacción; son amigas de la casa.',
    contributors: [
      {
        initials: 'IT',
        name: 'Iwona Trembowska',
        role: 'Colaboradora ocasional · Costa Azul',
        text: 'Una amiga de la redacción que vive en Cannes y conoce la Riviera por dentro. Nos señala los rincones de la costa que se nos escaparían sin ella y escribe para nosotros de vez en cuando sobre lo que conoce de primera mano.',
      },
      {
        initials: 'EK',
        name: 'Emilie Keil',
        role: 'Colaboradora ocasional · Mougins',
        text: 'Vive en Mougins desde hace muchos años, donde regenta el taller de orfebrería de barrio <a href="https://maison-or-bijoux-mougins.com/" rel="noopener">Maison Or et Bijoux Mougins</a>. Apegada a los metales preciosos por su historia y su valor duradero, escribe para nosotros sobre el oficio, la paciencia y la dulce vida del Sur que eligió para su familia.',
      },
    ],
    contribCta: 'Cómo funciona la colaboración ocasional',
    bandLabel: 'Nuestra promesa · Notre promesse',
    bandQ: 'Solo escribimos sobre los lugares que hemos pagado, donde hemos dormido y a los que <em>volveríamos.</em>',
    bandFr:
      'Nous y allons nous-mêmes, et nous écrivons ce que nous avons vu.',
    bandSig: 'La Redacción · Marsella',
  },
};
