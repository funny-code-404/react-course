import "./styles.css";
import React from "react";

class Header extends React.Component {
  render() {
    return (
        <header>
            <div className="container">
                <h1>Localize</h1>
                <p>Insert some random text here</p>
            </div>
        </header>
    );
  }
}

export default Header;