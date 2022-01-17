import React from "react";
import "./style.css";
class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="info">
          <h2>Company name</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            deserunt dolorem, necessitatibus accusantium tempore similique unde
            non numquam asperiores eum nihil repellat quasi quisquam obcaecati
            adipisci autem maxime quis! Rerum?
          </p>
        </div>
        <div className="contacts">
          <h2>Contacts</h2>
          <p>
            <a href="mailto:Company@gmail.com">Company@gmail.com</a>
          </p>
          <p>
            <a href="tel:+1234567890">+123 456 78 90</a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
