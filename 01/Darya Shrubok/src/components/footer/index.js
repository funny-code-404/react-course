import "./styles.css";
import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer" id="contacts">
        <div className="footer__wrapper">
          <div className="footer__content">
            <div className="footer__contacts">
              <h3 className="footer__contacts-title">
                <span>For questions</span>
                <span>and suggestions</span>
              </h3>
              <div className="footer__contacts-mail">
                <a
                  href="mailto:email@shelter.com"
                  className="footer__contacts-mail-icon"
                >
                  <img src="/assets/icons/icon-email.svg" alt="Email" />
                </a>
                <a
                  className="footer__contacts-mail-text"
                  href="mailto:email@shelter.com"
                >
                  email@shelter.com
                </a>
              </div>
              <div className="footer__contacts-phone">
                <a
                  href="tel:+13 674 567 75 54"
                  className="footer__contacts-phone-icon"
                >
                  <img src="/assets/icons/icon-phone.svg" alt="Phone" />
                </a>
                <a
                  className="footer__contacts-phone-text"
                  href="tel:+13 674 567 75 54"
                >
                  +13 674 567 75 54
                </a>
              </div>
            </div>
            <div className="footer__locations">
              <h3 className="footer__locations-title">
                <span>We are waiting</span>
                <span>for your visit</span>
              </h3>
              <div className="footer__locations-address footer__locations-address-1">
                <img
                  src="/assets/icons/icon-marker.svg"
                  alt="Marker"
                  className="footer__locations-marker"
                />
                <a
                  className="footer__locations-address-text"
                  href="https://goo.gl/maps/6YcRFEE37Yg6pw436"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>1 Central Street, Boston</span>
                  <span>(entrance from the store)</span>
                </a>
              </div>
              <div className="footer__locations-address footer__locations-address-2">
                <img
                  src="/assets/icons/icon-marker.svg"
                  alt="Marker"
                  className="footer__locations-marker"
                />
                <a
                  className="footer__locations-address-text"
                  href="https://goo.gl/maps/sbM9KpWbqKqaF9TNA"
                  target="_blank"
                  rel="noreferrer"
                >
                  18 South Park, London{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="footer__image-wrapper">
            <img
              src="/assets/images/footer-puppy.png"
              alt="Footer puppy"
              className="footer__image"
            />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
