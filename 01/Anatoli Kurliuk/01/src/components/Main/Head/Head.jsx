import React from "react";
import { h1Text, text } from "./config";
import c from "./Head.module.scss";

function Head(props) {
  return (
    <div class={c.head}>
      <h1>{h1Text}</h1>
      <p>{text}</p>
    </div>
  );
}

export default Head;
