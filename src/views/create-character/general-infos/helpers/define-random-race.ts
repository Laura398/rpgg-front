import { getAllRaces } from "../../../../api/Races";

export const defineRandomRace = async (): Promise<string> => {
    const allRaces = await getAllRaces();
    const randomRace = allRaces[Math.floor(Math.random() * allRaces.length)];
    return randomRace.name;
}