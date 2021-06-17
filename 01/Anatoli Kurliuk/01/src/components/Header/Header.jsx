import {
  aboutLink,
  homeLink,
  logo,
  servicesLink,
  tel,
  workLink,
} from "./config";
import c from "./Header.module.scss";

const Header = (props) => {
  return (
    <div className={c.header}>
      <a className={c.logo} href="#s">
        {logo}
      </a>
      <nav>
        <ul>
          <li>
            <a href="#s">{homeLink}</a>
          </li>
          <li>
            <a href="#s">{servicesLink}</a>
          </li>
          <li>
            <a href="#s">{workLink}</a>
          </li>
          <li>
            <a href="#s">{aboutLink}</a>
          </li>
        </ul>
      </nav>
      <a href="tel:(01) 666 - 693 - 456">{tel}</a>
    </div>
  );
};

export default Header;
