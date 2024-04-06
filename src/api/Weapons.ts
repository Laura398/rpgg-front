import axios from 'axios';

export async function getAllWeapons() {
  const weapons = await axios.get<any[]>('/weapons');
  return weapons.data;
}

export async function findWeaponsListByCharacter(characterId: string) {
    const race = await axios.post<any>('/weapons/list-by-character', characterId);  
    return race.data;
  }