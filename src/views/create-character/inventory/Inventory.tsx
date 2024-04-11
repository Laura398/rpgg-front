import { Box, Divider, Stack } from "@mui/joy";
import { useState } from "react";
import { updateCharacter } from "../../../api/Characters";
import CreateCharacterCard from "../../../components/CreateCharacterCard";
import AlertMessage from "../../../components/alerts/AlertMessage";
import InventoryList from "./InventoryList";
import Money from "./Money";
import useCharacterStore from "../../../store/Character";

const moneyList = [
    { name: "Or", field: "gold" },
    { name: "Argent", field: "silver" },
    { name: "Cuivre", field: "copper" },
]

export default function Inventory (props: {character: any, setCharacter: React.Dispatch<React.SetStateAction<any>>}) {
    const { character, setCharacter } = props;
    const [showAlert, setShowAlert] = useState(false);
    const [money, setMoney] = useState(character.money || {});
    const [inventory, setInventory] = useState(character.inventory || []);

    const closeAlert = () => {
        setShowAlert(false);
    }

    const save = async () => {
        setCharacter({...character, money, inventory});
        const id = useCharacterStore().character._id;
        await updateCharacter(id, {money, inventory});
        setShowAlert(true);
    }

    const content = (
        <Box sx={{ position: 'relative' }}>
            <Stack spacing={2} direction={{xs: "column", md: "column"}} justifyContent="space-around">
                <Money title="Liquidité" statsList={moneyList} stats={money} setStats={setMoney} noRandom={true} />
                <Divider orientation="horizontal" sx={{ display: {xs: "none", md: "flex"}, opacity: {xs: 0, md: 1} }} />
                <InventoryList inventory={inventory} setInventory={setInventory} />
            </Stack>
            {showAlert && <AlertMessage severity="success" message="Personnage mis à jour" onClose={closeAlert} />}
        </Box>
    );

    return (
        <CreateCharacterCard save={save} title="Inventaire" buttonText="Enregistrer l'inventaire" content={content} />
    );
}