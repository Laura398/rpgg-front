import { Card, Typography } from "@mui/joy";
import { Character } from "../../../types/Character.type";
import { Stack } from "@mui/material";
import { SKILLS_NAMES } from "../../../types/Characters.constants";

export default function ShowSkills(props: {character: Character}) {
    const character = props.character;
    return (
        <Card variant="plain" color="neutral" sx={{ textAlign: "left", margin: "10px auto", width: "100%" }}>
            <Stack direction={{sm: "column", md: "row"}} justifyContent="space-around" width="100%" flexWrap="wrap">
                {character?.skills ?
                    Object.keys(character?.skills ?? {}).map((skill: string) => {
                        const skillName = SKILLS_NAMES.find((skillName) => skillName.name === skill)?.label;
                        let skillList: any = {};
                        if (skill === "art") {
                            skillList = character?.skills?.art;
                        } else if (skill === "knowledge") {
                            skillList = character?.skills?.knowledge;
                        } else if (skill === "physical") {
                            skillList = character?.skills?.physical;
                        } else if (skill === "social") {
                            skillList = character?.skills?.social;
                        } else if (skill === "intellect") {
                            skillList = character?.skills?.intellect;
                        } else if (skill === "survival") {
                            skillList = character?.skills?.survival;
                        }
                        return (
                            <Card key={skillName} variant="soft" color="neutral" sx={{ textAlign: "left", margin: "10px 0", width: {sm: "100%", md: "40%"} }}>
                                <Typography level="h4" fontWeight="lg" textColor="text.tertiary">
                                    {skillName}
                                </Typography>
                                {skillList ?
                                    Object.keys(skillList).map((skill: any, index: number) => {
                                        return (
                                            <Stack key={index} direction="row" justifyContent="space-between" width="100%" flexWrap="wrap">
                                                <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                                                    {skill}
                                                </Typography>
                                                <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                                                    {skillList[skill]}
                                                </Typography>
                                            </Stack>
                                        )
                                    })
                                :
                                    <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                                        Aucune compétence acquises
                                    </Typography>
                                }
                            </Card>
                        )
                    })
                :
                    <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                        Aucune compétence acquise
                    </Typography>
}
            </Stack>
                        </Card>
                    )
}