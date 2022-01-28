import React from "react";
import {vk_link, instagram_link, facebook_link, phone_num1, phone_num2} from "../consts"
import "./footer-style.css";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="second-container">
            <a href="#">
              <img src={require("../images/logo.svg").default} width={200} />
            </a>
            <div className="contacts">
            <h3>КОНТАКТЫ</h3>
            <p><a href="tel:{phone_num1}">{phone_num1}</a></p>
            <p><a href="tel:{phone_num2}">{phone_num2}</a></p>
            </div>
            <div className="social-network">
              <h3>МЫ В СОЦСЕТЯХ</h3>
              <div className="social-network-icons">
                <a target="_blank" href={instagram_link}>
                  <img
                    src={require("../images/icon-instagram.svg").default}
                    width={40}
                  />
                </a>
                <a target="_blank" href={facebook_link}>
                  <img
                    src={require("../images/icon-facebook.svg").default}
                    width={40}
                  />
                </a>
                <a target="_blank" href={vk_link}>
                  <img
                    src={require("../images/icon-vk.svg").default}
                    width={40}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
