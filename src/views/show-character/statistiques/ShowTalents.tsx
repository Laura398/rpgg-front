import { Card, List, ListItem, ListSubheader, Typography } from "@mui/joy";
import { SKILLS_GROUPS } from "../../../types/Characters.constants";
import { Character } from "../../../types/Character.type";

export default function ShowTalents(props: {character: Character}) {
    const character = props.character;
    return (
        <Card variant="plain" color="neutral" sx={{ textAlign: "center", margin: "10px auto", flex: 1, width: "100%", display: "flex", flexDirection: { sm: "column", md: "row" }, justifyContent: "space-between" }}>
            {character?.talent?.name && character?.talent?.name !== "" ?
            <List
                variant="soft"
                sx={{
                width: { sm: "100%", md: "40%" },
                borderRadius: 'sm',
                textAlign: "center",
                alignItems: "center"
                }}
            >
                <ListItem nested>
                <ListSubheader sx={{margin: "10px auto", fontSize: "15px"}}><b>Talent</b></ListSubheader>
                <List sx={{alignItems: "center"}}>
                    <ListItem>
                    <Typography>{character.talent.name}</Typography>
                    </ListItem>
                </List>
                </ListItem>
                <ListItem nested>
                <ListSubheader sx={{margin: "10px auto", fontSize: "15px"}}><b>Compétences concernées</b></ListSubheader>
                <List sx={{alignItems: "center"}}>
                    {character?.talent?.skills?.map((skill: any, index: number) => {
                        const skillGroup = SKILLS_GROUPS.find((group) => group.name.includes(skill));
                        return (
                            <ListItem key={index}>
                                <Typography>{`${skill} (${skillGroup?.group})`}</Typography>
                            </ListItem>
                    )})}
                </List>
                </ListItem>
            </List> : <Typography>Aucun talent</Typography>}

            {character?.weakness?.name && character?.weakness?.name !== "" ?
            <List
                variant="soft"
                sx={{
                width: { sm: "100%", md: "40%" },
                borderRadius: 'sm',
                textAlign: "center",
                alignItems: "center"
                }}
            >
                <ListItem nested>
                    <ListSubheader sx={{margin: "10px auto", fontSize: "15px"}}><b>Faiblesse</b></ListSubheader>
                    <List sx={{alignItems: "center"}}>
                        <ListItem>
                        <Typography>{character.weakness.name}</Typography>
                        </ListItem>
                    </List>
                    </ListItem>
                    <ListItem nested>
                    <ListSubheader sx={{margin: "10px auto", fontSize: "15px"}}><b>Compétences concernées</b></ListSubheader>
                    <List sx={{alignItems: "center"}}>
                        {character?.weakness?.skills?.map((skill: any, index: number) => {
                            const skillGroup = SKILLS_GROUPS.find((group) => group.name.includes(skill));
                            return (
                                <ListItem key={index}>
                                    <Typography>{`${skill} (${skillGroup?.group})`}</Typography>
                                </ListItem>
                            )})}
                    </List>
                </ListItem>
            </List> : <Typography>Aucune faiblesse</Typography>}
        </Card>
    )
}