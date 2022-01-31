import React from "react";
import {
  left_column_text,
  middle_column_text,
  right_column_text,
  sub_button,
} from "../consts";
import "./main-style.css";

class Main extends React.Component {
  render() {
    return (
      <main>
        <div className="container">
          <div className="second-container">
            <div className="first-div-of-second-container">
              <h2>Cut & Shave</h2>
              <p>{left_column_text}</p>
              {sub_button}
            </div>
            <div className="second-div-of-second-container">
              <h2>Мастера</h2>
              <p>{middle_column_text}</p>
              {sub_button}
            </div>
            <div className="third-div-of-second-container">
              <h2>Lorem, ipsum.</h2>
              <p>{right_column_text}</p>
              {sub_button}
            </div>
          </div>
        </div>
      </main>
    );
  }
}
export default Main;