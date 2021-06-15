import c from "./Header.module.scss";

const Header = (props) => {
  return (
    <div className={c.header}>
      <a className={c.logo} href="#s">
        MyFreedomIT
      </a>
      <nav>
        <ul>
          <li>
            <a href="#s">Home</a>
          </li>
          <li>
            <a href="#s">Services</a>
          </li>
          <li>
            <a href="#s">Work</a>
          </li>
          <li>
            <a href="#s">About</a>
          </li>
        </ul>
      </nav>
      <a href="tel:(01) 666 - 693 - 456">(01) 666 - 693 - 456</a>
    </div>
  );
};

export default Header;
