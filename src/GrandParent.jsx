import Parent from "./Parent";
import { useCouleurContext } from "./CouleurContext";

export default function GrandParent() {
    const { couleur, setCouleur } = useCouleurContext();
    return (
        <div>
            <input
                type='text'
                value={couleur}
                onChange={(e) => setCouleur(e.target.value)}
            />
            {couleur}
            <p>Grand Parent </p>
            <Parent />
        </div>
    );
}
