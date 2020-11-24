//Core
import React, { Component } from "react";

//Style
import "./Card.scss";

export class Card extends Component {
  render() {
    const card = this.props.card;
    return (
      <div className="card">
        <div className="card-header">
          <h4>{card.title}</h4>
        </div>
        <div className="card-body">
          <img src={card.img} alt=""></img>
        </div>
        <section className="card-text">{card.text}</section>
      </div>
    );
  }
}
