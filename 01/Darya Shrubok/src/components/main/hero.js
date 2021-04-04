import React from "react";
import "./hero.css";

class Hero extends React.Component {
  render() {
    return (
      <div className="hero">
        <div className="hero__wrapper">
          <div className="content-section">
            <h2 className="content-section__title">
              <span>Not only people</span>
              <span>need a house</span>
            </h2>
            <p className="content-section__subtitle">
              We offer to give a chance to a little and nice puppy with an
              extremely wide and open heart. He or she will love you more than
              anybody else in the world, you will see!
            </p>
            <button type="button" className="content-section__button">
              Make a friend
            </button>
          </div>
          <div className="hero__image-wrapper">
            <img
              src="/assets/images/start-screen-puppy.png"
              alt="Start screen puppy"
              className="hero__image"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
