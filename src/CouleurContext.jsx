/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

export const CouleurContext = createContext({
    couleur: "",
    setCouleur: () => {},
});

export default function CouleurContextProvider({ children }) {
    const [couleur, setCouleur] = useState("");

    const valueCouleurContext = {
        couleur,
        setCouleur,
    };

    return (
        <CouleurContext.Provider value={valueCouleurContext}>
            {children}
        </CouleurContext.Provider>
    );
}

export const useCouleurContext = () => useContext(CouleurContext);
