import { useMemo, useState } from "react";
import { Character } from "../../types/Character.type";
import { getCharacterById } from "../../api/Characters";

export default function ShowCharacter () {
    const hrefId = window.location.href.split('/')[4];
    const [character, setCharacter] = useState({} as Character);
    
    useMemo(async () => {
        if (hrefId) {
            const character = await getCharacterById(hrefId);
            setCharacter(character);
            console.log(character);
        }
    }, []);

    return (
        <div style={{marginTop: "200px"}}>
            ShowCharacter
        </div>
    )
}