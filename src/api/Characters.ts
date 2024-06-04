import axios from "axios";
import { Character } from "../types/Character.type";

export async function getAllCharacters() {
  const characters = await axios.get<Character[]>("/characters");
  return characters.data;
}

export async function getCharacterById(id: string) {
  const character = await axios.get<Character>(`/characters/${id}`);
  return character.data;
}

export async function createRandomCharacter() {
  try {
    const character = await axios.get<Character>("/characters/random");
    return character.data;
  } catch (e: unknown) {
    alert("Vous devez vous reconnecter pour pouvoir créer un personnage.");
  }
}

export async function createCharacter(character: Character) {
  try {
    const createdCharacter = await axios.post<Character>(
      "/characters",
      character
    );
    return createdCharacter.data;
  } catch (e: unknown) {
    return alert(
      "Vous devez vous reconnecter pour pouvoir créer un personnage."
    );
  }
}

export async function updateCharacter(
  _id: string,
  character: Partial<Character>
) {
  try {
    const updatedCharacter = await axios.patch<Partial<Character>>(
      `/characters/${_id}`,
      character
    );
    return updatedCharacter.data;
  } catch (e: unknown) {
    console.log("e", e);
  }
}
