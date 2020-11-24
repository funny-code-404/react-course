import React from "react";

import "./card.scss";

class Card extends React.Component {
  render() {
    const card = this.props.card

    return (
      <div className="card">
        <div className="card-title">
          <h2>{card.title}</h2>
        </div>
        <div className="card-body">
          <img src={card.img} alt="" className="card-img"></img>
          <div>{card.text}</div>
        </div>
      </div>
    );
  }
}

export default Card;