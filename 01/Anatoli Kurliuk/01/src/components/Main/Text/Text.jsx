import React from "react";
import c from "./Text.module.scss";

const Text = (props) => {
  return (
    <div class={c.text}>
      <h3>почему мы?</h3>
      <p>
        Мы обучаем самым востребованным на сегодняшний день IT-специальностям.
        Занятия в Myfreedom — 30% теории, 70% практики и 99% удовольствия.
      </p>
    </div>
  );
};

export default Text;
