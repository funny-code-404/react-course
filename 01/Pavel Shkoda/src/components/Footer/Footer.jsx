import React from "react";
import { CONTENT_TEXT, E_MAIL, PHONE } from "../Content/Content";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div>
          <p>&copy; {CONTENT_TEXT}</p>
        </div>
        <div className="footer-text">
          <p>E-mail: {E_MAIL}</p>
          <p>Tel: {PHONE}</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
