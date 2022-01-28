import React from "react";
import {
  LINK_TEXT,
  TITLE_TEXT,
  CONTENT_TEXT,
  CONTENT_TEXT_1,
  CONTENT_TEXT_2,
  CONTENT_TEXT_3,
} from "../Content/Content";
import "./Main.css";

class Main extends React.Component {
  render() {
    return (
      <main>
        <h1>{CONTENT_TEXT}</h1>
        <div className="card">
          <h2>{TITLE_TEXT}</h2>
          <p>{CONTENT_TEXT_1}</p>
          <button>{LINK_TEXT}</button>
        </div>
        <div className="card">
          <h2>{TITLE_TEXT}</h2>
          <p>{CONTENT_TEXT_2}</p>
          <button>{LINK_TEXT}</button>
        </div>
        <div className="card">
          <h2>{TITLE_TEXT}</h2>
          <p>{CONTENT_TEXT_3}</p>
          <button>{LINK_TEXT}</button>
        </div>
      </main>
    );
  }
}

export default Main;
