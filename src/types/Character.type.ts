import { z } from 'zod';
import { ALLIGNMENTS, ALLTYPES, ALL_SKILLS, ARTS, ATTACK_RANGE, CHARACTER_CLASSES, FAMILY_SITUATIONS, GENDERS, INTELLECTS, KNOWLEDGES, LANGUAGES_LEVELS, MAIN_STATS, OBJECTS_WEIGHT, ORIGINS, PHYSICALS, RACES, SECONDARY_STATS, SEXUALITIES, SOCIALS, SOCIAL_STATUSES, SURVIVALS, TYPES } from './Characters.constants';

export type RacesType = typeof RACES[number];
export type TypesType = typeof TYPES[number];
export type AllTypesType = typeof ALLTYPES[number];
export type ArtsType = typeof ARTS[number];
export type KnowledgesType = typeof KNOWLEDGES[number];
export type IntellectsType = typeof INTELLECTS[number];
export type PhysicalsType = typeof PHYSICALS[number];
export type SocialsType = typeof SOCIALS[number];
export type SurvivalsType = typeof SURVIVALS[number];
export type CharacterClassesType = typeof CHARACTER_CLASSES[number];
export type GendersType = typeof GENDERS[number];
export type SexualitiesType = typeof SEXUALITIES[number];
export type OriginsType = typeof ORIGINS[number];
export type SocialStatusesType = typeof SOCIAL_STATUSES[number];
export type FamilySituationsType = typeof FAMILY_SITUATIONS[number];
export type AllignmentsType = typeof ALLIGNMENTS[number];
export type MainStatsType = typeof MAIN_STATS[number];
export type SecondaryStatsType = typeof SECONDARY_STATS[number];
export type LanguagesLevelsType = typeof LANGUAGES_LEVELS[number];
export type ObjectsWeightType = typeof OBJECTS_WEIGHT[number];
export type AttackRangeType = typeof ATTACK_RANGE[number];

