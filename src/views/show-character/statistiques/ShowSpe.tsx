import { Card, Typography } from "@mui/joy";
import { SECONDARY_STATS } from "../../../types/Characters.constants";
import { Character } from "../../../types/Character.type";

export default function ShowSpe(props: {character: Character}) {
    const character = props.character;    
    return (
        <Card variant="plain" color="neutral" sx={{ textAlign: "center", margin: "0 auto", flex: 1, width: "100%", display: "flex", flexDirection: { sm: "column", md: "row" }, justifyContent: "space-between" }}>
            {character?.special?.length && character?.special?.length > 0 ? character.special.map((spe: any, index: number) => {
                const statsGroup = SECONDARY_STATS.find((stat) => stat.name === spe.draw);                
                return (
                    <Card key={index} variant="soft" color="neutral" sx={{ textAlign: "center", margin: "10px auto", flex: 1, width: "100%", display: "flex", flexDirection: { sm: "column", md: "row" }, justifyContent: "space-around" }}>
                        <div>
                            <h3>{spe.name}</h3>
                            <p>Jet de {statsGroup?.label}</p>
                            <p>Groupe de compétences amélioré : {spe.stat}</p>
                            <p>Bonus : 1D6</p>
                        </div>
                    </Card>
                )
            }) : <Typography textAlign="center" m="auto">Aucune spécialité</Typography>
        }
        </Card>
    )
}