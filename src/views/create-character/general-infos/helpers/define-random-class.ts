import { getAllClasses } from "../../../../api/Classes";
import { findOneRace } from "../../../../api/Races";

export const defineRandomClass = async (
  race: string | undefined
): Promise<string> => {
  const allClasses = await getAllClasses();
  if (!race)
    return allClasses[Math.floor(Math.random() * allClasses.length)].name;
  const raceData = await findOneRace({ name: race }, { fields: { magic: 1 } });
  const allowedClasses = raceData.magic
    ? allClasses
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    : allClasses.filter((c: any) => !c.magic);
  return allowedClasses[Math.floor(Math.random() * allowedClasses.length)].name;
};
