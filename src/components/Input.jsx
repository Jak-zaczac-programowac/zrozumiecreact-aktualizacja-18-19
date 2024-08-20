import { forwardRef, useContext } from "react";
import { NameContext } from "../contexts/nameContext";

export const Input = forwardRef(function Input(props, ref) {
    const [, setName] = useContext(NameContext);

    return (
        <input
            ref={ref}
            type="text"
            onChange={(e) => {
                setName(e.target.value);
            }}
        />
    );
});
