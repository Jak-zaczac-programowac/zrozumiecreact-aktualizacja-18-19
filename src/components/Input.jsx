import { use } from "react";
import { NameContext } from "../contexts/nameContext";

export const Input = function Input({ ref }) {
    const [, setName] = use(NameContext);

    return (
        <input
            ref={ref}
            type="text"
            onChange={(e) => {
                setName(e.target.value);
            }}
        />
    );
};
