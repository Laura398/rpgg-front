import axios from "axios";

export async function getAllWeapons() {
  const weapons = await axios.get<unknown[]>("/weapons");
  return weapons.data;
}

export async function findWeaponsListByCharacter(characterId: string) {
  const race = await axios.post<unknown>(
    "/weapons/list-by-character",
    characterId
  );
  return race.data;
}
