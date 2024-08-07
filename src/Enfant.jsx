import { useCouleurContext } from "./CouleurContext";

// eslint-disable-next-line react/prop-types
export default function Enfant() {
    const { couleur, setCouleur } = useCouleurContext();
    // console.log(context);
    return (
        <div style={{ color: couleur }}>
            {" "}
            enfant {couleur}
            <input
                type='text'
                value={couleur}
                onChange={(e) => setCouleur(e.target.value)}
            />
        </div>
    );
}
