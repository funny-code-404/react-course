import React from "react";
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

export default Square;
