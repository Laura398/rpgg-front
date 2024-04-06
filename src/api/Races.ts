import axios from 'axios';

export async function getAllRaces() {
  const races = await axios.get<any[]>('/races');
  return races.data;
}

export async function findOneRace(selector: Record<string, any>, options: Record<string, any>) {
    const race = await axios.post<any>('/races/find-one', selector, options);  
    return race.data;
  }