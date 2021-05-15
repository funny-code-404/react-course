import "./styles.css";
import React from "react";

const contacts = [
  {
    name: "Email",
    value: "email@shelter.com",
    href: "mailto:email@shelter.com",
    img: "/assets/icons/icon-email.svg",
    class: "footer__contacts-mail",
  },
  {
    name: "Phone",
    value: "+13 674 567 75 54",
    href: "tel:+13 674 567 75 54",
    img: "/assets/icons/icon-phone.svg",
    class: "footer__contacts-phone",
  },
];

const addresses = [
  {
    class: "footer__locations-address-1",
    address: "1 Central Street, Boston",
    href: "https://goo.gl/maps/6YcRFEE37Yg6pw436",
  },
  {
    class: "footer__locations-address-2",
    address: "18 South Park, London",
    href: "https://goo.gl/maps/sbM9KpWbqKqaF9TNA",
  },
];

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

              {contacts.map((item, i) => {
                return (
                  <div className={item.class} key={i}>
                    <a href={item.href} className={item.class + "-icon"}>
                      <img src={item.img} alt={item.name} />
                    </a>
                    <a className={item.class + "-text"} href={item.href}>
                      {item.value}
                    </a>
                  </div>
                );
              })}
            </div>

            <div className="footer__locations">
              <h3 className="footer__locations-title">
                <span>We are waiting</span>
                <span>for your visit</span>
              </h3>

              {addresses.map((item, i) => {
                return (
                  <div
                    className={"footer__locations-address " + item.class}
                    key={i}
                  >
                    <img
                      src="/assets/icons/icon-marker.svg"
                      alt="Marker"
                      className="footer__locations-marker"
                    />
                    <a
                      className="footer__locations-address-text"
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.address}
                    </a>
                  </div>
                );
              })}             
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
