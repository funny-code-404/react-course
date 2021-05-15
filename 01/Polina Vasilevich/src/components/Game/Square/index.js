import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const Square = ({ value, onClick }) => (
  <button
    value={value}
    className={`square ${value === "X" ? "colorX" : "colorO"}`}
    onClick={onClick}
  >
    {value}
  </button>
);

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};

Square.defaultProps = {
  value: "X",
  onClick: "",
};

export default Square;
