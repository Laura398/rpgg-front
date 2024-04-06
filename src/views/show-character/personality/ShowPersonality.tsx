import { Sheet, Stack, Typography } from "@mui/joy";
import { Character } from "../../../types/Character.type";
import SliderComponent from "../../../components/Slider";

export default function ShowPersonality(props: {character: Character}) {
    const { character } = props;
    return (
        <Stack spacing={2} direction="column" justifyContent="space-around" mt="20px">
                <Sheet variant="soft" sx={{ width: "100%", p: 2, borderRadius: 'sm' }}>
                    <Typography fontSize="medium" fontWeight="xl" id="ios-example-demo" mb={1} mt="40px">Karma Divin</Typography>
                    <SliderComponent personality={character} field="karma" marks={true} min={-10} max={10} step={1} start="Enfers" end="Paradis" />
                    
                    <Typography fontSize="medium" fontWeight="xl" id="ios-example-demo" mb={1} mt="40px" sx={{borderTop: "2px solid white", paddingTop: "20px"}}>Points de Principe</Typography>
                    <SliderComponent personality={character.principles} field="humanity" marks={true} min={-10} max={10} step={1} start="Bestialité" end="Humanité" />
                    <SliderComponent personality={character.principles} field="honesty" marks={true} min={-10} max={10} step={1} start="Fourberie" end="Honnêteté" />
                    <SliderComponent personality={character.principles} field="honor" marks={true} min={-10} max={10} step={1} start="Ignominie" end="Honneur" />
                    <SliderComponent personality={character.principles} field="humility" marks={true} min={-10} max={10} step={1} start="Orgueil" end="Humilité" />
                    <SliderComponent personality={character.principles} field="heroism" marks={true} min={-10} max={10} step={1} start="Lâcheté" end="Héroïsme" />
                    
                    <Typography fontSize="medium" fontWeight="xl" id="ios-example-demo" mb={1} mt="40px" sx={{borderTop: "2px solid white", paddingTop: "20px"}}>Réputation</Typography>
                    <SliderComponent personality={character} field="reputation" marks={false} min={0} max={20} step={1} start="Inconnu" end="Mythique" />
                    
                    <Typography fontSize="medium" fontWeight="xl" id="ios-example-demo" mb={1} mt="40px" sx={{borderTop: "2px solid white", paddingTop: "20px"}}>Renommée auprès des différentes classes sociales</Typography>
                    <Typography fontSize="small" fontWeight="xl" id="ios-example-demo" mt="40px">Noblesse - Aristocratie</Typography>
                    <SliderComponent personality={character.renown} field="nobility" marks={true} min={-10} max={10} step={1} />
                    <Typography fontSize="small" fontWeight="xl" id="ios-example-demo" mt="40px">Clergé</Typography>
                    <SliderComponent personality={character.renown} field="religion" marks={true} min={-10} max={10} step={1} />
                    <Typography fontSize="small" fontWeight="xl" id="ios-example-demo" mt="40px">Bourgeoisie</Typography>
                    <SliderComponent personality={character.renown} field="bourgeoisie" marks={true} min={-10} max={10} step={1} />
                    <Typography fontSize="small" fontWeight="xl" id="ios-example-demo" mt="40px">Tiers-Etat : Paysants, Artisants, Commerçants, etc...</Typography>
                    <SliderComponent personality={character.renown} field="common" marks={true} min={-10} max={10} step={1} />
                    
                </Sheet>
            </Stack>
    )
}