import { Box, Divider, Stack } from "@mui/joy";
import { useState } from "react";
import { updateCharacter } from "../../../api/Characters";
import CreateCharacterCard from "../../../components/CreateCharacterCard";
import AlertMessage from "../../../components/alerts/AlertMessage";
import { showAlertFunction } from "../../../helpers/show-alert";
import { Character } from "../../../types/Character.type";
import SpecialSelection from "./SpecialSelection";
import TalentsSelection from "./TalentsSelection";
import useCharacterStore from "../../../store/Character";

export default function Talents (props: { talent: Character['talent'], setTalent: (talent: Character['talent']) => void, weakness: Character['weakness'], setWeakness: (weakness: Character['weakness']) => void, special: Character['special'], setSpecial: (special: Character['special']) => void}) {
    const { talent, setTalent, weakness, setWeakness, special, setSpecial } = props;
    const [showAlert, setShowAlert] = useState(false);
    const [special1, setSpecial1] = useState(special?.[0] || {}); 
    const [special2, setSpecial2] = useState(special?.[1] || {});
    
    const save = async () => {
        const newSpecial = [special1, special2]
        setSpecial(newSpecial);
        const modifier= {talent, weakness, special: newSpecial}
        const { character } = useCharacterStore();
        const id = character._id;
        await updateCharacter(id, modifier);
        showAlertFunction(setShowAlert);
    }

    const closeAlert = () => {
        setShowAlert(false);
    }

    const content = (
        <Box sx={{ position: 'relative' }}>
            <Stack spacing={2} direction={{sm: "column", md: "row"}} justifyContent="space-around">
                <TalentsSelection title="Nom du talent" talent={talent} setTalent={setTalent} bonus="Bonus : -3" />
                <Divider orientation="vertical" sx={{ display: "flex", opacity: {sm: 0, md: 1} }} />
                <TalentsSelection title="Nom de la faiblesse" talent={weakness} setTalent={setWeakness} bonus="Malus : +2" />
            </Stack>
            <Divider orientation="horizontal" sx={{ display: "flex", opacity: {sm: 0, md: 1}, my: "20px" }} />
            <Stack spacing={2} direction={{sm: "column", md: "row"}} justifyContent="space-around">
                <SpecialSelection title="Spécialité 1" special={special} setSpecial={setSpecial} currentSpecial={special1} setCurrentSpecial={setSpecial1} />
                <Divider orientation="vertical" sx={{ display: "flex", opacity: {sm: 0, md: 1} }} />
                <SpecialSelection title="Spécialité 2" special={special} setSpecial={setSpecial} currentSpecial={special2} setCurrentSpecial={setSpecial2} />
            </Stack>
            {showAlert && <AlertMessage severity="success" message="Personnage mis à jour" onClose={closeAlert} />}
        </Box>
    )

    return (
        <CreateCharacterCard save={save} title="Talent et Faiblesse" buttonText="Enregistrer les talents" content={content} />
    );
}