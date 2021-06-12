import React from "react";
import c from "./Footer.module.css";

const Footer = (props) => {
  return (
    <footer className={c.footer}>
      <div className={c.text}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
          similique, ipsam libero at harum facere, vel ad consequuntur rerum
          laboriosam sit eveniet distinctio fugiat quo?
        </p>
      </div>
      <div className={c.links}>
        <a href="#">SUPPORT</a>
        <a href="#">LINKS</a>
        <a href="#">MAP</a>
      </div>
    </footer>
  );
};

export default Footer;
