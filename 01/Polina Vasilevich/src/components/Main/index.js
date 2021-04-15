import Game from "../Game";
import "./styles.scss";

import { config } from "../../config";

export default () => (
  <main className="main">
    <h1 className="main__title">Welcome to the Tic Tac Toe Game!</h1>
    <div className="main__container">
      <Game countRows={config.countRows} countCols={config.countCols} />
    </div>
  </main>
);
