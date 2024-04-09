import { Box, Divider, Stack } from "@mui/joy";
import CreateCharacterCard from "../../../components/CreateCharacterCard";
import { Character } from "../../../types/Character.type";
import AlertMessage from "../../../components/alerts/AlertMessage";
import { useMemo, useState } from "react";
import StatsTable from "../../../components/StatsTable";
import { ARTS, INTELLECTS, KNOWLEDGES, PHYSICALS, SOCIALS, SURVIVALS } from "../../../types/Characters.constants";
import { updateCharacter } from "../../../api/Characters";

const artsList = ARTS.map(art => ({ name: art, field: art }));
const knowledgesList = KNOWLEDGES.map(knowledge => ({ name: knowledge, field: knowledge }));
const intellectsList = INTELLECTS.map(intellect => ({ name: intellect, field: intellect }));
const physicalsList = PHYSICALS.map(physical => ({ name: physical, field: physical }));
const socialsList = SOCIALS.map(social => ({ name: social, field: social }));
const survivalsList = SURVIVALS.map(survival => ({ name: survival, field: survival }));

export default function Skills (props: {skills: Character['skills'], setSkills: React.Dispatch<React.SetStateAction<Character['skills']>>}) {
    const { skills, setSkills } = props;
    
    const [showAlert, setShowAlert] = useState(false);
    const [arts, setArts] = useState(skills?.art || {});
    const [knowledges, setKnowledges] = useState(skills?.knowledge || {});
    const [intellects, setIntellects] = useState(skills?.intellect || {});
    const [physicals, setPhysicals] = useState(skills?.physical || {});
    const [socials, setSocials] = useState(skills?.social || {});
    const [survivals, setSurvivals] = useState(skills?.survival || {});

    useMemo(() => {
        setArts(skills?.art || {});
        setKnowledges(skills?.knowledge || {});
        setIntellects(skills?.intellect || {});
        setPhysicals(skills?.physical || {});
        setSocials(skills?.social || {});
        setSurvivals(skills?.survival || {});
    }, [skills]);

    const closeAlert = () => {
        setShowAlert(false);
    }

    const save = async () => {
        const newSkills = {art: arts, knowledge: knowledges, intellect: intellects, physical: physicals, social: socials, survival: survivals};
        setSkills(newSkills);
        const hrefId = window.location.href.split('/')[4];
        await updateCharacter(hrefId, {skills: newSkills});
        setShowAlert(true);
    }

    const randomAll = () => {
        setArts({...arts, ...ARTS.reduce((acc, art) => ({...acc, [art]: Math.floor(Math.random() * 20)}), {})});
        setKnowledges({...knowledges, ...KNOWLEDGES.reduce((acc, knowledge) => ({...acc, [knowledge]: Math.floor(Math.random() * 20)}), {})});
        setIntellects({...intellects, ...INTELLECTS.reduce((acc, intellect) => ({...acc, [intellect]: Math.floor(Math.random() * 20)}), {})});
        setPhysicals({...physicals, ...PHYSICALS.reduce((acc, physical) => ({...acc, [physical]: Math.floor(Math.random() * 20)}), {})});
        setSocials({...socials, ...SOCIALS.reduce((acc, social) => ({...acc, [social]: Math.floor(Math.random() * 20)}), {})});
        setSurvivals({...survivals, ...SURVIVALS.reduce((acc, survival) => ({...acc, [survival]: Math.floor(Math.random() * 20)}), {})});
    }
    
    const content = (
        <Box sx={{ position: 'relative' }}>
            <Stack spacing={2} direction={{xs: "column", md: "row"}} justifyContent="space-around">
                <StatsTable title="Arts et Métiers" statsList={artsList} stats={arts} setStats={setArts} />
                <Divider orientation="vertical" sx={{ display: {xs: "none", md: "flex"}, opacity: {xs: 0, md: 1} }} />
                <StatsTable title="Connaissances" statsList={knowledgesList} stats={knowledges} setStats={setKnowledges} />
            </Stack>
            <Divider orientation="horizontal" sx={{ display: "flex", opacity: {xs: 0, md: 1}, my: "20px" }} />
            <Stack spacing={2} direction={{xs: "column", md: "row"}} justifyContent="space-around">
                <StatsTable title="Facultés Intellectuelles" statsList={intellectsList} stats={intellects} setStats={setIntellects} />
                <Divider orientation="vertical" sx={{ display: "flex", opacity: {xs: 0, md: 1} }} />
                <StatsTable title="Habiletés Physiques" statsList={physicalsList} stats={physicals} setStats={setPhysicals} />
            </Stack>
            <Divider orientation="horizontal" sx={{ display: "flex", opacity: {xs: 0, md: 1}, my: "20px" }} />
            <Stack spacing={2} direction={{xs: "column", md: "row"}} justifyContent="space-around">
                <StatsTable title="Social" statsList={socialsList} stats={socials} setStats={setSocials} />
                <Divider orientation="vertical" sx={{ display: "flex", opacity: {xs: 0, md: 1} }} />
                <StatsTable title="Survie" statsList={survivalsList} stats={survivals} setStats={setSurvivals} />
            </Stack>
            {showAlert && <AlertMessage severity="success" message="Personnage mis à jour" onClose={closeAlert} />}
        </Box>
    );

    return (
        <CreateCharacterCard save={save} title="Compétences" buttonText="Enregistrer les compétences" content={content} randomAll={randomAll} />
    )
}