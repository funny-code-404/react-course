import React from "react";
import "./styles.css";
import Hero from "./hero.js";
import About from "./about.js";
import Pets from "./pets.js";
import Help from "./help.js";
import Donation from "./donation.js";

class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <Hero />
        <About />
        <Pets />
        <Help />
        <Donation />
      </main>
    );
  }
}

export default Main;
