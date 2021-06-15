import Blocks from "./Blocks/Blocks";
import c from "./Main.module.scss";

const Main = (props) => {
  return (
    <div className={c.main}>
      <div class={c.wrapper}>
        <div class={c.content}>
          <div class={c.head}>
            <h1>IT-школа Myfreedom</h1>
            <p>Подготовка от нуля до профи</p>
          </div>
          <div class={c.text}>
            <h3>почему мы?</h3>
            <p>
              Мы обучаем самым востребованным на сегодняшний день
              IT-специальностям. Занятия в Myfreedom — 30% теории, 70% практики
              и 99% удовольствия.
            </p>
          </div>
          <div class={c.blocks}>
            <Blocks  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
