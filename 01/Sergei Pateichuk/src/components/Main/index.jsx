import React from "react";
import "./style.css";

class Main extends React.Component {
  render() {
    return (
      <main>
        <div className="card">
          <h1>title1</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          <button>button1</button>
        </div>
        <div className="card">
          <h1>title2</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, pariatur reiciendis.</p>
          <button>button2</button>
        </div>
        <div className="card">
          <h1>title3</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo?</p>
          <button>button3</button>
        </div>
      </main>
    );
  }
}

export default Main;
