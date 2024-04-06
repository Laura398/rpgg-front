import { Box, List, ListItem, ListItemContent, Sheet, Stack, Typography } from "@mui/joy";
import { Character } from "../../../types/Character.type";
import PaidIcon from "@mui/icons-material/Paid";
import { amber, grey, red } from "@mui/material/colors";

export default function ShowInventory (props: {character: Character}) {
    const list = [
        {
            name: "Or",
            field: "gold",
            description: "Pièces d'or"
        },
        {
            name: "Argent",
            field: "silver",
            description: "Pièces d'argent"
        },
        {
            name: "Cuivre",
            field: "copper",
            description: "Pièces de cuivre"
        }
    ]
    const { character } = props;
    return (
        <Box sx={{ position: 'relative', marginTop: "20px" }}>
            <Stack spacing={2} direction={{xs: "column", md: "column"}} justifyContent="space-around">
                <Sheet variant="soft" sx={{ width: "100%", p: 2, m: "10px", borderRadius: 'sm' }}>
                    <Typography
                        level="h3"
                        fontSize="xl2"
                        fontWeight="xl"
                        id="ios-example-demo"
                        mb={1}
                    >
                        Liquidité
                    </Typography>
                    <List
                        aria-labelledby="ellipsis-list-demo"
                        sx={{ 
                            width: "100%",
                            margin: "auto",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around",
                            flexWrap: "wrap",
                            '--ListItemDecorator-size': '56px'
                        }}
                    >
                        {
                            list.map((stat, index) => {
                                let color;
                                if (stat.name === "Or") {
                                    color = amber[300];
                                } else if (stat.name === "Argent") {
                                    color = grey[400];
                                }else {
                                    color = red[900];
                                }
                                return (
                                    <ListItem key={index}>
                                        <ListItemContent sx={{ display: "flex", flexDirection: {sm: "column", md: "row"}, justifyContent: "center", flexWrap: "wrap" }}>
                                            <Box sx={{margin: "10px 20px 0 0"}}>
                                                <Typography level="title-sm" textAlign="left">
                                                    <PaidIcon sx={{ color: color }} />
                                                </Typography>
                                                <Typography level="title-sm" textAlign="left" sx={{marginLeft: "5px"}}>{character.money?.[stat.field as keyof typeof character.money]}</Typography>
                                            </Box>
                                            
                                        </ListItemContent>
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                </Sheet>
            </Stack>

            <Stack spacing={2} direction={{xs: "column", md: "column"}} justifyContent="space-around" mt="20px">
                <Sheet variant="soft" sx={{ width: "100%", p: 2, m: "10px", borderRadius: 'sm' }}>
                    <Typography
                        level="h3"
                        fontSize="xl2"
                        fontWeight="xl"
                        id="ios-example-demo"
                        mb={1}
                    >
                        Inventaire
                    </Typography>
                    <List
                        aria-labelledby="ellipsis-list-demo"
                        sx={{ 
                            width: "100%",
                            margin: "auto",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-around",
                            flexWrap: "wrap",
                            '--ListItemDecorator-size': '56px'
                        }}
                    >
                        {
                            (character.inventory && character.inventory.length > 0) ? character.inventory?.map((item, index) => {
                                return (
                                    <ListItem key={index}>
                                        <ListItemContent sx={{ display: "flex", flexDirection: {sm: "column", md: "row"}, justifyContent: "center", flexWrap: "wrap" }}>
                                            <Typography level="title-sm" textAlign="left" sx={{marginTop: "12px"}}>{item}</Typography>
                                        </ListItemContent>
                                    </ListItem>
                                )
                            })
                            :
                            <ListItem>
                                <ListItemContent sx={{ display: "flex", flexDirection: {sm: "column", md: "row"}, justifyContent: "center", flexWrap: "wrap" }}>
                                    <Typography level="title-sm" textAlign="left" sx={{marginTop: "12px"}}>Aucun objet</Typography>
                                </ListItemContent>
                            </ListItem>
                        }
                    </List>
                </Sheet>
            </Stack>
        </Box>
    )
}