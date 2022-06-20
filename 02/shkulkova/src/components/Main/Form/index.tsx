import { ChangeEvent } from "react";

type Props = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Form = ({ onChange }: Props) => (
  <div className="search__form">
    <h1 className="search__form title">Available hotels</h1>
    <input className="search__form input" name="name" onChange={onChange} placeholder="Your destination or hotel name" />
  </div>
);

export default Form;
