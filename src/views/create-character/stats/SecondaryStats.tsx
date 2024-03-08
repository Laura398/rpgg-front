import StatsTable from "../../../components/StatsTable";
import { Character } from "../../../types/Character.type";

const statsList = [
    {
        name: "Condition Physique",
        field: "phy",
        description: "Force mentale - Constitution"
    },
    {
        name: "Intelligence",
        field: "int",
        description: "Logique - Rélflexion"
    },
    {
        name: "Dextérité",
        field: "dxt",
        description: "Adresse - Précision"
    },
    {
        name: "Force mentale",
        field: "men",
        description: "Courage - Caractère"
    },
    {
        name: "Charisme",
        field: "cha",
        description: "Confiance - Prestance"
    }
]

export default function SecondaryStats (props: { secondaryStats: Character['secondaryStats'], setSecondaryStats: (secondaryStats: Character['secondaryStats']) => void}) {
    const { secondaryStats, setSecondaryStats } = props;

    return (
        <StatsTable title="Statistiques" statsList={statsList} stats={secondaryStats} setStats={setSecondaryStats} />
    );
}