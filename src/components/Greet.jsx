import { use } from "react";
import { NameContext } from "../contexts/nameContext";

export function Greet() {
    const [name] = use(NameContext);
    return (
        <p>
            Cześć <b>{name}</b>{" "}
        </p>
    );
}
