import { Box, Divider, Stack } from "@mui/joy";
import CreateCharacterCard from "../../../components/CreateCharacterCard";
import AlertMessage from "../../../components/alerts/AlertMessage";
import { useState } from "react";
import StatsTable from "../../../components/StatsTable";
import InventoryList from "./InventoryList";
import { updateCharacter } from "../../../api/Characters";

const moneyList = [
    { name: "Or", field: "gold" },
    { name: "Argent", field: "silver" },
    { name: "Cuivre", field: "copper" },
]

export default function Inventory (props: {character: any, setCharacter: any}) {
    const { character, setCharacter } = props;
    const [showAlert, setShowAlert] = useState(false);
    const [money, setMoney] = useState(character.money || {});
    const [inventory, setInventory] = useState(character.inventory || []);

    const closeAlert = () => {
        setShowAlert(false);
    }

    const save = () => {
        setCharacter({...character, money, inventory});
        const hrefId = window.location.href.split('/')[5];
        updateCharacter(hrefId, {money, inventory});
        setShowAlert(true);
    }

    const content = (
        <Box sx={{ position: 'relative' }}>
            <Stack spacing={2} direction={{xs: "column", md: "row"}} justifyContent="space-around">
                <StatsTable title="Liquidité" statsList={moneyList} stats={money} setStats={setMoney} noRandom={true} />
                <Divider orientation="vertical" sx={{ display: {xs: "none", md: "flex"}, opacity: {xs: 0, md: 1} }} />
                <InventoryList inventory={inventory} setInventory={setInventory} />
            </Stack>
            {/* <Divider orientation="horizontal" sx={{ display: "flex", opacity: {xs: 0, md: 1}, my: "20px" }} />
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
            </Stack> */}
            {showAlert && <AlertMessage severity="success" message="Personnage mis à jour" onClose={closeAlert} />}
        </Box>
    );

    return (
        <CreateCharacterCard save={save} title="Inventaire" buttonText="Enregistrer l'inventaire" content={content} />
    );
}