import { Box, Sheet, Stack, Typography } from "@mui/joy";
import { useState } from "react";
import CreateCharacterCard from "../../../components/CreateCharacterCard";
import SliderComponent from "../../../components/Slider";
import AlertMessage from "../../../components/alerts/AlertMessage";
import { updateCharacter } from "../../../api/Characters";

export default function Personality (props: {personality: any, setPersonality: React.Dispatch<React.SetStateAction<any>>}) {
    const { personality, setPersonality } = props;
    const [showAlert, setShowAlert] = useState(false);
    const [principles, setPrinciples] = useState(personality?.principles || 0);
    const [renown , setRenown] = useState(personality?.renown || 0);

    const closeAlert = () => {
        setShowAlert(false);
    }

    const save = async () => {
        setPersonality({...personality, principles, renown});        
        const hrefId = window.location.href.split('/')[4];
        await updateCharacter(hrefId, { karma: personality.karma, reputation: personality.reputation, principles, renown });
        setShowAlert(true);
    }

    const content = (
        <Box sx={{ position: 'relative' }}>
            <Stack spacing={2} direction="column" justifyContent="space-around">
                <Sheet variant="soft" sx={{ width: "100%", p: 2, borderRadius: 'sm' }}>
                    <Typography fontSize="medium" fontWeight="xl" id="ios-example-demo" mb={1} mt="40px">Karma Divin</Typography>
                    <SliderComponent personality={personality} setPersonality={setPersonality} field="karma" marks={true} min={-10} max={10} step={1} start="Enfers" end="Paradis" />
                    
                    <Typography fontSize="medium" fontWeight="xl" id="ios-example-demo" mb={1} mt="40px" sx={{borderTop: "2px solid white", paddingTop: "20px"}}>Points de Principe</Typography>
                    <SliderComponent personality={principles} setPersonality={setPrinciples} field="humanity" marks={true} min={-10} max={10} step={1} start="Bestialité" end="Humanité" />
                    <SliderComponent personality={principles} setPersonality={setPrinciples} field="honesty" marks={true} min={-10} max={10} step={1} start="Fourberie" end="Honnêteté" />
                    <SliderComponent personality={principles} setPersonality={setPrinciples} field="honor" marks={true} min={-10} max={10} step={1} start="Ignominie" end="Honneur" />
                    <SliderComponent personality={principles} setPersonality={setPrinciples} field="humility" marks={true} min={-10} max={10} step={1} start="Orgueil" end="Humilité" />
                    <SliderComponent personality={principles} setPersonality={setPrinciples} field="heroism" marks={true} min={-10} max={10} step={1} start="Lâcheté" end="Héroïsme" />
                    
                    <Typography fontSize="medium" fontWeight="xl" id="ios-example-demo" mb={1} mt="40px" sx={{borderTop: "2px solid white", paddingTop: "20px"}}>Réputation</Typography>
                    <SliderComponent personality={personality} setPersonality={setPersonality} field="reputation" marks={false} min={0} max={20} step={1} start="Inconnu" end="Mythique" />
                    
                    <Typography fontSize="medium" fontWeight="xl" id="ios-example-demo" mb={1} mt="40px" sx={{borderTop: "2px solid white", paddingTop: "20px"}}>Renommée auprès des différentes classes sociales</Typography>
                    <Typography fontSize="small" fontWeight="xl" id="ios-example-demo" mt="40px">Noblesse - Aristocratie</Typography>
                    <SliderComponent personality={renown} setPersonality={setRenown} field="nobility" marks={true} min={-10} max={10} step={1} />
                    <Typography fontSize="small" fontWeight="xl" id="ios-example-demo" mt="40px">Clergé</Typography>
                    <SliderComponent personality={renown} setPersonality={setRenown} field="religion" marks={true} min={-10} max={10} step={1} />
                    <Typography fontSize="small" fontWeight="xl" id="ios-example-demo" mt="40px">Bourgeoisie</Typography>
                    <SliderComponent personality={renown} setPersonality={setRenown} field="bourgeoisie" marks={true} min={-10} max={10} step={1} />
                    <Typography fontSize="small" fontWeight="xl" id="ios-example-demo" mt="40px">Tiers-Etat : Paysants, Artisants, Commerçants, etc...</Typography>
                    <SliderComponent personality={renown} setPersonality={setRenown} field="common" marks={true} min={-10} max={10} step={1} />
                    
                </Sheet>
            </Stack>
            {showAlert && <AlertMessage severity="success" message="Personnage mis à jour" onClose={closeAlert} />}
        </Box>
    );

    return (
        <CreateCharacterCard save={save} title="Personnalité" buttonText="Enregistrer la personnalité" content={content} />
    );
}