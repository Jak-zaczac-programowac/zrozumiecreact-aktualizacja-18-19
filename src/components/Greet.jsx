import PropTypes from "prop-types";

export function Greet({ name }) {
    return (
        <p>
            Cześć <b>{name}</b>{" "}
        </p>
    );
}

Greet.propTypes = {
    name: PropTypes.string,
};
