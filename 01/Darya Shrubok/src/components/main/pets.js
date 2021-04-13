import React from "react";
import "./pets.css";

const pets = [
  { name: "Katrine", img: "/assets/images/pets-katrine.png" },
  { name: "Jennifer", img: "/assets/images/pets-jennifer.png" },
  { name: "Woody", img: "/assets/images/pets-woody.png" },
];

class Pets extends React.Component {
  render() {
    return (
      <div className="pets" id="pets">
        <div className="pets__wrapper">
          <h3 className="pets__title">
            <span>Our friends who</span>
            <span>are looking for a house</span>
          </h3>
          <div className="pets__content">
            <button className="slider-button">
              <img src="/assets/icons/Arrow.svg" alt="Left arrow" />
            </button>
            <div className="pets-cards">
              {pets.map((item, i) => {
                return (
                  <div className="pets-cards__item" key={i}>
                    <img
                      src={item.img}
                      alt={item.name}
                      className="pets-cards__image"
                    />
                    <div className="pets-cards__content">
                      <h4 className="pets-cards__title">{item.name}</h4>
                      <button className="pets-cards__button">Learn more</button>
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="slider-button_reverted">
              <img src="/assets/icons/Arrow2.svg" alt="Right arrow" />
            </button>
          </div>
          <button className="pets__button">Get to know the rest</button>
        </div>
      </div>
    );
  }
}

export default Pets;
