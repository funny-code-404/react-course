import React from "react";
import "./about.css";

class About extends React.Component {
  render() {
    return (
      <div className="about" id="about">
        <div className="about__wrapper">
          <div className="about__image-wrapper">
            <img
              src="/assets/images/about-pets.png"
              alt="About pets"
              className="about__image"
            />
          </div>
          <div className="about__content">
            <h3 className="about__title">
              <span>About the shelter</span>
              <span>“Cozy House”</span>
            </h3>
            <div className="about__description">
              <p className="about__description-p">
                Currently we have 121 dogs and 342 cats on our hands and
                statistics show that only 20% of them will find a family. The
                others will continue to live with us and will be waiting for a
                lucky chance to become dearly loved.
              </p>
              <p className="about__description-p p2">
                We feed our wards with the best food and make sure that they do
                not get sick, feel comfortable (including psychologically) and
                well. We are supported by 87 volunteers and 28 employees of
                various skill levels. About 12% of the animals are taken by the
                shelter staff. Taking care of the animals, they become attached
                to the pets and would hardly ever leave them alone.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
