import { z } from 'zod';
import { ALLTYPES, ARTS, CHARACTER_CLASSES, INTELLECTS, KNOWLEDGES, PHYSICALS, RACES, SOCIALS, SURVIVALS } from './Characters.constants';

const Character = z.object({
    firstname: z.string(),
    lastname: z.string().optional(),
    nickname: z.string().optional(),
    race: z.enum(RACES).optional(),
    type: z.enum(ALLTYPES).optional(),
    class: z.enum(CHARACTER_CLASSES).optional(),
    alignment: z.enum(["Loyal-Bon", "Neutre-Bon", "Chaotique-Bon", "Loyal-Neutre", "Vrai-Neutre", "Chaotique-Neutre", "Loyal-Mauvais", "Neutre-Mauvais", "Chaotique-Mauvais"]).optional(),
    gender: z.enum(["Homme", "Femme"]).optional(),
    sexuality: z.enum(["Hétérosexuel", "Homosexuel", "Bisexuel", "Asexuel"]).optional(),
    height: z.number().optional(),
    weight: z.number().optional(),
    eyesColor: z.string().optional(),
    hairColor: z.string().optional(),
    origin: z.enum(["Gallomains", "Géroniens", "Hybrides", "Meijison", "Monarquia", "Montagne Naine", "Orkland", "Quastèque", "Russarègue", "Stratiotis"]).optional(),
    children: z.number().optional(),
    socialStatus: z.enum(["Pauvre", "Classe Moyenne", "Riche", "Noble", "Royal"]).optional(),
    familySituation: z.enum(["Célibataire", "En couple", "Marié", "Divorcé", "Veuf"]).optional(),
    mainStats: z.object({
        hp: z.number().optional(),
        mp: z.number().optional(),
        level: z.number().optional(),
        atk: z.number().optional(),
        dev: z.number().optional(),
    }).optional(),
    secondaryStats: z.object({
        phy: z.number().optional(),
        int: z.number().optional(),
        dxt: z.number().optional(),
        men: z.number().optional(),
        cha: z.number().optional(),
    }).optional(),
    talent: z.array(z.object({
        name: z.string().optional(),
        skills: z.array(z.string()).optional(),
    })).optional(),
    weakness: z.array(z.object({
        name: z.string().optional(),
        skills: z.array(z.string()).optional(),
    })).optional(),
    special: z.array(z.object({
        name: z.string().optional(),
        talent: z.array(z.string()).optional(),
        stat: z.enum(["phy", "int", "dxt", "men", "cha"]).optional(),
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
            writing: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]).optional(),
            reading: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]).optional(),
            speaking: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]).optional(),
            listening: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]).optional(),
        }).optional(),
        birth: z.object({
            writing: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]).optional(),
            reading: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]).optional(),
            speaking: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]).optional(),
            listening: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]).optional(),
        }).optional(),
        elf: z.object({
            writing: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]).optional(),
            reading: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]).optional(),
            speaking: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]).optional(),
            listening: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]).optional(),
        }).optional(),
        dwarf: z.object({
            writing: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]).optional(),
            reading: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]).optional(),
            speaking: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]).optional(),
            listening: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]).optional(),
        }).optional(),
        orc: z.object({
            writing: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]).optional(),
            reading: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]).optional(),
            speaking: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]).optional(),
            listening: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]).optional(),
        }).optional(),
        antic: z.object({
            writing: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]).optional(),
            reading: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]).optional(),
            speaking: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]).optional(),
            listening: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]).optional(),
        }).optional(),
        daemon: z.object({
            writing: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]).optional(),
            reading: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]).optional(),
            speaking: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]).optional(),
            listening: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]).optional(),
        }).optional(),
        rune: z.object({
            writing: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]).optional(),
            reading: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]).optional(),
            speaking: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]).optional(),
            listening: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]).optional(),
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
    inventory: z.array(z.string()).optional(),
    weapons: z.array(z.object({
        name: z.string().optional(),
        atk: z.number().optional(),
        weight: z.enum(["light", "medium", "heavy"]).optional(),
        type: z.enum(["melee", "range", "magic"]).optional(),
    })).optional(),
    armors: z.array(z.object({
        name: z.string().optional(),
        atk: z.number().optional(),
        weight: z.enum(["light", "medium", "heavy"]).optional(),
        type: z.enum(["melee", "range", "magic"]).optional(),
    })).optional(),
    mount: z.string().optional(),
    user: z.string()
});

export type Character = z.infer<typeof Character>;