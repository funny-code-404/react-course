import React from "react";
import { h3Text, text } from "./config";
import c from "./Text.module.scss";

const Text = (props) => {
  return (
    <div class={c.text}>
      <h3>{h3Text}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Text;
