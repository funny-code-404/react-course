import Game from "../Game";
import "./styles.scss";

import { config } from "./config";

export default function Main() {
  return (
    <main className="main">
      <h1 className="main__title">Welcome to the Tic Tac Toe Game!</h1>
      <div className="main__container">
        <Game cells={config.cells} />
      </div>
    </main>
  );
}
