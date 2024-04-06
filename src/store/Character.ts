import { create } from 'zustand';
import { getCharacterById } from '../api/Characters';
import { Character } from '../types/Character.type';

type CharacterStore = {
    setCharacter: (id: string) => Promise<void>;
    getCharacter: () => Character;
};

const useCharacterStore = create<CharacterStore>((set) => ({
    setCharacter: async (id: string) => {
        const character = await getCharacterById(id);
        localStorage.setItem('character', JSON.stringify(character));
    },
    getCharacter: () => JSON.parse(localStorage.getItem('character') || '{}' as string)
}));

export default useCharacterStore;
