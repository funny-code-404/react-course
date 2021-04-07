import React from "react";
import "./styles.scss";
export default function Square(props) {
  const { value, onClick } = props;
  return (
    <button
      value={value}
      className={`square ${value === "X" ? "colorX" : "colorO"}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
