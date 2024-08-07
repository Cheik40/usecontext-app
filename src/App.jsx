import "./App.css";
import CouleurContextProvider from "./CouleurContext";
import GrandParent from "./GrandParent";

function App() {
    return (
        <CouleurContextProvider>
            <GrandParent />
        </CouleurContextProvider>
    );
}

export default App;
