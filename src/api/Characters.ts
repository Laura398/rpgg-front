import axios from 'axios';
import { Character } from '../types/Character.type';

export async function getAllCharacters() {
  const characters = await axios.get<Character[]>('/characters');
  return characters.data;
}

export async function getCharacterById(id: string) {
  const character = await axios.get<Character>(`/characters/${id}`);
  return character.data;
}

export async function createRandomCharacter() {
  const character = await axios.get<Character>('/characters/random');
  return character.data;
}

export async function createCharacter(character: Character) {
  const createdCharacter = await axios.post<Character>('/characters', character);  
  return createdCharacter.data;
}

export async function updateCharacter(_id: string, character: Character) {
  const updatedCharacter = await axios.patch<Character>(`/characters/${_id}`, character);
  return updatedCharacter.data;
}