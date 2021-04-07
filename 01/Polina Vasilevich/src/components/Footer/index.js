import PropTypes from "prop-types";

import "./styles.scss";

Footer.propTypes = {
  contacts: PropTypes.array,
};

Footer.defaultProps = {
  contacts: [
    {
      icon: "",
      href: "/",
    },
  ],
};

export default function Footer(props) {
  const { contacts } = props;

  return (
    <footer className="footer">
      <div className="footer__contacts">
        {contacts.map(({ icon, href }, index) => (
          <a key={index} className="contacts__item" href={href}>
            {icon}
          </a>
        ))}
      </div>
    </footer>
  );
}
