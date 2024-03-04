import CreateCharacterCard from "../../components/CreateCharacterCard";
import { Character } from "../../types/Character.type";

export default function Stats(props: { stats: Character['mainStats'] & Character['secondaryStats'], setStats: (stats: Character['mainStats'] & Character['secondaryStats']) => void, edit: boolean}) {
    // const { stats, setStats } = props;

    const save = () => {
        console.log('Save stats');
    }

    const content = (
        <div>
            <p>Stats</p>
        </div>
    );

    return (
        <CreateCharacterCard save={save} title="Statistiques" buttonText="Enregistrer les statistiques" content={content} />
    )
}