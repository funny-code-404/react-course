import React from "react";
import "./styles.css";

class Main extends React.Component {
  render() {
    return (
      <main>
        <h1>
          <span>Food</span> FARMING
        </h1>
        <p>
          Food Farming is proud of our past and excited about our future. We
          strive to continue being one of India and New Zealand's great food
          companies, offering quality fruits and vegetable.
        </p>
        <a href="/# " className="butt">
          Read More
        </a>
        <button className="mouse"></button>
      </main>
    );
  }
}

export default Main;
