import React from "react";

import Card from "../Card/Card";
import "./listItem.scss";

export default function ListItem({ cards }) {
  const listElement = cards.map((card) => (
    <li className="card-li" key={card?.id}>
      <Card card={card} />
    </li>
  ));
  return <ul style={{display: "flex"}}>{listElement}</ul>;
}