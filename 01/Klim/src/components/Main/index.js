//Core
import react from "react";

//Style
import "./main.scss";
import logo1 from "./img/Без названия.png";
import logo2 from "./img/git.png";

export class Main extends react.Component {
  render() {
    return (
      <div className="main">
        <p>Read more articles:</p>
        <div className="addArticle">
          <div>
            <a href="https://stackoverflow.com/" target='_blank'>Here</a>
            <img src={logo1}></img>
          </div>
          <div>
            <a href="https://github.com/" target='_blank'>Here</a>
            <img src={logo2}></img>
          </div>
        </div>
      </div>
    );
  }
}
