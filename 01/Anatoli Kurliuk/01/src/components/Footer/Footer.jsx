import { logo } from "../Header/config";
import { footerText } from "./config";
import c from "./Footer.module.scss";

const Footer = (props) => {
  return <div className={c.footer}>
    <a className={c.logo} href="#s">{logo}</a>
    <a href="#s">{footerText}</a>
  </div>
};

export default Footer;