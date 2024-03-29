import { ANIMALS } from "./Character.animals.constant";

export const RACES = ["Humain", "Elfe", "Nain", "Ork", "Homme-Animal", "Homme possédé", "Lutin", "Demi-Divinité"] as const;
export const RACES_NEED_TYPE = ["Lutin", "Homme-Animal", "Homme possédé", "Demi-Divinité"] as const;
export const TYPES = ["Gnome du jour", "Gnome de la nuit", "Fée de l'été", "Fée de l'hiver", "Fée du printemps", "Fée de l'automne", "Demi-Ange", "Demi-Démon"] as const;
export const TYPES_FOR_LUTINS = ["Gnome du jour", "Gnome de la nuit", "Fée de l'été", "Fée de l'hiver", "Fée du printemps", "Fée de l'automne"] as const;
export const TYPES_FOR_LUTINS_MALES = ["Gnome du jour", "Gnome de la nuit"] as const;
export const TYPES_FOR_LUTINS_FEMALES = ["Fée de l'été", "Fée de l'hiver", "Fée du printemps", "Fée de l'automne"] as const;
export const TYPES_FOR_HALFLINGS = ["Demi-Ange", "Demi-Démon"] as const;
export const ALLTYPES = [...TYPES, ...ANIMALS] as const;
export const STATS = ["Arts", "Connaissances", "Intellects", "Physiques", "Sociaux", "Survie"] as const;
export const ARTS = ["Agriculture et Elevage", "Art de la scène", "Arts martiaux", "Chant et Danse", "Couture et Tannerie", "Crochetage", "Cuisine et Dépeçage", "Ebenisterie", "Métallurgie", "Mixologie", "Musique", "Navigation", "Orfèvrerie", "Pratique des nœuds", "Sculpture"] as const;
export const KNOWLEDGES = ["Alchimie", "Anatomie", "Astrologie et Astronomie", "Biologie", "Botanique et Herbologie", "Culture ésotérique", "Culture générale", "Chimie", "Géologie", "Histoire et Géographie", "Littérature et Poésie", "Mathématiques", "Mécanique", "Moeurs et Traditions", "Physique", "Religion"] as const;
export const INTELLECTS = ["Analyse critique", "Concentration", "Conscience", "Deduction et Raisonnement", "Détermination", "Empathie", "Gestion du stress", "Imagination", "Improvisation", "Lecture et Ecriture", "Maîtrise de ses émotions", "Mémoire", "Philosophie", "Rethorique et Répartie", "Résiliance", "Tempérament"] as const;
export const PHYSICALS = ["Acrobatie", "Archerie", "Coordination", "Corps à corps", "Démonstration", "Destruction", "Endurance", "Eqiilibre", "Escalade", "Esquive", "Intrusion", "Natation", "Projection", "Respiration", "Souplesse"] as const;
export const SOCIALS = ["Commandement", "Communication", "Convaincre", "Démagogie", "Diplomatie", "Dissuasion", "Education", "Eloquence", "Encouragement", "Estimation", "Humour", "Intimidation", "Négociation", "Pédagogie", "Provocation", "Séduction"] as const;
export const SURVIVALS = ["Analyse de l'environnement", "Camouflage", "Campement", "Cartographie", "Chasse et Pêche", "Conservation des vivres", "Cryptozoologie", "Discrétion et Furtivité", "Dressage", "Drogues et Poisons", "Equitation", "Orientation", "Pistage", "Pose de pièges", "Vigilance", "Zoologie"] as const; 
export const ALL_SKILLS = [...ARTS, ...KNOWLEDGES, ...INTELLECTS, ...PHYSICALS, ...SOCIALS, ...SURVIVALS] as const;
export const CHARACTER_CLASSES = ["Assassin-Voleur", "Aventurier", "Barbare", "Berserker", "Cavalier", "Chasseur", "Druide", "Guerrier", "Mage", "Mercenaire", "Moine", "Paladin", "Prêtre", "Sorcier"] as const;
export const MAGIC_CLASSES = ["Druide", "Mage", "Moine", "Prêtre", "Sorcier"];
export const NON_MAGIC_CLASSES = ["Barbare", "Bersherker", "Guerrier", "Mercenaire", "Paladin"];
export const POLYVALENT_CLASSES = ["Assassin-Voleur", "Aventurier", "Cavalier", "Chasseur"];
export const GENDERS = ["Homme", "Femme"] as const;
export const SEXUALITIES = ["Hétérosexuel", "Homosexuel", "Bisexuel", "Asexuel"] as const;
export const ORIGINS = ["Gallomains", "Géroniens", "Hybrides", "Meijison", "Monarquia", "Montagne Naine", "Orkland", "Quastèque", "Russarègue", "Stratiotis"] as const;
export const SOCIAL_STATUSES = ["Pauvre", "Classe Moyenne", "Riche", "Noble", "Royal"] as const;
export const FAMILY_SITUATIONS = ["Célibataire", "En couple", "Marié", "Divorcé", "Veuf"] as const;
export const ALLIGNMENTS = ["Loyal Bon", "Neutre Bon", "Chaotique Bon", "Loyal Neutre", "Neutre", "Chaotique Neutre", "Loyal Mauvais", "Neutre Mauvais", "Chaotique Mauvais"] as const;
export const MAIN_STATS = ["hp", "mp", "level", "atk", "def"] as const;
export const SECONDARY_STATS = ["phy", "int", "dxt", "men", "cha"] as const;
export const LANGUAGES_LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"] as const;
export const OBJECTS_WEIGHT = ["Léger", "Moyen", "Lourd"] as const;
export const ATTACK_RANGE = ["Mélée", "Distance", "Magique"] as const;


export const LANGUAGES_TYPES = [
    {name: "Expression Ecrite", value: "writing"},
    {name: "Compréhension Ecrite", value: "reading"},
    {name: "Expression Orale", value: "speaking"},
    {name: "Compréhension Orale", value: "listening"}
] as const;
