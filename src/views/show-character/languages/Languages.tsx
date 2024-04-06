import { Card, Stack, Typography } from "@mui/joy";
import { Character } from "../../../types/Character.type";
import { LANGUAGES_TYPES } from "../../../types/Characters.constants";

export default function ShowLanguages(props: {character: Character}) {
    const character = props.character;
    return (
        <Card variant="plain" color="neutral" sx={{ textAlign: "left", margin: "10px auto", width: "100%" }}>
            <Stack direction={{sm: "column", md: "row"}} justifyContent="space-around" width="100%" flexWrap="wrap">
                
                <Card variant="soft" color="neutral" sx={{ textAlign: "left", margin: "10px 0", width: {sm: "100%", md: "40%"} }}>
                    <Typography level="h4" fontWeight="lg" textColor="text.tertiary">
                        Langue Commune
                    </Typography>
                    {character?.languages?.common ?
                        LANGUAGES_TYPES.map((language: {name: string, value: string}, index: number) => {
                            return (
                                <Stack key={index} direction="row" justifyContent="space-between" width="100%" flexWrap="wrap">
                                    <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                                        {language.name}
                                    </Typography>
                                    <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                                        {(character?.languages?.common as any)[language.value] || ""}
                                    </Typography>
                                </Stack>
                            )
                        })
                    :
                        <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                            Langue Commune non maîtrisée
                        </Typography>
                    }
                        
                </Card>

                <Card variant="soft" color="neutral" sx={{ textAlign: "left", margin: "10px 0", width: {sm: "100%", md: "40%"} }}>
                    <Typography level="h4" fontWeight="lg" textColor="text.tertiary">
                        Patois - Langue Natale
                    </Typography>
                    {character?.languages?.birth ?
                        LANGUAGES_TYPES.map((language: {name: string, value: string}, index: number) => {
                            return (
                                <Stack key={index} direction="row" justifyContent="space-between" width="100%" flexWrap="wrap">
                                    <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                                        {language.name}
                                    </Typography>
                                    <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                                        {(character?.languages?.birth as any)[language.value] || ""}
                                    </Typography>
                                </Stack>
                            )
                        })
                    :
                        <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                            Langue Natale non maîtrisée
                        </Typography>
                    }
                        
                </Card>

                <Card variant="soft" color="neutral" sx={{ textAlign: "left", margin: "10px 0", width: {sm: "100%", md: "40%"} }}>
                    <Typography level="h4" fontWeight="lg" textColor="text.tertiary">
                        Elfique
                    </Typography>
                    {character?.languages?.elf ?
                        LANGUAGES_TYPES.map((language: {name: string, value: string}, index: number) => {
                            return (
                                <Stack key={index} direction="row" justifyContent="space-between" width="100%" flexWrap="wrap">
                                    <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                                        {language.name}
                                    </Typography>
                                    <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                                        {(character?.languages?.elf as any)[language.value] || ""}
                                    </Typography>
                                </Stack>
                            )
                        })
                    :
                        <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                            Langue Elfique non maîtrisée
                        </Typography>
                    }
                        
                </Card>

                <Card variant="soft" color="neutral" sx={{ textAlign: "left", margin: "10px 0", width: {sm: "100%", md: "40%"} }}>
                    <Typography level="h4" fontWeight="lg" textColor="text.tertiary">
                        Naine
                    </Typography>
                    {character?.languages?.dwarf ?
                        LANGUAGES_TYPES.map((language: {name: string, value: string}, index: number) => {
                            return (
                                <Stack key={index} direction="row" justifyContent="space-between" width="100%" flexWrap="wrap">
                                    <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                                        {language.name}
                                    </Typography>
                                    <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                                        {(character?.languages?.dwarf as any)[language.value] || ""}
                                    </Typography>
                                </Stack>
                            )
                        })
                    :
                        <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                            Langue Naine non maîtrisée
                        </Typography>
                    }
                        
                </Card>

                <Card variant="soft" color="neutral" sx={{ textAlign: "left", margin: "10px 0", width: {sm: "100%", md: "40%"} }}>
                    <Typography level="h4" fontWeight="lg" textColor="text.tertiary">
                        Ork
                    </Typography>
                    {character?.languages?.orc ?
                        LANGUAGES_TYPES.map((language: {name: string, value: string}, index: number) => {
                            return (
                                <Stack key={index} direction="row" justifyContent="space-between" width="100%" flexWrap="wrap">
                                    <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                                        {language.name}
                                    </Typography>
                                    <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                                        {(character?.languages?.orc as any)[language.value] || ""}
                                    </Typography>
                                </Stack>
                            )
                        })
                    :
                        <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                            Langue Ork non maîtrisée
                        </Typography>
                    }
                        
                </Card>

                <Card variant="soft" color="neutral" sx={{ textAlign: "left", margin: "10px 0", width: {sm: "100%", md: "40%"} }}>
                    <Typography level="h4" fontWeight="lg" textColor="text.tertiary">
                        Antique
                    </Typography>
                    {character?.languages?.antic ?
                        LANGUAGES_TYPES.map((language: {name: string, value: string}, index: number) => {
                            return (
                                <Stack key={index} direction="row" justifyContent="space-between" width="100%" flexWrap="wrap">
                                    <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                                        {language.name}
                                    </Typography>
                                    <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                                        {(character?.languages?.antic as any)[language.value] || ""}
                                    </Typography>
                                </Stack>
                            )
                        })
                    :
                        <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                            Langue Antique non maîtrisée
                        </Typography>
                    }
                        
                </Card>

                <Card variant="soft" color="neutral" sx={{ textAlign: "left", margin: "10px 0", width: {sm: "100%", md: "40%"} }}>
                    <Typography level="h4" fontWeight="lg" textColor="text.tertiary">
                    Daimonique
                    </Typography>
                    {character?.languages?.daemon ?
                        LANGUAGES_TYPES.map((language: {name: string, value: string}, index: number) => {
                            return (
                                <Stack key={index} direction="row" justifyContent="space-between" width="100%" flexWrap="wrap">
                                    <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                                        {language.name}
                                    </Typography>
                                    <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                                        {(character?.languages?.daemon as any)[language.value] || ""}
                                    </Typography>
                                </Stack>
                            )
                        })
                    :
                        <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                            Langue Daimonique non maîtrisée
                        </Typography>
                    }
                        
                </Card>

                <Card variant="soft" color="neutral" sx={{ textAlign: "left", margin: "10px 0", width: {sm: "100%", md: "40%"} }}>
                    <Typography level="h4" fontWeight="lg" textColor="text.tertiary">
                        Runique
                    </Typography>
                    {character?.languages?.rune ?
                        LANGUAGES_TYPES.map((language: {name: string, value: string}, index: number) => {
                            return (
                                <Stack key={index} direction="row" justifyContent="space-between" width="100%" flexWrap="wrap">
                                    <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                                        {language.name}
                                    </Typography>
                                    <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                                        {(character?.languages?.rune as any)[language.value] || ""}
                                    </Typography>
                                </Stack>
                            )
                        })
                    :
                        <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                            Langue Runique non maîtrisée
                        </Typography>
                    }
                        
                </Card>
            </Stack>
        </Card>
    )
}