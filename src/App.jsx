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
            <NameContext value={[name, setName]}>
                <Input ref={ref} />
                <Greet name={name} />

                <button onClick={onClick}>Wpisz imię!</button>
                <p>
                    Projekt korzysta z <b>React {version}</b>
                </p>
            </NameContext>
        </>
    );
}

export default App;
