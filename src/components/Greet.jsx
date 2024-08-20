import { useContext } from "react";
import { NameContext } from "../contexts/nameContext";

export function Greet() {
    const [name] = useContext(NameContext);
    return (
        <p>
            Cześć <b>{name}</b>{" "}
        </p>
    );
}
