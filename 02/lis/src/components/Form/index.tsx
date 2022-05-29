import { ChangeEvent } from "react";
import "../Style/styles.scss";
export type Props = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Form = ({ onChange, value }: Props) => (
  <div className="header">
    <h2 className="hotel__title"> Homes guests loves</h2>
    <input
      className="search__hotel"
      value={value}
      name="input"
      onChange={onChange}
      placeholder=" Search hotel"
    />
  </div>
);

export default Form;
