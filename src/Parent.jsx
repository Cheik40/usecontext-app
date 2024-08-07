/* eslint-disable no-unused-vars */
import { useState } from "react";
import Enfant from "./Enfant";

export default function Parent() {
    const [couleur, setCouleur] = useState("");

    return (
        <div>
            <p> Partie parent</p>
            <Enfant />
        </div>
    );
}
