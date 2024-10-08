import { useRef, useState, version } from "react";
import { NameContext } from "./contexts/nameContext";
import { Input } from "./components/Input";
import { Greet } from "./components/Greet";

function App() {
    const [name, setName] = useState();
    const ref = useRef();

    const onClick = () => {
        ref.current.focus();
    };

    return (
        <>
            <NameContext.Provider value={[name, setName]}>
                <Input ref={ref} />
                <Greet />

                <button onClick={onClick}>Wpisz imię!</button>
                <p>
                    Projekt korzysta z <b>React {version}</b>
                </p>
            </NameContext.Provider>
        </>
    );
}

export default App;
