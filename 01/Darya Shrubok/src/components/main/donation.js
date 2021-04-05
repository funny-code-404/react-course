import React from "react";
import "./donation.css";

class Donation extends React.Component {
  render() {
    return (
      <div className="donation">
        <div className="donation__wrapper">
          <div className="donation__image-wrapper">
            <img
              src="/assets/images/donation-dog.png"
              alt="Donation dog"
              className="donation__image"
            />
          </div>
          <div className="donation__content">
            <h3 className="donation__title">
              <span>You can also</span>
              <span>make a donation</span>
            </h3>
            <h5 className="donation__subtitle">
              Name of the bank / Type of bank account
            </h5>
            <button className="donation__payment">
              <img
                src="/assets/icons/credit-card.svg"
                alt="Credit card"
                className="donation__payment-icon"
              />
              <a className="donation__payment-text" href="#about">
                8380 2880 8028 8791 7435
              </a>
            </button>
            <p className="donation__description">
              Legal information and lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed
              ac diam. Praesent ultrices maximus tortor et vulputate. Interdum
              et malesuada fames ac ante ipsum primis in faucibus.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Donation;
