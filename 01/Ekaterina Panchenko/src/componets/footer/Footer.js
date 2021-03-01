import React from "react";
import "./footer.scss";

export const Footer = ({ footerContact }) => (
  <footer className="footer">
    {footerContact.map(({ name, id }) => (
      <div key={id} className="footer__contact">
        <img src={name} alt="not found"></img>
      </div>
    ))}
  </footer>
);
