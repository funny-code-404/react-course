import React from "react";
import "./footer.scss";

export const Footer = ({ footerContact }) => (
  <footer className="footer">
    {footerContact.map((item, index) => (
      <div key={index} className="footer__contact">
        <img src={item} alt="not found"></img>
      </div>
    ))}
  </footer>
);
