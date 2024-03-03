import { Character } from "../../types/Character.type";

export default function Stats(props: { stats: Character['mainStats'] & Character['secondaryStats'], setStats: (stats: Character['mainStats'] & Character['secondaryStats']) => void}) {
    // const { stats, setStats } = props;
    return (
        <div>
            <h1>Stats</h1>
        </div>
    )
}