//Core
import React from "react";
import { Card } from "../Card";

//Style
import "./ListItem.scss";

export default function ListItem({ cards }) {
  const listElement = cards.map((card) => (
    <li key={card?.id}>
      <Card card={card} />
    </li>
  ));
  return <ul className="list-item__ul">{listElement}</ul>;
}
