import { ANIMALS } from "./Character.animals.constant";

export const RACES = [
  "Humain",
  "Elfe",
  "Nain",
  "Ork",
  "Homme-Animal",
  "Homme possédé",
  "Lutin",
  "Demi-Divinité",
] as const;
export const RACES_NEED_TYPE = [
  "Lutin",
  "Homme-Animal",
  "Homme possédé",
  "Demi-Divinité",
] as const;
export const TYPES = [
  "Gnome du jour",
  "Gnome de la nuit",
  "Fée de l'été",
  "Fée de l'hiver",
  "Fée du printemps",
  "Fée de l'automne",
  "Demi-Ange",
  "Demi-Démon",
] as const;
export const TYPES_FOR_LUTINS = [
  "Gnome du jour",
  "Gnome de la nuit",
  "Fée de l'été",
  "Fée de l'hiver",
  "Fée du printemps",
  "Fée de l'automne",
] as const;
export const TYPES_FOR_LUTINS_MALES = [
  "Gnome du jour",
  "Gnome de la nuit",
] as const;
export const TYPES_FOR_LUTINS_FEMALES = [
  "Fée de l'été",
  "Fée de l'hiver",
  "Fée du printemps",
  "Fée de l'automne",
] as const;
export const TYPES_FOR_HALFLINGS = ["Demi-Ange", "Demi-Démon"] as const;
export const ALLTYPES = [...TYPES, ...ANIMALS] as const;
export const STATS = [
  "Arts",
  "Connaissances",
  "Intellects",
  "Physiques",
  "Sociaux",
  "Survie",
] as const;
export const ARTS = [
  "Agriculture et Elevage",
  "Art de la scène",
  "Arts martiaux",
  "Chant et Danse",
  "Couture et Tannerie",
  "Crochetage",
  "Cuisine et Dépeçage",
  "Ebenisterie",
  "Métallurgie",
  "Mixologie",
  "Musique",
  "Navigation",
  "Orfèvrerie",
  "Pratique des nœuds",
  "Sculpture",
] as const;
export const KNOWLEDGES = [
  "Alchimie",
  "Anatomie",
  "Astrologie et Astronomie",
  "Biologie",
  "Botanique et Herbologie",
  "Culture ésotérique",
  "Culture générale",
  "Chimie",
  "Géologie",
  "Histoire et Géographie",
  "Littérature et Poésie",
  "Mathématiques",
  "Mécanique",
  "Moeurs et Traditions",
  "Physique",
  "Religion",
] as const;
export const INTELLECTS = [
  "Analyse critique",
  "Concentration",
  "Conscience",
  "Deduction et Raisonnement",
  "Détermination",
  "Empathie",
  "Gestion du stress",
  "Imagination",
  "Improvisation",
  "Lecture et Ecriture",
  "Maîtrise de ses émotions",
  "Mémoire",
  "Philosophie",
  "Rethorique et Répartie",
  "Résiliance",
  "Tempérament",
] as const;
export const PHYSICALS = [
  "Acrobatie",
  "Archerie",
  "Coordination",
  "Corps à corps",
  "Démonstration",
  "Destruction",
  "Endurance",
  "Eqiilibre",
  "Escalade",
  "Esquive",
  "Intrusion",
  "Natation",
  "Projection",
  "Respiration",
  "Souplesse",
] as const;
export const SOCIALS = [
  "Commandement",
  "Communication",
  "Convaincre",
  "Démagogie",
  "Diplomatie",
  "Dissuasion",
  "Education",
  "Eloquence",
  "Encouragement",
  "Estimation",
  "Humour",
  "Intimidation",
  "Négociation",
  "Pédagogie",
  "Provocation",
  "Séduction",
] as const;
export const SURVIVALS = [
  "Analyse de l'environnement",
  "Camouflage",
  "Campement",
  "Cartographie",
  "Chasse et Pêche",
  "Conservation des vivres",
  "Cryptozoologie",
  "Discrétion et Furtivité",
  "Dressage",
  "Drogues et Poisons",
  "Equitation",
  "Orientation",
  "Pistage",
  "Pose de pièges",
  "Vigilance",
  "Zoologie",
] as const;
export const ALL_SKILLS = [
  ...ARTS,
  ...KNOWLEDGES,
  ...INTELLECTS,
  ...PHYSICALS,
  ...SOCIALS,
  ...SURVIVALS,
] as const;
export const CHARACTER_CLASSES = [
  "Assassin-Voleur",
  "Aventurier",
  "Barbare",
  "Berserker",
  "Cavalier",
  "Chasseur",
  "Druide",
  "Guerrier",
  "Mage",
  "Mercenaire",
  "Moine",
  "Paladin",
  "Prêtre",
  "Sorcier",
] as const;
export const MAGIC_CLASSES = ["Druide", "Mage", "Moine", "Prêtre", "Sorcier"];
export const NON_MAGIC_CLASSES = [
  "Barbare",
  "Bersherker",
  "Guerrier",
  "Mercenaire",
  "Paladin",
];
export const POLYVALENT_CLASSES = [
  "Assassin-Voleur",
  "Aventurier",
  "Cavalier",
  "Chasseur",
];
export const GENDERS = ["Homme", "Femme"] as const;
export const SEXUALITIES = [
  "Hétérosexuel",
  "Homosexuel",
  "Bisexuel",
  "Asexuel",
] as const;
export const ORIGINS = [
  "Gallomains",
  "Géroniens",
  "Hybrides",
  "Meijison",
  "Monarquia",
  "Montagne Naine",
  "Orkland",
  "Quastèque",
  "Russarègue",
  "Stratiotis",
] as const;
export const SOCIAL_STATUSES = [
  "Pauvre",
  "Classe Moyenne",
  "Riche",
  "Noble",
  "Royal",
] as const;
export const FAMILY_SITUATIONS = [
  "Célibataire",
  "En couple",
  "Marié",
  "Divorcé",
  "Veuf",
] as const;
export const ALLIGNMENTS = [
  "Loyal Bon",
  "Neutre Bon",
  "Chaotique Bon",
  "Loyal Neutre",
  "Neutre",
  "Chaotique Neutre",
  "Loyal Mauvais",
  "Neutre Mauvais",
  "Chaotique Mauvais",
] as const;
export const MAIN_STATS = ["hp", "mp", "level", "atk", "def"] as const;
export const LANGUAGES_LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"] as const;
export const OBJECTS_WEIGHT = ["Léger", "Moyen", "Lourd"] as const;
export const ATTACK_RANGE = ["Mélée", "Distance", "Magique"] as const;

