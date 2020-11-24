//Core
import React, {Component} from "react";

//Style
import "./header.scss";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <p>Welcome to our site!</p>
        <nav className='nav'>
            <a href="https://ru.reactjs.org/" target=' _blank'>React</a>
            <a href="https://parceljs.org/" target='_blank'>Parcel</a>
            <a href="https://bootstrap-4.ru/" target='_blank'>Bootstrap</a>
        </nav>
      </div>
    );
  }
}
