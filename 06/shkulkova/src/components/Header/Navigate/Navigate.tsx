import { Link } from "react-router-dom";

const Navigate = () => {
  return (
    <div className="header_container">
        <nav className="header_nav">
          <img className="nav_logo" src="/assets/icons/icon-logo.svg" alt="#" />
          <div className="nav_menu">
            <a className="nav_link nav_link-active">Stays</a>
            <a className="nav_link">Attractions</a>
            <a href="">
              <img
                className="nav_switch"
                src="/assets/icons/icon-theme-swith.png"
                alt="#"
              />
            </a>
            <a href="">
              <img
                className="nav_signin"
                src="/assets/icons/icon-sign-in.svg"
                alt="#"
              />
            </a>
          </div>
        </nav>
    </div>
  );
};

export default Navigate;