export const SECONDARY_STATS = [
  {
    name: "phy",
    label: "Condition Physique",
  },
  {
    name: "int",
    label: "Faculté Intellectuelle",
  },
  {
    name: "dxt",
    label: "Dextérité",
  },
  {
    name: "men",
    label: "Force Mentale",
  },
  {
    name: "cha",
    label: "Charisme",
  },
];

export const LANGUAGES_TYPES = [
  { name: "Expression Ecrite", value: "writing" },
  { name: "Compréhension Ecrite", value: "reading" },
  { name: "Expression Orale", value: "speaking" },
  { name: "Compréhension Orale", value: "listening" },
] as const;

export const SKILLS_NAMES = [
  {
    name: "art",
    label: "Arts et Métiers",
  },
  {
    name: "knowledge",
    label: "Connaissances",
  },
  {
    name: "intellect",
    label: "Faculté Intellectuelle",
  },
  {
    name: "physical",
    label: "Habileté Physique",
  },
  {
    name: "social",
    label: "Social",
  },
  {
    name: "survival",
    label: "Survie",
  },
];

export const SKILLS_GROUPS = [
  {
    name: "Agriculture et Elevage",
    group: "Arts",
  },
  {
    name: "Art de la scène",
    group: "Arts",
  },
  {
    name: "Arts martiaux",
    group: "Arts",
  },
  {
    name: "Chant et Danse",
    group: "Arts",
  },
  {
    name: "Couture et Tannerie",
    group: "Arts",
  },
  {
    name: "Crochetage",
    group: "Arts",
  },
  {
    name: "Cuisine et Dépeçage",
    group: "Arts",
  },
  {
    name: "Ebenisterie",
    group: "Arts",
  },
  {
    name: "Métallurgie",
    group: "Arts",
  },
  {
    name: "Mixologie",
    group: "Arts",
  },
  {
    name: "Musique",
    group: "Arts",
  },
  {
    name: "Navigation",
    group: "Arts",
  },
  {
    name: "Orfèvrerie",
    group: "Arts",
  },
  {
    name: "Pratique des nœuds",
    group: "Arts",
  },
  {
    name: "Sculpture",
    group: "Arts",
  },
  {
    name: "Alchimie",
    group: "Connaissances",
  },
  {
    name: "Anatomie",
    group: "Connaissances",
  },
  {
    name: "Astrologie et Astronomie",
    group: "Connaissances",
  },
  {
    name: "Biologie",
    group: "Connaissances",
  },
  {
    name: "Botanique et Herbologie",
    group: "Connaissances",
  },
  {
    name: "Culture ésotérique",
    group: "Connaissances",
  },
  {
    name: "Culture générale",
    group: "Connaissances",
  },
  {
    name: "Chimie",
    group: "Connaissances",
  },
  {
    name: "Géologie",
    group: "Connaissances",
  },
  {
    name: "Histoire et Géographie",
    group: "Connaissances",
  },
  {
    name: "Littérature et Poésie",
    group: "Connaissances",
  },
  {
    name: "Mathématiques",
    group: "Connaissances",
  },
  {
    name: "Mécanique",
    group: "Connaissances",
  },
  {
    name: "Moeurs et Traditions",
    group: "Connaissances",
  },
  {
    name: "Physique",
    group: "Connaissances",
  },
  {
    name: "Religion",
    group: "Connaissances",
  },
  {
    name: "Analyse critique",
    group: "Intellects",
  },
  {
    name: "Concentration",
    group: "Intellects",
  },
  {
    name: "Conscience",
    group: "Intellects",
  },
  {
    name: "Deduction et Raisonnement",
    group: "Intellects",
  },
  {
    name: "Détermination",
    group: "Intellects",
  },
  {
    name: "Empathie",
    group: "Intellects",
  },
  {
    name: "Gestion du stress",
    group: "Intellects",
  },
  {
    name: "Imagination",
    group: "Intellects",
  },
  {
    name: "Improvisation",
    group: "Intellects",
  },
  {
    name: "Lecture et Ecriture",
    group: "Intellects",
  },
  {
    name: "Maîtrise de ses émotions",
    group: "Intellects",
  },
  {
    name: "Mémoire",
    group: "Intellects",
  },
  {
    name: "Philosophie",
    group: "Intellects",
  },
  {
    name: "Rethorique et Répartie",
    group: "Intellects",
  },
  {
    name: "Résiliance",
    group: "Intellects",
  },
  {
    name: "Tempérament",
    group: "Intellects",
  },
  {
    name: "Acrobatie",
    group: "Physiques",
  },
  {
    name: "Archerie",
    group: "Physiques",
  },
  {
    name: "Coordination",
    group: "Physiques",
  },
  {
    name: "Corps à corps",
    group: "Physiques",
  },
  {
    name: "Démonstration",
    group: "Physiques",
  },
  {
    name: "Destruction",
    group: "Physiques",
  },
  {
    name: "Endurance",
    group: "Physiques",
  },
  {
    name: "Eqiilibre",
    group: "Physiques",
  },
  {
    name: "Escalade",
    group: "Physiques",
  },
  {
    name: "Esquive",
    group: "Physiques",
  },
  {
    name: "Intrusion",
    group: "Physiques",
  },
  {
    name: "Natation",
    group: "Physiques",
  },
  {
    name: "Projection",
    group: "Physiques",
  },
  {
    name: "Respiration",
    group: "Physiques",
  },
  {
    name: "Souplesse",
    group: "Physiques",
  },
  {
    name: "Commandement",
    group: "Sociaux",
  },
  {
    name: "Communication",
    group: "Sociaux",
  },
  {
    name: "Convaincre",
    group: "Sociaux",
  },
  {
    name: "Démagogie",
    group: "Sociaux",
  },
  {
    name: "Diplomatie",
    group: "Sociaux",
  },
  {
    name: "Dissuasion",
    group: "Sociaux",
  },
  {
    name: "Education",
    group: "Sociaux",
  },
  {
    name: "Eloquence",
    group: "Sociaux",
  },
  {
    name: "Encouragement",
    group: "Sociaux",
  },
  {
    name: "Estimation",
    group: "Sociaux",
  },
  {
    name: "Humour",
    group: "Sociaux",
  },
  {
    name: "Intimidation",
    group: "Sociaux",
  },
  {
    name: "Négociation",
    group: "Sociaux",
  },
  {
    name: "Pédagogie",
    group: "Sociaux",
  },
  {
    name: "Provocation",
    group: "Sociaux",
  },
  {
    name: "Séduction",
    group: "Sociaux",
  },
  {
    name: "Analyse de l'environnement",
    group: "Survie",
  },
  {
    name: "Camouflage",
    group: "Survie",
  },
  {
    name: "Campement",
    group: "Survie",
  },
  {
    name: "Cartographie",
    group: "Survie",
  },
  {
    name: "Chasse et Pêche",
    group: "Survie",
  },
  {
    name: "Conservation des vivres",
    group: "Survie",
  },
  {
    name: "Cryptozoologie",
    group: "Survie",
  },
  {
    name: "Discrétion et Furtivité",
    group: "Survie",
  },
  {
    name: "Dressage",
    group: "Survie",
  },
  {
    name: "Drogues et Poisons",
    group: "Survie",
  },
  {
    name: "Equitation",
    group: "Survie",
  },
  {
    name: "Orientation",
    group: "Survie",
  },
  {
    name: "Pistage",
    group: "Survie",
  },
  {
    name: "Pose de pièges",
    group: "Survie",
  },
  {
    name: "Vigilance",
    group: "Survie",
  },
  {
    name: "Zoologie",
    group: "Survie",
  },
];
