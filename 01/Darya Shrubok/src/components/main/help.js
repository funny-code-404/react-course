import React from "react";
import "./help.css";

const items = [
  { value: "Pet food", img: "/assets/icons/icon-pet-food.svg" },
  { value: "Transportation", img: "/assets/icons/icon-transportation.svg" },
  { value: "Toys", img: "/assets/icons/icon-toys.svg" },
  { value: "Bowls and cups", img: "/assets/icons/icon-bowls-and-cups.svg" },
  { value: "Shampoos", img: "/assets/icons/icon-shampoos.svg" },
  { value: "Vitamins", img: "/assets/icons/icon-vitamins.svg" },
  { value: "Medicines", img: "/assets/icons/icon-medicines.svg" },
  { value: "Collars and leashes", img: "/assets/icons/icon-collars-leashes.svg" },
  { value: "Sleeping areas", img: "/assets/icons/icon-sleeping-area.svg" },
];

class Help extends React.Component {
  render() {
    return (
      <div className="help" id="help">
        <div className="help__wrapper">
          <h3 className="help__title">
            <span>How you can help</span>
            <span>our shelter</span>
          </h3>
          <div className="help__content">
            {items.map((item, i) => {
              return (
                <div className="help__item" key={i}>
                  <img
                    src={item.img}
                    alt={item.value}
                    className="help__item-icon"
                  />
                  <h4 className="help__item-title">{item.value}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Help;
