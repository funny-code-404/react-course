import React from "react";
import c from "./Head.module.scss";

function Head(props) {
  return (
    <div class={c.head}>
      <h1>IT-школа Myfreedom</h1>
      <p>Подготовка от нуля до профи</p>
    </div>
  );
}

export default Head;
