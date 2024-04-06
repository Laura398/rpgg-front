import { Divider } from "@mui/joy";
import { Box, Stack } from "@mui/material";
import { useState } from "react";
import { updateCharacter } from "../../../api/Characters";
import CreateCharacterCard from "../../../components/CreateCharacterCard";
import AlertMessage from "../../../components/alerts/AlertMessage";
import { Character } from "../../../types/Character.type";
import { MAGIC_CLASSES, NON_MAGIC_CLASSES } from "../../../types/Characters.constants";
import MainStats from "./MainStats";
import SecondaryStats from "./SecondaryStats";
import { showAlertFunction } from "../../../helpers/show-alert";

export default function Stats(props: { className: string | undefined, mainStats: Character['mainStats'], setMainStats: (mainStats: Character['mainStats']) => void, secondaryStats: Character['secondaryStats'], setSecondaryStats: (secondaryStats: Character['secondaryStats']) => void }) {
    const { className, mainStats, setMainStats, secondaryStats, setSecondaryStats } = props;
    const [showAlert, setShowAlert] = useState(false);

    const closeAlert = () => {
        setShowAlert(false);
    }

    const save = async () => {
        const modifier = {
            mainStats,
            secondaryStats
        }
        const hrefId = window.location.href.split('/')[4];
        await updateCharacter(hrefId, modifier);
        showAlertFunction(setShowAlert);
    }

    const randomAll = () => {
        if (className) {
            if (MAGIC_CLASSES.includes(className)) {
                setMainStats({
                    hp: 10 + Math.floor(Math.random() * 20),
                    mp: 12 + Math.floor(Math.random() * 20),
                    level: 5,
                    atk: 8 + Math.floor(Math.random() * 12),
                    def: 10 + Math.floor(Math.random() * 12)
                })
                setSecondaryStats({
                    phy: 8 + Math.floor(Math.random() * 20),
                    int: 12 + Math.floor(Math.random() * 20),
                    dxt: 10 + Math.floor(Math.random() * 20),
                    men: 10 + Math.floor(Math.random() * 20),
                    cha: 10 + Math.floor(Math.random() * 20)
                })
            } else if (NON_MAGIC_CLASSES.includes(className)) {
                setMainStats({
                    hp: 12 + Math.floor(Math.random() * 20),
                    mp: 8 + Math.floor(Math.random() * 20),
                    level: 5,
                    atk: 12 + Math.floor(Math.random() * 20),
                    def: 10 + Math.floor(Math.random() * 20)
                })
                setSecondaryStats({
                    phy: 12 + Math.floor(Math.random() * 20),
                    int: 8 + Math.floor(Math.random() * 20),
                    dxt: 10 + Math.floor(Math.random() * 20),
                    men: 10 + Math.floor(Math.random() * 20),
                    cha: 10 + Math.floor(Math.random() * 20)
                })
            } else {
                setMainStats({
                    hp: 10 + Math.floor(Math.random() * 20),
                    mp: 10 + Math.floor(Math.random() * 20),
                    level: 5,
                    atk: 10 + Math.floor(Math.random() * 20),
                    def: 10 + Math.floor(Math.random() * 20)
                })
                setSecondaryStats({
                    phy: 10 + Math.floor(Math.random() * 20),
                    int: 10 + Math.floor(Math.random() * 20),
                    dxt: 10 + Math.floor(Math.random() * 20),
                    men: 10 + Math.floor(Math.random() * 20),
                    cha: 10 + Math.floor(Math.random() * 20)
                })
            }
        } else {
            setMainStats({
                hp: 10 + Math.floor(Math.random() * 20),
                mp: 10 + Math.floor(Math.random() * 20),
                level: 5,
                atk: 10 + Math.floor(Math.random() * 20),
                def: 10 + Math.floor(Math.random() * 20)
            })
            setSecondaryStats({
                phy: 10 + Math.floor(Math.random() * 20),
                int: 10 + Math.floor(Math.random() * 20),
                dxt: 10 + Math.floor(Math.random() * 20),
                men: 10 + Math.floor(Math.random() * 20),
                cha: 10 + Math.floor(Math.random() * 20)
            })
        }
    }

    const content = (
        <Box sx={{ position: 'relative' }}>
            <Stack spacing={2} direction={{sm: "column", md: "row"}} justifyContent="space-around">
                <MainStats mainStats={mainStats} setMainStats={setMainStats} />
                <Divider orientation="vertical" sx={{ display: "flex", opacity: {sm: 0, md: 1} }} />
                <SecondaryStats secondaryStats={secondaryStats} setSecondaryStats={setSecondaryStats} />
            </Stack>
            {showAlert && <AlertMessage severity="success" message="Personnage mis à jour" onClose={closeAlert} />}
        </Box>
    );

    return (
        <CreateCharacterCard save={save} title="Statistiques" buttonText="Enregistrer les statistiques" content={content} randomAll={randomAll} />
    )
}