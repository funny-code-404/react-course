import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./styles.scss";

Header.propTypes = {
  routes: PropTypes.array,
};

Header.defaultProps = {
  routes: [{ path: "", label: "" }],
};

export default function Header(props) {
  const { routes } = props;
  return (
    <header className="header">
      <nav>
        <ul className="list header__list">
          {routes.map(({ path, label }) => (
            <Link key={path} to={path} className="list__item">
              {label && label[0].toUpperCase() + label.slice(1).toLowerCase()}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}
