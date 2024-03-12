import { Box, Divider, Stack } from "@mui/joy";
import { useState } from "react";
import { updateCharacter } from "../../../api/Characters";
import CreateCharacterCard from "../../../components/CreateCharacterCard";
import AlertMessage from "../../../components/alerts/AlertMessage";
import Language from "./Language";

export default function Languages (props: {languages: any, setLanguages: React.Dispatch<React.SetStateAction<any>>, setLanguagesDone: React.Dispatch<React.SetStateAction<boolean>>}) {
    const { languages, setLanguages } = props;
    
    const [common, setCommon] = useState(languages?.common || {});
    const [birth, setBirth] = useState(languages?.birth || {});
    const [elf, setElf] = useState(languages?.elf || {});
    const [dwarf, setDwarf] = useState(languages?.dwarf || {});
    const [ork, setOrk] = useState(languages?.ork || {});
    const [antic, setAntic] = useState(languages?.ancient || {});
    const [daemon, setDaemon] = useState(languages?.demonic || {});
    const [rune, setRune] = useState(languages?.runic || {});
    const [showAlert, setShowAlert] = useState(false);

    const closeAlert = () => {
        setShowAlert(false);
    }

    const save = async () => {
        const newLanguages = {common, birth, elf, dwarf, ork, antic, daemon, rune};
        setLanguages(newLanguages);
        const hrefId = window.location.href.split('/')[4];
        await updateCharacter(hrefId, {languages: newLanguages});
        props.setLanguagesDone(true);
        setShowAlert(true);
    }

    const content = (
        <Box sx={{ position: 'relative' }}>
            <Stack spacing={2} direction={{sm: "column", md: "row"}} justifyContent="space-around">
                <Language title="Langue Commune" language={common} setLanguage={setCommon} />
                <Divider orientation="vertical" sx={{ display: "flex", opacity: {sm: 0, md: 1} }} />
                <Language title="Patois - Langue Natale" language={birth} setLanguage={setBirth} />
            </Stack>
            <Divider orientation="horizontal" sx={{ display: "flex", opacity: {sm: 0, md: 1}, my: "20px" }} />
            <Stack spacing={2} direction={{sm: "column", md: "row"}} justifyContent="space-around">
                <Language title="Elfique" language={elf} setLanguage={setElf} />
                <Divider orientation="vertical" sx={{ display: "flex", opacity: {sm: 0, md: 1} }} />
                <Language title="Naine" language={dwarf} setLanguage={setDwarf} />
            </Stack>
            <Divider orientation="horizontal" sx={{ display: "flex", opacity: {sm: 0, md: 1}, my: "20px" }} />
            <Stack spacing={2} direction={{sm: "column", md: "row"}} justifyContent="space-around">
                <Language title="Ork" language={ork} setLanguage={setOrk} />
                <Divider orientation="vertical" sx={{ display: "flex", opacity: {sm: 0, md: 1} }} />
                <Language title="Antique" language={antic} setLanguage={setAntic} />
            </Stack>
            <Divider orientation="horizontal" sx={{ display: "flex", opacity: {sm: 0, md: 1}, my: "20px" }} />
            <Stack spacing={2} direction={{sm: "column", md: "row"}} justifyContent="space-around">
                <Language title="Daimonique" language={daemon} setLanguage={setDaemon} />
                <Divider orientation="vertical" sx={{ display: "flex", opacity: {sm: 0, md: 1} }} />
                <Language title="Runique" language={rune} setLanguage={setRune} />
            </Stack>
            {showAlert && <AlertMessage severity="success" message="Personnage mis à jour" onClose={closeAlert} />}
        </Box>
    );

    return (
        <CreateCharacterCard save={save} title="Langues" buttonText="Enregistrer les langues" content={content} />
    );
}