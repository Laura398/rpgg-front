import StatsTable from "../../../components/StatsTable";
import { Character } from "../../../types/Character.type";

const statsList = [
    {
        name: "Points de Vitalité",
        field: "hp"
    },
    {
        name: "Points de Mana",
        field: "mp"
    },
    {
        name: "Niveau",
        field: "level"
    },
    {
        name: "Attaque",
        field: "atk"
    },
    {
        name: "Parade",
        field: "def"
    }
]

export default function MainStats(props: { mainStats: Character['mainStats'], setMainStats: (mainStats: Character['mainStats']) => void}) {
    const { mainStats, setMainStats } = props;

    return (
        <StatsTable title="Etat du personnage" statsList={statsList} stats={mainStats} setStats={setMainStats} />
    );
}