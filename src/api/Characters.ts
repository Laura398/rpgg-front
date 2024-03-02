import axios from 'axios';
import { Character } from '../types/Character.type';

export async function getAll() {
  const characters = await axios.get<Character[]>('/characters');
  return characters.data;
}

export async function getById(id: string) {
  const character = await axios.get<Character>(`/characters/${id}`);
  return character.data;
}

export async function createRandomCharacter() {
  const character = await axios.get<Character>('/characters/random');
  console.log(character);
  return character.data;
}