import { useState, ChangeEvent } from "react";
import data from "../../../data";
import Form from "../Form";
import Hotels from "../Hotels";

export const FormCards = () => {
  const [cards, filterCards] = useState(data);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    filterCards(
      data.filter((card) =>
        (card.name + card.city + card.country).toUpperCase().includes(e.target.value.toUpperCase())
      )
    );
  };

  return (
    <div>
      <Form onChange={onChange} />
      <Hotels cards={cards} />
    </div>
  );
};
