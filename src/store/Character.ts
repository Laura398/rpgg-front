import { create } from 'zustand';
import { getCharacterById } from '../api/Characters';
import { Character } from '../types/Character.type';

type CharacterStore = {
    character: Character;
    setCharacter: (id: string) => Promise<void>;
};

const useCharacterStore = create<CharacterStore>(() => ({
    character: JSON.parse(localStorage.getItem('character') || '{}' as string),
    setCharacter: async (id: string) => {
        const character = await getCharacterById(id);
        
        localStorage.setItem('character', JSON.stringify(character));
    },
}));

export default useCharacterStore;