const Character = z.object({
    _id: z.string().optional(),
    firstname: z.string(),
    lastname: z.string().optional(),
    nickname: z.string().optional(),
    race: z.enum(RACES).optional(),
    type: z.enum(ALLTYPES).optional(),
    class: z.enum(CHARACTER_CLASSES).optional(),
    alignment: z.enum(ALLIGNMENTS).optional(),
    gender: z.enum(GENDERS).optional(),
    sexuality: z.enum(SEXUALITIES).optional(),
    height: z.number().optional(),
    weight: z.number().optional(),
    eyesColor: z.string().optional(),
    hairColor: z.string().optional(),
    origin: z.enum(ORIGINS).optional(),
    children: z.number().optional(),
    socialStatus: z.enum(SOCIAL_STATUSES).optional(),
    familySituation: z.enum(FAMILY_SITUATIONS).optional(),
    mainStats: z.object({
        hp: z.number().optional(),
        mp: z.number().optional(),
        level: z.number().optional(),
        atk: z.number().optional(),
        def: z.number().optional(),
    }).optional(),
    secondaryStats: z.object({
        phy: z.number().optional(),
        int: z.number().optional(),
        dxt: z.number().optional(),
        men: z.number().optional(),
        cha: z.number().optional(),
    }).optional(),
    talent: z.object({
        name: z.string().optional(),
        skills: z.array(z.string()).optional(),
    }).optional(),
    weakness: z.object({
        name: z.string().optional(),
        skills: z.array(z.string()).optional(),
    }).optional(),
    special: z.array(z.object({
        name: z.string().optional(),
        draw: z.enum(SECONDARY_STATS).optional(),
        stat: z.enum(ALL_SKILLS).optional(),
    })).optional(),
    skills: z.object({
        art: z.object(
            ARTS.reduce((acc: { [art: string]: z.ZodOptional<z.ZodNumber> }, art) => {
                acc[art] = z.number().optional();
                return acc;
            }, {}),
        ).optional(),
        knowledge: z.object(
            KNOWLEDGES.reduce((acc: { [knowledge: string]: z.ZodOptional<z.ZodNumber> }, knowledge) => {
                acc[knowledge] = z.number().optional();
                return acc;
            }, {}),
        ).optional(),
        intellect: z.object(
            INTELLECTS.reduce((acc: { [intellect: string]: z.ZodOptional<z.ZodNumber> }, intellect) => {
                acc[intellect] = z.number().optional();
                return acc;
            }, {}),
        ).optional(),
        physical: z.object(
            PHYSICALS.reduce((acc: { [physical: string]: z.ZodOptional<z.ZodNumber> }, physical) => {
                acc[physical] = z.number().optional();
                return acc;
            }, {}),
        ).optional(),
        social: z.object(
            SOCIALS.reduce((acc: { [social: string]: z.ZodOptional<z.ZodNumber> }, social) => {
                acc[social] = z.number().optional();
                return acc;
            }, {}),
        ).optional(),
        survival: z.object(
            SURVIVALS.reduce((acc: { [survival: string]: z.ZodOptional<z.ZodNumber> }, survival) => {
                acc[survival] = z.number().optional();
                return acc;
            }, {}),
        ).optional(),
    }).optional(),
    languages: z.object({
        common: z.object({
            writing: z.enum(LANGUAGES_LEVELS).optional(),
            reading: z.enum(LANGUAGES_LEVELS).optional(),
            speaking: z.enum(LANGUAGES_LEVELS).optional(),
            listening: z.enum(LANGUAGES_LEVELS).optional(),
        }).optional(),
        birth: z.object({
            writing: z.enum(LANGUAGES_LEVELS).optional(),
            reading: z.enum(LANGUAGES_LEVELS).optional(),
            speaking: z.enum(LANGUAGES_LEVELS).optional(),
            listening: z.enum(LANGUAGES_LEVELS).optional(),
        }).optional(),
        elf: z.object({
            writing: z.enum(LANGUAGES_LEVELS).optional(),
            reading: z.enum(LANGUAGES_LEVELS).optional(),
            speaking: z.enum(LANGUAGES_LEVELS).optional(),
            listening: z.enum(LANGUAGES_LEVELS).optional(),
        }).optional(),
        dwarf: z.object({
            writing: z.enum(LANGUAGES_LEVELS).optional(),
            reading: z.enum(LANGUAGES_LEVELS).optional(),
            speaking: z.enum(LANGUAGES_LEVELS).optional(),
            listening: z.enum(LANGUAGES_LEVELS).optional(),
        }).optional(),
        orc: z.object({
            writing: z.enum(LANGUAGES_LEVELS).optional(),
            reading: z.enum(LANGUAGES_LEVELS).optional(),
            speaking: z.enum(LANGUAGES_LEVELS).optional(),
            listening: z.enum(LANGUAGES_LEVELS).optional(),
        }).optional(),
        antic: z.object({
            writing: z.enum(LANGUAGES_LEVELS).optional(),
            reading: z.enum(LANGUAGES_LEVELS).optional(),
            speaking: z.enum(LANGUAGES_LEVELS).optional(),
            listening: z.enum(LANGUAGES_LEVELS).optional(),
        }).optional(),
        daemon: z.object({
            writing: z.enum(LANGUAGES_LEVELS).optional(),
            reading: z.enum(LANGUAGES_LEVELS).optional(),
            speaking: z.enum(LANGUAGES_LEVELS).optional(),
            listening: z.enum(LANGUAGES_LEVELS).optional(),
        }).optional(),
        rune: z.object({
            writing: z.enum(LANGUAGES_LEVELS).optional(),
            reading: z.enum(LANGUAGES_LEVELS).optional(),
            speaking: z.enum(LANGUAGES_LEVELS).optional(),
            listening: z.enum(LANGUAGES_LEVELS).optional(),
        }).optional(),
    }).optional(),
    karma: z.number().optional(),
    principles: z.object({
        humanity: z.number().optional(),
        honesty: z.number().optional(),
        honor: z.number().optional(),
        humility: z.number().optional(),
        heroism: z.number().optional(),
    }).optional(),
    reputation: z.number().optional(),
    renown: z.object({
        nobility: z.number().optional(),
        religion: z.number().optional(),
        bourgeoisie: z.number().optional(),
        common: z.number().optional(),
    }).optional(),
    money: z.object({
        gold: z.number().optional(),
        silver: z.number().optional(),
        copper: z.number().optional(),
    }).optional(),
    inventory: z.array(z.string().optional()).optional(),
    weapons: z.array(z.object({
        name: z.string().optional(),
        atk: z.number().optional(),
        weight: z.enum(OBJECTS_WEIGHT).optional(),
        type: z.enum(ATTACK_RANGE).optional(),
    })).optional(),
    armors: z.array(z.object({
        name: z.string().optional(),
        atk: z.number().optional(),
        weight: z.enum(OBJECTS_WEIGHT).optional(),
        type: z.enum(ATTACK_RANGE).optional(),
    })).optional(),
    mount: z.string().optional(),
    avatar: z.string().optional(),
    user: z.string().optional(),
});

export type Character = z.infer<typeof Character>;

export type CharacterWithoutFirstname = Omit<Character, 'firstname'>;