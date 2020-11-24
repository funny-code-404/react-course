import React from "react";

//Styles
import "./header.scss";

export class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="d-flex pt-2 pl-1">
          <i className="fas fa-spider fa-2x"></i>
          <p className="title pl-1">
            Spider_<span>Corp</span>
          </p>
        </div>
      </header>
    );
  }
}