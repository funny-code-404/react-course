import c from "./Footer.module.scss";

const Footer = (props) => {
  return <div className={c.footer}>
    <a className={c.logo} href="#s">MyFreedomIT</a>
    <a href="#s">© 2021 Anatoli Kurliuk. All right reserved.</a>
  </div>
};

export default Footer;
