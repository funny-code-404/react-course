//Core
import React, { Component } from "react";

//Style
import "./SideBar.scss";

export class SideBar extends Component {
  render() {
    const data = this.props.data;
    return (
      <ul className="slide-bar__ul">
        {data.map((item) => (
          <li key={item?.id}>{item?.label}</li>
        ))}
      </ul>
    );
  }
}
